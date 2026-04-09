import { ArrowUp } from "kui-icons";
import { defineComponent, ref, Transition, type CSSProperties, type ExtractPropTypes, type PropType } from "vue";
import { scroll } from "../directives/scroll";
import Icon from "../icon";

const backTopProps = {
  height: { type: Number, default: 100 },
  right: Number,
  bottom: Number,
  target: {
    type: Function as PropType<() => HTMLElement | null>,
    default: () => {
      return typeof document !== "undefined" ? document.body : null;
    },
  },
};

export type BackTopProps = ExtractPropTypes<typeof backTopProps>;

export default defineComponent({
  name: "BackTop",
  directives: { scroll },
  props: backTopProps,
  emits: ["click"],
  setup(props, { emit, slots }) {
    const visible = ref(false);

    const onScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      visible.value = scrollTop >= props.height;
    };

    const handleClick = (e: MouseEvent) => {
      emit("click", e);
      props.target?.()?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return () => {
      let children = slots.default?.();
      
      if (!children || children.length === 0) {
        children = [
          <div class="k-back-top-content">
            <Icon type={ArrowUp} />
          </div>
        ];
      }

      const styles: CSSProperties = {
        bottom: props.bottom !== undefined ? `${props.bottom}px` : undefined,
        right: props.right !== undefined ? `${props.right}px` : undefined,
      };

      const rootProps = {
        class: "k-back-top",
        style: styles,
        onClick: handleClick,
      };

      return (
        <Transition name="k-back-top-fade">
          <div
            {...rootProps}
            v-show={visible.value}
            v-scroll={onScroll}
          >
            {children}
          </div>
        </Transition>
      );
    };
  },
}) 