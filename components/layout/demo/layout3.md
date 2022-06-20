<cn>
#### 上中下布局 
最基本的『上-中-下』布局。
一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout  class="layout-back">
      <Header class="demo-header">
        <Row type="flex" align="middle">
          <Col style="width:194px">
            <div class="logo-box">
              <Icon :type="LogoKui" size="30" class="logo"/>
              K UIKIT
            </div>
          </Col>
          <Col flex="1">
            <Menu mode="horizontal" v-model="top" class="demo-top-menu">
              <MenuItem key="t1">首页</MenuItem>
              <MenuItem key="t2">新闻</MenuItem>
              <MenuItem key="t3">知识库</MenuItem>
            </Menu>
          </Col>
          <Col>
            <Space :size="30">
              <Input :icon="Search" theme="light" shape="circle" placeholder="搜索" style="width:200px"/>
              <Button :icon="NotificationsOutline" theme="normal"/>
              <Avatar style="background:#3a95ff" :size="40" shape="square">K</Avatar>
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
<script>
import { LogoKui, Search, NotificationsOutline  } from 'kui-icons'
export default{
  data() {
    return {
      LogoKui, NotificationsOutline, Search,
      top:['t1'],
      left:['0-1']
    }
  }
}
</script>
<style scoped lang="less">
 .k-demo-layout{
   .demo-header{
     border-bottom:1px solid var(--kui-color-border);
     padding:15px 20px 0px 30px;
     min-width:900px;
   }
  .logo-box {
    /* width: 190px; */
    position:relative;
    z-index:801;
    box-sizing: border-box;
    display:flex;
    align-items:center;
    .logo{
      margin-right:8px;
    }
  } 
 }
.k-demo-layout .demo-top-menu{
   border:none;
   li {
     line-height:31px;
   }
 }
.k-demo-layout .k-demo-main{
   padding:0 50px;
 }
.k-demo-layout .k-demo-main .nav{
   padding:16px 0;
 }
.k-demo-layout .k-demo-main .k-layout-content{
   padding:24px;
   min-height:300px;
 }
 .k-demo-layout .k-layout-footer{
  text-align:center;
  color:#999;
 }
 </style>
```