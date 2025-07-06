<cn>
#### 年/月/日/时间
使用 `mode` 属性，可以自定义日期显示类型，提供 `year` `month` `date` `time` `dateRange` `dateTimeRange`。
</cn>

```vue
<template>
  <div> 
    <DatePicker type='year' placeholder="请选择年份" />
    <br />
    <DatePicker type='month' placeholder="请选择月份" />
    <br />
    <DatePicker />
    <br />
    <DatePicker type="time" placeholder="请选择时间" />
    <br />
    <DatePicker placeholder="请选择时间" type="dateTime" />
    <br />
    <DatePicker :placeholder="['Start Date','End Date']" type="dateRange"/>
    <br />
    <DatePicker :placeholder="['Start Time','End Time']" type="dateTimeRange" />
  </div>
</template>
```