<template>
  <Layout>
    <Header class="header">
      <div class="logo">
        <a href="/"><img src="./assets/favicon.png" />K UIKIT</a>
      </div>
      <div class="search-component">
        <!-- <Select placeholder="搜索组件..." filterable v-model="key" @change="change">
          <Option v-for="(com,index) in components" :key="index" :value="com.name">{{com.title}} {{com.sub}}</Option>
        </Select> -->
      </div>
      <Menu mode="horizontal" activeName="/install" @select="go" class="top-menu">
        <MenuItem name="/" icon="md-home">首页</MenuItem>
        <MenuItem name="/install" icon="ios-options">组件</MenuItem>
        <MenuItem name="https://github.com/chuchur-china/kui-vue" icon="logo-github">Github</MenuItem>
        <MenuItem name="https://react.k-ui.cn">KUI React</MenuItem>
        <MenuItem name="https://www.chuchur.com" icon="ios-leaf">Blog</MenuItem>
      </Menu>
    </Header>
    <Layout class="main">
      <Sider>
        <Menu :activeName="activeName" @select="go" class="left-menu">
          <MenuGroup :title="item.title" v-for="(item,x) in Nav" :name="item.title" :key="x">
            <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :name="sub.name" :key="y">
            <Badge dot v-if="sub.name==='log'">{{sub.title}}</Badge>
            <span v-else-if="sub.sub">{{sub.sub}}</span>
            <span class="sub">{{sub.title}}</span>
            </MenuItem>
          </MenuGroup>
        </Menu>
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
import Nav from "./menu";
export default {
  data() {
    return {
      Nav,
      key: "",
      typo: false,
      activeName: "",
      components: []
    };
  },

  methods: {
    change({ value }) {
      this.activeName = value
      this.$router.push(`/components/${value}`);
      setTimeout(() => (this.key = ""), 500);
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
