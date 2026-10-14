// The `theme` presets live in one LESS mixin (`.kui-theme-value()` in
// components/styles/less-css-var.less) so a value cannot mean different things in different
// components again. These tests compile that file and read the declarations each value paints:
// the pixel-level half of the contract lives in scripts/check-theme.ts.
import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "..");
const styles = path.join(root, "components/styles");
const VALUES = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;

const compile = async (source: string) => {
  const filename = path.join(styles, "theme-variants-probe.less");
  return (await less.render(source, { filename })).css;
};

// Flatten the compiled CSS into `selector -> declarations`, whitespace-normalised.
const rules = async (source: string) => {
  const css = await compile(source);
  return new Map(
    [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)]
      // The text before `{` still carries the previous rule's closing brace and comments.
      .map((match) => [
        (match[1].split("}").pop() ?? "").replace(/\s+/g, " ").trim(),
        match[2].replace(/\s+/g, " ").trim().replace(/;$/, ""),
      ]),
  );
};

const probe = async () =>
  rules(
    `@import "less-css-var.less";\n${VALUES.map(
      (value) => `.probe-${value} { .kui-theme-value(${value}); }`,
    ).join("\n")}\n.probe-default { .kui-theme-value(default); }`,
  );

it("paints every supported theme value through its own override hook", async () => {
  const compiled = await probe();
  const expected: Record<(typeof VALUES)[number], Record<string, string>> = {
    fill: {
      "border-color": "var(--kui-theme-fill-border)",
      background:
        "var(--kui-theme-fill-bg, var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay)))",
    },
    outline: {
      border:
        "1px solid var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border)))",
      background: "var(--kui-theme-outline-bg)",
    },
    plain: {
      "border-color": "var(--kui-theme-plain-border)",
      background: "var(--kui-theme-plain-bg)",
    },
    solid: {
      "border-color":
        "var(--kui-theme-solid-border, var(--kui-theme-solid-bg, var(--kui-color-primary)))",
      background: "var(--kui-theme-solid-bg, var(--kui-color-primary))",
      color: "var(--kui-theme-solid-text, var(--kui-color-text-on-solid))",
    },
    dashed: {
      border:
        "1px dashed var(--kui-theme-dashed-border, var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border))))",
      background: "var(--kui-theme-outline-bg)",
    },
    underlined: {
      "border-style": "solid",
      "border-width": "0 0 1px",
      "border-color":
        "var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border)))",
      "border-radius": "0",
      background: "var(--kui-theme-plain-bg)",
      "box-shadow": "none",
    },
  };
  for (const value of VALUES) {
    const body = compiled.get(`.probe-${value}`);
    expect(body, `.probe-${value} emitted no declarations`).toBeDefined();
    const declarations = new Map(
      body!
        .split(";")
        .filter(Boolean)
        .map((entry) => {
          const [property, ...rest] = entry.split(":");
          return [property.trim(), rest.join(":").trim()] as const;
        }),
    );
    for (const [property, expectedValue] of Object.entries(expected[value]))
      expect(declarations.get(property), `${value} must set ${property}`).toBe(expectedValue);
  }
});

it("keeps the underline focus rule and the surface values free of it", async () => {
  const compiled = await probe();
  // Only a control gets the underline, and its bottom edge is what reacts to focus.
  expect(compiled.get(".probe-underlined:focus, .probe-underlined:focus-within")).toBe(
    "border-color: transparent transparent var(--kui-color-primary)",
  );
  // The others must not grow a focus rule of their own from the shared mixin.
  for (const value of ["fill", "outline", "plain", "solid", "dashed"])
    expect(compiled.has(`.probe-${value}:focus`), `${value} must not add a focus rule`).toBe(false);
});

it("leaves `default` to the component instead of painting an empty preset", async () => {
  const compiled = await probe();
  // `theme="default"` means "listen to the component", so the shared mixin deliberately has no
  // arm for it. A component that emits `k-<component>-default` writes its own rule (Card's is
  // the border radius) — an empty preset here would be the dead class this contract exists to end.
  expect(compiled.has(".probe-default"), "`default` must not emit declarations").toBe(false);
});

it("draws the migrated components from the shared mixin rather than re-copying the chains", async () => {
  for (const entry of ["card/styles/index.less", "input/styles/index.less"]) {
    const source = await fs.readFile(path.join(root, "components", entry), "utf8");
    expect(source, `${entry} must call the shared theme mixin`).toContain(".kui-theme-value(");
    // Hand-copying `var(--kui-theme-*-bg, …)` is how the presets drifted apart per component.
    for (const token of ["--kui-theme-fill-bg", "--kui-theme-outline-border"])
      expect(source, `${entry} must not hand-write the ${token} chain`).not.toContain(token);
  }
});
