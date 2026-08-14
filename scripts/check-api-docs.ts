import path from "node:path";
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

if (missingDocs.length === 0) {
  console.log("API documentation covers all checked component props.");
} else {
  console.error(`Found ${missingDocs.length} undocumented component props:`);
  missingDocs.forEach(({ component, property, documentationPath }) => {
    console.error(`- <${component}>.${property} (${documentationPath})`);
  });
  process.exitCode = 1;
}
