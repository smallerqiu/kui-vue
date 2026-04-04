import { ChevronUp } from "kui-icons";
import {
  Transition,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  watch,
  type DefineComponent,
  type ExtractPropTypes,
} from "vue";
import { getTransitionProp } from "../base/transition";
import Icon from "../icon";

const collapsePanelProps = {
  title: String,
  active: Boolean,
};

export type CollapsePanelProps = ExtractPropTypes<typeof collapsePanelProps>;

export default defineComponent({
  name: "CollapsePanel",
  props: collapsePanelProps,
  emits: ["expand"],
  setup(props, { slots, emit }) {
    const instance = getCurrentInstance();
    const expanded = ref(props.active);
    const rendered = ref(props.active);

    watch(
      () => props.active,
      (nv) => {
        rendered.value = true;
        nextTick(() => {
          expanded.value = nv;
        });
      }
    );

    const handleClick = () => {
      const key = instance?.vnode.key;
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
        <Transition {...transitionProps} duration={350} >
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
})as DefineComponent<CollapsePanelProps>;