const navs = [
  {
    title: "开始",
    key: 'start',
    child: [
      { title: "快速开始", sub: 'Getting Started', name: "getting-started", icon: 'start' },
      { title: "SSR 支持", sub: 'SSR', name: "ssr", icon: 'ssr' },
      { title: "国际化", sub: 'Multilingual', name: "language", icon: 'language' },
      { title: "更新日志", sub: 'Update Log', name: "logs", icon: 'logs' },
      { title: "定制主题", sub: 'Themes', name: "theme", icon: 'theme' },
      { title: "暗色模式", sub: 'Dark Mode', name: "dark-mode", icon: 'dark' },
      { title: "组件总览", sub: 'All Components', name: "components", icon: 'components' },
    ]
  },
  {
    title: "通用",
    key: 'basic',
    child: [
      { title: "按钮", sub: "Button", name: "button", icon: 'button' },
      { title: "图标", sub: "Icon", name: "icons", icon: "icons" },
    ]
  },
  {
    title: '布局',
    key: 'layouts',
    child: [
      { title: "分割线", sub: "Divider", name: "divider", icon: 'divider' },
      { title: "弹性布局", sub: "Flex", name: "flex", icon: 'flex' },
      { title: "栅格", sub: "Grid", name: "grid", icon: 'grid' },
      { title: "布局", sub: "Layout", name: "layout", icon: 'layout' },
      { title: "间距", sub: "Space", name: "space", icon: 'space' },
    ]
  },
  {
    title: '导航',
    key: 'navigation',
    child: [
      { title: "图钉", sub: "Affix", name: "affix", icon: 'affix' },
      { title: "面包屑", sub: "Breadcrumb", name: "breadcrumb", icon: 'breadcrumbs' },
      { title: "下拉菜单", sub: "Dropdown", name: "dropdown", icon: 'dropdown' },
      { title: "导航菜单", sub: "Menu", name: "menu", icon: 'menu' },
      { title: "分页", sub: "Page", name: "page", icon: 'pagination' },
      // { title: "步骤条", sub: "Steps", name: "steps", icon: 'done-all' },
      { title: "标签页", sub: "Tabs", name: "tabs", icon: 'tabs' },
      { title: "回到顶部", sub: "BackTop", name: "backtop", icon: 'backtop' },
    ]
  },
  {
    title: "表单",
    key: 'forms',
    child: [
      { title: "输入框", sub: "Input", name: "input", icon: 'input' },
      { title: "数字输入框", sub: "InputNumber", name: "inputnumber", icon: 'input-number' },
      { title: "多选框", sub: "Checkbox", name: "checkbox", icon: 'checkbox' },
      { title: "单选框", sub: "Radio", name: "radio", icon: 'radio' },
      { title: "开关", sub: "Switch", name: "switch", icon: 'switch' },
      { title: "选择器", sub: "Select", name: "select", icon: 'select' },
      { title: "树选择器", sub: "TreeSelect", name: "treeselect", icon: 'select' },
      { title: "日期选择框", sub: "DatePicker", name: "datepicker", icon: 'date' },
      { title: "上传", sub: "Upload", name: "upload", icon: 'upload'},
      { title: "滑动输入条", sub: "Slider", name: "slider", icon: 'slider' },
      { title: "表单", sub: "Form", name: "form", icon: 'form' },
    ]
  },
  {
    title: '数据展示',
    key: 'datas',
    child: [
      { title: "头像", sub: "Avatar", name: "avatar", icon: 'avatar' },
      { title: "卡片", sub: "Card", name: "card", icon: 'card' },
      { title: "走马灯", sub: "Carousel", name: "carousel", icon: 'carousel' },
      { title: "折叠面板", sub: "Collapse", name: "collapse", icon: 'collapse' },
      { title: "描述列表", sub: "Descriptions", name: "descriptions", icon: 'descriptions' },
      { title: "图片", sub: "Image", name: "image", icon: 'images' },
      { title: "表格", sub: "Table", name: "table", icon: 'table' },
      { title: "时间轴", sub: "TimeLine", name: "timeline", icon: 'timeline' },
      { title: "树形控件", sub: "Tree", name: "tree", icon: 'tree' },
      // { title: "树选择", sub: "TreeSelect", name: "treeselect", icon: 'git-pull-request' },
    ]
  },
  {
    title: '反馈',
    key: 'notices',
    child: [
      { title: "警告提示", sub: "Alert", name: "alert", icon: 'alert' },
      { title: "徽标", sub: "Badge", name: "badge", icon: 'badge' },
      { title: "抽屉", sub: "Drawer", name: "drawer", icon: 'drawer' },
      { title: "空状态", sub: "Empty", name: "empty", icon: 'empty' },
      { title: "全局提示", sub: "Message", name: "message", icon: 'message' },
      { title: "通知提醒", sub: "Notice", name: "notice", icon: 'notice' },
      { title: "对话框", sub: "Modal", name: "modal", icon: 'modal' },
      { title: "气泡卡片", sub: "Poptip", name: "poptip", icon: 'poptip' },
      { title: "气泡确认框", sub: "Popconfirm", name: "popconfirm", icon: 'popconfirm' },
      { title: "评分", sub: "Rate", name: "rate", icon: 'rate' },
      { title: "骨架屏", sub: "Skeleton", name: "skeleton", icon: 'skeleton' },
      { title: "加载中", sub: "Spin", name: "spin", icon: 'spin' },
      { title: "进度条", sub: "Progress", name: "progress", icon: 'progress' },
      { title: "进度", sub: "Loading", name: "loading", icon: 'loading' },
      { title: "标签", sub: "Tag", name: "tag", icon: 'tag' },
      { title: "文字提示", sub: "Tooltip", name: "tooltip", icon: 'tooltip' },
    ]
  },
  {
    title: '其他',
    key: 'other',
    child: [
      { title: "颜色", sub: "ColorPicker", name: "colorpicker", icon: 'colors' },
    ]
  }
]
let menus = [];
navs.forEach(x => {
  x.child.forEach(y => {
    y.key = x.key
    menus.push(y)
  })
})
export { navs, menus }