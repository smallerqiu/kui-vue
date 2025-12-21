/**
 * 自动为 Vue 2 + JSX 组件库生成类型声明 (.d.ts)
 * 入口文件模式：只解析每个组件目录中的 index.js
 */

import fs from "fs";
import path from "path";
import fg from "fast-glob";
import prettier from "prettier";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";

const traverse = traverseModule.default;
const COMPONENTS_DIR = path.resolve("components");
const OUT_DIR = path.resolve("types");

// ---------------- Prettier Config ----------------
const prettierConfig =
  (await prettier.resolveConfig(process.cwd())) || {
    singleQuote: false,
    semi: true,
    trailingComma: "es5",
  };

// ---------------- Type Mapping ----------------
const TYPE_MAP = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Array: "any[]",
  Object: "Record<string, any>",
  Function: "(...args: any[]) => any",
};

// ---------------- Safe mkdir / clean ----------------
function ensureCleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// ---------------- 扫描 index.js 获取组件实际文件路径 ----------------
function getComponentFiles(entryFile) {
  const code = fs.readFileSync(entryFile, "utf8");
  const ast = parse(code, {
    sourceType: "module",
    plugins: [],
  });

  const imports = new Map(); // Map<localName, relativePath>
  const exports = [];

  traverse(ast, {
    ImportDeclaration(p) {
      const source = p.node.source.value; // "./affix" 或 "./affix.jsx"
      for (const sp of p.node.specifiers) {
        imports.set(sp.local.name, source);
      }
    },

    ExportDefaultDeclaration(p) {
      const decl = p.node.declaration;

      if (decl.type === "Identifier") {
        // export default Affix
        exports.push(decl.name);
      }

      if (
        decl.type === "CallExpression" &&
        decl.callee.name === "withInstall"
      ) {
        const arg = decl.arguments[0];
        if (arg?.type === "Identifier") {
          // export default withInstall(Affix)
          exports.push(arg.name);
        }
      }
    },

    ExportNamedDeclaration(p) {
      if (p.node.specifiers) {
        for (const s of p.node.specifiers) {
          // export { Button, ButtonGroup }
          exports.push(s.local.name);
        }
      }
    },
  });

  const componentFiles = [];

  for (const name of exports) {
    const relPath = imports.get(name);
    if (!relPath) continue;

    const dir = path.dirname(entryFile);
    let target = relPath;

    // ✅ 这里是关键修复：只在没有扩展名时追加 .jsx
    if (!path.extname(target)) {
      target += ".jsx";
    }

    const jsxFile = path.resolve(dir, target);

    if (fs.existsSync(jsxFile)) {
      componentFiles.push(jsxFile);
    }
  }

  return componentFiles;
}

