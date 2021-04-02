<cn>
#### 切换菜单类型
展示动态切换模式。
</cn>

```vue
<template>
  <div>
    <Switch @change="changeMode"/> Change Mode
    <Switch true-text="dark" false-text="light" @change="changeTheme"/> Change Theme
    <br/>
    <br/>
    <Menu v-model="current" :open-keys="openKeys" :theme="theme" :mode="mode" :style="{width:mode=='horizontal'?null:'256px'}">
      <MenuItem key="1-1" icon="mail">Option 1</MenuItem>
      <MenuItem key="1-2" icon="calendar">Option 2</MenuItem>
      <SubMenu key="sub2">
        <template slot="title">
          <Icon type="keypad" />Navigation Two
        </template>
          <MenuItem key="2-1">Option 5</MenuItem>
          <MenuItem key="2-2">Option 6</MenuItem>
        <SubMenu title="Item 2" key="sub2-1">
          <template slot="title">
            <Icon type="keypad" />SubMenu
          </template>
          <MenuItem key="2-3">Option 7</MenuItem>
          <MenuItem key="2-4">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
       <SubMenu key="sub3">
        <template slot="title">
          <Icon type="settings" />Navigation Three
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
      openKeys:['sub1'],
      theme:'light',
      mode:'inline'
    }
  },
  methods:{
    changeMode(checked){
      this.mode = checked ? 'vertical' : 'inline'
    },
    changeTheme(checked){
      this.theme = checked ? 'dark' : 'light';
    }
  }
}
</script>
```