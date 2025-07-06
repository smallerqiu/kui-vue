<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
    <DatePicker />
    <DatePicker placeholder="小尺寸/Small" picker-size="small" />
    <br />
    <DatePicker type="month" placeholder="请选择月份" />
    <DatePicker type="dateRange" />
    <DatePicker type="dateTimeRange" picker-size="small" />
</template>
```