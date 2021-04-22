<cn>
#### 缩起内嵌菜单
内嵌菜单可以被缩起/展开。
</cn>

```vue
<template>
  <div style="width:256px">
    <Button @click="change" :icon="collapsed?'list':'menu'" type="primary"></Button>
    <br/>
    <br/>
    <Menu v-model="current" :open-keys="openKeys" theme="dark" :inline-collapsed="collapsed" mode="inline">
      <MenuItem key="1-1" icon="mail">Option 1</MenuItem>
      <MenuItem key="1-2" icon="calendar"><span>Option 2</span></MenuItem>
      <SubMenu key="sub2" icon="keypad" title="Navigation Two">
        <MenuItem key="2-1">Option 5</MenuItem>
        <MenuItem key="2-2">Option 6</MenuItem>
        <SubMenu title="SubMenu" key="sub2-1" icon="keypad">
          <MenuItem key="2-3">Option 7</MenuItem>
          <MenuItem key="2-4">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
       <SubMenu key="sub3" icon="settings" title="Navigation Three">
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
      openKeys:['sub1'],
      collapsed: false
    }
  },
  methods:{
    change(){
      this.collapsed = !this.collapsed
    }
  }
}
</script>
```
