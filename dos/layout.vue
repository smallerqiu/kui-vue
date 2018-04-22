<template>
  <section class="body">
    <header>
      <a href="/"><img :src="logo" />Kui</a>
      <Menu style="float:right;" mode="horizontal" activeName="/install" @select="go">
        <MenuItem name="/" icon="home">首页</MenuItem>
        <MenuItem name="/install" icon="ios-settings-strong">组件</MenuItem>
        <MenuItem name="https://www.chuchur.com" icon="ios-person">Blog</MenuItem>
      </Menu>
    </header>
    <section class="main">
      <Row>
        <Col span="4">
        <nav class="nav">
          <Menu @select="go" :activeName="activeName" width="auto">
            <MenuGroup :title="item.title" v-for="(item,x) in nav" :name="item.title" :key="x">
              <MenuItem v-for="(sub,y) in item.child" :icon="sub.icon" :name="sub.link||sub.weblink" :key="y">{{sub.title}}
              <span class="sub">{{sub.sub}}</span>
              </MenuItem>
            </MenuGroup>
          </Menu>
          <!-- <menu>
            <li v-for="(item ,x) in nav" :key="x">
              <em></em>
              <h5>{{item.title}}</h5>
              <a :href="sub.weblink||`${sub.link}`" :target="sub.weblink?'_blank':''" v-for="(sub,y) in item.child" :key="y" :class="{'active':$route.path==sub.link}">
                <Icon :type="sub.icon" v-if="sub.icon"></Icon>
                <template v-if="sub.log">
                  <Badge dot>{{sub.title}}<span>{{sub.sub}}</span></Badge>
                </template>
                <template v-else>
                  {{sub.title}}<span class="sub">{{sub.sub}}</span>
                </template>
              </a>
            </li>
          </menu> -->
        </nav>
        </Col>
        <Col span="20" class="doc-content">
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
            { title: "KUI for React", link: '/react-kui' },
            { title: "KUI for Angular", link: '/angular-kui' },
            { title: "安装", link: "/install" },
            { title: "快速上手", link: "/start" },
            { title: "更新日志", link: "/log", log: 1 },
            { title: "定制主题", link: "/theme" },
            { title: "kyui-loader", link: "/kyui-loader" }
          ]
        },
        {
          title: "基础组件",
          child: [
            { title: "图标", sub: "Icon", link: "/icon", icon: "heart" },
            { title: "按钮", sub: "Button", link: "/button", icon: 'stop' },
            { title: "布局", sub: "layout", link: "/layout", icon: 'social-buffer' },
            // { title: "标签页", sub: "Tabs", link: "/tabs",icon:'ios-photos' },
          ]
        },
        {
          title: "表单",
          child: [
            { title: "输入框", sub: "Input", link: "/input", icon: 'ios-compose' },
            { title: "多选框", sub: "Checkbox", link: "/checkbox", icon: 'android-checkbox' },
            { title: "单选框", sub: "Radio", link: "/radio", icon: 'android-radio-button-on' },
            { title: "开关", sub: "Switch", link: "/switch", icon: 'ios-toggle' },
            { title: "下拉框", sub: "Select", link: "/select", icon: 'chevron-down' },
            // { title: "滑块", sub: "Slider", link: "/slider", icon: 'android-options' },
            { title: "日期", sub: "datePicker", link: "/datepicker", icon: 'ios-calendar-outline' },
            { title: "表格", sub: "Table", link: "/table", icon: 'ios-grid-view' },
            { title: "表单", sub: "Form", link: "/form", icon: 'ios-list' },
            { title: "上传", sub: "Upload", link: "/upload", icon: 'ios-cloud-upload' },
            { title: "颜色", sub: "ColorPicker", link: "/colorpicker", icon: 'android-color-palette' },
          ]
        },
        {
          title: '视图',
          child: [
            { title: "警告提示", sub: "Alert", link: "/alert", icon: 'android-alert' },
            { title: "全局提示", sub: "Message", link: "/message", icon: 'android-textsms' },
            { title: "通知提醒", sub: "Notice", link: "/notice", icon: 'android-notifications' },
            { title: "对话框", sub: "Modal", link: "/modal", icon: 'ios-browsers' },
            { title: "气泡提示", sub: "Poptip", link: "/poptip", icon: 'ios-chatbubble' },
            { title: "时间轴", sub: "TimeLine", link: "/timeline", icon: 'ios-time' },
            { title: "徽标", sub: "Badge", link: "/badge", icon: 'email-unread' },
          ]
        },
        {
          title: '导航',
          child: [
            { title: "导航菜单", sub: "Menu", link: "/menu", icon: 'navicon' },
            { title: "分页", sub: "Page", link: "/page", icon: 'ios-skipforward' },
            { title: "加载进度", sub: "Loading", link: "/loading", icon: 'load-a' },
          ]
        },
        {
          title: "其他",
          child: [
            { title: "github", weblink: "https://github.com/chuchur/kui", icon: 'social-github', },
            { title: "支持作者", link: "/sponsor", icon: 'social-usd' },
            { title: "关于", link: "/about", icon: 'android-happy' }
          ]
        }
      ],
      logo: require("./assets/logo.png"), activeName: ''
    };
  },
  methods: {
    go(path) {
      if (path.indexOf('http') >= 0) {
        window.open(path)
      } else {
        this.$router.push({ path: path })
        this.nav.forEach(x => {
          x.child.forEach(y => {
            if (y.link == path) {
              document.title = `${y.title} ${y.sub || ''} - KUI`
              document.documentElement.scrollTop = 0
              // document.querySelector('.doc-content').scrollTop = 0
            }
          })
        })
      }
    }
  },
  created() {
    this.nav.forEach(y => y.child.forEach(x => {
      x.selected = false;
      if (x.link == this.$route.path) {
        document.title = x.title + (x.sub || '') + ' - KUI'
        this.activeName = x.link
        // console.log(this.activeName,x.link)
      }
    }));
  }
};
</script>
