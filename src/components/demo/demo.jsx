import { Icon, Tooltip, message } from "kui-vue";
import { getTransitionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor } from "kui-icons";
import { defineComponent, ref, getCurrentInstance } from "vue";
import Vue from "vue";
// import {
//   parse,
//   compileTemplate,
//   compileScript,
//   compileStyle,
// } from "@vue/compiler-sfc";
const Demo = defineComponent({
  name: "Demo",
  setup(props, { slots }) {
    const expand = ref(true);
    const { proxy } = getCurrentInstance();
    const codeRef = ref(null);
    const viewRef = ref(null);

    const renderCode = () => {
      // const vm = new Vue(componentOptions).$mount(viewRef.value);
      fetch("http://127.0.0.1:4000/parse", {
        method: "POST",
        body: JSON.stringify({ source: codeRef.value?.innerText }),
      }).then((r) => {
        if (!r.ok) {
          return;
        }
        r.json().then((res) => {
          let { css, js, template } = res.errors;
          if (css || js || template) {
            return;
          }
          const id = "abcdefg";
          let code = `
import Vue from "vue";
import kui from "kui-vue";
Vue.use(kui);

${res.script}
${res.template}
const options = {
  render,
  staticRenderFns
};

// 创建挂载点
new Vue(options).$mount('#${id}');`;
          console.log(code);
          // 创建 Blob URL
          const url = URL.createObjectURL(
            new Blob([code], { type: "application/javascript" })
          );

          // 创建挂载容器
          const mountContainer = document.createElement("div");
          mountContainer.id = id;

          // // 插入到视图容器中
          viewRef.value.appendChild(mountContainer);

          // // 创建并插入 script 标签
          const scriptNode = document.createElement("script");
          scriptNode.src = url;
          scriptNode.id = "dynamic-component-script";
          scriptNode.type = "module";

          // // 确保 script 在 mountContainer 之后执行
          viewRef.value.appendChild(scriptNode);
        });
      });
    };
    const copy = () => {
      proxy.$copyText(codeRef.value?.innerText).then(
        () => {
          message.success("Copied!");
        },
        () => {
          message.error("复制代码失败，请手动复制");
        }
      );
    };
    return () => {
      const transitionProps = getTransitionProp();
      return (
        <div class="k-demo markdown-body">
          <div class="k-demo-main">
            <div class="k-content" ref={viewRef}>
              {slots.component?.()}
            </div>
            <div class="k-desc">
              <div class="k-desc-content">{slots.description?.()}</div>
            </div>
            <div class="k-code-actions">
              <Tooltip title={expand ? "隐藏代码" : "显示代码"}>
                <Icon
                  type={CaretHor}
                  onClick={() => (expand.value = !expand.value)}
                  style={{ "border-bottom-left-radius": !expand ? "12px" : 0 }}
                />
              </Tooltip>
              <Tooltip title="复制代码">
                <Icon
                  type={CopyOutline}
                  onClick={copy}
                  style={{ "border-bottom-right-radius": !expand ? "12px" : 0 }}
                />
              </Tooltip>
            </div>
          </div>
          <transition {...transitionProps}>
            <div
              v-show={expand.value}
              class="k-code"
              ref={codeRef}
              contenteditable
              onInput={renderCode}
            >
              {slots.code?.()}
            </div>
          </transition>
        </div>
      );
    };
  },
});

export default Demo;
