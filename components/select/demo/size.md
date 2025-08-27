<cn>
#### 尺寸
通过 `width` 和 `size` 可控制组件尺寸大小
</cn>

```vue
<template>
  <div>
    <RadioGroup :value="size" @change="setSize">
      <RadioButton value="large" label="large"/>
      <RadioButton value="default" label="default"/>
      <RadioButton value="small" label="small"/>
    </RadioGroup>
    <br />
    <br />
    <Space vertical>
      <Select :width="256" :size="size" clearable filterable>
        <Option value="1" label="Apple" />
        <Option value="2" label="Orange" />
        <Option value="3" label="Banana"/>
        <Option value="4" label="Pear" />
      </Select>
      <Select :width="256" :size="size" multiple v-model:value="value" filterable>
        <Option value="1" label="Apple" />
        <Option value="2" label="Orange" />
        <Option value="3" label="Banana" />
        <Option value="4" label="Pear" />
      </Select>
    </Space>
  </div>
</template>
<script setup>
import { ref } from "vue";
const size = ref('default')
const value = ref(['1','3'])
const setSize = ({value})=>{
  size.value = value
}
</script>
```