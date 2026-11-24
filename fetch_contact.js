const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (err) => resolve({ status: 500, data: '' }));
  });
}

async function run() {
  const res = await fetch('https://portfoliofy.io/preview/creative-artsy/contact');
  console.log('Contact page status:', res.status, 'len:', res.data.length);
  fs.writeFileSync('C:/Users/purus/Downloads/pf/contact_page.html', res.data);
  
  // Find scripts and text in contact page
  const mainMatch = res.data.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (mainMatch) {
    console.log('Main snippet:\n', mainMatch[0].slice(0, 2000));
  }
}

run();
