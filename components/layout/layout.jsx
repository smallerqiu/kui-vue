function createComponent(suffixCls, name) {
  return Component => {
    return {
      name,
      render() {
        const prop = {
          props: { suffixCls },
        }
        return (
          <Component {...prop}>{this.$slots.default}</Component>
        )
      }
    }
  }
}
const Base = {
  props: { suffixCls: String },
  render() {
    const { $slots, suffixCls } = this
    const prop = {
      class: `k-${suffixCls}`
    }
    return (
      <div {...prop}>{$slots.default}</div>
    )
  }
}

const Content = createComponent('layout-content', 'Content')(Base)
const Header = createComponent('layout-header', 'Header')(Base)
const Footer = createComponent('layout-footer', 'Footer')(Base)

const layoutBase = {
  props: { suffixCls: String },
  data() {
    return {
      siders: 0
    }
  },
  provide() {
    return {
      addSider: e => {
        this.siders++
      },
      removeSider: e => {
        this.siders--
      }
    }
  },
  computed: {
    classes() {
      const { suffixCls, siders } = this
      return [`k-${suffixCls}`, { 'k-layout-has-sider': siders > 0 }]
    }
  },
  render() {
    const { $slots, classes } = this
    const prop = {
      class: classes
    }
    return (
      <div {...prop}>{$slots.default}</div>
    )
  }
}

const Layout = createComponent('layout', 'Layout')(layoutBase)

const siderBase = {
  props: { suffixCls: String },
  inject: {
    addSider: { default: e => { } },
    removeSider: { default: e => { } }
  },
  mounted() {
    this.addSider()
  },
  beforeDestroy() {
    this.removeSider()
  },
  render() {
    const { $slots, suffixCls } = this
    const prop = {
      class: `k-${suffixCls}`
    }
    return (
      <div {...prop}>{$slots.default}</div>
    )
  }
}

const Sider = createComponent('layout-sider', 'Sider')(siderBase)

Layout.Sider = Sider
Layout.Content = Content
Layout.Header = Header
Layout.Footer = Footer

export default Layout