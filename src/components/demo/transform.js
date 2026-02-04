import * as Vue from "vue";
import * as Kui from "kui-vue";
import {
  parse,
  compileScript,
  compileTemplate,
  compileStyle,
  rewriteDefault,
} from "@vue/compiler-sfc";
export async function parseCode({ source, id, viewRef, error, currentApp, buildState }) {
  try {
    error.value = "";
    const { descriptor } = parse(source);
    const scopeId = `data-v-${id}`;

    let scriptCode = "";
    if (descriptor.script || descriptor.scriptSetup) {
      // 编译 script，并在内部处理好 bindings
      const compiledScript = compileScript(descriptor, { id: scopeId });
      // 将 export default 转换为 const __sfc__ =
      scriptCode = rewriteDefault(compiledScript.content, "__sfc__");
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
          bindingMetadata: descriptor.scriptSetup
            ? compileScript(descriptor, { id: scopeId }).bindings
            : undefined,
        },
      });
      // 将模板中的 export function render 替换掉，防止冲突
      templateCode = compiledTemplate.code.replace(/export\ (function|const)\ render/, "$1 render");
    }

    let cssCode = "";
    for (const s of descriptor.styles) {
      const compiledStyle = compileStyle({
        source: s.content,
        id: scopeId,
        scoped: s.scoped,
      });
      cssCode += compiledStyle.code + "\n";
    }

    const finalCode = `
      ${templateCode}
      ${scriptCode}
      __sfc__.render = render;
      __sfc__.__scopeId = "${scopeId}";
      export default __sfc__;
    `;

    const blob = new Blob([finalCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);

    const { default: component } = await import(/* @vite-ignore */ url);
    URL.revokeObjectURL(url);

    if (currentApp.value) {
      currentApp.value.unmount();
      currentApp.value = null;
    }

    const app = Vue.createApp(component);
    const KuiPlugin = Kui.default || Kui;
    if (KuiPlugin.install) {
      app.use(KuiPlugin);
    }

    const mountNode = document.createElement("div");
    mountNode.setAttribute(scopeId, "");

    viewRef.value.innerHTML = "";
    viewRef.value.appendChild(mountNode);
    app.mount(mountNode);

    currentApp.value = app;

    updateStyle(id, cssCode);
    buildState.state = "success";
    buildState.text = "实时编译成功";
  } catch (err) {
    buildState.state = "error";
    buildState.text = "Build Error";
    error.value = err.message;
    console.error("Render Error:", err);
  }
}

function updateStyle(id, css) {
  let el = document.getElementById(`style-${id}`);
  if (!el) {
    el = document.createElement("style");
    el.id = `style-${id}`;
    document.head.appendChild(el);
  }
  el.innerHTML = css;
}
