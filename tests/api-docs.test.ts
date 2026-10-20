import path from "node:path";
import { describe, expect, it } from "vitest";
import { syncApiTables, propertyType } from "../scripts/api-docs";
import {
  checkDefaultColumns,
  readDefaultDocuments,
  type DefaultComponent,
} from "../scripts/check-api-defaults";

describe("source-backed API documentation", () => {
  it("does not mistake a parameter-name header for a parameter-type header", () => {
    const source =
      "## API\n| 参数 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| text | content | number | - |";
    const result = syncApiTables(
      source,
      [
        {
          name: "Divider",
          documentation: "/components/divider",
          props: [{ name: "text", type: "string | undefined" }],
        },
      ],
      "Divider",
      false,
    ).content;
    expect(result).toContain("| 参数 | 说明 | 类型 | 默认值 |");
    expect(result).toContain("| text | content | `string` | - |");
  });
  const components = [
    {
      name: "Input",
      documentation: "/components/input",
      props: [
        { name: "icon", type: "IconType[] | undefined" },
        { name: "modelValue", type: "string | undefined" },
        { name: "onChange", eventName: "change", type: "(value: string) => void" },
      ],
    },
    {
      name: "InputGroup",
      documentation: "/components/input",
      props: [{ name: "icon", type: "boolean" }],
    },
  ];
  it("replaces stale types, preserving descriptions and runtime default explanations", () => {
    const source =
      "## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| icon | A \\| B | ReactNode | inherited |\n| v-model | value | number | - |";
    const result = syncApiTables(source, components, "Input", false).content;
    expect(result).toContain("| icon | A \\| B | `IconType[]` | inherited |");
    expect(result).toContain("| v-model | value | `string` | - |");
    expect(syncApiTables(result, components, "Input", false).content).toBe(result);
  });
  it("uses the correct subcomponent and ignores slots", () => {
    const source =
      "## InputGroup API\n| Property | Description | Type |\n| --- | --- | --- |\n| icon | custom | wrong |\n## Slots\n| Property | Description | Type |\n| --- | --- | --- |\n| icon | custom | slot |";
    const result = syncApiTables(source, components, "Input", true).content;
    expect(result).toContain("| icon | custom | `boolean` |");
    expect(result).toContain("| icon | custom | slot |");
  });
  it("derives event signatures and is idempotent after renaming the parameter header", () => {
    const source =
      "## Events\n| Event | Description | Parameters |\n| --- | --- | --- |\n| change | changed | value |";
    const result = syncApiTables(source, components, "Input", true).content;
    expect(result).toContain("`(value: string) => void`");
    expect(syncApiTables(result, components, "Input", true).content).toBe(result);
  });
  it("expands enum aliases without spelling boolean as false | true", () => {
    expect(
      propertyType({ name: "size", type: "Size | undefined", enumValues: ["small", "large"] }),
    ).toBe('"small" | "large"');
    expect(
      propertyType({ name: "disabled", type: "boolean | undefined", enumValues: [false, true] }),
    ).toBe("boolean");
  });
  it("omits only outer undefined, preserving nested and meaningful types", () => {
    const cases = [
      ["undefined | string | null", "string | null"],
      [
        "((value: string | undefined) => number | undefined) | undefined",
        "((value: string | undefined) => number | undefined)",
      ],
      ["() => string | undefined", "() => string | undefined"],
      ["Array<string | undefined> | undefined", "Array<string | undefined>"],
      ["{ value: string | undefined } | undefined", "{ value: string | undefined }"],
      ['"undefined" | undefined', '"undefined"'],
      ["undefined", "undefined"],
    ];
    for (const [type, expected] of cases) {
      const prop = { name: "value", type };
      expect(propertyType(prop)).toBe(expected);
      expect(prop.type).toBe(type);
    }
  });
});

const defaults = (
  markdown: string,
  components: DefaultComponent[],
  unchecked: string[] | undefined = undefined,
) => checkDefaultColumns([{ file: "components/x/index.md", content: markdown, components }], unchecked);

