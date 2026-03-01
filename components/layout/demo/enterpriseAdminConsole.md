<cn>
### 现代企业级管理后台 (Enterprise Admin Console)
最常见的“侧边导航 + 顶部工具栏”结构，适用于 SaaS 产品、CMS 后台或 ERP 系统。
- 布局逻辑：外层 Layout 包含 Sider，内层 Layout 包含 Header、Content 和 Footer。
- 搭配组件：Menu（垂直模式）、Breadcrumb（面包屑）、Avatar（头像）。
</cn>
<en>
### Modern Enterprise Admin Console
The most common "sidebar navigation + top toolbar" structure, suitable for SaaS products, CMS backends, or ERP systems.
- Layout logic: The outer Layout includes the Sider, while the inner Layout contains the Header, Content, and Footer.
- Matching components: Menu (vertical mode), Breadcrumb, Avatar.
</en>

```vue
<template>
  <k-layout class="admin-wrapper">
    <k-sider v-model:collapsed="collapsed" collapsible class="admin-sider">
      <div class="admin-logo">
        <!-- <img src="/logo.svg" alt="logo" /> -->
        <Icon :type="LogoKui" />
        <span v-if="!collapsed">KUI Console</span>
      </div>
      <Menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :items="items"
        class="admin-menu"
      >
      </Menu>
      <k-button type="text" @click="collapsed = !collapsed">
        <k-icon :name="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </k-button>
    </k-sider>

    <k-layout>
      <k-header class="admin-header">
        <div class="header-left">
          <k-breadcrumb>
            <k-breadcrumb-item>Home</k-breadcrumb-item>
            <k-breadcrumb-item>User Management</k-breadcrumb-item>
            <k-breadcrumb-item>User List</k-breadcrumb-item>
          </k-breadcrumb>
        </div>
        <Space class="header-right">
          <k-input placeholder="搜索功能..." style="width: 200px" />
          <k-divider type="vertical" />
          <k-avatar :icon="Person" :size="25" />
          <span class="user-name">Admin</span>
        </Space>
      </k-header>

      <k-content class="admin-content-area">
        <div class="content-wrapper">
          <div class="page-header">
            <h2>User List</h2>
            <k-button type="primary">Add User</k-button>
          </div>
          <div class="data-card">
            <div class="skeleton-table" v-for="i in 5" :key="i"></div>
          </div>
        </div>
      </k-content>

      <k-footer class="admin-footer">
        KUI Design Platform ©2026 Crafted with ❤️ for Developers
      </k-footer>
    </k-layout>
  </k-layout>
</template>
<script setup>
import { ref } from "vue";
import { LogoKui, Home, StatsChart, People, Settings, Key, Person } from "kui-icons";
const selectedKeys = ref([]);
const collapsed = ref(false);
const items = [
  { key: "t1", icon: Home, title: "Dashboard" },
  {
    key: "t2",
    icon: People,
    title: "User Management",
    children: [
      { key: "t2-1", title: "User List" },
      { key: "t2-2", title: "Role List" },
    ],
  },
  {
    key: "t3",
    icon: Settings,
    title: "System Settings",
    children: [
      { key: "t3-1", title: "Permission configuration" },
      { key: "t3-2", title: "Logs" },
    ],
  },
  { key: "t4", icon: Key, title: "Api Keys" },
];
</script>
<style scoped>
.admin-wrapper {
  min-height: 100vh;
  border: 1px solid var(--kui-color-border);
}
.admin-sider {
  width: 210px;
}
.admin-menu {
  border: none;
}
.admin-logo {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 600;
  gap: 12px;
}
.admin-header {
  background: var(--kui-color-bg-1);
  padding: 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 10;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.admin-content-area {
  background: var(--kui-color-bg-layout);
  padding: 24px;
}
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.data-card {
  background: var(--kui-color-bg-container);
  padding: 24px;
  border-radius: 8px;
  min-height: 400px;
}
.skeleton-table {
  height: 40px;
  background: var(--kui-color-bg-component);
  margin-bottom: 12px;
  border-radius: 4px;
}
</style>
```
