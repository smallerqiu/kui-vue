<cn>
#### 不可选择日期和时间 
可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间.
</cn>

```vue
<template>
  <div>
    <DatePicker :disabledDate="disabledDate"/>
    <br/>
    <DatePicker :disabledDate="disabledDate" :disabledTime="disabledTime" mode="dateTime" />
    <br/>
    <DatePicker mode="dateTimeRange" :disabledDate="disabledDate" :disabledTime="disabledTime"/>
  </div>
</template>
<script>
import dayjs from 'dayjs';
export default {
  methods:{
    disabledDate(current){
      return current && current < dayjs().endOf('day');
    },
    range(len){
      return new Array(len).fill('').map((x,y)=>y)
    },
    disabledTime(){
      return {
        disabledHours: () => this.range(24).splice(4, 20),
        disabledMinutes: () => this.range(60).splice(40, 50),
        disabledSeconds: () => [55, 56],
      };
    }
  }
}
</script>
```
