<cn>
#### 上中下布局 
最基本的『上-中-下』布局。
一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
</cn>

```tpl
<template>
  <div class="k-demo-layout">
    <Layout>
      <Header>
        <div class="logo" />
        <Menu mode="horizontal" theme="dark" v-model="top" class="demo-top-menu">
          <MenuItem key="t1" icon="ios-home">nav1</MenuItem>
          <MenuItem key="t2" icon="logo-buffer">nav2</MenuItem>
          <MenuItem key="t3" icon="ios-heart">nav3</MenuItem>
        </Menu>
      </Header> 
      <Content class="k-demo-main">
        <Breadcrumb class="nav">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
        <Content>Conent</Content>
      </Content> 
      <Footer>KUI ©2018 Created by chuchur</Footer>
    </Layout>
  </div>
</template>
<style scoped>
 .k-demo-layout .logo{
    width: 120px;
    height: 31px;
    background: rgb(132, 139, 156);
    float: left;
    margin: 15px 30px 0px 0px;
    position:relative;
    z-index:801;
 }
.k-demo-layout .demo-top-menu{
   line-height:64px;   
   height:64px;
 }
 .k-demo-layout .demo-left-menu{
   height:100%;
 }
.k-demo-layout .k-demo-main{
   padding:0 50px;
 }
.k-demo-layout .k-demo-main .nav{
   padding:16px 0;
 }
.k-demo-layout .k-demo-main .k-layout-content{
   background-color:#fff;
   padding:24px;
   min-height:300px;
 }
.k-demo-layout .k-layout-sider{
  width:200px;
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