<cn>
#### 无边框
无边框样式。
</cn>

```vue
<template>
  <div>
    <DatePicker :bordered="false"/>
    <br/>
    <DatePicker type="month" placeholder="请选择月份"  :bordered="false"/>
    <br/>
    <DatePicker type="dateRange"  :bordered="false"/>
    <br/>
    <DatePicker :bordered="false" disabled/>
    <br/>
    <DatePicker type="dateRange"  :bordered="false" disabled/>
  </div>
</template>
```