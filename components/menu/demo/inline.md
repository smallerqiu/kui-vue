<cn>
### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。
</cn>
<en>
### Inline Menu
Vertical menu, with submenus embedded within the menu area.
</en>

```vue
<template>
  <div style="width:256px">
    <Menu
      v-model="current"
      :openKeys="openKeys"
      mode="inline"
      @openChange="openChange"
      :items="items"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Mail, Heart, Settings } from "kui-icons";
const current = ref(["1-1"]);
const openKeys = ref(["sub1"]);
const openChange = (openKeys) => {
  console.log(openKeys);
};
const items = [
  {
    key: "sub1",
    icon: Mail,
    title: "Navigation One",
    children: [
      { key: "1-1", icon: Heart, title: "Option " },
      { key: "1-2", icon: Heart, title: "Option 2" },
      { key: "1-3", icon: Heart, title: "Option 3" },
      { key: "1-4", icon: Heart, title: "Option 4" },
    ],
  },
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
