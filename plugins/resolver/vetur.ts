import fs from "fs";
import path from "path";
import { Node, Project, Type, TypeFormatFlags } from "ts-morph";
import { JsxEmit } from "typescript";

export interface PropData {
  name: string;
  description: string;
  type: string;
  eventName?: string;
  boolean: boolean;
  documented: boolean;
  documentationPath: string;
}

export const toKebabCase = (name: string): string =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

const normalizeDocumentationKey = (name: string): string =>
  name.replace(/`/g, "").trim().toLowerCase().replace(/[-_]/g, "");

export const getComponentTagNames = (name: string): string[] => {
  // These names collide with native/SVG tags when lower-cased. Keep their
  // PascalCase spelling so editor metadata resolves the Kui components.
  if (name === "Image" || name === "Switch") return [name];
  const tagName = toKebabCase(name);
  return name.startsWith("K") ? [tagName] : [tagName, `k-${tagName}`];
};

export const getPropsNameCandidates = (componentName: string): string[] => {
  const normalizedName = componentName.replace(/^K(?=[A-Z])/, "").replace(/^TimeLine/, "Timeline");
  return [...new Set([`${componentName}Props`, `${normalizedName}Props`])];
};

/**
 * 解析 Markdown 表格提取属性和描述
 * @param mdPath Markdown 文件路径
 */
const getDocDescriptions = (mdPath: string): Record<string, string> => {
  const descriptions: Record<string, string> = {};
  if (!fs.existsSync(mdPath)) return descriptions;

  const content = fs.readFileSync(mdPath, "utf-8");
  const lines = content.split("\n"); // 按行处理

  lines.forEach((line) => {
    // Ignore escaped pipes inside Markdown cells.
    const columns = line
      .split(/(?<!\\)\|/)
      .map((c) => c.trim().replace(/\\\|/g, "|"))
      .filter((c) => c !== "");

    // 确保这一行至少有属性名和描述两列
    if (columns.length >= 2) {
      const rawProp = columns[0];
      const description = columns[1];

      const normalizedProp = rawProp.toLowerCase();
      const isHeader =
        ["property", "属性"].includes(normalizedProp) ||
        (normalizedProp === "prop" && /^(description|说明)$/i.test(description));
      const isSeparator = /^:?-{3,}:?$/.test(rawProp);
      if (!isHeader && !isSeparator) {
        // 统一小写存储，确保 offsetTop 能匹配到 offsettop
        descriptions[normalizeDocumentationKey(rawProp)] = description;
      }
    }
  });

  return descriptions;
};

// 初始化 ts-morph 项目
const project = new Project({
  compilerOptions: {
    skipLibCheck: true,
    jsx: JsxEmit.Preserve,
    moduleResolution: 2, // Node 模式
    allowJs: true,
    esModuleInterop: true,
  },
});

// 预加载所有组件源码以建立类型上下文
project.addSourceFilesAtPaths(path.resolve(import.meta.dirname, "../../components/**/*.ts"));
project.addSourceFilesAtPaths(path.resolve(import.meta.dirname, "../../components/**/*.tsx"));

/**
 * 提取组件的 Props 属性并关联文档描述
 */
const isBooleanType = (type: Type): boolean => {
  const types = type.isUnion()
    ? type.getUnionTypes().filter((item) => !item.isUndefined())
    : [type];
  return types.length > 0 && types.every((item) => item.isBoolean() || item.isBooleanLiteral());
};

export const getPropsData = (
  componentPath: string,
  propsNames: string | string[],
  documentationFileName = "index.md",
): PropData[] => {
  const sourceFile =
    project.getSourceFile(componentPath) || project.addSourceFileAtPath(componentPath);
  const exportSymbols = sourceFile.getExportSymbols();
  const candidates = Array.isArray(propsNames) ? propsNames : [propsNames];
  const targetSymbol = candidates
    .map((name) => exportSymbols.find((symbol) => symbol.getName() === name))
    .find((symbol) => symbol !== undefined);

  if (!targetSymbol) return [];

  // 追踪重定向（解决 export { Props } from './xxx' 的问题）
  const aliasedSymbol = targetSymbol.getAliasedSymbol() || targetSymbol;
  const declarations = aliasedSymbol.getDeclarations();
  if (declarations.length === 0) return [];

  // 定位组件真实的物理目录并读取 md
  const componentDir = path.dirname(declarations[0].getSourceFile().getFilePath());
  const mdPath = path.join(componentDir, documentationFileName);
  const docMap = getDocDescriptions(mdPath);

  const type = aliasedSymbol.getDeclaredType();
  const properties = type.getApparentProperties(); // 获取包含继承的所有属性

  const props: PropData[] = [];

  properties.forEach((prop) => {
    const name = prop.getName();
    if (name.startsWith("_")) return;

    const propDecls = prop.getDeclarations();
    const isProjectProp = propDecls.some(
      (declaration) => !declaration.getSourceFile().getFilePath().includes("/node_modules/"),
    );
    if (!isProjectProp) return;

    // 提取真实 TS 类型字符串
    const type = prop.getTypeAtLocation(declarations[0]);
    const propType = type.getText(undefined, TypeFormatFlags.UseAliasDefinedOutsideCurrentScope);

    const eventName = /^on[A-Z]/.test(name)
      ? `${name.charAt(2).toLowerCase()}${name.slice(3)}`
      : undefined;
    // Vue documentation commonly uses kebab-case props and event names without
    // the on-prefix. Treat those spellings as the same public API entry.
    const documentedDescription = [name, eventName]
      .filter((candidate): candidate is string => Boolean(candidate))
      .map(normalizeDocumentationKey)
      .map((candidate) => docMap[candidate])
      .find(Boolean);
    let description = documentedDescription;

    if (!description && propDecls.length > 0 && Node.isJSDocable(propDecls[0])) {
      description = propDecls[0]
        .getJsDocs()
        .map((doc) => doc.getCommentText())
        .join(" ");
    }

    props.push({
      name,
      description: description || `Props for ${name}`,
      type: propType,
      eventName,
      boolean: isBooleanType(type),
      documented: Boolean(documentedDescription),
      documentationPath: mdPath,
    });
  });

  const implementationFile = declarations[0].getSourceFile();
  const emittedEvents = new Set<string>();
  implementationFile.getDescendants().forEach((node) => {
    if (!Node.isPropertyAssignment(node) || node.getName() !== "emits") return;
    const initializer = node.getInitializer();
    if (Node.isArrayLiteralExpression(initializer)) {
      initializer.getElements().forEach((element) => {
        if (Node.isStringLiteral(element)) emittedEvents.add(element.getLiteralValue());
      });
    } else if (Node.isObjectLiteralExpression(initializer)) {
      initializer.getProperties().forEach((property) => {
        if (Node.isPropertyAssignment(property) || Node.isMethodDeclaration(property)) {
          emittedEvents.add(property.getName().replace(/^['"]|['"]$/g, ""));
        }
      });
    }
  });

  emittedEvents.forEach((eventName) => {
    if (eventName.startsWith("update:")) return;
    const name = `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
    if (props.some((prop) => prop.name === name)) return;
    const documentedDescription = [eventName, name]
      .map(normalizeDocumentationKey)
      .map((candidate) => docMap[candidate])
      .find(Boolean);
    props.push({
      name,
      description: documentedDescription || `Event emitted for ${eventName}`,
      type: "(...args: unknown[]) => void",
      eventName,
      boolean: false,
      documented: Boolean(documentedDescription),
      documentationPath: mdPath,
    });
  });

  return props;
};

