import Icon from "../icon";
import { getTranstionProp } from "../base/transition";
import { ChevronUp } from "kui-icons";
import { defineComponent, ref, watch, computed, Transition, getCurrentInstance, nextTick, inject } from "vue";
import { withInstall } from '../utils/vue';
const CollapsePanel = defineComponent({
  name: "CollapsePanel",
  props: {
    title: String,
    actived: Boolean,
  },
  setup(ps, { slots, emit }) {
    const instance = getCurrentInstance();
    const expaned = ref(ps.actived);
    const rendered = ref(ps.actived);

    watch(
      () => ps.actived,
      (nv, no) => {
        rendered.value = true;
        nextTick(() => {
          expaned.value = nv;
        });
      }
    );

    const handleClick = () => {
      emit("expand", instance.vnode.key); 
    };

    return () => {
      const classes = [
        "k-collapse-item",
        {
          ["k-collapse-item-active"]: expaned.value,
        },
      ];
      const extraNode = slots.extra?.();
      const aniprop = getTranstionProp("k-collaplse-slide");

      const panelNode = rendered.value ? (
        <Transition {...aniprop}>
          <div class="k-collapse-content" v-show={expaned.value}>
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