/*! kui-vue v2.0.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"+qlZ":function(t,e,n){"use strict";var a=n("rMEQ"),l=n("Ff65");var d={directives:{resize:n("7+I9").a},components:{Code:a.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),n=this.layout,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)];var t,e,n},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},i=n("KHd+"),o=Object(i.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=o},O2ny:function(t,e,n){"use strict";n.r(e);var a=n("+qlZ"),l={base:"<Tree :data=\"data\"></Tree>\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        {\n          title: 'tree 1',\n          expand: true,\n          children: [\n            {\n              title: 'tree 1-1',\n              expand: true,\n              children: [\n                { title: 'leaf 1-1-1' },\n                { title: 'leaf 1-1-2' }\n              ]\n            },\n            {\n              title: 'tree 1-2',\n              expand: true,\n              children: [\n                { title: 'leaf 1-2-1' },\n                { title: 'leaf 1-2-2' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n}\n<\/script>\n",checked:"<Tree :data=\"data\" checkbox></Tree>\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        {\n          title: 'tree 1',\n          expand: true,\n          children: [\n            {\n              title: 'tree 1-1',\n              expand: true,\n              children: [\n                { title: 'leaf 1-1-1' },\n                { title: 'leaf 1-1-2' }\n              ]\n            },\n            {\n              title: 'tree 1-2',\n              expand: true,\n              children: [\n                { title: 'leaf 1-2-1' },\n                { title: 'leaf 1-2-2' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n}\n<\/script>\n",async:"<Tree :data=\"data\" @loadData=\"loadData\"></Tree>\n<script>\nexport default {\n  data() {\n    return {\n      data: [{\n        title: 'children',\n        loading: false,\n        children: []\n      }],\n    }\n  },\n  methods: {\n    loadData(item, callback) {\n      //模拟异步请求\n      setTimeout(() => {\n        let data = [\n          {\n            title: 'children',\n            loading: false,\n            children: []\n          },\n          {\n            title: 'children',\n            loading: false,\n            children: []\n          }\n        ];\n        callback(data);\n      }, 1000)\n    }\n  }\n}\n<\/script>\n",icon:"<Tree :data=\"data\" checkbox></Tree>\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        {\n          title: 'tree 1',\n          expand: true,\n          icon: 'fireball',\n          children: [\n            {\n              title: 'tree 1-1',\n              expand: true,\n              icon: 'flag',\n              children: [\n                { title: 'leaf 1-1-1', icon: 'ios-flame' },\n                { title: 'leaf 1-1-2', icon: 'ios-folder' }\n              ]\n            },\n            {\n              title: 'tree 1-2',\n              expand: true,\n              icon: 'flag',\n              children: [\n                { title: 'leaf 1-2-1', icon: 'ios-folder' },\n                { title: 'leaf 1-2-2', icon: 'ios-folder' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n}\n<\/script>"},d=l,i={components:{Demo:a.a},data:function(){return{code:d,data:[{title:"tree 1",expand:!0,children:[{title:"tree 1-1",expand:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"tree 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-2"}]}]}],data1:[{title:"tree 1",expand:!0,children:[{title:"tree 1-1",expand:!0,children:[{title:"leaf 1-1-1",disabled:!0},{title:"leaf 1-1-2"}]},{title:"tree 1-2",expand:!0,children:[{title:"leaf 1-2-1",expand:!0,children:[{title:"leaf 1-2-1-1"},{title:"leaf 1-2-1-2"}]},{title:"leaf 1-2-2"}]}]}],data2:[{title:"children",loading:!1,children:[]}],data3:[{title:"tree 1",expand:!0,icon:"fireball",children:[{title:"tree 1-1",expand:!0,icon:"flag",children:[{title:"leaf 1-1-1",icon:"ios-flame"},{title:"leaf 1-1-2",icon:"ios-folder"}]},{title:"tree 1-2",expand:!0,icon:"flag",children:[{title:"leaf 1-2-1",icon:"ios-folder"},{title:"leaf 1-2-2",icon:"ios-folder"}]}]}]}},methods:{select:function(t){console.log(t)},loadData:function(t,e){setTimeout(function(){e([{title:"children",loading:!1,children:[]},{title:"children",loading:!1,children:[]}])},1e3)}}},o=n("KHd+"),r=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Tree 树形控件")]),t._v(" "),n("p",[t._v("文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基本用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Tree",{attrs:{data:t.data}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("最简单的用法，展示可选中，默认展开功能。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"可勾选"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Tree",{attrs:{data:t.data1,checkbox:""},on:{check:t.select}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置属性\n        "),n("code",[t._v("checkbox")]),t._v(" 可以对节点进行勾选。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.checked))])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"异步加载"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Tree",{attrs:{data:t.data2},on:{"load-data":t.loadData}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("点击展开节点，动态加载数据。。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.async))])]),t._v(" "),n("Demo",{attrs:{title:"自定义图标"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Tree",{attrs:{data:t.data3}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以针对不同的节点定制图标。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.icon))])])],1)],1),t._v(" "),n("h3",[t._v("TreeNode API")]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("Tree API")]),t._v(" "),t._m(1)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("可嵌套的节点属性的数组，生成 tree 的数据")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[]")])]),t._v(" "),n("tr",[n("td",[t._v("checkbox")]),t._v(" "),n("td",[t._v("是否显示多选框")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("load-data")]),t._v(" "),n("td",[t._v("异步加载数据的方法")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("select")]),t._v(" "),n("td",[t._v("点击树节点时触发,当前已选中的节点数组")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("check")]),t._v(" "),n("td",[t._v("点击复选框时触发,当前已勾选节点的数组")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("expand")]),t._v(" "),n("td",[t._v("展开和收起子列表时触发,当前已勾选节点的数组")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("节点标题")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("expand")]),t._v(" "),n("td",[t._v("是否展开节点")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("是否禁用节点")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("selected")]),t._v(" "),n("td",[t._v("是否点选节点")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("checked")]),t._v(" "),n("td",[t._v("节点是否勾选")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("children")]),t._v(" "),n("td",[t._v("子节点")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("-")])])])])}],!1,null,null,null);e.default=r.exports}}]);