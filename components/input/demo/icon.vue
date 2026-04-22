<template>
  <Space vertical block>
    <Input placeholder="User Name..." :icon="User" />
    <Input type="password" placeholder="Password..." :icon="Lock" />
    <Input
      type="password"
      placeholder="Password no toggle"
      :icon="Lock"
      :visiblePasswordIcon="false"
    />
    <Space compact block>
      <Input
        type="password"
        placeholder="Password default text"
        :icon="Lock"
        :visiblePasswordIcon="visiblePasswordIcon"
      />
      <Button @click="visiblePasswordIcon = !visiblePasswordIcon"> Toggle </Button>
    </Space>

    <Input placeholder="Please input" :clearable="false" @search="search" />
  </Space>
</template>
<script setup lang="ts">
import { Lock, User } from "kui-icons";
import { message } from "kui-vue";
import { ref } from "vue";
const visiblePasswordIcon = ref(true);
const search = (value: string) => {
  message.info("This is search event");
  console.log(value);
};
</script>
