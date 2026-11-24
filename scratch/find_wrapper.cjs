const fs = require('fs');
const html = fs.readFileSync('scratch/work_section_template.html', 'utf8');

const artIdx = html.indexOf('<article');
const beforeArt = html.substring(0, artIdx);
console.log('Right before first article:\n', beforeArt.substring(beforeArt.lastIndexOf('<div')));

