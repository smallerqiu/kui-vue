<template>
  <div>
    <h2>Switch 开关</h2>
    <p>注意：没有使用 kui-loader 时，必须使用 k-switch 标签。</p>
    <Switch v-model="m"></Switch> &nbsp;&nbsp;
    <Switch v-model="m2"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="success"></Switch>&nbsp;&nbsp;
    <Switch v-model="m3" true-text="是" false-text="否的点点滴滴"></Switch>&nbsp;&nbsp;
  </div>
</template>
<script>
export default {
  data() {
    return {
      m: false,
      m2: true
    };
  }
};
</script>
