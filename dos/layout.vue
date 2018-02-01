<template>
  <section class="body">
    <header>
      <img :src="logo" />VUE KUI 使用文档
    </header>
    <section class="main">
      <Row>
        <Col span="4">
        <nav class="nav">
          <menu>
            <li v-for="(item ,x) in nav" :key="x">
              <em></em>
              <h5>{{item.title}}</h5>
              <a :href="sub.weblink||`${sub.link}`" :target="sub.weblink?'_blank':''" v-for="(sub,y) in item.child" :key="y" :class="{'active':$route.path==sub.link}">
                <Icon :type="sub.icon" v-if="sub.icon"></Icon>
                {{sub.title}}
                <span>{{sub.sub}}</span>
              </a>
            </li>
          </menu>
        </nav>
        </Col>
        <Col span="20">
        <div class="content">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        </Col>
      </Row>
    </section>
    <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
    </footer>
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
            { title: "KUI for React",link:'/react-kui'},
            { title: "KUI for Angular",link:'/angular-kui'},
            { title: "安装", link: "/install" },
            { title: "快速上手", link: "/start" },
            { title: "更新日志", link: "/log" },
            { title: "定制主题", link: "/theme"},
            { title: "kyui-loader", link: "/kyui-loader" }
          ]
        },
        {
          title: "基础组件",
          child: [
            { title: "图标", sub: "Icon", link: "/icon", icon: "heart" },
            { title: "按钮", sub: "Button", link: "/button",icon:'stop' },
            { title: "输入框", sub: "Input", link: "/input",icon:'ios-compose' },
            { title: "多选框", sub: "Checkbox", link: "/checkbox",icon:'android-checkbox' },
            { title: "单选框", sub: "Radio", link: "/radio",icon:'android-radio-button-on' },
            { title: "开关", sub: "Switch", link: "/switch",icon:'ios-toggle' },
            { title: "下拉框", sub: "Select", link: "/select",icon:'chevron-down' },
            { title: "布局", sub: "Layout", link: "/layout",icon:'social-buffer' },
            { title: "日期", sub: "datePicker", link: "/datepicker",icon:'ios-calendar-outline' },
            { title: "表格", sub: "Table", link: "/table",icon:'ios-grid-view' },
            { title: "分页", sub: "Page", link: "/page",icon:'ios-skipforward' },
            { title: "警告提示", sub: "Alert", link: "/alert",icon:'android-alert' },
            { title: "全局提示", sub: "Message", link: "/message",icon:'android-textsms' },
            { title: "通知提醒", sub: "Notice", link: "/notice",icon:'android-notifications' },
            { title: "对话框", sub: "Modal", link: "/modal",icon:'ios-browsers' },
            { title: "颜色", sub: "ColorPicker", link: "/colorpicker",icon:'android-color-palette' },
            { title: "时间轴", sub: "TimeLine", link: "/timeline",icon:'ios-time' },
            { title: "表单", sub: "Form", link: "/form",icon:'ios-list' },
            { title: "上传", sub: "Upload", link: "/upload",icon:'ios-cloud-upload' },
            { title: "气泡提示", sub: "Poptip", link: "/poptip",icon:'ios-chatbubble' },
            { title: "导航菜单", sub: "Menu", link: "/menu",icon:'ios-chatbubble' },
            { title: "加载中", sub: "Loading", link: "/loading",icon:'ios-chatbubble' }
          ]
        },
        {
          title: "其他",
          child: [
            { title: "github", weblink: "https://github.com/chuchur/kui",icon:'social-github', },
            { title: "支持作者", link: "/sponsor",icon:'social-usd' },
            { title: "关于", link: "/index",icon:'android-happy' }
          ]
        }
      ],
      logo: require("./logo.png")
    };
  },
  methods: {},
  created() {
    this.nav.forEach(x => x.child.forEach(x => (x.selected = false)));
  }
};
</script>
