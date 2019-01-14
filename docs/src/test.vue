 
<!--单独调试组件专用-->
 
<template>
  <div style="padding:100px; 200px">
    年月日<DatePicker lang="zh"></DatePicker>
    年<DatePicker format="YYYY"></DatePicker>
    月<DatePicker format="MM" clearable></DatePicker>
    月<DatePicker format="YYYY-MM-DD HH:mm:ss" clearable mini></DatePicker>
    时间<DatePicker :value="[]" format="YYYY-MM-DD HH:mm:ss" width="360" clearable></DatePicker>
  </div>
</template>
