<template>
  <Space vertical>
    <ImageGroup>
      <KImage
        :width="80"
        :height="80"
        v-for="(item, index) in data"
        :key="index"
        :src="item"
      />
    </ImageGroup>
    <code>Use group data</code>
    <ImageGroup :data="data">
      <KImage
        :width="80"
        :height="80"
        src="https://cdn.chuchur.com/upload/demo/test_300.jpg"
      />
    </ImageGroup>
  </Space>
</template>
<script setup>
const data = [
  "https://cdn.chuchur.com/upload/cat/cat1.jpg",
  "https://cdn.chuchur.com/upload/cat/cat2.webp",
  "https://cdn.chuchur.com/upload/cat/cat3.webp",
  "https://cdn.chuchur.com/upload/cat/cat4.jpg",
  "https://cdn.chuchur.com/upload/cat/cat5.jpg",
];
</script>