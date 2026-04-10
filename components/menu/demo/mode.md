<cn>
### 切换菜单类型
展示动态切换模式。
</cn>
<en>
### Switch Menu Type
Demonstrates dynamic mode switching.
</en>

```vue
<template>
  <div>
    <Space>
      <Button @click="changeMode">Change Mode</Button>
      <Button @click="changeTheme"> Change Theme </Button>
    </Space>
    <br />
    <br />
    <Menu
      v-model="current"
      :openKeys="openKeys"
      :theme="theme"
      :mode="mode"
      style="width:256px"
      :items="items"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Mail, Heart, Settings, Grid } from "kui-icons";
const current = ref(["1-1"]);
const openKeys = ref(["sub2"]);
const mode = ref("inline");
const theme = ref("light");

const changeMode = () => {
  mode.value = mode.value == "inline" ? "vertical" : "inline";
};
const changeTheme = () => {
  theme.value = theme.value == "light" ? "dark" : "light";
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
