<template>
  <section class="body">
    <header>
      <div class="logo">
        <a href="/"><img :src="logo" />K UIKIT</a>
        <sub>v 2.3.5</sub>
      </div>
      <div class="search-component">
        <Select placeholder="搜索组件..." filterable v-model="key" @change="change">
          <Option v-for="(com,index) in components" :key="index" :value="com.name">{{com.name}} {{com.title}}</Option>
        </Select>
      </div>
      <div class="nav-right">
        <Menu mode="horizontal" active-name="com">
          <MenuItem name="home"><a href="/">首页</a></MenuItem>
          <MenuItem name="com"><a href="#/start">组件</a></MenuItem>
        </Menu>
        <Select mini v-model="v" width="100" @change="change2">
          <Option value="2">v2.3.5</Option>
          <Option value="3">v3.x</Option>
        </Select>

        <Dropdown @click="go">
          <Button mini>更多
            <Icon type="ios-arrow-down" />
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem name="1"><a target="_blank" href="https://react.k-ui.cn">KUI for React</a></DropdownItem>
            <DropdownItem name="2"><a target="_blank" href="https://gitee.com/chuchur/kui-vue">源码</a></DropdownItem>
            <DropdownItem name="3"><a target="_blank" href="https://gitee.com/chuchur/kui-vue/issues">提交Bug</a></DropdownItem>
            <DropdownItem name="4"><a target="_blank" href="https://chuchur.com">Blog</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
    <section class="main">
      <Row>
        <Col span="4" class="colNav">
        <nav class="nav">
          <Menu @select="go" :activeName="activeName" width="auto">
            <MenuGroup :title="item.title" v-for="(item,x) in nav" :name="item.title" :key="x">
              <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :name="sub.link||sub.weblink" :key="y">
              <Badge dot v-if="sub.link==='/log'">{{sub.title}}</Badge>
              <template v-else>{{sub.title}}</template>
              <span class="sub" v-if="sub.sub">{{sub.sub}}</span>
              </MenuItem>
            </MenuGroup>
          </Menu>
        </nav>
        </Col>
        <Col span="20" class="colMain">
        <div class="content">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        </Col>
      </Row>
    </section>
  </section>

</template>
<script>
import code from "./code/menuData";
import logo from './assets/favicon.png'
export default {
  data() {
    return {
      v: 2,
      key: "",
      logo,
      nav: code.nav,
      activeName: "",
      components: []
    };
  },

  methods: {
    change2({ value }) {
      if (value == 3) {
        open('//k-ui.cn')
      }
    },
    change(v) {
      let path = v.value.toLowerCase();
      this.activeName = "/" + path;
      this.$router.push(path);
      setTimeout(() => (this.key = ""), 500);
    },
    go(path) {
      this.key = "";
      if (path.indexOf("http") >= 0) {
        window.open(path);
      } else {
        this.$router.push({ path: path });
        this.nav.forEach(x => {
          x.child.forEach(y => {
            if (y.link == path) {
              document.title = `${y.title} ${y.sub || ""} - KUI`;
            }
          });
        });
      }
    }
  },
  created() {
    this.nav.forEach((y, i) =>
      y.child.forEach(x => {
        x.selected = false;
        if (x.link == this.$route.path) {
          document.title = x.title + (x.sub || "") + " - KUI";
          this.activeName = x.link;
        }
        i > 0 && this.components.push({ title: x.title, name: x.sub })
      })
    );
  }
};
</script>
