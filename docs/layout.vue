<template>
  <Layout>
    <Header />
    <Layout class="main">
      <Sider class="docs-k-layout-sider">
        <Menu v-model="activeName" @click="go" class="left-menu" mode="inline" :open-keys="['components']">
          <MenuItem v-for="m in baseNav" :key="m.name">
          <Badge dot v-if="m.badeg">{{m.title}}</Badge>
          <template v-else>{{m.title}}</template>
          </MenuItem>
          <SubMenu key="components">
            <template slot="title">Components(65)</template>
            <MenuGroup :title="item.title" v-for="(item,x) in Nav" :name="item.title" :key="'sub'+x">
              <MenuItem v-for="sub in item.child" :icon="sub.icon" :key="sub.name">
              <span>{{sub.sub}}</span>
              <span class="sub">{{sub.title}}</span>
              </MenuItem>
            </MenuGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Content :class="{'typo':typo}">
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
import { Nav, baseNav } from "./menu";
export default {
  components: {
    Header,
  },
  data() {
    return {
      prev: {}, next: {},
      Nav,
      baseNav,
      typo: false,
      activeName: [],
    };
  },
  methods: {
    go({ key, keyPath, item }) {
      if (!key) return;
      let { current = {} } = this.getPath(key)
      let { title, sub, name } = current
      document.title = `${title} ${sub || ""} - KUI`;
      let path = (sub ? "/components/" : "/docs/") + key;
      this.$router.push({ path, });
      this.typo = !sub;
    },
    getPath(name) {
      const data = Nav.concat([
        {
          title: "m",
          child: baseNav,
        },
      ]);
      let routes = data
        .map((x) => x.child)
        .reduce((x, y) => x.concat(y), [])
      // let current = routes.filter((x) => x.name == name)[0] || {}
      let index = routes.findIndex(x => x.name == name)
      // console.log(routes)
      return { current: routes[index], prev: routes[index - 1], next: routes[index + 1] }
    },
    setActiveKey({ path }) {
      let key = path.replace(/\/docs\/|\/components\//, "").toLowerCase();
      let { current = {}, prev = {}, next = {} } = this.getPath(key)
      this.prev = prev
      this.next = next

      let { title, sub, name } = current;
      this.typo = !sub;
      document.title = `${title} ${sub || ""} - KUI`;
      this.activeName = [name];
    }
  },
  watch: {
    '$route'(to, from) {
      this.setActiveKey(to)
    }
  },
  created() {
    this.setActiveKey(this.$route)
  },
};
</script>
