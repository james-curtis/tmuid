import{d as t,r as e,P as o,c as l,az as r,p as a,R as i,o as s,a as n,w as p,u as d,V as f,n as c,k as b,b as u,ay as x,N as m,O as h,g as _,L as w,j as g,_ as y}from"./index-5c06cf16.js";import{c as v,t as k}from"./tm-app.20954b06.js";import{t as D}from"./tm-sheet.2873fe67.js";import{t as S}from"./tm-text.fdd4f0a8.js";import{t as z}from"./tm-translate.4fbb7927.js";import{_ as I}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import{_ as j}from"./tm-tag.vue_vue_type_script_setup_true_lang.bc11f60d.js";import"./tm-icon.5716c798.js";const T=y(t({__name:"tm-popover",props:{...v,shadow:{type:Number,default:0},border:{type:[Number,String],default:0},round:{type:[Number,String],default:3},transprent:{type:[Boolean,String],default:!1},color:{type:String,default:"white"},width:{type:Number,default:0},position:{type:String,default:"tc"},label:{type:String,default:"提示内容"}},setup(t){var y;const v=t;null==(y=_())||y.proxy;const k=e(null),I=o("tmuiSysInfo",l((()=>({bottom:0,height:750,width:w(750),top:0,isCustomHeader:!1,sysinfo:null})))),j=l((()=>I.value.width)),T=l((()=>I.value.height));let Y=e(!1);e(uni.$tm.u.getUid(5));let X=e(!1),C=e({left:0,right:0,bottom:0,top:0,width:0,height:0}),N=e({left:0,right:0,bottom:0,top:0,width:0,height:0});const P=l((()=>"bc"==v.position||"bl"==v.position||"br"==v.position?"up":"down"));return r((()=>{})),a((()=>{})),i((()=>X.value),(()=>{})),(t,e)=>{const o=g;return s(),n(o,{class:"flex flex-row relative",onClick:e[3]||(e[3]=f((()=>{}),["stop"]))},{default:p((()=>[d(X)?(s(),n(o,{key:0,onClick:e[0]||(e[0]=f((t=>x(X)?X.value=!1:X=!1),["stop"])),class:"l-0 t-0 fixed zIndex-9",style:c([{width:d(j)+"px",height:d(T)+"px",background:"rgba(0,0,0,0)"}])},null,8,["style"])):b("v-if",!0),u(o,{class:h(["flex flex-col",["tc"==v.position?"popover-tc":"","tl"==v.position?"popover-tl":"","tr"==v.position?"popover-tr":"","bc"==v.position?"popover-bc":"","bl"==v.position?"popover-bl":"","br"==v.position?"popover-br":""]])},{default:p((()=>[u(o,{onClick:e[1]||(e[1]=t=>x(X)?X.value=!0:X=!0),class:"relative zIndex-1 flex flex-row"},{default:p((()=>[u(o,{userInteractionEnabled:!1,eventPenetrationEnabled:!0,ref:"popver",class:"flex flex-row"},{default:p((()=>[m(t.$slots,"default",{},void 0,!0)])),_:3},512)])),_:3}),d(X)?(s(),n(o,{key:0,class:h(["zIndex-10",[d(Y)?"fixed":"absolute","tc"==v.position||"tl"==v.position||"tr"==v.position?"popover-tcc":"","bc"==v.position||"bl"==v.position||"br"==v.position?"popover-bcc":""]]),style:c([d(Y)&&"tc"==v.position?{top:d(C).top-d(N).height+"px",left:d(C).left+d(C).width/2-d(N).width/2+"px"}:"",d(Y)&&"tl"==v.position?{top:d(C).top-d(N).height+"px",left:d(C).left+"px"}:"",d(Y)&&"tr"==v.position?{top:d(C).top-d(N).height+"px",left:d(C).right-d(N).width+"px"}:"",d(Y)&&"bc"==v.position?{top:d(C).bottom+"px",left:d(C).left+d(C).width/2-d(N).width/2+"px"}:"",d(Y)&&"bl"==v.position?{top:d(C).bottom+"px",left:d(C).left+"px"}:"",d(Y)&&"br"==v.position?{top:d(C).bottom+"px",left:d(C).right-d(N).width+"px"}:""]),ref:"content"},{default:p((()=>[u(z,{ref_key:"aniDom",ref:k,reverse:"",name:d(P),duration:120,autoPlay:!d(Y)},{default:p((()=>[u(o,{class:h(["flex flex-col",["tc"==v.position?"flex-col-center-center":"","tl"==v.position?"flex-col-top-start":"","tr"==v.position?"flex-col-bottom-end":"","bc"==v.position?"flex-col-center-center":"","bl"==v.position?"flex-col-top-start":"","br"==v.position?"flex-col-bottom-end":""]]),style:c([v.width?{width:v.width+"rpx"}:""])},{default:p((()=>["bc"==v.position||"bl"==v.position||"br"==v.position?(s(),n(D,{key:0,text:v.text,color:v.color,_class:"flex-col flex-col flex-col-center-center",followTheme:v.followTheme,dark:v.dark,round:0,shadow:v.shadow,outlined:v.outlined,border:v.border,borderStyle:v.borderStyle,borderDirection:v.borderDirection,transprent:v.transprent,linear:v.linear,linearDeep:v.linearDeep,_style:[{zIndex:1},"bc"==v.position?{transform:" rotate(45deg) translateY(8rpx) translateX(8rpx)"}:{},"bl"==v.position?{transform:" rotate(45deg) translateY(-12rpx) translateX(30rpx)"}:{},"br"==v.position?{transform:" rotate(45deg) translateY(20rpx) translateX(-16rpx)",transformOrigin:"0rpx 50%"}:{}],margin:[0,0],padding:[0,0],width:20,height:20},null,8,["text","color","followTheme","dark","shadow","outlined","border","borderStyle","borderDirection","transprent","linear","linearDeep","_style"])):b("v-if",!0),u(D,{onClick:e[2]||(e[2]=t=>x(X)?X.value=!1:X=!1),width:v.width,text:v.text,color:v.color,_class:v._class,_style:[{zIndex:2,position:"relative"}],followTheme:v.followTheme,dark:v.dark,round:v.round,shadow:v.shadow,outlined:v.outlined,border:v.border,borderStyle:v.borderStyle,borderDirection:v.borderDirection,transprent:v.transprent,linear:v.linear,linearDeep:v.linearDeep,margin:[0,0],padding:[0,12]},{default:p((()=>[m(t.$slots,"label",{},(()=>[u(S,{"font-size":24,_style:"line-height:normal;",_class:[v.width?"":"nowrap  ","px-16"],label:v.label},null,8,["_class","label"])]),!0)])),_:3},8,["width","text","color","_class","followTheme","dark","round","shadow","outlined","border","borderStyle","borderDirection","transprent","linear","linearDeep"]),"tc"==v.position||"tl"==v.position||"tr"==v.position?(s(),n(D,{key:1,text:v.text,color:v.color,_class:v._class,followTheme:v.followTheme,dark:v.dark,round:0,shadow:v.shadow,outlined:v.outlined,border:v.border,borderStyle:v.borderStyle,borderDirection:v.borderDirection,transprent:v.transprent,linear:v.linear,linearDeep:v.linearDeep,_style:[{zIndex:1},"tc"==v.position?{transform:" rotate(45deg) translateY(-8rpx) translateX(-8rpx)"}:{},"tl"==v.position?{transform:" rotate(45deg) translateY(-26rpx) translateX(10rpx)"}:{},"tr"==v.position?{transform:" rotate(45deg) translateY(0rpx) translateX(-24rpx)",transformOrigin:"0rpx 50%"}:{}],margin:[0,0],padding:[0,0],width:20,height:20},null,8,["text","color","_class","followTheme","dark","shadow","outlined","border","borderStyle","borderDirection","transprent","linear","linearDeep","_style"])):b("v-if",!0)])),_:3},8,["class","style"])])),_:3},8,["name","autoPlay"])])),_:3},8,["class","style"])):b("v-if",!0)])),_:3},8,["class"])])),_:3})}}}),[["__scopeId","data-v-264e54de"]]),Y=t({__name:"popover",setup:t=>(t,e)=>{const o=g;return s(),n(k,null,{default:p((()=>[u(D,null,{default:p((()=>[u(S,{"font-size":24,_class:"font-weight-b",label:"基础示例,更多见文档"}),u(I),u(o,{class:"flex flex-row"},{default:p((()=>[u(o,{class:"mx-32"},{default:p((()=>[u(T,{position:"tl"},{default:p((()=>[u(S,{label:"汽泡上左"})])),_:1})])),_:1}),u(o,{class:"mx-32"},{default:p((()=>[u(T,{color:"red"},{default:p((()=>[u(S,{label:"汽泡上中"})])),_:1})])),_:1}),u(o,{class:"mx-32"},{default:p((()=>[u(T,{position:"tr",color:"primary",text:""},{default:p((()=>[u(S,{label:"汽泡上右"})])),_:1})])),_:1})])),_:1})])),_:1}),u(D,null,{default:p((()=>[u(S,{"font-size":24,_class:"font-weight-b",label:"不同的位置，颜色渐变等十余种属性见文档"}),u(I),u(o,{class:"flex flex-row"},{default:p((()=>[u(o,{class:"mx-32"},{default:p((()=>[u(T,{position:"bl",linear:"bottom",color:"green"},{default:p((()=>[u(S,{label:"汽泡底左"})])),_:1})])),_:1}),u(o,{class:"mx-32"},{default:p((()=>[u(T,{position:"bc",color:"black"},{default:p((()=>[u(S,{label:"汽泡底中"})])),_:1})])),_:1}),u(o,{class:"mx-32"},{default:p((()=>[u(T,{position:"br",color:"primary"},{default:p((()=>[u(S,{label:"汽泡底右"})])),_:1})])),_:1})])),_:1})])),_:1}),u(D,null,{default:p((()=>[u(S,{"font-size":24,_class:"font-weight-b",label:"自定义弹出内容,实现更复杂的布局"}),u(I),u(T,{position:"bl",width:400,linear:"bottom",color:"primary"},{label:p((()=>[u(o,{class:"flex flex-row flex-row-center-center"},{default:p((()=>[u(j,{label:"删除订单"}),u(j,{label:"申请发票"})])),_:1})])),default:p((()=>[u(S,{color:"primary",label:"点我弹出更多菜单"})])),_:1})])),_:1})])),_:1})}});export{Y as default};
