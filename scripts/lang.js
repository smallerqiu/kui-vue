import fs from "fs";
import path from "path";
import glob from "fast-glob";
const matchesMD = glob.sync("../components/*/demo/*.md");
const matchesIndex = glob.sync("../components/*/index.md");
const matchesInfo = glob.sync("../components/*/demo/info.md");

const output_md_cn = () => {
  let langs = {};
  let count = 0;

  for (const md of matchesMD) {
    const content = fs.readFileSync(md, "utf-8");

    const cnRegex = /<cn>(.*?)<\/cn>/gs;
    const cnMatch = cnRegex.exec(content);

    const parts = md.split(path.sep);
    let component_name = parts[2];
    let demo_name = parts[4].split(".")[0];

    if (!langs[component_name]) {
      langs[component_name] = {};
    }
    // console.log(parts); // => [ '..', 'components', 'affix', 'demo', 'basic.md' ]
    if (cnMatch && cnMatch[1]) {
      langs[component_name][demo_name] = cnMatch[1];
    }
    if (Object.keys(langs).length >= 7) {
      fs.writeFileSync(`./lang_${count}.json`, JSON.stringify(langs));
      count += 1;
      langs = {};
    }
    // break
  }
  fs.writeFileSync(`./lang_${count}.json`, JSON.stringify(langs));
};

const write_md_en = () => {
  const enLangsStr = fs.readFileSync("./lang_en.json", "utf-8");
  const langEn = JSON.parse(enLangsStr);
  for (const md of matchesMD) {
    const parts = md.split(path.sep);
    const content = fs.readFileSync(md, "utf-8");
    const enRegex = /<en>(.*?)<\/en>/gs;
    const cnRegex = /<cn>(.*?)<\/cn>/gs;
    let component_name = parts[2];
    let demo_name = parts[4].split(".")[0];
    let newContent = "";
    const enContent = langEn[component_name][demo_name];
    if (enRegex.test(content)) {
      console.log("ok en");
      newContent = content.replace(enRegex, `<en>${enContent}</en>`);
    } else {
      newContent = content.replace(cnRegex, `<cn>$1</cn>\n<en>${enContent}</en>`);
      console.log("ok en2");
    }
    console.log(newContent);
    fs.writeFileSync(md, newContent, "utf-8");
  }
};

const output_index_cn = () => {
  let langs = {};

  for (const md of matchesIndex) {
    const content = fs.readFileSync(md, "utf-8");
    const parts = md.split(path.sep);
    let component_name = parts[2];
    langs[component_name] = content;
  }
  fs.writeFileSync(`./lang_index.json`, JSON.stringify(langs));
};

const output_index_en = () => {
  const enLangsStr = fs.readFileSync("./lang_index_en.json", "utf-8");
  const langEn = JSON.parse(enLangsStr);
  for (const md of matchesIndex) {
    const parts = md.split(path.sep);
    let component_name = parts[2];
    let en_path = md.replace("index.md", "index.en_US.md");
    fs.writeFileSync(en_path, langEn[component_name], "utf-8");
  }
};

const output_info_cn = () => {
  let langs = {};

  for (const md of matchesInfo) {
    const content = fs.readFileSync(md, "utf-8");
    const parts = md.split(path.sep);
    let component_name = parts[2];
    langs[component_name] = content;
  }
  fs.writeFileSync(`./lang_info.json`, JSON.stringify(langs));
};


const output_info_en = () => {
  const enLangsStr = fs.readFileSync("./lang_info_en.json", "utf-8");
  const langEn = JSON.parse(enLangsStr);
  for (const md of matchesInfo) {
    const parts = md.split(path.sep);
    let component_name = parts[2];
    let en_path = md.replace("info.md", "info.en_US.md");
    fs.writeFileSync(en_path, langEn[component_name], "utf-8");
  }
};


const output_index_en1 = () => {
  const enLangsStr = fs.readFileSync("./lang_index.json", "utf-8");
  const langEn = JSON.parse(enLangsStr);
  for (const md of matchesIndex) {
    const parts = md.split(path.sep);
    let component_name = parts[2];
    // let en_path = md.replace("index.md", "index.en_US.md");
    fs.writeFileSync(md, langEn[component_name], "utf-8");
  }
};

output_index_en1()