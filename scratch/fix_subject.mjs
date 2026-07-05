import fs from 'fs';
import path from 'path';

// Fix countries.ts
const countriesPath = path.join(process.cwd(), 'src', 'data', 'countries.ts');
if (fs.existsSync(countriesPath)) {
  let content = fs.readFileSync(countriesPath, 'utf-8');
  content = content.replace(/regionTags:\s*\["([^"]+)"\]/g, 'region: "$1"');
  fs.writeFileSync(countriesPath, content, 'utf-8');
  console.log('Fixed countries.ts');
}

// Fix missing subjectId in contents.ts and cards.ts
function addSubjectId(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 雑に "curriculumNodeId: "xxx-xxx",\n" の後に "    subjectId: "politics-economics",\n" などを足す
  // id: "pol-econ-..." なら subjectId: "politics-economics" にする
  
  content = content.replace(/(id:\s*"([^"]+)",\n\s*curriculumNodeId:\s*"([^"]+)",\n(?!\s*subjectId:))/g, (match, p1, p2, p3) => {
    let subj = "politics-economics"; // デフォルト
    if (p2.startsWith("pol-econ") || p3.startsWith("politics")) subj = "politics-economics";
    else if (p2.startsWith("hist") || p3.startsWith("hist")) subj = "history-basic";
    else if (p2.startsWith("geo") || p3.startsWith("geo")) subj = "geography-basic";
    else if (p2.startsWith("eth") || p3.startsWith("eth")) subj = "ethics";
    else if (p2.startsWith("pub") || p3.startsWith("pub")) subj = "public";
    
    return p1 + `    subjectId: "${subj}",\n`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Added subjectId to ${filePath}`);
}

addSubjectId(path.join(process.cwd(), 'src', 'data', 'contents.ts'));
addSubjectId(path.join(process.cwd(), 'src', 'data', 'cards.ts'));

