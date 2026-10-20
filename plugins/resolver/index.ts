import fs from "fs";
import path from "path";
import {
  createSourceFile,
  isExportDeclaration,
  isNamedExports,
  ScriptKind,
  ScriptTarget,
} from "typescript";
import { globalComponents } from "../../components/utils/vue.ts";
import { generateVeturConfig } from "./vetur.ts";
import { generateWebTypesConfig } from "./web-types.ts";

const isComponentExport = (name: string): boolean =>
  Boolean(name) &&
  !name.endsWith("Props") &&
  name !== "default" &&
  !globalComponents.includes(name);

export const parseComponentNames = (content: string): string[] => {
  const sourceFile = createSourceFile(
    "components.ts",
    content,
    ScriptTarget.Latest,
    false,
    ScriptKind.TS
  );
  const componentNames = new Set<string>();

  sourceFile.statements.forEach((statement) => {
    if (
      !isExportDeclaration(statement) ||
      statement.isTypeOnly ||
      !statement.exportClause ||
      !isNamedExports(statement.exportClause)
    ) {
      return;
    }

    statement.exportClause.elements.forEach((element) => {
      if (element.isTypeOnly) return;

      const name = element.name.text;
      if (isComponentExport(name)) componentNames.add(name);
    });
  });

  return [...componentNames];
};

export const getComponentNames = (): string[] => {
  const entryPath = path.resolve(import.meta.dirname, "../../components/components.ts");
  if (!fs.existsSync(entryPath)) {
    throw new Error(`Component entry file not found: ${entryPath}`);
  }

  return parseComponentNames(fs.readFileSync(entryPath, "utf-8"));
};

export const generateGlobalDts = (): void => {
  const componentNames = getComponentNames();
  // for Volar

  const members = componentNames
    .map((name) => {
      const base = `${name}: typeof import('kui-vue')['${name}']`;
      return name.startsWith("K") ? base : `${base}\nK${name}: typeof import('kui-vue')['${name}']`;
    })
    .join("\n    ");

  // Augmenting `vue` is what reaches the app's own `GlobalComponents`. An app can only
  // reach `@vue/runtime-core` through whatever copy the *library* resolves, so in a
  // `pnpm link` / monorepo install — where the library carries its own copy of Vue — an
  // augmentation limited to that spelling silently misses, and every globally registered
  // component loses its prop and event types. Both spellings are emitted so the
  // declaration works whichever copy a consumer happens to resolve.
  const template = `
/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'vue' {
  export interface GlobalComponents {
  ${members}
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
  ${members}
  }
}

export {}
`;
  const distDir = path.resolve(import.meta.dirname, "../../types");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
  fs.writeFileSync(path.resolve(distDir, "global.d.ts"), template);
  console.log("Global types generated with PascalCase names.");

  const indexPath = path.resolve(import.meta.dirname, "../../types/index.d.ts");
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Generated type entry file not found: ${indexPath}`);
  }

  const content = fs.readFileSync(indexPath, "utf-8");
  const injection = `/// <reference path="./global.d.ts" />\n`;
  const legacyReference = `/// <reference types="./global.d.ts" />\n`;

  if (content.startsWith(legacyReference)) {
    fs.writeFileSync(indexPath, injection + content.slice(legacyReference.length));
  } else if (!content.includes('reference path="./global.d.ts"')) {
    fs.writeFileSync(indexPath, injection + content);
  }

  generateVeturConfig(componentNames);

  generateWebTypesConfig(componentNames);
};
