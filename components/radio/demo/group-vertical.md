<cn>
#### 组合垂直布局
组合垂直布局
</cn>

```vue
<template>
  <Space vertical align="start">
    <Space>
      Selected:{{data}}
      <Button @click="data=''" size="small">Clear</Button>
      <Button @click="data='apple'" size="small">Select apple</Button>
    </Space>
    <RadioGroup v-model:value="data" direction="vertical">
      <Radio label="Apple" value="apple" />
      <Radio label="Orange" value="orange" />
      <Radio label="Banana" value="banana" />
      <Radio label="Grape" value="grape" disabled/>
      <Radio label="Pear" value="pear" disabled/>
    </RadioGroup>
    {{cities}}
    <RadioGroup :options="options" v-model:value="cities"  direction="vertical"/>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const data = ref('apple')
const options = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shenzhen', value: 'shenzhen' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Guangzhou', value: 'guangzhou' },
  { label: 'Wuhan', value: 'wuhan' },
]
const cities = ref('wuhan')
</script>
```