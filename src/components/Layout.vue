<template>
  <Layout class="root">
    <Header />
    <Layout class="main">
      <Sider :class="['docs-k-layout-sider', { 'docs-k-layout-sider-show': showMiniNav }]">
        <Button size="large" :icon="showMiniNav ? Close : Menu" class="min-menu-nav-btn" theme="outline"
          @click="showMiniNav = !showMiniNav" />
        <Menu v-model="activeName" class="left-menu" mode="inline" :open-keys="openkeys" @click="go">
          <SubMenu v-for="item in navs" :key="item.key" :title="item.title" :name="item.title">
            <MenuItem v-for="sub in item.child" :key="sub.name">
            <template #icon>
              <WebIcon :name="sub.icon" />
            </template>
            <router-link :to="`/${item.key}/${sub.name}`">
              <Badge v-if="sub.update" dot>
                <span>{{ sub.sub }}</span>
                <span class="sub">{{ sub.title }}</span>
              </Badge>
              <template v-else>
                <span>{{ sub.sub }}</span>
                <span class="sub">{{ sub.title }}</span>
              </template>
            </router-link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <transition name="fade" mode="out-in">
          <router-view class="content-inner" />
        </transition>
        <div class="foot-nav">
          <a v-if="prev.sub" :href="`/${prev.key}/${prev.name}`" class="nav-prev" @click="e => link(e, 0)">
            <Icon :type="ChevronBack" />
            <span class="nav-text">{{ prev.sub }} {{ prev.title }}</span>
            <WebIcon slot="icon" :name="prev.icon" />
          </a>
          <a v-if="next.sub" :href="`/${next.key}/${next.name}`" class="nav-next" @click="e => link(e, 1)">
            <WebIcon slot="icon" :name="next.icon" />
            <span class="nav-text">{{ next.sub }} {{ next.title }}</span>
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
import { ChevronBack, ChevronForward, Menu, Close } from 'kui-icons'
export default {
  components: {
    Header, WebIcon, Footer
  },
  data() {
    return {
      showMiniNav: false,
      navs,
      ChevronBack, ChevronForward, Menu, Close,
      prev: {}, next: {},
      activeName: [],
      openkeys: ['start', 'basic', 'layouts', 'navigation', 'forms', 'datas', 'notices', 'other']
    };
  },
  created() {
    this.setActiveKey(this.$route)
  },
  methods: {
    link(e, t) {
      e.stopPropagation()
      e.preventDefault()
      let c = t ? this.next : this.prev
      let path = `/${c.key}/${c.name}`
      this.$router.push(path);
      this.setActiveKey({ path })
    },
    go({ key, keyPath }) {
      let [m, n] = keyPath
      let path = `/${m}/${n}`
      this.$router.push(path);
      this.setActiveKey({ path })
      this.showMiniNav = false
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
};
</script>
