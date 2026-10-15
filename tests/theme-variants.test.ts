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
  for (const entry of [
    "card/styles/index.less",
    "input/styles/index.less",
    "input-number/styles/index.less",
  ]) {
    const source = (await fs.readFile(path.join(root, "components", entry), "utf8")).replace(
      /\/\/[^\n]*/g,
      "",
    );
    expect(source, `${entry} must call the shared theme mixin`).toContain(".kui-theme-value(");
    // Hand-copying `var(--kui-theme-*-bg, …)` is how the presets drifted apart per component.
    // Comments are stripped first: naming a token in prose is not the same as re-copying its chain.
    for (const token of ["--kui-theme-fill-bg", "--kui-theme-outline-border"])
      expect(source, `${entry} must not hand-write the ${token} chain`).not.toContain(token);
  }
});

// Audit ⑪: these four controls answered `theme="plain"` by emitting the `borderless` class, which
// left their hand-written `.k-<component>-plain` rules as selectors nothing could ever match.
// `bordered={false}` (no border) and `plain` (no border *and* no surface) are separate asks, so
// each now has its own class — the DOM half of that is asserted by tests/theme-plain-emission.
// Both classes also opt out of the base focus ring: a control that was asked to drop its border
// drops the ring too (the author's call, and `DatePicker` used to be the one exception).
const PLAIN_CONTROLS = [
  { entry: "components/date-picker/styles/index.less", name: "k-datepicker", selection: false },
  { entry: "components/select/styles/index.less", name: "k-select", selection: true },
  { entry: "components/cascader/styles/index.less", name: "k-cascader", selection: true },
  { entry: "components/tree-select/styles/index.less", name: "k-tree-select", selection: true },
] as const;

// 3b: these four controls typed six presets but painted two. `outline` / `solid` / `dashed` /
// `underlined` were dropped before the class list *and* had no rule, so `theme="outline"` was
// invisible twice over. Each now draws from the shared arm, and the tiers that own their interaction
// states are kept out of the base repaint — `solid` because it repaints its own surface, `underlined`
// because its bottom edge is the whole affordance.
const declarations = (body: string | undefined, label: string) => {
  expect(body, `${label} paints nothing`).toBeDefined();
  return new Map(
    body!
      .split(";")
      .filter(Boolean)
      .map((entry) => {
        const [property, ...rest] = entry.split(":");
        return [property.trim(), rest.join(":").trim()] as const;
      }),
  );
};

