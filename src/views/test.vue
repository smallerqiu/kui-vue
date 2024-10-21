<template>
  <Space style="width:256px;" vertical size="large">
    <InputNumber placeholder="请填写您的薪资" :icon="LogoYen" size="large" suffix="元" prefix="$">
      <template slot="suffix">
        <Tooltip title="此处如果不知道怎么填，请咨询管理员">
          <Icon :type="Heart" color="red" />
        </Tooltip>
      </template>
    </InputNumber>
    <InputNumber placeholder="请输入金额" suffix="元" prefix="$"  size="small" />
    <InputNumber placeholder="请输入充值金额" :step="50" suffix="元" prefix="充值"  size="large" />
    <InputNumber placeholder="请输入金额" suffix=".00" />
  </Space>
</template>
<script>
import { Heart, LogoYen } from 'kui-icons'
export default {
  data() {
    return {
      Heart, LogoYen
    }
  }
}
</script>
