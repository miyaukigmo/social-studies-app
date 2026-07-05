import fs from 'fs';
import path from 'path';

const geoPath = path.join(process.cwd(), 'src', 'data', 'contentsGeographyBasic.ts');
if (fs.existsSync(geoPath)) {
  let content = fs.readFileSync(geoPath, 'utf-8');
  
  // 置換
  content = content.replace(/curriculumNodeId:\s*"geography-basic-section-1-1-1"/g, 'curriculumNodeId: "geobasic-p1-c1-s1"');
  content = content.replace(/curriculumNodeId:\s*"geography-basic-section-1-1-2"/g, 'curriculumNodeId: "geobasic-p1-c1-s2"');
  content = content.replace(/curriculumNodeId:\s*"geography-basic-section-1-1-3"/g, 'curriculumNodeId: "geobasic-p1-c1-s3"');
  content = content.replace(/curriculumNodeId:\s*"geography-basic-section-1-1-4"/g, 'curriculumNodeId: "geobasic-p1-c1-s4"');

  fs.writeFileSync(geoPath, content, 'utf-8');
  console.log('Fixed contentsGeographyBasic.ts curriculumNodeId');
}
