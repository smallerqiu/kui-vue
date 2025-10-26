import{zt as e}from"./index-Dw-BZmPh.js";var t=e({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`国际化`)]),t(`p`,[e._v(`KUI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`// 完整引入 KUI`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`KUI`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// import en`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` locale `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/components/locale/lang/en"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// set default lang`)]),e._v(`
`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`KUI`)]),e._v(`, { locale });
`)])]),t(`p`,[e._v(`或 按需引入`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`// 按需引入 KUI`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Select`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` lang `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/components/locale/lang/en"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` locale `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/components/locale"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 设置语言`)]),e._v(`
locale.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(lang);

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 引入组件`)]),e._v(`
`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`component`)]),e._v(`(`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Select`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`name`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Select`)]),e._v(`);
`)])]),t(`p`,[e._v(`如果使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。`)]),t(`p`,[e._v(`webpack.config.js`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[e._v(`{
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`plugins`)]),e._v(`: [
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` webpack.`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NormalModuleReplacementPlugin`)]),e._v(`(
      `),t(`span`,{staticClass:`hljs-regexp`},[e._v(`/kui-vue[\\/\\\\]components[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]zh-CN/`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/components/locale/lang/en"`)]),e._v(`
    ),
  ];
}
`)])]),t(`h2`,{attrs:{id:`配合-vue-i18n@8.x+`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#配合-vue-i18n@8.x+`}},[e._v(`配合 vue-i18n@8.x+`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue-i18n"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`KUI`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` en `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/dist/locale/en"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` zh `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/dist/locale/zhCN"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` router `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"./router.js"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`App`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"./src/App.vue"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n);
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// Create VueI18n instance with options`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` i18n = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n({
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`locale`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// set default locale`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`messages`)]),e._v(`: { en, zh }, `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// set locale messages`)]),e._v(`
});

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`KUI`)]),e._v(`, { i18n });

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`({
  i18n,
  router,
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`render`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`h`)]),e._v(`) =>`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`App`)]),e._v(`),
}).$mount(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"#app"`)]),e._v(`);

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// to change`)]),e._v(`
i18n.`),t(`span`,{staticClass:`hljs-property`},[e._v(`local`)]),e._v(` = `),t(`span`,{staticClass:`hljs-string`},[e._v(`"zh"`)]),e._v(`; `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// or others`)]),e._v(`
`)])]),t(`h2`,{attrs:{id:`通过-cdn-的方式加载语言文件`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#通过-cdn-的方式加载语言文件`}},[e._v(`通过 CDN 的方式加载语言文件`)])]),t(`p`,[e._v(`搭配 vue-i18n 使用`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-meta`},[e._v(`<!DOCTYPE `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`html`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`html`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`lang`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`head`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`meta`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`charset`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"UTF-8"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`meta`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"viewport"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width=device-width, initial-scale=1.0"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`title`)]),e._v(`>`)]),e._v(`Test i18n`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`title`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`link`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`rel`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"stylesheet"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text/css"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"../dist/k-ui.css"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/vue@2.x"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/dayjs"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/vue-i18n@8.x"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/kui-vue@3.x"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/kui-vue/dist/locale/en.js"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/kui-vue/dist/locale/zh-CN.js"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/kui-vue/dist/locale/de.js"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://unpkg.com/kui-vue/dist/locale/ua.js"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
      `),t(`span`,{staticClass:`hljs-selector-tag`},[e._v(`body`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-selector-tag`},[e._v(`html`)]),e._v(` {
        `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`font-family`)]),e._v(`:
          Inter,
          -apple-system,
          BlinkMacSystemFont,
          Segoe UI,
          Roboto,
          Helvetica Neue,
          Arial,
          Noto Sans,
          sans-serif,
          Apple Color Emoji,
          Segoe UI Emoji,
          Segoe UI Symbol,
          Noto Color Emoji;
      }
    `)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`head`)]),e._v(`>`)]),e._v(`

  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`body`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`id`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"app"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show"`)]),e._v(`>`)]),e._v(`Click me!`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-date-picker`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-date-picker`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Welcome"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"hide"`)]),e._v(`
        >`)]),e._v(`Welcome to use kui</k-modal
      >
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`body`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` i18n = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n({
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`locale`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"de"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// set locale`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`messages`)]),e._v(`: {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`en`)]),e._v(`: kui_lang_en,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`zhCN`)]),e._v(`: kui_lang_zhCN,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`de`)]),e._v(`: kui_lang_de,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`ua`)]),e._v(`: kui_lang_ua,
      },
    });
    `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(kui.`),t(`span`,{staticClass:`hljs-property`},[e._v(`default`)]),e._v(`, { i18n });

    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`({
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`el`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"#app"`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`visible`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`show`)]),e._v(`: `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`function`)]),e._v(` (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`visible`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
        },
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`hide`)]),e._v(`: `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`function`)]),e._v(` (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`visible`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"success"`)]),e._v(`);
        },
      },
    });
    `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      i18n.`),t(`span`,{staticClass:`hljs-property`},[e._v(`locale`)]),e._v(` = `),t(`span`,{staticClass:`hljs-string`},[e._v(`"ua"`)]),e._v(`;
    }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2000`)]),e._v(`);
  `)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`html`)]),e._v(`>`)]),e._v(`
`)])]),t(`h3`,{attrs:{id:`nuxt-多语言支持`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#nuxt-多语言支持`}},[e._v(`nuxt 多语言支持`)])]),t(`p`,[t(`code`,[e._v(`plugins`)]),e._v(`目录，新建`),t(`code`,[e._v(`kui.js`)]),e._v(`，写入以下内容：`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue-i18n"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`KUI`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` kui_en `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/locale/lang/en"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` kui_zh `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/locale/lang/zh-CN"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`//Others`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` zh = { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`hello`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"你好"`)]),e._v(` };
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` en = { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`hello`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"hello"`)]),e._v(` };

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`default`)]),e._v(` ({ app, store }) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` i18n = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`VueI18`)]),e._v(`n({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`locale`)]),e._v(`: store.`),t(`span`,{staticClass:`hljs-property`},[e._v(`state`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`lang`)]),e._v(` || `),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fallbackLocale`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`messages`)]),e._v(`: {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`zh`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Object`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`assign`)]),e._v(`(zh, kui_zh),
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`en`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Object`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`assign`)]),e._v(`(en, kui_en),
    },
  });
  app.`),t(`span`,{staticClass:`hljs-property`},[e._v(`i18n`)]),e._v(` = i18n;
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`KUI`)]),e._v(`, { i18n });
};
`)])]),t(`p`,[e._v(`有遇无法编译问题,修改 `),t(`code`,[e._v(`nuxt.config.js`)])]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  ...
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`build`)]),e._v(`:{
++    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`transpile`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-vue'`)]),e._v(`]
    }
  ...
}
`)])]),t(`p`,[e._v(`目前 KUI 内置了以下语言：`)]),t(`ul`,[t(`li`,[e._v(`简体中文(zh-CN)`)]),t(`li`,[e._v(`繁体中文(zh-TW)`)]),t(`li`,[e._v(`德语(de)`)]),t(`li`,[e._v(`希腊语(el)`)]),t(`li`,[e._v(`英语(en)`)]),t(`li`,[e._v(`法语(fr)`)]),t(`li`,[e._v(`意大利语(it)`)]),t(`li`,[e._v(`日语(ja)`)]),t(`li`,[e._v(`韩语(ko)`)]),t(`li`,[e._v(`俄语(ru)`)]),t(`li`,[e._v(`泰语(th)`)]),t(`li`,[e._v(`乌克兰语(ua)`)]),t(`li`,[e._v(`越南语(vi)`)])]),t(`p`,[e._v(`欢迎贡献代码，以支持更多语言。`),t(`a`,{attrs:{href:`https://gitee.com/chuchur/kui-vue/tree/master/components/locale/lang`}},[e._v(`Join`)])])])}],!1,null,null,null,null).exports;export{t as default};