<template>
  <Header class="header">
    <div class="logo">
      <a href="/"><img src="../assets/favicon.png" />K UIKIT</a>
    </div>
    <div class="search-component">
      <!-- <Select placeholder="搜索组件..." filterable v-model="key" @change="change">
          <Option v-for="(com,index) in components" :key="index" :value="com.name">{{com.title}} {{com.sub}}</Option>
        </Select> -->
    </div>
    <Menu mode="horizontal" activeName="/install" @select="go" class="top-menu">
      <MenuItem name="/" icon="md-home">首页</MenuItem>
      <MenuItem name="/start" icon="ios-options">组件</MenuItem>
      <MenuItem name="https://github.com/chuchur-china/kui-vue" icon="logo-github">Github</MenuItem>
      <MenuItem name="https://react.k-ui.cn">KUI React</MenuItem>
      <MenuItem name="https://www.chuchur.com" icon="ios-leaf">Blog</MenuItem>
    </Menu>
  </Header>
</template>
<script>
import Nav from "../menu";
export default {
  data() {
    return {
      Nav,
    }
  },
  methods: {
    getPath(name) {
      return Nav.map(x => x.child)
        .reduce((x, y) => x.concat(y), [])
        .filter(x => x.name == name)[0] || {}
    },
    go(name) {
      if (name == '/') {
        this.$router.push('/');
      } else {
        let { title, sub } = this.getPath(name)
        this.key = "";
        document.title = `${title} ${sub || ""} - KUI`;

        let path = (sub ? '/components/' : '/docs/') + name
        this.typo = !sub
        this.$router.push(path);
      }
    },
    change({ value }) {
      this.activeName = value
      this.$router.push(`/components/${value}`);
      setTimeout(() => (this.key = ""), 500);
    },
  }
}
</script>