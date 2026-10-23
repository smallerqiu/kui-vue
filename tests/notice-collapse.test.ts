// A notice collapses when it closes: the leave hook pins the box's height to its scroll height, forces
// a reflow, then writes zero into `height`, both paddings, both margins and `opacity` as inline styles.
// None of that animates unless the sheet transitions those very properties, and a transition list reads
// like dead weight to anyone who only looks at the stylesheet — `height` is `auto` at rest and no rule
// in this file ever changes it or the margins. So the list is derived from the hook instead of being
// written out here: whatever the hook zeroes on leave must be transitioned on the box.
import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "..");

// The two repositories keep the hook under different names; the vertical one is the first `onLeave` in
// either file, the horizontal variant that follows it collapsing widths is not this box's business.
const HOOK_SOURCES = ["components/base/transition-props.ts", "components/base/transition.ts"];

const readHook = async () => {
  for (const entry of HOOK_SOURCES) {
    const filename = path.join(root, entry);
    try {
      return await fs.readFile(filename, "utf8");
    } catch {
      continue;
    }
  }
  throw new Error(`none of ${HOOK_SOURCES.join(", ")} exists`);
};

// `paddingTop` -> `padding-top`, whose shorthand `padding` is what a transition list would name.
const kebab = (property: string) => property.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

const boxTransition = async () => {
  const filename = path.join(root, "components/styles/index.less");
  const css = (await less.render(await fs.readFile(filename, "utf8"), { filename })).css;
  const declarations: string[] = [];
  for (const { groups } of css.matchAll(/(?<selector>[^{}]+)\{(?<body>[^{}]*)\}/g)) {
    const { selector, body } = groups!;
    if (!selector.split(",").some((one) => one.trim() === ".k-notice-box")) continue;
    for (const { groups: one } of body.matchAll(
      /(?<property>transition|transition-property)\s*:\s*(?<value>[^;]+);/g,
    )) {
      declarations.push(one!.value);
    }
  }
  return declarations;
};

it("transitions every property the leave hook collapses", async () => {
  const source = await readHook();
  const leave = /onLeave\s*\([^)]*\)\s*\{(?<body>[\s\S]*?)\n {4}\},/.exec(source)?.groups?.body;
  expect(leave, "the leave hook moved or changed shape; this test derives its expectations from it").toBeTruthy();

  const written = [
    ...leave!
      // One of the two hooks carries a commented-out assignment; only what runs counts.
      .replace(/\/\/[^\n]*/g, "")
      .matchAll(/\.style\.(?<property>[A-Za-z]+)\s*=/g),
  ].map(({ groups }) => groups!.property);
  // Anchored on purpose: an empty list would make the assertion below pass no matter what the sheet says.
  expect(new Set(written)).toEqual(
    new Set(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom", "opacity"]),
  );

  const declarations = await boxTransition();
  expect(declarations.length, ".k-notice-box lost its transition declaration").toBeGreaterThan(0);

  // A shorthand in `transition-property` covers its longhands, which is how one `padding` entry carries
  // both `padding-top` and `padding-bottom`.
  const last = declarations[declarations.length - 1];
  const transitioned = new Set(
    last
      .split(",")
      .map((part) => part.trim().split(/\s+/)[0])
      .filter((property) => property && property !== "none"),
  );
  for (const property of new Set(written)) {
    const name = kebab(property);
    expect(
      transitioned.has(name) || transitioned.has(name.split("-")[0]),
      `${name} is written inline on leave but not transitioned, so the box snaps shut instead of closing`,
    ).toBe(true);
  }
});
