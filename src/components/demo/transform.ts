import { compileScript, compileStyleAsync, compileTemplate, parse } from "@vue/compiler-sfc";
import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/zh-cn";
import * as Icons from "kui-icons";
import * as Kui from "kui-vue";
import kuiLocaleDe from "kui-vue/locale/de";
import kuiLocaleEn from "kui-vue/locale/en";
import kuiLocaleZhCN from "kui-vue/locale/zh-CN";
import { transform } from "sucrase";
import type { App, Component, Ref } from "vue";
import * as Vue from "vue";

const runtimeModules: Record<string, unknown> = {
  vue: Vue,
  "kui-vue": Kui,
  "kui-icons": Icons,
  "kui-vue/locale/de": kuiLocaleDe,
  "kui-vue/locale/en": kuiLocaleEn,
  "kui-vue/locale/zh-CN": kuiLocaleZhCN,
  dayjs,
  "dayjs/locale/de": {},
  "dayjs/locale/zh-cn": {},
};

function runtimeRequire(id: string) {
  if (id in runtimeModules) return runtimeModules[id];
  throw new Error(`Demo 暂不支持运行时导入模块 "${id}"`);
}

export interface ParseParams {
  source: string;
  id: string;
  viewRef: Ref<HTMLElement | null>;
  error: Ref<string>;
  currentApp: Ref<App<Element> | null>;
  buildState: { state: string; text: string };
}

export async function parseCode({
  source,
  id,
  viewRef,
  error,
  currentApp,
  buildState,
}: ParseParams) {
  try {
    error.value = "";
    const { descriptor, errors: parseErrors } = parse(source, { filename: "Demo.vue" });
    if (parseErrors.length) throw parseErrors[0];
    const scopeId = `data-v-${id}`;
    const isTypeScript = [descriptor.script?.lang, descriptor.scriptSetup?.lang].includes("ts");

    let scriptCode = "";
    let bindingMetadata;
    if (descriptor.script || descriptor.scriptSetup) {
      // 浏览器版 compiler-sfc 需要显式启用 TypeScript parser，才能稳定处理
      // `import type` 和 `import { type Foo }` 两种语法。
      const compiledScript = compileScript(descriptor, {
        id: scopeId,
        babelParserPlugins: isTypeScript ? ["typescript"] : [],
        genDefaultAs: "__sfc__",
      });
      bindingMetadata = compiledScript.bindings;

      // 保留 import，最后与 template 一起转换，避免 Blob 中残留裸模块导入。
      scriptCode = compiledScript.content;
    } else {
      scriptCode = "const __sfc__ = {}";
    }

    // Template
    let templateCode = "";
    if (descriptor.template) {
      const compiledTemplate = compileTemplate({
        source: descriptor.template.content,
        id: scopeId,
        scoped: true,
        filename: "App.vue",
        compilerOptions: {
          bindingMetadata: descriptor.scriptSetup ? bindingMetadata : undefined,
          expressionPlugins: isTypeScript ? ["typescript"] : undefined,
        },
      });
      if (compiledTemplate.errors.length) throw compiledTemplate.errors[0];
      // 将模板中的 export function render 替换掉，防止冲突
      templateCode = compiledTemplate.code.replace(/export (function|const) render/, "$1 render");
    }

    let cssCode = "";
    for (const s of descriptor.styles) {
      let styleSource = s.content;
      if (s.lang === "less") {
        const { default: less } = await import("less");
        styleSource = (await less.render(styleSource, { filename: "App.vue" })).css;
      }
      const compiledStyle = await compileStyleAsync({
        source: styleSource,
        id: scopeId,
        scoped: s.scoped,
        filename: "App.vue",
      });
      if (compiledStyle.errors.length) throw compiledStyle.errors[0];
      cssCode += compiledStyle.code + "\n";
    }

    const moduleCode = `
      ${templateCode}
      ${scriptCode}
      __sfc__.render = require("vue").withScopeId("${scopeId}")(render);
      __sfc__.__scopeId = "${scopeId}";
      export default __sfc__;
    `;

    // 浏览器无法从 Blob 解析 `vue`、`kui-vue` 这类裸模块名。将运行时代码
    // 转成 CommonJS，并从当前文档应用已经打包的模块中解析，不依赖 import map。
    const { code: executableCode } = transform(moduleCode, {
      transforms: ["typescript", "imports"],
    });
    const demoModule: { exports: { default?: Component } } = { exports: {} };
    const execute = new Function("require", "module", "exports", executableCode);
    execute(runtimeRequire, demoModule, demoModule.exports);
    const component = demoModule.exports.default;
    if (!component) throw new Error("Demo component was not exported");

    if (currentApp.value) {
      currentApp.value.unmount();
      currentApp.value = null;
    }

    const app = Vue.createApp(component);
    const KuiPlugin = Kui.default || Kui;
    // if (KuiPlugin.install) {
    app.use(KuiPlugin);
    // }

    const mountNode = document.createElement("div");
    mountNode.setAttribute(scopeId, "");

    if (!viewRef.value) throw new Error("Demo mount element is unavailable");
    viewRef.value.innerHTML = "";
    viewRef.value.appendChild(mountNode);
    app.mount(mountNode);

    currentApp.value = app;

    updateStyle(id, cssCode);
    buildState.state = "success";
    buildState.text = "Build Success";
  } catch (err: unknown) {
    buildState.state = "error";
    buildState.text = "Build Error";
    error.value = err instanceof Error ? err.message : String(err);
    console.error("Render Error:", err);
  }
}

function updateStyle(id: string, css: string) {
  let el = document.getElementById(`style-${id}`);
  if (!el) {
    el = document.createElement("style");
    el.id = `style-${id}`;
    document.head.appendChild(el);
  }
  el.innerHTML = css;
}
