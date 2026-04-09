import { ChevronBack, ChevronForward, Close } from "kui-icons";
import {
  cloneVNode,
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
import type { BooleanType } from "../const/types";
import Icon from "../icon";
import { getChildren } from "../utils/vnode";
import type { TabClickPayload, TabKey, TabsPaneLike } from "./types";

export const tabsProps = {
  modelValue: [String, Number] as PropType<TabKey>,
  value: [String, Number] as PropType<TabKey>,
  card: Boolean as BooleanType,
  sample: Boolean as BooleanType,
  centered: Boolean as BooleanType,
  animated: { type: Boolean as BooleanType, default: true },
  onChange: {
    type: Function as PropType<(key: TabKey) => void>,
  },
  onRemove: {
    type: Function as PropType<(key: TabKey) => void>,
  },
  onTabClick: {
    type: Function as PropType<(key: TabKey) => void>,
  },
};

export type TabsProps = ExtractPropTypes<typeof tabsProps>;

const Tabs = defineComponent({
  name: "Tabs",
  props: tabsProps,
  emits: ["update:modelValue", "tabClick", "change", "remove"],
  setup(props, { slots, emit }) {
    const defaultActiveKey = ref<TabKey>(props.modelValue || props.value);
    const currentIndex = ref(-1);
    const scrollable = ref(false);
    const navOffsetLeft = ref(0);
    const prevBtnDisabled = ref(false);
    const nextBtnDisabled = ref(false);
    const navRef = ref<HTMLElement | null>(null);
    const navScrollRef = ref<HTMLElement | null>(null);
    const navBoxRef = ref<HTMLElement | null>(null);
    const inkBarRef = ref<HTMLElement | null>(null);

    watch(
      () => props.modelValue,
      (nv) => {
        defaultActiveKey.value = nv;
        updateIndex();
      }
    );

    onMounted(() => {
      nextTick(() => {
        updateIndex();
      });
      window.addEventListener("resize", resetNavPosition);
    });

    onBeforeMount(() => {
      window.removeEventListener("resize", resetNavPosition);
    });

    const closeTab = (key: TabKey, e: MouseEvent) => {
      emit("remove", key);
      e.stopPropagation();
    };

    const resetActivePosition = () => {
      if (!navRef.value || currentIndex.value < 0) return;
      const target = navRef.value.children[currentIndex.value] as HTMLElement | undefined;
      if (!target || !navScrollRef.value || !navBoxRef.value) return;

      const nav = navScrollRef.value;
      const clientWidth = navBoxRef.value.clientWidth;
      let navLeft = navOffsetLeft.value;
      const offsetLeft = target.offsetLeft;
      const offsetWidth = target.offsetWidth;

      if (navLeft + offsetLeft < 0) {
        navLeft = -offsetLeft;
      } else if (clientWidth - navLeft < offsetLeft + offsetWidth) {
        navLeft -= offsetLeft + offsetWidth + navLeft - clientWidth + 2;
      }

      navOffsetLeft.value = navLeft;
      nav.style.transform = "translate3d(" + navLeft + "px,0,0)";
    };

    const resetNavPosition = () => {
      nextTick(() => {
        const nav = navScrollRef.value;
        const navBox = navBoxRef.value;
        if (!nav || !navBox) return;

        const totalWidth = nav.offsetWidth;
        const clientWidth = navBox.clientWidth;
        let navLeft = navOffsetLeft.value;

        if (clientWidth + navLeft < clientWidth) {
          navLeft = clientWidth - totalWidth;
        }
        if (navLeft > 0) navLeft = 0;

        navOffsetLeft.value = navLeft;
        nextBtnDisabled.value = navLeft === clientWidth - totalWidth;
        prevBtnDisabled.value = navLeft === 0;

        nav.style.transform = "translate3d(" + navLeft + "px,0,0)";

        resetActivePosition();
        updateInkBarPosition();
        updateNav();
      });
    };

    const scroll = (direction: "left" | "right") => {
      const panel = navScrollRef.value;
      const navBox = navBoxRef.value;
      if (!panel || !navBox) return;

      const totalWidth = panel.offsetWidth;
      const clientWidth = navBox.clientWidth;
      let navLeft = navOffsetLeft.value;

      if (direction === "right") {
        const endWidth = totalWidth - clientWidth + navLeft;
        if (endWidth > clientWidth) {
          navLeft -= clientWidth;
        } else if (endWidth > 0) {
          navLeft -= endWidth;
        }
      } else {
        if (navLeft < -clientWidth) {
          navLeft += clientWidth;
        } else if (navLeft < 0) {
          navLeft = 0;
        }
      }

      nextBtnDisabled.value = navLeft === clientWidth - totalWidth;
      prevBtnDisabled.value = navLeft === 0;

      navOffsetLeft.value = navLeft;
      panel.style.transform = "translate3d(" + navLeft + "px,0,0)";
    };

    const tabClick = ({ disabled, key }: TabClickPayload, index: number) => {
      if (!disabled) {
        emit("update:modelValue", key);
        emit("tabClick", key);
        if (defaultActiveKey.value !== key) {
          defaultActiveKey.value = key;
          currentIndex.value = index;
          updateIndex();
          emit("change", key);
        }
      }
    };

    const getTabNodes = (): VNode[] => {
      const nodes = getChildren(slots.default?.()) || [];
      return nodes as VNode[];
    };

    const updateIndex = () => {
      nextTick(() => {
        const nodes = getTabNodes();
        const keys: TabKey[] = nodes.map((panel: VNode) => panel.key as TabKey);
        currentIndex.value = keys.indexOf(defaultActiveKey.value);
        resetActivePosition();
        updateInkBarPosition();
      });
    };

    const updateInkBarPosition = () => {
      if (props.card || props.sample) return;
      if (!navRef.value || !inkBarRef.value || currentIndex.value < 0) return;

      const nav = navRef.value.children[currentIndex.value] as HTMLElement | undefined;
      if (!nav) return;

      const inkBar = inkBarRef.value;
      const offsetLeft = nav.offsetLeft;
      inkBar.style.width = nav.offsetWidth + "px";
      inkBar.style.transform = "translate3d(" + offsetLeft + "px, 0px, 0px)";
    };

    const updateNav = () => {
      nextTick(() => {
        const navBox = navBoxRef.value;
        if (!navBox) return;
        scrollable.value = navBox.scrollWidth > navBox.clientWidth;
      });
    };

    const renderNodes = () => {
      const nodes = getTabNodes();

      const panels = nodes.map((item: VNode) => {
        return cloneVNode(
          item,
          {
            activeKey: defaultActiveKey.value,
            onResetNavPosition: () => resetNavPosition(),
          },
          true
        );
      });

      const navNodes = nodes.map((panel: VNode, index: number) => {
        const tabPanel = panel as VNode & TabsPaneLike;
        const key = tabPanel.key;
        const panelProps = tabPanel.props || {};
        const icon = panelProps.icon;
        const title = panelProps.title;
        let closable = panelProps.closable;
        let disabled = panelProps.disabled;

        disabled = disabled !== undefined && disabled !== false;
        closable = closable !== undefined;

        const tabProps = {
          class: [
            "k-tabs-tab",
            {
              "k-tabs-tab-active": key === defaultActiveKey.value,
              "k-tabs-tab-disabled": disabled,
            },
          ],
          onClick: () => tabClick({ disabled, key }, index),
        };

        return (
          <div {...tabProps}>
            {icon ? <Icon type={icon} /> : null}
            {title}
            {closable && props.card ? (
              <Icon
                type={Close}
                class="k-tabs-close"
                strokeWidth={45}
                onClick={(e: MouseEvent) => closeTab(key, e)}
              />
            ) : null}
          </div>
        );
      });

      return { panels, navNodes };
    };

    return () => {
      const classes = [
        "k-tabs",
        {
          "k-tabs-animated": props.animated && !props.card && !props.sample,
          "k-tabs-card": props.card && !props.sample,
          "k-tabs-sample": props.sample && !props.card,
          "k-tabs-centered": props.centered,
        },
      ];

      const scrollStyle: CSSProperties = {};
      const paneStyle: CSSProperties = {};

      if (props.animated && !props.card && !props.sample) {
        paneStyle.marginLeft = "-" + 100 * currentIndex.value + "%";
      }

      const navCls = ["k-tabs-nav-container", { "k-tabs-nav-container-scroll": scrollable.value }];

      const { panels, navNodes } = renderNodes();
      const navProps = {
        class: "k-tabs-nav",
        style: scrollStyle,
        ref: navScrollRef,
      };
      const contentProps = {
        class: "k-tabs-content",
        style: paneStyle,
      };
      return (
        <div class={classes}>
          <div class="k-tabs-bar">
            <div class={navCls}>
              {scrollable.value ? (
                <span
                  class={[
                    "k-tabs-tab-btn-prev",
                    { "k-tabs-tab-btn-prev-disabled": prevBtnDisabled.value },
                  ]}
                  onClick={() => scroll("left")}
                >
                  <Icon type={ChevronBack} />
                </span>
              ) : null}
              <div class="k-tabs-nav-wrap" ref={navBoxRef}>
                <div {...navProps}>
                  {!props.card && !props.sample ? (
                    <div class="k-tabs-ink-bar" ref={inkBarRef} />
                  ) : null}
                  <div class="k-tabs-nav-inner" ref={navRef}>
                    {navNodes}
                  </div>
                </div>
              </div>
              {scrollable.value ? (
                <span
                  class={[
                    "k-tabs-tab-btn-next",
                    { "k-tabs-tab-btn-next-disabled": nextBtnDisabled.value },
                  ]}
                  onClick={() => scroll("right")}
                >
                  <Icon type={ChevronForward} />
                </span>
              ) : null}
            </div>
            {slots.extra ? <div class="k-tabs-extra">{slots.extra()}</div> : null}
          </div>
          <div {...contentProps}>{panels}</div>
        </div>
      );
    };
  },
});

export default Tabs;
