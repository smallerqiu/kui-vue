import { defineComponent, inject, computed } from 'vue';

export default defineComponent({
  name: 'MenuDivider',
  setup() {
    const Dropdown = inject('Dropdown', null);

    const preCls = computed(() => Dropdown ? 'dropdown-menu' : 'menu');

    return () => (
      <li class={`k-${preCls.value}-item-divider`} />
    );
  }
});