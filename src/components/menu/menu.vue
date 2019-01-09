<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
import emitter from '../../mixins/emitter'
export default {
  name: "Menu",
  mixins: [emitter],
  props: {
    theme: { type: String, default: "light" },
    mode: { type: String, default: "vertical" },
    activeName: String,
    openName: String,
    accordion: Boolean,
    width: { type: [Number, String], default: 240 }
  },
  data() {
    return {
      activeIndex: this.activeName,
      items: [],
      submenus: [],
      open_name: this.openName
    };
  },
  watch: {
    activeIndex(name) {
      this.broadcast('MenuItem', 'menu-item-update', name)
      this.broadcast('SubMenu', 'menu-submenu-close', name)
    },
    open_name(name) {
      // console.log(name)
      if (this.accordion) {
        this.broadcast('SubMenu', 'menu-submenu-update', name)
      }
    }
  },
  computed: {
    classes() {
      return [
        "k-menu",
        {
          [`k-menu-${this.theme}`]: this.theme,
          [`k-menu-${this.mode}`]: this.mode
        }
      ];
    },
    styles() {
      return this.mode == "vertical" ? { width: this.width > 0 ? `${this.width}px` : this.width } : {};
    }
  },
  methods: {
    setAccordion(name) {
      this.open_name = name

    },
    itemSelect(name) {
      this.activeIndex = name;
      this.$emit("select", name);
    }
  },
  mounted() {
    this.$on('menu-select', this.itemSelect)
    this.$on('menu-accrodion', this.setAccordion)
  }
};
</script>