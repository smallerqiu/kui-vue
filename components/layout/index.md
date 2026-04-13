# Layout 布局

协助进行页面级整体布局。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

> 3.0 版本以后使用 `flex` 布局，请注意[浏览器兼容性](http://caniuse.com/#search=flex)

## 代码演示

[现代企业级管理后台 (Enterprise Admin Console)](./demo/enterprise-admin-console.vue)

- 最常见的“侧边导航 + 顶部工具栏”结构，适用于 SaaS 产品、CMS 后台或 ERP 系统。 - 布局逻辑：外层 Layout 包含 Sider，内层 Layout 包含 Header、Content 和 Footer。 - 搭配组件：Menu（垂直模式）、Breadcrumb（面包屑）、Avatar（头像）。

[响应式门户/官网布局 (Portal Exhibition)](./demo/portal-exhibition.vue)

- 适用于信息量较大但层级较浅的门户网站、展示型官网或个人博客。 - 布局逻辑：单一垂直方向的 Layout，直接排布 Header、Content、Footer。 - 搭配组件：Menu（水平模式）、Carousel（轮播图）、Card（内容卡片）。

[文档/知识库布局 (Documentation Layout)](./demo/documentation-layout.vue)

- 模仿类似 Vue 或 React 官方文档的结构，重点在于侧边栏是固定的目录导航。 - 布局逻辑：Header 跨越全宽，下方 Layout 包含 Sider（通常在左侧或右侧作为索引）和 Content。 - 搭配组件：Input（搜索框）、Anchor（锚点导航）、Divider（分割线）。

[任务工作台 (The "Workbench" Details Layout)](./demo/workbench-layout.vue)

- 左侧导航 + 中间看板 + 右侧详情面板 (Right Sider)。

[协作聊天布局 (Messaging & Collaboration)](./demo/messaging-collaboration.vue)

- 场景： 客服系统、Slack 镜像、应用内私信。 - 核心点： 内容区（Content）负责消息流，页脚（Footer）作为固定高度的输入区域。 - 这个案例展示了如何让 Footer 承载复杂的交互（文本框、表情按钮、发送键）。

[可视化编辑器布局 (IDE / Low-code Layout)](./demo/low-code-layout.vue)

- 场景： 类似于 VS Code、Figma 或低代码平台。 - 核心点： 极简的导航、多列固定高度、以及底部状态栏 (Footer)。 此 Demo 重点展示了 Layout 如何通过多层嵌套，将屏幕空间切分为极小但有序的功能区。
