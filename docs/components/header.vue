<template>
  <Header class="header">
    <div class="logo">
      <a href="/"><img src="../assets/favicon.png" />K UIKIT</a>
    </div>
    <div class="search-component">
      <Select placeholder="搜索组件..." filterable v-model="key" @change="change" :transfer="false">
        <Option v-for="(com,index) of components" :key="index" :value="com.name">{{com.title}} {{com.sub}}</Option>
      </Select>
    </div>
    <Menu mode="horizontal" activeName="/install" @select="go" class="top-menu">
      <MenuItem name="/start">组件</MenuItem>
      <SubMenu name="2">
        <template slot="title">生态相关</template>
        <MenuItem name="https://github.com/chuchur-china/kui-vue">Github</MenuItem>
        <MenuItem name="https://react.k-ui.cn">KUI React</MenuItem>
        <MenuItem name="https://www.chuchur.com">Blog</MenuItem>
        <MenuItem name="https://www.chuchur.com">微信</MenuItem>
        <MenuItem name="https://www.chuchur.com">QQ</MenuItem>
      </SubMenu>
      <!-- <Select mini width="100" :value="3" :transfer="false">
        <Option value="3">3.0.x</Option>
        <Option value="2">2.0.x</Option>
      </Select> -->
    </Menu>
  </Header>
</template>
<script>
import Nav from "../menu";
export default {
  data() {
    return {
      components: [],key:''
    }
  },
  mounted() {
    Nav.slice(1, 5).forEach(x => this.components.push(...x.child))
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