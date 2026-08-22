import { CodeJar, type CodeJar as CodeJarInstance } from "codejar";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { Code, Copy, ListChevronsDownUp, ListChevronsUpDown, Undo2 } from "kui-icons";
import { Badge, Button, message, RadioGroup, Tooltip, type BadgeStatusType } from "kui-vue";
import {
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  reactive,
  ref,
  Transition,
} from "vue";
import { getTransitionProp } from "../../../components/base/transition";
import { copyToClipboard } from "../../../components/utils/share";
import { CodeSandbox, Stackblitz } from "./icons";
import { openCodespaces, openCodeSandbox, openStackBlitz } from "./utils";
// XML grammar delegates <script> blocks to "javascript". TypeScript is a
// superset here, so registering its grammar also covers both TS and JS demos.
hljs.registerLanguage("javascript", typescript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

const readHighlightedSource = (editor: HTMLElement) => {
  const root = editor.querySelector("code") || editor;
  let source = "";
  const visit = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      source += node.nodeValue || "";
      return;
    }
    if (node instanceof HTMLBRElement) {
      source += "\n";
      return;
    }
    node.childNodes.forEach(visit);
  };
  visit(root);
  return source;
};

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
    filename: { type: String, default: "App.vue" },
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
    const codeJars: Partial<Record<"ts" | "js", CodeJarInstance>> = {};
    const pendingEditorState: Partial<Record<"ts" | "js", { code: string; dirty: boolean }>> = {};
    const currentCodeJar = () => codeJars[codeLanguage.value];
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
        currentCodeJar()?.toString() || (activeCodeSlot?.()?.[0]?.children as string) || "";
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
    const restoreCode = () => {
      const origin = codeOrigins[codeLanguage.value];
      if (origin !== undefined) currentCodeJar()?.updateCode(origin);
      reload();
    };
    const copyCode = () => {
      const code = currentCodeJar()?.toString();
      if (code !== undefined) {
        copyToClipboard(code).then((result) => {
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
      (["ts", "js"] as const).forEach((language) => {
        const editor = codeRefs[language].value;
        if (!editor) return;
        const source = readHighlightedSource(editor);
        codeOrigins[language] = source;
        const jar = CodeJar(
          editor,
          (element) => {
            element.innerHTML = hljs.highlight(element.textContent || "", {
              language: "xml",
            }).value;
          },
          { tab: "  ", spellcheck: false }
        );
        jar.updateCode(source, false);
        jar.onUpdate(renderCode);
        codeJars[language] = jar;
      });
    });
    onBeforeUpdate(() => {
      (["ts", "js"] as const).forEach((language) => {
        const code = codeJars[language]?.toString();
        if (code === undefined) return;
        pendingEditorState[language] = {
          code,
          dirty: code !== codeOrigins[language],
        };
      });
    });
    onUpdated(() => {
      (["ts", "js"] as const).forEach((language) => {
        const editor = codeRefs[language].value;
        const jar = codeJars[language];
        if (!editor || !jar) return;

        const previous = pendingEditorState[language];
        const source = readHighlightedSource(editor);
        if (previous?.dirty) {
          if (source !== previous.code) codeOrigins[language] = source;
          jar.updateCode(previous.code, false);
          return;
        }

        if (source !== codeOrigins[language]) {
          codeOrigins[language] = source;
          jar.updateCode(source, false);
        }
      });
    });
    onBeforeUnmount(() => {
      codeJars.ts?.destroy();
      codeJars.js?.destroy();
      clearTimeout(timer.value);
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
                  <Tooltip title="Open in StackBlitz">
                    <Button
                      type="text"
                      size="small"
                      icon={Stackblitz}
                      onClick={() =>
                        openStackBlitz(currentCodeJar()?.toString() || "", props.filename)
                      }
                    />
                  </Tooltip>
                  <Tooltip title="Open in CodeSandbox">
                    <Button
                      type="text"
                      size="small"
                      icon={CodeSandbox}
                      onClick={() =>
                        openCodeSandbox(currentCodeJar()?.toString() || "", props.filename).catch(
                          (error: unknown) =>
                            message.error(
                              error instanceof Error ? error.message : "Unable to open CodeSandbox"
                            )
                        )
                      }
                    />
                  </Tooltip>
                  {props.filename.endsWith(".vue") && (
                    <Tooltip title="Open in GitHub Codespaces">
                      <Button
                        type="text"
                        size="small"
                        icon={Code}
                        onClick={openCodespaces}
                      />
                    </Tooltip>
                  )}
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
                  class="k-code k-scroll hljs"
                >
                  {slots["code-ts"]?.()}
                </div>
                <div
                  v-show={codeLanguage.value === "js"}
                  ref={codeRefs.js}
                  class="k-code k-scroll hljs"
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
