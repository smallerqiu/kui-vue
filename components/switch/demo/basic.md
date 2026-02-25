<cn>
### 基本用法
可使用 `v-model` 进行数据双向绑定
</cn>
<en>
### Basic Usage
Can use `v-model` for two-way data binding.
</en>

```vue
<template>
  <Space vertical>
    value: {{ checked }}
    <k-switch v-model="checked" />
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Uncheck" : "Checked" }}
    </Button>
    <k-switch checked />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(false);
</script>
```
