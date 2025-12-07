<cn>
### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <Space vertical>
    <Checkbox disabled>disabled</Checkbox>
    <Checkbox disabled checked>disabled</Checkbox>
    <Checkbox indeterminate disabled>indeterminate</Checkbox>
    <br />
    <CheckboxGroup disabled :options="options" />
    <CheckboxGroup>
      <Checkbox value="Apple" label="apple" />
      <Checkbox value="Orange" label="orange" disabled />
      <Checkbox value="Banana" label="banana" />
      <Checkbox value="Pear" label="pear" disabled />
      <Checkbox value="Grape" label="grape" />
    </CheckboxGroup>
    <br />
    <Checkbox :disabled="disabled" v-model="checked">Checkbox</Checkbox>
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
const options = [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Banana", value: "banana" },
  { label: "Pear", value: "pear" },
  { label: "Grape", value: "grape" },
];
const toggleDisabled = () => {
  disabled.value = !disabled.value;
};
const toggleChecked = () => {
  checked.value = !checked.value;
};
</script>
```
