<cn>
#### 日期格式
使用 `format` 属性，可以自定义日期显示格式，详见  [moment.js](http://momentjs.com/)。
</cn>

```vue
<template>
  <div>
    <DatePicker value="2019-10-12 22:12:12" format="YYYY年MM月DD日 HH:mm:ss" showTime/>
    <br/>
    <DatePicker value="2019-10-12" format="YYYY/MM/DD"/>
    <br/>
    <DatePicker value="2019-10-12" format="YYYY.MM.DD"/>
    <br/>
    <DatePicker v-model="date" format="YYYY.MM.DD" mode="range" @change="change"/>{{date}}
  </div>
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