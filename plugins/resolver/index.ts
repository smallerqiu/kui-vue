import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { globalComponents } from "../../components/utils/vue";
import { generateVeturConfig } from "./vetur";
import { generateWebTypesConfig } from "./web-types";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const getComponentNames = (): string[] => {
  const entryPath = path.resolve(__dirname, "../../components/components.ts");
  if (!fs.existsSync(entryPath)) return [];
  const content = fs.readFileSync(entryPath, "utf-8");

  const componentNames: string[] = [];
  const exportRegex = /export\s*{([^}]+)}/g;
  let match;

  while ((match = exportRegex.exec(content)) !== null) {
    const exports = match[1].split(",").map((e) => {
      const parts = e.trim().split(/\s+as\s+/);
      return parts[parts.length - 1].trim();
    });

    exports.forEach((name) => {
      // 过滤掉 Props 等类型定义，只保留组件名
      if (
        name &&
        !name.endsWith("Props") &&
        name !== "default" &&
        !globalComponents.includes(name)
      ) {
        componentNames.push(name);
      }
    });
  }
  return componentNames;
};
export const generateGlobalDts = () => {
  const componentNames = getComponentNames();
  // for Volar

  const template = `
/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
  ${componentNames
    .map((name) => {
      const base = `${name}: typeof import('kui-vue')['${name}']`;
      return name.startsWith("K") ? base : `${base}\nK${name}: typeof import('kui-vue')['${name}']`;
    })
    .join("\n    ")}
  }
}

export {}
`;
  const distDir = path.resolve(__dirname, "../../types");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  fs.writeFileSync(path.resolve(distDir, "global.d.ts"), template);
  console.log("Global types generated with PascalCase names.");

  const indexPath = path.resolve(__dirname, "../../types/index.d.ts");

  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, "utf-8");
    const injection = `/// <reference types="./global.d.ts" />\n`;

    if (!content.includes('reference types="./global.d.ts"')) {
      const newContent = injection + content;
      fs.writeFileSync(indexPath, newContent);
    }
  }

  generateVeturConfig(componentNames);

  generateWebTypesConfig(componentNames);
};
