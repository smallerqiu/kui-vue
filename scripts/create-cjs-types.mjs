import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const typesDirectory = path.resolve("types");

await copyFile(path.join(typesDirectory, "index.d.ts"), path.join(typesDirectory, "index.d.cts"));

const localeDirectory = path.join(typesDirectory, "locale");
await mkdir(localeDirectory, { recursive: true });

for (const filename of await readdir(localeDirectory)) {
  if (!filename.endsWith(".d.ts")) continue;
  await copyFile(
    path.join(localeDirectory, filename),
    path.join(localeDirectory, filename.replace(/\.d\.ts$/, ".d.cts"))
  );
}
