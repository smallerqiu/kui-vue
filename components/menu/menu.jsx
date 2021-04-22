
export default {
  name: "Menu",
  props: {
    theme: { type: String, default: "light" },
    mode: { type: String, default: "vertical" },
    value: { type: Array, default: () => [] },
    accordion: Boolean,
    inlineCollapsed: Boolean,
    verticalAffixed: Boolean,
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
    value(activeName) {
      this.selectedKeys = activeName
    },
    mode(mode) {
      this.currentMode = mode
    },
    inlineCollapsed(collapsed) {
      // if (this.defaultOpenKeys.length)
      // this.originOpenKeys = JSON.parse(JSON.stringify(this.defaultOpenKeys))

      if (!this.originMode) this.originMode = this.currentMode
      this.defaultOpenKeys = collapsed ? [] : this.originOpenKeys
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.currentMode = collapsed ? 'vertical' : this.originMode
      }, 300);
    }
  },
  data() {
    return {
      selectedKeys: this.value,
      defaultOpenKeys: this.openKeys,
      currentMode: this.mode,
      originOpenKeys: [],
      originMode: null
    };
  },
  render() {
    const { theme, currentMode, Dropdown } = this
    const preCls = Dropdown ? 'dropdown-menu' : 'menu';
    const cls = [`k-${preCls} k-${preCls}-${theme} k-${preCls}-${currentMode}`, {
      [`k-${preCls}-inline-collapased`]: this.inlineCollapsed
    }];
    return (<ul class={cls}>{this.$slots.default}</ul>)
  },
  methods: {
    openChange(openKeys) {
      this.defaultOpenKeys = openKeys
      this.$emit('open-change', openKeys)
    },
    handleClick(options) {
      let parent = this.SubMenu || this.Menu || this.Dropdown
      if (parent) {
        parent.handleClick(options)
      } else {
        this.selectedKeys = options.keyPath
        this.$emit('click', options)
      }
    }
  },
};