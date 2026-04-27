<template>
  <Space block vertical>
    <InputNumber placeholder="Please input amount" suffix="元" prefix="¥" />
    <InputNumber placeholder="Please input amount" :step="50" suffix="元" prefix="充值" />
    <InputNumber placeholder="Please input amount" suffix=".00" />
  </Space>
  <Divider text="slot" />
  <Space vertical block>
    <InputNumber placeholder="请填写您的薪资" :icon="LogoYen">
      <template #suffix>
        <Tooltip title="此处如果不知道怎么填，请咨询管理员">
          <Button :icon="CircleQuestionMark" />
        </Tooltip>
      </template>
    </InputNumber>
    <InputNumber placeholder="Please input amount">
      <template #prefix>
        <Button :icon="UserPlus" />
      </template>
      <template #suffix>
        <Button>Top up</Button>
      </template>
    </InputNumber>
  </Space>
</template>
<script setup lang="ts">
import { CircleQuestionMark, LogoYen, UserPlus } from "kui-icons";
</script>
