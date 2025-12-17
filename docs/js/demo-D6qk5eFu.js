import{pn as e}from"./vue-B8LCe6Yo.js";import{c as t,m as n}from"./index-_kkE29nq.js";var r=n({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Loading 加载进度`)]),t(`p`,[e._v(`进度加载。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`异步请求时展示进度`)])]),t(`h2`,{attrs:{id:`示例`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#示例`}},[e._v(`示例`)])]),t(`p`,[e._v(`模拟路由加载`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-comment`},[e._v(`// # router.js`)]),e._v(`

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
`)])]),t(`p`,[e._v(`如果你使用的是 `),t(`code`,[e._v(`axios`)]),e._v(`.`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` axios `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"axios"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { loading } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` axiosInstance = axios.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`create`)]),e._v(`({
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`baseURL`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"/api"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 你的 API 地址`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`timeout`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`10000`)]),e._v(`,
});

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 请求拦截器`)]),e._v(`
axiosInstance.`),t(`span`,{staticClass:`hljs-property`},[e._v(`interceptors`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`request`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(
  `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`config`)]),e._v(`) =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(`();
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` config;
  },
  `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`error`)]),e._v(`) =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Promise`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`reject`)]),e._v(`(error);
  }
);

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 响应拦截器`)]),e._v(`
axiosInstance.`),t(`span`,{staticClass:`hljs-property`},[e._v(`interceptors`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`response`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`use`)]),e._v(`(
  `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`response`)]),e._v(`) =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` response;
  },
  `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`error`)]),e._v(`) =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Promise`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`reject`)]),e._v(`(error);
  }
);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` axiosInstance;
`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,i=n({__name:`basic`,setup(e){return{__sfc:!0,update:e=>{t.update(e)},start:()=>{t.start()},finish:()=>{t.finish()},error:()=>{t.error()},destroy:()=>{t.destroy()}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-2ca32118`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{wrap:``}},[t(`Button`,{on:{click:function(e){return n.start()}}},[e._v(`start`)]),t(`Button`,{on:{click:n.finish}},[e._v(`finish`)]),t(`Button`,{on:{click:n.error}},[e._v(`error`)]),t(`Button`,{on:{click:function(e){return n.update(30)}}},[e._v(`update 30%`)]),t(`Button`,{on:{click:function(e){return n.update(80)}}},[e._v(`update 80%`)]),t(`Button`,{on:{click:function(e){return n.destroy()}}},[e._v(`destroy`)])],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`基本用法`)]),t(`p`,[e._v(`最简单的用法。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrap`)]),e._v(`>`)]),e._v(`  
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"start()"`)]),e._v(`>`)]),e._v(`start`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"finish"`)]),e._v(`>`)]),e._v(`finish`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"error"`)]),e._v(`>`)]),e._v(`error`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"update(30)"`)]),e._v(`>`)]),e._v(`update 30%`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"update(80)"`)]),e._v(`>`)]),e._v(`update 80%`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"destroy()"`)]),e._v(`>`)]),e._v(`destroy`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { loading } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`update`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`percent`)]),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`update`)]),e._v(`(percent);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`start`)]),e._v(`();
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`finish`)]),e._v(`();
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`();
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`destroy`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`destroy`)]),e._v(`();
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,a=n({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`loading-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#loading-api`}},[e._v(`Loading API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`start`)]),t(`td`,[e._v(`开始加载`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`finish`)]),t(`td`,[e._v(`完成加载`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`error`)]),t(`td`,[e._v(`加载错误`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`update`)]),t(`td`,[e._v(`手动更新进度`)]),t(`td`,[e._v(`Function(percent)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`destroy`)]),t(`td`,[e._v(`vue的$.destroy()`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,o={render(){return e(`div`,{class:`demo-loading`},[e(r),e(i),e(a)])}};export{o as default};