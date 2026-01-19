import { Icon, Tooltip, message } from "kui-vue";
import { getTransitionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor, Reload } from "kui-icons";
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
import { parseCode } from "./transform";
import { useClipboard } from "@vueuse/core";
const { copy, isSupported } = useClipboard();
// import {
//   parse,
//   compileTemplate,
//   compileScript,
//   compileStyle,
// } from "@vue/compiler-sfc";
const Demo = defineComponent({
  name: "Demo",
  props: {
    id: String,
    direction: {
      type: String,
      default: "horizontal",
    },
  },
  setup(props, { slots }) {
    const expanded = ref(props.direction == "vertical" ? false : true);
    const { proxy } = getCurrentInstance();
    const codeRef = ref(null);
    const codeOrigin = ref(null);
    const viewRef = ref(null);
    const timer = ref(null);

    const reload = () => {
      parseCode(codeRef.value?.innerText, viewRef, props.id);
    };

    const renderCode = async () => {
      return;
      clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        parseCode(codeRef.value?.innerText, viewRef, props.id);
      }, 500);
    };
    const copyCode = () => {
      console.log(32423);
      copy(codeRef.value?.innerText)
        .then(() => {
          message.success("Copied!");
        })
        .catch(() => {
          message.error("复制代码失败，请手动复制");
        });
    };
    onMounted(() => {
      codeOrigin.value = codeRef.value?.innerText;
    });
    return () => {
      const transitionProps = getTransitionProp();
      const vertical = props.direction !== "horizontal";
      const classes = ["k-demo", { "k-demo-horizontal": !vertical }];
      const descNode = (
        <div class="k-desc">
          <div class="k-desc-content">{slots.description?.()}</div>
        </div>
      );
      const codeNode = (
        <transition {...transitionProps}>
          <div
            v-show={expanded.value}
            class="k-code-box"
            contenteditable
            onInput={renderCode}
          >
            {!vertical ? (
              <div class="k-code-tools">
                {/* <Badge status="success" text="实时编译成功" /> */}
                <Tooltip title="复制代码">
                  <Button
                    type="text"
                    size="small"
                    icon={CopyOutline}
                    onClick={copyCode}
                  />
                </Tooltip>
                {/* <Tooltip title="重置代码">
                <Button
                  type="text"
                  size="small"
                  icon={Reload}
                  onClick={reload}
                />
              </Tooltip> */}
              </div>
            ) : null}
            <div ref={codeRef} class="k-code k-scroll">
              {slots.code?.()}
            </div>
          </div>
        </transition>
      );
      return (
        <div
          class={[
            "markdown-body",
            "k-demo-container",
            { "k-demo-expanded": expanded.value },
          ]}
        >
          {descNode}
          {/* {!vertical && descNode} */}
          <div class={classes}>
            <div class={`k-demo-view k-demo-view-${props.direction}`}>
              <div class="k-content k-scroll" ref={viewRef}>
                {slots.component?.()}
              </div>
              {/* {vertical && descNode} */}
            </div>
            {vertical && codeNode}

            {vertical && (
              <div class="k-code-actions">
                <Tooltip title={expanded.value ? "隐藏代码" : "显示代码"}>
                  <Button
                    block
                    size="large"
                    type="text"
                    icon={CaretHor}
                    onClick={() => (expanded.value = !expanded.value)}
                  />
                </Tooltip>
                <Divider type="vertical" />
                <Tooltip title="复制代码">
                  <Button
                    type="text"
                    size="large"
                    icon={CopyOutline}
                    block
                    onClick={copyCode}
                  />
                </Tooltip>
              </div>
            )}
            {!vertical && codeNode}
          </div>
        </div>
      );
    };
  },
});

export default Demo;
