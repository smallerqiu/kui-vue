/*!
 * kui-vue v3.4.2
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[276],{1287:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=function(){this._self._c;return this._m(0)};n._withStripped=!0;var o=a(1900),r=(0,o.Z)({},n,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Tag 标签")]),t._v(" "),e("p",[t._v("进行标记和分类的小标签。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("ul",[e("li",[t._v("用于标记事物的属性和维度。")]),t._v(" "),e("li",[t._v("进行分类。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,l=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",[e("Tag",[t._v("标签1")]),t._v(" "),e("Tag",[t._v("标签2")]),t._v(" "),e("Tag",[t._v("标签3")]),t._v(" "),e("Tag",{attrs:{closeable:""}},[t._v("标签4")])],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("closeable")]),t._v(" 显示关闭按钮，点击隐藏标签，触发 "),e("code",{pre:!0},[t._v("close")]),t._v(" 回调")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <Space>\n    <Tag>标签1</Tag>\n    <Tag>标签2</Tag>\n    <Tag>标签3</Tag>\n    <Tag closeable>标签4</Tag>\n  </Space>\n</template>\n\n")])])])],2)};l._withStripped=!0;var s=(0,o.Z)({},l,[],!1,null,null,null).exports,c=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",[e("Tag",[t._v("标签1")]),t._v(" "),e("Tag",{attrs:{closeable:"",size:"middle"}},[t._v("标签2")]),t._v(" "),e("Tag",{attrs:{closeable:"",size:"large"}},[t._v("标签3")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Tag",{attrs:{closeable:"",shape:"circle"}},[t._v("标签1")]),t._v(" "),e("Tag",{attrs:{closeable:"",shape:"circle",size:"middle"}},[t._v("标签2")]),t._v(" "),e("Tag",{attrs:{closeable:"",shape:"circle",size:"large"}},[t._v("标签3")])],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"尺寸和形状",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尺寸和形状"}},[t._v("尺寸和形状")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("size")]),t._v(" 可控尺寸 ,")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Tag>标签1</Tag>\n    <Tag closeable size="middle">标签2</Tag>\n    <Tag closeable size="large">标签3</Tag>\n    <br/>\n    <br/>\n    <Tag closeable shape="circle">标签1</Tag>\n    <Tag closeable shape="circle" size="middle">标签2</Tag>\n    <Tag closeable shape="circle" size="large">标签3</Tag>\n  </Space>\n</template>\n\n')])])])],2)};c._withStripped=!0;var i=(0,o.Z)({},c,[],!1,null,null,null).exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",[e("Tag",{attrs:{icon:t.LogoTwitter,color:"#55acee"}},[t._v("Twitter")]),t._v(" "),e("Tag",{attrs:{icon:t.LogoYoutube,color:"#cd201f"}},[t._v("油管")]),t._v(" "),e("Tag",{attrs:{icon:t.LogoQq,color:"red"}},[t._v("QQ")]),t._v(" "),e("Tag",{attrs:{icon:t.LogoWechat,closeable:"",color:"green"}},[t._v("微信")])],1)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"图标",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("图标")])]),t._v(" "),e("p",[t._v("可以设置 icon 属性，或者直接在 Tag 内使用 Icon 组件。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Tag :icon="LogoTwitter" color="#55acee">Twitter</Tag>\n    <Tag :icon="LogoYoutube" color="#cd201f">油管</Tag>\n    <Tag :icon="LogoQq" color="red">QQ</Tag>\n    <Tag :icon="LogoWechat" closeable color="green">微信</Tag>\n  </Space>\n</template>\n<script>\nimport { LogoTwitter , LogoYoutube , LogoQq , LogoWechat} from \'kui-icons\'\nexport default{\n  data(){\n    return{\n      LogoTwitter , \n      LogoYoutube,\n      LogoWechat, \n      LogoQq\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};v._withStripped=!0;var _=a(2324),p={data(){return{LogoTwitter:_.LogoTwitter,LogoYoutube:_.LogoYoutube,LogoWechat:_.LogoWechat,LogoQq:_.LogoQq}}},g=(0,o.Z)(p,v,[],!1,null,null,null).exports,u=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("h4",{staticStyle:{"margin-bottom":"16px"}},[t._v("\n    Presets:\n  ")]),t._v(" "),e("Space",t._l(t.colors,(function(a,n){return e("Tag",{key:n,attrs:{color:a}},[t._v(t._s(a))])})),1),t._v(" "),e("h4",{staticStyle:{margin:"16px 0"}},[t._v("\n    Custom:\n  ")]),t._v(" "),e("Space",[e("Tag",{attrs:{color:"#c20"}},[t._v("#c20")]),t._v(" "),e("Tag",{attrs:{color:"#39f"}},[t._v("#39f")]),t._v(" "),e("Tag",{attrs:{color:"#e3f"}},[t._v("#e3f")]),t._v(" "),e("Tag",{attrs:{color:"#6c0"}},[t._v("#6c0")])],1)],1)]),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"多彩标签",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多彩标签"}},[t._v("多彩标签")])]),t._v(" "),e("p",[t._v("多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div>\n    <h4 style=\"margin-bottom: 16px\">\n      Presets:\n    </h4>\n    <Space>\n      <Tag :color=\"color\" v-for=\"(color,i) in colors\" :key=\"i\">{{color}}</Tag> \n    </Space>\n    <h4 style=\"margin:16px 0\">\n      Custom:\n    </h4>\n    <Space>\n      <Tag color=\"#c20\">#c20</Tag>\n      <Tag color=\"#39f\">#39f</Tag>\n      <Tag color=\"#e3f\">#e3f</Tag>\n      <Tag color=\"#6c0\">#6c0</Tag>\n    </Space>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      colors:[\n      'pink',\n      'red',\n      'yellow',\n      'orange',\n      'cyan',\n      'green',\n      'blue',\n      'purple',\n      'geekblue',\n      'magenta',\n      'volcano',\n      'gold',\n      'lime',\n      ]\n    }\n  }\n} \n<\/script>\n\n")])])])],2)};u._withStripped=!0;var d={data(){return{colors:["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"]}}},h=(0,o.Z)(d,u,[],!1,null,null,null).exports,m=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",[t._l(t.tags,(function(a,n){return e("Tag",{key:a,attrs:{color:"blue",closeable:""}},[t._v(t._s(a))])})),t._v(" "),e("Input",{directives:[{name:"show",rawName:"v-show",value:t.showInput,expression:"showInput"}],ref:"input",staticStyle:{width:"81px"},attrs:{size:"small",value:t.tag},on:{blur:t.add}}),t._v(" "),e("Button",{directives:[{name:"show",rawName:"v-show",value:!t.showInput,expression:"!showInput"}],attrs:{size:"small",icon:t.Bookmark},on:{click:t.show}},[t._v("New Tag")])],2)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"动态添加和删除",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态添加和删除"}},[t._v("动态添加和删除")])]),t._v(" "),e("p",[t._v("通过 "),e("code",{pre:!0},[t._v("closeable")]),t._v(" 显示关闭按钮")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Tag color="blue" closeable v-for="(t,i) in tags" :key="t">{{t}}</Tag>\n    <Input v-show="showInput" @blur="add" size="small" style="width:81px" ref="input" :value="tag"/>\n    <Button @click="show" size="small" :icon="Bookmark" v-show="!showInput">New Tag</Button>\n  </Space>\n</template>\n<script>\nimport { Bookmark } from "kui-icons";\nexport default {\n  data() {\n    return {\n      Bookmark,\n      showInput:false,\n      tag:\'\',\n      tags:[\'Apple\',\'Banana\',\'Cat\',\'Dog\']\n    }\n  },\n  methods:{\n    show(){\n      this.showInput=true\n      this.$refs.input.focus()\n    },\n    add(e){\n      let value = e.target.value.trim()\n      if(value && this.tags.indexOf(value)===-1){\n        this.tags.push(value)\n      }\n      this.tag = \'\'\n      this.showInput = false\n    }\n  }\n}\n<\/script>\n\n')])])])],2)};m._withStripped=!0;a(7658);var T={data(){return{Bookmark:_.Bookmark,showInput:!1,tag:"",tags:["Apple","Banana","Cat","Dog"]}},methods:{show(){this.showInput=!0,this.$refs.input.focus()},add(t){let e=t.target.value.trim();e&&-1===this.tags.indexOf(e)&&this.tags.push(e),this.tag="",this.showInput=!1}}},f=(0,o.Z)(T,m,[],!1,null,null,null).exports,b=function(){this._self._c;return this._m(0)};b._withStripped=!0;var w=(0,o.Z)({},b,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"tag-api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag-api"}},[t._v("Tag API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("closeable")]),t._v(" "),e("td",[t._v("是否显示关闭按钮")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("标签的颜色")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("iconn")]),t._v(" "),e("td",[t._v("标签的图标")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("关闭标签的回调事件")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("按钮尺寸,可选值 "),e("code",{pre:!0},[t._v("small")]),t._v("、"),e("code",{pre:!0},[t._v("large")]),t._v("，默认不选")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,k={render(){const t=arguments[0];return t("div",[t(r),t(s),t(i),t(g),t(h),t(f),t(w)])}},S=k,x=(0,o.Z)(S,undefined,undefined,!1,null,null,null).exports}}]);