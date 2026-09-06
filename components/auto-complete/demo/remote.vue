<template>
  <AutoComplete
    v-model="value"
    :options="options"
    :loading="loading"
    placeholder="Please input."
    @search="search"
  />
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

interface ProductResponse {
  products: Array<{ title: string }>;
}

const value = ref("");
const options = ref<string[]>([]);
const loading = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
let controller: AbortController | undefined;

const search = (keyword: string) => {
  clearTimeout(timer);
  controller?.abort();
  if (!keyword.trim()) {
    loading.value = false;
    options.value = [];
    return;
  }
  loading.value = true;
  timer = setTimeout(async () => {
    const requestController = new AbortController();
    controller = requestController;
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(keyword)}&limit=8&select=title`,
        { signal: requestController.signal },
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = (await response.json()) as ProductResponse;
      options.value = data.products.map((item) => item.title);
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) options.value = [];
    } finally {
      if (!requestController.signal.aborted) loading.value = false;
    }
  }, 300);
};

onBeforeUnmount(() => {
  clearTimeout(timer);
  controller?.abort();
});
</script>
