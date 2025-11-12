<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <Space>
    <Checkbox disabled>disabled</Checkbox>
    <Checkbox disabled :checked="true">disabled</Checkbox>
    <Checkbox indeterminate disabled>indeterminate</Checkbox>
    <br />
    <br />
    <Checkbox :disabled="disabled" v-model:checked="checked">Checkbox</Checkbox>
    <Button @click="toggleChecked" size="small">
      {{ checked ? "Checked" : "Uncheck" }}
    </Button>
    <Button @click="toggleDisabled" size="small">
      {{ disabled ? "Enable" : "Disabled" }}
    </Button>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const disabled = ref(false);
const checked = ref(false);
const toggleDisabled = () => {
  disabled.value = !disabled.value;
};
const toggleChecked = () => {
  checked.value = !checked.value;
};
</script>
```
