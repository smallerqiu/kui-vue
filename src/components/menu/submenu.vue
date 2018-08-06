<template>
  <li :class="classes" @mouseover="openMenu" @mouseout="closeMenu">
    <div class="k-menu-title" @click.stop="accrodion">
      <slot name="title"></slot>
      <i class="k-ion-ios-arrow-down k-menu-arrow"></i>
    </div>
    <Collapse>
      <ul class="k-menu-dropdown" v-show="visible">
        <slot></slot>
      </ul>
    </Collapse>
  </li>
</template> 
<script>
import Collapse from '../collapse/collapse.js'
import emitter from '../../mixins/emitter'
export default {
  name: "SubMenu",
  mixins: [emitter],
  components: { Collapse },
  props: {
    name: { type: String, required: true }
  },
  data() {
    return {
      active: false,
      visible: false,
      height: 0,
      hideTime: null,
      rootMenu: this.getParent("Menu"),
    };
  },
  computed: {
    classes() {
      return [
        "k-menu-submenu",
        {
          ["k-menu-item-active"]: this.active,
          ["k-menu-item-opened"]: this.visible
        }
      ];
    },
  },
  mounted() {
    this.visible = this.rootMenu.openName == this.name && this.rootMenu.mode != 'horizontal'
    this.$on('menu-submenu-update', this.update)
    this.$on('menu-submenu-close', this.close)
  },
  methods: {
    close() {
      if (this.rootMenu.mode == "vertical") return;
      this.visible = false;
      let childs = this.getChilds(this, 'MenuItem')
      this.active = childs.filter(c => c.active).length > 0
    },
    update(name) {
      if (name != this.name && this.visible) {
        //其他的折叠
        this.visible = !this.visible
      }
    },
    accrodion() {
      this.visible = !this.visible
      this.dispatch('Menu', 'menu-accrodion', this.name)
    },
    openMenu() {
      if (this.rootMenu.mode == "vertical") return;
      this.$nextTick(() => this.visible = true)
    },
    closeMenu() {
      if (this.rootMenu.mode == "vertical") return;
      this.$nextTick(() => this.visible = false)
    }
  }
};
</script>