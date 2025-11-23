<cn>
### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <Space vertical>
    <Radio disabled>disabled</Radio>
    <Radio disabled :checked="true">disabled</Radio>
    <Radio :disabled="disabled" :checked.sync="checked">Radio</Radio>
    <Button @click="checked = !checked" size="small">
      {{ checked ? "Checked" : "Uncheck" }}
    </Button>
    <Button @click="disabled = !disabled" size="small">
      {{ disabled ? "Enable" : "Disabled" }}
    </Button>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(false);
const disabled = ref(false);
</script>
```
