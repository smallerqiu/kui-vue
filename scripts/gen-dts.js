/**
 * 自动为 Vue 2 + JSX 组件库生成类型声明 (.d.ts)
 * ----------------------------------------------
 * 1. 解析组件 props 类型
 * 2. 自动生成每个组件的 .d.ts 文件
 * 3. 汇总生成 index.d.ts
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

    // 简写：props: { visible: Boolean }
    if (p.value.type === "Identifier") {
      type = TYPE_MAP[p.value.name] || "any";
    }
    // 多类型：props: { size: [String, Number] }
    else if (p.value.type === "ArrayExpression") {
      const arr = p.value.elements
        .map((el) => TYPE_MAP[el.name] || "any")
        .join(" | ");
      type = arr;
    }
    // 完整对象形式：props: { color: { type: String, default: 'red' } }
    else if (p.value.type === "ObjectExpression") {
      for (const prop of p.value.properties) {
        if (!prop.key?.name) continue;
        const keyName = prop.key.name;

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

        // ✅ validator 提取枚举
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
  // 🩹 函数类型在 union 中必须独立括号
if (t.includes("|") && t.includes("=>")) {
  t = t.replace(/\(\.\.\.args: any\[\]\) => any/g, "((...args: any[]) => any)");
} else if (t.includes("=>") && !t.includes("|")) {
  // 单独函数类型
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
  $emit: (event: string, ...args: any[]) => this;
}

/** ${name} Vue component type */
declare const ${name}: VueConstructor<${name}>;

export default ${name};
`;
}

// ---------------- 主函数 ----------------
async function main() {
  const files = await fg(["**/*.jsx"], {
    cwd: COMPONENTS_DIR,
    absolute: true,
  });

  if (!files.length) {
    console.log("❌ No .jsx files found in components/");
    process.exit(1);
  }

  ensureCleanDir(OUT_DIR);
  const exports = [];

  for (const file of files) {
    if (/demo/i.test(file)) continue;

    const code = fs.readFileSync(file, "utf8");
    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "classProperties"],
    });

    let compName = path.basename(file, ".jsx");
    let compOptionsNode = null;
    let compOptionsSource = "";

    // Pass 1: export default {...} 或 export default withInstall(Component)
    traverse(ast, {
      ExportDefaultDeclaration(p) {
        const decl = p.node.declaration;
        if (
          decl.type === "CallExpression" &&
          decl.callee.name === "withInstall" &&
          decl.arguments.length
        ) {
          const arg = decl.arguments[0];
          if (arg.type === "Identifier") {
            const binding = p.scope.getBinding(arg.name);
            if (binding?.path?.node?.init?.type === "ObjectExpression") {
              compOptionsNode = binding.path.node.init;
              compName = arg.name;
            }
          }
        }
        if (decl.type === "ObjectExpression") {
          compOptionsNode = decl;
        }
      },
    });

    // Pass 2: fallback — const Component = { ... }
    if (!compOptionsNode) {
      traverse(ast, {
        VariableDeclarator(p) {
          const node = p.node;
          if (
            node.id.type === "Identifier" &&
            node.init?.type === "ObjectExpression" &&
            !compOptionsNode
          ) {
            compOptionsNode = node.init;
            compName = node.id.name;
          }
        },
      });
    }

    // 提取 props
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

    const relDir = path.relative(COMPONENTS_DIR, path.dirname(file));
    const outDir = path.join(OUT_DIR, relDir);
    const outFile = path.join(outDir, `${compName}.d.ts`);
    fs.mkdirSync(outDir, { recursive: true });

    const formatted = await prettier.format(dts, {
      ...prettierConfig,
      parser: "typescript",
    });
    fs.writeFileSync(outFile, formatted);
    exports.push({ name: compName, path: `./${relDir}/${compName}` });
    console.log(`✅ Generated ${path.relative(process.cwd(), outFile)}`);
  }

  // 汇总 index.d.ts
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