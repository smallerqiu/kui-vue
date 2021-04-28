<template>
  <section class="index">
    <header class="header">
      <div class="nav">
        <div class="nav-left">
          <div class="logo">
            <a href="/">
              <img :src="logo" alt="Vue K UIKIT">
              <span>K UIKIT</span>
              <sub>v 2.3.5</sub>
            </a>
          </div>
        </div>
        <div class="nav-right">
          <Menu mode="horizontal" active-name="home">
            <MenuItem name="home"><a href="/">首页</a></MenuItem>
            <MenuItem name="com"><a href="#/start">组件</a></MenuItem>
          </Menu>
          <Select mini v-model="v" width="100" @change="go">
            <Option value="2">v2.3.5</Option>
            <Option value="3">v3.x</Option>
          </Select>

          <Dropdown @click="go">
            <Button mini>更多
              <Icon type="ios-arrow-down" />
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="1"><a target="_blank" href="https://react.k-ui.cn">KUI for React</a></DropdownItem>
              <DropdownItem name="2"><a target="_blank" href="https://gitee.com/chuchur/kui-vue">源码</a></DropdownItem>
              <DropdownItem name="3"><a target="_blank" href="https://gitee.com/chuchur/kui-vue/issues">提交Bug</a></DropdownItem>
              <DropdownItem name="4"><a target="_blank" href="https://chuchur.com">Blog</a></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
    <section class="index-content">
      <div class="logo">K UI</div>
      <h1>一套基于Vue.js的桌面UI组件库</h1>
      <div class="btn-content">
        <Button class="start" @click="start" large>开始使用</Button>
        <Button icon="logo-github" @click="git" large>Github</Button>
      </div>
    </section>
    <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号
      </p>
    </footer>
  </section>
</template>
<script>
import logo from '../assets/favicon.png'
export default {
  data() {
    return {
      logo,
      v: 2
    }
  },
  methods: {
    go({ value }) {
      if (value == 3) {
        open('//k-ui.cn')
      }
    },
    start() {
      this.$router.push('/start')
    },
    git() {
      window.open('//gitee.com/chuchur/kui-vue')
    },
  }
};
</script>
