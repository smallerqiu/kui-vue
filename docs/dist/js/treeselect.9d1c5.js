/*! kui-vue v2.1.9 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+qlZ":function(t,e,n){"use strict";var a=n("rMEQ"),l=n("Ff65");var i={directives:{resize:n("7+I9").a},components:{Code:a.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},o=n("KHd+"),d=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=d},jGlr:function(t,e,n){"use strict";n.r(e);var a=n("+qlZ"),l={base:"<TreeSelect :data=\"data\"/>\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        {\n          title: '商品分类',\n          expand: true,\n          value: '001',\n          children: [\n            {\n              title: '手机',\n              expand: true,\n              value: '002',\n              children: [\n                { title: 'Iphone 8' },\n                { title: 'Iphone X' }\n              ]\n            },\n            {\n              title: '电脑',\n              expand: true,\n              value: '003',\n              children: [\n                { title: 'MacPro' },\n                { title: '小米Pro' }\n              ]\n            }\n          ]\n        }\n      ],  \n    }\n  },\n  }\n}\n<\/script>",async:"<TreeSelect :data=\"data\" clearable queryable @queryChange=\"queryChange\" @loadData=\"loadData\"/>\n<script>\nexport default {\n  data() {\n    return {\n      code:code,\n      data: [{\n        title: '商品分类',\n        expand: false,\n        loading: false,\n        children: []\n      }]\n    }\n  },\n  methods: {\n    queryChange(value) {\n      let phones = ['iphone4', 'iphone4s', 'iphone5', 'iphone5s', 'iphone6', 'iphone6s', 'iphone7', 'iphone8', 'iphone X', '华为P20',]\n      let computers = ['mac pro', '戴尔E50', '联想600', '宏基S40', '联想小新', '小米air', 'mac air', 'suffice',]\n      //模拟异步请求\n      setTimeout(() => {\n        this.data = [\n          {\n            title: '商品分类',\n            expand: true,\n            children: [\n              {\n                title: '手机',\n                expand: true,\n                children: [\n                  { title: phones[parseInt(Math.random() * 10)], loading: false, },\n                  { title: phones[parseInt(Math.random() * 10)], loading: false, }\n                ]\n              },\n              {\n                title: '电脑',\n                expand: true,\n                children: [\n                  { title: computers[parseInt(Math.random() * 10)], loading: false, },\n                  { title: computers[parseInt(Math.random() * 10)], loading: false, }\n                ]\n              }\n            ]\n          }\n        ]\n      }, 1000)\n    },\n    loadData(item, callback) {\n      //模拟异步请求\n      setTimeout(() => {\n        let data = [\n          {\n            title: 'children',\n            loading: false,\n            children: []\n          },\n          {\n            title: 'children',\n            loading: false,\n            children: []\n          }\n        ];\n        callback(data);\n      }, 1000)\n    },\n  }\n}\n<\/script>",callback:"\n<TreeSelect :data=\"data\" @change=\"change\"/>\n<script>\nexport default {\n  data() {\n    return {\n      code:code,\n      data: [\n        {\n          title: '商品分类',\n          expand: true,\n          value: '001',\n          children: [\n            {\n              title: '手机',\n              expand: true,\n              value: '002',\n              children: [\n                { title: 'Iphone 8' },\n                { title: 'Iphone X' }\n              ]\n            },\n            {\n              title: '电脑',\n              expand: true,\n              value: '003',\n              children: [\n                { title: 'MacPro' },\n                { title: '小米Pro' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n  methods: {\n    change(item, callback) {\n      if (item.value == '001') {\n        this.$Message.error('不能选择根目录');\n        return callback(true)\n      }\n      if (item.title == 'Iphone 8') {\n        this.$Message.error('不能选择Iphone 8');\n        return callback(true)\n      }\n      return callback(false)\n    }\n  }\n}\n<\/script>"},i=l,o={components:{Demo:a.a},data:function(){return{code:i,data:[{title:"商品分类",expand:!0,value:"001",children:[{title:"手机",expand:!0,value:"002",children:[{title:"Iphone 8"},{title:"Iphone X"}]},{title:"电脑",expand:!0,value:"003",children:[{title:"MacPro"},{title:"小米Pro"}]}]}],data1:[{title:"商品分类",expand:!1,loading:!1,children:[]}]}},methods:{queryChange:function(t){var e=this,n=["iphone4","iphone4s","iphone5","iphone5s","iphone6","iphone6s","iphone7","iphone8","iphone X","华为P20"],a=["mac pro","戴尔E50","联想600","宏基S40","联想小新","小米air","mac air","suffice"];setTimeout(function(){e.data1=[{title:"商品分类",expand:!0,children:[{title:"手机",expand:!0,children:[{title:n[parseInt(10*Math.random())],loading:!1},{title:n[parseInt(10*Math.random())],loading:!1}]},{title:"电脑",expand:!0,children:[{title:a[parseInt(10*Math.random())],loading:!1},{title:a[parseInt(10*Math.random())],loading:!1}]}]}]},1e3)},loadData:function(t,e){setTimeout(function(){e([{title:"children",loading:!1,children:[]},{title:"children",loading:!1,children:[]}])},1e3)},change:function(t,e){return"001"==t.value?(this.$Message.error("不能选择根目录"),e(!0)):"Iphone 8"==t.title?(this.$Message.error("不能选择Iphone 8"),e(!0)):void e(!1)}}},d=n("KHd+"),r=Object(d.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("TreeSelect 树选择")]),t._v(" "),n("p",[t._v("类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基本用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("TreeSelect",{attrs:{data:t.data}})],1),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))]),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以通过\n        "),n("code",[t._v("v-model")]),t._v("双向绑定赋值，\n        "),n("code",[t._v("data")]),t._v("指定Tree的值")])]),t._v(" "),n("Demo",{attrs:{title:"选择和回调"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("TreeSelect",{attrs:{data:t.data},on:{change:t.change}})],1),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.callback))]),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),n("code",[t._v("change")]),t._v("来确认选中值")])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"异步和搜索"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("TreeSelect",{attrs:{data:t.data1,clearable:"",queryable:""},on:{"query-change":t.queryChange,"load-data":t.loadData}})],1),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.async))]),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("Tree的一步加载和组件\n        "),n("code",[t._v("Tree")]),t._v("用法一样")])])],1)],1),t._v(" "),n("h3",[t._v("TreeSelect API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("可嵌套的节点属性的数组，生成 tree 的数据")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[]")])]),t._v(" "),n("tr",[n("td",[t._v("vlaue")]),t._v(" "),n("td",[t._v("默认取值，可以通过\n          "),n("code",[t._v("v-model")]),t._v("双向绑定")]),t._v(" "),n("td",[t._v("String, Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("label")]),t._v(" "),n("td",[t._v("默认显示文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("placeholder")]),t._v(" "),n("td",[t._v("默认提示文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("请选择")])]),t._v(" "),n("tr",[n("td",[t._v("clearable")]),t._v(" "),n("td",[t._v("是否显示清空按钮")]),t._v(" "),n("td",[t._v("Bolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("queryable")]),t._v(" "),n("td",[t._v("是否显示查询输入框")]),t._v(" "),n("td",[t._v("Bolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("query-placeholder")]),t._v(" "),n("td",[t._v("搜索框提示文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("请输入关键字查询")])]),t._v(" "),n("tr",[n("td",[t._v("load-data")]),t._v(" "),n("td",[t._v("异步加载数据的方法")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("query-change")]),t._v(" "),n("td",[t._v("搜索查询回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("节点选中回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}],!1,null,null,null);e.default=r.exports}}]);