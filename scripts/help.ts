import glob from "fast-glob";
import fs from "fs";
import path from "path";

// const matches = glob.sync("components/*/demo/*.md");
const matches = glob.sync("components/*/demo/info*.md");

const parseDemoMeta = (content: string) => {
  const result: { cn: { title: string; desc: string }; en: { title: string; desc: string } } = {
    cn: { title: "", desc: "" },
    en: { title: "", desc: "" },
  };

  const extractBlock = (lang: "cn" | "en") => {
    const regex = new RegExp(`<${lang}>([\\s\\S]*?)</${lang}>`);
    const match = content.match(regex);
    if (!match) return;

    const lines = match[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // 第一行应为 Markdown 标题：### Title
    const titleLine = lines[0];
    const titleMatch = titleLine.match(/^###\s+(.+)$/);
    const title = titleMatch ? titleMatch[1] : "";

    // 其余部分合并为描述（通常只有一行）
    const desc = lines.slice(1).join(" ").trim();

    result[lang] = { title, desc };
  };

  extractBlock("cn");
  extractBlock("en");

  return result;
};

let componentName = "affix";
let cnList = [];
let enList = [];

for (const file of matches) {
  const parts = file.split(path.sep); // [ 'src', 'aaa', 'demo', 'base.md' ]
  const parentDir = parts[1]; // 例如 aaa、bbb、xyz

  // 
  fs.unlinkSync(file);
  continue
  //

  // remove info's content to index
  componentName = parts[1];
  let bName = parts.slice(-1)[0];
  if (bName == "info.md") {
    let o = fs.readFileSync(file, "utf-8");
    let t = path.join("components", componentName, "index.md");
    let oc = fs.readFileSync(t, "utf-8");
    fs.writeFileSync(t, o + "\n" + oc);
  } else {
    let o = fs.readFileSync(file, "utf-8");
    let t = path.join("components", componentName, "index.en_US.md");
    let oc = fs.readFileSync(t, "utf-8");
    fs.writeFileSync(t, o + "\n" + oc);
  }
  continue;

  // reade cn , en to info file
  let baseName = parts.slice(-1)[0];
  if (baseName.includes("info")) {
  } else {
    const a = fs.readFileSync(file, "utf-8");
    const meta = parseDemoMeta(a);
    // console.log(parts.slice(-1));

    if (componentName == parts[1]) {
      cnList.push(`<code src="./demo/${baseName.replace("md", "vue")}">${meta.cn.title}</code>`);
      enList.push(`<code src="./demo/${baseName.replace("md", "vue")}">${meta.en.title}</code>`);
    } else {
      let infoEnFile = path.join("components", componentName, "demo", "info.en_US.md");
      let infoCnFile = path.join("components", componentName, "demo", "info.md");

      fs.appendFileSync(infoEnFile, "\n" + enList.join(`\n`));
      fs.appendFileSync(infoCnFile, "\n" + cnList.join(`\n`));

      // console.log(cnList.join(`\n`));
      cnList = [];
      enList = [];
      componentName = parts[1];
    }
  }
  continue;
  //

  //rename jsx to tsx
  const tsx = path.join("components", parentDir, "demo", "index.tsx");
  console.log(tsx);
  fs.renameSync(file, tsx);
  continue;
  //

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
