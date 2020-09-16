<cn>
#### 典型布局
典型的页面布局。
</cn>

```tpl
<template>
  <div class="demo-k-layout">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content pull-left>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<style scoped>
.demo-k-layout {
    text-align: center;
    color: #fff
}
.demo-k-layout >.k-layout {
    margin-bottom: 20px;
    color: #fff
}
.demo-k-layout .k-layout-footer,.demo-k-layout .k-layout-header {
    background-color: #9dcaff;
}
.demo-k-layout .k-layout-content {
    min-height: 120px;
    line-height: 120px;
    background-color: #89bfff;
}
.demo-k-layout .k-layout-sider {
    line-height: 120px;
    background-color: #75b5ff;
    width:200px;
}
</style>
```