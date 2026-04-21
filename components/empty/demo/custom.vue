<template>
  <Space vertical block>
    <Empty
      image="https://cdn.chuchur.com/img/thumb.png"
      description="No image"
      :imageStyle="{ height: '60px' }"
    >
      <Button type="primary" shape="circle" :icon="Add" size="small">Upload a image</Button>
    </Empty>
    <br />
    Use slot
    <br />
    <Empty>
      <template #description>Currently no <a>images</a></template>
      <template #image>
        <img src="https://cdn.chuchur.com/img/thumb.png" style="height: 60px" />
      </template>
      <Button type="primary" shape="circle" :icon="Add" size="small">Upload a image</Button>
    </Empty>
  </Space>
</template>
<script setup lang="ts">
import { Add } from "kui-icons";
</script>
