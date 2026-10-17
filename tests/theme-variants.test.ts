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
    ).join("\n")}`,
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

it("draws the migrated components from the shared mixin rather than re-copying the chains", async () => {
  for (const entry of [
    "card/styles/index.less",
    "feature-card/styles/index.less",
    "stat-card/styles/index.less",
    "input/styles/index.less",
    "input-number/styles/index.less",
    "input-tag/styles/index.less",
    "input-otp/styles/index.less",
    "color-picker/styles/index.less",
    "tag/styles/index.less",
    "checkbox/styles/index.less",
    "radio/styles/index.less",
    "alert/styles/index.less",
    "image/styles/index.less",
    "qrcode/styles/index.less",
    "page/styles/index.less",
    "kanban/styles/index.less",
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

// 3b-乙2b: the color picker's trigger is a third box shape — the tier paints the box itself, and its
// "active" state is the `k-color-picker-opened` class rather than a pseudo-class, so every tier that
// owns its states has to name the open panel the way the select family names `:focus`. The base
// opened rule is compound (`.k-color-picker.k-color-picker-opened`) so it still out-specifies the
// tiers that keep a border of their own.
it("paints the four tiers on the color picker trigger", async () => {
  const compiled = await fileRules("components/color-picker/styles/index.less");
  const name = "k-color-picker";
  const fill = `.${name}-fill:not(.${name}-disabled)`;
  const solid = `.${name}-solid:not(.${name}-disabled)`;
  const underlined = `.${name}-underlined:not(.${name}-disabled)`;
  const plain = `.${name}-plain:not(.${name}-disabled)`;

  // `fill` was hand-copied and unguarded, so a disabled box painted the fill surface instead of its
  // disabled state.
  const fillBody = declarations(compiled.get(fill), "color picker fill");
  expect(fillBody.get("border-color"), "color picker still hand-writes the fill border").toBe(
    "var(--kui-theme-fill-border)",
  );
  expect(
    declarations(
      compiled.get(`${fill}:hover, ${fill}.${name}-opened`),
      "color picker fill interaction",
    ).get("box-shadow"),
    "an open fill box keeps a glow drawn where its border used to be",
  ).toBe("none");

  expect(
    declarations(compiled.get(`.${name}-outline`), "color picker outline").get("border"),
    "color picker outline does not draw from the shared arm",
  ).toBe(
    "1px solid var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border)))",
  );
  expect(
    declarations(compiled.get(`.${name}-dashed`), "color picker dashed").get("border"),
    "color picker dashed does not draw from the shared arm",
  ).toBe(
    "1px dashed var(--kui-theme-dashed-border, var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border))))",
  );

  const solidBody = declarations(compiled.get(solid), "color picker solid");
  expect(solidBody.get("background")).toBe("var(--kui-theme-solid-bg, var(--kui-color-primary))");
  expect(solidBody.get("color")).toBe(
    "var(--kui-theme-solid-text, var(--kui-color-text-on-solid))",
  );
  const solidOpened = declarations(
    compiled.get(`${solid}:hover, ${solid}.${name}-opened`),
    "color picker solid interaction",
  );
  expect(solidOpened.get("background-color")).toBe(
    "var(--kui-color-primary-hover, color-mix(in srgb, var(--kui-color-primary) 90%, transparent))",
  );
  expect(solidOpened.get("box-shadow"), "an open solid box keeps the base glow").toBe("none");

  const underlinedBody = declarations(compiled.get(underlined), "color picker underlined");
  expect(underlinedBody.get("border-width"), "underlined keeps three edges").toBe("0 0 1px");
  expect(underlinedBody.get("border-radius")).toBe("0");
  expect(
    declarations(
      compiled.get(`${underlined}:hover, ${underlined}.${name}-opened`),
      "color picker underlined interaction",
    ).get("border-color"),
    "an open underlined box does not light its edge",
  ).toBe("transparent transparent var(--kui-color-primary)");

  expect(compiled.get(plain), "color picker paints no plain box").toBe(
    "border-color: var(--kui-theme-plain-border); background: var(--kui-theme-plain-bg); box-shadow: none",
  );
  expect(
    compiled.get(`${plain}:hover, ${plain}.${name}-opened`),
    "an open plain box brings a border or a surface back",
  ).toBe(
    "border-color: var(--kui-theme-plain-border); background: var(--kui-theme-plain-bg); box-shadow: none",
  );
  // Which tiers the base hover repaint actually reaches is a cascade question, so it is read as
  // pixels in scripts/check-theme.ts instead of asserted from this file's selector text.
});

// 3b-乙: the box path types six presets and used to paint two — `theme="outline"` was dropped by
// `input-base` before the class list and `theme="solid"` by `input-box`, while the LESS had no rule
// for either, so both were invisible twice over. The same tier class reaches three different
// elements (the decorated wrapper `[data-multiple]`, the bare `<input>` `[data-single]`, and
// `<textarea>`), and `InputNumber` builds its box through `InputBase`, so the contract is checked
// per shape instead of per component.
// 3b-乙2 adds the two composite controls: a tag box is one decorated box whose field is
// `.k-input-tag-input`, while an OTP group carries the tier class on the group and paints it on every
// `.k-input-otp-item` cell, so a shape can name the element the arm has to reach (`cell`) and the
// element the typed text lives on (`textClass`).
type BoxShape = {
  prefix: string;
  marker: string;
  // Does the box hold a separate typed element that has to invert inside a `solid` box?
  text: boolean;
  textClass?: string;
  // The descendant a tier paints on when it is not the element carrying the tier class.
  cell?: string;
  // An OTP cell never shows a placeholder; a box that does has to invert it inside `solid`.
  placeholder?: boolean;
  chrome: string[];
};
const BOX_PATHS: { entry: string; shapes: BoxShape[] }[] = [
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
  {
    entry: "components/input-tag/styles/index.less",
    shapes: [
      {
        prefix: "k-input-tag",
        marker: "",
        // The field of a tag box is `.k-input-tag-input`, not the `.k-input-text` the name derives.
        text: true,
        textClass: ".k-input-tag-input",
        chrome: ["clearable"],
      },
    ],
  },
  {
    entry: "components/input-otp/styles/index.less",
    shapes: [
      {
        // Every tier is drawn on the cells, so the group class alone would paint nothing.
        prefix: "k-input-otp",
        marker: "",
        cell: ".k-input-otp-item",
        text: false,
        placeholder: false,
        chrome: [],
      },
    ],
  },
];

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

// A shape can paint on an element other than the one carrying the tier class (`cell`), so the
// selector has to name both before it counts as painting that tier on that shape.
const paints = (key: string, prefix: string, tier: string, marker: string, cell?: string) =>
  new RegExp(`\\.${prefix}-${tier}(?![\\w-])`).test(withoutGuards(key)) &&
  (marker === "" || key.includes(marker)) &&
  (cell === undefined || key.includes(cell));

// Does one of the rules for this tier on this shape — optionally the one that reaches into a
// sub-selector such as `.k-input-text` or `::placeholder` — end up painting `property: value`?
const painting = (
  compiled: Map<string, string>,
  { prefix, marker, cell }: BoxShape,
  tier: string,
  property: string,
  value: string,
  token?: string,
) =>
  [...compiled].some(
    ([key, body]) =>
      paints(key, prefix, tier, marker, cell) &&
      (token === undefined || key.includes(token)) &&
      declarations(body, key).get(property) === value,
  );

it("paints every theme tier on every shape of the box path", async () => {
  const arm = await arms();
  for (const { entry, shapes } of BOX_PATHS) {
    const compiled = await fileRules(entry);
    for (const shape of shapes) {
      const box = `${shape.prefix}${shape.marker}${shape.cell ?? ""}`;
      for (const tier of VALUES) {
        const painted = [...compiled].filter(
          ([key, body]) =>
            paints(key, shape.prefix, tier, shape.marker, shape.cell) &&
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
              paints(entry, shape.prefix, tier, shape.marker, shape.cell),
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
          painting(
            compiled,
            shape,
            "solid",
            "color",
            onSolid,
            shape.textClass ?? `.${shape.prefix}-text`,
          ),
          `${shape.prefix} solid leaves the typed text dark`,
        ).toBe(true);
      if (shape.placeholder !== false)
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
          // The base repaint can hang on the box itself (`.k-input[data-multiple]:hover`) or reach a
          // descendant through it (`.k-input-otp:not(…) .k-input-otp-item:hover`), so either a
          // pseudo-class or a combinator may follow the box selector.
          return (
            new RegExp(`^\\.${prefix}(-focus)?(\\[[^\\]]*\\])?[:\\s]`).test(head) &&
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

// 3c: a component that resolves its tier through `resolvePaintedTheme` names the set it paints in its
// own source, and that set can only come from the stylesheet. Reading both sides is the only way to
// keep them from drifting again: a tier the source emits but the LESS never paints is a dead class
// (`k-btn-underlined` used to be one, and `k-btn-default` was worse — it is the `type="default"` class),
// and a tier the LESS paints but the source swallows is a preset the docs promise and nothing draws.
const PAINTED_CONTRACTS = [
  {
    name: "Button",
    prefix: "k-btn",
    entry: "components/button/styles/index.less",
    sources: ["components/button/button.tsx"],
  },
  {
    name: "Tag",
    prefix: "k-tag",
    entry: "components/tag/styles/index.less",
    sources: ["components/tag/index.tsx"],
  },
  {
    name: "Checkbox",
    prefix: "k-checkbox",
    entry: "components/checkbox/styles/index.less",
    sources: ["components/checkbox/checkbox.tsx"],
  },
  {
    name: "Radio",
    prefix: "k-radio",
    entry: "components/radio/styles/index.less",
    sources: ["components/radio/radio.tsx"],
  },
  // 3c-丙a: the surface family resolves the same way, and all three name their set in their own source.
  {
    name: "Card",
    prefix: "k-card",
    entry: "components/card/styles/index.less",
    sources: ["components/card/index.tsx"],
  },
  {
    name: "FeatureCard",
    prefix: "k-feature-card",
    entry: "components/feature-card/styles/index.less",
    sources: ["components/feature-card/index.tsx"],
  },
  {
    name: "StatCard",
    prefix: "k-stat-card",
    entry: "components/stat-card/styles/index.less",
    sources: ["components/stat-card/stat-card.tsx"],
  },
  // 3c-丙b: a panel and a feedback panel paint the same five tiers. `FeedbackPanel` is spelled
  // `index.tsx` in the React build and after itself in the Vue build, so the source side is looked for
  // in both spellings — this file is byte-identical in the two repos.
  {
    name: "Collapse",
    prefix: "k-collapse",
    entry: "components/collapse/styles/index.less",
    sources: ["components/collapse/collapse.tsx"],
  },
  {
    name: "FeedbackPanel",
    prefix: "k-feedback-panel",
    entry: "components/feedback-panel/styles/index.less",
    sources: [
      "components/feedback-panel/index.tsx",
      "components/feedback-panel/feedback-panel.tsx",
    ],
  },
  // 3c-丙c: `CheckCard` carried a private two-value `CheckCardTheme` while its own default frame was a
  // hand-copied `outline` arm, so the type said two looks, the stylesheet drew one of them by hand, and
  // a tier the card cannot draw could still arrive from `ConfigProvider`. The set now lives at the emit
  // point like every other surface.
  {
    name: "CheckCard",
    prefix: "k-check-card",
    entry: "components/check-card/styles/index.less",
    sources: ["components/check-card/check-card.tsx"],
  },
  // 3c-丁a: an alert spelled its tier classes `k-alert-theme-<档>`, so `solid` / `dashed` shipped as
  // `k-alert-solid` / `k-alert-dashed` with nothing behind them, and `fill` — the one class it did have —
  // was a rule of its own that no override hook could reach. The set now lives at the emit point.
  {
    name: "Alert",
    prefix: "k-alert",
    entry: "components/alert/styles/index.less",
    sources: ["components/alert/index.tsx"],
  },
  // 3c-丁b: a picture and a code both frame something, and both typed six tiers while their stylesheets
  // answered three. `outline` on an image coloured an edge that `base.less` gives no width, so the tier
  // painted nothing at all, and `k-image-solid` was a dead class name. A code emitted `k-qrcode-outline`
  // — its own default — with no rule behind it, which left its hand-copied base border unreachable from
  // `--kui-theme-outline-border`, and `solid` / `dashed` had no rule either. The sets now live at the
  // emit points like every other surface's.
  {
    name: "Image",
    prefix: "k-image",
    entry: "components/image/styles/index.less",
    sources: ["components/image/image.tsx"],
  },
  {
    name: "QRCode",
    prefix: "k-qrcode",
    entry: "components/qrcode/styles/index.less",
    sources: ["components/qrcode/index.tsx"],
  },
  // 3c-丁c: a pagination bar typed six tiers, emitted two (`k-page-fill` / `k-page-outline`), and its
  // stylesheet answered three — `k-page-plain` was a rule no react class could ever reach. `solid` and
  // `dashed` had neither class nor rule, so the two tiers the docs promised drew nothing at all.
  {
    name: "Page",
    prefix: "k-page",
    entry: "components/page/styles/index.less",
    sources: ["components/page/index.tsx"],
  },
  // 3c-丁d: a board typed two tiers and painted those two on its columns, so `plain` / `solid` / `dashed`
  // arrived from `ConfigProvider` as `k-kanban-<tier>` with no rule behind them, and the drop hint — the
  // one state a column has — sat at (0,1,0) under the (0,2,0) tier plates and never drew.
  {
    name: "Kanban",
    prefix: "k-kanban",
    entry: "components/kanban/styles/index.less",
    sources: ["components/kanban/index.tsx"],
  },
] as const;

// Read the first spelling that exists, so one shared file can point at a component whose filename
// differs between the two repositories.
const readSource = async (candidates: readonly string[]) => {
  for (const candidate of candidates) {
    try {
      return await fs.readFile(path.join(root, candidate), "utf8");
    } catch {
      // Try the other spelling of this component's file.
    }
  }
  throw new Error(`none of these files exists: ${candidates.join(", ")}`);
};

for (const contract of PAINTED_CONTRACTS) {
  it(`emits exactly the tiers ${contract.name}'s own stylesheet paints`, async () => {
    const compiled = await fileRules(contract.entry);
    const painted = VALUES.filter((value) => {
      // A tier is painted only where its class heads one of the rule's selectors. `:not()` arguments
      // are stripped first (`.k-btn-default:not(.k-btn-solid)` says when *not* to draw) and a longer
      // name is rejected, so guard lists and `.k-btn-solidx` cannot stand in for the real rule. The
      // tier class may hang on the base class too (`.k-tag.k-tag-fill` is (0,2,0) so a preset colour
      // cannot fight it), which is still this tier being painted.
      const head = new RegExp(
        `^\\.${contract.prefix}(?:\\.${contract.prefix})?-${value}(?![\\w-])`,
      );
      return [...compiled.keys()].some((selector) =>
        selector
          .replace(/:(?:not|is|where|any)\((?:[^()]|\([^()]*\))*\)/g, "")
          .split(",")
          .some((part) => head.test(part.trim())),
      );
    });
    // Comments stripped first: the support set explains why `default` and `underlined` are absent, and
    // naming them in prose must not read as if the stylesheet painted them.
    const source = (await readSource(contract.sources)).replace(/\/\/[^\n]*/g, "");
    const support = source.match(/const PAINTED_THEMES = \[([^\]]*)\]/);
    expect(support, `${contract.name} must name the tiers it paints`).toBeTruthy();
    const emitted = (support![1].match(/"([^"]+)"/g) ?? []).map((name) => name.replace(/"/g, ""));
    expect(emitted, `${contract.name}'s support set and its stylesheet disagree`).toEqual(painted);
  });
}

