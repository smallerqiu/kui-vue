import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// Resolve published entry points at runtime, after build. Source typechecking
// must also work in a clean checkout where es/, lib/ and types/ do not exist.
const importBuiltModule = (specifier: string): Promise<Record<string, unknown>> =>
  import(specifier);
const esm = await importBuiltModule("kui-vue");
const cjs = require("kui-vue");
const esmLocale = await importBuiltModule("kui-vue/locale/en");
const cjsLocale = require("kui-vue/locale/en");

assert.equal(typeof esm.install, "function");
assert.equal(typeof cjs.install, "function");
assert.ok(esmLocale.default);
assert.ok(cjsLocale.default);
