<template>
  <Splitter style="height: 220px">
    <SplitterPanel v-model:collapsed="collapsed" size="25%" min="100px" collapsible>
      <Flex align="center" justify="center" style="height: 100%">Folders</Flex>
    </SplitterPanel>
    <SplitterPanel>
      <Flex align="center" justify="center" style="height: 100%">Editor</Flex>
    </SplitterPanel>
    <SplitterPanel size="120px" :resizable="false">
      <Flex align="center" justify="center" style="height: 100%">Locked</Flex>
    </SplitterPanel>
  </Splitter>
  <code>collapsed: {{ collapsed }}</code>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Flex, Splitter, SplitterPanel } from "kui-vue";
const collapsed = ref(false);
</script>
