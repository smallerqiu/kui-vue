<template>
  <Space vertical size="large">
    <div>
      <p>Any character</p>
      <InputOTP v-model="letterValue" type="text" :length="4" />
    </div>
    <div>
      <p>Numbers only</p>
      <InputOTP v-model="numberValue" />
    </div>
    <div>
      <p>Only uppercase letters allowed</p>
      <InputOTP v-model="letterValue" type="text" :length="4" :validator="uppercaseOnly" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const numberValue = ref("");
const letterValue = ref("");
const uppercaseOnly = (value: string) => /^[A-Z]$/.test(value);
</script>
