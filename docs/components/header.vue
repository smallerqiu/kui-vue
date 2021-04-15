<template>
  <Header class="header">
    <div class="logo">
      <a href="/">
        <img src="../assets/favicon.png" />K UIKIT
      </a>
    </div>
    <div class="search-component">
      <Select placeholder="🔍 搜索组件..." filterable v-model="key" @change="change" :transfer="false">
        <Option v-for="(com,index) of components" :key="index" :value="com.name">{{com.title}} {{com.sub}}</Option>
      </Select>
    </div>
    <Menu mode="horizontal" @click="go" class="top-menu" v-model="topMenu">
      <MenuItem key="home">首页</MenuItem>
      <MenuItem key="start">组件</MenuItem>
    </Menu>
    <Select size="small" :width="100" style="margin:0 10px" v-model="version" :transfer="false" @change="changeV">
      <Option value="3">3.1.5</Option>
      <Option value="2">2.x</Option>
    </Select>
    <Dropdown trigger="click" placement="bottom-right" @click="go">
      <Button size="small">更多
        <Icon type="chevron-down-outline" />
      </Button>
      <Menu slot="content">
        <MenuItem key="https://react.k-ui.cn">KUI for React</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue">源码</MenuItem>
        <MenuItem key="https://gitee.com/chuchur/kui-vue/issues">提交Bug</MenuItem>
        <MenuItem key="https://chuchur.com">Blog</MenuItem>
      </Menu>
    </Dropdown>
    <img src="https://img.shields.io/npm/v/kui-vue.svg?style=flat-square" style="height:24px;margin-left:10px;" />
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
