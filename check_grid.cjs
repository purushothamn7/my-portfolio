const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');
const regex = /class="[^"]*ca-grid[^"]*"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}
