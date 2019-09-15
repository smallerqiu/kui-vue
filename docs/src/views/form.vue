<template>
  <div>
    <h2>Form 表单</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-form。</Alert>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo title="基础用法">
        <div slot="content">对齐方式 :
          <RadioGroup v-model="data3" @change="(value)=>{labelAlign=value}" mini>
            <RadioButton label="left">Left</RadioButton>
            <RadioButton label="right">Right</RadioButton>
            <RadioButton label="top">Top</RadioButton>
          </RadioGroup>
          <br />
          <br />
          <Form :label-width="80" :labelAlign="labelAlign">
            <FormItem label="Input">
              <Input width="200"></Input>
            </FormItem>
            <FormItem label="Select">
              <Select v-model="s1" width="200">
                <Option value="0">男</Option>
                <Option value="1">女</Option>
                <Option value="2">妖</Option>
              </Select>
            </FormItem>
            <FormItem label="DatePicker">
              <DatePicker></DatePicker>
            </FormItem>
            <FormItem label="Radio">
              <RadioGroup value="0">
                <Radio label="0">男</Radio>
                <Radio label="1">女</Radio>
                <Radio label="2">妖</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="Checkbox">
              <CheckboxGroup :value="['0']">
                <Checkbox label="0">男</Checkbox>
                <Checkbox label="1">女</Checkbox>
                <Checkbox label="2">妖</Checkbox>
              </CheckboxGroup>
            </FormItem>
            <!-- <FormItem label="Slider">
                        <Slider ></Slider>
                    </FormItem> -->
            <FormItem label="Switch">
              <Switch true-text="是" false-text="否"></Switch>
            </FormItem>
            <FormItem label="Text">
              <Input type="textarea" placeholder="情输入..."></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">Submit</Button>
              <Button style="margin-left: 10px">Cancel</Button>
            </FormItem>
          </Form>
        </div>
        <div slot="desc">
          <code>Form</code>内部结构，每个单域由
          <code>FormItem</code>组成，通过
          <code>label</code>可以设置
          <code>FormItem</code>标签，
          <code>lable-width</code>可以设置标签的宽度，
          <code>label-align</code>可以设置标签对其方式
        </div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="表单验证">
        <div slot="content">
          <Form label-width="150" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">
            <FormItem label="Input" prop="input">
              <Input v-model="form.input" clearable></Input>
            </FormItem>
            <FormItem label="Number" prop="number">
              <Input v-model="form.number" number clearable></Input>
            </FormItem>
            <FormItem label="Select">
              <Row>
                <Col span="12">
                <FormItem prop="province">
                  <Select v-model="form.province" clearable>
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
            <FormItem>
              <Button type="primary" @click="submitForm('form')">Submit</Button>
              <Button style="margin-left: 10px" @click="resetForm('form')">Reset</Button>
            </FormItem>
          </Form>
        </div>
        <div slot="desc">给
          <code>Form</code>设置
          <code>rules</code>属性，给每个要验证的标签添加
          <code>prop</code>属性，
          <code>validate</code>用来验证表单，
          <code>resetFields</code>用来重置表单
        </div>
        <div slot="code">{{code.invalid}}</div>
      </Demo>
      <Demo title="自定义验证">
        <div slot="content">
          <Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">
            <FormItem label="userName" prop="userName">
              <Input v-model="customForm.userName" />
            </FormItem>
            <FormItem label="password" prop="password">
              <Input v-model="customForm.password" type="password" />
            </FormItem>
            <FormItem label="Confrim" prop="rePassword">
              <Input v-model="customForm.rePassword" type="password" />
            </FormItem>
            <FormItem>
              <Button type="primary" @click="submitForm('customForm')">Submit</Button>
              <Button style="margin-left: 10px" @click="resetForm('customForm')">Reset</Button>
            </FormItem>
          </Form>
        </div>
        <div slot="desc">在
          <code>rules</code>里面设置
          <code>validator</code>方法，可以自定义验证，详细查阅下方的
          <code>rules API</code>
        </div>
        <div slot="code">{{code.customValid}}</div>
      </Demo>
      </Col>
    </Row>

    <!-- <Demo title="动态验证">
        <div slot="content">
            <Form :model="dynamicForm"  labelWidth="80" ref="dynamicForm">
                <FormItem :label="'item '+x.index" :key="i" :prop="'items.'+i+'.value'" :rules="[{required:true,message:'必填',trigger:'blur'}]" v-for="(x,i) in dynamicForm.items">
                    <Row>
                        <Col span="19">
                        <Input v-model="x.value" />
                        </Col>
                        <Col span="4" offset="1">
                        <Button type="danger" @click="del(i)">删除</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="add">新增</Button>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submitForm('dynamicForm')">Submit</Button>
                    <Button style="margin-left: 10px" @click="resetForm('dynamicForm')">Reset</Button>
                </FormItem>
            </Form>
        </div>
        <div slot="desc"></div>
        <div slot="code"></div>
    </Demo> -->
    <h3>Form API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>model</td>
          <td>表单数据对象</td>
          <td>Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>表单验证规则，</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label-width</td>
          <td>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</td>
          <td>Number,String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>label-align</td>
          <td>表单域标签的位置，可选值为 left、right、top</td>
          <td>String</td>
          <td>right</td>
        </tr>
        <tr>
          <td>validate</td>
          <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，暂不支持异步验证</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>validateField</td>
          <td>对表单单个字段进行校验的方法</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>resetFields</td>
          <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>FormItem API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>prop</td>
          <td>对应表单域 model 里的字段，表单验证必须字段</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>label</td>
          <td>标签文本</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>表单验证规则</td>
          <td>Array</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>rules API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>required</td>
          <td>是否必填字段</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>校验触发方式，提供
            <code>blur</code>失去焦点，
            <code>change</code>值被改变两种方式触发</td>
          <td>String</td>
          <td>blur</td>
        </tr>
        <tr>
          <td>message</td>
          <td>校验不通过提示语</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>自定义校验方法，可参见示例</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>数据类型校验，提供三种校验方式
            <code>mobile</code>手机，
            <code>mail</code>邮箱，
            <code>number</code>数字类型判断</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>pattern</td>
          <td>自定义正则校验，比喻密码强度包含数字，字母，特殊符号可以这么写
            <code>/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/</code>
          </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>min</td>
          <td>字段长度最小值校验</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>max</td>
          <td>字段长度最大值校验</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/form'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写密码'))
      } else {
        if (this.customForm.rePassword !== "") {
          this.$refs.customForm.validateField('rePassword')
        }
        callback()
      }
    };
    const validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else {
        if (this.customForm.password !== value) {
          callback(new Error('两次密码输入不一致'))
        }
        callback()
      }
    };
    const validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (value.length < 2 || value.length > 6) {
          callback(new Error('用户名长度为2-6位'))
        } else {
          callback()
        }
      }
    };
    return {
      data3: 'left',
      s1: '',
      labelAlign: 'right',
      code: code,
      select: [
        { label: "男", value: "0" },
        { label: "女", value: "1" },
        { label: "妖", value: "2" },
      ],
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
      customRules: {
        userName: [{ validator: validateUserName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validateRePass, trigger: 'blur' }],
      },
      customForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
      count: 1,
      dynamicForm: {
        items: [{ value: '', index: 1 }]
      }
    };
  },
  mounted() {
    // setTimeout(e => {
    //   this.form.datepicker = new Date()*1
    // }, 2000)
  },
  methods: {
    add() {
      this.count++
      this.dynamicForm.items.push({ value: '', index: this.count })
    },
    del(index) {
      this.dynamicForm.items.splice(index, 1)
    },
    submitForm(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('验证通过')
        } else {
          this.$Message.error('验证失败')
        }
      })
    },
    resetForm(name) {
      this.$refs[name].resetFields()
    },
  }
};
</script>
