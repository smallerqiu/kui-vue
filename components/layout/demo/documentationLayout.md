<cn>
### 文档/知识库布局 (Documentation Layout)
模仿类似 Vue 或 React 官方文档的结构，重点在于侧边栏是固定的目录导航。
- 布局逻辑：Header 跨越全宽，下方 Layout 包含 Sider（通常在左侧或右侧作为索引）和 Content。
- 搭配组件：Input（搜索框）、Anchor（锚点导航）、Divider（分割线）。
</cn>

<en>
### Documentation/Knowledge Base Layout  
Imitate the structure of official documentation like Vue or React, with a focus on a fixed sidebar for directory navigation.  
- **Layout Logic**: The Header spans the full width, and the Layout below includes a Sider (usually on the left or right as an index) and Content.  
- **Matching Components**: Input (search box), Anchor (anchor navigation), Divider (divider line).
</en>

```vue
<template>
  <k-layout class="demo-docs-layout">
    <k-header class="docs-header">
      <Space class="logo"><Icon :type="LogoKui" :size="20" />KUI Docs</Space>
      <k-input placeholder="Search..." style="width: 300px" />
    </k-header>

    <k-layout class="docs-body">
      <k-sider width="280" class="docs-sider-left">
        <div class="sider-menu-wrapper">
          <k-menu mode="inline" :defaultOpenKeys="['g1']" class="docs-menu">
            <k-menu-group key="g1" title="Guide">
              <k-menu-item key="intro">Started</k-menu-item>
              <k-menu-item key="custom">Custom Theme</k-menu-item>
            </k-menu-group>
            <k-menu-group key="g2" title="Universal">
              <k-menu-item key="btn">Button</k-menu-item>
              <k-menu-item key="icon">Icon</k-menu-item>
              <k-menu-item key="layout">Layout</k-menu-item>
            </k-menu-group>
          </k-menu>
        </div>
      </k-sider>

      <k-content class="docs-content">
        <article class="markdown-body">
          <h1>Layout</h1>
          <p>Assist in overall page layout planning.</p>
          <section v-for="i in 10" :key="i">
            <h2 :id="'part-' + i">Chapter {{ i }}</h2>
            <div class="code-demo-box">Sample code display area...</div>
          </section>
        </article>
      </k-content>

      <k-sider width="200" class="docs-sider-right" hide-trigger>
        <div class="anchor-wrapper">
          <p class="anchor-title">Contents</p>
          <k-anchor>
            <k-anchor-link href="#part-1" title="Basic" />
            <k-anchor-link href="#part-2" title="Sidebar collapse" />
            <k-anchor-link href="#part-3" title="Custom trigger" />
          </k-anchor>
        </div>
      </k-sider>
    </k-layout>
  </k-layout>
</template>
<script setup>
import { LogoKui } from "kui-icons";
</script>
<style scoped>
.demo-docs-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.docs-header {
  background: var(--kui-color-bg);
  border-bottom: 1px solid var(--kui-color-border);
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 40px;
}
.docs-menu {
  border: none;
}
.docs-body {
  flex: 1;
  overflow: hidden;
}
.docs-sider-left {
  background: var(--kui-color-bg);
  border-right: 1px solid var(--kui-color-border);
  overflow-y: auto;
}
.docs-content {
  background: var(--kui-color-bg-layout);
  overflow-y: auto;
  padding: 40px 60px;
  scroll-behavior: smooth;
}
.docs-sider-right {
  background: var(--kui-color-bg-container);
  padding: 24px 16px;
}

.code-demo-box {
  border: 1px solid var(--kui-color-border);
  height: 150px;
  margin: 20px 0;
  border-radius: 8px;
  background: var(--kui-color-bg-component);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}
.anchor-title {
  font-weight: bold;
  font-size: 12px;
  color: #999;
  margin-bottom: 12px;
  text-transform: uppercase;
}
</style>
```
