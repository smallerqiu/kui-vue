<template>
  <Space vertical>
    <Space compact>
      <Input v-model="url" />
      <Button type="primary" @click="qrcodeRef.download()">Download</Button>
    </Space>
    <QRCode :value="url" :size="128" logo="/favicon.png" ref="qrcodeRef" />
    <Poptip>
      <template #content>
        <QRCode :value="url" :size="128" :bordered="false" logo="/favicon.png" />
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const url = ref("https://k-ui.cn");
const qrcodeRef = ref();
</script>
