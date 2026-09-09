import { CircleX, Loading } from "kui-icons";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  Teleport,
  Transition,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { usePopupContainer } from "../config/popup";
import { usePopupHost } from "../config/popup-host";
import type { DropPlacementsType, ShapeType, SizeType, ThemeType } from "../const/types";
import Empty from "../empty";
import Icon from "../icon";
import { TextArea } from "../input";
import { setPlacement } from "../utils/placement";

export interface MentionOption {
  value: string;
  label?: VNodeChild;
  disabled?: boolean;
}
const propsDef = {
  modelValue: String,
  value: { type: String, default: "" },
  options: { type: Array as PropType<Array<string | MentionOption>>, default: () => [] },
  triggers: { type: Array as PropType<string[]>, default: () => ["@"] },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  clearable: { type: Boolean, default: true },
  loading: Boolean,
  loadingText: String,
  rows: { type: Number, default: 1 },
  placement: { type: String as PropType<DropPlacementsType>, default: "bottom-left" },
  size: String as PropType<SizeType>,
  shape: String as PropType<ShapeType>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  emptyText: String,
  filterOption: Function as PropType<(query: string, option: MentionOption) => boolean>,
};
export type MentionsProps = ExtractPropTypes<typeof propsDef>;

export default defineComponent({
  name: "Mentions",
  inheritAttrs: false,
  props: propsDef,
  emits: {
    "update:modelValue": (value: string) => typeof value === "string",
    change: (value: string) => typeof value === "string",
    select: (option: MentionOption, trigger: string) =>
      typeof option === "object" && option !== null && typeof trigger === "string",
    search: (value: string, trigger: string) =>
      typeof value === "string" && typeof trigger === "string",
    clear: () => true,
  },
  setup(props, { emit, attrs, slots }) {
    usePopupHost(() => query.value && (query.value = undefined));
    const getPopupContainer = usePopupContainer();
    const instance = getCurrentInstance();
    const listboxId = `k-mentions-listbox-${instance?.uid ?? "default"}`;
    const hasSearchEvent = Boolean(instance?.vnode.props?.onSearch);
    const inner = ref(props.value);
    const query = ref<{ start: number; trigger: string; text: string }>();
    const rendered = ref(false);
    const active = ref(0);
    const root = ref<HTMLElement | null>(null);
    const dropdown = ref<HTMLElement | null>(null);
    const dropdownStyle = ref<CSSProperties>();
    const positioned = ref(false);
    const composing = ref(false);
    const shownMatches = shallowRef<MentionOption[]>([]);
    const top = ref(0);
    const left = ref(0);
    const transOrigin = ref("left top");
    const currentPlacement = ref<string>(props.placement);
    const textarea = ref<{ $el?: HTMLTextAreaElement } | HTMLTextAreaElement>();
    let resizeObserver: ResizeObserver | undefined;
    const closeOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!root.value?.contains(target) && !dropdown.value?.contains(target))
        query.value = undefined;
    };
    watch(
      query,
      (value) => {
        if (value) rendered.value = true;
      },
      { flush: "sync" },
    );
    const getTextarea = () =>
      textarea.value instanceof HTMLTextAreaElement ? textarea.value : textarea.value?.$el;
    const getCaretRect = (element: HTMLTextAreaElement) => {
      const computedStyle = window.getComputedStyle(element);
      const elementRect = element.getBoundingClientRect();
      const mirror = document.createElement("div");
      const copiedProperties = [
        "boxSizing",
        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "fontStretch",
        "fontSize",
        "fontFamily",
        "lineHeight",
        "letterSpacing",
        "textTransform",
        "textAlign",
        "textIndent",
        "tabSize",
      ] as const;
      Object.assign(mirror.style, {
        position: "fixed",
        visibility: "hidden",
        overflow: "hidden",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        width: `${elementRect.width}px`,
        left: `${elementRect.left - element.scrollLeft}px`,
        top: `${elementRect.top - element.scrollTop}px`,
      });
      copiedProperties.forEach((property) => {
        mirror.style[property] = computedStyle[property];
      });
      mirror.textContent = element.value.slice(0, element.selectionStart);
      const marker = document.createElement("span");
      marker.textContent = "\u200b";
      mirror.append(marker);
      document.body.append(mirror);
      const rect = marker.getBoundingClientRect();
      mirror.remove();
      return rect;
    };
    const updateDropdownPosition = () => {
      const element = getTextarea();
      const container = root.value;
      if (!query.value || !element || !container) return;
      const caretRect = getCaretRect(element);
      currentPlacement.value = props.placement;
      setPlacement({
        refSelection: root,
        refPopper: dropdown,
        currentPlacement,
        transOrigin,
        top,
        left,
        position: { x: caretRect.left, y: caretRect.bottom },
        offset: 4,
      });
      dropdownStyle.value = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${Math.min(260, container.offsetWidth || 260)}px`,
        transformOrigin: transOrigin.value,
      };
      positioned.value = true;
    };
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== undefined) inner.value = value;
      },
    );
    const current = computed(() => props.modelValue ?? inner.value);
    const normalized = computed(() =>
      props.options.map((item) => (typeof item === "string" ? { value: item, label: item } : item)),
    );
    const effectiveTriggers = computed(() => props.triggers.filter(Boolean));
    const firstEnabled = (options: MentionOption[]) => {
      const index = options.findIndex((option) => !option.disabled);
      return index < 0 ? 0 : index;
    };
    const setMatches = (options: MentionOption[]) => {
      shownMatches.value = options;
      active.value = firstEnabled(options);
    };
    const moveActive = (offset: number) => {
      const enabled = shownMatches.value
        .map((option, index) => (!option.disabled ? index : -1))
        .filter((index) => index >= 0);
      if (!enabled.length) return;
      const currentIndex = enabled.indexOf(active.value);
      active.value =
        enabled[(Math.max(currentIndex, 0) + offset + enabled.length) % enabled.length];
    };
    const ensureActiveVisible = () => {
      nextTick(() =>
        dropdown.value
          ?.querySelector<HTMLElement>(`#${listboxId}-option-${active.value}`)
          ?.scrollIntoView({ block: "nearest" }),
      );
    };
    watch(active, ensureActiveVisible);
    const getMatches = (state: NonNullable<typeof query.value>) => {
      if (hasSearchEvent && !props.filterOption) return normalized.value;
      return normalized.value.filter((option) =>
        props.filterOption
          ? props.filterOption(state.text, option)
          : option.value.toLocaleLowerCase().includes(state.text.toLocaleLowerCase()),
      );
    };
    const update = (next: string) => {
      if (props.readonly) return;
      inner.value = next;
      emit("update:modelValue", next);
      emit("change", next);
    };
    const updateQuery = (text: string, caret: number, search = false) => {
      if (props.readonly) {
        query.value = undefined;
        return;
      }
      const prefix = text.slice(0, caret);
      let found: typeof query.value;
      effectiveTriggers.value.forEach((trigger) => {
        const start = prefix.lastIndexOf(trigger);
        if (
          start >= 0 &&
          !/\s/.test(prefix.slice(start + trigger.length)) &&
          (!found || start > found.start)
        ) {
          found = { start, trigger, text: prefix.slice(start + trigger.length) };
        }
      });
      if (!query.value && found) positioned.value = false;
      query.value = found;
      if (found) {
        setMatches(hasSearchEvent && search && found.text ? [] : getMatches(found));
        if (search && found.text) emit("search", found.text, found.trigger);
        nextTick(updateDropdownPosition);
      } else {
        setMatches([]);
      }
    };
    watch(
      () => props.options,
      () => {
        if (!query.value) return;
        setMatches(getMatches(query.value));
        nextTick(updateDropdownPosition);
      },
      { deep: true },
    );
    onMounted(() => {
      window.addEventListener("resize", updateDropdownPosition);
      window.addEventListener("scroll", updateDropdownPosition, true);
      document.addEventListener("mousedown", closeOutside);
      resizeObserver = new ResizeObserver(updateDropdownPosition);
      if (root.value) resizeObserver.observe(root.value);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("scroll", updateDropdownPosition, true);
      document.removeEventListener("mousedown", closeOutside);
      resizeObserver?.disconnect();
    });
    const choose = (option: MentionOption) => {
      const element = getTextarea();
      if (props.readonly || !query.value || option.disabled || !element) return;
      const state = query.value;
      const caret = element.selectionStart;
      update(
        `${current.value.slice(0, state.start)}${state.trigger}${option.value} ${current.value.slice(caret)}`,
      );
      query.value = undefined;
      emit("select", option, state.trigger);
      nextTick(() => {
        const position = state.start + state.trigger.length + option.value.length + 1;
        getTextarea()?.focus();
        getTextarea()?.setSelectionRange(position, position);
      });
    };
    const updateQueryFromCaret = () => {
      const element = getTextarea();
      if (element) updateQuery(current.value, element.selectionStart);
    };
    const clear = (event: Event) => {
      if (props.readonly) return;
      event.stopPropagation();
      update("");
      query.value = undefined;
      shownMatches.value = [];
      emit("clear");
      nextTick(() => getTextarea()?.focus());
    };
    return () => (
      <div
        ref={root}
        class={[
          "k-mentions",
          {
            "k-mentions-sm": props.size == "small",
            "k-mentions-lg": props.size == "large",
            "k-mentions-disabled": props.disabled,
            "k-mentions-readonly": props.readonly,
            "k-mentions-has-clear":
              props.clearable && !!current.value && !props.disabled && !props.readonly,
          },
          attrs.class,
        ]}
      >
        <TextArea
          {...attrs}
          class={undefined}
          ref={textarea}
          modelValue={current.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readonly}
          rows={props.rows}
          size={props.size}
          shape={props.shape}
          theme={props.theme}
          aria-haspopup="listbox"
          aria-expanded={Boolean(query.value)}
          aria-controls={query.value ? listboxId : undefined}
          aria-activedescendant={
            query.value && shownMatches.value[active.value]
              ? `${listboxId}-option-${active.value}`
              : undefined
          }
          onChange={(value) => {
            update(value);
            if (composing.value) return;
            nextTick(() => {
              const element = getTextarea();
              if (element) updateQuery(value, element.selectionStart, true);
            });
          }}
          onCompositionstart={() => (composing.value = true)}
          onCompositionend={(event: CompositionEvent) => {
            composing.value = false;
            const element = event.target as HTMLTextAreaElement;
            updateQuery(element.value, element.selectionStart, true);
          }}
          onClick={updateQueryFromCaret}
          onSelect={updateQueryFromCaret}
          onKeyup={(event: KeyboardEvent) => {
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
              updateQueryFromCaret();
            }
          }}
          onKeydown={(event: KeyboardEvent) => {
            if (!query.value) return;
            if (
              (event.key === "ArrowDown" || event.key === "ArrowUp") &&
              shownMatches.value.length
            ) {
              moveActive(event.key === "ArrowDown" ? 1 : -1);
              event.preventDefault();
            } else if (event.key === "Enter" && shownMatches.value.length) {
              choose(shownMatches.value[active.value]);
              event.preventDefault();
            } else if (event.key === "Escape") {
              event.preventDefault();
              event.stopPropagation();
              query.value = undefined;
            }
          }}
        />
        {props.clearable && current.value && !props.disabled && !props.readonly && (
          <Icon
            class="k-mentions-clearable"
            type={CircleX}
            role="button"
            tabindex={0}
            aria-label="Clear"
            onClick={clear}
            onKeydown={(event: KeyboardEvent) => {
              if (event.key === "Enter" || event.key === " ") clear(event);
            }}
          />
        )}
        {rendered.value
          ? [
              <Teleport key="overlay" to={getPopupContainer()}>
                <Transition name="k-select">
                  <div
                    ref={dropdown}
                    v-show={!!query.value}
                    id={listboxId}
                    style={{
                      ...dropdownStyle.value,
                      visibility: positioned.value ? undefined : "hidden",
                    }}
                    class={[
                      "k-select-dropdown",
                      "k-mentions-dropdown",
                      { "k-select-dropdown-sm": props.size === "small" },
                      { "k-select-dropdown-lg": props.size === "large" },
                    ]}
                    role="listbox"
                  >
                    {props.loading ? (
                      <div class="k-select-loading k-mentions-loading">
                        <Icon type={Loading} spin />
                        {props.loadingText && <span>{props.loadingText || "Loading..."}</span>}
                      </div>
                    ) : shownMatches.value.length ? (
                      <ul>
                        {shownMatches.value.map((option, index) => (
                          <li
                            key={option.value}
                            id={`${listboxId}-option-${index}`}
                            role="option"
                            aria-selected={active.value === index}
                            class={[
                              "k-select-item",
                              {
                                "k-select-item-active": active.value === index,
                                "k-select-item-disabled": option.disabled,
                              },
                            ]}
                            onMousedown={(event) => event.preventDefault()}
                            onMouseenter={() => !option.disabled && (active.value = index)}
                            onClick={() => choose(option)}
                          >
                            {option.label ?? option.value}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      (slots.empty?.() ?? <Empty description={props.emptyText} />)
                    )}
                  </div>
                </Transition>
              </Teleport>,
            ]
          : []}
      </div>
    );
  },
});
