<template>
  <div style="width:256px;padding:200px;">
    <Button icon="logo-apple" @click="show=true" />

    <select>
      <option>fdafdasfdsaf</option>
      <option>fdafdasfdsaf</option>
      <option>fdafdasfdsaf</option>
      <option>fdafdasfdsaf</option>
    </select>
    <button>test</button>
    <Button type="primary">test</Button>
    <Select>
      <Option :value="1">dddd</Option>
      <Option :value="2">dddd</Option>
      <Option :value="3">dddd</Option>
      <Option :value="4">dddd</Option>
      <Option :value="5">dddd</Option>
    </Select>
    <Modal v-model="show" title="333"></Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      time: 60,
      timer: null
    };
  },
  beforDestory() {
    clearInterval(this.timer);
  },
  methods: {
    search() {
      this.$Message.info("This is search event");
    },
    sendCode() {
      this.time = 59;
      this.$Message.success("验证码发送成功，请注意查收");
      this.timer = setInterval(e => {
        if (this.time < 0) {
          clearInterval(this.timer);
          this.time = 60;
        } else {
          this.time--;
        }
      }, 1000);
    }
  }
};
</script>