<template>
  <Header class="header">
    <div class="logo">
      <a href="/">
        <img src="../assets/favicon.png" />K UIKIT
      </a>
    </div>
    <div class="search-component">
      <Select placeholder="搜索组件..." filterable v-model="key" @change="change" :transfer="false">
        <Option v-for="(com,index) of components" :key="index" :value="com.name">{{com.title}} {{com.sub}}</Option>
      </Select>
    </div>
    <Menu mode="horizontal" @click="go" class="top-menu" v-model="topMenu">
      <MenuItem key="home">首页</MenuItem>
      <MenuItem key="start">组件</MenuItem>
      <SubMenu key="shengtai">
        <template slot="title">生态相关</template>
        <MenuItem key="https://v2.k-ui.cn">KUI v2.x</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue">Gitee</MenuItem>
        <MenuItem key="https://react.k-ui.cn">KUI for React</MenuItem>
        <MenuItem key="https://www.chuchur.com">Blog</MenuItem>
      </SubMenu>
      <Select mini width="100" v-model="version" :transfer="false" @change="changeV">
        <Option value="3">3.x</Option>
        <Option value="2">2.x</Option>
      </Select>
    </Menu>
  </Header>
</template>
<script>
import { Nav } from "../menu";
export default {
  data() {
    return {
      components: [],
      version: "3",
      key: "",
      topMenu: ["start"],
    };
  },
  mounted() {
    Nav.forEach((x) => this.components.push(...x.child));
  },
  methods: {
    go({ key, keyPath, item }) {
      if (key == "home") {
        this.$router.push("/");
      } else if (key == "start") {
        this.$router.push("/docs/start");
      } else {
        open(key);
      }
    },
    change({ value }) {
      let item = this.components.filter(x => x.name == value)[0]
      if (item) {
        document.title = `${item.title} ${item.sub || ""} - KUI`;
      }
      this.activeName = value;
      this.$router.push(`/components/${value}`);

      setTimeout(() => (this.key = ""), 500);
    },
    changeV({ value }) {
      if (value == "2") {
        open("https://v2.k-ui.cn");
      }
    },
  },
};
</script>
