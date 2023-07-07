/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[5009],{9752:function(t,e,n){n.r(e),n.d(e,{default:function(){return at}});var s,o,a=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Image 图片")]),e("p",[t._v("可预览的图片。")]),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),e("ul",[e("li",[t._v("需要展示图片时使用。")]),e("li",[t._v("加载大图时显示 loading 或加载失败时容错处理。")])]),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],p=n(1001),c={},r=(0,p.Z)(c,a,l,!1,null,null,null),i=r.exports,d=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("k-image",{attrs:{width:120,src:"https://cdn.chuchur.com/upload/demo/test_300.jpg"}})],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),e("p",[t._v("简单的展示。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <k-image \n    :width="120" \n    src="https://cdn.chuchur.com/upload/demo/test_300.jpg"\n    />\n</template>\n\n')])])])],2)},h=[],u={},m=(0,p.Z)(u,d,h,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("k-image",{attrs:{width:120,src:"https://cdn.chuchur.com/upload/demo/test_300.jpg",origin:"https://cdn.chuchur.com/upload/demo/test.jpg"}})],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"加载大图",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载大图"}},[t._v("加载大图")])]),e("p",[t._v("初步显示缩略图，点击查看大图。")]),e("blockquote",[e("p",[t._v("图片加载过程中会显示loading")])])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <k-image \n    :width="120" \n    src="https://cdn.chuchur.com/upload/demo/test_300.jpg"\n    origin="https://cdn.chuchur.com/upload/demo/test.jpg"\n    />\n</template>\n\n')])])])],2)},_=[],C={},f=(0,p.Z)(C,v,_,!1,null,null,null),I=f.exports,b=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("k-image",{attrs:{width:120,src:"https://k-ui.cn/error.jpg",placeholder:"https://cdn.chuchur.com/img/thumb.png"}}),e("k-image",{attrs:{width:120,height:120,src:"https://k-ui.cn/error.jpg"}}),e("k-image",{attrs:{width:120,height:120,src:t.src}}),e("Button",{on:{click:t.loadOrigin}},[t._v("Load origin")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"容错处理",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容错处理"}},[t._v("容错处理")])]),e("p",[t._v("加载失败显示图像占位符。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>  \n  <div>\n    <k-image \n      :width="120"\n      src="https://k-ui.cn/error.jpg"\n      placeholder="https://cdn.chuchur.com/img/thumb.png"\n      />\n    <k-image \n      :width="120"\n      :height="120" \n      src="https://k-ui.cn/error.jpg"\n      />\n    <k-image \n      :width="120"\n      :height="120" \n      :src="src"\n      />\n    <Button @click="loadOrigin">Load origin</Button>\n  </div>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      src:\'https://cdn.chuchur.com/upload/demo/test_300.jpg\'\n    }\n  },\n  methods:{\n    loadOrigin(){\n      this.src = \'https://k-ui.cn/error.jpg\'\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},x=[],w={data(){return{src:"https://cdn.chuchur.com/upload/demo/test_300.jpg"}},methods:{loadOrigin(){this.src="https://k-ui.cn/error.jpg"}}},B=w,y=(0,p.Z)(B,b,x,!1,null,null,null),k=y.exports,j=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("ImageGroup",[e("k-image",{attrs:{width:120,src:"https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg"}}),e("k-image",{attrs:{width:120,src:"https://cdn.chuchur.com/upload/demo/kui-react.jpg"}})],1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"多张图片预览",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多张图片预览"}},[t._v("多张图片预览")])]),e("p",[t._v("点击左右切换按钮可以预览多张图片。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <ImageGroup>\n    <k-image \n      :width="120" \n      src="https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg"\n      />\n    <k-image \n    :width="120" \n    src="https://cdn.chuchur.com/upload/demo/kui-react.jpg"\n    />\n  </ImageGroup>\n</template>\n\n')])])])],2)},A=[],R={},S=(0,p.Z)(R,j,A,!1,null,null,null),$=S.exports,P=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[t._v(" 单张图： "),e("k-image",{attrs:{width:120,src:"https://cdn.chuchur.com/upload/demo/test_300.jpg"},on:{close:t.close}},[e("template",{slot:"tool"},[e("Icon",{attrs:{type:t.Heart,color:"#3a95ff"},on:{click:t.showPanel}})],1),e("div",{staticClass:"img-panel",attrs:{slot:"panel"},slot:"panel"},[e("h2",[t._v("详情")]),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.IconImage}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v("IMG_202005050505.jpg")]),e("p",{staticClass:"sub"},[t._v("3120x4160 , 2.8MB")])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Calendar}})],1),e("Col",[e("p",{staticClass:"title"},[t._v("时间：2020年5月5日")]),e("p",{staticClass:"sub"},[t._v("星期五，下午05:05")])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Location}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v("武汉.江滩")]),e("p",{staticClass:"sub"},[t._v("湖北省武汉市汉口江滩")])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Camera}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v("相机：Iphone 12 Pro")]),e("p",{staticClass:"sub"},[t._v("2048/1000000s ISO-9999")])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Ribbon}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v("镜头：索尼")]),e("p",{staticClass:"sub"},[t._v("f/10 10.5mm")])])],1)],1)],2),e("br"),t._v(" 图片组： "),e("ImageGroup",t._l(t.imgs,(function(n,s){return e("k-image",{key:s,attrs:{width:120,src:n.src,showPanel:!0},on:{switch:t.onSwitch,close:t.close}},[e("template",{slot:"tool"},[e("Icon",{attrs:{type:t.Heart,color:"#3a95ff"},on:{click:t.showPanel}})],1),e("div",{staticClass:"img-panel",attrs:{slot:"panel"},slot:"panel"},[e("h2",[t._v("详情")]),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.IconImage}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v(t._s(n.title))]),e("p",{staticClass:"sub"},[t._v(t._s(n.desc))])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Calendar}})],1),e("Col",[e("p",{staticClass:"title"},[t._v("时间："+t._s(n.date))]),e("p",{staticClass:"sub"},[t._v(t._s(n.dateSub))])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Location}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v(t._s(n.address))]),e("p",{staticClass:"sub"},[t._v(t._s(n.addressSub))])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Camera}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v("相机："+t._s(n.camera))]),e("p",{staticClass:"sub"},[t._v(t._s(n.cameraSub))])])],1),e("Row",{attrs:{type:"flex"}},[e("Col",[e("Icon",{attrs:{type:t.Ribbon}})],1),e("Col",{attrs:{flex:"1"}},[e("p",{staticClass:"title"},[t._v("镜头："+t._s(n.disc))]),e("p",{staticClass:"sub"},[t._v(t._s(n.discSub))])])],1)],1)],2)})),1)],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"扩展",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("扩展")])]),e("p",[t._v("可以扩展自定工具和面板。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  单张图：\n  <k-image \n    :width="120" \n    src="https://cdn.chuchur.com/upload/demo/test_300.jpg"\n    @close="close"\n    >\n    <template slot="tool">\n      <Icon :type="Heart" color="#3a95ff" @click="showPanel"/>\n    </template>\n    <div slot="panel" class="img-panel">\n      <h2>详情</h2>\n      <Row type="flex">\n        <Col><Icon :type="IconImage"/></Col>\n        <Col flex="1">\n          <p class="title">IMG_202005050505.jpg</p>\n          <p class="sub">3120x4160 , 2.8MB</p>\n        </Col>\n      </Row>\n      <Row type="flex">\n        <Col><Icon :type="Calendar" /></Col>\n        <Col>\n          <p class="title">时间：2020年5月5日</p>\n          <p class="sub">星期五，下午05:05</p>\n        </Col>\n      </Row>\n      <Row type="flex">\n        <Col><Icon :type="Location" /></Col>\n        <Col  flex="1">\n          <p class="title">武汉.江滩</p>\n          <p class="sub">湖北省武汉市汉口江滩</p>\n        </Col>\n      </Row>\n      <Row type="flex">\n        <Col><Icon :type="Camera" /></Col>\n        <Col  flex="1">\n          <p class="title">相机：Iphone 12 Pro</p>\n          <p class="sub">2048/1000000s ISO-9999</p>\n        </Col>\n      </Row>\n      <Row type="flex">\n        <Col><Icon :type="Ribbon" /></Col>\n        <Col  flex="1">\n          <p class="title">镜头：索尼</p>\n          <p class="sub">f/10 10.5mm</p>\n        </Col>\n      </Row>\n    </div>\n  </k-image>\n  <br/>\n  图片组：\n  <ImageGroup>\n    <k-image \n      :width="120" \n      v-for="(img,i) in imgs"\n      :key="i"\n      :src="img.src"\n      @switch="onSwitch"\n      @close="close"\n      :showPanel="true"\n      >\n      <template slot="tool">\n        <Icon :type="Heart" color="#3a95ff" @click="showPanel"/>\n      </template>\n      <div slot="panel" class="img-panel">\n        <h2>详情</h2>\n        <Row type="flex">\n          <Col><Icon :type="IconImage"/></Col>\n          <Col flex="1">\n            <p class="title">{{img.title}}</p>\n            <p class="sub">{{img.desc}}</p>\n          </Col>\n        </Row>\n        <Row type="flex">\n          <Col><Icon :type="Calendar" /></Col>\n          <Col>\n            <p class="title">时间：{{img.date}}</p>\n            <p class="sub">{{img.dateSub}}</p>\n          </Col>\n        </Row>\n        <Row type="flex">\n          <Col><Icon :type="Location" /></Col>\n          <Col  flex="1">\n            <p class="title">{{img.address}}</p>\n            <p class="sub">{{img.addressSub}}</p>\n          </Col>\n        </Row>\n        <Row type="flex">\n          <Col><Icon :type="Camera" /></Col>\n          <Col  flex="1">\n            <p class="title">相机：{{img.camera}}</p>\n            <p class="sub">{{img.cameraSub}}</p>\n          </Col>\n        </Row>\n        <Row type="flex">\n          <Col><Icon :type="Ribbon" /></Col>\n          <Col  flex="1">\n            <p class="title">镜头：{{img.disc}}</p>\n            <p class="sub">{{img.discSub}}</p>\n          </Col>\n        </Row>\n      </div>\n    </k-image>\n  </ImageGroup>\n</template>\n<script>\nimport { Ribbon ,Heart, IconImage, Calendar, Location, Camera } from \'kui-icons\'\nexport default{\n  data() {\n    return {\n      Ribbon ,Heart, IconImage, Calendar, Location, Camera,\n      imgs:[\n        {\n          src:\'https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg\',\n          title:\'kui for vue.js.jpg\',\n          desc: \'一套基于Vuejs的桌面UI组件库\',\n          date: \'2017年8月7日\',\n          dateSub: \'星期五，下午05:05\',\n          address:\'广东.深圳\',\n          addressSub:\'广东省深圳市国际软件园\',\n          camera:\'javascript\',\n          cameraSub:\'vuejs\',\n          disc:\'VUE\',\n          discSub:\'VUEJS 2.x\',\n        },\n        {\n          src:\'https://cdn.chuchur.com/upload/demo/kui-react.jpg\',\n          title:\'kui for react.jpg\',\n          desc: \'一套基于Reactjs的桌面UI组件库\',\n          date: \'2018年10月7日\',\n          dateSub: \'星期五，下午05:05\',\n          address:\'湖北.武汉\',\n          addressSub:\'湖北省武汉市软件产业园\',\n          camera:\'javascript\',\n          cameraSub:\'reactjs\',\n          disc:\'REACT\',\n          discSub:\'REACTJS 16.x\'\n        }\n      ]\n    }\n  },\n  methods:{\n    onSwitch(index){\n      console.log(index)\n    },\n    close(){\n      this.$Message.success(\'close\')\n    },\n    showPanel(){\n      this.$Image.togglePanel()\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},O=[],G=n(5118),M={data(){return{Ribbon:G.Ribbon,Heart:G.Heart,IconImage:G.IconImage,Calendar:G.Calendar,Location:G.Location,Camera:G.Camera,imgs:[{src:"https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg",title:"kui for vue.js.jpg",desc:"一套基于Vuejs的桌面UI组件库",date:"2017年8月7日",dateSub:"星期五，下午05:05",address:"广东.深圳",addressSub:"广东省深圳市国际软件园",camera:"javascript",cameraSub:"vuejs",disc:"VUE",discSub:"VUEJS 2.x"},{src:"https://cdn.chuchur.com/upload/demo/kui-react.jpg",title:"kui for react.jpg",desc:"一套基于Reactjs的桌面UI组件库",date:"2018年10月7日",dateSub:"星期五，下午05:05",address:"湖北.武汉",addressSub:"湖北省武汉市软件产业园",camera:"javascript",cameraSub:"reactjs",disc:"REACT",discSub:"REACTJS 16.x"}]}},methods:{onSwitch(t){console.log(t)},close(){this.$Message.success("close")},showPanel(){this.$Image.togglePanel()}}},H=M,L=(0,p.Z)(H,P,O,!1,null,null,null),E=L.exports,V=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[t._v(" 单张图："),e("Button",{attrs:{size:"small"},on:{click:t.openImage}},[t._v("Open Image")]),e("br"),e("br"),t._v(" 图片组："),e("Button",{attrs:{size:"small"},on:{click:t.openImageGroup}},[t._v("Open Image Group")])],1),e("template",{slot:"description"},[e("h4",{attrs:{id:"扩展-/-全局",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展-/-全局"}},[t._v("扩展 / 全局")])]),e("p",[t._v("可以扩展自定工具和面板。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  单张图：<Button @click=\"openImage\" size=\"small\">Open Image</Button>\n  <br/>\n  <br/>\n  图片组：<Button @click=\"openImageGroup\" size=\"small\">Open Image Group</Button>\n</template>\n<script>\nimport { Heart ,IconImage, Calendar, Location, Camera, Ribbon } from \"kui-icons\";\nexport default{\n  methods:{\n    openImage(){\n      let h = this.$createElement\n      let options = {\n        src:'https://cdn.chuchur.com/upload/demo/test_300.jpg',\n        slots:{\n          tool: h('Icon',{ \n            props:{ type: Heart ,color:'#3a95ff' },\n            on:{\n              click:()=> this.$Image.togglePanel()\n            }\n          }),\n          panel: h('div',{class:'img-panel'},[\n            h('h2','详情'),\n            h('Row',{ props:{ type:'flex' } } ,[\n              h('Col',{}, [h('Icon',{ props: { type: IconImage } } )]),\n              h('Col',{ props: {flex:1 } }, [\n                h('p',{ class: 'title' },'IMG_202005050505.jpg' ),\n                h('p',{ class: 'sub' },'3120x4160 , 2.8MB' ),\n              ]),\n            ]),\n            h('Row',{ props:{ type:'flex' } } ,[\n              h('Col',{}, [h('Icon',{ props: { type: Calendar } } )]),\n              h('Col',{ props: {flex:1 } }, [\n                h('p',{ class: 'title' },'时间：2020年5月5日' ),\n                h('p',{ class: 'sub' },'星期五，下午05:05' ),\n              ]),\n            ]),\n            h('Row',{ props:{ type:'flex' } } ,[\n              h('Col',{}, [h('Icon',{ props: { type:Location } } )]),\n              h('Col',{ props: {flex:1 } }, [\n                h('p',{ class: 'title' },'武汉.江滩' ),\n                h('p',{ class: 'sub' },'湖北省武汉市汉口江滩' ),\n              ]),\n            ]),\n            h('Row',{ props:{ type:'flex' } } ,[\n              h('Col',{}, [h('Icon',{ props: { type: Camera } } )]),\n              h('Col',{ props: {flex:1 } }, [\n                h('p',{ class: 'title' },'相机：Iphone 12 Pro' ),\n                h('p',{ class: 'sub' },'2048/1000000s ISO-9999' ),\n              ]),\n            ]),\n            h('Row',{ props:{ type:'flex' } } ,[\n              h('Col',{}, [h('Icon',{ props: { type: Ribbon } } )]),\n              h('Col',{ props: {flex:1 } }, [\n                h('p',{ class: 'title' },'镜头：索尼' ),\n                h('p',{ class: 'sub' },'f/10 10.5mm' ),\n              ]),\n            ])\n          ])\n        }\n      }\n      this.$Image.show(options)\n    },\n    openImageGroup() {\n      const h = this.$createElement\n      const test =['AAAAAAAAAAAAAAAAAAAAAAAAAA','BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB']\n      const getOptions = (index)=> {\n        let options = {\n          index,\n          data:[\n            'https://cdn.chuchur.com/upload/demo/kui-react.jpg' ,\n            'https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg' ,\n          ],\n          slots:{\n            tool: h('Icon',{ \n              props:{ type: Heart ,color:'#3a95ff' },\n              on:{\n                click:()=> this.$Image.togglePanel()\n              }\n            }),\n            panel: h('div',{class:'img-panel'},[\n              h('h2',test[index]),\n            ])\n          },\n          on:{\n            switch:(i)=>{\n              let options = getOptions(i)\n              this.$Image.show(options)\n            }\n          }\n        }\n\n        return options;\n      }\n\n      let options = getOptions(0)\n      this.$Image.show(options)\n    },\n    close(){\n      this.$Message.success('close')\n    },\n    showPanel(){\n      this.$Image.togglePanel()\n    }\n  }\n}\n<\/script>\n\n")])])])],2)},Z=[],N={methods:{openImage(){let t=this.$createElement,e={src:"https://cdn.chuchur.com/upload/demo/test_300.jpg",slots:{tool:t("Icon",{props:{type:G.Heart,color:"#3a95ff"},on:{click:()=>this.$Image.togglePanel()}}),panel:t("div",{class:"img-panel"},[t("h2","详情"),t("Row",{props:{type:"flex"}},[t("Col",{},[t("Icon",{props:{type:G.IconImage}})]),t("Col",{props:{flex:1}},[t("p",{class:"title"},"IMG_202005050505.jpg"),t("p",{class:"sub"},"3120x4160 , 2.8MB")])]),t("Row",{props:{type:"flex"}},[t("Col",{},[t("Icon",{props:{type:G.Calendar}})]),t("Col",{props:{flex:1}},[t("p",{class:"title"},"时间：2020年5月5日"),t("p",{class:"sub"},"星期五，下午05:05")])]),t("Row",{props:{type:"flex"}},[t("Col",{},[t("Icon",{props:{type:G.Location}})]),t("Col",{props:{flex:1}},[t("p",{class:"title"},"武汉.江滩"),t("p",{class:"sub"},"湖北省武汉市汉口江滩")])]),t("Row",{props:{type:"flex"}},[t("Col",{},[t("Icon",{props:{type:G.Camera}})]),t("Col",{props:{flex:1}},[t("p",{class:"title"},"相机：Iphone 12 Pro"),t("p",{class:"sub"},"2048/1000000s ISO-9999")])]),t("Row",{props:{type:"flex"}},[t("Col",{},[t("Icon",{props:{type:G.Ribbon}})]),t("Col",{props:{flex:1}},[t("p",{class:"title"},"镜头：索尼"),t("p",{class:"sub"},"f/10 10.5mm")])])])}};this.$Image.show(e)},openImageGroup(){const t=this.$createElement,e=["AAAAAAAAAAAAAAAAAAAAAAAAAA","BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"],n=s=>{let o={index:s,data:["https://cdn.chuchur.com/upload/demo/kui-react.jpg","https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg"],slots:{tool:t("Icon",{props:{type:G.Heart,color:"#3a95ff"},on:{click:()=>this.$Image.togglePanel()}}),panel:t("div",{class:"img-panel"},[t("h2",e[s])])},on:{switch:t=>{let e=n(t);this.$Image.show(e)}}};return o};let s=n(0);this.$Image.show(s)},close(){this.$Message.success("close")},showPanel(){this.$Image.togglePanel()}}},U=N,D=(0,p.Z)(U,V,Z,!1,null,null,null),z=D.exports,J=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("div",[e("Button",{on:{click:t.open}},[t._v("Open Image")]),e("Button",{on:{click:t.openMedia}},[t._v("Open Media")]),e("Button",{on:{click:t.openGroup}},[t._v("Open Image group")])],1)]),e("template",{slot:"description"},[e("h4",{attrs:{id:"全局加载",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局加载"}},[t._v("全局加载")])]),e("p",[t._v("使用 全局模式。")])]),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <div>\n    <Button @click=\"open\">Open Image</Button>\n    <Button @click=\"openMedia\">Open Media</Button>\n    <Button @click=\"openGroup\">Open Image group</Button>\n  </div>\n</template>\n<script>\nexport default{\n  methods:{\n    openMedia(){\n      this.$Image.show({ \n        src: 'https://pro-video.xiaoheiban.cn/202004/132504dd-51b6-4722-9929-27000912a4c8.mp4',type:'media'\n      })\n    },\n    open(){\n      this.$Image.show({ \n        src: 'https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg'\n      })\n    },\n    openGroup(){\n      this.$Image.show({ \n        data: [ \n          'https://cdn.chuchur.com/upload/demo/kui-react.jpg' ,\n          'https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg' ,\n          'https://cdn.chuchur.com/upload/demo/test.jpg' \n        ],\n        index:1\n      })\n    } \n  }\n}\n<\/script>\n\n")])])])],2)},T=[],F={methods:{openMedia(){this.$Image.show({src:"https://pro-video.xiaoheiban.cn/202004/132504dd-51b6-4722-9929-27000912a4c8.mp4",type:"media"})},open(){this.$Image.show({src:"https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg"})},openGroup(){this.$Image.show({data:["https://cdn.chuchur.com/upload/demo/kui-react.jpg","https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg","https://cdn.chuchur.com/upload/demo/test.jpg"],index:1})}}},q=F,K=(0,p.Z)(q,J,T,!1,null,null,null),Q=K.exports,W=function(){var t=this;t._self._c;return t._m(0)},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("width")]),e("td",[t._v("组件的宽度")]),e("td",[t._v("[String、Number]")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("height")]),e("td",[t._v("组件的高度")]),e("td",[t._v("[String、Number]")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("src")]),e("td",[t._v("图片默认展示的地址")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("使Preview 展示video标签，取值['img','media']")]),e("td",[t._v("String")]),e("td",[t._v("img")])]),e("tr",[e("td",[t._v("origin")]),e("td",[t._v("点击图片展示的大图")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("图片加载失败时展示的占位符")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("imgStyle")]),e("td",[t._v("图片的style")]),e("td",[t._v("Object")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("showPanel")]),e("td",[t._v("默认是否展示扩展面板")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("close")]),e("td",[t._v("关闭触发事件")]),e("td",[t._v("Function")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("switch")]),e("td",[t._v("多图切换触发事件")]),e("td",[t._v("Function(index)")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("tool")]),e("td",[t._v("自定义工具栏按钮")]),e("td",[t._v("slot")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("panel")]),e("td",[t._v("自定义扩展面板")]),e("td",[t._v("slot")]),e("td",[t._v("-")])])])]),e("h2",{attrs:{id:"image.method()",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image.method()"}},[t._v("Image.method()")])]),e("p",[t._v("组件提供了一些静态方法 "),e("code",{pre:!0},[t._v("this.$Image.show(options)")])]),e("p",[t._v("参数 options 为对象，具体说明如下：")]),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("src")]),e("td",[t._v("显示单张图片预览地址")]),e("td",[t._v("String")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("data")]),e("td",[t._v("多图模式地址集合")]),e("td",[t._v("Array")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("index")]),e("td",[t._v("多图模式，指定默认显示第几张图片")]),e("td",[t._v("[String、Number]")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("slots")]),e("td",[t._v("自定义扩展面板插槽")]),e("td",[t._v("Object")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("使Preview 展示video标签，取值['img','media']")]),e("td",[t._v("String")]),e("td",[t._v("img")])]),e("tr",[e("td",[t._v("on")]),e("td",[t._v("自定义事件集合")]),e("td",[t._v("Object")]),e("td",[t._v("-")])])])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("options = {\n  src:'https://xxx',\n  data:[\n    'https://xxx',\n    'https://xxx',\n  ],\n  index:0,\n  type:'img', //临时需求,后期可能会移植到新的组件中\n  slots:{\n    tool: VNode, //or[VNode,VNode]\n    panel: VNode //or[VNode,VNode]\n  },\n  on:{\n    switch:()=>{},\n    close:()=>{},\n  }\n}\n")])])])}],Y={},tt=(0,p.Z)(Y,W,X,!1,null,null,null),et=tt.exports,nt={render(){const t=arguments[0];return t("div",{class:"demo-image"},[t(i),t(g),t(I),t(k),t($),t(E),t(Q),t(z),t(et)])}},st=nt,ot=(0,p.Z)(st,s,o,!1,null,null,null),at=ot.exports}}]);