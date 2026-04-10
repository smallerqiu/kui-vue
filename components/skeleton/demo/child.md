<cn>
### 子组件
加载占位图包含子组件。
</cn>
<en>
### Child Component
Loading placeholder includes child components.
</en>

```vue
<template>
  <Skeleton :loading="loading" :rows="2" animated>
    <div class="skeleton-demo">
      <h4>KUI is a desktop UI component library based on Vue.js</h4>
      <p>
        Dozens of useful and aesthetically pleasing components, a very user-friendly API suitable for developers of any skill level, comprehensive documentation, and support for Electron, SSR, Nuxt.js...
      </p>
    </div>
  </Skeleton>
  <br />
  <br />
  <Button :disabled="loading" @click="showSkeleton">Reload</Button>
</template>
<script setup lang="ts">
import { ref } from "vue";
const loading = ref(false);

const showSkeleton = () => {
  ((loading.value = true),
    setTimeout(() => {
      loading.value = false;
    }, 3000));
};
</script>
<style lang="less">
.skeleton-demo h4 {
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
```
