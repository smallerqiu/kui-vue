import { getParent } from './utils.js'
export default {
  name: 'MenuDivider',
  inject: {
    Menu: { default: null },
  },
  render() {
    let root = null;
    if (this.Menu) {
      root = getParent(this.Menu, 'Menu')
    }
    const preCls = (root && root.$options.propsData.parentName == 'dropdown') ? 'dropdown-menu' : 'menu';
    return <li class={`k-${preCls}-item-divider`} />
  }
}