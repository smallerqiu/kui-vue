<template>
  <Splitter lazy style="height: 220px" @resize="preview = $event" @change="applied = $event">
    <SplitterPanel size="35%" min="100px">
      <Flex align="center" justify="center" style="height: 100%">Chart</Flex>
    </SplitterPanel>
    <SplitterPanel min="100px">
      <Flex align="center" justify="center" style="height: 100%">Editor</Flex>
    </SplitterPanel>
  </Splitter>
  <div>
    <code>preview: {{ preview.map((size) => Math.round(size)).join(", ") }}</code>
  </div>
  <div>
    <code>applied: {{ applied.map((size) => Math.round(size)).join(", ") }}</code>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Flex, Splitter, SplitterPanel } from "kui-vue";
const preview = ref<number[]>([]);
const applied = ref<number[]>([]);
</script>
