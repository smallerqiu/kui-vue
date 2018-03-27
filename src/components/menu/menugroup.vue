<template>
  <li class="k-menu-item-group">
    <div class="k-menu-item-group-title">{{title}}</div>
    <ul><slot></slot></ul>
  </li>
</template>
<script>
export default {
  name: "MenuGroup",
  props: {
    title: { type: String, required: true }
  }
};
</script>
