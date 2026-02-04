import Icon from "../icon";
import { getTransitionProp } from "../base/transition";
import { ChevronUp } from "kui-icons/dist/icons";
import { defineComponent, ref, watch, Transition, getCurrentInstance, nextTick } from "vue";
import { withInstall } from "../utils/vue";
const CollapsePanel = defineComponent({
  name: "CollapsePanel",
  props: {
    title: String,
    active: Boolean,
  },
  setup(ps, { slots, emit }) {
    const instance = getCurrentInstance();
    const expanded = ref(ps.active);
    const rendered = ref(ps.active);

    watch(
      () => ps.active,
      (nv, no) => {
        rendered.value = true;
        nextTick(() => {
          expanded.value = nv;
        });
      }
    );

    const handleClick = () => {
      const key = instance.vnode.key; //for 3
      emit("expand", key);
    };

    return () => {
      const classes = [
        "k-collapse-item",
        {
          ["k-collapse-item-active"]: expanded.value,
        },
      ];
      const extraNode = slots.extra?.();
      const transitionProps = getTransitionProp("k-collapse-slide");

      const panelNode = rendered.value ? (
        <Transition {...transitionProps} time="350">
          <div class="k-collapse-content" v-show={expanded.value}>
            <div class="k-collapse-content-box">{slots.default?.()}</div>
          </div>
        </Transition>
      ) : null;
      return (
        <div class={classes}>
          <div class="k-collapse-header" onClick={handleClick}>
            <Icon type={ChevronUp} class="k-collapse-arrow" />
            <span class="k-collapse-title">{ps.title}</span>
            {extraNode ? <span class="k-collapse-extra">{extraNode}</span> : null}
          </div>
          {panelNode}
        </div>
      );
    };
  },
});
export default withInstall(CollapsePanel);
