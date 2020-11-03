<cn>
#### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。
</cn>

```vue
<template>
  <div style="width:256px">
    <Menu v-model="current" :open-keys="openKeys" mode="inline">
      <SubMenu key="sub1">
        <template slot="title">
          <Icon type="md-mail" />Navigation One
        </template>
        <MenuGroup title="Item 1">
          <MenuItem key="1-1">Option 1</MenuItem>
          <MenuItem key="1-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem key="1-3">Option 3</MenuItem>
          <MenuItem key="1-4">Option 4</MenuItem>
        </MenuGroup>
      </SubMenu>
      <SubMenu key="sub2">
        <template slot="title">
          <Icon type="ios-keypad" />Navigation Two
        </template>
          <MenuItem key="2-1">Option 5</MenuItem>
          <MenuItem key="2-2">Option 6</MenuItem>
        <SubMenu title="Item 2" key="sub2-1">
          <template slot="title">
            <Icon type="ios-keypad" />SubMenu
          </template>
          <MenuItem key="2-3">Option 7</MenuItem>
          <MenuItem key="2-4">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
       <SubMenu key="sub3">
        <template slot="title">
          <Icon type="ios-settings" />Navigation Three
        </template>
        <MenuItem key="3-1">Option 9</MenuItem>
        <MenuItem key="3-2">Option 10</MenuItem>
        <MenuItem key="3-3">Option 11</MenuItem>
        <MenuItem key="3-4">Option 12</MenuItem>
      </SubMenu>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['1-1'],
      openKeys:['sub1']
    }
  },
}
</script>
```
