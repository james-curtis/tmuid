import{d as e,r as l,c as a,o as t,a as o,w as u,b as n,u as r,e as s,f as b,F as i,i as v}from"./index-6b165856.js";import{t as f}from"./tm-app.d6cf2f93.js";import{t as m}from"./tm-sheet.3639b36a.js";import{t as c}from"./tm-text.6c910eb0.js";import{_ as d}from"./tm-checkbox.vue_vue_type_script_setup_true_lang.18bf0ebb.js";import{_}from"./tm-checkbox-group.vue_vue_type_script_setup_true_lang.f290cdb3.js";import{_ as p}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";import"./tm-icon.65b53dc0.js";import"./tm-translate.1f1c80c0.js";const g=e({__name:"checkbox",setup(e){const g=l([{label:"香蕉",value:"banner"},{label:"数字1",value:2},{label:"数字2",value:8},{label:"其它",value:"other"}]),h=l(["banner"]),x=l(["banner"]),w=a((()=>x.value.join(" "))),j=a((()=>h.value.join(","))),V=l(!0),k=l(!1);function z(e){0==e?(x.value=[],V.value=!1):1==e&&(x.value=["apple","banner","test","other"],V.value=!1)}function y(e){0==e.length?(V.value=!1,k.value=!1):4==e.length?(V.value=!1,k.value=!0):(V.value=!0,k.value=!0)}function C(){return new Promise((e=>{setTimeout((function(){e(!0)}),1e3)}))}return h.value=[3,4],setTimeout((function(){g.value=[{label:"香蕉2",value:3},{label:"其它3",value:"other"},{label:"其它34",value:4}]}),3200),(e,l)=>{const a=v;return t(),o(f,null,{default:u((()=>[n(m,null,{default:u((()=>[n(c,{"font-size":24,_class:"font-weight-b",label:"基础示例,更多见文档"}),n(p),n(a,{class:"flex flex-row"},{default:u((()=>[n(d,{outlined:"",label:"苹果"}),n(d,{color:"orange",label:"香蕉"}),n(d,{color:"green",label:"其它水果"})])),_:1})])),_:1}),n(m,{margin:[32,0]},{default:u((()=>[n(c,{"font-size":24,_class:"font-weight-b",label:"选择组"}),n(p),n(a,{class:"pb-24"},{default:u((()=>[n(c,{label:r(w)?r(w):"请选择"},null,8,["label"])])),_:1}),n(d,{indeterminate:V.value,modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),onChange:z,value:!0,label:"全选"},null,8,["indeterminate","modelValue"]),n(_,{onChange:y,modelValue:x.value,"onUpdate:modelValue":l[1]||(l[1]=e=>x.value=e)},{default:u((()=>[n(d,{value:"apple",label:"苹果"}),n(d,{color:"orange",value:"banner",label:"香蕉"}),n(d,{color:"pink",value:"test",label:"测试项"}),n(d,{color:"green",value:"other",label:"其它水果"})])),_:1},8,["modelValue"])])),_:1}),n(m,{margin:[32,0]},{default:u((()=>[n(c,{"font-size":24,_class:"font-weight-b",label:"常规赋值测试3.2秒后观察自动选中结果"}),n(p),n(a,{class:"pb-24"},{default:u((()=>[n(c,{label:r(j)},null,8,["label"])])),_:1}),n(_,{onChange:y,modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=e=>h.value=e)},{default:u((()=>[(t(!0),s(i,null,b(g.value,((e,l)=>(t(),o(d,{key:l,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(m,null,{default:u((()=>[n(c,{"font-size":24,_class:"font-weight-b",label:"一些样式属性"}),n(p),n(a,{class:"flex flex-row flex-wrap"},{default:u((()=>[n(d,{size:54,fontSize:28,value:"apple",label:"大小"}),n(d,{round:10,color:"orange",value:"banner",label:"形状"}),n(d,{color:"orange",disabled:"",value:"banner",label:"禁用"}),n(d,{icon:"tmicon-position-fill",color:"green",value:"other",label:"选中图标"}),n(d,{border:1,linear:"bottom",defaultChecked:!0,color:"green",value:"other",label:"渐变"}),n(d,{"border-style":"dashed",color:"green",value:"other",label:"虚线边框"})])),_:1})])),_:1}),n(m,{margin:[32,0]},{default:u((()=>[n(c,{"font-size":24,_class:"font-weight-b",label:"选中前的勾子"}),n(p),n(a,{class:"flex flex-row flex-wrap"},{default:u((()=>[n(d,{beforChecked:C,label:"异步选中"})])),_:1})])),_:1})])),_:1})}}});export{g as default};