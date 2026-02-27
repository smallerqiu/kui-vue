<cn>
### 固定侧边栏
当内容较长时，使用固定侧边栏可以提供更好的体验。
</cn>
<en>
### Fixed Sidebar
When content is long, a fixed sidebar provides a better user experience.
</en>

```vue
<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Sider :class="['demo-sider', { 'demo-sider-collapsed': collapsed }]">
        <a class="logo-box" href="">
          <Icon :type="LogoKui" size="30" class="logo" />
          <span class="logo-title">KUI运营后台</span>
        </a>
        <Menu
          v-model:selectedKeys="selectedKeys"
          :openKeys="openKeys"
          class="demo-left-menu"
          mode="inline"
          :inline-collapsed="collapsed"
        >
          <MenuItem key="t1" :icon="Home">首页</MenuItem>
          <SubMenu key="t2" :icon="StatsChart" title="数据统计">
            <MenuItem key="t2-1">今日订单</MenuItem>
            <MenuItem key="t2-2">今日销售额</MenuItem>
          </SubMenu>
          <SubMenu key="t3" :icon="StatsChart" title="数据统计">
            <MenuItem key="t3-1">今日订单</MenuItem>
            <MenuItem key="t3-2">今日销售额</MenuItem>
          </SubMenu>
          <MenuItem key="t4" :icon="Settings">能源管理</MenuItem>
        </Menu>
        <Button
          type="text"
          block
          size="large"
          :icon="collapsed ? ChevronForward : ChevronBack"
          @click="collapsed = !collapsed"
          class="btn-collapsed"
        ></Button>
      </Sider>
      <Content class="k-demo-main">
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb>
        <div
          style="padding:200px 0;text-align:center;color:#ddd;margin:20px;"
          class="layout-content"
        >
          Content
        </div>
        <Footer>KUI ©2025 Created by Qiu</Footer>
      </Content>
    </Layout>
  </div>
</template>
<script setup>
import { LogoKui, Home, StatsChart, Settings, ChevronBack, ChevronForward } from "kui-icons";
import { ref } from "vue";
const top = ref(["t1"]);
const collapsed = ref(false);
const selectedKeys = ref(["t1"]);
const openKeys = ref(["t2"]);
</script>
<style scoped lang="less">
.k-demo-layout {
  overflow: hidden;
  border: 1px solid var(--kui-color-border);
  .demo-sider {
    height: 360px;
    left: 0;
    width: 200px;
    background: var(--kui-color-bg);
    transition: width 0.3s;
  }

  .logo-title {
    transition: opacity 0.3s;
    opacity: 1;
  }

  .btn-collapsed {
    position: absolute;
    bottom: 0;
    left: 0;
    // right:0;
    width: 100%;
    transition: all 0.3s;
  }

  .demo-sider-collapsed {
    width: 60px;
    overflow: hidden;
    .k-menu {
      overflow: hidden;
    }
    .logo-title {
      opacity: 0;
    }
    .logo-box {
      padding-left: 16px;
    }
  }

  .demo-left-menu {
    border: none;
    height: calc(100% - 105px);
    overflow: auto;

    &::-webkit-scrollbar {
      width: 1px;
    }
  }

  .logo-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 25px;
    white-space: nowrap;
    transition: all 0.3s;

    .logo {
      margin-right: 8px;
    }
  }

  .k-demo-main {
    overflow: auto;
    height: 360px;
    background-color: var(--kui-color-bg-layout);
    .nav {
      padding: 20px 0 0 20px;
    }
  }
  .layout-content {
    background-color: var(--kui-color-bg);
  }
  .k-layout-footer {
    text-align: center;
    color: #999;
  }
}
</style>
```
