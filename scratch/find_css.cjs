const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

// Find all css files mentioned
const cssMatches = html.match(/href="(\/_next\/static\/immutable\/chunks\/[^"]+\.css)"/g);
console.log('CSS files:', cssMatches);

