/*!
* kui-vue v3.5.0
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{Bt as e,X as t,at as n,zt as r}from"./index-DH7LFVbd.js";var i=r({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Message 全局提示`)]),t(`p`,[e._v(`全局展示操作反馈信息。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`可提供成功、警告和错误等反馈信息。`)]),t(`li`,[e._v(`顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,a=0,o=r({methods:{info(){a++,this.$Message.info(`this is a base message number : `+a)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,[t(`Button`,{attrs:{type:`primary`},on:{click:e.info}},[e._v(`Show base info `)])],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`普通提示`)]),t(`p`,[e._v(`信息提醒反馈。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`Show base info `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` count = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      count++
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"this is a base message number : "`)]),e._v(`+count);
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,s=r({data(){return{LogoAlipay:t,LogoWechat:n}},methods:{alipay(){this.$Message.config({icon:t,content:`支付宝到账100万`})},wechat(){this.$Message.config({color:`green`,icon:n,content:`微信收款100万`})}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,[t(`Button`,{attrs:{icon:e.LogoAlipay},on:{click:e.alipay}}),t(`Button`,{attrs:{icon:e.LogoWechat},on:{click:e.wechat}})],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定图标`)]),t(`p`,[e._v(`自定图标。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"alipay"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoAlipay"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"wechat"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoWechat"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAlipay`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` count = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAlipay`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`alipay`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`:`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAlipay`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`"支付宝到账100万"`)]),e._v(`,
      });
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`wechat`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'green'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`:`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`"微信收款100万"`)]),e._v(`
      });
    },
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,c=r({methods:{warning(){this.$Message.warning(`警告提示`)},success(){this.$Message.success(`成功提示`)},error(){this.$Message.error(`错误提示`)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,[t(`Button`,{on:{click:e.warning}},[e._v(`Warning `)]),t(`Button`,{on:{click:e.success}},[e._v(`Success `)]),t(`Button`,{on:{click:e.error}},[e._v(`Error`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`提示类型`)]),t(`p`,[e._v(`通过 `),t(`code`,[e._v(`type`)]),e._v(` 来设置提示类型`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"warning"`)]),e._v(`>`)]),e._v(`Warning `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"success"`)]),e._v(`>`)]),e._v(`Success `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"error"`)]),e._v(`>`)]),e._v(`Error`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`warning`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`warning`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"警告提示"`)]),e._v(`);
      },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"成功提示"`)]),e._v(`);
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"错误提示"`)]),e._v(`);
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,l=r({methods:{config(){this.$Message.success(`10秒后关闭`,10)},config2(){this.$Message.config({type:`info`,duration:5,content:`5秒后关闭`})},config3(){this.$Message.config({type:`info`,duration:0,closable:!0,content:`手动关闭`,close:()=>{this.$Message.success(`我是回调`)}})}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,[t(`Button`,{on:{click:e.config}},[e._v(`10秒后关闭`)]),t(`Button`,{attrs:{type:`primary`},on:{click:e.config2}},[e._v(`5秒后关闭`)]),t(`Button`,{attrs:{type:`primary`},on:{click:e.config3}},[e._v(`手动关闭`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义时长`)]),t(`p`,[e._v(`可以自定义配置，其中 `),t(`code`,[e._v(`duration`)]),e._v(` 来控制自动关闭时长,默认 `),t(`code`,[e._v(`3s`)]),e._v(` , `),t(`code`,[e._v(`closable`)]),e._v(` 显示关闭按钮`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"config"`)]),e._v(`>`)]),e._v(`10秒后关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"config2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`5秒后关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"config3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`手动关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"10秒后关闭"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`);
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config2`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`5`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"5秒后关闭"`)]),e._v(`
      });
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config3`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`closable`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"手动关闭"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`close`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` { `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我是回调"`)]),e._v(`); }
      });
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,u=r({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#api`}},[e._v(`API`)])]),t(`p`,[e._v(`组件提供了一些静态方法，使用方式如下`)]),t(`ul`,[t(`li`,[t(`code`,[e._v(`this.$Message.info(content, [duration], onClose)`)])]),t(`li`,[t(`code`,[e._v(`this.$Message.success(content, [duration], onClose)`)])]),t(`li`,[t(`code`,[e._v(`this.$Message.warning(content, [duration], onClose)`)])]),t(`li`,[t(`code`,[e._v(`this.$Message.error(content, [duration], onClose)`)])])]),t(`p`,[e._v(`另外提供了全局配置和全局销毁的方法：`)]),t(`ul`,[t(`li`,[t(`code`,[e._v(`this.$Message.config(options)`)])]),t(`li`,[t(`code`,[e._v(`this.$Message.destroy()`)])])]),t(`p`,[e._v(`参数 `),t(`code`,[e._v(`options`)]),e._v(` 为对象，具体说明如下：`)]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`type`)]),t(`td`,[e._v(`提示类型，提供 `),t(`code`,[e._v(`info`)]),e._v(`、`),t(`code`,[e._v(`success`)]),e._v(`、`),t(`code`,[e._v(`error`)]),e._v(`、`),t(`code`,[e._v(`warning`)]),e._v(` 四种可选类型`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`info`)])]),t(`tr`,[t(`td`,[e._v(`content`)]),t(`td`,[e._v(`提示内容`)]),t(`td`,[e._v(`String,Vnode`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`duration`)]),t(`td`,[e._v(`自动关闭的延时，单位秒，0为 不自动关闭`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`3`)])]),t(`tr`,[t(`td`,[e._v(`closable`)]),t(`td`,[e._v(`是否可手动关闭`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`close`)]),t(`td`,[e._v(`关闭时的回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`color`)]),t(`td`,[e._v(`自定义图标颜色`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,d={render(){return e(`div`,{class:`demo-message`},[e(i),e(o),e(s),e(c),e(l),e(u)])}};export{d as default};