
export default {
  name: "Menu",
  props: {
    theme: { type: String, default: "light" },
    mode: { type: String, default: "inline" },
    value: { type: Array, default: () => [] },
    accordion: Boolean,
    openKeys: { type: Array, default: () => [] },
    width: { type: [Number, String], default: 240 }
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null }
  },
  provide() {
    return {
      Menu: this
    }
  },
  data() {
    return {
      selectedKeys: this.value,
      defaultOpenKeys: this.openKeys
    };
  },
  render() {
    const { theme, mode } = this
    const cls = [
      "k-menu",
      {
        [`k-menu-${theme}`]: theme == 'dark',
        [`k-menu-${mode}`]: mode
      }
    ];
    return (<ul class={cls}>{this.$slots.default}</ul>)
  },
  methods: {
    openChange(openKeys) {
      this.defaultOpenKeys = openKeys
      this.$emit('open-change', openKeys)
    },
    handleClick(options) {
      let parent = this.SubMenu || this.Menu
      if (parent) {
        parent.handleClick(options)
      } else {
        this.selectedKeys = options.keyPath
        this.$emit('click', options)
      }
    }
  },
}; 