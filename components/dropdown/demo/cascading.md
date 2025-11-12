<cn>
#### 多级菜单
传入的菜单里有多个层级。
</cn>

```vue
<template>
  <Dropdown :show="true">
    <Button theme="light">
      多级菜单
      <Icon :type="ChevronDown" />
    </Button>
    <template #overlay>
      <Menu @select="menuClick">
        <MenuItem key="1-1">1st menu item</MenuItem>
        <MenuItem key="1-2">2nd menu item</MenuItem>
        <SubMenu key="2" title="sub menu">
          <MenuItem key="2-1">3rd menu item</MenuItem>
          <MenuItem key="2-2">4th menu item</MenuItem>
          <SubMenu key="2-3" title="sub menu">
            <MenuItem key="2-3-1">3rd menu item</MenuItem>
            <MenuItem key="2-3-2">4th menu item</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled key="3">
          <MenuItem key="3-1">5d menu item</MenuItem>
          <MenuItem key="3-2">6th menu item</MenuItem>
        </SubMenu>
      </Menu>
    </template>
  </Dropdown>
</template>
<script setup>
import { ChevronDown } from "kui-icons";
const menuClick = ({ key }) => {
  console.log(key);
};
</script>
```
