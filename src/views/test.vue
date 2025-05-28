<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Sider class="demo-sider" :style="{ width: collapsed ? '60px' : '200px' }">
        <div class="logo-box">
          <Icon :type="LogoKui" size="30" class="logo" />
          <transition>
            <span v-show="!collapsed">KUI运营后台</span>
          </transition>
        </div>
        <Menu mode="inline" v-model="left" :inline-collapsed="collapsed" style="border:none;">
          <MenuItem key="1-1" :icon="Home"><span>首页</span></MenuItem>
          <MenuItem key="1-2" :icon="StatsChart"><span>数据统计</span></MenuItem>
          <MenuItem key="1-3" :icon="Settings"><span>能源管理</span></MenuItem>
        </Menu>
        <Button theme="light" :icon="!collapsed ? ChevronBack : ChevronForward" @click="toggle" class="btn-expand" />
      </Sider>
      <Content class="k-demo-main">
        <Row type="flex" align="middle" class="header-nav">
          <Col flex="1">
          </Col>
          <Col>
          <Space :size="20">
            <Input :icon="Search" theme="light" shape="circle" placeholder="搜索" style="width:200px" />
            <Button :icon="NotificationsOutline" theme="normal" />
            <Avatar style="background:#3a95ff" :size="40" shape="square">K</Avatar>
          </Space>
          </Col>
        </Row>
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb>
        <div style="padding:200px 0;text-align:center;color:#ddd;margin:20px;" class="demo-back">我是打酱油的</div>
        <Footer>KUI ©2018 Created by chuchur</Footer>
      </Content>
    </Layout>
  </div>
</template>
<script setup>
import { LogoKui, ChevronBack, NotificationsOutline, ChevronForward, Search, StatsChart, Home, Settings } from "kui-icons";
import { ref } from "vue";
const left = ref(["1-1"]);
const collapsed = ref(false);
const toggle = () => {
  collapsed.value = !collapsed.value;
}
</script>
<style scoped lang="less">
.k-demo-layout {
  .logo-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px 0 17px 16px;
    /* background:var(--kui-color-gray-90); */
    white-space: nowrap;
    overflow: hidden;

    .logo {
      margin-right: 8px;
    }
  }

  .header-nav {
    border-bottom: 1px solid var(--kui-color-border);
    padding-bottom: 10px;
  }
}

.btn-expand {
  position: absolute;
  bottom: 10px;
  left: 12px;
}

.k-demo-layout .demo-sider {
  left: 0;
  position: relative;
  border-right: 1px solid var(--kui-color-border);
  transition: all 0.3s ease 0s;
}

.k-demo-layout .k-demo-main .nav {
  padding: 16px 0 0 16px;
}

.k-demo-layout .demo-top-menu {
  line-height: 61px;
}

.k-demo-layout .k-demo-main {
  overflow: auto;
}

.k-demo-layout .k-layout-footer {
  text-align: center;
  color: #999;
}
</style>
