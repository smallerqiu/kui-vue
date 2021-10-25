<cn>
#### 顶部-侧边布局-通栏
同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout class="layout-back">
      <Header>
        <div class="logo" />
        <Menu mode="horizontal" theme="dark" :value="['t1']" class="demo-top-menu">
          <MenuItem key="t1" icon="home">nav1</MenuItem>
          <MenuItem key="t2" icon="logo-buffer">nav2</MenuItem>
          <MenuItem key="t3" icon="heart">nav3</MenuItem>
        </Menu>
      </Header>
       <Layout>
         <Sider class="demo-back">
           <Menu :value="['0-1']" class="demo-left-menu" mode="inline" :openKeys="['al0']">
            <SubMenu key="al0">
              <template slot="title">
                <Icon type="newspaper" />subnav1
              </template>
              <MenuItem key="0-1">option1</MenuItem>
              <MenuItem key="0-2">option2</MenuItem>
              <MenuItem key="0-3">option3</MenuItem>
              <MenuItem key="0-4">option4</MenuItem>
            </SubMenu>
            <SubMenu key="al1">
              <template slot="title">
                <Icon type="keypad" />subnav2
              </template>
              <MenuItem key="1-1">option1</MenuItem>
              <MenuItem key="1-2">option2</MenuItem>
              <MenuItem key="1-3">option3</MenuItem>
              <MenuItem key="1-4">option4</MenuItem>
            </SubMenu>
            <SubMenu key="al2">
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
<style scoped>
 .k-demo-layout .logo{
    width: 120px;
    height: 31px;
    background: rgb(132, 139, 156);
    float: left;
    margin: 15px 30px 15px 0;
    position:relative;
    z-index:801;
 }
.k-demo-layout .demo-top-menu{
   line-height:64px;   
   height:64px;
 }
 .k-demo-layout .demo-left-menu{
   height:100%;
   border-right:0px;
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