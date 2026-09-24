import { describe, expect, it } from "vitest";
import { syncApiTables, propertyType } from "../scripts/api-docs";

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
