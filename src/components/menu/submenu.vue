<template>
  <li :class="classes">
    <div class="k-menu-title" @click.stop="accrodion" @mouseover="openMenu" @mouseout="closeMenu">
      <slot name="title"></slot>
      <i class="k-ion-ios-arrow-down"></i>
    </div>
    <transition name="dropdown">
      <ul class="k-menu-dropdown" v-show="visible" :style="styleDrop" ref="dom" @mouseover="show">
        <slot></slot>
      </ul>
    </transition>
  </li>

</template> 
<script>
import emitter from '../../mixins/emitter'
export default {
  name: "SubMenu",
  mixins: [emitter],
  props: {
    icon: String,
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
    styleDrop() {
      let style = {};
      if (this.rootMenu.mode == "vertical") { style.height = this.height; }
      return style;
    }
  },
  mounted() {
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
        setTimeout(() => { this.height = this.visible ? this.$refs.dom.scrollHeight + "px" : 0; }, 100);
      }
    },
    accrodion() {
      this.visible = !this.visible
      setTimeout(() => { this.height = this.visible ? this.$refs.dom.scrollHeight + "px" : 0; }, 100);
      this.dispatch('Menu', 'menu-accrodion', this.name)
    },
    show() {
      clearTimeout(this.hideTime);
    },
    openMenu() {
      if (this.rootMenu.mode == "vertical") return;
      clearTimeout(this.hideTime);
      this.visible = true;
    },
    closeMenu() {
      if (this.rootMenu.mode == "vertical") return;
      this.hideTime = setTimeout(() => {
        this.visible = false;
      }, 300);
    }
  }
};
</script>