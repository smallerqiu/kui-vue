import { Icon, Tooltip, message } from "kui-vue";
import { getTransitionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor, Reload } from "kui-icons";
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  Transition,
} from "vue";
import { parseCode } from "./transform";
import { useClipboard } from "@vueuse/core";
const { copy, isSupported } = useClipboard();

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
    const codeRef = ref(null);
    const codeOrigin = ref(null);
    const viewRef = ref(null);
    const timer = ref(null);
    const styleElement = null;

    const error = ref("");

    const currentApp = ref(null);
    const reload = () => {
      const source = codeRef.value?.innerText || slots.code?.()?.[0]?.children || "";
      parseCode({
        source: source,
        viewRef,
        error,
        currentApp, 
        id: props.id || 'default',
      });
    };

    const renderCode = async () => {
      clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        reload();
      }, 500);
    };
    const copyCode = () => {
      if (isSupported) {
        copy(codeRef.value?.innerText)
          .then((res) => {
            message.success("Copied!");
          })
          .catch(() => {
            message.error("复制代码失败，请手动复制");
          });
      } else {
        message.error("请手动复制");
      }
    };
    onMounted(() => {
      codeOrigin.value = codeRef.value?.innerText;
    });
    onBeforeUnmount(() => {
      if (styleElement) document.head.removeChild(styleElement);
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
        <Transition {...transitionProps}>
          <div
            v-show={expanded.value}
            class="k-code-box"
            contenteditable
            onInput={renderCode}
          >
            {!vertical ? (
              <div class="k-code-tools">
                <Badge status="success" text="实时编译成功" />
                <Tooltip title="复制代码">
                  <Button
                    type="text"
                    size="small"
                    icon={CopyOutline}
                    onClick={copyCode}
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
            ) : null}
            <div ref={codeRef} class="k-code k-scroll">
              {slots.code?.()}
            </div>
          </div>
        </Transition>
      );
      let refProps = {
        class:`k-content k-scroll k-demo-view-${props.id}`,
        ref:viewRef,
        [`data-v-${props.id}`]:''
      }
      return (
        <div
          class={[
            "markdown-body",
            "k-demo-container",
            { "k-demo-expanded": expanded.value },
          ]}
        >
          {descNode}
          <div class={classes}>
            <div class={`k-demo-view k-demo-view-${props.direction}`}>
              <div {...refProps}>
                {slots.component?.()}
              </div>
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
