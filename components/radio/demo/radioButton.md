<cn>
### 组合Button使用
结合 `RadioGroup`,`RadioButton` 可以组合使用
</cn>

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
    <RadioGroup v-model="size" type="button" size="small" :options="sizes">
    </RadioGroup>
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
<script setup>
import { LogoApple } from "kui-icons";
import { ref } from "vue";
const size = ref("default");
const shape = ref("default");
const theme = ref("default");
const value = ref(0);
const dates = [
  { label: "7天", value: 0 },
  { label: "1个月", value: 1 },
  { label: "1季度", value: 2 },
  { label: "1年", value: 3 },
  { label: "5年", value: 4, disabled: true },
];
const sizes = [
  { label: "Large", value: "large", icon: LogoApple },
  { label: "Default", value: "default" },
  { label: "Small", value: "small" },
];
</script>
```
