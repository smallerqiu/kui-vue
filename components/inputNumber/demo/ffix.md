<cn>
### 扩展, 前缀和后缀
suffix，prefix 扩展
</cn>

```vue
<template>
  <Space block vertical>
    <InputNumber placeholder="请输入金额" suffix="元" prefix="$" />
    <InputNumber placeholder="请输入充值金额" :step="50" suffix="元" prefix="充值" />
    <InputNumber placeholder="请输入金额" suffix=".00" />
  </Space>
  <Divider text="slot" />
  <Space vertical block>
    <InputNumber placeholder="请填写您的薪资" :icon="LogoYen">
      <template #suffix>
        <Tooltip title="此处如果不知道怎么填，请咨询管理员">
          <Button :icon="HelpCircle" />
        </Tooltip>
      </template>
    </InputNumber>
    <InputNumber placeholder="请输入充值金额">
      <template #prefix>
        <Button :icon="PersonAddOutline" />
      </template>
      <template #suffix>
        <Button>现在充值</Button>
      </template>
    </InputNumber>
  </Space>
</template>
<script setup>
import { HelpCircle, LogoYen, PersonAddOutline } from "kui-icons";
</script>
```
