import{d as l,P as e,c as t,r as a,Q as o,R as i,o as u,a as n,w as r,b as s,u as d,k as c,e as m,f as p,F as f,N as v,n as b,L as _,t as h,m as g,j as y,O as w}from"./index-5c06cf16.js";import{t as x}from"./tm-drawer.5aba0891.js";import{t as j}from"./tm-button.5fc2eaaa.js";import{t as k}from"./tm-text.fdd4f0a8.js";import{_ as P}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import{_ as S}from"./tm-tag.vue_vue_type_script_setup_true_lang.bc11f60d.js";import{t as z}from"./tm-sheet.2873fe67.js";import{_ as C}from"./tm-image.vue_vue_type_script_setup_true_lang.f325e7c1.js";import{t as N}from"./tm-stepper.ba9614f9.js";import{_ as X,a as U}from"./tm-radio.vue_vue_type_script_setup_true_lang.8fe0c58b.js";import{_ as O}from"./tm-badge.vue_vue_type_script_setup_true_lang.03b3afc8.js";import{t as V}from"./tm-app.20954b06.js";import"./tm-translate.4fbb7927.js";import"./tm-icon.5716c798.js";import"./tm-overlay.3ea1101a.js";const B=l({__name:"tm-sku",props:{round:{type:Number,default:6},show:{type:Boolean,default:!1},color:{type:String,default:"red"},height:{type:Number,default:650},num:{type:Number,default:1},list:{type:Object,default:()=>null}},emits:["open","close","update:show","add","buy"],setup(l,{emit:V}){const B=l,K=e("tmuiSysInfo",t((()=>({bottom:0,height:750,width:_(750),top:0,isCustomHeader:!1,sysinfo:null})))),Z=a(B.show),A=a(160),F=t((()=>B.height+A.value+uni.$tm.u.torpx(K.value.bottom)));a(null);const M=a([]),R=a(B.num);let J=o(B.list);const L=a(B.list),T=t((()=>{var l,e,t,a;if(0==M.value.length)return 0;if(!B.list)return 0;if(!(null==(l=B.list)?void 0:l.data))return 0;if(0==B.list.data.length)return 0;if(!(null==(t=null==(e=B.list)?void 0:e.product)?void 0:t.length))return 0;let o=null==(a=B.list)?void 0:a.product.filter((l=>l.id==M.value.join("-")));return o.length&&o[0].max_buy||0})),$=t((()=>{var l,e;if(!(null==(l=B.list)?void 0:l.product)||!B.list.data)return null;let t=null==(e=B.list)?void 0:e.product.filter((l=>l.id==M.value.join("-")));return t.length?t[0]:null}));function E(){if(!B.list)return;let l=B.list.data.length;M.value=new Array(l).fill("")}function H(){var l,e;M.value.length===(null==(e=null==(l=B.list)?void 0:l.data)?void 0:e.length)?(V("add",{buyNumber:R.value,data:o($.value)}),g((()=>{Z.value=!1}))):h({title:"未选择完整",icon:"none"})}function I(){var l,e;M.value.length===(null==(e=null==(l=B.list)?void 0:l.data)?void 0:e.length)?(V("buy",{buyNumber:R.value,data:o($.value)}),g((()=>{Z.value=!1}))):h({title:"未选择完整",icon:"none"})}function Q(l){}function Y(){var l,e;M.value.length===(null==(e=null==(l=B.list)?void 0:l.data)?void 0:e.length)||h({title:"未选择完整",icon:"none"})}function D(){V("close"),V("update:show",!1)}function W(){V("open"),V("update:show",!0)}return E(),i((()=>B.num),(()=>{R.value=B.num})),i((()=>B.list),(()=>{J=uni.$tm.u.deepClone(o(B.list)),L.value=J,E()}),{deep:!0}),i((()=>B.show),(()=>{Z.value=B.show})),(l,e)=>{const t=y;return u(),n(x,{round:B.round,ref:"drawer",height:d(F),"onUpdate:show":e[1]||(e[1]=l=>Z.value=l),show:Z.value,onClose:D,"ok-color":B.color,onOpen:W,"hide-header":!0,closable:!0,"foot-height":A.value},{default:r((()=>[s(t,{class:"pa-24"},{default:r((()=>[s(t,{class:"flex flex-row flex-row-center-start"},{default:r((()=>[d($)?(u(),n(C,{key:0,preview:!0,width:120,height:120,src:d($).img},null,8,["src"])):c("v-if",!0),s(t,{class:"pl-24"},{default:r((()=>{var l,e,a;return[s(t,{class:"flex flex-row flex-row-center-start"},{default:r((()=>{var l;return[s(k,{"font-size":24,color:B.color,label:"￥"},null,8,["color"]),s(k,{"font-size":42,_class:"text-weight-b",color:B.color,label:(null==(l=d($))?void 0:l.salePrice)??"0"},null,8,["color","label"]),s(z,{linear:"left","linear-deep":"accent",color:B.color,margin:[24,0],padding:[18,4],round:24},{default:r((()=>[s(t,{class:"flex flex-row flex-row-center-start"},{default:r((()=>{var l;return[s(k,{"font-size":24,label:"优惠价￥"}),s(k,{"font-size":42,_class:"text-weight-b",label:(null==(l=d($))?void 0:l.price)??"0"},null,8,["label"])]})),_:1})])),_:1},8,["color"])]})),_:1}),s(k,{color:"grey","font-size":24,label:d($)&&(null==(l=d($))?void 0:l.num)>0?"有货 | 库存 "+(null==(e=d($))?void 0:e.num):"无货"},null,8,["label"]),s(k,{color:"grey","font-size":24,label:(null==(a=d($))?void 0:a.title)??""},null,8,["label"])]})),_:1})])),_:1}),s(P,{margin:[0,24]}),s(t,{class:"mb-24"},{default:r((()=>[s(t,{onClick:Y,class:"flex flex-row flex-row-center-between mb-24"},{default:r((()=>[s(k,{"font-size":28,label:"购买数量"}),s(N,{onChange:Q,max:d(T),disabled:R.value>d(T),modelValue:R.value,"onUpdate:modelValue":e[0]||(e[0]=l=>R.value=l),"default-value":R.value},null,8,["max","disabled","modelValue","default-value"])])),_:1}),s(P,{margin:[0,0]})])),_:1}),L.value?(u(),n(t,{key:0},{default:r((()=>[(u(!0),m(f,null,p(L.value.data,((l,e)=>(u(),n(t,{class:"",key:e},{default:r((()=>[s(k,{_class:"mb-24","font-size":28,label:l.title},null,8,["label"]),(null==l?void 0:l.children)?(u(),n(X,{key:0,modelValue:M.value[e],"onUpdate:modelValue":l=>M.value[e]=l,direction:"row"},{default:r((()=>[(u(!0),m(f,null,p(l.children,((l,e)=>(u(),n(U,{disabled:!l.num,value:l.id,key:e,custom:!1},{default:r((({checked:e})=>[s(O,{count:l.num?0:"缺货"},{default:r((()=>[s(t,{class:w([l.num?"":"opacity-6",""])},{default:r((()=>[s(S,{shadow:0,color:e.checked&&l.num?"red":"grey",round:24,"font-size":26,size:"n",outlined:"",text:"",label:l.title},null,8,["color","label"])])),_:2},1032,["class"])])),_:2},1032,["count"])])),_:2},1032,["disabled","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])):c("v-if",!0),s(P,{margin:[0,24]})])),_:2},1024)))),128))])),_:1})):c("v-if",!0)])),_:1}),v(l.$slots,"default")])),foot:r((()=>[s(t,{class:"mb-20 px-24"},{default:r((()=>[s(t,{style:{height:"40rpx"},class:"flex flex-row flex-row-center-center"},{default:r((()=>{var l;return[(null==(l=d($))?void 0:l.tip)?(u(),n(k,{key:0,color:B.color,label:d($).tip+"，"},null,8,["color","label"])):c("v-if",!0),R.value>d(T)&&R.value&&d($)?(u(),n(k,{key:1,color:B.color,label:"库存不足"},null,8,["color"])):c("v-if",!0)]})),_:1}),s(t,{class:"flex flex-row"},{default:r((()=>[s(t,{style:{width:"363rpx"}},{default:r((()=>[s(j,{onClick:H,block:"","is-disabled-round-andriod":!0,_class:"round-l-24 round-r-0",linear:"left","linear-deep":"accent",color:B.color,"font-size":32,label:"加购物车",height:80},null,8,["color"])])),_:1}),s(t,{style:{width:"363rpx"}},{default:r((()=>{var l,e,t,a;return[s(j,{onClick:I,block:"",disabled:!d($)||0==R.value||R.value>d(T)||!(null==(l=d($))?void 0:l.num),"is-disabled-round-andriod":!0,_class:"round-r-24 round-l-0",linear:"left","linear-deep":"accent",color:B.color,"font-size":32,label:(null==(e=d($))?void 0:e.num)?"购买"+((null==(t=d($))?void 0:t.salePrice)?"￥"+(null==(a=d($))?void 0:a.salePrice)*R.value:""):"缺货，提醒我",height:80},null,8,["disabled","color","label"])]})),_:1})])),_:1})])),_:1}),s(t,{style:b({height:d(K).bottom+"px"})},null,8,["style"])])),_:3},8,["round","height","show","ok-color","foot-height"])}}}),K=l({__name:"sku",setup(l){const e=a(!1),t=a({data:[{title:"颜色类型",id:"test",children:[{title:"白色",id:"a",num:5},{title:"黑色",id:"b",num:5}]},{title:"尺码表",id:"model",children:[{title:"XS",id:"a",num:5},{title:"S",id:"b",num:5}]},{title:"款式",id:"style",children:[{title:"套装",id:"a",num:0},{title:"单件",id:"b",num:5}]}],product:[{id:"a-a-a",title:"白色-XS-套装",num:0,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i1/2328862868/O1CN01b5pglN1X3ahprbU9P_!!2328862868.jpg"},{id:"a-a-b",title:"白色-XS-单件",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i3/2328862868/O1CN01UBMJfy1X3af4Lc3ME_!!2328862868.jpg"},{id:"a-b-a",title:"白色-S-套装",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i1/TB1fw40oAvoK1RjSZPfSutPKFXa.jpg"},{id:"a-b-b",title:"白色-S-单件",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i1/398719215/O1CN01zgD6Xi2HwWY8U589Z_!!398719215.jpg"},{id:"b-a-a",title:"黑色-XS-套装",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i1/TB1fw40oAvoK1RjSZPfSutPKFXa.jpg"},{id:"b-a-b",title:"黑色-XS-单件",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i3/2328862868/O1CN01UBMJfy1X3af4Lc3ME_!!2328862868.jpg"},{id:"b-b-a",title:"黑色-S-套装",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i1/2328862868/O1CN01b5pglN1X3ahprbU9P_!!2328862868.jpg"},{id:"b-b-b",title:"黑色-S-单件",num:5,max_buy:3,price:56.9,salePrice:54,tip:"当前可省10元",img:"https://gw.alicdn.com/bao/uploaded/i1/TB1fw40oAvoK1RjSZPfSutPKFXa.jpg"}]}),o=a(2);function i(l){console.log(l)}return(l,a)=>{const d=y;return u(),n(V,null,{default:r((()=>[s(d,{class:"pa-32"},{default:r((()=>[s(j,{onClick:a[0]||(a[0]=l=>{e.value=!0}),label:"打开购买窗口",block:"",linear:"left","linear-deep":"accent",color:"red","font-size":32,round:24})])),_:1}),s(z,null,{default:r((()=>[s(k,{label:"这个sku组件，商品的可选属性是不限制的，不管是显示尺码，颜色，型号，还是就显示一个颜色。可以随意的控制。"})])),_:1}),s(B,{onBuy:i,num:o.value,height:900,"sku-map":[{key:"size",value:"商品尺码"},{key:"color",value:"商品颜色"},{key:"model",value:"商品型号"}],list:t.value,show:e.value,"onUpdate:show":a[1]||(a[1]=l=>e.value=l)},null,8,["num","list","show"])])),_:1})}}});export{K as default};