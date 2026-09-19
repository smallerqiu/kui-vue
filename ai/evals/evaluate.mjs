import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { validateUsage } from "../validate.mjs";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const config = JSON.parse(fs.readFileSync(path.join(root, "ai/evals/config.json"), "utf8"));
const require = createRequire(import.meta.url);
export const metadata = JSON.parse(
  fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8"),
);
export function loadCases() {
  const cases = JSON.parse(fs.readFileSync(path.join(root, "ai/evals/cases.json"), "utf8"));
  const names = new Set();
  for (const item of cases) {
    if (!/^[a-z][a-z0-9-]+$/.test(item.name) || names.has(item.name))
      throw Error(`Invalid/duplicate case: ${item.name}`);
    names.add(item.name);
    if (!item.prompt?.trim() || !item.components?.length)
      throw Error(`Incomplete case: ${item.name}`);
    for (const name of item.components) {
      if (!metadata.components.some((component) => component.name === name))
        throw Error(`Unknown component: ${name}`);
    }
    if (item.sourceFile)
      item.source = fs.readFileSync(path.resolve(root, "ai/evals", item.sourceFile), "utf8");
    if (!item.source?.trim()) throw Error(`Missing reference: ${item.name}`);
  }
  if (cases.length < 20) throw Error("Expected at least 20 reference cases");
  return cases;
}

export function inspectSource(source, item) {
  const issues = [];
  const tags = new Set();
  const imports = new Set();
  const nodes = [];
  const canonical = (name) => name.replace(/-/g, "").toLowerCase();
  const literal = (expression) => {
    const ast = ts.createSourceFile(
      "value.ts",
      `const value = ${expression};`,
      ts.ScriptTarget.Latest,
      true,
    );
    const value = ast.statements[0]?.declarationList?.declarations[0]?.initializer;
    if (!value) return undefined;
    if (ts.isStringLiteral(value)) return value.text;
    if (ts.isNumericLiteral(value)) return Number(value.text);
    if (value.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (value.kind === ts.SyntaxKind.FalseKeyword) return false;
    return undefined;
  };
  const collectImports = (script) => {
    const ast = ts.createSourceFile(
      "imports.tsx",
      script,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    for (const node of ast.statements) {
      if (
        !ts.isImportDeclaration(node) ||
        !ts.isStringLiteral(node.moduleSpecifier) ||
        node.moduleSpecifier.text !== config.library
      )
        continue;
      const bindings = node.importClause?.namedBindings;
      if (bindings && ts.isNamedImports(bindings)) {
        for (const element of bindings.elements) {
          if (
            !element.isTypeOnly &&
            !node.importClause.isTypeOnly &&
            (!element.propertyName || element.propertyName.text === element.name.text)
          )
            imports.add(element.name.text);
        }
      }
    }
  };
  let template = source;
  if (typeof source !== "string" || !source.trim())
    return { issues: ["Missing generated source"], skipped: [] };
  if (/@ts-(?:nocheck|ignore|expect-error)/.test(source))
    issues.push("Type-check suppression is not allowed");
  try {
    if (config.framework === "vue") {
      const { parse, compileScript, compileTemplate } = require("@vue/compiler-sfc");
      const { baseParse, NodeTypes } = require("@vue/compiler-dom");
      const { descriptor, errors } = parse(source, { filename: `${item.name}.vue` });
      issues.push(...errors.map(String));
      if (!descriptor.scriptSetup || descriptor.scriptSetup.lang !== "ts")
        issues.push('Use a complete SFC with <script setup lang="ts"> and local imports');
      collectImports(descriptor.scriptSetup?.content ?? "");
      if (descriptor.scriptSetup) compileScript(descriptor, { id: item.name });
      if (!descriptor.template) issues.push("Missing template");
      template = descriptor.template?.content ?? "";
      const compiled = compileTemplate({
        source: template,
        id: item.name,
        filename: `${item.name}.vue`,
      });
      issues.push(...compiled.errors.map(String));
      const visit = (node) => {
        if (node.type === NodeTypes.ELEMENT) {
          tags.add(node.tag);
          const props = {};
          for (const attr of node.props) {
            if (attr.type === NodeTypes.ATTRIBUTE)
              props[canonical(attr.name)] = attr.value?.content ?? true;
            else if (attr.name === "bind" && attr.arg?.isStatic)
              props[canonical(attr.arg.content)] = literal(attr.exp?.content ?? "");
          }
          nodes.push({ tag: node.tag, props });
        }
        node.children?.forEach(visit);
      };
      visit(baseParse(template));
    } else {
      collectImports(source);
      const ast = ts.createSourceFile(
        `${item.name}.tsx`,
        source,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
      );
      const visit = (node) => {
        if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
          const tag = node.tagName.getText(ast);
          tags.add(tag);
          const props = {};
          for (const attr of node.attributes.properties) {
            if (!ts.isJsxAttribute(attr)) continue;
            const init = attr.initializer;
            props[canonical(attr.name.getText(ast))] = !init
              ? true
              : ts.isStringLiteral(init)
                ? init.text
                : literal(init.expression?.getText(ast) ?? "");
          }
          nodes.push({ tag, props });
        }
        ts.forEachChild(node, visit);
      };
      visit(ast);
      if (
        !ast.statements.some(
          (node) =>
            ts.isExportAssignment(node) ||
            node.modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword),
        )
      )
        issues.push("Missing default component export");
    }
    for (const name of item.components)
      if (!tags.has(name)) issues.push(`Missing required component: ${name} (use canonical names)`);
    for (const name of item.components)
      if (!imports.has(name))
        issues.push(`Missing canonical import from ${config.library}: ${name}`);
    for (const expected of item.expectProps ?? []) {
      if (
        !nodes.some(
          (node) =>
            node.tag === expected.component &&
            node.props[canonical(expected.prop)] === expected.value,
        )
      )
        issues.push(
          `Missing scenario requirement: ${expected.component}.${expected.prop}=${JSON.stringify(expected.value)} (use a literal prop)`,
        );
    }
    const staticResult = validateUsage(template, metadata);
    issues.push(...staticResult.issues.map((issue) => JSON.stringify(issue)));
    return { issues, skipped: staticResult.skipped ?? [] };
  } catch (error) {
    issues.push(String(error));
    return { issues, skipped: [] };
  }
}

