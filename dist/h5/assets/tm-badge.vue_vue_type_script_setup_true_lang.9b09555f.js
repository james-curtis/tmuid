var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{d as s,c as i,o as u,a as d,w as f,M as p,j as c,u as b,N as m,b as y,i as h}from"./index-6b165856.js";import{c as g,f as w,g as x}from"./tm-app.d6cf2f93.js";import{t as S}from"./tm-sheet.3639b36a.js";import{t as _}from"./tm-text.6c910eb0.js";import{t as v}from"./tm-icon.65b53dc0.js";const z=s({__name:"tm-badge",props:(k=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&l(e,r,t[r]);return e})({},g),j={round:{type:[Number],default:6},border:{type:[Number],default:0},margin:{type:Array,default:()=>[0,0]},padding:{type:Array,default:()=>[0,0]},transprent:{type:[Boolean],default:!1},label:{type:String,default:""},fontSize:{type:Number,default:22},status:{type:[Boolean],default:!1},dot:{type:[Boolean],default:!1},icon:{type:[String],default:""},count:{type:[Number,String],default:0},maxCount:{type:[Number],default:999},top:{type:[Number],default:0},right:{type:[Number],default:0}},t(k,r(j))),emits:["click"],setup(e,{emit:t}){const r=e,a=i((()=>w(r))),o=i((()=>x(r))),n=i((()=>isNaN(parseInt(String(r.count))))),l=i((()=>!!(r.dot||r.icon||r.count))),s=i((()=>{if(r.status||r.dot)return{w:12,h:12,pr:6,t:3};if(r.icon){let e=1.6*r.fontSize;return{w:e,h:e,pr:12,t:10}}return isNaN(parseInt(String(r.count)))?{w:0,h:0,pr:10,t:10}:r.count<10?{w:30,h:30,pr:12,t:10}:r.count>=10?{w:0,h:0,pr:10,t:10}:{w:0,h:0,pr:0,t:0}})),g=i((()=>r.icon)),z=i((()=>r.dot)),k=i((()=>r.count));return(e,i)=>{const w=h;return u(),d(w,{onClick:i[0]||(i[0]=e=>t("click",e)),class:m(["flex relative",[r.status?"flex-row flex-row-center-center mx-8":""]])},{default:f((()=>[r.status?c("v-if",!0):(u(),d(w,{key:0,eventPenetrationEnabled:"true"},{default:f((()=>[p(e.$slots,"default")])),_:3})),b(l)?(u(),d(w,{key:1,eventPenetrationEnabled:"true",class:m([(b(z)||b(k)||b(g))&&!r.status?"absolute flex-top-start-end r-0":"",r.top?`t-${String(r.top)}`:"",r.right?`r-${String(r.right)}`:""]),style:{zIndex:10}},{default:f((()=>[y(S,{color:r.color,_class:[b(o),"flex-center flex-col"],_style:[b(a),{flexShrink:1}],followTheme:r.followTheme,dark:r.dark,round:r.round,shadow:r.shadow,outlined:r.outlined,border:r.border,borderStyle:r.borderStyle,borderDirection:r.borderDirection,text:r.text,transprent:r.transprent,linear:r.linear,linearDeep:r.linearDeep,width:b(s).w,height:b(s).h,margin:r.margin,padding:r.padding},{default:f((()=>[b(k)>0&&!b(n)?(u(),d(_,{key:0,color:"white","font-size":r.fontSize,_class:0==b(s).h?"py-3 px-6":"",label:b(k)>r.maxCount?r.maxCount+"+":b(k)},null,8,["font-size","_class","label"])):c("v-if",!0),b(k)&&b(n)?(u(),d(_,{key:1,color:"white","font-size":r.fontSize,_class:0==b(s).h?"py-3 px-6":"",label:b(k)},null,8,["font-size","_class","label"])):c("v-if",!0),b(g)?(u(),d(v,{key:2,color:"white","font-size":r.fontSize,name:b(g)},null,8,["font-size","name"])):c("v-if",!0)])),_:1},8,["color","_class","_style","followTheme","dark","round","shadow","outlined","border","borderStyle","borderDirection","text","transprent","linear","linearDeep","width","height","margin","padding"])])),_:1},8,["class"])):c("v-if",!0),r.status?(u(),d(_,{key:2,eventPenetrationEnabled:"true","font-size":r.fontSize,_class:"ml-10",label:r.label},null,8,["font-size","label"])):c("v-if",!0)])),_:3},8,["class"])}}});var k,j;export{z as _};