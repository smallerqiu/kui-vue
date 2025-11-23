<cn>
### 基础用法
单独使用 `checked` 表示是否为选中状态 ,使用 `checked.sync` 可以双向绑定数据。
</cn>

```vue
<template>
  <Space vertical>
    {{ checked }}
    <Checkbox :checked.sync="checked">Checkbox</Checkbox>
    <Button @click="checked = !checked" size="small">
      {{ checked ? "Uncheck" : "Check" }}
    </Button>
    <Checkbox label="Checkbox" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(true);
</script>
```
