const fs = require('fs');
const readline = require('readline');

async function findOriginal() {
  const stream = fs.createReadStream('C:/Users/purus/.gemini/antigravity-ide/brain/f9080312-0686-4c5d-922c-129ac0eb90a2/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  for await (const line of rl) {
    if (line.includes('"step_index":115')) {
      const obj = JSON.parse(line);
      const lines = obj.content.split('\n');
      console.log(lines.slice(15, 60).join('\n'));
      break;
    }
  }
}
findOriginal();
