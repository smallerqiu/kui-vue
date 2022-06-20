import Icon from "../icon";
export default {
  name: 'BreadcrumbItem',
  props: {
    separator: { type: String, default: '/' },
    to: String,
    replace: Boolean,
    icon: [String, Array]
  },
  methods: {
    toPath() {
      this.to && this.replace ? this.$router.replace({ path: this.replace }) : this.$router.push({ path: this.to })
    }
  },
  render() {
    const { $slots, toPath, icon, separator } = this
    return (
      <span class="k-breadcrumb-item">
        {icon ? <Icon type={icon} /> : null}
        <span class="k-breadcrumb-link" onClick={toPath}>
          {$slots.default}
        </span>
        <span class="k-breadcrumb-separator">{separator}</span>
      </span>
    )
  }
} 