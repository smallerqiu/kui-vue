/*!
 * kui-vue v3.3.6-a
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[1303],{5020:function(t,e,s){s.r(e);s(7658);var r=s(1790),l=s(1662),n=s(5684),a=s(5298);e.default={methods:{renders(t){const e=this.$createElement;let s=[],r=[];if(t.forEach(((t,r)=>{let u=e(l.J,{attrs:{span:6}},[e("router-link",{attrs:{to:`/${t.key}/${t.name}`}},[e(n.Z,{attrs:{bordered:!0,title:t.sub+" "+t.title}},[e(a.Z,{class:"icon-view",attrs:{name:t.icon}})])])]);s.push(u)})),s.length<4)r.push(e(l.X,{attrs:{gutter:20}},[s]));else for(let t=0;t<s.length;t+=4)r.push(e(l.X,{attrs:{gutter:20}},[s.slice(t,t+4)]));return r}},render(){const t=arguments[0];let e=r.M.filter((t=>"start"!=t.key));return t("div",{class:"all-components"},[t("h1",["组件"]),t("p",[t("code",["kui"])," 提供了65款组件，之后会根据需求补充，欢迎提供建议！"]),e.map(((e,s)=>[t("h2",[e.title]),this.renders(e.child)]))])}}}}]);