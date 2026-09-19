import { spawnSync } from "node:child_process";
import process from "node:process";

// Each stage exits before the next starts, releasing TypeScript and bundler heaps.
const steps = {
  ai: ["--experimental-strip-types", "scripts/generate-ai-assets.ts"],
  css: ["node_modules/vite/bin/vite.js", "build", "--config", "vite.config.css.ts"],
  es: ["node_modules/vite/bin/vite.js", "build"],
  lib: ["node_modules/vite/bin/vite.js", "build", "--config", "vite.config.lib.ts"],
  umd: ["node_modules/vite/bin/vite.js", "build", "--config", "vite.config.umd.ts"],
  types: ["node_modules/vue-tsc/bin/vue-tsc.js", "-p", "tsconfig.build-types.json"],
  editors: ["--experimental-strip-types", "scripts/generate-editor-assets.ts"],
  compat: ["scripts/create-cjs-types.mjs"],
  docs: ["node_modules/vite/bin/vite.js", "build", "--config", "vite.config.docs.ts"],
};
const profiles = {
  all: ["ai", "css", "lib", "umd", "es", "types", "editors", "compat"],
  local: ["css", "es", "types", "editors"],
  types: ["types", "editors", "compat"],
};
const profile = process.argv[2] || "all";
const stages = profiles[profile] || (steps[profile] ? [profile] : null);
if (!stages) throw new Error(`Unknown build stage: ${profile}`);
const heap = Number(process.env.KUI_BUILD_HEAP_MB || 2048);
if (!Number.isInteger(heap) || heap < 512)
  throw new Error("KUI_BUILD_HEAP_MB must be an integer >= 512");
for (const stage of stages) {
  console.log(`\n[kui build] ${stage} (Node heap limit ${heap} MB)`);
  const result = spawnSync(
    process.execPath,
    [`--max-old-space-size=${heap}`, "--import", "./scripts/build-metrics.mjs", ...steps[stage]],
    {
      stdio: "inherit",
      env: { ...process.env, RAYON_NUM_THREADS: "2", UV_THREADPOOL_SIZE: "2" },
    },
  );
  if (result.error || result.status !== 0) {
    console.error(
      `[kui build] ${stage} failed; later stages were not started.`,
      result.error || result.signal || "",
    );
    process.exit(result.status || 1);
  }
}
