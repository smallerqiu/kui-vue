<template>
  <section class="body">
    <header>
      <a href="/"><img :src="logo" />Kui</a>
      <Menu style="float:right;" mode="horizontal" activeName="/install" @select="go">
        <MenuItem name="/" icon="home">首页</MenuItem>
        <MenuItem name="/install" icon="ios-settings-strong">组件</MenuItem>
        <MenuItem name="https://github.com/chuchur/kui-vue/issues" icon="ios-help">提问</MenuItem>
        <MenuItem name="https://www.chuchur.com" icon="ios-person">Blog</MenuItem>
      </Menu>
    </header>
    <section class="main">
      <Row>
        <Col span="4" :style="navStyles">
        <Scroll>
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
        </Scroll>
        <div class="drawer-button" @click="showNav">
          <Icon type="android-menu" />
        </div>
        </Col>
        <Col span="20">
        <Scroll target="window">
          <div class="content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </Scroll>
        </Col>
      </Row>
    </section>
    <!-- <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
    </footer> -->
  </section>

</template>
<script>
import nav from './code/menuData'
export default {
  data() {
    return {
      nav: nav,
      logo: require("./assets/logo.png"), activeName: '',
      isShowNav: false
    };
  },
  computed: {
    navStyles() {
      return this.isShowNav ? { left: 0 } : {}
    }
  },
  methods: {
    showNav() {
      this.isShowNav = !this.isShowNav
      console.log('d')
    },
    go(path) {
      if (path.indexOf('http') >= 0) {
        window.open(path)
      } else {
        this.$router.push({ path: path })
        this.nav.forEach(x => {
          x.child.forEach(y => {
            if (y.link == path) {
              document.title = `${y.title} ${y.sub || ''} - KUI`
            }
          })
        })
      }
    }
  },
  created() {
    this.nav.forEach(y => y.child.forEach(x => {
      x.selected = false;
      if (x.link == this.$route.path) {
        document.title = x.title + (x.sub || '') + ' - KUI'
        this.activeName = x.link
      }
    }));
  }
};
</script>
