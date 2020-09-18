<cn>
#### 固定侧边栏
当内容较长时，使用固定侧边栏可以提供更好的体验。
</cn>

```tpl
<template>
  <div class="k-demo-layout">
    <Layout>
      <Sider class="demo-sider">
        <div class="logo" />
        <Menu mode="inline" theme="dark" v-model="top" class="demo-top-menu">
          <MenuItem key="t1" icon="ios-home">nav1</MenuItem>
          <MenuItem key="t2" icon="logo-buffer">nav2</MenuItem>
          <MenuItem key="t3" icon="ios-heart">nav3</MenuItem>
          <MenuItem key="t5" icon="ios-albums">nav4</MenuItem>
          <MenuItem key="t6" icon="ios-calculator">nav5</MenuItem>
          <MenuItem key="t7" icon="ios-call">nav6</MenuItem>
          <MenuItem key="t8" icon="ios-cloud">nav7</MenuItem>
          <MenuItem key="t9" icon="ios-color-palette">nav8</MenuItem>
        </Menu>
      </Sider>
      <Content class="k-demo-main">
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb> 
        <div style="padding:300px 0;text-align:center;color:#ddd;background:#fff;margin:20px;">我是打酱油的</div>
        <Footer>KUI ©2018 Created by chuchur</Footer>
      </Content> 
    </Layout>
  </div>
</template>
<style scoped> 
.k-demo-layout{
  height:360px;
  overflow:hidden;
}
.k-demo-layout .demo-sider{
  background:#22303f;
  overflow: auto;
  height: 360px; /*这里是例子，实际中请适当修改*/
  left: 0;
  width:200px;
}
.k-demo-layout .logo{
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
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