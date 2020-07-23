<template>
  <Layout>
    <Header />
    <Layout class="main">
      <Sider>
        <Affix :offsetTop="30">
          <Menu :activeName="activeName" @select="go" class="left-menu" mode="inline">
            <MenuGroup :title="item.title" v-for="(item,x) in Nav" :name="item.title" :key="x">
              <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :name="sub.name" :key="y">
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
import Header from './components/header'
import Nav from "./menu";
export default {
  components: { Header },
  data() {
    return {
      Nav,
      key: "",
      typo: false,
      activeName: "",
      components: [],
    };
  },
  methods: {
    target() {
      return document.querySelector('.main')
    },
    go(name) {
      let { title, sub } = this.getPath(name)

      this.key = "";
      document.title = `${title} ${sub || ""} - KUI`;

      let path = (sub ? '/components/' : '/docs/') + name
      this.$router.push({ path });
      this.typo = !sub

    },
    getPath(name) {
      return Nav.map(x => x.child)
        .reduce((x, y) => x.concat(y), [])
        .filter(x => x.name == name)[0] || {}
    },
  },
  created() {
    let { path } = this.$route
    path = path.replace('/docs/', '').replace('/components/', '').toLowerCase()
    let { title, sub, name } = this.getPath(path)
    this.typo = !sub
    document.title = `${title} ${sub || ""} - KUI`;
    this.activeName = name;

    this.components = Nav.map(x => x.child)
      .reduce((x, y) => x.concat(y), [])
      .filter(x => x.sub)

  }
};
</script>
