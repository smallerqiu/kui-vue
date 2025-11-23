<cn>
### 基本用法
单独使用可使用 `checked.sync` 双向绑定数据
</cn>

```vue
<template>
  <Space vertical>
    {{ checked }}
    <Radio :checked.sync="checked">Radio</Radio>
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
