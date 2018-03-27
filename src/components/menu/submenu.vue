<template>
<li :class="classes" @mouseover="openMenu" @mouseout="closeMenu">
  <div class="k-menu-title" @click="accordion" >
    <slot name="title"></slot>
    <i class="k-ion-ios-arrow-down"></i>
  </div>
  <transition name="dropdown">
    <ul class="k-menu-dropdown" v-show="visible" :style="styleDrop" ref="dom"><slot></slot></ul>
  </transition>
</li>
  
</template> 
<script>
import utils from "../../utils";
export default {
  name: "SubMenu",
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
      rootMenu: utils.findParent(this, "Menu")
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
      if (this.rootMenu.mode == "vertical") {
        style.height = this.height;
      }
      return style;
    }
  },
  methods: {
    accordion() {
      this.visible = !this.visible;
      setTimeout(() => {
        this.height = this.visible ? this.$refs.dom.scrollHeight + "px" : 0;
      }, 100);
      this.visible && this.rootMenu.setAccordion(this.name)
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