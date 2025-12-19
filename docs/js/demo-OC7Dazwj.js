import{E as e,Gt as t,Tn as n,mn as r}from"./vue-CQGPvsrV.js";import{m as i}from"./index-DxuXnqZb.js";var a=i({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Select 选择器`)]),t(`p`,[e._v(`下拉选择器。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。`)]),t(`li`,[e._v(`当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,o=i({__name:`basic`,setup(e){let t=n(2),r=n(2),i=n([{label:`Apple`,value:0},{label:`Orange`,value:1},{label:`Banana`,value:2},{label:`Pear`,value:3},{label:`Grape`,value:4}]);return setTimeout(()=>{i.value=[{label:`Apple1`,value:0},{label:`Orange1`,value:1},{label:`Banana2`,value:2},{label:`Pear1`,value:3},{label:`Grape2`,value:4}],r.value=2},1e3),{__sfc:!0,value1:t,value2:r,data:i}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-7b405108`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``}},[e._v(` use options to set options `),t(`Select`,{attrs:{options:n.data},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`br`),e._v(` use children to set options `),t(`Select`,{model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}},e._l(n.data,function(n){return t(`Option`,{key:n.value,attrs:{value:n.value}},[e._v(` `+e._s(n.label)+` `)])}),1)],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`单选`)]),t(`p`,[e._v(`通过 `),t(`code`,[e._v(`v-model`)]),e._v(` 进行数据双向绑定`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    use options to set options
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    use children to set options
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"item.value"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"item in data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"item.value"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`{`)]),e._v(` item.label }}
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Grape"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`4`)]),e._v(` },
]);
`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 异步加载数据`)]),e._v(`
`),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
  data.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = [
    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` },
    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` },
    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` },
    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(` },
    { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Grape2"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`4`)]),e._v(` },
  ];
  value2.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`;
}, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1000`)]),e._v(`);
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,s=i({__name:`multiple`,setup(e){return{__sfc:!0,value1:n([0,2]),value2:n([0,2]),value3:n([0,2,3]),data:[{label:`Apple`,value:0},{label:`Orange`,value:1},{label:`Banana`,value:2},{label:`Pear`,value:3},{label:`Grape`,value:4}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-218be3f0`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``,block:``}},[e._v(` use options to set options `),t(`Select`,{attrs:{block:``,options:n.data,multiple:``},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`br`),e._v(` use children to set options `),t(`Select`,{attrs:{block:``,multiple:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}},[t(`Option`,{attrs:{value:0}},[e._v(`Grape`)]),t(`Option`,{attrs:{value:1,label:`Apple`}}),t(`Option`,{attrs:{value:2,label:`Orange`}}),t(`Option`,{attrs:{value:3,label:`Banana`}}),t(`Option`,{attrs:{value:4,label:`Pear`}})],1),t(`br`),e._v(` maxTagCount: `),t(`Select`,{attrs:{block:``,maxTagCount:2,options:n.data,multiple:``},model:{value:n.value3,callback:function(e){n.value3=e},expression:`value3`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`多选`)]),t(`p`,[e._v(`通过设置 `),t(`code`,[e._v(`multiple`)]),e._v(` 值来呈现多选模式`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`>`)]),e._v(`
    use options to set options
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    use children to set options
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"0"`)]),e._v(`>`)]),e._v(`Grape`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"4"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    maxTagCount:
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value3 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Grape"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`4`)]),e._v(` },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,c=i({__name:`disabled`,setup(e){return{__sfc:!0,value1:n(2),value2:n([0,3]),value3:n([0,2,3]),data:[{label:`Apple`,value:0},{label:`Orange`,value:1,disabled:!0},{label:`Banana`,value:2},{label:`Pear`,value:3},{label:`Grape`,value:4}]}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-50b6e804`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``,block:``}},[e._v(` Disabled `),t(`Select`,{attrs:{block:``,disabled:``,options:n.data},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`Select`,{attrs:{block:``,disabled:``,options:n.data,multiple:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}}),t(`Select`,{attrs:{disabled:``,maxTagCount:2,options:n.data,multiple:``,block:``},model:{value:n.value3,callback:function(e){n.value3=e},expression:`value3`}}),t(`br`),e._v(` Disabled item `),t(`Select`,{attrs:{block:``,options:n.data},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`br`),e._v(` Clearable = false `),t(`Select`,{attrs:{block:``,clearable:!1,options:n.data},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`Select`,{attrs:{block:``,clearable:!1,options:n.data,multiple:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`禁用和不可清除`)]),t(`p`,[e._v(`通过 `),t(`code`,[e._v(`v-model`)]),e._v(` 进行数据双向绑定`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`>`)]),e._v(`
    Disabled
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value3"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    Disabled item
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    Clearable = false
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:clearable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:clearable`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value3 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Grape"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`4`)]),e._v(` },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,l=i({__name:`theme`,setup(n){return{__sfc:!0,value:[`1`,`3`],options:[{label:`Apple`,value:`1`},{label:`Orange`,value:`2`},{label:`Banana`,value:`3`},{label:`Pear`,value:`4`}],Search:t,CaretDown:e}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-6ad60c01`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{staticStyle:{width:`300px`,"max-width":`100%`},attrs:{vertical:``,align:`start`,block:``}},[t(`Select`,{attrs:{shape:`circle`,options:n.options,placeholder:`我是一个圆角`}}),t(`Select`,{attrs:{shape:`circle`,icon:n.Search,options:n.options,placeholder:`我多了一个图标`}}),t(`Select`,{attrs:{filterable:``,theme:`light`,options:n.options,placeholder:`我的背景色是浅色`}}),t(`Select`,{attrs:{options:n.options,placeholder:`我没有下拉箭头`,showArrow:!1}}),t(`Select`,{attrs:{options:n.options,placeholder:`我的下拉箭头不一样`,arrowIcon:n.CaretDown}}),t(`Select`,{attrs:{multiple:``,filterable:``,theme:`light`,options:n.options},model:{value:n.value,callback:function(e){n.value=e},expression:`value`}}),t(`Select`,{attrs:{bordered:!1,options:n.options,placeholder:`我没有边框`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`奇葩的定义`)]),t(`p`,[e._v(`一些奇奇怪怪的东西`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`align`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"start"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width: 300px;max-width:100%;"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`shape`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"circle"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我是一个圆角"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`shape`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"circle"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Search"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我多了一个图标"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`theme`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"light"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我的背景色是浅色"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我没有下拉箭头"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showArrow`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我的下拉箭头不一样"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:arrowIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CaretDown"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`theme`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"light"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(`
    />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:bordered`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"options"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"我没有边框"`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CaretDown`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value = [`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` options = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"4"`)]),e._v(` },
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,u=i({__name:`size`,setup(e){let t=n(`default`);return{__sfc:!0,size:t,value1:n(0),value2:n([0,1]),value3:n([0,1,2]),data:[{label:`Apple`,value:0},{label:`Orange`,value:1},{label:`Banana`,value:2},{label:`Pear`,value:3},{label:`Grape`,value:4}],setSize:e=>{t.value=e}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-768daddf`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``,block:``}},[t(`RadioGroup`,{on:{change:n.setSize},model:{value:n.size,callback:function(e){n.size=e},expression:`size`}},[t(`RadioButton`,{attrs:{value:`large`,label:`large`}}),t(`RadioButton`,{attrs:{value:`default`,label:`default`}}),t(`RadioButton`,{attrs:{value:`small`,label:`small`}})],1),t(`br`),t(`Select`,{attrs:{size:n.size,filterable:``,block:``,options:n.data},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}}),t(`Select`,{attrs:{size:n.size,block:``,options:n.data,multiple:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}}),t(`Select`,{attrs:{size:n.size,maxTagCount:2,options:n.data,multiple:``,block:``},model:{value:n.value3,callback:function(e){n.value3=e},expression:`value3`}})],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`尺寸`)]),t(`p`,[e._v(`通过 `),t(`code`,[e._v(`width`)]),e._v(` 和 `),t(`code`,[e._v(`size`)]),e._v(` 可控制组件尺寸大小`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"setSize"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value3"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"size"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:options`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"data"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
    />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` size = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"default"`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value3 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`, `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Apple"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Orange"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Banana"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Pear"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`3`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Grape"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`4`)]),e._v(` },
];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`setSize`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`value`)]),e._v(`) => {
  size.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = value;
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,d=i({__name:`filterable`,setup(e){let t=n(``),r=n([]),i=n(``),a=n([]),o=n(!1),s=n([]),c=e=>{o.value=!0,setTimeout(()=>{s.value=l.filter(t=>t.includes(e.target.value.trim())),o.value=!1},1e3)},l=`almond.apple.apple core.apple juice.apple skin.apricot.apricot flesh.apricot pit.areca nut.banana.banana skin.bargain price.beechnut.Beijing flowering crab.bitter.bitterness.bitter orange.blackberry.canned fruit.carambola.cherry.cherry pit.cherry pulp.chestnut.Chinese chestnut.Chinese date.Chinese gooseberry.Chinese walnut.coconut.coconut milk.coconut water.cold storage.cold store.crisp.cumquat.damson plum.Dangshan pear.date.date pit.decayed fruit.downy pitch.dry fruit.duke.early-maturing.fig.filbert.first class.flat peach.flavour.flesh.flesh fruit.fresh.fresh litchi.fruiterer.fruit in bags.fruit knife.fruits of the season.gingko.give full weigh.give short weight.grape.grape juice.grape skin.grapestone.greengage.Hami melon.Hard.haw.hawthorn.hazel.honey peach.in season.juicy.juicy peach.jujube.kernel.kumquat.late-maturing.lemon.litchi.litchi rind.longan.longan pulp.loquat.mandarine.mango.mature.morello.muskmelon.navel orange.nut.nut meat.nut shell.oleaster.olive.orange.orange peel.papaya.peach.pear.perishable.pineapple.plum.plumcot.pomegranate.pomelo.red bayberry.reduced price.ripe.rotten fruit.seasonable.seedless orange.special-grade.strawberry.sultana.superfine.tangerine.tart.tender.tinned fruit.unripe.walnut.walnut kernel.water chestnut.watermelon`.split(`.`);return{__sfc:!0,value1:t,value2:r,value3:i,value4:a,loading:o,optionsData:s,fetchData:c,options:l}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-434c932e`,direction:`horizontal`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``,block:``}},[t(`span`,[e._v(`单选过滤 :`)]),t(`Select`,{attrs:{block:``,placeholder:`单选过滤`,filterable:``},model:{value:n.value1,callback:function(e){n.value1=e},expression:`value1`}},e._l(n.options,function(e,n){return t(`Option`,{key:n,attrs:{value:e,label:e}})}),1),t(`br`),t(`span`,[e._v(`多选过滤 :`)]),t(`Select`,{staticClass:`demo-select`,attrs:{multiple:``,maxTagCount:3,block:``,placeholder:`多选过滤`,filterable:``},model:{value:n.value2,callback:function(e){n.value2=e},expression:`value2`}},e._l(n.options,function(e,n){return t(`Option`,{key:n,attrs:{value:e,label:e}})}),1),t(`br`),t(`span`,[e._v(`单选搜索: `)]),t(`Select`,{attrs:{block:``,loading:n.loading,placeholder:`单选搜索`},on:{search:n.fetchData},model:{value:n.value3,callback:function(e){n.value3=e},expression:`value3`}},e._l(n.optionsData,function(e,n){return t(`Option`,{key:n,attrs:{value:e,label:e}})}),1),t(`br`),t(`span`,[e._v(`多选搜索`)]),t(`Select`,{attrs:{multiple:``,block:``,maxTagCount:3,loading:n.loading,placeholder:`多选过滤`},on:{search:n.fetchData},model:{value:n.value4,callback:function(e){n.value4=e},expression:`value4`}},e._l(n.optionsData,function(e,n){return t(`Option`,{key:n,attrs:{value:e,label:e}})}),1)],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`过滤 和 搜索`)]),t(`p`,[e._v(`通过设置 `),t(`code`,[e._v(`filterable`)]),e._v(` 值来呈现过滤模式`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`单选过滤 :`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"单选过滤"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(v, i) in options"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"i"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`多选过滤 :`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-select"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value2"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"多选过滤"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filterable`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(v, i) in options"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"i"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`单选搜索: `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value3"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`search`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"fetchData"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:loading`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"单选搜索"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(v, i) in optionsData"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"i"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`多选搜索`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxTagCount`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"3"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:loading`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`search`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"fetchData"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"value4"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"多选过滤"`)]),e._v(`
    >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Option`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"v"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"(v, i) in optionsData"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"i"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value2 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value3 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` value4 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([]);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` loading = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` optionsData = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([]);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`fetchData`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`e`)]),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
    optionsData.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = options.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`filter`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`v`)]),e._v(`) =>`)]),e._v(`
      v.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`includes`)]),e._v(`(e.`),t(`span`,{staticClass:`hljs-property`},[e._v(`target`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`trim`)]),e._v(`())
    );
    loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
  }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1000`)]),e._v(`);
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` options = [
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"almond"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apple"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apple core"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apple juice"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apple skin"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apricot"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apricot flesh"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"apricot pit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"areca nut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"banana"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"banana skin"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"bargain price"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"beechnut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Beijing flowering crab"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"bitter"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"bitterness"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"bitter orange"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"blackberry"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"canned fruit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"carambola"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"cherry"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"cherry pit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"cherry pulp"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"chestnut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chinese chestnut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chinese date"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chinese gooseberry"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Chinese walnut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"coconut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"coconut milk"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"coconut water"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"cold storage"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"cold store"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"crisp"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"cumquat"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"damson plum"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Dangshan pear"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"date"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"date pit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"decayed fruit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"downy pitch"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"dry fruit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"duke"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"early-maturing"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fig"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"filbert"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"first class"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"flat peach"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"flavour"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"flesh"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"flesh fruit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fresh"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fresh litchi"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fruiterer"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fruit in bags"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fruit knife"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"fruits of the season"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"gingko"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"give full weigh"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"give short weight"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"grape"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"grape juice"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"grape skin"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"grapestone"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"greengage"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hami melon"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hard"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"haw"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"hawthorn"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"hazel"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"honey peach"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"in season"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"juicy"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"juicy peach"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"jujube"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kernel"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kumquat"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"late-maturing"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"lemon"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"litchi"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"litchi rind"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"longan"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"longan pulp"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"loquat"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"mandarine"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"mango"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"mature"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"morello"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"muskmelon"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"navel orange"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"nut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"nut meat"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"nut shell"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"oleaster"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"olive"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"orange"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"orange peel"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"papaya"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"peach"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"pear"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"perishable"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"pineapple"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"plum"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"plumcot"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"pomegranate"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"pomelo"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"red bayberry"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"reduced price"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"ripe"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"rotten fruit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"seasonable"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"seedless orange"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"special-grade"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"strawberry"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"sultana"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"superfine"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tangerine"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tart"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tender"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"tinned fruit"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"unripe"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"walnut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"walnut kernel"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"water chestnut"`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-string`},[e._v(`"watermelon"`)]),e._v(`,
];
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,f=i({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`select-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#select-api`}},[e._v(`Select API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`指定选中项目的 `),t(`code`,[e._v(`value`)]),e._v(` 值，可以使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 双向绑定数据`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`width`)]),t(`td`,[e._v(`组件宽度`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`placeholder`)]),t(`td`,[e._v(`选择框默认文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`请选择`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用当前项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`size`)]),t(`td`,[e._v(`组件尺寸大小,提供`),t(`code`,[e._v(`small`)]),e._v(`,`),t(`code`,[e._v(`large`)]),e._v(`两种尺寸，默认为正常`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`emptyText`)]),t(`td`,[e._v(`没有数据时展示的提示`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'赞无数据'`)])]),t(`tr`,[t(`td`,[e._v(`maxTagCount`)]),t(`td`,[e._v(`最多展示多少个tag,超出部分以点点点展示`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`multiple`)]),t(`td`,[e._v(`是否呈现多选模式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`loading`)]),t(`td`,[e._v(`是否显示异步加载`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`clearable`)]),t(`td`,[e._v(`是否可以清空选项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`bordered`)]),t(`td`,[e._v(`是否显示边框`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`extendWidth`)]),t(`td`,[e._v(`下拉框的宽度是否与input一致`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`showArrow`)]),t(`td`,[e._v(`是否显示下拉按钮`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`在选项状态发生改变时触发,,返回选择的值value`)]),t(`td`,[e._v(`Function(value)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`select`)]),t(`td`,[e._v(`选中一项时触发`)]),t(`td`,[e._v(`Function({value,label,checked})`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`openChange`)]),t(`td`,[e._v(`下拉框展开或收起时触发`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`options`)]),t(`td`,[e._v(`options 数据，如果设置则不需要手动构造 Option 节点`)]),t(`td`,[e._v(`Array <{value,label,disabled}>`)]),t(`td`,[e._v(`[]`)])]),t(`tr`,[t(`td`,[e._v(`theme`)]),t(`td`,[e._v(`theme='light' 时呈现浅色主题`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`shape`)]),t(`td`,[e._v(`shape='circle' 时呈现圆角`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])])])]),t(`h2`,{attrs:{id:`option-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#option-api`}},[e._v(`Option API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`key`)]),t(`td`,[e._v(`和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`选项值，默认根据此属性值进行筛选，必填`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`label`)]),t(`td`,[e._v(`选项显示的内容`)]),t(`td`,[e._v(`String,Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用当前项`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])])])])])}],!1,null,null,null,null).exports,p={render(){return r(`div`,{class:`demo-select`},[r(a),r(o),r(s),r(c),r(d),r(u),r(l),r(f)])}};export{p as default};