// ---------------- 解析 props ----------------
function parseProps(propsNode, source = "") {
  const props = [];
  if (!propsNode || !Array.isArray(propsNode.properties)) return props;

  for (const p of propsNode.properties) {
    if (!p.key?.name) continue;

    const name = p.key.name;
    let type = "any";
    let hasDefault = false;
    let defaultVal = undefined;

    if (p.value.type === "Identifier") {
      type = TYPE_MAP[p.value.name] || "any";
    } else if (p.value.type === "ArrayExpression") {
      type = p.value.elements
        .map((el) => TYPE_MAP[el.name] || "any")
        .join(" | ");
    } else if (p.value.type === "ObjectExpression") {
      for (const prop of p.value.properties) {
        const keyName = prop.key?.name;
        if (!keyName) continue;

        if (keyName === "type") {
          if (prop.value.type === "Identifier") {
            type = TYPE_MAP[prop.value.name] || "any";
          } else if (prop.value.type === "ArrayExpression") {
            type = prop.value.elements
              .map((el) => TYPE_MAP[el.name] || "any")
              .join(" | ");
          }
        }

        if (keyName === "default") {
          hasDefault = true;
          if (
            ["StringLiteral", "NumericLiteral", "BooleanLiteral"].includes(
              prop.value.type
            )
          ) {
            defaultVal = prop.value.value;
          }
        }

        // validator 枚举提取
        if (keyName === "validator") {
          const code = source.slice(prop.start, prop.end);
          const match = code.match(/\[([^\]]+)\]\.includes/);
          if (match) {
            const list = match[1]
              .split(",")
              .map((s) => s.trim().replace(/^['"`]|['"`]$/g, ""))
              .filter(Boolean);
            if (list.length) {
              type = list.map((v) => `"${v}"`).join(" | ");
            }
          }
        }
      }
    }

    props.push({ name, type, hasDefault, defaultVal });
  }

  return props;
}

// ---------------- 生成 d.ts 内容 ----------------
function genDts(name, props) {
  const propsContent = props
    .map((p) => {
      const def = p.hasDefault ? `/** default: ${p.defaultVal} */\n  ` : "  ";
      let t = p.type;

      if (t.includes("|") && t.includes("=>")) {
        t = t.replace(/\(\.\.\.args: any\[\]\) => any/g, "((...args: any[]) => any)");
      } else if (t.includes("=>") && !t.includes("|")) {
        t = "((...args: any[]) => any)";
      }

      return `${def}${p.name}?: ${t};`;
    })
    .join("\n");

  return `
import Vue, { VueConstructor } from "vue";

/** ${name} component props */
export interface ${name}Props {
${propsContent}
}

/** ${name} component instance */
export interface ${name} extends Vue {
  $props: ${name}Props;
  $emit(event: string, ...args: any[]): void;
}

/** ${name} Vue component type */
declare const ${name}: VueConstructor<${name}>;

export default ${name};
`;
}

// ---------------- 主函数 ----------------
async function main() {
  const entryFiles = await fg(["**/index.js"], {
    cwd: COMPONENTS_DIR,
    absolute: true,
  });

  ensureCleanDir(OUT_DIR);
  const exports = [];

  for (const entry of entryFiles) {
    const componentFiles = getComponentFiles(entry);

    for (const file of componentFiles) {
      const code = fs.readFileSync(file, "utf8");
      const ast = parse(code, {
        sourceType: "module",
        plugins: ["jsx"],
      });

      let compName = path.basename(file, ".jsx");
      let compOptionsNode = null;
      let compOptionsSource = "";

      // export default defineComponent({ ... })
      traverse(ast, {
        ExportDefaultDeclaration(p) {
          const decl = p.node.declaration;

          if (
            decl.type === "CallExpression" &&
            decl.callee.name === "defineComponent" &&
            decl.arguments[0]?.type === "ObjectExpression"
          ) {
            compOptionsNode = decl.arguments[0];
          }
        },
      });

      // const X = defineComponent({ ... })
      if (!compOptionsNode) {
        traverse(ast, {
          VariableDeclarator(p) {
            const init = p.node.init;

            if (
              init?.type === "CallExpression" &&
              init.callee.name === "defineComponent" &&
              init.arguments[0]?.type === "ObjectExpression"
            ) {
              compOptionsNode = init.arguments[0];
              compName = p.node.id.name;
            }
          },
        });
      }

      // 解析 props
      let propsNode = null;
      if (compOptionsNode?.properties) {
        for (const prop of compOptionsNode.properties) {
          if (prop.key?.name === "props") {
            propsNode = prop.value;
          }
        }
        compOptionsSource = code.slice(
          compOptionsNode.start ?? 0,
          compOptionsNode.end ?? code.length
        );
      }

      const props = parseProps(propsNode, compOptionsSource);
      const dts = genDts(compName, props);

      const rel = path.relative(COMPONENTS_DIR, path.dirname(file));
      const outDir = path.join(OUT_DIR, rel);
      const outFile = path.join(outDir, `${compName}.d.ts`);
      fs.mkdirSync(outDir, { recursive: true });

      const formatted = await prettier.format(dts, {
        ...prettierConfig,
        parser: "typescript",
      });

      fs.writeFileSync(outFile, formatted);

      exports.push({ name: compName, path: `./${rel}/${compName}` });

      console.log(`✅ Generated: ${path.relative(process.cwd(), outFile)}`);
    }
  }

  // 生成 index.d.ts
  const indexContent = exports
    .map(
      (e) =>
        `export { default as ${e.name} } from "${e.path}";\nexport type { ${e.name}Props } from "${e.path}";`
    )
    .join("\n");

  const formattedIndex = await prettier.format(indexContent, {
    ...prettierConfig,
    parser: "typescript",
  });

  fs.writeFileSync(path.join(OUT_DIR, "index.d.ts"), formattedIndex);

  console.log("\n✨ All done! Declarations generated in /types");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});