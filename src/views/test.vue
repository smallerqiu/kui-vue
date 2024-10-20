<template>
  <Space vertical style="width:256px;padding:20px">
    <Input placeholder="请输入用户名" :icon="PersonOutline" />
    <Input placeholder="请输入验证码" :icon="ShieldCheckmark" :maxlength="8" prefix="¥">
    <template slot="suffix">
      <Button v-if="time == 60" @click="sendCode">获取验证码</Button>
      <span v-else>{{ time }}(s)</span>
    </template>
    </Input>
    <Input placeholder="请填写你要喝的Coffee" :icon="Gift">
    <template slot="suffix">
      <Tooltip title="请咨询管理员">
        <Icon :type="InformationCircleOutline" color="orange" />
      </Tooltip>
    </template>
    </Input>
    <Input placeholder="请输入金额" suffix="RMB" prefix="¥" />
    <Input placeholder="请输入域名" suffix=".com" prefix="https://" />
    <Input placeholder="输入内容" prefix="www.">
      <template slot="prefix">
        <Select :options="options" clearable value="http"></Select>
      </template>
      <template slot="suffix">
        <Select :options="list" clearable value=".com"></Select>
      </template>
    </Input>
    <Input placeholder="请输入金额" suffix=".00" />
  </Space>
</template>
<script>
import { InformationCircleOutline, Gift, ShieldCheckmark, PersonOutline } from 'kui-icons'
export default {
  data() {
    return {
      InformationCircleOutline, Gift, ShieldCheckmark, PersonOutline,
      time: 60,
      timer: null,
      options: [
        { label: 'http', value: 'http' },
        { label: 'https', value: 'https' },
      ],
      list: [
        { label: '.com', value: '.com' },
        { label: '.cn', value: '.cn' },
        { label: '.org', value: '.org' },
      ]
    }
  },
  beforDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    sendCode() {
      this.time = 59
      this.$Message.success("验证码发送成功，请注意查收");
      this.timer = setInterval(e => {
        if (this.time < 0) {
          clearInterval(this.timer)
          this.time = 60
        } else {
          this.time--
        }
      }, 1000)
    }
  }
};
</script>