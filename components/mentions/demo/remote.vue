<template>
  <Mentions
    v-model="value"
    clearable
    :loading="loading"
    loading-text="Searching"
    :options="options"
    placeholder="输入 @ 后继续输入以远程搜索"
    @search="search"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
const options = ref<string[]>([]);
const loading = ref(false);
const members = ["Alice", "Alex", "Bob", "Bella", "Cindy"];
let timer: ReturnType<typeof setTimeout>;

const search = (query: string) => {
  clearTimeout(timer);
  loading.value = true;
  timer = setTimeout(() => {
    options.value = members.filter((member) =>
      member.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
    loading.value = false;
  }, 1000);
};
</script>
