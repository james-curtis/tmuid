import{d as e,r as l,c as a,o as t,a as o,w as u,b as s,u as r,i as n}from"./index-6b165856.js";import{t as d}from"./tm-app.d6cf2f93.js";import{t as m}from"./tm-sheet.3639b36a.js";import{t as b}from"./tm-text.6c910eb0.js";import{_ as i}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";import{_ as p,a as _}from"./tm-radio.vue_vue_type_script_setup_true_lang.b4efeb1c.js";import"./tm-icon.65b53dc0.js";const f=e({__name:"radio",setup(e){const f=l(null),c=l("banner"),v=a((()=>c.value));function g(){return new Promise((e=>{setTimeout((function(){e(!0)}),1e3)}))}return(e,l)=>{const a=n;return t(),o(d,null,{default:u((()=>[s(m,null,{default:u((()=>[s(b,{"font-size":24,_class:"font-weight-b",label:"基础示例,更多见文档"}),s(i),s(a,{class:"pb-24"},{default:u((()=>[s(b,{label:r(v)?r(v):"请选择"},null,8,["label"])])),_:1}),s(p,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e)},{default:u((()=>[s(_,{outlined:"",value:"apple",label:"苹果基础示例"}),s(_,{color:"orange",value:"banner",label:"香蕉"}),s(_,{color:"pink",value:"test",label:"测试项"}),s(_,{color:"green",value:"other",label:"其它水果"})])),_:1},8,["modelValue"])])),_:1}),s(m,{margin:[32,0]},{default:u((()=>[s(b,{"font-size":24,_class:"font-weight-b",label:"其它属性和checkbox一样，拥有丰富的属性设置"}),s(i),s(a,{class:"pb-24"},{default:u((()=>[s(b,{label:r(v)?r(v):"请选择"},null,8,["label"])])),_:1}),s(p,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value=e)},{default:u((()=>[s(_,{beforChecked:g,value:"apple",label:"苹果异步选中"}),s(_,{color:"orange",value:"banner",label:"香蕉"}),s(_,{disabled:"",color:"pink",value:"test",label:"测试项"}),s(_,{"border-style":"dashed",color:"green",value:"other",label:"其它水果"})])),_:1},8,["modelValue"])])),_:1}),s(m,null,{default:u((()=>[s(b,{"font-size":24,_class:"font-weight-b",label:"按钮样式"}),s(i),s(p,{model:"button",modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=e=>f.value=e)},{default:u((()=>[s(_,{value:!0,label:"选我呀"}),s(_,{value:!1,label:"不要选我呀"})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});export{f as default};