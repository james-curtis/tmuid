import{d as e,r as l,g as a,P as t,c as d,ad as n,o,a as u,w as i,u as r,k as s,Q as f,j as c,R as p,b as v,N as m,e as h,f as x,F as N,at as w,aM as y}from"./index-5c06cf16.js";import{t as S}from"./tm-app.20954b06.js";import{t as T}from"./tm-sheet.2873fe67.js";import{t as k}from"./tm-text.fdd4f0a8.js";import{t as _}from"./tm-icon.5716c798.js";import{_ as g}from"./tm-checkbox.vue_vue_type_script_setup_true_lang.b42b8c99.js";import{_ as b}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import"./tm-translate.4fbb7927.js";const I=e({__name:"child-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["change"],setup(e,{expose:p,emit:v}){var m;const h=e,x=l(null),N=(null==(m=a())?void 0:m.proxy)??null;let w=null==N?void 0:N.$parent;for(;w&&"tmTree"!=(null==w?void 0:w.TreeParaentName)&&w;)w=(null==w?void 0:w.$parent)??void 0;const y=t("TreePareantSelectedIds",l([])),S=(null==w?void 0:w.$props.color)??"primary",T=d((()=>({icon:h.data.icon??"",color:h.data.color||S,disabled:h.data.disabled??!1,text:h.data[h.fieldNames.text],id:h.data[h.fieldNames.id]}))),k=t("TreeNodeCheckable",d((()=>!0))),_=l(""),b=l(!1),I=w.$props.multiple??!0;function C(e){!I&&y.value.length>=1&&(null==w||w.checkAll(!1)),e?null==w||w.onSelected([T.value.id]):null==w||w.onUnSelected([T.value.id]),null==w||w.onCheck({checked:e,data:f(h.data)})}return n((()=>function(){let e=y.value.filter((e=>e==T.value.id));e.length>=0?_.value=e[0]:_.value="",v("change",!!_.value)}())),p({setStatus:function(){var e;!0!==T.value.disabled&&(null==(e=x.value)||e.hanlerClick())}}),(e,l)=>{const a=c;return o(),u(a,{class:"flex flex-row flex-row-center-start"},{default:i((()=>[r(k)?(o(),u(g,{key:0,followTheme:h.followTheme,closeAni:"",color:r(T).color,indeterminate:b.value,onChange:C,disabled:r(T).disabled,modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=e=>_.value=e),value:r(T)[h.fieldNames.id],ref_key:"checkboxRef",ref:x},null,8,["followTheme","color","indeterminate","disabled","modelValue","value"])):s("v-if",!0)])),_:1})}}}),C=function(e=[],l="",a=[],t="id"){void 0===a&&(a=[]),Array.isArray(l)||(l=[l]);let d=Array.from(a);for(let n=0,o=e.length;n<o;n++){if(d.push(e[n][t]),e[n].id===l[0])return d;let a=e[n].children;if(a&&a.length){let e=C(a,l,d,t="id");if(e)return e}d.pop()}return null},P=function(e=[],l="id"){let a=[];return e.forEach((e=>{a.push(e[l]),e.children&&a.push(...P(e.children,l="id"))})),a},j=function(e=[],l="",a="id"){let t=null;for(let d=0,n=e.length;d<n;d++){let n=e[d];if(n[a]==l&&n.children){t=n;break}if(n.children){let e=j(n.children,l,a="id");e&&(t=e)}}return t},A=function(e=[],l="id"){let a=[];for(let t=0,d=e.length;t<d;t++){let d=e[t];d.children&&(a.push(d[l]),a.push(...A(d.children)))}return a},$=e({__name:"parent-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},setup(e,{expose:v}){const m=e,h=l(null),{proxy:x}=a();let N=x.$parent;for(;N&&"tmTree"!=(null==N?void 0:N.TreeParaentName)&&N;)N=(null==N?void 0:N.$parent)??void 0;const w=t("TreeParentIds",l([])),y=t("TreePareantSelectedIds",l([])),S=(null==N?void 0:N.$props.color)??"primary",T=d((()=>({icon:m.data.icon??"",color:m.data.color||S,disabled:m.data.disabled??!1,text:m.data[m.fieldNames.text],id:m.data[m.fieldNames.id]}))),k=N.getAllListData(),_=t("TreeNodeCheckable",d((()=>!0))),b=l(""),I=l(!1),C=N.$props.multiple??!0,j=d((()=>P(m.data.children??[],m.fieldNames.id)));let $=A(k,m.fieldNames.id),O=new Set($);const E=j.value.filter((e=>!O.has(e))),U=j.value.filter((e=>O.has(e)));let B=w.value.filter((e=>e==T.value.id));function R(e){!C&&y.value.length>=1&&(null==N||N.checkAll(!1)),e?(null==N||N.onSelectedParent([T.value.id,...U]),null==N||N.onSelected(E)):(null==N||N.onUnSelectedParent([T.value.id,...U]),null==N||N.onUnSelected(E)),null==N||N.onCheck({checked:e,data:f(m.data)})}return j.value.length>0&&B.length>0&&C&&(null==N||N.onSelected(E),null==N||N.onSelectedParent(U)),f(T.value.id),n((()=>function(){let e=new Set([...y.value,...w.value]),l=j.value.filter((l=>e.has(l)));return l.length==j.value.length?(I.value=!1,void(b.value=T.value.id)):l.length>0?(I.value=!0,void(b.value="")):void(0==l.length&&(I.value=!1,b.value=""))}())),p((()=>b.value),((e,l)=>{let a=new Set([...y.value,...w.value]),t=j.value.filter((e=>a.has(e)));t.length!=j.value.length?(t.length>0||0==t.length)&&(null==N||N.onUnSelectedParent([T.value.id])):null==N||N.onSelectedParent([T.value.id])})),v({setStatus:function(){var e;!0!==T.value.disabled&&(null==(e=h.value)||e.hanlerClick())}}),(e,l)=>{const a=c;return o(),u(a,{class:"flex flex-row flex-row-center-start"},{default:i((()=>[r(_)?(o(),u(g,{key:0,followTheme:m.followTheme,closeAni:"",color:r(T).color,indeterminate:I.value,onChange:R,disabled:r(T).disabled,modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value=e),value:r(T)[m.fieldNames.id],ref_key:"checkboxRef",ref:h},null,8,["followTheme","color","indeterminate","disabled","modelValue","value"])):s("v-if",!0)])),_:1})}}}),O=e({__name:"tree-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["textClick"],setup(e,{emit:t}){var n;const f=e,p=l(null),m=l(null),h=(null==(n=a())?void 0:n.proxy)??null,x=l(!1);let N=h.$parent;for(;N&&"tmTree"!=(null==N?void 0:N.TreeParaentName)&&N;)N=(null==N?void 0:N.$parent)??void 0;const w=(null==N?void 0:N.$props.color)??"primary",y=d((()=>({icon:f.data.icon??"",color:f.data.color||w,disabled:f.data.disabled??!1,text:f.data[f.fieldNames.text],id:f.data[f.fieldNames.id]})));return(e,l)=>{const a=c;return o(),u(a,{class:"flex flex-row flex-row-center-start"},{default:i((()=>[f.data.children?s("v-if",!0):(o(),u(I,{key:0,onChange:l[0]||(l[0]=e=>x.value=e),ref_key:"parentNodeRefNode",ref:m,followTheme:f.followTheme,fieldNames:f.fieldNames,data:f.data},null,8,["followTheme","fieldNames","data"])),f.data.children?(o(),u($,{key:1,ref_key:"parentNodeRef",ref:p,followTheme:f.followTheme,fieldNames:f.fieldNames,data:f.data},null,8,["followTheme","fieldNames","data"])):s("v-if",!0),r(y).icon?(o(),u(_,{key:2,_class:"pr-16",color:r(y).color,"font-size":28,name:r(y).icon},null,8,["color","name"])):s("v-if",!0),v(k,{color:x.value?"primary":"",_class:r(y).disabled&&!f.data.children?"opacity-7":"",onClick:l[1]||(l[1]=e=>{return l=r(y),f.data.children||null==(a=m.value)||a.setStatus(),void t("textClick",l);var l,a}),"font-size":28,label:r(y).text},null,8,["color","_class","label"])])),_:1})}}}),E=e({__name:"expanded-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["textClick"],setup(e,{expose:p,emit:h}){const x=e,{proxy:N}=a();let w=N.$parent;for(;w&&"tmTree"!=(null==w?void 0:w.TreeParaentName)&&w;)w=(null==w?void 0:w.$parent)??void 0;const y=t("TreePareantSelectedExpandedId",l([])),S=(null==w?void 0:w.$props.expandedIconOpen)??"tmicon-sort-down",T=(null==w?void 0:w.$props.expandedIconClose)??"tmicon-caret-right",k=d((()=>x.data)),g=l("");function b(){g.value=g.value?"":k.value[x.fieldNames.id],g.value?null==w||w.onExpand({data:f(k.value),expand:!0}):null==w||w.onUnExpand({data:f(k.value),expand:!1})}return n((()=>function(){let e=y.value.filter((e=>e==k.value[x.fieldNames.id]));g.value=e[0]??""}())),p({setStatus:function(){b(k.value[x.fieldNames.id])},filedId:k.value[x.fieldNames.id]}),(e,l)=>{const a=c;return o(),u(a,null,{default:i((()=>[v(a,{class:"flex flex-row flex-row-center-start"},{default:i((()=>[r(k).children?(o(),u(_,{key:0,onClick:l[0]||(l[0]=e=>b(r(k)[x.fieldNames.id])),"font-size":26,name:g.value?r(S):r(T)},null,8,["name"])):s("v-if",!0),m(e.$slots,"default")])),_:3}),r(k).children&&g.value?(o(),u(a,{key:0},{default:i((()=>[v(U,{onTextClick:l[1]||(l[1]=e=>h("textClick",e)),followTheme:x.followTheme,fieldNames:x.fieldNames,data:r(k).children},null,8,["followTheme","fieldNames","data"])])),_:1})):s("v-if",!0)])),_:3})}}}),U=e({__name:"base-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Array,default:()=>[],required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["textClick"],setup(e,{emit:a}){const t=e,n=l(null),s=d((()=>t.data));return(e,l)=>{const d=c;return o(),u(d,{class:"pa-24"},{default:i((()=>[(o(!0),h(N,null,x(r(s),((e,r)=>(o(),u(d,{key:r},{default:i((()=>[v(E,{followTheme:t.followTheme,fieldNames:t.fieldNames,data:e,ref_for:!0,ref_key:"expandedNodeRef",ref:n,onTextClick:l[0]||(l[0]=e=>a("textClick",e))},{default:i((()=>[v(O,{onTextClick:l=>function(e,l){var d;if(a("textClick",e),l&&l.children)if(Array.isArray(n.value)){let e=n.value.find((e=>(null==e?void 0:e.filedId)==l[t.fieldNames.id]));e&&(null==e||e.setStatus())}else null==(d=n.value)||d.setStatus()}(l,e),followTheme:t.followTheme,fieldNames:t.fieldNames,data:e},null,8,["onTextClick","followTheme","fieldNames","data"])])),_:2},1032,["followTheme","fieldNames","data"])])),_:2},1024)))),128))])),_:1})}}}),B=e({__name:"tm-tree",props:{followTheme:{type:[Boolean,String],default:!0},color:{type:String,default:"primary"},expandedIconOpen:{type:String,default:"tmicon-sort-down"},expandedIconClose:{type:String,default:"tmicon-caret-right"},checkable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},expandedId:{type:Array,default:()=>[]},defaultExpandedId:{type:Array,default:()=>[]},selectedId:{type:Array,default:()=>[]},defaultSelectedId:{type:Array,default:()=>[]},data:{type:Array,default:()=>[],required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})},showLine:{type:[Boolean,String],default:!0}},emits:["node-click","check","expand","update:selectedId","update:expandedId"],setup(e,{expose:a,emit:t}){const n=e;let s=l(n.data),m=[...P(n.data,n.fieldNames.id)],h=A(n.data,n.fieldNames.id);const x=l([...new Set([...n.defaultSelectedId,...n.selectedId])]),N=l([...new Set([...n.defaultExpandedId,...n.expandedId])]),S=l([]);!n.multiple&&x.value.length>=1&&(x.value=[x.value[0]]);let T=new Set(h);S.value=x.value.filter((e=>T.has(e))),x.value=x.value.filter((e=>!T.has(e)));const k=new Set(N.value);function _(e){x.value=[...new Set([...x.value,...e])],t("update:selectedId",x.value)}function g(e){let l=new Set(e);x.value=[...new Set([...x.value].filter((e=>!l.has(e))))],t("update:selectedId",x.value)}function b(e){S.value=[...new Set([...S.value,...e])]}function I(e){let l=new Set(e);S.value=[...new Set([...S.value].filter((e=>!l.has(e))))]}function $(e){return C(f(n.data),e,n.fieldNames.id)}return N.value=m.filter((e=>k.has(e))),w("TreePareantSelectedIds",y(x)),w("TreePareantSelectedExpandedId",y(N)),w("TreeParentIds",y(S)),p([()=>n.expandedId],(()=>{N.value=[...n.expandedId]})),p([()=>n.data],(()=>{s.value=n.data,m=[...P(n.data)],h=A(n.data,n.fieldNames.id);let e=new Set(h);S.value=x.value.filter((l=>e.has(l)));let l=new Set(x.value),a=m.filter((e=>l.has(e)));x.value=a.filter((l=>!e.has(l))),t("update:selectedId",x.value);let d=new Set(N.value);N.value=m.filter((e=>d.has(e))),t("update:expandedId",N.value)}),{deep:!0}),w("TreeNodeCheckable",d((()=>n.checkable))),a({TreeParaentName:"tmTree",onUnSelected:g,onSelected:_,onCheck:function(e){t("check",e)},onExpand:function(e){N.value=[...new Set([...N.value,e.data[n.fieldNames.id]])],t("expand",{...e.data,expanded:e.expand}),t("update:expandedId",N.value)},onUnExpand:function(e){N.value=[...new Set([...N.value].filter((l=>l!=e.data[n.fieldNames.id])))],t("expand",{...e.data,expanded:e.expand}),t("update:expandedId",N.value)},onSelectedParent:b,onUnSelectedParent:I,getAllListData:function(){return f(n.data)},checkAll:function(e=!0){1==e?(_(m),b(h)):(x.value=[],I(h)),t("update:selectedId",[...x.value,...S.value])},checkNode:function(e,l){if(!new Set(m).has(e))return console.error("不存在该节点"),!1;let a=j(f(n.data),e,n.fieldNames.id);if(a){let t=P(a.children,n.fieldNames.id),d=new Set(h),o=[...t,e].filter((e=>d.has(e))),u=[...t,e].filter((e=>!d.has(e)));1==l?(_(u),b(o)):(g(u),I(o))}else 1==l?_([e]):g([e]);return t("update:selectedId",[...x.value,...S.value]),!0},expandAll:function(e=!0){let l=A(f(n.data),n.fieldNames.id);N.value=e?[...new Set([...N.value,...l])]:[],t("update:expandedId",N.value)},expandNode:function(e,l){return new Set(m).has(e)?j(f(n.data,n.fieldNames.id),e)?(N.value=1==l?[...new Set([...N.value,e])]:[...new Set(N.value.filter((l=>l!=e)))],t("update:expandedId",N.value),!0):(console.error("该节点非父节点"),!1):(console.error("不存在该节点"),!1)},getCheckedNodes:function(e="all"){return"all"==e?[...f(x.value),...S.value]:"parent"==e?f(S.value):"children"==e?f(x.value):[]},getExpandedNodes:function(){return f(N.value)},getNodePath:$,showNode:function(e){let l=$(e);j(f(n.data),e,n.fieldNames.id)||(l=l.filter((l=>l!=e))),N.value=[...new Set([...N.value,...l])],t("update:expandedId",N.value)}}),(e,l)=>{const a=c;return o(),u(a,null,{default:i((()=>[v(U,{onTextClick:l[0]||(l[0]=e=>t("node-click",e)),followTheme:n.followTheme,fieldNames:n.fieldNames,data:r(s)},null,8,["followTheme","fieldNames","data"])])),_:1})}}}),R=e({__name:"tree",setup(e){const a=l(function e(l="0",a=2){const t=[];for(let d=0;d<5;d+=1){const n=`${l}-${d}`,o={text:"选项"+n,id:n,disabled:1==d};a>0&&(o.children=e(n,a-1)),t.push(o)}return t}());function t(e){console.log(e)}return(e,l)=>(o(),u(S,null,{default:i((()=>[v(T,null,{default:i((()=>[v(k,{"font-size":30,_class:"font-weight-b",label:"基础示例,更多见文档"}),v(b),v(B,{onNodeClick:t,data:a.value},null,8,["data"])])),_:1})])),_:1}))}});export{R as default};