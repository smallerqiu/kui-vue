<cn>
#### 年/月/日/时间
使用 `mode` 属性，可以自定义日期显示类型，提供 `year` `month` `date` `time` `dateRange` `dateTimeRange`。
</cn>

```vue
<template>
  <Space wrap> 
    <DatePicker mode='year' placeholder="请选择年份" />
    <DatePicker mode='month' placeholder="请选择月份" />
    <DatePicker />
    <DatePicker mode="time" placeholder="请选择时间" />
    <DatePicker placeholder="请选择时间" mode="dateTime" />
    <DatePicker :placeholder="['Start Date','End Date']" mode="dateRange"/>
    <DatePicker :placeholder="['Start Time','End Time']" mode="dateTimeRange" />
  </Space>
</template>
```