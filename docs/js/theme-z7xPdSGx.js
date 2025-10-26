import{zt as e}from"./index-Dw-BZmPh.js";var t=e({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`定制主题`)]),t(`p`,[e._v(`设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。`)]),t(`p`,[t(`img`,{staticClass:`demo-theme`,attrs:{src:`https://k-ui.cn/img/theme.jpg`}})]),t(`h2`,{attrs:{id:`覆盖定制`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#覆盖定制`}},[e._v(`覆盖定制`)])]),t(`p`,[e._v(`通过覆盖less变量来定制主题`),t(`br`),e._v(` 新建一个less 文件 如：'assets/styles/custom.less',写下如下内容：`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-less`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`//引入 styles`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`@import`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"~kui-vue/components/styles/index.less"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 重新定义变量`)]),e._v(`
`),t(`span`,{staticClass:`hljs-variable`},[e._v(`@main:`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`#3a95ff`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//主色`)]),e._v(`
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 所有的变量在 ~kui-vue/components/styles/color.less 中定义`)]),e._v(`
`)])]),t(`p`,[e._v(`然后在入口文件 main.js 内导入这个 less 文件即可：`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` kui `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"assets/styles/custom.less"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(kui);
`)])])])}],!1,null,null,null,null).exports;export{t as default};