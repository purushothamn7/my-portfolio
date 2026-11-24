const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

// Find all CSS rules related to work or case_studies or sticky in the inline or linked chunks?
// Wait, template_home.html has Tailwind classes!
// Let's inspect the exact HTML of the 4 items:
const items = [...html.matchAll(/<article data-pf-block="case_studies\.items\.([0-9])"([^>]*)>([\s\S]*?)<\/article>/g)];

items.forEach(item => {
  console.log('ITEM', item[1]);
  console.log('Article class:', item[2]);
  // get the tab div
  const tabDiv = item[3].match(/<div class="flex"[^>]*>([\s\S]*?)<\/div>/);
  if (tabDiv) {
    console.log('Tab outer:', tabDiv[0].substring(0, 400));
  }
  // get the body div
  const bodyDiv = item[3].match(/<div class="grid[^"]*"[^>]*>/);
  if (bodyDiv) {
    console.log('Body outer:', bodyDiv[0]);
  }
});
