import{d as t,r as e,P as l,c as o,ad as a,p as n,M as r,o as i,a as s,w as u,b as f,N as d,O as p,n as m,u as c,k as h,g as b,L as g,m as v,j as w,_}from"./index-5c06cf16.js";import{c as x,t as y}from"./tm-app.20954b06.js";import{t as k}from"./tm-sheet.2873fe67.js";import{t as z}from"./tm-text.fdd4f0a8.js";import{t as C}from"./tm-icon.5716c798.js";import{_ as N}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import{t as S}from"./tm-button.5fc2eaaa.js";const T=_(t({__name:"tm-notification",props:{...x,followTheme:{type:[Boolean],default:!0},transprent:{type:[Boolean],default:!1},border:{type:[Number],default:0},round:{type:[Number],default:2},shadow:{type:[Number],default:0},margin:{type:Array,default:()=>[0,0]},padding:{type:Array,default:()=>[24,16]},duration:{type:Number,default:2e3},offset:{type:Array,default:()=>[32,32]},placement:{type:String,default:"topLeft"},label:{type:String,default:""},icon:{type:String,default:"tmicon-info-circle-fill"}},emits:["click","close"],setup(t,{expose:_,emit:x}){var y;const N=t;null==(y=b())||y.proxy,e(null);const S=l("tmuiSysInfo",o((()=>({bottom:0,height:750,width:g(750),top:0,isCustomHeader:!1,sysinfo:null}))));let T=o((()=>S.value.bottom)),j=o((()=>S.value.top)),L=o((()=>S.value.width)),D=NaN;const R=e(!1),A=e(N.label),I=e(N.icon),B=o((()=>"topLeft"==N.placement?{top:j.value+g(N.offset[1]),left:g(N.offset[0]),right:null,bottom:null,width:null}:"topRight"==N.placement?{top:j.value+g(N.offset[1]),left:null,right:g(N.offset[0]),bottom:null,width:null}:"bottomLeft"==N.placement?{top:null,left:g(N.offset[0]),right:null,bottom:T.value+g(N.offset[1]),width:null}:"bottomRight"==N.placement?{top:null,left:null,right:g(N.offset[0]),bottom:T.value+g(N.offset[1]),width:null}:"top"==N.placement?{top:j.value+g(N.offset[1]),left:g(N.offset[0]),right:null,bottom:null,width:L.value-2*g(N.offset[0])}:"bottom"==N.placement?{top:null,left:g(N.offset[0]),right:null,bottom:T.value+g(N.offset[1]),width:L.value-2*g(N.offset[0])}:{left:null,right:null,bottom:null,width:null,top:null})),O=e(N.color);function P(){R.value=!1,clearTimeout(D),x("close")}return a((()=>{O.value=N.color})),n((()=>{A.value=N.label,I.value=N.icon})),r((()=>{clearTimeout(D)})),_({show:function(t){let{icon:e,label:l,duration:o}=t||{};if(A.value=l||N.label||"",I.value=e||N.icon||"",O.value=((null==t?void 0:t.color)??O.value)||O.value,o=void 0===o?N.duration||0:o,R.value||!isNaN(D))R.value=!1,clearTimeout(D),v((()=>{R.value=!0,o&&(D=setTimeout((function(){R.value=!1}),o))}));else{if(R.value=!0,!o)return;D=setTimeout((function(){R.value=!1}),o)}},hide:P}),(t,e)=>{const l=w;return R.value?(i(),s(l,{key:0,class:p(["fixed scale"]),style:m([null!==c(B).left?{left:c(B).left+"px"}:"",null!==c(B).right?{right:c(B).right+"px"}:"",null!==c(B).top?{top:c(B).top+"px"}:"",null!==c(B).bottom?{bottom:c(B).bottom+"px"}:"",null!==c(B).width?{width:c(B).width+"px"}:"",N.shadow?{padding:4*N.shadow+"rpx"}:""])},{default:u((()=>[f(k,{onClick:e[0]||(e[0]=t=>x("click",t)),color:O.value,_class:t._class,_style:t._style,followTheme:N.followTheme,dark:N.dark,round:N.round,shadow:N.shadow,outlined:N.outlined,border:N.border,borderStyle:N.borderStyle,borderDirection:N.borderDirection,text:N.text,transprent:N.transprent,linear:N.linear,linearDeep:N.linearDeep,margin:N.margin,padding:N.padding},{default:u((()=>[d(t.$slots,"default",{},(()=>[f(l,{class:"flex flex-row flex-row-center-between relative"},{default:u((()=>[f(l,{class:"flex flex-1 flex-row overflow flex-row-center-start"},{default:u((()=>[f(C,{_class:"pr-10",fontSize:26,name:I.value},null,8,["name"]),d(t.$slots,"default",{},(()=>[f(z,{_class:"text-overflow-1",label:A.value},null,8,["label"])]),!0)])),_:3}),f(l,{class:"pl-24 pr-12 flex flex-center",style:{width:"0rpx"}},{default:u((()=>[f(C,{onClick:P,fontSize:24,name:"tmicon-times"})])),_:1})])),_:3})]),!0)])),_:3},8,["color","_class","_style","followTheme","dark","round","shadow","outlined","border","borderStyle","borderDirection","text","transprent","linear","linearDeep","margin","padding"])])),_:3},8,["style"])):h("v-if",!0)}}}),[["__scopeId","data-v-c73e58a7"]]),j=t({__name:"notification",setup(t){const l=e(null),o=e("topLeft");function a(t){o.value=t,v((()=>{var t;null==(t=l.value)||t.show({label:"呵呵"})}))}return(t,e)=>{const n=w;return i(),s(y,null,{default:u((()=>[f(k,null,{default:u((()=>[f(z,{"font-size":24,_class:"font-weight-b",label:"下面是一些其它属性,更多玩法请前往文档。"}),f(N),f(n,{class:"flex flex-row flex-wrap"},{default:u((()=>[f(S,{margin:[12,12],onClick:e[0]||(e[0]=t=>a("topLeft")),color:"white",width:120,height:56,"font-size":24,label:"默认"}),f(S,{margin:[12,12],onClick:e[1]||(e[1]=t=>a("topRight")),color:"red",width:120,height:56,"font-size":24,label:"显示右边"}),f(S,{margin:[12,12],onClick:e[2]||(e[2]=t=>a("top")),color:"orange",width:120,height:56,"font-size":24,label:"显示上方"}),f(S,{margin:[12,12],onClick:e[3]||(e[3]=t=>a("bottomLeft")),color:"pink",width:120,height:56,"font-size":24,label:"显示底左"}),f(S,{margin:[12,12],onClick:e[4]||(e[4]=t=>a("bottomRight")),color:"green",width:120,height:56,"font-size":24,label:"显示底右"}),f(S,{margin:[12,12],onClick:e[5]||(e[5]=t=>a("bottom")),color:"green",text:"",shadow:0,width:120,height:56,"font-size":24,label:"显示底部"})])),_:1})])),_:1}),f(T,{placement:o.value,ref_key:"msg",ref:l,label:"消息提醒"},null,8,["placement"])])),_:1})}}});export{j as default};