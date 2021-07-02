<template>
  <div style="width:512px">
    <Form name="withmodal" :model="form" :rules="rules" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <FormItem label="商品名称" prop="name">
        <Input />
      </FormItem>
      <FormItem label="商品价格" prop="price">
        <RadioGroup>
          <Radio :value="0" label="免费" />
          <Radio :value="1" label="收费" />
        </RadioGroup>
      </FormItem>
      <FormItem label="商品价格" prop="price">
         <Input suffix="元" style="width:120px;"/>
      </FormItem>
      <FormItem :wrapperCol="{offset: 6}">
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button @click="visible=true" style="margin-left:10px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      rules: {
        name: [
          { required: true, message: '请输入组织名称' }
        ]
      },
      form: {
        name: '',
        price: ''
      },
    }

  },
  methods: {
    onSubmit({ valid, model }) {
      if (valid) {

      }
    },
    onOk() {
      this.$refs.form.submit()
    },
    onCancel() {
      this.$refs.form.reset()
    },

  }
}
</script>