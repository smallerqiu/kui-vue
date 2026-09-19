import { spawnSync } from "node:child_process";
import path from "node:path";

const result = spawnSync(process.execPath, [path.resolve(import.meta.dirname, "../ai/evals/run.mjs"), "--reference"], { stdio: "inherit" });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
