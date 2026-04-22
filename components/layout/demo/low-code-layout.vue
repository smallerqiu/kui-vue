<template>
  <Layout class="ide-layout">
    <Layout>
      <Sider width="48" class="ide-rail">
        <div class="rail-icon active"><Icon :type="Files" /></div>
        <div class="rail-icon"><Icon :type="Search" /></div>
        <div class="rail-icon"><Icon :type="GitBranch" /></div>
      </Sider>

      <Sider width="200" class="ide-explorer">
        <div class="panel-title">Explorer</div>
        <div class="file-tree">
          <div class="file-item active">index.vue</div>
          <div class="file-item">slider.jsx</div>
          <div class="file-item">styles.less</div>
        </div>
      </Sider>

      <Layout>
        <Header class="editor-tabs">
          <div class="tab active">index.vue</div>
          <div class="tab">slider.jsx</div>
        </Header>
        <Content class="editor-main">
          <pre class="code-preview"><code>export default { ... }</code></pre>
        </Content>
      </Layout>

      <Sider style="width: 240" class="ide-inspector">
        <div class="panel-title">Attribute Settings</div>
        <div class="inspector-content">
          <div class="setting-row"><span>Display mode:</span> <k-switch /></div>
          <div class="setting-row"><span>Main color:</span> <Input size="small" /></div>
        </div>
      </Sider>
    </Layout>

    <Footer class="ide-status-bar">
      <div class="status-left">Ready</div>
      <div class="status-right">UTF-8 | Vue 3 | Line 10, Col 5</div>
    </Footer>
  </Layout>
</template>
<script setup lang="ts">
import { Files, GitBranch, Search } from "kui-icons";
</script>
<style scoped>
.ide-layout {
  height: 100vh;
  background: #1e1e1e;
  color: #ccc;
  overflow: hidden;
}
.ide-rail {
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.rail-icon {
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
}
.rail-icon.active {
  color: var(--kui-color-primary);
  border-left: 2px solid;
}
.ide-explorer,
.ide-inspector {
  background: #252526;
  border-right: 1px solid #111;
  font-size: 12px;
}
.panel-title {
  padding: 10px 16px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
}
.file-item {
  padding: 4px 20px;
  font-size: 13px;
  cursor: pointer;
}
.file-item.active {
  background: #37373d;
  color: #fff;
}
.editor-tabs {
  background: #2d2d2d;
  height: 35px;
  line-height: 35px;
  display: flex;
}
.tab {
  padding: 0 20px;
  border-right: 1px solid #1e1e1e;
  font-size: 12px;
  cursor: pointer;
}
.tab.active {
  background: #1e1e1e;
  color: #fff;
}
.editor-main {
  background: #1e1e1e;
  padding: 20px;
}
.ide-status-bar {
  height: 22px;
  padding: 0 12px;
  background: #007acc;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.setting-row {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
