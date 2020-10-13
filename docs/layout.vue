<template>
  <Layout>
    <Header />
    <Layout class="main">
      <Sider class="docs-k-layout-sider">
        <Menu
          v-model="activeName"
          @click="go"
          class="left-menu"
          mode="inline"
          :open-keys="['components']"
        >
          <MenuItem v-for="m in baseNav" :key="m.name">{{m.title}}</MenuItem>
          <SubMenu key="components">
            <template slot="title">Components(60)</template>
            <MenuGroup
              :title="item.title"
              v-for="(item,x) in Nav"
              :name="item.title"
              :key="'sub'+x"
            >
              <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :key="sub.name">
                <span v-if="sub.sub">{{sub.sub}}</span>
                <Badge dot v-if="sub.log">{{sub.title}}</Badge>
                <span class="sub" v-else>{{sub.title}}</span>
              </MenuItem>
            </MenuGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Content :class="{'typo':typo}">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <Footer class="docs-k-footer">
          KUI ©2018 Created by chuchur |
          <a
            href="http://www.beian.miit.gov.cn/"
            target="_blank"
          >粤ICP备19016072号</a>
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
      Nav,
      baseNav,
      typo: false,
      activeName: [],
    };
  },
  methods: {
    target() {
      return document.querySelector(".main");
    },
    go({ key, keyPath, item }) {
      // console.log(key);
      // return;
      let { title, sub, name } = this.getPath(key);

      document.title = `${title} ${sub || ""} - KUI`;

      let path = (sub ? "/components/" : "/docs/") + key;
      this.$router.push({
        path,
      });
      this.typo = !sub;
    },
    getPath(name) {
      const data = Nav.concat([
        {
          title: "m",
          child: baseNav,
        },
      ]);
      return (
        data
          .map((x) => x.child)
          .reduce((x, y) => x.concat(y), [])
          .filter((x) => x.name == name)[0] || {}
      );
    },
  },
  created() {
    let { path } = this.$route;
    path = path.replace("/docs/", "").replace("/components/", "").toLowerCase();
    let { title, sub, name } = this.getPath(path);
    this.typo = !sub;
    document.title = `${title} ${sub || ""} - KUI`;
    this.activeName = [name];
  },
};
</script>
