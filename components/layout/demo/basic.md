<cn>
### 典型布局
典型的页面布局。
</cn>
<en>
### Typical Layout
A typical page layout.
</en>

```vue
<template>
  <Flex class="demo-Layout" size="small" wrap>
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
  </Flex>
</template>
<style scoped>
.demo-Layout {
  text-align: center;
}
.demo-Layout > .Layout {
  color: var(--kui-color-text-description);
  min-width: calc(50% - 8px);
  border-radius: 10px;
  overflow: hidden;
}
.demo-Layout .Layout-header {
  background-color: var(--kui-color-bg-3);
  height: 64px;
  line-height: 64px;
}
.demo-Layout .Layout-footer {
  background-color: var(--kui-color-bg-3);
}
.demo-Layout .Layout-content {
  min-height: 120px;
  line-height: 120px;
  background-color: var(--kui-color-bg-2);
}
.demo-Layout .Layout-sider {
  line-height: 120px;
  background-color: var(--kui-color-bg-4);
  width: 30%;
}
</style>
```
