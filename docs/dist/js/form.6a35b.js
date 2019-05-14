/*! kui-vue v2.1.0 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+qlZ":function(e,t,r){"use strict";var o=r("rMEQ"),a=r("Ff65");var n={directives:{resize:r("7+I9").a},components:{Code:o.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(e={},t="k-demo-".concat(this.layout),r=this.layout,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e)];var e,t,r},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},l=r("KHd+"),s=Object(l.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[r("div",{ref:"demo",staticClass:"k-demo-main"},[r("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),r("div",{staticClass:"k-desc"},[r("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),r("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[r("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),r("div",{staticClass:"k-demo-line"}),e._v(" "),r("Collapse",[r("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null).exports;t.a=s},"5VHI":function(e,t,r){"use strict";var o={base:'<Form :label-width="80">\n  <FormItem label="Input">\n    <Input v-model="form.input"></Input>\n  </FormItem>\n  <FormItem label="Select">\n    <Select v-model="form.select">\n      <Option v-for="(x,y) in select" :key="y" :value="x.value">{{x.label}}</Option>\n    </Select>\n  </FormItem>\n  <FormItem label="DatePicker">\n    <DatePicker v-model="form.datepicker"></DatePicker>\n  </FormItem>\n  <FormItem label="Radio">\n    <RadioGroup v-model="form.radio">\n      <Radio label="0">男</Radio>\n      <Radio label="1">女</Radio>\n      <Radio label="2">妖</Radio>\n    </RadioGroup>\n  </FormItem>\n  <FormItem label="Checkbox">\n    <CheckboxGroup v-model="form.checkbox">\n      <Checkbox label="0">男</Checkbox>\n      <Checkbox label="1">女</Checkbox>\n      <Checkbox label="2">妖</Checkbox>\n    </CheckboxGroup>\n  </FormItem>\n  <FormItem label="Switch">\n    <Switch true-text="是" false-text="否"></Switch>\n  </FormItem>\n  <FormItem label="Text">\n    <Input type="textarea" placeholder="情输入..."></Input>\n  </FormItem>\n  <FormItem>\n    <Button type="primary">Submit</Button>\n    <Button style="margin-left: 10px">Cancel</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data(){\n    return{\n      form: {\n        switch: true,\n        input: "",\n        select: 0,\n        datepicker: "",\n        radio: "1",\n        checkbox: [\'0\']\n      },\n    }\n  }\n}\n<\/script>',invalid:'<Form :label-width="80" ref="form" :model="form" :rules="rules" :labelAlign="labelAlign">\n  <FormItem label="Input" prop="input">\n    <Input v-model="form.input"></Input>\n  </FormItem>\n  <FormItem label="Select">\n    <Row>\n      <Col span="12">\n      <FormItem  prop="province">\n        <Select v-model="form.province" clearable>\n          <Option value="0">北京</Option>\n          <Option value="1">上海</Option>\n          <Option value="2">广州</Option>\n          <Option value="3">深圳</Option>\n        </Select>\n      </FormItem>\n      </Col>\n      <Col span="11" offset="1">\n      <FormItem prop="city">\n        <Select v-model="form.city" clearable>\n          <Option value="0">南山区</Option>\n          <Option value="1">龙华区</Option>\n          <Option value="2">福田区</Option>\n          <Option value="3">宝安区</Option>\n        </Select>   \n      </FormItem>\n      </Col>\n    </Row>\n  </FormItem>\n  <FormItem label="DatePicker" prop="datepicker">\n    <DatePicker v-model="form.datepicker" clearable></DatePicker>\n  </FormItem>\n  <FormItem label="Radio" prop="radio">\n    <RadioGroup v-model="form.radio">\n      <Radio label="0">男</Radio>\n      <Radio label="1">女</Radio>\n      <Radio label="2">妖</Radio>\n    </RadioGroup>\n  </FormItem>\n  <FormItem label="Checkbox" prop="checkbox">\n    <CheckboxGroup v-model="form.checkbox">\n      <Checkbox label="0">男</Checkbox>\n      <Checkbox label="1">女</Checkbox>\n      <Checkbox label="2">妖</Checkbox>\n      <Checkbox label="3">鲛人</Checkbox>\n    </CheckboxGroup>\n  </FormItem>\n  <FormItem label="Text" prop="textarea">\n    <Input type="textarea" placeholder="情输入..." v-model="form.textarea"></Input>\n  </FormItem>\n  <FormItem>\n    <Button type="primary" @click="submitForm(\'form\')">Submit</Button>\n    <Button style="margin-left: 10px" @click="resetForm(\'form\')">Reset</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data() {\n    return {\n      labelAlign: \'right\',\n      code: code,\n      select: [\n        { label: "男", value: "0" },\n        { label: "女", value: "1" },\n        { label: "妖", value: "2" },\n      ],\n      form: {\n        switch: true,\n        input: "",\n        province:\'\',\n        city:\'\',\n        select: \'\',\n        datepicker: "",\n        radio: "",\n        checkbox: [],\n        textarea: \'\'\n      },\n      rules: {\n        input: [{ required: true, trigger: \'blur\' }],\n        select: [{ required: true, trigger: \'change\' }],\n        province: [{ required: true, trigger: \'change\' }],\n        city: [{ required: true, trigger: \'change\' }],\n        datepicker: [{ required: true, trigger: \'change\' }],\n        radio: [{ required: true, trigger: \'change\' }],\n        checkbox: [{ required: true, trigger: \'change\', min: 2, max: 3 }],\n        textarea: [{ required: true, message: \'必填\', trigger: \'blur\' }, { min: 2, max: 5, message: \'长度为2-5个字符\', trigger: \'blur\' }],\n      },\n    };\n  },\n  methods: {\n    submitForm(name) {\n      console.log(this.$refs[name].model)\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm(name) {\n      this.$refs[name].resetFields()\n    },\n  }\n};\n<\/script>\n',customValid:'<Form :model="customForm" :rules="customRules" labelWidth="80" ref="customForm">\n  <FormItem label="userName" prop="userName">\n    <Input v-model="customForm.userName" />\n  </FormItem>\n  <FormItem label="password" prop="password">\n    <Input v-model="customForm.password" type="password" />\n  </FormItem>\n  <FormItem label="Confrim" prop="rePassword">\n    <Input v-model="customForm.rePassword" type="password" />\n  </FormItem>\n  <FormItem>\n    <Button type="primary" @click="submitForm(\'customForm\')">Submit</Button>\n    <Button style="margin-left: 10px" @click="resetForm(\'customForm\')">Reset</Button>\n  </FormItem>\n</Form>\n<script>\nexport default {\n  data() {\n    const validatePass = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请填写密码\'))\n      } else {\n        if (this.customForm.rePassword !== "") {\n          this.$refs.customForm.validateField(\'rePassword\')\n        }\n        callback()\n      }\n    };\n    const validateRePass = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请再次输入密码\'))\n      } else {\n        if (this.customForm.password !== value) {\n          callback(new Error(\'两次密码输入不一致\'))\n        }\n        callback()\n      }\n    };\n    const validateUserName = (rule, value, callback) => {\n      if (value === \'\') {\n        callback(new Error(\'请输入用户名\'))\n      } else {\n        if (value.length < 2 || value.length > 6) {\n          callback(new Error(\'用户名长度为2-6位\'))\n        } else {\n          callback()\n        }\n      }\n    };\n    return {\n      labelAlign: \'right\',\n      select: [\n        { label: "男", value: "0" },\n        { label: "女", value: "1" },\n        { label: "妖", value: "2" },\n      ],\n      customRules: {\n        userName: [{ validator: validateUserName, trigger: \'blur\' }],\n        password: [{ validator: validatePass, trigger: \'blur\' }],\n        rePassword: [{ validator: validateRePass, trigger: \'blur\' }],\n      },\n      customForm: {\n        userName: \'\',\n        password: \'\',\n        rePassword: \'\'\n      },\n    };\n  },\n  methods: {\n    submitForm(name) {\n      console.log(this.$refs[name].model)\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm(name) {\n      this.$refs[name].resetFields()\n    },\n  }\n};\n<\/script>\n'};t.a=o},U1g7:function(e,t,r){"use strict";r.r(t);var a=r("5VHI"),o={components:{Demo:r("+qlZ").a},data:function(){var o=this;return{data3:"left",s1:"",labelAlign:"right",code:a.a,select:[{label:"男",value:"0"},{label:"女",value:"1"},{label:"妖",value:"2"}],form:{switch:!0,input:"",select:"",province:"",city:"",datepicker:"",radio:"",checkbox:[],textarea:""},rules:{input:[{required:!0,trigger:"blur"}],select:[{required:!0,trigger:"change"}],province:[{required:!0,trigger:"change"}],city:[{required:!0,trigger:"change"}],datepicker:[{required:!0,trigger:"change"}],radio:[{required:!0,trigger:"change"}],checkbox:[{required:!0,trigger:"change",min:2,max:3}],textarea:[{required:!0,message:"必填",trigger:"blur"},{min:2,max:5,message:"长度为2-5个字符",trigger:"blur"}]},customRules:{userName:[{validator:function(e,t,r){""===t?r(new Error("请输入用户名")):t.length<2||6<t.length?r(new Error("用户名长度为2-6位")):r()},trigger:"blur"}],password:[{validator:function(e,t,r){""===t?r(new Error("请填写密码")):(""!==o.customForm.rePassword&&o.$refs.customForm.validateField("rePassword"),r())},trigger:"blur"}],rePassword:[{validator:function(e,t,r){""===t?r(new Error("请再次输入密码")):(o.customForm.password!==t&&r(new Error("两次密码输入不一致")),r())},trigger:"blur"}]},customForm:{userName:"",password:"",rePassword:""},count:1,dynamicForm:{items:[{value:"",index:1}]}}},methods:{add:function(){this.count++,this.dynamicForm.items.push({value:"",index:this.count})},del:function(e){this.dynamicForm.items.splice(e,1)},submitForm:function(e){var t=this;console.log(this.$refs[e].model),this.$refs[e].validate(function(e){e?t.$Message.success("验证通过"):t.$Message.error("验证失败")})},resetForm:function(e){this.$refs[e].resetFields()}}},n=r("KHd+"),l=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Form 表单")]),t._v(" "),r("Alert",[t._v("注意：非 template/render 模式下，需使用 k-form。")]),t._v(" "),r("h3",[t._v("代码示例")]),t._v(" "),r("Row",{attrs:{gutter:"8"}},[r("Col",{attrs:{span:"12"}},[r("Demo",{attrs:{title:"基础用法"}},[r("div",{attrs:{slot:"content"},slot:"content"},[t._v("对齐方式 :\n        "),r("RadioGroup",{attrs:{mini:""},on:{change:function(e){t.labelAlign=e}},model:{value:t.data3,callback:function(e){t.data3=e},expression:"data3"}},[r("RadioButton",{attrs:{label:"left"}},[t._v("Left")]),t._v(" "),r("RadioButton",{attrs:{label:"right"}},[t._v("Right")]),t._v(" "),r("RadioButton",{attrs:{label:"top"}},[t._v("Top")])],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("Form",{attrs:{"label-width":80,labelAlign:t.labelAlign}},[r("FormItem",{attrs:{label:"Input"}},[r("Input",{attrs:{width:"200"}})],1),t._v(" "),r("FormItem",{attrs:{label:"Select"}},[r("Select",{attrs:{width:"200"},model:{value:t.s1,callback:function(e){t.s1=e},expression:"s1"}},[r("Option",{attrs:{value:"0"}},[t._v("男")]),t._v(" "),r("Option",{attrs:{value:"1"}},[t._v("女")]),t._v(" "),r("Option",{attrs:{value:"2"}},[t._v("妖")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"DatePicker"}},[r("DatePicker")],1),t._v(" "),r("FormItem",{attrs:{label:"Radio"}},[r("RadioGroup",{attrs:{value:"0"}},[r("Radio",{attrs:{label:"0"}},[t._v("男")]),t._v(" "),r("Radio",{attrs:{label:"1"}},[t._v("女")]),t._v(" "),r("Radio",{attrs:{label:"2"}},[t._v("妖")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"Checkbox"}},[r("CheckboxGroup",{attrs:{value:["0"]}},[r("Checkbox",{attrs:{label:"0"}},[t._v("男")]),t._v(" "),r("Checkbox",{attrs:{label:"1"}},[t._v("女")]),t._v(" "),r("Checkbox",{attrs:{label:"2"}},[t._v("妖")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"Switch"}},[r("k-switch",{attrs:{"true-text":"是","false-text":"否"}})],1),t._v(" "),r("FormItem",{attrs:{label:"Text"}},[r("Input",{attrs:{type:"textarea",placeholder:"情输入..."}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"}},[t._v("Submit")]),t._v(" "),r("Button",{staticStyle:{"margin-left":"10px"}},[t._v("Cancel")])],1)],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[r("code",[t._v("Form")]),t._v("内部结构，每个单域由\n        "),r("code",[t._v("FormItem")]),t._v("组成，通过\n        "),r("code",[t._v("label")]),t._v("可以设置\n        "),r("code",[t._v("FormItem")]),t._v("标签，\n        "),r("code",[t._v("lable-width")]),t._v("可以设置标签的宽度，\n        "),r("code",[t._v("label-align")]),t._v("可以设置标签对其方式\n      ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])])],1),t._v(" "),r("Col",{attrs:{span:"12"}},[r("Demo",{attrs:{title:"表单验证"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Form",{ref:"form",attrs:{"label-width":"90",model:t.form,rules:t.rules,labelAlign:t.labelAlign}},[r("FormItem",{attrs:{label:"Input",prop:"input"}},[r("Input",{model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),t._v(" "),r("FormItem",{attrs:{label:"Select"}},[r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{prop:"province"}},[r("Select",{attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[r("Option",{attrs:{value:"0"}},[t._v("北京")]),t._v(" "),r("Option",{attrs:{value:"1"}},[t._v("上海")]),t._v(" "),r("Option",{attrs:{value:"2"}},[t._v("广州")]),t._v(" "),r("Option",{attrs:{value:"3"}},[t._v("深圳")])],1)],1)],1),t._v(" "),r("Col",{attrs:{span:"11",offset:"1"}},[r("FormItem",{attrs:{prop:"city"}},[r("Select",{attrs:{clearable:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}},[r("Option",{attrs:{value:"0"}},[t._v("南山区")]),t._v(" "),r("Option",{attrs:{value:"1"}},[t._v("龙华区")]),t._v(" "),r("Option",{attrs:{value:"2"}},[t._v("福田区")]),t._v(" "),r("Option",{attrs:{value:"3"}},[t._v("宝安区")])],1)],1)],1)],1)],1),t._v(" "),r("FormItem",{attrs:{label:"DatePicker",prop:"datepicker"}},[r("DatePicker",{attrs:{clearable:""},model:{value:t.form.datepicker,callback:function(e){t.$set(t.form,"datepicker",e)},expression:"form.datepicker"}})],1),t._v(" "),r("FormItem",{attrs:{label:"Radio",prop:"radio"}},[r("RadioGroup",{model:{value:t.form.radio,callback:function(e){t.$set(t.form,"radio",e)},expression:"form.radio"}},[r("Radio",{attrs:{label:"0"}},[t._v("男")]),t._v(" "),r("Radio",{attrs:{label:"1"}},[t._v("女")]),t._v(" "),r("Radio",{attrs:{label:"2"}},[t._v("妖")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"Checkbox",prop:"checkbox"}},[r("CheckboxGroup",{model:{value:t.form.checkbox,callback:function(e){t.$set(t.form,"checkbox",e)},expression:"form.checkbox"}},[r("Checkbox",{attrs:{label:"0"}},[t._v("男")]),t._v(" "),r("Checkbox",{attrs:{label:"1"}},[t._v("女")]),t._v(" "),r("Checkbox",{attrs:{label:"2"}},[t._v("妖")]),t._v(" "),r("Checkbox",{attrs:{label:"3"}},[t._v("鲛人")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"Text",prop:"textarea"}},[r("Input",{attrs:{type:"textarea",placeholder:"情输入..."},model:{value:t.form.textarea,callback:function(e){t.$set(t.form,"textarea",e)},expression:"form.textarea"}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("Submit")]),t._v(" "),r("Button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.resetForm("form")}}},[t._v("Reset")])],1)],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("给\n        "),r("code",[t._v("Form")]),t._v("设置\n        "),r("code",[t._v("rules")]),t._v("属性，给每个要验证的标签添加\n        "),r("code",[t._v("prop")]),t._v("属性，\n        "),r("code",[t._v("validate")]),t._v("用来验证表单，\n        "),r("code",[t._v("resetFields")]),t._v("用来重置表单\n      ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.invalid))])]),t._v(" "),r("Demo",{attrs:{title:"自定义验证"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Form",{ref:"customForm",attrs:{model:t.customForm,rules:t.customRules,labelWidth:"80"}},[r("FormItem",{attrs:{label:"userName",prop:"userName"}},[r("Input",{model:{value:t.customForm.userName,callback:function(e){t.$set(t.customForm,"userName",e)},expression:"customForm.userName"}})],1),t._v(" "),r("FormItem",{attrs:{label:"password",prop:"password"}},[r("Input",{attrs:{type:"password"},model:{value:t.customForm.password,callback:function(e){t.$set(t.customForm,"password",e)},expression:"customForm.password"}})],1),t._v(" "),r("FormItem",{attrs:{label:"Confrim",prop:"rePassword"}},[r("Input",{attrs:{type:"password"},model:{value:t.customForm.rePassword,callback:function(e){t.$set(t.customForm,"rePassword",e)},expression:"customForm.rePassword"}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("customForm")}}},[t._v("Submit")]),t._v(" "),r("Button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.resetForm("customForm")}}},[t._v("Reset")])],1)],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("在\n        "),r("code",[t._v("rules")]),t._v("里面设置\n        "),r("code",[t._v("validator")]),t._v("方法，可以自定义验证，详细查阅下方的\n        "),r("code",[t._v("rules API")])]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.customValid))])])],1)],1),t._v(" "),r("h3",[t._v("Form API")]),t._v(" "),t._m(0),t._v(" "),r("h3",[t._v("FormItem API")]),t._v(" "),t._m(1),t._v(" "),r("h3",[t._v("rules API")]),t._v(" "),t._m(2)],1)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-border"},[r("table",[r("tr",[r("th",[e._v("属性")]),e._v(" "),r("th",[e._v("说明")]),e._v(" "),r("th",[e._v("类型")]),e._v(" "),r("th",[e._v("默认值")])]),e._v(" "),r("tr",[r("td",[e._v("model")]),e._v(" "),r("td",[e._v("表单数据对象")]),e._v(" "),r("td",[e._v("Object")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("rules")]),e._v(" "),r("td",[e._v("表单验证规则，")]),e._v(" "),r("td",[e._v("Boolean")]),e._v(" "),r("td",[e._v("false")])]),e._v(" "),r("tr",[r("td",[e._v("label-width")]),e._v(" "),r("td",[e._v("表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值")]),e._v(" "),r("td",[e._v("Number,String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("label-align")]),e._v(" "),r("td",[e._v("表单域标签的位置，可选值为 left、right、top")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("right")])]),e._v(" "),r("tr",[r("td",[e._v("validate")]),e._v(" "),r("td",[e._v("对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，暂不支持异步验证")]),e._v(" "),r("td",[e._v("Function")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("validateField")]),e._v(" "),r("td",[e._v("对表单单个字段进行校验的方法")]),e._v(" "),r("td",[e._v("Function")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("resetFields")]),e._v(" "),r("td",[e._v("对整个表单进行重置，将所有字段值重置为空并移除校验结果")]),e._v(" "),r("td",[e._v("Function")]),e._v(" "),r("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-border"},[r("table",[r("tr",[r("th",[e._v("属性")]),e._v(" "),r("th",[e._v("说明")]),e._v(" "),r("th",[e._v("类型")]),e._v(" "),r("th",[e._v("默认值")])]),e._v(" "),r("tr",[r("td",[e._v("prop")]),e._v(" "),r("td",[e._v("对应表单域 model 里的字段，表单验证必须字段")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("label")]),e._v(" "),r("td",[e._v("标签文本")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("rules")]),e._v(" "),r("td",[e._v("表单验证规则")]),e._v(" "),r("td",[e._v("Array")]),e._v(" "),r("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-border"},[r("table",[r("tr",[r("th",[e._v("属性")]),e._v(" "),r("th",[e._v("说明")]),e._v(" "),r("th",[e._v("类型")]),e._v(" "),r("th",[e._v("默认值")])]),e._v(" "),r("tr",[r("td",[e._v("required")]),e._v(" "),r("td",[e._v("是否必填字段")]),e._v(" "),r("td",[e._v("Boolean")]),e._v(" "),r("td",[e._v("false")])]),e._v(" "),r("tr",[r("td",[e._v("trigger")]),e._v(" "),r("td",[e._v("校验触发方式，提供\n          "),r("code",[e._v("blur")]),e._v("失去焦点，\n          "),r("code",[e._v("change")]),e._v("值被改变两种方式触发")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("blur")])]),e._v(" "),r("tr",[r("td",[e._v("message")]),e._v(" "),r("td",[e._v("校验不通过提示语")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("validator")]),e._v(" "),r("td",[e._v("自定义校验方法，可参见示例")]),e._v(" "),r("td",[e._v("Function")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("type")]),e._v(" "),r("td",[e._v("数据类型校验，提供三种校验方式\n          "),r("code",[e._v("mobile")]),e._v("手机，\n          "),r("code",[e._v("mail")]),e._v("邮箱，\n          "),r("code",[e._v("number")]),e._v("数字类型判断")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("pattner")]),e._v(" "),r("td",[e._v("自定义正则校验，比喻密码强度包含数字，字母，特殊符号可以这么写\n          "),r("code",[e._v("/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/")])]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("min")]),e._v(" "),r("td",[e._v("字段长度最小值校验")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])]),e._v(" "),r("tr",[r("td",[e._v("max")]),e._v(" "),r("td",[e._v("字段长度最大值校验")]),e._v(" "),r("td",[e._v("String")]),e._v(" "),r("td",[e._v("-")])])])])}],!1,null,null,null);t.default=l.exports}}]);