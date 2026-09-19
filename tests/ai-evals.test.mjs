import { describe, expect, it } from "vitest";
import { config, inspectSource, loadCases } from "../ai/evals/evaluate.mjs";

const cases = loadCases();
const primary = cases.find((item) => item.name === "primary-action");
describe(`${config.library} AI eval gates`, () => {
  it("accepts the primary reference and rejects an invalid prop enum", () => {
    expect(inspectSource(primary.source, primary).issues).toEqual([]);
    expect(
      inspectSource(primary.source.replace('type="primary"', 'type="invented"'), primary).issues
        .length,
    ).toBeGreaterThan(0);
  });
  it("does not count component names inside comments as actual usage", () => {
    const source =
      config.framework === "vue"
        ? '<script setup lang="ts">const text = "Button";</script><template><!-- <Button /> --><div>{{ text }}</div></template>'
        : "/* <Button /> */ export default function Example() { return <div>Button</div>; }";
    expect(inspectSource(source, primary).issues).toContain(
      "Missing required component: Button (use canonical names)",
    );
  });
  it("rejects a button that omits the requested submit behavior", () => {
    const source = primary.source
      .replace(' htmlType="submit"', "")
      .replace(' html-type="submit"', "");
    expect(
      inspectSource(source, primary).issues.some((issue) =>
        issue.includes("Missing scenario requirement"),
      ),
    ).toBe(true);
  });
  it("rejects lookalike imports from another library", () => {
    expect(
      inspectSource(primary.source.replace(config.library, "another-library"), primary).issues,
    ).toContain(`Missing canonical import from ${config.library}: Button`);
  });
  it("rejects missing output, malformed code and type suppression", () => {
    expect(inspectSource("", primary).issues.length).toBeGreaterThan(0);
    expect(inspectSource("<Button", primary).issues.length).toBeGreaterThan(0);
    expect(inspectSource("// @ts-nocheck\n" + primary.source, primary).issues).toContain(
      "Type-check suppression is not allowed",
    );
  });
  it("keeps paired basic scenarios and business templates in the suite", () => {
    expect(cases.length).toBeGreaterThanOrEqual(26);
    for (const name of ["business-form", "business-table", "business-modal-editor"])
      expect(cases.some((item) => item.name === name && item.sourceFile)).toBe(true);
  });
});
