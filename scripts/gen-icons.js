import { generate } from "kui-icons/utils/pathify.js";
import fs from "fs";
const { spriteList } = generate("../src/assets/icons/*.svg");

fs.writeFileSync(
  "../src/assets/img/web.svg",
  `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">${spriteList.join("")}</svg>`
);
