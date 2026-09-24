import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

interface Prop {
  name: string;
  type: string;
  descriptionZh?: string;
  descriptionEn?: string;
  defaultExpression?: string;
}
interface Component {
  name: string;
  documentation: string;
  props: Prop[];
  events: Prop[];
  children: string[];
  parent?: string;
  behavior: { rules: string[] };
  examples: Array<{ id?: string; file?: string; source: string }>;
  models?: Array<{ prop: string; event: string }>;
}
const root = path.resolve(import.meta.dirname, "..");
const metadata = JSON.parse(fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8")) as {
  library: string;
  version: string;
  components: Component[];
};
const components = metadata.components;
const names = new Set(components.map((c) => c.name));
const failures: string[] = [];
const duplicates = (items: string[], context: string) => {
  if (new Set(items).size !== items.length) failures.push(`Duplicate entries: ${context}`);
};
duplicates(
  components.map((c) => c.name),
  "components",
);
const examples = new Set<string>();
const missingDescriptions: string[] = [];
const unreviewedBehavior: string[] = [];
const partialDescriptions: string[] = [];
const fields = { props: 0, events: 0, exampleReferences: 0, defaults: 0 };
for (const c of components) {
  duplicates(
    c.props.map((p) => p.name),
    `${c.name}.props`,
  );
  duplicates(
    c.events.map((p) => p.name),
    `${c.name}.events`,
  );
  duplicates(
    c.examples.map((e) => e.id || e.file || ""),
    `${c.name}.examples`,
  );
  if (!c.behavior.rules.length) unreviewedBehavior.push(c.name);
  for (const child of c.children) {
    if (!names.has(child)) failures.push(`${c.name}: unknown child ${child}`);
    else if (components.find((item) => item.name === child)?.parent !== c.name)
      failures.push(`${c.name}/${child}: inconsistent parent link`);
  }
  if (c.parent && !components.find((item) => item.name === c.parent)?.children.includes(c.name))
    failures.push(`${c.name}: inconsistent parent ${c.parent}`);
  for (const p of c.props) {
    fields.props++;
    if (p.defaultExpression !== undefined) fields.defaults++;
    if (!p.type || /\.pnpm|node_modules|import\(["'](?:\.|\/|[A-Za-z]:)/.test(p.type))
      failures.push(`${c.name}.${p.name}: missing or nonportable type`);
    if (!p.descriptionZh?.trim() || !p.descriptionEn?.trim())
      missingDescriptions.push(`${c.name}.${p.name}`);
    else if (/^(Props for |Event emitted|Supported .* slot)/.test(p.descriptionEn))
      partialDescriptions.push(`${c.name}.${p.name}`);
  }
  for (const event of c.events) {
    fields.events++;
    const propName =
      metadata.library === "kui-vue"
        ? "on" + event.name.charAt(0).toUpperCase() + event.name.slice(1)
        : event.name;
    const prop = c.props.find((p) => p.name === propName);
    if (!prop || prop.type !== event.type)
      failures.push(`${c.name}.${event.name}: event/prop mismatch`);
  }
  for (const model of c.models || []) {
    if (
      !c.props.some((p) => p.name === model.prop) ||
      !c.events.some((e) => e.name === model.event)
    )
      failures.push(`${c.name}.${model.prop}: model binding mismatch`);
  }
  for (const example of c.examples) {
    fields.exampleReferences++;
    const file = example.id || example.file || "";
    const absolute = path.resolve(root, file);
    if (!absolute.startsWith(root + path.sep) || !fs.existsSync(absolute))
      failures.push(`${c.name}: missing example ${file}`);
    else if (fs.readFileSync(absolute, "utf8").trim() !== example.source)
      failures.push(`${c.name}: stale example ${file}`);
    examples.add(file);
  }
}
if (
  metadata.version !== JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version
)
  failures.push("Package/metadata version mismatch");
if (
  fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8") !==
  fs.readFileSync(path.join(root, "public/kui-components.json"), "utf8")
)
  failures.push("Published/web metadata mismatch");

// Independently inventory actual runtime exports; metadata is not an export catalog.
const entry = path.join(
  root,
  metadata.library === "kui-vue" ? "components/index.ts" : "components/components.ts",
);
const config = ts.readConfigFile(path.join(root, "tsconfig.app.json"), ts.sys.readFile).config;
const options = ts.parseJsonConfigFileContent(config, ts.sys, root).options;
const program = ts.createProgram([entry], { ...options, noEmit: true });
const checker = program.getTypeChecker();
const moduleSymbol = checker.getSymbolAtLocation(program.getSourceFile(entry)!)!;
const runtimeExports = checker
  .getExportsOfModule(moduleSymbol)
  .filter((symbol) => {
    const actual = symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
    return !!(actual.flags & ts.SymbolFlags.Value);
  })
  .map((symbol) => symbol.name);
for (const name of names) {
  if (!runtimeExports.includes(name))
    failures.push(`Metadata component is not a public runtime export: ${name}`);
}
for (const field of missingDescriptions) failures.push(`Missing bilingual description: ${field}`);
for (const field of partialDescriptions) failures.push(`Generic placeholder description: ${field}`);
const report = {
  library: metadata.library,
  version: metadata.version,
  counts: { components: names.size, ...fields, uniqueExamples: examples.size },
  failures,
  reviewNeeded: {
    missingDescriptions,
    generatedDescriptions: partialDescriptions,
    componentsWithoutBehaviorRules: unreviewedBehavior,
    runtimeExportsOutsideComponentMetadata: runtimeExports.filter((name) => !names.has(name)),
  },
  limits: [
    "Source-backed generation and API checks must run separately; this audit does not reimplement the extractor.",
    "Missing defaultExpression means extraction was unavailable, NOT that the runtime default is undefined.",
    "Descriptions and behavior require semantic review; nonempty text does not establish correctness.",
    "Examples are checked against source, not executed by this audit.",
    "Data structures, native attribute overloads and utility APIs require installed declarations.",
  ],
};
console.log(
  JSON.stringify(
    process.argv.includes("--json")
      ? report
      : {
          library: report.library,
          counts: report.counts,
          failures,
          reviewNeeded: {
            missingDescriptions: missingDescriptions.length,
            generatedDescriptions: partialDescriptions.length,
            componentsWithoutBehaviorRules: unreviewedBehavior.length,
            runtimeExportsOutsideComponentMetadata:
              report.reviewNeeded.runtimeExportsOutsideComponentMetadata,
          },
          detailCommand: "pnpm audit:ai-metadata --json",
        },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
