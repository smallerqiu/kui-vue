import{Bt as e,zt as t}from"./index-Dw-BZmPh.js";var n=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`ColorPicker 颜色选择器`)]),t(`p`,[e._v(`可以自由的输出颜色。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`需要自定义颜色时`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,r=t({data(){return{color:`#3a95ff`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-color-picker`},[t(`ColorPicker`,{model:{value:e.color,callback:function(t){e.color=t},expression:`color`}})],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`基本用法`)]),t(`p`,[e._v(`默认可以同时展开一个或者多个面板`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-color-picker"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color"`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#3a95ff'`)]),e._v(`,
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,i=t({data(){return{color1:`#00ff00`,color2:`rgb(58, 149, 255)`,color3:`hsl(212, 100%, 61%)`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{staticClass:`demo-color-picker`,attrs:{vertical:``}},[t(`Space`,[t(`ColorPicker`,{model:{value:e.color1,callback:function(t){e.color1=t},expression:`color1`}}),e._v(` HEX: `+e._s(e.color1)+` `)],1),t(`Space`,[t(`ColorPicker`,{attrs:{mode:`rgb`},model:{value:e.color2,callback:function(t){e.color2=t},expression:`color2`}}),e._v(` RGB: `+e._s(e.color2)+` `)],1),t(`Space`,[t(`ColorPicker`,{attrs:{mode:`hsl`},model:{value:e.color3,callback:function(t){e.color3=t},expression:`color3`}}),e._v(` HSL: `+e._s(e.color3)+` `)],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`颜色编码`)]),t(`p`,[e._v(`编码格式，支持HEX、HSB、RGB。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-color-picker"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color1"`)]),e._v(` />`)]),e._v(` HEX: `+e._s(e.color1)+`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"rgb"`)]),e._v(` />`)]),e._v(` RGB: `+e._s(e.color2)+`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"hsl"`)]),e._v(` />`)]),e._v(` HSL: `+e._s(e.color3)+`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color1`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#00ff00'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color2`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'rgb(58, 149, 255)'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color3`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'hsl(212, 100%, 61%)'`)]),e._v(`,
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,a=t({data(){return{color1:`#f44336`,color2:`#9c27b0`,color3:`#03a9f4`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{attrs:{vertical:``}},[t(`Space`,[t(`ColorPicker`,{attrs:{value:e.color3,size:`small`}}),t(`ColorPicker`,{attrs:{showText:``,value:e.color3,size:`small`}})],1),t(`Space`,[t(`ColorPicker`,{attrs:{value:e.color2}}),t(`ColorPicker`,{attrs:{showText:``,value:e.color2}})],1),t(`Space`,[t(`ColorPicker`,{attrs:{value:e.color1,size:`large`}}),t(`ColorPicker`,{attrs:{showText:``,value:e.color1,size:`large`}})],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`尺寸大小`)]),t(`p`,[t(`code`,[e._v(`small`)]),e._v(` 为小尺寸， `),t(`code`,[e._v(`large`)]),e._v(` 为大尺寸`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showText`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color3"`)]),e._v(`   `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color2"`)]),e._v(`/>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showText`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color2"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(`/>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showText`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color1`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#f44336'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color2`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#9c27b0'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color3`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#03a9f4'`)]),e._v(`,
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,o=t({data(){return{color:`#3a95ff`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{staticClass:`demo-color-picker`,attrs:{vertical:``}},[t(`ColorPicker`,{attrs:{value:e.color,disabled:``}}),t(`ColorPicker`,{attrs:{value:e.color,disabled:``,showText:``}})],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`禁用`)]),t(`p`,[e._v(`设置为禁用状态。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-color-picker"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showText`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#3a95ff'`)]),e._v(`,
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,s=t({data(){return{color:`#3a95ff`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`ColorPicker`,{attrs:{disabledAlpha:``},model:{value:e.color,callback:function(t){e.color=t},expression:`color`}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`禁用透明度`)]),t(`p`,[e._v(`禁用颜色透明度。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabledAlpha`)]),e._v(`/>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#3a95ff'`)]),e._v(`,
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,c=t({data(){return{color1:`#3a95ff`,color2:`red`}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{staticClass:`demo-color-picker`,attrs:{vertical:``}},[t(`Space`,[t(`ColorPicker`,{model:{value:e.color1,callback:function(t){e.color1=t},expression:`color1`}},[t(`Button`,{attrs:{type:`primary`}},[e._v(`Open`)])],1),e._v(` `+e._s(e.color1)+` `)],1),t(`Space`,[t(`ColorPicker`,{attrs:{trigger:`hover`},model:{value:e.color2,callback:function(t){e.color2=t},expression:`color2`}},[t(`Button`,{attrs:{type:`primary`}},[e._v(`Hover`)])],1),e._v(` `+e._s(e.color2)+` `)],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`禁用透明度`)]),t(`p`,[e._v(`禁用颜色透明度。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-color-picker"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color1"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`Open`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(`>`)]),e._v(`
      `+e._s(e.color1)+`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`trigger`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"hover"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(`>`)]),e._v(`Hover`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(`>`)]),e._v(`
      `+e._s(e.color2)+`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color1`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#3a95ff'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color2`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'red'`)]),e._v(`,
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,l=t({data(){return{placements:[`bottom-left`,`bottom`,`bottom-right`,`top-left`,`top`,`top-right`]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Space`,{attrs:{wrap:``}},[e._l(e.placements,function(n){return[t(`ColorPicker`,{attrs:{value:`red`,size:`small`,placement:n}},[t(`Button`,[e._v(e._s(n))])],1)]})],2)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`弹出位置`)]),t(`p`,[e._v(`支持 6 个弹出位置 , 如果上面的空间不够，色盘会自动在下面展示`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrap`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-for`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"placement in placements"`)]),e._v(`>`)]),e._v(` 
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"red"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:placement`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"placement"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(e._s(e.placement)),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      placements :[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'bottom-left'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'bottom'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'bottom-right'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'top-left'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'top'`)]),e._v(`, `),t(`span`,{staticClass:`hljs-string`},[e._v(`'top-right'`)]),e._v(`]
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,u=t({data(){return{color:`#3a95ff`,colors:[`#9c27b0`,`red`,`blue`]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`demo-color-picker`},[t(`ColorPicker`,{attrs:{presets:e.colors},model:{value:e.color,callback:function(t){e.color=t},expression:`color`}})],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`自定义颜色盘`)]),t(`p`,[e._v(`可以定义默认的颜色盘`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-color-picker"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ColorPicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"color"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:presets`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"colors"`)]),e._v(` />`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'#3a95ff'`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`colors`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'#9c27b0'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'red'`)]),e._v(`,`),t(`span`,{staticClass:`hljs-string`},[e._v(`'blue'`)]),e._v(`],
    };
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,d=t({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#api`}},[e._v(`API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`value`)]),t(`td`,[e._v(`当前激活的面板的 `),t(`code`,[e._v(`name`)]),e._v(`，可以使用 `),t(`code`,[e._v(`v-model`)]),e._v(` 双向绑定`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`mode`)]),t(`td`,[e._v(`颜色展示类型,提供3种模式(`),t(`code`,[e._v(`hex`)]),e._v(` 、 `),t(`code`,[e._v(`rgb`)]),e._v(` 、`),t(`code`,[e._v(`hsl`)]),e._v(`)`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'hex'`)])]),t(`tr`,[t(`td`,[e._v(`presets`)]),t(`td`,[e._v(`自定义颜色盘,最多20种`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`[...]`)])]),t(`tr`,[t(`td`,[e._v(`show-mode`)]),t(`td`,[e._v(`是否展示颜色模式`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`disabledAlpha`)]),t(`td`,[e._v(`是否禁用透明`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`icon`)]),t(`td`,[e._v(`自定义下拉箭头`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`shape`)]),t(`td`,[e._v(`shape='circle' 呈现圆形`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`placement`)]),t(`td`,[e._v(`色盘初始化展示位置`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`颜色值改变的时候触发,返回颜色的值`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,f={render(){return e(`div`,[e(n),e(r),e(a),e(o),e(s),e(c),e(l),e(i),e(u),e(d)])}};export{f as default};