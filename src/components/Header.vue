<template>
  <Header class="header">
    <div class="header-inner">
      <div class="logo" @click="$router.push('/')">
        <Icon :type="LogoKui" />
        <span class="wrap-name">
          <span class="name">K UIKIT</span>
          <span class="ver">v {{ version }}</span>
        </span>
      </div>
      <Divider type="vertical" />
      <div class="search-component">
        <Select placeholder="搜索..." shape="circle" :icon="Search" theme="light" :showArrow="false" filterable
          v-model:value="key" size="large" @change="change">
          <Option v-for="(com, index) of menus" :key="index" :value="com.name">{{ com.title }} {{ com.sub }}</Option>
        </Select>
      </div>
      <Menu mode="horizontal" @click="menuClick" class="top-menu" v-model:selectedKeys="topMenu">
        <MenuItem key="home">首页</MenuItem>
        <MenuItem key="start">组件</MenuItem>
        <SubMenu key="docs" title="文档">
          <MenuItem key="/start/getting-started">快速开始</MenuItem>
          <MenuItem key="/start/ssr">SSR 支持</MenuItem>
          <MenuItem key="/start/language">多语言</MenuItem>
          <MenuItem key="/start/logs">更新日志</MenuItem>
          <MenuItem key="/start/theme">主题</MenuItem>
          <MenuItem key="/start/dark-mode">暗黑模式</MenuItem>
          <MenuItem key="https://v2.k-ui.cn/">v2.x 文档</MenuItem>
          <MenuItem key="https://react.k-ui.cn/">For React 文档</MenuItem>
          <MenuItem key="https://chuchur.com/">Blog</MenuItem>
        </SubMenu>
      </Menu>
      <!-- <ColorPicker class="theme" mode="rgba" v-model="themeColor" :showArrow="false" style="margin-left:8px" :noAlpha="true"
        @change="changeThemeColor" /> -->
      <Tooltip :title="`切换${theme == 'dark' ? '浅色' : '暗色'}主题`" placement="bottom">
        <Button theme="normal" :icon="theme == 'dark' ? Sunny : Moon" @click="changeMode" size="large"
          style="margin:0 8px;" />
      </Tooltip>
      <Tooltip title="Jump to Gitee" placement="bottom">
        <Button @click="gitee" class="btn-gitee" :icon="LogoGitee" theme="normal" size="large"></Button>
      </Tooltip>
    </div>
  </Header>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { menus } from "../menu";
import { LogoKui, ChevronDown, LogoGitee, Sunny, Moon, Search } from "kui-icons";
import pkg from '/package.json'
import { useRoute, useRouter } from "vue-router";


const themeColor = ref('#3a95ff')
const version = ref(pkg.version)
const menuData = ref(menus.sort())
const v = ref("3")
const key = ref("")
const topMenu = ref([])
const theme = ref('')
const router = useRouter();
const route = useRoute();

onMounted(() => {
  let themeLocal = localStorage.getItem('theme') || ''
  let themeColorLocal = localStorage.getItem('themeColor') || ''
  if (themeLocal) {
    document.documentElement.setAttribute('theme-mode', themeLocal);
    theme.value = themeLocal
  }
  if (themeColorLocal) {
    themeColor.value = themeColorLocal
    changeThemeColor(themeColorLocal)
  }
  topMenu.value = route.path == '/' ? ['home'] : ['start']
})

const gitee = () => {
  window.open("//gitee.com/chuchur/kui-vue");
}

const changeThemeColor = (v) => {
  let stl = document.querySelector('style[name=kui]')
  if (!stl) {
    stl = document.createElement('style')
    stl.setAttribute('name', 'kui')
    document.head.appendChild(stl)
  }

  let str = v.slice(0, v.length - 1)
  let cssText = `
      body[theme-type='custom']{
          --kui-color-main:${str});
          --kui-color-main-hover:${str},.9);
          --kui-color-main-actived:${str},.75);
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
}

const changeMode = () => {
  const body = document.documentElement;
  if (body.hasAttribute('theme-mode')) {
    body.removeAttribute('theme-mode');
    localStorage.removeItem('theme')
    theme.value = ''
  } else {
    body.setAttribute('theme-mode', 'dark');
    localStorage.setItem('theme', 'dark')
    theme.value = 'dark'
  }
}

const menuClick = ({ key, keyPath, item }) => {
  if (key == "home") {
    topMenu.value = ['home']
    router.push("/");
  } else if (key == 'start') {
    router.push("/start/getting-started");
  } else {
    open(key);
  }
}

const change = (value) => {
  // console.log(value);
  let item = menuData.value.filter(x => x.name == value)[0] || {}
  router.push(`/${item.key}/${value}`);
  setTimeout(() => (key.value = ""), 500);
}
</script>