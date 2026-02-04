<cn>
### 只展开当前父级菜单
点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
</cn>

```vue
<template>
  <div style="width:256px">
    <Menu
      v-model="current"
      :openKeys="openKeys"
      @open-change="openChange"
      accordion
      mode="inline"
      :items="items"
    />
  </div>
</template>
<script setup>
import { Mail, Heart, Settings } from "kui-icons";
import { ref } from "vue";
const current = ref(["1-1"]);
const openKeys = ref(["sub1"]);

const openChange = (openKeys) => {
  console.log(openKeys);
};

const items = [
  {
    title: "Navigation One",
    key: "sub1",
    icon: Mail,
    children: [
      { title: "Option 1", key: "1-1" },
      { title: "Option 2", key: "1-2" },
      { title: "Option 3", key: "1-3" },
      { title: "Option 4", key: "1-4" },
    ],
  },
  {
    title: "Navigation Two",
    key: "sub2",
    icon: Heart,
    children: [
      { title: "Option 5", key: "2-1" },
      { title: "Option 6", key: "2-2" },
      {
        title: "Submenu",
        key: "sub2-1",
        children: [
          { title: "Option 7", key: "2-1-1" },
          { title: "Option 8", key: "2-1-2" },
        ],
      },
    ],
  },
  {
    title: "Navigation Three",
    key: "sub3",
    icon: Settings,
    children: [
      { title: "Option 9", key: "3-1" },
      { title: "Option 10", key: "3-2" },
      { title: "Option 11", key: "3-3" },
      { title: "Option 12", key: "3-4" },
    ],
  },
];
</script>
```
