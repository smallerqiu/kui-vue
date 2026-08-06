<template>
  <Flex vertical size="medium">
    <RadioGroup v-model="direction">
      <Radio value="horizontal">horizontal</Radio>
      <Radio value="vertical">vertical</Radio>
    </RadioGroup>
    <Flex :vertical="direction == 'vertical'" style="width: 100%">
      <div
        v-for="x in 4"
        :style="{
          'background-color': `var(--kui-color-bg-${x % 2 ? 4 : 3})`,
          height: '40px',
          width: direction === 'vertical' ? '25%' : '100%',
        }"
      ></div>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref } from "vue";
const direction = ref("horizontal");
</script>
