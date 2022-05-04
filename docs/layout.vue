<template>
  <Layout>
    <Header />
    <Layout class="main">
      <Sider class="docs-k-layout-sider">
        <Menu v-model="activeName" @click="go" class="left-menu" mode="inline" :open-keys="openkeys">
          <SubMenu :title="item.title" v-for="item in baseNav" :name="item.title" :key="item.key">
            <MenuItem v-for="sub in item.child" :icon="sub.icon" :key="sub.name">

            <Badge dot v-if="sub.update">
              <span>{{sub.sub}}</span>
              <span class="sub">{{sub.title}}</span>
            </Badge>
            <template v-else>
              <span>{{sub.sub}}</span>
              <span class="sub">{{sub.title}}</span>
            </template>
            </MenuItem>
          </SubMenu>
          <!-- </SubMenu> -->
        </Menu>
      </Sider>
      <Content :class="{typo:typo}">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <Row class="foot-nav">
          <Col :span="12"><a @click="()=>go({key:prev.name})">
            <Icon type="chevron-back-outline" />{{prev.name}}
          </a></Col>
          <Col :span="12"><a @click="()=>go({key:next.name})">{{next.name}}
            <Icon type="chevron-forward-outline" />
          </a></Col>
        </Row>
        <Footer class="docs-k-footer">
          KUI ©2018 Created by chuchur |
          <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19016072号-2</a>
        </Footer>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import Header from "./components/header";
import baseNav from "./menu";
export default {
  components: {
    Header,
  },
  data() {
    return {
      prev: {}, next: {},
      baseNav,
      typo: false,
      activeName: [],
      theme: '',
      openkeys: ['starts', 'base', 'layouts', 'nav', 'forms', 'datas', 'notice', 'other', 'notices']
    };
  },
  mounted() {
    // let theme = localStorage.getItem('theme') || ''
    // let path = this.$route.path.replace('/components/', '')
    // this.activeName = [path]
  },
  created() {
    this.setActiveKey(this.$route)
  },
  methods: {
    go({ key, keyPath }) {
      let [m, n] = keyPath
      let path = m == 'starts' ? `/docs/${n}` : `/components/${n}`
      this.$router.push({ path });
    },
    getPath(name) {
      console.log(name)
      let routes = baseNav.reduce((x, y) => x.concat(y.child), [])
      // console.log(routes.map(x => x.name))
      // let current = routes.filter((x) => x.name == name)[0] || {}
      let index = routes.findIndex(x => x.name == name)
      // console.log(name, index)
      return { current: routes[index], prev: routes[index - 1], next: routes[index + 1] }
    },
    setActiveKey({ path }) {
      let key = path.replace(/\/docs\/|\/components\//, "").toLowerCase();
      let { current, prev = {}, next = {} } = this.getPath(key)
      this.typo = path.indexOf('docs') >= 0
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
    }
  },

};
</script>