it("paints the four tiers the controls used to swallow", async () => {
  for (const { entry, name } of PLAIN_CONTROLS) {
    const compiled = await fileRules(entry);

    // `fill` was hand-copied here too; it now resolves through the same chain every control uses.
    expect(
      declarations(compiled.get(`.${name}-fill`), `${name} fill`).get("border-color"),
      `${name} still hand-writes the fill border`,
    ).toBe("var(--kui-theme-fill-border)");

    const outline = declarations(compiled.get(`.${name}-outline`), `${name} outline`);
    expect(outline.get("border")).toBe(
      "1px solid var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border)))",
    );
    expect(outline.get("background")).toBe("var(--kui-theme-outline-bg)");

    const dashed = declarations(compiled.get(`.${name}-dashed`), `${name} dashed`);
    expect(dashed.get("border")).toBe(
      "1px dashed var(--kui-theme-dashed-border, var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border))))",
    );

    const solid = `.${name}-solid:not(.${name}-disabled)`;
    const solidBody = declarations(compiled.get(solid), `${name} solid`);
    expect(solidBody.get("background")).toBe("var(--kui-theme-solid-bg, var(--kui-color-primary))");
    expect(solidBody.get("color")).toBe(
      "var(--kui-theme-solid-text, var(--kui-color-text-on-solid))",
    );
    const solidHover = declarations(
      compiled.get(`${solid}:hover, ${solid}.${name}-opened`),
      `${name} solid hover`,
    );
    expect(solidHover.get("background-color")).toBe(
      "var(--kui-color-primary-hover, color-mix(in srgb, var(--kui-color-primary) 90%, transparent))",
    );
    expect(solidHover.get("box-shadow")).toBe("none");
    // The base ring is primary on a primary surface, i.e. invisible; it is redrawn inverted rather
    // than dropped, so a keyboard user still sees focus.
    expect(
      declarations(
        compiled.get(`${solid}:focus, ${solid}.${name}-opened`),
        `${name} solid focus`,
      ).get("outline-color"),
    ).toBe("color-mix(in srgb, var(--kui-color-text-on-solid) 40%, transparent)");

    const underlined = `.${name}-underlined:not(.${name}-disabled)`;
    const underlinedBody = declarations(compiled.get(underlined), `${name} underlined`);
    expect(underlinedBody.get("border-width")).toBe("0 0 1px");
    expect(underlinedBody.get("border-radius")).toBe("0");
    expect(underlinedBody.get("box-shadow")).toBe("none");
    expect(
      declarations(
        compiled.get(`${underlined}:focus, ${underlined}:focus-within`),
        `${name} underlined focus`,
      ).get("border-color"),
    ).toBe("transparent transparent var(--kui-color-primary)");

    // A rule the base control still matches wins on specificity, so the tiers that own their
    // interaction states have to be named inside its `:not()` too: `solid` repaints its own surface,
    // `underlined` lights only its bottom edge, and neither may be given the base border and glow.
    for (const [state, extra] of [
      ["hover", ["fill", "solid", "underlined"]],
      ["focus", ["underlined"]],
    ] as const) {
      const painted = [...compiled.keys()].filter(
        (key) => key.startsWith(`.${name}:not(`) && key.endsWith(`:${state}`),
      );
      expect(painted.length, `${name} lost its base ${state} rule`).toBeGreaterThan(0);
      for (const key of painted)
        for (const modifier of extra)
          expect(key, `${name} ${state} still repaints ${modifier}: ${key}`).toContain(
            `.${name}-${modifier}`,
          );
    }
  }
});

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

    // The base control rule repaints the border on hover and out-specifies the blocks above, which
    // is how a borderless or plain box grew a primary border under the pointer — so it has to name
    // both inside its `:not()`. The focus rule names them for the same reason by the author's call:
    // a control that was asked to drop its border drops the ring too. `DatePicker` used to be the
    // exception (`Select` / `Cascader` / `TreeSelect` already excluded both), and it is now the
    // fourth of a kind, so this loop has no per-component ring policy left to encode.
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

// 3b-乙: the box path types six presets and used to paint two — `theme="outline"` was dropped by
// `input-base` before the class list and `theme="solid"` by `input-box`, while the LESS had no rule
// for either, so both were invisible twice over. The same tier class reaches three different
// elements (the decorated wrapper `[data-multiple]`, the bare `<input>` `[data-single]`, and
// `<textarea>`), and `InputNumber` builds its box through `InputBase`, so the contract is checked
// per shape instead of per component.
const BOX_PATHS = [
  {
    entry: "components/input/styles/index.less",
    shapes: [
      {
        prefix: "k-input",
        marker: "[data-multiple]",
        text: true,
        chrome: ["icon", "prefix", "suffix", "clearable", "password-icon"],
      },
      { prefix: "k-input", marker: "[data-single]", text: true, chrome: [] },
      // A `<textarea>` is its own typed surface: no inner `-text` element, no chrome.
      { prefix: "k-textarea", marker: "", text: false, chrome: [] },
    ],
  },
  {
    entry: "components/input-number/styles/index.less",
    // The tier sits on the same element in both shapes, so no attribute tells them apart.
    shapes: [
      {
        prefix: "k-input-number",
        marker: "",
        text: true,
        chrome: ["icon", "prefix", "suffix", "clearable", "controls"],
      },
    ],
  },
] as const;

// The shared arm decides what a tier paints, so each component rule is compared against
// `.kui-theme-value()` itself rather than against a declaration string copied out of this file.
const arms = async () => {
  const compiled = await probe();
  return new Map(
    VALUES.map((value) => [
      value,
      declarations(compiled.get(`.probe-${value}`), `theme arm ${value}`),
    ]),
  );
};

