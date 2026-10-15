// Run with: node --experimental-strip-types scripts/check-theme.ts (requires Playwright Chromium).
// Set PLAYWRIGHT_CHROMIUM_CHANNEL=chrome to use an installed Chrome.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import less from "less";
import { chromium } from "@playwright/test";
const root = path.resolve(import.meta.dirname, "..");
const assertColor = (actual: number[], expected: readonly number[], message?: string) =>
  assert.ok(
    actual.every((n, i) => Math.abs(n - expected[i]) <= 1),
    `${message || "Color mismatch"}: ${actual} vs ${expected}`,
  );
const compile = async (entry: string) => {
  const filename = path.join(root, "components/styles", entry);
  return (await less.render(fs.readFileSync(filename, "utf8"), { filename })).css;
};
(async () => {
  const css = await compile("index.less");
  const components = await compile("components.less");
  assert.match(components, /\.k-popup\s*\{/, "The standalone component entry must include Popup");
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.PLAYWRIGHT_CHROMIUM_CHANNEL
      ? { channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL }
      : {}),
  });
  try {
    const page = await browser.newPage();
    await page.setContent(`<style>${css}
      .local {--kui-color-primary:#ff0000;--kui-border-radius:20px;--kui-color-danger:#00ff00;--kui-color-warning:#0000ff;--kui-color-success:#ff0000}
      .overrides {--kui-control-bg:#ff00ff;--kui-popup-bg:#ffff00;--kui-control-radius:13px;--kui-color-primary-hover:#00ffff}
      .theme-hooks {--kui-theme-fill-bg:#ff0000;--kui-theme-outline-border:#00ff00;--kui-theme-plain-border:#0000ff;--kui-theme-plain-bg:#ffff00}
      .control-chain {--kui-control-border:#00ff00;--kui-control-bg-fill:#0000ff}
      /* solid fills with the primary, so this scope declares its own; the hover stop stays
         undefined, which is what proves the 90% mix is computed at the point of use. */
      .solid-scope {--kui-color-primary:#ff0000}
    </style>
    <div class="local" id="local">
      <button id="primary" class="k-btn k-btn-primary">Primary</button>
      <button id="danger" class="k-btn k-btn-danger">Danger</button>
      <button id="warning" class="k-btn k-btn-warning">Warning</button>
      <div id="success" class="k-alert k-alert-success">Success</div>
      <div class="k-popup-panel k-popup"><div id="popup" class="k-popup-content">Popup</div></div>
    </div>
    <div theme-mode="dark"><button id="dark" class="k-btn">Dark</button><div theme-mode="light"><button id="light" class="k-btn">Light</button></div></div>
    <div class="overrides"><div theme-mode="dark"><div id="control" class="k-input" data-multiple><input /></div><button id="override" class="k-btn k-btn-primary">Override</button><div class="k-popup-panel k-popup"><div id="override-popup" class="k-popup-content">Popup</div></div></div></div>
    <div id="square" shape-mode="square"><button id="square-button" class="k-btn">Square</button></div>
    <div class="theme-hooks"><div id="hook-card-fill" class="k-card k-card-fill">Card</div><div id="hook-card-outline" class="k-card k-card-outline">Card</div><div id="hook-card-plain" class="k-card k-card-plain">Card</div><div id="hook-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div id="hook-input-plain" class="k-input k-input-plain" data-multiple><input /></div><div id="hook-input-outline" class="k-input k-input-outline" data-multiple><input class="k-input-text" /></div><div id="hook-input-dashed" class="k-input k-input-dashed" data-multiple><input class="k-input-text" /></div><div id="hook-select-outline" class="k-select k-select-outline" tabindex="0"><div class="k-select-selection">Outline</div></div><div id="hook-select-dashed" class="k-select k-select-dashed" tabindex="0"><div class="k-select-selection">Dashed</div></div><div id="hook-tag-outline" class="k-input-tag k-input-tag-outline"><input class="k-input-tag-input" /></div><div id="hook-tag-dashed" class="k-input-tag k-input-tag-dashed"><input class="k-input-tag-input" /></div><div id="hook-otp-outline" class="k-input-otp k-input-otp-outline"><input id="hook-otp-outline-cell" class="k-input-otp-item" /></div></div>
    <div class="control-chain"><div id="chain-card-outline" class="k-card k-card-outline">Card</div><div id="chain-card-fill" class="k-card k-card-fill">Card</div><div id="chain-input-fill" class="k-input k-input-fill" data-multiple><input /></div></div>
    <div id="theme-defaults"><div id="default-card-fill" class="k-card k-card-fill">Card</div><div id="default-card-bordered" class="k-card k-card-bordered">Card</div><div id="default-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div id="default-input-plain" class="k-input k-input-plain" data-multiple><input /></div><div id="default-select-plain" class="k-select k-select-plain" tabindex="0"><div class="k-select-selection">Plain</div></div><div id="default-select-borderless" class="k-select k-select-borderless" tabindex="0"><div class="k-select-selection">Borderless</div></div><div id="default-select-outline" class="k-select k-select-outline" tabindex="0"><div class="k-select-selection">Outline</div></div><div id="default-select-dashed" class="k-select k-select-dashed" tabindex="0"><div class="k-select-selection">Dashed</div></div><div id="default-select-underlined" class="k-select k-select-underlined" tabindex="0"><div class="k-select-selection">Underlined</div></div><div id="default-datepicker-fill" class="k-datepicker k-datepicker-fill" tabindex="0">Fill</div><div id="default-datepicker-plain" class="k-datepicker k-datepicker-plain" tabindex="0">Plain</div><div id="default-datepicker-borderless" class="k-datepicker k-datepicker-borderless" tabindex="0">Borderless</div><div id="default-input-outline" class="k-input k-input-outline" data-multiple><input id="outline-input-text" class="k-input-text" placeholder="Pick" /></div><input id="default-input-outline-single" class="k-input k-input-outline" data-single placeholder="Pick" /><div id="default-input-dashed" class="k-input k-input-dashed" data-multiple><input class="k-input-text" /></div><div id="default-input-underlined" class="k-input k-input-underlined" data-multiple><input class="k-input-text" /></div><div id="default-tag-outline" class="k-input-tag k-input-tag-outline"><input class="k-input-tag-input" /></div><div id="default-tag-dashed" class="k-input-tag k-input-tag-dashed"><input class="k-input-tag-input" /></div><div id="default-tag-plain" class="k-input-tag k-input-tag-plain"><input id="plain-tag-input" class="k-input-tag-input" /></div><div id="default-tag-underlined" class="k-input-tag k-input-tag-underlined"><input id="underlined-tag-input" class="k-input-tag-input" /></div><div id="default-otp-outline" class="k-input-otp k-input-otp-outline"><input id="outline-otp-cell" class="k-input-otp-item" /></div><div id="default-otp-dashed" class="k-input-otp k-input-otp-dashed"><input id="dashed-otp-cell" class="k-input-otp-item" /></div><div id="default-otp-plain" class="k-input-otp k-input-otp-plain"><input id="plain-otp-cell" class="k-input-otp-item" /></div><div id="default-otp-underlined" class="k-input-otp k-input-otp-underlined"><input id="underlined-otp-cell" class="k-input-otp-item" /></div></div>
    <div class="solid-scope"><div id="default-select-solid" class="k-select k-select-solid" tabindex="0"><div class="k-select-selection"><div id="solid-placeholder" class="k-select-placeholder">Pick</div></div></div><div id="default-input-solid" class="k-input k-input-solid" data-multiple><span id="solid-input-chrome" class="k-input-prefix">$</span><input id="solid-input-text" class="k-input-text" placeholder="Pick" /></div><input id="default-input-solid-single" class="k-input k-input-solid" data-single placeholder="Pick" /><textarea id="default-textarea-solid" class="k-textarea k-textarea-solid" placeholder="Notes"></textarea><div id="default-input-number-solid" class="k-input-number k-input-number-solid" data-multiple><input id="solid-number-text" class="k-input-number-text" placeholder="Pick" /><div id="solid-number-controls" class="k-input-number-controls">+</div></div><div id="default-tag-solid" class="k-input-tag k-input-tag-solid"><span id="solid-tag-chrome" class="k-input-tag-clearable">x</span><input id="solid-tag-input" class="k-input-tag-input" placeholder="Pick" /><span id="solid-tag-chip" class="k-input-tag-item k-tag">Tag</span></div><div id="default-otp-solid" class="k-input-otp k-input-otp-solid"><input id="solid-otp-cell" class="k-input-otp-item" /></div><div class="k-input-otp k-input-otp-solid k-input-otp-disabled"><input id="disabled-otp-solid-cell" class="k-input-otp-item" disabled /></div></div>
    <div class="control-chain"><div class="control-chain" id="chain-box"><div id="chain-input-outline" class="k-input k-input-outline" data-multiple><input class="k-input-text" /></div></div>
    <div class="control-chain"><div id="chain-select-outline" class="k-select k-select-outline" tabindex="0"><div class="k-select-selection"><div id="outline-placeholder" class="k-select-placeholder">Pick</div></div></div></div>`);
    // Serialises a token the way the browser does, so a computed value can be compared to the
    // token it is supposed to fall back to instead of to a hand-copied colour.
    const resolve = (id: string, value: string) =>
      page.locator("#" + id).evaluate((el, value) => {
        const probe = document.createElement("span");
        probe.style.color = value;
        // `<input>` and `<textarea>` paint no children, so the probe reads the tokens from the
        // element that wraps them; the tokens inherit from the same scope either way.
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA"
          ? (el.parentElement ?? el)
          : el
        ).append(probe);
        const computed = getComputedStyle(probe).color;
        probe.remove();
        return computed;
      }, value);
    const style = (id: string, prop: string) =>
      page.locator("#" + id).evaluate((el, prop) => {
        el.getAnimations().forEach((a) => a.finish());
        return getComputedStyle(el).getPropertyValue(prop);
      }, prop);
    const rgba = async (id: string, prop: string) =>
      page.locator("#" + id).evaluate((el, prop) => {
        const c = document.createElement("canvas");
        c.width = c.height = 1;
        const ctx = c.getContext("2d");
        if (!ctx) throw new Error("Canvas 2D context is unavailable");
        ctx.fillStyle = getComputedStyle(el).getPropertyValue(prop);
        ctx.fillRect(0, 0, 1, 1);
        return [...ctx.getImageData(0, 0, 1, 1).data];
      }, prop);
    assert.equal(await style("primary", "border-radius"), "20px");
    assert.equal(await style("popup", "border-radius"), "20px");
    assert.equal(await style("square-button", "border-radius"), "2px");
    for (const [id, color] of [
      ["primary", [255, 0, 0, 230]],
      ["danger", [0, 255, 0, 230]],
      ["warning", [0, 0, 255, 230]],
    ] as const) {
      await page.locator("#" + id).hover();
      await page.locator("#" + id).evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
      assertColor(
        await rgba(id, "background-color"),
        color,
        id + " hover must follow the local semantic color",
      );
    }
    assertColor(await rgba("success", "background-color"), [255, 0, 0, 51]);
    assert.equal(await style("dark", "color"), "rgb(245, 245, 245)");
    assert.equal(await style("light", "color"), "rgb(38, 38, 38)");
    assert.equal(await style("override", "border-radius"), "13px");
    // Plain control preserves an explicit ancestor override across theme boundaries.
    assert.equal(await style("control", "background-color"), "rgb(255, 0, 255)");
    assert.equal(await style("override-popup", "background-color"), "rgb(255, 255, 0)");
    await page.locator("#override").hover();
    await page.locator("#override").evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assertColor(await rgba("override", "background-color"), [0, 255, 255, 255]);
    for (const [id, expected] of [
      ["dark", "#bfbfbf"],
      ["light", "#8c8c8c"],
    ] as const)
      assert.equal((await style(id, "--kui-color-text-secondary")).trim(), expected);
    assert.equal((await style("light", "--kui-color-bg-elevated")).trim(), "#fff");
    // Theme variants all come from one declaration source, so a single `--kui-theme-*` hook
    // has to paint a surface (Card) and a control (Input) the same way.
    assert.equal(await style("hook-card-fill", "background-color"), "rgb(255, 0, 0)");
    assert.equal(await style("hook-input-fill", "background-color"), "rgb(255, 0, 0)");
    assert.equal(await style("hook-card-outline", "border-top-color"), "rgb(0, 255, 0)");
    assert.equal(await style("hook-card-plain", "border-top-color"), "rgb(0, 0, 255)");
    assert.equal(await style("hook-input-plain", "background-color"), "rgb(255, 255, 0)");
    // Undefined hooks fall through the documented chain instead of painting nothing.
    assert.equal(await style("chain-card-outline", "border-top-color"), "rgb(0, 255, 0)");
    assert.equal(await style("chain-card-fill", "background-color"), "rgb(0, 0, 255)");
    assert.equal(await style("chain-input-fill", "background-color"), "rgb(0, 0, 255)");
    // `bordered` is the same triple as `theme="outline"`, falling through to the base border.
    assert.equal(
      await style("default-card-bordered", "border-top-color"),
      await resolve("default-card-bordered", "var(--kui-color-border)"),
    );
    // With no override at all both land on the library default: no visible border, overlay
    // background. Compared through `resolve` because a colour that arrives via var() is
    // serialised as rgba(0, 0, 0, 0) while the bare `transparent` keyword stays itself.
    for (const id of ["default-card-fill", "default-input-fill"]) {
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "transparent"),
        id + " fill must not paint a border",
      );
      assert.equal(
        await style(id, "background-color"),
        await resolve(id, "var(--kui-color-bg-component-overlay)"),
        id + " fill must fall back to the overlay background",
      );
    }
    // `plain` is "no border and no background", both through the plain tokens.
    for (const prop of ["border-top-color", "background-color"])
      assert.equal(
        await style("default-input-plain", prop),
        await resolve("default-input-plain", "transparent"),
        "plain input " + prop + " must be transparent",
      );
    // `plain` and `borderless` are separate asks (audit ⑪): `theme="plain"` no longer borrows the
    // borderless class. Neither may have its border repainted under the pointer. `plain` wins that
    // fight by being written after the base rule; `borderless` only wins because the base rule
    // names it inside `:not()` — before that, a borderless control grew a primary border and a
    // glow the moment the pointer reached it, exactly what its own block says must not happen.
    for (const id of ["default-select-plain", "default-select-borderless"]) {
      await page.locator("#" + id).hover();
      // The border transition must land before the reading, or a repaint during hover would be
      // measured at its start value and pass for the wrong reason.
      await page.locator("#" + id).evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "transparent"),
        id + " must not get a hover border",
      );
      assert.equal(await style(id, "box-shadow"), "none", id + " must not get a hover shadow");
    }
    // No inner-box guard here on purpose: nothing in the library paints a border, a shadow or a
    // background on `.k-<component>-selection`, so a pixel assertion about it can never fail. The
    // suppressions those classes still carry are logged as dead CSS to sweep (theme-口径 第六节).
    // The four tiers this control family used to swallow (batch 3b). Each has to reach the pixel,
    // and the tiers have to stay distinguishable from each other, not only from `fill`.
    // `outline` is a bare frame: 1px solid on the documented border token, no surface.
    assert.equal(
      await style("default-select-outline", "border-top-color"),
      await resolve("default-select-outline", "var(--kui-color-border)"),
      "outline select must fall through to the base border",
    );
    assert.equal(await style("default-select-outline", "border-top-style"), "solid");
    assert.equal(
      await style("default-select-outline", "background-color"),
      await resolve("default-select-outline", "transparent"),
      "outline select must stay transparent",
    );
    // `dashed` borrows the outline colour and changes only the line style.
    assert.equal(await style("default-select-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("default-select-dashed", "border-top-color"),
      await resolve("default-select-dashed", "var(--kui-color-border)"),
      "dashed select must fall through to the outline border",
    );
    // A control that keeps its border also keeps the base hover lighting, which is what separates
    // outline/dashed from the tiers that opt out above.
    await page.locator("#default-select-outline").hover();
    await page
      .locator("#default-select-outline")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("default-select-outline", "border-top-color"),
      await resolve("default-select-outline", "var(--kui-color-primary)"),
      "outline select must light its border under the pointer",
    );
    // `solid` is the emphasis block: primary surface, same-colour border, inverted text. Hover
    // deepens the same red through the mixed default, so a local primary moves both states.
    assertColor(
      await rgba("default-select-solid", "background-color"),
      [255, 0, 0, 255],
      "solid select must fill with the local primary",
    );
    assert.equal(await style("default-select-solid", "border-top-color"), "rgb(255, 0, 0)");
    assert.equal(await style("default-select-solid", "color"), "rgb(255, 255, 255)");
    // The inner pieces invert with the block - a placeholder that stays the ordinary text colour
    // on a primary fill reads as a defect - and the inversion is scoped to `solid`, so an outlined
    // control keeps its own colour.
    assert.equal(
      await style("solid-placeholder", "color"),
      await resolve(
        "solid-placeholder",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 75%, transparent)",
      ),
      "a solid control must invert its placeholder",
    );
    assert.notEqual(
      await style("outline-placeholder", "color"),
      await resolve(
        "outline-placeholder",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 75%, transparent)",
      ),
      "the solid colour rules must not leak into other tiers",
    );
    await page.locator("#default-select-solid").hover();
    await page
      .locator("#default-select-solid")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assertColor(
      await rgba("default-select-solid", "background-color"),
      [255, 0, 0, 230],
      "solid select hover must follow the local primary",
    );
    assert.equal(
      await style("default-select-solid", "box-shadow"),
      "none",
      "solid select must not add a ring over its own fill",
    );
    // `underlined` keeps one edge: the other three sides lose their width, the radius goes, and
    // focus moves only that bottom edge instead of drawing a ring around the box (InputOTP shape).
    assert.equal(await style("default-select-underlined", "border-top-width"), "0px");
    assert.equal(await style("default-select-underlined", "border-bottom-width"), "1px");
    assert.equal(await style("default-select-underlined", "border-radius"), "0px");
    await page.locator("#default-select-underlined").focus();
    await page
      .locator("#default-select-underlined")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("default-select-underlined", "border-bottom-color"),
      await resolve("default-select-underlined", "var(--kui-color-primary)"),
      "a focused underlined select must light its bottom edge",
    );
    assert.equal(
      await style("default-select-underlined", "outline-style"),
      "none",
      "underlined select must not carry the base focus ring",
    );
    // One hook paints a surface and a control the same way, and the tiers share the chains:
    // `--kui-theme-outline-border` moves `dashed` too because dashed has no colour of its own, and
    // the control-level `--kui-control-border` reaches `outline` the way it already reaches Card.
    assert.equal(await style("hook-select-outline", "border-top-color"), "rgb(0, 255, 0)");
    assert.equal(await style("hook-select-dashed", "border-top-color"), "rgb(0, 255, 0)");
    assert.equal(await style("hook-select-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("chain-select-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-control-border must reach an outlined control",
    );
    // `DatePicker` used to be the odd one out: `Select` / `Cascader` / `TreeSelect` hid the focus
    // ring on a borderless or plain box while `DatePicker` kept drawing it. A control that was asked
    // to drop its border drops the ring too, so all four now agree — and the ring is still there for
    // a control that kept its border, which is what stops the exclusion above from being a wide-open
    // assertion about a rule that no longer exists.
    for (const id of ["default-datepicker-plain", "default-datepicker-borderless"]) {
      await page.locator("#" + id).focus();
      await page.locator("#" + id).evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
      assert.equal(
        await style(id, "outline-color"),
        await resolve(id, "transparent"),
        id + " must not keep a focus ring without a border",
      );
    }
    await page.locator("#default-datepicker-fill").focus();
    await page
      .locator("#default-datepicker-fill")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.notEqual(
      await style("default-datepicker-fill", "outline-color"),
      await resolve("default-datepicker-fill", "transparent"),
      "a bordered date-picker must still show its focus ring",
    );
    // 3b-乙: the box path. A tier class lands on one of three elements — the wrapper that replaces
    // the field once anything decorates it (`[data-multiple]`), the bare `<input>` (`[data-single]`),
    // or a `<textarea>` — and `outline` / `solid` used to reach none of them: the source dropped both
    // values before the class list and LESS had no rule for either.
    for (const id of ["default-input-outline", "default-input-outline-single"]) {
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "var(--kui-color-border)"),
        id + " outline must fall through to the base border",
      );
      assert.equal(await style(id, "border-top-style"), "solid");
      assert.equal(
        await style(id, "background-color"),
        await resolve(id, "transparent"),
        id + " outline must stay transparent",
      );
    }
    // `dashed` changes only the line style and has no colour of its own.
    assert.equal(await style("default-input-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("default-input-dashed", "border-top-color"),
      await resolve("default-input-dashed", "var(--kui-color-border)"),
      "dashed input must follow the outline border",
    );
    // A box that keeps its border keeps the base hover lighting, which is what separates `outline`
    // and `dashed` from the tiers that opt out of it below.
    await page.locator("#default-input-outline").hover();
    assert.equal(
      await style("default-input-outline", "border-top-color"),
      await resolve("default-input-outline", "var(--kui-color-primary)"),
      "outline input must light its border under the pointer",
    );
    // The documented hooks reach the box path the way they reach Card, through the same chains:
    // `--kui-theme-outline-border` moves `dashed` too, and the control-level token still applies.
    assert.equal(await style("hook-input-outline", "border-top-color"), "rgb(0, 255, 0)");
    assert.equal(await style("hook-input-dashed", "border-top-color"), "rgb(0, 255, 0)");
    assert.equal(await style("chain-input-outline", "border-top-color"), "rgb(0, 255, 0)");
    // `solid` fills with the local primary and inverts the box from its typed value out to the
    // chrome the wrapper adds. The same reads on an outlined box must say otherwise, or these
    // assertions would pass on a rule that paints every tier.
    assertColor(
      await rgba("default-input-solid", "background-color"),
      [255, 0, 0, 255],
      "solid input must fill with the local primary",
    );
    assert.equal(await style("default-input-solid", "border-top-color"), "rgb(255, 0, 0)");
    assert.equal(
      await style("solid-input-text", "color"),
      await resolve("solid-input-text", "var(--kui-color-text-on-solid)"),
      "a solid box must invert the typed text",
    );
    assert.notEqual(
      await style("outline-input-text", "color"),
      await resolve("outline-input-text", "var(--kui-color-text-on-solid)"),
      "the solid colour rules must not leak into other tiers",
    );
    assert.equal(
      await style("solid-input-chrome", "color"),
      await resolve(
        "solid-input-chrome",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 85%, transparent)",
      ),
      "a solid box must invert the chrome around its field",
    );
    // `::placeholder` is only readable through a pseudo-element style.
    const placeholder = (id: string) =>
      page.locator("#" + id).evaluate((el) => getComputedStyle(el, "::placeholder").color);
    assert.equal(
      await placeholder("default-input-solid-single"),
      await resolve(
        "default-input-solid-single",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 75%, transparent)",
      ),
      "a solid box must invert its placeholder",
    );
    await page.locator("#default-input-solid").hover();
    assertColor(
      await rgba("default-input-solid", "background-color"),
      [255, 0, 0, 230],
      "solid input hover must follow the local primary",
    );
    assert.equal(
      await style("default-input-solid", "box-shadow"),
      "none",
      "solid input must not add a ring over its own fill",
    );
    // The base ring is primary on a primary surface, i.e. invisible, so it is redrawn in the
    // inverted colour rather than dropped — and only for `solid`.
    await page.locator("#default-input-solid-single").focus();
    assert.equal(
      await style("default-input-solid-single", "outline-color"),
      await resolve(
        "default-input-solid-single",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 40%, transparent)",
      ),
      "a focused solid box must show an inverted ring",
    );
    await page.locator("#default-input-outline-single").focus();
    assert.notEqual(
      await style("default-input-outline-single", "outline-color"),
      await resolve(
        "default-input-outline-single",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 40%, transparent)",
      ),
      "the inverted ring must stay scoped to solid",
    );
    // A `<textarea>` and an `InputNumber` carry the same tier on their own element, and everything
    // the number builds inside the box inverts with it.
    assertColor(
      await rgba("default-textarea-solid", "background-color"),
      [255, 0, 0, 255],
      "solid textarea must fill with the local primary",
    );
    assert.equal(await style("default-textarea-solid", "color"), "rgb(255, 255, 255)");
    assertColor(
      await rgba("default-input-number-solid", "background-color"),
      [255, 0, 0, 255],
      "solid input-number must fill with the local primary",
    );
    assert.equal(
      await style("solid-number-text", "color"),
      await resolve("solid-number-text", "var(--kui-color-text-on-solid)"),
      "a solid number box must invert its field",
    );
    assert.equal(
      await style("solid-number-controls", "color"),
      await resolve(
        "solid-number-controls",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 85%, transparent)",
      ),
      "a solid number box must invert its step controls",
    );
    // `underlined` is one edge: the other three lose their width, the radius goes, and focus lights
    // that edge instead of drawing a ring. `plain` was asked for no border and no surface, so it
    // drops the ring too — the ruling the select family already follows. Both classes below are the
    // ones the component puts on the wrapper while its field has the caret.
    assert.equal(await style("default-input-underlined", "border-top-width"), "0px");
    assert.equal(await style("default-input-underlined", "border-bottom-width"), "1px");
    assert.equal(await style("default-input-underlined", "border-radius"), "0px");
    for (const [id, prop, expected] of [
      ["default-input-underlined", "border-bottom-color", "var(--kui-color-primary)"],
      ["default-input-underlined", "outline-style", "none"],
      ["default-input-plain", "outline-style", "none"],
      // The box that kept its border keeps the ring the base rule draws.
      ["default-input-outline", "outline-style", "solid"],
    ] as const) {
      await page.locator("#" + id).evaluate((el, cls) => el.classList.add(cls), "k-input-focus");
      assert.equal(
        await style(id, prop),
        prop.endsWith("color") ? await resolve(id, expected) : expected,
        `${id} focused must not fall back to the base border and ring`,
      );
    }
    // 3b-乙2: the two composite controls. A tag box paints the tier on its wrapper while an OTP group
    // paints it on every cell, and both used to swallow the same four tiers the box path did while
    // `fill` came from a hand-copied chain — so a documented `--kui-theme-*` hook missed them.
    for (const id of ["hook-tag-outline", "hook-tag-dashed", "hook-otp-outline-cell"])
      assert.equal(
        await style(id, "border-top-color"),
        "rgb(0, 255, 0)",
        "--kui-theme-outline-border must reach " + id,
      );
    // `outline` is a bare frame on the documented border chain, and `dashed` is the same frame with
    // a different line style, on a cell as much as on a wrapper.
    for (const id of ["default-tag-outline", "outline-otp-cell"]) {
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "var(--kui-color-border)"),
        id + " outline must fall through to the base border",
      );
      assert.equal(
        await style(id, "background-color"),
        await resolve(id, "transparent"),
        id + " outline must stay transparent",
      );
    }
    assert.equal(await style("default-tag-dashed", "border-top-style"), "dashed");
    assert.equal(await style("dashed-otp-cell", "border-top-style"), "dashed");
    assert.equal(
      await style("dashed-otp-cell", "border-top-color"),
      await resolve("dashed-otp-cell", "var(--kui-color-border)"),
      "dashed cells must follow the outline border",
    );
    // A tier that keeps its border keeps the base hover lighting, which is what separates `outline`
    // and `dashed` from the tiers that opt out below — an OTP cell lights the way the box path does.
    await page.locator("#outline-otp-cell").hover();
    await page
      .locator("#outline-otp-cell")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("outline-otp-cell", "border-top-color"),
      await resolve("outline-otp-cell", "var(--kui-color-primary)"),
      "an outlined OTP cell must light its border under the pointer",
    );
    // `solid` fills with the local primary and inverts everything the box is made of: the tag box's
    // field, its placeholder, its clear button and its chips, and the typed character in a cell.
    assertColor(
      await rgba("default-tag-solid", "background-color"),
      [255, 0, 0, 255],
      "a solid tag box must fill with the local primary",
    );
    assert.equal(
      await style("solid-tag-input", "color"),
      await resolve("solid-tag-input", "var(--kui-color-text-on-solid)"),
      "a solid tag box must invert its field",
    );
    assert.equal(
      await placeholder("solid-tag-input"),
      await resolve(
        "solid-tag-input",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 75%, transparent)",
      ),
      "a solid tag box must invert its placeholder",
    );
    assert.equal(
      await style("solid-tag-chrome", "color"),
      await resolve(
        "solid-tag-chrome",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 85%, transparent)",
      ),
      "a solid tag box must invert the chrome around its field",
    );
    assert.equal(
      await style("solid-tag-chip", "color"),
      await resolve("solid-tag-chip", "var(--kui-color-text-on-solid)"),
      "a solid tag box must invert its chips",
    );
    // A solid box repaints its own surface on hover the way Button does, and its ring is redrawn in
    // the inverted colour rather than left primary-on-primary.
    await page.locator("#default-tag-solid").hover();
    assertColor(
      await rgba("default-tag-solid", "background-color"),
      [255, 0, 0, 230],
      "solid tag hover must follow the local primary",
    );
    await page.locator("#solid-tag-input").focus();
    assert.equal(
      await style("default-tag-solid", "outline-color"),
      await resolve(
        "default-tag-solid",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 40%, transparent)",
      ),
      "a focused solid tag box must show an inverted ring",
    );
    assertColor(
      await rgba("solid-otp-cell", "background-color"),
      [255, 0, 0, 255],
      "solid OTP cells must fill with the local primary",
    );
    assert.equal(
      await style("solid-otp-cell", "color"),
      "rgb(255, 255, 255)",
      "a solid OTP cell must invert the typed character",
    );
    await page.locator("#solid-otp-cell").hover();
    assertColor(
      await rgba("solid-otp-cell", "background-color"),
      [255, 0, 0, 230],
      "a solid OTP cell must deepen its own fill on hover",
    );
    await page.locator("#solid-otp-cell").focus();
    assert.equal(
      await style("solid-otp-cell", "outline-color"),
      await resolve(
        "solid-otp-cell",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 40%, transparent)",
      ),
      "a focused solid cell must show an inverted ring",
    );
    // The tier is guarded on the group, so a disabled OTP keeps its disabled fill even under the
    // pointer — an unguarded `solid` repaint would win the tie against the disabled rule.
    await page.locator("#disabled-otp-solid-cell").hover();
    assert.equal(
      await style("disabled-otp-solid-cell", "background-color"),
      await resolve("disabled-otp-solid-cell", "var(--kui-color-bg-component-disabled)"),
      "a disabled OTP cell must still read as disabled inside solid",
    );
    // `underlined` is one edge on a wrapper and on a cell, and `plain` is nothing at all: both are
    // flat, so both drop the base ring and neither may have a border or a glow brought back by the
    // pointer or the caret. An OTP cell used to do exactly that on hover.
    for (const id of ["default-tag-underlined", "underlined-otp-cell"]) {
      assert.equal(
        await style(id, "border-top-width"),
        "0px",
        id + " must lose three of its edges",
      );
      assert.equal(
        await style(id, "border-bottom-width"),
        "1px",
        id + " must keep its bottom edge",
      );
    }
    assert.equal(await style("default-tag-underlined", "border-radius"), "0px");
    await page.locator("#default-tag-underlined").hover();
    await page
      .locator("#default-tag-underlined")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("default-tag-underlined", "border-bottom-color"),
      await resolve("default-tag-underlined", "var(--kui-color-primary)"),
      "an underlined tag box must light its bottom edge under the pointer",
    );
    await page.locator("#underlined-tag-input").focus();
    await page
      .locator("#default-tag-underlined")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("default-tag-underlined", "border-bottom-color"),
      await resolve("default-tag-underlined", "var(--kui-color-primary)"),
      "a focused underlined tag box must light its bottom edge",
    );
    assert.equal(
      await style("default-tag-underlined", "outline-style"),
      "none",
      "an underlined tag box must not keep the base ring",
    );
    await page.locator("#underlined-otp-cell").hover();
    await page
      .locator("#underlined-otp-cell")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("underlined-otp-cell", "border-bottom-color"),
      await resolve("underlined-otp-cell", "var(--kui-color-primary)"),
      "an underlined OTP cell must light its bottom edge under the pointer",
    );
    await page.locator("#underlined-otp-cell").focus();
    assert.equal(
      await style("underlined-otp-cell", "outline-style"),
      "none",
      "an underlined OTP cell must not keep the base ring",
    );
    await page.locator("#plain-otp-cell").hover();
    await page
      .locator("#plain-otp-cell")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("plain-otp-cell", "border-top-color"),
      await resolve("plain-otp-cell", "transparent"),
      "a plain OTP cell must not grow a border under the pointer",
    );
    await page.locator("#plain-otp-cell").focus();
    assert.equal(
      await style("plain-otp-cell", "outline-style"),
      "none",
      "a plain OTP cell must not keep the base ring",
    );
    await page.locator("#plain-tag-input").focus();
    assert.equal(
      await style("default-tag-plain", "outline-style"),
      "none",
      "a plain tag box must not keep the base ring",
    );
    // Runtime updates must affect a component already mounted inside the scope.
    await page
      .locator("#local")
      .evaluate((el: HTMLElement) => el.style.setProperty("--kui-color-primary", "#0000ff"));
    await page.locator("#primary").hover();
    await page.locator("#primary").evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assertColor(await rgba("primary", "background-color"), [0, 0, 255, 230]);
    console.log(
      "Theme regression checks passed: local colors/radii, runtime updates, nested themes, explicit overrides, theme variants and their fallback chains, aliases and split CSS entry.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
