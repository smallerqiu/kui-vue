<template>
  <Space vertical>
    <Input v-model="url" />
    <QRCode :value="url" :size="128" logo="/favicon.png" ref="qrcode" />
    <Button type="primary" @click="qrcode.download()">Download</Button>
    <Poptip>
      <template #content>
        <QRCode :value="url" :size="128" :bordered="false" logo="/favicon.png" />
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
  </Space>
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://k-ui.cn");
const qrcode = ref(null);
</script>
