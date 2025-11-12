<cn>
#### 上中下布局 
最基本的『上-中-下』布局。
一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
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
            <Menu
              mode="horizontal"
              :selectedKeys="['t1']"
              class="demo-top-menu"
            >
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
      <Footer style="background:transparent;"
        >KUI ©2025 Created by chuchur</Footer
      >
    </Layout>
  </div>
</template>
<script setup>
import { LogoKui, Search, NotificationsOutline } from "kui-icons";
import { ref } from "vue";
const top = ref(["t1"]);
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
