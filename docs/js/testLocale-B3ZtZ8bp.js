/*!
* kui-vue v3.5.1
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{c as e}from"./index-C9zE6tXi.js";var t=e({data(){return{locale:``,locales:[{label:`中文`,value:`zhCN`},{label:`英语`,value:`en`},{label:`乌克兰语`,value:`ua`},{label:`希腊语`,value:`el`},{label:`法语`,value:`fr`}]}},methods:{switchLocale(){window.i18n.locale=this.locale}}},function(){var e=this,t=e._self._c;return t(`Space`,{attrs:{vertical:``}},[t(`Select`),t(`DatePicker`),t(`Select`,{attrs:{options:e.locales},on:{change:e.switchLocale},model:{value:e.locale,callback:function(t){e.locale=t},expression:`locale`}})],1)},[],!1,null,null,null,null).exports;export{t as default};