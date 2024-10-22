/*!
 * kui-vue v3.4.7
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[6582],{6447:function(t,n,e){e.r(n),e.d(n,{default:function(){return S}});var o=function(){this._self._c;return this._m(0)};o._withStripped=!0;var l=e(1900),i=(0,l.Z)({},o,[function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-body"},[n("h1",[t._v("Input 输入框")]),t._v(" "),n("p",[t._v("通过鼠标或键盘输入内容，是最基础的表单域的包装。")]),t._v(" "),n("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),n("ul",[n("li",[t._v("需要用户输入表单域内容时。")]),t._v(" "),n("li",[t._v("提供组合型输入框，带搜索的输入框，还可以进行大小选择。")])]),t._v(" "),n("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("Space",[n("Button",{attrs:{type:"primary"},on:{click:function(n){t.visible=!0}}},[t._v("打开弹窗")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.custom=!0}}},[t._v("自定义")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.visible1=!0}}},[t._v("点蒙层关闭")]),t._v(" "),n("Modal",{attrs:{title:null,footer:null,showClose:!1},model:{value:t.custom,callback:function(n){t.custom=n},expression:"custom"}},[n("Space",{staticStyle:{width:"100%"},attrs:{direction:"vertical"}},[n("h2",[t._v("我是一个标题")]),t._v(" "),n("div",[n("Button",{on:{click:function(n){t.custom=!1}}},[t._v("Close")])],1)])],1),t._v(" "),n("Modal",{attrs:{title:"基本对话框"},on:{ok:t.okHandle},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[n("p",[t._v("This is the content of a basic modal.")]),t._v(" "),n("p",[t._v("More content...")])]),t._v(" "),n("Modal",{attrs:{title:"基本对话框","mask-closable":!0},on:{ok:function(n){t.visible1=!1}},model:{value:t.visible1,callback:function(n){t.visible1=n},expression:"visible1"}},[n("p",[t._v("This is the content of a basic modal.")]),t._v(" "),n("p",[t._v("More content...")])])],1)],1),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("基础用法")])]),t._v(" "),n("p",[t._v("使用 "),n("code",{pre:!0},[t._v("v-model")]),t._v(" 进行数据双向绑定")])]),t._v(" "),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Button @click="visible=true" type="primary">打开弹窗</Button>\n    <Button @click="custom=true" type="primary">自定义</Button>\n    <Button @click="visible1=true" type="primary">点蒙层关闭</Button>\n\n    <Modal :title="null" \n      :footer="null"\n      :showClose="false"\n      v-model="custom">\n        <Space direction="vertical" style="width:100%">\n          <h2>我是一个标题</h2>\n          <div><Button @click="custom=false">Close</Button></div>\n        </Space>\n    </Modal>\n\n    <Modal title="基本对话框" v-model="visible" @ok="okHandle">\n      <p>This is the content of a basic modal.</p>\n      <p>More content...</p>\n    </Modal>\n\n    <Modal title="基本对话框" v-model="visible1" @ok="visible1=false" :mask-closable="true">\n      <p>This is the content of a basic modal.</p>\n      <p>More content...</p>\n    </Modal>\n  </Space>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      visible:false,\n      custom:false,\n      visible1:false\n    }\n  },\n  methods:{\n    okHandle(){\n      this.visible = false\n    }\n  }\n} \n<\/script>\n\n')])])])],2)};s._withStripped=!0;var a={data(){return{visible:!1,custom:!1,visible1:!1}},methods:{okHandle(){this.visible=!1}}},r=(0,l.Z)(a,s,[],!1,null,null,null).exports,v=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("Space",[n("Button",{attrs:{type:"primary"},on:{click:function(n){t.visible1=!0}}},[t._v("宽300px")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.visible2=!0}}},[t._v("自定义页脚")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.visible3=!0}}},[t._v("国际化")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.visible4=!0}}},[t._v("异步关闭")]),t._v(" "),n("Modal",{attrs:{title:"Width 300px",width:300},on:{ok:function(n){t.visible1=!1}},model:{value:t.visible1,callback:function(n){t.visible1=n},expression:"visible1"}},[n("p",[t._v("content")])]),t._v(" "),n("Modal",{attrs:{title:"Custom footer"},model:{value:t.visible2,callback:function(n){t.visible2=n},expression:"visible2"}},[n("p",[t._v("content")]),t._v(" "),n("template",{slot:"footer"},[n("Button",{attrs:{icon:t.Save,type:"primary"},on:{click:function(n){t.visible2=!1}}},[t._v("Save")])],1)],2),t._v(" "),n("Modal",{attrs:{title:"Are you ok ?","ok-text":"Ok","cancel-text":"Cancel"},on:{ok:t.okHandle},model:{value:t.visible3,callback:function(n){t.visible3=n},expression:"visible3"}},[n("p",[t._v("Yes , I'm fine !")])]),t._v(" "),n("Modal",{attrs:{title:"提交表单",loading:t.loading},on:{ok:t.submit,close:t.close},model:{value:t.visible4,callback:function(n){t.visible4=n},expression:"visible4"}},[n("p",[t._v("Name："),n("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input your name"}})],1)])],1)],1),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"自定义",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[t._v("自定义")])]),t._v(" "),n("p",[t._v("自定义 "),n("code",{pre:!0},[t._v("Modal")])])]),t._v(" "),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Button @click="visible1=true" type="primary">宽300px</Button>\n    <Button @click="visible2=true" type="primary">自定义页脚</Button>\n    <Button @click="visible3=true" type="primary">国际化</Button>\n    <Button @click="visible4=true" type="primary">异步关闭</Button>\n    <Modal title="Width 300px" v-model="visible1" :width="300" @ok="visible1=false">\n      <p>content</p>\n    </Modal>\n\n    <Modal title="Custom footer" v-model="visible2">\n      <p>content</p>\n      <template slot="footer">\n        <Button :icon="Save" @click="visible2=false" type="primary">Save</Button>\n      </template> \n    </Modal>\n\n    <Modal title="Are you ok ?" v-model="visible3" ok-text="Ok" cancel-text="Cancel" @ok="okHandle">\n      <p>Yes , I\'m fine !</p>\n    </Modal>\n\n    <Modal title="提交表单" v-model="visible4" :loading="loading" @ok="submit" @close="close">\n      <p>Name：<Input placeholder="Please input your name" style="width:200px"/></p>\n    </Modal>\n  </Space>\n</template>\n<script>\nimport { Save } from "kui-icons";\nexport default{\n  data() {\n    return {\n      Save,\n      visible1:false,\n      visible2:false,\n      visible3:false,\n      visible4:false,\n      loading:false,\n    }\n  },\n  methods:{\n    okHandle(){\n      this.visible3 = false\n    },  \n    submit(){\n      this.loading = true\n      this.timer = setTimeout(e=>{\n        this.loading = false\n        this.visible4 = false\n      },2000)\n    },\n    close(){\n      this.loading = false\n      clearTimeout(this.timer)\n    }\n  }\n} \n<\/script>\n\n')])])])],2)};v._withStripped=!0;var c=e(2324),_={data(){return{Save:c.Save,visible1:!1,visible2:!1,visible3:!1,visible4:!1,loading:!1}},methods:{okHandle(){this.visible3=!1},submit(){this.loading=!0,this.timer=setTimeout((t=>{this.loading=!1,this.visible4=!1}),2e3)},close(){this.loading=!1,clearTimeout(this.timer)}}},d=(0,l.Z)(_,v,[],!1,null,null,null).exports,u=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("Space",[n("Button",{attrs:{type:"primary"},on:{click:function(n){t.show1=!0}}},[t._v("可以拖动")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.show2=!0}}},[t._v("居中显示")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.show3=!0}}},[t._v("顶部 200px")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.show4=!0}}},[t._v("最大化")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.show5=!0}}},[t._v("没有蒙层")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){t.show6=!0}}},[t._v("没有页脚")]),t._v(" "),n("Modal",{attrs:{title:"Draggable",draggable:""},on:{ok:function(n){t.show1=!1}},model:{value:t.show1,callback:function(n){t.show1=n},expression:"show1"}},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),n("Modal",{attrs:{title:"Centered",centered:""},on:{ok:function(n){t.show2=!1}},model:{value:t.show2,callback:function(n){t.show2=n},expression:"show2"}},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),n("Modal",{attrs:{title:"Top 200px",top:200},on:{ok:function(n){t.show3=!1}},model:{value:t.show3,callback:function(n){t.show3=n},expression:"show3"}},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),n("Modal",{attrs:{title:"Maximized",maximized:""},on:{ok:function(n){t.show4=!1}},model:{value:t.show4,callback:function(n){t.show4=n},expression:"show4"}},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),n("Modal",{attrs:{title:"Click mask dont't be close",mask:!1,"mask-closable":!1},on:{ok:function(n){t.show5=!1}},model:{value:t.show5,callback:function(n){t.show5=n},expression:"show5"}},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),n("Modal",{attrs:{title:"No footer",footer:null},on:{ok:function(n){t.show6=!1}},model:{value:t.show6,callback:function(n){t.show6=n},expression:"show6"}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)],1),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"其它属性",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它属性"}},[t._v("其它属性")])]),t._v(" "),n("p",[t._v("不需要页脚时，可以把 "),n("code",{pre:!0},[t._v("footer")]),t._v(" 为"),n("code",{pre:!0},[t._v("null")])])]),t._v(" "),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space>\n    <Button @click="show1=true" type="primary">可以拖动</Button>\n    <Button @click="show2=true" type="primary">居中显示</Button>\n    <Button @click="show3=true" type="primary">顶部 200px</Button>\n    <Button @click="show4=true" type="primary">最大化</Button>\n    <Button @click="show5=true" type="primary">没有蒙层</Button>\n    <Button @click="show6=true" type="primary">没有页脚</Button>\n\n    <Modal title="Draggable" v-model="show1" draggable @ok="show1=false">\n      {{text}}\n    </Modal>\n\n    <Modal title="Centered" v-model="show2" centered @ok="show2=false">\n      {{text}}\n    </Modal>\n\n    <Modal title="Top 200px" v-model="show3" :top="200" @ok="show3=false">\n      {{text}}\n    </Modal>\n\n    <Modal title="Maximized" v-model="show4" maximized @ok="show4=false">\n      {{text}}\n    </Modal>\n\n    <Modal title="Click mask dont\'t be close" v-model="show5" :mask="false" :mask-closable="false" @ok="show5=false">\n      {{text}}\n    </Modal>\n\n    <Modal title="No footer" v-model="show6" :footer="null" @ok="show6=false">\n      {{text}}\n    </Modal>\n  </Space>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      show1:false,\n      show2:false,\n      show3:false,\n      show4:false,\n      show5:false,\n      show6:false,\n      text : `A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; `\n    }\n  }\n} \n<\/script>\n\n')])])])],2)};u._withStripped=!0;var p={data(){return{show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,text:"A long time ago, In a beautiful kingdom, \n  there lived a young king and queen, \n  the people loved them so much; "}}},h=(0,l.Z)(p,u,[],!1,null,null,null).exports,m=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("Space",[n("Button",{on:{click:function(n){return t.show(0)}}},[t._v("Success")]),t._v(" "),n("Button",{attrs:{type:"danger"},on:{click:function(n){return t.show(1)}}},[t._v("Error")]),t._v(" "),n("Button",{on:{click:function(n){return t.show(2)}}},[t._v("Warning")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(n){return t.show(3)}}},[t._v("Info")]),t._v(" "),n("Button",{attrs:{icon:t.Moon},on:{click:function(n){return t.show(4)}}},[t._v("Custom icon")])],1)],1),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"全局模式",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局模式"}},[t._v("全局模式")])]),t._v(" "),n("p",[t._v("使用 全局模式")])]),t._v(" "),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <Space>\n    <Button @click=\"show(0)\">Success</Button>\n    <Button @click=\"show(1)\" type=\"danger\">Error</Button>\n    <Button @click=\"show(2)\">Warning</Button>\n    <Button @click=\"show(3)\" type=\"primary\">Info</Button>\n    <Button @click=\"show(4)\" :icon=\"Moon\">Custom icon</Button>\n  </Space>\n</template>\n<script>\nimport { Moon } from \"kui-icons\";\nexport default{\n  data() {\n    return {\n      Moon\n    }\n  },\n  methods:{\n    show(i){\n      let t =['操作成功','操作失败','警告警告','操作提示','《静夜思》']\n      let c = [\n        '恭喜你操作成功！',\n        '很遗憾，您可能没有权限！',\n        '此操作不可逆转，请谨慎！',\n        '你打开了一个窗口！',\n        '床前明月光，疑是地上霜，举头望明月，低头思故乡！'\n      ]\n      let m = ['success','error','warning','info']\n\n      i == 4 ?\n      this.$Modal.show({ \n        title: t[i], \n        content: c[i],\n        icon: Moon,\n        color: '#eccb23' \n      }) :\n      this.$Modal[m[i]]({ \n        title:t[i], \n        content:c[i] \n      })\n    },\n  }\n}\n<\/script>\n\n")])])])],2)};m._withStripped=!0;var f={data(){return{Moon:c.Moon}},methods:{show(t){let n=["操作成功","操作失败","警告警告","操作提示","《静夜思》"],e=["恭喜你操作成功！","很遗憾，您可能没有权限！","此操作不可逆转，请谨慎！","你打开了一个窗口！","床前明月光，疑是地上霜，举头望明月，低头思故乡！"];4==t?this.$Modal.show({title:n[t],content:e[t],icon:c.Moon,color:"#eccb23"}):this.$Modal[["success","error","warning","info"][t]]({title:n[t],content:e[t]})}}},k=(0,l.Z)(f,m,[],!1,null,null,null).exports,b=function(){var t=this,n=t._self._c;return n("Demo",[n("template",{slot:"component"},[n("Space",[n("Button",{on:{click:function(n){return t.confirm()}}},[t._v("标准调用")]),t._v(" "),n("Button",{on:{click:function(n){return t.custom()}}},[t._v("国际化")]),t._v(" "),n("Button",{on:{click:function(n){return t.Async()}}},[t._v("异步关闭")]),t._v(" "),n("Button",{on:{click:function(n){return t.closeAll()}}},[t._v("Close All")])],1)],1),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"提示框",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示框"}},[t._v("提示框")])]),t._v(" "),n("p",[t._v("全局的确认提示框，可以异步关闭")])]),t._v(" "),n("template",{slot:"code"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <Space>\n    <Button @click=\"confirm()\">标准调用</Button>\n    <Button @click=\"custom()\">国际化</Button>\n    <Button @click=\"Async()\">异步关闭</Button>\n    <Button @click=\"closeAll()\">Close All</Button>\n  </Space>\n</template>\n<script>\nexport default{\n  methods:{\n    confirm() {\n      this.$Modal.confirm({\n        title: '您确认要这么做吗',\n        content: '此操作不可逆转，谨慎！！！',\n        onOk: () => {\n          this.$Message.success('你点了确认')\n        },\n        onCancel: () => {\n          this.$Message.info('你点了取消')\n        }\n      })\n    },\n    custom() {\n      this.$Modal.confirm({\n        title: 'Are you Ok?',\n        content: 'Yes , I am fine, and you?',\n        okText: 'OK',\n        cancelText: 'Cancel'\n      })\n    },\n    Async() {\n      this.$Modal.confirm({\n        title: '您确认要这么做吗',\n        content: '此操作不可逆转，谨慎！！！',\n        onOk: () => {\n          return new Promise((resolve , reject)=>{\n            setTimeout(resolve,2000)\n          })\n        },\n        onCancel: () => {\n          //用户点了取消 应该中断 异步执行\n          clearTimeout(this.timer)\n        }\n      })\n    },\n    closeAll() {\n      for(var o = 0; o < 3; o++){\n        setTimeout(e=>{\n          this.$Modal.confirm({\n            title:'一次性弹出3个框',\n            content:'给你一个惊喜！',\n            cancelText:'全部关闭',\n            onCancel: () => {\n              this.$Modal.destroyAll()\n            },\n            onOk:()=>{\n              return new Promise((resolve , reject)=>{\n                setTimeout(resolve,2000)\n              })\n            }\n          })\n        },o*500)\n      }\n\n    },\n  }\n}\n<\/script>\n\n")])])])],2)};b._withStripped=!0;var w={methods:{confirm(){this.$Modal.confirm({title:"您确认要这么做吗",content:"此操作不可逆转，谨慎！！！",onOk:()=>{this.$Message.success("你点了确认")},onCancel:()=>{this.$Message.info("你点了取消")}})},custom(){this.$Modal.confirm({title:"Are you Ok?",content:"Yes , I am fine, and you?",okText:"OK",cancelText:"Cancel"})},Async(){this.$Modal.confirm({title:"您确认要这么做吗",content:"此操作不可逆转，谨慎！！！",onOk:()=>new Promise(((t,n)=>{setTimeout(t,2e3)})),onCancel:()=>{clearTimeout(this.timer)}})},closeAll(){for(var t=0;t<3;t++)setTimeout((t=>{this.$Modal.confirm({title:"一次性弹出3个框",content:"给你一个惊喜！",cancelText:"全部关闭",onCancel:()=>{this.$Modal.destroyAll()},onOk:()=>new Promise(((t,n)=>{setTimeout(t,2e3)}))})}),500*t)}}},y=(0,l.Z)(w,b,[],!1,null,null,null).exports,M=function(){this._self._c;return this._m(0)};M._withStripped=!0;var x=(0,l.Z)({},M,[function(){var t=this,n=t._self._c;return n("div",{staticClass:"markdown-body"},[n("h2",{attrs:{id:"api",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("对话框是否显示，可使用 v-model 双向绑定数据。")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("对话框标题")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("对话框宽度")]),t._v(" "),n("td",[t._v("Number, String")]),t._v(" "),n("td",[t._v("520")])]),t._v(" "),n("tr",[n("td",[t._v("ok-text")]),t._v(" "),n("td",[t._v("确定按钮文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("确定")])]),t._v(" "),n("tr",[n("td",[t._v("cancel-text")]),t._v(" "),n("td",[t._v("取消按钮文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("取消")])]),t._v(" "),n("tr",[n("td",[t._v("draggable")]),t._v(" "),n("td",[t._v("弹框是否可拖动, confirm模式不可用")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("centered")]),t._v(" "),n("td",[t._v("窗口是否可以居中 , confirm模式不可用")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("maximized")]),t._v(" "),n("td",[t._v("弹框是否可以最大化显示 , confirm模式不可用")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("mask-closable")]),t._v(" "),n("td",[t._v("是否点击遮罩关闭弹窗, 为否时Esc键将失效")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("ok")]),t._v(" "),n("td",[t._v("点击确定的回调，"),n("code",{pre:!0},[t._v("注意：不会关闭 Modal ")])]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("cancel")]),t._v(" "),n("td",[t._v("点击取消的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("close")]),t._v(" "),n("td",[t._v("窗口关闭的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])]),t._v(" "),n("h2",{attrs:{id:"modal.method()",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modal.method()"}},[t._v("Modal.method()")])]),t._v(" "),n("p",[t._v("组件提供了一些静态方法，使用方式如下")]),t._v(" "),n("ul",[n("li",[t._v("this.$Modal.info(options)")]),t._v(" "),n("li",[t._v("this.$Modal.success(options)")]),t._v(" "),n("li",[t._v("this.$Modal.warning(options)")]),t._v(" "),n("li",[t._v("this.$Modal.error(options)")]),t._v(" "),n("li",[t._v("this.$Modal.show(options)")]),t._v(" "),n("li",[t._v("this.$Modal.confirm(options)")])]),t._v(" "),n("p",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),n("ul",[n("li",[t._v("this.$Modal.show(options)")]),t._v(" "),n("li",[t._v("this.$Modal.destroyAll()")])]),t._v(" "),n("p",[t._v("参数 options 为对象，具体说明如下：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("对话框标题")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("对话框内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("ok-text")]),t._v(" "),n("td",[t._v("确定按钮文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("确定")])]),t._v(" "),n("tr",[n("td",[t._v("cancel-text")]),t._v(" "),n("td",[t._v("取消按钮文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("取消")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("弹框的图标，type为toast可用 ，默认可选值为success，warning, error, info, 也可以自定义，参照 "),n("a",{attrs:{href:"/components/icon"}},[t._v("Icon")]),t._v("值")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",[t._v("弹框的图标的颜色，type为toast可用")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("onOk")]),t._v(" "),n("td",[t._v("点击确定的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("onCancel")]),t._v(" "),n("td",[t._v("点击取消的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])])}],!1,null,null,null).exports,B={render(){const t=arguments[0];return t("div",{class:"demo-modal"},[t(i),t(r),t(d),t(h),t(k),t(y),t(x)])}},g=B,S=(0,l.Z)(g,undefined,undefined,!1,null,null,null).exports}}]);