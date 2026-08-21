import fs from "node:fs";
import path from "node:path";
import { compileTemplate, parse } from "@vue/compiler-sfc";

interface EvalCase {
  name: string;
  prompt: string;
  components: string[];
  source: string;
}

const root = path.resolve(import.meta.dirname, "..");
const cases = JSON.parse(
  fs.readFileSync(path.join(root, "ai/evals/cases.json"), "utf8")
) as EvalCase[];
const metadata = JSON.parse(fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8")) as {
  components: Array<{ name: string }>;
};
const available = new Set(metadata.components.map((component) => component.name));
const errors: string[] = [];

if (cases.length < 20) errors.push(`Expected at least 20 eval cases, received ${cases.length}`);
for (const item of cases) {
  if (!item.prompt.trim()) errors.push(`${item.name}: prompt is empty`);
  item.components.forEach((component) => {
    if (!available.has(component)) errors.push(`${item.name}: unknown component ${component}`);
    if (!new RegExp(`<${component}(?:\\s|>|/)`).test(item.source)) {
      errors.push(`${item.name}: source does not use ${component}`);
    }
  });
  const { descriptor, errors: parseErrors } = parse(item.source, { filename: `${item.name}.vue` });
  parseErrors.forEach((error) => errors.push(`${item.name}: ${String(error)}`));
  if (descriptor.template) {
    const result = compileTemplate({
      id: item.name,
      filename: `${item.name}.vue`,
      source: descriptor.template.content,
    });
    result.errors.forEach((error) => errors.push(`${item.name}: ${String(error)}`));
  }
}

if (errors.length) throw new Error(`AI eval failures:\n${errors.join("\n")}`);
console.log(`Validated ${cases.length} Kui Vue AI eval cases.`);
