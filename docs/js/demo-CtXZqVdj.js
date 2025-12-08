/*!
* kui-vue v3.5.1
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{Ct as e,ln as t,mt as n}from"./vue-CMWM46bo.js";import{c as r}from"./index-C9zE6tXi.js";var i=r({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Notice 通知提醒框`)]),t(`p`,[e._v(`全局展示通知提醒信息。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`p`,[e._v(`在系统四个角显示通知提醒信息。经常用于以下情况：`)]),t(`ul`,[t(`li`,[e._v(`较为复杂的通知内容。`)]),t(`li`,[e._v(`带有交互的通知，给出用户下一步的行动点。`)]),t(`li`,[e._v(`系统主动推送。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,a=r({methods:{info(){this.$Notice.open({title:`通知的标题`,content:`通知的描述`,duration:5})}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,[t(`Button`,{attrs:{type:`primary`},on:{click:e.info}},[e._v(`普通提示`)])],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基础用法`)]),t(`p`,[t(`code`,[e._v(`Notice`)]),e._v(` 的基本用法`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`普通提示`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{  
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`open`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"通知的标题"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"通知的描述"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`5`)]),e._v(`
      });
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,o=r({methods:{notice(e){this.$Notice[e]({title:`通知的标题`,content:`通知的描述`,duration:5})}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{attrs:{wrap:``}},[t(`Button`,{on:{click:function(t){return e.notice(`info`)}}},[e._v(`消息提示 `)]),t(`Button`,{on:{click:function(t){return e.notice(`warning`)}}},[e._v(`警告提示 `)]),t(`Button`,{on:{click:function(t){return e.notice(`success`)}}},[e._v(`成功提示 `)]),t(`Button`,{on:{click:function(t){return e.notice(`error`)}}},[e._v(`错误提示 `)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`带图标的提醒`)]),t(`p`,[e._v(`通过调用不同的方法，可展示不同的类型`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrap`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"notice('info')"`)]),e._v(`>`)]),e._v(`消息提示 `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"notice('warning')"`)]),e._v(`>`)]),e._v(`警告提示 `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"notice('success')"`)]),e._v(`>`)]),e._v(`成功提示 `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"notice('error')"`)]),e._v(`>`)]),e._v(`错误提示 `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{  
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`notice`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`type`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`[type]({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"通知的标题"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"通知的描述"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`5`)]),e._v(`
      });
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,s=r({data(){return{LogoAlipay:n,LogoWechat:e}},methods:{alipay(){this.$Notice.open({icon:n,color:`#0082ff`,title:`尊敬的用户你好`,content:`我们很高兴通知您，您下个月花呗12900元，不用还了！`,duration:10})},wechat(){let t=this.$createElement,n=t(`div`,{},[t(`p`,{attrs:{style:`margin:10px 0`}},`微信新增了一些新功能，我们邀请您体验！`),t(`Button`,{props:{type:`primary`}},`去看看`)]);this.$Notice.open({icon:e,color:`#00ff9e`,title:`尊敬的用户你好`,content:n,duration:10})}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,[t(`Button`,{attrs:{icon:e.LogoAlipay},on:{click:e.alipay}}),t(`Button`,{attrs:{icon:e.LogoWechat},on:{click:e.wechat}})],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义图标`)]),t(`p`,[e._v(`自定义图标`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"alipay"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoAlipay"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"wechat"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoWechat"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAlipay`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{  
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
       `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAlipay`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`alipay`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`open`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`:`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoAlipay`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'#0082ff'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"尊敬的用户你好"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"我们很高兴通知您，您下个月花呗12900元，不用还了！"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`
      });
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`wechat`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` h = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$createElement`)]),e._v(`

      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` content = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'div'`)]),e._v(`,{},[
        `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'p'`)]),e._v(`,{ attrs : {`),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'margin:10px 0'`)]),e._v(`} },`),t(`span`,{staticClass:`hljs-string`},[e._v(`'微信新增了一些新功能，我们邀请您体验！'`)]),e._v(`),
        `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'Button'`)]),e._v(`,{ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`props`)]),e._v(`:{ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'primary'`)]),e._v(` } },`),t(`span`,{staticClass:`hljs-string`},[e._v(`'去看看'`)]),e._v(`)
      ])

      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`open`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`:`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoWechat`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'#00ff9e'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"尊敬的用户你好"`)]),e._v(`,
        content,`),t(`span`,{staticClass:`hljs-comment`},[e._v(`//: "微信新增了一些新功能，我们邀请您体验！",`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`
      });
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,c=r({methods:{config(){this.$Notice.open({type:`success`,duration:10,title:`温馨提示`,content:`10秒后关闭`})},config2(){this.$Notice.open({type:`info`,duration:5,title:`温馨提示`,content:`5秒后关闭`})},config3(){this.$Notice.open({type:`info`,duration:0,title:`温馨提示`,content:`手动关闭`,close:()=>{this.$Message.success(`我是回调`)}})}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{attrs:{warp:``}},[t(`Button`,{on:{click:e.config}},[e._v(`10秒后关闭`)]),t(`Button`,{attrs:{type:`primary`},on:{click:e.config2}},[e._v(`5秒后关闭`)]),t(`Button`,{attrs:{type:`primary`},on:{click:e.config3}},[e._v(`手动关闭`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义时长`)]),t(`p`,[e._v(`可以自定义配置，其中 `),t(`code`,[e._v(`duration`)]),e._v(` 来控制自动关闭时长,默认 `),t(`code`,[e._v(`3s`)])])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`warp`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"config"`)]),e._v(`>`)]),e._v(`10秒后关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"config2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`5秒后关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"config3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`手动关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`open`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"success"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'温馨提示'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"10秒后关闭"`)]),e._v(`
      });
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config2`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`open`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`5`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'温馨提示'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"5秒后关闭"`)]),e._v(`
      });
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`config3`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Notice`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`open`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`duration`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'温馨提示'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"手动关闭"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`close`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` { `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我是回调"`)]),e._v(`); }
      });
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,l=r({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#api`}},[e._v(`API`)])]),t(`p`,[e._v(`组件提供了一些静态方法，使用方式如下`)]),t(`ul`,[t(`li`,[t(`code`,[e._v(`this.$Notice.info(options)`)])]),t(`li`,[t(`code`,[e._v(`this.$Notice.success(options)`)])]),t(`li`,[t(`code`,[e._v(`this.$Notice.warning(options)`)])]),t(`li`,[t(`code`,[e._v(`this.$Notice.error(options)`)])])]),t(`p`,[e._v(`另外提供了全局配置和全局销毁的方法：`)]),t(`ul`,[t(`li`,[t(`code`,[e._v(`this.$Notice.open(options)`)])]),t(`li`,[t(`code`,[e._v(`this.$Notice.destroy()`)])])]),t(`p`,[e._v(`参数 `),t(`code`,[e._v(`options`)]),e._v(` 为对象，具体说明如下：`)]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`通知提醒的标题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`content`)]),t(`td`,[e._v(`提示内容`)]),t(`td`,[e._v(`String ,vndoe`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`duration`)]),t(`td`,[e._v(`自动关闭的延时，单位秒，不关闭可以写 0`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`3`)])]),t(`tr`,[t(`td`,[e._v(`close`)]),t(`td`,[e._v(`关闭时的回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`color`)]),t(`td`,[e._v(`自定义图标颜色`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,u={render(){return t(`div`,{class:`demo-notice`},[t(i),t(a),t(o),t(s),t(c),t(l)])}};export{u as default};