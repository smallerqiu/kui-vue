/*!
 * kui-vue v3.3.5-c
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: chuchur@qq.com / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[3876],{3607:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var a,l,d=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h1",[e._v("Tree 树形控件")]),t("h2",{attrs:{id:"何时使用",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[e._v("何时使用")])]),t("p",[e._v("文件夹、组织架构、生物分类、国家地区等等,世间万物的大多数结构都是树形结构。使用"),t("code",{pre:!0},[e._v("树控件")]),e._v(" 可以完整展现其中的层级关系并具有展开收起选择等交互功能。")]),t("h2",{attrs:{id:"代码演示",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[e._v("代码演示")])])])}],r=n(1001),i={},s=(0,r.Z)(i,d,o,!1,null,null,null),c=s.exports,p=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Tree",{attrs:{data:e.data,expandedKeys:e.expandedKeys}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"基础用法",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[e._v("基础用法")])]),t("p",[e._v("最简单的用法，展示可选中，默认展开功能。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <Tree :data=\"data\" :expandedKeys=\"expandedKeys\"/>\n</template>\n<script>\nexport default{\n  data() {\n    return {\n      expandedKeys:['0-1','1-1','1-1-2','1-2'],\n      data: [\n        {\n          title: 'tree 1',\n          key: '0-1',\n          children: [\n            {\n              title: 'tree 1-1',\n              key: '1-1',\n              disabled: true,\n              children: [\n                { title: 'leaf 1-1-1', disabled: true },\n                {\n                  title: 'leaf 1-1-2',\n                  key: '1-1-2',\n                  children: [\n                    { title: 'leaf 1-1-2-1' },\n                    { title: 'leaf 1-1-2-2' }\n                  ]\n                }\n              ]\n            },\n            {\n              title: 'tree 1-2',\n              key: '1-2',\n              children: [\n                { title: 'leaf 1-2-1' },\n                { title: 'leaf 1-2-2' }\n              ]\n            },\n            {\n              title: 'tree 1-3',\n              children: [\n                { title: 'leaf 1-3-1' },\n                { title: 'leaf 1-3-2' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n}\n<\/script>\n\n")])])])],2)},h=[],u={data(){return{expandedKeys:["0-1","1-1","1-1-2","1-2"],data:[{title:"tree 1",key:"0-1",children:[{title:"tree 1-1",key:"1-1",disabled:!0,children:[{title:"leaf 1-1-1",disabled:!0},{title:"leaf 1-1-2",key:"1-1-2",children:[{title:"leaf 1-1-2-1"},{title:"leaf 1-1-2-2"}]}]},{title:"tree 1-2",key:"1-2",children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-2"}]},{title:"tree 1-3",children:[{title:"leaf 1-3-1"},{title:"leaf 1-3-2"}]}]}]}}},y=u,x=(0,r.Z)(y,p,h,!1,null,null,null),k=x.exports,v=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Tree",{attrs:{expandedKeys:e.expandedKeys}},[t("TreeNode",{key:"t-1",attrs:{title:"Tree 1"}},[t("TreeNode",{key:"l-1-1",attrs:{title:"leaf 1-1",disabled:"",icon:e.LogoApple}},[t("TreeNode",{key:"l-1-1-1",attrs:{title:"leaf 1-1-1",disabled:""}}),t("TreeNode",{key:"l-1-2-1",attrs:{title:"leaf 1-2-1"}})],1),t("TreeNode",{key:"l-1-2",attrs:{title:"leaf 1-2"}},[t("TreeNode",{key:"l-1-2-1",attrs:{title:"leaf 1-2-1"}}),t("TreeNode",{key:"l-1-2-2",attrs:{title:"leaf 1-2-2"}})],1),t("TreeNode",{key:"l-1-3",attrs:{title:"leaf 1-3"}},[t("TreeNode",{key:"l-1-3-1",attrs:{title:"leaf 1-3-1"}}),t("TreeNode",{key:"l-1-3-2",attrs:{title:"leaf 1-3-2"}})],1)],1),t("TreeNode",{key:"t-2",attrs:{title:"Tree 2"}},[t("TreeNode",{key:"l-2-1",attrs:{title:"leaf 2-1"}},[t("TreeNode",{key:"l-2-1-1",attrs:{title:"leaf 2-1"}})],1),t("TreeNode",{key:"l-2-2",attrs:{title:"leaf 2-2"}},[t("TreeNode",{key:"l-2-2-1",attrs:{title:"leaf 2-2"}})],1),t("TreeNode",{key:"l-2-3",attrs:{title:"leaf 2-3"}},[t("TreeNode",{key:"l-2-3-1",attrs:{title:"leaf 2-3"}})],1)],1)],1)],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"自定义节点",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义节点"}},[e._v("自定义节点")])]),t("p",[e._v("使用 "),t("code",{pre:!0},[e._v("TreeNode")]),e._v(" 自定义节点。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n    <Tree :expandedKeys="expandedKeys">\n      <TreeNode title="Tree 1" key="t-1">\n        <TreeNode title="leaf 1-1" key="l-1-1" disabled :icon="LogoApple">\n          <TreeNode title="leaf 1-1-1" key="l-1-1-1" disabled/>\n          <TreeNode title="leaf 1-2-1" key="l-1-2-1" />\n        </TreeNode>\n        <TreeNode title="leaf 1-2" key="l-1-2">\n          <TreeNode title="leaf 1-2-1" key="l-1-2-1" />\n          <TreeNode title="leaf 1-2-2" key="l-1-2-2" />\n        </TreeNode>\n        <TreeNode title="leaf 1-3" key="l-1-3">\n          <TreeNode title="leaf 1-3-1" key="l-1-3-1" />\n          <TreeNode title="leaf 1-3-2" key="l-1-3-2" />\n        </TreeNode>\n      </TreeNode>\n      <TreeNode title="Tree 2" key="t-2">\n        <TreeNode title="leaf 2-1" key="l-2-1">\n          <TreeNode title="leaf 2-1" key="l-2-1-1" />\n        </TreeNode>\n        <TreeNode title="leaf 2-2" key="l-2-2">\n          <TreeNode title="leaf 2-2" key="l-2-2-1" />\n        </TreeNode>\n        <TreeNode title="leaf 2-3" key="l-2-3">\n          <TreeNode title="leaf 2-3" key="l-2-3-1" />\n        </TreeNode>\n      </TreeNode>\n    </Tree>\n</template>\n<script>\nimport { LogoApple } from "kui-icons";\nexport default {\n  data() {\n    return {\n      LogoApple,\n      expandedKeys: [\'t-1\', \'t-2\'],\n    }\n  },\n}\n<\/script>\n\n')])])])],2)},f=[],m=n(4560),_={data(){return{LogoApple:m.LogoApple,expandedKeys:["t-1","t-2"]}}},g=_,b=(0,r.Z)(g,v,f,!1,null,null,null),T=b.exports,K=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Tree",{attrs:{data:e.data,checkable:"",checkedKeys:e.checkedKeys,expandedKeys:e.expandedKeys},on:{check:e.check}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"可勾选",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可勾选"}},[e._v("可勾选")])]),t("p",[e._v("设置属性 "),t("code",{pre:!0},[e._v("checkable")]),e._v(" 可以对节点进行勾选。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <Tree :data=\"data\" checkable :checkedKeys=\"checkedKeys\" :expandedKeys=\"expandedKeys\" @check=\"check\" />\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      checkedKeys: ['1-1', 'aa', ],\n      expandedKeys: ['1-1', '1-1-2', '1-2', '0-1'],\n      data: [\n        {\n          title: 'tree 1',\n          key: '0-1',\n          children: [\n            {\n              title: 'tree 1-1',\n              key: '1-1',\n              disabled: true,\n              children: [\n                { title: 'leaf 1-1-1' },\n                { title: 'leaf 1-1-2' }\n              ]\n            },\n            {\n              title: 'tree 1-2',\n              key: '1-2',\n              children: [\n                { title: 'leaf 1-2-1', key: 'aa' },\n                { title: 'leaf 1-2-2', key: 'bb' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n  methods: {\n    check(data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>\n\n\n")])])])],2)},w=[],O={data(){return{checkedKeys:["1-1","aa"],expandedKeys:["1-1","1-1-2","1-2","0-1"],data:[{title:"tree 1",key:"0-1",children:[{title:"tree 1-1",key:"1-1",disabled:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"tree 1-2",key:"1-2",children:[{title:"leaf 1-2-1",key:"aa"},{title:"leaf 1-2-2",key:"bb"}]}]}]}},methods:{check(e){console.log(e)}}},N=O,L=(0,r.Z)(N,K,w,!1,null,null,null),C=L.exports,F=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Row",{attrs:{gutter:30}},[t("Col",{attrs:{span:8}},[t("Divider",[e._v("默认")]),t("Tree",{attrs:{data:e.data,expandedKeys:e.expandedKeys,"show-extra":""},on:{expand:e.expand},scopedSlots:e._u([{key:"extra",fn:function({node:n,parent:a}){return[t("Button",{staticStyle:{"margin-right":"5px"},attrs:{icon:e.Add,size:"small"},on:{click:function(t){return e.append(n)}}}),"0-0"!=n.key?t("Button",{attrs:{icon:e.Remove,size:"small"},on:{click:function(t){return e.remove(n,a)}}}):e._e()]}}])})],1),t("Col",{staticStyle:{"border-left":"1px solid #ddd","border-right":"1px solid #ddd"},attrs:{span:8}},[t("Divider",[e._v("使用 `v-slot`")]),t("Tree",{attrs:{data:e.data,expandedKeys:e.expandedKeys,"show-extra":""},on:{expand:e.expand},scopedSlots:e._u([{key:"title",fn:function({node:t,parent:n}){return[e._v(" "+e._s(t.title+" 😄")+" ")]}},{key:"extra",fn:function({node:n,parent:a}){return[t("Button",{staticStyle:{"margin-right":"5px"},attrs:{icon:e.Add,size:"small"},on:{click:function(t){return e.append(n)}}}),"0-0"!=n.key?t("Button",{attrs:{icon:e.Remove,size:"small"},on:{click:function(t){return e.remove(n,a)}}}):e._e()]}}])})],1),t("Col",{attrs:{span:8}},[t("Divider",[e._v("使用 `tree-node`")]),t("Tree",{attrs:{expandedKeys:e.expandedKeys,"show-extra":""},on:{expand:e.expand},scopedSlots:e._u([{key:"extra",fn:function({node:n,parent:a}){return[t("Button",{staticStyle:{"margin-right":"5px"},attrs:{icon:e.Add,size:"small"},on:{click:function(t){return e.append(n)}}}),"0-0"!=n.key?t("Button",{attrs:{icon:e.Remove,size:"small"},on:{click:function(t){return e.remove(n,a)}}}):e._e()]}}])},e._l(e.data,(function(e,n){return t("TreeNode",{key:e.key,attrs:{data:e}})})),1)],1)],1)],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"自定义节点内容",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义节点内容"}},[e._v("自定义节点内容")])]),t("p",[e._v("节点的内容支持自定义，可以在节点区添加按钮或图标等内容。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <Row :gutter="30">\n    <Col :span="8">\n    <Divider>默认</Divider>\n    \x3c!-- 默认 --\x3e\n    <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" show-extra>\n     <template v-slot:extra="{ node , parent}">\n        <Button :icon="Add" size="small" @click="append(node)" style="margin-right:5px"></Button>\n        <Button :icon="Remove" size="small" @click="remove(node,parent)" v-if="node.key!=\'0-0\'" ></Button>\n      </template>\n    </Tree>\n    </Col>\n    <Col :span="8" style="border-left:1px solid #ddd;border-right:1px solid #ddd;">\n    <Divider>使用 `v-slot`</Divider>\n    \x3c!-- 使用 v-slot --\x3e\n    <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" show-extra>\n      <template v-slot:title="{node , parent}">\n        {{node.title +\' 😄\'}}\n      </template>\n      <template v-slot:extra="{ node , parent}">\n        <Button :icon="Add" size="small" @click="append(node)" style="margin-right:5px" />\n        <Button :icon="Remove" size="small" @click="remove(node,parent)" v-if="node.key!=\'0-0\'" />\n      </template>\n    </Tree>\n    </Col>\n    <Col :span="8">\n    <Divider>使用 `tree-node`</Divider>\n    \x3c!-- 可以参见 renderContent 方法 --\x3e\n    <Tree @expand="expand" :expandedKeys="expandedKeys" show-extra>\n      <TreeNode v-for="(item,i) in data" :data="item" :key="item.key" />\n      <template v-slot:extra="{node , parent}">\n        <Button :icon="Add" size="small" @click="append(node)" style="margin-right:5px" />\n        <Button :icon="Remove" size="small" @click="remove(node,parent)" v-if="node.key!=\'0-0\'" />\n      </template>\n    </Tree>\n    </Col>\n  </Row>\n</template>\n<script>\nimport { Add, Remove } from "kui-icons";\nexport default {\n  data() {\n    return {\n      Add, Remove,\n      expandedKeys: [\'0-0\'],\n      data: [\n        {\n          title: \'tree 1\',\n          key: \'0-0\',\n          children: [\n            {\n              title: \'tree 1-1\',\n              children: [\n                { title: \'leaf 1-1-1\' },\n                {\n                  title: \'leaf 1-1-2\',\n                  children: [\n                    { title: \'leaf 1-1-2-1\' },\n                    { title: \'leaf 1-1-2-2\' }\n                  ]\n                }\n              ]\n            },\n            {\n              title: \'tree 1-2\',\n              children: [\n                { title: \'leaf 1-2-1\' },\n                { title: \'leaf 1-2-2\' }\n              ]\n            },\n            {\n              title: \'tree 1-3\',\n              children: [\n                { title: \'leaf 1-3-1\' },\n                { title: \'leaf 1-3-2\' }\n              ]\n            }\n          ]\n        },\n        {\n          title: \'tree 2-1\',\n          children: [\n            { title: \'leaf 2-1-1\' },\n            { title: \'leaf 2-1-2\' }\n          ]\n        }\n      ],\n    }\n  },\n  methods: {\n    append(node) {\n      if (!node.children) {\n        node.children = []\n      }\n      //展开节点\n      if (this.expandedKeys.indexOf(node.key) < 0) {\n        this.expandedKeys.push(node.key)\n      }\n      //添加子节点\n      const newChild = { title: \'Append Node\', children: [] };\n      node.children.push(newChild);\n    },\n    remove(node, parent) {\n      /*  \n       \n       let childs = parent.children\n       const index = childs.findIndex(item => item == node);\n       childs.splice(index, 1); \n       \n       */\n\n      let { data } = this\n      const loop = (data, key, callback) => {\n        for (let i = 0; i < data.length; i++) {\n          if (data[i].key === key) {\n            return callback(data[i], i, data);\n          }\n          if (data[i].children) {\n            loop(data[i].children, key, callback);\n          }\n        }\n      };\n      loop(data, node.key, (item, index, arr) => {\n        arr.splice(index, 1);\n      })\n\n    },\n    expand(data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},A=[],D=(n(7658),{data(){return{Add:m.Add,Remove:m.Remove,expandedKeys:["0-0"],data:[{title:"tree 1",key:"0-0",children:[{title:"tree 1-1",children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2",children:[{title:"leaf 1-1-2-1"},{title:"leaf 1-1-2-2"}]}]},{title:"tree 1-2",children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-2"}]},{title:"tree 1-3",children:[{title:"leaf 1-3-1"},{title:"leaf 1-3-2"}]}]},{title:"tree 2-1",children:[{title:"leaf 2-1-1"},{title:"leaf 2-1-2"}]}]}},methods:{append(e){e.children||(e.children=[]),this.expandedKeys.indexOf(e.key)<0&&this.expandedKeys.push(e.key);const t={title:"Append Node",children:[]};e.children.push(t)},remove(e,t){let{data:n}=this;const a=(e,t,n)=>{for(let l=0;l<e.length;l++){if(e[l].key===t)return n(e[l],l,e);e[l].children&&a(e[l].children,t,n)}};a(n,e.key,((e,t,n)=>{n.splice(t,1)}))},expand(e){console.log(e)}}}),I=D,z=(0,r.Z)(I,F,A,!1,null,null,null),B=z.exports,E=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Tree",{attrs:{data:e.data,checkable:"",checkedKeys:e.checkedKeys,expandedKeys:e.expandedKeys},on:{check:e.check}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"禁用节点",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用节点"}},[e._v("禁用节点")])]),t("p",[e._v("设置属性 "),t("code",{pre:!0},[e._v("disabled")]),e._v(" 可以禁用节点。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <Tree :data=\"data\" checkable @check=\"check\" \n    :checkedKeys=\"checkedKeys\"\n    :expandedKeys=\"expandedKeys\" />\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      expandedKeys: ['0-0', '1-0', '1-1'],\n      checkedKeys: ['1-0-0'],\n      data: [\n        {\n          title: 'tree 1',\n          key: '0-0',\n          children: [\n            {\n              title: 'tree 1-1',\n              key: '1-0',\n              disabled: true,\n              children: [\n                { title: 'leaf 1-1-1',key:'1-0-0', disabled: true },\n                { title: 'leaf 1-1-2' }\n              ]\n            },\n            {\n              title: 'tree 1-2',\n              key: '1-1',\n              children: [\n                { title: 'leaf 1-2-1' },\n                { title: 'leaf 1-2-2' }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n  methods: {\n    check(data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>\n\n")])])])],2)},S=[],R={data(){return{expandedKeys:["0-0","1-0","1-1"],checkedKeys:["1-0-0"],data:[{title:"tree 1",key:"0-0",children:[{title:"tree 1-1",key:"1-0",disabled:!0,children:[{title:"leaf 1-1-1",key:"1-0-0",disabled:!0},{title:"leaf 1-1-2"}]},{title:"tree 1-2",key:"1-1",children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-2"}]}]}]}},methods:{check(e){console.log(e)}}},Z=R,q=(0,r.Z)(Z,E,S,!1,null,null,null),P=q.exports,Q=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Tree",{attrs:{data:e.data},on:{"load-data":e.loadData,expand:e.expand}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"异步加载",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步加载"}},[e._v("异步加载")])]),t("p",[e._v("点击展开节点，动态加载数据。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <Tree :data=\"data\" @load-data=\"loadData\" @expand=\"expand\"/>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      data: [\n        { title: 'Expand to load' },\n        { title: 'Expand to load' },\n        { title: 'Tree Node', isLeaf: true },\n      ],\n    }\n  },\n  methods: {\n    expand(data){\n      console.log(data)\n    },\n    loadData(node, callback) {\n      //模拟异步请求\n      setTimeout(() => {\n        let data = [\n          { title: 'Child Node' },\n          { title: 'Child Node' }\n        ];\n        callback(data);\n      }, 1000)\n    }\n  }\n}\n<\/script>\n\n")])])])],2)},W=[],j={data(){return{data:[{title:"Expand to load"},{title:"Expand to load"},{title:"Tree Node",isLeaf:!0}]}},methods:{expand(e){console.log(e)},loadData(e,t){setTimeout((()=>{let e=[{title:"Child Node"},{title:"Child Node"}];t(e)}),1e3)}}},G=j,H=(0,r.Z)(G,Q,W,!1,null,null,null),J=H.exports,M=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("Tree",{attrs:{data:e.data,expandedKeys:e.expandedKeys},on:{expand:e.expand}})],1),t("template",{slot:"description"},[t("h4",{attrs:{id:"自定义图标",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义图标"}},[e._v("自定义图标")])]),t("p",[e._v("可以针对不同的节点定制图标。")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v("<template>\n  <Tree :data=\"data\" @expand=\"expand\" :expandedKeys=\"expandedKeys\" />\n</template>\n<script>\nimport { FolderOpenOutline,FolderOutline,LogoFeishu,LogoTwitter,LogoQq,LogoWechat,LogoAndroid,LogoApple } from \"kui-icons\";\nexport default {\n  data() {\n    return {\n      FolderOpenOutline,FolderOutline,\n      expandedKeys: ['0-0', '1-0', '1-1', '1-2'],\n      data: [\n        {\n          title: 'src',\n          key: '0-0',\n          icon: FolderOpenOutline,\n          children: [\n            {\n              title: 'assets',\n              key: '1-0',\n              icon: FolderOpenOutline,\n              children: [\n                { title: 'main.js', icon: LogoTwitter, disabled: true },\n                { title: 'test.py', icon: LogoQq }\n              ]\n            },\n            {\n              title: 'pages',\n              expand: true,\n              key: '1-1',\n              icon: FolderOpenOutline,\n              children: [\n                { title: 'index.html', icon: LogoFeishu },\n                { title: 'index.md', icon: LogoWechat }\n              ]\n            },\n            {\n              title: 'app',\n              expand: true,\n              key: '1-2',\n              icon: FolderOpenOutline,\n              children: [\n                { title: 'zen.apk', icon: LogoAndroid },\n                { title: 'zen.ipa', icon: LogoApple }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n  methods: {\n    expand({ expanded, node }) {\n      node.icon = expanded ? FolderOpenOutline : FolderOutline\n    }\n  }\n}\n<\/script>\n\n")])])])],2)},U=[],V={data(){return{FolderOpenOutline:m.FolderOpenOutline,FolderOutline:m.FolderOutline,expandedKeys:["0-0","1-0","1-1","1-2"],data:[{title:"src",key:"0-0",icon:m.FolderOpenOutline,children:[{title:"assets",key:"1-0",icon:m.FolderOpenOutline,children:[{title:"main.js",icon:m.LogoTwitter,disabled:!0},{title:"test.py",icon:m.LogoQq}]},{title:"pages",expand:!0,key:"1-1",icon:m.FolderOpenOutline,children:[{title:"index.html",icon:m.LogoFeishu},{title:"index.md",icon:m.LogoWechat}]},{title:"app",expand:!0,key:"1-2",icon:m.FolderOpenOutline,children:[{title:"zen.apk",icon:m.LogoAndroid},{title:"zen.ipa",icon:m.LogoApple}]}]}]}},methods:{expand({expanded:e,node:t}){t.icon=e?m.FolderOpenOutline:m.FolderOutline}}},X=V,Y=(0,r.Z)(X,M,U,!1,null,null,null),$=Y.exports,ee=function(){var e=this,t=e._self._c;return t("Demo",[t("template",{slot:"component"},[t("div",[t("Checkbox",{attrs:{label:"Directory"},model:{value:e.directory,callback:function(t){e.directory=t},expression:"directory"}}),t("Checkbox",{attrs:{label:"showLine"},model:{value:e.showLine,callback:function(t){e.showLine=t},expression:"showLine"}}),t("Checkbox",{attrs:{label:"Draggable"},model:{value:e.draggable,callback:function(t){e.draggable=t},expression:"draggable"}}),t("Checkbox",{attrs:{label:"Checkable"},model:{value:e.checkable,callback:function(t){e.checkable=t},expression:"checkable"}}),t("Checkbox",{attrs:{label:"ShowIcon"},model:{value:e.showIcon,callback:function(t){e.showIcon=t},expression:"showIcon"}}),t("Checkbox",{attrs:{label:"ShowExtra"},model:{value:e.showExtra,callback:function(t){e.showExtra=t},expression:"showExtra"}}),t("br"),t("br"),t("Tree",{staticStyle:{width:"512px"},attrs:{data:e.data,directory:e.directory,draggable:e.draggable,checkable:e.checkable,"show-line":e.showLine,"show-icon":e.showIcon,"show-extra":e.showExtra,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeys},on:{expand:e.expand},scopedSlots:e._u([{key:"extra",fn:function({node:n,parent:a}){return[t("Icon",{attrs:{type:e.Add},on:{click:t=>e.append(t,n)}}),"0-0"!=n.key?t("Icon",{attrs:{type:e.Trash},on:{click:t=>e.remove(t,n,a)}}):e._e(),t("Icon",{attrs:{type:e.IconEdit},on:{click:t=>e.edit(t,n)}})]}}])})],1)]),t("template",{slot:"description"},[t("h4",{attrs:{id:"群控",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群控"}},[e._v("群控")])]),t("p",[e._v("展示目录、连接线、拖动、复选框、图标、扩展")])]),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e._v('<template>\n  <div>\n    <Checkbox v-model="directory"\n      label="Directory" />\n    <Checkbox v-model="showLine"\n      label="showLine" />\n    <Checkbox v-model="draggable"\n      label="Draggable" />\n    <Checkbox v-model="checkable"\n      label="Checkable" />\n    <Checkbox v-model="showIcon"\n      label="ShowIcon" />\n    <Checkbox v-model="showExtra"\n      label="ShowExtra" />\n    <br />\n    <br />\n    <Tree :data="data"\n      style="width:512px"\n      @expand="expand"\n      :directory="directory"\n      :draggable="draggable"\n      :checkable="checkable"\n      :show-line="showLine"\n      :show-icon="showIcon"\n      :show-extra="showExtra"\n      :selectedKeys="selectedKeys"\n      :expandedKeys="expandedKeys">\n      <template v-slot:extra="{ node , parent}">\n        <Icon :type="Add"\n          @click="e=>append(e,node)" />\n        <Icon :type="Trash"\n          @click="e=>remove(e,node,parent)"\n          v-if="node.key!=\'0-0\'" />\n        <Icon :type="IconEdit"\n          @click="e=>edit(e,node)" />\n      </template>\n    </Tree>\n  </div>\n</template>\n<script>\nimport { Add, Trash, IconEdit, FolderOpenOutline, FolderOutline, LogoFeishu, LogoTwitter, LogoQq, LogoWechat, LogoAndroid, LogoApple } from "kui-icons";\nexport default {\n  data() {\n    return {\n      Add, Trash, IconEdit,\n      directory: true,\n      showLine: true,\n      showIcon: true,\n      draggable: true,\n      checkable: true,\n      showExtra: true,\n      expandedKeys: [\'0-0\', \'1-0\', \'1-1\', \'1-2\'],\n      selectedKeys: [\'0-0\'],\n      data: [\n        {\n          title: \'src\',\n          key: \'0-0\',\n          icon: FolderOpenOutline,\n          children: [\n            {\n              title: \'assets\',\n              key: \'1-0\',\n              icon: FolderOpenOutline,\n              children: [\n                { title: \'main.js\', icon: LogoTwitter, disabled: true },\n                { title: \'test.py\', icon: LogoQq }\n              ]\n            },\n            {\n              title: \'pages\',\n              key: \'1-1\',\n              icon: FolderOpenOutline,\n              children: [\n                { title: \'index.html\', icon: LogoFeishu },\n                { title: \'index.md\', icon: LogoWechat }\n              ]\n            },\n            {\n              title: \'app\',\n              key: \'1-2\',\n              icon: FolderOpenOutline,\n              children: [\n                { title: \'zen.apk\', icon: LogoAndroid },\n                { title: \'zen.ipa\', icon: LogoApple }\n              ]\n            }\n          ]\n        }\n      ],\n    }\n  },\n  methods: {\n    edit(e, node) {\n      e.stopPropagation()\n      let pop = prompt(\'修改节点名称\', node.title)\n      if (pop != null && pop.trim() != \'\') {\n        node.title = pop\n      }\n    },\n    append(e, node) {\n      e.stopPropagation()\n      const newChild = { title: \'Append Node\', children: [] };\n      if (!node.children) {\n        node.children = []\n      }\n      //展开节点\n      if (this.expandedKeys.indexOf(node.key) < 0) {\n        this.expandedKeys.push(node.key)\n      }\n      //添加子节点\n      node.children.push(newChild);\n    },\n    remove(e, node, parent) {\n      let { data } = this\n      const loop = (data, key, callback) => {\n        for (let i = 0; i < data.length; i++) {\n          if (data[i].key === key) {\n            return callback(data[i], i, data);\n          }\n          if (data[i].children) {\n            loop(data[i].children, key, callback);\n          }\n        }\n      };\n      loop(data, node.key, (item, index, arr) => {\n        arr.splice(index, 1);\n      })\n    },\n    expand({ expanded, node, expandedKeys }) {\n      node.icon = expanded ? FolderOpenOutline : FolderOutline\n      console.log(node)\n    }\n  }\n}\n<\/script>\n\n')])])])],2)},te=[],ne={data(){return{Add:m.Add,Trash:m.Trash,IconEdit:m.IconEdit,directory:!0,showLine:!0,showIcon:!0,draggable:!0,checkable:!0,showExtra:!0,expandedKeys:["0-0","1-0","1-1","1-2"],selectedKeys:["0-0"],data:[{title:"src",key:"0-0",icon:m.FolderOpenOutline,children:[{title:"assets",key:"1-0",icon:m.FolderOpenOutline,children:[{title:"main.js",icon:m.LogoTwitter,disabled:!0},{title:"test.py",icon:m.LogoQq}]},{title:"pages",key:"1-1",icon:m.FolderOpenOutline,children:[{title:"index.html",icon:m.LogoFeishu},{title:"index.md",icon:m.LogoWechat}]},{title:"app",key:"1-2",icon:m.FolderOpenOutline,children:[{title:"zen.apk",icon:m.LogoAndroid},{title:"zen.ipa",icon:m.LogoApple}]}]}]}},methods:{edit(e,t){e.stopPropagation();let n=prompt("修改节点名称",t.title);null!=n&&""!=n.trim()&&(t.title=n)},append(e,t){e.stopPropagation();const n={title:"Append Node",children:[]};t.children||(t.children=[]),this.expandedKeys.indexOf(t.key)<0&&this.expandedKeys.push(t.key),t.children.push(n)},remove(e,t,n){let{data:a}=this;const l=(e,t,n)=>{for(let a=0;a<e.length;a++){if(e[a].key===t)return n(e[a],a,e);e[a].children&&l(e[a].children,t,n)}};l(a,t.key,((e,t,n)=>{n.splice(t,1)}))},expand({expanded:e,node:t,expandedKeys:n}){t.icon=e?m.FolderOpenOutline:m.FolderOutline,console.log(t)}}},ae=ne,le=(0,r.Z)(ae,ee,te,!1,null,null,null),de=le.exports,oe=function(){var e=this;e._self._c;return e._m(0)},re=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"markdown-body"},[t("h2",{attrs:{id:"tree-api",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-api"}},[e._v("Tree API")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("data")]),t("td",[e._v("可嵌套的节点属性的数组，生成 "),t("code",{pre:!0},[e._v("tree")]),e._v(" 的数据")]),t("td",[e._v("Array")]),t("td",[e._v("[]")])]),t("tr",[t("td",[e._v("checkable")]),t("td",[e._v("是否显示多选框")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("draggable")]),t("td",[e._v("是否可以拖拽")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-line")]),t("td",[e._v("是否展示连接线")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-icon")]),t("td",[e._v("是否展示图标")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("show-extra")]),t("td",[e._v("是否默认展示扩展元素")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])])])]),t("h2",{attrs:{id:"treenode-api",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treenode-api"}},[e._v("TreeNode API")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("title")]),t("td",[e._v("节点标题")]),t("td",[e._v("String")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("自定义图标")]),t("td",[e._v("String")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用节点")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("children")]),t("td",[e._v("子节点")]),t("td",[e._v("Array")]),t("td",[e._v("-")])])])]),t("h2",{attrs:{id:"tree-事件",tabindex:"-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-事件"}},[e._v("Tree 事件")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("属性")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("load-data")]),t("td",[e._v("异步加载数据的方法")]),t("td",[e._v("Function(node,callback)")])]),t("tr",[t("td",[e._v("select")]),t("td",[e._v("点击树节点时触发")]),t("td",[e._v("Function({selectedKeys,selected,node,vnode})")])]),t("tr",[t("td",[e._v("check")]),t("td",[e._v("点击复选框时触发")]),t("td",[e._v("Function({checkedKeys,checked,node,vnode})")])]),t("tr",[t("td",[e._v("expand")]),t("td",[e._v("展开和收起子节点时触发")]),t("td",[e._v("Function({expandedKeys,expanded,node,vnode})")])]),t("tr",[t("td",[e._v("dragstart")]),t("td",[e._v("开始拖拽时调用")]),t("td",[e._v("Function({event,node})")])]),t("tr",[t("td",[e._v("dragend")]),t("td",[e._v("dragend 触发时调用")]),t("td",[e._v("Function({event,node})")])]),t("tr",[t("td",[e._v("dragenter")]),t("td",[e._v("dragenter 触发时调用")]),t("td",[e._v("Function({event, node, expandedKeys})")])]),t("tr",[t("td",[e._v("dragleave")]),t("td",[e._v("dragleave 触发时调用")]),t("td",[e._v("Function({event,node})")])]),t("tr",[t("td",[e._v("drop")]),t("td",[e._v("drop 触发时调用")]),t("td",[e._v("Function({event,node,dragNode})")])])])])])}],ie={},se=(0,r.Z)(ie,oe,re,!1,null,null,null),ce=se.exports,pe={render(){const e=arguments[0];return e("div",{class:"demo-tree"},[e(c),e(k),e(T),e(C),e(B),e(P),e(J),e($),e(de),e(ce)])}},he=pe,ue=(0,r.Z)(he,a,l,!1,null,null,null),ye=ue.exports}}]);