// 3c-乙b: a check box and a radio have no surface of their own — the tier *is* the box, so a tier's
// declarations have to land on `.k-<mark>-symbol`, the element the eye reads as the control. `fill`
// used to hand-copy the background chain here and hard-code `border-color: transparent`, which is why
// `--kui-theme-fill-border` reached an input but not a check box, and `outline` shipped no class at all,
// so the box's edge could never be recoloured. Both now read the shared arms, and the arm itself decides
// what a tier paints — a declaration string copied into this file would not notice a drift.
const MARK_BOXES = [
  {
    name: "Checkbox",
    prefix: "k-checkbox",
    entry: "components/checkbox/styles/index.less",
    box: ".k-checkbox-symbol",
  },
  {
    name: "Radio",
    prefix: "k-radio",
    entry: "components/radio/styles/index.less",
    box: ".k-radio-symbol",
  },
] as const;

// The two tiers a mark paints, spelled as the shared `Tier` union so the arm lookup type-checks.
const MARK_TIERS = ["fill", "outline"] as const;

for (const mark of MARK_BOXES) {
  for (const tier of MARK_TIERS)
    it(`paints ${mark.name}'s ${tier} tier on the box through the shared arm`, async () => {
      const [compiled, everyArm] = await Promise.all([fileRules(mark.entry), arms()]);
      const body = declarations(
        compiled.get(`.${mark.prefix}-${tier} ${mark.box}`),
        `${mark.name} ${tier} on ${mark.box}`,
      );
      expect(
        covers(body, everyArm.get(tier)!),
        `${mark.name} ${tier} no longer paints ${mark.box} from .kui-theme-value(${tier})`,
      ).toBe(true);
    });
}

