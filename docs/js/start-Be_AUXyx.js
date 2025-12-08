/*!
* kui-vue v3.5.1
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{c as e}from"./index-C9zE6tXi.js";var t=e({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`快速上手`)]),t(`p`,[e._v(`在开始之前，如果您刚开始接触Vue，建议您先细看 Vue及其相关文档： `),t(`a`,{attrs:{href:`https://vuejs.org`}},[e._v(`vue`)]),e._v(`，`),t(`a`,{attrs:{href:`https://vuex.vuejs.org`}},[e._v(`vuex`)]),e._v(`，`),t(`a`,{attrs:{href:`http://router.vuejs.org/`}},[e._v(`vue-router`)]),e._v(`，`),t(`a`,{attrs:{href:`https://cli.vuejs.org/`}},[e._v(`vue-cli`)]),e._v(`,`),t(`a`,{attrs:{href:`https://github.com/vuejs/vue-devtools`}},[e._v(`vue-devtools`)])]),t(`h2`,{attrs:{id:`引入-kui`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#引入-kui`}},[e._v(`引入 KUI`)])]),t(`h3`,{attrs:{id:`1.安装脚手架`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#1.安装脚手架`}},[e._v(`1.安装脚手架`)])]),t(`p`,[t(`a`,{attrs:{href:`https://github.com/vuejs/vue-cli`}},[e._v(`vue-cli`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-bash`},[e._v(`$ npm install -g @vue/cli
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`# OR`)]),e._v(`
$ yarn global add @vue/cli
`)])]),t(`h3`,{attrs:{id:`2.-初始化一个项目`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#2.-初始化一个项目`}},[e._v(`2. 初始化一个项目`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-bash`},[t(`span`,{staticClass:`hljs-variable`},[e._v(`$vue`)]),e._v(` create kui-demo
`)])]),t(`p`,[e._v(`从 yarn 或 npm 安装并引入 kui-vue。`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-bash`},[e._v(`$ npm install kui-vue@latest
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`#or`)]),e._v(`
$ yarn add kui-vue@latest
`)])]),t(`h3`,{attrs:{id:`3.-使用组件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#3.-使用组件`}},[e._v(`3. 使用组件`)])]),t(`p`,[e._v(`一般在 `),t(`strong`,[e._v(`webpack`)]),e._v(` 入口页面 `),t(`code`,[e._v(`main.js`)]),e._v(` 中如下配置：`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`App`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"./App"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` kui `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/dist/k-ui.css"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(kui);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`({
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`el`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"#app"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`components`)]),e._v(`: { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`App`)]),e._v(` },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`template`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"<App/>"`)]),e._v(`,
});
`)])]),t(`p`,[e._v(`以上代码便完成了 Kui 的引入。注意: 样式文件需要单独引入。`)]),t(`h3`,{attrs:{id:`局部导入组件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#局部导入组件`}},[e._v(`局部导入组件`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Button`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Message`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`App`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"./App"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`config`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`productionTip`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Button`)]),e._v(`);

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`prototype`)])]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$message`)]),e._v(` = `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Message`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`({
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`el`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"#app"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`components`)]),e._v(`: { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`App`)]),e._v(` },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`template`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"<App/>"`)]),e._v(`,
});
`)])]),t(`h2`,{attrs:{id:`兼容性`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#兼容性`}},[e._v(`兼容性`)])]),t(`p`,[e._v(`Kui Vue 支持所有的现代浏览器和 IE9+。`)]),t(`p`,[e._v(`对于 IE 系列浏览器，需提供 `),t(`a`,{attrs:{href:`https://github.com/es-shims/es5-shim`}},[e._v(`es5-shim`)]),e._v(` 和 `),t(`a`,{attrs:{href:`https://github.com/paulmillr/es6-shim`}},[e._v(`es6-shim`)]),e._v(` 等 Polyfills 的支持。`)]),t(`p`,[e._v(`如果你使用了 babel，强烈推荐使用 `),t(`a`,{attrs:{href:`https://babeljs.io/docs/usage/polyfill/`}},[e._v(`babel-polyfill`)]),e._v(` 和 `),t(`a`,{attrs:{href:`https://babeljs.io/docs/plugins/transform-runtime/`}},[e._v(`babel-plugin-transform-runtime`)]),e._v(` 来替代以上两个 shim。`)]),t(`h2`,{attrs:{id:`按需加载`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#按需加载`}},[e._v(`按需加载`)])]),t(`ul`,[t(`li`,[e._v(`使用 babel-plugin-import（推荐）。`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`// .babelrc or babel-loader option`)]),e._v(`
{
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"plugins"`)]),e._v(`: [
    [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"import"`)]),e._v(`, { `),t(`span`,{staticClass:`hljs-string`},[e._v(`"libraryName"`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"style"`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"css"`)]),e._v(` }] `),t(`span`,{staticClass:`hljs-comment`},[e._v("// `style: true` 会加载 less 文件")]),e._v(`
  ]
}
`)])]),t(`ul`,[t(`li`,[e._v(`手动引入`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/components/button"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/components/button/style"`)]),e._v(`;
`)])]),t(`h3`,{attrs:{id:`使用规范`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#使用规范`}},[e._v(`使用规范`)])]),t(`p`,[e._v(`组件支持全小写或首字母大写，如：`),t(`code`,[e._v(`Button`)]),e._v(`, 或者 `),t(`code`,[e._v(`k-button`)]),e._v(` :`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(` ✅ 推荐
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-button`)]),e._v(`>`)]),e._v(` ✅
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`)])]),t(`p`,[e._v(`但是 `),t(`code`,[e._v(`Switch`)]),e._v(` 、 `),t(`code`,[e._v(`Image`)]),e._v(` 只支持 以k开头的小写 :`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-switch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-switch`)]),e._v(`>`)]),e._v(` ✅
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-image`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-image`)]),e._v(`>`)]),e._v(` ✅
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`)])])])}],!1,null,null,null,null).exports;export{t as default};