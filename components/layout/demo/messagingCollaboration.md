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
  <Layout class="chat-container">
    <Sider style="width:260px;" class="chat-sider">
      <div class="sider-header">
        <Input placeholder="Search conversation..." />
      </div>
      <Menu mode="inline" v-model="selectedKeys" style="border:none;padding:10px;">
        <MenuItem key="c1"># Core R&D Team <Badge :count="5" offset="[10, 0]" /></MenuItem>
        <MenuItem key="c2"># Visual Design UI</MenuItem>
        <MenuItem key="c3"># Customer Support (1-on-1)</MenuItem>
      </Menu>
    </Sider>

    <Layout>
      <Header class="chat-header">
        <div class="chat-title"># Core R&D Team <small>(128 members)</small></div>
      </Header>

      <Content class="chat-messages">
        <div class="msg-group" v-for="i in 20" :key="i">
          <Avatar size="small" />
          <div class="msg-bubble">
            <div class="msg-info">User_{{ i }} <span>10:30 AM</span></div>
            <div class="msg-text">This is simulated historical message content.</div>
          </div>
        </div>
      </Content>

      <Footer class="chat-input-box">
        <div class="toolbar">
          <Icon name="smile" /> <Icon name="picture" /> <Icon name="paper-clip" />
        </div>
        <TextArea :rows="3" placeholder="Press Cmd + Enter to send the message..." />
        <div class="input-actions">
          <Button type="primary" size="small">Send</Button>
        </div>
      </Footer>
    </Layout>
  </Layout>
</template>
<script setup>
import { ref } from "vue";
const selectedKeys = ref(["c1"]);
</script>
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
  padding: 10px;
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
