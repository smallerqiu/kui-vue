<template>
  <li class="k-menu-item-group">
    <div class="k-menu-item-group-title">{{title}}</div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "MenuGroup",
  props: {
    title: { type: String, required: true }
  },
  data() {
    return {
      actived: false,
      mode: null,
      children: []
    }
  },
  mounted() {
    let parentName = this.$parent.$options.name
    if (parentName == 'Menu' || parentName == 'SubMenu') {
      this.$parent.add(this)
    }
  },
  beforeDestroy() {
    let parentName = this.$parent.$options.name
    if (parentName == 'Menu' || parentName == 'SubMenu') {
      this.$parent.remove(this)
    }
  },
  methods: {
    updateChild(activeName) {
      this.children.forEach(child => {
        child.actived = activeName == child.name
      })
    },
    setActived(activeName) {
      this.$parent.setActived(activeName)
    },
    add(child) {
      this.children.push(child)
    },
    remove(child) {
      this.children.splice(this.children.indexOf(child), 1)
    },
  },
};
</script>
