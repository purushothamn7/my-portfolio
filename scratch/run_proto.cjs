const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function testHtml() {
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

  const posRes = await send('Runtime.evaluate', {
    expression: 'document.querySelector(".work-section").getBoundingClientRect().top + window.scrollY',
    returnByValue: true
  });
  const workTop = posRes.result.value;
  console.log('Work top:', workTop);

  for (let offset of [0, 200, 500, 800, 1100, 1400]) {
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${workTop + offset - 72})`
    });
    await new Promise(r => setTimeout(r, 300));
    const snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`scratch/proto_${offset}.png`, Buffer.from(snap.data, 'base64'));
    console.log(`Saved scratch/proto_${offset}.png`);
  }

  chrome.kill();
  console.log('Prototype test done.');
}
testHtml().catch(console.error);

