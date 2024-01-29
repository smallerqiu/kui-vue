<cn>
#### 无边框
无边框样式。
</cn>

```vue
<template>
  <div>
    <DatePicker :bordered="false"/>
    <br/>
    <DatePicker mode="month" placeholder="请选择月份"  :bordered="false"/>
    <br/>
    <DatePicker mode="dateRange"  :bordered="false"/>
    <br/>
    <DatePicker :bordered="false" disabled/>
    <br/>
    <DatePicker mode="dateRange"  :bordered="false" disabled/>
  </div>
</template>
```