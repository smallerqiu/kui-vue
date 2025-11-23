<cn>
### 无边框
无边框样式。
</cn>

```vue
<template>
  <Space wrap>
    <DatePicker :bordered="false"/>
    <DatePicker mode="month" placeholder="请选择月份"  :bordered="false"/>
    <DatePicker mode="dateRange"  :bordered="false"/>
    <DatePicker :bordered="false" disabled/>
    <DatePicker mode="dateRange"  :bordered="false" disabled/>
  </Space>
</template>
```