import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  provide,
  inject,
} from "vue";

export default defineComponent({
  name: "Menu",
  props: {
    theme: String,
    mode: { type: String, default: "vertical" },
    selectedKeys: { type: Array, default: () => [] },
    accordion: Boolean,
    inlineCollapsed: Boolean,
    openKeys: { type: Array, default: () => [] },
  },
  setup(props, { emit, slots }) {
    const defaultSelectedKeys = ref(props.selectedKeys || []);
    const defaultOpenKeys = ref(props.openKeys || []);
    const currentMode = ref(props.mode);

    provide("menu-open-keys", defaultOpenKeys);
    provide("menu-selected-keys", defaultSelectedKeys);
    provide("menu-mode", currentMode);
    watch(
      () => props.selectedKeys,
      (value) => {
        defaultSelectedKeys.value = value;
      }
    );

    watch(
      () => props.mode,
      (value) => {
        currentMode.value = value;
      }
    );

    watch(
      () => props.openKeys,
      (value) => {
        defaultOpenKeys.value = value;
      }
    );

    watch(
      () => props.inlineCollapsed,
      (collapsed) => {
        // defaultOpenKeys.value = collapsed ? [] : originOpenKeys.value;
      }
    );

    const selectedKeysChange = (key, selected, keyPath) => {
      // console.log(key, selected, keyPath)
      if (selected) {
        defaultSelectedKeys.value = [...keyPath, key];
      } else {
        defaultSelectedKeys.value = defaultSelectedKeys.value.filter(
          (x) => x !== key
        );
      }
      emit("update:selectedKeys", defaultSelectedKeys.value);
      emit("select", key, keyPath);
    };

    const openKeysChange = (key, opened, keyPath) => {
      if (props.accordion) {
        defaultOpenKeys.value = opened ? [...keyPath, key] : keyPath;
      } else {
        if (!opened) {
          defaultOpenKeys.value = defaultOpenKeys.value.filter(
            (x) => x !== key
          );
        } else {
          defaultOpenKeys.value.push(key);
        }
      }
      emit("update:openKeys", defaultOpenKeys.value);
    };
    provide("openKeysChange", openKeysChange);
    provide("selectedKeysChange", selectedKeysChange);

    return () => {
      const preCls = "menu";
      const cls = [
        `k-${preCls} k-${preCls}-${currentMode.value}`,
        {
          [`k-${preCls}-inline-collapsed`]: props.inlineCollapsed,
        },
      ];
      return (
        <ul class={cls} theme-mode={props.theme}>
          {slots.default?.()}
        </ul>
      );
    };
  },
});
