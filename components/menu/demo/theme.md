<cn>
#### 主题
内建了两套主题 `light|dark`，默认 `light`。
</cn>

```vue
<template>
  <div style="width:256px">
    <Switch true-text="dark" false-text="light" @change="change" :checked="theme=='dark'"/>
    <br/>
    <br/>
    <Menu v-model="current" :open-keys="openKeys" :theme="theme" mode="inline">
      <MenuItem key="1-1" :icon="Mail">Option 1</MenuItem>
      <MenuItem key="1-2" :icon="Grid">Option 2</MenuItem>
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
<script>
import { Mail, Grid, Heart, Settings } from "kui-icons";
export default {
  data() {
    return {
      Mail, Grid, Heart, Settings,
      current: ['1-1'],
      openKeys:['sub2'],
      theme:'dark'
    }
  },
  methods:{
    change(checked){
      this.theme = checked ? 'dark' : 'light';
    }
  }
}
</script>
```
