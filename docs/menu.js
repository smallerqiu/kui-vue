const Nav = [
  {
    title: "通用",
    child: [
      { title: "按钮", sub: "Button", name: "button", icon: 'square' },
      { title: "图标", sub: "Icon", name: "icon", icon: "heart" },
    ]
  },
  {
    title: '布局',
    child: [
      { title: "分割线", sub: "Divider", name: "divider", icon: 'remove' },
      { title: "栅格", sub: "Grid", name: "grid", icon: 'grid' },
      { title: "布局", sub: "Layout", name: "layout", icon: 'albums' },
      { title: "间距", sub: "Space", name: "space", icon: 'reorder-four' },
    ]
  },
  {
    title: '导航',
    child: [
      { title: "图钉", sub: "Affix", name: "affix", icon: 'pin' },
      { title: "面包屑", sub: "Breadcrumb", name: "breadcrumb", icon: 'chevron-forward' },
      { title: "下拉菜单", sub: "Dropdown", name: "dropdown", icon: 'caret-down' },
      // { title: "加载进度", sub: "Loading", name: "loading", icon: 'pulse' },
      { title: "导航菜单", sub: "Menu", name: "menu", icon: 'list' },
      { title: "分页", sub: "Page", name: "page", icon: 'ellipsis-horizontal' },
      // { title: "步骤条", sub: "Steps", name: "steps", icon: 'done-all' },
      { title: "标签页", sub: "Tabs", name: "tabs", icon: 'duplicate' },
      { title: "回到顶部", sub: "BackTop", name: "backtop", icon: 'arrow-up' },
    ]
  },
  {
    title: "表单",
    child: [
      { title: "输入框", sub: "Input", name: "input", icon: 'create' },
      { title: "多选框", sub: "Checkbox", name: "checkbox", icon: 'checkbox' },
      { title: "单选框", sub: "Radio", name: "radio", icon: 'checkmark-circle' },
      { title: "开关", sub: "Switch", name: "switch", icon: 'toggle' },
      { title: "选择器", sub: "Select", name: "select", icon: 'chevron-down' },
      { title: "日期选择框", sub: "DatePicker", name: "datepicker", icon: 'calendar' },
      // { title: "上传", sub: "Upload", name: "upload", icon: 'cloud-upload' },
      { title: "滑动输入条", sub: "Slider", name: "slider", icon: 'options' },
      { title: "表单", sub: "Form", name: "form", icon: 'list' },
    ]
  },
  {
    title: '数据展示',
    child: [
      { title: "头像", sub: "Avatar", name: "avatar", icon: 'person' },
      { title: "卡片", sub: "Card", name: "card", icon: 'card' },
      { title: "走马灯", sub: "Carousel", name: "carousel", icon: 'film' },
      { title: "折叠面板", sub: "Collapse", name: "collapse", icon: 'map' },
      { title: "图片", sub: "Image", name: "image", icon: 'images' },
      { title: "表格", sub: "Table", name: "table", icon: 'grid' },
      { title: "时间轴", sub: "TimeLine", name: "timeline", icon: 'time' },
      { title: "树形控件", sub: "Tree", name: "tree", icon: 'git-merge' },
      // { title: "树选择", sub: "TreeSelect", name: "treeselect", icon: 'git-pull-request' },
    ]
  },
  {
    title: '反馈',
    child: [
      { title: "警告提示", sub: "Alert", name: "alert", icon: 'alert-circle' },
      { title: "徽标", sub: "Badge", name: "badge", icon: 'mail-unread' },
      { title: "抽屉", sub: "Drawer", name: "drawer", icon: 'file-tray-stacked' },
      { title: "空状态", sub: "Empty", name: "empty", icon: 'file-tray' },
      { title: "全局提示", sub: "Message", name: "message", icon: 'chatbubble' },
      { title: "通知提醒", sub: "Notice", name: "notice", icon: 'notifications' },
      { title: "对话框", sub: "Modal", name: "modal", icon: 'browsers-outline' },
      { title: "气泡卡片", sub: "Poptip", name: "poptip", icon: 'chatbox-ellipses' },
      { title: "气泡确认框", sub: "Popconfirm", name: "popconfirm", icon: 'chatbubbles' },
      { title: "评分", sub: "Rate", name: "rate", icon: 'star' },
      { title: "加载中", sub: "Spin", name: "spin", icon: 'radio' },
      { title: "进度条", sub: "Progress", name: "progress", icon: 'pulse' },
      { title: "进度", sub: "Loading", name: "loading", icon: 'pulse' },
      { title: "标签", sub: "Tag", name: "tag", icon: 'bookmark' },
      { title: "文字提示", sub: "Tooltip", name: "tooltip", icon: 'chatbubble-ellipses' },
    ]
  },
  {
    title: '其他',
    child: [
      { title: "颜色", sub: "ColorPicker", name: "colorpicker", icon: 'color-palette' },
    ]
  }
]
const baseNav = [
  { title: "快速上手", name: "start", },
  { title: "在 vue 中使用", name: "use-in-vue", badeg: true, },
  { title: "SSR 支持", name: "ssr" },
  { title: "更新日志", name: "log", badeg: true, },
  { title: "定制主题", name: "theme", badeg: true, },
  { title: "kui-loader", name: "kui-loader" }
]

export { Nav, baseNav }