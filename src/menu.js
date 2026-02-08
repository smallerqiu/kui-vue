const navData = [
  {
    title: "开始",
    key: "start",
    children: [
      {
        title: "快速开始",
        sub: "Getting Started",
        name: "getting-started",
        icon: "Start",
      },
      { title: "SSR 支持", sub: "SSR", name: "ssr", icon: "Ssr" },
      {
        title: "国际化",
        sub: "Multilingual",
        name: "language",
        icon: "Language",
      },
      { title: "更新日志", sub: "Update Log", name: "logs", icon: "Logs" },
      // { title: "定制主题", sub: "Themes", name: "theme", icon: "theme" },
      { title: "暗色模式", sub: "Dark Mode", name: "dark-mode", icon: "Dark" },
      {
        title: "组件总览",
        sub: "All Components",
        name: "components",
        icon: "Components",
      },
    ],
  },
  {
    title: "通用",
    key: "basic",
    children: [
      { title: "按钮", sub: "Button", name: "button", icon: "Button" },
      { title: "图标", sub: "Icon", name: "icons", icon: "Icons" },
    ],
  },
  {
    title: "布局",
    key: "layouts",
    children: [
      { title: "分割线", sub: "Divider", name: "divider", icon: "Divider" },
      { title: "弹性布局", sub: "Flex", name: "flex", icon: "Flex" },
      { title: "栅格", sub: "Row Col", name: "row-col", icon: "RowCol" },
      { title: "网格", sub: "Grid", name: "grid", icon: "Grid" },
      { title: "布局", sub: "Layout", name: "layout", icon: "Layout" },
      { title: "间距", sub: "Space", name: "space", icon: "Space" },
    ],
  },
  {
    title: "导航",
    key: "navigation",
    children: [
      { title: "图钉", sub: "Affix", name: "affix", icon: "Affix" },
      {
        title: "面包屑",
        sub: "Breadcrumb",
        name: "breadcrumb",
        icon: "Breadcrumbs",
      },
      {
        title: "下拉菜单",
        sub: "Dropdown",
        name: "dropdown",
        icon: "Dropdown",
      },
      { title: "导航菜单", sub: "Menu", name: "menu", icon: "Menu" },
      { title: "分页", sub: "Page", name: "page", icon: "Pagination" },
      // { title: "步骤条", sub: "Steps", name: "steps", icon: 'done-all' },
      { title: "标签页", sub: "Tabs", name: "tabs", icon: "Tabs" },
      { title: "回到顶部", sub: "BackTop", name: "backtop", icon: "Backtop" },
    ],
  },
  {
    title: "表单",
    key: "forms",
    children: [
      { title: "输入框", sub: "Input", name: "input", icon: "Input" },
      {
        title: "数字输入框",
        sub: "InputNumber",
        name: "inputnumber",
        icon: "InputNumber",
      },
      { title: "多选框", sub: "Checkbox", name: "checkbox", icon: "Checkbox" },
      { title: "单选框", sub: "Radio", name: "radio", icon: "Radio" },
      { title: "开关", sub: "Switch", name: "switch", icon: "Switch" },
      { title: "选择器", sub: "Select", name: "select", icon: "Select" },
      {
        title: "树选择器",
        sub: "TreeSelect",
        name: "treeselect",
        icon: "TreeSelect",
      },
      {
        title: "日期选择框",
        sub: "DatePicker",
        name: "datepicker",
        icon: "Date",
      },
      { title: "上传", sub: "Upload", name: "upload", icon: "Upload" },
      { title: "滑动输入条", sub: "Slider", name: "slider", icon: "Slider" },
      { title: "表单", sub: "Form", name: "form", icon: "Form" },
    ],
  },
  {
    title: "数据展示",
    key: "data",
    children: [
      { title: "头像", sub: "Avatar", name: "avatar", icon: "Avatar" },
      { title: "卡片", sub: "Card", name: "card", icon: "Card" },
      { title: "走马灯", sub: "Carousel", name: "carousel", icon: "Carousel" },
      {
        title: "折叠面板",
        sub: "Collapse",
        name: "collapse",
        icon: "Collapse",
      },
      {
        title: "描述列表",
        sub: "Descriptions",
        name: "descriptions",
        icon: "Descriptions",
      },
      { title: "图片", sub: "Image", name: "image", icon: "Images" },
      {
        title: "统计卡片",
        sub: "StatCard",
        name: "statcard",
        icon: "Card",
      },
      { title: "表格", sub: "Table", name: "table", icon: "Table" },
      { title: "时间轴", sub: "TimeLine", name: "timeline", icon: "Timeline" },
      { title: "树形控件", sub: "Tree", name: "tree", icon: "Tree" },
      // { title: "树选择", sub: "TreeSelect", name: "treeselect", icon: 'git-pull-request' },
    ],
  },
  {
    title: "反馈",
    key: "notices",
    children: [
      { title: "警告提示", sub: "Alert", name: "alert", icon: "Alert" },
      { title: "徽标", sub: "Badge", name: "badge", icon: "Badge" },
      { title: "抽屉", sub: "Drawer", name: "drawer", icon: "Drawer" },
      { title: "空状态", sub: "Empty", name: "empty", icon: "Empty" },
      { title: "全局提示", sub: "Message", name: "message", icon: "Message" },
      { title: "通知提醒", sub: "Notice", name: "notice", icon: "Notice" },
      { title: "对话框", sub: "Modal", name: "modal", icon: "Modal" },
      { title: "气泡卡片", sub: "Poptip", name: "poptip", icon: "Poptip" },
      {
        title: "气泡确认框",
        sub: "Popconfirm",
        name: "popconfirm",
        icon: "Popconfirm",
      },
      { title: "评分", sub: "Rate", name: "rate", icon: "Rate" },
      { title: "骨架屏", sub: "Skeleton", name: "skeleton", icon: "Skeleton" },
      { title: "加载中", sub: "Spin", name: "spin", icon: "Spin" },
      { title: "进度条", sub: "Progress", name: "progress", icon: "Progress" },
      { title: "进度", sub: "Loading", name: "loading", icon: "Loading" },
      { title: "标签", sub: "Tag", name: "tag", icon: "Tag" },
      { title: "文字提示", sub: "Tooltip", name: "tooltip", icon: "Tooltip" },
    ],
  },
  {
    title: "其他",
    key: "other",
    children: [
      {
        title: "颜色",
        sub: "ColorPicker",
        name: "colorpicker",
        icon: "Colors",
      },
    ],
  },
];

const routeData = navData.reduce((current, { key, children }) => {
  current.push(...children);
  children.map((x) => (x.key = key));
  return current;
}, []);
export { navData, routeData };
