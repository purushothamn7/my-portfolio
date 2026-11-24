const { spawn } = require('child_process');
const fs = require('fs');

async function capture() {
  const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9333',
    '--window-size=1510,900',
    'http://localhost:5173'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const versionRes = await fetch('http://127.0.0.1:9333/json/list');
  const targets = await versionRes.json();
  const pageTarget = targets.find(t => t.type === 'page');
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    const listener = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', listener);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', listener);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  await new Promise(r => setTimeout(r, 2000));

  // Dismiss splash if present
  await send('Runtime.evaluate', {
    expression: `(() => {
      const splash = document.querySelector('.ca-splash-overlay');
      if (splash) splash.remove();
      const el = document.getElementById('work');
      return el ? (el.getBoundingClientRect().top + window.scrollY) : 0;
    })()`,
    returnByValue: true
  }).then(res => console.log('Work section top:', res.result.value));

  const posRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('work') || document.querySelector('.ca-projects-stack-container');
      return el ? (el.getBoundingClientRect().top + window.scrollY) : 0;
    })()`,
    returnByValue: true
  });
  const workTop = posRes.result.value;
  console.log('Target top:', workTop);

  for (let offset of [0, 400, 800, 1200, 1800, 2400]) {
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${workTop + offset})`
    });
    await new Promise(r => setTimeout(r, 600));
    const activeTab = await send('Runtime.evaluate', {
      expression: `(() => {
        const active = document.querySelector('.ca-deck-tab.active');
        const cards = Array.from(document.querySelectorAll('.ca-stack-card-slot')).map((c, i) => {
          const style = window.getComputedStyle(c);
          return { i, opacity: style.opacity, visibility: style.visibility, transform: style.transform };
        });
        return { tab: active ? active.textContent.trim() : 'none', cards };
      })()`,
      returnByValue: true
    });
    console.log(`Offset ${offset}:`, JSON.stringify(activeTab.result.value));
    
    const snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`scratch/snap_${offset}.png`, Buffer.from(snap.data, 'base64'));
  }

  chrome.kill();
  console.log('Screenshots complete.');
}
capture().catch(err => {
  console.error(err);
  process.exit(1);
});

