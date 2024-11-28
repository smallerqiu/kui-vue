<template>
  <div>
    {{ test }}
    <DatePicker />
    <DatePicker placeholder="小尺寸/Small" picker-size="small"  />
    <br />
    <DatePicker mode="month" placeholder="请选择月份" />
    <DatePicker mode="dateRange" />
    <DatePicker mode="dateTimeRange" picker-size="small" v-model="test"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: []
    }
  }
}
</script>