// 3c-丙a: the surface family paints a whole box, so its tiers go on the root class and `solid` has to
// take everything the component colours itself down with it — a head divider, an icon chip, a muted
// line. Those parts differ per component, which is why they are named here instead of derived from the
// tier class alone: an inherited `color` reaches text that has no rule of its own, and nothing else.
// `underlined` is the tier none of them answer, and `PAINTED_CONTRACTS` below is what keeps the source
// guard and these stylesheets from disagreeing about that.
const SURFACES = [
  {
    name: "Card",
    prefix: "k-card",
    entry: "components/card/styles/index.less",
    inverted: [
      [".k-card-meta-title", "color"],
      [".k-card-meta-description", "color"],
      [".k-card-head", "border-bottom"],
    ],
    keeps: [],
  },
  {
    name: "FeatureCard",
    prefix: "k-feature-card",
    entry: "components/feature-card/styles/index.less",
    inverted: [
      [".k-feature-card-desc", "color"],
      [".k-feature-card-icon", "color"],
      [".k-feature-card-icon", "background"],
    ],
    keeps: [],
  },
  {
    name: "StatCard",
    prefix: "k-stat-card",
    entry: "components/stat-card/styles/index.less",
    inverted: [
      [".k-stat-card-item-desc", "color"],
      [".k-stat-card-item-trend", "color"],
    ],
    // A trend that carries a semantic colour is the data, not the chrome, so the solid inversion has
    // to exclude it by name; flattening that guard paints 涨 and 跌 the same.
    keeps: [
      ".k-stat-card-item-trend-success",
      ".k-stat-card-item-trend-danger",
      ".k-stat-card-item-trend-warning",
    ],
  },
  // 3c-丙b: a collapse paints its header row and its dividers from dark tokens, so the tier has to
  // reach through the child path it actually writes — including the `:not()` that steps aside for the
  // base disabled rule, which sits at the same specificity earlier in the file. A feedback panel
  // paints four parts of its own: heading, description, details plate, mark chip. The panel's 4px
  // severity stripe is the one thing a tier must not repaint: `theme` describes the surface, the
  // stripe is the message, which is the same split Tag makes between `theme` and `color`.
  {
    name: "Collapse",
    prefix: "k-collapse",
    entry: "components/collapse/styles/index.less",
    inverted: [
      ["> .k-collapse-item:not(.k-collapse-item-disabled) > .k-collapse-header", "color"],
      [
        "> .k-collapse-item:not(.k-collapse-item-disabled) > .k-collapse-header",
        "border-top-color",
      ],
    ],
    keeps: [],
  },
  {
    name: "FeedbackPanel",
    prefix: "k-feedback-panel",
    entry: "components/feedback-panel/styles/index.less",
    inverted: [
      [".k-feedback-panel-heading", "color"],
      [".k-feedback-panel-description", "color"],
      [".k-feedback-panel-details", "color"],
      [".k-feedback-panel-details", "background"],
      [".k-feedback-panel-mark-inner", "color"],
      [".k-feedback-panel-mark-inner", "background"],
    ],
    keeps: [],
  },
  // 3c-丙c: a check card colours four things of its own — title, description, the leading symbol and the
  // indicator ring — and none of them inherit, so the tier has to reach each by name. The checked ring
  // and the checked indicator disc are the state this component exists to show: under `solid` they turn
  // light rather than staying primary, because a primary ring on a primary plate is nothing to look at.
  {
    name: "CheckCard",
    prefix: "k-check-card",
    entry: "components/check-card/styles/index.less",
    inverted: [
      [".k-check-card-title", "color"],
      [".k-check-card-description", "color"],
      [".k-check-card-symbol", "color"],
      [".k-check-card-indicator", "border-color"],
    ],
    keeps: [],
  },
  // 3c-丁b: a picture's plate is only ever visible around the edges and behind the two states the
  // component swaps in, and both of those carry a dark colour of their own — the spinner was primary on
  // primary, the error mark placeholder-grey on primary. A code inverts the one line its mask colours
  // itself; the loading and scanned lines take the root's inverted text.
  {
    name: "Image",
    prefix: "k-image",
    entry: "components/image/styles/index.less",
    inverted: [
      [".k-image-loading", "color"],
      [".k-image-error", "color"],
      [".k-image-error", "background-color"],
    ],
    keeps: [],
  },
  {
    name: "QRCode",
    prefix: "k-qrcode",
    entry: "components/qrcode/styles/index.less",
    inverted: [[".k-qrcode-expired", "color"]],
    keeps: [],
  },
  // 3c-丁c: a pager paints its tiers on the cells rather than on the root, and every one of those rules
  // is stepped aside by the root's own `:not(.k-page-disabled)`. `solidParts()` reads a selector that
  // *heads* with `.k-page-solid` and is blind to that shape, so this surface contributes no part paths to
  // the loop below — the parts it colours itself are pinned where the guards can be seen, in the page
  // block at the foot of this file.
  {
    name: "Page",
    prefix: "k-page",
    entry: "components/page/styles/index.less",
    inverted: [],
    keeps: [],
  },
  // 3c-丁d: a board plates its columns rather than its root, and it has no disabled state to step aside
  // for, so its parts stay visible to `solidParts()` — the selector simply heads with `.k-kanban-solid`.
  // The title and the count each name a dark colour of their own, so an inherited `color` reaches neither.
  {
    name: "Kanban",
    prefix: "k-kanban",
    entry: "components/kanban/styles/index.less",
    inverted: [
      [".k-kanban-column-header strong", "color"],
      [".k-kanban-column-header em", "color"],
      [".k-kanban-column-header em", "background"],
    ],
    keeps: [],
  },
] as const;

