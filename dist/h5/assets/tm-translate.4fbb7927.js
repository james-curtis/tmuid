import{d as e,c as a,r as t,R as i,p as l,M as u,o as s,a as n,w as r,n as o,O as d,u as v,N as f,k as p,g as c,m,j as h,_ as g}from"./index-5c06cf16.js";import{c as y,f as x,g as b}from"./tm-app.20954b06.js";const w=g(e({__name:"tm-translate",props:{...y,duration:{type:Number,default:300},delay:{type:Number,default:0},name:{type:String,default:"fade"},autoPlay:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},height:{type:[Number,String],default:0},width:{type:[Number,String],default:0},reverse:{type:[Boolean,String],default:!1},initByWechat:{type:Boolean,default:!1}},emits:["start","end","click"],setup(e,{expose:g,emit:y}){var w;const S=e;function N(e){y("click",e)}null==(w=c())||w.proxy;const _=a((()=>x(S))),k=a((()=>b(S))),B=a((()=>S.height&&Number(S.height)?String(S.height).indexOf("px")>-1||String(S.height).indexOf("rpx")>-1?String(S.height):String(S.height)+"rpx":0)),T=a((()=>S.width?String(S.width).indexOf("px")>-1||String(S.width).indexOf("rpx")>-1?S.width:S.width+"rpx":0)),O=a((()=>S.name||"fade")),j=t(S.duration),$=a((()=>S.reverse)),I=a((()=>$.value?"-reverse":"")),P=t(O.value+I.value),W=t(0),A=t(Number(uni.$tm.u.getUid(3))),C=t(!1);function D(){m((()=>{C.value=!0,1!=S.autoPlay||S.disabled||m((()=>E()))}))}function E(){1!=S.disabled&&(W.value=0,clearTimeout(A.value),A.value=setTimeout((()=>{$.value?P.value=O.value:P.value=O.value+"-reverse",A.value=setTimeout((()=>{y("end")}),S.duration)}),20))}function F(){1!=S.disabled&&(clearTimeout(A.value),W.value=0)}function M(){F(),W.value=0}return t(null),i([()=>S.initByWechat,()=>S.name],(()=>{M()})),i([()=>S.name],(()=>{P.value=O.value+I.value})),g({init:D,play:E,stop:F,reset:M}),l((()=>D())),u((()=>{clearTimeout(A.value),W.value=0})),(e,a)=>{const t=h;return s(),n(t,{ref:"bodywk",onClick:N,class:d([v(k),"overflow"]),style:o([v(B)?{height:v(B)}:"",v(T)?{width:v(T)}:"",v(_)])},{default:r((()=>[C.value?(s(),n(t,{key:0,ref:"nvueElAni",style:o({transitionDuration:`${j.value}ms`,transitionTimingFunction:"ease"}),class:d(["flex-col flex ",P.value,v(k)])},{default:r((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class"])):p("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6b9896e4"]]);export{w as t};
