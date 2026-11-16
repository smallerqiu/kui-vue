import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// The package ships `"type": "module"`, so node16/nodenext read types/*.d.ts as
// ESM and demand explicit `.js` extensions. vue-tsc emits bundler-style
// specifiers, and prepare-types.ts has to rewrite them; this fixture keeps that
// rewriting honest by resolving the built declarations through package self-reference.
const root = path.resolve("node_modules/.tmp/types-resolution");
const typesEntry = path.resolve("types/index.d.ts");
if (!fs.existsSync(typesEntry)) {
  console.error("types/index.d.ts is missing; run `pnpm build:types` first.");
  process.exit(1);
}
fs.mkdirSync(root, { recursive: true });

const write = (name: string, content: string) => fs.writeFileSync(path.join(root, name), content);
write(
  "repro.mts",
  [
    'import { Affix, Popup, type ButtonProps } from "kui-vue";',
    'import zhCN from "kui-vue/locale/zh-CN";',
    "export type EsmProbe = [typeof Affix, typeof Popup, ButtonProps, typeof zhCN];",
    "",
  ].join("\n"),
);
write(
  "repro.cts",
  [
    'import { Affix, type ButtonProps } from "kui-vue";',
    "export type CjsProbe = [typeof Affix, ButtonProps];",
    "",
  ].join("\n"),
);
const config = (file: string) =>
  JSON.stringify(
    {
      compilerOptions: {
        module: "nodenext",
        moduleResolution: "nodenext",
        strict: true,
        noEmit: true,
        // Check the shipped declarations themselves; a consumer's skipLibCheck
        // would hide the extensionless specifiers this gate exists to catch.
        skipLibCheck: false,
        types: [],
      },
      files: [file],
    },
    null,
    2,
  ) + "\n";
write("tsconfig.esm.json", config("repro.mts"));
write("tsconfig.cjs.json", config("repro.cts"));

const tsc = path.resolve("node_modules/typescript/bin/tsc");
for (const project of ["tsconfig.esm.json", "tsconfig.cjs.json"]) {
  const result = spawnSync(process.execPath, [tsc, "-p", path.join(root, project), "--pretty", "false"], {
    encoding: "utf8",
  });
  if (result.status !== 0) {
    process.stderr.write(result.stdout + result.stderr);
    console.error(`${project} failed to resolve the published declarations under nodenext.`);
    process.exit(1);
  }
}
console.log("Type resolution checks passed: ESM and CommonJS declarations resolve under nodenext.");
