<cn>
### 切换菜单类型
展示动态切换模式。
</cn>

```vue
<template>
  <div>
    <KSwitch @change="changeMode" v-model="checked" /> Change Mode
    <KSwitch true-text="dark" false-text="light" @change="changeTheme" /> Change
    Theme
    <br />
    <br />
    <Menu
      v-model="current"
      :openKeys="openKeys"
      :theme="theme"
      :mode="mode"
      style="width:256px"
    >
      <MenuItem key="1-1" :icon="Mail">Option 1</MenuItem>
      <MenuItem key="1-2" :icon="Grid"><span>Option 2</span></MenuItem>
      <SubMenu key="sub2" :icon="Heart" title="Navigation Two">
        <MenuItem key="2-1">Option 5</MenuItem>
        <MenuItem key="2-2">Option 6</MenuItem>
        <SubMenu key="sub2-1" title="SubMenu">
          <MenuItem key="2-3">Option 7</MenuItem>
          <MenuItem key="2-4">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub3" :icon="Settings" title="Navigation Three">
        <MenuItem key="3-1">Option 9</MenuItem>
        <MenuItem key="3-2">Option 10</MenuItem>
        <MenuItem key="3-3">Option 11</MenuItem>
        <MenuItem key="3-4">Option 12</MenuItem>
      </SubMenu>
    </Menu>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Mail, Heart, Settings, Grid } from "kui-icons";
const current = ref(["1-1"]);
const openKeys = ref(["sub2"]);
const mode = ref("inline");
const theme = ref("light");
const checked = ref(false);

const changeMode = (checked) => {
  mode.value = checked ? "vertical" : "inline";
};
const changeTheme = (checked) => {
  theme.value = checked ? "dark" : "light";
};
</script>
```
