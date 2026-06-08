import { Copy, ListChevronsDownUp, ListChevronsUpDown, Undo2 } from "kui-icons";
import { Badge, Button, message, Tooltip, type BadgeStatusType } from "kui-vue";
import {
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  Transition,
} from "vue";
import { getTransitionProp } from "../../../components/base/transition";
import { copyToClipboard } from "../../../components/utils/share";
import { parseCode } from "./transform";

const Demo = defineComponent({
  name: "Demo",
  props: {
    id: String,
    direction: {
      type: String,
      default: "horizontal",
    },
    title: String,
    description: String,
  },
  setup(props, { slots }) {
    const $t = inject<(key: string) => string>("$t", (key: string) => key);

    const expanded = ref(props.direction != "vertical");
    const codeRef = ref<HTMLElement>();
    const codeOrigin = ref<string>();
    const viewRef = ref(null);
    const timer = ref<NodeJS.Timeout>();
    const buildState = reactive({
      text: $t("text.build_tip"),
      state: "success" as BadgeStatusType,
    });

    const error = ref("");

    const currentApp = ref();
    const reload = () => {
      const source = codeRef.value?.innerText || (slots.code?.()?.[0]?.children as string) || "";
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
      if (codeRef.value && codeOrigin.value) codeRef.value.innerHTML = codeOrigin.value;
      reload();
    };
    const copyCode = () => {
      if (codeRef.value) {
        copyToClipboard(codeRef.value?.innerText).then((result) => {
          if (result) {
            message.success("Copied!");
          } else {
            message.error("Copy failed");
          }
        });
      }
    };
    onMounted(() => {
      codeOrigin.value = codeRef.value?.innerHTML;
    });
    onBeforeUnmount(() => {
      if (currentApp.value) {
        currentApp.value?.unmount();
      }
    });

    return () => {
      const transitionProps = getTransitionProp("");
      const horizontal = props.direction === "horizontal";
      const classes = ["k-demo", { "k-demo-horizontal": horizontal }];
      const descNode = (
        <div class="k-desc">
          <div class="k-desc-content">
            <h3>{slots.title?.()}</h3>
            {slots.description?.()}
          </div>
        </div>
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
            <Transition {...transitionProps}>
              <div v-show={expanded.value} class="k-code-box" contenteditable onInput={renderCode}>
                <div class="k-code-tools">
                  <Badge status={buildState.state} text={buildState.text} />
                  <Tooltip title={$t("text.copy_code")}>
                    <Button type="text" size="small" icon={Copy} onClick={copyCode} />
                  </Tooltip>
                  <Tooltip title={$t("text.restore_code")}>
                    <Button type="text" size="small" icon={Undo2} onClick={restoreCode} />
                  </Tooltip>
                </div>
                <div ref={codeRef} class="k-code k-scroll">
                  {slots.code?.()}
                </div>
              </div>
            </Transition>
            {!horizontal && (
              <div class="k-code-actions">
                <Tooltip title={expanded.value ? $t("text.collapse_code") : $t("text.expand_code")}>
                  <Button
                    block
                    size="large"
                    type="text"
                    icon={expanded.value ? ListChevronsDownUp : ListChevronsUpDown}
                    onClick={() => (expanded.value = !expanded.value)}
                  />
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      );
    };
  },
});

export default Demo;
