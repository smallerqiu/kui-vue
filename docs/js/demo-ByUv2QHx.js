import{Bt as e,zt as t}from"./index-Dw-BZmPh.js";var n=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`TreeSelect 树选择`)]),t(`p`,[e._v(`树型选择控件。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。`)]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,r=t({data(){return{expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value:``,data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,disabled:!0},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`},{title:`leaf 1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`},{title:`leaf 1-2-2`}]},{title:`tree 1-3`,children:[{title:`leaf 1-3-1`},{title:`leaf 1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`TreeSelect`,{attrs:{"tree-data":e.data,"tree-show-line":``,treeExpandedKeys:e.expandedKeys,width:300,filterable:``},model:{value:e.value,callback:function(t){e.value=t},expression:`value`}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基础用法`)]),t(`p`,[e._v(`最简单的用法。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-show-line`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:width`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"300"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`/>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`''`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
                {
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-1'`)]),e._v(` },
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-2'`)]),e._v(` }
                  ]
                }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-2'`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-3'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-3-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-3-2'`)]),e._v(` }
              ]
            }
          ]
        }
      ],
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,i=t({data(){return{expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value:[],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,disabled:!0},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`},{title:`leaf 1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`},{title:`leaf 1-2-2`}]},{title:`tree 1-3`,children:[{title:`leaf 1-3-1`},{title:`leaf 1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`TreeSelect`,{attrs:{"tree-data":e.data,treeExpandedKeys:e.expandedKeys,multiple:``,width:500,filterable:``,clearable:``},model:{value:e.value,callback:function(t){e.value=t},expression:`value`}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`多选`)]),t(`p`,[e._v(`多选的树选择。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:width`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"500"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`clearable`)]),e._v(`/>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`:[],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
                {
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-1'`)]),e._v(` },
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-2'`)]),e._v(` }
                  ]
                }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-2'`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-3'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-3-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-3-2'`)]),e._v(` }
              ]
            }
          ]
        }
      ],
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,a=t({data(){return{expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],value:[],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,disabled:!0},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`},{title:`leaf 1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`},{title:`leaf 1-2-2`}]},{title:`tree 1-3`,children:[{title:`leaf 1-3-1`},{title:`leaf 1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`TreeSelect`,{attrs:{"tree-data":e.data,treeExpandedKeys:e.expandedKeys,multiple:``,"tree-checkable":``,width:300},model:{value:e.value,callback:function(t){e.value=t},expression:`value`}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`可勾选`)]),t(`p`,[e._v(`使用勾选框实现多选功能。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeExpandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-checkable`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:width`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"300"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`:[],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
                {
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-1'`)]),e._v(` },
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-2'`)]),e._v(` }
                  ]
                }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-2'`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-3'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-3-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-3-2'`)]),e._v(` }
              ]
            }
          ]
        }
      ],
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,o=t({data(){return{data:[{title:`Expand to load`},{title:`Expand to load`},{title:`Tree Node`,isLeaf:!0}]}},methods:{expand(e){console.log(e)},loadData(e,t){setTimeout(()=>{t([{title:`Child Node`},{title:`Child Node`}])},1e3)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`TreeSelect`,{attrs:{"tree-data":e.data,width:300},on:{"tree-load-data":e.loadData,expand:e.expand}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`异步加载`)]),t(`p`,[e._v(`点击展开节点，动态加载数据。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:tree-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`tree-load-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loadData"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:width`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"300"`)]),e._v(`/>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Expand to load'`)]),e._v(` },
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Expand to load'`)]),e._v(` },
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Tree Node'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isLeaf`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
      ],
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data)
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loadData`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`node, callback`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//模拟异步请求`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` data = [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Child Node'`)]),e._v(` },
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Child Node'`)]),e._v(` }
        ];
        `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`callback`)]),e._v(`(data);
      }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1000`)]),e._v(`)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,s=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`treeselect-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#treeselect-api`}},[e._v(`TreeSelect API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`指定选中项目的 `),t(`code`,[e._v(`value`)]),e._v(` 值，可以使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 双向绑定数据`)]),t(`td`,[e._v(`String,Number,Array`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`width`)]),t(`td`,[e._v(`组件宽度`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`placeholder`)]),t(`td`,[e._v(`选择框默认文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`请选择`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用当前项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`size`)]),t(`td`,[e._v(`组件尺寸大小,提供`),t(`code`,[e._v(`small`)]),e._v(`,`),t(`code`,[e._v(`large`)]),e._v(`两种尺寸，默认为正常`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`emptyText`)]),t(`td`,[e._v(`没有数据时展示的提示`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'赞无数据'`)])]),t(`tr`,[t(`td`,[e._v(`multiple`)]),t(`td`,[e._v(`是否呈现多选模式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`loading`)]),t(`td`,[e._v(`是否显示异步加载`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`clearable`)]),t(`td`,[e._v(`是否可以清空选项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`bordered`)]),t(`td`,[e._v(`是否显示边框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`showArrow`)]),t(`td`,[e._v(`是否显示下拉按钮`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`在选项状态发生改变时触发`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`open-change`)]),t(`td`,[e._v(`下拉框展开或收起时触发`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`theme`)]),t(`td`,[e._v(`theme='light' 时呈现浅色主题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`shape`)]),t(`td`,[e._v(`shape='circle' 时呈现圆角`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`select`)]),t(`td`,[e._v(`点击树节点时触发`)]),t(`td`,[e._v(`Function({selectedKeys,selected,node,vnode})`)]),t(`td`)])])]),t(`h2`,{attrs:{id:`tree-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-api`}},[e._v(`Tree API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`回调参数`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`tree-data`)]),t(`td`,[e._v(`可嵌套的节点属性的数组，生成 `),t(`code`,[e._v(`tree`)]),e._v(` 的数据`)]),t(`td`,[e._v(`Array`)])]),t(`tr`,[t(`td`,[e._v(`treeCheckable`)]),t(`td`,[e._v(`是否显示多选框`)]),t(`td`,[e._v(`Boolean`)])]),t(`tr`,[t(`td`,[e._v(`show-line`)]),t(`td`,[e._v(`是否展示连接线`)]),t(`td`,[e._v(`Boolean`)])]),t(`tr`,[t(`td`,[e._v(`show-icon`)]),t(`td`,[e._v(`是否展示图标`)]),t(`td`,[e._v(`Boolean`)])]),t(`tr`,[t(`td`,[e._v(`show-extra`)]),t(`td`,[e._v(`是否默认展示扩展元素`)]),t(`td`,[e._v(`Boolean`)])]),t(`tr`,[t(`td`,[e._v(`treeCheckStrictly`)]),t(`td`,[e._v(`checkable 状态下节点选择完全受控（父子节点选中状态不再关联）`)]),t(`td`,[e._v(`Boolean`)])]),t(`tr`,[t(`td`,[e._v(`treeExpandedKeys`)]),t(`td`,[e._v(`指定展开的节点`)]),t(`td`,[e._v(`Array`)])]),t(`tr`,[t(`td`,[e._v(`treeExpandedAll`)]),t(`td`,[e._v(`是否展开所有节点`)]),t(`td`,[e._v(`Boolean`)])])])]),t(`h2`,{attrs:{id:`tree-事件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-事件`}},[e._v(`Tree 事件`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`回调参数`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`tree-load-data`)]),t(`td`,[e._v(`异步加载数据的方法`)]),t(`td`,[e._v(`Function(node,callback)`)])])])])])}],!1,null,null,null,null).exports,c={render(){return e(`div`,{class:`demo-tree`},[e(n),e(r),e(i),e(a),e(o),e(s)])}};export{c as default};