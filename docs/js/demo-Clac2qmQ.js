import{Pt as e,Tn as t,Zt as n,_ as r,bn as i,mn as a}from"./vue-CQGPvsrV.js";import{m as o,o as s,s as c}from"./index-DxuXnqZb.js";var l=o({__name:`basic`,setup(t){return{__sfc:!0,data:[{key:`0`,name:`Li Lei`,gender:0,age:32,address:`Wu Han Guanggu No. 328`,tags:[`Python`,`Java`]},{key:`1`,name:`Liu Hao`,gender:1,age:28,address:`Wu Han Hongshan No. 128`,tags:[`Python`,`Java`]},{key:`2`,name:`Hu Cong`,gender:0,age:28,address:`Wu Han Nanhu No. 198`,tags:[`JS`,`CSS`]},{key:`3`,name:`Qiu`,gender:1,age:28,address:`Wu Han Nanhu No. 188`,tags:[`Go`,`Python`]}],columns:[{title:`Name`,key:`name`},{title:`Age`,key:`age`},{title:`Gender`,key:`gender`},{title:`Address`,key:`address`},{title:`Tags`,key:`tags`},{title:`Operate`,key:`action`}],show:e=>{c.info({title:`Hi`,content:`My name is ${e.name}`})},rowClick:e=>{s.info(`Test row click: `+e.name)},Sunny:n,Moon:e}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-0b163a94`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,columns:n.columns,sticky:52},on:{rowClick:n.rowClick},scopedSlots:e._u([{key:`tags`,fn:function({value:n}){return[t(`Space`,e._l(n,function(n){return t(`Tag`,{key:n,attrs:{color:n==`Python`?`green`:`blue`}},[e._v(e._s(n))])}),1)]}},{key:`gender`,fn:function({value:e}){return[t(`Icon`,{attrs:{type:e==1?n.Sunny:n.Moon,color:e==1?`blue`:`#f50cff`,size:`15`}})]}},{key:`action`,fn:function({value:r,record:i,col:a}){return[t(`Button`,{attrs:{size:`small`},on:{click:function(e){return e.stopPropagation(),(e=>n.show(i)).apply(null,arguments)}}},[e._v(`more`)])]}}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`基本用法`)]),t(`p`,[e._v(`一个普通的表格`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`rowClick`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"rowClick"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:sticky`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"52"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tag`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag in value"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag == 'Python' ? 'green' : 'blue'"`)]),e._v(`
          >`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` tag }}</Tag
        >
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value == 1 ? Sunny : Moon"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value == 1 ? 'blue' : '#f50cff'"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"15"`)]),e._v(`
      />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value, record, col }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click.stop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(e) => show(record)"`)]),e._v(`>`)]),e._v(`more`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Sunny`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Moon`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { message, modal } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"JS"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"CSS"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Qiu"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Go"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Gender"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"gender"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tags"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tags"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action"`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`show`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`record`)]),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hi"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`My name is "),t(`span`,{staticClass:`hljs-subst`},[e._v("${record.name}")]),e._v("`")]),e._v(`,
  });
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`rowClick`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`data`)]),e._v(`) => {
  message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Test row click: "`)]),e._v(` + data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`name`)]),e._v(`);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,u=o({__name:`base-render`,setup(t){return{__sfc:!0,data:[{key:`0`,name:`Li Lei`,gender:0,age:32,address:`Wu Han Guanggu No. 328`,tags:[`Python`,`Java`]},{key:`1`,name:`Liu Hao`,gender:1,age:28,address:`Wu Han Hongshan No. 128`,tags:[`Python`,`Java`]},{key:`2`,name:`Hu Cong`,gender:0,age:28,address:`Wu Han Nanhu No. 198`,tags:[`JS`,`CSS`]},{key:`3`,name:`Qiu`,gender:1,age:28,address:`Wu Han Nanhu No. 188`,tags:[`Go`,`Python`]}],columns:[{title:`Name`,key:`name`},{title:`Age`,key:`age`},{title:`Gender`,key:`gender`,render:(t,{gender:r},i)=>t(`Icon`,{props:{type:r==1?n:e,color:r==1?`blue`:`#f50cff`,size:15}})},{title:`Address`,key:`address`},{title:`Tags`,key:`tags`,render:(e,{tags:t},n)=>e(`Space`,{},[t.map(function(t){return e(`Tag`,{props:{color:t==`Python`?`green`:`blue`}},t)})])},{title:`Operate`,key:`action`,render:(e,t,n)=>e(`Button`,{props:{size:`small`},on:{click:e=>{c.info({title:`More`,content:`My name is ${t.name}`})}}},`more`)}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-38ebb112`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,sticky:52,columns:n.columns}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`基本用法(使用render)`)]),t(`p`,[e._v(`使用自定义`),t(`code`,[e._v(`render`)]),e._v(`来初始化表格`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:sticky`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"52"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` />`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { modal } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Sunny`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Moon`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"JS"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"CSS"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Qiu"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Go"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(` },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Gender"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"gender"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`render`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`h, { gender }, i`)]),e._v(`) =>`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Icon"`)]),e._v(`, {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`props`)]),e._v(`: {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: gender == `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` ? `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Sunny`)]),e._v(` : `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Moon`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: gender == `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` ? `),t(`span`,{staticClass:`hljs-string`},[e._v(`"blue"`)]),e._v(` : `),t(`span`,{staticClass:`hljs-string`},[e._v(`"#f50cff"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`15`)]),e._v(`,
        },
      });
    },
  },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tags"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tags"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`render`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`h, { tags }, i`)]),e._v(`) =>`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Space"`)]),e._v(`, {}, [
        tags.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`map`)]),e._v(`(`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`function`)]),e._v(` (`),t(`span`,{staticClass:`hljs-params`},[e._v(`tag`)]),e._v(`) {
          `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(
            `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tag"`)]),e._v(`,
            {
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`props`)]),e._v(`: {
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: tag == `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(` ? `),t(`span`,{staticClass:`hljs-string`},[e._v(`"green"`)]),e._v(` : `),t(`span`,{staticClass:`hljs-string`},[e._v(`"blue"`)]),e._v(`,
              },
            },
            tag
          );
        }),
      ]);
    },
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`render`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`h, record, i`)]),e._v(`) =>`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`h`)]),e._v(`(
        `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Button"`)]),e._v(`,
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`props`)]),e._v(`: {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`,
          },
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`on`)]),e._v(`: {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`e`)]),e._v(`) =>`)]),e._v(` {
              modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`({
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"More"`)]),e._v(`,
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`My name is "),t(`span`,{staticClass:`hljs-subst`},[e._v("${record.name}")]),e._v("`")]),e._v(`,
              });
            },
          },
        },
        `),t(`span`,{staticClass:`hljs-string`},[e._v(`"more"`)]),e._v(`
      );
    },
  },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,d=o({__name:`custom-header`,setup(e){return{__sfc:!0,data:[{key:`0`,name:`Li Lei`,age:32,address:`Wu Han Guanggu No. 328`},{key:`1`,name:`Liu Hao`,age:28,address:`Wu Han Hongshan No. 128`},{key:`2`,name:`Hu Cong`,age:28,address:`Wu Han Nanhu No. 198`},{key:`3`,name:`Chuchur`,age:28,address:`Wu Han Nanhu No. 188`}],columns:[{title:`Name`,key:`name`},{title:`年龄`,key:`age`},{title:`地址`,key:`address`},{title:`Operate`,key:`action`,width:80}],show:e=>{c.info({title:`More`,content:`My name is ${e.name}`})},AlertCircle:r}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-363e099b`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,columns:n.columns},scopedSlots:e._u([{key:`header-age`,fn:function({value:r}){return[t(`Flex`,{attrs:{size:`small`}},[e._v(` `+e._s(r)+` `),t(`Tooltip`,{attrs:{title:`How old are you?`}},[t(`Icon`,{attrs:{type:n.AlertCircle,size:`18`,color:`#777`}})],1)],1)]}},{key:`action`,fn:function({value:r,record:i,col:a}){return[t(`Button`,{attrs:{size:`small`},on:{click:e=>n.show(i)}},[e._v(`more`)])]}},{key:`header-address`,fn:function({value:r}){return[t(`Flex`,{attrs:{size:`small`}},[e._v(` `+e._s(r)+` `),t(`Tooltip`,{attrs:{title:`Where are you from?`}},[t(`Icon`,{attrs:{type:n.AlertCircle,size:`18`,color:`#777`}})],1)],1)]}}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`自定义表头`)]),t(`p`,[e._v(`一个可以自定义表头的表格 , 可以通过 `),t(`code`,[e._v(`#header-`)]),e._v(`定义表头`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-comment`},[e._v("<!-- 通过template 定义表头 ，slot 以 `header-` 开头-->")]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`header-age`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Flex`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tooltip`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"How old are you?"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"AlertCircle"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"18"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"#777"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tooltip`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Flex`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value, record, col }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(e) => show(record)"`)]),e._v(`>`)]),e._v(`more`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`

    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`header-address`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Flex`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tooltip`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Where are you from?"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"AlertCircle"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"18"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"#777"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tooltip`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Flex`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { modal } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`AlertCircle`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
  },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chuchur"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"年龄"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(` },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"地址"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`80`)]),e._v(`,
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`show`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`record`)]),e._v(`) => {
  modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"More"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`My name is "),t(`span`,{staticClass:`hljs-subst`},[e._v("${record.name}")]),e._v("`")]),e._v(`,
  });
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,f=o({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Table 表格`)]),t(`p`,[e._v(`展示行列数据。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`当有大量结构化的数据需要展现时；`)]),t(`li`,[e._v(`当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。`)])]),t(`h2`,{attrs:{id:`简单示例`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#简单示例`}},[e._v(`简单示例`)])]),t(`p`,[e._v(`指定表格的数据源 data 为一个数组。`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-js`},[t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` dataSource = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'1'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Li Lei'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Wu Han Guanggu No. 328'`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'2'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Hu Cong'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'Wu Han Guanggu No. 198'`)]),e._v(`,
  },
];

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'姓名'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'name'`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'年龄'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'age'`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'住址'`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'address'`)]),e._v(`,
  },
];

`),t(`span`,{staticClass:`language-xml`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"dataSource"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` />`)])]),e._v(`;
`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,p=o({__name:`table-sorter`,setup(e){let n=t([]),r=t(!1),a=[{title:`Name`,key:`name`,sorter:!0},{title:`Age`,key:`age`,sorter:!0},{title:`Email`,key:`mail`,sorter:e=>s(`mail`,e)}];i(()=>{s()});let o=({key:e,order:t})=>{console.log(e,t)},s=(e,t)=>{r.value=!0,setTimeout(()=>{r.value=!1,n.value=[{key:`0`,name:`Qiu`,age:32,mail:`chuchur@qq.com`},{key:`3`,name:`Wang Kang`,age:26,mail:`wangkang@gmail.com`},{key:`2`,name:`Liu Hao`,age:27,mail:`liuhao@162.com`},{key:`1`,name:`Li Lei`,age:33,mail:`hanlin@hotmail.com`},{key:`4`,name:`Hu Cong`,age:25,mail:`hucong@163.com`}]},2e3)};return{__sfc:!0,data:n,loading:r,columns:a,sort:o,fetch:s}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-5edccfc8`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,columns:n.columns,loading:n.loading},on:{sort:n.sort}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`排序`)]),t(`p`,[t(`code`,[e._v(`sorter=true`)]),e._v(` 现有的数据排序 , 为‘function’时,可自定义排序规则`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:loading`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`sort`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"sort"`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref, onMounted } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` loading = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sorter`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sorter`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
  },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Email"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"mail"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sorter`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`order`)]),e._v(`) =>`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`fetch`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"mail"`)]),e._v(`, order) },
];

`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`onMounted`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`fetch`)]),e._v(`();
});

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`sort`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`{ key, order }`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(key, order);
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`fetch`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`key, order`)]),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 模拟异步加载数据排序`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` fetchData = [
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Qiu"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mail`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"chuchur@qq.com"`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wang Kang"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`26`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mail`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"wangkang@gmail.com"`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`27`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mail`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"liuhao@162.com"`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`33`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mail`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"hanlin@hotmail.com"`)]),e._v(` },
      { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"4"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`25`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mail`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"hucong@163.com"`)]),e._v(` },
    ];

    data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = fetchData;
  }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2000`)]),e._v(`);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,m=o({data(){return{data:[{key:`0`,fullname:`Li Lei`,price:18990,address:`Wu Han Guanggu No. 328`},{key:`1`,fullname:`Liu Hao`,price:23900,address:`Wu Han Hongshan No. 128`},{key:`2`,fullname:`Hu Cong`,price:12e3,address:`Wu Han Nanhu No. 198`},{key:`3`,fullname:`Qiu`,price:28e3,address:`Wu Han Nanhu No. 188`}],columns:[{title:`Name`,key:`fullname`},{title:`Housing price`,key:`price`},{title:`Address`,key:`address`}]}}},function(){var e=this,t=e._self._c;return t(`Demo`,{attrs:{id:`k-f44b0e4a`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:e.data,columns:e.columns,bordered:``,sticky:52},scopedSlots:e._u([{key:`fullname`,fn:function({value:n}){return[t(`a`,[e._v(e._s(n))])]}},{key:`price`,fn:function({value:n}){return[t(`span`,{class:{"test-table-price":n>2e4}},[e._v(` ￥`+e._s(n)+`/㎡ `)])]}},{key:`header`,fn:function(){return[e._v(` Header `)]},proxy:!0},{key:`footer`,fn:function(){return[e._v(` Footer `)]},proxy:!0}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`自定义页头和页脚`)]),t(`p`,[e._v(`添加表格边框线，页头和页脚。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`bordered`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:sticky`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"52"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`fullname`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`price`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ 'test-table-price': value > 20000 }"`)]),e._v(`>`)]),e._v(`
        ￥`),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}/㎡
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`header`)]),e._v(`>`)]),e._v(` Header `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`footer`)]),e._v(`>`)]),e._v(` Footer `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`data`)]),e._v(`: [
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fullname`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`price`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`18990`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
        },
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fullname`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`price`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`23900`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
        },
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fullname`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`price`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`12000`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(`,
        },
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fullname`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Qiu"`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`price`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28000`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(`,
        },
      ],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`columns`)]),e._v(`: [
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fullname"`)]),e._v(` },
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Housing price"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"price"`)]),e._v(` },
        { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` },
      ],
    };
  },
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,h=o({__name:`col-row-span`,setup(e){return{__sfc:!0,data:[{key:`1`,name:`张三`,age:25,city:`北京`},{key:`2`,name:`李四`,age:30,city:`上海`},{key:`3`,name:`王五`,age:35,city:`广州`},{key:`4`,name:`赵六`,age:40,city:`深圳`},{key:`5`,name:`邱大`,age:38,city:`武汉`}],columns:[{title:`姓名`,key:`name`,width:100,rowSpan:(e,t)=>t==2?2:1},{title:`年龄`,key:`age`,width:100,colSpan:(e,t)=>t==1?2:1},{title:`城市`,key:`city`,width:100}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-3e1f9e88`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,columns:n.columns,bordered:``}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`表格行/列合并`)]),t(`p`,[e._v(`表头只支持列合并，使用 column 里的 colSpan 进行设置。`),t(`br`),e._v(` 表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`bordered`)]),e._v(`>`)]),e._v(` `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"张三"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`25`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`city`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"北京"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"李四"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`30`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`city`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"上海"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"王五"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`35`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`city`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"广州"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"4"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"赵六"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`40`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`city`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"深圳"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"5"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"邱大"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`38`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`city`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"武汉"`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"姓名"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`100`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 第三行第一列向下合并一行`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`rowSpan`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`record, index`)]),e._v(`) =>`)]),e._v(` (index == `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` ? `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` : `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`),
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"年龄"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`100`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`colSpan`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`record, index`)]),e._v(`) =>`)]),e._v(` (index == `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` ? `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` : `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`),
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"城市"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"city"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`100`)]),e._v(`,
  },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,g=o({__name:`table-edit`,setup(e){let n=t([{key:`0`,name:`Li Lei`,age:28,address:`Wu Han Guanggu No. 328`,isEdit:!1},{key:`1`,name:`Liu Hao`,age:30,address:`Wu Han Hongshan No. 128`,isEdit:!1},{key:`2`,name:`Hu Cong`,age:28,address:`Wu Han Nanhu No. 198`,isEdit:!1},{key:`3`,name:`Chuchur`,age:32,address:`Wu Han Nanhu No. 188`,isEdit:!1}]),r=[{title:`Name`,key:`name`},{title:`House price`,key:`age`},{title:`Address`,key:`address`},{title:`Operate`,key:`action`}],i=t(4);return{__sfc:!0,data:n,columns:r,count:i,save:e=>{console.log(e),e.isEdit=!1,s.success(`Save successfully!`)},removeRow:e=>{n.value=n.value.filter(t=>t.key!=e)},add:()=>{let e=i.value,t={key:e,name:`Name ${e}`,age:30,address:`China Wuhan no.${e}`,isEdit:!1};i.value=e+1,n.value.push(t)}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-2a3038fd`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Button`,{on:{click:n.add}},[e._v(`Add`)]),t(`Table`,{attrs:{data:n.data,columns:n.columns,bordered:``,sticky:52},scopedSlots:e._u([{key:`name`,fn:function({value:n,record:r}){return[r.isEdit?t(`Input`,{attrs:{size:`small`},model:{value:r.name,callback:function(t){e.$set(r,`name`,t)},expression:`record.name`}}):[e._v(e._s(n))]]}},{key:`address`,fn:function({value:n,record:r}){return[r.isEdit?t(`Input`,{attrs:{size:`small`},model:{value:r.age,callback:function(t){e.$set(r,`age`,t)},expression:`record.age`}}):[e._v(e._s(n))]]}},{key:`age`,fn:function({value:n,record:r}){return[r.isEdit?t(`Input`,{attrs:{size:`small`},model:{value:r.address,callback:function(t){e.$set(r,`address`,t)},expression:`record.address`}}):[e._v(e._s(n))]]}},{key:`action`,fn:function({value:r,record:i,col:a}){return[t(`Space`,[i.isEdit?e._e():t(`Button`,{attrs:{size:`small`,type:`primary`},on:{click:function(e){i.isEdit=!0}}},[e._v(` Edit `)]),i.isEdit?t(`Button`,{attrs:{size:`small`,type:`primary`},on:{click:function(e){return n.save(i)}}},[e._v(` Save `)]):e._e(),i.isEdit?t(`Button`,{attrs:{size:`small`},on:{click:function(e){i.isEdit=!1}}},[e._v(` Cancel `)]):e._e(),i.isEdit?e._e():t(`Popconfirm`,{attrs:{title:`您确认删除这条内容吗?`},on:{ok:e=>n.removeRow(i.key)}},[t(`Button`,{attrs:{size:`small`,type:`danger`}},[e._v(`Delete`)])],1)],1)]}}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`可编辑单元格`)]),t(`p`,[e._v(`带单元格编辑功能的表格。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"add"`)]),e._v(`>`)]),e._v(`Add`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`bordered`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:sticky`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"52"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value, record }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.name"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-else`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value, record }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.age"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-else`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value, record }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.address"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-else`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` value }}`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value, record, col }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"!record.isEdit"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit = true"`)]),e._v(`
        >`)]),e._v(`
          Edit
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"save(record)"`)]),e._v(`
        >`)]),e._v(`
          Save
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"record.isEdit = false"`)]),e._v(`
        >`)]),e._v(`
          Cancel
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Popconfirm`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-if`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"!record.isEdit"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"您确认删除这条内容吗?"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`ok`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(e) => removeRow(record.key)"`)]),e._v(`
        >`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"danger"`)]),e._v(`>`)]),e._v(`Delete`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Popconfirm`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { message } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isEdit`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`30`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isEdit`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isEdit`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chuchur"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isEdit`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
  },
]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"House price"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action"`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` count = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`4`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`save`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`record`)]),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(record);
  record.`),t(`span`,{staticClass:`hljs-property`},[e._v(`isEdit`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
  message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Save successfully!"`)]),e._v(`);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`removeRow`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`key`)]),e._v(`) => {
  data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`filter`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`item`)]),e._v(`) =>`)]),e._v(` item.`),t(`span`,{staticClass:`hljs-property`},[e._v(`key`)]),e._v(` != key);
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`add`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` key = count.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` record = {
    key,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`Name "),t(`span`,{staticClass:`hljs-subst`},[e._v("${key}")]),e._v("`")]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`30`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v("`China Wuhan no."),t(`span`,{staticClass:`hljs-subst`},[e._v("${key}")]),e._v("`")]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`isEdit`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
  };
  count.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = key + `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(record);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,_=o({__name:`fixed-col-head`,setup(e){let t=[],n={};for(let e=0;e<20;e++)t.push({title:`Col`+e,key:`address`+e,width:150}),n[`address`+e]=`Hubei Wuhan SoftBase No.128`;return{__sfc:!0,_columns:t,dataItem:n,data:Array(10).fill(``).map((e,t)=>({key:t,name:`Han Mei`,age:28,address:`Hubei Wuhan SoftBase No.128`,...n})),columns:[{title:`Name`,key:`name`,fixed:`left`},{title:`Age`,key:`age`,fixed:`left`},...t,{title:`Operate`,key:`action`,fixed:`right`},{title:`Operate`,key:`action1`,fixed:`right`}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-270cb7c0`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,columns:n.columns,scroll:{x:!0,y:300}},scopedSlots:e._u([{key:`action`,fn:function(){return[t(`Button`,{attrs:{size:`small`}},[e._v(`test`)])]},proxy:!0}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`固定头/列`)]),t(`p`,[e._v(`对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要设置表格的宽度 `),t(`code`,[e._v(`scroll.x`)]),e._v(` 和 `),t(`code`,[e._v(`scroll.y `)]),t(`br`),e._v(` 如果布局被破坏，请把宽度 `),t(`code`,[e._v(`x`)]),e._v(` 值改大。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:scroll`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ x: true, y: 300 }"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),e._v(`test`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` _columns = [],
  dataItem = {};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`for`)]),e._v(` (`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` i = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`; i < `),t(`span`,{staticClass:`hljs-number`},[e._v(`20`)]),e._v(`; i++) {
  _columns.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`({ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Col"`)]),e._v(` + i, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` + i, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`150`)]),e._v(` });
  dataItem[`),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` + i] = `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hubei Wuhan SoftBase No.128"`)]),e._v(`;
}

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Array`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`).`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`fill`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`).`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`map`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`_, i`)]),e._v(`) =>`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: i,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Han Mei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hubei Wuhan SoftBase No.128"`)]),e._v(`,
    ...dataItem,
  };
});
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fixed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"left"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fixed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"left"`)]),e._v(` },
  ..._columns,
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fixed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"right"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fixed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"right"`)]),e._v(` },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,v=o({__name:`head-span`,setup(e){let t=[];for(let e=0;e<10;e++)t.push({key:e,name:`John Brown`,age:e+1,street:`Lake Park`,building:`C`,number:2035,companyAddress:`Lake Street 42`,companyName:`SoftLake Co`,gender:`M`});return{__sfc:!0,data:t,columns:[{title:`Name`,key:`name`,width:100,fixed:`left`},{title:`Other`,children:[{title:`Age`,key:`age`,sorter:!0},{title:`Address`,children:[{title:`Street`,key:`street`},{title:`Block`,children:[{title:`Building`,key:`building`},{title:`Door No.`,key:`number`}]}]}]},{title:`Company`,children:[{title:`Company Address`,key:`companyAddress`,width:200},{title:`Company Name`,key:`companyName`,width:200}]},{title:`Gender`,key:`gender`,width:80,fixed:`right`}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-2faab8a6`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{attrs:{data:n.data,columns:n.columns,bordered:``,scroll:{x:!0,y:300}}})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`表头分组`)]),t(`p`,[e._v(`columns[n] 可以内嵌 children，以渲染分组表头。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`bordered`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:scroll`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ x: true, y: 300 }"`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`for`)]),e._v(` (`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` i = `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`; i < `),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`; i++) {
  data.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: i,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"John Brown"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: i + `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`street`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Lake Park"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`building`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"C"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`number`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`2035`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`companyAddress`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Lake Street 42"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`companyName`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"SoftLake Co"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"M"`)]),e._v(`,
  });
}
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`100`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fixed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"left"`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Other"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sorter`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
          {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Street"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"street"`)]),e._v(`,
          },
          {
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Block"`)]),e._v(`,
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
              {
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Building"`)]),e._v(`,
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"building"`)]),e._v(`,
              },
              {
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Door No."`)]),e._v(`,
                `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"number"`)]),e._v(`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Company"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`children`)]),e._v(`: [
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Company Address"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"companyAddress"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`200`)]),e._v(`,
      },
      {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Company Name"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"companyName"`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`200`)]),e._v(`,
      },
    ],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Gender"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"gender"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`80`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fixed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"right"`)]),e._v(`,
  },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,y=o({__name:`table-check`,setup(e){return{__sfc:!0,data:[{key:`0`,name:`Li Lei`,gender:0,age:32,address:`Wu Han Guanggu No. 328`,tags:[`Python`,`Java`]},{key:`1`,name:`Liu Hao`,gender:1,age:28,address:`Wu Han Hongshan No. 128`,tags:[`Python`,`Java`]},{key:`2`,name:`Hu Cong`,gender:0,age:28,address:`Wu Han Nanhu No. 198`,tags:[`JS`,`CSS`]},{key:`3`,name:`Chuchur`,gender:1,age:28,address:`Wu Han Nanhu No. 188`,tags:[`Go`,`Python`]}],columns:[{title:`Name`,key:`name`},{title:`Age`,key:`age`},{title:`Gender`,key:`gender`},{title:`Address`,key:`address`},{title:`Tags`,key:`tags`}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-1805577b`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Table`,{ref:`selection`,attrs:{data:n.data,columns:n.columns,checkable:``},scopedSlots:e._u([{key:`tags`,fn:function({value:n}){return[t(`Space`,e._l(n,function(n){return t(`Tag`,{key:n,attrs:{color:n==`Python`?`green`:`blue`}},[e._v(` `+e._s(n)+` `)])}),1)]}},{key:`action`,fn:function(){return[t(`a`,{attrs:{href:`javascript:;`}},[e._v(`Edit`)]),t(`a`,{attrs:{href:`javascript:;`}},[e._v(`Delete`)])]},proxy:!0}])})]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`勾选`)]),t(`p`,[t(`code`,[e._v(`checkable=true`)]),e._v(`，即可自动开启多选功能。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`ref`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"selection"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`checkable`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tag`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag in value"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag == 'Python' ? 'green' : 'blue'"`)]),e._v(`
        >`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` tag }}
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tag`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"javascript:;"`)]),e._v(`>`)]),e._v(`Edit`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"javascript:;"`)]),e._v(`>`)]),e._v(`Delete`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"JS"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"CSS"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chuchur"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Go"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Gender"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"gender"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tags"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tags"`)]),e._v(` },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,b=o({__name:`size`,setup(r){let i=[{key:`0`,name:`Li Lei`,gender:0,age:32,address:`Wu Han Guanggu No. 328`,tags:[`Python`,`Java`]},{key:`1`,name:`Liu Hao`,gender:1,age:28,address:`Wu Han Hongshan No. 128`,tags:[`Python`,`Java`]},{key:`2`,name:`Hu Cong`,gender:0,age:28,address:`Wu Han Nanhu No. 198`,tags:[`JS`,`CSS`]},{key:`3`,name:`Chuchur`,gender:1,age:28,address:`Wu Han Nanhu No. 188`,tags:[`Go`,`Python`]}],a=[{title:`Name`,key:`name`},{title:`Age`,key:`age`,sorter:!0},{title:`Gender`,key:`gender`},{title:`Address`,key:`address`},{title:`Tags`,key:`tags`},{title:`Operate`,key:`action`}],o=t(`default`),s=t(!0),c=t(!1),l=t(!1),u=t(!1),d=t(i);return{__sfc:!0,data:i,columns:a,size:o,bordered:s,checkable:c,loading:l,empty:u,dataSource:d,setEmpty:e=>{d.value=e?[]:i},Moon:e,Sunny:n}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-8b255936`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`div`,[t(`Space`,[e._v(` Size:`),t(`RadioGroup`,{attrs:{size:`small`},model:{value:n.size,callback:function(e){n.size=e},expression:`size`}},[t(`RadioButton`,{attrs:{value:`large`,label:`Large`}}),t(`RadioButton`,{attrs:{value:`default`,label:`Default`}}),t(`RadioButton`,{attrs:{value:`small`,label:`Small`}})],1),e._v(` Border: `),t(`k-switch`,{model:{value:n.bordered,callback:function(e){n.bordered=e},expression:`bordered`}}),e._v(` Loading: `),t(`k-switch`,{model:{value:n.loading,callback:function(e){n.loading=e},expression:`loading`}}),e._v(` Checkbox: `),t(`k-switch`,{model:{value:n.checkable,callback:function(e){n.checkable=e},expression:`checkable`}}),e._v(` Empty: `),t(`k-switch`,{on:{change:n.setEmpty},model:{value:n.empty,callback:function(e){n.empty=e},expression:`empty`}})],1),t(`Table`,{attrs:{data:n.dataSource,columns:n.columns,loading:n.loading,size:n.size,bordered:n.bordered,checkable:n.checkable},scopedSlots:e._u([{key:`header`,fn:function(){return[t(`div`,[e._v(`header`)])]},proxy:!0},{key:`footer`,fn:function(){return[t(`div`,[e._v(`footer`)])]},proxy:!0},{key:`tags`,fn:function({value:n}){return[t(`Space`,e._l(n,function(n){return t(`Tag`,{key:n,attrs:{color:n==`Python`?`green`:`blue`}},[e._v(` `+e._s(n)+` `)])}),1)]}},{key:`gender`,fn:function({value:e}){return[t(`Icon`,{attrs:{type:e==1?n.Moon:n.Sunny,color:e==1?`blue`:`#f50cff`,size:`15`}})]}},{key:`action`,fn:function(){return[t(`Button`,{attrs:{size:`small`}},[e._v(`test`)])]},proxy:!0}])})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`动态控制表格属性`)]),t(`p`,[e._v(`选择不同配置组合查看效果。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      Size:`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Large"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Default"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Small"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(`>`)]),e._v(`
      Border: `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-switch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"bordered"`)]),e._v(` />`)]),e._v(`
      Loading:
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-switch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(` />`)]),e._v(`
      Checkbox: `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-switch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkable"`)]),e._v(` />`)]),e._v(`
      Empty:
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`k-switch`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"empty"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"setEmpty"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"dataSource"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:loading`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:bordered`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"bordered"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:checkable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"checkable"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`header`)]),e._v(`>`)]),e._v(` `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`header`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(` `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`footer`)]),e._v(`>`)]),e._v(` `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`footer`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(` `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tag`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag in value"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"tag == 'Python' ? 'green' : 'blue'"`)]),e._v(`
          >`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` tag }}
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Tag`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ value }"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value == 1 ? Moon : Sunny"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:color`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value == 1 ? 'blue' : '#f50cff'"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"15"`)]),e._v(`
        />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` #`),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(`>`)]),e._v(`test`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Moon`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Sunny`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Li Lei"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`32`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Guanggu No. 328"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Liu Hao"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Hongshan No. 128"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Java"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hu Cong"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 198"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"JS"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"CSS"`)]),e._v(`],
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chuchur"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`gender`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`28`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`address`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Wu Han Nanhu No. 188"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`tags`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Go"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Python"`)]),e._v(`],
  },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`sorter`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Gender"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"gender"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Address"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"address"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Tags"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tags"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Operate"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"action"`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` size = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` bordered = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` checkable = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` loading = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` empty = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` dataSource = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(data);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`setEmpty`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`empty`)]),e._v(`) => {
  dataSource.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = empty ? [] : data;
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,x=o({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`table-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#table-api`}},[e._v(`Table API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`bordered`)]),t(`td`,[e._v(`是否显示边框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`checkable`)]),t(`td`,[e._v(`是否显示勾选框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`checkedKeys`)]),t(`td`,[e._v(`勾选的key集合`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`size`)]),t(`td`,[e._v(`值为`),t(`code`,[e._v(`small`)]),e._v(`时展示紧凑模式`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`emptyText`)]),t(`td`,[e._v(`没有数据时展示的提示`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'赞无数据'`)])]),t(`tr`,[t(`td`,[e._v(`loading`)]),t(`td`,[e._v(`表格异步加载模式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`data`)]),t(`td`,[e._v(`显示的结构化数据`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[ ]`)])]),t(`tr`,[t(`td`,[e._v(`columns`)]),t(`td`,[e._v(`表格列的配置描述，`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[ ]`)])]),t(`tr`,[t(`td`,[e._v(`rowClick`)]),t(`td`,[e._v(`单击某一行时触发`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`rowKey`)]),t(`td`,[e._v(`勾选时的依据`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`key`)])])])]),t(`h2`,{attrs:{id:`column-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#column-api`}},[e._v(`Column API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`title`)]),t(`td`,[e._v(`列头显示文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`key`)]),t(`td`,[e._v(`对应列内容的字段名`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`fixed`)]),t(`td`,[e._v(`列固定的方向`)]),t(`td`,[e._v(`'left','right'`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`sorter`)]),t(`td`,[e._v(`排序,为`),t(`code`,[e._v(`true`)]),e._v(`时,本地排序`)]),t(`td`,[e._v(`Boolean ,Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`width`)]),t(`td`,[e._v(`列宽`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`rowSpan`)]),t(`td`,[e._v(`行合并单位,为 0 时将不渲染当前行`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`colSpan`)]),t(`td`,[e._v(`列合并单位,为 0 时将不渲染当前列`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`render`)]),t(`td`,[e._v(`自定义渲染，可参阅`),t(`a`,{attrs:{href:`https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1`}},[e._v(`深入数据对象`)])]),t(`td`,[e._v(`Function(h,record,index)`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,S={render(){return a(`div`,{class:`demo-table`},[a(f),a(l),a(u),a(d),a(m),a(p),a(h),a(g),a(_),a(v),a(y),a(b),a(x)])}};export{S as default};