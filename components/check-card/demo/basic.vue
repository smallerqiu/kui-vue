<template>
  <div class="demo-list">
    <CheckCard
      v-model="agreed"
      title="同意用户协议"
      description="注册即表示你已阅读并接受服务条款与隐私政策。"
    />
    <TypographyText type="secondary">当前状态：{{ agreed ? "已同意" : "未同意" }}</TypographyText>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const agreed = ref(false);
</script>

<style scoped>
.demo-list {
  display: grid;
  max-width: 480px;
  gap: 12px;
}
</style>
