<template>
  <Layout>
    <Header />
    <Layout class="main">
      <Sider class="docs-k-layout-sider">
        <Menu v-model="activeName"
          @click="go"
          class="left-menu"
          mode="inline"
          :open-keys="openkeys">
          <SubMenu :title="item.title"
            v-for="item in navs"
            :name="item.title"
            :key="item.key">

            <MenuItem v-for="sub in item.child"
              :key="sub.name">
            <WebIcon :name="sub.icon"
              slot="icon" />
            <router-link :to="`/${item.key}/${sub.name}`">
              <Badge dot
                v-if="sub.update">
                <span>{{sub.sub}}</span>
                <span class="sub">{{sub.title}}</span>
              </Badge>
              <template v-else>
                <span>{{sub.sub}}</span>
                <span class="sub">{{sub.title}}</span>
              </template>
            </router-link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <transition name="fade"
          mode="out-in">
          <router-view></router-view>
        </transition>
        <div class="foot-nav">
          <a :href="`/${prev.key}/${prev.name}`"
            @click="e=>link(e,0)"
            class="nav-prev"
            v-if="prev.sub">
            <Icon :type="ChevronBack" />
            <span class="nav-text">{{prev.sub}} {{prev.title}}</span>
            <WebIcon :name="prev.icon"
              slot="icon" />
          </a>
          <a :href="`/${next.key}/${next.name}`"
            v-if="next.sub"
            @click="e=>link(e,1)"
            class="nav-next">
            <WebIcon :name="next.icon"
              slot="icon" />
            <span class="nav-text">{{next.sub}} {{next.title}}</span>
            <Icon :type="ChevronForward" />
          </a>
        </div>
        <Footer />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import WebIcon from './WebIcon'
import { menus, navs } from "../menu";
import { ChevronBack, ChevronForward } from 'kui-icons'
export default {
  components: {
    Header, WebIcon, Footer
  },
  data() {
    return {
      navs,
      ChevronBack, ChevronForward,
      prev: {}, next: {},
      activeName: [],
      theme: '',
      openkeys: ['start', 'basic', 'layouts', 'navigation', 'forms', 'datas', 'notices', 'other']
    };
  },
  mounted() {
    // let theme = localStorage.getItem('theme') || ''
    // let path = this.$route.path.replace('/components/', '')
    // this.activeName = [path]
    hljs &&　hljs.highlightAll();

  },
  created() {
    this.setActiveKey(this.$route)
  },
  methods: {
    link(e, t) {
      e.stopPropagation()
      e.preventDefault()
      let c = t ? this.next : this.prev
      this.$router.push(`/${c.key}/${c.name}`);
    },
    go({ key, keyPath }) {
      let [m, n] = keyPath
      let path = `/${m}/${n}`
      this.$router.push(path);
    },
    getPath(name) {
      let [m, n] = name.split('/').filter(x => x)
      let index = menus.findIndex(x => x.key == m && x.name == n)
      return { current: menus[index], prev: menus[index - 1], next: menus[index + 1] }
    },
    setActiveKey({ path }) {
      let { current, prev = {}, next = {} } = this.getPath(path)
      this.typo = path.indexOf('start') >= 0
      this.prev = prev
      this.next = next
      let { title, sub, name } = current;
      document.title = `${title} ${sub || ""} - KUI`;
      this.activeName = [name];
    }
  },
  watch: {
    '$route'(to, from) {
      this.setActiveKey(to)
      setTimeout(() => {
        hljs.highlightAll();
      }, 300)
    }
  },

};
</script>
