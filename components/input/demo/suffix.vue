<template>
  <Space vertical block>
    <Input placeholder="Please input username" :icon="User" />
    <Input placeholder="Please input the captcha" :maxlength="8">
      <template #suffix>
        <Button :disabled="time < 60" @click="sendCode">
          {{ time == 60 ? "Get verification code" : time + "(s)" }}
        </Button>
      </template>
    </Input>
    <Input placeholder="Please input" :icon="Gift">
      <template #suffix>
        <Tooltip title="Please contact the administrator">
          <Button :icon="CircleQuestionMark" />
        </Tooltip>
      </template>
    </Input>
    <Input placeholder="Please enter the amount" suffix="RMB" prefix="¥" />
    <Input placeholder="Please enter the domain" suffix=".com" prefix="https://" />
    <Input placeholder="Please input" prefix="www.">
      <template #prefix>
        <Select :options="options" clearable value="http"></Select>
      </template>
      <template #suffix>
        <Select :options="list" clearable value=".com"></Select>
      </template>
    </Input>
    <Input placeholder="Please input" suffix=".00" />
    <Input placeholder="Please input" prefix="www.">
      <template #prefix>
        <Select :options="options" clearable value="http"></Select>
      </template>
      <template #suffix>
        <TreeSelect :tree-data="treeData" clearable style="width: 100px"></TreeSelect>
      </template>
    </Input>
  </Space>
</template>
<script setup lang="ts">
import { CircleQuestionMark, Gift, User } from "kui-icons";
import { message } from "kui-vue";
import { onUnmounted, ref } from "vue";
const time = ref(60);
const timer = ref();

const sendCode = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }
  time.value = 59;
  message.success("Verification code sent successfully");
  timer.value = setInterval(() => {
    time.value--;
    if (time.value <= 0) {
      clearInterval(timer.value);
      time.value = 60;
    }
  }, 1000);
};
const options = [
  { label: "http", value: "http" },
  { label: "https", value: "https" },
];
const list = [
  { label: ".com", value: ".com" },
  { label: ".cn", value: ".cn" },
  { label: ".org", value: ".org" },
];
const treeData = [
  {
    title: "fruit",
    key: "1",
    children: [
      { title: "apple", key: "11" },
      { title: "orange", key: "12" },
    ],
  },
];

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>
