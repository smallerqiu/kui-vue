<cn>
#### 侧边布局/折叠模式
侧边两列式布局。页面横向空间有限时，侧边导航可收起。
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout  class="layout-back">
      <Sider class="demo-sider" :style="{width:collapsed?'60px':'200px'}">
        <div class="logo-box">
          <Icon type="logo-kui" size="30" class="logo"/>
          <transition>
            <span v-show="!collapsed">KUI运营后台</span>
          </transition>
        </div>
        <Menu mode="inline" v-model="left" :inline-collapsed="collapsed" style="border:none;">
          <MenuItem key="1-1" icon="home"><span>首页</span></MenuItem>
          <MenuItem key="1-2" icon="stats-chart"><span>数据统计</span></MenuItem>
          <MenuItem key="1-3" icon="settings"><span>能源管理</span></MenuItem>
        </Menu>
        <Button theme="light" :icon="!collapsed?'chevron-back':'chevron-forward'" @click="toggle" class="btn-expand"/>
      </Sider>
      <Content class="k-demo-main">
        <Row type="flex" align="middle" class="header-nav">
          <Col flex="1"></Col>
          <Col>
            <Space :size="20">
              <Input icon="search" theme="light" shape="circle" placeholder="搜索" style="width:200px"/>
              <Button icon="notifications-outline" theme="normal"/>
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
<style scoped lang="less"> 
.k-demo-layout{
  .logo-box {
    box-sizing: border-box;
    display:flex;
    align-items:center;
    padding:16px 0 17px 16px;
    /* background:var(--kui-color-gray-90); */
    white-space:nowrap;
    overflow:hidden;
    .logo{
      margin-right:8px;
    }
  } 
  .header-nav{
    border-bottom:1px solid var(--kui-color-border);
    padding-bottom:10px;
  }
}
.btn-expand{
  position:absolute;
  bottom:10px;
  left:12px;
}
.k-demo-layout .demo-sider{
  left: 0;
  position:relative;
  border-right:1px solid var(--kui-color-border);
  transition: all 0.3s ease 0s;
}
.k-demo-layout .k-demo-main .nav{
   padding:16px 0 0 16px;
 }
.k-demo-layout .demo-top-menu{
   line-height:61px;   
 }
.k-demo-layout .k-demo-main{
  overflow:auto;
}
.k-demo-layout .k-layout-footer{
  text-align:center;
  color:#999;
 }
</style>
<script>
export default{
  data(){
    return{
      left:['1-1'],
      collapsed:false
    }
  },
  methods:{
    toggle(){
      this.collapsed = !this.collapsed
    }
  }
}
</script>

```