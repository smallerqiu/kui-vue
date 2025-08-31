<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical>
    <DatePicker v-model:value="value1" type="year" @change="onChange"/>
    <DatePicker v-model:value="value2" type="month" @change="onChange"/>
    <DatePicker v-model:value="value3" @change="onChange" />
    <DatePicker v-model:value="value4" type="time" @change="onChange"/>
    <DatePicker v-model:value="value5" type="dateTime" @change="onChange"/>
  </Space>
</template>
<script setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()

const onChange =(date,dateStr)=>{
    // console.log(date,dateStr)
}
</script>
```