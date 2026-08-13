import { describe, expect, it } from "vitest";
import { getComponentNames, parseComponentNames } from "../plugins/resolver/index";

describe("component resolver", () => {
  it("parses value exports and their aliases", () => {
    const source = `
      export { default as Button, ButtonGroup } from "./button";
      export { OriginalName as RenamedComponent } from "./renamed";
    `;

    expect(parseComponentNames(source)).toEqual(["Button", "ButtonGroup", "RenamedComponent"]);
  });

  it("ignores type and global utility exports", () => {
    const source = `
      export type { ButtonProps } from "./button";
      export { type InputProps, Input } from "./input";
      export { message, modal, notice, loading, theme } from "./utils";
    `;

    expect(parseComponentNames(source)).toEqual(["Input"]);
  });

  it("ignores export-like text in comments and removes duplicates", () => {
    const source = `
      // export { NotAComponent } from "./comment";
      export { Button } from "./button";
      export { Button } from "./button";
    `;

    expect(parseComponentNames(source)).toEqual(["Button"]);
  });

  it("reads the project component entry", () => {
    const componentNames = getComponentNames();

    expect(componentNames).toContain("Button");
    expect(componentNames).toContain("KSwitch");
    expect(componentNames).not.toContain("message");
  });
});
