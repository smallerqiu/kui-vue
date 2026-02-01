// rename-md-files.js
import fs from "fs";
import path from "path";
import glob from "fast-glob";

// 匹配所有 src/*/demo/base.md
const matches = glob.sync("../kui-vue/components/**/*.less");

for (const oldPath of matches) {
  const parts = oldPath.split(path.sep); // [ 'src', 'aaa', 'demo', 'base.md' ]
  const parentDir = parts[3]; // 例如 aaa、bbb、xyz
  const fileName = parts[parts.length - 1]; // 例如 aaa、bbb、xyz

  // const newDir = parentDir.charAt(0); // 截取首字母，例如 a、b、x
  const newPath = path.join("../kui-vue-v4", ...parts.slice(2, parts.length));

  // 创建新路径的目录（如果不存在）
  // const newDirPath = path.dirname(newPath);
  // fs.mkdirSync(newDirPath, { recursive: true });

  // 移动文件
  // fs.renameSync(oldPath, newPath);
  fs.copyFileSync(oldPath, newPath);
  console.log(`✔ Renamed: ${oldPath} → ${newPath} `);
}
