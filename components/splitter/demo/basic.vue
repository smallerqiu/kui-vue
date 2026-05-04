<template>
  <code>size: {{ sizes }}</code>
  <Splitter style="height: 200px; width: 100%" @resize="resize">
    <SplitterPanel><Text text="Left" /></SplitterPanel>
    <SplitterPanel><Text text="Center" /></SplitterPanel>
    <SplitterPanel><Text text="Right" /></SplitterPanel>
  </Splitter>
</template>
<script lang="ts" setup>
import { Flex } from "kui-vue";
import { h, ref } from "vue";
const sizes = ref([]);

const resize = (value: any) => {
  sizes.value = value;
};
const Text = (p: { text: string }) => {
  return h(
    Flex,
    { align: "center", justify: "center", style: { height: "100%", color: "#aaa" } },
    { default: () => p.text }
  );
};
</script>
