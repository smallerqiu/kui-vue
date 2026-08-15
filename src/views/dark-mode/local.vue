<template>
  <div v-bind="{ 'theme-mode': dark ? 'dark' : 'light' }" style="background: var(--kui-color-bg)">
    <Button @click="change">Local darkening</Button>
    <Preview />
  </div>
</template>
<script setup lang="ts">
import type { ShapeType, SizeType, ThemeType } from "kui-vue";
import { ref } from "vue";
import Preview from "./preview.vue";
const dark = ref(false);
const size = ref<SizeType>("medium");
const theme = ref<ThemeType>("default");
const shape = ref<ShapeType>("round");
const change = () => {
  dark.value = !dark.value;
};
</script>

<style scoped lang="less">
.demo-dark {
  padding: 20px 0;
  color: var(--kui-color-text);
  margin: 20px;
  background: var(--kui-color-bg);
}
.k-demo-layout {
  .logo-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px 0 17px 16px;
    white-space: nowrap;
    overflow: hidden;
    .logo {
      margin-right: 8px;
    }
  }
  .header-nav {
    border-bottom: 1px solid var(--kui-color-border);
    padding-bottom: 10px;
  }
}
.btn-expand {
  position: absolute;
  bottom: 10px;
  left: 12px;
}
.k-demo-layout .demo-sider {
  left: 0;
  position: relative;
  border-right: 1px solid var(--kui-color-border);
  transition: all 0.3s ease 0s;
}
.k-demo-layout .k-demo-main .nav {
  padding: 16px 0 0 16px;
}
.k-demo-layout .k-demo-main {
  overflow: auto;
}
.k-demo-layout .k-layout-footer {
  text-align: center;
  color: #999;
}
</style>
