<template>
  <Space vertical style="width: 100%">
    <Space>
      <Button @click="saved = [...sizes]">Save layout</Button>
      <Button @click="sizes = [...saved]">Restore layout</Button>
    </Space>
    <code>sizes: {{ sizes.map((size) => Math.round(size)).join(", ") }}</code>
    <Splitter v-model="sizes" style="height: 200px">
      <SplitterPanel min="100px">
        <Flex align="center" justify="center" style="height: 100%">Left</Flex>
      </SplitterPanel>
      <SplitterPanel min="100px">
        <Flex align="center" justify="center" style="height: 100%">Right</Flex>
      </SplitterPanel>
    </Splitter>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Button, Flex, Space, Splitter, SplitterPanel } from "kui-vue";
const sizes = ref([240, 556]);
const saved = ref([...sizes.value]);
</script>
