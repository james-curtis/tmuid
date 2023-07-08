import{d as t,c as e,r as l,o,a as i,w as r,b as a,u as h,O as p,n as s,e as u,f as d,F as n,k as m,U as c,a0 as f,g,m as x,aJ as y,j as w,X as b,a6 as v,aK as _}from"./index-5c06cf16.js";import{t as $}from"./tm-app.20954b06.js";import{t as k}from"./tm-sheet.2873fe67.js";import{t as I}from"./tm-text.fdd4f0a8.js";import{_ as B}from"./tm-image.vue_vue_type_script_setup_true_lang.f325e7c1.js";import"./tm-icon.5716c798.js";import"./tm-translate.4fbb7927.js";var L=(t=>(t.img="img",t.video="video",t))(L||{});const j=t({__name:"tm-carousel",props:{followTheme:{type:Boolean,default:!0},color:{type:String,default:"primary"},width:{type:Number,default:750},height:{type:Number,default:500},round:{type:Number,default:0},margin:{type:Array,default:()=>[0,0]},list:{type:Array,default:()=>[]},rangKey:{type:String,default:"url"},defaultValue:{type:Number,default:0},dotPosition:{type:String,default:"bottom"},align:{type:String,default:"center"},model:{type:String,default:"number"},interval:{type:Number,default:5e3},duration:{type:Number,default:500},circular:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},acceleration:{type:Boolean,default:!1},disableProgrammaticAnimation:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},displayMultipleItems:{type:Number,default:1},skipHiddenItemLayout:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},touchable:{type:Boolean,default:!1},indicatorDots:{type:Boolean,default:!0},showLoad:{type:Boolean,default:!0}},emits:["change","click"],setup(t,{emit:$}){var I;const j=t;null==(I=g())||I.proxy;const P=e((()=>{let t=[];return j.list.forEach((e=>{"string"==typeof e?t.push({url:e,type:L.img}):"object"==typeof e&&t.push({url:e[j.rangKey],type:(null==e?void 0:e.type)??L.img,img:(null==e?void 0:e.img)??"",...e})})),t})),C=l(j.defaultValue||0),N=l(j.defaultValue||0),T=e((()=>j.model)),z=e((()=>j.dotPosition)),A=e((()=>j.align)),S=e((()=>j.autoplay));function D(t){var e,l;S.value||(C.value=null==(e=null==t?void 0:t.detail)?void 0:e.current),N.value=null==(l=null==t?void 0:t.detail)?void 0:l.current,x((()=>{$("change",N.value)}))}function E(t){N.value=t,S.value||(C.value=t)}return(t,e)=>{const l=v,g=_,x=y,I=w,H=b;return o(),i(I,{class:"flex flex-col flex-col-center-center"},{default:r((()=>[a(I,{class:p(["relative overflow",[`round-${j.round} mx-${j.margin[0]} my-${j.margin[1]}`]]),style:s([{width:`${j.width}rpx`,height:`${j.height}rpx`}])},{default:r((()=>[a(x,{"indicator-dots":!1,interval:j.interval,duration:j.duration,circular:j.circular,vertical:j.vertical,acceleration:j.acceleration,disableProgrammaticAnimation:j.disableProgrammaticAnimation,autoplay:h(S),displayMultipleItems:j.displayMultipleItems,skipHiddenItemLayout:j.skipHiddenItemLayout,disableTouch:j.disableTouch,touchable:j.touchable,onChange:D,class:p(`round-${j.round}`),current:C.value,style:s([{width:`${j.width}rpx`,height:`${j.height}rpx`}])},{default:r((()=>[(o(!0),u(n,null,d(h(P),((t,e)=>(o(),i(g,{class:p(`round-${j.round}`),onClick:t=>$("click",e),key:e,style:s([{width:`${j.width}rpx`,height:`${j.height}rpx`}])},{default:r((()=>[t.type==h(L).img?(o(),i(B,{key:0,round:j.round,userInteractionEnabled:!1,showLoad:j.showLoad,src:t.url,width:j.width,height:j.height},null,8,["round","showLoad","src","width","height"])):m("v-if",!0),t.type==h(L).video&&t.img&&N.value!=e?(o(),i(B,{key:1,round:j.round,userInteractionEnabled:!1,showLoad:j.showLoad,src:t.img,width:j.width,height:j.height},null,8,["round","showLoad","src","width","height"])):m("v-if",!0),t.type==h(L).video&&N.value===e?(o(),i(l,{key:2,userInteractionEnabled:!1,id:"video",src:t.url,style:s([{width:`${j.width}rpx`,height:`${j.height}rpx`}]),autoplay:N.value===e,class:p(`round-${j.round}`)},null,8,["src","style","autoplay","class"])):m("v-if",!0)])),_:2},1032,["class","onClick","style"])))),128))])),_:1},8,["interval","duration","circular","vertical","acceleration","disableProgrammaticAnimation","autoplay","displayMultipleItems","skipHiddenItemLayout","disableTouch","touchable","class","current","style"]),m(" dot "),"dot"==h(T)&&j.indicatorDots?(o(),i(I,{key:0,class:p(["absolute",["bottom"==h(z)||"top"==h(z)?"flex flex-row ":"","left"==h(z)||"right"==h(z)?"flex flex-col ":"","center"==h(A)?"flex-center":"","left"==h(A)?"flex-row-center-start ":"","right"==h(A)?"flex-row-center-end ":"","left"==h(z)&&"left"==h(A)?"ml-12 mt-24":"","left"==h(z)&&"right"==h(A)?"ml-12 pb-24":"","right"==h(z)&&"left"==h(A)?"pr-12 mt-24":"","right"==h(z)&&"right"==h(A)?"pr-12 pb-24":"","bottom"==h(z)&&"left"==h(A)?"ml-12 mb-24":"","bottom"==h(z)&&"right"==h(A)?"pr-12 mb-24":"","top"==h(z)&&"left"==h(A)?"ml-12 ":"","top"==h(z)&&"right"==h(A)?"pr-12 ":""]]),style:s(["bottom"==h(z)?{left:"0px",bottom:"0px",width:`${j.width}rpx`,height:"60rpx"}:"","top"==h(z)?{left:"0px",top:"0px",width:`${j.width}rpx`,height:"60rpx"}:"","left"==h(z)?{left:"0px",top:"0px",width:"60rpx",height:`${j.height}rpx`}:"","right"==h(z)?{right:"0px",top:"0px",width:"60rpx",height:`${j.height}rpx`}:""])},{default:r((()=>[(o(!0),u(n,null,d(h(P),((t,e)=>(o(),i(k,{margin:[10,10],"follow-theme":N.value==e&&j.followTheme,padding:[0,0],round:10,onClick:t=>E(e),color:N.value==e?j.color:"white",key:e,width:18,height:18},null,8,["follow-theme","onClick","color"])))),128))])),_:1},8,["class","style"])):m("v-if",!0),m(" rect "),"rect"==h(T)&&j.indicatorDots?(o(),i(I,{key:1,class:p(["absolute",["bottom"==h(z)||"top"==h(z)?"flex flex-row ":"","left"==h(z)||"right"==h(z)?"flex flex-col ":"","center"==h(A)?"flex-center":"","left"==h(A)?"flex-row-center-start ":"","right"==h(A)?"flex-row-center-end ":"","left"==h(z)&&"left"==h(A)?"ml-12 mt-24":"","left"==h(z)&&"right"==h(A)?"ml-12 pb-24":"","right"==h(z)&&"left"==h(A)?"pr-12 mt-24":"","right"==h(z)&&"right"==h(A)?"pr-12 pb-24":"","bottom"==h(z)&&"left"==h(A)?"ml-12 mb-24":"","bottom"==h(z)&&"right"==h(A)?"pr-12 mb-24":"","top"==h(z)&&"left"==h(A)?"ml-12 ":"","top"==h(z)&&"right"==h(A)?"pr-12 ":""]]),style:s(["bottom"==h(z)?{left:"0px",bottom:"0px",width:`${j.width}rpx`,height:"60rpx"}:"","top"==h(z)?{left:"0px",top:"0px",width:`${j.width}rpx`,height:"60rpx"}:"","left"==h(z)?{left:"0px",top:"0px",width:"60rpx",height:`${j.height}rpx`}:"","right"==h(z)?{right:"0px",top:"0px",width:"60rpx",height:`${j.height}rpx`}:""])},{default:r((()=>[(o(!0),u(n,null,d(h(P),((t,e)=>(o(),i(k,{round:0==e||e==h(P).length-1?10:0,margin:"left"==h(z)||"right"==h(z)?[10,0]:[0,10],padding:[0,0],onClick:t=>E(e),"follow-theme":N.value==e&&j.followTheme,color:N.value==e?j.color:"white",key:e,width:"left"==h(z)||"right"==h(z)?6:36,height:"left"==h(z)||"right"==h(z)?36:6},null,8,["round","margin","onClick","follow-theme","color","width","height"])))),128))])),_:1},8,["class","style"])):m("v-if",!0),m(" number "),"number"==h(T)&&j.indicatorDots?(o(),i(I,{key:2,class:p(["absolute",["bottom"==h(z)||"top"==h(z)?"flex flex-row ":"","left"==h(z)||"right"==h(z)?"flex flex-col ":"","center"==h(A)?"flex-center":"","left"==h(A)?"flex-row-center-start ":"","right"==h(A)?" flex-row-center-end ":"","left"==h(z)&&"left"==h(A)?"ml-12 mt-24":"","left"==h(z)&&"right"==h(A)?"ml-12 pb-24":"","right"==h(z)&&"left"==h(A)?"pr-12 mt-24":"","right"==h(z)&&"right"==h(A)?"pr-12 pb-24":"","bottom"==h(z)&&"left"==h(A)?"ml-12 mb-24":"","bottom"==h(z)&&"right"==h(A)?"pr-12 mb-24 ":"","top"==h(z)&&"left"==h(A)?"ml-12 ":"","top"==h(z)&&"right"==h(A)?"pr-12 ":""]]),style:s(["bottom"==h(z)?{left:"0px",bottom:"0px",width:`${j.width}rpx`,height:"60rpx"}:"","top"==h(z)?{left:"0px",top:"0px",width:`${j.width}rpx`,height:"60rpx"}:"","left"==h(z)?{left:"0px",top:"0px",width:"60rpx",height:`${j.height}rpx`}:"","right"==h(z)?{right:"0px",top:"0px",width:"60rpx",height:`${j.height}rpx`}:""])},{default:r((()=>[a(I,{class:p(["round-10",["left"==h(z)||"right"==h(z)?"px-5 py-24 ":"","bottom"==h(z)||"top"==h(z)?"px-24 py-5 mx-32":""]]),style:{"background-color":"rgba(0, 0, 0, 0.4)","font-size":"0px"}},{default:r((()=>[a(H,{style:{"font-size":"22rpx",color:"white"}},{default:r((()=>[c(f(N.value+1)+"/"+f(h(P).length),1)])),_:1})])),_:1},8,["class"])])),_:1},8,["class","style"])):m("v-if",!0)])),_:1},8,["class","style"])])),_:1})}}}),P=t({__name:"carousel",setup(t){const e=["https://picsum.photos/200/300?id=43335","https://picsum.photos/200/300?id=433","https://picsum.photos/200/300?id=439","https://picsum.photos/200/300?id=459"],h=l([{test:"https://picsum.photos/200/300?id=43335"},{test:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",img:"https://picsum.photos/200/300?id=43335",type:"video"},"https://picsum.photos/200/300?id=433"]);return(t,l)=>(o(),i($,null,{default:r((()=>[a(k,null,{default:r((()=>[a(I,{"font-size":24,_class:"font-weight-b",label:"更多指示点位置，属性等请看文档"})])),_:1}),a(j,{autoplay:"",margin:[0,16],round:3,width:686,height:300,list:e}),a(k,null,{default:r((()=>[a(I,{"font-size":24,_class:"font-weight-b",label:"指示点对齐"})])),_:1}),a(j,{autoplay:"",margin:[0,16],align:"right",round:3,width:686,height:300,list:e}),a(k,null,{default:r((()=>[a(I,{"font-size":24,_class:"font-weight-b",label:"指示位置，包含视频播放"})])),_:1}),a(j,{rangKey:"test",autoplay:"",margin:[0,16],dotPosition:"right",vertical:"",model:"rect",round:3,width:686,height:300,list:h.value},null,8,["list"])])),_:1}))}});export{P as default};