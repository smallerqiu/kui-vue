<template>
  <div>
    <Spin v-model="spinning" :mode="mode">
      <div class="deme-spin-container">
        See the light through the mist.<br />
        See the light through the mist.
      </div>
    </Spin>
    <br />
    <br />
    Loading state：<k-switch v-model="spinning" />
    <br />
    <br />
    <RadioGroup v-model="mode">
      <Radio value="bounce" label="Bounce" />
      <Radio value="flip" label="Flip" />
      <Radio value="rotate" label="Rotate" />
      <Radio value="zoom" label="Zoom" />
    </RadioGroup>
  </div>
</template>
<script setup lang="ts">
import type { SpinModeType } from "kui-vue";
import { ref } from "vue";
const mode = ref<SpinModeType>("bounce");
const spinning = ref(false);
</script>
<style scoped>
.deme-spin-container {
  padding: 100px 50px;
}
</style>
