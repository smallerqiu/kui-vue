<template>
  <Splitter direction="horizontal" style="height: 200px">
    <SplitterPanel size="20%" :min="10" :max="30"><Text text="Folders" /></SplitterPanel>
    <SplitterPanel>
      <Splitter direction="vertical">
        <SplitterPanel><Text text="Editor" /></SplitterPanel>
        <SplitterPanel size="50px"><Text text="Console" /></SplitterPanel>
      </Splitter>
    </SplitterPanel>
  </Splitter>
</template>
<script lang="ts" setup>
import { Flex } from "kui-vue";
import { h } from "vue";

const Text = (p: { text: string }) => {
  return h(
    Flex,
    { align: "center", justify: "center", style: { height: "100%", color: "#aaa" } },
    { default: () => p.text }
  );
};
</script>
