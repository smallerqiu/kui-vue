import { defineComponent, ref, reactive, computed, watch, provide, inject } from 'vue';

export default defineComponent({
  name: "Menu",
  props: {
    theme: String,
    mode: { type: String, default: "vertical" },
    value: { type: Array, default: () => [] },
    accordion: Boolean,
    inlineCollapsed: Boolean,
    openKeys: { type: Array, default: () => [] },
  },
  setup(props, { emit, slots }) {
    const Menu = inject('Menu', null);
    const SubMenu = inject('SubMenu', null);
    const Dropdown = inject('Dropdown', null);

    const selectedKeys = ref(props.value || []);
    const defaultOpenKeys = ref(props.inlineCollapsed ? [] : props.openKeys || []);
    const currentMode = ref(props.mode);
    const originOpenKeys = ref(props.openKeys || []);
    const originMode = ref(props.mode);

    provide('Menu', Menu || this);

    watch(() => props.value, (value) => {
      selectedKeys.value = value;
    });

    watch(() => props.mode, (mode) => {
      currentMode.value = mode;
    });

    watch(() => props.inlineCollapsed, (collapsed) => {
      defaultOpenKeys.value = collapsed ? [] : originOpenKeys.value;
    });

    const preCls = computed(() => Dropdown ? 'dropdown-menu' : 'menu');
    const cls = computed(() => [
      `k-${preCls.value} k-${preCls.value}-${currentMode.value}`,
      {
        [`k-${preCls.value}-inline-collapsed`]: props.inlineCollapsed
      }
    ]);

    const openChange = (openKeys) => {
      defaultOpenKeys.value = openKeys;
      if (!props.inlineCollapsed) {
        originOpenKeys.value = openKeys;
      }
      emit('open-change', openKeys);
    };

    const handleClick = (options) => {
      let parent = SubMenu || Menu || Dropdown;
      if (parent) {
        parent.handleClick(options);
      } else {
        selectedKeys.value = options.keyPath;
        emit('input', options.keyPath);
        emit('click', options);
      }
    };

    return () => (
      <ul class={cls.value} theme-mode={props.theme}>
        {slots.default?.()}
      </ul>
    );
  }
});