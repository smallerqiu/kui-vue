import fs from "fs";
import path from "path";
import glob from "fast-glob";
const matches = glob.sync("../components/*/demo/*.md");

let langs = {};
let count = 0;

for (const md of matches) {
  const content = fs.readFileSync(md, "utf-8");

  const tagCNReg = /<cn>(.*?)<\/cn>/gs;
  const cnMatch = tagCNReg.exec(content);

  const parts = md.split(path.sep);
  let component_name = parts[2];

  if (!langs[component_name]) {
    langs[component_name] = {};
  }
  // console.log(parts); // => [ '..', 'components', 'affix', 'demo', 'basic.md' ]
  let demo_name = parts[4].split(".")[0];
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
