# Layout 布局

协助进行页面级整体布局。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

> 3.0 版本以后使用 `flex` 布局，请注意[浏览器兼容性](http://caniuse.com/#search=flex)

<code src="./demo/documentationLayout.vue">文档/知识库布局 (Documentation Layout)</code>
<code src="./demo/enterpriseAdminConsole.vue">现代企业级管理后台 (Enterprise Admin Console)</code>
<code src="./demo/lowCodeLayout.vue">可视化编辑器布局 (IDE / Low-code Layout)</code>
<code src="./demo/messagingCollaboration.vue">协作聊天布局 (Messaging & Collaboration)</code>
<code src="./demo/portalExhibition.vue">响应式门户/官网布局 (Portal Exhibition)</code>
<code src="./demo/workbenchLayout.vue">任务工作台 (The "Workbench" Details Layout)</code>
