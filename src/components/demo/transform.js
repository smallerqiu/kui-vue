import { createApp } from "vue";
import * as compiler from "@vue/compiler-sfc";
const updateStyle = (styleElement, css) => {
  if (styleElement) {
    document.head.removeChild(styleElement);
  }
  styleElement = document.createElement("style");
  styleElement.innerHTML = css;
  document.head.appendChild(styleElement);
};
const compileSFC = async (content, styleElement) => {
  const id = "data-v-" + Math.random().toString(36).slice(2, 8);
  const filename = "anonymous.vue";

  const { descriptor, errors } = compiler.parse(content, { filename });
  if (errors.length) throw new Error(errors[0].message);

  let scriptContent = "const __sfc__ = {}";
  let bindings = undefined;

  if (descriptor.script || descriptor.scriptSetup) {
    try {
      const scriptResult = compiler.compileScript(descriptor, {
        id,
        inlineTemplate: true, // 尝试让 setup 自动包含 render 函数
        templateOptions: {
          compilerOptions: { hoistStatic: false },
        },
      });
      scriptContent = compiler.rewriteDefault(scriptResult.content, "__sfc__");
      bindings = scriptResult.bindings; // 获取 script setup 导出的变量
    } catch (e) {
      throw new Error("Script Compile Error: " + e.message);
    }
  }

  let templateContent = "";
  if (descriptor.template && !descriptor.scriptSetup) {
    try {
      const templateResult = compiler.compileTemplate({
        source: descriptor.template.content,
        id,
        filename,
        compilerOptions: {
          hoistStatic: false,
          bindingMetadata: bindings,
        },
      });
      templateContent = templateResult.code.replace(
        /\bexport function render\b/,
        "const _render"
      );
    } catch (e) {
      throw new Error("Template Compile Error: " + e.message);
    }
  }

  // 编译 Style
  let css = "";
  for (const style of descriptor.styles) {
    const styleResult = compiler.compileStyle({
      source: style.content,
      id,
      scoped: style.scoped,
      filename,
    });
    css += styleResult.code;
  }
  updateStyle(css, styleElement);

  let moduleCode = `
    import { openBlock, createElementBlock, createVNode, resolveComponent } from 'vue'
    
    ${scriptContent}
    
    ${templateContent}
    
    if (typeof _render !== 'undefined') {
      __sfc__.render = _render
    }
    
    __sfc__.__scopeId = '${id}'
    __sfc__.__file = '${filename}'
    
    export default __sfc__
  `;

  return moduleCode;
};

export const parseCode = async ({
  source,
  error,
  currentApp,
  mountNode,
  styleElement,
}) => {
  error.value = "";

  if (currentApp) {
    currentApp.unmount();
    currentApp = null;
  }

  if (mountNode.value) {
    mountNode.value.innerHTML = "";
  }

  try {
    const jsCode = await compileSFC(source, styleElement);
    const blob = new Blob([jsCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const module = await import(url);
    // 获取导出的组件
    const Component = module.default;

    if (!Component) {
      throw new Error("代码必须 export default 一个 Vue 组件对象");
    }

    currentApp = createApp(Component);

    // 错误边界处理（防止用户代码报错导致主应用崩塌）
    currentApp.config.errorHandler = (err) => {
      console.error("用户代码运行时错误:", err);
      error.value = "Runtime Error: " + err.message;
    };

    currentApp.mount(mountNode.value);

    // 释放内存
    URL.revokeObjectURL(url);
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};
