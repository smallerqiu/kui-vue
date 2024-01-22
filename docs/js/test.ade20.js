/*!
 * kui-vue v3.3.6-b
 *  Copyright 2017-present, kui-vue.
 *  All rights reserved.
 *  Docs: https://k-ui.cn
 * Author: chuchur@qq.com / www.chuchur.com
 *
 */
"use strict";(self.webpackChunkkui_vue=self.webpackChunkkui_vue||[]).push([[5043],{6660:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=function(){var e=this,t=e._self._c;return t("Table",{attrs:{data:e.data,columns:e.columns,bordered:"",height:300,width:1800},on:{change:e.change}},[t("a",{attrs:{slot:"action"},slot:"action"},[e._v("action")])])};a._withStripped=!0;n(7658);var r={data(){const e=[];for(let t=0;t<10;t++)e.push({key:t,name:"John Brown",age:t+1,street:"Lake Park",building:"C",number:2035,companyAddress:"Lake Street 42",companyName:"SoftLake Co",gender:"M"});return{data:e,columns:[{title:"Name",key:"name",width:100,fixed:"left"},{title:"Other",children:[{title:"Age",key:"age",sorter:!0},{title:"Address",children:[{title:"Street",key:"street"},{title:"Block",children:[{title:"Building",key:"building"},{title:"Door No.",key:"number"}]}]}]},{title:"Company",children:[{title:"Company Address",key:"companyAddress"},{title:"Company Name",key:"companyName"}]},{title:"Gender",key:"gender",width:80,fixed:"right"}]}},methods:{change(e,{key:t,order:n}){console.log(e,t,n),this.data.sort(((e,a)=>"asc"==n?a[t]-e[t]:e[t]-a[t]))}}},i=(0,n(1900).Z)(r,a,[],!1,null,null,null).exports}}]);