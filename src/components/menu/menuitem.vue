<template>
  <li :class="classes" @click="handle">
    <Icon :type="icon" v-if="icon"></Icon>
    <slot></slot>
  </li>
</template>
<script>
import Icon from "../icon";
import utils from "../../utils";
export default {
  name: "MenuItem",
  components: { Icon },
  props: {
    icon: String,
    name: { type: String, required: true }
  },
  data() {
    return {
      active: false,
      index:0,
      rootMenu : utils.findParent('Menu')
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
  mounted() {
    let parent = this.$parent;
    let pName = parent.$options.name;
    if ("Menu" == pName) {
      this.index = parent.length
      parent.items.push(this);
      this.active = parent.activeIndex == this.name;
    }
  },
  beforDistory(){

  },
  methods: {
    handle() {}
  }
};
</script>