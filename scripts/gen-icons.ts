import fs from "fs";
import { generate } from "kui-icons/utils/pathify";
const { spriteList, pathList } = generate("./icons/*.svg");

fs.writeFileSync(
  "../src/assets/img/web.svg",
  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">${spriteList.join("")}</svg>`
);

// run
// cd scripts
// node gen-icons.js
console.log(pathList);
