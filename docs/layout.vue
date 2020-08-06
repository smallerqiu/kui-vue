<template>
  <Layout>
    <Header />
    <Layout class="main">
      <Sider>
        <Affix :offsetTop="30">
          <Menu v-model="activeName" @click="go" class="left-menu" mode="inline">
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
          </Menu>
        </Affix>
      </Sider>
      <Content :class="{'typo':typo}">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import Header from "./components/header";
import Nav from "./menu";
export default {
  components: { Header },
  data() {
    return {
      Nav,
      typo: false,
      activeName: []
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
      this.$router.push({ path });
      this.typo = !sub;
    },
    getPath(name) {
      return (
        Nav.map(x => x.child)
          .reduce((x, y) => x.concat(y), [])
          .filter(x => x.name == name)[0] || {}
      );
    }
  },
  created() {
    let { path } = this.$route;
    path = path
      .replace("/docs/", "")
      .replace("/components/", "")
      .toLowerCase();
    let { title, sub, name } = this.getPath(path);
    this.typo = !sub;
    document.title = `${title} ${sub || ""} - KUI`;
    this.activeName = [name];
  }
};
</script>
