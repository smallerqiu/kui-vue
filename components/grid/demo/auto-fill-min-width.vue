<template>
  <Grid :itemMinWidth="256" :xGap="16" :yGap="16">
    <GridItem v-for="(_, i) in data" :key="i" class="box">
      Card {{ i + 1 }} (Minimum 256px)
    </GridItem>
  </Grid>
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref(Array.from({ length: 7 }));
</script>
<style lang="less" scoped>
.box {
  background: var(--kui-color-bg-3);
  height: 64px;
}
</style>
