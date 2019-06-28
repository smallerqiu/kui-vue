/*! kui-vue v2.2.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"5VHI":function(e,r,t){"use strict";var n={base:'<Form :label-width="80">\n  <FormItem label="Input">\n    <Input v-model="form.input"></Input>\n  </FormItem>\n  <FormItem label="Select">\n    <Select v-model="form.select">\n      <Option v-for="(x,y) in select" :key="y" :value="x.value">{{x.label}}</Option>\n    </Select>\n  </FormItem>\n  <FormItem label="DatePicker">\n    <DatePicker v-model="form.datepicker"></DatePicker>\n  </FormItem>\n  <FormItem label="Radio">\n    <RadioGroup v-model="form.radio">\n      <Radio label="0">男</Radio>\n      <Radio label="1">女</Radio>\n      <Radio label="2">妖</Radio>\n    </RadioGroup>\n  </FormItem>\n  <FormItem label="Checkbox">\n    <CheckboxGroup v-model="form.checkbox">\n      <Checkbox label="0">男</Checkbox>\n      <Checkbox label="1">女</Checkbox>\n      <Checkbox label="2">妖</Checkbox>\n    </CheckboxGroup>\n  </FormItem>\n  <FormItem label="Switch">\n    <Switch true-text="是" false-text="否"></Switch>\n  </FormItem>\n  <FormItem label="Text">\n    <Input type="textarea" placeholder="情输入..."></Input>\n  </FormItem>\n  <FormItem>\n    <Button type="primary">Submit</Button>\n    <Button style="margin-left: 10px">Cancel</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data(){\n    return{\n      form: {\n        switch: true,\n        input: "",\n        select: 0,\n        datepicker: "",\n        radio: "1",\n        checkbox: [\'0\']\n      },\n    }\n  }\n}\n<\/script>',invalid:'<Form label-width="150" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">\n<FormItem label="Input" prop="input">\n  <Input v-model="form.input" clearable></Input>\n</FormItem>\n<FormItem label="Number" prop="number">\n  <Input v-model="form.number" number clearable></Input>\n</FormItem>\n<FormItem label="Select">\n  <Row>\n    <Col span="12">\n    <FormItem prop="province">\n      <Select v-model="form.province" clearable>\n        <Option value="0">北京</Option>\n        <Option value="1">上海</Option>\n        <Option value="2">广州</Option>\n        <Option value="3">深圳</Option>\n      </Select>\n    </FormItem>\n    </Col>\n    <Col span="11" offset="1">\n    <FormItem prop="city">\n      <Select v-model="form.city" clearable>\n        <Option value="0">南山区</Option>\n        <Option value="1">龙华区</Option>\n        <Option value="2">福田区</Option>\n        <Option value="3">宝安区</Option>\n      </Select>\n    </FormItem>\n    </Col>\n  </Row>\n</FormItem>\n<FormItem label="DatePicker" prop="datepicker">\n  <DatePicker v-model="form.datepicker" clearable format="YYYY/MM/DD hh:mm:ss"></DatePicker>\n</FormItem>\n<FormItem label="Radio" prop="radio">\n  <Radio v-model="form.radio">男</Radio>\n</FormItem>\n<FormItem label="RadioGroup" prop="radios">\n  <RadioGroup v-model="form.radios">\n    <Radio label="0">男</Radio>\n    <Radio label="1">女</Radio>\n    <Radio label="2">妖</Radio>\n  </RadioGroup>\n</FormItem>\n<FormItem label="Checkbox" prop="checkbox">\n  <Checkbox v-model="form.checkbox">男</Checkbox>\n</FormItem>\n<FormItem label="CheckboxGroup" prop="checkboxs">\n  <CheckboxGroup v-model="form.checkboxs">\n    <Checkbox label="男">男</Checkbox>\n    <Checkbox label="女">女</Checkbox>\n    <Checkbox label="妖">妖</Checkbox>\n    <Checkbox label="鲛人">鲛人</Checkbox>\n  </CheckboxGroup>\n</FormItem>\n<FormItem label="Text" prop="textarea">\n  <Input type="textarea" placeholder="情输入..." v-model="form.textarea"></Input>\n</FormItem>\n<FormItem>\n  <Button type="primary" @click="submitForm(\'form\')">Submit</Button>\n  <Button style="margin-left: 10px" @click="resetForm(\'form\')">Reset</Button>\n</FormItem>\n</Form>\n<script>\nexport default {\n  data() {\n    return {\n      labelAlign: \'right\',\n      code: code,\n      select: [\n        { label: "男", value: "0" },\n        { label: "女", value: "1" },\n        { label: "妖", value: "2" },\n      ],\n      form: {\n        switch: true,\n        input: "",\n        number: "",\n        select: \'\',\n        province: \'\',\n        city: \'\',\n        radio: \'\',\n        checkbox: \'\',\n        datepicker: "",\n        radios: "",\n        checkboxs: [],\n        textarea: \'\'\n      },\n      rules: {\n        input: [{ required: true, trigger: \'blur\' }],\n        number: [{ required: true, trigger: \'blur\', type: \'number\', min: 5, max: 10 }],\n        select: [{ required: true, trigger: \'change\' }],\n        province: [{ required: true, trigger: \'change\' }],\n        city: [{ required: true, trigger: \'change\' }],\n        datepicker: [{ required: true, trigger: \'change\' }],\n        radios: [{ required: true, trigger: \'change\' }],\n        radio: [{ required: true, trigger: \'change\' }],\n        checkbox: [{ required: true, trigger: \'change\' }],\n        checkboxs: [{ required: true, trigger: \'change\', min: 2, max: 3, message: \'长度为2-3个字符\', }],\n        textarea: [{ required: true, message: \'必填\', trigger: \'blur\' }, { min: 2, max: 5, message: \'长度为2-5个字符\', trigger: \'blur\' }],\n      },\n    };\n  },\n  methods: {\n    submitForm(name) {\n      console.log(this.$refs[name].model)\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm(name) {\n      this.$refs[name].resetFields()\n    },\n  }\n};\n<\/script>\n',customValid:'<Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">\n  <FormItem label="userName" prop="userName">\n    <Input v-model="customForm.userName" />\n  </FormItem>\n  <FormItem label="password" prop="password">\n    <Input v-model="customForm.password" type="password" />\n  </FormItem>\n  <FormItem label="Confrim" prop="rePassword">\n    <Input v-model="customForm.rePassword" type="password" />\n  </FormItem>\n  <FormItem>\n    <Button type="primary" @click="submitForm(\'customForm\')">Submit</Button>\n    <Button style="margin-left: 10px" @click="resetForm(\'customForm\')">Reset</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data() {\n    const validatePass = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请填写密码\'))\n      } else {\n        if (this.customForm.rePassword !== "") {\n          this.$refs.customForm.validateField(\'rePassword\')\n        }\n        callback()\n      }\n    };\n    const validateRePass = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请再次输入密码\'))\n      } else {\n        if (this.customForm.password !== value) {\n          callback(new Error(\'两次密码输入不一致\'))\n        }\n        callback()\n      }\n    };\n    const validateUserName = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请输入用户名\'))\n      } else {\n        if (value.length < 2 || value.length > 6) {\n          callback(new Error(\'用户名长度为2-6位\'))\n        } else {\n          callback()\n        }\n      }\n    };\n    return {\n      labelAlign: \'right\',\n      select: [\n        { label: "男", value: "0" },\n        { label: "女", value: "1" },\n        { label: "妖", value: "2" },\n      ],\n      customRules: {\n        userName: [{ validator: validateUserName, trigger: \'blur\' }],\n        password: [{ validator: validatePass, trigger: \'blur\' }],\n        rePassword: [{ validator: validateRePass, trigger: \'blur\' }],\n      },\n      customForm: {\n        userName: \'\',\n        password: \'\',\n        rePassword: \'\'\n      },\n    };\n  },\n  methods: {\n    submitForm(name) {\n      console.log(this.$refs[name].model)\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm(name) {\n      this.$refs[name].resetFields()\n    },\n  }\n};\n<\/script>\n'};r.a=n},DUsY:function(e,r,t){"use strict";t.r(r);var n={data:function(){return{form:{switch:!0,input:"",number:"",select:"",province:"",city:"",radio:"",checkbox:"",datepicker:"",radios:"",checkboxs:[],textarea:""},rules:{input:[{required:!0,trigger:"blur"}],number:[{required:!0,trigger:"blur",type:"number",min:5,max:10}],select:[{required:!0,trigger:"change"}],province:[{required:!0,trigger:"change"}],city:[{required:!0,trigger:"change"}],datepicker:[{required:!0,trigger:"change"}],radios:[{required:!0,trigger:"change"}],radio:[{required:!0,trigger:"change"}],checkbox:[{required:!0,trigger:"change"}],checkboxs:[{required:!0,trigger:"change",min:2,max:3,message:"长度为2-3个字符"}],textarea:[{required:!0,message:"必填",trigger:"blur"},{min:2,max:5,message:"长度为2-5个字符",trigger:"blur"}]}}},mounted:function(){var r=this;setTimeout(function(e){r.form={switch:!0,input:123,number:10,select:"2",province:"3",city:"2",datepicker:"2010-10-10",radios:"1",checkbox:!0,radio:!0,checkboxs:["男","女"],textarea:"123123232"}},2e3)},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){e?r.$Message.success("验证通过"):r.$Message.error("验证失败")})},resetForm:function(e){this.$refs[e].resetFields()}}},o=t("KHd+"),a=Object(o.a)(n,function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticStyle:{padding:"0px"}},[t("Form",{ref:"form",attrs:{"label-width":"150",model:r.form,rules:r.rules}},[t("FormItem",{attrs:{label:"Input",prop:"input"}},[t("Input",{attrs:{clearable:"",icon:"ios-home"},model:{value:r.form.input,callback:function(e){r.$set(r.form,"input",e)},expression:"form.input"}})],1),r._v(" "),t("FormItem",{attrs:{label:"Number",prop:"number"}},[t("Input",{attrs:{number:"",clearable:""},model:{value:r.form.number,callback:function(e){r.$set(r.form,"number",e)},expression:"form.number"}})],1),r._v(" "),t("FormItem",{attrs:{label:"Select"}},[t("Row",[t("Col",{attrs:{span:"12"}},[t("FormItem",{attrs:{prop:"province"}},[t("Select",{attrs:{clearable:""},model:{value:r.form.province,callback:function(e){r.$set(r.form,"province",e)},expression:"form.province"}},[t("Option",{attrs:{value:"0"}},[r._v("北京")]),r._v(" "),t("Option",{attrs:{value:"1"}},[r._v("上海")]),r._v(" "),t("Option",{attrs:{value:"2"}},[r._v("广州")]),r._v(" "),t("Option",{attrs:{value:"3"}},[r._v("深圳")])],1)],1)],1),r._v(" "),t("Col",{attrs:{span:"11",offset:"1"}},[t("FormItem",{attrs:{prop:"city"}},[t("Select",{attrs:{clearable:""},model:{value:r.form.city,callback:function(e){r.$set(r.form,"city",e)},expression:"form.city"}},[t("Option",{attrs:{value:"0"}},[r._v("南山区")]),r._v(" "),t("Option",{attrs:{value:"1"}},[r._v("龙华区")]),r._v(" "),t("Option",{attrs:{value:"2"}},[r._v("福田区")]),r._v(" "),t("Option",{attrs:{value:"3"}},[r._v("宝安区")])],1)],1)],1)],1)],1),r._v(" "),t("FormItem",{attrs:{label:"DatePicker",prop:"datepicker"}},[t("DatePicker",{attrs:{clearable:"",format:"YYYY/MM/DD hh:mm:ss"},model:{value:r.form.datepicker,callback:function(e){r.$set(r.form,"datepicker",e)},expression:"form.datepicker"}})],1),r._v(" "),t("FormItem",{attrs:{label:"Radio",prop:"radio"}},[t("Radio",{model:{value:r.form.radio,callback:function(e){r.$set(r.form,"radio",e)},expression:"form.radio"}},[r._v("男")])],1),r._v(" "),t("FormItem",{attrs:{label:"RadioGroup",prop:"radios"}},[t("RadioGroup",{model:{value:r.form.radios,callback:function(e){r.$set(r.form,"radios",e)},expression:"form.radios"}},[t("Radio",{attrs:{label:"0"}},[r._v("男")]),r._v(" "),t("Radio",{attrs:{label:"1"}},[r._v("女")]),r._v(" "),t("Radio",{attrs:{label:"2"}},[r._v("妖")])],1)],1),r._v(" "),t("FormItem",{attrs:{label:"Checkbox",prop:"checkbox"}},[t("Checkbox",{model:{value:r.form.checkbox,callback:function(e){r.$set(r.form,"checkbox",e)},expression:"form.checkbox"}},[r._v("男")])],1),r._v(" "),t("FormItem",{attrs:{label:"CheckboxGroup",prop:"checkboxs"}},[t("CheckboxGroup",{model:{value:r.form.checkboxs,callback:function(e){r.$set(r.form,"checkboxs",e)},expression:"form.checkboxs"}},[t("Checkbox",{attrs:{label:"男"}},[r._v("男")]),r._v(" "),t("Checkbox",{attrs:{label:"女"}},[r._v("女")]),r._v(" "),t("Checkbox",{attrs:{label:"妖"}},[r._v("妖")]),r._v(" "),t("Checkbox",{attrs:{label:"鲛人"}},[r._v("鲛人")])],1)],1),r._v(" "),t("FormItem",{attrs:{label:"Text",prop:"textarea"}},[t("Input",{attrs:{type:"textarea",placeholder:"情输入..."},model:{value:r.form.textarea,callback:function(e){r.$set(r.form,"textarea",e)},expression:"form.textarea"}})],1),r._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:function(e){return r.submitForm("form")}}},[r._v("Submit")]),r._v(" "),t("Button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return r.resetForm("form")}}},[r._v("Reset")])],1)],1)],1)},[],!1,null,null,null);r.default=a.exports},fVdv:function(e,r,t){"use strict";t.r(r);t("5VHI");var n={data:function(){return{}},methods:{}},o=t("KHd+"),a=Object(o.a)(n,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e._m(0),e._v(" "),t("Select",{attrs:{width:"200"}},[t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")]),e._v(" "),t("Option",{attrs:{value:"0"}},[e._v("fdsafs")])],1)],1)},[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticStyle:{width:"700px",height:"600px"}},[r("div",{staticClass:"t1"})])}],!1,null,null,null);r.default=a.exports}}]);