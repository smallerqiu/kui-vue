<cn>
#### 带图标
可以自定义图标
</cn>

```vue
<template>
  <Space vertical> 
    <Select :width="200" :icon="Search" v-model="select"  theme="light" :arrow-icon="CaretDown" :options="data"/>
    <Button @click="select=''" size="small">Clear</Button>
    <Button @click="select=1" size="small">Choose orange</Button>
    <Select :width="200" :icon="Location" :arrow-icon="ChevronDownCircleOutline">
      <Option :value="1" label="Apple" />
      <Option :value="2" label="Orange" />
      <Option :value="3" label="Banana" disabled/>
      <Option :value="4" label="Pear" />
    </Select>
    <Select :width="200" value="1" disabled :icon="Search">
      <Option value="1" label="disabled" />
    </Select>
  </Space>
</template>
<script>
import { Search,Location, ChevronDownCircleOutline, CaretDown } from "kui-icons";
export default {
  data() {
    return {
      Search,Location, ChevronDownCircleOutline, CaretDown,
      select: 2,
      data: [
        { label: "Apple", value: 0 },
        { label: "Orange", value: 1 },
        { label: "Banana", value: 2 },
        { label: "Pear", value: 3 },
      ],
    };
  }
}
</script> 
```