<template>
  <div>
    <BackTop :bottom="100">
      <div class="custom-back-top">UP</div>
    </BackTop>
    The custom button is the blue button
  </div>
</template>
<style scoped>
.custom-back-top {
  background: #2d94ff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>