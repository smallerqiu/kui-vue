import { Icon, Tooltip, message } from "kui-vue";
import { getTransitionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor, Reload } from "kui-icons";
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
import { parseCode } from "./transform";
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
    const expand = ref(true);
    const { proxy } = getCurrentInstance();
    const codeRef = ref(null);
    const codeOrigin = ref(null);
    const viewRef = ref(null);
    const timer = ref(null);

    const reload = () => {
      parseCode(codeRef.value?.innerText, viewRef, props.id);
    };

    const renderCode = async () => {
      clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        parseCode(codeRef.value?.innerText, viewRef, props.id);
      }, 500);
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
      return (
        <div class="markdown-body k-demo-container">
          {!vertical && descNode}
          <div class={classes}>
            <div class="k-demo-view">
              <div class="k-content" ref={viewRef}>
                {slots.component?.()}
              </div>
              {/* {vertical && descNode} */}
            </div>
            {vertical && (
              <div class="k-code-actions">
                <Tooltip title={expand ? "隐藏代码" : "显示代码"}>
                  <Icon
                    type={CaretHor}
                    onClick={() => (expand.value = !expand.value)}
                    style={{
                      "border-bottom-left-radius": !expand ? "12px" : 0,
                    }}
                  />
                </Tooltip>
                <Tooltip title="复制代码">
                  <Icon
                    type={CopyOutline}
                    onClick={copy}
                    style={{
                      "border-bottom-right-radius": !expand ? "12px" : 0,
                    }}
                  />
                </Tooltip>
              </div>
            )}
            <transition {...transitionProps}>
              <div
                v-show={expand.value}
                class="k-code-box"
                contenteditable
                onInput={renderCode}
              >
                <div class="k-code-tools">
                  <Badge status="success" text="实时编译成功" />
                  <Tooltip title="复制代码">
                    <Button
                      type="text"
                      size="small"
                      icon={CopyOutline}
                      onClick={copy}
                    />
                  </Tooltip>
                  <Tooltip title="重置代码">
                    <Button
                      type="text"
                      size="small"
                      icon={Reload}
                      onClick={reload}
                    />
                  </Tooltip>
                </div>
                <div ref={codeRef} class="k-code">
                  {slots.code?.()}
                </div>
              </div>
            </transition>
          </div>
        </div>
      );
    };
  },
});

export default Demo;
