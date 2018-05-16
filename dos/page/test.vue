<template>
    <div style="width:700px;">
        <!-- <Modal title="确认订单" :width="740">
            <div class="table-order">
                <table>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>

                </table>
                <table>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>
                    <tr>
                        <td>商品ID</td>
                        <td>标准货期</td>
                        <td>品牌/制造商</td>
                        <td>标准货期</td>
                    </tr>

                </table>
            </div>
            <div style="margin-top:30px;">
                <h2 class="pull-left">货期</h2>
                <span style="margin:0 10px;color:#aaa;">
                    <i>*</i> 不需要拆分货期，直接确认即可；若拆分货期，则需要客户对拆分后货期进行确认。</span>
                <Button @click="m++">拆分</Button>
            </div>
            <div class="table-border">
                <table>
                    <tr>
                        <th>分单编号</th>
                        <th>到货日期</th>
                        <th>数量</th>
                        <th>延迟事由</th>
                    </tr>
                    <tr v-for="x in m">
                        <td>  <color-picker   mini width="140"  ></color-picker></td>
                        <td>
                            <date-picker clearable  mini width="140"  value="2015-10-10 10:10:10"></date-picker>
                        </td>
                        <td class="badge">

                        </td>
                        <td>
                            <Select>
                                <Option value="1">fdsafsa</Option>
                                <Option value="1">fdsafsa</Option>
                                <Option value="1">fdsafsa</Option>
                                <Option value="1">fdsafsa</Option>
                                <Option value="1">fdsafsa</Option>
                                <Option value="1">fdsafsa</Option>
                                <Option value="1">fdsafsa</Option>
                            </Select>
                        </td>
                    </tr>
                </table>

            </div>

        </Modal> -->
        <!--   <Tabs card>
            <TabPane label="Tab1" icon="social-windows">我是内容1....</TabPane>
            <TabPane label="Tab2" icon="social-apple">我是内容2....</TabPane>
            <TabPane label="Tab3" icon="social-android">我是内容3....</TabPane>
        </Tabs>
        <br/>
        <br/>
        <br/>
        <Checkbox value="true" :indeterminate="t" />
        <Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">
            <FormItem label="Input" prop="input">
                <Input v-model="form.input" clearable mini></Input>
            </FormItem>
            <FormItem label="Select" class="k-form-item-required">
                <Row gutter="8">
                    <Col span="11">
                    <FormItem prop="select">
                        <Select v-model="form.select" clearable>
                            <Option value="0">男男男男男男男男男男男男男男男男男男男男男男男男男男男</Option>
                            <Option value="1">女</Option>
                            <Option value="2">妖</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="11">
                    <FormItem prop="select2">
                        <Select v-model="form.select2" clearable>
                            <Option value="0">男</Option>
                            <Option value="1">女</Option>
                            <Option value="2">妖</Option>
                        </Select>
                    </FormItem>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="DatePicker" prop="datepicker">
                <DatePicker v-model="form.datepicker" clearable mini></DatePicker>
            </FormItem>
            <FormItem label="Radio" prop="radio">
                <RadioGroup v-model="form.radio">
                    <Radio label="0">男</Radio>
                    <Radio label="1">女</Radio>
                    <Radio label="2">妖</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="Checkbox" prop="checkbox">
                <CheckboxGroup v-model="form.checkbox">
                    <Checkbox label="0">男</Checkbox>
                    <Checkbox label="1">女</Checkbox>
                    <Checkbox label="2">妖</Checkbox>
                    <Checkbox label="3">鲛人</Checkbox>
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
        <Button @click="test">test</Button> -->
        <!-- <Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">
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
        </Form> -->
        <table>
            <tr>
                <td>商品ID</td>
                <td>标准货期</td>
                <td>品牌/制造商</td>
                <td>标准货期</td>
            </tr>
            <tr>
                <td>商品ID</td>
                <td>标准货期</td>
                <td>品牌/制造商</td>
                <td>标准货期</td>
            </tr>
            <tr>
                <td>商品ID</td>
                <td>标准货期</td>
                <td>品牌/制造商</td>
                <td>标准货期</td>
            </tr>
            <tr>
                <td>商品ID</td>
                <td>标准货期</td>
                <td>品牌/制造商</td>
                <td>标准货期</td>
            </tr>
            <tr>
                <td>商品ID</td>
                <td>标准货期</td>
                <td>品牌/制造商</td>
                <td>标准货期</td>
            </tr>
            <tr>
                <td>商品ID</td>
                <td>标准货期</td>
                <td>品牌/制造商</td>
                <td>标准货期</td>
            </tr>

        </table>
        <table>
            <tr>
                <th>分单编号</th>
                <th>到货日期</th>
                <th>数量</th>
                <th>延迟事由</th>
            </tr>
            <tr>
                <td> </td>
                <td>
                    <!-- <date-picker   mini width="140"  ></date-picker> -->
                </td>
                <td class="badge">

                </td>
                <td>
                    <Select v-model="b">
                        <Option value="1">fdsafsa</Option>
                        <Option value="2">fdsafsa</Option>
                        <Option value="3">fdsafsa</Option>
                        <Option value="4">fdsafsa</Option>
                        <Option value="5">fdsafsa</Option>
                        <Option value="6">fdsafsa</Option>
                        <Option value="7">fdsafsa</Option>
                    </Select>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import code from '../code/form'
export default {
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
            b: 1, m: 10,
            a: true,
            t: false,
            labelAlign: 'right',
            code: code,
            form: {
                switch: true,
                input: "",
                select: 0,
                select2: 2,
                datepicker: "2018-10-10",
                radio: 0,
                checkbox: ['0'],
                textarea: ''
            },
            rules: {
                input: [{ required: true, trigger: 'blur' }, { pattner: /^[1][3,4,5,7,8][0-9]{9}$/, trigger: 'blur' }],
                select: [{ required: true, trigger: 'change' }],
                select2: [{ required: true, trigger: 'change' }],
                datepicker: [{ required: true, trigger: 'change' }],
                radio: [{ required: true, trigger: 'change' }],
                checkbox: [{ required: true, trigger: 'change', min: 2, max: 3 }],
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
    methods: {
        test1(v) {
            console.log(v)
        },
        test() {
            this.form.select = 2
            this.form.select2 = 0
            this.t = !this.t
            this.a = !this.a
        },
        add() {
            this.count++
            this.dynamicForm.items.push({ value: '', index: this.count })
        },
        del(index) {
            this.dynamicForm.items.splice(index, 1)
        },
        submitForm(name) {
            console.log(this.$refs[name].model)
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

