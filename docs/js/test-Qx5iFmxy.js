/*!
* kui-vue v3.5.1
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{c as e}from"./index-C9zE6tXi.js";var t=e({data(){return{checked:!1}},methods:{test(){window.i18n.locale=`ua`}}},function(){var e=this,t=e._self._c;return t(`Space`,[e._v(` value: `+e._s(e.checked)+` `),t(`k-switch`,{model:{value:e.checked,callback:function(t){e.checked=t},expression:`checked`}}),t(`DatePicker`),t(`Button`,{attrs:{size:`small`},on:{click:function(t){e.checked=!e.checked}}},[e._v(e._s(e.checked?`Uncheck`:`Check`))]),t(`k-switch`,{attrs:{checked:``}}),t(`Button`,{on:{click:e.test}},[e._v(`test`)])],1)},[],!1,null,null,null,null).exports;export{t as default};