// rename-md-files.js
import fs from "fs";
import path from "path";
import glob from "fast-glob";

// 匹配所有 src/*/demo/base.md
const matches = glob.sync("../components/*/index.md");
// const matches = glob.sync("components/*/demo/index.jsx");

for (const file of matches) {
  let en = file.replace("index.md", "index.en_US.md");
  fs.copyFileSync(file, en);
  console.log(en);
  continue;

  const parts = file.split(path.sep); // [ 'src', 'aaa', 'demo', 'base.md' ]

  const parentDir = parts[1]; // 例如 aaa、bbb、xyz

  const newDir = parentDir.charAt(0); // 截取首字母，例如 a、b、x
  const newPath = path.join("components", parentDir, "demo", "index.jsx");

  // 创建新路径的目录（如果不存在）
  const newDirPath = path.dirname(newPath);
  fs.mkdirSync(newDirPath, { recursive: true });

  const content = fs.readFileSync(file, "utf-8");
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/i;
  const scriptMatch = content.match(scriptRegex);
  if (scriptMatch && scriptMatch[1]) {
    const scriptContent = scriptMatch[1];
    fs.writeFileSync(newPath, scriptContent.trim());
  }
  // 移动文件
  // fs.renameSync(file, newPath);
  console.log(`✔ Renamed: ${file} → ${newPath}`);
}
