<cn>
#### 基本用法
可使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space>
    <k-switch v-model:checked="checked" />
    value:
    {{checked}}
    <Button @click="checked=!checked" size="small">{{checked?'Uncheck':'Check'}}</Button>
    <k-switch checked />
  </Space>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```