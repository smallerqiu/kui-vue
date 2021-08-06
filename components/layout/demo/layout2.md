<cn>
#### 顶部-侧边布局
拥有顶部导航及侧边栏的页面，多用于展示类网站。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout>
      <Header>
        <div class="logo" />
        <Menu mode="horizontal" theme="dark" v-model="top" class="demo-top-menu">
          <MenuItem key="t1" icon="home">nav1</MenuItem>
          <MenuItem key="t2" icon="logo-buffer">nav2</MenuItem>
          <MenuItem key="t3" icon="heart">nav3</MenuItem>
        </Menu>
      </Header> 
      <Content class="k-demo-main">
        <Breadcrumb class="nav">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
        <Layout style="padding:24px 0;background:#fff;">
          <Sider>
            <Menu  v-model="left" class="demo-left-menu" mode="inline">
              <SubMenu key="l0">
                <template slot="title">
                  <Icon type="newspaper" />subnav1
                </template>
                <MenuItem key="0-1">option1</MenuItem>
                <MenuItem key="0-2">option2</MenuItem>
                <MenuItem key="0-3">option3</MenuItem>
                <MenuItem key="0-4">option4</MenuItem>
              </SubMenu>
              <SubMenu key="l1">
                <template slot="title">
                  <Icon type="keypad" />subnav2
                </template>
                <MenuItem key="1-1">option1</MenuItem>
                <MenuItem key="1-2">option2</MenuItem>
                <MenuItem key="1-3">option3</MenuItem>
                <MenuItem key="1-4">option4</MenuItem>
              </SubMenu>
              <SubMenu key="l2">
                <template slot="title">
                  <Icon type="settings" />subnav3
                </template>
                <MenuItem key="2-1">option1</MenuItem>
                <MenuItem key="2-2">option2</MenuItem>
                <MenuItem key="2-3">option3</MenuItem>
                <MenuItem key="2-4">option4</MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>Conent</Content>
        </Layout> 
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