// A solid rule for one of these components may be one selector of a comma group, so the group is split
// and the `:not()` lists are only stripped where the question is "which element does this reach".
const solidParts = (key: string, prefix: string) =>
  selectors(key).filter((part) => new RegExp(`^\\.${prefix}-solid(?![\\w-])\\s`).test(part.trim()));

it("paints every tier the surface family answers through the shared arm", async () => {
  const everyArm = await arms();
  for (const surface of SURFACES) {
    const compiled = await fileRules(surface.entry);
    for (const tier of ["fill", "outline", "plain", "solid", "dashed"] as const) {
      const painted = [...compiled].filter(
        ([key, body]) =>
          paints(key, surface.prefix, tier, "") &&
          covers(declarations(body, key), everyArm.get(tier)!),
      );
      expect(
        painted.length,
        `${surface.name} paints nothing for theme="${tier}": the shared arm never reaches it`,
      ).toBeGreaterThan(0);
    }
    // The tier the guard exists for: a surface has four edges to draw, so "keep the bottom one" is not
    // a look. A rule here would mean the stylesheet and the source guard disagree.
    expect(
      [...compiled.keys()].filter((key) => paints(key, surface.prefix, "underlined", "")),
      `${surface.name} grew an underlined rule the source cannot emit`,
    ).toEqual([]);
  }
});

