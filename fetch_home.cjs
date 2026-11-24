const fs = require('fs');

async function main() {
  const res = await fetch('https://portfoliofy.io/preview/creative-artsy');
  const html = await res.text();
  fs.writeFileSync('template_home.html', html);
  const match = html.match(/<section[^>]*>([\s\S]*?)<\/section>/);
  if (match) {
    console.log(match[0].slice(0, 1500));
  } else {
    console.log('No section found, looking for my name is:');
    const idx = html.indexOf('my name is');
    if (idx !== -1) {
      console.log(html.slice(idx - 400, idx + 400));
    }
  }
}

main().catch(console.error);
