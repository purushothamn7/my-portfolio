const fs = require('fs');

const html = fs.readFileSync('template_home.html', 'utf8');

// Find style or link tags
const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
if (styleMatches) {
  for (const s of styleMatches) {
    if (s.includes('ca-grid') || s.includes('repeating-linear-gradient')) {
      console.log('Found in style tag:', s.slice(0, 500));
    }
  }
}

// Let's check the hero section HTML structure in detail
const heroMatch = html.match(/<section[^>]*class="[^"]*ca-grid[^"]*"[^>]*>([\s\S]*?)<\/section>/);
if (heroMatch) {
  console.log('HERO SECTION FULL HTML:');
  console.log(heroMatch[0].slice(0, 3000));
}
