 
单独调试组件专用
 
<template>
  <div style="padding:0px;">
    <Menu mode="vertical" :theme='theme' active-name="1">
      <MenuItem name="1" icon="ios-speedometer">盘仪表</MenuItem>
      <SubMenu name="2">
        <template slot="title">
          <Icon type="ios-gift" />商品管理
        </template>
        <MenuItem name="2-1">商品信息</MenuItem>
        <MenuItem name="2-2">商品列表</MenuItem>
        <MenuItem name="2-3">商品新增</MenuItem>
        <SubMenu name="3-4">
          <template slot="title">商品管理</template>
          <MenuItem name="3-4-1">商品信息</MenuItem>
          <MenuItem name="3-4-2">商品列表</MenuItem>
        </SubMenu>
      </SubMenu>
      <!-- <SubMenu name="2">
            <template slot="title">
              <Icon type="ios-person" />用户管理
            </template>
            <MenuGroup title="超级管理">
              <MenuItem name="2-1">用户信息</MenuItem>
              <MenuItem name="2-2">用户列表</MenuItem>
            </MenuGroup>
            <MenuGroup title="普通管理">
              <MenuItem name="2-3">用户新增</MenuItem>
              <MenuItem name="2-4">用户筛选</MenuItem>
            </MenuGroup>
          </SubMenu> -->
      <MenuItem name="3" icon="ios-list-box">新闻管理</MenuItem>
      <MenuItem name="4" icon="ios-settings" disabled>系统设置</MenuItem>
    </Menu>
    <p>切换主题</p>
    <RadioGroup v-model="theme">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
      <Radio label="primary"></Radio>
    </RadioGroup>
  </div>

</template>

<script> 
export default {
  data() {
    return {
      theme: 'light',
    }
  },
  mounted() {
    return

  },
  methods: {
    test2() {
      this.a = true
    },
    test() {
      this.b = 3
    }
  }
}
</script>