it("inverts the parts a solid surface colours itself", async () => {
  const everyArm = await arms();
  // Read from the arm rather than copied out, so a token change moves this test with the stylesheet.
  const onSolid = everyArm.get("solid")!.get("color")!;
  for (const surface of SURFACES) {
    const compiled = await fileRules(surface.entry);
    for (const [element, property] of surface.inverted) {
      const hits = [...compiled].filter(
        ([key, body]) =>
          solidParts(key, surface.prefix).some((part) =>
            part.trim().startsWith(`.${surface.prefix}-solid ${element}`),
          ) && declarations(body, key).has(property),
      );
      expect(
        hits.length,
        `${surface.name} solid does not repaint ${element} (${property})`,
      ).toBeGreaterThan(0);
      for (const [, body] of hits)
        expect(
          declarations(body, `${surface.name} solid ${element}`).get(property),
          `${surface.name} ${element} on solid ignores the inverted text token`,
        ).toContain(onSolid);
    }
    if (surface.keeps.length === 0) continue;
    // The exclusion list is load-bearing here, so it is checked where it sits — in the raw selector of
    // the rule that reaches the plain trend, before `:not()` is stripped to nothing.
    const trendParts = [...compiled.keys()].flatMap((key) =>
      solidParts(key, surface.prefix).filter((part) =>
        new RegExp(`^\\.${surface.prefix}-solid \\.${surface.prefix}-item-trend(?![\\w-])`).test(
          part.trim(),
        ),
      ),
    );
    expect(
      trendParts.length,
      `${surface.name} solid no longer reaches the plain trend`,
    ).toBeGreaterThan(0);
    for (const part of trendParts)
      for (const kept of surface.keeps)
        expect(part, `${surface.name} solid flattens a semantic trend: ${part}`).toContain(kept);
  }
});

