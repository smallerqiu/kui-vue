<template>
  <Space wrap>
    <Tag color="blue" closeable v-for="t in tags" :key="t" @after-close="remove(t)">{{ t }}</Tag>
    <Input
      v-if="showInput"
      @blur="add"
      size="small"
      style="width: 81px"
      ref="inputRef"
      :modelValue="tag"
    />
    <Button @click="show" size="small" :icon="Bookmark" v-show="!showInput">New Tag</Button>
  </Space>
</template>
<script setup lang="ts">
import { Bookmark } from "kui-icons";
import { nextTick, ref } from "vue";
const showInput = ref(false);
const tag = ref("");
const tags = ref(["Apple", "Banana", "Cat", "Dog"]);
const remove = (tag: string) => {
  tags.value = tags.value.filter((item) => item !== tag);
};
const inputRef = ref();
const show = () => {
  showInput.value = true;
  nextTick(() => {
    inputRef.value.focus();
  });
};
const add = (e: FocusEvent) => {
  let value = (e.target as HTMLInputElement).value.trim();
  if (value && !tags.value.includes(value)) {
    tags.value.push(value);
  }
  tag.value = "";
  showInput.value = false;
};
</script>
