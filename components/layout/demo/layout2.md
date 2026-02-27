<cn>
### 顶部-侧边布局
拥有顶部导航及侧边栏的页面，多用于展示类网站。
</cn>
<en>
### Top-Side Layout
A page with top navigation and a sidebar, commonly used for showcase websites.
</en>

```vue
<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Header class="demo-header">
        <Row type="flex" align="middle" class="demo-top-nav">
          <Col style="width:220px">
            <a class="logo-box" href="">
              <Icon :type="LogoKui" size="30" class="logo" />
              K UIKIT
            </a>
          </Col>
          <Col flex="1">
            <Menu mode="horizontal" :selectedKeys="['t1']" class="demo-top-menu">
              <MenuItem key="t1">首页</MenuItem>
              <MenuItem key="t2">新闻</MenuItem>
              <MenuItem key="t3">知识库</MenuItem>
            </Menu>
          </Col>
          <Col>
            <Space>
              <Avatar style="background:#3a95ff" :size="20">Q</Avatar>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content class="k-demo-main">
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb>
        <Layout class="layout-back">
          <Sider style="background:transparent;">
            <Menu
              :selectedKeys="['t1']"
              :openKeys="['t2']"
              class="demo-left-menu"
              :items="items"
              mode="inline"
              style="padding-top:20px;"
            />
          </Sider>
          <Content>Conent</Content>
        </Layout>
      </Content>
      <Footer class="demo-footer"> KUI ©2025 Created by Qiu </Footer>
    </Layout>
  </div>
</template>
<script setup>
import { ref } from "vue";
const left = ref("t1");
import { LogoKui, Home, StatsChart, Settings, Scan, Search, NotificationsOutline } from "kui-icons";

const items = [
  { key: "t1", icon: Home, title: "首页" },
  {
    key: "t2",
    icon: StatsChart,
    title: "数据统计",
    children: [
      { key: "t2-1", title: "今日订单" },
      { key: "t2-2", title: "今日销售额" },
    ],
  },
  {
    key: "t3",
    icon: StatsChart,
    title: "数据统计",
    children: [
      { key: "t3-1", title: "今日订单" },
      { key: "t3-2", title: "今日销售额" },
    ],
  },
  { key: "t4", icon: Settings, title: "能源管理" },
];
</script>
<style scoped lang="less">
.k-demo-layout {
  .demo-header {
    padding: 0 50px 0;
    min-width: 500px;
    background-color: var(--kui-color-bg-3);
    height: 60px;
    align-items: center;
    display: flex;
  }

  .demo-top-nav {
    flex: 1;
  }
  .logo-box {
    /* width: 190px; */
    position: relative;
    z-index: 801;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .logo {
      margin-right: 8px;
    }
  }

  .demo-top-menu {
    border: none;
    background-color: transparent;

    .k-menu-item {
      min-height: 60px;
    }
  }

  .demo-left-menu {
    height: 100%;
  }

  .demo-back,
  .demo-footer {
    // background-color: var(--kui-color-bg);
  }

  .k-demo-main {
    padding: 0 50px;

    .nav {
      padding: 16px 0;
    }

    .k-layout-content {
      padding: 24px;
      min-height: 300px;
    }
  }

  .k-layout-sider {
    width: 200px;
  }

  .k-layout-footer {
    text-align: center;
    color: var(--kui-color-text-description);
  }
}
</style>
```
