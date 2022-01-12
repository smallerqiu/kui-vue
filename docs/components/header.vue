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
      <Select placeholder="搜索组件..." shape="circle" icon="search" theme="light" :showArrow="false" filterable v-model="key" @change="change" :transfer="false">
        <Option v-for="(com,index) of components" :key="index" :value="com.name">{{com.title}} {{com.sub}}</Option>
      </Select>
    </div>
    <Menu mode="horizontal" @click="go" class="top-menu" v-model="topMenu">
      <MenuItem key="home">首页</MenuItem>
      <MenuItem key="/components/all">组件</MenuItem>
    </Menu>
    <Select size="small" :width="100" style="margin:0 10px" v-model="v" :transfer="false" @change="changeV">
      <Option value="3">{{version}}</Option>
      <Option value="2">2.x</Option>
    </Select>
    <Dropdown trigger="click" placement="bottom-right" @click="go">
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
    <Button theme="light" :icon="theme=='dark'?'sunny':'moon'" size="small" shape="circle" @click="changeMode" style="margin-left:8px;"/>
    <img src="https://img.shields.io/npm/v/kui-vue.svg?style=flat-square" style="height:24px;margin-left:10px;" />
  </Header>
</template>
<script>
import Nav from "../menu";
import { version } from '@/package.json'

export default {
  data() {
    return {
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
    if (theme) {
      document.body.setAttribute('theme-mode', theme);
      this.theme = theme
    }
    let navs = Nav.filter(x => x.key != 'starts')

    this.components = navs.reduce((a, b) => a.concat(b.child), [])
    let path = this.$route.path
    this.topMenu = path == '/' ? ['home'] : ['/components/all']
  },
  methods: {
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
