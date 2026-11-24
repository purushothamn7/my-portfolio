const fs = require('fs');
const readline = require('readline');

async function find() {
  const stream = fs.createReadStream('C:/Users/purus/.gemini/antigravity/brain/b27d4779-fa3f-4f8d-bf14-f93151330709/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: stream });
  for await (const line of rl) {
    if (line.includes('"step_index":') && line.includes('ScrollTrigger.create')) {
      const parsed = JSON.parse(line);
      console.log('Step', parsed.step_index);
      if (parsed.content) console.log(parsed.content.substring(0, 500));
      if (parsed.tool_calls) console.log(JSON.stringify(parsed.tool_calls, null, 2).substring(0, 500));
    }
  }
}
find();
