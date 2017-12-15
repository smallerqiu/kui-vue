<template>
  <section class="body">
    <header>
      VUE KUI 使用文档
    </header>
    <section class="main">
      <nav class="nav">
        <menu>
          <li v-for="(item ,x) in nav" :key="x">
            <em></em>
            <h5>{{item.title}}</h5>
            <a :href="`#/${sub.link}`" v-for="(sub,y) in item.child" :key="y">{{sub.title}}
              <span>{{sub.sub}}</span>
            </a>
          </li>
        </menu>
      </nav>
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          title: "开始",
          child: [
            { title: "安装", link: "install" },
            { title: "快速上手", link: "start" },
            { title: "更新日志", link: "log" }
          ]
        },
        {
          title: "基础组建",
          child: [
            { title: "按钮", sub: "Button", link: "button" },
            { title: "删格", sub: "Grid", link: "grid" },
            { title: "日期", sub: "datePicker", link: "datepicker" },
            { title: "表格", sub: "Table", link: "table" },
            { title: "分页", sub: "Page", link: "page" }
          ]
        },
        {
          title: "其他",
          child: [{ title: "github", link: "" }]
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
