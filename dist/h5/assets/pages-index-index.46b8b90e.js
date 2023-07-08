import{d as e,r as l,c as o,o as t,a,w as r,b as n,n as i,u as s,e as u,f as m,F as c,g as d,h as p,l as f,s as h,i as x,j as b}from"./index-5c06cf16.js";import{u as g,o as w,t as _}from"./tm-app.20954b06.js";import{t as y}from"./tm-sheet.2873fe67.js";import{t as v}from"./tm-button.5fc2eaaa.js";import{t as k}from"./tm-float-button.c1e9f0e9.js";import{t as j}from"./tm-message.ac943b7d.js";import{t as S}from"./tm-input.12bd2bac.js";import{_ as C}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import{t as z}from"./tm-icon.5716c798.js";import{t as V}from"./tm-drawer.5aba0891.js";import{_ as T}from"./tm-checkbox.vue_vue_type_script_setup_true_lang.b42b8c99.js";import{t as U}from"./tm-sticky.aa31ae6e.js";import{_ as F,a as $}from"./tm-col.vue_vue_type_script_setup_true_lang.34f4ca63.js";import{_ as D}from"./tm-image.vue_vue_type_script_setup_true_lang.f325e7c1.js";import{t as M}from"./tm-text.fdd4f0a8.js";import{t as A}from"./tm-cell.e6d54032.js";import{l as H}from"./logo.c315c8a0.js";import"./tm-translate.4fbb7927.js";import"./tm-overlay.3ea1101a.js";const L=e({__name:"index",setup(e){var L;null==(L=d())||L.proxy;const B=g(),G=l(null),I=l(null),R=l(!1),W=uni.$tm.u.getWindow(),E=l(""),J=l("#60ab41"),K=l("darkGreen"),N=l(!1),O=l(B.tmuiConfig.autoDark),P=o((()=>B.tmStore.dark||B.tmStore.color?[]:["#f5f5f5","#f5f5f5"])),Q=[{url:"../changyong/index",color:"primary",icon:"tmicon-layergroup-fill",title:"index.com.tongyong",label:"index.com.tongyongSub"},{url:"../layout/index",color:"yellow",icon:"tmicon-map-fill",title:"index.com.row",label:"index.com.rowSub"},{url:"../showdata/index",color:"pink",icon:"tmicon-paperplane-fill",title:"index.com.show",label:"index.com.showSub"},{url:"../form/index",color:"cyan",icon:"tmicon-commentdots-fill",title:"index.com.form",label:"index.com.formSub"},{url:"../fankui/index",color:"red",icon:"tmicon-lightbulb-fill",title:"index.com.fd",label:"index.com.fdSub"},{url:"../daohang/index",color:"orange",icon:"tmicon-flag-fill",title:"index.com.nav",label:"index.com.navSub"},{url:"../yewu/index",color:"purple",icon:"tmicon-box-fill",title:"index.com.yewu",label:"index.com.yewuSub"},{url:"../other/index",color:"blue-grey",icon:"tmicon-smile-fill",title:"index.com.other",label:"index.com.otherSub"},{url:"../pag/index",color:"indigo",icon:"tmicon-ios-ice-cream",title:"index.com.pag",label:"index.com.pagSub"},{url:"../render/index",color:"lime",icon:"tmicon-ios-rose",title:"index.com.render",label:"index.com.renderSub"},{url:"../chart/index",color:"brown",icon:"tmicon-borderbottom-fill",title:"index.com.tubiao",label:"index.com.tubiaoSub"}];function X(){var e;null==(e=G.value)||e.setDark()}function Y(){var e;""!==E.value.trim()?p({url:"search?key="+E.value}):null==(e=I.value)||e.show({model:"error",text:"不能为空",mask:!0})}function Z(){"English-US"==f("language")?h("zh-Hans"):h("en")}function q(e){var l;null==(l=G.value)||l.setTheme(e)}function ee(){var e;J.value&&K.value?(N.value=!1,B.setTmVuetifyAddTheme(K.value,J.value)):null==(e=I.value)||e.show({model:"error",text:"必填内容",mask:!0})}function le(e){B.setTmAutoDark(e),O.value=e}return w((()=>{})),(e,l)=>{const o=x,d=b;return t(),a(_,{"show-menu":R.value,"onUpdate:showMenu":l[11]||(l[11]=e=>R.value=e),ref_key:"app",ref:G},{menu:r((({sys:e})=>[n(y,{margin:[0,0],padding:[0,0],color:"indigo",linearDeep:"accent",linear:"bottom"},{default:r((()=>[n(o,{class:"opacity-1",style:i({width:`${e.width}px`,height:`${e.height}px`}),src:`https://picsum.photos/${e.width}/${e.height}?id=${Math.random()}`,mode:"scaleToFill"},null,8,["style","src"]),n(d,{class:"absolute l-0 t-0",style:i({width:`${e.width}px`,height:`${e.height}px`})},{default:r((()=>[n(d,{style:i({height:s(W).sysinfo.statusBarHeight+"px"})},null,8,["style"]),n(d,{class:"flex flex-row flex-row-center-between py-24 px-16"},{default:r((()=>[n(M,{label:"TMUI 3.1.0"}),n(z,{onClick:l[0]||(l[0]=e=>R.value=!1),color:"white","font-size":32,name:"tmicon-times"})])),_:1}),n(A,{url:"/pages/changyong/index",color:"primary",transprent:!0,margin:[10,0],title:"通用组件"}),n(A,{url:"/pages/layout/index",color:"primary",transprent:!0,margin:[10,0],title:"布局组件"}),n(A,{url:"/pages/showdata/index",color:"primary",transprent:!0,margin:[10,0],title:"展示组件"}),n(A,{url:"/pages/form/index",color:"primary",transprent:!0,margin:[10,0],title:"表单录入"})])),_:2},1032,["style"])])),_:2},1024)])),default:r((()=>[n(U,null,{sticky:r((()=>[n(y,{text:!1,linear:s(B).tmStore.dark?"":"bottom","linear-color":s(P),margin:[0,0],followTheme:!0},{default:r((()=>[n(d,{style:i({height:s(W).statusBarHeight+"px"})},null,8,["style"]),n(d,{class:"flex-row flex-row-center-start pb-10"},{default:r((()=>[n(D,{width:108,height:67.5,src:s(H)},null,8,["height","src"]),n(d,{class:"pl-16 flex-1",style:{width:"0px"}},{default:r((()=>[n(M,{"folow-theme":!1,_class:"text-weight-b","font-size":36,label:"TMUI 3.1.07"}),n(M,{"folow-theme":!1,_class:"opacity-6",label:s(f)("index.search.subtext")},null,8,["label"])])),_:1})])),_:1}),n(d,{class:"px-0 pt-12"},{default:r((()=>[n(S,{"focus-color":"white",text:!1,color:"white",round:16,transprent:s(B).tmStore.dark,placeholder:s(f)("index.search.tips"),showClear:"",prefix:"tmicon-search",modelValue:E.value,"onUpdate:modelValue":l[1]||(l[1]=e=>E.value=e),onConfirm:Y},null,8,["transprent","placeholder","modelValue"])])),_:1})])),_:1},8,["linear","linear-color"])])),default:r((()=>[n(y,{shadow:6,margin:[24],padding:[24],round:6},{default:r((()=>[n(d,{class:"flex flex-row flex-around"},{default:r((()=>[n(v,{round:8,width:100,color:"yellow",size:"small",onClick:l[2]||(l[2]=e=>q("yellow")),label:s(f)("index.com.themeGreen")},null,8,["label"]),n(v,{round:8,width:100,color:"blue",size:"small",onClick:l[3]||(l[3]=e=>q("blue")),label:s(f)("index.com.themeBlue")},null,8,["label"]),n(v,{round:8,width:100,color:"red",size:"small",onClick:l[4]||(l[4]=e=>q("red")),label:s(f)("index.com.themeRed")},null,8,["label"]),n(v,{round:8,color:"brown",width:100,size:"small",onClick:l[5]||(l[5]=e=>N.value=!0),label:s(f)("index.com.themeCustText")},null,8,["label"]),n(v,{round:8,width:160,size:"small",onClick:l[6]||(l[6]=e=>q("")),label:s(f)("index.com.themeDefault")},null,8,["label"])])),_:1})])),_:1}),n(y,{"paren-class":"overflow",shadow:6,round:6,margin:[24,0],padding:[0,0]},{default:r((()=>[n(F,{width:702,column:3,round:6},{default:r((()=>[(t(),u(c,null,m(Q,((e,l)=>n($,{onClick:l=>{return o=e.url,void p({url:o});var o},height:190,key:l},{default:r((()=>[n(z,{color:e.color,_class:"pb-10","font-size":52,name:e.icon},null,8,["color","name"]),n(M,{"font-size":28,_class:"font-weight-b",label:s(f)(e.title)},null,8,["label"]),n(M,{color:"grey","font-size":22,_class:"font-weight-b",label:s(f)(e.label)},null,8,["label"])])),_:2},1032,["onClick"]))),64))])),_:1})])),_:1}),n(d,{class:"py-24"},{default:r((()=>[n(A,{margin:[24,0,24,16],onClick:Z,showAvatar:"",round:4,titleFontSize:30,title:s(f)("index.com.setLocal"),rightText:s(f)("language")},{avatar:r((()=>[n(z,{color:"primary","font-size":38,name:"tmicon-resource"})])),_:1},8,["title","rightText"]),n(A,{margin:[24,0],showAvatar:"",round:4,titleFontSize:30,title:s(f)("index.com.autoDark")},{avatar:r((()=>[n(z,{color:"pink","font-size":38,name:"tmicon-ios-color-palette"})])),right:r((()=>[n(T,{onChange:le,round:24,modelValue:O.value,"onUpdate:modelValue":l[7]||(l[7]=e=>O.value=e)},null,8,["modelValue"])])),_:1},8,["title"])])),_:1}),n(d,{class:"py-32 flex flex-row flex-row-center-center"},{default:r((()=>[n(d,{style:{width:"300rpx"}},{default:r((()=>[n(C,{color:"grey-2",label:s(f)("index.com.bottom")},null,8,["label"])])),_:1})])),_:1})])),_:1}),n(d,{style:{height:"100px"}}),n(k,{onClick:X,btn:{icon:"tmicon-ios-sunny"}}),n(j,{ref_key:"msg",ref:I},null,512),n(V,{show:N.value,"onUpdate:show":l[10]||(l[10]=e=>N.value=e),placement:"center",hideHeader:"",height:450,width:600},{default:r((()=>[n(d,{class:"pa-32 flex flex-col"},{default:r((()=>[n(d,{class:"text-align-center py-24"},{default:r((()=>[n(M,{_class:"text-weight-b","font-size":32,label:"自定义主题"})])),_:1}),n(S,{round:16,prefixLabel:"颜色值",placeholder:"请输入颜色值,比如:#FF00FF",border:1,showClear:"",modelValue:J.value,"onUpdate:modelValue":l[8]||(l[8]=e=>J.value=e)},null,8,["modelValue"]),n(S,{round:16,prefixLabel:"颜色名称",margin:[0,24],placeholder:"字母,如:darkGreen",border:1,showClear:"",modelValue:K.value,"onUpdate:modelValue":l[9]||(l[9]=e=>K.value=e)},null,8,["modelValue"]),n(v,{round:16,onClick:ee,block:"",label:"确认切换"})])),_:1})])),_:1},8,["show"])])),_:1},8,["show-menu"])}}});export{L as default};
