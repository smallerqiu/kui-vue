import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// Cross-checks the 默认值 column of the API tables against the default the source declares.
// `pnpm generate:api-docs` rewrites the type column from source and `pnpm check:ai-assets` proves the
// metadata matches the code, so the metadata is a faithful stand-in for the source — and 默认值 is the
// one column of these tables nobody rewrites.
//
// A row whose source default is not a literal (resolved inside the component body, derived from the
// locale) is counted, not judged; `--report` lists those rows.

export interface DefaultProp {
  name: string;
  defaultExpression?: string;
  /** Values the prop's own type allows, when it is a closed set. */
  enumValues?: unknown[];
}
export interface DefaultComponent {
  name: string;
  props: DefaultProp[];
}
export interface DefaultDocument {
  /** Path shown in messages. */
  file: string;
  content: string;
  components: DefaultComponent[];
}
export interface DefaultCheckResult {
  rows: number;
  matched: number;
  failures: string[];
  unverified: string[];
  expressions: string[];
}

// Rows the extractor cannot speak for, keyed `Component.prop`. Layout, Sider, Content and Footer each
// pass their own `suffixCls` at the call site, so the single literal default in the shared props
// object matches none of the rows written under their headings.
export const UNCHECKED_PROPS = ["Layout.suffixCls"];

const split = (line: string) =>
  line
    .trim()
    .slice(1, -1)
    .split(/(?<!\\)\|/)
    .map((cell) => cell.trim());

