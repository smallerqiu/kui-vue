/*!
 * kui-vue v3.3.5-b
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[9174],{5989:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var o,n,a=function(){var e=this;e._self._c;return e._m(0)},l=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Drawer 抽屉")]),t("p",[e._v("屏幕边缘滑出的浮层面板。")]),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e._v("何时使用 "),t("a",{staticClass:"anchor",attrs:{href:"#何时使用"}},[e._v("#")])]),t("ul",[t("li",[e._v("抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。")]),t("li",[e._v("当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。")]),t("li",[e._v("当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。")])]),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e._v("代码演示 "),t("a",{staticClass:"anchor",attrs:{href:"#代码演示"}},[e._v("#")])])])}],s=r(1001),i={},d=(0,s.Z)(i,a,l,!1,null,null,null),c=d.exports,u=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",[t("Button",{on:{click:function(t){e.show=!e.show}}},[e._v("普通抽屉")]),t("Button",{on:{click:function(t){e.show2=!e.show2}}},[e._v("Width 30%")]),t("Drawer",{attrs:{footer:null,title:null},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t("p",[e._v("something ...")]),t("p",[e._v("something ...")]),t("p",[e._v("something ...")])]),t("Drawer",{attrs:{width:"30%",title:"Width 30%"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}},[t("p",[e._v("something ...")]),t("p",[e._v("something ...")]),t("p",[e._v("something ...")])])],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e._v("基本用法 "),t("a",{staticClass:"anchor",attrs:{href:"#基本用法"}},[e._v("#")])]),t("p",[e._v("通过 "),t("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定 "),t("code",{pre:!0},[e._v("Drawer")]),e._v(" 是否展示 , title 为null或false时不显示标题")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Button @click="show=!show">普通抽屉</Button>\n    <Button @click="show2=!show2">Width 30%</Button>\n    <Drawer v-model="show"  :footer="null" :title="null">\n      <p>something ...</p>\n      <p>something ...</p>\n      <p>something ...</p>\n    </Drawer>\n    <Drawer v-model="show2" width="30%" title="Width 30%">\n      <p>something ...</p>\n      <p>something ...</p>\n      <p>something ...</p>\n    </Drawer>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      show:false,\n      show2:false\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},p=[],v={data(){return{show:!1,show2:!1}}},m=v,h=(0,s.Z)(m,u,p,!1,null,null,null),_=h.exports,b=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",{staticStyle:{overflow:"hidden"}},[t("RadioGroup",{model:{value:e.placement,callback:function(t){e.placement=t},expression:"placement"}},[t("Radio",{attrs:{label:"left",value:"left"}}),t("Radio",{attrs:{label:"top",value:"top"}}),t("Radio",{attrs:{label:"right",value:"right"}}),t("Radio",{attrs:{label:"bottom",value:"bottom"}})],1),t("Button",{on:{click:function(t){e.show=!0}}},[e._v("Open")]),t("Drawer",{attrs:{height:"300",placement:e.placement,title:"What's your name? ",cancelText:"Cancel",okText:"Ok"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v("My name is chuchur.")])],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"自定义",tabindex:"-1"}},[e._v("自定义 "),t("a",{staticClass:"anchor",attrs:{href:"#自定义"}},[e._v("#")])]),t("p",[e._v("通过 "),t("code",{pre:!0},[e._v("title")]),e._v(" 来设置标题， "),t("code",{pre:!0},[e._v("width")]),e._v(" 控制宽度， 还有 "),t("code",{pre:!0},[e._v("placement")]),e._v(" 控制方向")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div style="overflow:hidden">\n    <RadioGroup v-model="placement">\n      <Radio label="left" value="left"/>\n      <Radio label="top" value="top"/>\n      <Radio label="right" value="right"/>\n      <Radio label="bottom" value="bottom"/>\n    </RadioGroup>\n    <Button @click="show=true" >Open</Button>\n    <Drawer v-model="show" height="300" :placement="placement" title="What\'s your name? " cancelText="Cancel" okText="Ok">My name is chuchur.</Drawer>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      show:false,\n      placement:\'left\'\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},f=[],w={data(){return{show:!1,placement:"left"}}},x=w,k=(0,s.Z)(x,b,f,!1,null,null,null),g=k.exports,F=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",[t("Button",{on:{click:function(t){e.show1=!0}}},[e._v("普通表单")]),t("Button",{on:{click:function(t){e.show2=!0}}},[e._v("自定义")]),t("Drawer",{attrs:{title:"表单验证",footer:""},on:{ok:e.submitForm,cancel:e.resetForm},model:{value:e.show1,callback:function(t){e.show1=t},expression:"show1"}},[t("Form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-align":"left",labelCol:{span:5},wrapperCol:{span:19}}},[t("FormItem",{attrs:{label:"Input",prop:"input"}},[t("Input",{attrs:{clearable:"",icon:"home"}})],1),t("FormItem",{attrs:{label:"Number",prop:"number"}},[t("Input",{attrs:{number:"",clearable:""}})],1),t("FormItem",{attrs:{label:"DatePicker",prop:"datepicker"}},[t("DatePicker",{attrs:{clearable:"",format:"YYYY/MM/DD hh:mm:ss"}})],1),t("FormItem",{attrs:{label:"Radio",prop:"radio"}},[t("Radio",[e._v("男")])],1),t("FormItem",{attrs:{label:"RadioGroup",prop:"radios"}},[t("RadioGroup",[t("Radio",{attrs:{value:"0",label:"武汉"}}),t("Radio",{attrs:{value:"1",label:"深圳"}}),t("Radio",{attrs:{value:"2",label:"杭州"}})],1)],1),t("FormItem",{attrs:{label:"Checkbox",prop:"checkbox"}},[t("Checkbox",[e._v("男")])],1),t("FormItem",{attrs:{label:"CheckboxGroup",prop:"checkboxs"}},[t("CheckboxGroup",[t("Checkbox",{attrs:{value:"0",label:"武汉"}}),t("Checkbox",{attrs:{value:"1",label:"杭州"}}),t("Checkbox",{attrs:{value:"2",label:"上海"}}),t("Checkbox",{attrs:{value:"3",label:"北京"}})],1)],1),t("FormItem",{attrs:{label:"Text",prop:"textarea"}},[t("TextArea",{attrs:{placeholder:"情输入..."}})],1)],1)],1),t("Drawer",{attrs:{title:"我是自定义标题"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}},[t("p",[e._v("我是自定义内容")]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",[e._v("取消")]),t("Button",{attrs:{type:"danger"}},[e._v("驳回")]),t("Button",[e._v("通过")])],1)])],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"表单模式",tabindex:"-1"}},[e._v("表单模式 "),t("a",{staticClass:"anchor",attrs:{href:"#表单模式"}},[e._v("#")])]),t("p",[e._v("内容将呈现表单模式，有页头和页尾, 可自定义页尾")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Button @click="show1=true">普通表单</Button>\n    <Button @click="show2=true">自定义</Button>\n    <Drawer v-model="show1" title="表单验证" @ok="submitForm" @cancel="resetForm" footer>\n      <Form ref="form" :model="form" :rules="rules" label-align="left" :labelCol="{span:5}" :wrapperCol="{span:19}">\n        <FormItem label="Input" prop="input">\n          <Input clearable icon="home"></Input>\n        </FormItem>\n        <FormItem label="Number" prop="number">\n          <Input number clearable></Input>\n        </FormItem>\n        <FormItem label="DatePicker" prop="datepicker">\n          <DatePicker clearable format="YYYY/MM/DD hh:mm:ss"></DatePicker>\n        </FormItem>\n        <FormItem label="Radio" prop="radio">\n          <Radio >男</Radio>\n        </FormItem>\n        <FormItem label="RadioGroup" prop="radios">\n          <RadioGroup >\n            <Radio value="0" label="武汉"/>\n            <Radio value="1" label="深圳"/>\n            <Radio value="2" label="杭州"/>\n          </RadioGroup>\n        </FormItem>\n        <FormItem label="Checkbox" prop="checkbox">\n          <Checkbox >男</Checkbox>\n        </FormItem>\n        <FormItem label="CheckboxGroup" prop="checkboxs">\n          <CheckboxGroup >\n            <Checkbox value="0" label="武汉" />\n            <Checkbox value="1" label="杭州"/>\n            <Checkbox value="2" label="上海" />\n            <Checkbox value="3" label="北京"/>\n          </CheckboxGroup>\n        </FormItem>\n        <FormItem label="Text" prop="textarea">\n          <TextArea placeholder="情输入..."  />\n        </FormItem>\n      </Form>\n    </Drawer>\n    <Drawer v-model="show2" title="我是自定义标题">\n      <p>我是自定义内容</p>\n      <div slot="footer">\n        <Button>取消</Button>\n        <Button type="danger">驳回</Button>\n        <Button>通过</Button>\n      </div>\n    </Drawer>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      show1: false, show2: false,\n      form: {\n        switch: true,\n        input: "",\n        number: "",\n        province: \'\',\n        city: \'\',\n        radio: true,\n        checkbox: true,\n        datepicker: "",\n        radios: "",\n        checkboxs: [],\n        textarea: \'\'\n      },\n      rules: {\n        input: [{ required: true }],\n        number: [{ required: true}],\n        province: [{ required: true }],\n        city: [{ required: true }],\n        datepicker: [{ required: true }],\n        radios: [{ required: true }],\n        radio: [{ required: true }],\n        checkbox: [{ required: true }],\n        checkboxs: [{ required: true }],\n        textarea: [{ required: true, message: \'必填\', trigger: \'blur\' }, { min: 2, max: 5, message: \'长度为2-5个字符\'}],\n      },\n    }\n  },\n  methods: {\n    submitForm() {\n      this.$refs.form.validate(valid => {\n        if (valid) {\n          this.$Message.success(\'验证通过\')\n          this.show1 = false\n        } else {\n          this.$Message.error(\'验证失败\')\n        }\n      })\n    },\n    resetForm() {\n      this.$refs.form.reset()\n    },    \n  }\n}\n<\/script>\n')])])])],2)]],2)},R=[],C={data(){return{show1:!1,show2:!1,form:{switch:!0,input:"",number:"",province:"",city:"",radio:!0,checkbox:!0,datepicker:"",radios:"",checkboxs:[],textarea:""},rules:{input:[{required:!0}],number:[{required:!0}],province:[{required:!0}],city:[{required:!0}],datepicker:[{required:!0}],radios:[{required:!0}],radio:[{required:!0}],checkbox:[{required:!0}],checkboxs:[{required:!0}],textarea:[{required:!0,message:"必填",trigger:"blur"},{min:2,max:5,message:"长度为2-5个字符"}]}}},methods:{submitForm(){this.$refs.form.validate((e=>{e?(this.$Message.success("验证通过"),this.show1=!1):this.$Message.error("验证失败")}))},resetForm(){this.$refs.form.reset()}}},I=C,B=(0,s.Z)(I,F,R,!1,null,null,null),D=B.exports,q=function(){var e=this,t=e._self._c;return t("div",[[t("demo",[t("template",{slot:"component"},[t("div",{ref:"drawer-box",staticStyle:{height:"300px",position:"relative",overflow:"hidden"}},[t("Button",{on:{click:function(t){e.show=!e.show}}},[e._v("普通抽屉")]),t("RadioGroup",{model:{value:e.placement,callback:function(t){e.placement=t},expression:"placement"}},[t("Radio",{attrs:{label:"left",value:"left"}}),t("Radio",{attrs:{label:"top",value:"top"}}),t("Radio",{attrs:{label:"right",value:"right"}}),t("Radio",{attrs:{label:"bottom",value:"bottom"}})],1),t("Drawer",{attrs:{width:"200",footer:null,placement:e.placement,target:()=>e.$refs["drawer-box"]},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t("p",[e._v("something ...")]),t("p",[e._v("something ...")]),t("p",[e._v("something ...")])])],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"植入目标元素",tabindex:"-1"}},[e._v("植入目标元素 "),t("a",{staticClass:"anchor",attrs:{href:"#植入目标元素"}},[e._v("#")])]),t("p",[e._v("可以在目标元素内展开")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div ref="drawer-box" style="height:300px;position:relative;overflow:hidden">\n    <Button @click="show=!show">普通抽屉</Button>\n    <RadioGroup v-model="placement">\n      <Radio label="left" value="left"/>\n      <Radio label="top" value="top"/>\n      <Radio label="right" value="right"/>\n      <Radio label="bottom" value="bottom"/>\n    </RadioGroup>\n    <Drawer v-model="show" width="200" \n      :footer="null" \n      :placement="placement"\n      :target="()=>$refs[\'drawer-box\']">\n      <p>something ...</p>\n      <p>something ...</p>\n      <p>something ...</p>\n    </Drawer>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      show:false,\n      placement:\'left\'\n    }\n  }\n}\n<\/script>\n')])])])],2)]],2)},G=[],y={data(){return{show:!1,placement:"left"}}},M=y,T=(0,s.Z)(M,q,G,!1,null,null,null),$=T.exports,S=function(){var e=this;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e._self._c;return t("div",[t("h4",{attrs:{id:"api",tabindex:"-1"}},[e._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#api"}},[e._v("#")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("title")]),t("td",[e._v("抽屉标题,为null或false时不显示标题")]),t("td",[e._v("String")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("抽屉宽度 "),t("code",{pre:!0},[e._v("placement")]),e._v("为 "),t("code",{pre:!0},[e._v("left")]),e._v(" 或 "),t("code",{pre:!0},[e._v("right")]),e._v(" 时使用,支持百分比")]),t("td",[e._v("Number,String")]),t("td",[e._v("520")])]),t("tr",[t("td",[e._v("height")]),t("td",[e._v("抽屉高度 "),t("code",{pre:!0},[e._v("placement")]),e._v("为 "),t("code",{pre:!0},[e._v("top")]),e._v(" 或 "),t("code",{pre:!0},[e._v("bottom")]),e._v(" 时使用,支持百分比")]),t("td",[e._v("Number,String")]),t("td",[e._v("256")])]),t("tr",[t("td",[e._v("placement")]),t("td",[e._v("抽屉显示方向，提供 "),t("code",{pre:!0},[e._v("left")]),e._v(" , "),t("code",{pre:!0},[e._v("top")]),e._v(" , "),t("code",{pre:!0},[e._v("right")]),e._v(" , "),t("code",{pre:!0},[e._v("bottom")]),e._v(" 4种展示方式")]),t("td",[e._v("String")]),t("td",[e._v("right")])]),t("tr",[t("td",[e._v("footer")]),t("td",[e._v("页脚内容，不显示页脚设置"),t("code",{pre:!0},[e._v("footer=null")]),e._v("即可")]),t("td",[e._v("slot")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("closable")]),t("td",[e._v("是否显示关闭按钮")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("target")]),t("td",[e._v("展示的父元素")]),t("td",[e._v("Function")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("mas-closable")]),t("td",[e._v("点击蒙层是否允许关闭")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("okText")]),t("td",[e._v("确定按钮文字")]),t("td",[e._v("String")]),t("td",[e._v("确定")])]),t("tr",[t("td",[e._v("cancelText")]),t("td",[e._v("取消按钮文字")]),t("td",[e._v("String")]),t("td",[e._v("取消")])]),t("tr",[t("td",[e._v("ok")]),t("td",[e._v("点击确定的回调")]),t("td",[e._v("Function")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("cancel")]),t("td",[e._v("点击取消的回调")]),t("td",[e._v("Function")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("close")]),t("td",[e._v("抽屉关闭的回调")]),t("td",[e._v("Function")]),t("td",[e._v("-")])])])])])}],Z={},P=(0,s.Z)(Z,S,Y,!1,null,null,null),W=P.exports,N={render(){const e=arguments[0];return e("div",{class:"demo-drawer"},[e(c),e(_),e(g),e(D),e($),e(W)])}},O=N,A=(0,s.Z)(O,o,n,!1,null,null,null),j=A.exports}}]);