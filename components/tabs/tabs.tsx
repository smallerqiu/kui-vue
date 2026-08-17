import { ChevronLeft, ChevronRight, X } from "kui-icons";
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { Button } from "../button";
import type { BooleanType } from "../const/types";
import type { IconType } from "../icon";
import Icon from "../icon";
import { getChildren } from "../utils/vnode";

const tabsProps = {
  modelValue: [String, Number],
  card: Boolean as BooleanType,
  sample: Boolean as BooleanType,
  centered: Boolean as BooleanType,
  animated: { type: Boolean, default: true },
  onTabClick: Function as PropType<(key: string) => void>,
  onChange: Function as PropType<(key: string) => void>,
  onRemove: Function as PropType<(key: string) => void>,
};

type TabClickEvent = {
  key: string;
  disabled?: boolean;
};

export type TabsProps = ExtractPropTypes<typeof tabsProps>;

const Tabs = defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, { slots, emit }) {
    const defaultActiveKey = ref(props.modelValue);
    const currentIndex = ref(-1);
    const scrollable = ref(false);
    const navOffsetLeft = ref(0);
    const prevBtnDisabled = ref(false);
    const nextBtnDisabled = ref(false);
    const navRef = ref();
    const navScrollRef = ref();
    const navBoxRef = ref();
    const inkBarRef = ref();
    let layoutRaf = 0;
    let resizeObserver: ResizeObserver | null = null;

    provide("tabActiveKey", defaultActiveKey);

    watch(
      // () => props.activeKey,
      () => props.modelValue,
      (nv) => {
        defaultActiveKey.value = nv;
        updateIndex();
      }
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

      if (navLeft + offsetLeft < 0) {
        navLeft = -offsetLeft;
      } else if (offsetLeft + offsetWidth + navLeft > clientWidth) {
        navLeft = clientWidth - offsetLeft - offsetWidth;
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
      prevBtnDisabled.value = next >= -0.5;
      nextBtnDisabled.value = maxOffset <= 0.5 || next <= -maxOffset + 0.5;
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

    const resetNavPosition = () => scheduleLayout();

    provide("tabUpdateNav", resetNavPosition);

    const scroll = (direction: string) => {
      //control left or right

      const navBox = navBoxRef.value;
      if (!navBox) return;
      const delta = direction === "right" ? -navBox.clientWidth : navBox.clientWidth;
      applyOffset(navOffsetLeft.value + delta);
    };

    const closeTab = (key: string, e: PointerEvent) => {
      emit("remove", key);
      e.stopPropagation();
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
        currentIndex.value = nodes
          .map((p, index) => String(p.key ?? index))
          .indexOf(String(defaultActiveKey.value));
        scheduleLayout();
      });
    };
    const updateInkBarPosition = () => {
      if (!props.card && !props.sample) {
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
          title?: string;
          closable?: boolean;
          disabled?: boolean;
        };
        const disabled = panelDisabled !== undefined && panelDisabled != false;
        const closable = panelClosable !== undefined;
        const prop = {
          class: [
            "k-tabs-tab",
            {
              ["k-tabs-tab-active"]: key === defaultActiveKey.value,
              ["k-tabs-tab-disabled"]: disabled,
            },
          ],
          onClick: () => tabClick({ disabled, key }, index),
        };
        return (
          <div {...prop}>
            {icon ? <Icon type={icon} /> : null}
            {title}
            {closable && props.card ? (
              <Icon type={X} class="k-tabs-close" onClick={(e) => closeTab(key, e)} />
            ) : null}
          </div>
        );
      });
    });

    return () => {
      const { card, animated, centered, sample } = props;
      const classes = [
        "k-tabs",
        {
          ["k-tabs-animated"]: animated && !card && !sample,
          ["k-tabs-card"]: card && !sample,
          ["k-tabs-sample"]: sample && !card,
          ["k-tabs-centered"]: centered,
        },
      ];

      const scrollStyle: CSSProperties = {},
        paneStyle: CSSProperties = {};

      if (animated && !card && !sample) {
        paneStyle.marginLeft = `-${100 * currentIndex.value}%`;
      }

      const navCls = [
        "k-tabs-nav-container",
        { ["k-tabs-nav-container-scroll"]: scrollable.value },
      ];

      // const { panels, navNodes } = renderNodes();
      return (
        <div class={classes}>
          <div class="k-tabs-bar">
            <div class={navCls}>
              {scrollable.value ? (
                <Button
                  type="text"
                  size="large"
                  disabled={prevBtnDisabled.value}
                  class={["k-tabs-tab-btn-prev"]}
                  onClick={() => scroll("left")}
                >
                  <Icon type={ChevronLeft} />
                </Button>
              ) : null}
              <div class="k-tabs-nav-wrap" ref={navBoxRef}>
                <div class="k-tabs-nav" style={scrollStyle} ref={navScrollRef}>
                  {!card && !sample ? <div class="k-tabs-ink-bar" ref={inkBarRef} /> : null}
                  <div class="k-tabs-nav-inner" ref={navRef}>
                    {navNodes.value}
                  </div>
                </div>
              </div>
              {scrollable.value ? (
                <Button
                  type="text"
                  size="large"
                  disabled={nextBtnDisabled.value}
                  class={["k-tabs-tab-btn-next"]}
                  onClick={() => scroll("right")}
                >
                  <Icon type={ChevronRight} />
                </Button>
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
