import{$ as e,Bt as t,I as n,L as r,Q as i,W as a,Z as o,_t as s,at as c,c as l,it as u,kt as d,rt as f,zt as p}from"./index-Dw-BZmPh.js";var m=p({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Tree 树形控件`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`文件夹、组织架构、生物分类、国家地区等等,世间万物的大多数结构都是树形结构。使用`),t(`code`,[e._v(`树控件`)]),e._v(` 可以完整展现其中的层级关系并具有展开收起选择等交互功能。`)]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,h=p({data(){return{expandedKeys:[`0-1`,`1-1`,`1-1-2`,`1-2`],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`,disabled:!0},{title:`leaf 1-1-2`,key:`1-1-2`,children:[{title:`leaf 1-1-2-1`},{title:`leaf 1-1-2-2`}]}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`},{title:`leaf 1-2-2`}]},{title:`tree 1-3`,children:[{title:`leaf 1-3-1`},{title:`leaf 1-3-2`}]}]}]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tree`,{attrs:{data:e.data,expandedKeys:e.expandedKeys}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基础用法`)]),t(`p`,[e._v(`最简单的用法，展示可选中，默认展开功能。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`/>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`],
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
`)])])])],2)},[],!1,null,null,null,null).exports,g=p({data(){return{LogoApple:i,expandedKeys:[`t-1`,`t-2`]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tree`,{attrs:{expandedKeys:e.expandedKeys}},[t(`TreeNode`,{key:`t-1`,attrs:{title:`Tree 1`}},[t(`TreeNode`,{key:`l-1-1`,attrs:{title:`leaf 1-1`,disabled:``,icon:e.LogoApple}},[t(`TreeNode`,{key:`l-1-1-1`,attrs:{title:`leaf 1-1-1`,disabled:``}}),t(`TreeNode`,{key:`l-1-2-1`,attrs:{title:`leaf 1-2-1`}})],1),t(`TreeNode`,{key:`l-1-2`,attrs:{title:`leaf 1-2`}},[t(`TreeNode`,{key:`l-1-2-1`,attrs:{title:`leaf 1-2-1`}}),t(`TreeNode`,{key:`l-1-2-2`,attrs:{title:`leaf 1-2-2`}})],1),t(`TreeNode`,{key:`l-1-3`,attrs:{title:`leaf 1-3`}},[t(`TreeNode`,{key:`l-1-3-1`,attrs:{title:`leaf 1-3-1`}}),t(`TreeNode`,{key:`l-1-3-2`,attrs:{title:`leaf 1-3-2`}})],1)],1),t(`TreeNode`,{key:`t-2`,attrs:{title:`Tree 2`}},[t(`TreeNode`,{key:`l-2-1`,attrs:{title:`leaf 2-1`}},[t(`TreeNode`,{key:`l-2-1-1`,attrs:{title:`leaf 2-1`}})],1),t(`TreeNode`,{key:`l-2-2`,attrs:{title:`leaf 2-2`}},[t(`TreeNode`,{key:`l-2-2-1`,attrs:{title:`leaf 2-2`}})],1),t(`TreeNode`,{key:`l-2-3`,attrs:{title:`leaf 2-3`}},[t(`TreeNode`,{key:`l-2-3-1`,attrs:{title:`leaf 2-3`}})],1)],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义节点`)]),t(`p`,[e._v(`使用 `),t(`code`,[e._v(`TreeNode`)]),e._v(` 自定义节点。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tree 1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t-1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoApple"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-1-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-1-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`/>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-2-1"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-2"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-2-1"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-2-2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-2-2"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-3"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-3-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-3-1"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 1-3-2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-1-3-2"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tree 2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t-2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 2-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-2-1"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 2-1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-2-1-1"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 2-2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-2-2"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 2-2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-2-2-1"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 2-3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-2-3"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"leaf 2-3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"l-2-3-1"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'t-2'`)]),e._v(`],
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,_=p({data(){return{checkStrictly:!1,checkedKeys:[`1-1`,`aa`],expandedKeys:[`1-1`,`1-1-2`,`1-2`,`0-1`],data:[{title:`tree 1`,key:`0-1`,children:[{title:`tree 1-1`,key:`1-1`,disabled:!0,children:[{title:`leaf 1-1-1`},{title:`leaf 1-1-2`}]},{title:`tree 1-2`,key:`1-2`,children:[{title:`leaf 1-2-1`,key:`aa`},{title:`leaf 1-2-2`,key:`bb`}]}]}]}},methods:{check(e){console.log(e)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Checkbox`,{model:{value:e.checkStrictly,callback:function(t){e.checkStrictly=t},expression:`checkStrictly`}},[e._v(`父子节点不关联`)]),t(`br`),t(`br`),t(`Tree`,{attrs:{data:e.data,checkable:``,checkedKeys:e.checkedKeys,expandedKeys:e.expandedKeys,checkStrictly:e.checkStrictly},on:{check:e.check}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`可勾选`)]),t(`p`,[e._v(`设置属性 `),t(`code`,[e._v(`checkable`)]),e._v(` 可以对节点进行勾选。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(`>`)]),e._v(`父子节点不关联`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Checkbox`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkable`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`check`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"check"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkStrictly`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(`/>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkStrictly`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'aa'`)]),e._v(`, ],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1-2'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`],
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
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2'`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'aa'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-2'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'bb'`)]),e._v(` }
              ]
            }
          ]
        }
      ],
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`check`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,v=p({data(){return{Add:l,Remove:s,expandedKeys:[`0-0`],data:[{title:`tree 1`,key:`0-0`,children:[{title:`tree 1-1`,children:[{title:`leaf 1-1-1`},{title:`leaf 1-1-2`,children:[{title:`leaf 1-1-2-1`},{title:`leaf 1-1-2-2`}]}]},{title:`tree 1-2`,children:[{title:`leaf 1-2-1`},{title:`leaf 1-2-2`}]},{title:`tree 1-3`,children:[{title:`leaf 1-3-1`},{title:`leaf 1-3-2`}]}]},{title:`tree 2-1`,children:[{title:`leaf 2-1-1`},{title:`leaf 2-1-2`}]}]}},methods:{append(e){e.children||=[],this.expandedKeys.indexOf(e.key)<0&&this.expandedKeys.push(e.key),e.children.push({title:`Append Node`,children:[]})},remove(e,t){let{data:n}=this,r=(e,t,n)=>{for(let i=0;i<e.length;i++){if(e[i].key===t)return n(e[i],i,e);e[i].children&&r(e[i].children,t,n)}};r(n,e.key,(e,t,n)=>{n.splice(t,1)})},expand(e){console.log(e)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Row`,{attrs:{gutter:30}},[t(`Col`,{attrs:{span:8}},[t(`Divider`,[e._v(`默认`)]),t(`Tree`,{attrs:{data:e.data,expandedKeys:e.expandedKeys,"show-extra":``},on:{expand:e.expand},scopedSlots:e._u([{key:`extra`,fn:function({node:n,parent:r}){return[t(`Button`,{staticStyle:{"margin-right":`5px`},attrs:{icon:e.Add,size:`small`},on:{click:function(t){return e.append(n)}}}),n.key==`0-0`?e._e():t(`Button`,{attrs:{icon:e.Remove,size:`small`},on:{click:function(t){return e.remove(n,r)}}})]}}])})],1),t(`Col`,{staticStyle:{"border-left":`1px solid #ddd`,"border-right":`1px solid #ddd`},attrs:{span:8}},[t(`Divider`,[e._v("使用 `v-slot`")]),t(`Tree`,{attrs:{data:e.data,expandedKeys:e.expandedKeys,"show-extra":``},on:{expand:e.expand},scopedSlots:e._u([{key:`title`,fn:function({node:t,parent:n}){return[e._v(` `+e._s(t.title+` 😄`)+` `)]}},{key:`extra`,fn:function({node:n,parent:r}){return[t(`Button`,{staticStyle:{"margin-right":`5px`},attrs:{icon:e.Add,size:`small`},on:{click:function(t){return e.append(n)}}}),n.key==`0-0`?e._e():t(`Button`,{attrs:{icon:e.Remove,size:`small`},on:{click:function(t){return e.remove(n,r)}}})]}}])})],1),t(`Col`,{attrs:{span:8}},[t(`Divider`,[e._v("使用 `tree-node`")]),t(`Tree`,{attrs:{expandedKeys:e.expandedKeys,"show-extra":``},on:{expand:e.expand},scopedSlots:e._u([{key:`extra`,fn:function({node:n,parent:r}){return[t(`Button`,{staticStyle:{"margin-right":`5px`},attrs:{icon:e.Add,size:`small`},on:{click:function(t){return e.append(n)}}}),n.key==`0-0`?e._e():t(`Button`,{attrs:{icon:e.Remove,size:`small`},on:{click:function(t){return e.remove(n,r)}}})]}}])},e._l(e.data,function(e,n){return t(`TreeNode`,{key:e.key,attrs:{data:e}})}),1)],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义节点内容`)]),t(`p`,[e._v(`节点的内容支持自定义，可以在节点区添加按钮或图标等内容。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:gutter`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"30"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:span`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"8"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Divider`)]),e._v(`>`)]),e._v(`默认`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Divider`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`<!-- 默认 -->`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`show-extra`)]),e._v(`>`)]),e._v(`
     `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-slot:extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ node , parent}"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Add"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"append(node)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"margin-right:5px"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Remove"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"remove(node,parent)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node.key!='0-0'"`)]),e._v(` >`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:span`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"8"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"border-left:1px solid #ddd;border-right:1px solid #ddd;"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Divider`)]),e._v(`>`)]),e._v("使用 `v-slot`"),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Divider`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`<!-- 使用 v-slot -->`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`show-extra`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-slot:title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{node , parent}"`)]),e._v(`>`)]),e._v(`
        `+e._s(e.node.title+` 😄`)+`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-slot:extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ node , parent}"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Add"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"append(node)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"margin-right:5px"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Remove"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"remove(node,parent)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node.key!='0-0'"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:span`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"8"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Divider`)]),e._v(`>`)]),e._v("使用 `tree-node`"),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Divider`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`<!-- 可以参见 renderContent 方法 -->`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`show-extra`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeNode`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(item,i) in data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"item"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"item.key"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-slot:extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{node , parent}"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Add"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"append(node)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"margin-right:5px"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Remove"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"remove(node,parent)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node.key!='0-0'"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Remove`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Remove`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-1'`)]),e._v(` },
                {
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2'`)]),e._v(`,
                  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-1'`)]),e._v(` },
                    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2-2'`)]),e._v(` }
                  ]
                }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-2'`)]),e._v(`,
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
        },
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 2-1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 2-1-1'`)]),e._v(` },
            { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 2-1-2'`)]),e._v(` }
          ]
        }
      ],
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`append`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`node`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (!node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`) {
        node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(` = []
      }
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//展开节点`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (`),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`expandedKeys`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`indexOf`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`) < `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`expandedKeys`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`)
      }
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//添加子节点`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` newChild = { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Append Node'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [] };
      node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(newChild);
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`remove`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`node, parent`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/*  
       
       let childs = parent.children
       const index = childs.findIndex(item => item == node);
       childs.splice(index, 1); 
       
       */`)]),e._v(`

      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` { data } = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`
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
      `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loop`)]),e._v(`(data, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`, `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`item, index, arr`)]),e._v(`) =>`)]),e._v(` {
        arr.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`splice`)]),e._v(`(index, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`);
      })

    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,y=p({data(){return{expandedKeys:[`0-0`,`1-0`,`1-1`],checkedKeys:[`1-0-0`],data:[{title:`tree 1`,key:`0-0`,children:[{title:`tree 1-1`,key:`1-0`,disabled:!0,children:[{title:`leaf 1-1-1`,key:`1-0-0`,disabled:!0},{title:`leaf 1-1-2`}]},{title:`tree 1-2`,key:`1-1`,children:[{title:`leaf 1-2-1`},{title:`leaf 1-2-2`}]}]}]}},methods:{check(e){console.log(e)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tree`,{attrs:{data:e.data,checkable:``,checkedKeys:e.checkedKeys,expandedKeys:e.expandedKeys},on:{check:e.check}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`禁用节点`)]),t(`p`,[e._v(`设置属性 `),t(`code`,[e._v(`disabled`)]),e._v(` 可以禁用节点。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkable`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`check`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"check"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkedKeys"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0-0'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-1'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-1-2'`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'tree 1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-1'`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'leaf 1-2-2'`)]),e._v(` }
              ]
            }
          ]
        }
      ],
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`check`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(data)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,b=p({data(){return{data:[{title:`Expand to load`},{title:`Expand to load`},{title:`Tree Node`,isLeaf:!0}]}},methods:{expand(e){console.log(e)},loadData(e,t){setTimeout(()=>{t([{title:`Child Node`},{title:`Child Node`}])},1e3)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tree`,{attrs:{data:e.data},on:{"load-data":e.loadData,expand:e.expand}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`异步加载`)]),t(`p`,[e._v(`点击展开节点，动态加载数据。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`load-data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loadData"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(`/>`)]),e._v(`
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
`)])])])],2)},[],!1,null,null,null,null).exports,x=p({data(){return{FolderOpenOutline:n,FolderOutline:r,expandedKeys:[`0-0`,`1-0`,`1-1`,`1-2`],data:[{title:`src`,key:`0-0`,icon:n,children:[{title:`assets`,key:`1-0`,icon:n,children:[{title:`main.js`,icon:u,disabled:!0},{title:`test.py`,icon:f}]},{title:`pages`,expand:!0,key:`1-1`,icon:n,children:[{title:`index.html`,icon:e},{title:`index.md`,icon:c}]},{title:`app`,expand:!0,key:`1-2`,icon:n,children:[{title:`zen.apk`,icon:o},{title:`zen.ipa`,icon:i}]}]}]}},methods:{expand({expanded:e,node:t}){t.icon=e?n:r}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tree`,{attrs:{data:e.data,expandedKeys:e.expandedKeys},on:{expand:e.expand}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义图标`)]),t(`p`,[e._v(`可以针对不同的节点定制图标。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'src'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'assets'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'main.js'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'test.py'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'pages'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'index.html'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'index.md'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'app'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'zen.apk'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'zen.ipa'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(` }
              ]
            }
          ]
        }
      ],
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{ expanded, node }`)]),e._v(`) {
      node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`icon`)]),e._v(` = expanded ? `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(` : `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,S=p({data(){return{Add:l,Trash:d,IconEdit:a,directory:!0,showLine:!0,showIcon:!0,draggable:!0,checkable:!0,showExtra:!0,expandedKeys:[`0-0`,`1-0`,`1-1`,`1-2`],selectedKeys:[`0-0`],checkStrictly:!1,multiple:!1,checkedKeys:[],data:[{title:`src`,key:`0-0`,icon:n,children:[{title:`assets`,key:`1-0`,icon:n,children:[{title:`main.js`,icon:u,disabled:!0},{title:`test.py`,icon:f}]},{title:`pages`,key:`1-1`,icon:n,children:[{title:`index.html`,icon:e},{title:`index.md`,icon:c}]},{title:`app`,key:`1-2`,icon:n,children:[{title:`zen.apk`,icon:o},{title:`zen.ipa`,icon:i}]}]},{title:`src11`,key:`0-1`,icon:n}]}},methods:{edit(e,t){e.stopPropagation();let n=prompt(`修改节点名称`,t.title);n!=null&&n.trim()!=``&&(t.title=n)},append(e,t){e.stopPropagation(),t.children||=[],this.expandedKeys.indexOf(t.key)<0&&this.expandedKeys.push(t.key),t.children.push({title:`Append Node`,children:[]})},remove(e,t,n){let{data:r}=this,i=(e,t,n)=>{for(let r=0;r<e.length;r++){if(e[r].key===t)return n(e[r],r,e);e[r].children&&i(e[r].children,t,n)}};i(r,t.key,(e,t,n)=>{n.splice(t,1)})},expand({expanded:e,node:t,expandedKeys:i}){t.icon=e?n:r,console.log(t)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,[t(`Space`,[t(`Checkbox`,{attrs:{label:`Directory`},model:{value:e.directory,callback:function(t){e.directory=t},expression:`directory`}}),t(`Checkbox`,{attrs:{label:`showLine`},model:{value:e.showLine,callback:function(t){e.showLine=t},expression:`showLine`}}),t(`Checkbox`,{attrs:{label:`Draggable`},model:{value:e.draggable,callback:function(t){e.draggable=t},expression:`draggable`}}),t(`Checkbox`,{attrs:{label:`Checkable`},model:{value:e.checkable,callback:function(t){e.checkable=t},expression:`checkable`}}),t(`Checkbox`,{attrs:{label:`ShowIcon`},model:{value:e.showIcon,callback:function(t){e.showIcon=t},expression:`showIcon`}}),t(`Checkbox`,{attrs:{label:`ShowExtra`},model:{value:e.showExtra,callback:function(t){e.showExtra=t},expression:`showExtra`}}),t(`Checkbox`,{attrs:{label:`Multiple`},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:`multiple`}}),t(`Checkbox`,{attrs:{label:`checkStrictly`},model:{value:e.checkStrictly,callback:function(t){e.checkStrictly=t},expression:`checkStrictly`}})],1),t(`br`),t(`br`),t(`Tree`,{staticStyle:{width:`512px`},attrs:{data:e.data,directory:e.directory,draggable:e.draggable,checkable:e.checkable,multiple:e.multiple,"show-line":e.showLine,"show-icon":e.showIcon,"show-extra":e.showExtra,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeys,checkStrictly:e.checkStrictly},on:{expand:e.expand},scopedSlots:e._u([{key:`extra`,fn:function({node:n,parent:r}){return[t(`Space`,[t(`Button`,{attrs:{size:`small`,type:`text`,icon:e.Add},on:{click:t=>e.append(t,n)}}),n.key==`0-0`?e._e():t(`Button`,{attrs:{size:`small`,type:`text`,icon:e.Trash},on:{click:t=>e.remove(t,n,r)}}),t(`Button`,{attrs:{size:`small`,type:`text`,icon:e.IconEdit},on:{click:t=>e.edit(t,n)}})],1)]}}])})],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`群控`)]),t(`p`,[e._v(`展示目录、连接线、拖动、复选框、图标、扩展`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
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
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:512px"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`expand`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expand"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:directory`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"directory"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:draggable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"draggable"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkable"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:multiple`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"multiple"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:show-line`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showLine"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:show-icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showIcon"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:show-extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showExtra"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:selectedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"selectedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:expandedKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"expandedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkStrictly`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkStrictly"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-slot:extra`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ node, parent }"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Add"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"e => append(e, node)"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Trash"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"e => remove(e, node, parent)"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"node.key != '0-0'"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"IconEdit"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"e => edit(e, node)"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tree`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Trash`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`IconEdit`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Trash`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`IconEdit`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`directory`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showLine`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showIcon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`draggable`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkable`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showExtra`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`expandedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`selectedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkStrictly`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkedKeys`)]),e._v(`:[],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'src'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-0'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'assets'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-0'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'main.js'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoTwitter`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'test.py'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoQq`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'pages'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-1'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'index.html'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoFeishu`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'index.md'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(` }
              ]
            },
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'app'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1-2'`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'zen.apk'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAndroid`)]),e._v(` },
                { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'zen.ipa'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(` }
              ]
            }
          ]
        },
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'src11'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(`,
        }
      ],
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`edit`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`e, node`)]),e._v(`) {
      e.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`stopPropagation`)]),e._v(`()
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` pop = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`prompt`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'修改节点名称'`)]),e._v(`, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`title`)]),e._v(`)
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (pop != `),t(`span`,{staticClass:`hljs-literal`},[e._v(`null`)]),e._v(` && pop.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`trim`)]),e._v(`() != `),t(`span`,{staticClass:`hljs-string`},[e._v(`''`)]),e._v(`) {
        node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`title`)]),e._v(` = pop
      }
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`append`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`e, node`)]),e._v(`) {
      e.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`stopPropagation`)]),e._v(`()
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` newChild = { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Append Node'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [] };
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (!node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`) {
        node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(` = []
      }
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//展开节点`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (`),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`expandedKeys`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`indexOf`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`) < `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`expandedKeys`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`)
      }
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//添加子节点`)]),e._v(`
      node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`children`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(newChild);
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`remove`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`e, node, parent`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` { data } = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`
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
      `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`loop`)]),e._v(`(data, node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`, `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`item, index, arr`)]),e._v(`) =>`)]),e._v(` {
        arr.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`splice`)]),e._v(`(index, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`);
      })
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`expand`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{ expanded, node, expandedKeys }`)]),e._v(`) {
      node.`),t(`span`,{staticClass:`hljs-property`},[e._v(`icon`)]),e._v(` = expanded ? `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOpenOutline`)]),e._v(` : `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`FolderOutline`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(node)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,C=p({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`tree-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-api`}},[e._v(`Tree API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`data`)]),t(`td`,[e._v(`可嵌套的节点属性的数组，生成 `),t(`code`,[e._v(`tree`)]),e._v(` 的数据`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`checkable`)]),t(`td`,[e._v(`是否显示多选框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`draggable`)]),t(`td`,[e._v(`是否可以拖拽`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`show-line`)]),t(`td`,[e._v(`是否展示连接线`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`show-icon`)]),t(`td`,[e._v(`是否展示图标`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`show-extra`)]),t(`td`,[e._v(`是否默认展示扩展元素`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`checkStrictly`)]),t(`td`,[e._v(`checkable 状态下节点选择完全受控（父子节点选中状态不再关联）`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`checkedKeys`)]),t(`td`,[e._v(`选中复选框的树节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`expandedKeys`)]),t(`td`,[e._v(`指定展开的节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`expandedAll`)]),t(`td`,[e._v(`是否展开所有节点`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`selectedKeys`)]),t(`td`,[e._v(`选中的节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`multiple`)]),t(`td`,[e._v(`是否支持多选`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])])])]),t(`h2`,{attrs:{id:`treenode-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#treenode-api`}},[e._v(`TreeNode API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`节点标题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用节点`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`children`)]),t(`td`,[e._v(`子节点`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`isLeaf`)]),t(`td`,[e._v(`设置为叶子节点 (设置了 loadData 时有效)。为 false 时会强制将其作为父节点`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])])])]),t(`h2`,{attrs:{id:`tree-事件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tree-事件`}},[e._v(`Tree 事件`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`回调参数`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`load-data`)]),t(`td`,[e._v(`异步加载数据的方法`)]),t(`td`,[e._v(`Function(node,callback)`)])]),t(`tr`,[t(`td`,[e._v(`select`)]),t(`td`,[e._v(`点击树节点时触发`)]),t(`td`,[e._v(`Function({selectedKeys,selected,node,vnode})`)])]),t(`tr`,[t(`td`,[e._v(`check`)]),t(`td`,[e._v(`点击复选框时触发`)]),t(`td`,[e._v(`Function({checkedKeys,checked,node,vnode})`)])]),t(`tr`,[t(`td`,[e._v(`expand`)]),t(`td`,[e._v(`展开和收起子节点时触发`)]),t(`td`,[e._v(`Function({expandedKeys,expanded,node,vnode})`)])]),t(`tr`,[t(`td`,[e._v(`dragstart`)]),t(`td`,[e._v(`开始拖拽时调用`)]),t(`td`,[e._v(`Function({event,node})`)])]),t(`tr`,[t(`td`,[e._v(`dragend`)]),t(`td`,[e._v(`dragend 触发时调用`)]),t(`td`,[e._v(`Function({event,node})`)])]),t(`tr`,[t(`td`,[e._v(`dragenter`)]),t(`td`,[e._v(`dragenter 触发时调用`)]),t(`td`,[e._v(`Function({event, node, expandedKeys})`)])]),t(`tr`,[t(`td`,[e._v(`dragleave`)]),t(`td`,[e._v(`dragleave 触发时调用`)]),t(`td`,[e._v(`Function({event,node})`)])]),t(`tr`,[t(`td`,[e._v(`drop`)]),t(`td`,[e._v(`drop 触发时调用`)]),t(`td`,[e._v(`Function({event,node,dragNode})`)])])])])])}],!1,null,null,null,null).exports,w={render(){return t(`div`,{class:`demo-tree`},[t(m),t(h),t(g),t(_),t(v),t(y),t(b),t(x),t(S),t(C)])}};export{w as default};