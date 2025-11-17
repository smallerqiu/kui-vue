import { Icon, Tooltip, message } from "kui-vue";
import { getTransitionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor } from "kui-icons";
import { defineComponent, ref, getCurrentInstance } from "vue";
import Vue from "vue";
const Demo = defineComponent({
  name: "Demo",
  setup(props, { slots }) {
    const expand = ref(false);
    const { proxy } = getCurrentInstance();
    const codeRef = ref(null);
    const viewRef = ref(null);

    const renderNode = ref();

    const renderCode = () => {
      const templateStr = codeRef.value?.innerText;
      console.log(templateStr);
      const vm = new Vue({
        data() {
          return { name: "Qiu" };
        },
        template: templateStr, // ⚠️ 需要开启 `runtimeCompiler`
      }).$mount(viewRef.value);
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
            <div class="k-content" ref="viewRef">
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
