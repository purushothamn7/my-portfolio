const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

const match = html.match(/<section id="work"[\s\S]*?<\/section>/);
if (match) {
  // Let's format it cleanly
  fs.writeFileSync('scratch/work_section_template.html', match[0]);
  console.log('Saved to scratch/work_section_template.html. Size:', match[0].length);
}
