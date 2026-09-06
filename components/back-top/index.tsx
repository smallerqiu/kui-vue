import { ArrowUp } from "kui-icons";
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  Transition,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import Icon from "../icon";

const defaultTarget = () => (typeof document === "undefined" ? null : document.body);

const backTopProps = {
  height: { type: Number, default: 100 },
  right: [String, Number] as PropType<string | number>,
  bottom: [String, Number] as PropType<string | number>,
  behavior: { type: String as PropType<ScrollBehavior>, default: "smooth" },
  target: { type: Function as PropType<() => HTMLElement | null>, default: defaultTarget },
  onClick: Function as PropType<(event: MouseEvent) => void>,
  onVisibleChange: Function as PropType<(visible: boolean) => void>,
};

export type BackTopProps = ExtractPropTypes<typeof backTopProps>;

const BackTop = defineComponent({
  name: "BackTop",
  inheritAttrs: false,
  props: backTopProps,
  setup(props, { emit, slots, attrs }) {
    const visible = ref(false);
    const rendered = ref(false);
    let eventTarget: HTMLElement | Window | undefined;

    const resolveTarget = () => props.target?.() ?? document.body;
    const isPageTarget = (target: HTMLElement) =>
      target === document.body || target === document.documentElement;
    const update = () => {
      if (!eventTarget) return;
      const scrollTop =
        eventTarget === window
          ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
          : eventTarget.scrollTop;
      visible.value = scrollTop >= props.height;
    };
    const unbind = () => eventTarget?.removeEventListener("scroll", update);
    const bind = () => {
      unbind();
      const target = resolveTarget();
      eventTarget = isPageTarget(target) ? window : target;
      eventTarget.addEventListener("scroll", update, { passive: true });
      update();
    };
    const handleClick = (event: MouseEvent) => {
      emit("click", event);
      if (event.defaultPrevented) return;
      const target = resolveTarget();
      if (isPageTarget(target)) window.scrollTo({ top: 0, behavior: props.behavior });
      else target.scrollTo({ top: 0, behavior: props.behavior });
    };
    const handleKeydown = (event: KeyboardEvent) => {
      const listener = attrs.onKeydown;
      if (Array.isArray(listener)) listener.forEach((handler) => handler(event));
      else if (typeof listener === "function") listener(event);
      if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        (event.currentTarget as HTMLElement).click();
      }
    };

    onMounted(bind);
    watch(() => props.target, bind);
    watch(() => props.height, update);
    watch(
      visible,
      (value) => {
        if (value) rendered.value = true;
        emit("visibleChange", value);
      },
      { flush: "sync" },
    );
    onBeforeUnmount(unbind);

    return () => {
      const children = slots.default?.() ?? (
        <div class="k-back-top-content">
          <Icon type={ArrowUp} />
        </div>
      );
      const styles: CSSProperties = {
        ...(attrs.style as CSSProperties),
        bottom: typeof props.bottom === "number" ? `${props.bottom}px` : props.bottom,
        right: typeof props.right === "number" ? `${props.right}px` : props.right,
      };
      return rendered.value ? (
        <Teleport to="body">
          <Transition name="k-back-top-fade">
            <div
              {...attrs}
              v-show={visible.value}
              class={["k-back-top", attrs.class]}
              style={styles}
              role={(attrs.role as string) || "button"}
              tabindex={(attrs.tabindex as number | undefined) ?? 0}
              aria-label={(attrs["aria-label"] as string) || "Back to top"}
              onClick={handleClick}
              onKeydown={handleKeydown}
            >
              {children}
            </div>
          </Transition>
        </Teleport>
      ) : null;
    };
  },
});
export default BackTop;
