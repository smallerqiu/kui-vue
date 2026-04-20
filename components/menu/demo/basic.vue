<template>
  <div>
    <Menu mode="horizontal" v-model="current" :items="items" />
  </div>
</template>
<script setup lang="ts">
import { Heart, Mail, Settings } from "kui-icons";
import type { MenuOptionsProps } from "kui-vue";
import { h, ref } from "vue";
const current = ref(["1"]);
const items: MenuOptionsProps[] = [
  { title: "Navigation One", key: "1", icon: Mail },
  { title: "Navigation Two", key: "2", icon: Heart, disabled: true },
  {
    title: "Navigation - Submenu",
    key: "3",
    icon: Settings,
    children: [
      { title: "Option 1", key: "3-1" },
      { title: "Option 2", key: "3-2" },
      { title: "Option 1", key: "3-3" },
      { title: "Option 2", key: "3-4" },
      {
        title: "Submenu",
        key: "3-5",
        children: [
          { title: "Option 1", key: "3-5-1" },
          { title: "Option 2", key: "3-5-2" },
          { title: "Option 1", key: "3-5-3" },
          { title: "Option 2", key: "3-5-4" },
        ],
      },
    ],
  },
  {
    title: h(
      "a",
      { href: "https://k-ui.cn", target: "_blank" },
      { default: () => "Navigation -Link" }
    ),
    key: "4",
  },
];
</script>
