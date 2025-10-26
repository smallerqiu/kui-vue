<cn>
#### 日期格式
使用 `format` 属性，可以自定义日期显示格式，详见  [dayjs](http://day.js.org/)。
</cn>

```vue
<template>
  <Space wrap>
    <DatePicker value="2019-10-12 22:12:12" format="YYYY年MM月DD日 HH:mm:ss" mode="dateTime" style="width:210px"/>
    <DatePicker value="2019-10-12" format="YYYY/MM/DD"/>
    <DatePicker value="2019-10-12" format="YYYY.MM.DD"/>
    <DatePicker v-model="date" format="YYYY.MM.DD" mode="dateRange" @change="change"/>{{date}}
  </Space>
</template>
<script>
export default{
  data() {
    return {
      date:['2019-10-12','2020-10-19']
    }
  },
  methods:{
    change(date){
      console.log(date)
    }
  }
}
</script>
```