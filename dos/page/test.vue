<template>
    <div style="width:700px;">
        <Modal :value="true" title="dsfsd">
            <table>
                <tr>
                    <th>分单编号</th>
                    <th>到货日期</th>
                    <th>数量</th>
                    <th>延迟事由</th>
                </tr>
                <tr v-for="n in 20" :key="n">
                    <td>fdsafdsa</td>
                    <td style="margin:20px 0;display:block;">
                        <!-- <Select v-model="form.select2" clearable mini :transfer="false">
                            <Option value="0">男</Option>
                            <Option value="1">女</Option>
                            <Option value="2">妖</Option>
                        </Select> -->
                         <date-picker   mini width="140" :transfer="false"></date-picker>
                    </td>
                    <td class="badge">
                        <span class="badge" style="display: inline-block;">
                            <k-input width="60" mini></k-input>
                            <span class="badge-count delete">-</span>
                        </span>
                    </td>
                    <td>
                        <k-input placeholder="未延迟请留空..." mini></k-input>
                    </td>
                </tr>
            </table>
        </Modal>
        <Select v-model="form.select2" clearable mini>
            <Option value="0">男</Option>
            <Option value="1">女</Option>
            <Option value="2">妖</Option>
        </Select>
        <Checkbox value="true" :indeterminate="t" />
        <Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">
            <FormItem label="Input" prop="input">
                <Input v-model="form.input" clearable mini></Input>
            </FormItem>
            <FormItem label="Select" class="k-form-item-required">
                <Row>
                    <Col span="6">
                    <FormItem prop="select">
                        <Select v-model="form.select" clearable>
                            <Option value="0">男男男男男男男男男男男男男男男男男男男男男男男男男男男</Option>
                            <Option value="1">女</Option>
                            <Option value="2">妖</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="6" offset="1">
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
        <Button @click="test">test</Button>
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
        test() {
            this.form.select = 2
            this.form.select2 = 0
            this.t = !this.t
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

