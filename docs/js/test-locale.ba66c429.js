/*!
 * kui-vue v3.5.0
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: Qiu / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[1830],{2740:function(l,e,a){a.r(e),a.d(e,{default:function(){return i}});var c=function(){var l=this,e=l._self._c;return e("Space",{attrs:{vertical:""}},[e("Select"),e("DatePicker"),e("Select",{attrs:{options:l.locales},on:{change:l.switchLocale},model:{value:l.locale,callback:function(e){l.locale=e},expression:"locale"}})],1)},t=[],u={data(){return{locale:"",locales:[{label:"中文",value:"zhCN"},{label:"英语",value:"en"},{label:"乌克兰语",value:"ua"},{label:"希腊语",value:"el"},{label:"法语",value:"fr"}]}},methods:{switchLocale(){window.i18n.locale=this.locale}}},n=u,o=a(6205),s=(0,o.A)(n,c,t,!1,null,null,null),i=s.exports}}]);