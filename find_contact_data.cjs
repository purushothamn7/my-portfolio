const fs = require('fs');
const js = fs.readFileSync('C:/Users/purus/.gemini/antigravity-ide/brain/292072ad-7a76-4f6d-aa7d-14cdcc47c8b1/scratch/matched_2377xpemicneq.js', 'utf8');

const idx = js.indexOf('contact:');
console.log('Idx of contact:', idx);
if (idx !== -1) {
  console.log(js.slice(idx, idx + 1500));
}
