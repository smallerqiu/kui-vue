<template>
  <Layout class="nested-layout">
    <Header>Header</Header>
    <Layout>
      <Sider width="120">Left Sider</Sider>
      <Layout>
        <Content>Content</Content>
        <Footer>Inner Footer</Footer>
      </Layout>
      <Sider width="120">Right Sider</Sider>
    </Layout>
  </Layout>
</template>

<style scoped>
.nested-layout {
  height: 320px;
  overflow: hidden;
  text-align: center;
}
.nested-layout :deep(.k-layout-header),
.nested-layout :deep(.k-layout-footer) {
  padding: 16px;
  background: var(--kui-color-bg-3);
}
.nested-layout :deep(.k-layout-sider) {
  display: grid;
  place-items: center;
  background: var(--kui-color-bg-4);
}
.nested-layout :deep(.k-layout-content) {
  display: grid;
  place-items: center;
  background: var(--kui-color-bg-2);
}
</style>
