<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
    <DatePicker v-model:value="value1" @change="onChange" />
    <DatePicker v-model:value="value2" placeholder="小尺寸/Small" picker-size="small" />
    <br />
    <DatePicker v-model:value="value3" type="month" placeholder="请选择月份" />
    <DatePicker v-model:value="value4" type="dateRange" />
    <DatePicker v-model:value="value5" type="dateTimeRange" picker-size="small" />
</template>
<script setup>
import { ref } from 'vue'
const value1 = ref('2028-12-12')
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()

const onChange =(date,dateStr)=>{
    console.log(date,dateStr)
}
</script>
```