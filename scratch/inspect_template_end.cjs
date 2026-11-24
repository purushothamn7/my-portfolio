const fs = require('fs');
const html = fs.readFileSync('template_home.html', 'utf8');

// Search for work section CSS classes
const match = html.match(/<section id="work"[\s\S]*?<\/section>/);
if (match) {
  const section = match[0];
  console.log('Section tag:', section.match(/<section[^>]*>/)[0]);
  
  // Articles container
  const containerMatch = section.match(/<div class="([^"]*flex flex-col[^"]*)"/);
  console.log('Articles container class:', containerMatch ? containerMatch[1] : 'not found');
  
  // What is after article 3?
  const afterLastArticle = section.substring(section.lastIndexOf('</article>') + 10);
  console.log('After last article:', afterLastArticle);
}

