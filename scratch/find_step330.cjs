const fs = require('fs');
const readline = require('readline');

async function find330() {
  const stream = fs.createReadStream('C:/Users/purus/.gemini/antigravity-ide/brain/f9080312-0686-4c5d-922c-129ac0eb90a2/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  for await (const line of rl) {
    if (line.includes('"step_index":33') || line.includes('"step_index":340') || line.includes('"step_index":341')) {
      const obj = JSON.parse(line);
      if (obj.thinking || obj.content) {
        console.log(`\n=== STEP ${obj.step_index} (${obj.type}) ===`);
        console.log((obj.thinking || obj.content || '').substring(0, 600));
      }
    }
  }
}
find330();

