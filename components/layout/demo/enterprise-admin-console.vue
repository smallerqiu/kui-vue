<template>
  <Layout class="admin-wrapper">
    <Sider v-model:collapsed="collapsed" collapsible class="admin-sider">
      <div class="admin-logo">
        <!-- <img src="/logo.svg" alt="logo" /> -->
        <Icon :type="LogoKui" />
        <span v-if="!collapsed">KUI Console</span>
      </div>
      <Menu
        v-model="selectedKeys"
        v-model:openKeys="openKeys"
        mode="inline"
        :items="items"
        class="admin-menu"
        :inlineCollapsed="collapsed"
      >
      </Menu>
      <Button
        type="text"
        block
        @click="collapsed = !collapsed"
        :icon="collapsed ? PanelLeftOpen : PanelLeftClose"
      >
      </Button>
    </Sider>

    <Layout>
      <Header class="admin-header">
        <div class="header-left">
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>User Management</BreadcrumbItem>
            <BreadcrumbItem>User List</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Space class="header-right">
          <Input placeholder="搜索功能..." style="width: 200px" />
          <Divider type="vertical" />
          <Avatar :icon="User" :size="25" />
          <span class="user-name">Admin</span>
        </Space>
      </Header>

      <Content class="admin-content-area">
        <div class="content-wrapper">
          <div class="page-header">
            <h2>User List</h2>
            <Button type="primary">Add User</Button>
          </div>
          <div class="data-card">
            <div class="skeleton-table" v-for="i in 5" :key="i"></div>
          </div>
        </div>
      </Content>

      <Footer class="admin-footer">
        KUI Design Platform ©2026 Crafted with ❤️ for Developers
      </Footer>
    </Layout>
  </Layout>
</template>
<script setup lang="ts">
import { House, Key, LogoKui, PanelLeftClose, PanelLeftOpen, Settings, User } from "kui-icons";
import { ref } from "vue";
const selectedKeys = ref(["t2-1"]);
const openKeys = ref(["t2", "t3"]);
const collapsed = ref(false);
const items = [
  { key: "t1", icon: House, title: "Dashboard" },
  {
    key: "t2",
    icon: User,
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
