<template>
  <Layout class="workbench-layout">
    <Sider width="80" class="app-rail">
      <Avatar :size="40" class="app-logo">P</Avatar>
      <Menu mode="vertical" :inlineCollapsed="true" style="border: none" v-model="selectedKeys">
        <MenuItem key="t1" :icon="CircleCheck"></MenuItem>
        <MenuItem key="t2" :icon="Calendar"></MenuItem>
        <MenuItem key="t3" :icon="ChartBarBig"></MenuItem>
      </Menu>
    </Sider>

    <Layout>
      <Header class="workbench-header">
        <div class="header-breadcrumb">
          <span class="proj-name">Project A</span> / <span>Current iteration</span>
        </div>
        <Flex class="header-ops">
          <AvatarGroup :max-count="3">
            <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" :size="25" />
            <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" :size="25" />
          </AvatarGroup>
        </Flex>
      </Header>

      <Layout style="overflow: hidden">
        <Content class="workbench-main">
          <div class="task-list">
            <div v-for="i in 10" :key="i" class="task-item" @click="showDetail = true">
              Task #00{{ i }} - Optimization algorithm
            </div>
          </div>
        </Content>

        <Sider v-if="showDetail" width="350" class="detail-panel" collapsible>
          <div class="detail-header">
            <h4>Task Details</h4>
            <Button type="text" @click="showDetail = false">Close</Button>
          </div>
          <div class="detail-body">
            <p><strong>Status:</strong> In progress</p>
            <p><strong>Executor:</strong> Qiu</p>
            <Divider />
            <p>
              Description: We need to ensure that the transform still takes effect in reverse
              mode....
            </p>
          </div>
        </Sider>
      </Layout>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { Calendar, ChartBarBig, CircleCheck } from "kui-icons";
import { ref } from "vue";
const selectedKeys = ref(["t1"]);
const showDetail = ref(true);
</script>

<style scoped>
.workbench-layout {
  height: 100vh;
  border: 1px solid var(--kui-color-border);
  background: var(--kui-color-bg);
}
.app-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.app-logo {
  margin-bottom: 24px;
  background: var(--kui-color-primary);
}
.workbench-header {
  background: var(--kui-color-bg-3);
  border-bottom: 1px solid var(--kui-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
}
.proj-name {
  font-weight: bold;
  font-size: 16px;
}
.task-list {
  overflow: auto;
}
.workbench-main {
  padding: 20px;
  background: var(--kui-color-bg-layout);
  overflow-y: auto;
}
.task-item {
  background: var(--kui-color-bg-component);
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s;
}
.task-item:hover {
  border-color: var(--kui-color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.detail-panel {
  background: var(--kui-color-bg-component);
  border-left: 1px solid var(--kui-color-border);
}
.detail-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--kui-color-border);
  display: flex;
  justify-content: space-between;
}
.detail-body {
  padding: 20px;
  max-width: 300px;
}
</style>
