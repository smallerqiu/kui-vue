import { ChevronUp } from "kui-icons";
import {
  Transition,
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  ref,
  watch,
  type PropType,
  type ExtractPropTypes,
  type VNodeChild,
} from "vue";
import { getTransitionProp } from "../base/transition";
import Icon from "../icon";
import { collapseContextKey, type CollapseKey } from "./context";

const collapsePanelProps = {
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
  disabled: Boolean,
};

export type CollapsePanelProps = ExtractPropTypes<typeof collapsePanelProps>;

const CollapsePanel = defineComponent({
  name: "CollapsePanel",
  props: collapsePanelProps,
  emits: ["expand"],
  setup(props, { slots, emit }) {
    const instance = getCurrentInstance();
    const collapse = inject(collapseContextKey, null);
    const key = instance?.vnode.key as CollapseKey | null;
    const active = computed(() => key != null && !!collapse?.openKeys.value.includes(key));
    const expanded = ref(active.value);
    const rendered = ref(active.value);

    watch(active, (nv) => {
      if (nv) rendered.value = true;
      nextTick(() => {
        expanded.value = nv;
      });
    });

    const handleClick = () => {
      if (props.disabled || key == null) return;
      collapse?.toggle(key);
      emit("expand", key);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      handleClick();
    };

    return () => {
      const rootProps = {
        class: [
          "k-collapse-item",
          {
            "k-collapse-item-active": expanded.value,
            "k-collapse-item-disabled": props.disabled,
          },
        ],
      };

      const extraNode = slots.extra?.();
      const transitionProps = getTransitionProp("k-collapse-slide");

      const panelNode = rendered.value ? (
        <Transition {...transitionProps} duration={350}>
          <div class="k-collapse-content" v-show={expanded.value}>
            <div class="k-collapse-content-box">{slots.default?.()}</div>
          </div>
        </Transition>
      ) : null;

      return (
        <div {...rootProps}>
          <div
            class="k-collapse-header"
            role="button"
            tabindex={props.disabled ? -1 : 0}
            aria-expanded={active.value}
            aria-disabled={props.disabled || undefined}
            onClick={handleClick}
            onKeydown={handleKeydown}
          >
            <Icon type={ChevronUp} class="k-collapse-arrow" />
            <span class="k-collapse-title">{slots.title?.() || props.title}</span>
            {extraNode ? (
              <span class="k-collapse-extra" onClick={(event) => event.stopPropagation()}>
                {extraNode}
              </span>
            ) : null}
          </div>
          {panelNode}
        </div>
      );
    };
  },
});
export default CollapsePanel;
