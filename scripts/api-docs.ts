import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

export interface ApiProperty {
  name: string;
  type: string;
  eventName?: string;
  required?: boolean;
  defaultExpression?: string;
  enumValues?: unknown[];
}
export interface ApiComponent {
  name: string;
  documentation: string;
  props: ApiProperty[];
}
const key = (value: string) => value.replace(/[`\s_-]/g, "").toLowerCase();
const cell = (value: string) => value.replace(/\r?\n/g, " ").replace(/\|/g, "\\|");
const code = (value: string) => "`" + cell(value).replace(/`/g, "&#96;") + "`";
const split = (line: string) =>
  line
    .trim()
    .slice(1, -1)
    .split(/(?<!\\)\|/)
    .map((s) => s.trim());
function displayType(type: string): string {
  const source = ts.createSourceFile(
    "api-type.ts",
    `type ApiType = ${type};`,
    ts.ScriptTarget.Latest,
    true,
  );
  const declaration = source.statements[0];
  if (!declaration || !ts.isTypeAliasDeclaration(declaration)) return type;
  let node = declaration.type;
  while (ts.isParenthesizedTypeNode(node)) node = node.type;
  if (!ts.isUnionTypeNode(node)) return type;
  const members = node.types.filter((member) => member.kind !== ts.SyntaxKind.UndefinedKeyword);
  if (members.length === node.types.length || !members.length) return type;
  return members.map((member) => member.getText(source)).join(" | ");
}

export function propertyType(prop: ApiProperty): string {
  // Expand literal unions for readers; retain named structural types and callbacks.
  return prop.enumValues?.length &&
    prop.enumValues.every((value) => ["string", "number", "boolean"].includes(typeof value)) &&
    !prop.enumValues.every((value) => typeof value === "boolean")
    ? prop.enumValues.map((value) => JSON.stringify(value)).join(" | ")
    : displayType(prop.type);
}

/** Only source-derived columns are rewritten. Descriptions and examples remain authored. */
export function syncApiTables(
  content: string,
  components: ApiComponent[],
  primaryName: string,
  english: boolean,
): { content: string; tables: number } {
  const lines = content.split("\n");
  let owner = components.find((c) => c.name === primaryName);
  let eligible = false;
  let tables = 0;
  const output: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(/^#{2,6}\s+(.+)$/)?.[1];
    if (heading) {
      const named = [...components]
        .sort((a, b) => b.name.length - a.name.length)
        .find((c) => new RegExp(`(^|[ .])${c.name}(?=$|[ .])`, "i").test(heading));
      eligible =
        !/Slots?|插槽|Methods?|方法|Expose|Options|配置项/i.test(heading) &&
        (!!named ||
          /^(API|Props|属性|Events?|事件|Event API|通用外观|Common appearance)$/i.test(heading));
      owner =
        named ||
        (/^(Events?|事件|Props|属性)$/i.test(heading)
          ? owner
          : components.find((c) => c.name === primaryName));
    }
    if (
      !eligible ||
      !owner ||
      !lines[i].startsWith("|") ||
      !lines[i + 1]?.match(/^\|[\s:|-]+\|$/)
    ) {
      output.push(lines[i]);
      continue;
    }
    const headers = split(lines[i]);
    const typeIndex = headers.findIndex(
      (h, index) =>
        index > 0 &&
        /^(类型|Type|回调参数|参数|Arguments|Parameters|Callback parameters)$/i.test(h),
    );
    if (typeIndex < 0) {
      output.push(lines[i]);
      continue;
    }
    let end = i + 2;
    while (lines[end]?.startsWith("|")) end++;
    const props = new Map<string, ApiProperty>();
    for (const prop of owner.props) {
      props.set(key(prop.name), prop);
      if (prop.eventName) props.set(key(prop.eventName), prop);
    }
    const newHeaders = [...headers];
    if (/^(回调参数|参数|Arguments|Parameters|Callback parameters)$/i.test(headers[typeIndex])) {
      newHeaders[typeIndex] = english ? "Type" : "类型";
    }
    const rows = lines.slice(i + 2, end).map((line) => {
      const cells = split(line);
      const rawName = cells[0].replace(/\s*\(.*?\)/g, "").replace(/\s*（.*?）/g, "");
      const prop =
        props.get(key(rawName)) ||
        props.get(key(rawName.replace(/^v-model(?::|$)/, "") || "modelValue"));
      if (prop) {
        cells[typeIndex] = code(propertyType(prop));
      }
      return "| " + cells.join(" | ") + " |";
    });
    output.push(
      "| " + newHeaders.join(" | ") + " |",
      "| " + newHeaders.map(() => "---").join(" | ") + " |",
      ...rows,
    );
    tables++;
    i = end - 1;
  }
  return { content: output.join("\n"), tables };
}

export function syncDocumentation(root: string, components: ApiComponent[], check: boolean): void {
  const groups = new Map<string, ApiComponent[]>();
  for (const component of components) {
    const slug = component.documentation.split("/").pop()!;
    const directory = path.join(root, "components", slug);
    if (!fs.existsSync(directory)) continue;
    groups.set(directory, [...(groups.get(directory) || []), component]);
  }
  const failures: string[] = [];
  let tables = 0;
  for (const [directory, group] of groups) {
    const primary =
      group.find((c) => key(c.name.replace(/^K(?=[A-Z])/, "")) === key(path.basename(directory))) ||
      group[0];
    for (const english of [false, true]) {
      const file = path.join(directory, english ? "index.en_US.md" : "index.md");
      if (!fs.existsSync(file)) continue;
      const before = fs.readFileSync(file, "utf8");
      const result = syncApiTables(before, group, primary.name, english);
      tables += result.tables;
      if (result.content !== before) {
        if (check) failures.push(path.relative(root, file));
        else fs.writeFileSync(file, result.content);
      }
    }
  }
  if (!tables) throw new Error("No source-backed API tables found");
  if (failures.length)
    throw new Error(
      "API type columns differ from source. Run pnpm generate:api-docs:\n" + failures.join("\n"),
    );
  console.log(`${check ? "Verified" : "Generated"} ${tables} source-backed API tables.`);
}
