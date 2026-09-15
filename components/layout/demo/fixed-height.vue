<template>
  <Layout class="fixed-layout">
    <Header>Fixed-height Layout</Header>
    <Layout class="fixed-layout-body">
      <Sider width="140">Sider</Sider>
      <Content>
        <p v-for="item in 20" :key="item">Scrollable content {{ item }}</p>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<style scoped>
.fixed-layout {
  height: 360px;
  overflow: hidden;
}
.fixed-layout :deep(.k-layout-header),
.fixed-layout :deep(.k-layout-footer) {
  flex: none;
  padding: 16px 24px;
  background: var(--kui-color-bg-3);
}
.fixed-layout :deep(.k-layout-sider) {
  display: grid;
  place-items: center;
  background: var(--kui-color-bg-4);
}
.fixed-layout :deep(.fixed-layout-body) {
  min-height: 0;
}
.fixed-layout :deep(.k-layout-content) {
  min-height: 0;
  overflow: auto;
  padding: 8px 24px;
  background: var(--kui-color-bg-2);
}
</style>
