const fs = require('fs');
const readline = require('readline');

async function find342() {
  const stream = fs.createReadStream('C:/Users/purus/.gemini/antigravity-ide/brain/f9080312-0686-4c5d-922c-129ac0eb90a2/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  for await (const line of rl) {
    if (line.includes('"step_index":342')) {
      const obj = JSON.parse(line);
      console.log('Step 342 content:\n', obj.content);
    }
  }
}
find342();

