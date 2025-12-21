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
  // 生成唯一的 ID (用于 Scope CSS)
  const id = "data-v-" + Math.random().toString(36).slice(2, 8);
  const filename = "anonymous.vue";

  // 1. 解析 SFC
  const { descriptor, errors } = compiler.parse(content, { filename });
  if (errors.length) throw new Error(errors[0].message);

  // 2. 编译 Script
  // 重点：我们需要获取 bindings（变量绑定），以便传给模板编译器
  let scriptContent = "const __sfc__ = {}";
  let bindings = undefined;

  if (descriptor.script || descriptor.scriptSetup) {
    try {
      const scriptResult = compiler.compileScript(descriptor, {
        id,
        inlineTemplate: true, // 尝试让 setup 自动包含 render 函数
        // 禁用静态提升，防止 resolveComponent 被提到 render 外面导致报错
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

  // 3. 编译 Template
  // 只有当 scriptSetup 中没有内联模板时，才需要单独编译模板
  let templateContent = "";
  if (descriptor.template && !descriptor.scriptSetup) {
    try {
      const templateResult = compiler.compileTemplate({
        source: descriptor.template.content,
        id,
        filename,
        compilerOptions: {
          // 关键修复点 1：禁用静态提升
          hoistStatic: false,
          // 关键修复点 2：传入 script 中的变量绑定
          // 这样模板就能识别出 MyComponent 是一个变量，而不是字符串组件名
          bindingMetadata: bindings,
        },
      });
      // 把 export function render 替换为 const _render，以便后续赋值
      templateContent = templateResult.code.replace(
        /\bexport function render\b/,
        "const _render"
      );
    } catch (e) {
      throw new Error("Template Compile Error: " + e.message);
    }
  }

  // 4. 编译 Style
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

  // 5. 组装最终代码
  // 注意：这里需要处理 import 语句，因为 compileTemplate 可能会生成 import { resolveComponent } from 'vue'
  // 浏览器原生 ES Module 支持重复 import，所以直接拼接通常没问题
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

  // 1. 清理旧实例
  if (currentApp) {
    currentApp.unmount();
    currentApp = null;
  }

  // 清空挂载点的内容（可选，unmount 通常会处理，但双重保险）
  if (mountNode.value) {
    mountNode.value.innerHTML = "";
  }

  try {
    //  创建 Blob URL
    // 将用户代码包装成 Blob，类型为 JS
    const jsCode = await compileSFC(source, styleElement);
    const blob = new Blob([jsCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);

    // 动态 Import
    // 浏览器会把 url 当作一个网络请求去加载模块
    // 注意：这里需要加上时间戳或者随机数，甚至 revokObjectURL，
    // 但 import() 有缓存机制，只要 URL 变了就是新的。
    // createObjectURL 每次生成的串都是唯一的，所以自带“破缓存”属性。
    const module = await import(url);

    // 获取导出的组件
    const Component = module.default;

    if (!Component) {
      throw new Error("代码必须 export default 一个 Vue 组件对象");
    }

    // 创建并挂载新应用
    // 注意：这里的 Component 是用户定义的，我们把它挂载到 mountNode 上
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
