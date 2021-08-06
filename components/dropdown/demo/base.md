<cn>
#### 基础用法
最简单的下拉菜单。
</cn>

```vue
<template>
  <Dropdown>
    <a href="#">
      Hover me <Icon type="chevron-down" />
    </a>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>
  <Dropdown show-placement-arrow trigger="click" placement="bottom">
    <Button >
      show arrow <Icon type="chevron-down" />
    </Button>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>

  <Dropdown trigger="click" >
    <Button >
      Click me <Icon type="chevron-down" />
    </Button>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">3rd menu item</a>
      </MenuItem>
    </Menu>
  </Dropdown>
</template>

```