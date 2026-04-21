<template>
  <Flex vertical size="middle">
    <RadioGroup v-model="flexSize" @change="changeSize">
      <Radio value="small" label="small" />
      <Radio value="middle" label="middle" />
      <Radio value="large" label="large" />
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
const changeSize = (value: any) => {
  flexSize.value = value;
};
</script>
