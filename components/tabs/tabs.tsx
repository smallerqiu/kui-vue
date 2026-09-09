import { ChevronDown, X } from "kui-icons";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { Button } from "../button";
import type { BooleanType } from "../const/types";
import { Dropdown } from "../dropdown";
import type { IconType } from "../icon";
import Icon from "../icon";
import { Menu, MenuItem } from "../menu";
import { getChildren } from "../utils/vnode";

const tabsProps = {
  modelValue: [String, Number],
  defaultValue: [String, Number],
  variant: String as PropType<"line" | "card" | "sample" | "browser">,
  card: Boolean as BooleanType,
  sample: Boolean as BooleanType,
  centered: Boolean as BooleanType,
  animated: { type: Boolean, default: true },
};

type TabClickEvent = {
  key: string;
  disabled?: boolean;
};

export type TabsProps = ExtractPropTypes<typeof tabsProps>;

const Tabs = defineComponent({
  name: "Tabs",
  inheritAttrs: false,
  props: tabsProps,
  emits: {
    "update:modelValue": (name: string) => typeof name === "string",
    tabClick: (name: string) => typeof name === "string",
    change: (name: string) => typeof name === "string",
    remove: (name: string) => typeof name === "string",
  },
  setup(props, { slots, emit, attrs }) {
    const currentVariant = computed(
      () => props.variant ?? (props.card ? "card" : props.sample ? "sample" : "line"),
    );
    const tabsId = `k-tabs-${getCurrentInstance()?.uid ?? "default"}`;
    const defaultActiveKey = ref<string | undefined>(
      props.modelValue !== undefined
        ? String(props.modelValue)
        : props.defaultValue !== undefined
          ? String(props.defaultValue)
          : undefined,
    );
    const currentIndex = ref(-1);
    const scrollable = ref(false);
    const navOffsetLeft = ref(0);
    const navRef = ref();
    const navScrollRef = ref();
    const navBoxRef = ref();
    const inkBarRef = ref();
    let layoutRaf = 0;
    let resizeObserver: ResizeObserver | null = null;

    provide("tabActiveKey", defaultActiveKey);
    provide("tabsId", tabsId);

    watch(
      // () => props.activeKey,
      () => props.modelValue,
      (nv) => {
        if (nv !== undefined) defaultActiveKey.value = String(nv);
        updateIndex();
      },
    );
    const resetActivePosition = () => {
      const target = navRef.value?.children[currentIndex.value] as HTMLElement | undefined;
      if (!target) return;
      const nav = navScrollRef.value;
      const navBox = navBoxRef.value;
      if (!nav || !navBox) return;
      const clientWidth = navBox.clientWidth;
      let navLeft = navOffsetLeft.value;
      const { offsetLeft, offsetWidth } = target;
      const edgeOffset = currentVariant.value === "browser" ? 10 : 0;

      if (navLeft + offsetLeft - edgeOffset < 0) {
        navLeft = -offsetLeft + edgeOffset;
      } else if (offsetLeft + offsetWidth + edgeOffset + navLeft > clientWidth) {
        navLeft = clientWidth - offsetLeft - offsetWidth - edgeOffset;
      }
      applyOffset(navLeft);
    };

    const getMaxOffset = () => {
      const navBox = navBoxRef.value;
      const nav = navRef.value;
      if (!navBox || !nav) return 0;
      return Math.max(0, nav.scrollWidth - navBox.clientWidth);
    };

    const applyOffset = (offset: number) => {
      const nav = navScrollRef.value;
      if (!nav) return;
      const maxOffset = getMaxOffset();
      const next = Math.min(0, Math.max(-maxOffset, offset));
      navOffsetLeft.value = next;
      nav.style.transform = `translate3d(${next}px,0,0)`;
    };

    const updateNav = () => {
      const maxOffset = getMaxOffset();
      scrollable.value = maxOffset > 0.5;
      applyOffset(navOffsetLeft.value);
    };

    const updateLayout = () => {
      updateNav();
      resetActivePosition();
      updateInkBarPosition();
    };

    const scheduleLayout = () => {
      cancelAnimationFrame(layoutRaf);
      layoutRaf = requestAnimationFrame(() => {
        nextTick(updateLayout);
      });
    };

    const resetNavPosition = () => updateIndex();

    provide("tabUpdateNav", resetNavPosition);

    const closeTab = (key: string, e: Event) => {
      e.stopPropagation();
      emit("remove", key);
    };
    const tabClick = ({ disabled, key }: TabClickEvent, index: number) => {
      if (!disabled) {
        emit("update:modelValue", key);
        // emit("update:activeKey", key);
        emit("tabClick", key);
        if (defaultActiveKey.value !== key) {
          defaultActiveKey.value = key;
          currentIndex.value = index;
          updateIndex();
          emit("change", key);
        }
      }
    };
    const updateIndex = () => {
      nextTick(() => {
        const nodes = getChildren(slots.default?.());
        let nextIndex = nodes
          .map((p, index) => String(p.key ?? index))
          .indexOf(String(defaultActiveKey.value));
        if (nextIndex < 0 && props.modelValue === undefined) {
          nextIndex = nodes.findIndex((panel) => !panel.props?.disabled);
          if (nextIndex >= 0) defaultActiveKey.value = String(nodes[nextIndex].key ?? nextIndex);
        }
        currentIndex.value = nextIndex;
        scheduleLayout();
      });
    };
    const updateInkBarPosition = () => {
      if (currentVariant.value === "line") {
        const nav = navRef.value?.children[currentIndex.value];
        if (nav) {
          const inkBar = inkBarRef.value;
          if (!inkBar) return;
          const offsetLeft = nav.offsetLeft;
          if (props.centered) {
            // offsetLeft = (navBoxRef.value.offsetWidth - offsetLeft) ;
          }
          inkBar.style.width = `${nav.offsetWidth}px`;
          inkBar.style.transform = `translate3d(${offsetLeft}px, 0px, 0px)`;
        }
      }
    };

    onMounted(() => {
      nextTick(() => {
        updateIndex();
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(scheduleLayout);
          if (navBoxRef.value) resizeObserver.observe(navBoxRef.value);
          if (navRef.value) resizeObserver.observe(navRef.value);
        } else {
          window.addEventListener("resize", scheduleLayout);
        }
        scheduleLayout();
      });
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(layoutRaf);
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", scheduleLayout);
    });

    const navNodes = computed(() => {
      const nodes = getChildren(slots.default?.());
      return nodes?.map((panel, index) => {
        const key = String(panel.key ?? index);

        const {
          icon,
          title,
          closable: panelClosable,
          disabled: panelDisabled,
        } = (panel.props ?? {}) as {
          icon?: IconType[];
          title?: VNodeChild;
          closable?: boolean;
          disabled?: boolean;
        };
        const disabled = panelDisabled !== undefined && panelDisabled != false;
        const closable = Boolean(panelClosable);
        const prop = {
          class: [
            "k-tabs-tab",
            {
              ["k-tabs-tab-active"]: key === defaultActiveKey.value,
              ["k-tabs-tab-disabled"]: disabled,
            },
          ],
          onClick: () => tabClick({ disabled, key }, index),
          onKeydown: (event: KeyboardEvent) => moveTabFocus(event, index),
          id: `${tabsId}-tab-${key}`,
          role: "tab",
          tabindex: key === defaultActiveKey.value && !disabled ? 0 : -1,
          "aria-selected": key === defaultActiveKey.value,
          "aria-disabled": disabled || undefined,
          "aria-controls": `${tabsId}-panel-${key}`,
        };
        return (
          <div {...prop}>
            {icon ? <Icon type={icon} /> : null}
            <span class="k-tabs-title">{title}</span>
            {closable && ["card", "browser"].includes(currentVariant.value) ? (
              <Icon
                type={X}
                class="k-tabs-close"
                role="button"
                tabindex={0}
                aria-label="Close"
                onClick={(e) => closeTab(key, e)}
                onKeydown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    closeTab(key, e);
                  }
                }}
              />
            ) : null}
          </div>
        );
      });
    });

    const moveTabFocus = (event: KeyboardEvent, index: number) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const nodes = getChildren(slots.default?.());
      const enabled = nodes
        .map((panel, itemIndex) => (!panel.props?.disabled ? itemIndex : -1))
        .filter((itemIndex) => itemIndex >= 0);
      if (!enabled.length) return;
      const current = enabled.indexOf(index);
      const next =
        event.key === "Home"
          ? enabled[0]
          : event.key === "End"
            ? enabled[enabled.length - 1]
            : enabled[
                (Math.max(current, 0) + (event.key === "ArrowRight" ? 1 : -1) + enabled.length) %
                  enabled.length
              ];
      const panel = nodes[next];
      const key = String(panel.key ?? next);
      (navRef.value?.children[next] as HTMLElement | undefined)?.focus();
      tabClick({ disabled: false, key }, next);
      event.preventDefault();
    };

    const selectOverflowTab = (key: string) => {
      const nodes = getChildren(slots.default?.());
      const index = nodes.findIndex((panel, panelIndex) => String(panel.key ?? panelIndex) === key);
      if (index < 0) return;
      tabClick({ disabled: Boolean(nodes[index].props?.disabled), key }, index);
    };

    return () => {
      const { animated, centered } = props;
      const variant = currentVariant.value;
      const classes = [
        "k-tabs",
        {
          ["k-tabs-animated"]: animated && variant === "line",
          [`k-tabs-${variant}`]: variant !== "line",
          ["k-tabs-centered"]: centered,
        },
      ];

      const scrollStyle: CSSProperties = {},
        paneStyle: CSSProperties = {};

      if (animated && variant === "line" && currentIndex.value >= 0) {
        paneStyle.marginLeft = `-${100 * currentIndex.value}%`;
      }

      const navCls = [
        "k-tabs-nav-container",
        { ["k-tabs-nav-container-scroll"]: scrollable.value },
      ];

      // const { panels, navNodes } = renderNodes();
      return (
        <div {...attrs} class={[classes, attrs.class]}>
          <div class="k-tabs-bar">
            <div class={navCls}>
              <div class="k-tabs-nav-wrap" ref={navBoxRef}>
                <div class="k-tabs-nav" style={scrollStyle} ref={navScrollRef}>
                  {variant === "line" ? <div class="k-tabs-ink-bar" ref={inkBarRef} /> : null}
                  <div
                    class="k-tabs-nav-inner"
                    ref={navRef}
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    {navNodes.value}
                  </div>
                </div>
              </div>
              {scrollable.value ? (
                <Dropdown
                  trigger="click"
                  placement="bottom-right"
                  v-slots={{
                    default: () => (
                      <Button
                        icon={ChevronDown}
                        class="k-tabs-overflow-trigger"
                        aria-label="More tabs"
                      />
                    ),
                    overlay: () => (
                      <Menu
                        class="k-tabs-overflow-menu"
                        onSelect={({ key }) => selectOverflowTab(key)}
                      >
                        {getChildren(slots.default?.()).map((panel, index) => {
                          const key = String(panel.key ?? index);
                          return (
                            <MenuItem
                              key={key}
                              icon={panel.props?.icon}
                              disabled={Boolean(panel.props?.disabled)}
                              class={{
                                "k-tabs-overflow-item-active": key === defaultActiveKey.value,
                              }}
                            >
                              {panel.props?.title}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    ),
                  }}
                />
              ) : null}
            </div>
            {slots.extra ? <div class="k-tabs-extra">{slots.extra()}</div> : null}
          </div>
          <div class="k-tabs-wrapper">
            <div class="k-tabs-content" style={paneStyle}>
              {slots.default?.()}
            </div>
          </div>
        </div>
      );
    };
  },
});
export default Tabs;
