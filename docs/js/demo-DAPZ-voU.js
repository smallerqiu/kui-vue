import{$t as e,Cn as t,Ct as n,Tt as r,_t as i,et as a,fn as o,gt as s,lt as c,p as l,pn as u,tt as d,vt as f,wt as p}from"./vue-B8LCe6Yo.js";import{m,o as h}from"./index-_kkE29nq.js";var g=m({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Tree 树形控件`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`文件夹、组织架构、生物分类、国家地区等等,世间万物的大多数结构都是树形结构。使用`),t(`code`,[e._v(`树控件`)]),e._v(` 可以完整展现其中的层级关系并具有展开收起选择等交互功能。`)]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,_=m({__name:`basic`,setup(e){return{__sfc:!0,expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,disabled:!0,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,key:`1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]},{title:`tree 1-3`,key:`1-3`,children:[{title:`leaf 1-3-1`,key:`1-3-1`},{title:`leaf 1-3-2`,key:`1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-492e2a64`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Tree`,{attrs:{data:n.data,expandedKeys:n.expandedKeys}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`基础用法`)]),t(`p`,[e._v(`最简单的用法，展示可选中，默认展开功能。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
          {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
              { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-1"`)]),e._v(` },
              { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-2"`)]),e._v(` },
            ],
          },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-1"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-2"`)]),e._v(` },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-3"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-3"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-3-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-3-1"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-3-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-3-2"`)]),e._v(` },
        ],
      },
    ],
  },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,v=m({__name:`checkable`,setup(e){return{__sfc:!0,checkStrictly:t(!1),checkedKeys:[`1-1`,`aa`],expandedKeys:[`1-1`,`1-1-2`,`1-2`,`0-1`],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`aa`},{title:`leaf 1-2-2`,key:`bb`}]}]}],check:e=>{console.log(e)}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-61604ecc`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Checkbox`,{model:{value:n.checkStrictly,callback:function(e){n.checkStrictly=e},expression:`checkStrictly`}},[e._v(`父子节点不关联`)]),t(`br`),t(`br`),t(`Tree`,{attrs:{data:n.data,checkable:``,checkedKeys:n.checkedKeys,expandedKeys:n.expandedKeys,checkStrictly:n.checkStrictly},on:{check:n.check}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`可勾选`)]),t(`p`,[e._v(`设置属性 `),t(`code`,[e._v(`checkable`)]),e._v(` 可以对节点进行勾选。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(`>`)]),e._v(`父子节点不关联`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkable`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkedKeys"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`check`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"check"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkStrictly`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(`
  />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` checkStrictly = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` checkedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"aa"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2"`)]),e._v(` ,`),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`},
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"aa"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"bb"`)]),e._v(` },
        ],
      },
    ],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`check`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,y=m({__name:`custom-render`,setup(e){return{__sfc:!0,expandedKeys:t([`0-0`]),data:[{title:`tree 1`,key:`0-0`,children:[{title:`tree 1-1`,key:`0-0-1`,children:[{title:`leaf 1-1-1`,key:`0-0-1-1`},{title:`leaf 1-1-2`,key:`0-0-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,key:`1-1-2-2`}]}]}]}],test:e=>{h.info(e.title)},expand:e=>{console.log(e)}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-6771d20a`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Tree`,{attrs:{data:n.data,expandedKeys:n.expandedKeys,showExtra:``},on:{expand:n.expand},scopedSlots:e._u([{key:`extra`,fn:function(r){return[t(`Button`,{staticStyle:{"margin-right":`5px`},attrs:{size:`small`},on:{click:function(e){return n.test(r)}}},[e._v(` test `)])]}}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`扩展节点`)]),t(`p`,[e._v(`节点的扩展节点`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showExtra`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-slot:extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"test(node)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"margin-right:5px"`)]),e._v(`>`)]),e._v(`
        test
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { message } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0-1-1"`)]),e._v(` },
          {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0-1-2"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
              { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-1"`)]),e._v(` },
              { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-2"`)]),e._v(` },
            ],
          },
        ],
      },
    ],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`test`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`node`)]),e._v(`) => {
  message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`title`)]),e._v(`);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,b=m({__name:`disabled`,setup(e){return{__sfc:!0,expandedKeys:[`0-0`,`1-0`,`1-1`],checkedKeys:[`1-0-0`],data:[{title:`tree 1`,key:`0-0`,children:[{title:`tree 1-1`,key:`1-0`,disabled:!0,children:[{title:`leaf 1-1-1`,key:`1-0-0`,disabled:!0},{title:`leaf 1-1-2`,key:`1-0-1`}]},{title:`tree 1-2`,key:`1-1`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]}]}],check:e=>{console.log(e)}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-9053891c`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Tree`,{attrs:{data:n.data,checkable:``,checkedKeys:n.checkedKeys,expandedKeys:n.expandedKeys},on:{check:n.check}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`禁用节点`)]),t(`p`,[e._v(`设置属性 `),t(`code`,[e._v(`disabled`)]),e._v(` 可以禁用节点。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkable`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`check`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"check"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkedKeys"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
  />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` checkedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-0"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-1"`)]),e._v(` },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-1"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-2"`)]),e._v(` },
        ],
      },
    ],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`check`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,x=m({__name:`sync`,setup(e){let n=t([{title:`Expand to load`,key:`0-0`},{title:`Expand to load`,key:`0-1`},{title:`Tree Node`,isLeaf:!0,key:`0-2`}]),{proxy:r}=o(),i=e=>{console.log(e)},a=(e,t,n)=>{for(let i of e){if(i.key===t)return`children`in i?i.children=n:r.$set(i,`children`,n),!0;if(i.children&&i.children.length>0&&a(i.children,t,n))return!0}return!1},s=0;return{__sfc:!0,data:n,proxy:r,expand:i,insertChildren:a,loadCount:s,loadData:e=>new Promise((t,r)=>{s+=1,setTimeout(()=>{let r=[{title:`Child Node`,isLeaf:s>=2,key:e.key+`-0`},{title:`Child Node`,isLeaf:s>=3,key:e.key+`-1`}];a(n.value,e.key,r),t()},1e3)})}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-4fef6f73`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Tree`,{attrs:{data:n.data},on:{loadData:n.loadData,expand:n.expand}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`异步加载`)]),t(`p`,[e._v(`点击展开节点，动态加载数据 , `),t(`code`,[e._v(`isLeaf=true`)]),e._v(` 表示当前节点是叶子节点,不会有子集`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`loadData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loadData"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref, getCurrentInstance } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Expand to load"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Expand to load"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tree Node"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isLeaf`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-2"`)]),e._v(` },
]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` { proxy } = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`getCurrentInstance`)]),e._v(`();
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`insertChildren`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`nodes, targetKey, childrenData`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`for`)]),e._v(` (`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` node `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`of`)]),e._v(` nodes) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(` === targetKey) {
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 找到目标节点，插入数据`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// node.children = childrenData; // for vue 3`)]),e._v(`

      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// for vue 2`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (!(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"children"`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`in`)]),e._v(` node)) {
        `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 如果 'children' 属性不存在，必须用 Vue.set`)]),e._v(`
        proxy.$set(node, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"children"`)]),e._v(`, childrenData);
      } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` {
        `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 如果 'children' 属性已存在，直接赋值是安全的`)]),e._v(`
        node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(` = childrenData;
      }
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 插入成功`)]),e._v(`
    }

    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 递归查找子节点`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(` && node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(` > `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`insertChildren`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`, targetKey, childrenData)) {
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 子树中找到并插入成功`)]),e._v(`
      }
    }
  }
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 未找到`)]),e._v(`
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` loadCount = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loadData`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`node`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Promise`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`resolve, reject`)]),e._v(`) =>`)]),e._v(` {
    loadCount += `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//模拟异步请求`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` fetchedChildren = [
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Child Node"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isLeaf`)]),e._v(`: loadCount >= `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(` + `),t(`span`,{staticClass:`hljs-string`},[e._v(`"-0"`)]),e._v(` },
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Child Node"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isLeaf`)]),e._v(`: loadCount >= `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(` + `),t(`span`,{staticClass:`hljs-string`},[e._v(`"-1"`)]),e._v(` },
      ];
      `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`insertChildren`)]),e._v(`(data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`, fetchedChildren);
      `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`resolve`)]),e._v(`();
    }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1000`)]),e._v(`);
  });
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,S=m({__name:`icon`,setup(e){return{__sfc:!0,expandedKeys:[`0-0`,`1-0`,`1-1`,`1-2`],data:[{title:`src`,key:`0-0`,icon:a,children:[{title:`assets`,key:`1-0`,icon:a,children:[{title:`main.js`,icon:p,disabled:!0,key:`1-0-0`},{title:`test.py`,icon:n,key:`1-0-1`}]},{title:`pages`,expand:!0,key:`1-1`,icon:a,children:[{title:`index.html`,icon:f,key:`1-1-0`},{title:`index.md`,icon:r,key:`1-1-1`}]},{title:`app`,expand:!0,key:`1-2`,icon:a,children:[{title:`zen.apk`,icon:s,key:`1-2-0`},{title:`zen.ipa`,icon:i,key:`1-2-1`}]}]}],expand:({expanded:e,node:t})=>{t.icon=e?a:d}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-197998d5`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Tree`,{attrs:{data:n.data,expandedKeys:n.expandedKeys},on:{expand:n.expand}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`自定义图标`)]),t(`p`,[e._v(`可以针对不同的节点定制图标。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`,
} `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"src"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"assets"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"main.js"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-0"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"test.py"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-1"`)]),e._v(` },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"pages"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"index.html"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-0"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"index.md"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"app"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"zen.apk"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-0"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"zen.ipa"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-1"`)]),e._v(` },
        ],
      },
    ],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`{ expanded, node }`)]),e._v(`) => {
  node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`icon`)]),e._v(` = expanded ? `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(` : `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`;
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,C=m({__name:`directory`,setup(u){let m=t(!0),h=t(!0),g=t(!0),_=t(!0),v=t(!0),y=t(!0),b=t([`0-0`,`1-0`,`1-1`,`1-2`]),x=t(!1),S=t(!1),{proxy:C}=o(),w=[`0-0`],T=t([{title:`src`,key:`0-0`,icon:a,children:[{title:`assets`,key:`1-0`,icon:a,children:[{title:`main.js`,icon:p,disabled:!0,key:`1-0-0`},{title:`test.py`,icon:n,key:`1-0-1`}]},{title:`pages`,key:`1-1`,icon:a,children:[{title:`index.html`,icon:f,key:`1-1-1`},{title:`index.md`,icon:r,key:`1-1-2`}]},{title:`app`,key:`1-2`,icon:a,children:[{title:`zen.apk`,icon:s,key:`1-2-1`},{title:`zen.ipa`,icon:i,key:`1-2-2`}]}]},{title:`src11`,key:`0-1`,icon:a}]),E=(e,t)=>{e.stopPropagation();let n=prompt(`修改节点名称`,t.title);n!=null&&n.trim()!=``&&(t.title=n)},D=(e,t,n)=>{for(let r of e){if(r.key===t)return`children`in r||(r.icon=a,C.$set(r,`children`,[])),r.children.push(n),!0;if(r.children&&r.children.length>0&&D(r.children,t,n))return!0}return!1},O=t(0);return{__sfc:!0,directory:m,showLine:h,showIcon:g,draggable:_,checkable:v,showExtra:y,expandedKeys:b,checkStrictly:x,multiple:S,proxy:C,selectedKeys:w,data:T,edit:E,insertChildren:D,addIndex:O,append:(e,t)=>{e.stopPropagation(),O.value+=1;let n={title:`Append Node`,key:`${t.key}-1-${O.value}`};D(T.value,t.key,n);let r=b.value;r.indexOf(t.key)<0&&(r.push(t.key),b.value=r)},deleteNode:(e,t)=>{let n=(e,t,r)=>{for(let i=0;i<e.length;i++){if(e[i].key===t)return r(e[i],i,e);e[i].children&&n(e[i].children,t,r)}};n(T.value,t.key,(e,t,n)=>{n.splice(t,1)})},expand:({expanded:e,node:t,expandedKeys:n})=>{t.icon=e?a:d,console.log(t)},onCheck:(e,t)=>{console.log(e,t)},Add:l,Trash:e,IconEdit:c}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-7e791ea2`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`div`,[t(`Space`,{attrs:{wrap:``}},[t(`Checkbox`,{attrs:{label:`Directory`},model:{value:n.directory,callback:function(e){n.directory=e},expression:`directory`}}),t(`Checkbox`,{attrs:{label:`showLine`},model:{value:n.showLine,callback:function(e){n.showLine=e},expression:`showLine`}}),t(`Checkbox`,{attrs:{label:`Draggable`},model:{value:n.draggable,callback:function(e){n.draggable=e},expression:`draggable`}}),t(`Checkbox`,{attrs:{label:`Checkable`},model:{value:n.checkable,callback:function(e){n.checkable=e},expression:`checkable`}}),t(`Checkbox`,{attrs:{label:`ShowIcon`},model:{value:n.showIcon,callback:function(e){n.showIcon=e},expression:`showIcon`}}),t(`Checkbox`,{attrs:{label:`ShowExtra`},model:{value:n.showExtra,callback:function(e){n.showExtra=e},expression:`showExtra`}}),t(`Checkbox`,{attrs:{label:`Multiple`},model:{value:n.multiple,callback:function(e){n.multiple=e},expression:`multiple`}}),t(`Checkbox`,{attrs:{label:`checkStrictly`},model:{value:n.checkStrictly,callback:function(e){n.checkStrictly=e},expression:`checkStrictly`}})],1),t(`br`),t(`br`),t(`Tree`,{attrs:{data:n.data,directory:n.directory,draggable:n.draggable,checkable:n.checkable,multiple:n.multiple,showLine:n.showLine,showIcon:n.showIcon,showExtra:n.showExtra,selectedKeys:n.selectedKeys,expandedKeys:n.expandedKeys,checkStrictly:n.checkStrictly},on:{expand:n.expand,check:n.onCheck},scopedSlots:e._u([{key:`extra`,fn:function(r){return[t(`Space`,[t(`Button`,{attrs:{size:`small`,type:`text`,icon:n.Add},on:{click:e=>n.append(e,r)}}),r.key==`0-0`?e._e():t(`Button`,{attrs:{size:`small`,type:`text`,icon:n.Trash},on:{click:e=>n.deleteNode(e,r)}}),t(`Button`,{attrs:{size:`small`,type:`text`,icon:n.IconEdit},on:{click:e=>n.edit(e,r)}})],1)]}}])})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`群控`)]),t(`p`,[e._v(`展示目录、连接线、拖动、复选框、图标、扩展`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrap`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"directory"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Directory"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showLine"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showLine"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"draggable"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Draggable"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkable"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Checkable"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showIcon"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"ShowIcon"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showExtra"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"ShowExtra"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"multiple"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Multiple"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`check`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"onCheck"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:directory`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"directory"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:draggable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"draggable"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkable"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:multiple`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"multiple"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showLine`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showLine"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showIcon"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showExtra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showExtra"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:selectedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"selectedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkStrictly`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Add"`)]),e._v(`
            @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(e) => append(e, node)"`)]),e._v(`
          />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Trash"`)]),e._v(`
            @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(e) => deleteNode(e, node)"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node.key != '0-0'"`)]),e._v(`
          />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"IconEdit"`)]),e._v(`
            @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(e) => edit(e, node)"`)]),e._v(`
          />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Trash`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`IconEdit`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`,
} `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref, getCurrentInstance } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` directory = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` showLine = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` showIcon = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` draggable = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` checkable = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` showExtra = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` checkStrictly = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` multiple = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` { proxy } = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`getCurrentInstance`)]),e._v(`();
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` selectedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"src"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"assets"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"main.js"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-0"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"test.py"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-0-1"`)]),e._v(` },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"pages"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"index.html"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"index.md"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(` },
        ],
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"app"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"zen.apk"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-1"`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"zen.ipa"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-2"`)]),e._v(` },
        ],
      },
    ],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"src11"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
  },
]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`edit`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`e, node`)]),e._v(`) => {
  e.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`stopPropagation`)]),e._v(`();
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` pop = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`prompt`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"修改节点名称"`)]),e._v(`, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`title`)]),e._v(`);
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (pop != `),t(`span`,{staticClass:`hljs-literal`},[e._v(`null`)]),e._v(` && pop.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`trim`)]),e._v(`() != `),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`) {
    node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`title`)]),e._v(` = pop;
  }
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`insertChildren`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`nodes, targetKey, childrenData`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`for`)]),e._v(` (`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` node `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`of`)]),e._v(` nodes) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(` === targetKey) {
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 找到目标节点，插入数据`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// node.children = childrenData; // for vue 3`)]),e._v(`

      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// for vue 2`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (!(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"children"`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`in`)]),e._v(` node)) {
        node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`icon`)]),e._v(` = `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 如果 'children' 属性不存在，必须用 Vue.set`)]),e._v(`
        proxy.$set(node, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"children"`)]),e._v(`, []);
      }
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 如果 'children' 属性已存在，直接赋值是安全的`)]),e._v(`
      node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(childrenData);
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 插入成功`)]),e._v(`
    }

    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 递归查找子节点`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(` && node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(` > `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`insertChildren`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`, targetKey, childrenData)) {
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 子树中找到并插入成功`)]),e._v(`
      }
    }
  }
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 未找到`)]),e._v(`
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` addIndex = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`append`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`e, node`)]),e._v(`) => {
  e.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`stopPropagation`)]),e._v(`();
  addIndex.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` += `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` newChild = {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Append Node"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${node.key}")]),e._v(`-1-`),t(`span`,{staticClass:`hljs-subst`},[e._v("${addIndex.value}")]),e._v("`")]),e._v(`,
  };

  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`insertChildren`)]),e._v(`(data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`, newChild);


  `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//展开节点`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` keys = expandedKeys.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (keys.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`indexOf`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`) < `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`) {
    keys.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`);
    expandedKeys.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = keys;
  }
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`deleteNode`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`e, node`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loop`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`data, key, callback`)]),e._v(`) => {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`for`)]),e._v(` (`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` i = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`; i < data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(`; i++) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (data[i].`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(` === key) {
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`callback`)]),e._v(`(data[i], i, data);
      }
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (data[i].`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loop`)]),e._v(`(data[i].`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`, key, callback);
      }
    }
  };
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loop`)]),e._v(`(data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`, `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`item, index, arr`)]),e._v(`) =>`)]),e._v(` {
    arr.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`splice`)]),e._v(`(index, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`);
  });
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`{ expanded, node, expandedKeys }`)]),e._v(`) => {
  node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`icon`)]),e._v(` = expanded ? `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(` : `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(node);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`onCheck`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`node, checked`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(node, checked);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,w=m({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`tree-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-api`}},[e._v(`Tree API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`data`)]),t(`td`,[e._v(`可嵌套的节点属性的数组，生成 `),t(`code`,[e._v(`tree`)]),e._v(` 的数据`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`checkable`)]),t(`td`,[e._v(`是否显示多选框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`draggable`)]),t(`td`,[e._v(`是否可以拖拽`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`showLine`)]),t(`td`,[e._v(`是否展示连接线`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`showIcon`)]),t(`td`,[e._v(`是否展示图标`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`extra`)]),t(`td`,[e._v(`扩展元素`)]),t(`td`,[e._v(`slot(node)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`showExtra`)]),t(`td`,[e._v(`是否默认展示扩展元素`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`checkStrictly`)]),t(`td`,[e._v(`checkable 状态下节点选择完全受控（父子节点选中状态不再关联）`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`checkedKeys`)]),t(`td`,[e._v(`选中复选框的树节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`expandedKeys`)]),t(`td`,[e._v(`指定展开的节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`selectedKeys`)]),t(`td`,[e._v(`选中的节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`multiple`)]),t(`td`,[e._v(`是否支持多选`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`loading`)]),t(`td`,[e._v(`异步加载状态`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])])])]),t(`h2`,{attrs:{id:`treenode-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#treenode-api`}},[e._v(`TreeNode API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`节点标题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用节点`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`children`)]),t(`td`,[e._v(`子节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`isLeaf`)]),t(`td`,[e._v(`设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])])])]),t(`h2`,{attrs:{id:`tree-事件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-事件`}},[e._v(`Tree 事件`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`回调参数`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`loadData`)]),t(`td`,[e._v(`异步加载数据的方法`)]),t(`td`,[e._v(`Promise Function(node)`)])]),t(`tr`,[t(`td`,[e._v(`select`)]),t(`td`,[e._v(`点击树节点时触发`)]),t(`td`,[e._v(`Function(node)`)])]),t(`tr`,[t(`td`,[e._v(`check`)]),t(`td`,[e._v(`点击复选框时触发`)]),t(`td`,[e._v(`Function(node,checked,checkedKeys)`)])]),t(`tr`,[t(`td`,[e._v(`expand`)]),t(`td`,[e._v(`展开和收起子节点时触发`)]),t(`td`,[e._v(`Function({key,expanded,node})`)])]),t(`tr`,[t(`td`,[e._v(`dragstart`)]),t(`td`,[e._v(`开始拖拽时调用`)]),t(`td`,[e._v(`Function(node)`)])]),t(`tr`,[t(`td`,[e._v(`dragend`)]),t(`td`,[e._v(`dragend 触发时调用`)]),t(`td`,[e._v(`Function(node)`)])]),t(`tr`,[t(`td`,[e._v(`dragenter`)]),t(`td`,[e._v(`dragenter 触发时调用`)]),t(`td`,[e._v(`Function(node)`)])]),t(`tr`,[t(`td`,[e._v(`dragleave`)]),t(`td`,[e._v(`dragleave 触发时调用`)]),t(`td`,[e._v(`Function(node)`)])]),t(`tr`,[t(`td`,[e._v(`drop`)]),t(`td`,[e._v(`drop 触发时调用`)]),t(`td`,[e._v(`Function({dragNode,dropNode})`)])])])])])}],!1,null,null,null,null).exports,T={render(){return u(`div`,[u(g),u(_),u(v),u(y),u(b),u(x),u(S),u(C),u(w)])}};export{T as default};