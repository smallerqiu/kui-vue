import fs from "node:fs";
import path from "node:path";
import fg from "fast-glob";
import { getComponentNames } from "../plugins/resolver/index.ts";
import { getPropsData, getPropsNameCandidates } from "../plugins/resolver/vetur.ts";

const componentEntry = path.resolve(import.meta.dirname, "../components/index.ts");

// Keep the scope of the previous in-build check. These components intentionally
// inherit or share props that are not all documented in their own API tables.
const ignoredComponents = new Set([
  "Option",
  "TextArea",
  "Input",
  "Select",
  "GridItem",
  "Grid",
  "Empty",
  "Button",
]);

interface MissingDoc {
  component: string;
  property: string;
  documentationPath: string;
}

const missingDocs: MissingDoc[] = [];
const styleIssues: string[] = [];
const documentationFiles = ["index.md", "index.en_US.md"];

getComponentNames().forEach((componentName) => {
  if (ignoredComponents.has(componentName)) return;

  documentationFiles.forEach((documentationFile) => {
    const props = getPropsData(
      componentEntry,
      getPropsNameCandidates(componentName),
      documentationFile
    );

    props.forEach((prop) => {
      if (!prop.documented) {
        missingDocs.push({
          component: componentName,
          property: prop.name,
          documentationPath: prop.documentationPath,
        });
      }
    });
  });
});

const primitiveTypes = new Set(["string", "number", "boolean", "bool", "any", "Object", "object"]);
for (const documentationPath of fg.sync("components/*/index{,.en_US}.md", {
  cwd: path.resolve(import.meta.dirname, ".."),
})) {
  const absolutePath = path.resolve(import.meta.dirname, "..", documentationPath);
  const isEnglish = documentationPath.endsWith(".en_US.md");
  fs.readFileSync(absolutePath, "utf8")
    .split("\n")
    .forEach((line, index) => {
      if (!line.startsWith("|")) return;
      const cells = line
        .replaceAll("\\|", "\u0000")
        .split("|")
        .map((cell) => cell.replaceAll("\u0000", "\\|").trim());
      const type = cells[3] || "";
      if (/\bVnode\b/.test(type)) {
        styleIssues.push(`${documentationPath}:${index + 1} uses Vnode instead of VNode`);
      }
      const commaParts = type.split(/\s*[,，、]\s*/).filter(Boolean);
      const isSimpleCommaUnion =
        commaParts.length > 1 &&
        !commaParts.includes("slot") &&
        commaParts.every((part) => primitiveTypes.has(part) || /^[A-Z][\w]*(?:\[\])?$/.test(part));
      const slashParts = type.split(/\s*\/\s*/).filter(Boolean);
      const isSimpleSlashUnion =
        slashParts.length > 1 && slashParts.every((part) => /^[A-Za-z][\w]*(?:\[\])?$/.test(part));
      const bracket = type.match(/^\[([^\]]+)\]$/);
      const bracketParts = bracket?.[1].split(/\s*[,，、]\s*/).filter(Boolean) || [];
      const isEnumBracket =
        bracketParts.length > 1 && bracketParts.some((part) => !primitiveTypes.has(part));
      if (isSimpleCommaUnion || isSimpleSlashUnion || isEnumBracket) {
        styleIssues.push(
          `${documentationPath}:${index + 1} uses a non-standard union type: ${type}`
        );
      }
      if (!isEnglish && /`[^`]+`\s*[,，]\s*`[^`]+`/.test(line)) {
        styleIssues.push(
          `${documentationPath}:${index + 1} uses a comma between Chinese enum values`
        );
      }
      if (isEnglish && /`[^`]+`\s*、\s*`[^`]+`/.test(line)) {
        styleIssues.push(
          `${documentationPath}:${index + 1} uses a Chinese separator in English text`
        );
      }
    });
}

if (missingDocs.length === 0) {
  console.log("API documentation covers all checked component props.");
} else {
  console.error(`Found ${missingDocs.length} undocumented component props:`);
  missingDocs.forEach(({ component, property, documentationPath }) => {
    console.error(`- <${component}>.${property} (${documentationPath})`);
  });
  process.exitCode = 1;
}

if (styleIssues.length === 0) {
  console.log("API documentation type formatting is consistent.");
} else {
  console.error(`Found ${styleIssues.length} API documentation style issues:`);
  styleIssues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
}
