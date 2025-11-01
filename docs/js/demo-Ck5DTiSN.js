/*!
* kui-vue v3.5.0
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{Bt as e,wt as t,zt as n}from"./index-DH7LFVbd.js";var r=n({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Collapse 折叠面板`)]),t(`p`,[e._v(`可以折叠/展开的内容区域。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`对复杂区域进行分组和隐藏，保持页面的整洁。`)]),t(`li`,[e._v(`‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,i=n({data(){return{text:`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-collapse`},[t(`Collapse`,{attrs:{value:[`1`]}},[t(`Panel`,{key:`1`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`2`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`3`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基本用法`)]),t(`p`,[e._v(`默认可以同时展开一个或者多个面板`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-collapse"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['1']"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      text : `),t(`span`,{staticClass:`hljs-string`},[e._v(`\`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; \``)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,a=n({data(){return{text:`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-collapse`},[t(`Collapse`,{attrs:{value:[`1`],accordion:``}},[t(`Panel`,{key:`1`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`2`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`3`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`手风琴`)]),t(`p`,[e._v(`设置 `),t(`code`,[e._v(`accordion`)]),e._v(` 只允许同时展开一个面板`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-collapse"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accordion`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      text : `),t(`span`,{staticClass:`hljs-string`},[e._v(`\`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; \``)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,o=n({data(){return{text:`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-collapse`},[t(`Collapse`,{attrs:{value:[`1`]}},[t(`Panel`,{key:`1`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))]),t(`Collapse`,{attrs:{value:[`1-1`]}},[t(`Panel`,{key:`1-1`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`1-2`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])])],1)],1),t(`Panel`,{key:`2`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`3`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`嵌套面板`)]),t(`p`,[e._v(`嵌套折叠面板。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-collapse"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['1']"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['1-1']"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-1"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1-2"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      text : `),t(`span`,{staticClass:`hljs-string`},[e._v(`\`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; \``)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,s=n({data(){return{text:`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-collapse`},[t(`Collapse`,{attrs:{value:[`1`],sample:``}},[t(`Panel`,{key:`1`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`2`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])]),t(`Panel`,{key:`3`,attrs:{title:`Panel title`}},[t(`div`,[e._v(e._s(e.text))])])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`简洁模式`)]),t(`p`,[e._v(`设置 `),t(`code`,[e._v(`sample`)]),e._v(` 呈现没有边框的简洁样式。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-collapse"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sample`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      text : `),t(`span`,{staticClass:`hljs-string`},[e._v(`\`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; \``)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,c=n({data(){return{SettingsOutline:t,text:`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-collapse`},[t(`Collapse`,{attrs:{value:[`1`,`2`]}},[t(`Panel`,{key:`1`,attrs:{title:`Panel title`}},[t(`Icon`,{attrs:{slot:`extra`,type:e.SettingsOutline},slot:`extra`}),t(`div`,[e._v(e._s(e.text))])],1),t(`Panel`,{key:`2`,attrs:{title:`Panel title`}},[t(`Icon`,{attrs:{slot:`extra`,type:e.SettingsOutline},slot:`extra`}),t(`div`,[e._v(e._s(e.text))])],1),t(`Panel`,{key:`3`,attrs:{title:`Panel title`}},[t(`Icon`,{attrs:{slot:`extra`,type:e.SettingsOutline},slot:`extra`}),t(`div`,[e._v(e._s(e.text))])],1)],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`额外节点`)]),t(`p`,[e._v(`可以同时展开多个面板。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-collapse"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['1','2']"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`slot`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"extra"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"SettingsOutline"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`slot`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"extra"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"SettingsOutline"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Panel title"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`slot`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"extra"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"SettingsOutline"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(e._s(e.text)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Panel`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Collapse`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`SettingsOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`SettingsOutline`)]),e._v(`,
      text : `),t(`span`,{staticClass:`hljs-string`},[e._v(`\`A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; \``)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,l=n({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#api`}},[e._v(`API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`当前激活的面板的 `),t(`code`,[e._v(`name`)]),e._v(`，可以使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 双向绑定`)]),t(`td`,[e._v(`Array , String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`accordion`)]),t(`td`,[e._v(`是否开启手风琴模式，开启后每次至多展开一个面板`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`sample`)]),t(`td`,[e._v(`是否开启简洁模式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`切换面板时触发回调，返回当前选项卡的 `),t(`code`,[e._v(`name`)])]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])])])]),t(`h2`,{attrs:{id:`panel`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#panel`}},[e._v(`Panel`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`当前激活的面板的标题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`key`)]),t(`td`,[e._v(`Vue 所需要的key`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`extra`)]),t(`td`,[e._v(`卡片标题扩展`)]),t(`td`,[e._v(`slot`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,u={render(){return e(`div`,[e(r),e(i),e(a),e(o),e(c),e(s),e(l)])}};export{u as default};