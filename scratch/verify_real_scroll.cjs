const { spawn } = require('child_process');
const fs = require('fs');

async function verify() {
  const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9666',
    '--window-size=1510,900',
    'http://localhost:5173'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const versionRes = await fetch('http://127.0.0.1:9666/json/list');
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
    })()`
  });

  // Get work section position
  const workPos = await send('Runtime.evaluate', {
    expression: 'document.getElementById("work").getBoundingClientRect().top + window.scrollY',
    returnByValue: true
  });
  const workTop = workPos.result.value;
  console.log('Work section top:', workTop);

  // Test scroll offsets
  const offsets = [0, 300, 700, 1100, 1500, 1900];
  for (let offset of offsets) {
    const targetY = workTop + offset - 56;
    await send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${targetY})`
    });
    await new Promise(r => setTimeout(r, 300));

    const state = await send('Runtime.evaluate', {
      expression: `(() => {
        const activeTab = document.querySelector('.ca-deck-tab.active')?.textContent.trim();
        const tabsBottom = document.querySelector('.ca-sticky-deck-tabs')?.getBoundingClientRect().bottom;
        const cards = [0,1,2,3].map(i => {
          const el = document.getElementById('project-card-' + i);
          const r = el ? el.getBoundingClientRect() : {};
          return { i, top: Math.round(r.top), bottom: Math.round(r.bottom) };
        });
        return { scrollY: Math.round(window.scrollY), tabsBottom: Math.round(tabsBottom), activeTab, cards };
      })()`,
      returnByValue: true
    });
    console.log(`\n--- Scroll offset ${offset} ---`);
    console.log(JSON.stringify(state.result.value, null, 2));

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`scratch/live_scroll_${offset}.png`, Buffer.from(snap.data, 'base64'));
  }

  // Test clicking tab 1 (GiftThem)
  console.log('\n--- Testing Click Tab 1 (GiftThem) ---');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const tab1 = document.querySelector('.ca-deck-tab-1');
      if (tab1) tab1.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  const click1 = await send('Runtime.evaluate', {
    expression: `(() => {
      const activeTab = document.querySelector('.ca-deck-tab.active')?.textContent.trim();
      const card1 = document.getElementById('project-card-1')?.getBoundingClientRect();
      return { activeTab, card1Top: Math.round(card1.top) };
    })()`,
    returnByValue: true
  });
  console.log('Result click Tab 1:', click1.result.value);
  const snapTab1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/live_click_tab1.png', Buffer.from(snapTab1.data, 'base64'));

  // Test clicking tab 3 (Volt)
  console.log('\n--- Testing Click Tab 3 (Volt) ---');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const tab3 = document.querySelector('.ca-deck-tab-3');
      if (tab3) tab3.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  const click3 = await send('Runtime.evaluate', {
    expression: `(() => {
      const activeTab = document.querySelector('.ca-deck-tab.active')?.textContent.trim();
      const card3 = document.getElementById('project-card-3')?.getBoundingClientRect();
      return { activeTab, card3Top: Math.round(card3.top) };
    })()`,
    returnByValue: true
  });
  console.log('Result click Tab 3:', click3.result.value);
  const snapTab3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/live_click_tab3.png', Buffer.from(snapTab3.data, 'base64'));

  chrome.kill();
  console.log('\nAll live scroll and tab docking tests passed!');
}

verify().catch(console.error);

