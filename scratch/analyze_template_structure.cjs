const fs = require('fs');
const html = fs.readFileSync('scratch/work_section_template.html', 'utf8');

// Let's inspect the structure of the 4 articles
const articles = html.match(/<article[\s\S]*?<\/article>/g);
console.log('Total articles in template:', articles.length);

articles.forEach((art, i) => {
  console.log(`\n========== ARTICLE ${i} ==========`);
  const tagClass = art.match(/<article[^>]*class="([^"]*)"/);
  console.log('Article class:', tagClass ? tagClass[1] : 'none');
  
  const tabWrapper = art.match(/<div class="flex"[^>]*style="([^"]*)"[^>]*>/);
  console.log('Tab wrapper style:', tabWrapper ? tabWrapper[1] : 'none');

  const tabSpan = art.match(/<span class="ca-mono[^"]*"[^>]*style="([^"]*)"[^>]*>([\s\S]*?)<\/span>/);
  if (tabSpan) {
    console.log('Tab span style:', tabSpan[1]);
    console.log('Tab span class:', tabSpan[0].match(/class="([^"]*)"/)[1]);
  }

  const cardBody = art.match(/<div class="grid grid-cols-1[^"]*"[^>]*style="([^"]*)"[^>]*>/);
  if (cardBody) {
    console.log('Card body style:', cardBody[1]);
    console.log('Card body class:', cardBody[0].match(/class="([^"]*)"/)[1]);
  }
});

