<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
import utils from "../../utils";
export default {
  name: "Menu",
  props: {
    theme: { type: String, default: "light" },
    mode: { type: String, default: "vertical" },
    activeName: String,
    accordion: Boolean,
    width: { type: [Number, String],default:240 }
  },
  data() {
    return {
      activeIndex: this.activeName,
      items: [],
      submenus: []
    };
  },
  watch: {
    activeIndex(name) {
      let items = this.$children;
      items.map((x, i) => {
        // console.log(x.$options.name)
        if (x.$options.name == "MenuItem") {
          x.active = x.name == name;
          // x.name == name && (this.activeIndex = name);
        } else if (x.$options.name == "SubMenu") {
          let sub = utils.findChilds(x, "MenuItem");

          sub.map(y => {
            y.active = y.name == name;
            // y.name == name && (this.activeIndex = name);
          });
          x.active =
            sub.filter(s => {
              return s.active == true;
            }).length > 0;
          x.closeMenu();
        } else if (x.$options.name == "MenuGroup") {
          let sub = utils.findChilds(x, "MenuItem");
          sub.map(y => {
            y.active = y.name == name;
            // y.name == name && (this.activeIndex = name);
          });
        }
      });
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
      return this.mode == "vertical" ? { width: this.width>0?`${this.width}px`:this.width  } : {};
    }
  },
  methods: {
    setAccordion(name) {
      if (this.accordion) {
        let sub = utils.findChilds(this, "SubMenu");
        sub.map(x => {
          if (x.name != name && x.visible) x.accordion();
        });
      }
    },
    itemSelect(name) {
      // let item = utils.findChilds(this, "MenuItem");
      this.activeIndex = name;
      this.$emit("onSelect", name);
    }
  },
  mounted() {}
};
</script>