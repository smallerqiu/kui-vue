<template>
  <div>
    <DatePicker  mode="dateTime"  @change="change"/>
    <br/>
    <DatePicker value="2019-10-12" format="YYYY/MM/DD" @change="change"/>
    <br/>
    <DatePicker value="2019-10-12" format="YYYY.MM.DD" @change="change"/>
    <br/>
    <DatePicker v-model="date" format="YYYY.MM.DD" mode="dateRange" @change="change"/>{{date}}
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

