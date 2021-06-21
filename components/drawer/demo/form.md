<cn>
#### 表单模式
内容将呈现表单模式，有页头和页尾, 可自定义页尾
</cn>

```vue
<template>
  <div>
    <Button @click="show1=true">普通表单</Button>
    <Button @click="show2=true">自定义</Button>
    <Drawer v-model="show1" title="表单验证" @ok="submitForm" @cancel="resetForm" footer>
      <Form ref="form" :model="form" :rules="rules" label-align="left">
        <FormItem label="Input" prop="input">
          <Input clearable icon="home"></Input>
        </FormItem>
        <FormItem label="Number" prop="number">
          <Input number clearable></Input>
        </FormItem>
        <FormItem label="Select">
          <Row type="flex" :gutter="8">
            <Col :span="12">
            <FormItem prop="province">
              <Select clearable>
                <Option value="0" label="北京" />
                <Option value="1" label="上海" />
                <Option value="2" label="广州" />
                <Option value="3" label="深圳" />
              </Select>
            </FormItem>
            </Col>
            <Col :span="12" >
            <FormItem prop="city">
              <Select clearable>
                <Option value="0" label="南山区" />
                <Option value="1" label="龙华区" />
                <Option value="2" label="福田区" />
                <Option value="3" label="宝安区" />
              </Select>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="DatePicker" prop="datepicker">
          <DatePicker clearable format="YYYY/MM/DD hh:mm:ss"></DatePicker>
        </FormItem>
        <FormItem label="Radio" prop="radio">
          <Radio >男</Radio>
        </FormItem>
        <FormItem label="RadioGroup" prop="radios">
          <RadioGroup >
            <Radio value="0" label="武汉"/>
            <Radio value="1" label="深圳"/>
            <Radio value="2" label="杭州"/>
          </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox" prop="checkbox">
          <Checkbox >男</Checkbox>
        </FormItem>
        <FormItem label="CheckboxGroup" prop="checkboxs">
          <CheckboxGroup >
            <Checkbox value="0" label="武汉" />
            <Checkbox value="1" label="杭州"/>
            <Checkbox value="2" label="上海" />
            <Checkbox value="3" label="北京"/>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Text" prop="textarea">
          <TextArea placeholder="情输入..."  />
        </FormItem>
      </Form>
    </Drawer>
    <Drawer v-model="show2" title="我是自定义标题">
      <p>我是自定义内容</p>
      <div slot="footer">
        <Button>取消</Button>
        <Button type="danger">驳回</Button>
        <Button>通过</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      show1: false, show2: false,
      form: {
        switch: true,
        input: "",
        number: "",
        select: '',
        province: '',
        city: '',
        radio: true,
        checkbox: true,
        datepicker: "",
        radios: "",
        checkboxs: [],
        textarea: ''
      },
      rules: {
        input: [{ required: true }],
        number: [{ required: true}],
        select: [{ required: true }],
        province: [{ required: true }],
        city: [{ required: true }],
        datepicker: [{ required: true }],
        radios: [{ required: true }],
        radio: [{ required: true }],
        checkbox: [{ required: true }],
        checkboxs: [{ required: true }],
        textarea: [{ required: true, message: '必填', trigger: 'blur' }, { min: 2, max: 5, message: '长度为2-5个字符'}],
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Message.success('验证通过')
          this.show1 = false
        } else {
          this.$Message.error('验证失败')
        }
      })
    },
    resetForm() {
      this.$refs.form.reset()
    },    
  }
}
</script>
```