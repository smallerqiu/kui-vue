<template>
  <div>
    <h2>Drawer 抽屉</h2>
    <p>屏幕边缘滑出的浮层面板。</p>
    <h3>何时使用</h3>
    <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
    <p>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</p>
    <p>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</p>
    <h3>代码示例 </h3>
    <Demo title="基础">
      <div slot="content">
        <Button @click="d1=!d1">普通抽屉</Button>
        <Drawer v-model="d1"></Drawer>
      </div>
      <div slot="desc">通过
        <code>v-model</code>双向绑定
        <code>Modal</code>是否展示</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="自定义">
      <div slot="content">
        <Button @click="d2=!d2">自定义宽度</Button>
        <Button @click="d4=!d4">Open left</Button>
        <Drawer v-model="d2" width="300"></Drawer>
        <Drawer v-model="d4" width="300" placement="left" title="What's your name? " cancelText="cancel" okText="Ok">My name is chuchur.</Drawer>
      </div>
      <div slot="desc">通过
        <code>title</code>来设置标题，
        <code>width</code>控制宽度， 还有
        <code>placement</code>控制方向
      </div>
      <div slot="code">{{code.custom}}</div>
    </Demo>
    <Demo title="表单模式">
      <div slot="content">
        <Button @click="d5=true">普通表单</Button>
        <Button @click="d6=true">自定义</Button>
        <Drawer v-model="d5" title="表单验证" type="form" @ok="submitForm" @cancel="resetForm">
          <Form label-width="100" ref="form" :model="form" :rules="rules" label-align="left">
            <FormItem label="Input" prop="input">
              <Input v-model="form.input" clearable icon="ios-home"></Input>
            </FormItem>
            <FormItem label="Number" prop="number">
              <Input v-model="form.number" number clearable></Input>
            </FormItem>
            <FormItem label="Select">
              <Row>
                <Col span="12">
                <FormItem prop="province">
                  <Select v-model="form.province" clearable transfer>
                    <Option value="0">北京</Option>
                    <Option value="1">上海</Option>
                    <Option value="2">广州</Option>
                    <Option value="3">深圳</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="11" offset="1">
                <FormItem prop="city">
                  <Select v-model="form.city" clearable>
                    <Option value="0">南山区</Option>
                    <Option value="1">龙华区</Option>
                    <Option value="2">福田区</Option>
                    <Option value="3">宝安区</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="DatePicker" prop="datepicker">
              <DatePicker v-model="form.datepicker" clearable format="YYYY/MM/DD hh:mm:ss"></DatePicker>
            </FormItem>
            <FormItem label="Radio" prop="radio">
              <Radio v-model="form.radio">男</Radio>
            </FormItem>
            <FormItem label="RadioGroup" prop="radios">
              <RadioGroup v-model="form.radios">
                <Radio label="0">男</Radio>
                <Radio label="1">女</Radio>
                <Radio label="2">妖</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="Checkbox" prop="checkbox">
              <Checkbox v-model="form.checkbox">男</Checkbox>
            </FormItem>
            <FormItem label="CheckboxGroup" prop="checkboxs">
              <CheckboxGroup v-model="form.checkboxs">
                <Checkbox label="男">男</Checkbox>
                <Checkbox label="女">女</Checkbox>
                <Checkbox label="妖">妖</Checkbox>
                <Checkbox label="鲛人">鲛人</Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="Text" prop="textarea">
              <Input type="textarea" placeholder="情输入..." v-model="form.textarea"></Input>
            </FormItem>
          </Form>
        </Drawer>
        <Drawer v-model="d6" title="我是自定义标题" type="form">
          <p>我是自定义内容</p>
          <div slot="footer">
            <Button>取消</Button>
            <Button type="danger">驳回</Button>
            <Button type="success">通过</Button>
          </div>
        </Drawer>
      </div>
      <div slot="desc">
        <code>type==form</code>内容将呈现表单模式，有页头和页尾,
        <code>slot=footer</code>可自定义页尾
      </div>
      <div slot="code">{{code.from}}</div>
    </Demo>
    <h3>API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>title</td>
          <td>抽屉标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
        <tr>
          <td>width</td>
          <td>抽屉宽度</td>
          <td>Number,String</td>
          <td>520</td>
        </tr>
        <td>placement</td>
        <td>抽屉显示方向，提供left,right两种展示方式</td>
        <td>String</td>
        <td>right</td>
        </tr>
        <tr>
          <td>type</td>
          <td>抽屉展示形式，提供static,form两种展示模式</td>
          <td>String</td>
          <td>static</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否显示关闭按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>okText</td>
          <td>确定按钮文字</td>
          <td>String</td>
          <td>确定</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>取消按钮文字</td>
          <td>String</td>
          <td>取消</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>点击确定的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>点击取消的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>close</td>
          <td>抽屉关闭的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/drawer'
import Demo from '../components/demo'
export default {
  components: { Demo,  },
  data() {
    return {
      d1: false, d2: false, d3: false, d4: false, d5: false, d6: false,
      code: code,
      form: {
        switch: true,
        input: "",
        number: "",
        select: '',
        province: '',
        city: '',
        radio: '',
        checkbox: '',
        datepicker: "",
        radios: "",
        checkboxs: [],
        textarea: ''
      },
      rules: {
        input: [{ required: true, trigger: 'blur' }],
        number: [{ required: true, trigger: 'blur', type: 'number', min: 5, max: 10 }],
        select: [{ required: true, trigger: 'change' }],
        province: [{ required: true, trigger: 'change' }],
        city: [{ required: true, trigger: 'change' }],
        datepicker: [{ required: true, trigger: 'change' }],
        radios: [{ required: true, trigger: 'change' }],
        radio: [{ required: true, trigger: 'change' }],
        checkbox: [{ required: true, trigger: 'change' }],
        checkboxs: [{ required: true, trigger: 'change', min: 2, max: 3, message: '长度为2-3个字符', }],
        textarea: [{ required: true, message: '必填', trigger: 'blur' }, { min: 2, max: 5, message: '长度为2-5个字符', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$Message.success('验证通过')
          this.d5 = false
        } else {
          this.$Message.error('验证失败')
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
  }
};
</script>

