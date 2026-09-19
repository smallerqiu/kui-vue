import fs from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { config, evaluate, loadCases, metadata, root } from "./evaluate.mjs";

const args = process.argv.slice(2);
const options = {};
for (let i = 0; i < args.length; i++) {
  const key = args[i];
  if (key === "--reference") options.reference = true;
  else if (
    ["--model", "--generator", "--responses", "--out", "--case", "--export-prompts"].includes(
      key,
    ) &&
    args[i + 1]
  )
    options[key.slice(2)] = args[++i];
  else throw Error(`Unknown or incomplete argument: ${key}`);
}
const modes = [
  options.reference,
  options.generator,
  options.responses,
  options["export-prompts"],
].filter(Boolean);
if (modes.length !== 1)
  throw Error(
    "Choose exactly one: --reference, --generator executable, --responses file.json, --export-prompts file.json",
  );
let cases = loadCases();
if (options.case) {
  cases = cases.filter((item) => item.name === options.case);
  if (!cases.length) throw Error(`Unknown case: ${options.case}`);
}
const skill = fs.readFileSync(path.join(root, `ai/skills/${config.library}/SKILL.md`), "utf8");
const prompts = cases.map((item) => ({
  name: item.name,
  model: options.model,
  prompt: item.prompt,
  expectProps: item.expectProps ?? [],
  instructions: `${skill}\nReturn only a complete ${config.framework === "vue" ? 'Vue SFC with <script setup lang="ts">, local imports and template' : "TSX module with local imports and a default component export"}. Use canonical component names: ${item.components.join(", ")}. Use literal values for expectProps requirements. Do not use type-check suppression or external relative imports.`,
  api: metadata.components.filter((component) => item.components.includes(component.name)),
}));
const write = (file, value) => {
  fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n");
};
if (options["export-prompts"]) {
  write(options["export-prompts"], prompts);
  console.log(`Exported ${prompts.length} prompts without reference answers.`);
} else {
  if (!options.reference && !options.model)
    throw Error("Model evaluations require --model (record the actual model/version)");
  const started = Date.now();
  const sources = {};
  const generation = {};
  if (options.reference)
    cases.forEach((item) => {
      sources[item.name] = item.source;
    });
  else if (options.responses) {
    const data = JSON.parse(fs.readFileSync(options.responses, "utf8"));
    if (!data || Array.isArray(data) || typeof data !== "object")
      throw Error("Responses must be an object mapping case names to source strings");
    for (const item of cases) {
      if (typeof data[item.name] !== "string")
        throw Error(`Missing source string for ${item.name}`);
      sources[item.name] = data[item.name];
    }
  } else {
    for (const prompt of prompts) {
      const before = Date.now();
      // A trusted, user-supplied executable receives JSON on stdin; stdout is code.
      // No shell interpolation and no model-generated commands are executed.
      const response = spawnSync(options.generator, [], {
        input: JSON.stringify(prompt),
        encoding: "utf8",
        timeout: 180000,
        maxBuffer: 4 * 1024 * 1024,
      });
      generation[prompt.name] = {
        durationMs: Date.now() - before,
        exitCode: response.status,
        failed: response.status !== 0,
        signal: response.signal,
      };
      sources[prompt.name] =
        response.status === 0
          ? response.stdout.trim().replace(/^```(?:tsx|typescript|vue)?\s*\n([\s\S]*?)\n```$/, "$1")
          : "";
      console.log(`${prompt.name}: ${response.status === 0 ? "generated" : "generation failed"}`);
    }
  }
  const report = {
    mode: options.reference ? "reference" : "model",
    model: options.model ?? null,
    ...evaluate(cases, sources),
    contextMode: "skill-and-api-injection",
    suiteHash: createHash("sha256").update(JSON.stringify(cases)).digest("hex"),
    contextHash: createHash("sha256").update(JSON.stringify(prompts)).digest("hex"),
    generation,
    durationMs: Date.now() - started,
  };
  const output = path.resolve(
    options.out ??
      path.join(root, ".ai-eval-results", options.reference ? "reference.json" : "model.json"),
  );
  write(output, { ...report, sources });
  console.log(
    `${config.library}: ${report.passed}/${report.total} passed static/API/type gates (${(report.passRate * 100).toFixed(1)}%). Report: ${output}`,
  );
  if (report.passed !== report.total) {
    for (const item of report.results.filter((result) => !result.passed))
      console.error(item.name, [...item.issues, ...item.typeErrors].join("\n"));
    process.exitCode = 1;
  }
}
