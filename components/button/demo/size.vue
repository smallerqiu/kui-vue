<template>
  <Space vertical align="start">
    <RadioGroup v-model="size" type="button">
      <RadioButton value="large" label="Large" />
      <RadioButton value="default" label="Default" />
      <RadioButton value="small" label="Small" />
    </RadioGroup>
    <Space wrap>
      <Button type="primary" :size="size">Primary</Button>
      <Button :size="size">Default</Button>
      <Button type="text" :size="size">Text</Button>
      <Button type="link" :size="size">Link</Button>
      <Button type="primary" :size="size" :icon="Download"></Button>
      <Button type="primary" shape="circle" :size="size" :icon="Download"></Button>
      <Button type="primary" shape="circle" :size="size" :icon="Download"> Download </Button>
      <Button type="primary" :size="size" :icon="Download"> Download </Button>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { Download } from "kui-icons";
import type { SizeType } from "kui-vue";
import { ref } from "vue";
const size = ref<SizeType>("medium");
</script>
