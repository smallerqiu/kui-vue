export const parseCode = (source, viewRef, id) => {
  // const vm = new Vue(componentOptions).$mount(viewRef.value);
  // fetch("http://127.0.0.1:4000/parse", {
  fetch("https://k-ui.cn/parse", {
    method: "POST",
    body: JSON.stringify({ source }),
  }).then((r) => {
    if (!r.ok) {
      return;
    }
    r.json().then((res) => {
      let { css, js, template } = res.errors;
      if (css || js || template) {
        return;
      }
      let importCode = res.script.split("export")[0];
      const match = res.script.match(/export\s+default\s+\{([\s\S]*)\}/);
      let setupCode = match?.[1] || "";
      let code = `
import Vue from "vue";
import kui from "kui-vue";
Vue.use(kui);
${importCode}
${res.template}
const options = {
  render,
  staticRenderFns,
  ${setupCode.replace("__sfc", "wocao")}
};

// 创建挂载点
new Vue(options).$mount('#${id}');`;
      // 创建 Blob URL
      const url = URL.createObjectURL(
        new Blob([code], { type: "application/javascript" })
      );

      // 创建挂载容器
      const mountContainer = document.createElement("div");
      mountContainer.id = id;

      const scriptNode = document.createElement("script");
      scriptNode.src = url;
      scriptNode.type = "module";

      mountContainer.appendChild(scriptNode);
      const height = viewRef.value.clientHeight;
      viewRef.value.style.height = height + "px";
      viewRef.value.replaceChild(mountContainer, viewRef.value.children[0]);
      setTimeout(() => {
        viewRef.value.style.height = "";
      }, 500);
    });
  });
};
