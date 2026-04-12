<template>
  <Space vertical block>
    <Input placeholder="User Name..." :icon="Person" />
    <Input type="password" placeholder="Password..." :icon="LockClosed" />
    <Input
      type="password"
      placeholder="Password no toggle"
      :icon="LockClosed"
      :visiblePasswordIcon="false"
    />
    <Space compact block>
      <Input
        type="password"
        placeholder="Password default text"
        :icon="LockClosed"
        :visiblePasswordIcon="visiblePasswordIcon"
      />
      <Button @click="visiblePasswordIcon = !visiblePasswordIcon"> Toggle </Button>
    </Space>

    <Input placeholder="Please input" :clearable="false" @search="search" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Person, LockClosed } from "kui-icons";
import { message } from "kui-vue";
const visiblePasswordIcon = ref(true);
const search = (value) => {
  message.info("This is search event");
  console.log(value);
};
</script>