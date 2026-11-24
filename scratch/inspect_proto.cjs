const { spawn } = require('child_process');
const path = require('path');

async function inspectProto() {
  const fileUrl = 'file:///' + path.resolve('scratch/test_sticky_stack.html').replace(/\\/g, '/');
  const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9444',
    '--window-size=1510,900',
    fileUrl
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const versionRes = await fetch('http://127.0.0.1:9444/json/list');
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
    expression: 'document.querySelector(".work-section").getBoundingClientRect().top + window.scrollY',
    returnByValue: true
  })).result.value;

  for (let offset of [0, 400, 800, 1200]) {
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${workTop + offset - 72})`
    });
    await new Promise(r => setTimeout(r, 200));
    const cardRects = await send('Runtime.evaluate', {
      expression: `(() => {
        return [0,1,2,3].map(i => {
          const el = document.getElementById('card-' + i);
          const r = el.getBoundingClientRect();
          return { i, top: Math.round(r.top), bottom: Math.round(r.bottom) };
        });
      })()`,
      returnByValue: true
    });
    console.log(`Offset ${offset}:`, cardRects.result.value);
  }

  chrome.kill();
}
inspectProto().catch(console.error);