// 3c-丁a: an alert is the one surface whose *default* look is its message colour — the 20% tint of
// whichever `type` it carries — so it cannot join `SURFACES`, where every tier must paint exactly what
// the shared arm paints. It takes the arm's frame and keeps its own plate, and the plate is what `solid`
// then shows at full strength. Both halves of that trade are pinned here, along with the `-theme-`
// infix these classes used to be spelled with.
const ALERT_ENTRY = "components/alert/styles/index.less";

it("paints an alert's tiers over the plate its own type names", async () => {
  const [compiled, everyArm] = await Promise.all([fileRules(ALERT_ENTRY), arms()]);

  // Every `type` declares the two colours the tiers read, so no tier hard-codes a message colour and
  // `theme` and `type` stop fighting over one `background` declaration.
  for (const type of ["info", "success", "warning", "error"]) {
    const body = declarations(compiled.get(`.k-alert-${type}`), `alert ${type}`);
    expect(body.has("--k-alert-accent"), `alert ${type} names no accent`).toBe(true);
    expect(body.has("--k-alert-plate"), `alert ${type} names no plate`).toBe(true);
  }

  // `fill` is this component's own look: the shared frame over the tinted plate.
  const fill = declarations(compiled.get(".k-alert-fill"), "alert fill");
  expect(fill.get("border-color")).toBe(everyArm.get("fill")!.get("border-color"));
  expect(fill.get("background")).toBe("var(--k-alert-plate)");

  // The three tiers with no plate of their own are the arm unchanged — which is what lets
  // `--kui-theme-outline-border` reach an alert at all: the frame used to be `currentColor`, the page's
  // text colour, which is neither the alert's message nor an override hook.
  for (const tier of ["outline", "plain", "dashed"] as const)
    expect(
      covers(declarations(compiled.get(`.k-alert-${tier}`), `alert ${tier}`), everyArm.get(tier)!),
      `alert ${tier} no longer paints from .kui-theme-value(${tier})`,
    ).toBe(true);

  // `solid` keeps the type's saturation — an error block and a success block stay two different blocks —
  // and the frame follows the plate. Each part this component colours is named at (0,2,0) because an
  // inherited `color` reaches none of them, and the close button's `:hover` is named too: the base rule
  // paints it danger red, and danger red on a solid error box is nothing to look at.
  const solid = declarations(compiled.get(".k-alert-solid"), "alert solid");
  expect(solid.get("background")).toBe("var(--k-alert-accent)");
  expect(solid.get("border-color")).toBe("var(--k-alert-accent)");
  const onSolid = everyArm.get("solid")!.get("color")!;
  // The root keeps the arm's inverted text colour even though the plate is its own: an alert renders
  // `children`, and that is the colour a child with no rule of its own inherits.
  expect(solid.get("color")).toBe(onSolid);
  for (const part of [
    ".k-alert-message",
    ".k-alert-description",
    ".k-alert-icon",
    ".k-alert-close",
    ".k-alert-close:hover",
  ])
    expect(
      declarations(compiled.get(`.k-alert-solid ${part}`), `alert solid ${part}`).get("color"),
      `alert solid leaves ${part} on a dark token`,
    ).toContain(onSolid);

  // `bordered` moves the plate onto the frame, and is written compound so a tier's own `border-color`
  // at (0,1,0) cannot out-order it.
  expect(
    declarations(compiled.get(".k-alert.k-alert-bordered"), "alert bordered").get("border-color"),
  ).toBe("var(--k-alert-plate)");

  // Four edges, not one: `underlined` draws nothing here, and the old infix has no rule left to lean on.
  expect(
    [...compiled.keys()].filter((key) => paints(key, "k-alert", "underlined", "")),
    "alert grew an underlined rule the source cannot emit",
  ).toEqual([]);
  expect(
    [...compiled.keys()].filter((key) => key.includes("k-alert-theme-")),
    "the k-alert-theme- infix is back",
  ).toEqual([]);
});

