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
            <Menu mode="horizontal" :value="['t1']" class="demo-top-menu">
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
        <Content class="demo-back">Conent</Content>
      </Content>
      <Footer style="background:transparent;">KUI ©2025 Created by chuchur</Footer>
    </Layout>
  </div>
</template>
<script>
import { LogoKui, Home, StatsChart, Settings, Scan, NotificationsOutline,Search } from 'kui-icons'
export default{
  data() {
    return {
     LogoKui, Home, StatsChart, Settings, Scan, NotificationsOutline,Search
    }
  }
}
</script>

<style scoped lang="less">
.k-demo-layout {
  background: var(--kui-color-back);

  .demo-header {
    padding: 0 50px 0;
    background-color: var(--kui-color-main-90);
    height: 60px;
    align-items: center;
    display: flex;
  }

  .demo-top-nav {
    flex: 1;
  }

  .logo-box {
    position: relative;
    z-index: 801;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .logo {
      margin-right: 8px;
    }
  }

  .layout-back {
    background-color: #86868625;
  }

  .demo-back {
    background-color: var(--kui-color-back);
  }

  .demo-top-menu {
    border: none;
    background-color: transparent;

    .k-menu-item {
      min-height: 60px;
    }
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

  .k-layout-footer {
    text-align: center;
    color: #999;
  }
}
</style>
```