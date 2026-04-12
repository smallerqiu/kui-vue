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
<script setup lang="ts">
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