<cn>
#### 扩展, 前缀和后缀
suffix，prefix 扩展
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    <Input placeholder="请输入用户名" :icon="PersonOutline" />
    <Input placeholder="请输入验证码" :icon="ShieldCheckmark" :maxlength="8" prefix="¥">
    <template slot="suffix">
      <Button :disabled="time!=60" style="width:100px;"  @click="sendCode">{{time==60?'获取验证码':time+'(s)'}}</Button>
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
    <Input placeholder="输入内容" prefix="www.">
      <template slot="prefix">
        <Select :options="options" clearable value="http"></Select>
      </template>
      <template slot="suffix">
        <TreeSelect :tree-data="treeData" clearable style="width:200px"></TreeSelect>
      </template>
    </Input>
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
      ],
      treeData:[
        {
          title:'fruit',
          key:'1',
          children:[
            {title:'apple',key:'11'},
            {title:'orange',key:'12'},
          ]
        }
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
        if (this.time <= 0) {
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
```