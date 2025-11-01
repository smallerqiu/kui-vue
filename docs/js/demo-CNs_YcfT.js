/*!
* kui-vue v3.5.0
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{Bt as e,zt as t}from"./index-DH7LFVbd.js";var n=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Spin 加载中`)]),t(`p`,[e._v(`用于页面和区块的加载中状态。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。`)]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,r=t({},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,[t(`Spin`,{attrs:{size:`large`}}),t(`Spin`),t(`Spin`,{attrs:{size:`small`}})],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基本用法`)]),t(`p`,[e._v(`一个简单的 loading 状态。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,i=t({data(){return{spinning:!1}},methods:{change(e){this.spinning=e}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{attrs:{vertical:``}},[e._v(` Loading state：`),t(`KSwitch`,{on:{change:e.change},model:{value:e.spinning,callback:function(t){e.spinning=t},expression:`spinning`}}),t(`Spin`,{model:{value:e.spinning,callback:function(t){e.spinning=t},expression:`spinning`}},[t(`div`,{staticClass:`deme-spin-container demo-back`},[e._v(` 床前明月光，疑是地上霜。`),t(`br`),e._v(` 举头望明月，低头思故乡。 `)])])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`卡片加载中`)]),t(`p`,[e._v(`可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    Loading state：`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`KSwitch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"spinning"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"change"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"spinning"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"deme-spin-container demo-back"`)]),e._v(`>`)]),e._v(`
          床前明月光，疑是地上霜。`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`>`)]),e._v(`
          举头望明月，低头思故乡。
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.deme-spin-container`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`100px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`50px`)]),e._v(`;
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`spinning`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`change`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`checked`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`spinning`)]),e._v(` = checked
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`78983a02`,null,null).exports,a=t({data(){return{spinning:!1,mode:`bounce`}},methods:{change(e){this.spinning=e},changeMode({value:e}){this.mode=e}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,[t(`Spin`,{attrs:{mode:e.mode},model:{value:e.spinning,callback:function(t){e.spinning=t},expression:`spinning`}},[t(`div`,{staticClass:`deme-spin-container demo-back`},[e._v(` 床前明月光，疑是地上霜。`),t(`br`),e._v(` 举头望明月，低头思故乡。 `)])]),t(`br`),t(`br`),e._v(` Loading state：`),t(`KSwitch`,{on:{change:e.change},model:{value:e.spinning,callback:function(t){e.spinning=t},expression:`spinning`}}),t(`br`),t(`br`),t(`RadioGroup`,{on:{change:e.changeMode},model:{value:e.mode,callback:function(t){e.mode=t},expression:`mode`}},[t(`Radio`,{attrs:{value:`bounce`,label:`Bounce`}}),t(`Radio`,{attrs:{value:`flip`,label:`Flip`}}),t(`Radio`,{attrs:{value:`rotate`,label:`Rotate`}}),t(`Radio`,{attrs:{value:`zoom`,label:`Zoom`}})],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`Spin类型`)]),t(`p`,[e._v(`可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"spinning"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"mode"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"deme-spin-container demo-back"`)]),e._v(`>`)]),e._v(`
        床前明月光，疑是地上霜。`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`>`)]),e._v(`
        举头望明月，低头思故乡。
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Spin`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  Loading state：`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`KSwitch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"spinning"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"change"`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"mode"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"changeMode"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Radio`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"bounce"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Bounce"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Radio`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"flip"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Flip"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Radio`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"rotate"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Rotate"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Radio`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"zoom"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Zoom"`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.deme-spin-container`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`100px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`50px`)]),e._v(`;
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`spinning`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`"bounce"`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`change`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`checked`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`spinning`)]),e._v(` = checked
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`changeMode`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{value}`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`mode`)]),e._v(` = value
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`f98374ac`,null,null).exports,o=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`radio-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#radio-api`}},[e._v(`Radio API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`是否加载状态，可以使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 双向绑定数据`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`mode`)]),t(`td`,[e._v(`展示spin类型,提供4中展示方式`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`delay`)]),t(`td`,[e._v(`延迟显示加载效果的时间（防止闪烁）`)]),t(`td`,[e._v(`number (毫秒)`)]),t(`td`,[e._v(`500`)])])])])])}],!1,null,null,null,null).exports,s={render(){return e(`div`,{class:`demo-spin`},[e(n),e(r),e(i),e(a),e(o)])}};export{s as default};