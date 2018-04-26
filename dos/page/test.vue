<template>
    <div>
        <Form :label-width="80" :labelAlign="labelAlign">
            <FormItem label="Input">
                <Input></Input>
            </FormItem>
            <FormItem label="Select">
                <Select>
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
        <Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">
            <FormItem label="Input" prop="input">
                <Input v-model="form.input"></Input>
            </FormItem>
            <FormItem label="Select" prop="select">
                <Select v-model="form.select" clearable>
                    <Option value="0">男</Option>
                    <Option value="1">女</Option>
                    <Option value="2">妖</Option>
                </Select>
            </FormItem>
            <FormItem label="DatePicker" prop="datepicker">
                <DatePicker v-model="form.datepicker" clearable></DatePicker>
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
                select: '',
                datepicker: "",
                radio: "",
                checkbox: [],
                textarea: ''
            },
            rules: {
                input: [{ required: true, trigger: 'blur' }],
                select: [{ required: true, trigger: 'change' }],
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

