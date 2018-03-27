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
      rootMenu:utils.findParent(this, "Menu")
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
  beforDistory() {},
  created(){
    // console.log(this.rootMenu.activeName)
    this.active = this.rootMenu.activeName==this.name
  },
  methods: {
    handle() {
      this.rootMenu.itemSelect(this.name);
    }
  }
};
</script>