import fs from "fs";
import path from "path";
import pkg from "../../package.json" with { type: "json" };
import { getComponentTagNames, getPropsData, getPropsNameCandidates } from "./vetur.ts";
export const generateWebTypesConfig = (componentNames: string[]) => {
  const entryFilePath = path.resolve(import.meta.dirname, "../../components/index.ts");

  // 构造 web-types 基础结构
  const webTypes = {
    $schema: "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
    name: "kui-vue",
    version: pkg.version,
    "description-markup": "markdown",
    "js-types-syntax": "typescript",
    contributions: {
      html: {
        elements: componentNames.flatMap((name) => {
          const propList = getPropsData(entryFilePath, getPropsNameCandidates(name));
          const attributes = propList.filter((prop) => !prop.eventName);
          const events = propList.filter((prop) => prop.eventName);

          return getComponentTagNames(name).map((tagName) => ({
            name: tagName,
            source: {
              symbol: name,
            },
            description: `Kui Vue component: ${name}`,
            "doc-url": `https://k-ui.cn/components/${tagName.replace(/^k-/, "")}`,
            attributes: attributes.map((prop) => ({
              name: prop.name,
              description: prop.description,
              value: {
                type: prop.type,
                kind: "expression",
              },
            })),
            events: events.map((prop) => ({
              name: prop.eventName as string,
              description: prop.description,
            })),
          }));
        }),
      },
    },
  };

  const distDir = path.resolve(import.meta.dirname, "../../vetur");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  fs.writeFileSync(path.resolve(distDir, "web-types.json"), JSON.stringify(webTypes, null, 2));

  console.log("\x1b[32m Web-types config generated successfully in /vetur directory.\x1b[0m");
};
