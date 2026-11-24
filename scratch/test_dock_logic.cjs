const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

async function testDock() {
  const fileUrl = 'file:///' + path.resolve('scratch/test_dock_tabs_and_scroll.html').replace(/\\/g, '/');
  const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9555',
    '--window-size=1510,900',
    fileUrl
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const versionRes = await fetch('http://127.0.0.1:9555/json/list');
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
  await new Promise(r => setTimeout(r, 1000));

  const workTop = (await send('Runtime.evaluate', {
    expression: 'document.querySelector(".ca-projects-stack-container").getBoundingClientRect().top + window.scrollY',
    returnByValue: true
  })).result.value;

  console.log('Work container top:', workTop);

  for (let offset of [0, 200, 500, 800, 1200, 1600]) {
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${workTop + offset - 56})`
    });
    await new Promise(r => setTimeout(r, 200));

    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const tabs = Array.from(document.querySelectorAll('.ca-deck-tab')).map(t => ({
          text: t.textContent.trim(),
          active: t.classList.contains('active')
        }));
        const cards = [0,1,2,3].map(i => {
          const c = document.getElementById('proj-' + i);
          const r = c.getBoundingClientRect();
          return { i, top: Math.round(r.top), bottom: Math.round(r.bottom) };
        });
        return { tabs, cards };
      })()`,
      returnByValue: true
    });
    console.log(`\nOffset ${offset}: active tab =`, info.result.value.tabs.find(t => t.active)?.text);
    console.log(`Cards:`, info.result.value.cards);

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`scratch/dock_snap_${offset}.png`, Buffer.from(snap.data, 'base64'));
  }

  // Test goToCard(2) click
  console.log('\nTesting goToCard(2)...');
  await send('Runtime.evaluate', { expression: 'goToCard(2)' });
  await new Promise(r => setTimeout(r, 800));
  const clickInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const activeTab = document.querySelector('.ca-deck-tab.active')?.textContent.trim();
      const card2Rect = document.getElementById('proj-2').getBoundingClientRect();
      return { activeTab, card2Top: Math.round(card2Rect.top) };
    })()`,
    returnByValue: true
  });
  console.log('After clicking Card 2:', clickInfo.result.value);

  chrome.kill();
  console.log('Test finished.');
}
testDock().catch(console.error);

