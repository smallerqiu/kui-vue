import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const esm = await import("kui-vue");
const cjs = require("kui-vue");
const esmLocale = await import("kui-vue/locale/en");
const cjsLocale = require("kui-vue/locale/en");

assert.equal(typeof esm.install, "function");
assert.equal(typeof cjs.install, "function");
assert.ok(esmLocale.default);
assert.ok(cjsLocale.default);
