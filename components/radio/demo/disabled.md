<cn>
### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>
<en>
### Disabled / Controllable
Set `disabled` to make it unavailable.
</en>

```vue
<template>
  <Space vertical>
    <Radio disabled>disabled</Radio>
    <Radio disabled checked>disabled</Radio>
    <br />
    <RadioGroup disabled :options="options" />
    <RadioGroup>
      <Radio value="Apple" label="apple" />
      <Radio value="Orange" label="orange" disabled />
      <Radio value="Banana" label="banana" />
      <Radio value="Pear" label="pear" disabled />
      <Radio value="Grape" label="grape" />
    </RadioGroup>
    <br />
    <Radio :disabled="disabled" v-model="checked">Radio</Radio>
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
