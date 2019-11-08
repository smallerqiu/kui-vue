<template>
  <section class="body">
    <header>
      <div class="logo">
        <a href="/"><img src="./assets/favicon.png" />K UIKIT</a>
      </div>
      <div class="search-component">
        <Select placeholder="搜索组件..." filterable v-model="key" @change="change">
          <Option v-for="(com,index) in components" :key="index" :value="com.name">{{com.name}} {{com.title}}</Option>
        </Select>
      </div>
      <Menu style="float:right;" mode="horizontal" activeName="/install" @select="go">
        <MenuItem name="/" icon="md-home">首页</MenuItem>
        <MenuItem name="/install" icon="ios-options">组件</MenuItem>
        <MenuItem name="https://github.com/chuchur-china/kui-vue" icon="logo-github">Github</MenuItem>
        <MenuItem name="https://react.k-ui.cn">KUI React</MenuItem>
        <MenuItem name="https://www.chuchur.com" icon="ios-leaf">Blog</MenuItem>
      </Menu>
    </header>
    <section class="main">
      <Row>
        <k-col span="4" class="colNav">
          <nav class="nav">
            <Menu @select="go" :activeName="activeName" width="auto">
              <MenuGroup :title="item.title" v-for="(item,x) in nav" :name="item.title" :key="x">
                <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :name="sub.name||sub.webname" :key="y">
                <Badge dot v-if="sub.name==='log'">{{sub.title}}</Badge>
                <template v-else>{{sub.title}}</template>
                <span class="sub" v-if="sub.sub">{{sub.sub}}</span>
                </MenuItem>
              </MenuGroup>
            </Menu>
          </nav>
        </k-col>
        <k-col span="20" class="colMain">
          <div class="content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </k-col>
      </Row>
    </section>
  </section>

</template>
<script>
import code from "./menu";
export default {
  data() {
    return {
      key: "",
      nav: code.nav,
      activeName: "",
      components: []
    };
  },

  methods: {
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
            if (y.name == path) {
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
        if (x.name == this.$route.path) {
          document.title = x.title + (x.sub || "") + " - KUI";
          this.activeName = x.name;
        }
        i > 0 && this.components.push({ title: x.title, name: x.sub })
      })
    );
  }
};
</script>
