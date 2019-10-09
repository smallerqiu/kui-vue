<template>
  <li :class="classes" @click.stop="handle">
    <Icon :type="icon" v-if="icon"></Icon>
    <slot></slot>
  </li>
</template>
<script>
import Icon from "../icon";
import emitter from '@/mixins/emitter'
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
      actived: false,
      // index:0,
    };
  },
  computed: {
    classes() {
      return ["k-menu-item", { ["k-menu-item-actived"]: this.actived }];
    }
  },
  beforDistory() {
    let parentName = this.$parent.$options.name
    if (parentName == 'Menu' || parentName == 'SubMenu' || parentName == 'MenuGroup') {
      this.$parent.remove(this)
    }
  },
  mounted() {
    let parentName = this.$parent.$options.name
    if (parentName == 'Menu' || parentName == 'SubMenu' || parentName == 'MenuGroup') {
      this.$parent.add(this)
    }
  },
  methods: {
    handle() {
      this.$parent.setActived(this.name)
    }
  }
};
</script>