const covers = (body: Map<string, string>, arm: Map<string, string>) =>
  [...arm].every(([property, value]) => body.get(property) === value);

// A compiled key is a comma group, and its `:not()` arguments name tiers without painting them, so
// both have to be settled before a rule says anything about a tier.
const withoutGuards = (key: string) => key.replace(/:not\([^)]*\)/g, "");

// A comma separates selectors, not `:not()` arguments, so the group is split on parenthesis depth:
// an exclusion list is one selector, and a guard can only be checked where it actually sits.
const selectors = (key: string) => {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (const char of key) {
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (char === "," && depth === 0) {
      parts.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  parts.push(current.trim());
  return parts;
};

const paints = (key: string, prefix: string, tier: string, marker: string) =>
  new RegExp(`\\.${prefix}-${tier}(?![\\w-])`).test(withoutGuards(key)) &&
  (marker === "" || key.includes(marker));

// Does one of the rules for this tier on this shape — optionally the one that reaches into a
// sub-selector such as `.k-input-text` or `::placeholder` — end up painting `property: value`?
const painting = (
  compiled: Map<string, string>,
  { prefix, marker }: { prefix: string; marker: string },
  tier: string,
  property: string,
  value: string,
  token?: string,
) =>
  [...compiled].some(
    ([key, body]) =>
      paints(key, prefix, tier, marker) &&
      (token === undefined || key.includes(token)) &&
      declarations(body, key).get(property) === value,
  );

it("paints every theme tier on every shape of the box path", async () => {
  const arm = await arms();
  for (const { entry, shapes } of BOX_PATHS) {
    const compiled = await fileRules(entry);
    for (const shape of shapes) {
      const box = `${shape.prefix}${shape.marker}`;
      for (const tier of VALUES) {
        const painted = [...compiled].filter(
          ([key, body]) =>
            paints(key, shape.prefix, tier, shape.marker) &&
            covers(declarations(body, key), arm.get(tier)!),
        );
        expect(
          painted.length,
          `${box} paints nothing for theme="${tier}": the shared arm never reaches it`,
        ).toBeGreaterThan(0);

        // A disabled box has to keep showing that it is disabled, and only the three tiers that
        // paint a whole surface or a bottom edge can cover it up. The guard is looked for on the
        // selector of *this* shape: a sibling in the same comma group proves nothing.
        if (["solid", "plain", "underlined"].includes(tier))
          for (const [key] of painted)
            for (const selector of selectors(key).filter((entry) =>
              paints(entry, shape.prefix, tier, shape.marker),
            ))
              expect(selector, `${box} ${tier} repaints a disabled box: ${selector}`).toContain(
                "disabled",
              );
      }
    }
  }
});

it("inverts the chrome inside a solid box and redraws its focus ring", async () => {
  const onSolid = "var(--kui-color-text-on-solid)";
  for (const { entry, shapes } of BOX_PATHS) {
    const compiled = await fileRules(entry);
    for (const shape of shapes) {
      // Primary surface, primary text: the typed value, its placeholder and whatever chrome the
      // wrapper adds are all drawn from the inverted text token instead of left to go unreadable.
      if (shape.text)
        expect(
          painting(compiled, shape, "solid", "color", onSolid, `.${shape.prefix}-text`),
          `${shape.prefix} solid leaves the typed text dark`,
        ).toBe(true);
      expect(
        painting(
          compiled,
          shape,
          "solid",
          "color",
          "color-mix(in srgb, var(--kui-color-text-on-solid) 75%, transparent)",
          "::placeholder",
        ),
        `${shape.prefix}${shape.marker} solid leaves the placeholder unreadable`,
      ).toBe(true);
      for (const part of shape.chrome)
        expect(
          painting(
            compiled,
            shape,
            "solid",
            "color",
            "color-mix(in srgb, var(--kui-color-text-on-solid) 85%, transparent)",
            `.${shape.prefix}-${part}`,
          ),
          `${shape.prefix} solid leaves .${shape.prefix}-${part} dark`,
        ).toBe(true);

      // The base ring is primary on a primary surface, i.e. nothing: it is redrawn in the inverted
      // colour rather than dropped, so a keyboard user still sees where the caret is.
      expect(
        painting(
          compiled,
          shape,
          "solid",
          "outline-color",
          "color-mix(in srgb, var(--kui-color-text-on-solid) 40%, transparent)",
          "focus",
        ),
        `${shape.prefix}${shape.marker} solid loses its focus ring`,
      ).toBe(true);
    }
  }
});

it("spends the focus affordance on the edge a tier actually has", async () => {
  const underline = "transparent transparent var(--kui-color-primary)";
  for (const { entry, shapes } of BOX_PATHS) {
    const compiled = await fileRules(entry);
    for (const shape of shapes) {
      // `underlined` is a bottom edge: no ring, no glow, and hover / focus only light that edge.
      expect(
        painting(compiled, shape, "underlined", "outline", "none", ":focus"),
        `${shape.prefix}${shape.marker} underlined keeps a ring it cannot show`,
      ).toBe(true);
      expect(
        painting(compiled, shape, "underlined", "border-color", underline, ":hover"),
        `${shape.prefix}${shape.marker} underlined does not light its edge on hover`,
      ).toBe(true);

      // `plain` was asked for no border and no surface, so hover and focus must not bring either
      // back — the same call the select family makes, now shared by the box path.
      expect(
        painting(compiled, shape, "plain", "border-color", "transparent", ":hover"),
        `${shape.prefix}${shape.marker} plain grows a border on hover`,
      ).toBe(true);
      expect(
        painting(compiled, shape, "plain", "outline", "none", "focus"),
        `${shape.prefix}${shape.marker} plain keeps a focus ring`,
      ).toBe(true);
    }
  }
});

// `:not()` counts its most specific argument, not the sum, so a base rule that repaints the border
// out-specifies a tier block unless the tier is named inside that list. `fill` is already there;
// `outline` and `dashed` deliberately are not — their border is what is meant to light up.
const OWNS_ITS_STATES = ["fill", "plain", "solid", "underlined"] as const;
const KEEPS_BASE_INTERACTION = ["outline", "dashed"] as const;

const baseRepaints = (compiled: Map<string, string>, prefix: string) =>
  [...compiled].filter(
    ([key, body]) =>
      // Only the rules that repaint the border are a risk: a tier cannot own an interaction the
      // base no longer draws. A `:not()` argument belongs to the selector in front of it, so the
      // comma group is split once those lists are gone — otherwise one exclusion reads as a
      // selector.
      declarations(body, key).has("border-color") &&
      key.includes(":not(") &&
      withoutGuards(key)
        .split(",")
        .some((member) => {
          const head = member.trim();
          return (
            new RegExp(`^\\.${prefix}(-focus)?(\\[[^\\]]*\\])?:`).test(head) &&
            !new RegExp(`\\.${prefix}-(?:${VALUES.join("|")})(?![\\w-])`).test(head)
          );
        }),
  );

it("keeps the tiers that own their states out of the base repaint", async () => {
  for (const { entry, shapes } of BOX_PATHS) {
    const compiled = await fileRules(entry);
    for (const prefix of new Set(shapes.map((shape) => shape.prefix))) {
      const base = baseRepaints(compiled, prefix);
      expect(base.length, `${prefix} lost its base border repaint`).toBeGreaterThan(0);
      for (const [key] of base) {
        for (const tier of OWNS_ITS_STATES)
          expect(key, `${prefix} base repaint still matches ${tier}: ${key}`).toContain(
            `.${prefix}-${tier}`,
          );
        for (const tier of KEEPS_BASE_INTERACTION)
          expect(key, `${prefix} base repaint drops ${tier}'s interaction: ${key}`).not.toContain(
            `.${prefix}-${tier}`,
          );
      }
    }
  }
});
