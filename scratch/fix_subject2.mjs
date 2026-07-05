import fs from 'fs';
import path from 'path';

// Fix cards.ts
const cardsPath = path.join(process.cwd(), 'src', 'data', 'cards.ts');
if (fs.existsSync(cardsPath)) {
  let content = fs.readFileSync(cardsPath, 'utf-8');
  content = content.replace(/periodLabel:\s*"/g, 'period: "');
  fs.writeFileSync(cardsPath, content, 'utf-8');
  console.log('Fixed cards.ts');
}

// Fix contents.ts
const contentsPath = path.join(process.cwd(), 'src', 'data', 'contents.ts');
if (fs.existsSync(contentsPath)) {
  let content = fs.readFileSync(contentsPath, 'utf-8');
  
  // Find all objects that have `id:` but missing `subjectId:`
  content = content.replace(/\{\s*id:\s*"([^"]+)",/g, (match, idStr) => {
    let subj = "politics-economics"; // デフォルト
    if (idStr.startsWith("hist") || idStr.includes("history")) subj = "history-basic";
    else if (idStr.startsWith("geo") || idStr.includes("geography")) subj = "geography-basic";
    else if (idStr.startsWith("eth") || idStr.includes("ethics")) subj = "ethics";
    else if (idStr.startsWith("pub") || idStr.includes("public")) subj = "public";

    return `{\n    subjectId: "${subj}",\n    id: "${idStr}",`;
  });

  fs.writeFileSync(contentsPath, content, 'utf-8');
  console.log('Fixed contents.ts');
}
