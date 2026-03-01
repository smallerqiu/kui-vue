<cn>
### 协作聊天布局 (Messaging & Collaboration)
- 场景： 客服系统、Slack 镜像、应用内私信。
- 核心点： 内容区（Content）负责消息流，页脚（Footer）作为固定高度的输入区域。
- 这个案例展示了如何让 Footer 承载复杂的交互（文本框、表情按钮、发送键）。
</cn>
<en>
### Modern Enterprise Admin Console
The most common "sidebar navigation + top toolbar" structure, suitable for SaaS products, CMS backends, or ERP systems.
- Layout logic: The outer Layout includes the Sider, while the inner Layout contains the Header, Content, and Footer.
- Matching components: Menu (vertical mode), Breadcrumb, Avatar.
</en>

```vue
<template>
  <k-layout class="chat-container">
    <k-sider style="width:260px;" class="chat-sider">
      <div class="sider-header">
        <k-input placeholder="Search conversation..." />
      </div>
      <k-menu mode="inline" :selectedKeys="['c1']" style="border:none">
        <k-menu-item key="c1"># Core R&D Team <k-badge :count="5" offset="[10, 0]" /></k-menu-item>
        <k-menu-item key="c2"># Visual Design UI</k-menu-item>
        <k-menu-item key="c3"># Customer Support (1-on-1)</k-menu-item>
      </k-menu>
    </k-sider>

    <k-layout>
      <k-header class="chat-header">
        <div class="chat-title"># Core R&D Team <small>(128 members)</small></div>
      </k-header>

      <k-content class="chat-messages">
        <div class="msg-group" v-for="i in 20" :key="i">
          <k-avatar size="small" />
          <div class="msg-bubble">
            <div class="msg-info">User_{{ i }} <span>10:30 AM</span></div>
            <div class="msg-text">This is simulated historical message content.</div>
          </div>
        </div>
      </k-content>

      <k-footer class="chat-input-box">
        <div class="toolbar">
          <k-icon name="smile" /> <k-icon name="picture" /> <k-icon name="paper-clip" />
        </div>
        <k-text-area :rows="3" placeholder="Press Cmd + Enter to send the message..." />
        <div class="input-actions">
          <k-button type="primary" size="small">Send</k-button>
        </div>
      </k-footer>
    </k-layout>
  </k-layout>
</template>

<style scoped>
.chat-container {
  height: 80vh;
  border: 1px solid var(--kui-color-border);
  border-radius: 8px;
  overflow: hidden;
}
.chat-sider {
  background: var(--kui-color-layout);
  border-right: 1px solid var(--kui-color-border);
}
.sider-header {
  padding: 16px;
}
.chat-header {
  background: var(--kui-color-bg-2);
  border-bottom: 1px solid var(--kui-color-border);
  padding: 10px 20px;
}
.chat-messages {
  padding: 24px;
  background: var(--kui-color-container);
  overflow-y: auto;
}
.msg-group {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}
.msg-bubble {
  background: var(--kui-color-bg-component);
  padding: 8px 12px;
  border-radius: 4px 12px 12px 12px;
}
.msg-info {
  font-size: 12px;
  margin-bottom: 4px;
  color: #999;
}
.chat-input-box {
  background: var(--kui-color-bg-component);
  border-top: 1px solid var(--kui-color-border);
  padding: 12px 20px;
}
.toolbar {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
  color: #666;
  cursor: pointer;
}
.input-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>
```
