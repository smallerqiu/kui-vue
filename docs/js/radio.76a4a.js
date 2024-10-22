/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[4322],{3013:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var l=function(){var e=this,a=e._self._c;return a("Demo",[a("template",{slot:"component"},[a("Space",[e._v("\n  "+e._s(e.checked)+"\n  "),a("Radio",{model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}},[e._v("Radio")]),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.checked=!e.checked}}},[e._v(e._s(e.checked?"Uncheck":"Check"))]),e._v(" "),a("Radio",{attrs:{label:"Radio"}})],1)],1),e._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[e._v("基本用法")])]),e._v(" "),a("p",[e._v("单独使用可使用 "),a("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定数据")])]),e._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Space>\n    {{checked}}\n    <Radio v-model="checked">Radio</Radio>\n    <Button @click="checked=!checked" size="small">{{checked?\'Uncheck\':\'Check\'}}</Button>\n    <Radio label="Radio"/>\n  </Space>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      checked:false\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};l._withStripped=!0;var n={data(){return{checked:!1}}},i=t(1900),o=(0,i.Z)(n,l,[],!1,null,null,null).exports,d=function(){this._self._c;return this._m(0)};d._withStripped=!0;var r=(0,i.Z)({},d,[function(){var e=this,a=e._self._c;return a("div",{staticClass:"markdown-body"},[a("h1",[e._v("Radio 单选框")]),e._v(" "),a("p",[e._v("单选框。")]),e._v(" "),a("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[e._v("何时使用")])]),e._v(" "),a("ul",[a("li",[e._v("用于在多个备选项中选中单个状态。")]),e._v(" "),a("li",[e._v("和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")])]),e._v(" "),a("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[e._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var e=this,a=e._self._c;return a("Demo",[a("template",{slot:"component"},[a("Space",[a("Radio",{attrs:{disabled:""}},[e._v("disabled")]),e._v(" "),a("Radio",{attrs:{disabled:"",value:!0}},[e._v("disabled")]),e._v(" "),a("Radio",{attrs:{disabled:e.disabled},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}},[e._v("Radio")]),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.checked=!e.checked}}},[e._v(e._s(e.checked?"Checked":"Uncheck"))]),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.disabled=!e.disabled}}},[e._v(e._s(e.disabled?"Enable":"Disabled"))])],1)],1),e._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"可不用-/-可控",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可不用-/-可控"}},[e._v("可不用 / 可控")])]),e._v(" "),a("p",[e._v("通过 "),a("code",{pre:!0},[e._v("disabled")]),e._v(" 设置不可用")])]),e._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Space>\n    <Radio disabled>disabled</Radio>\n    <Radio disabled :value="true">disabled</Radio>\n    <Radio :disabled="disabled" v-model="checked">Radio</Radio>\n    <Button @click="checked=!checked" size="small">{{checked?\'Checked\':\'Uncheck\'}}</Button>\n    <Button @click="disabled=!disabled" size="small">{{disabled?\'Enable\':\'Disabled\'}}</Button>\n  </Space>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      disabled:false,\n      checked:false\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};s._withStripped=!0;var v={data(){return{disabled:!1,checked:!1}}},c=(0,i.Z)(v,s,[],!1,null,null,null).exports,u=function(){var e=this,a=e._self._c;return a("Demo",[a("template",{slot:"component"},[a("Space",{attrs:{vertical:"",align:"start"}},[a("Space",[a("Button",{attrs:{size:"small"},on:{click:function(a){e.data=""}}},[e._v("Clear")]),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.data="apple"}}},[e._v("Select apple")]),e._v("\n    Selected: "+e._s(e.data)+"\n  ")],1),e._v(" "),a("RadioGroup",{model:{value:e.data,callback:function(a){e.data=a},expression:"data"}},[a("Radio",{attrs:{label:"Apple",value:"apple"}}),e._v(" "),a("Radio",{attrs:{label:"Orange",value:"orange"}}),e._v(" "),a("Radio",{attrs:{label:"Banana",value:"banana"}}),e._v(" "),a("Radio",{attrs:{label:"Grape",value:"grape",disabled:""}}),e._v(" "),a("Radio",{attrs:{label:"Pear",value:"pear",disabled:""}})],1),e._v("\n  \n  "+e._s(e.cities)+"\n  "),a("RadioGroup",{attrs:{options:e.options},model:{value:e.cities,callback:function(a){e.cities=a},expression:"cities"}})],1)],1),e._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"组合使用",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合使用"}},[e._v("组合使用")])]),e._v(" "),a("p",[e._v("组合使用可以直接使用 "),a("code",{pre:!0},[e._v("RadioGroup")]),e._v(" 的 "),a("code",{pre:!0},[e._v("options")]),e._v(" 来赋值,或者结合 "),a("code",{pre:!0},[e._v("Radio")]),e._v(" 来组合使用,通过 "),a("code",{pre:!0},[e._v("disabled")]),e._v(" 可以设置组件是否被禁用")]),e._v(" "),a("blockquote",[a("p",[a("code",{pre:!0},[e._v("RadioGroup")]),e._v(" 可以直接使用 "),a("code",{pre:!0},[e._v("options")]),e._v(" 来组合，3.0版本增加")])])]),e._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Space vertical align="start">\n    <Space>\n      <Button @click="data=\'\'" size="small">Clear</Button>\n      <Button @click="data=\'apple\'" size="small">Select apple</Button>\n      Selected: {{data}}\n    </Space>\n    <RadioGroup v-model="data">\n      <Radio label="Apple" value="apple" />\n      <Radio label="Orange" value="orange" />\n      <Radio label="Banana" value="banana" />\n      <Radio label="Grape" value="grape" disabled/>\n      <Radio label="Pear" value="pear" disabled/>\n    </RadioGroup>\n    \n    {{cities}}\n    <RadioGroup :options="options" v-model="cities"/>\n  </Space>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n      data: \'apple\',\n      options: [\n        { label: \'Beijing\', value: \'beijing\' },\n        { label: \'Shenzhen\', value: \'shenzhen\' },\n        { label: \'Shanghai\', value: \'shanghai\' },\n        { label: \'Guangzhou\', value: \'guangzhou\' },\n        { label: \'Wuhan\', value: \'wuhan\' },\n      ],\n      cities:\'wuhan\'\n    };\n  }\n}\n<\/script>\n\n')])])])],2)};u._withStripped=!0;var p={data(){return{checked:!0,data:"apple",options:[{label:"Beijing",value:"beijing"},{label:"Shenzhen",value:"shenzhen"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Wuhan",value:"wuhan"}],cities:"wuhan"}}},_=(0,i.Z)(p,u,[],!1,null,null,null).exports,h=function(){var e=this,a=e._self._c;return a("Demo",[a("template",{slot:"component"},[a("div",[a("RadioGroup",{attrs:{options:e.types,type:"button",theme:"solid"},model:{value:e.direction,callback:function(a){e.direction=a},expression:"direction"}}),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("RadioGroup",{attrs:{options:e.options,direction:e.direction},on:{change:e.change},model:{value:e.cities,callback:function(a){e.cities=a},expression:"cities"}})],1)]),e._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"组合使用options",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合使用options"}},[e._v("组合使用Options")])]),e._v(" "),a("p",[e._v("组合使用可以直接使用 "),a("code",{pre:!0},[e._v("RadioGroup")]),e._v(" 的 "),a("code",{pre:!0},[e._v("options")]),e._v(" 来赋值,"),a("br"),e._v("\n或者结合子组件 "),a("code",{pre:!0},[e._v("Radio")]),e._v(" 来组合使用,通过 "),a("code",{pre:!0},[e._v("disabled")]),e._v(" 可以设置组件是否被禁用")])]),e._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <div>\n    <RadioGroup :options=\"types\" v-model=\"direction\" type=\"button\" theme=\"solid\"/>\n    <br />\n    <br />\n    <RadioGroup \n    :options=\"options\" \n    v-model=\"cities\" \n    @change=\"change\"\n    :direction=\"direction\"\n  />\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      direction:'horizontal',\n      types:[\n        { label: '垂直', value:'vertical'},\n        { label: '水平' ,value:'horizontal'}\n      ],\n      options: [\n        { label: 'Beijing', value: 'beijing' },\n        { label: 'Shenzhen', value: 'shenzhen' },\n        { label: 'Shanghai', value: 'shanghai' },\n        { label: 'Guangzhou', value: 'guangzhou' },\n        { label: 'Wuhan', value: 'wuhan' },\n        { label: 'Other', value: 'other',disabled:true },\n      ],\n      cities:'wuhan'\n    };\n  },\n  methods: {\n    change(item){\n      console.log(item)\n    }\n  },\n}\n<\/script>\n\n")])])])],2)};h._withStripped=!0;var b={data(){return{direction:"horizontal",types:[{label:"垂直",value:"vertical"},{label:"水平",value:"horizontal"}],options:[{label:"Beijing",value:"beijing"},{label:"Shenzhen",value:"shenzhen"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Wuhan",value:"wuhan"},{label:"Other",value:"other",disabled:!0}],cities:"wuhan"}},methods:{change(e){console.log(e)}}},m=(0,i.Z)(b,h,[],!1,null,null,null).exports,g=function(){var e=this,a=e._self._c;return a("Demo",[a("template",{slot:"component"},[a("Space",{attrs:{vertical:"",align:"start"}},[a("Space",[e._v("\n    Selected:"+e._s(e.data)),a("p"),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.data=""}}},[e._v("Clear")]),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.data="apple"}}},[e._v("Select apple")])],1),e._v(" "),a("RadioGroup",{attrs:{direction:"vertical"},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}},[a("Radio",{attrs:{label:"Apple",value:"apple"}}),e._v(" "),a("Radio",{attrs:{label:"Orange",value:"orange"}}),e._v(" "),a("Radio",{attrs:{label:"Banana",value:"banana"}}),e._v(" "),a("Radio",{attrs:{label:"Grape",value:"grape",disabled:""}}),e._v(" "),a("Radio",{attrs:{label:"Pear",value:"pear",disabled:""}})],1),e._v("\n  "+e._s(e.cities)+"\n  "),a("RadioGroup",{attrs:{options:e.options,direction:"vertical"},model:{value:e.cities,callback:function(a){e.cities=a},expression:"cities"}})],1)],1),e._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"组合垂直布局",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合垂直布局"}},[e._v("组合垂直布局")])]),e._v(" "),a("p",[e._v("组合垂直布局")])]),e._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Space vertical align="start">\n    <Space>\n      Selected:{{data}}</p>\n      <Button @click="data=\'\'" size="small">Clear</Button>\n      <Button @click="data=\'apple\'" size="small">Select apple</Button>\n    </Space>\n    <RadioGroup v-model="data" direction="vertical">\n      <Radio label="Apple" value="apple" />\n      <Radio label="Orange" value="orange" />\n      <Radio label="Banana" value="banana" />\n      <Radio label="Grape" value="grape" disabled/>\n      <Radio label="Pear" value="pear" disabled/>\n    </RadioGroup>\n    {{cities}}\n    <RadioGroup :options="options" v-model="cities"  direction="vertical"/>\n  </Space>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n      data: \'apple\',\n      options: [\n        { label: \'Beijing\', value: \'beijing\' },\n        { label: \'Shenzhen\', value: \'shenzhen\' },\n        { label: \'Shanghai\', value: \'shanghai\' },\n        { label: \'Guangzhou\', value: \'guangzhou\' },\n        { label: \'Wuhan\', value: \'wuhan\' },\n      ],\n      cities:\'wuhan\'\n    };\n  }\n}\n<\/script>\n\n')])])])],2)};g._withStripped=!0;var R={data(){return{checked:!0,data:"apple",options:[{label:"Beijing",value:"beijing"},{label:"Shenzhen",value:"shenzhen"},{label:"Shanghai",value:"shanghai"},{label:"Guangzhou",value:"guangzhou"},{label:"Wuhan",value:"wuhan"}],cities:"wuhan"}}},f=(0,i.Z)(R,g,[],!1,null,null,null).exports,k=function(){var e=this,a=e._self._c;return a("Demo",[a("template",{slot:"component"},[a("div",[e._v("\n  Shape :  "),a("RadioGroup",{attrs:{size:"small"},model:{value:e.shape,callback:function(a){e.shape=a},expression:"shape"}},[a("RadioButton",{attrs:{value:"default",label:"Default"}}),e._v(" "),a("RadioButton",{attrs:{value:"circle",label:"Circle"}})],1),e._v(" "),a("br"),e._v(" "),a("br"),e._v("\n  Theme :  "),a("RadioGroup",{attrs:{size:"small"},model:{value:e.theme,callback:function(a){e.theme=a},expression:"theme"}},[a("RadioButton",{attrs:{value:"default",label:"Default"}}),e._v(" "),a("RadioButton",{attrs:{value:"solid",label:"Solid"}}),e._v(" "),a("RadioButton",{attrs:{value:"light",label:"Light"}}),e._v(" "),a("RadioButton",{attrs:{value:"card",label:"Card"}})],1),e._v(" "),a("br"),e._v(" "),a("br"),e._v("\n  Size :  "),a("RadioGroup",{attrs:{size:"small",options:e.sizes},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}}),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("RadioGroup",{attrs:{type:"button",size:e.size,theme:e.theme,shape:e.shape,options:e.dates},model:{value:e.date,callback:function(a){e.date=a},expression:"date"}})],1)]),e._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"组合button使用",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合button使用"}},[e._v("组合Button使用")])]),e._v(" "),a("p",[e._v("结合 "),a("code",{pre:!0},[e._v("RadioGroup")]),e._v(","),a("code",{pre:!0},[e._v("RadioButton")]),e._v(" 可以组合使用")])]),e._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    Shape :  <RadioGroup v-model="shape" size="small">\n      <RadioButton value="default" label="Default" />\n      <RadioButton value="circle" label="Circle" />\n    </RadioGroup>\n    <br/>\n    <br/>\n    Theme :  <RadioGroup v-model="theme" size="small">\n      <RadioButton value="default" label="Default" />\n      <RadioButton value="solid" label="Solid" />\n      <RadioButton value="light" label="Light" />\n      <RadioButton value="card" label="Card" />\n    </RadioGroup>\n    <br/>\n    <br/>\n    Size :  <RadioGroup v-model="size" size="small" :options="sizes">\n    </RadioGroup>\n    <br/>\n    <br/>\n    <RadioGroup \n      type="button"\n      v-model="date" \n      :size="size" \n      :theme="theme" \n      :shape="shape" \n      :options="dates"> \n    </RadioGroup>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      size:\'default\',\n      shape:\'default\',\n      theme:\'solid\',\n      date:0,\n      dates:[\n        { label:\'7天\' ,value:0 },\n        { label:\'1个月\' ,value:1 },\n        { label:\'1季度\' ,value:2 },\n        { label:\'1年\' ,value:3 },\n        { label:\'5年\' ,value:4 ,disabled:true }\n      ],\n      sizes:[\n        {label:\'Large\',value:\'large\',icon:\'logo-apple\'},\n        {label:\'Default\',value:\'default\'},\n        {label:\'Small\',value:\'small\'},\n      ]\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};k._withStripped=!0;var z={data(){return{size:"default",shape:"default",theme:"solid",date:0,dates:[{label:"7天",value:0},{label:"1个月",value:1},{label:"1季度",value:2},{label:"1年",value:3},{label:"5年",value:4,disabled:!0}],sizes:[{label:"Large",value:"large",icon:"logo-apple"},{label:"Default",value:"default"},{label:"Small",value:"small"}]}}},S=(0,i.Z)(z,k,[],!1,null,null,null).exports,B=function(){this._self._c;return this._m(0)};B._withStripped=!0;var G=(0,i.Z)({},B,[function(){var e=this,a=e._self._c;return a("div",{staticClass:"markdown-body"},[a("h2",{attrs:{id:"radio-api",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-api"}},[e._v("Radio API")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("checked")]),e._v(" "),a("td",[e._v("是否选中状态，可以使用 "),a("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定数据")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("label")]),e._v(" "),a("td",[e._v("文字提示")]),e._v(" "),a("td",[e._v("String 、 Number")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("disabled")]),e._v(" "),a("td",[e._v("是否禁用当前项")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("change")]),e._v(" "),a("td",[e._v("在选项状态发生改变时回调")]),e._v(" "),a("td",[e._v("Function(e:Event)")]),e._v(" "),a("td",[e._v("-")])])])]),e._v(" "),a("h2",{attrs:{id:"radiogroup-api",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radiogroup-api"}},[e._v("RadioGroup API")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("value")]),e._v(" "),a("td",[e._v("用于设置当前选中的值。可以使用 "),a("code",{pre:!0},[e._v("v-model")]),e._v(" 双向绑定数据")]),e._v(" "),a("td",[e._v("Any")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("size")]),e._v(" "),a("td",[e._v("按钮尺寸,可选值 "),a("code",{pre:!0},[e._v("small")]),e._v("、"),a("code",{pre:!0},[e._v("large")]),e._v("，默认不选")]),e._v(" "),a("td",[e._v("Sting")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("direction")]),e._v(" "),a("td",[e._v("布局方向,可选值 "),a("code",{pre:!0},[e._v("horizontal")]),e._v("、"),a("code",{pre:!0},[e._v("vertical")])]),e._v(" "),a("td",[e._v("Sting")]),e._v(" "),a("td",[e._v("horizontal")])]),e._v(" "),a("tr",[a("td",[e._v("shape")]),e._v(" "),a("td",[a("code",{pre:!0},[e._v("button")]),e._v(" 的 shape 属性 ，显示圆角")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("theme")]),e._v(" "),a("td",[a("code",{pre:!0},[e._v("button")]),e._v(" 的 theme 属性")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("change")]),e._v(" "),a("td",[e._v("在选项状态发生改变时触发，返回当前选中的项")]),e._v(" "),a("td",[e._v("Function")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("options")]),e._v(" "),a("td",[e._v("可以指定子项 "),a("code",{pre:!0},[e._v("radio")])]),e._v(" "),a("td",[e._v("Array <{label:string/number,value:string/number}>")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("type")]),e._v(" "),a("td",[e._v("如果使用 "),a("code",{pre:!0},[e._v("options")]),e._v(" 来渲染子集，并且子集为 "),a("code",{pre:!0},[e._v("button")]),e._v("，需要指定 "),a("code",{pre:!0},[e._v("type=button")])]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])])])])])}],!1,null,null,null).exports,x={render(){const e=arguments[0];return e("div",{class:"demo-radio"},[e(r),e(o),e(c),e(m),e(_),e(f),e(S),e(G)])}},C=x,w=(0,i.Z)(C,undefined,undefined,!1,null,null,null).exports}}]);