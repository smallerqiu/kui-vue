<cn>
### 任务工作台 (The "Workbench" Details Layout)
左侧导航 + 中间看板 + 右侧详情面板 (Right Sider)。
</cn>
<en>
### Modern Enterprise Admin Console
The most common "sidebar navigation + top toolbar" structure, suitable for SaaS products, CMS backends, or ERP systems.
- Layout logic: The outer Layout includes the Sider, while the inner Layout contains the Header, Content, and Footer.
- Matching components: Menu (vertical mode), Breadcrumb, Avatar.
</en>

```vue
<template>
  <k-layout class="workbench-layout">
    <k-sider width="80" class="app-rail">
      <k-avatar :size="40" class="app-logo">P</k-avatar>
      <k-menu mode="vertical" :inlineCollapsed="true" style="border:none;">
        <k-menu-item key="t1" :icon="CheckmarkCircle"></k-menu-item>
        <k-menu-item key="t2" :icon="Calendar"></k-menu-item>
        <k-menu-item key="t3" :icon="StatsChart"></k-menu-item>
      </k-menu>
    </k-sider>

    <k-layout>
      <k-header class="workbench-header">
        <div class="header-breadcrumb">
          <span class="proj-name">Project A</span> / <span>Current iteration</span>
        </div>
        <div class="header-ops">
          <k-avatar-group :max-count="3">
            <k-avatar src="https://cdn.chuchur.com/img/chick.jpeg"  :size="20"/>
            <k-avatar src="https://cdn.chuchur.com/img/monkey.jpeg" :size="20"/>
          </k-avatar-group>
        </div>
      </k-header>

      <k-layout style="overflow:hidden;">
        <k-content class="workbench-main">
          <div class="task-list">
            <div v-for="i in 10" :key="i" class="task-item" @click="showDetail = true">
              Task #00{{ i }} - Optimization algorithm
            </div>
          </div>
        </k-content>

        <k-sider
          v-if="showDetail"
          width="350"
          class="detail-panel"
          collapsible
          reverse-arrow
          @collapse="showDetail = false"
        >
          <div class="detail-header">
            <h4>Task Details</h4>
            <k-button type="text" @click="showDetail = false">Close</k-button>
          </div>
          <div class="detail-body">
            <p><strong>Status:</strong> In progress</p>
            <p><strong>Executor:</strong> Qiu</p>
            <k-divider />
            <p>
              Description: We need to ensure that the transform still takes effect in reverse
              mode....
            </p>
          </div>
        </k-sider>
      </k-layout>
    </k-layout>
  </k-layout>
</template>

<script setup>
import { ref } from "vue";
import { CheckmarkCircle, Calendar, StatsChart } from "kui-icons";
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
  background: var(--kui-color-bg-2);
  border-bottom: 1px solid var(--kui-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
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
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
}
.detail-body {
  padding: 20px;
  max-width: 300px;
}
</style>
```
