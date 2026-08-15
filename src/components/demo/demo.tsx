import { Copy, ListChevronsDownUp, ListChevronsUpDown, Undo2 } from "kui-icons";
import { Badge, Button, message, RadioGroup, Tooltip, type BadgeStatusType } from "kui-vue";
import {
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  Transition,
} from "vue";
import { getTransitionProp } from "../../../components/base/transition";
import { copyToClipboard } from "../../../components/utils/share";

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
    const codeRefs = {
      ts: ref<HTMLElement>(),
      js: ref<HTMLElement>(),
    };
    const codeLanguage = ref<"ts" | "js">("ts");
    const codeOrigins: Partial<Record<"ts" | "js", string>> = {};
    const currentCodeNode = () => codeRefs[codeLanguage.value].value;
    const viewRef = ref(null);
    const timer = ref<ReturnType<typeof setTimeout>>();
    const buildState = reactive({
      text: $t("text.build_tip"),
      state: "success" as BadgeStatusType,
    });
    const codeLangOptions = [
      { value: "ts", label: "TS" },
      { value: "js", label: "JS" },
    ];

    const error = ref("");

    const currentApp = ref();
    const reload = async () => {
      const activeCodeSlot = codeLanguage.value === "ts" ? slots["code-ts"] : slots["code-js"];
      const source =
        currentCodeNode()?.innerText || (activeCodeSlot?.()?.[0]?.children as string) || "";
      const { parseCode } = await import("./transform");
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
    const handleCodeKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== "Tab") return;
      event.preventDefault();
      const selection = window.getSelection();
      if (!selection?.rangeCount) return;
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const textNode = document.createTextNode(event.key === "Tab" ? "  " : "\n");
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
      renderCode();
    };
    const restoreCode = () => {
      const origin = codeOrigins[codeLanguage.value];
      const codeNode = currentCodeNode();
      if (codeNode && origin !== undefined) {
        codeNode.innerHTML = origin;
      }
      reload();
    };
    const copyCode = () => {
      const codeNode = currentCodeNode();
      if (codeNode) {
        copyToClipboard(codeNode.innerText).then((result) => {
          if (result) {
            message.success("Copied!");
          } else {
            message.error("Copy failed");
          }
        });
      }
    };
    const switchCodeLanguage = async (language: "ts" | "js") => {
      if (codeLanguage.value === language) return;
      codeLanguage.value = language;
      await nextTick();
      reload();
    };
    onMounted(() => {
      codeOrigins.ts = codeRefs.ts.value?.innerHTML || "";
      codeOrigins.js = codeRefs.js.value?.innerHTML || "";
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
      const refProps = {
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
              <div v-show={expanded.value} class="k-code-box">
                <div class="k-code-tools">
                  <Badge status={buildState.state} text={buildState.text} />
                  <RadioGroup
                    options={codeLangOptions}
                    onChange={(value) => {
                      if (value === "ts" || value === "js") switchCodeLanguage(value);
                    }}
                    type="button"
                    size="small"
                    v-model={codeLanguage.value}
                  />
                  <Tooltip title={$t("text.copy_code")}>
                    <Button type="text" size="small" icon={Copy} onClick={copyCode} />
                  </Tooltip>
                  <Tooltip title={$t("text.restore_code")}>
                    <Button type="text" size="small" icon={Undo2} onClick={restoreCode} />
                  </Tooltip>
                </div>
                <div
                  v-show={codeLanguage.value === "ts"}
                  ref={codeRefs.ts}
                  class="k-code k-scroll"
                  contenteditable
                  onInput={renderCode}
                  onKeydown={handleCodeKeydown}
                >
                  {slots["code-ts"]?.()}
                </div>
                <div
                  v-show={codeLanguage.value === "js"}
                  ref={codeRefs.js}
                  class="k-code k-scroll"
                  contenteditable
                  onInput={renderCode}
                  onKeydown={handleCodeKeydown}
                >
                  {slots["code-js"]?.()}
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
