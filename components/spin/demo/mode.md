<cn>
### Spin类型
可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
</cn>
<en>
### Spin Type
You can directly embed content into Spin to turn an existing container into a loading state.
</en>

```vue
<template>
  <div>
    <Spin v-model="spinning" :mode="mode">
      <div class="deme-spin-container">
        See the light through the mist.<br />
        See the light through the mist.
      </div>
    </Spin>
    <br />
    <br />
    Loading state：<k-switch v-model="spinning" />
    <br />
    <br />
    <RadioGroup v-model="mode">
      <Radio value="bounce" label="Bounce" />
      <Radio value="flip" label="Flip" />
      <Radio value="rotate" label="Rotate" />
      <Radio value="zoom" label="Zoom" />
    </RadioGroup>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const mode = ref("bounce");
const spinning = ref(false);
</script>
<style scoped>
.deme-spin-container {
  padding: 100px 50px;
}
</style>
```
