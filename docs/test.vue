<template>
  <div class="demo-affix-scroll" ref="container">
    <div style="padding:200px;height:10px;" />
    <div class="demo-affix-inner">
      <Affix :target="() => this.$refs.container" :offsetTop="100">
        <Button type="primary" id="tesss">Affix at the top of container</Button>
      </Affix>
    </div>
    <div style="padding:200px;height:10px;" />
    <div class="demo-affix-inner">
      <Affix :target="() => this.$refs.container" :offsetBottom="100">
        <Button type="primary" id="tesss">Affix at the top of container</Button>
      </Affix>
    </div>
  </div>
</template>

<style scoped>
.demo-affix-scroll {
  height: 600px;
  overflow-y: scroll;
  margin: 200px;
}
.demo-affix-inner {
  height: 3000px;
  /* background:#efefef; */
  /* padding-top:30px; */
  background-image: linear-gradient(-45deg, #cdcdcd 25%, transparent 0),
    linear-gradient(45deg, #cdcdcd 25%, transparent 0),
    linear-gradient(-45deg, transparent 75%, #cdcdcd 0),
    linear-gradient(45deg, transparent 75%, #cdcdcd 0);
  background-size: 20px 20px;
  background-position: 0 0, 0 -10px, -10px 10px, 10px 0;
}
</style>
