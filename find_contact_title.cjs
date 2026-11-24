const fs = require('fs');
const files = fs.readdirSync('C:/Users/purus/.gemini/antigravity-ide/brain/292072ad-7a76-4f6d-aa7d-14cdcc47c8b1/scratch');

for (const f of files) {
  if (f.endsWith('.js') && f.startsWith('matched_')) {
    const js = fs.readFileSync('C:/Users/purus/.gemini/antigravity-ide/brain/292072ad-7a76-4f6d-aa7d-14cdcc47c8b1/scratch/' + f, 'utf8');
    const idx = js.indexOf('contact.title');
    if (idx !== -1) {
      console.log('Found contact.title in', f);
      console.log(js.slice(Math.max(0, idx - 500), idx + 2500));
    }
  }
}
