let code = {}
code.nav = [
  {
    title: "开始",
    child: [
      // { title: "KUI for React", weblink: 'https://react.k-ui.xyz/start' },
      // { title: "KUI for Angular", link: '/angular-kui' },
      { title: "安装", link: "/install", icon: 'ios-cog' },
      { title: "快速上手", link: "/start", icon: 'ios-walk' },
      { title: "SSR 支持", link: "/ssr", icon: 'ios-cloud' },
      { title: "更新日志", link: "/log", log: 1, icon: 'ios-paper' },
      { title: "定制主题", link: "/theme", icon: "md-shirt" },
      { title: "kui-loader", link: "/kui-loader", icon: "ios-link" }
    ]
  },
  {
    title: "基础组件",
    child: [
      { title: "图标", sub: "Icon", link: "/icon", icon: "ios-heart" },
      { title: "按钮", sub: "Button", link: "/button", icon: 'ios-square' },
      { title: "颜色", sub: "ColorPicker", link: "/colorpicker", icon: 'ios-color-palette' },
      { title: "栅格", sub: "grid", link: "/grid", icon: 'ios-grid' },
      { title: "布局", sub: "layout", link: "/layout", icon: 'ios-albums' },
    ]
  },
  {
    title: "表单",
    child: [
      { title: "输入框", sub: "Input", link: "/input", icon: 'ios-create' },
      { title: "多选框", sub: "Checkbox", link: "/checkbox", icon: 'ios-checkbox' },
      { title: "单选框", sub: "Radio", link: "/radio", icon: 'ios-checkmark-circle' },
      { title: "开关", sub: "Switch", link: "/switch", icon: 'ios-switch' },
      { title: "下拉框", sub: "Select", link: "/select", icon: 'ios-arrow-down' },
      { title: "日期", sub: "datePicker", link: "/datepicker", icon: 'ios-calendar' },
      { title: "表格", sub: "Table", link: "/table", icon: 'ios-grid' },
      { title: "上传", sub: "Upload", link: "/upload", icon: 'ios-cloud-upload' },
      { title: "表单", sub: "Form", link: "/form", icon: 'ios-list' },
    ]
  },
  {
    title: '视图',
    child: [
      { title: "警告提示", sub: "Alert", link: "/alert", icon: 'ios-alert' },
      { title: "徽标", sub: "Badge", link: "/badge", icon: 'ios-mail-unread' },
      { title: "卡片", sub: "Card", link: "/card", icon: 'ios-card' },
      { title: "走马灯", sub: "Carousel", link: "/carousel", icon: 'ios-film' },
      { title: "折叠面板", sub: "Collapse", link: "/collapse", icon: 'ios-funnel' },
      { title: "全局提示", sub: "Message", link: "/message", icon: 'ios-chatboxes' },
      { title: "通知提醒", sub: "Notice", link: "/notice", icon: 'ios-notifications' },
      { title: "对话框", sub: "Modal", link: "/modal", icon: 'ios-chatbubbles' },
      { title: "标签", sub: "Tag", link: "/tag", icon: 'ios-bookmark' },
      { title: "时间轴", sub: "TimeLine", link: "/timeline", icon: 'ios-time' },
      { title: "气泡提示", sub: "Poptip", link: "/poptip", icon: 'ios-chatbubbles' },
      { title: "文字提示", sub: "Tooltip", link: "/tooltip", icon: 'ios-text' },
      { title: "树形控件", sub: "Tree", link: "/tree", icon: 'ios-git-merge' },
      { title: "树选择", sub: "TreeSelect", link: "/treeselect", icon: 'ios-git-pull-request' },
    ]
  },
  {
    title: '导航',
    child: [
      { title: "图钉", sub: "Affix", link: "/affix", icon: 'ios-pin' },
      { title: "面包屑", sub: "Breadcrumb", link: "/breadcrumb", icon: 'ios-arrow-forward' },
      { title: "回到顶部", sub: "BackTop", link: "/backtop", icon: 'md-arrow-up' },
      { title: "加载进度", sub: "Loading", link: "/loading", icon: 'ios-pulse' },
      { title: "导航菜单", sub: "Menu", link: "/menu", icon: 'ios-list' },
      { title: "分页", sub: "Page", link: "/page", icon: 'ios-fastforward' },
      { title: "步骤条", sub: "Steps", link: "/steps", icon: 'ios-done-all' },
      { title: "标签页", sub: "Tabs", link: "/tabs", icon: 'ios-photos' },
    ]
  },
  // {
  //   title: "其他",
  //   child: [
  //     { title: "码云", weblink: "https://gitee.com/chuchur/kui-vue", icon: 'social-github', },
  //     { title: "github", weblink: "https://github.com/chuchur/kui-vue", icon: 'social-github', },
  //     { title: "支持作者", link: "/sponsor", icon: 'social-usd' },
  //     { title: "关于", link: "/about", icon: 'ios-happy' }
  //   ]
  // }
]
code.components = [
  { title: "图标", name: "Icon", },
  { title: "按钮", name: "Button", },
  { title: "颜色", name: "ColorPicker", },
  { title: "栅格", name: "grid", },
  { title: "布局", name: "layout", },
  { title: "输入框", name: "Input", },
  { title: "多选框", name: "Checkbox", },
  { title: "单选框", name: "Radio", },
  { title: "开关", name: "Switch", },
  { title: "下拉框", name: "Select", },
  { title: "日期", name: "datePicker", },
  { title: "表格", name: "Table", },
  { title: "上传", name: "Upload", },
  { title: "表单", name: "Form", },
  { title: "警告提示", name: "Alert", },
  { title: "徽标", name: "Badge", },
  { title: "卡片", name: "Card", },
  { title: "走马灯", name: "Carousel", },
  { title: "折叠面板", name: "Collapse", },
  { title: "全局提示", name: "Message", },
  { title: "通知提醒", name: "Notice", },
  { title: "对话框", name: "Modal", },
  { title: "标签", name: "Tag", },
  { title: "时间轴", name: "TimeLine", },
  { title: "气泡提示", name: "Poptip", },
  { title: "文字提示", name: "Tooltip", },
  { title: "树形控件", name: "Tree", },
  { title: "树选择", name: "TreeSelect", },
  { title: "图钉", name: "Affix", },
  { title: "面包屑", name: "Breadcrumb", },
  { title: "回到顶部", name: "BackTop", },
  { title: "加载进度", name: "Loading", },
  { title: "导航菜单", name: "Menu", },
  { title: "分页", name: "Page", },
  { title: "步骤条", name: "Steps", },
  { title: "标签页", name: "Tabs", },
]

export default code