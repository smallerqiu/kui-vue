import{r as e}from"./rolldown-runtime-B1ap6hEz.js";import{Cn as t,Tn as n,l as r,mn as i,t as a,wn as o}from"./vue-CQGPvsrV.js";import{f as s,m as c,o as l,s as u}from"./index-DxuXnqZb.js";import{t as d}from"./en-BYN0ZeFV.js";var f=c({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`多语言`)]),t(`p`,[t(`code`,[e._v(`3.6+`)]),e._v(` 不再依赖 i18n 包，使用 `),t(`code`,[e._v(`vue`)]),e._v(` 的 `),t(`code`,[e._v(`provide`)]),e._v(` 和 `),t(`code`,[e._v(`inject`)]),e._v(` 实现多语言。`)]),t(`p`,[e._v(`KUI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 App.vue 中:`)]),t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ConfigProvider`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:locale`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`transition`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"fade"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"out-in"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`router-view`)]),e._v(` />`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`transition`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`ConfigProvider`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`

`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` en `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-ui/components/locale/en"`)]),e._v(`;
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])}],!1,null,null,null,null).exports,p={name:`de`,k:{datePicker:{year:``,month:``,selectYear:`Bitte Jahr auswählen`,selectMonth:`Bitte Monat auswählen`,selectTime:`Bitte wählen`,selectDate:`Bitte Datum`,startDate:`Startdatum`,endDate:`Enddatum`,today:`Heute`,now:`aktuelle Zeit`,ok:`Okay`,back:`zurück`},form:{required:`Bitte geben Sie {label} ein`,email:`Bitte geben Sie eine gültige E-Mail-Adresse ein`,phone:`Bitte geben Sie eine gültige Telefonnummer ein`,number:`Bitte geben Sie eine gültige Nummer ein`,num_min:`Der Wert darf nicht kleiner als {min} sein`,num_max:`Der Wert darf nicht größer als {max} sein`},empty:{description:`noch keine Daten`},common:{ok:`Okay`,cancel:`Abbrechen`},page:{page:`Seite`,pageSize:`item/page`,goto:`Spring zu`,items:`items`,total:`Total`},select:{placeholder:`bitte wählen`,loading:`Laden...`,emptyText:`noch keine Daten`},table:{emptyText:`noch keine Daten`},upload:{successful:`Erfolg`,failed:`gescheitert`,errorFileSize:`illegale Dateigröße`},image:{preview:`Vorschau`}}},m=e(r());a();var h=c({__name:`demo`,setup(e){let r=n(`en`),i=n(d);m.default.locale(`en`);let a=[],c=[{title:`Name`,key:`name`},{title:`Age`,key:`age`}],f=n([{url:`https://cdn.chuchur.com/upload/demo/test_300.jpg`,status:`uploading`,filename:`test.jpg`,size:`222kb`,percent:50,status:`uploading`},{url:`https://cdn.chuchur.com/upload/demo/test_300.jpg`,status:`error`,filename:`test.jpg`,size:`222kb`}]),h=n(!1),g=n(!1),_=n(!1),v={span:6},y={span:16},b=o({name:``,email:``,age:``}),x={name:[{required:!0}],email:[{required:!0},{type:`mail`}],age:[{required:!0},{type:`number`,min:10,max:50}]},S={en:d,zh:s,de:p},C=e=>{i.value=S[e],e===`en`?m.default.locale(`en`):e==`de`?m.default.locale(`de`):m.default.locale(`zh-cn`)},w=()=>{g.value=!0},T=()=>{_.value=!0};t(`locale`,i);let E=u.useModal();return{__sfc:!0,lang:r,locale:i,data:a,columns:c,fileList:f,loading:h,visible:g,visible1:_,labelCol:v,wrapperCol:y,form:b,rules:x,langs:S,changeLocale:C,showModal:w,openDrawer:T,modalApi:E,showInfo:()=>{E.info({title:`Hello`,content:`modal info.`,onOk:()=>{l.info(`info`)}})},showConfirm:()=>{E.confirm({title:`您确认要这么做吗`,content:`此操作不可逆转，谨慎！！！`,onOk:()=>{l.success(`你点了确认`)},onCancel:()=>{l.info(`你点了取消`)}})},selectSearch:()=>{h.value=!0,setTimeout(()=>{h.value=!1},1e3)}}}},function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(`Demo`,{attrs:{id:`k-2e610404`,direction:`vertical`},scopedSlots:e._u([{key:`component`,fn:function(){return[t(`Space`,{attrs:{vertical:``,block:``}},[t(`Space`,[t(`code`,[e._v(`Language :`)]),t(`RadioGroup`,{attrs:{type:`button`},on:{change:n.changeLocale},model:{value:n.lang,callback:function(e){n.lang=e},expression:`lang`}},[t(`RadioButton`,{attrs:{value:`en`}},[e._v(`English`)]),t(`RadioButton`,{attrs:{value:`zh`}},[e._v(`中文`)]),t(`RadioButton`,{attrs:{value:`de`}},[e._v(`De`)])],1)],1),t(`ConfigProvider`,{attrs:{locale:n.locale}},[t(`Space`,{attrs:{vertical:``,block:``}},[t(`Space`,{attrs:{wrap:``}},[t(`DatePicker`,{attrs:{mode:`year`}}),t(`DatePicker`,{attrs:{mode:`month`}}),t(`DatePicker`,{attrs:{mode:`date`}}),t(`DatePicker`,{attrs:{mode:`time`}}),t(`DatePicker`,{attrs:{mode:`dateTime`}}),t(`DatePicker`,{attrs:{mode:`dateRange`}})],1),t(`Space`,[t(`Select`,{staticStyle:{width:`120px`}}),t(`Select`,{staticStyle:{width:`120px`},attrs:{value:[],multiple:``,loading:n.loading},on:{search:n.selectSearch}})],1),t(`Space`,{attrs:{vertical:``}},[t(`Page`,{attrs:{total:50,"show-total":``,showSizer:``,showElevator:``}})],1),t(`Space`,[t(`Button`,{on:{click:n.showModal}},[e._v(`Modal`)]),t(`Button`,{on:{click:n.showInfo}},[e._v(`Info`)]),t(`Button`,{on:{click:n.showConfirm}},[e._v(`Confirm`)]),t(`Popconfirm`,{attrs:{title:`Are you sure?`}},[t(`Button`,[e._v(`Pop Confirm`)])],1),t(`Button`,{on:{click:n.openDrawer}},[e._v(`Open Drawer`)])],1),t(`Space`,[t(`Table`,{attrs:{columns:n.columns}})],1),t(`Space`,[e._v(` TreeSelect : `),t(`TreeSelect`,{staticStyle:{width:`180px`},attrs:{treeData:[]}})],1),t(`Space`,[e._v(` Image : `),t(`KImage`,{attrs:{width:120,height:120,src:`https://cdn.chuchur.com/upload/cat/cat1.jpg`}})],1),t(`Space`,[t(`Upload`,{attrs:{action:`https://www.chuchur.com/api/upload/image`,name:`file`,directory:``,fileList:n.fileList}},[t(`Button`,[e._v(`Click to upload`)])],1)],1),t(`Space`,{staticStyle:{"max-width":`500px`},attrs:{block:``}},[t(`Form`,{attrs:{model:n.form,rules:n.rules,labelCol:n.labelCol,wrapperCol:n.wrapperCol}},[t(`FormItem`,{attrs:{label:`Name`,prop:`name`}},[t(`Input`,{attrs:{placeholder:`Please input`}})],1),t(`FormItem`,{attrs:{label:`Email`,prop:`email`}},[t(`Input`,{attrs:{placeholder:`Please input`}})],1),t(`FormItem`,{attrs:{label:`Age`,prop:`age`}},[t(`InputNumber`,{attrs:{placeholder:`Please input`}})],1),t(`FormItem`,{attrs:{wrapperCol:{offset:6}}},[t(`Button`,{attrs:{type:`primary`,htmlType:`submit`}},[e._v(`Submit`)]),t(`Button`,{staticStyle:{margin:`0 10px`},attrs:{htmlType:`reset`}},[e._v(`Reset`)])],1)],1)],1),t(`Modal`,{attrs:{title:`Basic Modal`},model:{value:n.visible,callback:function(e){n.visible=e},expression:`visible`}}),t(`Drawer`,{attrs:{title:`Basic Drawer`},model:{value:n.visible1,callback:function(e){n.visible1=e},expression:`visible1`}})],1)],1)],1)]},proxy:!0},{key:`description`,fn:function(){return[t(`h3`,[e._v(`多语言切换示例`)]),t(`p`,[e._v(`通过修改 ConfigProvider 的 locale 属性，切换语言。`)])]},proxy:!0},{key:`code`,fn:function(){return[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`code`)]),e._v(`>`)]),e._v(`Language :`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`code`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"lang"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"button"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"changeLocale"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`>`)]),e._v(`English`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"zh"`)]),e._v(`>`)]),e._v(`中文`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"de"`)]),e._v(`>`)]),e._v(`De`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioButton`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`RadioGroup`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`ConfigProvider`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:locale`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"locale"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrap`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`DatePicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"year"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`DatePicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"month"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`DatePicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"date"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`DatePicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"time"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`DatePicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"dateTime"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`DatePicker`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"dateRange"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width: 120px"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Select`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"[]"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width: 120px"`)]),e._v(`
            @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`search`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"selectSearch"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:loading`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"loading"`)]),e._v(`
          />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`vertical`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Page`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:total`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"50"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`show-total`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showSizer`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`showElevator`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showModal"`)]),e._v(`>`)]),e._v(`Modal`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showInfo"`)]),e._v(`>`)]),e._v(`Info`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"showConfirm"`)]),e._v(`>`)]),e._v(`Confirm`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Popconfirm`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Are you sure?"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`Pop Confirm`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Popconfirm`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"openDrawer"`)]),e._v(`>`)]),e._v(`Open Drawer`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Table`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:columns`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"columns"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          TreeSelect : `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`TreeSelect`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:treeData`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"[]"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:180px"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          Image :
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`KImage`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:width`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"120"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:height`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"120"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`src`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://cdn.chuchur.com/upload/cat/cat1.jpg"`)]),e._v(`
          />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://www.chuchur.com/api/upload/image"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`directory`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:fileList`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"fileList"`)]),e._v(`
          >`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`Click to upload`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"max-width:500px;"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Form`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"form"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:rules`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"rules"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:labelCol`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"labelCol"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:wrapperCol`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"wrapperCol"`)]),e._v(`
          >`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`prop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Please input"`)]),e._v(` />`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Email"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`prop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"email"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Please input"`)]),e._v(` />`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`prop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`InputNumber`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Please input"`)]),e._v(` />`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:wrapperCol`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{ offset: 6 }"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`htmlType`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"submit"`)]),e._v(`>`)]),e._v(`Submit`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"margin:0 10px"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`htmlType`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"reset"`)]),e._v(`>`)]),e._v(`Reset`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Form`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Modal`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model:visible`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Basic Modal"`)]),e._v(` />`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Drawer`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model:visible`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"visible1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Basic Drawer"`)]),e._v(` />`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`ConfigProvider`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`

`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`setup`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { ref, reactive, provide } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` en `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/locale/en"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` de `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/locale/de"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` uk `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/locale/uk"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` zh `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue/locale/zh-CN"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` dayjs `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"dayjs"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { modal, message } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-vue"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"dayjs/locale/de"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` lang = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` locale = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(en);
dayjs.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`locale`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` data = [];
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` columns = [
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Name"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"name"`)]),e._v(` },
  { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Age"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"age"`)]),e._v(` },
];

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` fileList = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`([
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`url`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://cdn.chuchur.com/upload/demo/test_300.jpg"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`status`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"uploading"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filename`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"test.jpg"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"222kb"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`percent`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`50`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`status`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"uploading"`)]),e._v(`,
  },
  {
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`url`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://cdn.chuchur.com/upload/demo/test_300.jpg"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`status`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"error"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filename`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"test.jpg"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"222kb"`)]),e._v(`,
  },
]);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` loading = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` visible1 = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`ref`)]),e._v(`(`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`);

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` labelCol = { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`span`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`6`)]),e._v(` };
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` wrapperCol = { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`span`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`16`)]),e._v(` };

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` form = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`reactive`)]),e._v(`({
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`email`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`,
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`,
});
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` rules = {
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`: [{ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`required`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` }],
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`email`)]),e._v(`: [{ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`required`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` }, { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"mail"`)]),e._v(` }],
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`age`)]),e._v(`: [{ `),t(`span`,{staticClass:`hljs-attr`},[e._v(`required`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` }, { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"number"`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`min`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`max`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`50`)]),e._v(` }],
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` langs = {
  en,
  zh,
  de,
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`changeLocale`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`},[e._v(`value`)]),e._v(`) => {
  locale.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = langs[value];
  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (value === `),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`) {
    dayjs.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`locale`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"en"`)]),e._v(`);
  } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (value == `),t(`span`,{staticClass:`hljs-string`},[e._v(`"de"`)]),e._v(`) {
    dayjs.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`locale`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"de"`)]),e._v(`);
  } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` {
    dayjs.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`locale`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"zh-cn"`)]),e._v(`);
  }
};

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`showModal`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  visible.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`openDrawer`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  visible1.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
};

`),t(`span`,{staticClass:`hljs-comment`},[e._v(`// modal 等 全局方法, 需要使用 modal.useModal() 获取 context`)]),e._v(`
`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`provide`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"locale"`)]),e._v(`, locale); `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 当前演示demo,需要注入locale , 实际全局不需注入`)]),e._v(`

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` modalApi = modal.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`useModal`)]),e._v(`();
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`showInfo`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modalApi.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`({
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"Hello"`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`content`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`"modal info."`)]),e._v(`,
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`onOk`)]),e._v(`: `),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
      message.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`info`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`"info"`)]),e._v(`);
    },
  });
};
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`showConfirm`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  modalApi.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`confirm`)]),e._v(`({
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

`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`selectSearch`)]),e._v(` = (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) => {
  loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`;
  `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`setTimeout`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`() =>`)]),e._v(` {
    loading.`),t(`span`,{staticClass:`hljs-property`},[e._v(`value`)]),e._v(` = `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`;
  }, `),t(`span`,{staticClass:`hljs-number`},[e._v(`1000`)]),e._v(`);
};
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])]},proxy:!0}])})},[],!1,null,null,null,null).exports,g=c({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`p`,[e._v(`目前 KUI 内置了以下语言：`)]),t(`ul`,[t(`li`,[e._v(`简体中文(zh-CN)`)]),t(`li`,[e._v(`繁体中文(zh-TW)`)]),t(`li`,[e._v(`德语(de)`)]),t(`li`,[e._v(`希腊语(el)`)]),t(`li`,[e._v(`英语(en)`)]),t(`li`,[e._v(`法语(fr)`)]),t(`li`,[e._v(`意大利语(it)`)]),t(`li`,[e._v(`日语(ja)`)]),t(`li`,[e._v(`韩语(ko)`)]),t(`li`,[e._v(`俄语(ru)`)]),t(`li`,[e._v(`泰语(th)`)]),t(`li`,[e._v(`乌克兰语(uk)`)]),t(`li`,[e._v(`越南语(vi)`)])]),t(`p`,[e._v(`欢迎贡献代码，以支持更多语言。`),t(`a`,{attrs:{href:`https://gitee.com/chuchur/kui-vue/tree/master/components/locale/lang`}},[e._v(`Join`)])])])}],!1,null,null,null,null).exports,_={render(){return i(`div`,[i(f),i(h),i(g)])}};export{_ as default};