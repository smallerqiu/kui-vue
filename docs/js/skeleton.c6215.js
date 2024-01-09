/*!
 * kui-vue v3.3.6-a
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[3725],{3395:function(t,e,n){"use strict";n.r(e);var a=n(8081),r=n.n(a),l=n(3645),s=n.n(l)()(r());s.push([t.id,'\n.demo-skeleton-card{\n  width:200px;\n  margin-bottom:10px;\n  display:inline-block;\n  margin-right:20px;\n}\n.demo-skeleton-card .cover{\n  height:100px;\n  width:166px;\n  border-radius:8px;\n  background:url("https://cdn.chuchur.com/upload/demo/test_300.jpg") no-repeat center;\n  background-size:cover;\n}\n.demo-skeleton-card h2{\n  font-size:15px;\n}\n.demo-skeleton-card span{\n  font-size:13px;\n  color:#999;\n}\n',""]),e.default=s},1821:function(t,e,n){"use strict";n.r(e);var a=n(8081),r=n.n(a),l=n(3645),s=n.n(l)()(r());s.push([t.id,"\n.demo-skeleton-list{\n  font-size:13px;\n}\n.demo-skeleton-item{\n  padding:15px 20px;\n  border-bottom:1px solid var(--kui-color-border);\n}\n.demo-skeleton-list h4{\n  font-size:14px;\n  font-weight:bold;\n}\n.demo-skeleton-list .sub-desc{\n  color:#999;\n}\n.demo-skeleton-list .desc{\n  margin-top:15px;\n  line-height:25px;\n}\n",""]),e.default=s},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,l){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(s[i]=!0)}for(var d=0;d<t.length;d++){var v=[].concat(t[d]);a&&s[v[0]]||(void 0!==l&&(void 0===v[5]||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=l),n&&(v[2]?(v[1]="@media ".concat(v[2]," {").concat(v[1],"}"),v[2]=n):v[2]=n),r&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=r):v[4]="".concat(r)),e.push(v))}},e}},8081:function(t){"use strict";t.exports=function(t){return t[1]}},1540:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return T}});var a=function(){this._self._c;return this._m(0)};a._withStripped=!0;var r=n(1900),l=(0,r.Z)({},a,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h1",[t._v("Skeleton 骨架屏")]),t._v(" "),e("p",[t._v("在需要等待加载内容的位置提供一个占位图形组合。")]),t._v(" "),e("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[t._v("何时使用")])]),t._v(" "),e("ul",[e("li",[t._v("网络较慢，需要长时间等待加载处理的情况下。")]),t._v(" "),e("li",[t._v("图文信息内容较多的列表/卡片中。")]),t._v(" "),e("li",[t._v("只在第一次加载数据的时候使用。")]),t._v(" "),e("li",[t._v("可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。")])]),t._v(" "),e("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("代码演示")])])])}],!1,null,null,null).exports,s=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Skeleton")],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"基本用法",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("基本用法")])]),t._v(" "),e("p",[t._v("最简单的占位效果。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <Skeleton />\n</template>\n\n")])])])],2)};s._withStripped=!0;var o=(0,r.Z)({},s,[],!1,null,null,null).exports,i=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Skeleton",{attrs:{avatar:"",rows:4}})],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"组合",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组合"}},[t._v("组合")])]),t._v(" "),e("p",[t._v("可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 35% 的段首。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Skeleton avatar  :rows="4"/>\n</template>\n\n')])])])],2)};i._withStripped=!0;var d=(0,r.Z)({},i,[],!1,null,null,null).exports,v=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Skeleton",{attrs:{animated:""}})],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"动画效果",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动画效果"}},[t._v("动画效果")])]),t._v(" "),e("p",[t._v("显示动画效果。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v("<template>\n  <Skeleton animated />\n</template>\n\n")])])])],2)};v._withStripped=!0;var _=(0,r.Z)({},v,[],!1,null,null,null).exports,p=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Skeleton",{attrs:{loading:t.loading,rows:2,animated:""}},[e("div",{staticClass:"skeleton-demo"},[e("h4",[t._v("KUI是一套基于Vue.js的桌面UI组件库")]),t._v(" "),e("p",[t._v("\n      拥有数十个有用且美观的组件，非常友好的API，适合任何技能水平的同学，丰富的文档，支持Electron,SSR，Nuxt.js....\n    ")])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Button",{attrs:{disabled:t.loading},on:{click:t.showSkeleton}},[t._v("重新加载")])],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"子组件",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子组件"}},[t._v("子组件")])]),t._v(" "),e("p",[t._v("加载占位图包含子组件。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n    <Skeleton :loading="loading" :rows="2" animated>\n      <div class="skeleton-demo">\n        <h4>KUI是一套基于Vue.js的桌面UI组件库</h4>\n        <p>\n          拥有数十个有用且美观的组件，非常友好的API，适合任何技能水平的同学，丰富的文档，支持Electron,SSR，Nuxt.js....\n        </p>\n      </div>\n    </Skeleton>\n    <br />\n    <br />\n    <Button :disabled="loading" @click="showSkeleton">重新加载</Button>\n</template>\n<style lang="less">\n.skeleton-demo h4{\n  font-weight:bold;\n  margin-bottom:15px;\n}\n</style>\n<script>\nexport default{\n  data() {\n    return {\n      loading:false\n    }\n  },\n  methods: {\n    showSkeleton(){\n      this.loading = true,\n      setTimeout(() => {\n        this.loading = false\n      }, 3000);\n    }\n  },\n}\n<\/script>\n\n')])])])],2)};p._withStripped=!0;var c={data(){return{loading:!1}},methods:{showSkeleton(){this.loading=!0,setTimeout((()=>{this.loading=!1}),3e3)}}},u=(0,r.Z)(c,p,[],!1,null,null,null).exports,h=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Button",{attrs:{disabled:t.loading},on:{click:t.showSkeleton}},[t._v("重新加载")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"demo-skeleton-list"},t._l(3,(function(n){return e("div",{staticClass:"demo-skeleton-item"},[e("Skeleton",{attrs:{avatar:"",loading:t.loading,rows:2,animated:""}},[e("Space",[e("Avatar",{attrs:{size:"large"}},[t._v(t._s(t.item.name))]),t._v(" "),e("Space",{attrs:{direction:"vertical",align:"start"}},[e("h4",[t._v(t._s(t.item.name))]),t._v(" "),e("p",{staticClass:"sub-desc"},[t._v(t._s(t.item.intro))])])],1),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(t.item.desc))])],1)],1)})),0)],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"列表",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[t._v("列表")])]),t._v(" "),e("p",[t._v("在列表组件中使用加载占位符。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n    <Button :disabled="loading" @click="showSkeleton">重新加载</Button>\n    <br/>\n    <br/>\n    <div class="demo-skeleton-list">\n      <div class="demo-skeleton-item" v-for="x in 3">\n        <Skeleton avatar :loading="loading" :rows="2" animated>\n          <Space>\n            <Avatar size="large">{{item.name}}</Avatar>\n            <Space direction="vertical" align="start">\n              <h4>{{item.name}}</h4>\n              <p class="sub-desc">{{item.intro}}</p>\n            </Space>\n          </Space>\n          <p class="desc">{{item.desc}}</p>\n        </Skeleton>\n      </div>\n    </div>\n</template>\n<style>\n.demo-skeleton-list{\n  font-size:13px;\n}\n.demo-skeleton-item{\n  padding:15px 20px;\n  border-bottom:1px solid var(--kui-color-border);\n}\n.demo-skeleton-list h4{\n  font-size:14px;\n  font-weight:bold;\n}\n.demo-skeleton-list .sub-desc{\n  color:#999;\n}\n.demo-skeleton-list .desc{\n  margin-top:15px;\n  line-height:25px;\n}\n</style>\n<script>\nexport default{\n  data() {\n    return {\n      loading:false,\n      item:{\n        name:\'李白\',\n        intro:\'李白（701年—762年12月），字太白，号青莲居士，又号“谪仙人”，唐代伟大的浪漫主义诗人\',\n        desc:\'李白有《李太白集》传世，诗作中多以醉时写的，代表作有《望庐山瀑布》《行路难》《蜀道难》《将进酒》《早发白帝城》等多首。 [3]  李白所作词赋，宋人已有传记（如文莹《湘山野录》卷上），就其开创意义及艺术成就而言，“李白词”享有极为崇高的地位。\'\n      }\n    }\n  },\n  methods: {\n    showSkeleton(){\n      this.loading = true,\n      setTimeout(() => {\n        this.loading = false\n      }, 3000);\n    }\n  },\n}\n<\/script>\n\n')])])])],2)};h._withStripped=!0;var m={data(){return{loading:!1,item:{name:"李白",intro:"李白（701年—762年12月），字太白，号青莲居士，又号“谪仙人”，唐代伟大的浪漫主义诗人",desc:"李白有《李太白集》传世，诗作中多以醉时写的，代表作有《望庐山瀑布》《行路难》《蜀道难》《将进酒》《早发白帝城》等多首。 [3]  李白所作词赋，宋人已有传记（如文莹《湘山野录》卷上），就其开创意义及艺术成就而言，“李白词”享有极为崇高的地位。"}}},methods:{showSkeleton(){this.loading=!0,setTimeout((()=>{this.loading=!1}),3e3)}}},b=(n(649),(0,r.Z)(m,h,[],!1,null,null,null).exports),f=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Space",{attrs:{size:15}},[e("Checkbox",{attrs:{label:"Animated"},model:{value:t.animated,callback:function(e){t.animated=e},expression:"animated"}}),t._v(" "),e("Checkbox",{attrs:{label:"Button block"},model:{value:t.block,callback:function(e){t.block=e},expression:"block"}}),t._v("\n  Size: "),e("RadioGroup",{attrs:{options:t.sizes,type:"button"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",{attrs:{size:15}},[t._v("\n  Button Shape: "),e("RadioGroup",{attrs:{options:t.btnShapes,type:"button"},model:{value:t.btnShape,callback:function(e){t.btnShape=e},expression:"btnShape"}}),t._v("\n  Avatar Shape: "),e("RadioGroup",{attrs:{options:t.avatarShapes,type:"button"},model:{value:t.avatarShape,callback:function(e){t.avatarShape=e},expression:"avatarShape"}})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",{staticStyle:{width:"300px"},attrs:{size:15}},[t._v("\n  Image radius: "),e("Slider",{model:{value:t.radius,callback:function(e){t.radius=e},expression:"radius"}})],1),t._v(" "),e("Space",{staticStyle:{width:"300px"},attrs:{size:15}},[t._v("\n  Image Size: "),e("Slider",{attrs:{range:"",min:80,max:320},model:{value:t.imgSize,callback:function(e){t.imgSize=e},expression:"imgSize"}})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("Space",[e("SkeletonButton",{attrs:{animated:t.animated,size:t.size,shape:t.btnShape}}),t._v(" "),e("SkeletonAvatar",{attrs:{animated:t.animated,size:t.size,shape:t.avatarShape}}),t._v(" "),e("SkeletonText",{staticStyle:{width:"200px"},attrs:{animated:t.animated,size:t.size}})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("SkeletonButton",{attrs:{animated:t.animated,size:t.size,shape:t.btnShape,block:t.block}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("SkeletonImage",{attrs:{animated:t.animated,radius:t.radius,size:t.imgSize}})],1),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"按钮/头像/图像",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按钮/头像/图像"}},[t._v("按钮/头像/图像")])]),t._v(" "),e("p",[t._v("骨架按钮、头像、和图像。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Space :size="15">\n    <Checkbox v-model="animated" label="Animated"/>\n    <Checkbox v-model="block" label="Button block"/>\n    Size: <RadioGroup :options="sizes" v-model="size" type="button"/>\n  </Space>\n  <br/>\n  <br/>\n  <Space :size="15">\n    Button Shape: <RadioGroup :options="btnShapes" v-model="btnShape" type="button"/>\n    Avatar Shape: <RadioGroup :options="avatarShapes" v-model="avatarShape" type="button"/>\n  </Space>\n  <br/>\n  <br/>\n  <Space :size="15" style="width:300px;">\n    Image radius: <Slider v-model="radius" />\n  </Space>\n  <Space :size="15" style="width:300px;">\n    Image Size: <Slider v-model="imgSize" range :min="80" :max="320"/>\n  </Space>\n  <br/>\n  <br/>\n  <Space>\n    <SkeletonButton :animated="animated" :size="size" :shape="btnShape" />\n    <SkeletonAvatar :animated="animated" :size="size" :shape="avatarShape" />\n    <SkeletonText :animated="animated" :size="size" style="width:200px;"/>\n  </Space>\n  <br/>\n  <br/>\n  <SkeletonButton :animated="animated" :size="size" :shape="btnShape" :block="block" />\n  <br/>\n  <br/>\n  <SkeletonImage :animated="animated" :radius="radius" :size="imgSize"/>\n</template>\n<script>\nexport default{\n  data() { \n    return { \n      sizes :[\n        { label :\'Small\', value :\'small\' },\n        { label :\'Default\', value :\'default\' },\n        { label :\'Large\', value :\'large\' },\n      ],\n      btnShapes :[\n        { label :\'Round\', value :\'round\' },\n        { label :\'Default\', value :\'default\' },\n        { label :\'Circle\', value :\'circle\' },\n      ],\n      avatarShapes :[\n        { label :\'Square\', value :\'square\' },\n        { label :\'Circle\', value :\'circle\' },\n      ],\n      imgSize: [96,96],\n      animated :false,\n      size :\'default\',\n      block :false,\n      radius:10,\n      avatarShape :\'square\',\n      btnShape :\'default\',\n      imgShape :\'default\' \n    } \n  }\n}\n<\/script>\n\n')])])])],2)};f._withStripped=!0;var g={data(){return{sizes:[{label:"Small",value:"small"},{label:"Default",value:"default"},{label:"Large",value:"large"}],btnShapes:[{label:"Round",value:"round"},{label:"Default",value:"default"},{label:"Circle",value:"circle"}],avatarShapes:[{label:"Square",value:"square"},{label:"Circle",value:"circle"}],imgSize:[96,96],animated:!1,size:"default",block:!1,radius:10,avatarShape:"square",btnShape:"default",imgShape:"default"}}},S=(0,r.Z)(g,f,[],!1,null,null,null).exports,k=function(){var t=this,e=t._self._c;return e("Demo",[e("template",{slot:"component"},[e("Button",{attrs:{disabled:t.loading},on:{click:t.showSkeleton}},[t._v("重新加载")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._l(3,(function(n){return e("Card",{key:n,staticClass:"demo-skeleton-card",attrs:{title:"诗一首"}},[e("SkeletonImage",{staticStyle:{width:"166px",height:"100px"},attrs:{animated:"",loading:t.loading,radius:8}},[e("div",{staticClass:"cover"})]),t._v(" "),e("SkeletonText",{staticStyle:{"min-width":"80px",margin:"8px 0"},attrs:{animated:"",loading:t.loading,size:"small"}},[e("h2",[t._v("静夜思.李白")])]),t._v(" "),e("SkeletonText",{staticStyle:{"min-width":"130px"},attrs:{animated:"",loading:t.loading,size:"small"}},[e("span",[t._v("床前明月光, 疑是地上霜, 举头望明月, 低头思故乡.")])])],1)}))],2),t._v(" "),e("template",{slot:"description"},[e("h4",{attrs:{id:"自定义",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[t._v("自定义")])]),t._v(" "),e("p",[t._v("自定义效果。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t._v('<template>\n  <Button :disabled="loading" @click="showSkeleton">重新加载</Button>\n  <br/>\n  <br/>\n  <Card v-for="x in 3" class="demo-skeleton-card" title="诗一首" :key="x">\n    <SkeletonImage animated :loading="loading" :radius="8" style="width:166px;height:100px;">\n      <div class="cover" />\n    </SkeletonImage>\n    <SkeletonText animated :loading="loading" size="small" style="min-width:80px;margin:8px 0;">\n      <h2>静夜思.李白</h2>\n    </SkeletonText>\n    <SkeletonText animated :loading="loading" size="small" style="min-width:130px;">\n      <span>床前明月光, 疑是地上霜, 举头望明月, 低头思故乡.</span>\n    </SkeletonText>\n  </Card>\n</template>\n<style>\n.demo-skeleton-card{\n  width:200px;\n  margin-bottom:10px;\n  display:inline-block;\n  margin-right:20px;\n}\n.demo-skeleton-card .cover{\n  height:100px;\n  width:166px;\n  border-radius:8px;\n  background:url("https://cdn.chuchur.com/upload/demo/test_300.jpg") no-repeat center;\n  background-size:cover;\n}\n.demo-skeleton-card h2{\n  font-size:15px;\n}\n.demo-skeleton-card span{\n  font-size:13px;\n  color:#999;\n}\n</style>\n<script>\nexport default{\n  data() {\n    return {\n      loading:false,\n    }\n  },\n  methods: {\n    showSkeleton(){\n      this.loading = true,\n      setTimeout(() => {\n        this.loading = false\n      }, 3000);\n    }\n  },\n}\n<\/script>\n\n')])])])],2)};k._withStripped=!0;var x={data(){return{loading:!1}},methods:{showSkeleton(){this.loading=!0,setTimeout((()=>{this.loading=!1}),3e3)}}},z=(n(1892),(0,r.Z)(x,k,[],!1,null,null,null).exports),w=function(){this._self._c;return this._m(0)};w._withStripped=!0;var y=(0,r.Z)({},w,[function(){var t=this,e=t._self._c;return e("div",{staticClass:"markdown-body"},[e("h2",{attrs:{id:"api",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("API")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("animated")]),t._v(" "),e("td",[t._v("是否展示动画效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("avatar")]),t._v(" "),e("td",[t._v("是否显示头像占位图")]),t._v(" "),e("td",[t._v("Boolean,AvatarProps")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[t._v("为 true 时，显示占位图。反之则直接展示子组件")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("rows")]),t._v(" "),e("td",[t._v("设置段落占位图的行数")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("设置标题占位图的宽度")]),t._v(" "),e("td",[t._v("Number(%)")]),t._v(" "),e("td",[t._v("35")])]),t._v(" "),e("tr",[e("td",[t._v("delay")]),t._v(" "),e("td",[t._v("防抖(动画延迟关闭)")]),t._v(" "),e("td",[t._v("Number(毫秒)")]),t._v(" "),e("td",[t._v("500")])])])]),t._v(" "),e("h2",{attrs:{id:"avatar-props",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avatar-props"}},[t._v("Avatar Props")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("animated")]),t._v(" "),e("td",[t._v("是否展示动画效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("指定图片的圆角大小")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("shape")]),t._v(" "),e("td",[t._v("指定头像的形状")]),t._v(" "),e("td",[t._v("circle | square")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[t._v("为 true 时，显示占位图。反之则直接展示子组件")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("设置头像占位图的大小")]),t._v(" "),e("td",[t._v("number | large | small | default")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("h2",{attrs:{id:"button-props",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#button-props"}},[t._v("Button Props")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("animated")]),t._v(" "),e("td",[t._v("是否展示动画效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[t._v("为 true 时，显示占位图。反之则直接展示子组件")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("shape")]),t._v(" "),e("td",[t._v("指定头像的形状")]),t._v(" "),e("td",[t._v("circle | round | default")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("设置按钮的大小")]),t._v(" "),e("td",[t._v("large | small | default")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("block")]),t._v(" "),e("td",[t._v("将按钮宽度调整为其父宽度的选项")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("按钮宽度")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("h2",{attrs:{id:"text-props",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text-props"}},[t._v("Text Props")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("animated")]),t._v(" "),e("td",[t._v("是否展示动画效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[t._v("为 true 时，显示占位图。反之则直接展示子组件")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("设置文本的大小")]),t._v(" "),e("td",[t._v("large | small | default")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("文本宽度")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("h2",{attrs:{id:"image-props",tabindex:"-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-props"}},[t._v("Image Props")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("animated")]),t._v(" "),e("td",[t._v("是否展示动画效果")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[t._v("为 true 时，显示占位图。反之则直接展示子组件")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("指定图片的圆角大小")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("图片的宽(高)度")]),t._v(" "),e("td",[t._v("Number|Array")]),t._v(" "),e("td",[t._v("-")])])])])])}],!1,null,null,null).exports,C={render(){const t=arguments[0];return t("div",{class:"demo-progress"},[t(l),t(o),t(d),t(_),t(u),t(b),t(S),t(z),t(y)])}},B=C,T=(0,r.Z)(B,undefined,undefined,!1,null,null,null).exports},1892:function(t,e,n){var a=n(3395);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5346).Z)("36def878",a,!1,{})},649:function(t,e,n){var a=n(1821);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5346).Z)("846b59ce",a,!1,{})},5346:function(t,e,n){"use strict";function a(t,e){for(var n=[],a={},r=0;r<e.length;r++){var l=e[r],s=l[0],o={id:t+":"+r,css:l[1],media:l[2],sourceMap:l[3]};a[s]?a[s].parts.push(o):n.push(a[s]={id:s,parts:[o]})}return n}n.d(e,{Z:function(){return u}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},s=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,i=0,d=!1,v=function(){},_=null,p="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(t,e,n,r){d=n,_=r||{};var s=a(t,e);return h(s),function(e){for(var n=[],r=0;r<s.length;r++){var o=s[r];(i=l[o.id]).refs--,n.push(i)}e?h(s=a(t,e)):s=[];for(r=0;r<n.length;r++){var i;if(0===(i=n[r]).refs){for(var d=0;d<i.parts.length;d++)i.parts[d]();delete l[i.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],a=l[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(b(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(b(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,n,a=document.querySelector("style["+p+'~="'+t.id+'"]');if(a){if(d)return v;a.parentNode.removeChild(a)}if(c){var r=i++;a=o||(o=m()),e=S.bind(null,a,r,!1),n=S.bind(null,a,r,!0)}else a=m(),e=k.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}var f,g=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function S(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var l=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(l,s[e]):t.appendChild(l)}}function k(t,e){var n=e.css,a=e.media,r=e.sourceMap;if(a&&t.setAttribute("media",a),_.ssrId&&t.setAttribute(p,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}}]);