const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

const regex = /<article data-pf-block="case_studies\.items\.([0-9])"([^>]*)>([\s\S]*?)<\/article>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('=== ITEM ' + m[1] + ' ===');
  console.log('Article attrs:', m[2]);
  const content = m[3];
  const tabMatch = content.match(/<div class="flex"[^>]*style="([^"]*)"[^>]*>([\s\S]*?)<\/div>/);
  if (tabMatch) {
    console.log('Tab style:', tabMatch[1]);
    console.log('Tab HTML snippet:', tabMatch[2].substring(0, 300));
  }
}

// Also let's check the container around the articles
const containerMatch = html.match(/class="[^"]*flex flex-col[^"]*"[^>]*>/);
if (containerMatch) {
  console.log('Container:', containerMatch[0]);
}

// Check CSS classes for work/case studies
const workSection = html.match(/<section id="work"[\s\S]*?<\/section>/);
if (workSection) {
  console.log('Work section start:', workSection[0].substring(0, 500));
  console.log('Work section end:', workSection[0].substring(workSection[0].length - 500));
}
