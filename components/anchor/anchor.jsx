import { defineComponent, nextTick, onBeforeUnmount, onMounted, provide, ref, watch } from "vue";


const Anchor = defineComponent({
  name: "Anchor",
  props: {
    affix: { type: Boolean, default: true },
    offsetTop: { type: Number, default: 0 },
    bounds: { type: Number, default: 5 },
    container: [String, HTMLElement],
  },
  emits: ["change", "click"],
  setup(props, { slots, emit, expose }) {
    const activeLink = ref("");
    const inkTop = ref(0);
    const inkHeight = ref(0);
    const links = new Set();
    const anchorRef = ref(null);

    // 增加一把“锁”，防止点击滚动时监听器乱动
    let isClickScrolling = false;

    const getContainer = () => {
      if (!props.container) return window;
      return typeof props.container === "string"
        ? document.querySelector(props.container)
        : props.container;
    };

    const updateInk = () => {
      nextTick(() => {
        // 查找当前激活的 a 标签
        const activeNode = anchorRef.value?.querySelector(
          ".k-anchor-link-active > .k-anchor-link-title"
        );
        if (activeNode) {
          // 这里的 offsetTop 是相对于父容器 .k-anchor 的
          inkTop.value = activeNode.parentElement.offsetTop + 4; // 微调对齐
          inkHeight.value = activeNode.clientHeight;
        }
      });
    };

    const handleScroll = () => {
      if (isClickScrolling) return;

      const linkList = Array.from(links);
      const container = getContainer();
      const containerScrollTop = container === window ? window.pageYOffset : container.scrollTop;

      const anchorTargets = linkList
        .map((link) => {
          const target = document.querySelector(link);
          return target ? { link, offsetTop: target.offsetTop } : null;
        })
        .filter((item) => item !== null)
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

    const handleScrollTo = (link) => {
      const target = document.querySelector(link);
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

    provide("kAnchor", {
      activeLink,
      registerLink: (link) => links.add(link),
      unregisterLink: (link) => links.delete(link),
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

    return () => (
      <div class={["k-anchor-wrapper", { "k-anchor-affix": props.affix }]} ref={anchorRef}>
        <div class="k-anchor">
          <span
            class="k-anchor-ink-ball"
            style={{
              top: `${inkTop.value}px`,
              height: `${inkHeight.value}px`,
              opacity: activeLink.value ? 1 : 0,
            }}
          />
          {slots.default?.()}
        </div>
      </div>
    );
  },
});

export default Anchor;
