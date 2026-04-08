import fs from "fs";
import path from "path";
import { globalComponents } from "../../components/utils/vue";
export const generateGlobalDts = () => {
  const entryPath = path.resolve(__dirname, "../../components/components.ts");
  if (!fs.existsSync(entryPath)) return;
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

  const template = `
/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module 'vue' {
  export interface GlobalComponents {
  ${componentNames.map((name) => `${name}: typeof import('kui-vue')['${name}']`).join("\n    ")}
  }
}

export {}
`;
  const distDir = path.resolve(__dirname, "../../dist");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  fs.writeFileSync(path.resolve(distDir, "global.d.ts"), template);
  console.log("Global types generated with PascalCase names.");

  const indexPath = path.resolve(__dirname, "../../dist/types/index.d.ts");

  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, "utf-8");
    const injection = `/// <reference types="../global.d.ts" />\n`;

    if (!content.includes('reference types="../global.d.ts"')) {
      const newContent = injection + content;
      fs.writeFileSync(indexPath, newContent);
    }
  }
  // for  Vetur
  const tags: Record<string, any> = {};
  const attributes: Record<string, any> = {};

  componentNames.forEach((name) => {
    // 转换成 kebab-case，因为 Vetur 习惯这种格式
    const kebabName = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

    // 生成 tags.json 内容
    tags[kebabName] = {
      description: `Kui Vue component: ${name}`,
      attributes: [], // 如果有自动化提取 Props 的逻辑可以填在这里
    };
  });

  const typingsDir = path.resolve(__dirname, "../../typings");
  fs.writeFileSync(path.resolve(typingsDir, "tags.json"), JSON.stringify(tags, null, 2));
  fs.writeFileSync(path.resolve(typingsDir, "attributes.json"), JSON.stringify(attributes, null, 2));
  console.log("Vetur custom data generated.");
};

// generateGlobalDts();
