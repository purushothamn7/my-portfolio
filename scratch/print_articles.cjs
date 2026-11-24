const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

const regex = /<article data-pf-block="case_studies\.items\.([0-9])"([\s\S]*?)<\/article>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('================ ITEM ' + m[1] + ' ================');
  console.log(m[0]);
}
