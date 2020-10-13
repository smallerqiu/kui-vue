const Nav = [
  {
    title: "基础组件",
    child: [
      { title: "图标", sub: "Icon", name: "icon", icon: "ios-heart" },
      { title: "按钮", sub: "Button", name: "button", icon: 'ios-square' },
      { title: "颜色", sub: "ColorPicker", name: "colorpicker", icon: 'ios-color-palette' },
      { title: "栅格", sub: "Grid", name: "grid", icon: 'ios-grid' },
      { title: "布局", sub: "Layout", name: "layout", icon: 'ios-albums' },
    ]
  },
  {
    title: "表单",
    child: [
      { title: "输入框", sub: "Input", name: "input", icon: 'ios-create' },
      { title: "多选框", sub: "Checkbox", name: "checkbox", icon: 'ios-checkbox' },
      { title: "单选框", sub: "Radio", name: "radio", icon: 'ios-checkmark-circle' },
      { title: "开关", sub: "Switch", name: "switch", icon: 'ios-switch' },
      { title: "选择器", sub: "Select", name: "select", icon: 'ios-arrow-down' },
      { title: "日期选择框", sub: "DatePicker", name: "datepicker", icon: 'ios-calendar' },
      { title: "表格", sub: "Table", name: "table", icon: 'ios-grid' },
      // { title: "上传", sub: "Upload", name: "upload", icon: 'ios-cloud-upload' },
      { title: "表单", sub: "Form", name: "form", icon: 'ios-list' },
    ]
  },
  {
    title: '视图',
    child: [
      { title: "警告提示", sub: "Alert", name: "alert", icon: 'ios-alert' },
      { title: "徽标", sub: "Badge", name: "badge", icon: 'ios-mail-unread' },
      { title: "卡片", sub: "Card", name: "card", icon: 'ios-card' },
      { title: "走马灯", sub: "Carousel", name: "carousel", icon: 'ios-film' },
      { title: "折叠面板", sub: "Collapse", name: "collapse", icon: 'ios-funnel' },
      { title: "抽屉", sub: "Drawer", name: "drawer", icon: 'ios-map' },
      // { title: "图片预览", sub: "ImagePreview", name: "imagepreview", icon: 'ios-images' },
      { title: "全局提示", sub: "Message", name: "message", icon: 'ios-chatboxes' },
      { title: "通知提醒", sub: "Notice", name: "notice", icon: 'ios-notifications' },
      { title: "对话框", sub: "Modal", name: "modal", icon: 'ios-chatbubbles' },
      { title: "标签", sub: "Tag", name: "tag", icon: 'ios-bookmark' },
      { title: "时间轴", sub: "TimeLine", name: "timeline", icon: 'ios-time' },
      { title: "气泡卡片", sub: "Poptip", name: "poptip", icon: 'ios-chatbubbles' },
      { title: "气泡确认框", sub: "Popconfirm", name: "popconfirm", icon: 'ios-chatbubbles' },
      { title: "加载中", sub: "Spin", name: "spin", icon: 'ios-radio' },
      { title: "进度条", sub: "Progress", name: "progress", icon: 'ios-pulse' },
      { title: "文字提示", sub: "Tooltip", name: "tooltip", icon: 'ios-text' },
      { title: "树形控件", sub: "Tree", name: "tree", icon: 'ios-git-merge' },
      // { title: "树选择", sub: "TreeSelect", name: "treeselect", icon: 'ios-git-pull-request' },
    ]
  },
  {
    title: '导航',
    child: [
      { title: "图钉", sub: "Affix", name: "affix", icon: 'ios-pin' },
      { title: "面包屑", sub: "Breadcrumb", name: "breadcrumb", icon: 'ios-arrow-forward' },
      // { title: "下拉菜单", sub: "Dropdown", name: "dropdown", icon: 'ios-arrow-dropdown-circle' },
      // { title: "加载进度", sub: "Loading", name: "loading", icon: 'ios-pulse' },
      { title: "导航菜单", sub: "Menu", name: "menu", icon: 'ios-list' },
      { title: "分页", sub: "Page", name: "page", icon: 'ios-fastforward' },
      // { title: "步骤条", sub: "Steps", name: "steps", icon: 'ios-done-all' },
      { title: "标签页", sub: "Tabs", name: "tabs", icon: 'ios-photos' },
    ]
  },
  {
    title: 'Other',
    child: [
      { title: "回到顶部", sub: "BackTop", name: "backtop", icon: 'md-arrow-up' },
      { title: "分割线", sub: "Divider", name: "divider", icon: 'md-remove' },

    ]
  },
]
const baseNav = [
  { title: "快速上手", name: "start", },
  { title: "在 vue 中使用", name: "use-in-vue" },
  { title: "SSR 支持", name: "ssr" },
  { title: "更新日志", name: "log", log: 1, },
  { title: "定制主题", name: "theme" },
  { title: "kui-loader", name: "kui-loader" }
]

export { Nav, baseNav }