// Hyphens and spaces carry no meaning in these values, so `bottom-left` and `bottomleft` are one value.
const key = (value: string) => value.replace(/[`\s_-]/g, "").toLowerCase();

/** Literal value the reader sees in the 默认值 column, or null when the cell documents none. */
export function documentedDefault(cell: string): string | null {
  let text = cell.replace(/\\([`|])/g, "$1").trim();
  // `-` and `''` both read as "nothing written"; no source default is the empty string.
  if (!text || text === "-" || text === "—" || text === "''" || /^(无|没有)$/.test(text)) return null;
  // `256(px)` documents the same number as `256`.
  text = text.replace(/\s*[（(][^)）]*[)）]$/u, "").trim();
  // A table cell is prose, so authors wrap the value in code marks and quotes however they like.
  if (/^`.*`$/su.test(text)) text = text.slice(1, -1).trim();
  if (/^(["']).*\1$/su.test(text)) text = text.slice(1, -1).trim();
  return text;
}

/** Source expression simplified to the same vocabulary, or "complex" when it is not a usable literal. */
export function extractedDefault(
  expression: string | undefined,
  enumValues?: unknown[],
): string | null | "complex" {
  if (expression === undefined) return null;
  const text = expression.trim();
  if (/^(undefined|null|void 0)$/u.test(text)) return null;
  if (/^["'].+["']$/su.test(text)) return inVocabulary(text.slice(1, -1), enumValues);
  if (/^(true|false)$/u.test(text) || /^[-+]?\d+(\.\d+)?$/u.test(text)) return inVocabulary(text, enumValues);
  // `props.size ?? inherited.size ?? "small"` lands on the literal at the end of the chain.
  const tail = text.match(/(?:\?\?|\|\|)\s*(?:"([^"]*)"|'([^']*)'|(true|false|-?\d+(?:\.\d+)?))$/u);
  if (!tail) return "complex";
  const before = text.slice(0, text.length - tail[0].length);
  // `todayText ?? locale.k.datePicker.today ?? "Today"` only reaches the literal when the language table
  // has no entry, so the reader's default is the language, not "Today". Same reason the cell says 根据语言.
  if (/locale|messages|i18n|\blang\b/iu.test(before)) return "complex";
  return inVocabulary(tail[1] ?? tail[2] ?? tail[3] ?? "", enumValues);
}

/**
 * A fallback the prop's own type cannot express is an internal sentinel, not something the reader gets:
 * `size` settling on `"default"` while the documented values are small / medium / large, say, or `0`
 * standing in for "unset". Those rows are left unjudged rather than pushed into the column.
 */
function inVocabulary(value: string, enumValues?: unknown[]): string | "complex" {
  if (!enumValues?.length) return value;
  if (!enumValues.some((item) => key(String(item)) === key(value))) return "complex";
  return value;
}

export function checkDefaultColumns(
  documents: DefaultDocument[],
  unchecked: string[] = UNCHECKED_PROPS,
): DefaultCheckResult {
  const result: DefaultCheckResult = {
    rows: 0,
    matched: 0,
    failures: [],
    unverified: [],
    expressions: [],
  };
  for (const { file, content, components } of documents) {
    const names = components.map((component) => component.name);
    const propsByOwner = new Map(
      components.map(
        (component) =>
          [
            component.name,
            new Map(component.props.map((prop) => [key(prop.name), prop] as const)),
          ] as const,
      ),
    );
    // Longest name first, so `DropdownButton` is not read as `Dropdown`.
    const owners = [...names].sort((a, b) => b.length - a.length);
    let owner = names[0];
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const heading = lines[i].match(/^#{2,6}\s+(.+)$/)?.[1];
      if (heading) {
        const named = owners.find((name) =>
          new RegExp(`(^|[ .])${name}(?=$|[ .])`, "i").test(heading),
        );
        // A heading that names no component belongs to the file's main one, unless it is a generic
        // section that follows whatever component came last.
        if (named) owner = named;
        else if (!/^(Events?|事件|Props|属性|API)$/i.test(heading)) owner = names[0];
      }
      if (!lines[i].startsWith("|") || !lines[i + 1]?.match(/^\|[\s:|-]+\|$/)) continue;
      const defaultIndex = split(lines[i]).findIndex((header) =>
        /^(默认值|Default|Defaults)$/i.test(header),
      );
      if (defaultIndex < 0) continue;
      let end = i + 2;
      while (lines[end]?.startsWith("|")) end++;
      for (let row = i + 2; row < end; row++) {
        const cells = split(lines[row]);
        // Only a parenthetical set off by whitespace is a note on the name; `checked(unchecked)`
        // names a different thing than `checked` and must not be folded onto it.
        const name = cells[0]
          .replace(/\s+[（(][^)）]*[)）]\s*$/u, "")
          .replace(/^\*+|\*+$/g, "")
          .trim();
        const prop = propsByOwner.get(owner)?.get(key(name));
        if (!prop) continue;
        result.rows++;
        const id = `${owner}.${name}`;
        if (unchecked.includes(id)) continue;
        const where = `${file}:${row + 1}`;
        const doc = documentedDefault(cells[defaultIndex] ?? "");
        const source = extractedDefault(prop.defaultExpression, prop.enumValues);
        if (source === "complex") {
          result.expressions.push(
            `${where}: ${id} documents ${JSON.stringify(doc)}, source default is the expression ${JSON.stringify(
              prop.defaultExpression,
            )}`,
          );
          continue;
        }
        if (doc === null && source === null) {
          result.matched++;
          continue;
        }
        // A blank cell is only wrong when the source really does default the prop.
        if (doc === null) {
          result.failures.push(
            `${where}: ${id} defaults to ${JSON.stringify(source)} in source, 默认值 cell is blank`,
          );
          continue;
        }
        if (source === null) {
          result.unverified.push(
            `${where}: ${id} documents ${JSON.stringify(doc)} with no literal default in source`,
          );
          continue;
        }
        if (key(doc) === key(source)) result.matched++;
        else
          result.failures.push(
            `${where}: ${id} documents ${JSON.stringify(doc)}, source default is ${JSON.stringify(
              source,
            )}`,
          );
      }
      i = end - 1;
    }
  }
  return result;
}

export function readDefaultDocuments(root: string): DefaultDocument[] {
  const metadata = JSON.parse(
    fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8"),
  ) as { components: Array<DefaultComponent & { documentation: string }> };
  const groups = new Map<string, Array<DefaultComponent & { documentation: string }>>();
  for (const component of metadata.components) {
    const slug = component.documentation.split("/").pop() ?? "";
    const directory = path.join(root, "components", slug);
    if (fs.existsSync(directory))
      groups.set(directory, [...(groups.get(directory) || []), component]);
  }
  const documents: DefaultDocument[] = [];
  for (const [directory, components] of groups)
    for (const english of [false, true]) {
      const file = path.join(directory, english ? "index.en_US.md" : "index.md");
      if (!fs.existsSync(file)) continue;
      documents.push({
        file: path.relative(root, file),
        content: fs.readFileSync(file, "utf8"),
        components,
      });
    }
  return documents;
}

const invoked = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invoked === import.meta.filename) {
  const root = path.resolve(import.meta.dirname, "..");
  const { rows, matched, failures, unverified, expressions } = checkDefaultColumns(
    readDefaultDocuments(root),
  );
  console.log(
    `默认值列 ↔ 源码默认值：${rows} 行带默认值列，${matched} 行核对通过，${failures.length} 行不一致，${unverified.length} 行源码取不到字面默认值，${expressions.length} 行是表达式。`,
  );
  for (const line of failures) console.log(`  ! ${line}`);
  if (process.argv.includes("--report")) {
    for (const line of unverified) console.log(`  ? ${line}`);
    for (const line of expressions) console.log(`  ~ ${line}`);
  } else if (failures.length)
    console.log(
      "\nThe type column rewrites itself; this one is authored. Fix the 默认值 cell in the component markdown, then run pnpm generate:api-docs and pnpm generate:ai. Pass --report to list the rows the extractor cannot judge.",
    );
  process.exitCode = failures.length ? 1 : 0;
}