/**
 * 生成 Vetur 配置文件
 */
export const generateVeturConfig = (componentNames: string[]) => {
  const tags: Record<string, { description: string; attributes: string[] }> = {};
  const attributes: Record<string, { description?: string; type: string; options?: string[] }> = {};

  // 组件库总入口文件
  const entryFilePath = path.resolve(import.meta.dirname, "../../components/index.ts");
  componentNames.forEach((name) => {
    const propList = getPropsData(entryFilePath, getPropsNameCandidates(name));

    getComponentTagNames(name).forEach((tagName) => {
      tags[tagName] = {
        description: `Kui Vue component: ${name}`,
        attributes: propList.map((prop) => prop.eventName ?? prop.name),
      };

      propList.forEach((prop) => {
        attributes[`${tagName}/${prop.eventName ?? prop.name}`] = {
          description: prop.description,
          type: prop.type,
          options: prop.boolean ? ["true", "false"] : undefined,
        };
      });
    });
  });

  const distDir = path.resolve(import.meta.dirname, "../../vetur");
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  fs.writeFileSync(path.resolve(distDir, "tags.json"), JSON.stringify(tags, null, 2));
  fs.writeFileSync(path.resolve(distDir, "attributes.json"), JSON.stringify(attributes, null, 2));

  console.log(
    "\x1b[32mVetur tags and attributes generated successfully in /vetur directory.\x1b[0m",
  );
};
