<cn>
### 单选
单独使用 `v-model` 的值 `true` 表示选中，为 `false` 表示未选中。
</cn>
<en>
### Single Selection
When used alone, the `v-model` value is `true` for selected and `false` for unselected.
</en>

```vue
<template>
  <Space vertical>
    <code>value: {{ checked }}</code>
    <Radio v-model="checked">Radio</Radio>
    <Button @click="checked = !checked" size="small">
      {{ !checked ? "Unchecked" : "Checked" }}
    </Button>
    <Radio label="Radio" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(true);
</script>
```
