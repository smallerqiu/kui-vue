<cn>
### 扩展, 前缀和后缀
suffix，prefix 扩展
</cn>

```vue
<template>
  <Space vertical block>
    <Input placeholder="请输入用户名" :icon="PersonOutline" />
    <Input placeholder="请输入验证码" :maxlength="8">
      <template #suffix>
        <Button :disabled="time < 60" style="width:100px;" @click="sendCode">
          {{ time == 60 ? "获取验证码" : time + "(s)" }}
        </Button>
      </template>
    </Input>
    <Input placeholder="请填写你要喝的Coffee" :icon="Gift">
      <template #suffix>
        <Tooltip title="请咨询管理员">
          <Button :icon="InformationCircleOutline"  />
        </Tooltip>
      </template>
    </Input>
    <Input placeholder="请输入金额" suffix="RMB" prefix="¥" />
    <Input placeholder="请输入域名" suffix=".com" prefix="https://" />
    <Input placeholder="输入内容" prefix="www.">
      <template #prefix>
        <Select :options="options" clearable value="http"></Select>
      </template>
      <template #suffix>
        <Select :options="list" clearable value=".com"></Select>
      </template>
    </Input>
    <Input placeholder="请输入金额" suffix=".00" />
    <Input placeholder="输入内容" prefix="www.">
      <template #prefix>
        <Select :options="options" clearable value="http"></Select>
      </template>
      <template #suffix>
        <TreeSelect
          :tree-data="treeData"
          clearable
          style="width:100px"
        ></TreeSelect>
      </template>
    </Input>
  </Space>
</template>
<script setup>
import { ref } from "vue";
import {
  InformationCircleOutline,
  Gift,
  ShieldCheckmark,
  PersonOutline,
} from "kui-icons";
import { message } from "kui-vue";
const time = ref(60);
const timer = ref();
import { onUnmounted } from "vue";

const sendCode = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }
  time.value = 59;
  message.success("验证码发送成功，请注意查收");
  timer.value = setInterval(() => {
    time.value--; // 先减一更清晰
    if (time.value <= 0) {
      clearInterval(timer.value);
      time.value = 60; // 重置状态
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
```
