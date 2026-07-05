import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let modified = false;

  // period: "xxx", -> periodLabel: "xxx",
  if (/period:\s*"/.test(content)) {
    content = content.replace(/period:\s*("[^"]+")/g, 'periodLabel: $1');
    modified = true;
  }

  // region: "xxx", -> regionTags: ["xxx"],
  if (/region:\s*"/.test(content)) {
    content = content.replace(/region:\s*("[^"]+")/g, 'regionTags: [$1]');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
