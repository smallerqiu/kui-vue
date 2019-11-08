let code = {}

code.base =`<Steps current="1">
  <Step title="已完成" description="这里是步骤的描述信息"></Step>
  <Step title="进行中" description="这里是步骤的描述信息"></Step>
  <Step title="待进行" description="这里是步骤的描述信息"></Step>
</Steps>`

code.mini =`<Steps current="1" mini>
  <Step title="已完成"></Step>
  <Step title="进行中"></Step>
  <Step title="待进行"></Step>
</Steps>`

code.icon =`<Steps current="1">
  <Step title="登陆" icon="md-lock"></Step>
  <Step title="绑定手机" icon="md-phone-portrait"></Step>
  <Step title="绑定邮箱" icon="e=md-mail"></Step>
</Steps>`

code.test =`<Steps :current="current">
  <Step title="步骤1"></Step>
  <Step title="步骤2"></Step>
  <Step title="步骤3"></Step>
  <Step title="步骤4"></Step>
</Steps>
<br/>
<Button @click="step('next')">下一步</Button>
<Button @click="step('prev')">上一步</Button>
<script>
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    step(t) {
      this.current = t == 'next' ? (this.current >= 3 ? 3 : this.current + 1) : (this.current <= 0 ? 0 : this.current - 1)
    }
  }
}
</script>
`

code.status =`<Steps :current="1" status="error">
  <Step title="步骤1" description="这里是步骤的描述信息"></Step>
  <Step title="步骤2" description="这里是步骤的描述信息"></Step>
  <Step title="步骤3" description="这里是步骤的描述信息"></Step>
  <Step title="步骤4" description="这里是步骤的描述信息"></Step>
</Steps>  `

code.vertical =`<Steps :current="1"  vertical>
  <Step title="步骤1" description="这里是步骤的描述信息"></Step>
  <Step title="步骤2" description="这里是步骤的描述信息"></Step>
  <Step title="步骤3" description="这里是步骤的描述信息"></Step>
  <Step title="步骤4" description="这里是步骤的描述信息"></Step>
</Steps>  `

export default code