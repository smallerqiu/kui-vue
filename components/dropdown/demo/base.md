<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Dropdown>
    <a href="#">
      Hover me <Icon type="ios-arrow-down" />
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
  <Dropdown show-placement-arrow >
    <Button >
      show arrow <Icon type="ios-arrow-down" />
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
      Click me <Icon type="ios-arrow-down" />
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