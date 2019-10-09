<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>
<script>
import emitter from '@/mixins/emitter'
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
      currentName: this.activeName,
      children: [],
      open_name: this.openName
    };
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
    setActived(name, openName) {
      this.children.forEach(child => {
        if (child.$options.name == 'MenuItem') {
          child.actived = child.name == name
        } else if (child.$options.name == 'SubMenu') {
          if (this.accordion && this.mode == 'vertical' && openName && child.name != openName) {
            child.visible = false
            return;
          }
          child.updateChild(name)
        } else if (child.$options.name == 'MenuGroup') {
          child.updateChild(name)
        }
      })
      this.currentName = name;
      this.$emit("select", name);
    },
    add(child) {
      let name = child.$options.name
      if (name == 'MenuItem') {
        if (child.name == this.currentName) {
          child.actived = true
        }
      } else if (name == 'SubMenu') {
        child.mode = this.mode
        child.accordion = this.accordion
        child.updateChild(this.currentName, this.open_name)
      } else if (name == 'MenuGroup') {
        child.accordion = this.accordion
        child.mode = this.mode
        child.updateChild(this.currentName)
      }
      this.children.push(child)

    },
    remove(child) {
      this.children.splice(this.children.indexOf(child), 1);
    }
  },
};
</script>