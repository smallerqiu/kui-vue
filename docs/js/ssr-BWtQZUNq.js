import{m as e}from"./index-DxuXnqZb.js";var t=e({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`服务端渲染的支持`)]),t(`h2`,{attrs:{id:`nuxt-环境构建`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#nuxt-环境构建`}},[e._v(`nuxt 环境构建`)])]),t(`p`,[e._v(`使用npx 或者 yarn 初始化项目,使用npm i npx -g 安装npx 或 yarn`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-bash`},[e._v(`$ npx create-nuxt-app <project-name>
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`#or`)]),e._v(`
$ yarn create nuxt-app <project-name>
`)])]),t(`p`,[e._v(`更多详情请参阅 `),t(`a`,{attrs:{href:`https://nuxtjs.org/guide/installation`}},[e._v(`https://nuxtjs.org/guide/installation`)])]),t(`p`,[e._v(`一步步完成后找到`),t(`code`,[e._v(`plugins`)]),e._v(`目录，新建`),t(`code`,[e._v(`kui.js`)]),e._v(`，写入以下内容：`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` kui `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(kui);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/dist/k-ui.css"`)]),e._v(`;
`)])]),t(`p`,[e._v(`然后修改根目录`),t(`code`,[e._v(`nuxt.config.js`)]),e._v(`，修改配置文件，如下`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-variable language_`},[e._v(`module`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`exports`)]),e._v(` = {
  `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/*
   ** Headers of the page
   */`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`head`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ { name }}"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`meta`)]),e._v(`: [
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`charset`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"utf-8"`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"viewport"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"width=device-width, initial-scale=1"`)]),e._v(` },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`hid`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"description"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"description"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ { escape description }}"`)]),e._v(`,
      },
    ],
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`link`)]),e._v(`: [{ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`rel`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"icon"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/x-icon"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"/favicon.ico"`)]),e._v(` }],
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`plugins`)]),e._v(`: [
    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"~plugins/kui"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`ssr`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` }, `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// add`)]),e._v(`
  ],
  `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//....`)]),e._v(`
};
`)])]),t(`p`,[e._v(`至此，配置完成，所有组件将支持服务端渲染了。只要是对Nuxt universal 模式的支持`)]),t(`p`,[e._v(`有遇无法编译问题,修改 `),t(`code`,[e._v(`nuxt.config.js`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  ...
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`build`)]),e._v(`:{
++    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`transpile`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-vue'`)]),e._v(`]
    }
  ...
}
`)])])])}],!1,null,null,null,null).exports;export{t as default};