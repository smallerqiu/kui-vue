<template>
  <div style="margin: 400px;"> 
    <DatePicker mode='year' placeholder="请选择年份" />
    <br />
    <DatePicker mode='month' placeholder="请选择月份" />
    <br />
    <DatePicker />
    <br />
    <DatePicker mode="time" placeholder="请选择时间" />
    <br />
    <DatePicker placeholder="请选择时间" mode="dateTime" />
    <br />
    <DatePicker :placeholder="['Start Date','End Date']" mode="dateRange"/>
    <br />
    <DatePicker :placeholder="['Start Time','End Time']" mode="dateTimeRange" />
  </div>
</template>

