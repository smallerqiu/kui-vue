import process from "node:process";
import { isMainThread } from "node:worker_threads";

if (isMainThread) {
  process.on("exit", () => {
    const peakMiB = Math.round(process.resourceUsage().maxRSS / 1024);
    console.log(`[kui build] peak process RSS: ${peakMiB} MiB`);
  });
}
