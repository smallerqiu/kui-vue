<cn>
### 单选
单独使用 `v-model` 的值 `true` 表示选中，为 `false` 表示未选中。
</cn>

```vue
<template>
  <Space vertical>
    <code>value: {{ checked }}</code>
    <Checkbox v-model="checked">Checkbox</Checkbox>
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Checkbox label="Checkbox" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(true);
</script>
```
