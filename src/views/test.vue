<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Header class="demo-header">
        <Row type="flex" align="middle">
          <Col style="width:194px">
          <div class="logo-box">
            <Icon :type="LogoKui" size="30" class="logo" />
            K UIKIT
          </div>
          </Col>
          <Col flex="1">
          <Menu mode="horizontal" :selectedKeys="['t1']" class="demo-top-menu">
            <MenuItem key="t1">首页</MenuItem>
            <MenuItem key="t2">新闻</MenuItem>
            <MenuItem key="t3">知识库</MenuItem>
          </Menu>
          </Col>
          <Col>
          <Space :size="30">
            <Input :icon="Search" theme="light" shape="circle" placeholder="搜索" style="width:200px" />
            <Button :icon="NotificationsOutline" theme="normal" />
            <Avatar style="background:#3a95ff" :size="30" shape="round">K</Avatar>
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
      <Footer style="background:transparent;">KUI ©2018 Created by chuchur</Footer>
    </Layout>
  </div>
</template>
<script setup>
import { LogoKui, Search, NotificationsOutline } from 'kui-icons' 
import { ref } from "vue";
const top = ref(['t1']);
</script>
<style scoped lang="less">
.k-demo-layout {
  .demo-header {
    border-bottom: 1px solid var(--kui-color-border);
    padding: 15px 20px 0px 30px;
    min-width: 900px;
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
}

.k-demo-layout .demo-top-menu {
  border: none;

  li {
    line-height: 31px;
  }
}

.k-demo-layout .k-demo-main {
  padding: 0 50px;
}

.k-demo-layout .k-demo-main .nav {
  padding: 16px 0;
}

.k-demo-layout .k-demo-main .k-layout-content {
  padding: 24px;
  min-height: 300px;
}

.k-demo-layout .k-layout-footer {
  text-align: center;
  color: #999;
}
</style>

