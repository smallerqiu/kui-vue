<cn>
### 响应式门户/官网布局 (Portal Exhibition)
适用于信息量较大但层级较浅的门户网站、展示型官网或个人博客。
- 布局逻辑：单一垂直方向的 Layout，直接排布 Header、Content、Footer。
- 搭配组件：Menu（水平模式）、Carousel（轮播图）、Card（内容卡片）。
</cn>

<en>
### Responsive Portal/Official Website Layout (Portal Exhibition)
Suitable for portal websites, showcase websites, or personal blogs with a large amount of information but shallow hierarchy.
- **Layout Logic**: A single vertical Layout, directly arranging Header, Content, and Footer.
- **Matching Components**: Menu (horizontal mode), Carousel (slideshow), Card (content card).
</en>

```vue
<template>
  <k-layout class="portal-layout">
    <k-header class="portal-header">
      <div class="container">
        <Space class="logo"><Icon :type="LogoKui" :size="20" />KUI PRO</Space>
        <k-menu mode="horizontal" class="portal-menu">
          <k-menu-item key="home">Home</k-menu-item>
          <k-menu-item key="comp">Components</k-menu-item>
          <k-menu-item key="resource">Resources</k-menu-item>
          <k-menu-item key="community">Community</k-menu-item>
        </k-menu>
        <Space class="actions">
          <k-button size="small">Sign in</k-button>
          <k-button type="primary" size="small">Get started</k-button>
        </Space>
      </div>
    </k-header>

    <k-content>
      <Carousel :loop="true" >
        <CarouselItem v-for="x in 3" style="height:300px;">
          <div class="hero">
            <h1>Connecting beauty with technology</h1>
            <p>A minimalist enterprise-grade UI component library for Vue 3</p>
          </div>
        </CarouselItem>
      </Carousel>
      <div class="container content-main">
        <k-row :gutter="24">
          <k-col :span="8" v-for="i in 3" :key="i">
            <k-card hoverable title="Feature Showcase">
              <p>Powered by native CSS Variables, it supports instant theme switching.</p>
            </k-card>
          </k-col>
        </k-row>
      </div>
    </k-content>

    <k-footer class="portal-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h4>About KUI</h4>
          <p>Committed to delivering the ultimate developer experience</p>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <a>Design draft</a><br /><a>Change logs</a>
        </div>
        <div class="footer-col">
          <h4>Help</h4>
          <a>Report Bug</a><br /><a>Q & A</a>
        </div>
      </div>
      <k-divider />
      <div class="copyright">Copyright © 2026 KUI Team. All Rights Reserved.</div>
    </k-footer>
  </k-layout>
</template>
<script setup>
import { LogoKui } from "kui-icons";
</script>
<style scoped>
.portal-layout {
  padding: 20px;
  border: 1px solid var(--kui-color-border);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 100%;
}
.portal-header {
  background: var(--kui-color-bg);
  border-bottom: 1px solid var(--kui-color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}
.portal-menu {
  flex: 1;
  border-bottom: none;
  justify-content: center;
}
.hero {
  background: linear-gradient(135deg, #188fff7f 0%, #096dd927 100%);
  padding: 80px 0;
  text-align: center;
}
.hero h1 {
  font-size: 48px;
  margin-bottom: 16px;
}
.content-main {
  padding: 64px 0;
}
.portal-footer {
  /* background: var(--kui-color-bg-3); */
  padding: 48px 0 24px;
}
.footer-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.footer-col h4 {
  margin-bottom: 16px;
}
.copyright {
  text-align: center;
  font-size: 12px;
}
</style>
```
