import fs from "fs";
import path from "path";
import pkg from "../../package.json";
import { getPropsData } from "./vetur";

export const generateWebTypesConfig = (componentNames: string[]) => {
  const entryFilePath = path.resolve(__dirname, "../../components/index.ts");

  // 构造 web-types 基础结构
  const webTypes = {
    $schema: "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
    name: "kui-vue", 
    version: pkg.version,
    "description-markup": "markdown",
    "js-types-syntax": "typescript",   
    contributions: {
      html: {
        elements: componentNames.map((name) => {
          const kebabName = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
          const propsName = `${name}Props`;

          const propList = getPropsData(entryFilePath, propsName, name);

          return {
            name: kebabName,
            source: {
              symbol: name,
            },
            description: `Kui Vue component: ${name}`,
            "doc-url": `https://k-ui.cn/components/${kebabName}`,
            attributes: propList.map((p) => ({
              name: p.name,
              description: p.description,
              value: {
                type: p.type,
                kind: "expression",
              },
            })),
            // TODO: 支持事件
            events: [],
          };
        }),
      },
    },
  };

  const distDir = path.resolve(__dirname, "../../vetur");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  fs.writeFileSync(path.resolve(distDir, "web-types.json"), JSON.stringify(webTypes, null, 2));

  console.log("\x1b[32m Web-types config generated successfully in /vetur directory.\x1b[0m");
};
