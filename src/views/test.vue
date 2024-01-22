<template>
  <div> 
    <DatePicker mode='year' placeholder="请选择年份" />
    <br />
    <DatePicker mode='month' placeholder="请选择月份" />
    <br />
    <DatePicker />
    <br />
    <DatePicker placeholder="请选择时间" showTime />
    <br />
    <DatePicker :placeholder="['Start Date','End Date']" mode="range"/>
    <br />
    <DatePicker :placeholder="['Start Time','End Time']" mode="range" showTime />
  </div>
</template>

