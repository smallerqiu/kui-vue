import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// Usage: node tests/visual/disabled-states.mjs [repository directories...]
const require = createRequire(import.meta.url);
const repositories =
  process.argv.length > 2
    ? process.argv.slice(2)
    : [fileURLToPath(new URL("../../", import.meta.url))];
const { chromium } = require("@playwright/test");
const less = require("less");
const cases = [];
const add = (name, html, selector) => cases.push({ name, html, selector });
for (const theme of ["fill", "outline", "plain", "text", "solid"]) {
  add(
    "Button " + theme,
    '<button class="k-btn k-btn-' + theme + '" disabled>Button</button>',
    ".k-btn",
  );
}
for (const type of ["select", "tree-select", "cascader", "datepicker", "input-tag"]) {
  for (const theme of ["outline", "fill", "plain"]) {
    add(
      type + " " + theme,
      '<div class="k-' +
        type +
        " k-" +
        type +
        "-" +
        theme +
        " k-" +
        type +
        '-disabled">Disabled</div>',
      ".k-" + type,
    );
  }
}
add(
  "Input fill",
  '<div data-multiple class="k-input k-input-fill k-input-disabled"><input disabled class="k-input-text" value="Disabled"></div>',
  ".k-input",
);
add("Input outline", '<input data-single disabled class="k-input" value="Disabled">', ".k-input");
add(
  "InputNumber bound",
  '<div class="k-input-number"><button class="k-input-number-control" disabled>+</button></div>',
  "button",
);
for (const cls of ["day", "month-item", "year-item", "time-item"]) {
  add(
    "DatePicker " + cls,
    '<div class="k-datepicker-overlay"><div class="k-picker-container"><span class="k-picker-' +
      cls +
      " " +
      (cls === "time-item" ? "k-picker-time-disabled" : "k-picker-day-disabled") +
      '">Disabled</span></div></div>',
    ".k-picker-" + cls,
  );
}
add(
  "Upload drag",
  '<div class="k-upload k-upload-drag k-upload-disabled"><div class="k-upload-select"><div class="k-upload-add">Upload</div></div></div>',
  ".k-upload-add",
);
add(
  "Upload picture",
  '<div class="k-upload k-upload-picture k-upload-disabled"><div class="k-upload-select"><div class="k-upload-add">Upload</div></div></div>',
  ".k-upload-select",
);
add(
  "Menu selected",
  '<ul class="k-menu k-menu-inline"><li class="k-menu-item k-menu-item-selected k-menu-item-disabled">Disabled</li></ul>',
  "li",
);
add(
  "Menu disabled",
  '<ul class="k-menu k-menu-inline"><li class="k-menu-item k-menu-item-disabled">Disabled</li></ul>',
  "li",
);
add(
  "Dropdown",
  '<ul class="k-dropdown-menu"><li class="k-dropdown-menu-item k-dropdown-menu-item-disabled">Disabled</li></ul>',
  "li",
);
add("CheckCard", '<div class="k-check-card is-disabled">Disabled</div>', ".k-check-card");
add(
  "Segmented",
  '<div class="k-segmented"><button disabled class="k-segmented-item">Disabled</button></div>',
  "button",
);
add(
  "Checkbox",
  '<label class="k-checkbox k-checkbox-disabled"><span class="k-checkbox-symbol">X</span></label>',
  ".k-checkbox-symbol",
);
add(
  "Radio",
  '<label class="k-radio k-radio-disabled"><span class="k-radio-symbol">X</span></label>',
  ".k-radio-symbol",
);
add(
  "Page",
  '<div class="k-page k-page-disabled"><span class="k-pager-item">2</span></div>',
  ".k-pager-item",
);
add(
  "Rate readonly disabled",
  '<div class="k-rate k-rate-readonly k-rate-disabled"><span class="k-star">X</span></div>',
  ".k-star",
);
add(
  "Tree title",
  '<div class="k-tree"><div class="k-tree-item k-tree-item-disabled"><span class="k-tree-title">Disabled</span></div></div>',
  ".k-tree-title",
);
add(
  "Tree directory",
  '<div class="k-tree k-tree-directory"><div class="k-tree-item k-tree-item-disabled"><span class="k-tree-title">Disabled</span></div></div>',
  ".k-tree-item",
);
add(
  "Slider",
  '<div class="k-slider k-slider-disabled"><div class="k-slider-thumb">X</div></div>',
  ".k-slider-thumb",
);
add(
  "Steps",
  '<div class="k-steps"><div class="k-step k-step-disabled"><div class="k-step-main">Disabled</div></div></div>',
  ".k-step-main",
);
add(
  "FeatureCard",
  '<div class="k-feature-card k-feature-card-disabled">Disabled</div>',
  ".k-feature-card",
);
add(
  "Collapse",
  '<div class="k-collapse"><div class="k-collapse-item k-collapse-item-disabled"><div class="k-collapse-header">Disabled</div></div></div>',
  ".k-collapse-header",
);
add(
  "Transfer",
  '<div class="k-transfer is-disabled"><div class="k-transfer-item">Disabled</div></div>',
  ".k-transfer-item",
);
add(
  "InputOTP",
  '<div class="k-input-otp k-input-otp-disabled"><input class="k-input-otp-item" disabled value="1"></div>',
  "input",
);
add("Switch", '<button class="k-switch k-switch-disabled" disabled>Switch</button>', "button");
const components = [
  "tree",
  "slider",
  "steps",
  "feature-card",
  "collapse",
  "transfer",
  "input-otp",
  "switch",
  "button",
  "input",
  "input-number",
  "select",
  "tree-select",
  "cascader",
  "date-picker",
  "input-tag",
  "upload",
  "menu",
  "dropdown",
  "check-card",
  "segmented",
  "checkbox",
  "radio",
  "page",
  "rate",
];
const browser = await chromium.launch();
const failures = [];
let count = 0;
try {
  const page = await browser.newPage();
  for (const repository of repositories) {
    const repo = basename(resolve(repository));
    let css = "";
    for (const c of components) {
      const filename = resolve(repository, "components", c, "styles/index.less");
      css += (await less.render(readFileSync(filename, "utf8"), { filename })).css;
    }
    for (const theme of ["light", "dark"]) {
      for (const test of cases) {
        await page.setContent(
          '<html theme-mode="' +
            theme +
            '"><style>' +
            css +
            ' *{transition:none!important;animation:none!important} #fixture{margin:100px;min-width:260px} #fixture>div,#fixture>ul{min-height:30px}</style><div id="fixture">' +
            test.html +
            "</div></html>",
        );
        const el = page.locator("#fixture " + test.selector).first();
        const snapshot = () =>
          el.evaluate((el) => {
            const s = getComputedStyle(el);
            return Object.fromEntries(
              [
                "backgroundColor",
                ...(s.borderTopWidth !== "0px" ? ["borderTopColor"] : []),
                "color",
                "boxShadow",
                "opacity",
                "transform",
                "cursor",
              ].map((k) => [k, s[k]]),
            );
          });
        await page.mouse.move(0, 0);
        const normal = await snapshot();
        await el.hover({ force: true });
        const hover = await snapshot();
        await page.mouse.down();
        const active = await snapshot();
        await page.mouse.up();
        for (const [state, value] of [
          ["hover", hover],
          ["active", active],
        ]) {
          const delta = Object.keys(normal).filter((k) => normal[k] !== value[k]);
          if (delta.length)
            failures.push({
              repo,
              theme,
              test: test.name,
              state,
              delta: delta.map((k) => [k, normal[k], value[k]]),
            });
        }
        if (normal.cursor !== "not-allowed")
          failures.push({ repo, theme, test: test.name, cursor: normal.cursor });
        count++;
      }
    }
  }
  console.log(
    JSON.stringify(
      {
        count,
        failures: [
          ...new Map(
            failures.map((f) => [JSON.stringify({ ...f, repo: undefined, theme: undefined }), f]),
          ).values(),
        ],
      },
      null,
      2,
    ),
  );
  if (failures.length) process.exitCode = 1;
} finally {
  await browser.close();
}
