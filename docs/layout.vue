<template>
  <section class="body">
    <header>
      <div class="logo">
        <a href="/"><img :src="favicon" />K UIKIT</a>
      </div>
      <div class="search-component">
        <Select placeholder="搜索组件..." filterable v-model="key" @change="change">
          <Option v-for="(com,index) in components" :key="index" :value="com.name">{{com.name}} {{com.title}}</Option>
        </Select>
      </div>
      <Menu style="float:right;" mode="horizontal" activeName="/install" @select="go">
        <MenuItem name="/" icon="md-home">首页</MenuItem>
        <MenuItem name="/install" icon="ios-options">组件</MenuItem>
        <MenuItem name="https://github.com/chuchur/kui-vue" icon="logo-github">GITHUB</MenuItem>
        <MenuItem name="https://react.k-ui.xyz"><img :src="react" style="height:15px;margin:0;"/>KUI REACT</MenuItem>
        <MenuItem name="https://www.chuchur.com" icon="ios-leaf">BLOG</MenuItem>
      </Menu>
    </header>
    <section class="main">
      <Row>
        <Col span="4" :style="navStyles" class="colNav">
        <!-- <Scroll> -->
        <nav class="nav">
          <Menu @select="go" :activeName="activeName" width="auto">
            <MenuGroup :title="item.title" v-for="(item,x) in nav" :name="item.title" :key="x">
              <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :name="sub.link||sub.weblink" :key="y">
              <Badge dot v-if="sub.link==='/log'">{{sub.title}}</Badge>
              <template v-else>{{sub.title}}</template>
              <span class="sub" v-if="sub.sub">{{sub.sub}}</span>
              </MenuItem>
            </MenuGroup>
          </Menu>
        </nav>
        <!-- </Scroll> -->
        <div class="drawer-button" @click="showNav">
          <Icon type="android-menu" />
        </div>
        </Col>
        <Col span="20" class="colMain">
        <!-- <Scroll target="window"> -->
        <div class="content">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <!-- </Scroll> -->
        </Col>
      </Row>
    </section>
    <footer>
      <div class="ft-left">
        <ul>
          <li>链接</li>
          <li>
            <a href="//github.com/chuchur/kui-vue" target="_blank">仓库代码</a>
          </li>
          <li>
            <a href="//react.k-ui.xyz" target="_blank">KUI REACT</a>
          </li>
          <li>
            <a href="/sponsor">支持作者</a>
          </li>
          <li>
            <a href="//gitee.com/chuchur/kui-vue" target="_blank">码云</a>
          </li>
          <li>
            <a href="/about">关于</a>
          </li>
        </ul>
        <p>© 2018 Created by chuchur.com</p>
      </div>
      <div class="ft-right">
        <ul>
          <li>
            <a href="//chuchur.com" target="_blank"><img src="//chuchur.com/favicon.png" />
              <span>chuchur</span>
            </a>
          </li>
          <li>
            <a href="//github.com/chuchur/kui-vue" target="_blank">
              <Icon type="logo-github" />
              <span>github</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </section>

</template>
<script>
import code from "./code/menuData";
export default {
  data() {
    return {
      key: "",
      nav: code.nav,
      favicon: require("./assets/favicon.png"),
      logo: require("./assets/logo.png"),
      react:require('./assets/react.svg'),
      activeName: "",
      isShowNav: false,
      components: code.components
    };
  },
  computed: {
    navStyles() {
      return this.isShowNav ? { left: 0 } : {};
    }
  },
  methods: {
    change(v) {
      let path = v.value.toLowerCase();
      this.activeName = "/" + path;
      this.$router.push(path);
      setTimeout(() => (this.key = ""), 500);
    },
    showNav() {
      this.isShowNav = !this.isShowNav;
    },
    go(path) {
      this.key = "";
      this.showNav();
      if (path.indexOf("http") >= 0) {
        window.open(path);
      } else {
        this.$router.push({ path: path });
        this.nav.forEach(x => {
          x.child.forEach(y => {
            if (y.link == path) {
              document.title = `${y.title} ${y.sub || ""} - KUI`;
            }
          });
        });
      }
    }
  },
  created() {
    this.nav.forEach(y =>
      y.child.forEach(x => {
        x.selected = false;
        if (x.link == this.$route.path) {
          document.title = x.title + (x.sub || "") + " - KUI";
          this.activeName = x.link;
        }
      })
    );
  }
};
</script>
