
export default {
  name: "Menu",
  props: {
    theme: String,
    mode: { type: String, default: "vertical" },
    value: { type: Array, default: () => [] },
    accordion: Boolean,
    inlineCollapsed: Boolean,
    openKeys: { type: Array, default: () => [] },
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
    Dropdown: { default: null }
  },
  provide() {
    return {
      Menu: this.Menu || this
    }
  },
  watch: {
    value(value) {
      this.selectedKeys = value
    },
    mode(mode) {
      this.currentMode = mode
    },
    inlineCollapsed(collapsed) {
      this.defaultOpenKeys = collapsed ? [] : this.originOpenKeys
    }
  },
  data() {
    return {
      selectedKeys: this.value || [],
      defaultOpenKeys: this.inlineCollapsed ? [] : this.openKeys || [],
      currentMode: this.mode,
      originOpenKeys: this.openKeys || [],
      originMode: this.mode
    };
  },
  // beforeMount() {
  //   if (this.inlineCollapsed) {
  //     this.defaultOpenKeys = []
  //     this.originOpenKeys = this.openKeys
  //   }
  // },
  render() {
    const { theme, currentMode, Dropdown } = this
    const preCls = Dropdown ? 'dropdown-menu' : 'menu';
    const cls = [`k-${preCls}  k-${preCls}-${currentMode}`,
    {
      [`k-${preCls}-inline-collapased`]: this.inlineCollapsed
    }];
    return (<ul class={cls} theme-mode={theme}>{this.$slots.default}</ul>)
  },
  methods: {
    openChange(openKeys) {
      this.defaultOpenKeys = openKeys
      if (!this.inlineCollapsed) {
        this.originOpenKeys = openKeys
      }
      this.$emit('open-change', openKeys)
    },
    handleClick(options) {
      let parent = this.SubMenu || this.Menu || this.Dropdown
      if (parent) {
        parent.handleClick(options)
      } else {
        this.selectedKeys = options.keyPath
        this.$emit('input', options.keyPath)
        this.$emit('click', options)
      }
    }
  },
};