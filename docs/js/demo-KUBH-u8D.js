import{Cn as e,Nt as t,Ut as n,pn as r}from"./vue-B8LCe6Yo.js";import{m as i,o as a,s as o}from"./index-_kkE29nq.js";var s=i({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Modal 对话框`)]),t(`p`,[e._v(`模态对话框。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。`)]),t(`li`,[e._v(`另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。`)]),t(`li`,[e._v(`多`),t(`code`,[e._v(`语言环境`)]),e._v(`需要使用 `),t(`code`,[e._v(`modal.useModal()`)]),e._v(` 来调用。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,c=i({__name:`basic`,setup(t){let n=e(!1);return{__sfc:!0,visible:n,custom:e(!1),visible1:e(!1),okHandle:()=>{n.value=!1}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-67d02025`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.visible=!0}}},[e._v(`打开弹窗`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.custom=!0}}},[e._v(`自定义`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.visible1=!0}}},[e._v(`点蒙层关闭`)]),t(`Modal`,{attrs:{title:null,footer:null,showClose:!1},model:{value:n.custom,callback:function(e){n.custom=e},expression:`custom`}},[t(`Space`,{staticStyle:{width:`100%`},attrs:{direction:`vertical`}},[t(`h2`,[e._v(`我是一个标题`)]),t(`div`,[t(`Button`,{on:{click:function(e){n.custom=!1}}},[e._v(`Close`)])],1)])],1),t(`Modal`,{attrs:{title:`基本对话框`},on:{ok:n.okHandle},model:{value:n.visible,callback:function(e){n.visible=e},expression:`visible`}},[t(`p`,[e._v(`This is the content of a basic modal.`)]),t(`p`,[e._v(`More content...`)])]),t(`Modal`,{attrs:{title:`基本对话框`,"mask-closable":!0},on:{ok:function(e){n.visible1=!1}},model:{value:n.visible1,callback:function(e){n.visible1=e},expression:`visible1`}},[t(`p`,[e._v(`This is the content of a basic modal.`)]),t(`p`,[e._v(`More content...`)])])],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`基础用法`)]),t(`p`,[e._v(`使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 进行数据双向绑定`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`打开弹窗`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"custom = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`自定义`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`点蒙层关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"null"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:footer`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"null"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showClose`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"custom"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`direction`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"vertical"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:100%"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`h2`)]),e._v(`>`)]),e._v(`我是一个标题`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`h2`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"custom = false"`)]),e._v(`>`)]),e._v(`Close`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"基本对话框"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"okHandle"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`This is the content of a basic modal.`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`More content...`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"基本对话框"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1 = false"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:mask-closable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"true"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`This is the content of a basic modal.`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`More content...`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` custom = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`okHandle`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  visible.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,l=i({__name:`custom`,setup(t){let r=e(!1),i=e(!1),a=e(!1),o=e(!1),s=e(!1),c=e();return{__sfc:!0,visible1:r,visible2:i,visible3:a,visible4:o,loading:s,timer:c,okHandle:()=>{a.value=!1},submit:()=>{s.value=!0,c.value=setTimeout(e=>{s.value=!1,o.value=!1},2e3)},close:()=>{s.value=!1,clearTimeout(c.value)},Save:n}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-5799f626`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.visible1=!0}}},[e._v(`宽300px`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.visible2=!0}}},[e._v(`自定义页脚`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.visible3=!0}}},[e._v(`国际化`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.visible4=!0}}},[e._v(`异步关闭`)]),t(`Modal`,{attrs:{title:`Width 300px`,width:300},on:{ok:function(e){n.visible1=!1}},model:{value:n.visible1,callback:function(e){n.visible1=e},expression:`visible1`}},[t(`p`,[e._v(`content`)])]),t(`Modal`,{attrs:{title:`Custom footer`},scopedSlots:e._u([{key:`footer`,fn:function(){return[t(`Button`,{attrs:{icon:n.Save,type:`primary`},on:{click:function(e){n.visible2=!1}}},[e._v(`Save`)])]},proxy:!0}]),model:{value:n.visible2,callback:function(e){n.visible2=e},expression:`visible2`}},[t(`p`,[e._v(`content`)])]),t(`Modal`,{attrs:{title:`Are you ok ?`,"ok-text":`Ok`,"cancel-text":`Cancel`},on:{ok:n.okHandle},model:{value:n.visible3,callback:function(e){n.visible3=e},expression:`visible3`}},[t(`p`,[e._v(`Yes , I'm fine !`)])]),t(`Modal`,{attrs:{title:`提交表单`,loading:n.loading},on:{ok:n.submit,close:n.close},model:{value:n.visible4,callback:function(e){n.visible4=e},expression:`visible4`}},[t(`p`,[e._v(` Name：`),t(`Input`,{staticStyle:{width:`200px`},attrs:{placeholder:`Please input your name`}})],1)])],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`自定义`)]),t(`p`,[e._v(`自定义 `),t(`code`,[e._v(`Modal`)])])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`宽300px`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible2 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`自定义页脚`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible3 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`国际化`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible4 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`异步关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Width 300px"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:width`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"300"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1 = false"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Custom footer"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible2"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`footer`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Save"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible2 = false"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`
          >`)]),e._v(`Save</Button
        >
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Are you ok ?"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible3"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok-text`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Ok"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`cancel-text`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Cancel"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"okHandle"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`Yes , I'm fine !`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"提交表单"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible4"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:loading`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"submit"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`close`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"close"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
        Name：`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Please input your name"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:200px"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Save`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible3 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible4 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` loading = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` timer = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`();

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`okHandle`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  visible3.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`submit`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
  timer.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`e`)]),e._v(`) =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
    visible4.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
  }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2000`)]),e._v(`);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`close`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`clearTimeout`)]),e._v(`(timer.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,u=i({__name:`more`,setup(t){return{__sfc:!0,show1:e(!1),show2:e(!1),show3:e(!1),show4:e(!1),show5:e(!1),show6:e(!1),text:`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-2517bf7c`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.show1=!0}}},[e._v(`可以拖动`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.show2=!0}}},[e._v(`居中显示`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.show3=!0}}},[e._v(`顶部 200px`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.show4=!0}}},[e._v(`最大化`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.show5=!0}}},[e._v(`没有蒙层`)]),t(`Button`,{attrs:{type:`primary`},on:{click:function(e){n.show6=!0}}},[e._v(`没有页脚`)]),t(`Modal`,{attrs:{title:`Draggable`,draggable:``},on:{ok:function(e){n.show1=!1}},model:{value:n.show1,callback:function(e){n.show1=e},expression:`show1`}},[e._v(` `+e._s(n.text)+` `)]),t(`Modal`,{attrs:{title:`Centered`,centered:``},on:{ok:function(e){n.show2=!1}},model:{value:n.show2,callback:function(e){n.show2=e},expression:`show2`}},[e._v(` `+e._s(n.text)+` `)]),t(`Modal`,{attrs:{title:`Top 200px`,top:200},on:{ok:function(e){n.show3=!1}},model:{value:n.show3,callback:function(e){n.show3=e},expression:`show3`}},[e._v(` `+e._s(n.text)+` `)]),t(`Modal`,{attrs:{title:`Maximized`,maximized:``},on:{ok:function(e){n.show4=!1}},model:{value:n.show4,callback:function(e){n.show4=e},expression:`show4`}},[e._v(` `+e._s(n.text)+` `)]),t(`Modal`,{attrs:{title:`Click mask dont't be close`,mask:!1,"mask-closable":!1},on:{ok:function(e){n.show5=!1}},model:{value:n.show5,callback:function(e){n.show5=e},expression:`show5`}},[e._v(` `+e._s(n.text)+` `)]),t(`Modal`,{attrs:{title:`No footer`,footer:null},on:{ok:function(e){n.show6=!1}},model:{value:n.show6,callback:function(e){n.show6=e},expression:`show6`}},[e._v(` `+e._s(n.text)+` `)])],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`其它属性`)]),t(`p`,[e._v(`不需要页脚时，可以把 `),t(`code`,[e._v(`footer`)]),e._v(` 为`),t(`code`,[e._v(`null`)])])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show1 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`可以拖动`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show2 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`居中显示`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show3 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`顶部 200px`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show4 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`最大化`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show5 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`没有蒙层`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show6 = true"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`没有页脚`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Draggable"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`draggable`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show1 = false"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` text }}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Centered"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`centered`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show2 = false"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` text }}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Top 200px"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show3"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:top`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"200"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show3 = false"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` text }}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Maximized"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show4"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`maximized`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show4 = false"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` text }}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Click mask dont't be close"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show5"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:mask`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:mask-closable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show5 = false"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` text }}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"No footer"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show6"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:footer`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"null"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show6 = false"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` text }}
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` show1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` show2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` show3 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` show4 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` show5 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` show6 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` text = `),t(`span`,{staticClass:`hljs-string`},[e._v(`\`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; \``)]),e._v(`;
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,d=i({__name:`global`,setup(e){let n=o.useModal();return{__sfc:!0,useModal:n,useModalShow:()=>{n.success({title:`操作成功`,content:`恭喜你操作成功！`,onOk:()=>{a.info(`success`)}})},success:()=>{o.success({title:`操作成功`,content:`恭喜你操作成功！`,onOk:()=>{a.info(`success`)}})},error:()=>{o.error({title:`操作失败`,content:`很遗憾，您可能没有权限！`,onOk:()=>{a.info(`error`)}})},warning:()=>{o.warning({title:`温馨提示`,content:`此操作不可逆转，请谨慎！`,onOk:()=>{a.info(`warning`)}})},info:()=>{o.info({title:`操作提示`,content:`你打开了一个窗口！`,onOk:()=>{a.info(`info`)}})},show:()=>{o.show({title:`《静夜思》`,content:`床前明月光，疑是地上霜，举头望明月，低头思故乡！`,icon:t,color:`#eccb23`,onOk:()=>{a.info(`show`)}})},Moon:t}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-0eab38b4`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`Button`,{on:{click:n.success}},[e._v(`Success`)]),t(`Button`,{attrs:{type:`danger`},on:{click:n.error}},[e._v(`Error`)]),t(`Button`,{on:{click:n.warning}},[e._v(`Warning`)]),t(`Button`,{attrs:{type:`primary`},on:{click:n.info}},[e._v(`Info`)]),t(`Button`,{attrs:{icon:n.Moon},on:{click:n.show}},[e._v(`Custom icon`)])],1),t(`p`,[t(`Button`,{on:{click:n.useModalShow}},[e._v(`useModal`)])],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`全局模式`)]),t(`p`,[e._v(`使用 全局模式`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"success"`)]),e._v(`>`)]),e._v(`Success`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"error"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"danger"`)]),e._v(`>`)]),e._v(`Error`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"warning"`)]),e._v(`>`)]),e._v(`Warning`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`Info`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Moon"`)]),e._v(`>`)]),e._v(`Custom icon`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"useModalShow"`)]),e._v(`>`)]),e._v(`useModal`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`p`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Moon`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { modal, message } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 使用 useModal`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` useModal = modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`useModal`)]),e._v(`();
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`useModalShow`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  useModal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"操作成功"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"恭喜你操作成功！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"success"`)]),e._v(`);
    },
  });
};

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`//`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"操作成功"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"恭喜你操作成功！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"success"`)]),e._v(`);
    },
  });
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"操作失败"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"很遗憾，您可能没有权限！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"error"`)]),e._v(`);
    },
  });
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`warning`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`warning`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"温馨提示"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"此操作不可逆转，请谨慎！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"warning"`)]),e._v(`);
    },
  });
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"操作提示"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"你打开了一个窗口！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(`);
    },
  });
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`show`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`show`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"《静夜思》"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"床前明月光，疑是地上霜，举头望明月，低头思故乡！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`icon`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Moon`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"#eccb23"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"show"`)]),e._v(`);
    },
  });
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,f=i({__name:`confirm`,setup(e){return{__sfc:!0,confirm:()=>{o.confirm({title:`您确认要这么做吗`,content:`此操作不可逆转，谨慎！！！`,onOk:()=>{a.success(`你点了确认`)},onCancel:()=>{a.info(`你点了取消`)}})},custom:()=>{o.confirm({title:`Are you Ok?`,content:`Yes , I am fine, and you?`,okText:`OK`,cancelText:`Cancel`})},Async:()=>{o.confirm({title:`您确认要这么做吗`,content:`此操作不可逆转，谨慎！！！`,onOk:()=>new Promise((e,t)=>{setTimeout(e,2e3)}),onCancel:()=>{}})},closeAll:()=>{for(var e=0;e<3;e++)setTimeout(e=>{o.confirm({title:`Destroy All`,content:`给你一个惊喜！`,cancelText:`全部关闭`,onCancel:()=>{o.destroyAll()},onOk:()=>new Promise((e,t)=>{setTimeout(e,2e3)})})},e*500)}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-2c3230d3`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[t(`Button`,{on:{click:function(e){return n.confirm()}}},[e._v(`标准调用`)]),t(`Button`,{on:{click:function(e){return n.custom()}}},[e._v(`国际化`)]),t(`Button`,{on:{click:function(e){return n.Async()}}},[e._v(`异步关闭`)]),t(`Button`,{on:{click:function(e){return n.closeAll()}}},[e._v(`Close All`)])],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`提示框`)]),t(`p`,[e._v(`全局的确认提示框，可以异步关闭`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"confirm()"`)]),e._v(`>`)]),e._v(`标准调用`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"custom()"`)]),e._v(`>`)]),e._v(`国际化`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Async()"`)]),e._v(`>`)]),e._v(`异步关闭`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"closeAll()"`)]),e._v(`>`)]),e._v(`Close All`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { modal, message } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`confirm`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`confirm`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"您确认要这么做吗"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"此操作不可逆转，谨慎！！！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"你点了确认"`)]),e._v(`);
    },
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onCancel`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"你点了取消"`)]),e._v(`);
    },
  });
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`custom`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`confirm`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Are you Ok?"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Yes , I am fine, and you?"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`okText`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"OK"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`cancelText`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Cancel"`)]),e._v(`,
  });
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`Async`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`confirm`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"您确认要这么做吗"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"此操作不可逆转，谨慎！！！"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Promise`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`resolve, reject`)]),e._v(`) =>`)]),e._v(` {
        `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(resolve, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2000`)]),e._v(`);
      });
    },
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onCancel`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`//用户点了取消 应该中断 异步执行`)]),e._v(`
    },
  });
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`closeAll`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`for`)]),e._v(` (`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`var`)]),e._v(` o = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`; o < `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(`; o++) {
    `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`e`)]),e._v(`) =>`)]),e._v(` {
      modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`confirm`)]),e._v(`({
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Destroy All"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"给你一个惊喜！"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`cancelText`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"全部关闭"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onCancel`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
          modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`destroyAll`)]),e._v(`();
        },
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
          `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Promise`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`resolve, reject`)]),e._v(`) =>`)]),e._v(` {
            `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(resolve, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2000`)]),e._v(`);
          });
        },
      });
    }, o * `),t(`span`,{staticClass:`hljs-number`},[e._v(`500`)]),e._v(`);
  }
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,p=i({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#api`}},[e._v(`API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`show`)]),t(`td`,[e._v(`对话框是否显示，可使用 v-model 双向绑定数据。`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`对话框标题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`width`)]),t(`td`,[e._v(`对话框宽度`)]),t(`td`,[e._v(`Number, String`)]),t(`td`,[e._v(`520`)])]),t(`tr`,[t(`td`,[e._v(`ok-text`)]),t(`td`,[e._v(`确定按钮文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`确定`)])]),t(`tr`,[t(`td`,[e._v(`cancel-text`)]),t(`td`,[e._v(`取消按钮文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`取消`)])]),t(`tr`,[t(`td`,[e._v(`draggable`)]),t(`td`,[e._v(`弹框是否可拖动, confirm 模式不可用`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`centered`)]),t(`td`,[e._v(`窗口是否可以居中 , confirm 模式不可用`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`maximized`)]),t(`td`,[e._v(`弹框是否可以最大化显示 , confirm 模式不可用`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`mask-closable`)]),t(`td`,[e._v(`是否点击遮罩关闭弹窗, 为否时 Esc 键将失效`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`ok`)]),t(`td`,[e._v(`点击确定的回调，`),t(`code`,[e._v(`注意：不会关闭 Modal `)])]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`cancel`)]),t(`td`,[e._v(`点击取消的回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`close`)]),t(`td`,[e._v(`窗口关闭的回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`escKey`)]),t(`td`,[e._v(`是否支持按 Esc 关闭`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])])])]),t(`h2`,{attrs:{id:`modal.method()`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#modal.method()`}},[e._v(`Modal.method()`)])]),t(`p`,[e._v(`组件提供了一些静态方法，使用方式如下`)]),t(`ul`,[t(`li`,[e._v(`modal.info(options)`)]),t(`li`,[e._v(`modal.success(options)`)]),t(`li`,[e._v(`modal.warning(options)`)]),t(`li`,[e._v(`modal.error(options)`)]),t(`li`,[e._v(`modal.show(options)`)]),t(`li`,[e._v(`modal.confirm(options)`)])]),t(`p`,[e._v(`另外提供了全局配置和全局销毁的方法：`)]),t(`ul`,[t(`li`,[e._v(`modal.show(options)`)]),t(`li`,[e._v(`modal.destroyAll()`)])]),t(`p`,[e._v(`参数 options 为对象，具体说明如下：`)]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`对话框标题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`content`)]),t(`td`,[e._v(`对话框内容`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`okText`)]),t(`td`,[e._v(`确定按钮文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`确定`)])]),t(`tr`,[t(`td`,[e._v(`cancelText`)]),t(`td`,[e._v(`取消按钮文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`取消`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`弹框的图标，type 为 toast 可用 ，默认可选值为 success，warning, error, info, 也可以自定义，参照 `),t(`a`,{attrs:{href:`/components/icon`}},[e._v(`Icon`)]),e._v(`值`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`color`)]),t(`td`,[e._v(`弹框的图标的颜色，type 为 toast 可用`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`onOk`)]),t(`td`,[e._v(`点击确定的回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`onCancel`)]),t(`td`,[e._v(`点击取消的回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,m={render(){return r(`div`,{class:`demo-modal`},[r(s),r(c),r(l),r(u),r(d),r(f),r(p)])}};export{m as default};