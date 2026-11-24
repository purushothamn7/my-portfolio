const fs = require('fs');
const html = fs.readFileSync('C:/Users/purus/Downloads/pf/contact_page.html', 'utf8');

const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (mainMatch) {
  fs.writeFileSync('C:/Users/purus/Downloads/pf/contact_main.html', mainMatch[0]);
  console.log('Saved contact_main.html, length:', mainMatch[0].length);
}

// Also let's extract the photos and text
console.log('--- ALL IMAGES IN CONTACT ---');
const imgs = html.match(/<img[^>]+>/g) || [];
imgs.forEach(img => console.log(img));

console.log('--- FORMS / BUTTONS ---');
const btns = html.match(/<button[^>]*>[\s\S]*?<\/button>/g) || [];
btns.forEach(b => console.log(b));
