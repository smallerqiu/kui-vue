<cn>
#### 上中下布局
最基本的『上-中-下』布局。 一般主导航放置于页面的顶端，从左自右依次为：`logo`、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
</cn>

```tpl
<template>
  <div class="k-demo-layout">
    <Layout>
      <Header>
        <div class="logo" />
        <Menu mode="horizontal" theme="dark" activeName="1" class="top-menu">
          <MenuItem name="1" icon="ios-home">首页</MenuItem>
          <MenuItem name="2" icon="logo-buffer">文章</MenuItem>
          <MenuItem name="3" icon="ios-heart">评论</MenuItem>
        </Menu>
      </Header>
       <Layout>
         <Sider>
           <Menu  active-name="0-1" open-name="0" class="left-menu">
            <SubMenu name="0">
              <template slot="title">
                <Icon type="ios-paper" />我的产品
              </template>
              <MenuItem name="0-1">我的产品1</MenuItem>
              <MenuItem name="0-2">我的产品2</MenuItem>
              <MenuItem name="0-3">我的产品3</MenuItem>
              <MenuItem name="0-4">我的产品4</MenuItem>
            </SubMenu>
            <SubMenu name="1">
              <template slot="title">
                <Icon type="ios-gift" />商品管理
              </template>
              <MenuItem name="1-1">商品信息</MenuItem>
              <MenuItem name="1-2">商品列表</MenuItem>
              <MenuItem name="1-3">商品新增</MenuItem>
              <MenuItem name="1-4">商品筛选</MenuItem>
            </SubMenu>

            <SubMenu name="2">
              <template slot="title">
                <Icon type="ios-person" />用户管理
              </template>
              <MenuGroup title="超级管理">
                <MenuItem name="2-1">用户信息</MenuItem>
                <MenuItem name="2-2">用户列表</MenuItem>
              </MenuGroup>
              <MenuGroup title="普通管理">
                <MenuItem name="2-3">用户新增</MenuItem>
                <MenuItem name="2-4">用户筛选</MenuItem>
              </MenuGroup>
            </SubMenu>
          </Menu>
         </Sider>
         <Layout class="k-demo-main">  
           <Breadcrumb class="nav">
            <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>
            <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>
            <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>
          </Breadcrumb>
          <Content>
              Content
          </Content>
         </Layout>  
       </Layout>
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
.k-demo-layout .top-menu{
   line-height:64px;   
   height:64px;
 }
 .k-demo-layout .left-menu{
   height:100%;
 }
.k-demo-layout .k-demo-main{
   padding:0 24px 24px;
 }
.k-demo-layout .k-demo-main .nav{
   padding:24px 0;
 }
.k-demo-layout .k-demo-main .k-layout-content{
   background-color:#fff;
   padding:24px;
   min-height:300px;
 }
.k-demo-layout .k-layout-sider{
  width:200px;
 }
 </style>
```