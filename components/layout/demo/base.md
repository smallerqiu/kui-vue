<cn>
#### 典型布局
典型的页面布局。
</cn>

```vue
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
        <Content>Content</Content>
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
}
.demo-k-layout >.k-layout {
    margin-bottom: 20px;
    color: #fff
}
.demo-k-layout .k-layout-footer,.demo-k-layout .k-layout-header {
    background-color: fadeout(#3a95ff,50%);
}
.demo-k-layout .k-layout-content {
    min-height: 120px;
    line-height: 120px;
    background-color: fadeout(#3a95ff,30%);
}
.demo-k-layout .k-layout-sider {
    line-height: 120px;
    background-color: fadeout(#3a95ff,20%);
    width:200px;
}
</style>
```