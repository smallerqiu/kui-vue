<template>
  <Space>
    <Card class="cover-card" title="设置 cover 后不会显示此标题">
      <CardMeta
        :avatar="avatar"
        title="山间旅居"
        description="远离城市喧嚣，在自然中度过一个安静的周末。"
      />
      <template #cover>
        <img :src="cover" style="height: 300px" />
      </template>
    </Card>
    <Card class="cover-card" title="设置 cover 后不会显示此标题" bordered>
      <CardMeta
        :avatar="avatar"
        title="山间旅居"
        description="远离城市喧嚣，在自然中度过一个安静的周末。"
      />
      <template #cover>
        <img :src="cover" style="height: 300px" />
      </template>
    </Card>
  </Space>
</template>

<script setup lang="ts">
const cover =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=960&q=80";
const avatar = "https://cdn.chuchur.com/img/monkey.jpeg";
</script>

<style scoped>
.cover-card {
  max-width: 360px;
}
</style>
