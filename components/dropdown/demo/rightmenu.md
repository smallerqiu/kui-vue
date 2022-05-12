<cn>
#### 右键菜单
默认是移入触发菜单，可以点击鼠标右键触发。
</cn>

```vue
<template>
  <Dropdown trigger="contextmenu" @click="handle">
  <div :style="{
        textAlign: 'center', 
        height: '200px',
        lineHeight: '200px',
        color: '#999',
      }" class="demo-back">Right Click on here</div>
    <Menu slot="content">
      <MenuItem key="news">New file</MenuItem>
      <MenuItem key="edit">Edit</MenuItem>
      <MenuItem key="save" icon="save">Save</MenuItem>
      <MenuItem key="cut" icon="cut">Cut</MenuItem>
      <MenuDivider />
      <MenuItem key="exit">Exit</MenuItem>
    </Menu>
  </Dropdown>
</template>

<script>
export default{
  methods:{
    handle({key}){
      this.$Message.info('Click on item '+key)
    }
  }
}
</script>
```