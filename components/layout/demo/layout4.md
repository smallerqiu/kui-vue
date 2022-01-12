<cn>
#### 固定侧边栏
当内容较长时，使用固定侧边栏可以提供更好的体验。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout  class="layout-back">
      <Sider class="demo-sider">
        <div class="logo-box">
          <Icon type="logo-kui" size="30" class="logo"/>
          KUI运营后台
        </div>
        <Menu mode="inline" v-model="top" class="demo-top-menu">
          <MenuItem key="t1" icon="home-outline">首页</MenuItem>
          <MenuItem key="t2" icon="bar-chart">数据统计</MenuItem>
          <MenuItem key="t3" icon="settings">能源管理</MenuItem>
        </Menu>
      </Sider>
      <Content class="k-demo-main">
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb> 
        <div style="padding:300px 0;text-align:center;color:#ddd;margin:20px;" class="demo-back">我是打酱油的</div>
        <Footer>KUI ©2018 Created by chuchur</Footer>
      </Content> 
    </Layout>
  </div>
</template>
<style scoped lang="less"> 
.k-demo-layout{
  height:360px;
  overflow:hidden;
}
.k-demo-layout .demo-sider{
  height: 360px; /*这里是例子，实际中请适当修改*/
  left: 0;
  width:200px;
  border-right:1px solid var(--kui-color-border);
}
.k-demo-layout .logo-box {
    box-sizing: border-box;
    display:flex;
    align-items:center;
    padding:20px 0 20px 20px;    
    .logo{
      margin-right:8px;
    }
  } 
.k-demo-layout .k-demo-main{
  overflow:auto;
  height:360px;
}
.k-demo-layout .k-demo-main .nav{
   padding:20px 0 0 20px;
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
      top:['t1'],
      left:['0-1']
    }
  }
}
</script>

```