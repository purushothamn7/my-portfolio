const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

const p0 = html.indexOf('bio.photo.0');
const p1 = html.indexOf('bio.photo.1');

console.log('PHOTO 0:');
console.log(html.slice(p0, p0 + 1200));

console.log('PHOTO 1:');
console.log(html.slice(p1, p1 + 1200));
