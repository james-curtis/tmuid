import{d as e,r as t,O as a,c as l,o,a as s,w as n,n as i,u as r,M as u,b as c,j as m,N as d,g as v,K as f,l as p,k as x,i as h,_ as g}from"./index-6b165856.js";import{t as y}from"./tm-sheet.3639b36a.js";import{t as w}from"./tm-text.6c910eb0.js";import{t as b}from"./tm-icon.65b53dc0.js";import{u as _}from"./tm-app.d6cf2f93.js";const k=g(e({__name:"tm-message",props:{_style:{type:[Array,String,Object],default:()=>{}},round:{type:Number,default:12},padding:{type:Array,default:()=>[24,0]},_class:{type:[Array,String],default:"flex-center"},mask:{type:[Boolean],default:!0},duration:{type:Number,default:1500},width:{type:Number,default:300},height:{type:Number,default:300},lines:{type:Number,default:1}},emits:["click"],setup(e,{expose:g,emit:k}){var N;const j=e,S=_();t(null),t(null),null==(N=v())||N.proxy;const A=a("tmuiSysInfo",l((()=>({bottom:0,height:750,width:f(750),top:0,isCustomHeader:!1,sysinfo:null})))),I=l((()=>A.value.width)),q=l((()=>A.value.height)),C=l((()=>j.lines));let M=t(!1);const T=t(j.duration);let z=NaN;const E=t("white"),O=t("info"),$=t(!1),B=t(""),H=t(""),J=t(""),K=t(j.mask),P=t(!1),V=t(C.value),D=l((()=>({load:{icon:"tmicon-loading",color:"primary",text:p("message.load.text")},error:{icon:"tmicon-times-circle",color:"red",text:p("message.error.text")},info:{icon:"tmicon-info-circle",text:p("message.info.text"),color:"black"},warn:{icon:"tmicon-exclamation-circle",text:p("message.warn.text"),color:"orange"},quest:{icon:"tmicon-question-circle",text:p("message.quest.text"),color:"pink"},success:{icon:"tmicon-check-circle",text:p("message.success.text"),color:"green"},disabled:{icon:"tmicon-ban",text:p("message.disabled.text"),color:"red"},wait:{icon:"tmicon-ios-alarm",text:p("message.wait.text"),color:"black"}})));function F(e){let t=e||{},{duration:a,icon:l,text:o,color:s,dark:n,model:i,mask:r,lines:u}=t;O.value=void 0===i?O.value:i,B.value=l=null!=l?l:D.value[O.value].icon,H.value=o=null!=o?o:D.value[O.value].text,J.value=s=null!=s?s:D.value[O.value].color,K.value="boolean"==typeof r?r:K.value,V.value=null!=u?u:C.value,!0===n&&(E.value="black"),"boolean"!=typeof n&&(n=S.tmStore.dark),"white"!=J.value&&"black"!=J.value||(J.value=""),P.value=n,void 0===a&&(a=j.duration),T.value=isNaN(parseInt(String(a)))?1500:parseInt(String(a)),$.value=!0,"load"!=O.value&&(z=setTimeout((function(){$.value=!1,z=NaN}),T.value))}return g({show:function(e){$.value||!isNaN(z)?($.value=!1,clearTimeout(z),x((()=>{F(e)}))):F(e)},hide:function(){$.value=!1,z=NaN,clearTimeout(z)}}),(e,t)=>{const a=h;return $.value?(o(),s(a,{key:0,ref:"nvueElAni",class:d(["fixed l-0 t-0 flex flex-row flex-row-center-center on",[K.value?"overflowMask":"overflowMaskNo"]]),style:i({width:r(I)+"px",height:r(q)+"px",top:r(A).top+"px"})},{default:n((()=>[$.value?(o(),s(y,{key:0,style:i({transform:r(M)?"scale(0,0)":"scale(1,1)"}),ref:"nvueElAniContent",class:"scale nvueContent",_style:j._style,_class:j._class,color:E.value,border:0,shadow:10,width:j.width,height:j.height,margin:[40,40],round:j.round,padding:j.padding},{default:n((()=>[u(e.$slots,"default",{},(()=>[c(a,{class:"flex flex-center flex-col ma-30",style:{"line-height":"normal"}},{default:n((()=>[c(b,{_style:"line-height: normal",style:{"line-height":"normal"},_class:"pa-10",spin:"load"==O.value,color:J.value,fontSize:72,name:B.value},null,8,["spin","color","name"]),c(w,{"font-size":30,_class:`pt-8 text-overflow-${V.value}`,label:H.value},null,8,["_class","label"])])),_:1})]),!0)])),_:3},8,["style","_style","_class","color","width","height","round","padding"])):m("v-if",!0)])),_:3},8,["class","style"])):m("v-if",!0)}}}),[["__scopeId","data-v-11420a70"]]);export{k as t};