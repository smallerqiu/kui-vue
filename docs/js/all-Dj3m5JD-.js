/*!
* kui-vue v3.5.0
* Copyright 2017-present, kui-vue.
* All rights reserved.
* Author: Qiu / https://chuchur.com
*/
import{Bt as e,Rt as t,a as n,i as r,n as i,t as a}from"./index-DH7LFVbd.js";var o={methods:{renders(t){let o=[],s=[];if(t.forEach((t,i)=>{let s=e(a,{attrs:{span:6}},[e(`router-link`,{attrs:{to:`/${t.key}/${t.name}`}},[e(r,{attrs:{bordered:!0,title:t.sub+` `+t.title}},[e(n,{class:`icon-view`,attrs:{name:t.icon}})])])]);o.push(s)}),o.length<4)s.push(e(i,{attrs:{gutter:20}},[o]));else for(let t=0;t<o.length;t+=4)s.push(e(i,{attrs:{gutter:20}},[o.slice(t,t+4)]));return s}},render(){let n=t.filter(e=>e.key!=`start`);return e(`div`,{class:`all-components`},[e(`h1`,[`组件`]),e(`p`,[e(`code`,[`kui`]),` 提供了65款组件，之后会根据需求补充，欢迎提供建议！`]),n.map((t,n)=>[e(`h2`,[t.title]),this.renders(t.child)])])}};export{o as default};