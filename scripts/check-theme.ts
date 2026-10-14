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
    <div class="theme-hooks"><div id="hook-card-fill" class="k-card k-card-fill">Card</div><div id="hook-card-outline" class="k-card k-card-outline">Card</div><div id="hook-card-plain" class="k-card k-card-plain">Card</div><div id="hook-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div id="hook-input-plain" class="k-input k-input-plain" data-multiple><input /></div></div>
    <div class="control-chain"><div id="chain-card-outline" class="k-card k-card-outline">Card</div><div id="chain-card-fill" class="k-card k-card-fill">Card</div><div id="chain-input-fill" class="k-input k-input-fill" data-multiple><input /></div></div>
    <div id="theme-defaults"><div id="default-card-fill" class="k-card k-card-fill">Card</div><div id="default-card-bordered" class="k-card k-card-bordered">Card</div><div id="default-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div id="default-input-plain" class="k-input k-input-plain" data-multiple><input /></div></div>`);
    // Serialises a token the way the browser does, so a computed value can be compared to the
    // token it is supposed to fall back to instead of to a hand-copied colour.
    const resolve = (id: string, value: string) =>
      page.locator("#" + id).evaluate((el, value) => {
        const probe = document.createElement("span");
        probe.style.color = value;
        el.append(probe);
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
