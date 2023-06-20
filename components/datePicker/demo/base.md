<cn>
#### 基础用法
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    <DatePicker />
    <DatePicker placeholder="小尺寸/Small" picker-size="small"/>
    <br/>
    <DatePicker mode="month" placeholder="请选择月份"/>
    <br/>
    <DatePicker mode="range" />
    <DatePicker mode="range" picker-size="small" showTime/>
  </div>
</template>
```