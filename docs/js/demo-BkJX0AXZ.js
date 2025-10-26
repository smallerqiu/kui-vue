import{Bt as e,zt as t}from"./index-Dw-BZmPh.js";var n=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Loading 加载进度`)]),t(`p`,[e._v(`进度加载。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`异步请求时展示进度`)])]),t(`h2`,{attrs:{id:`示例`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#示例`}},[e._v(`示例`)])]),t(`p`,[e._v(`模拟路由加载`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`// # router.js`)]),e._v(`

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'vue'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Router`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'vue-router'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Loading`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-vue'`)]),e._v(`

`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Vue`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Router`)]),e._v(`)
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` router = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Router`)]),e._v(`({
  ....
})
router.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`beforeEach`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`to, `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(`, next`)]),e._v(`) =>`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(`();
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`next`)]),e._v(`();
});

router.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`afterEach`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[t(`span`,{staticClass:`hljs-params`},[e._v(`route`)]),e._v(` =>`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
});
`)])]),t(`p`,[e._v(`模拟ajax 请求`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`// 以jQuery的Ajax为例，部分代码省略`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` $ `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'jquery'`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`getData`)]),e._v(` () {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(`();
      $.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ajax`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`url`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'/api/someurl'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'get'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`success`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
        }
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`error`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`();
        },
      });
    }
  }
}
`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,r=t({methods:{upload(e){this.$Loading.upload(e)},start(){this.$Loading.start()},finish(){this.$Loading.finish()},error(){this.$Loading.error()},destroy(){this.$Loading.destroy()}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,[t(`Button`,{on:{click:function(t){return e.start()}}},[e._v(`start`)]),t(`Button`,{on:{click:e.finish}},[e._v(`finish`)]),t(`Button`,{on:{click:e.error}},[e._v(`error`)]),t(`Button`,{on:{click:function(t){return e.upload(30)}}},[e._v(`upload 30%`)]),t(`Button`,{on:{click:function(t){return e.upload(80)}}},[e._v(`upload 80%`)]),t(`Button`,{on:{click:function(t){return e.destroy()}}},[e._v(`destroy`)])],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基本用法`)]),t(`p`,[e._v(`最简单的用法。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"start()"`)]),e._v(`>`)]),e._v(`start`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"finish"`)]),e._v(`>`)]),e._v(`finish`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"error"`)]),e._v(`>`)]),e._v(`error`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"upload(30)"`)]),e._v(`>`)]),e._v(`upload 30%`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"upload(80)"`)]),e._v(`>`)]),e._v(`upload 80%`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"destroy()"`)]),e._v(`>`)]),e._v(`destroy`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`upload`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`percent`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`upload`)]),e._v(`(percent);
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(`();
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`();
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`destroy`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Loading`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`destroy`)]),e._v(`();
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,i=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`loading-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#loading-api`}},[e._v(`Loading API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`start`)]),t(`td`,[e._v(`开始加载`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`finish`)]),t(`td`,[e._v(`完成加载`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`error`)]),t(`td`,[e._v(`加载错误`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`update`)]),t(`td`,[e._v(`手动更新进度`)]),t(`td`,[e._v(`Function(percent)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`destroy`)]),t(`td`,[e._v(`vue的$.destroy()`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,a={render(){return e(`div`,{class:`demo-loading`},[e(n),e(r),e(i)])}};export{a as default};