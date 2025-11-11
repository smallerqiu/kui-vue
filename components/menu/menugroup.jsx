
import { withInstall } from '../utils/vue'
const MenuGroup = {
  name: "MenuGroup",
  props: {
    title: { type: String, required: true }
  },
  render() {
    return (
      <li class="k-menu-item-group">
        <div class="k-menu-item-group-title">{this.$slots.title || this.title}</div>
        <ul class="k-menu-item-group-list">
          {this.$slots.default}
        </ul>
      </li>
    )
  },
}
export default withInstall(MenuGroup)