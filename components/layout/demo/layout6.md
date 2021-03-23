<cn>
#### 侧边布局/收藏模式
侧边两列式布局。页面横向空间有限时，侧边导航可收起。
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
</cn>

```vue
<template>
  <div class="k-demo-layout">
    <Layout>
      <Sider class="demo-sider" :style="{width:'200px'}">
        <div class="logo" />
        <Menu v-model="left"  mode="vertical" vertical-affixed theme="dark">
          <MenuItem key="dashboard" icon="speedometer">Dashboard</MenuItem>
          <SubMenu key="sub1">
            <template slot="title">
              <Icon type="keypad" />Navigation One
            </template>
              <MenuItem key="1-1" affixed>Option 1</MenuItem>
              <MenuItem key="1-2">Option 2</MenuItem>
              <MenuItem key="1-3" affixed>Option 3</MenuItem>
              <MenuItem key="1-4" affixed>Option 4</MenuItem>
              <MenuItem key="1-5" affixed>Option 5</MenuItem>
              <MenuItem key="1-6" affixed>Option 6</MenuItem>
              <MenuItem key="1-7">Option 7</MenuItem>
              <MenuItem key="1-8">Option 8</MenuItem>
              <MenuItem key="1-9">Option 9</MenuItem>
          </SubMenu>
          <SubMenu key="sub2">
            <template slot="title">
              <Icon type="keypad" />Navigation Two
            </template>
              <MenuItem key="2-1">Option 1</MenuItem>
              <MenuItem key="2-2">Option 2</MenuItem>
              <MenuItem key="2-3" affixed>Option 3</MenuItem>
              <MenuItem key="2-4" affixed>Option 4</MenuItem>
              <MenuItem key="2-5" affixed>Option 5</MenuItem>
              <MenuItem key="2-6" affixed>Option 6</MenuItem>
              <MenuItem key="2-7">Option 7</MenuItem>
          </SubMenu>
          <SubMenu key="sub3">
            <template slot="title">
              <Icon type="settings" />Navigation Three
            </template>
            <MenuItem key="3-1">Option 1</MenuItem>
            <MenuItem key="3-2" affixed>Option 2</MenuItem>
            <MenuItem key="3-3" affixed>Option 3</MenuItem>
            <MenuItem key="3-4">Option 4</MenuItem>
          </SubMenu>
          <SubMenu key="sub4">
            <template slot="title">
              <Icon type="settings" />Navigation Four
            </template>
            <MenuItem key="4-1">Option 1</MenuItem>
            <MenuItem key="4-2">Option 2</MenuItem>
            <MenuItem key="4-3" affixed>Option 3</MenuItem>
            <MenuItem key="4-4" affixed>Option 4</MenuItem>
          </SubMenu>
          <SubMenu key="sub5">
            <template slot="title">
              <Icon type="settings" />Navigation Five
            </template>
            <MenuItem key="5-1" affixed>Option 1</MenuItem>
            <MenuItem key="5-2" affixed>Option 2</MenuItem>
            <MenuItem key="5-3" affixed>Option 3</MenuItem>
            <MenuItem key="5-4" affixed>Option 4</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Content class="k-demo-main">
        <Menu mode="horizontal" theme="dark" v-model="top" class="demo-top-menu">
          <MenuItem key="t1" icon="home">nav1</MenuItem>
          <MenuItem key="t2" icon="logo-buffer">nav2</MenuItem>
          <MenuItem key="t3" icon="heart">nav3</MenuItem>
        </Menu>
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb> 
        <div style="padding:200px 0;text-align:center;color:#ddd;background:#fff;margin:20px;">我是打酱油的</div>
        <Footer>KUI ©2018 Created by chuchur</Footer>
      </Content> 
    </Layout>
  </div>
</template>
<style scoped> 
.k-demo-layout .dashboard{
   text-align:center;
   font-size:20px;
   color:#333;
   background:#fff;
   /* padding:10px 0; */
}
.toggle-menu{
  position:absolute;
  bottom:0;
  left:0;
  text-align:center;
  padding:10px 0;
  color:#fff;
  background:#4e5965;
  width:100%;
  cursor:pointer;
}
.k-demo-layout .demo-sider{
  background:#22303f;
  left: 0;
  position:relative;
}
.k-demo-layout .k-demo-main .nav{
   padding:16px 0 0 16px;
 }
.k-demo-layout .demo-top-menu{
   line-height:64px;   
   height:64px;
 }
.k-demo-layout .logo{
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
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
      top:['t1'],
      left:['1-1'],
    }
  },
}
</script>

```