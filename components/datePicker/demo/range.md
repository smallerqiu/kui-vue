<cn>
#### 范围选择器
通过设置 type 属性，指定范围选择器类型。
</cn>

```vue
<template>
  <Space vertical>
    <DatePicker v-model:value="value1" type="monthRange" @change="onChange"/>
    <DatePicker v-model:value="value2" type="dateRange" @change="onChange" />
    <DatePicker v-model:value="value3" type="dateTimeRange" @change="onChange"/>
  </Space>
</template>
<script setup>
import { ref } from 'vue'
const value1 = ref()
const value2 = ref()
const value3 = ref()

const onChange =(date,dateStr)=>{
    // console.log(date,dateStr)
}
</script>
```