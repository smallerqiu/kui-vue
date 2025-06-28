import { defineComponent, computed } from "vue";
import { withInstall } from '../utils/vue';

const MenuGroup = defineComponent({
  name: "MenuGroup",
  props: {
    title: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () => {
      const titleNode = props.title || slots.title?.();
      return (
        <li class="k-menu-item-group">
          <div class="k-menu-item-group-title">{titleNode}</div>
          <ul class="k-menu-item-group-list">{slots.default?.()}</ul>
        </li>
      );
    };
  },
});
export default withInstall(MenuGroup);
