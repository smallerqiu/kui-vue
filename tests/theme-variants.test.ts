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

// Flatten compiled CSS into `selector -> declarations`, whitespace-normalised.
const flatten = (css: string) =>
  new Map(
    [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)]
      // The text before `{` still carries the previous rule's closing brace and comments.
      .map((match) => [
        (match[1].split("}").pop() ?? "").replace(/\s+/g, " ").trim(),
        match[2].replace(/\s+/g, " ").trim().replace(/;$/, ""),
      ]),
  );

const rules = async (source: string) => flatten(await compile(source));

// Compile one component's own LESS so a rule can be checked where it is written.
const fileRules = async (entry: string) => {
  const filename = path.join(root, entry);
  return flatten((await less.render(await fs.readFile(filename, "utf8"), { filename })).css);
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

// Audit ⑪: these four controls answered `theme="plain"` by emitting the `borderless` class, which
// left their hand-written `.k-<component>-plain` rules as selectors nothing could ever match.
// `bordered={false}` (no border) and `plain` (no border *and* no surface) are separate asks, so
// each now has its own class — the DOM half of that is asserted by tests/theme-plain-emission.
const PLAIN_CONTROLS = [
  { entry: "components/date-picker/styles/index.less", name: "k-datepicker", selection: false },
  { entry: "components/select/styles/index.less", name: "k-select", selection: true },
  { entry: "components/cascader/styles/index.less", name: "k-cascader", selection: true },
  { entry: "components/tree-select/styles/index.less", name: "k-tree-select", selection: true },
] as const;

it("paints `plain` on the controls, guarded so a disabled box stays disabled", async () => {
  for (const { entry, name, selection } of PLAIN_CONTROLS) {
    const compiled = await fileRules(entry);
    const plain = `.${name}-plain:not(.${name}-disabled)`;
    // The values come from the shared `plain` arm, not from a re-copied `transparent`.
    expect(compiled.get(plain), `${name} paints no plain box`).toBe(
      "border-color: var(--kui-theme-plain-border); background: var(--kui-theme-plain-bg); box-shadow: none",
    );
    // Hover, focus and an open panel must not bring a border or a surface back.
    expect(
      compiled.get(`${plain}:hover, ${plain}:focus, ${plain}.${name}-opened`),
      `${name} lets plain repaint on hover / focus / opened`,
    ).toBe(
      "border-color: var(--kui-theme-plain-border); background: var(--kui-theme-plain-bg); box-shadow: none",
    );
    if (selection)
      expect(
        compiled.get(`${plain} .${name}-selection`),
        `${name} leaves the inner box of a plain control painted`,
      ).toBe("box-shadow: none; border-color: transparent; background-color: transparent");

    // The base control rule repaints the border on hover / focus and out-specifies the blocks
    // above, which is how a borderless or plain box grew a primary border under the pointer.
    // Every such rule has to name both modifiers inside its `:not()`. A control whose focus ring
    // is theme-independent (`DatePicker`) has no `:not()` focus rule, so there is nothing to add.
    for (const state of ["hover", "focus"]) {
      const repaint = [...compiled.keys()].filter(
        (key) => key.startsWith(`.${name}:not(`) && key.endsWith(`:${state}`),
      );
      for (const key of repaint)
        for (const modifier of ["borderless", "plain"])
          expect(key, `${name} ${state} must not match ${modifier}: ${key}`).toContain(
            `.${name}-${modifier}`,
          );
      if (state === "hover")
        expect(repaint.length, `${name} lost its base hover rule`).toBeGreaterThan(0);
    }
  }
});
