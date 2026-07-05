import fs from 'fs';
import path from 'path';

const contentsPath = path.join(process.cwd(), 'src', 'data', 'contents.ts');
if (fs.existsSync(contentsPath)) {
  let content = fs.readFileSync(contentsPath, 'utf-8');
  
  // period -> periodLabel
  content = content.replace(/period:\s*("[^"]+")/g, 'periodLabel: $1');
  
  // region -> regionTags
  content = content.replace(/region:\s*("[^"]+")/g, 'regionTags: [$1]');

  // Add subjectId
  // 先に、全てのオブジェクトを正規表現でマッチさせる。
  // 各オブジェクトが始まる `{` と `id: "xxx"` を探し、そこに `subjectId` を挿入する。
  content = content.replace(/\{\s*id:\s*"([^"]+)",/g, (match, idStr) => {
    let subj = "politics-economics"; // デフォルト
    if (idStr.startsWith("hist") || idStr.includes("history")) subj = "history-basic";
    else if (idStr.startsWith("geo") || idStr.includes("geography")) subj = "geography-basic";
    else if (idStr.startsWith("eth") || idStr.includes("ethics")) subj = "ethics";
    else if (idStr.startsWith("pub") || idStr.includes("public")) subj = "public";

    return `{\n    id: "${idStr}",\n    subjectId: "${subj}",`;
  });

  fs.writeFileSync(contentsPath, content, 'utf-8');
  console.log('Fixed contents.ts');
}