// 3c-丁c: a pagination bar is the surface family's other shape — the tier does not land on the root but
// on the cells the numbers sit on, and it reaches them through `:not()`, so every rule here carries a
// guard that `solidParts()`, which reads a selector heading with `.k-page-solid`, cannot see. Two things
// are pinned below that the loops above cannot reach: the parts this component colours itself, and the
// state rules that used to lose to the plate sitting next to them.
const PAGE_ENTRY = "components/page/styles/index.less";
const PAGE_PLATE = ".k-pager-item:not(.k-pager-next, .k-pager-prev)";
const PAGE_FRAME = ".k-pager-item:not(.k-pager-more)";

it("paints a pager's tiers, states and inverted parts on its cells", async () => {
  const [compiled, everyArm] = await Promise.all([fileRules(PAGE_ENTRY), arms()]);
  const onSolid = everyArm.get("solid")!.get("color")!;
  const solidPlate = everyArm.get("solid")!.get("background")!;
  const keys = [...compiled.keys()];

  // Two cell sets shipped before this batch and 丁c keeps both: the plate tiers leave the two arrows
  // flat, the frame tiers leave the `…` mark unframed. Widening either one repaints a tier that already
  // ships, and `fill` is this component's own look.
  for (const [tier, cells] of [
    ["fill", PAGE_PLATE],
    ["plain", PAGE_PLATE],
    ["solid", PAGE_PLATE],
    ["outline", PAGE_FRAME],
    ["dashed", PAGE_FRAME],
  ] as const) {
    const painted = [...compiled].filter(
      ([key, body]) =>
        paints(key, "k-page", tier, "", cells) &&
        covers(declarations(body, key), everyArm.get(tier)!),
    );
    expect(
      painted.length,
      `page paints no .kui-theme-value(${tier}) on ${cells}`,
    ).toBeGreaterThan(0);
  }

  // The `…` cell is plated by all three plate tiers, and its icon carries a colour of its own
  // (`.k-page .k-pager-item .k-icon` at (0,3,0)) so an inherited `color` never reaches it — `solid` has
  // to name it. The digits sit in a bare `<span>` and do inherit, which is why nothing claims them.
  expect(
    [...compiled].some(
      ([key, body]) =>
        paints(key, "k-page", "solid", "", ".k-pager-more .k-icon") &&
        declarations(body, key).get("color") === onSolid,
    ),
    "a `…` mark on a solid pager stays placeholder grey on a primary plate",
  ).toBe(true);

  // The selected cell is the state this bar exists to show, and the plate beside it reaches the same
  // element through `:not()`: at (0,4,0) it outspecified a bare `.k-pager-item-active`, so under `fill`
  // only the digits turned primary on the grey plate and under `outline` the frame stayed the default
  // colour — declared, never painted. The state rules therefore carry one class more than the element
  // they paint, and because the arm writes a `background` / `border` *shorthand* a tie is settled by
  // source order, so each one also has to sit after the plate it answers.
  for (const [tier, cells] of [
    ["fill", PAGE_PLATE],
    ["outline", PAGE_FRAME],
    ["dashed", PAGE_FRAME],
    ["solid", PAGE_PLATE],
  ] as const) {
    const plate = keys.findIndex(
      (key) => paints(key, "k-page", tier, "", cells) && !key.includes(".k-pager-item-active"),
    );
    const state = keys.findIndex((key) =>
      paints(key, "k-page", tier, "", ".k-pager-item.k-pager-item-active"),
    );
    expect(plate, `page ${tier} paints no plate`).toBeGreaterThanOrEqual(0);
    expect(state, `page ${tier} has no compound selected-cell rule`).toBeGreaterThanOrEqual(0);
    expect(
      state,
      `page ${tier}'s selected-cell rule sits before the plate, so the arm's shorthand wins`,
    ).toBeGreaterThan(plate);
  }

  // `plain` needs no raise — its arm paints no text — but the selected page still has to turn primary,
  // which is the only thing that tier says.
  const plainActive = [...compiled].filter(([key]) =>
    paints(key, "k-page", "plain", "", ".k-pager-item-active"),
  );
  expect(plainActive.length, "page plain paints no selected cell").toBeGreaterThan(0);
  expect(
    declarations(plainActive[0][1], "page plain selected cell").get("color"),
    "a plain pager's selected page lost its state colour",
  ).toBe("var(--kui-color-primary)");

  // `solid` is the one tier where the plate and the state are the same colour, so the active cell swaps
  // them — primary digits on an inverted plate — and hover keeps a lighter plate of the tier's own ink
  // rather than the grey `fill` uses.
  expect(
    [...compiled].some(
      ([key, body]) =>
        paints(key, "k-page", "solid", "", ".k-pager-item.k-pager-item-active") &&
        declarations(body, key).get("background-color") === onSolid &&
        declarations(body, key).get("color") === solidPlate,
    ),
    "a solid pager stacks primary on primary instead of swapping plate and ink",
  ).toBe(true);
  expect(
    [...compiled].some(
      ([key, body]) =>
        paints(key, "k-page", "solid", "", ":hover") &&
        declarations(body, key).get("background-color") ===
          `color-mix(in srgb, ${onSolid} 18%, ${solidPlate})`,
    ),
    "a solid pager's hover paints the grey plate `fill` owns",
  ).toBe(true);

  // A whole disabled bar never plates. The number cells carry no `k-pager-item-disabled` of their own —
  // only the arrows do, from their position — and `.k-page.k-page-disabled .k-pager-item` is (0,3,0), so
  // it would lose the background to any (0,4,0) plate: each tier steps aside by the root guard instead.
  for (const tier of ["fill", "outline", "plain", "solid", "dashed"] as const) {
    const painted = keys.filter((key) => paints(key, "k-page", tier, ""));
    expect(painted.length, `page paints no ${tier} tier`).toBeGreaterThan(0);
    for (const key of painted)
      expect(key, `page ${tier} plates a disabled bar: ${key}`).toContain(":not(.k-page-disabled)");
  }
});

