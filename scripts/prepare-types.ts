import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

// vue-tsc emits declarations with the bundler resolver, so relative specifiers
// have no extension or directory suffix. The package is `"type": "module"`,
// which makes node16/nodenext treat these files as ESM and reject them.
const root = path.resolve("types");
const walk = (directory: string): string[] =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(file);
    if (entry.name.endsWith(".d.cts")) {
      // Regenerated below; drop files whose source no longer exists.
      fs.rmSync(file);
      return [];
    }
    return entry.name.endsWith(".d.ts") ? [file] : [];
  });
const files = walk(root);
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const edits: Array<{ start: number; end: number; relative: string }> = [];
  const visit = (node: ts.Node) => {
    if (
      ts.isStringLiteral(node) &&
      node.text.startsWith(".") &&
      (((ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent)) &&
        node.parent.moduleSpecifier === node) ||
        (ts.isLiteralTypeNode(node.parent) && ts.isImportTypeNode(node.parent.parent)))
    ) {
      const base = path.resolve(
        path.dirname(file),
        node.text.replace(/\.(?:js|cjs|mjs|ts|tsx)$/, ""),
      );
      const target = [base + ".d.ts", path.join(base, "index.d.ts")].find((candidate) =>
        fs.existsSync(candidate),
      );
      if (!target) throw new Error(`Cannot resolve declaration import ${node.text} in ${file}`);
      let relative = path.relative(path.dirname(file), target).split(path.sep).join("/");
      if (!relative.startsWith(".")) relative = "./" + relative;
      edits.push({
        start: node.getStart(tree) + 1,
        end: node.end - 1,
        relative: relative.replace(/\.d\.ts$/, ""),
      });
    }
    ts.forEachChild(node, visit);
  };
  visit(tree);
  const rewrite = (extension: string) => {
    let result = source;
    for (const edit of edits.sort((a, b) => b.start - a.start)) {
      result = result.slice(0, edit.start) + edit.relative + extension + result.slice(edit.end);
    }
    return result;
  };
  fs.writeFileSync(file, rewrite(".js"));
  fs.writeFileSync(file.replace(/\.d\.ts$/, ".d.cts"), rewrite(".cjs"));
}
console.log(`Prepared ${files.length} ESM and CommonJS declaration files.`);
