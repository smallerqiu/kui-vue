<cn>
#### 顶部-侧边布局-通栏
同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Header class="demo-header">
        <Row type="flex" align="middle" class="demo-top-nav">
          <Col style="width:194px">
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
      <Layout>
        <Sider class="demo-back">
          <Menu :selectedKeys="['t1']" :openKeys="['t2']" class="demo-left-menu" mode="inline"
            style="padding-top:20px;">
            <MenuItem key="t1" :icon="Home">首页</MenuItem>
            <SubMenu key="t2" :icon="StatsChart" title="数据统计">
              <MenuItem key="t2-1">今日订单</MenuItem>
              <MenuItem key="t2-2">今日销售额</MenuItem>
            </SubMenu>
            <MenuItem key="t3" :icon="Settings">能源管理</MenuItem>
          </Menu>
        </Sider>
        <Layout class="k-demo-main">
          <Breadcrumb class="nav">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          <Content class="demo-content">
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script setup>
import { LogoKui, Home, StatsChart, Settings, Scan, NotificationsOutline, Search } from 'kui-icons'
</script>
<style scoped lang="less">
.k-demo-layout {
  background: var(--kui-color-back);

  .demo-header {
    padding: 0 20px 0;
    min-width: 500px;
    background-color: var(--kui-color-main-90);
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

  .demo-content {
    background-color: var(--kui-color-back);
  }

  .demo-left-menu {
    height: 100%;
    border: none;
  }

  .k-demo-main {
    padding: 0 24px 24px;
    background-color: #7f7f7f17;
  }

  .k-demo-main {
    .nav {
      padding: 16px 0;
    }

    .k-layout-content {
      /* background-color:#fff; */
      padding: 24px;
      min-height: 300px;
    }
  }

  .k-layout-sider {
    width: 200px;
  }
}
</style>
```