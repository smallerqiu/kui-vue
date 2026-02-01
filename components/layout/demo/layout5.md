<cn>
### 侧边布局/折叠模式
侧边两列式布局。页面横向空间有限时，侧边导航可收起。
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
</cn>

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
      </Sider>
      <Content class="k-demo-main">
        <div style="padding: 10px;">
          <Button
            type="text"
            :icon="collapsed ? MenuUnfold : MenuFold"
            @click="collapsed = !collapsed"
            class="btn-collapsed"
          ></Button>
        </div>
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
        <Footer>KUI ©2025 Created by chuchur</Footer>
      </Content>
    </Layout>
  </div>
</template>
<script setup>
import { LogoKui, Home, StatsChart, Settings, MenuFold, MenuUnfold } from "kui-icons";
import { ref } from "vue";
const top = ref(["t1"]);
const collapsed = ref(false);
const selectedKeys = ref(["t1"]);
const openKeys = ref(["t2"]);
</script>
<style scoped lang="less">
.k-demo-layout {
  border: 1px solid var(--kui-color-border);
  .demo-sider {
    /*这里是例子，实际中请适当修改*/
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
    transition: all 0.3s;
  }
  .layout-content {
    background: var(--kui-color-bg);
  }

  .demo-sider-collapsed {
    width: 60px;
    overflow: hidden;

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
    background-color: #7f7f7f17;

    .nav {
      padding: 20px 0 0 20px;
    }
  }

  .k-layout-footer {
    text-align: center;
    color: #999;
  }
}
</style>
```
