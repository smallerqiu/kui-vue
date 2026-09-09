import {
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
import type { BooleanType } from "../const/types";
import { anchorContextKey } from "./context";

const anchorProps = {
  affix: { type: Boolean as BooleanType, default: true },
  offsetTop: { type: Number, default: 0 },
  bounds: { type: Number, default: 5 },
  container: [String, Object] as PropType<string | HTMLElement | Window>, // 明确支持 HTMLElement 和 Window
};

export type AnchorProps = ExtractPropTypes<typeof anchorProps>;

const Anchor = defineComponent({
  name: "Anchor",
  inheritAttrs: false,
  props: anchorProps,
  emits: {
    change: (activeLink: string) => typeof activeLink === "string",
    click: (link: string) => typeof link === "string",
  },
  setup(props, { slots, emit, attrs }) {
    const activeLink = ref("");
    const inkTop = ref(0);
    const inkHeight = ref(0);
    const links = new Set<string>(); // 明确 Set 存储的是字符串
    const anchorRef = ref<HTMLElement | null>(null);

    let isClickScrolling = false;
    let currentContainer: HTMLElement | Window | null = null;
    let initialTimer: ReturnType<typeof setTimeout> | null = null;
    let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;
    let frameId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let unmounted = false;

    const getContainer = (): HTMLElement | Window => {
      if (!props.container) return window;
      if (typeof props.container === "string") {
        return (document.querySelector(props.container) as HTMLElement) || window; // 如果选择器没找到，默认回退到 window
      }
      return props.container;
    };

    const getTarget = (link: string) => {
      if (link.startsWith("#")) {
        try {
          return document.getElementById(decodeURIComponent(link.slice(1)));
        } catch {
          return null;
        }
      }
      try {
        return document.querySelector(link) as HTMLElement | null;
      } catch {
        return null;
      }
    };

    const getElementTop = (element: HTMLElement, container: HTMLElement | Window) => {
      const rect = element.getBoundingClientRect();
      if (container === window) return rect.top + window.scrollY;
      const containerElement = container as HTMLElement;
      const containerRect = containerElement.getBoundingClientRect();
      return rect.top - containerRect.top - containerElement.clientTop + containerElement.scrollTop;
    };

    const updateInk = () => {
      nextTick(() => {
        const activeNode = anchorRef.value?.querySelector(
          ".k-anchor-link-active > .k-anchor-link-title",
        );
        if (activeNode instanceof HTMLElement) {
          inkTop.value = (activeNode.parentElement?.offsetTop || 0) + 4;
          inkHeight.value = activeNode.clientHeight;
        } else {
          inkTop.value = 0;
          inkHeight.value = 0;
        }
      });
    };

    const setActiveLink = (link: string) => {
      if (activeLink.value === link) return;
      activeLink.value = link;
      emit("change", link);
    };

    const handleScroll = () => {
      frameId = null;
      if (isClickScrolling) return;

      const linkList = Array.from(links);
      const container = currentContainer || getContainer();
      const containerScrollTop =
        container === window ? window.pageYOffset : (container as HTMLElement).scrollTop;
      const containerClientHeight =
        container === window
          ? window.innerHeight || document.documentElement.clientHeight
          : (container as HTMLElement).clientHeight;
      const containerScrollHeight =
        container === window
          ? Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
          : (container as HTMLElement).scrollHeight;

      const anchorTargets = linkList
        .map((link) => {
          const target = getTarget(link);
          return target ? { link, offsetTop: getElementTop(target, container) } : null;
        })
        .filter((item): item is { link: string; offsetTop: number } => item !== null) // 类型守卫
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let current = "";

      const reachedBottom =
        containerScrollHeight > containerClientHeight &&
        containerScrollTop + containerClientHeight >=
          containerScrollHeight - Math.max(props.bounds, 1);

      if (reachedBottom && anchorTargets.length) {
        current = anchorTargets[anchorTargets.length - 1].link;
      } else {
        for (let i = anchorTargets.length - 1; i >= 0; i--) {
          const { link, offsetTop } = anchorTargets[i];
          if (containerScrollTop >= offsetTop - props.offsetTop - props.bounds) {
            current = link;
            break;
          }
        }
      }

      setActiveLink(current);
    };

    const scheduleScroll = () => {
      if (unmounted || frameId !== null) return;
      frameId = requestAnimationFrame(handleScroll);
    };

    const finishClickScrolling = () => {
      isClickScrolling = false;
      scrollEndTimer = null;
      scheduleScroll();
      updateInk();
    };

    const handleContainerScroll = () => {
      if (!isClickScrolling) {
        scheduleScroll();
        return;
      }
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(finishClickScrolling, 120);
    };

    const handleResize = () => {
      scheduleScroll();
      updateInk();
    };

    // 监听 activeLink 变化即更新滑块
    watch(activeLink, updateInk);

    const handleScrollTo = (link: string) => {
      const target = getTarget(link);
      if (!target) return;

      isClickScrolling = true; // 加锁
      setActiveLink(link);
      emit("click", link);

      const container = currentContainer || getContainer();
      const elementTop = getElementTop(target, container) - props.offsetTop;

      container.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });

      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(finishClickScrolling, 1000);
    };

    provide(anchorContextKey, {
      activeLink,
      registerLink: (link: string) => {
        links.add(link);
        scheduleScroll();
      },
      unregisterLink: (link: string) => {
        links.delete(link);
        scheduleScroll();
      },
      handleScrollTo,
    });

    const removeListeners = () => {
      currentContainer?.removeEventListener("scroll", handleContainerScroll);
      window.removeEventListener("resize", handleResize);
      currentContainer = null;
      resizeObserver?.disconnect();
      resizeObserver = null;
      if (initialTimer) clearTimeout(initialTimer);
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      if (frameId !== null) cancelAnimationFrame(frameId);
      initialTimer = null;
      scrollEndTimer = null;
      frameId = null;
      isClickScrolling = false;
    };

    const addListeners = () => {
      currentContainer = getContainer();
      currentContainer.addEventListener("scroll", handleContainerScroll, { passive: true });
      window.addEventListener("resize", handleResize);
      if (anchorRef.value && "ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(updateInk);
        resizeObserver.observe(anchorRef.value);
      }
      initialTimer = setTimeout(scheduleScroll, 0);
    };

    onMounted(addListeners);

    watch(
      () => props.container,
      () => {
        removeListeners();
        nextTick(addListeners);
      },
    );

    watch(() => [props.offsetTop, props.bounds], scheduleScroll);

    onBeforeUnmount(() => {
      unmounted = true;
      removeListeners();
    });

    return () => {
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      const wrapperProps = {
        ...restAttrs,
        class: ["k-anchor-wrapper", customClass, { "k-anchor-affix": props.affix }],
        style: [customStyle as CSSProperties, props.affix ? { top: `${props.offsetTop}px` } : null],
        ref: anchorRef,
      };

      const inkBallStyles: CSSProperties = {
        top: `${inkTop.value}px`,
        height: `${inkHeight.value}px`,
        opacity: activeLink.value ? 1 : 0,
      };

      const inkProps = {
        class: "k-anchor-ink-ball",
        style: inkBallStyles,
      };

      return (
        <div {...wrapperProps}>
          <div class="k-anchor">
            <span {...inkProps} />
            {slots.default?.()}
          </div>
        </div>
      );
    };
  },
});

export default Anchor;
