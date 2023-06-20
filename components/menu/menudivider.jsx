import { getParent } from './utils.js'
export default {
  name: 'MenuDivider',
  inject: {
    Dropdown: { default: null },
  },
  render() {
    const preCls = this.Dropdown ? 'dropdown-menu' : 'menu';
    return <li class={`k-${preCls}-item-divider`} />
  }
}