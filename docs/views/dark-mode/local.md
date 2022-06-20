## 主题跟随系统

macOS 下的系统主题可以通过 系统偏好设置 -> 通用 -> 外观 来配置。

在浏览器 (Chrome >= 76, Safari >= 12.1) 中可以通过媒体查询来设定:

```css
.day   { background: #eee; color: black; }
.night { background: #333; color: white; }

@media (prefers-color-scheme: dark) {
  .day.dark-scheme   { background:  #333; color: white; }
  .night.dark-scheme { background: black; color:  #ddd; }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme   { background: white; color:  #555; }
  .night.light-scheme { background:  #eee; color: black; }
}
```

当然也可以通过JS 来监听 :

```js
const monitor = window.matchMedia('(prefers-color-scheme: dark)');

function matchMode(e) {
    const body = document.body;
    if (e.matches) {
        if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
        }
    } else {
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        }
    }
}

monitor.addListener(matchMode);
```

# 局部模式

在顶级元素上添加 'theme-mode=dark' 或者 'theme-mode=light' 属性 ，这个元素下的组件会使用对应模式的颜色变量。

>局部暗色/亮色对弹出层不生效

<cn>
#### 切换主题
简单的切换例子
</cn>

```vue
<template>
  <div>
  <Button theme="light" @click="change">局部暗色</Button>
  <div class="k-demo-layout">
    <Layout  class="layout-back">
      <Sider class="demo-sider" :style="{width:collapsed?'60px':'200px'}">
        <div class="logo-box">
          <Icon :type="LogoKui" size="30" class="logo"/>
          <transition>
            <span v-show="!collapsed">KUI运营后台</span>
          </transition>
        </div>
        <Menu mode="inline" v-model="left" :inline-collapsed="collapsed" style="border:none;">
          <MenuItem key="1-1" :icon="Home"><span>首页</span></MenuItem>
          <MenuItem key="1-2" :icon="Heart"><span>数据统计</span></MenuItem>
          <MenuItem key="1-3" :icon="Settings"><span>能源管理</span></MenuItem>
        </Menu>
        <Button theme="light" :icon="!collapsed?ChevronBack:ChevronForward" @click="toggle" class="btn-expand"/>
      </Sider>
      <Content class="k-demo-main">
        <Row type="flex" align="middle" class="header-nav">
          <Col flex="1"></Col>
          <Col>
            <Space :size="20">
              <Input :icon="Search" theme="light" shape="circle" placeholder="搜索" style="width:200px"/>
              <Button :icon="NotificationsOutline" theme="normal"/>
              <Avatar style="background:#3a95ff" :size="40" shape="square">K</Avatar>
            </Space>
          </Col>
        </Row>
        <Breadcrumb class="nav">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb> 
        <div class="demo-dark" :theme-mode="dark?'dark':'light'">
            <Menu mode="horizontal" v-model="current">
            <MenuItem key="1" :icon="Mail">Navigation One</MenuItem>
            <MenuItem key="2" :icon="Heart" disabled>Navigation Two</MenuItem>
            <MenuItem key="4">
            <a href="https://k-ui.cn" target="_blank">Navigation -Link</a>
            </MenuItem>
          </Menu>
          <Page :current="1" :total="50"/>
          <div>
            <Tag>标签1</Tag>
            <Tag>标签2</Tag>
            <Tag>标签3</Tag>
            <Tag closeable>标签4</Tag>
          </div>
          <div style="width:512px;">
            <Form :labelCol="{span:5}" :wrapperCol="{span:16}" :size="size" :theme="theme?'light':''" :shape="checked?'circle':''"> 
              <FormItem label="主题">
                <Checkbox v-model="theme" label="Light" style="margin-right:8px;"/>
                <Checkbox v-model="checked" label="Shape"/>
              </FormItem>
              <FormItem label="尺寸">
                <RadioGroup v-model="size" >
                  <RadioButton value="large" label="Large" />
                  <RadioButton value="default" label="Default" />
                  <RadioButton value="small" label="Small" />
                </RadioGroup>
              </FormItem>
              <FormItem label="Input">
                <Input placeholder="input..."/>
              </FormItem>
              <FormItem label="Select">
                <Select >
                  <Option value="0" label="Apple" />
                  <Option value="1" label="Banana" />
                  <Option value="2" label="Orange" />
                </Select>
              </FormItem>
              <FormItem label="DatePicker">
                <DatePicker  />
              </FormItem>
              <FormItem label="Radio">
                <RadioGroup>
                  <Radio value="0" label="Apple" />
                  <Radio value="1" label="Banana" />
                  <Radio value="2" label="Orange" />
                </RadioGroup>
              </FormItem>
              <FormItem label="Checkbox">
                <CheckboxGroup>
                  <Checkbox value="0" label="Apple" />
                  <Checkbox value="1" label="Banana" />
                  <Checkbox value="2" label="Orange" />
                </CheckboxGroup>
              </FormItem>
              <FormItem label="Switch">
              <k-switch true-text="Yes" false-text="No" />
              </FormItem>
              <FormItem label="Text">
                <TextArea placeholder="Please input..."/>
              </FormItem>
              <FormItem :wrapperCol="{offset:5}">
                <Button type="primary" circle >Submit</Button>
                <Button style="margin-left: 10px" circle >Cancel</Button>
              </FormItem>
            </Form>
            </div>
        </div>
        <Footer>KUI ©2018 Created by chuchur</Footer>
      </Content> 
    </Layout>
  </div>
  </div>
</template>
<script>
import { LogoKui ,Home, Heart, Settings, ChevronBack, ChevronForward, Search,NotificationsOutline,Mail } from "kui-icons";
export default{
  data() {
    return {
      LogoKui,Home, Heart, Settings, ChevronBack, ChevronForward, Search, NotificationsOutline,Mail,
      current:['1'],
      left:['1-1'],
      collapsed:false,
      dark:false,
       size:'default',
      theme:false,
      checked:false,
      shape:''
    }
  },
  methods:{
    change(){
      this.dark = !this.dark
    },
    toggle(){
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style scoped lang="less"> 
.demo-dark{
  padding:20px 0;
  color:#ddd;
  margin:20px;
  background:var(--kui-color-back);
}
.k-demo-layout{
  .logo-box {
    box-sizing: border-box;
    display:flex;
    align-items:center;
    padding:16px 0 17px 16px;
    /* background:var(--kui-color-gray-90); */
    white-space:nowrap;
    overflow:hidden;
    .logo{
      margin-right:8px;
    }
  } 
  .header-nav{
    border-bottom:1px solid var(--kui-color-border);
    padding-bottom:10px;
  }
}
.btn-expand{
  position:absolute;
  bottom:10px;
  left:12px;
}
.k-demo-layout .demo-sider{
  left: 0;
  position:relative;
  border-right:1px solid var(--kui-color-border);
  transition: all 0.3s ease 0s;
}
.k-demo-layout .k-demo-main .nav{
   padding:16px 0 0 16px;
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