<template>
  <Flex vertical size="medium">
    <RadioGroup v-model="value">
      <Radio value="horizontal">horizontal</Radio>
      <Radio value="vertical">vertical</Radio>
    </RadioGroup>
    <Flex :vertical="value == 'vertical'" style="width: 100%">
      <div
        v-for="x in 4"
        :style="{
          'background-color': `var(--kui-color-bg-${x % 2 ? 4 : 3})`,
          height: '40px',
          width: '25%',
        }"
      ></div>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("horizontal");
</script>
