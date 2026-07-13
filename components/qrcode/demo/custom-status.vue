<template>
  <Space wrap>
    <QRCode :value="url" :size="100" />
    <QRCode :value="url" status="loading" :size="100">
      <template #loading>
        <Spin mode="bounce" />
        <p>疯狂加载中...</p>
      </template>
    </QRCode>
    <QRCode :value="url" :status="qrStatus" :size="100">
      <template #expired>
        <Button type="primary" @click="handleRefreshQR" size="small">刷新二维码</Button>
      </template>
    </QRCode>
    <QRCode :value="url" status="scanned" :size="100">
      <template #scanned>
        <Icon :type="CircleCheck" color="green" size="30" />
        <div>支付成功</div>
      </template>
    </QRCode>
  </Space>
</template>

<script setup lang="ts">
import { CircleCheck } from "kui-icons";
import type { QRCodeStatus } from "kui-vue";
import { ref } from "vue";

const qrStatus = ref<QRCodeStatus>("expired");
const url = ref("https:k-ui.cn");
const handleRefreshQR = () => {
  qrStatus.value = "loading";
  setTimeout(() => {
    url.value = "https://xxx.com/pay";
    qrStatus.value = "active"; // 刷新完毕，重新绘制
  }, 1000);
};
</script>
