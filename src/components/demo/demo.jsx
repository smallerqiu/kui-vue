import { Tooltip, message } from "kui-vue";
import { getTransitionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor, Reload } from "kui-icons/dist/icons";
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  Transition,
  computed,
  inject,
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
    const $t = inject("$t");

    const expanded = ref(props.direction == "vertical" ? false : true);
    const codeRef = ref(null);
    const codeOrigin = ref(null);
    const viewRef = ref(null);
    const timer = ref(null);
    const buildState = reactive({
      text: $t("text.build_tip"),
      state: "success",
    });

    const error = ref("");

    const currentApp = ref(null);
    const reload = () => {
      const source = codeRef.value?.innerText || slots.code?.()?.[0]?.children || "";
      parseCode({
        source: source,
        viewRef,
        error,
        currentApp,
        id: props.id || "default",
        buildState,
      });
    };

    const renderCode = () => {
      buildState.text = $t("text.building");
      buildState.state = "default";
      clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        reload();
      }, 500);
    };
    const restoreCode = () => {
      codeRef.value.innerHTML = codeOrigin.value;
      reload();
    };
    const copyCode = () => {
      if (isSupported) {
        copy(codeRef.value?.innerText)
          .then(() => {
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
      codeOrigin.value = codeRef.value?.innerHTML;
    });
    onBeforeUnmount(() => {
      if (currentApp.value) {
        currentApp.value.unmount();
        currentApp.value = null;
      }
    });

    const locale = inject("locale");

    const lang = computed(() => {
      return locale.value?.name || "en";
    });

    return () => {
      const transitionProps = getTransitionProp();
      const vertical = props.direction !== "horizontal";
      const classes = ["k-demo", { "k-demo-horizontal": !vertical }];
      const descNode = (
        <div class="k-desc">
          <div class="k-desc-content">
            {lang.value == "en" ? slots.descriptionEn?.() : slots.description?.()}
          </div>
        </div>
      );
      const codeNode = (
        <Transition {...transitionProps}>
          <div v-show={expanded.value} class="k-code-box" contenteditable onInput={renderCode}>
            {!vertical ? (
              <div class="k-code-tools">
                <Badge status={buildState.state} text={buildState.text} />
                <Tooltip title={$t("text.copy_code")}>
                  <Button type="text" size="small" icon={CopyOutline} onClick={copyCode} />
                </Tooltip>
                <Tooltip title={$t("text.restore_code")}>
                  <Button type="text" size="small" icon={Reload} onClick={restoreCode} />
                </Tooltip>
              </div>
            ) : null}
            <div ref={codeRef} class="k-code k-scroll">
              {slots.code?.()}
            </div>
          </div>
        </Transition>
      );
      const scopeIdAttr = `data-v-${props.id}`;
      let refProps = {
        class: `k-content k-scroll k-demo-view-${props.id}`,
        ref: viewRef,
        [scopeIdAttr]: "",
      };
      return (
        <div class={["markdown-body", "k-demo-container", { "k-demo-expanded": expanded.value }]}>
          {descNode}
          <div class={classes}>
            <div class={`k-demo-view k-demo-view-${props.direction}`}>
              <div {...refProps}>{slots.component?.()}</div>
            </div>
            {vertical && codeNode}

            {vertical && (
              <div class="k-code-actions">
                <Tooltip title={expanded.value ? $t("text.collapse_code") : $t("text.expand_code")}>
                  <Button
                    block
                    size="large"
                    type="text"
                    icon={CaretHor}
                    onClick={() => (expanded.value = !expanded.value)}
                  />
                </Tooltip>
                <Divider type="vertical" />
                <Tooltip title={$t("text.copy_code")}>
                  <Button type="text" size="large" icon={CopyOutline} block onClick={copyCode} />
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
