<cn>
### 顶部导航
水平的顶部导航菜单。
</cn>

```vue
<template>
  <div>
    <Menu mode="horizontal" v-model="current" :items="items" />
  </div>
</template>
<script setup>
import { Mail, Heart, Settings } from "kui-icons";
import { ref, h } from "vue";
const current = ref(["1"]);
const items = [
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
      { attrs: { href: "https://k-ui.cn", target: "_blank" } },
      "Navigation -Link"
    ),
    key: "4",
  },
];
</script>
```
