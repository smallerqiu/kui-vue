import glob from "fast-glob";
import fs from "fs";
import path from "path";

const matches = glob.sync("components/*/demo/*.md");
// const matches = glob.sync("components/*/demo/index.tsx");

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
  // const parentDir = parts[1]; // 例如 aaa、bbb、xyz

  // remove info's content to index
  // componentName = parts[1];

  const a = fs.readFileSync(file, "utf-8");
  const meta = parseDemoMeta(a);
  const baseName = parts.slice(-1)[0];
  // console.log(parts.slice(-1));

  if (componentName == parts[1]) {
    cnList.push(`[${meta.cn.title}](./demo/${baseName.replace("md", "vue")})\n- ${meta.cn.desc}\n`);
    enList.push(`[${meta.en.title}](./demo/${baseName.replace("md", "vue")})\n- ${meta.en.desc}\n`);
  } else {
    let en = path.join("components", componentName, "index.en_US.md");
    let cn = path.join("components", componentName, "index.md");

    // fs.appendFileSync(infoEnFile, "\n" + enList.join(`\n`));
    // fs.appendFileSync(infoCnFile, "\n" + cnList.join(`\n`));
    const regex = /<code\s+src="([^"]+)">([^<]*)<\/code>/g;
    const cnContent = fs.readFileSync(cn, "utf-8");
    const cnContent = fs.readFileSync(en, "utf-8");
    if (regex.test(cnContent)) {

    }

     if (regex.test(enContent)) {

    }

    console.log(cnList.join(`\n`));
    cnList = [];
    enList = [];
    componentName = parts[1];
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
