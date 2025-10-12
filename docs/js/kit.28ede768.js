/*!
 * kui-vue v3.5.0
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Author: Qiu / www.chuchur.com
 */
"use strict";(self["webpackChunkkui_vue"]=self["webpackChunkkui_vue"]||[]).push([[2645],{583:function(t,e,s){s.r(e);var r=s(8704),l=s(9512),n=s(3016),a=s(993);e["default"]={methods:{renders(t){const e=this.$createElement;let s=[],r=[];if(t.forEach((t,r)=>{let u=e(l.f,{attrs:{span:6}},[e("router-link",{attrs:{to:`/${t.key}/${t.name}`}},[e(n.A,{attrs:{bordered:!0,title:t.sub+" "+t.title}},[e(a.A,{class:"icon-view",attrs:{name:t.icon}})])])]);s.push(u)}),s.length<4)r.push(e(l.y,{attrs:{gutter:20}},[s]));else for(let n=0;n<s.length;n+=4)r.push(e(l.y,{attrs:{gutter:20}},[s.slice(n,n+4)]));return r}},render(){const t=arguments[0];let e=r.Z.filter(t=>"start"!=t.key);return t("div",{class:"all-components"},[t("h1",["组件"]),t("p",[t("code",["kui"])," 提供了65款组件，之后会根据需求补充，欢迎提供建议！"]),e.map((e,s)=>[t("h2",[e.title]),this.renders(e.child)])])}}}}]);