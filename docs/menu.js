export default [
  {
    title: "开始",
    key: 'starts',
    child: [
      { title: "快速上手", sub: 'Getting Started', name: "start", icon: 'caret-forward-circle' },
      { title: "在 vue 中使用", sub: 'Use', name: "use-in-vue", icon: 'logo-vue' },
      { title: "SSR 支持", sub: 'SSR', name: "ssr", icon: 'globe' },
      { title: "国际化", sub: 'Multilingual', name: "i18n", icon: 'language' },
      { title: "更新日志", sub: 'Update Log', name: "log", update: true, icon: 'reader' },
      { title: "定制主题", sub: 'Themes', name: "theme", icon: 'shirt' },
      { title: "暗色模式", sub: 'Dark Mode', name: "dark-mode", icon: 'invert-mode' },
      { title: "kui-loader", sub: 'Loader', name: "kui-loader", icon: 'help-buoy' },
    ]
  },
  {
    title: "通用",
    key: 'base',
    child: [
      { title: "组件总览", sub: 'All Components', name: "all", icon: 'file-tray-stacked' },
      { title: "按钮", sub: "Button", name: "button", icon: 'square' },
      { title: "图标", sub: "Icon", name: "icon", icon: "heart" },
    ]
  },
  {
    title: '布局',
    key: 'layouts',
    child: [
      { title: "分割线", sub: "Divider", name: "divider", icon: 'remove' },
      { title: "栅格", sub: "Grid", name: "grid", icon: 'grid' },
      { title: "布局", sub: "Layout", name: "layout", icon: 'albums' },
      { title: "间距", sub: "Space", name: "space", icon: 'code' },
    ]
  },
  {
    title: '导航',
    key: 'nav',
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
    key: 'forms',
    child: [
      { title: "输入框", sub: "Input", name: "input", icon: 'create' },
      { title: "数字输入框", sub: "InputNumber", name: "inputnumber", icon: 'create' },
      { title: "多选框", sub: "Checkbox", name: "checkbox", icon: 'checkbox' },
      { title: "单选框", sub: "Radio", name: "radio", icon: 'checkmark-circle' },
      { title: "开关", sub: "Switch", name: "switch", icon: 'toggle' },
      { title: "选择器", sub: "Select", name: "select", icon: 'chevron-down' },
      { title: "日期选择框", sub: "DatePicker", name: "datepicker", icon: 'calendar' },
      { title: "上传", sub: "Upload", name: "upload", icon: 'cloud-upload', update: true },
      { title: "滑动输入条", sub: "Slider", name: "slider", icon: 'options' },
      { title: "表单", sub: "Form", name: "form", icon: 'list' },
    ]
  },
  {
    title: '数据展示',
    key: 'datas',
    child: [
      { title: "头像", sub: "Avatar", name: "avatar", icon: 'person' },
      { title: "卡片", sub: "Card", name: "card", icon: 'card' },
      { title: "走马灯", sub: "Carousel", name: "carousel", icon: 'film' },
      { title: "折叠面板", sub: "Collapse", name: "collapse", icon: 'map' },
      { title: "描述列表", sub: "Descriptions", name: "descriptions", icon: 'ellipsis-vertical' },
      { title: "图片", sub: "Image", name: "image", icon: 'images' },
      { title: "表格", sub: "Table", name: "table", icon: 'grid' },
      { title: "时间轴", sub: "TimeLine", name: "timeline", icon: 'time' },
      { title: "树形控件", sub: "Tree", name: "tree", icon: 'git-merge' },
      // { title: "树选择", sub: "TreeSelect", name: "treeselect", icon: 'git-pull-request' },
    ]
  },
  {
    title: '反馈',
    key: 'notices',
    child: [
      { title: "警告提示", sub: "Alert", name: "alert", icon: 'alert-circle' },
      { title: "徽标", sub: "Badge", name: "badge", icon: 'mail-unread' },
      { title: "抽屉", sub: "Drawer", name: "drawer", icon: 'file-tray-stacked' },
      { title: "空状态", sub: "Empty", name: "empty", icon: 'file-tray' },
      { title: "全局提示", sub: "Message", name: "message", icon: 'chatbubble' },
      { title: "通知提醒", sub: "Notice", name: "notice", icon: 'notifications' },
      { title: "对话框", sub: "Modal", name: "modal", icon: 'browsers' },
      { title: "气泡卡片", sub: "Poptip", name: "poptip", icon: 'chatbox-ellipses' },
      { title: "气泡确认框", sub: "Popconfirm", name: "popconfirm", icon: 'chatbubbles' },
      { title: "评分", sub: "Rate", name: "rate", icon: 'star' },
      { title: "骨架屏", sub: "Skeleton", name: "skeleton", icon: 'barcode' },
      { title: "加载中", sub: "Spin", name: "spin", icon: 'radio' },
      { title: "进度条", sub: "Progress", name: "progress", icon: 'timer' },
      { title: "进度", sub: "Loading", name: "loading", icon: 'pulse' },
      { title: "标签", sub: "Tag", name: "tag", icon: 'bookmark' },
      { title: "文字提示", sub: "Tooltip", name: "tooltip", icon: 'chatbubble-ellipses' },
    ]
  },
  {
    title: '其他',
    key: 'other',
    child: [
      { title: "颜色", sub: "ColorPicker", name: "colorpicker", icon: 'color-palette' },
    ]
  }
]