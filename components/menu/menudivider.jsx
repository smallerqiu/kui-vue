import { withInstall } from '../utils/vue'
const MenuDivider = {
  name: 'MenuDivider',
  inject: {
    Dropdown: { default: null },
  },
  render() {
    const preCls = this.Dropdown ? 'dropdown-menu' : 'menu';
    return <li class={`k-${preCls}-item-divider`} />
  }
}

export default withInstall(MenuDivider)