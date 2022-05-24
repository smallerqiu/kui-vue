<template>
  <Header class="header">
    <div class="logo">
      <a href="/">
        <Icon type="logo-kui" />K UIKIT
        <sub>v {{version}}</sub>
      </a>
    </div>
    <Divider type="vertical" />
    <div class="search-component">
      <Select placeholder="搜索组件..."
        shape="circle"
        icon="search"
        theme="light"
        :showArrow="false"
        filterable
        v-model="key"
        @change="change"
        :transfer="false">
        <Option v-for="(com,index) of components"
          :key="index"
          :value="com.name">{{com.title}} {{com.sub}}</Option>
      </Select>
    </div>
    <Menu mode="horizontal"
      @click="go"
      class="top-menu"
      v-model="topMenu">
      <MenuItem key="home">首页</MenuItem>
      <MenuItem key="/components/all">组件</MenuItem>
    </Menu>
    <Select size="small"
      :width="100"
      style="margin:0 10px"
      v-model="v"
      :transfer="false"
      @change="changeV">
      <Option value="3">{{version}}</Option>
      <Option value="2">2.x</Option>
    </Select>
    <Dropdown trigger="click"
      placement="bottom-right"
      @click="go">
      <Button size="small">更多
        <Icon type="chevron-down-outline" />
      </Button>
      <Menu slot="content">
        <MenuItem key="https://react.k-ui.cn">KUI for React</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue">源码</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue/issues">提交Bug</MenuItem>
        <MenuItem key="https://chuchur.com">Blog</MenuItem>
      </Menu>
    </Dropdown>
    <ColorPicker size="small"
      mode="rgba"
      v-model="themeColor"
      :showArrow="false"
      shape="circle"
      style="margin-left:8px"
      @change="changeThemeColor" />
    <Button theme="normal"
      :icon="theme=='dark'?'sunny':'moon'"
      shape="circle"
      @click="changeMode"
      style="margin:0 8px;" />
    <!-- <img src="https://img.shields.io/npm/v/kui-vue.svg?style=flat-square"
      style="height:24px;margin-left:10px;" /> -->
    <Button @click="gitee"
      icon="logo-gitee"
      shape="circle"
      theme="normal"></Button>
  </Header>
</template>
<script>
import Nav from "../menu";
import { version } from '@/package.json'

export default {
  data() {
    return {
      themeColor: '#3a95ff',
      version,
      components: [],
      v: "3",
      key: "",
      topMenu: [],
      theme: '',
    };
  },
  mounted() {
    let theme = localStorage.getItem('theme') || ''
    let themeColor = localStorage.getItem('themeColor') || ''
    if (theme) {
      document.body.setAttribute('theme-mode', theme);
      this.theme = theme
    }
    if (themeColor) {
      this.themeColor = themeColor
      this.changeThemeColor(themeColor)
    }
    let navs = Nav.filter(x => x.key != 'starts')

    this.components = navs.reduce((a, b) => a.concat(b.child), [])
    let path = this.$route.path
    this.topMenu = path == '/' ? ['home'] : ['/components/all']
  },
  methods: {
    gitee() {
      window.open("//gitee.com/chuchur/kui-vue");
    },
    changeThemeColor(v) {
      let stl = document.querySelector('style[name=kui]')
      if (!stl) {
        stl = document.createElement('style')
        stl.setAttribute('name', 'kui')
        document.head.appendChild(stl)
      }
      let str = v.split(',').slice(0, 3).join(',')
      let cssText = `
      body[theme-type='custom']{
          --kui-color-main:${str});
          --kui-color-main-10:${str},.9);
          --kui-color-main-30:${str},.7);
          --kui-color-main-60:${str},.4);
          --kui-color-main-80:${str},.2);
          --kui-color-main-90:${str},.1);
          --kui-color-hover:${str},.2);
          --kui-color-selected:${str},.1);
      }
      `
      stl.innerHTML = cssText
      document.body.setAttribute('theme-type', 'custom')
      localStorage.setItem('themeColor', v)
    },
    changeMode() {
      const body = document.body;
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
        localStorage.removeItem('theme')
        this.theme = ''
      } else {
        body.setAttribute('theme-mode', 'dark');
        localStorage.setItem('theme', 'dark')
        this.theme = 'dark'
      }
    },
    go({ key, keyPath, item }) {
      if (key == "home") {
        this.topMenu = ['home']
        this.$router.push("/");
      } else if (key == '/components/all') {
        this.$router.push("/components/all");
      } else {
        open(key);
      }
    },
    change({ value }) {
      this.$router.push(`/components/${value}`);
      setTimeout(() => (this.key = ""), 500);
    },
    changeV({ value }) {
      if (value == "2") {
        open("https://v2.k-ui.cn");
      }
    },
  },
};
</script>
