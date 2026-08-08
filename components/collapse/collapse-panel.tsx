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
  type ExtractPropTypes,
} from "vue";
import { getTransitionProp } from "../base/transition";
import Icon from "../icon";
import { collapseContextKey, type CollapseKey } from "./context";

const collapsePanelProps = {
  title: String,
};

export type CollapsePanelProps = ExtractPropTypes<typeof collapsePanelProps>;

const CollapsePanel = defineComponent({
  name: "CollapsePanel",
  props: collapsePanelProps,
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
      if (key == null) return;
      collapse?.toggle(key);
      emit("expand", key);
    };

    return () => {
      const rootProps = {
        class: [
          "k-collapse-item",
          {
            "k-collapse-item-active": expanded.value,
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
          <div class="k-collapse-header" onClick={handleClick}>
            <Icon type={ChevronUp} class="k-collapse-arrow" />
            <span class="k-collapse-title">{props.title}</span>
            {extraNode ? <span class="k-collapse-extra">{extraNode}</span> : null}
          </div>
          {panelNode}
        </div>
      );
    };
  },
});
export default CollapsePanel;
