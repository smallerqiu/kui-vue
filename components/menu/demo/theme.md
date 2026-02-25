<cn>
### 主题
内建了两套主题 `light|dark`，默认 `light`。
</cn>
<en>
### Theme
Two built-in themes: `light|dark`, defaulting to `light`.
</en>

```vue
<template>
  <div style="width:256px">
    <KSwitch true-text="dark" false-text="light" @change="change" :checked="theme == 'dark'" />
    <br />
    <br />
    <Menu v-model="current" :openKeys="openKeys" :theme="theme" mode="inline" :items="items" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Mail, Grid, Heart, Settings } from "kui-icons";
const current = ref(["1-1"]);
const openKeys = ref(["sub2"]);
const theme = ref("dark");

const change = (checked) => {
  theme.value = checked ? "dark" : "light";
};
const items = [
  { key: "1-1", icon: Mail, title: "Option 1" },
  { key: "1-2", icon: Grid, title: "Option 2" },
  {
    key: "sub2",
    icon: Heart,
    title: "Navigation Two",
    children: [
      { key: "2-1", title: "Option 5" },
      { key: "2-2", title: "Option 6" },
      {
        key: "sub2-1",
        title: "SubMenu",
        children: [
          { key: "2-3", title: "Option 7" },
          { key: "2-4", title: "Option 8" },
        ],
      },
    ],
  },
  {
    key: "sub3",
    icon: Settings,
    title: "Navigation Three",
    children: [
      { key: "3-1", title: "Option 9" },
      { key: "3-2", title: "Option 10" },
      { key: "3-3", title: "Option 11" },
      { key: "3-4", title: "Option 12" },
    ],
  },
];
</script>
```
