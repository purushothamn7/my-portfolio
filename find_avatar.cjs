const fs = require('fs');
const js = fs.readFileSync('C:/Users/purus/.gemini/antigravity-ide/brain/292072ad-7a76-4f6d-aa7d-14cdcc47c8b1/scratch/matched_0sld3pygc3zig.js', 'utf8');

const idx = js.indexOf('Open to contract work');
console.log('Idx of Open to contract:', idx);
if (idx !== -1) {
  console.log(js.slice(Math.max(0, idx - 2500), idx + 200));
}
