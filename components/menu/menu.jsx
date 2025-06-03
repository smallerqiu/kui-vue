import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  provide,
  inject,
  onMounted,
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
    const currentInlineCollapsed = ref(props.inlineCollapsed);
    const tempOpenKeys = ref(props.openKeys || []);

    provide("menu-open-keys", defaultOpenKeys);
    provide("menu-selected-keys", defaultSelectedKeys);
    provide("menu-mode", currentMode);
    provide("menu-inline-collapsed", currentInlineCollapsed);
    const dropdown = inject("dropdown", null);

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
        setCollapsed(value === "vertical");
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
        currentInlineCollapsed.value = collapsed;
        setCollapsed(collapsed);
      }
    );
    onMounted(() => {
      setCollapsed(props.inlineCollapsed);
    });

    const setCollapsed = (collapsed) => {
      if (collapsed) {
        if (defaultOpenKeys.value.length > 0) {
          tempOpenKeys.value = defaultOpenKeys.value;
        }
        defaultOpenKeys.value = [];
      } else {
        defaultOpenKeys.value = tempOpenKeys.value;
      }
    };
    const dropdownMenuSelected = inject("dropdown-menu-selected", null);
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
      emit("select", { key, keyPath });

      if (
        currentMode.value == "horizontal" ||
        currentMode.value == "vertical" ||
        currentInlineCollapsed.value
      ) {
        if (defaultOpenKeys.value.length > 0) {
          tempOpenKeys.value = defaultOpenKeys.value;
        }
        defaultOpenKeys.value = [];
      }
      dropdownMenuSelected?.({ key, keyPath });
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
      const preCls = dropdown ? "dropdown-menu" : "menu";
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
