<cn>
#### 右键菜单
默认是移入触发菜单，可以点击鼠标右键触发。
</cn>

```vue
<template>
  <Dropdown trigger="contextmenu">
  <div :style="{
        textAlign: 'center',
        background: '#f5f5f5',
        height: '200px',
        lineHeight: '200px',
        color: '#999',
      }">Right Click on here</div>
    <Menu slot="content">
      <MenuItem>
        <a href="javascript:;">New file</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:;">Eidt</a>
      </MenuItem>
      <MenuItem icon="ios-save">
        <a href="javascript:;">Save</a>
      </MenuItem>
      <MenuItem icon="ios-cut">
        <a href="javascript:;">Cut</a>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <a href="javascript:;">Exit</a>
      </MenuItem>
    </Menu>
  </Dropdown>
</template>

```