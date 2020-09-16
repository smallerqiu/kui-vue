<cn>
#### 侧边布局/折叠模式
侧边两列式布局。页面横向空间有限时，侧边导航可收起。
侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
</cn>

```tpl
<template>
  <div class="k-demo-layout">
    <Layout>
      <Sider class="demo-sider" :style="{width:collapsed?'80px':'200px'}">
        <div class="logo" />
        <Menu mode="inline" theme="dark" v-model="left" :open-keys="open" class="demo-top-menu" :inline-collapsed="collapsed">
          <MenuItem key="1-1" icon="ios-home"><span>option1</span></MenuItem>
          <MenuItem key="1-2" icon="logo-buffer"><span>option2</span></MenuItem>
          <MenuItem key="1-3" icon="ios-heart"><span>option3</span></MenuItem>
          <MenuItem key="1-4" icon="ios-albums"><span>option4</span></MenuItem>
          <SubMenu key="l0">
            <template slot="title">
              <Icon type="ios-paper" /><span>subnav1</span>
            </template>
            <MenuItem key="0-1">option1</MenuItem>
            <MenuItem key="0-2">option2</MenuItem>
            <MenuItem key="0-3">option3</MenuItem>
            <MenuItem key="0-4">option4</MenuItem>
          </SubMenu> 
        </Menu>
        <div class="toggle-menu" @click="toggle"><Icon :type="!collapsed?'ios-arrow-back':'ios-arrow-forward'" /></div>
      </Sider>
      <Content class="k-demo-main">
        <Menu mode="horizontal" theme="dark" v-model="top" class="demo-top-menu">
          <MenuItem key="t1" icon="ios-home">nav1</MenuItem>
          <MenuItem key="t2" icon="logo-buffer">nav2</MenuItem>
          <MenuItem key="t3" icon="ios-heart">nav3</MenuItem>
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
<script>
export default{
  data(){
    return{
      top:['t1'],
      left:['0-1'],
      open:['l0'],
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
<style scoped> 
.k-demo-layout{
  
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
```