<template>
  <li :class="classes" @click.stop="handle">
    <Icon :type="icon" v-if="icon"></Icon>
    <slot></slot>
  </li>
</template>
<script>
import Icon from "../icon";
import emitter from '../../mixins/emitter'
export default {
  name: "MenuItem",
  components: { Icon },
  mixins: [emitter],
  props: {
    icon: String,
    name: { type: String, required: true }
  },
  data() {
    return {
      active: false,
      // index:0,
    };
  },
  computed: {
    classes() {
      return [
        "k-menu-item",
        {
          ["k-menu-item-active"]: this.active
        }
      ];
    }
  },
  beforDistory() { },
  mounted() {
    this.active = this.getParent('Menu').activeName == this.name
    this.$on('menu-item-update', this.update)
  },
  methods: {
    update(name) {
      this.active = this.name == name
    },
    handle() {
      this.active = true
      this.dispatch('Menu', 'menu-select', this.name)
      this.dispatch('SubMenu', 'menu-submenu-close', this.name)
    }
  }
};
</script>