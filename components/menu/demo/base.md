<cn>
#### 顶部导航
水平的顶部导航菜单。
</cn>

```tpl
<template>
  <div>
    <Menu mode="horizontal" v-model="current">
      <MenuItem key="1" icon="md-mail">Navigation One</MenuItem>
      <MenuItem key="2" icon="ios-keypad" disabled>Navigation Two</MenuItem>
      <SubMenu key="3">
        <template slot="title">
          <Icon type="ios-settings" />Navigation - Submenu
        </template>
        <MenuGroup title="Item 1">
          <MenuItem key="3-1">Option 1</MenuItem>
          <MenuItem key="3-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem key="3-3">Option 1</MenuItem>
          <MenuItem key="3-4">Option 2</MenuItem>
        </MenuGroup>
      </SubMenu>
      <MenuItem key="4">
      <a href="https://k-ui.cn" target="_blank">Navigation -Link</a>
      </MenuItem>
    </Menu>
  </div>
</template>
<script> 
export default {
  data() {
    return {
      current: ['1']
    }
  },
}
</script> 
```
