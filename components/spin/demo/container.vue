<template>
  <div>
    <Spin v-model="spinning">
      <div class="deme-spin-container">
        See the light through the mist.<br />
        See the light through the mist.
      </div>
    </Spin>
    <br />
    <br />
    Loading state：<KSwitch v-model="spinning" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const spinning = ref(false);
</script>
<style scoped>
.deme-spin-container {
  padding: 100px 50px;
}
</style>