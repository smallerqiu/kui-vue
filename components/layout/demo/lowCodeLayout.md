<cn>
### 可视化编辑器布局 (IDE / Low-code Layout)
- 场景： 类似于 VS Code、Figma 或低代码平台。
- 核心点： 极简的导航、多列固定高度、以及底部状态栏 (Footer)。
此 Demo 重点展示了 Layout 如何通过多层嵌套，将屏幕空间切分为极小但有序的功能区。
</cn>
<en>
### Modern Enterprise Admin Console
The most common "sidebar navigation + top toolbar" structure, suitable for SaaS products, CMS backends, or ERP systems.
- Layout logic: The outer Layout includes the Sider, while the inner Layout contains the Header, Content, and Footer.
- Matching components: Menu (vertical mode), Breadcrumb, Avatar.
</en>

```vue
<template>
  <k-layout class="ide-layout">
    <k-layout>
      <k-sider width="48" class="ide-rail" theme="dark">
        <div class="rail-icon active"><k-icon name="files" /></div>
        <div class="rail-icon"><k-icon name="search" /></div>
        <div class="rail-icon"><k-icon name="git-branch" /></div>
      </k-sider>

      <k-sider width="200" class="ide-explorer">
        <div class="panel-title">资源管理器</div>
        <div class="file-tree">
          <div class="file-item active">index.vue</div>
          <div class="file-item">slider.jsx</div>
          <div class="file-item">styles.less</div>
        </div>
      </k-sider>

      <k-layout>
        <k-header class="editor-tabs">
          <div class="tab active">index.vue</div>
          <div class="tab">slider.jsx</div>
        </k-header>
        <k-content class="editor-main">
          <pre class="code-preview"><code>export default { ... }</code></pre>
        </k-content>
      </k-layout>

      <k-sider width="240" class="ide-inspector">
        <div class="panel-title">属性设置</div>
        <div class="inspector-content">
          <div class="setting-row"><span>显示模式:</span> <k-switch /></div>
          <div class="setting-row"><span>主色调:</span> <k-input size="small" /></div>
        </div>
      </k-sider>
    </k-layout>

    <k-footer class="ide-status-bar">
      <div class="status-left">Ready</div>
      <div class="status-right">UTF-8 | Vue 3 | Line 10, Col 5</div>
    </k-footer>
  </k-layout>
</template>

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
```
