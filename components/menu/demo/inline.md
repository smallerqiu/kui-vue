<cn>
#### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。
</cn>

```vue
<template>
  <div style="width:256px">
    <Menu v-model="current" :open-keys="openKeys" mode="inline">
      <SubMenu key="sub1" :icon="Mail" title="Navigation One">
        <MenuItem key="1-1" :icon="Heart">Option 1</MenuItem>
        <MenuItem key="1-2" :icon="Heart">Option 2</MenuItem>
        <MenuItem key="1-3" :icon="Heart">Option 3</MenuItem>
        <MenuItem key="1-4" :icon="Heart">Option 4</MenuItem>
      </SubMenu>
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
import { Mail, Heart, Settings } from "kui-icons";
export default {
  data() {
    return {
      Mail, Heart, Settings,
      current: ['1-1'],
      openKeys:['sub1']
    }
  },
}
</script>
```
