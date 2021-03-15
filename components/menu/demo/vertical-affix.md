<cn>
#### 收藏模式
适用于菜单单繁杂的情况,可以尝试,把重要的经常使用的功能收藏起来直接展示,方便查找和使用
</cn>

```vue
<template>
  <div style="width:256px">
    <k-switch true-text="dark" false-text="light" @change="change" :checked="theme=='dark'"/>
    <br/>
    <br/>
    <Menu v-model="current" mode="vertical" vertical-affixed :theme="theme">
      <SubMenu key="sub1">
        <template slot="title">
          <Icon type="keypad" />Navigation One
        </template>
          <MenuItem key="1-1">Option 1</MenuItem>
          <MenuItem key="1-2">Option 2</MenuItem>
          <MenuItem key="1-3" affixed>Option 3</MenuItem>
          <MenuItem key="1-4" affixed>Option 4</MenuItem>
          <MenuItem key="1-5" affixed>Option 5</MenuItem>
          <MenuItem key="1-6" affixed>Option 6</MenuItem>
          <MenuItem key="1-7">Option 7</MenuItem>
          <MenuItem key="1-8">Option 8</MenuItem>
          <MenuItem key="1-9">Option 9</MenuItem>
      </SubMenu>
      <SubMenu key="sub2">
        <template slot="title">
          <Icon type="keypad" />Navigation Two
        </template>
          <MenuItem key="2-1">Option 1</MenuItem>
          <MenuItem key="2-2">Option 2</MenuItem>
          <MenuItem key="2-3" affixed>Option 3</MenuItem>
          <MenuItem key="2-4" affixed>Option 4</MenuItem>
          <MenuItem key="2-5" affixed>Option 5</MenuItem>
          <MenuItem key="2-6" affixed>Option 6</MenuItem>
          <MenuItem key="2-7">Option 7</MenuItem>
      </SubMenu>
       <SubMenu key="sub3">
        <template slot="title">
          <Icon type="settings" />Navigation Three
        </template>
        <MenuItem key="3-1">Option 1</MenuItem>
        <MenuItem key="3-2" affixed>Option 2</MenuItem>
        <MenuItem key="3-3" affixed>Option 3</MenuItem>
        <MenuItem key="3-4">Option 4</MenuItem>
      </SubMenu>
       <SubMenu key="sub4">
        <template slot="title">
          <Icon type="settings" />Navigation Four
        </template>
        <MenuItem key="4-1">Option 1</MenuItem>
        <MenuItem key="4-2">Option 2</MenuItem>
        <MenuItem key="4-3" affixed>Option 3</MenuItem>
        <MenuItem key="4-4" affixed>Option 4</MenuItem>
      </SubMenu>
       <SubMenu key="sub5">
        <template slot="title">
          <Icon type="settings" />Navigation Five
        </template>
        <MenuItem key="5-1" affixed>Option 1</MenuItem>
        <MenuItem key="5-2" affixed>Option 2</MenuItem>
        <MenuItem key="5-3" affixed>Option 3</MenuItem>
        <MenuItem key="5-4" affixed>Option 4</MenuItem>
      </SubMenu>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['1-1'],
      theme:'dark'
    }
  },
  methods:{
    change(checked){
      this.theme = checked ? 'dark' : 'light';
    }
  }
}
</script>
```
