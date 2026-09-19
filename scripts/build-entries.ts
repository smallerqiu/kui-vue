import fs from "node:fs";
import path from "node:path";

export const getLocaleEntries = () => {
  const localePath = path.resolve(import.meta.dirname, "../components/locale");
  if (!fs.existsSync(localePath)) return {};
  const files = fs.readdirSync(localePath);
  const entries: Record<string, string> = {};
  files.forEach((file) => {
    if (file.endsWith(".ts") || file.endsWith(".js")) {
      const name = file.replace(/\.(ts|js)$/, "");
      entries[`locale/${name}`] = path.resolve(import.meta.dirname, `../components/locale/${file}`);
    }
  });
  return entries;
};