// 3c-丁d: a board is the surface family's drag-and-drop shape — the tier lands on every column, and the
// one state a column owns is the drop hint, which hangs on that same element. Two things the loops above
// cannot see are pinned here: the hint has to out-order the plate beside it, and `solid` has to keep the
// keyboard ring legible on a plate drawn from the primary.
const KANBAN_ENTRY = "components/kanban/styles/index.less";
const KANBAN_COLUMN = ".k-kanban-column";

it("paints a board's tiers on its columns and keeps the drop hint above them", async () => {
  const [compiled, everyArm] = await Promise.all([fileRules(KANBAN_ENTRY), arms()]);
  const keys = [...compiled.keys()];
  const onSolid = everyArm.get("solid")!.get("color")!;
  const plateOf = (tier: (typeof VALUES)[number]) =>
    keys.findIndex(
      (key) =>
        paints(key, "k-kanban", tier, "", KANBAN_COLUMN) &&
        !key.includes("drag-over") &&
        covers(declarations(compiled.get(key), `kanban ${tier} plate`), everyArm.get(tier)!),
    );

  // `base.less` gives every element `border: 0 solid`, so a tier that names only a `border-color` needs a
  // width under it — without the column's own 1px edge, `fill` and `plain` draw nothing at all.
  expect(
    declarations(compiled.get(KANBAN_COLUMN), "kanban column base").get("border"),
    "a column keeps no edge for the border-color tiers to colour",
  ).toContain("1px");

  // The hint answers a (0,2,0) plate, so it has to be a compound class *and* sit after every tier it is
  // meant to override. At (0,1,0) — the shape it shipped with — all five out-specified it, so the primary
  // edge a caller dragged a card over never drew.
  const hint = keys.find((key) => key.includes(".k-kanban-column-drag-over"));
  expect(hint, "a board paints no drop hint").toBeDefined();
  expect(
    hint!,
    `the drop hint must name the column class to reach its plate: ${hint}`,
  ).toContain(".k-kanban-column.k-kanban-column-drag-over");
  expect(
    declarations(compiled.get(hint!)!, "kanban drop hint").get("border-color"),
    "a board's drop hint lost its primary edge",
  ).toBe("var(--kui-color-primary)");
  for (const tier of ["fill", "outline", "plain", "solid", "dashed"] as const) {
    const plate = plateOf(tier);
    expect(plate, `kanban paints no ${tier} column`).toBeGreaterThanOrEqual(0);
    expect(
      plate,
      `kanban's ${tier} plate sits after the drop hint, so the arm's shorthand wins`,
    ).toBeLessThan(keys.indexOf(hint!));
  }

  // A primary edge on a primary plate is nothing to look at, so the hint follows the plate's own ink, and
  // the keyboard ring is redrawn rather than left invisible.
  expect(
    [...compiled].some(
      ([key, body]) =>
        paints(key, "k-kanban", "solid", "", ".k-kanban-column-drag-over") &&
        declarations(body, key).get("border-color") === onSolid,
    ),
    "a solid column hints in the same colour as its plate",
  ).toBe(true);
  expect(
    [...compiled].some(
      ([key, body]) =>
        paints(key, "k-kanban", "solid", "", ".k-kanban-item:focus-visible") &&
        declarations(body, key).has("outline-color"),
    ),
    "a keyboard ring on a solid column stays primary on primary",
  ).toBe(true);

  // The parts the board colours itself are named above; the item cards carry no colour of their own, so
  // they take the plate's ink by inheritance and nothing claims them.
  expect(
    [...compiled.keys()].filter(
      (key) =>
        paints(key, "k-kanban", "solid", "", ".k-kanban-column-header i") ||
        (paints(key, "k-kanban", "solid", "", ".k-kanban-item") && !key.includes("focus-visible")),
    ),
    "a solid board repaints what the caller coloured or what already inherits",
  ).toEqual([]);
});