describe("documented default column", () => {
  const surfaces: DefaultComponent[] = [
    {
      name: "Dropdown",
      props: [{ name: "placement", defaultExpression: '"bottom-left"' }],
    },
    {
      name: "DropdownButton",
      props: [{ name: "placement", defaultExpression: '"bottom-right"' }],
    },
  ];
  const twoTables =
    "## Dropdown API\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n" +
    '| placement | 位置 | `"bottom-left"` | bottom-left |\n\n## DropdownButton API\n' +
    "| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n" +
    '| placement | 位置 | `"bottom-right"` | bottom-right |\n';

  it("judges each table by the component its heading names", () => {
    expect(defaults(twoTables, surfaces).failures).toEqual([]);
    // The two components default the same prop to different places, so swapping the cells has to bite.
    const swapped = twoTables
      .replace("| bottom-left |", "| swapped |")
      .replace("| bottom-right |", "| bottom-left |");
    const result = defaults(swapped, surfaces);
    expect(result.failures).toHaveLength(2);
    expect(result.failures.join("\n")).toContain("Dropdown.placement");
    expect(result.failures.join("\n")).toContain("DropdownButton.placement");
  });

  it("reads the value through the code marks, quotes and unit notes authors use", () => {
    const result = defaults(
      "| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n" +
        '| size | 尺寸 | `"small"` | `"small"` |\n| height | 高度 | `number` | 256(px) |\n' +
        "| theme | 档位 | `\"fill\"` | `fill` |\n| open | 展开 | `boolean` | false |\n",
      [
        {
          name: "Panel",
          props: [
            { name: "size", defaultExpression: '"small"' },
            { name: "height", defaultExpression: "256" },
            { name: "theme", defaultExpression: 'props.theme ?? "fill"' },
            { name: "open", defaultExpression: "false" },
          ],
        },
      ],
    );
    expect(result.failures).toEqual([]);
    expect(result.matched).toBe(4);
  });

  it("fails a cell that contradicts the source and a source default left undocumented", () => {
    const result = defaults(
      "| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n" +
        "| bordered | 边框 | `boolean` | true |\n| theme | 档位 | `\"fill\"` | - |\n",
      [
        {
          name: "Card",
          props: [
            { name: "bordered", defaultExpression: "false" },
            { name: "theme", defaultExpression: '"fill"' },
          ],
        },
      ],
    );
    expect(result.failures).toHaveLength(2);
    expect(result.failures[0]).toContain("Card.bordered documents \"true\"");
    expect(result.failures[1]).toContain("Card.theme defaults to \"fill\" in source");
  });

  it("counts a default it cannot read as a literal instead of judging it", () => {
    const result = defaults(
      "| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| locale | 语言 | `string` | 根据语言 |\n",
      [{ name: "Calendar", props: [{ name: "locale", defaultExpression: "resolveLocale()" }] }],
    );
    expect(result.failures).toEqual([]);
    expect(result.expressions).toHaveLength(1);
  });

  it("skips only the props listed as unreadable by the extractor", () => {
    const markdown =
      "| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| suffixCls | 类名前缀 | `string` | layout-sider |\n";
    const components: DefaultComponent[] = [
      { name: "Layout", props: [{ name: "suffixCls", defaultExpression: '"layout"' }] },
    ];
    expect(defaults(markdown, components, []).failures).toHaveLength(1);
    expect(defaults(markdown, components).failures).toEqual([]);
  });

  it("finds no documented default contradicting the source in the shipped tables", () => {
    const result = defaults("", [], []);
    expect(result.rows).toBe(0);
    const shipped = checkDefaultColumns(
      readDefaultDocuments(path.resolve(import.meta.dirname, "..")),
    );
    expect(shipped.failures, shipped.failures.join("\n")).toEqual([]);
    // The reader has to keep finding the tables, or an empty pass would look like a clean check.
    expect(shipped.rows).toBeGreaterThan(1000);
    expect(shipped.matched).toBeGreaterThan(1000);
  });
});
