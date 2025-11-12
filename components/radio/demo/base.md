<cn>
#### 基本用法
单独使用可使用 `v-model` 双向绑定数据
</cn>

```vue
<template>
  <Space>
    {{ checked }}
    <Radio v-model:checked="checked">Radio</Radio>
    <Button @click="checked = !checked" size="small">
      {{ checked == false ? "Uncheck" : "Checked" }}
    </Button>
    <Radio label="Radio" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(false);
</script>
```
