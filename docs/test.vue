<template>
  <Modal v-model="show">
    <div style="width:556px;padding:800px 200px; ">
      date1:{{date1}},<br />
      date2:{{date2}},<br />
      date3:{{date3}},<br />
      date4:{{date4}},<br />
      date5:{{date5}},<br />
      date6:{{date6}},<br />
      <DatePicker mode='year' placeholder="请选择年份" v-model="date1" :transfer="true" />
      <br />
      <DatePicker mode='month' placeholder="请选择月份" v-model="date2" />
      <br />
      <DatePicker v-model="date3" />
      <br />
      <DatePicker placeholder="请选择时间" showTime v-model="date4" />
      <br />
      <DatePicker :placeholder="['Start Date','End Date']" mode="range" v-model="date5" />
      <br />
      <DatePicker :placeholder="['Start Time','End Time']" mode="range" showTime v-model="date6" />
      <br />

      <Select :transfer="false" />
      <ColorPicker :transfer="false" />
    </div>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      date1: '',
      date2: '',
      date3: '',
      date4: '',
      date5: [],
      date6: []
    };
  },

  methods: {
    test() {
      console.log('fdsfa')
    },
  }
};
</script>
