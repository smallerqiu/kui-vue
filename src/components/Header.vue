<template>
  <Header class="header">
    <div class="logo">
      <a href="/">
        <Icon :type="LogoKui" />K UIKIT
        <sub>v {{ version }}</sub>
      </a>
    </div>
    <Divider type="vertical" />
    <div class="search-component">
      <Select placeholder="搜索..." shape="circle" :icon="Search" theme="light" :showArrow="false" filterable v-model="key"
        @change="change" :transfer="false">
        <Option v-for="(com, index) of menus" :key="index" :value="com.name">{{ com.title }} {{ com.sub }}</Option>
      </Select>
    </div>
    <Menu mode="horizontal" @click="go" class="top-menu" v-model="topMenu">
      <MenuItem key="home">首页</MenuItem>
      <MenuItem key="start">组件</MenuItem>
    </Menu>
    <Select size="small" class="version" :width="100" style="margin:0 10px" v-model="v" :transfer="false"
      @change="changeV">
      <Option value="3">{{ version }}</Option>
      <Option value="2">2.x</Option>
    </Select>
    <Dropdown trigger="click" class="more" placement="bottom-right" @click="go">
      <Button size="small">更多
        <Icon :type="ChevronDown" />
      </Button>
      <Menu slot="content">
        <MenuItem key="https://react.k-ui.cn">KUI for React</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue">源码</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue/issues">提交Bug</MenuItem>
        <MenuItem key="https://chuchur.com">Blog</MenuItem>
      </Menu>
    </Dropdown>
    <ColorPicker size="small" class="theme" mode="rgba" v-model="themeColor" :showArrow="false" shape="circle"
      style="margin-left:8px" @change="changeThemeColor" />
    <Button theme="normal" :icon="theme == 'dark' ? Sunny : Moon" shape="circle" @click="changeMode"
      style="margin:0 8px;" />
    <Button @click="gitee" class="btn-gitee" :icon="LogoGitee" shape="circle" theme="normal"></Button>
  </Header>
</template>
<script>
import { menus } from "../menu";
import { LogoKui, ChevronDown, LogoGitee, Sunny, Moon, Search } from "kui-icons";
import pkg from '/package.json'
export default {
  data() {
    return {
      LogoKui, ChevronDown, LogoGitee, Sunny, Moon, Search,
      themeColor: '#3a95ff',
      version: pkg.version,
      menus: menus.sort(),
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
      document.documentElement.setAttribute('theme-mode', theme);
      this.theme = theme
    }
    if (themeColor) {
      this.themeColor = themeColor
      this.changeThemeColor(themeColor)
    }
    let path = this.$route.path
    this.topMenu = path == '/' ? ['home'] : ['start']
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
          --kui-color-actived:${str},.3);
          --kui-color-selected:${str},.1);
      }
      `
      stl.innerHTML = cssText
      document.body.setAttribute('theme-type', 'custom')
      localStorage.setItem('themeColor', v)
    },
    changeMode() {
      const body = document.documentElement;
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
      } else if (key == 'start') {
        this.$router.push("/start/getting-started");
      } else {
        open(key);
      }
    },
    change({ value }) {
      let item = menus.filter(x => x.name == value)[0] || {}
      this.$router.push(`/${item.key}/${value}`);
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
