import fs from "fs";
import path from "path";
import fg from "fast-glob";
import prettier from "prettier";
import { parse } from "@babel/parser";
import traverse1 from "@babel/traverse";
const traverse = traverse1.default;
const COMPONENTS_DIR = path.resolve("components");
const OUT_DIR = path.resolve("types");

const prettierConfig =
  (await prettier.resolveConfig(process.cwd())) || {
    singleQuote: false,
    semi: true,
    trailingComma: "es5",
  };

const TYPE_MAP = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Array: "any[]",
  Object: "Record<string, any>",
  Function: "(...args: any[]) => any",
};

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
      // [String, Number] → string | number
      const arr = p.value.elements
        .map((el) => TYPE_MAP[el.name] || "any")
        .join(" | ");
      type = arr;
    } else if (p.value.type === "ObjectExpression") {
      for (const prop of p.value.properties) {
        if (!prop?.key?.name) continue;

        if (prop.key.name === "type") {
          if (prop.value.type === "Identifier") {
            type = TYPE_MAP[prop.value.name] || "any";
          } else if (prop.value.type === "ArrayExpression") {
            type = prop.value.elements
              .map((el) => TYPE_MAP[el.name] || "any")
              .join(" | ");
          }
        }

        if (prop.key.name === "default") {
          hasDefault = true;
          if (
            prop.value.type === "StringLiteral" ||
            prop.value.type === "NumericLiteral" ||
            prop.value.type === "BooleanLiteral"
          ) {
            defaultVal = prop.value.value;
          }
        }

        // ✅ validator 枚举识别
        if (prop.key.name === "validator") {
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
      }
      return `${def}${p.name}?: ${t};`;
    })
    .join("\n");

  return `
import Vue from "vue";

/** ${name} component props */
export interface ${name}Props {
${propsContent}
}

declare class ${name} extends Vue {
  $props: ${name}Props;
  $emit:(event: string, ...args: any[])=> this;
}

export default ${name};
`;
}

// ---------------- 主函数 ----------------
async function main() {
  const files = await fg(["**/*.jsx"], { cwd: COMPONENTS_DIR, absolute: true });
  if (!files.length) {
    console.log("❌ No .jsx files found in components/");
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const exports = [];

  for (const file of files) {
    const code = fs.readFileSync(file, "utf8");
    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "classProperties"],
    });

    let compName = path.basename(file, ".jsx");
    let compOptionsNode = null;
    let compOptionsSource = "";

    // Pass 1: 定位组件定义对象
    traverse(ast, {
      ExportDefaultDeclaration(p) {
        const decl = p.node.declaration;
        // export default withInstall(Component)
        if (
          decl.type === "CallExpression" &&
          decl.callee.name === "withInstall" &&
          decl.arguments.length
        ) {
          const arg = decl.arguments[0];
          if (arg.type === "Identifier") {
            const binding = p.scope.getBinding(arg.name);
            if (
              binding?.path?.node?.init?.type === "ObjectExpression"
            ) {
              compOptionsNode = binding.path.node.init;
              compName = arg.name;
            }
          }
        }
        // export default { ... }
        if (decl.type === "ObjectExpression") {
          compOptionsNode = decl;
        }
      },
    });

    // Pass 2: fallback — 找到顶层 const Tooltip = { ... }
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

    // 提取 propsNode
    let propsNode = null;
    if (compOptionsNode && Array.isArray(compOptionsNode.properties)) {
      for (const prop of compOptionsNode.properties) {
        if (prop.type === "ObjectProperty" && prop.key.name === "props") {
          propsNode = prop.value;
        }
      }
      if (typeof compOptionsNode.start === "number" && typeof compOptionsNode.end === "number") {
        compOptionsSource = code.slice(compOptionsNode.start, compOptionsNode.end);
      } else {
        compOptionsSource = code;
      }
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

    console.log(`✅ Generated ${outFile}`);
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