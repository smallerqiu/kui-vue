<template>
  <Flex vertical size="medium">
    <RadioGroup v-model="flexSize" @change="changeSize">
      <Radio value="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" label="Large" />
    </RadioGroup>
    <Checkbox v-model="isCustomize" label="customize" />
    <Slider v-model="customize" :step="1" :max="50" v-if="isCustomize" @change="changeSize" />
    <Flex :size="flexSize">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import type { SizeType } from "kui-vue";
import { ref } from "vue";
const flexSize = ref<SizeType>("small");
const customize = ref(8);
const isCustomize = ref(false);
const changeSize = (value: string | number | (string | number)[]) => {
  if (value === "small" || value === "medium" || value === "large") flexSize.value = value;
};
</script>
