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
      /* A check box used to hand-copy the fill background and hard-code a transparent edge, so this hook
         is the proof that its fill tier now reads the same arm every other surface reads. */
      .mark-hooks {--kui-theme-fill-border:#00ffff}
      /* solid fills with the primary, so this scope declares its own; the hover stop stays
         undefined, which is what proves the 90% mix is computed at the point of use. */
      .solid-scope {--kui-color-primary:#ff0000}
    </style>
    <div class="local" id="local">
      <button id="primary" class="k-btn k-btn-primary">Primary</button>
      <button id="danger" class="k-btn k-btn-danger">Danger</button>
      <button id="warning" class="k-btn k-btn-warning">Warning</button>
      <div id="success" class="k-alert k-alert-success k-alert-fill">Success</div>
      <div class="k-popup-panel k-popup"><div id="popup" class="k-popup-content">Popup</div></div>
    </div>
    <div theme-mode="dark"><button id="dark" class="k-btn">Dark</button><div theme-mode="light"><button id="light" class="k-btn">Light</button></div></div>
    <div class="overrides"><div theme-mode="dark"><div id="control" class="k-input" data-multiple><input /></div><button id="override" class="k-btn k-btn-primary">Override</button><div class="k-popup-panel k-popup"><div id="override-popup" class="k-popup-content">Popup</div></div></div></div>
    <div id="square" shape-mode="square"><button id="square-button" class="k-btn">Square</button></div>
    <div class="theme-hooks"><div id="hook-card-fill" class="k-card k-card-fill">Card</div><div id="hook-card-outline" class="k-card k-card-outline">Card</div><div id="hook-card-plain" class="k-card k-card-plain">Card</div><div id="hook-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div id="hook-input-plain" class="k-input k-input-plain" data-multiple><input /></div><div id="hook-input-outline" class="k-input k-input-outline" data-multiple><input class="k-input-text" /></div><div id="hook-input-dashed" class="k-input k-input-dashed" data-multiple><input class="k-input-text" /></div><div id="hook-select-outline" class="k-select k-select-outline" tabindex="0"><div class="k-select-selection">Outline</div></div><div id="hook-select-dashed" class="k-select k-select-dashed" tabindex="0"><div class="k-select-selection">Dashed</div></div><div id="hook-tag-outline" class="k-input-tag k-input-tag-outline"><input class="k-input-tag-input" /></div><div id="hook-tag-dashed" class="k-input-tag k-input-tag-dashed"><input class="k-input-tag-input" /></div><div id="hook-otp-outline" class="k-input-otp k-input-otp-outline"><input id="hook-otp-outline-cell" class="k-input-otp-item" /></div><div id="hook-picker-fill" class="k-color-picker k-color-picker-fill">Fill</div><div id="hook-picker-outline" class="k-color-picker k-color-picker-outline">Outline</div><div id="hook-picker-dashed" class="k-color-picker k-color-picker-dashed">Dashed</div><div id="hook-mark-fill" class="k-tag k-tag-fill">Fill</div><div id="hook-mark-outline" class="k-tag k-tag-outline">Outline</div><div id="hook-mark-plain" class="k-tag k-tag-plain">Plain</div><div id="hook-mark-dashed" class="k-tag k-tag-dashed">Dashed</div><div class="k-checkbox k-checkbox-fill"><span id="hook-checkbox-fill" class="k-checkbox-symbol"></span></div><div class="k-checkbox k-checkbox-outline"><span id="hook-checkbox-outline" class="k-checkbox-symbol"></span></div><div class="k-radio k-radio-outline"><span id="hook-radio-outline" class="k-radio-symbol"></span></div><div id="hook-card-dashed" class="k-card k-card-dashed">Card</div><div id="hook-collapse-outline" class="k-collapse k-collapse-outline">Collapse</div><div id="hook-collapse-dashed" class="k-collapse k-collapse-dashed">Collapse</div><div id="hook-collapse-fill" class="k-collapse k-collapse-fill">Collapse</div><div id="hook-feedback-outline" class="k-feedback-panel k-feedback-panel-outline">Panel</div><div id="hook-feedback-dashed" class="k-feedback-panel k-feedback-panel-dashed">Panel</div><div id="hook-feedback-plain" class="k-feedback-panel k-feedback-panel-plain">Panel</div><div id="hook-check-card-outline" class="k-check-card k-check-card-outline">Card</div><div id="hook-check-card-fill" class="k-check-card k-check-card-fill">Card</div><div id="hook-check-card-plain" class="k-check-card k-check-card-plain">Card</div><div id="hook-check-card-dashed" class="k-check-card k-check-card-dashed">Card</div><div id="hook-alert-outline" class="k-alert k-alert-info k-alert-outline"><span id="hook-alert-outline-mark" class="k-alert-icon">i</span>Outline</div><div id="hook-alert-dashed" class="k-alert k-alert-info k-alert-dashed">Dashed</div><div id="hook-alert-plain" class="k-alert k-alert-info k-alert-plain">Plain</div><div id="hook-alert-fill" class="k-alert k-alert-info k-alert-fill">Fill</div><div id="hook-image-fill" class="k-image k-image-fill">Fill</div><div id="hook-image-outline" class="k-image k-image-outline">Outline</div><div id="hook-image-dashed" class="k-image k-image-dashed">Dashed</div><div id="hook-image-plain" class="k-image k-image-plain">Plain</div><div id="hook-qrcode-fill" class="k-qrcode k-qrcode-fill">Fill</div><div id="hook-qrcode-outline" class="k-qrcode k-qrcode-outline">Outline</div><div id="hook-qrcode-dashed" class="k-qrcode k-qrcode-dashed">Dashed</div></div>
    <div class="control-chain"><div id="chain-card-outline" class="k-card k-card-outline">Card</div><div id="chain-card-fill" class="k-card k-card-fill">Card</div><div id="chain-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div class="k-checkbox k-checkbox-outline"><span id="chain-checkbox-outline" class="k-checkbox-symbol"></span></div></div>
    <div class="mark-hooks"><div class="k-checkbox k-checkbox-fill"><span id="hook-checkbox-fill-border" class="k-checkbox-symbol"></span></div><div class="k-radio k-radio-fill"><span id="hook-radio-fill-border" class="k-radio-symbol"></span></div></div>
    <div id="theme-defaults"><div id="default-card-fill" class="k-card k-card-fill">Card</div><div id="default-card-bordered" class="k-card k-card-bordered">Card</div><div id="default-input-fill" class="k-input k-input-fill" data-multiple><input /></div><div id="default-input-plain" class="k-input k-input-plain" data-multiple><input /></div><div id="default-select-plain" class="k-select k-select-plain" tabindex="0"><div class="k-select-selection">Plain</div></div><div id="default-select-borderless" class="k-select k-select-borderless" tabindex="0"><div class="k-select-selection">Borderless</div></div><div id="default-select-outline" class="k-select k-select-outline" tabindex="0"><div class="k-select-selection">Outline</div></div><div id="default-select-dashed" class="k-select k-select-dashed" tabindex="0"><div class="k-select-selection">Dashed</div></div><div id="default-select-underlined" class="k-select k-select-underlined" tabindex="0"><div class="k-select-selection">Underlined</div></div><div id="default-datepicker-fill" class="k-datepicker k-datepicker-fill" tabindex="0">Fill</div><div id="default-datepicker-plain" class="k-datepicker k-datepicker-plain" tabindex="0">Plain</div><div id="default-datepicker-borderless" class="k-datepicker k-datepicker-borderless" tabindex="0">Borderless</div><div id="default-input-outline" class="k-input k-input-outline" data-multiple><input id="outline-input-text" class="k-input-text" placeholder="Pick" /></div><input id="default-input-outline-single" class="k-input k-input-outline" data-single placeholder="Pick" /><div id="default-input-dashed" class="k-input k-input-dashed" data-multiple><input class="k-input-text" /></div><div id="default-input-underlined" class="k-input k-input-underlined" data-multiple><input class="k-input-text" /></div><div id="default-tag-outline" class="k-input-tag k-input-tag-outline"><input class="k-input-tag-input" /></div><div id="default-tag-dashed" class="k-input-tag k-input-tag-dashed"><input class="k-input-tag-input" /></div><div id="default-tag-plain" class="k-input-tag k-input-tag-plain"><input id="plain-tag-input" class="k-input-tag-input" /></div><div id="default-tag-underlined" class="k-input-tag k-input-tag-underlined"><input id="underlined-tag-input" class="k-input-tag-input" /></div><div id="default-otp-outline" class="k-input-otp k-input-otp-outline"><input id="outline-otp-cell" class="k-input-otp-item" /></div><div id="default-otp-dashed" class="k-input-otp k-input-otp-dashed"><input id="dashed-otp-cell" class="k-input-otp-item" /></div><div id="default-otp-plain" class="k-input-otp k-input-otp-plain"><input id="plain-otp-cell" class="k-input-otp-item" /></div><div id="default-otp-underlined" class="k-input-otp k-input-otp-underlined"><input id="underlined-otp-cell" class="k-input-otp-item" /></div><div id="default-picker-outline" class="k-color-picker k-color-picker-outline">Outline</div><div id="default-picker-dashed" class="k-color-picker k-color-picker-dashed">Dashed</div><div id="default-picker-opened-outline" class="k-color-picker k-color-picker-outline k-color-picker-opened">Outline</div><div id="default-picker-fill" class="k-color-picker k-color-picker-fill">Fill</div><div id="default-picker-opened-fill" class="k-color-picker k-color-picker-fill k-color-picker-opened">Fill</div><div id="default-picker-plain" class="k-color-picker k-color-picker-plain">Plain</div><div id="default-picker-opened-plain" class="k-color-picker k-color-picker-plain k-color-picker-opened">Plain</div><div id="default-picker-underlined" class="k-color-picker k-color-picker-underlined">Underlined</div><div id="default-picker-opened-underlined" class="k-color-picker k-color-picker-underlined k-color-picker-opened">Underlined</div><div id="disabled-picker-outline" class="k-color-picker k-color-picker-outline k-color-picker-disabled">Disabled</div><div id="disabled-picker-fill" class="k-color-picker k-color-picker-fill k-color-picker-disabled">Disabled</div><div id="default-mark-fill" class="k-tag k-tag-fill">Fill</div><div id="default-mark-outline" class="k-tag k-tag-outline">Outline</div><div id="default-mark-plain" class="k-tag k-tag-plain">Plain</div><div id="default-mark-dashed" class="k-tag k-tag-dashed">Dashed</div><div class="k-checkbox k-checkbox-fill"><span id="default-checkbox-fill" class="k-checkbox-symbol"></span></div><div class="k-checkbox k-checkbox-outline"><span id="default-checkbox-outline" class="k-checkbox-symbol"></span></div><div class="k-checkbox k-checkbox-outline k-checkbox-checked"><span id="checked-outline-box" class="k-checkbox-symbol"></span></div><div class="k-checkbox k-checkbox-fill k-checkbox-checked"><span id="checked-fill-box" class="k-checkbox-symbol"></span></div><div class="k-checkbox k-checkbox-outline k-checkbox-disabled"><span id="disabled-outline-box" class="k-checkbox-symbol"></span></div><div class="k-radio k-radio-outline"><span id="default-radio-outline" class="k-radio-symbol"></span></div><div class="k-radio k-radio-outline k-radio-checked"><span id="checked-radio-outline" class="k-radio-symbol"></span></div><div class="k-radio k-radio-fill k-radio-disabled"><span id="disabled-radio-fill" class="k-radio-symbol"></span></div><div id="default-card-dashed" class="k-card k-card-dashed"><div id="default-card-dashed-head" class="k-card-head"><span class="k-card-title">标题</span></div><div class="k-card-body">内容</div></div><div id="default-feature-card-dashed" class="k-feature-card k-feature-card-dashed"><span class="k-feature-card-icon">i</span></div><div id="default-stat-card-dashed" class="k-stat-card k-stat-card-dashed"><div class="k-stat-card-item"><div class="k-stat-card-item-desc">今日</div></div></div><div id="default-stat-card-outline" class="k-stat-card k-stat-card-outline">Stat</div><div id="default-stat-card-bordered" class="k-stat-card k-stat-card-bordered">Stat</div><div id="default-collapse-dashed" class="k-collapse k-collapse-dashed"><div class="k-collapse-item"><div id="default-collapse-dashed-header" class="k-collapse-header">标题</div></div></div><div id="sample-collapse-outline" class="k-collapse k-collapse-sample k-collapse-outline"><div class="k-collapse-item"><div class="k-collapse-header">标题</div></div></div><div id="sample-collapse-dashed" class="k-collapse k-collapse-sample k-collapse-dashed"><div class="k-collapse-item"><div class="k-collapse-header">标题</div></div></div><div id="sample-collapse-solid" class="k-collapse k-collapse-sample k-collapse-solid"><div id="sample-collapse-solid-item" class="k-collapse-item"><div id="sample-collapse-solid-header" class="k-collapse-header">标题</div></div></div><div id="default-feedback-fill" class="k-feedback-panel k-feedback-panel-fill">Panel</div><div id="default-feedback-plain" class="k-feedback-panel k-feedback-panel-plain">Panel</div><div id="default-feedback-outline" class="k-feedback-panel k-feedback-panel-outline">Panel</div><div id="default-feedback-dashed" class="k-feedback-panel k-feedback-panel-dashed">Panel</div><div id="default-check-card-outline" class="k-check-card k-check-card-outline"><div class="k-check-card-symbol">i</div><div class="k-check-card-content"><div id="default-check-card-title" class="k-check-card-title">标题</div><div class="k-check-card-description">描述</div></div><span class="k-check-card-indicator">✓</span></div><div id="default-check-card-fill" class="k-check-card k-check-card-fill">Card</div><div id="default-check-card-fill-checked" class="k-check-card k-check-card-fill is-checked">Card</div><div id="default-check-card-plain" class="k-check-card k-check-card-plain">Card</div><div id="default-check-card-dashed" class="k-check-card k-check-card-dashed">Card</div><div id="default-alert-fill" class="k-alert k-alert-warning k-alert-fill"><span id="default-alert-mark" class="k-alert-icon">i</span><div class="k-alert-content"><div id="default-alert-message" class="k-alert-message">提示</div><div id="default-alert-desc" class="k-alert-description">描述</div></div><span id="default-alert-close" class="k-alert-close">x</span></div><div id="default-alert-bordered" class="k-alert k-alert-error k-alert-fill k-alert-bordered">Bordered</div><div id="default-alert-outline" class="k-alert k-alert-success k-alert-outline"><div id="default-alert-outline-message" class="k-alert-message">提示</div></div><div id="default-image-plain" class="k-image k-image-plain">Picture</div><div id="default-image-outline" class="k-image k-image-outline">Picture</div><div id="default-image-fill" class="k-image k-image-fill">Picture</div><div id="default-image-dashed" class="k-image k-image-dashed">Picture</div><div id="default-qrcode-outline" class="k-qrcode k-qrcode-outline">Code</div><div id="default-qrcode-fill" class="k-qrcode k-qrcode-fill">Code</div><div id="default-qrcode-dashed" class="k-qrcode k-qrcode-dashed">Code</div><div id="default-qrcode-plain" class="k-qrcode k-qrcode-plain">Code</div><div id="default-qrcode-borderless" class="k-qrcode k-qrcode-plain k-qrcode-borderless">Code</div></div>
    <div class="solid-scope"><div id="default-select-solid" class="k-select k-select-solid" tabindex="0"><div class="k-select-selection"><div id="solid-placeholder" class="k-select-placeholder">Pick</div></div></div><div id="default-input-solid" class="k-input k-input-solid" data-multiple><span id="solid-input-chrome" class="k-input-prefix">$</span><input id="solid-input-text" class="k-input-text" placeholder="Pick" /></div><input id="default-input-solid-single" class="k-input k-input-solid" data-single placeholder="Pick" /><textarea id="default-textarea-solid" class="k-textarea k-textarea-solid" placeholder="Notes"></textarea><div id="default-input-number-solid" class="k-input-number k-input-number-solid" data-multiple><input id="solid-number-text" class="k-input-number-text" placeholder="Pick" /><div id="solid-number-controls" class="k-input-number-controls">+</div></div><div id="default-tag-solid" class="k-input-tag k-input-tag-solid"><span id="solid-tag-chrome" class="k-input-tag-clearable">x</span><input id="solid-tag-input" class="k-input-tag-input" placeholder="Pick" /><span id="solid-tag-chip" class="k-input-tag-item k-tag">Tag</span></div><div id="default-otp-solid" class="k-input-otp k-input-otp-solid"><input id="solid-otp-cell" class="k-input-otp-item" /></div><div class="k-input-otp k-input-otp-solid k-input-otp-disabled"><input id="disabled-otp-solid-cell" class="k-input-otp-item" disabled /></div><div id="default-picker-solid" class="k-color-picker k-color-picker-solid"><div class="k-color-picker-selection"><div class="k-color-picker-color"></div><div id="solid-picker-text" class="k-color-picker-trigger-text">#123456</div></div></div><div id="default-picker-solid-opened" class="k-color-picker k-color-picker-solid k-color-picker-opened"><div id="solid-picker-opened-text" class="k-color-picker-trigger-text">#123456</div></div><div id="disabled-picker-solid" class="k-color-picker k-color-picker-solid k-color-picker-disabled">Disabled</div><div id="mark-solid" class="k-tag k-tag-solid">Solid<span id="mark-solid-close" class="k-tag-close">x</span></div><div id="mark-red" class="k-tag k-tag-red k-tag-solid">Red</div><div id="mark-custom" class="k-tag k-tag-has-color k-tag-outline" style="background-color: #123456">Custom</div><div class="k-select k-select-solid"><span id="pin-select-solid-chip" class="k-tag k-tag-solid">Tag</span></div><div class="k-select k-select-dashed"><span id="pin-select-dashed-chip" class="k-tag k-tag-dashed">Tag</span></div><div class="k-tree-select k-tree-select-solid"><span id="pin-tree-solid-chip" class="k-tag k-tag-solid">Tag</span></div><div class="k-tree-select k-tree-select-dashed"><span id="pin-tree-dashed-chip" class="k-tag k-tag-dashed">Tag</span></div><div id="solid-card" class="k-card k-card-solid"><div id="solid-card-head" class="k-card-head"><span id="solid-card-title" class="k-card-title">标题</span></div><div class="k-card-body"><div class="k-card-meta"><div id="solid-card-meta-title" class="k-card-meta-title">名字</div><div id="solid-card-meta-desc" class="k-card-meta-description">描述</div></div></div></div><div id="solid-feature-card" class="k-feature-card k-feature-card-solid"><span id="solid-feature-icon" class="k-feature-card-icon">i</span><div class="k-feature-card-content"><div id="solid-feature-title" class="k-feature-card-title">标题</div><div id="solid-feature-desc" class="k-feature-card-desc">描述</div></div></div><div id="outline-feature-card" class="k-feature-card k-feature-card-outline"><span id="outline-feature-icon" class="k-feature-card-icon">i</span><div class="k-feature-card-content"><div id="outline-feature-desc" class="k-feature-card-desc">描述</div></div></div><div id="solid-stat-card" class="k-stat-card k-stat-card-solid"><div id="solid-stat-title" class="k-stat-card-title">统计</div><div class="k-stat-card-items"><div class="k-stat-card-item"><div id="solid-stat-value" class="k-stat-card-item-value">128</div><div id="solid-stat-desc" class="k-stat-card-item-desc">今日</div><div id="solid-stat-trend" class="k-stat-card-item-trend k-stat-card-item-trend-default">+2%</div><div id="solid-stat-trend-success" class="k-stat-card-item-trend k-stat-card-item-trend-success">+2%</div></div></div></div><div id="solid-collapse" class="k-collapse k-collapse-solid"><div id="solid-collapse-item" class="k-collapse-item"><div id="solid-collapse-header" class="k-collapse-header">标题</div><div class="k-collapse-content"><div id="solid-collapse-box" class="k-collapse-content-box">内容</div></div></div><div class="k-collapse-item k-collapse-item-disabled"><div id="solid-collapse-disabled-header" class="k-collapse-header">禁用</div></div></div><div id="solid-feedback" class="k-feedback-panel k-feedback-panel-solid k-feedback-panel-positive"><div class="k-feedback-panel-mark"><span id="solid-feedback-mark" class="k-feedback-panel-mark-inner">i</span></div><div class="k-feedback-panel-main"><div id="solid-feedback-heading" class="k-feedback-panel-heading">标题</div><div id="solid-feedback-desc" class="k-feedback-panel-description">描述</div><div id="solid-feedback-details" class="k-feedback-panel-details">细节</div></div></div><div id="outline-feedback" class="k-feedback-panel k-feedback-panel-outline"><div id="outline-feedback-heading" class="k-feedback-panel-heading">标题</div></div><div id="solid-check-card" class="k-check-card k-check-card-solid"><div id="solid-check-card-symbol" class="k-check-card-symbol">i</div><div class="k-check-card-content"><div id="solid-check-card-title" class="k-check-card-title">标题</div><div id="solid-check-card-desc" class="k-check-card-description">描述</div></div><span id="solid-check-card-indicator" class="k-check-card-indicator">✓</span></div><div id="solid-check-card-checked" class="k-check-card k-check-card-solid is-checked"><div id="solid-checked-symbol" class="k-check-card-symbol">i</div><div class="k-check-card-content"><div class="k-check-card-title">标题</div></div><span id="solid-checked-indicator" class="k-check-card-indicator">✓</span></div><div id="disabled-check-card-solid" class="k-check-card k-check-card-solid is-disabled"><div id="disabled-check-card-symbol" class="k-check-card-symbol">i</div><div class="k-check-card-content"><div id="disabled-check-card-title" class="k-check-card-title">标题</div><div id="disabled-check-card-desc" class="k-check-card-description">描述</div></div><span id="disabled-check-card-indicator" class="k-check-card-indicator">✓</span></div><div id="disabled-check-card-checked" class="k-check-card k-check-card-solid is-disabled is-checked"><span id="disabled-checked-indicator" class="k-check-card-indicator">✓</span></div><div id="outline-check-card" class="k-check-card k-check-card-outline"><div class="k-check-card-content"><div id="outline-check-card-title" class="k-check-card-title">标题</div></div></div><div id="solid-alert" class="k-alert k-alert-error k-alert-solid"><span id="solid-alert-mark" class="k-alert-icon">i</span><div class="k-alert-content"><div id="solid-alert-message" class="k-alert-message">提示</div><div id="solid-alert-desc" class="k-alert-description">描述</div></div><span id="solid-alert-close" class="k-alert-close">x</span></div><div id="solid-alert-info" class="k-alert k-alert-info k-alert-solid">Info</div><div id="outline-alert" class="k-alert k-alert-error k-alert-outline"><span id="outline-alert-mark" class="k-alert-icon">i</span><div id="outline-alert-message" class="k-alert-message">提示</div></div><div id="solid-image" class="k-image k-image-solid"><span id="solid-image-loading" class="k-image-loading">i</span><span id="solid-image-error" class="k-image-error">x</span>Picture</div><div id="solid-qrcode" class="k-qrcode k-qrcode-solid"><div class="k-qrcode-mask"><p id="solid-qrcode-expired" class="k-qrcode-expired">已过期</p></div>Code</div><div id="outline-image" class="k-image k-image-outline"><span id="outline-image-loading" class="k-image-loading">i</span><span id="outline-image-error" class="k-image-error">x</span>Picture</div><div id="outline-qrcode" class="k-qrcode k-qrcode-outline"><p id="outline-qrcode-expired" class="k-qrcode-expired">已过期</p>Code</div></div>
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
    // 3b-乙2b: the color picker's trigger is a third box shape — the tier is painted on the box and
    // its open state is a class, not a pseudo-class, so an open panel is what has to light the edge.
    assert.equal(
      await style("hook-picker-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach the color picker",
    );
    for (const id of ["hook-picker-outline", "hook-picker-dashed"])
      assert.equal(
        await style(id, "border-top-color"),
        "rgb(0, 255, 0)",
        "--kui-theme-outline-border must reach " + id,
      );
    assert.equal(
      await style("default-picker-outline", "border-top-color"),
      await resolve("default-picker-outline", "var(--kui-color-border)"),
      "an outlined color picker must fall through to the base border",
    );
    assert.equal(await style("default-picker-dashed", "border-top-style"), "dashed");
    // The tier sets a border of its own, so the open panel's edge only stays lit while that rule
    // sits below the opened declaration in the cascade.
    assert.equal(
      await style("default-picker-opened-outline", "border-top-color"),
      await resolve("default-picker-opened-outline", "var(--kui-color-primary)"),
      "an open outlined color picker must light its edge",
    );
    // `outline` is the opposite case: it has no state rule of its own, so it lights through the base
    // repaint. A hover read on it is what keeps that repaint from being dropped for the tiers.
    await page.locator("#default-picker-outline").hover();
    assert.equal(
      await style("default-picker-outline", "border-top-color"),
      await resolve(
        "default-picker-outline",
        "color-mix(in srgb, var(--kui-color-primary) 90%, transparent)",
      ),
      "an outlined color picker must light its edge under the pointer",
    );
    // `fill` has no edge to light up and the open panel's glow is drawn where that edge was, so both
    // of its state declarations have to survive the base repaint and the opened rule.
    await page.locator("#default-picker-fill").hover();
    assert.equal(
      await style("default-picker-fill", "border-top-color"),
      await resolve("default-picker-fill", "transparent"),
      "a filled color picker must not grow a border under the pointer",
    );
    assert.equal(
      await style("default-picker-opened-fill", "border-top-color"),
      await resolve("default-picker-opened-fill", "transparent"),
      "an open filled color picker must keep its edge flat",
    );
    assert.equal(
      await style("default-picker-opened-fill", "box-shadow"),
      "none",
      "an open filled color picker must not keep the base glow",
    );
    // `plain` was the one tier with a hand-written `transparent`, and an open panel used to bring a
    // primary border and a glow back onto it.
    for (const id of ["default-picker-plain", "default-picker-opened-plain"]) {
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "transparent"),
        id + " must show no edge",
      );
      assert.equal(await style(id, "box-shadow"), "none", id + " must show no glow");
    }
    await page.locator("#default-picker-plain").hover();
    assert.equal(
      await style("default-picker-plain", "border-top-color"),
      await resolve("default-picker-plain", "transparent"),
      "a plain color picker must not grow a border under the pointer",
    );
    assert.equal(
      await style("default-picker-underlined", "border-top-width"),
      "0px",
      "an underlined color picker must lose three of its edges",
    );
    assert.equal(
      await style("default-picker-underlined", "border-bottom-width"),
      "1px",
      "an underlined color picker must keep its bottom edge",
    );
    assert.equal(await style("default-picker-underlined", "border-radius"), "0px");
    await page.locator("#default-picker-underlined").hover();
    assert.equal(
      await style("default-picker-underlined", "border-bottom-color"),
      await resolve("default-picker-underlined", "var(--kui-color-primary)"),
      "an underlined color picker must light its edge under the pointer",
    );
    assert.equal(
      await style("default-picker-opened-underlined", "box-shadow"),
      "none",
      "an open underlined color picker must not grow the base glow",
    );
    // `solid` fills the box with the local primary and inverts the value text next to the swatch;
    // the open panel deepens the surface the way Button does instead of borrowing the base repaint.
    assertColor(
      await rgba("default-picker-solid", "background-color"),
      [255, 0, 0, 255],
      "a solid color picker must fill with the local primary",
    );
    assert.equal(
      await style("solid-picker-text", "color"),
      await resolve("solid-picker-text", "var(--kui-color-text-on-solid)"),
      "a solid color picker must invert its value text",
    );
    await page.locator("#default-picker-solid").hover();
    assertColor(
      await rgba("default-picker-solid", "background-color"),
      [255, 0, 0, 230],
      "a solid color picker must deepen its own fill on hover",
    );
    assertColor(
      await rgba("default-picker-solid-opened", "background-color"),
      [255, 0, 0, 230],
      "an open solid color picker must deepen its fill",
    );
    assert.equal(
      await style("default-picker-solid-opened", "box-shadow"),
      "none",
      "an open solid color picker must not keep the base glow",
    );
    assert.equal(
      await style("solid-picker-opened-text", "color"),
      await resolve("solid-picker-opened-text", "var(--kui-color-text-on-solid)"),
      "an open solid color picker must keep its text inverted",
    );
    // A disabled box keeps reading as disabled whatever tier it carries: `solid` and `fill` guard
    // themselves out of the tier, and `outline` — which deliberately stays unguarded like the rest
    // of the family — loses to the disabled block because that block comes after it.
    await page.locator("#disabled-picker-solid").hover();
    assert.equal(
      await style("disabled-picker-solid", "background-color"),
      await resolve("disabled-picker-solid", "var(--kui-color-bg-component-disabled)"),
      "a disabled color picker must still read as disabled inside solid",
    );
    await page.locator("#disabled-picker-outline").hover();
    assert.equal(
      await style("disabled-picker-outline", "background-color"),
      await resolve("disabled-picker-outline", "var(--kui-color-bg-component-disabled)"),
      "a disabled outlined color picker must not keep the tier surface",
    );
    assert.equal(
      await style("disabled-picker-outline", "border-top-color"),
      await resolve("disabled-picker-outline", "var(--kui-color-border-disabled)"),
      "a disabled outlined color picker must keep the disabled edge",
    );
    assert.equal(
      await style("disabled-picker-fill", "background-color"),
      await resolve("disabled-picker-fill", "var(--kui-color-bg-component-disabled)"),
      "a disabled filled color picker must not keep the tier surface",
    );
    // 3c-乙a: the chip. A tag paints all five tiers on its own box, so it takes the same documented
    // hooks the 3b boxes take, and `dashed` is `outline`'s border with a different line.
    assert.equal(
      await style("hook-mark-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach a tag",
    );
    for (const id of ["hook-mark-outline", "hook-mark-dashed"])
      assert.equal(
        await style(id, "border-top-color"),
        "rgb(0, 255, 0)",
        "--kui-theme-outline-border must reach " + id,
      );
    assert.equal(
      await style("hook-mark-plain", "background-color"),
      "rgb(255, 255, 0)",
      "--kui-theme-plain-bg must reach a tag",
    );
    assert.equal(
      await style("hook-mark-plain", "border-top-color"),
      "rgb(0, 0, 255)",
      "--kui-theme-plain-border must reach a tag",
    );
    // With no hook on the scope, each tier falls through to the token it is documented to alias.
    assert.equal(
      await style("default-mark-fill", "background-color"),
      await resolve("default-mark-fill", "var(--kui-color-bg-component-overlay)"),
      "a filled tag must fall through to the overlay surface",
    );
    assert.equal(
      await style("default-mark-outline", "border-top-color"),
      await resolve("default-mark-outline", "var(--kui-color-border)"),
      "an outlined tag must fall through to the base border",
    );
    assert.equal(
      await style("default-mark-dashed", "border-top-style"),
      "dashed",
      "a dashed tag must break its line",
    );
    assert.equal(
      await style("default-mark-dashed", "border-top-color"),
      await resolve("default-mark-dashed", "var(--kui-color-border)"),
      "a dashed tag must follow the outline border",
    );
    assert.equal(
      await style("default-mark-fill", "border-top-color"),
      await resolve("default-mark-fill", "transparent"),
      "a filled tag must show no edge",
    );
    assert.equal(
      await style("default-mark-plain", "border-top-color"),
      await resolve("default-mark-plain", "transparent"),
      "a plain tag must show no edge",
    );
    assert.equal(
      await style("default-mark-plain", "background-color"),
      await resolve("default-mark-plain", "transparent"),
      "a plain tag must stay flat",
    );
    // `solid` is the emphasis chip: the local primary under an inverted label, and the close icon
    // inverted with it — including under the pointer, where the base rule paints it danger red.
    assertColor(
      await rgba("mark-solid", "background-color"),
      [255, 0, 0, 255],
      "a solid tag must fill with the local primary",
    );
    for (const id of ["mark-solid", "mark-solid-close"])
      assert.equal(
        await style(id, "color"),
        await resolve("mark-solid", "var(--kui-color-text-on-solid)"),
        id + " must be inverted on a solid tag",
      );
    await page.locator("#mark-solid-close").hover();
    assert.equal(
      await style("mark-solid-close", "color"),
      await resolve("mark-solid", "var(--kui-color-text-on-solid)"),
      "the close icon of a solid tag must not flip to danger under the pointer",
    );
    // `color` names the chip's hue and `theme` describes its surface, so an explicit colour keeps all
    // three of its stops — otherwise the documented preset palette is repainted by the tier every tag
    // now carries, `fill` included.
    for (const [id, prop, expected] of [
      ["mark-red", "background-color", "color-mix(in srgb, var(--kui-color-red) 10%, transparent)"],
      ["mark-red", "border-top-color", "color-mix(in srgb, var(--kui-color-red) 40%, transparent)"],
      ["mark-red", "color", "color-mix(in srgb, var(--kui-color-red) 70%, transparent)"],
      ["mark-custom", "border-top-color", "transparent"],
      ["mark-custom", "color", "var(--kui-color-text-on-solid)"],
    ] as const)
      assert.equal(
        await style(id, prop),
        await resolve(id, expected),
        `${id} must keep its own ${prop} against the tier`,
      );
    // 3b handed a control's tier down to the chips it paints. A chip that fills with the local primary
    // inside a primary box is invisible and a chip that breaks its line inside a dashed box doubles it,
    // so the control pins its chips — and both pins have to out-rank the tier rules in a file that is
    // imported after `select`'s and before `tree-select`'s.
    for (const chip of ["pin-select-solid-chip", "pin-tree-solid-chip"]) {
      assert.equal(
        await style(chip, "color"),
        await resolve(chip, "var(--kui-color-text-on-solid)"),
        chip + " must stay inverted inside a solid control",
      );
      assert.equal(
        await style(chip, "background-color"),
        await resolve(chip, "color-mix(in srgb, var(--kui-color-text-on-solid) 18%, transparent)"),
        chip + " must keep the translucent chip surface inside a solid control",
      );
      assert.equal(
        await style(chip, "border-top-color"),
        await resolve(chip, "transparent"),
        chip + " must not keep the solid edge inside a solid control",
      );
    }
    for (const chip of ["pin-select-dashed-chip", "pin-tree-dashed-chip"])
      assert.equal(
        await style(chip, "border-top-style"),
        "solid",
        chip + " must not inherit the dashed line of its control",
      );
    // 3c-乙b: a check box and a radio have no surface of their own — the tier *is* the box, so both
    // tiers have to reach `.k-*-symbol`. `outline` used to ship no class at all (the edge came from the
    // base rule, so no hook could touch it) and `fill` hard-coded a transparent edge.
    assert.equal(
      await style("hook-checkbox-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach a check box",
    );
    for (const [id, expected] of [
      ["hook-checkbox-outline", "rgb(0, 255, 0)"],
      ["hook-radio-outline", "rgb(0, 255, 0)"],
      ["chain-checkbox-outline", "rgb(0, 255, 0)"],
      ["hook-checkbox-fill-border", "rgb(0, 255, 255)"],
      ["hook-radio-fill-border", "rgb(0, 255, 255)"],
    ] as const)
      assert.equal(
        await style(id, "border-top-color"),
        expected,
        id + " must take its edge from the scope's hook",
      );
    // With neither hook on the scope, the tier falls through to the border the base already used — and
    // it is still a solid line, because `outline` is the bordered box, not a different shape.
    for (const id of ["default-checkbox-outline", "default-radio-outline"])
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "var(--kui-color-border)"),
        id + " must fall through to the base border",
      );
    assert.equal(await style("default-checkbox-outline", "border-top-style"), "solid");
    assert.equal(
      await style("default-checkbox-fill", "background-color"),
      await resolve("default-checkbox-fill", "var(--kui-color-bg-component-overlay)"),
      "a filled check box must use the overlay surface",
    );
    assert.equal(
      await style("default-checkbox-fill", "border-top-color"),
      await resolve("default-checkbox-fill", "transparent"),
      "a filled check box must show no edge",
    );
    // The tiers must not out-rank the states that own the box: a checked box stays primary whatever the
    // tier asked for (its rule is (0,3,0)), a disabled one still reads as disabled, and a checked or
    // disabled `fill` keeps the edge transparent instead of growing the primary border the state paints.
    for (const [id, property] of [
      ["checked-outline-box", "border-top-color"],
      ["checked-outline-box", "background-color"],
      ["checked-radio-outline", "border-top-color"],
      ["checked-radio-outline", "background-color"],
    ] as const)
      assert.equal(
        await style(id, property),
        await resolve(id, "var(--kui-color-primary)"),
        `${id} must stay primary through the outline tier`,
      );
    for (const id of ["checked-fill-box", "disabled-radio-fill"])
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "transparent"),
        id + " must keep the transparent edge of its fill tier",
      );
    assert.equal(
      await style("disabled-outline-box", "border-top-color"),
      await resolve("disabled-outline-box", "var(--kui-color-border-disabled)"),
      "a disabled outlined check box must read as disabled",
    );
    assert.equal(
      await style("disabled-radio-fill", "background-color"),
      await resolve("disabled-radio-fill", "var(--kui-color-bg-component-disabled)"),
      "a disabled filled radio must read as disabled",
    );
    // `outline` keeps the family's base interactions — hovering lights the edge in primary — while
    // `fill` owns its own hover and must not let that base edge back in.
    await page.locator("#default-checkbox-outline").hover();
    assert.equal(
      await style("default-checkbox-outline", "border-top-color"),
      await resolve("default-checkbox-outline", "var(--kui-color-primary)"),
      "an outlined check box must still light up on hover",
    );
    await page.locator("#default-checkbox-fill").hover();
    assert.equal(
      await style("default-checkbox-fill", "border-top-color"),
      await resolve("default-checkbox-fill", "transparent"),
      "a filled check box must not grow the base hover edge",
    );
    assert.equal(
      await style("default-checkbox-fill", "background-color"),
      await resolve("default-checkbox-fill", "var(--kui-color-bg-component-hover)"),
      "a filled check box must paint its own hover surface",
    );
    // 3c-丙a: a surface tier paints the whole box, so `solid` has to take with it everything these
    // components colour themselves. The parts are named per component because inherited colour only
    // reaches text that has no rule of its own: a card title has none and inverts for free, while a meta
    // title, an icon chip or a muted line paint themselves with dark tokens and must be repainted here.
    for (const id of ["solid-card", "solid-feature-card", "solid-stat-card"]) {
      assertColor(
        await rgba(id, "background-color"),
        [255, 0, 0, 255],
        id + " must fill with the local primary",
      );
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text-on-solid)"),
        id + " must invert the text it owns",
      );
    }
    // The solid arm sets `border-color` only, so a box that has no frame of its own keeps none — the
    // base reset gives every element a 0-width solid edge, which makes the width, not the style, the
    // thing to read: the surface is the whole look on a `Card`, while a feature card and a stat card
    // paint the same colour onto the 1px frame they already carry.
    assert.equal(
      await style("solid-card", "border-top-width"),
      "0px",
      "solid must not draw a Card frame",
    );
    for (const id of ["solid-feature-card", "solid-stat-card"]) {
      assert.equal(
        await style(id, "border-top-width"),
        "1px",
        id + " must keep its frame under solid",
      );
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "var(--kui-color-primary)"),
        id + " must border with its own surface",
      );
    }
    // Text that carries no colour rule of its own follows the root.
    for (const id of [
      "solid-card-title",
      "solid-stat-title",
      "solid-stat-value",
      "solid-feature-title",
    ])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text-on-solid)"),
        id + " must inherit the inverted text of a solid surface",
      );
    // Text that does carry one is named by the tier, dimmed rather than flattened to the surface colour.
    for (const id of ["solid-card-meta-title"])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text-on-solid)"),
        id + " must be repainted, not left on its dark token",
      );
    for (const id of [
      "solid-card-meta-desc",
      "solid-feature-desc",
      "solid-stat-desc",
      "solid-stat-trend",
    ])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "color-mix(in srgb, var(--kui-color-text-on-solid) 80%, transparent)"),
        id + " must dim on a solid surface instead of staying dark",
      );
    assert.equal(
      await style("solid-card-head", "border-bottom-color"),
      await resolve(
        "solid-card-head",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 30%, transparent)",
      ),
      "a solid card must invert its head divider",
    );
    // The icon chip keeps its `--k-feature-card-*` hooks — the tier only changes the default side, and
    // its old 12% primary tint would vanish on a primary surface.
    assert.equal(
      await style("solid-feature-icon", "color"),
      await resolve("solid-feature-icon", "var(--kui-color-text-on-solid)"),
      "a solid feature card must invert its icon",
    );
    assert.equal(
      await style("solid-feature-icon", "background-color"),
      await resolve(
        "solid-feature-icon",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 18%, transparent)",
      ),
      "a solid feature card must tint its icon chip from the inverted text",
    );
    // A trend that carries a semantic colour is the data, not the chrome, so the `:not()` chain of
    // `.k-stat-card-solid` has to leave it alone — 涨 and 跌 stay readable on the primary surface.
    assert.equal(
      await style("solid-stat-trend-success", "color"),
      await resolve("solid-stat-trend-success", "var(--kui-color-success)"),
      "a solid stat card must not flatten a semantic trend",
    );
    // The inversion is scoped to `solid`: an outlined card next to it keeps dark text and its primary
    // tint, so none of the rules above may reach another tier.
    assert.equal(
      await style("outline-feature-desc", "color"),
      await resolve("outline-feature-desc", "var(--kui-color-text-description)"),
      "the solid colour rules must not leak into the outlined tier",
    );
    assert.equal(
      await style("outline-feature-icon", "color"),
      await resolve("outline-feature-icon", "var(--kui-color-primary)"),
      "an outlined feature card must keep its accent icon",
    );
    // `dashed` borrows the outline colour and changes only the line style, on a surface exactly as it
    // does on a control, and a dashed card keeps its head divider solid.
    for (const id of [
      "default-card-dashed",
      "default-feature-card-dashed",
      "default-stat-card-dashed",
    ]) {
      assert.equal(await style(id, "border-top-style"), "dashed", id + " must draw a dashed frame");
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "var(--kui-color-border)"),
        id + " dashed must fall through to the base border",
      );
    }
    assert.equal(
      await style("hook-card-dashed", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach a dashed card",
    );
    assert.equal(
      await style("default-card-dashed-head", "border-bottom-style"),
      "solid",
      "a dashed card must not double its divider",
    );
    assert.equal(
      await style("default-card-dashed-head", "border-bottom-color"),
      await resolve("default-card-dashed-head", "var(--kui-color-border)"),
      "a dashed card must keep its divider on the card border token",
    );
    // `bordered` is the outlined spelling of a stat card. It used to hand-copy the same chain, which is
    // how the two drifted apart from the tier, so both must land on one triple now.
    for (const prop of ["border-top-color", "background-color"])
      assert.equal(
        await style("default-stat-card-bordered", prop),
        await style("default-stat-card-outline", prop),
        'a bordered stat card must read exactly like theme="outline": ' + prop,
      );
    // 3c-丙b: `Collapse` and `FeedbackPanel` resolve every tier through the shared mixin now, so the
    // same `--kui-theme-*` hooks that repaint a Card have to reach them — `--kui-theme-outline-border`
    // used to colour an input while a panel kept a hand-written border nothing could recolour.
    assert.equal(
      await style("hook-collapse-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach a collapsed panel",
    );
    assert.equal(
      await style("hook-collapse-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach a collapsed panel",
    );
    assert.equal(
      await style("hook-feedback-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach a feedback panel",
    );
    for (const id of ["hook-collapse-dashed", "hook-feedback-dashed", "hook-check-card-dashed"]) {
      assert.equal(await style(id, "border-top-style"), "dashed", id + " must draw a dashed frame");
      assert.equal(
        await style(id, "border-top-color"),
        "rgb(0, 255, 0)",
        id + " dashed must borrow the outlined hook",
      );
    }
    // `plain` was the one tier a panel painted by hand, on tokens nothing else in the library reads.
    assert.equal(
      await style("hook-feedback-plain", "border-top-color"),
      "rgb(0, 0, 255)",
      "--kui-theme-plain-border must reach a feedback panel",
    );
    assert.equal(
      await style("hook-feedback-plain", "background-color"),
      "rgb(255, 255, 0)",
      "--kui-theme-plain-bg must reach a feedback panel",
    );
    // 3c-丙c: a check card used to hand-copy `var(--kui-color-border)` for its own frame, so a caller
    // repainting the library's tier hooks got cards that stayed behind. These four are the proof the
    // card now reads the same hooks a Card or a panel does.
    assert.equal(
      await style("hook-check-card-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach a check card",
    );
    assert.equal(
      await style("hook-check-card-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach a check card",
    );
    assert.equal(
      await style("hook-check-card-plain", "border-top-color"),
      "rgb(0, 0, 255)",
      "--kui-theme-plain-border must reach a check card",
    );
    assert.equal(
      await style("hook-check-card-plain", "background-color"),
      "rgb(255, 255, 0)",
      "--kui-theme-plain-bg must reach a check card",
    );
    // The 4px stripe is what a feedback panel *means* — its severity — so every tier re-asserts it:
    // `outline` and `dashed` read the arm's `border` shorthand, which would otherwise flatten the
    // stripe to 1px in the frame colour, and `fill` and `plain` read only `border-color`, which would
    // otherwise paint it with the tier's border instead of the kind.
    for (const id of [
      "default-feedback-fill",
      "default-feedback-plain",
      "default-feedback-outline",
      "default-feedback-dashed",
      "solid-feedback",
    ]) {
      assert.equal(await style(id, "border-left-width"), "4px", id + " must keep its 4px stripe");
      assert.equal(
        await style(id, "border-left-style"),
        "solid",
        id + " stripe must not take the frame line style",
      );
      assert.equal(
        await style(id, "border-left-color"),
        await resolve(id, "var(--k-feedback-panel-color)"),
        id + " stripe must stay on the kind colour",
      );
    }
    // The tier owns the surface, so an outlined panel now lands on the shared arm's plate — transparent
    // until `--kui-theme-outline-bg` is set — instead of the page colour the base block used to pin.
    for (const id of ["default-feedback-outline", "default-feedback-dashed"])
      assertColor(
        await rgba(id, "background-color"),
        [0, 0, 0, 0],
        id + " must take the shared outlined surface",
      );
    // A dashed panel changes the line style of its own box and nothing inside it: the row dividers
    // stay solid on the base border, the way a dashed card keeps its head divider.
    assert.equal(
      await style("default-collapse-dashed", "border-top-color"),
      await resolve("default-collapse-dashed", "var(--kui-color-border)"),
      "a dashed panel must fall through to the base border",
    );
    assert.equal(
      await style("default-collapse-dashed-header", "border-bottom-style"),
      "solid",
      "a dashed panel must not dash its row dividers",
    );
    assert.equal(
      await style("default-collapse-dashed-header", "border-bottom-color"),
      await resolve("default-collapse-dashed-header", "var(--kui-color-border)"),
      "a dashed panel must keep its row dividers on the base border",
    );
    // `solid` puts a panel on the primary surface. It carries the 1px frame the base block already
    // draws, so the tier recolours it with its own surface, and because the header row paints its own
    // title colour and its own dividers the tier has to name those too. A disabled row answers to none
    // of it: the base disabled rule sits earlier in the file at the same specificity, so the tier
    // steps aside by name and the guard is what keeps that row reading as disabled.
    assertColor(
      await rgba("solid-collapse", "background-color"),
      [255, 0, 0, 255],
      "a solid panel must fill with the local primary",
    );
    assert.equal(
      await style("solid-collapse", "border-top-width"),
      "1px",
      "a solid panel must keep the frame it already carries",
    );
    assert.equal(
      await style("solid-collapse", "border-top-color"),
      await resolve("solid-collapse", "var(--kui-color-primary)"),
      "a solid panel must border with its own surface",
    );
    assert.equal(
      await style("solid-collapse-header", "color"),
      await resolve("solid-collapse-header", "var(--kui-color-text-on-solid)"),
      "a solid panel must invert its header text",
    );
    for (const prop of ["border-top-color", "border-bottom-color"])
      assert.equal(
        await style("solid-collapse-header", prop),
        await resolve(
          "solid-collapse-header",
          "color-mix(in srgb, var(--kui-color-text-on-solid) 30%, transparent)",
        ),
        "a solid panel must invert its header divider: " + prop,
      );
    assert.equal(
      await style("solid-collapse-box", "color"),
      await resolve("solid-collapse-box", "var(--kui-color-text-on-solid)"),
      "a solid panel must invert the body text that carries no rule of its own",
    );
    assert.equal(
      await style("solid-collapse-disabled-header", "color"),
      await resolve("solid-collapse-disabled-header", "var(--kui-color-text-disabled)"),
      "a disabled row must stay disabled on a solid panel",
    );
    for (const prop of ["border-top-color", "border-bottom-color"])
      assert.equal(
        await style("solid-collapse-disabled-header", prop),
        await resolve("solid-collapse-disabled-header", "var(--kui-color-border)"),
        "a disabled row must keep its own dividers on a solid panel: " + prop,
      );
    // `sample` is the frame-less spelling of a panel — every row is its own chip — and it is
    // documented as having no border, so a framed tier must not re-grow one; these suppressions sit
    // above the tiers for exactly that.
    for (const id of ["sample-collapse-outline", "sample-collapse-dashed", "sample-collapse-solid"])
      assert.equal(
        await style(id, "border-top-width"),
        "0px",
        id + " must keep the frame-less sample look",
      );
    // A solid sample keeps the plate-less look this mode promises and moves the surface onto the chips
    // it actually shows, so the mode still reads as separate boxes instead of one plate with seams.
    assertColor(
      await rgba("sample-collapse-solid", "background-color"),
      [0, 0, 0, 0],
      "a solid sample must keep the container plate-less",
    );
    assert.equal(
      await style("sample-collapse-solid-item", "background-color"),
      await resolve("sample-collapse-solid-item", "var(--kui-color-primary)"),
      "a solid sample must put its surface on the chips it shows",
    );
    assert.equal(
      await style("sample-collapse-solid-header", "color"),
      await resolve("sample-collapse-solid-header", "var(--kui-color-text-on-solid)"),
      "a solid sample must invert its chip text",
    );
    // A panel colours four parts of its own, so the tier names all four — and the mark chip inverts
    // even though its colour is the kind's, because on a neutral panel the icon *is* the primary the
    // surface was just painted with. The severity stripe stays data, not chrome.
    assertColor(
      await rgba("solid-feedback", "background-color"),
      [255, 0, 0, 255],
      "a solid feedback panel must fill with the local primary",
    );
    assert.equal(
      await style("solid-feedback", "color"),
      await resolve("solid-feedback", "var(--kui-color-text-on-solid)"),
      "a solid feedback panel must invert the text it owns",
    );
    assert.equal(
      await style("solid-feedback-heading", "color"),
      await resolve("solid-feedback-heading", "var(--kui-color-text-on-solid)"),
      "a solid panel must invert its heading",
    );
    assert.equal(
      await style("solid-feedback-desc", "color"),
      await resolve(
        "solid-feedback-desc",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 80%, transparent)",
      ),
      "a solid panel must dim its description instead of flattening it",
    );
    assert.equal(
      await style("solid-feedback-details", "color"),
      await resolve("solid-feedback-details", "var(--kui-color-text-on-solid)"),
      "a solid panel must invert its details plate",
    );
    assert.equal(
      await style("solid-feedback-mark", "color"),
      await resolve("solid-feedback-mark", "var(--kui-color-text-on-solid)"),
      "a solid panel must invert its mark",
    );
    for (const id of ["solid-feedback-details", "solid-feedback-mark"])
      assert.equal(
        await style(id, "background-color"),
        await resolve(id, "color-mix(in srgb, var(--kui-color-text-on-solid) 18%, transparent)"),
        id + " must tint its plate from the inverted text",
      );
    assert.equal(
      await style("solid-feedback", "border-left-color"),
      await resolve("solid-feedback", "var(--kui-color-success)"),
      "a solid panel must not flatten the severity it is reporting",
    );
    // The inversion is scoped to `solid`: an outlined panel sitting in the same primary scope keeps its
    // dark heading, so none of the rules above may reach another tier.
    assert.equal(
      await style("outline-feedback-heading", "color"),
      await resolve("outline-feedback-heading", "var(--kui-color-text-title)"),
      "the solid colour rules must not leak into the outlined tier",
    );
    // 3c-丙c: a check card is a surface, not a control — it paints a whole box, so `theme` now answers
    // the five surface tiers through the same mixin every other box uses. The frame lives on the base
    // block (`1px solid transparent`), which is what lets a tier change recolour the card without
    // moving its content: `fill` and `plain` set colour only, `outline` and `dashed` set the line
    // style, and the widths never leave 1px.
    assert.equal(await style("default-check-card-outline", "border-top-width"), "1px");
    assert.equal(
      await style("default-check-card-outline", "border-top-style"),
      "solid",
      "an outlined check card must draw a solid frame",
    );
    assert.equal(
      await style("default-check-card-outline", "border-top-color"),
      await resolve("default-check-card-outline", "var(--kui-color-border)"),
      "an outlined check card must land on the shared frame colour",
    );
    for (const id of ["default-check-card-fill", "default-check-card-plain"]) {
      assert.equal(
        await style(id, "border-top-color"),
        await resolve(id, "transparent"),
        id + " must keep its frame invisible",
      );
      assert.equal(
        await style(id, "border-top-width"),
        "1px",
        id + " must keep the frame width so its content does not shift",
      );
    }
    // A filled card is the one tier that still names a colour of its own once selected, so the checked
    // plate must differ from the resting plate instead of letting the state vanish.
    assert.equal(
      await style("default-check-card-fill", "background-color"),
      await style("default-card-fill", "background-color"),
      "a filled check card must sit on the same plate as a filled card",
    );
    await page.locator("#default-check-card-fill").hover();
    await page
      .locator("#default-check-card-fill")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("default-check-card-fill", "border-top-color"),
      await resolve("default-check-card-fill", "var(--kui-color-primary)"),
      "a check card must still light its edge under the pointer",
    );
    assert.notEqual(
      await style("default-check-card-fill-checked", "background-color"),
      await style("default-check-card-fill", "background-color"),
      "a checked fill card must show its state on the plate",
    );
    assert.equal(
      await style("default-check-card-fill-checked", "background-color"),
      await resolve(
        "default-check-card-fill-checked",
        "var(--kui-color-item-selected, color-mix(in srgb, var(--kui-color-primary) 20%, transparent))",
      ),
      "a checked fill card must tint from the selection token",
    );
    assert.equal(
      await style("default-check-card-plain", "background-color"),
      "rgba(0, 0, 0, 0)",
      "a plain check card must paint no surface at all",
    );
    assert.equal(await style("default-check-card-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("default-check-card-dashed", "border-top-color"),
      await resolve("default-check-card-dashed", "var(--kui-color-border)"),
      "a dashed check card must fall through to the base border",
    );
    // `solid` puts the card on the primary plate, and a check card colours four parts for itself —
    // title, description, symbol, indicator ring — none of which an inherited `color` can reach.
    assertColor(
      await rgba("solid-check-card", "background-color"),
      [255, 0, 0, 255],
      "a solid check card must fill with the local primary",
    );
    assert.equal(
      await style("solid-check-card", "border-top-width"),
      "1px",
      "a solid check card must keep the frame it already carries",
    );
    assert.equal(
      await style("solid-check-card", "border-top-color"),
      await resolve("solid-check-card", "var(--kui-color-primary)"),
      "a solid check card must border with its own surface",
    );
    for (const id of ["solid-check-card-title", "solid-check-card-symbol"])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text-on-solid)"),
        id + " must be repainted, not left on its dark token",
      );
    assert.equal(
      await style("solid-check-card-desc", "color"),
      await resolve(
        "solid-check-card-desc",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 80%, transparent)",
      ),
      "a solid check card must dim its description instead of flattening it",
    );
    assert.equal(
      await style("solid-check-card-indicator", "border-top-color"),
      await resolve(
        "solid-check-card-indicator",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 45%, transparent)",
      ),
      "a solid check card must keep its empty circle readable",
    );
    // Hover on a primary plate must not reach for the primary edge the base block draws — on this
    // surface that colour is the plate itself. It dims the frame from the inverted ink instead.
    await page.locator("#solid-check-card").hover();
    await page
      .locator("#solid-check-card")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("solid-check-card", "border-top-color"),
      await resolve(
        "solid-check-card",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 45%, transparent)",
      ),
      "a solid check card must light its edge from its own ink on hover",
    );
    // Selected is the state this component exists to show, so under `solid` the marks invert rather
    // than disappear: a primary ring, border or tick on a primary plate is nothing to look at.
    assert.equal(
      await style("solid-check-card-checked", "border-top-color"),
      await resolve("solid-check-card-checked", "var(--kui-color-text-on-solid)"),
      "a solid check card must keep its selected ring visible",
    );
    assert.equal(
      await style("solid-check-card-checked", "box-shadow"),
      (await resolve("solid-check-card-checked", "var(--kui-color-text-on-solid)")) +
        " 0px 0px 0px 1px",
      "a solid check card must draw its selection ring in the inverted ink",
    );
    assert.equal(
      await style("solid-checked-symbol", "color"),
      await resolve("solid-checked-symbol", "var(--kui-color-text-on-solid)"),
      "a solid check card must not fade its selected icon into the plate",
    );
    assert.equal(
      await style("solid-checked-indicator", "background-color"),
      await resolve("solid-checked-indicator", "var(--kui-color-text-on-solid)"),
      "a solid check card must turn its tick disc light",
    );
    // …and the mark inside that disc takes the plate colour back, which is the only pairing that
    // stays legible on a primary surface.
    assert.equal(
      await style("solid-checked-indicator", "color"),
      await resolve("solid-checked-indicator", "var(--kui-color-primary)"),
      "a solid check card must paint its tick with the plate colour",
    );
    // A disabled card answers to none of this. The parts named above each carry their own rule, so the
    // base block had to name them under `.is-disabled` too — inheritance never reached them, and under
    // `solid` the same gap read as white-on-grey text with an enabled-looking title.
    for (const id of [
      "disabled-check-card-title",
      "disabled-check-card-desc",
      "disabled-check-card-symbol",
    ])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text-disabled)"),
        id + " must stay disabled on a solid card",
      );
    assert.equal(
      await style("disabled-check-card-solid", "background-color"),
      await resolve(
        "disabled-check-card-solid",
        "var(--kui-control-bg-disabled, var(--kui-color-bg-component-disabled))",
      ),
      "a disabled solid card must keep the disabled plate, not the primary one",
    );
    for (const prop of ["border-top-color", "border-bottom-color", "border-left-color"])
      assert.equal(
        await style("disabled-check-card-solid", prop),
        await resolve("disabled-check-card-solid", "var(--kui-color-border-disabled)"),
        "a disabled solid card must keep its disabled frame: " + prop,
      );
    assert.equal(
      await style("disabled-check-card-indicator", "border-top-color"),
      await resolve("disabled-check-card-indicator", "var(--kui-color-border-disabled)"),
      "a disabled solid card must keep its disabled tick ring",
    );
    // Selected *and* disabled is where the tier's `:not(.is-disabled)` guards earn their keep: the
    // checked rules weigh more than the base disabled block, so without the guard a card the caller
    // cannot click still comes back with a white disc and an inverted frame.
    assert.equal(
      await style("disabled-check-card-checked", "border-top-color"),
      await resolve("disabled-check-card-checked", "var(--kui-color-border-disabled)"),
      "a disabled card must not take the solid checked frame",
    );
    assert.equal(
      await style("disabled-checked-indicator", "background-color"),
      await resolve(
        "disabled-checked-indicator",
        "var(--kui-control-bg-disabled, var(--kui-color-bg-component-disabled))",
      ),
      "a disabled card must not invert its tick disc",
    );
    // The inversion is scoped to `solid`: a plain-tier card sitting in the same primary scope keeps its
    // dark title, so none of the rules above may reach another tier.
    assert.equal(
      await style("outline-check-card-title", "color"),
      await resolve("outline-check-card-title", "var(--kui-color-text-title)"),
      "the solid colour rules must not leak into the outlined tier",
    );
    // 3c-丁a: an alert's default look *is* its message colour, so its tiers take the shared arm's frame
    // and keep a plate of their own. `fill` is that tint, `solid` is the same colour at full strength,
    // and neither is reachable by the hook that paints a generic surface.
    assert.equal(
      await style("default-alert-fill", "background-color"),
      await resolve("default-alert-fill", "var(--k-alert-plate)"),
      "a filled alert must wear the tint its own type names",
    );
    assert.notEqual(
      await style("default-alert-fill", "background-color"),
      await resolve("default-alert-fill", "var(--k-alert-accent)"),
      "a filled alert must stay a tint, not the saturated message colour",
    );
    // The mark and the plate are the same message read two ways, and `theme` never repaints the mark.
    assert.equal(
      await style("default-alert-mark", "color"),
      await resolve("default-alert-mark", "var(--kui-color-warning)"),
      "an alert's mark must keep the colour of its type",
    );
    for (const id of ["default-alert-message", "default-alert-desc"])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text)"),
        id + " must stay readable on the tinted plate",
      );
    assert.notEqual(
      await style("default-alert-message", "color"),
      await resolve("default-alert-message", "var(--kui-color-text-on-solid)"),
      "only the solid tier may invert an alert",
    );
    // `bordered` moves the plate onto the frame, and is written compound (0,2,0) precisely so a tier's
    // own `border-color` at (0,1,0) cannot out-order it.
    assert.equal(
      await style("default-alert-bordered", "border-top-color"),
      await resolve("default-alert-bordered", "var(--k-alert-plate)"),
      "a bordered alert must frame itself with its own tint",
    );
    assert.equal(await style("default-alert-outline", "border-top-style"), "solid");
    assert.equal(
      await style("default-alert-outline", "border-top-color"),
      await resolve("default-alert-outline", "var(--kui-color-border)"),
      "an outlined alert must draw the base border",
    );
    // The frame used to read `currentColor` — the page's text colour, which is neither the alert's
    // message nor an override hook — so an outlined alert could not be recoloured at all.
    assert.notEqual(
      await style("default-alert-outline", "border-top-color"),
      await resolve("default-alert-outline", "var(--kui-color-text)"),
      "an outlined alert must no longer border with its own text colour",
    );
    // The three tiers that own no plate of their own are the arm, hooks included.
    assert.equal(
      await style("hook-alert-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach an outlined alert",
    );
    assert.equal(
      await style("hook-alert-dashed", "border-top-color"),
      "rgb(0, 255, 0)",
      "a dashed alert must fall through to the outline hook",
    );
    assert.equal(await style("hook-alert-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("hook-alert-plain", "border-top-color"),
      "rgb(0, 0, 255)",
      "--kui-theme-plain-border must reach an alert",
    );
    assert.equal(
      await style("hook-alert-plain", "background-color"),
      "rgb(255, 255, 0)",
      "--kui-theme-plain-bg must reach an alert",
    );
    assert.equal(
      await style("hook-alert-fill", "background-color"),
      await resolve("hook-alert-fill", "var(--k-alert-plate)"),
      "--kui-theme-fill-bg must not repaint an alert's message tint",
    );
    // `solid` fills with the type's own saturation, so an error block and an info block stay two
    // different blocks even inside one primary scope.
    assert.equal(
      await style("solid-alert", "background-color"),
      await resolve("solid-alert", "var(--kui-color-danger)"),
      "a solid error alert must fill with its own message colour",
    );
    assert.notEqual(
      await style("solid-alert", "background-color"),
      await resolve("solid-alert", "var(--kui-color-primary)"),
      "a solid error alert must not be swallowed by the scope's primary",
    );
    assert.equal(
      await style("solid-alert-info", "background-color"),
      await resolve("solid-alert-info", "var(--kui-color-primary)"),
      "info is the one type whose message is the primary",
    );
    assert.notEqual(
      await style("solid-alert", "background-color"),
      await style("solid-alert-info", "background-color"),
      "a solid alert must keep the severity it is reporting",
    );
    assert.equal(
      await style("solid-alert", "border-top-color"),
      await style("solid-alert", "background-color"),
      "a solid alert's frame must follow its plate",
    );
    // An alert also renders whatever `children` it is given, and that text has no rule of its own — it
    // inherits the root's colour, so the solid tier has to invert the root itself, not only the parts.
    assert.equal(
      await style("solid-alert", "color"),
      await resolve("solid-alert", "var(--kui-color-text-on-solid)"),
      "a solid alert must invert the colour its children inherit",
    );
    // Four parts colour themselves here, so an inherited `color` reaches none of them.
    for (const id of [
      "solid-alert-message",
      "solid-alert-desc",
      "solid-alert-mark",
      "solid-alert-close",
    ])
      assert.equal(
        await style(id, "color"),
        await resolve(id, "var(--kui-color-text-on-solid)"),
        id + " must be repainted, not left on a dark token",
      );
    // The base rule paints a close button danger red on hover, and danger red on a solid error plate is
    // nothing to look at, so the tier names `:hover` itself.
    await page.locator("#solid-alert-close").hover();
    await page
      .locator("#solid-alert-close")
      .evaluate((el) => el.getAnimations().forEach((a) => a.finish()));
    assert.equal(
      await style("solid-alert-close", "color"),
      await resolve(
        "solid-alert-close",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 70%, transparent)",
      ),
      "a close button on a solid plate must fade in its own ink",
    );
    assert.notEqual(
      await style("solid-alert-close", "color"),
      await resolve("solid-alert-close", "var(--kui-color-danger)"),
      "a close button must not hover into the colour of the plate it sits on",
    );
    // None of that may reach a tier that kept its light plate — same scope, outlined alert.
    assert.equal(
      await style("outline-alert-message", "color"),
      await resolve("outline-alert-message", "var(--kui-color-text)"),
      "the solid colour rules must not leak into the outlined tier",
    );
    assert.equal(
      await style("outline-alert-mark", "color"),
      await resolve("outline-alert-mark", "var(--kui-color-danger)"),
      "an outlined alert must keep its mark on the type's colour",
    );
    // 3c-丁b: a picture framed itself with `border-color` alone on an element `base.less` gives
    // `border: 0 solid`, so the colour landed on an edge with no width — `theme="outline"` painted
    // nothing and `--kui-theme-outline-border` had nothing to reach. The shared arm draws the 1px as
    // well, which is the whole difference between a dead class name and a frame.
    assert.equal(await style("hook-image-outline", "border-top-width"), "1px");
    assert.equal(
      await style("hook-image-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach an outlined picture",
    );
    assert.equal(await style("hook-image-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("hook-image-dashed", "border-top-color"),
      "rgb(0, 255, 0)",
      "a dashed picture must fall through to the outline hook",
    );
    assert.equal(
      await style("hook-image-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach a filled picture",
    );
    assert.equal(
      await style("hook-image-plain", "background-color"),
      "rgb(255, 255, 0)",
      "--kui-theme-plain-bg must reach a plain picture",
    );
    // With no hook, an outlined or dashed picture draws the base border, a filled one the plate the
    // shared chain ends in, and the component's own look stays frameless and transparent.
    assert.equal(await style("default-image-outline", "border-top-width"), "1px");
    assert.equal(
      await style("default-image-outline", "border-top-color"),
      await resolve("default-image-outline", "var(--kui-color-border)"),
      "an outlined picture must draw the base border",
    );
    assert.equal(
      await style("default-image-dashed", "border-top-color"),
      await resolve("default-image-dashed", "var(--kui-color-border)"),
      "a dashed picture must fall through to the base border",
    );
    assert.equal(
      await style("default-image-fill", "background-color"),
      await resolve("default-image-fill", "var(--kui-color-bg-component-overlay)"),
      "a filled picture must sit on the plate every other filled surface reads",
    );
    assert.equal(
      await style("default-image-plain", "border-top-width"),
      "0px",
      "the picture's own look must stay frameless",
    );
    assert.equal(
      await style("default-image-plain", "background-color"),
      await resolve("default-image-plain", "transparent"),
      "the picture's own look must stay transparent",
    );
    // A code's own look *is* a frame, and it kept a hand-copied one while emitting `k-qrcode-outline`,
    // so the tier it defaults to had no rule and the hook could not reach it. The arm paints the same
    // 1px: the pixels of a default code do not move, and `--kui-theme-outline-border` now has a say.
    assert.equal(await style("default-qrcode-outline", "border-top-width"), "1px");
    assert.equal(
      await style("default-qrcode-outline", "border-top-color"),
      await resolve("default-qrcode-outline", "var(--kui-color-border)"),
      "a framed code must draw the base border",
    );
    assert.equal(
      await style("default-qrcode-outline", "padding-top"),
      "12px",
      "a framed code must keep the ring the canvas sits in",
    );
    assert.equal(
      await style("hook-qrcode-outline", "border-top-color"),
      "rgb(0, 255, 0)",
      "--kui-theme-outline-border must reach an outlined code",
    );
    assert.equal(await style("hook-qrcode-dashed", "border-top-style"), "dashed");
    assert.equal(
      await style("hook-qrcode-fill", "background-color"),
      "rgb(255, 0, 0)",
      "--kui-theme-fill-bg must reach a filled code",
    );
    assert.equal(
      await style("default-qrcode-dashed", "border-top-color"),
      await resolve("default-qrcode-dashed", "var(--kui-color-border)"),
      "a dashed code must fall through to the base border",
    );
    // ⑪: `theme="plain"` asks for no surface, `bordered={false}` asks for no frame — and only a frameless
    // code has lost the thing the 12px ring was drawn to hold. The two used to be one rule, so asking for
    // `plain` deleted padding the caller never mentioned while leaving a transparent edge standing there.
    assert.equal(
      await style("default-qrcode-plain", "padding-top"),
      "12px",
      "a plain code must keep the ring it never asked to lose",
    );
    assert.equal(
      await style("default-qrcode-plain", "border-top-width"),
      "1px",
      "a plain code keeps its box the same size; only the frame goes",
    );
    assert.equal(
      await style("default-qrcode-plain", "border-top-color"),
      await resolve("default-qrcode-plain", "var(--kui-theme-plain-border)"),
      "a plain code must fade its frame through the shared token",
    );
    assert.equal(
      await style("default-qrcode-borderless", "padding-top"),
      "0px",
      "a borderless code must drop the ring with the frame",
    );
    assert.equal(
      await style("default-qrcode-borderless", "border-top-width"),
      "0px",
      "bordered={false} must remove the frame, not paint it transparent",
    );
    // `solid` paints the plate the two states a picture swaps in are sitting on, and each of them carried
    // a dark colour of its own: the spinner was primary on primary, the error mark placeholder grey on
    // primary. Inheritance reaches neither, so both are named.
    assert.equal(
      await style("solid-image", "background-color"),
      await resolve("solid-image", "var(--kui-color-primary)"),
      "a solid picture must fill with the scope's primary",
    );
    assert.equal(
      await style("solid-image", "border-top-color"),
      await style("solid-image", "background-color"),
      "a solid picture's frame must follow its plate",
    );
    // Solid names `border-color`, never a width, so on a picture — which owns no edge of its own — it
    // shows a plate and nothing else, exactly as it does on a card.
    assert.equal(
      await style("solid-image", "border-top-width"),
      "0px",
      "a solid picture must not grow a frame of its own",
    );
    assert.equal(
      await style("solid-image", "color"),
      await resolve("solid-image", "var(--kui-color-text-on-solid)"),
      "a solid picture must invert the colour its children inherit",
    );
    assert.equal(
      await style("solid-image-loading", "color"),
      await resolve("solid-image-loading", "var(--kui-color-text-on-solid)"),
      "a spinner on a solid plate must not be primary on primary",
    );
    assert.notEqual(
      await style("solid-image-loading", "color"),
      await resolve("solid-image-loading", "var(--kui-color-primary)"),
      "a solid picture must repaint the spinner it names",
    );
    assert.equal(
      await style("solid-image-error", "color"),
      await resolve("solid-image-error", "var(--kui-color-text-on-solid)"),
      "an error mark on a solid plate must invert",
    );
    assert.equal(
      await style("solid-image-error", "background-color"),
      await resolve(
        "solid-image-error",
        "color-mix(in srgb, var(--kui-color-text-on-solid) 18%, transparent)",
      ),
      "an error mark must tint its plate with the tier's own ink",
    );
    assert.notEqual(
      await style("solid-image-error", "background-color"),
      await resolve("solid-image-error", "var(--kui-color-bg-component)"),
      "an error mark must not keep the light plate under a solid picture",
    );
    // A code inverts the one line its mask colours itself; the frame the base rule gives it is what the
    // tier's border colour lands on, so unlike a picture it does show an edge.
    assert.equal(
      await style("solid-qrcode", "background-color"),
      await resolve("solid-qrcode", "var(--kui-color-primary)"),
      "a solid code must fill the ring it is drawn in",
    );
    assert.equal(
      await style("solid-qrcode", "border-top-color"),
      await style("solid-qrcode", "background-color"),
      "a solid code's frame must follow its plate",
    );
    assert.equal(
      await style("solid-qrcode", "border-top-width"),
      "1px",
      "a solid code must keep the frame it was given",
    );
    assert.equal(
      await style("solid-qrcode-expired", "color"),
      await resolve("solid-qrcode-expired", "var(--kui-color-text-on-solid)"),
      "an expired message on a solid code must invert",
    );
    assert.notEqual(
      await style("solid-qrcode-expired", "color"),
      await resolve("solid-qrcode-expired", "var(--kui-color-text)"),
      "an expired message must not stay dark ink on a primary plate",
    );
    // None of that may reach a tier that keeps a light plate — the same scope, framed.
    assert.equal(
      await style("outline-image-loading", "color"),
      await resolve("outline-image-loading", "var(--kui-color-primary)"),
      "an outlined picture must keep its spinner on the primary",
    );
    assert.equal(
      await style("outline-image-error", "color"),
      await resolve("outline-image-error", "var(--kui-color-text-placeholder)"),
      "an outlined picture must keep its error mark in ink",
    );
    assert.equal(
      await style("outline-qrcode-expired", "color"),
      await resolve("outline-qrcode-expired", "var(--kui-color-text)"),
      "an outlined code must keep its expired message in ink",
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
