import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// node tests/visual/selected-states.mjs ../kui-vue ../kui-react
const require = createRequire(import.meta.url);
const { chromium } = require("@playwright/test");
const less = require("less");
const repositories = process.argv.slice(2);
if (!repositories.length) repositories.push(fileURLToPath(new URL("../../", import.meta.url)));
const cases = [];
const add = (name, html, selector, hoverSelector = selector) =>
  cases.push({ name, html, selector, hoverSelector });
for (const appearance of ["fill", "plain", "borderless"]) {
  for (const opened of [false, true]) {
    cases.push({
      name: `DatePicker ${appearance} ${opened ? "open" : "closed"}`,
      html: `<div tabindex="0" class="k-datepicker k-datepicker-${appearance}${opened ? " k-datepicker-opened" : ""}">Date</div>`,
      selector: ".k-datepicker",
      hoverSelector: ".k-datepicker",
      checkBorder: true,
    });
  }
}
for (const [item, selected] of [
  ["day", "day-selected"],
  ["month-item", "month-selected"],
  ["year-item", "year-selected"],
  ["time-item", "active"],
]) {
  for (const extra of item === "day"
    ? ["", " k-picker-is-today", " k-picker-day-out", " k-picker-day-in", " k-picker-day-disabled"]
    : [""]) {
    add(
      `DatePicker ${item}${extra}`,
      `<div class="k-datepicker-overlay"><div class="k-picker-container"><span class="k-picker-${item} ${selected === "active" ? selected : "k-picker-" + selected}${extra}">22</span></div></div>`,
      `.k-picker-${item}`,
    );
  }
}
add(
  "Select",
  '<div class="k-select-dropdown"><div class="k-select-item k-select-item-selected">Selected</div></div>',
  ".k-select-item",
);
add(
  "Menu",
  '<ul class="k-menu k-menu-vertical"><li class="k-menu-item k-menu-item-selected">Selected</li></ul>',
  ".k-menu-item",
);
add(
  "Tree",
  '<div class="k-tree"><div class="k-tree-item"><span class="k-tree-title k-tree-title-selected">Selected</span></div></div>',
  ".k-tree-title",
);
add(
  "Calendar",
  '<div class="k-calendar-cell k-calendar-cell-selected">Selected</div>',
  ".k-calendar-cell",
);
add(
  "Cascader",
  '<div class="k-cascader-dropdown"><div class="k-cascader-dropdown-item k-cascader-dropdown-item-active">Selected</div></div>',
  ".k-cascader-dropdown-item",
);
add("Transfer", '<div class="k-transfer-item is-selected">Selected</div>', ".k-transfer-item");
add(
  "Segmented",
  '<div class="k-segmented"><button class="k-segmented-item k-segmented-item-active">Selected</button></div>',
  ".k-segmented-item",
);
add(
  "Tabs",
  '<div class="k-tabs"><div class="k-tabs-bar"><div class="k-tabs-tab k-tabs-tab-active">Selected</div></div></div>',
  ".k-tabs-tab",
);
add(
  "CheckCard",
  '<div class="k-check-card k-check-card-fill is-checked">Selected</div>',
  ".k-check-card",
);
for (const kind of ["radio", "checkbox"]) {
  for (const theme of ["fill", "outline"]) {
    add(
      `${kind} ${theme}`,
      `<label class="k-${kind} k-${kind}-${theme} k-${kind}-checked"><span class="k-${kind}-symbol">✓</span>Selected</label>`,
      `.k-${kind}-symbol`,
      `.k-${kind}`,
    );
  }
}
for (const theme of ["fill", "outline", "plain"]) {
  add(
    `Page ${theme}`,
    `<ul class="k-page k-page-${theme}"><li class="k-pager-item k-pager-item-active">1</li></ul>`,
    ".k-pager-item",
  );
}
const components = [
  "date-picker",
  "select",
  "menu",
  "tree",
  "calendar",
  "cascader",
  "check-card",
  "checkbox",
  "radio",
  "page",
  "transfer",
  "segmented",
  "tabs",
];
const browser = await chromium.launch({ channel: "chrome" });
const failures = [];
let count = 0;
try {
  const page = await browser.newPage();
  for (const repo of repositories) {
    let css = "";
    for (const component of components) {
      const filename = resolve(repo, "components", component, "styles/index.less");
      css += (await less.render(readFileSync(filename, "utf8"), { filename })).css;
    }
    for (const theme of ["light", "dark"]) {
      for (const test of cases) {
        await page.setContent(`<html theme-mode="${theme}"><style>${css}
          *{transition:none!important;animation:none!important}
          #fixture{margin:100px;width:320px} #fixture span{min-width:30px;min-height:24px}
          </style><div id="fixture">${test.html}</div></html>`);
        const item = page.locator(`#fixture ${test.selector}`).first();
        const snapshot = () =>
          item.evaluate((el, checkBorder) => {
            const style = getComputedStyle(el);
            return {
              color: style.color,
              background: style.backgroundColor,
              ...(checkBorder ? { border: style.borderTopColor } : {}),
            };
          }, !!test.checkBorder);
        await page.mouse.move(0, 0);
        const normal = await snapshot();
        await page.locator(`#fixture ${test.hoverSelector}`).first().hover({ force: true });
        const hover = await snapshot();
        await page.mouse.down();
        const active = await snapshot();
        await page.mouse.up();
        let focus;
        if (test.checkBorder) {
          await item.focus();
          focus = await snapshot();
          if (normal.border !== "rgba(0, 0, 0, 0)")
            failures.push({ name: test.name, theme, normal });
        }
        for (const [state, actual] of [
          ["hover", hover],
          ["active", active],
          ...(focus ? [["focus", focus]] : []),
        ]) {
          if (
            actual.background !== normal.background ||
            actual.color !== normal.color ||
            actual.border !== normal.border
          ) {
            failures.push({
              repo: basename(resolve(repo)),
              theme,
              name: test.name,
              state,
              normal,
              actual,
            });
          }
        }
        count++;
      }
    }
  }
  console.log(JSON.stringify({ count, failures }, null, 2));
  if (failures.length) process.exitCode = 1;
} finally {
  await browser.close();
}
