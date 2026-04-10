<cn>
### 组合Button使用
结合 `RadioGroup`,`RadioButton` 可以组合使用
</cn>
<en>
### Combined with Button
Combine `RadioGroup` and `RadioButton` for usage.
</en>

```vue
<template>
  <Space vertical>
    <code>Shape : {{ shape }}</code>
    <RadioGroup v-model="shape" size="small" type="button">
      <RadioButton value="default" label="Default" />
      <RadioButton value="circle" label="Circle" />
    </RadioGroup>
    <code>Theme :{{ theme }}</code>
    <RadioGroup v-model="theme" size="small" type="button">
      <RadioButton value="default" label="Default" />
      <RadioButton value="light" label="Light" />
      <RadioButton value="card" label="Card" />
    </RadioGroup>
    <code>Size :{{ size }}</code>
    <RadioGroup v-model="size" type="button" size="small" :options="sizes"> </RadioGroup>
    <br />
    <RadioGroup
      type="button"
      v-model="value"
      :size="size"
      :theme="theme"
      :shape="shape"
      :options="dates"
    >
    </RadioGroup>
  </Space>
</template>
<script setup lang="ts">
import { LogoApple } from "kui-icons";
import { ref } from "vue";
const size = ref("default");
const shape = ref("default");
const theme = ref("default");
const value = ref(0);
const dates = [
  { label: "1 week", value: 0 },
  { label: "1 month", value: 1 },
  { label: "Q1", value: 2 },
  { label: "1 year", value: 3 },
  { label: "5 years", value: 4, disabled: true },
];
const sizes = [
  { label: "Large", value: "large", icon: LogoApple },
  { label: "Default", value: "default" },
  { label: "Small", value: "small" },
];
</script>
```
