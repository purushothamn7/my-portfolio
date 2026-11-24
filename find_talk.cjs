const fs = require('fs');
const js = fs.readFileSync('C:/Users/purus/.gemini/antigravity-ide/brain/292072ad-7a76-4f6d-aa7d-14cdcc47c8b1/scratch/matched_0sld3pygc3zig.js', 'utf8');

const idx = js.indexOf("LET'S TALK");
console.log('Idx of LETS TALK:', idx);
if (idx !== -1) {
  console.log(js.slice(Math.max(0, idx - 1200), idx + 2000));
}
