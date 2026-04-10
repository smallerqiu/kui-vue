<cn>
### 卡片加载中
可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
</cn>
<en>
### Card Loading
You can directly embed content into Spin to turn an existing container into a loading state.
</en>

```vue
<template>
  <div>
    <Spin v-model="spinning">
      <div class="deme-spin-container">
        See the light through the mist.<br />
        See the light through the mist.
      </div>
    </Spin>
    <br />
    <br />
    Loading state：<KSwitch v-model="spinning" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const spinning = ref(false);
</script>
<style scoped>
.deme-spin-container {
  padding: 100px 50px;
}
</style>
```
