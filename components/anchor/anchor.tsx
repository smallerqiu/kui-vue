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
  type Ref
} from "vue";
import type { TypeBoolean } from "../const/var";

// 定义 provide/inject 的接口，确保类型安全
export interface AnchorContext {
  activeLink: Ref<string>;
  registerLink: (link: string) => void;
  unregisterLink: (link: string) => void;
  handleScrollTo: (link: string) => void;
}

const anchorProps = {
  affix: { type: Boolean as TypeBoolean, default: true },
  offsetTop: { type: Number, default: 0 },
  bounds: { type: Number, default: 5 },
  container: [String, Object] as PropType<string | HTMLElement | Window>, // 明确支持 HTMLElement 和 Window
};

export type AnchorProps = ExtractPropTypes<typeof anchorProps>;

const Anchor = defineComponent({
  name: "Anchor",
  props: anchorProps,
  emits: ["change", "click"],
  setup(props, { slots, emit, attrs }) {
    const activeLink = ref("");
    const inkTop = ref(0);
    const inkHeight = ref(0);
    const links = new Set<string>(); // 明确 Set 存储的是字符串
    const anchorRef = ref<HTMLElement | null>(null);

    // 增加一把“锁”，防止点击滚动时监听器乱动
    let isClickScrolling = false;

    const getContainer = (): HTMLElement | Window => {
      if (!props.container) return window;
      if (typeof props.container === "string") {
        return (document.querySelector(props.container) as HTMLElement) || window; // 如果选择器没找到，默认回退到 window
      }
      return props.container;
    };

    const updateInk = () => {
      nextTick(() => {
        // 查找当前激活的 a 标签
        const activeNode = anchorRef.value?.querySelector(
          ".k-anchor-link-active > .k-anchor-link-title"
        );
        if (activeNode instanceof HTMLElement) {
          // 确保 activeNode 是 HTMLElement
          // 这里的 offsetTop 是相对于父容器 .k-anchor 的
          inkTop.value = activeNode.parentElement!.offsetTop + 4; // 微调对齐，使用 ! 确保非空
          inkHeight.value = activeNode.clientHeight;
        } else {
          inkTop.value = 0;
          inkHeight.value = 0;
        }
      });
    };

    const handleScroll = () => {
      if (isClickScrolling) return;

      const linkList = Array.from(links);
      const container = getContainer();
      const containerScrollTop =
        container === window ? window.pageYOffset : (container as HTMLElement).scrollTop;

      const anchorTargets = linkList
        .map((link) => {
          const target = document.querySelector(link) as HTMLElement;
          return target ? { link, offsetTop: target.offsetTop } : null;
        })
        .filter((item): item is { link: string; offsetTop: number } => item !== null) // 类型守卫
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let current = "";

      for (let i = anchorTargets.length - 1; i >= 0; i--) {
        const { link, offsetTop } = anchorTargets[i];
        if (containerScrollTop >= offsetTop - props.offsetTop - props.bounds) {
          current = link;
          break;
        }
      }

      if (current && activeLink.value !== current) {
        activeLink.value = current;
        emit("change", current);
      }
    };

    // 监听 activeLink 变化即更新滑块
    watch(activeLink, updateInk);

    const handleScrollTo = (link: string) => {
      const target = document.querySelector(link) as HTMLElement;
      if (!target) return;

      isClickScrolling = true; // 加锁
      activeLink.value = link;
      emit("click", link);

      const container = getContainer();
      const elementTop = target.offsetTop - props.offsetTop;

      container.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });

      // 滚动结束后解锁（通常通过一个定时器或监听 scrollend）
      setTimeout(() => {
        isClickScrolling = false;
        updateInk();
      }, 600); // 略长于 smooth 动画时间
    };

    provide<AnchorContext>("kAnchor", {
      activeLink,
      registerLink: (link: string) => links.add(link),
      unregisterLink: (link: string) => links.delete(link),
      handleScrollTo,
    });

    onMounted(() => {
      const container = getContainer();
      container.addEventListener("scroll", handleScroll);
      setTimeout(handleScroll, 100); // 初始扫描
    });

    onBeforeUnmount(() => {
      const container = getContainer();
      container.removeEventListener("scroll", handleScroll);
    });

    return () => {
      const wrapperProps = {
        ...attrs, // 透传 attrs
        class: ["k-anchor-wrapper", { "k-anchor-affix": props.affix }],
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
}) //as DefineComponent<AnchorProps>;

export default Anchor;
