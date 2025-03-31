import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: "MenuGroup",
  props: {
    title: { type: String, required: true }
  },
  setup(props, { slots }) {
    const titleContent = computed(() => slots.title ? slots.title() : props.title);

    return () => (
      <li class="k-menu-item-group">
        <div class="k-menu-item-group-title">{titleContent.value}</div>
        <ul class="k-menu-item-group-list">
          {slots.default?.()}
        </ul>
      </li>
    );
  }
});