// Generated source is only parsed/typechecked, never imported or executed.
export function evaluate(cases, sources) {
  const directory = fs.mkdtempSync(path.join(root, ".ai-eval-"));
  const results = cases.map((item) => ({
    name: item.name,
    ...inspectSource(sources[item.name], item),
    typeErrors: [],
  }));
  try {
    const ext = config.framework === "vue" ? "vue" : "tsx";
    for (const item of cases)
      fs.writeFileSync(path.join(directory, `${item.name}.${ext}`), sources[item.name] || "");
    fs.writeFileSync(
      path.join(directory, "tsconfig.json"),
      JSON.stringify({
        extends: "../tsconfig.app.json",
        compilerOptions: {
          composite: false,
          incremental: false,
          declaration: true,
          emitDeclarationOnly: false,
          noEmit: true,
          noUnusedLocals: false,
          noUnusedParameters: false,
        },
        include: [`./*.${ext}`, "../src/**/*.d.ts"],
        exclude: [],
      }),
    );
    const compiler = config.framework === "vue" ? "vue-tsc/bin/vue-tsc.js" : "typescript/bin/tsc";
    const checked = spawnSync(
      process.execPath,
      [
        "--max-old-space-size=2048",
        require.resolve(compiler),
        "-p",
        path.join(directory, "tsconfig.json"),
        "--pretty",
        "false",
      ],
      {
        cwd: root,
        encoding: "utf8",
        timeout: 180000,
        maxBuffer: 8 * 1024 * 1024,
      },
    );
    if (checked.status !== 0) {
      const output = [checked.stdout, checked.stderr, checked.error?.message]
        .filter(Boolean)
        .join("\n");
      const globalErrors = [];
      let diagnosticTarget = globalErrors;
      for (const line of output.split("\n").filter(Boolean)) {
        const match = line.match(/\.ai-eval-[^/\\]+[/\\]([a-z0-9-]+)\.(?:tsx|vue)\(/);
        const result = match && results.find((item) => item.name === match[1]);
        if (result) diagnosticTarget = result.typeErrors;
        else if (!/^\s/.test(line)) diagnosticTarget = globalErrors;
        diagnosticTarget.push(line.replaceAll(directory, "<eval>"));
      }
      if (!output.trim())
        globalErrors.push(`Typecheck failed: status=${checked.status}, signal=${checked.signal}`);
      if (globalErrors.length) results.forEach((item) => item.typeErrors.push(...globalErrors));
    }
    for (const result of results)
      result.passed = !result.issues.length && !result.typeErrors.length;
    return {
      library: config.library,
      libraryVersion: JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version,
      evaluatedAt: new Date().toISOString(),
      criteria:
        "Component usage, static API validation and strict TypeScript checks. Not a runtime or semantic correctness score.",
      runtimeEvaluated: false,
      total: results.length,
      passed: results.filter((item) => item.passed).length,
      passRate: results.filter((item) => item.passed).length / results.length,
      results,
    };
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
}
