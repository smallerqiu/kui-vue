/*!
* kui-vue v3.5.1
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{bt as e,gt as t,ln as n,u as r}from"./vue-CMWM46bo.js";import{c as i}from"./index-C9zE6tXi.js";var a=i({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Tabs 标签页`)]),t(`p`,[e._v(`选项卡切换组件。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`提供平级的区域将大块内容进行收纳和展现，保持界面整洁。`)]),t(`ul`,[t(`li`,[e._v(`卡片式的页签，提供可关闭的样式，常用于容器顶部。`)]),t(`li`,[e._v(`标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,o=i({data(){return{animated:!1,current:`3`}},methods:{change(e){console.log(e)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[e._v(` Animated: `),t(`KSwitch`,{model:{value:e.animated,callback:function(t){e.animated=t},expression:`animated`}}),t(`Tabs`,{attrs:{animated:e.animated},on:{change:e.change},model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`}},[e._v(` Content of Tab Pane 1 `)]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`}},[e._v(` Content of Tab Pane 2 `)]),t(`TabPanel`,{key:`3`,attrs:{title:`Tab 3`}},[e._v(` Content of Tab Pane 3 `)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基本用法`)]),t(`p`,[e._v(`默认选中第一项。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  Animated: `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`KSwitch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"animated"`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"change"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:animated`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"animated"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 1
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 2
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 3"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 3
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`animated`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'3'`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`change`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`key`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(key)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,s=i({data(){return{current:`1`,disabled:!0}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,[t(`Button`,{attrs:{size:`small`},on:{click:function(t){e.disabled=!e.disabled}}},[e._v(e._s(e.disabled?`Undisable`:`Disabled`))]),t(`br`),t(`br`),t(`Tabs`,{model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`}},[e._v(` Content of Tab Pane 1 `)]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`,disabled:e.disabled}},[e._v(` Content of Tab Pane 2 `)]),t(`TabPanel`,{key:`3`,attrs:{title:`Tab 3`}},[e._v(` Content of Tab Pane 3 `)])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`禁用`)]),t(`p`,[e._v(`禁用某一项。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"disabled=!disabled"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(`disabled?'Undisable':'Disabled'}}`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(`>`)]),e._v(`
        Content of Tab Pane 1
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:disabled`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"disabled"`)]),e._v(`>`)]),e._v(`
        Content of Tab Pane 2
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 3"`)]),e._v(`>`)]),e._v(`
        Content of Tab Pane 3
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,c=i({data(){return{current:`1`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tabs`,{attrs:{centered:``},model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`}},[e._v(` Content of Tab Pane 1 `)]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`}},[e._v(` Content of Tab Pane 2 `)]),t(`TabPanel`,{key:`3`,attrs:{title:`Tab 3`}},[e._v(` Content of Tab Pane 3 `)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`居中`)]),t(`p`,[e._v(`标签居中展示。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`centered`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 1
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 2
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 3"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 3
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,l=i({data(){return{LogoApple:t,LogoMicrosoft:e,current:`1`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tabs`,{model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`,icon:e.LogoApple}},[e._v(` Content of Tab Pane 1 `)]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`,icon:e.LogoMicrosoft}},[e._v(` Content of Tab Pane 2 `)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`图标`)]),t(`p`,[e._v(`有图标的标签。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoApple"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 1
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoMicrosoft"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 2
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoMicrosoft`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoApple`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoMicrosoft`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,u=i({data(){return{current:`1`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tabs`,{model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`}},[e._v(` Content of Tab Pane 1 `)]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`}},[e._v(` Content of Tab Pane 2 `)]),t(`TabPanel`,{key:`3`,attrs:{title:`Tab 3`}},[e._v(` Content of Tab Pane 3 `)]),t(`Button`,{attrs:{slot:`extra`,size:`small`},slot:`extra`},[e._v(`Extra Operate`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`附加内容`)]),t(`p`,[e._v(`可以在页签右边添加附加操作。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 1
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 2
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 3"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 3
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`slot`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"extra"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),e._v(`Extra Operate`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,d=i({data(){return{current:`1`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tabs`,{attrs:{card:``},model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`}},[e._v(` Content of Tab Pane 1 `)]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`}},[e._v(` Content of Tab Pane 2 `)]),t(`TabPanel`,{key:`3`,attrs:{title:`Tab 3`}},[e._v(` Content of Tab Pane 3 `)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`卡片式页签`)]),t(`p`,[e._v(`另一种样式的页签。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`card`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 1
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 2
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 3"`)]),e._v(`>`)]),e._v(`
      Content of Tab Pane 3
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`
    }
  },
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,f=i({data(){let e=[{title:`Tab 1`,content:`Content of Tab 1`,key:`1`},{title:`Tab 2`,content:`Content of Tab 2`,key:`2`,closable:!0},{title:`Tab 3`,content:`Content of Tab 3`,key:`3`,closable:!0}];return{Add:r,panels:e,activeKey:e[0].key,newTabIndex:1}},methods:{remove(e){let t=this.panels,n=t.map(e=>e.key).indexOf(e);this.activeKey==e&&(n==t.length-1?this.activeKey=t[n-1].key:this.activeKey=t[n+1].key),t.splice(n,1)},add(){let e=this.panels,t=`A${this.newTabIndex++}`;e.push({title:`New Tab${this.newTabIndex}`,content:`Content of new Tab ${t}`,key:t,closable:!0}),this.panels=e,this.activeKey=t}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Tabs`,{attrs:{card:``},on:{remove:e.remove},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:`activeKey`}},[e._l(e.panels,function(n){return t(`TabPanel`,{key:n.key,attrs:{title:n.title,closable:n.closable}},[e._v(` `+e._s(n.content)+` `)])}),t(`Button`,{attrs:{slot:`extra`,icon:e.Add,size:`small`},on:{click:e.add},slot:`extra`})],2)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`新增和关闭页签`)]),t(`p`,[e._v(`只有卡片样式的页签支持新增和关闭选项。`),t(`br`),e._v(` 使用 `),t(`code`,[e._v(`closable={false}`)]),e._v(` 禁止关闭。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"activeKey"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`card`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`remove`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"remove"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"panel.title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"panel in panels"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"panel.key"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:closable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"panel.closable"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(`panel.content}}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`slot`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"extra"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Add"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"add"`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` panels = [
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Tab 1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Content of Tab 1'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Tab 2'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Content of Tab 2'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'2'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`closable`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Tab 3'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Content of Tab 3'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'3'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`closable`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
    ];
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Add`)]),e._v(`,
      panels,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`activeKey`)]),e._v(`: panels[`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`].`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`newTabIndex`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`remove`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`key`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` panels = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`panels`)]),e._v(`
      
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` index = panels.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`map`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[t(`span`,{staticClass:`hljs-params`},[e._v(`p`)]),e._v(`=>`)]),e._v(`p.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`).`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`indexOf`)]),e._v(`(key)

      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (`),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`activeKey`)]),e._v(` == key) {
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(`(index == panels.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(`-`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`) {
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`activeKey`)]),e._v(` = panels[index-`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`].`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`
        } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` {
          `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`activeKey`)]),e._v(` = panels[index+`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`].`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(`
        }

      }
      panels.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`splice`)]),e._v(`(index,`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`)

    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`add`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` panels = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`panels`)]),e._v(`;
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` activeKey = `),t(`span`,{staticClass:`hljs-string`},[e._v("`A"),t(`span`,{staticClass:`hljs-subst`},[e._v("${"),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.newTabIndex++}`)]),e._v("`")]),e._v(`;
      panels.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`({ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`New Tab"),t(`span`,{staticClass:`hljs-subst`},[e._v("${"),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.newTabIndex}`)]),e._v("`")]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`Content of new Tab "),t(`span`,{staticClass:`hljs-subst`},[e._v("${activeKey}")]),e._v("`")]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: activeKey, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`closable`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` });
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`panels`)]),e._v(` = panels;
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`activeKey`)]),e._v(` = activeKey;
    },
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,p=i({data(){return{current:`1`}},methods:{change(e){console.log(e)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-tabs-sample`},[t(`Tabs`,{attrs:{sample:``},on:{change:e.change},model:{value:e.current,callback:function(t){e.current=t},expression:`current`}},[t(`TabPanel`,{key:`1`,attrs:{title:`Tab 1`}},[t(`p`,[e._v(`Content of Tab Pane 1`)]),t(`p`,[e._v(`Content of Tab Pane 1`)]),t(`p`,[e._v(`Content of Tab Pane 1`)])]),t(`TabPanel`,{key:`2`,attrs:{title:`Tab 2`}},[t(`p`,[e._v(`Content of Tab Pane 2`)]),t(`p`,[e._v(`Content of Tab Pane 2`)]),t(`p`,[e._v(`Content of Tab Pane 2`)])]),t(`TabPanel`,{key:`3`,attrs:{title:`Tab 3`}},[t(`p`,[e._v(`Content of Tab Pane 3`)]),t(`p`,[e._v(`Content of Tab Pane 3`)]),t(`p`,[e._v(`Content of Tab Pane 3`)])])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`极简式页签`)]),t(`p`,[e._v(`简单的卡片呈现模式。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-tabs-sample"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"current"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sample`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"change"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 1`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 1`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 1`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 2`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 2`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 2`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tab 3"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 3`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 3`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Content of Tab Pane 3`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`TabPanel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tabs`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`current`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`change`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`key`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(key)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`

`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-tabs-sample`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`10px`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`:`),t(`span`,{staticClass:`hljs-built_in`},[e._v(`rgba`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,.`),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`);
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`f9f7d508`,null,null).exports,m=i({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`tabs-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tabs-api`}},[e._v(`Tabs API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`当前激活 tab 面板的 key`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`card`)]),t(`td`,[e._v(`页签样式是否为卡片样式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`sample`)]),t(`td`,[e._v(`页签样式是否为简洁样式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`animated`)]),t(`td`,[e._v(`是否使用动画切换 Tabs`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`remove`)]),t(`td`,[e._v(`tab关闭时的回调，返回关闭的tab的key值`)]),t(`td`,[e._v(`Function(activeKey)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`切换面板的回调`)]),t(`td`,[e._v(`Function(activeKey)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`tab-click`)]),t(`td`,[e._v(`tab点击时的回调`)]),t(`td`,[e._v(`Function(activeKey)`)]),t(`td`,[e._v(`-`)])])])]),t(`h2`,{attrs:{id:`tabs.tabpanel-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#tabs.tabpanel-api`}},[e._v(`Tabs.TabPanel API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`key`)]),t(`td`,[e._v(`vue需要的key值`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`选项卡头显示文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`选项卡头显示的图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`tab是否被禁用`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`closable`)]),t(`td`,[e._v(`tab是否显示关闭按钮`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])])])])])}],!1,null,null,null,null).exports,h={render(){return n(`div`,[n(a),n(o),n(s),n(c),n(l),n(u),n(d),n(f),n(p),n(m)])}};export{h as default};