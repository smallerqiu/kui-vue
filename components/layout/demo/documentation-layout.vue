<template>
  <Layout class="demo-docs-layout">
    <Header class="docs-header">
      <Space class="logo"><Icon :type="LogoKui" :size="20" />KUI Docs</Space>
      <Input placeholder="Search..." style="width: 300px" />
    </Header>

    <Layout class="docs-body">
      <Sider width="280" class="docs-sider-left">
        <div class="sider-menu-wrapper">
          <Menu mode="inline" :openKeys="['g1']" class="docs-menu">
            <Menu-group key="g1" title="Guide">
              <MenuItem key="intro">Started</MenuItem>
              <MenuItem key="custom">Custom Theme</MenuItem>
            </Menu-group>
            <Menu-group key="g2" title="Universal">
              <MenuItem key="btn">Button</MenuItem>
              <MenuItem key="icon">Icon</MenuItem>
              <MenuItem key="layout">Layout</MenuItem>
            </Menu-group>
          </Menu>
        </div>
      </Sider>

      <Content class="docs-content">
        <article class="markdown-body">
          <h1>Layout</h1>
          <p>Assist in overall page layout planning.</p>
          <section v-for="i in 10" :key="i">
            <h2 :id="'part-' + i">Chapter {{ i }}</h2>
            <div class="code-demo-box">Sample code display area...</div>
          </section>
        </article>
      </Content>

      <Sider width="200" class="docs-sider-right">
        <div class="anchor-wrapper">
          <p class="anchor-title">Contents</p>
          <Anchor>
            <AnchorLink href="#part-1" title="Basic" />
            <AnchorLink href="#part-2" title="Sidebar collapse" />
            <AnchorLink href="#part-3" title="Custom trigger" />
          </Anchor>
        </div>
      </Sider>
    </Layout>
  </Layout>
</template>
<script setup lang="ts">
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
