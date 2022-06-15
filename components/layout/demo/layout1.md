<cn>
#### 顶部-侧边布局-通栏
同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Header class="demo-header">
        <Row type="flex" align="middle">
          <Col style="width:194px">
            <div class="logo-box">
              <Icon type="logo-kui" size="30" class="logo"/>
              K UIKIT
            </div>
          </Col>
          <Col flex="1">
            <Input icon="search" placeholder="搜索功能" style="width:200px;" theme="light" shape="circle">
          </Col>
          <Col>
            <Tooltip title="全屏显示" placement="bottom">
              <Button icon="scan" theme="normal"/>
            </Tooltip>
            <Button type="link">帮助文档</Button>
            <Button icon="notifications-outline" theme="normal"/>
            <Avatar style="background:#3a95ff" :size="40">K</Avatar>
          </Col>
        </Row>
      </Header>
       <Layout>
         <Sider class="demo-back">
           <Menu :value="['t1']" class="demo-left-menu" mode="inline" style="padding-top:20px;">
            <MenuItem key="t1" icon="home">首页</MenuItem>
            <MenuItem key="t2" icon="bar-chart">数据统计</MenuItem>
            <MenuItem key="t3" icon="settings">能源管理</MenuItem>
          </Menu>
         </Sider>
         <Layout class="k-demo-main">  
           <Breadcrumb class="nav">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          <Content class="demo-back">
              Content
          </Content>
         </Layout>  
       </Layout>
    </Layout>
  </div>
</template>
<style scoped lang="less">
 .k-demo-layout{
   .demo-header{
     border-bottom:1px solid var(--kui-color-border);
     padding:15px 20px 15px 30px;
     min-width:700px;
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
 .k-demo-layout .demo-left-menu{
   height:100%;
 }
.k-demo-layout .k-demo-main{
   padding:0 24px 24px;
 }
.k-demo-layout .k-demo-main .nav{
   padding:16px 0;
 }
.k-demo-layout .k-demo-main .k-layout-content{
   /* background-color:#fff; */
   padding:24px;
   min-height:300px;
 }
.k-demo-layout .k-layout-sider{
  width:200px;
 }
 </style>
```