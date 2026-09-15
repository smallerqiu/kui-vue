<template>
  <Layout class="layout-demo-frame">
    <Sider :collapsed="collapsed" collapsible>
      <span class="sider-label">
        <span :class="{ hidden: collapsed }">Sider</span>
        <span :class="{ hidden: !collapsed }">S</span>
      </span>
    </Sider>
    <Layout>
      <Header>
        <Button size="small" @click="collapsed = !collapsed">
          {{ collapsed ? "Expand" : "Collapse" }}
        </Button>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const collapsed = ref(false);
</script>

<style scoped>
.layout-demo-frame {
  height: 320px;
  overflow: hidden;
  text-align: center;
}
.layout-demo-frame :deep(.k-layout-header),
.layout-demo-frame :deep(.k-layout-footer) {
  padding: 16px;
  background: var(--kui-color-bg-3);
}
.layout-demo-frame :deep(.k-layout-sider) {
  display: grid;
  place-items: center;
  background: var(--kui-color-bg-4);
}
.sider-label {
  display: grid;
  place-items: center;
}
.sider-label > span {
  grid-area: 1 / 1;
  transition: opacity var(--kui-motion-duration) var(--kui-motion-easing);
}
.sider-label > .hidden {
  opacity: 0;
}
.layout-demo-frame :deep(.k-layout-content) {
  display: grid;
  place-items: center;
  background: var(--kui-color-bg-2);
}
</style>
