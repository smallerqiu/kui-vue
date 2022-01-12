<cn>
#### 多级菜单
传入的菜单里有多个层级。
</cn>

```vue
<template>
  <Dropdown>
    <Button theme="light">
      多级菜单 <Icon type="chevron-down" />
    </Button>
    <Menu slot="content">
      <MenuItem>1st menu item</MenuItem>
      <MenuItem>2nd menu item</MenuItem>
      <SubMenu key="test" title="sub menu">
        <MenuItem>3rd menu item</MenuItem>
        <MenuItem>4th menu item</MenuItem>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <MenuItem>5d menu item</MenuItem>
        <MenuItem>6th menu item</MenuItem>
      </SubMenu>
    </Menu>
  </Dropdown>
</template>
```