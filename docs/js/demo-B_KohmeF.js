import{E as e,Gt as t,Tn as n,mn as r,pn as i}from"./vue-CQGPvsrV.js";import{m as a}from"./index-DxuXnqZb.js";var o=a({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`TreeSelect 树选择`)]),t(`p`,[e._v(`树型选择控件。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。`)]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,s=a({__name:`basic`,setup(e){return{__sfc:!0,expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value:n(),data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,children:[{title:`leaf 1-1-1`,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,key:`1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]},{title:`tree 1-3`,key:`1-3`,children:[{title:`leaf 1-3-1`,key:`1-3-1`},{title:`leaf 1-3-2`,key:`1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-703aca1a`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`TreeSelect`,{attrs:{"tree-data":n.data,"tree-showLine":``,treeExpandedKeys:n.expandedKeys,block:``},model:{value:n.value,callback:function(e){n.value=e},expression:`value`}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`基础用法`)]),t(`p`,[e._v(`最简单的用法。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-showLine`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
  />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`();
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
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
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,c=a({__name:`multiple`,setup(e){return{__sfc:!0,expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value1:n([`0-1`,`1-1`]),value2:n([`0-1`,`1-1-2`,`1-1-2-1`,`1-2-1`]),data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,children:[{title:`leaf 1-1-1`,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,key:`1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]},{title:`tree 1-3`,key:`1-3`,children:[{title:`leaf 1-3-1`,key:`1-3-1`},{title:`leaf 1-3-2`,key:`1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-4888f6dc`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`TreeSelect`,{attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,multiple:``,filterable:``,clearable:``,block:``},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`br`),e._v(` maxTagCount `),t(`TreeSelect`,{staticStyle:{width:`100%`},attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,multiple:``,maxTagCount:2,filterable:``,clearable:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`多选`)]),t(`p`,[e._v(`多选的树选择。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`clearable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    maxTagCount
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:100%"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`clearable`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-1"`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
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
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,l=a({__name:`checkable`,setup(e){return{__sfc:!0,expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value:n([]),treeCheckStrictly:n(!1),data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,children:[{title:`leaf 1-1-1`,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,key:`1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]},{title:`tree 1-3`,key:`1-3`,children:[{title:`leaf 1-3-1`,key:`1-3-1`},{title:`leaf 1-3-2`,key:`1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-436d9c34`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`Checkbox`,{model:{value:n.treeCheckStrictly,callback:function(e){n.treeCheckStrictly=e},expression:`treeCheckStrictly`}},[e._v(`TreeCheckStrictly`)]),t(`TreeSelect`,{attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,multiple:``,block:``,treeCheckable:``,treeCheckStrictly:n.treeCheckStrictly},model:{value:n.value,callback:function(e){n.value=e},expression:`value`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`可勾选`)]),t(`p`,[e._v(`使用勾选框实现多选功能。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"treeCheckStrictly"`)]),e._v(`>`)]),e._v(`TreeCheckStrictly`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`treeCheckable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeCheckStrictly`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"treeCheckStrictly"`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` treeCheckStrictly = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
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
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,u=a({__name:`disabled`,setup(e){return{__sfc:!0,expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value1:n([`0-1`,`1-1`]),value2:n([`0-1`,`1-1-2`,`1-1-2-1`,`1-2-1`]),data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,disabled:!0,key:`1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]},{title:`tree 1-3`,key:`1-3`,children:[{title:`leaf 1-3-1`,key:`1-3-1`},{title:`leaf 1-3-2`,key:`1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-0ae688a6`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`TreeSelect`,{attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,filterable:``,disabled:``,block:``},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`TreeSelect`,{attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,multiple:``,filterable:``,disabled:``,block:``},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),e._v(` disabled items `),t(`TreeSelect`,{attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,multiple:``,treeCheckable:``,maxTagCount:2,filterable:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}}),e._v(` clearable=false `),t(`TreeSelect`,{attrs:{"tree-data":n.data,treeExpandedKeys:n.expandedKeys,multiple:``,treeCheckable:``,maxTagCount:2,filterable:``,clearable:!1},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`禁用`)]),t(`p`,[e._v(`禁用状态`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
    disabled items
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`treeCheckable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
    />`)]),e._v(`
    clearable=false
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`treeCheckable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:clearable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2-1"`)]),e._v(`]);
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
          {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
              { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-1"`)]),e._v(` },
              { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-2-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2-2"`)]),e._v(` },
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
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,d=a({__name:`sync`,setup(e){let t=n([{title:`Expand to load`,key:`0-0`},{title:`Expand to load`,key:`0-1`},{title:`Tree Node`,isLeaf:!0,key:`0-2`}]),r=n([]),{proxy:a}=i(),o=e=>{console.log(e)},s=(e,t,n)=>{for(let r of e){if(r.key===t)return`children`in r?r.children=n:a.$set(r,`children`,n),!0;if(r.children&&r.children.length>0&&s(r.children,t,n))return!0}return!1},c=0;return{__sfc:!0,data:t,expandedKeys:r,proxy:a,expand:o,insertChildren:s,loadCount:c,loadData:e=>new Promise((n,r)=>{c+=1,setTimeout(()=>{let r=[{title:`Child Node`,isLeaf:c>=2,key:e.key+`-0`},{title:`Child Node`,isLeaf:c>=3,key:e.key+`-1`}];s(t.value,e.key,r),n()},1e3)})}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-5cfe76a7`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`TreeSelect`,{attrs:{"tree-data":n.data,block:``},on:{treeLoadData:n.loadData,expand:n.expand},model:{value:n.expandedKeys,callback:function(e){n.expandedKeys=e},expression:`expandedKeys`}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`异步加载`)]),t(`p`,[e._v(`点击展开节点，动态加载数据。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`treeLoadData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loadData"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
  />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref, getCurrentInstance } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Expand to load"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-0"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Expand to load"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tree Node"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isLeaf`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-2"`)]),e._v(` },
]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([]);
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
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,f=a({__name:`size`,setup(e){return{__sfc:!0,sizes:[{value:`large`,label:`Large`},{value:`default`,label:`Default`},{value:`small`,label:`Small`}],size:n(`default`),expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value:n(),data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,children:[{title:`leaf 1-1-1`,key:`1-1-1`},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`,key:`1-1-2-1`},{title:`leaf 1-1-2-2`,key:`1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`1-2-1`},{title:`leaf 1-2-2`,key:`1-2-2`}]},{title:`tree 1-3`,key:`1-3`,children:[{title:`leaf 1-3-1`,key:`1-3-1`},{title:`leaf 1-3-2`,key:`1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-425aef81`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{staticStyle:{width:`300px`,"max-width":`100%`},attrs:{vertical:``,block:``}},[t(`RadioGroup`,{attrs:{options:n.sizes,type:`button`},model:{value:n.size,callback:function(e){n.size=e},expression:`size`}}),t(`TreeSelect`,{attrs:{size:n.size,"tree-data":n.data,"tree-showLine":``,treeExpandedKeys:n.expandedKeys,block:``},model:{value:n.value,callback:function(e){n.value=e},expression:`value`}}),t(`TreeSelect`,{attrs:{size:n.size,"tree-data":n.data,"tree-showLine":``,treeExpandedKeys:n.expandedKeys,block:``,multiple:``},model:{value:n.value,callback:function(e){n.value=e},expression:`value`}}),t(`TreeSelect`,{attrs:{size:n.size,"tree-data":n.data,"tree-showLine":``,treeExpandedKeys:n.expandedKeys,block:``,multiple:``,maxTagCount:2},model:{value:n.value,callback:function(e){n.value=e},expression:`value`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`尺寸`)]),t(`p`,[e._v(`选择框的尺寸有：`),t(`code`,[e._v(`small`)]),e._v(`、`),t(`code`,[e._v(`default`)]),e._v(`、`),t(`code`,[e._v(`large`)]),e._v(`。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width: 300px;max-width:100%"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"sizes"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"button"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-showLine`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-showLine`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-showLine`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` sizes = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Large"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Default"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Small"`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` size = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(`);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` expandedKeys = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`();
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1-1"`)]),e._v(` },
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
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,p=a({__name:`theme`,setup(n){return{__sfc:!0,value:[`0-1`,`1-1`],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`}]}],Search:t,CaretDown:e}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-18b0fe9f`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{staticStyle:{width:`300px`,"max-width":`100%`},attrs:{vertical:``,align:`start`,block:``}},[t(`TreeSelect`,{attrs:{shape:`circle`,treeData:n.data,placeholder:`我是一个圆角`,block:``}}),t(`TreeSelect`,{attrs:{shape:`circle`,block:``,icon:n.Search,treeData:n.data,block:``,placeholder:`我多了一个图标`}}),t(`TreeSelect`,{attrs:{filterable:``,block:``,theme:`light`,treeData:n.data,placeholder:`我的背景色是浅色`}}),t(`TreeSelect`,{attrs:{treeData:n.data,block:``,placeholder:`我没有下拉箭头`,showArrow:!1}}),t(`TreeSelect`,{attrs:{treeData:n.data,block:``,placeholder:`我的下拉箭头不一样`,arrowIcon:n.CaretDown}}),t(`TreeSelect`,{attrs:{bordered:!1,treeData:n.data,block:``,placeholder:`我没有边框`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`奇葩的定义`)]),t(`p`,[e._v(`一些奇奇怪怪的东西`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`align`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"start"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width: 300px;max-width:100%;"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`shape`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"circle"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我是一个圆角"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`shape`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"circle"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Search"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我多了一个图标"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`theme`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"light"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我的背景色是浅色"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我没有下拉箭头"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showArrow`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我的下拉箭头不一样"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:arrowIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CaretDown"`)]),e._v(`
    />`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:bordered`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我没有边框"`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CaretDown`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0-1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tree 1-1"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`,
      },
    ],
  },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,m=a({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`treeselect-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#treeselect-api`}},[e._v(`TreeSelect API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`指定选中项目的 `),t(`code`,[e._v(`value`)]),e._v(` 值，可以使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 双向绑定数据`)]),t(`td`,[e._v(`String,Number,Array`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`width`)]),t(`td`,[e._v(`组件宽度`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`placeholder`)]),t(`td`,[e._v(`选择框默认文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`请选择`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用当前项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`size`)]),t(`td`,[e._v(`组件尺寸大小,提供`),t(`code`,[e._v(`small`)]),e._v(`,`),t(`code`,[e._v(`large`)]),e._v(`两种尺寸，默认为正常`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`emptyText`)]),t(`td`,[e._v(`没有数据时展示的提示`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'赞无数据'`)])]),t(`tr`,[t(`td`,[e._v(`multiple`)]),t(`td`,[e._v(`是否呈现多选模式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`loading`)]),t(`td`,[e._v(`异步加载状态`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`clearable`)]),t(`td`,[e._v(`是否可以清空选项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`bordered`)]),t(`td`,[e._v(`是否显示边框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`showArrow`)]),t(`td`,[e._v(`是否显示下拉按钮`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`在选项状态发生改变时触发`)]),t(`td`,[e._v(`Function(value)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`theme`)]),t(`td`,[e._v(`theme='light' 时呈现浅色主题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`shape`)]),t(`td`,[e._v(`shape='circle' 时呈现圆角`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`select`)]),t(`td`,[e._v(`点击树节点时触发`)]),t(`td`,[e._v(`Function(value, label, selected)`)]),t(`td`,[e._v(`-`)])])])]),t(`h2`,{attrs:{id:`tree-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-api`}},[e._v(`Tree API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`treeData`)]),t(`td`,[e._v(`可嵌套的节点属性的数组，生成 `),t(`code`,[e._v(`tree`)]),e._v(` 的数据`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`treeCheckable`)]),t(`td`,[e._v(`是否显示多选框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`showLine`)]),t(`td`,[e._v(`是否展示连接线`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`showIcon`)]),t(`td`,[e._v(`是否展示图标`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`treeExpandedKeys`)]),t(`td`,[e._v(`指定展开的节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])])])]),t(`h2`,{attrs:{id:`tree-事件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-事件`}},[e._v(`Tree 事件`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`回调参数`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`treeLoadData`)]),t(`td`,[e._v(`异步加载数据的方法`)]),t(`td`,[e._v(`Function(node)`)])])])])])}],!1,null,null,null,null).exports,h={render(){return r(`div`,[r(o),r(s),r(c),r(l),r(u),r(d),r(f),r(p),r(m)])}};export{h as default};