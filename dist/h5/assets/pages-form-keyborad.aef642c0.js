import{d as e,c as l,r as a,Q as o,R as n,o as t,a as r,w as s,b as u,k as c,e as f,f as d,F as i,u as m,j as h,_ as x,m as v,O as p,P as w,N as g,L as k}from"./index-5c06cf16.js";import{c as _,u as y,d as b,t as C}from"./tm-app.20954b06.js";import{t as I}from"./tm-sheet.2873fe67.js";import{t as V}from"./tm-text.fdd4f0a8.js";import{_ as B,a as S}from"./tm-radio.vue_vue_type_script_setup_true_lang.8fe0c58b.js";import{_ as T}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import{t as E}from"./tm-cell.e6d54032.js";import{t as A}from"./tm-drawer.5aba0891.js";import{_ as z,a as L}from"./tm-col.vue_vue_type_script_setup_true_lang.34f4ca63.js";import{t as j}from"./tm-icon.5716c798.js";import"./tm-image.vue_vue_type_script_setup_true_lang.f325e7c1.js";import"./tm-translate.4fbb7927.js";import"./tm-overlay.3ea1101a.js";const D={followTheme:{type:[Boolean,String],default:!0},random:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},modelValue:{type:String,default:""},color:{type:String,default:"primary"},decimal:{type:Boolean,default:!1},showInputContent:{type:Boolean,default:!1},maxLength:{type:Number,default:0},round:{type:Number,default:2}},U=x(e({__name:"keyborad-number",props:{...D},emits:["update:modelValue","change","confirm","success"],setup(e,{emit:x}){const v=e,p=l((()=>v.maxLength)),w=l((()=>v.dark));let g=[1,2,3,4,5,6,7,8,9,0,"."];v.decimal||g.pop();const k=a(g);v.random&&(k.value=function(e=[]){var l,a,o=e.length;for(;--o;)a=Math.floor(Math.random()*o),l=e[o],e[o]=e[a],e[a]=l;return e}(o(k.value)));a([]).value=uni.$tm.u.splitData(o(k.value),3);const _=a(v.modelValue),y=l((()=>_.value.split("")));function b(e){let l=String(e);if(v.decimal&&"."==l&&y.value.includes("."))return;let a=_.value+l;a.split("").length>p.value&&p.value>0||(_.value=a,x("update:modelValue",_.value),x("change",v.modelValue),a.split("").length===p.value&&p.value>0&&x("success",a))}function C(){""!=_.value&&0!=_.value.length&&(_.value=_.value.substring(0,_.value.length-1),x("update:modelValue",_.value),x("change",_.value))}function B(){x("confirm",_.value)}return n((()=>v.modelValue),(()=>{_.value=v.modelValue})),(e,l)=>{const a=h;return t(),r(I,{"follow-theme":!1,"follow-dark":!1,dark:m(w),color:"white",transprent:!0,padding:[4,4],margin:[0,0],_class:"flex flex-col","paren-class":"flex-1"},{default:s((()=>[u(a,{class:"flex-center flex-row",style:{height:"62rpx"}},{default:s((()=>[_.value||v.showInputContent?c("v-if",!0):(t(),r(V,{key:0,"font-size":28,_class:"text-weight-b",label:"安全键盘放心输入"})),_.value&&v.showInputContent?(t(),r(V,{key:1,"font-size":34,_class:"text-weight-b pr-24",label:_.value},null,8,["label"])):c("v-if",!0)])),_:1}),u(a,null,{default:s((()=>[u(z,{column:7,align:"start"},{default:s((()=>[u(L,{col:6,height:0,transprent:!0},{default:s((()=>[u(z,{column:3},{default:s((()=>[(t(),f(i,null,d(9,((e,l)=>u(L,{onClick:l=>b(e),"hover-class":"opacity-5",margin:[8,0,4,8],round:v.round,height:100,col:1,key:l},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":38,_class:"text-weight-b",label:e},null,8,["label"])])),_:2},1032,["onClick","round"]))),64)),u(L,{onClick:l[0]||(l[0]=e=>b("0")),"hover-class":"opacity-5 ",margin:[8,0,4,0],round:v.round,height:100,col:2},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":38,_class:"text-weight-b",label:"0"})])),_:1},8,["round"]),u(L,{onClick:l[1]||(l[1]=e=>b(".")),"hover-class":"opacity-5 ",margin:[8,0,4,0],round:v.round,height:100,col:1},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":38,_class:"text-weight-b",label:"."})])),_:1},8,["round"])])),_:1})])),_:1}),u(L,{col:1,height:420,align:"start",transprent:!0},{default:s((()=>[u(z,{column:1},{default:s((()=>[u(L,{onClick:C,"hover-class":"opacity-5 ",color:"grey-1",margin:[8,0,4,4],round:v.round,height:100,col:1},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-caret-left"})])),_:1},8,["round"]),u(L,{onClick:B,"hover-class":"opacity-5 ",color:v.color,margin:[8,8,0,0],round:v.round,height:312,col:1},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-check"})])),_:1},8,["color","round"])])),_:1})])),_:1})])),_:1})])),_:1}),c('  \r\n    <view class="flex flex-row">\r\n      <view class="flex-5 flex flex-col">\r\n        <view\r\n          class="flex-row flex flex-1"\r\n          v-for="(item2, index2) in numberArray"\r\n          :key="index2"\r\n        >\r\n          <tmSheet\r\n            hover-class="opacity-5 keywordBoradAni"\r\n            no-level\r\n            @click="keydown(item)"\r\n            :follow-theme="false"\r\n            :follow-dark="false"\r\n            :dark="_dark"\r\n            :round="2"\r\n            :height="100"\r\n            _class="flex-center"\r\n            :padding="[0, 0]"\r\n            :margin="[4, 4]"\r\n            v-for="(item, index) in item2"\r\n            :key="index"\r\n            :paren-class="index2 == 3 && index == 0 ? \'flex-3\' : \'flex-3\'"\r\n            :class="index2 == 3 && index == 0 ? \'flex-5\' : \'flex-3\'"\r\n          >\r\n            <view style="width: 40rpx" class="flex flex-center flex-row">\r\n              <tmText\r\n                :userInteractionEnabled="false"\r\n                :font-size="32"\r\n                _class="text-weight-b"\r\n                :label="item"\r\n              ></tmText>\r\n            </view>\r\n          </tmSheet>\r\n        </view>\r\n      </view>\r\n      <view class="flex-1 flex flex-col">\r\n        <view class="flex flex-row">\r\n          <tmSheet\r\n            hover-class="opacity-5 keywordBoradAni"\r\n            no-level\r\n            :height="100"\r\n            @click="del"\r\n            :follow-theme="false"\r\n            :follow-dark="false"\r\n            :dark="_dark"\r\n            color="grey-1"\r\n            :round="2"\r\n            _class="flex-center"\r\n            :padding="[0, 0]"\r\n            :margin="[4, 4]"\r\n            class="flex-1 flex flex-col"\r\n            paren-class="flex-1 flex-row flex-center"\r\n          >\r\n            <tm-icon :userInteractionEnabled="false" name="tmicon-caret-left"></tm-icon>\r\n          </tmSheet>\r\n        </view>\r\n        <view class="flex-6 flex flex-row">\r\n          <tmSheet\r\n            hover-class="opacity-5 keywordBoradAni"\r\n            @click="confirm"\r\n            :follow-theme="props.followTheme"\r\n            :follow-dark="false"\r\n            :dark="_dark"\r\n            :color="props.color"\r\n            :round="2"\r\n            _class="flex-center "\r\n            :padding="[0, 0]"\r\n            :margin="[4, 4]"\r\n            class="flex-1 flex flex-col"\r\n            paren-class="flex-1 flex-row flex-center"\r\n          >\r\n            <tm-icon :userInteractionEnabled="false" name="tmicon-check"></tm-icon>\r\n          </tmSheet>\r\n        </view>\r\n      </view>\r\n    </view>\r\n    ')])),_:1},8,["dark"])}}}),[["__scopeId","data-v-a8159f99"]]);function N(e){return""!==e&&(!1!==function(e){if(!1===/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(e))return!1;return!0}(e)&&(!1!==function(e,l){var a=e.substr(0,2);if(null==l[a])return!1;return!0}(e,{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"})&&(!1!==function(e){var l=e.length;if("15"==l){var a=/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;return $("19"+(n=(o=e.match(a))[2]),t=o[3],r=o[4],new Date("19"+n+"/"+t+"/"+r))}if("18"==l){var o,n,t,r,s=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;return $(n=(o=e.match(s))[2],t=o[3],r=o[4],new Date(n+"/"+t+"/"+r))}return!1}(e)&&!1!==function(e){if("18"==(e=function(e){if("15"==e.length){var l,a=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),o=new Array("1","0","X","9","8","7","6","5","4","3","2"),n=0;for(e=e.substr(0,6)+"19"+e.substr(6,e.length-6),l=0;l<17;l++)n+=e.substr(l,1)*a[l];return e+=o[n%11]}return e}(e)).length){var l,a=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),o=new Array("1","0","X","9","8","7","6","5","4","3","2"),n=0;for(l=0;l<17;l++)n+=e.substr(l,1)*a[l];return o[n%11]==e.substr(17,1).toLocaleUpperCase()}return!1}(e))))}function $(e,l,a,o){var n=(new Date).getFullYear();if(o.getFullYear()==e&&o.getMonth()+1==l&&o.getDate()==a){var t=n-e;return t>=0&&t<=100}return!1}const M=x(e({__name:"keyborad-card",props:{...D},emits:["update:modelValue","change","confirm","success"],setup(e,{emit:x}){const w=e,g=l((()=>w.maxLength)),k=l((()=>w.dark)),_=a([1,2,3,4,5,6,7,8,9,0,"X"]);w.random&&(_.value=function(e=[]){var l,a,o=e.length;for(;--o;)a=Math.floor(Math.random()*o),l=e[o],e[o]=e[a],e[a]=l;return e}(o(_.value)));const y=a([]);y.value=uni.$tm.u.splitData(o(_.value),3);const b=a(w.modelValue),C=l((()=>N(b.value)));function B(){""!=b.value&&0!=b.value.length&&(b.value=b.value.substring(0,b.value.length-1),x("update:modelValue",b.value),x("change",b.value))}function S(){x("confirm",b.value)}return n((()=>w.modelValue),(()=>{v((()=>b.value=w.modelValue))})),(e,l)=>{const a=h;return t(),r(I,{"follow-theme":!1,"follow-dark":!1,dark:m(k),color:"white",transprent:!0,padding:[4,4],margin:[0,0],_class:"flex flex-col","paren-class":"flex-1"},{default:s((()=>[u(a,{class:"flex-center flex-row",style:{height:"62rpx"}},{default:s((()=>[b.value||w.showInputConten?c("v-if",!0):(t(),r(V,{key:0,"font-size":28,_class:"text-weight-b",label:"安全键盘放心输入"})),b.value&&w.showInputContent?(t(),r(V,{key:1,color:m(C)?"green":"red","font-size":34,_class:"text-weight-b pr-24",label:b.value},null,8,["color","label"])):c("v-if",!0),m(C)&&w.showInputContent?(t(),r(j,{key:2,color:"green","font-size":34,name:"tmicon-check-circle-fill"})):c("v-if",!0)])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[u(a,{class:"flex-5 flex flex-col"},{default:s((()=>[(t(!0),f(i,null,d(y.value,((e,l)=>(t(),r(a,{class:"flex-row flex flex-1",key:l},{default:s((()=>[(t(!0),f(i,null,d(e,((e,o)=>(t(),r(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",onClick:l=>function(e){let l=String(e),a=b.value+l;a.split("").length>g.value&&g.value>0||(b.value=a,x("update:modelValue",b.value),x("change",b.value),a.split("").length===g.value&&g.value>0&&x("success",a))}(e),"follow-theme":!1,"follow-dark":!1,dark:m(k),round:2,height:100,_class:"flex-center",padding:[0,0],margin:[4,4],key:o,"paren-class":"flex-3",class:p(3==l&&0==o?"flex-5":"flex-3")},{default:s((()=>[u(a,{style:{width:"40rpx"},class:"flex flex-center flex-row"},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":38,_class:"text-weight-b",label:e},null,8,["label"])])),_:2},1024)])),_:2},1032,["onClick","dark","paren-class","class"])))),128))])),_:2},1024)))),128))])),_:1}),u(a,{class:"flex-1 flex flex-col"},{default:s((()=>[u(a,{class:"flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:B,"follow-theme":!1,"follow-dark":!1,dark:m(k),color:"grey-1",round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-caret-left"})])),_:1},8,["dark"])])),_:1}),u(a,{class:"flex-6 flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",onClick:S,"follow-theme":w.followTheme,"follow-dark":!1,dark:m(k),color:w.color,round:2,_class:"flex-center ",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-check"})])),_:1},8,["follow-theme","dark","color"])])),_:1})])),_:1})])),_:1})])),_:1},8,["dark"])}}}),[["__scopeId","data-v-a0fa4de4"]]),X=x(e({__name:"keyborad-pass",props:{...D},emits:["update:modelValue","change","confirm","success"],setup(e,{emit:x}){const p=e,w=l((()=>p.maxLength)),g=l((()=>p.dark)),k=a([]),_=a(p.modelValue),y=a(!1),b=a(!1);function C(){""!=_.value&&0!=_.value.length&&(_.value=_.value.substring(0,_.value.length-1),x("update:modelValue",_.value),x("change",_.value))}function B(){x("confirm",_.value)}function S(){b.value=!b.value,E()}function T(){y.value=!y.value,E()}function E(){const e=a([1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),l=a(['"',"'",".","/","\\","[","]","!","?","_","<",">","%",";","(",")","&","+","=","~","*","#","@"]);b.value?(p.random&&(l.value=A(o(l.value))),k.value=uni.$tm.u.splitData(o(l.value),9)):(p.random&&(e.value=A(o(e.value))),y.value&&(e.value=e.value.map((e=>String(e).toLocaleUpperCase()))),k.value=uni.$tm.u.splitData(o(e.value),9))}function A(e=[]){for(var l,a,o=e.length;--o;)a=Math.floor(Math.random()*o),l=e[o],e[o]=e[a],e[a]=l;return e}return E(),n((()=>p.modelValue),(()=>{v((()=>_.value=p.modelValue))})),(e,l)=>{const a=h;return t(),r(I,{"follow-theme":!1,"follow-dark":!1,dark:m(g),color:"white",transprent:!0,padding:[4,4],margin:[0,0],_class:"flex flex-col","paren-class":"flex-1"},{default:s((()=>[u(a,{class:"flex-center flex-row",style:{height:"62rpx"}},{default:s((()=>[_.value||p.showInputConten?c("v-if",!0):(t(),r(V,{key:0,"font-size":28,_class:"text-weight-b",label:"安全键盘放心输入"})),_.value&&p.showInputContent?(t(),r(V,{key:1,"font-size":34,_class:"text-weight-b pr-24",label:_.value},null,8,["label"])):c("v-if",!0)])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[u(a,{class:"flex-9 flex flex-col"},{default:s((()=>[(t(!0),f(i,null,d(k.value,((e,l)=>(t(),r(a,{class:"flex-row flex flex-1",key:l},{default:s((()=>[(t(!0),f(i,null,d(e,((e,l)=>(t(),r(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",onClick:l=>function(e){let l=String(e),a=_.value+l;a.split("").length>w.value&&w.value>0||(_.value=a,x("update:modelValue",_.value),x("change",_.value),a.split("").length===w.value&&w.value>0&&x("success",a))}(e),"follow-theme":!1,"follow-dark":!1,dark:m(g),round:2,height:100,_class:"flex-center",padding:[0,0],margin:[4,4],key:l,"paren-class":"flex-1",class:"flex-1"},{default:s((()=>[u(a,{style:{width:"40rpx"},class:"flex flex-center flex-row"},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":32,_class:"text-weight-b",label:e},null,8,["label"])])),_:2},1024)])),_:2},1032,["onClick","dark"])))),128))])),_:2},1024)))),128))])),_:1}),u(a,{class:"flex-1 flex flex-col"},{default:s((()=>[u(a,{class:"flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:C,"follow-theme":!1,"follow-dark":!1,dark:m(g),color:"grey-1",round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-caret-left"})])),_:1},8,["dark"])])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[b.value?c("v-if",!0):(t(),r(I,{key:0,"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:T,"follow-theme":!1,"follow-dark":!1,dark:m(g),color:y.value?"primary":"grey-1",round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-arrow-alt-from-botto"})])),_:1},8,["dark","color"]))])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:S,"follow-theme":!1,"follow-dark":!1,dark:m(g),color:"grey-1",round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":32,_class:"text-weight-b",label:b.value?"En":",."},null,8,["label"])])),_:1},8,["dark"])])),_:1}),u(a,{class:"flex-6 flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",onClick:B,"follow-theme":p.followTheme,"follow-dark":!1,dark:m(g),color:p.color,round:2,_class:"flex-center ",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-check"})])),_:1},8,["follow-theme","dark","color"])])),_:1})])),_:1})])),_:1})])),_:1},8,["dark"])}}}),[["__scopeId","data-v-a9274299"]]),F=x(e({__name:"keyborad-car",props:{...D},emits:["update:modelValue","change","confirm","success"],setup(e,{emit:x}){const p=e,w=l((()=>p.maxLength)),g=l((()=>p.dark)),k=a([]),_=a(p.modelValue),y=a(!1);function b(e){let l=String(e),a=_.value+l;a.split("").length>w.value&&w.value>0||(_.value=a,x("update:modelValue",_.value),x("change",_.value),0==y.value&&S(),a.split("").length===w.value&&w.value>0&&x("success",a))}function C(){""!=_.value&&0!=_.value.length&&(_.value=_.value.substring(0,_.value.length-1),x("update:modelValue",_.value),x("change",_.value),0==_.value.length&&(y.value,S()))}function B(){x("confirm",_.value)}function S(){y.value=!y.value,T()}function T(){const e=a(["京","沪","津","渝","鲁","冀","晋","蒙","辽","吉","黑","苏","浙","皖","闽","赣","豫","湘","鄂","粤","桂","琼","川","贵","云","藏","陕","甘","青","宁","新","港","澳","台","警","使"]),l=a(["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);y.value?(p.random&&(l.value=E(o(l.value))),k.value=uni.$tm.u.splitData(o(l.value),9)):(p.random&&(e.value=E(o(e.value))),k.value=uni.$tm.u.splitData(o(e.value),9))}function E(e=[]){for(var l,a,o=e.length;--o;)a=Math.floor(Math.random()*o),l=e[o],e[o]=e[a],e[a]=l;return e}return T(),n((()=>p.modelValue),(()=>{v((()=>_.value=p.modelValue))})),(e,l)=>{const a=h;return t(),r(I,{"follow-theme":!1,"follow-dark":!1,dark:m(g),color:"white",transprent:!0,padding:[4,4],margin:[0,0],_class:"flex flex-col","paren-class":"flex-1"},{default:s((()=>[u(a,{class:"flex-center flex-row",style:{height:"62rpx"}},{default:s((()=>[_.value||p.showInputConten?c("v-if",!0):(t(),r(V,{key:0,"font-size":28,_class:"text-weight-b",label:"安全键盘放心输入"})),_.value&&p.showInputContent?(t(),r(V,{key:1,"font-size":34,_class:"text-weight-b pr-24",label:_.value},null,8,["label"])):c("v-if",!0)])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[u(a,{class:"flex-9 flex flex-col"},{default:s((()=>[(t(!0),f(i,null,d(k.value,((e,l)=>(t(),r(a,{class:"flex-row flex flex-1",key:l},{default:s((()=>[(t(!0),f(i,null,d(e,((e,l)=>(t(),r(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",onClick:l=>b(e),"follow-theme":!1,"follow-dark":!1,dark:m(g),round:2,height:100,_class:"flex-center",padding:[0,0],margin:[4,4],key:l,"paren-class":"flex-1",class:"flex-1"},{default:s((()=>[u(a,{style:{width:"40rpx"},class:"flex flex-center flex-row"},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":32,_class:"text-weight-b",label:e},null,8,["label"])])),_:2},1024)])),_:2},1032,["onClick","dark"])))),128))])),_:2},1024)))),128))])),_:1}),u(a,{class:"flex-1 flex flex-col"},{default:s((()=>[u(a,{class:"flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:l[0]||(l[0]=e=>b("学")),"follow-theme":!1,"follow-dark":!1,dark:m(g),round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":32,_class:"text-weight-b",label:"学"})])),_:1},8,["dark"])])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:C,"follow-theme":!1,"follow-dark":!1,dark:m(g),color:"grey-1",round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-caret-left"})])),_:1},8,["dark"])])),_:1}),u(a,{class:"flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni","no-level":"",height:100,onClick:S,"follow-theme":!1,"follow-dark":!1,dark:m(g),color:"grey-1",round:2,_class:"flex-center",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(V,{userInteractionEnabled:!1,"font-size":32,_class:"text-weight-b",label:y.value?"简":"En"},null,8,["label"])])),_:1},8,["dark"])])),_:1}),u(a,{class:"flex-6 flex flex-row"},{default:s((()=>[u(I,{"hover-class":"opacity-5 keywordBoradAni",onClick:B,"follow-theme":p.followTheme,"follow-dark":!1,dark:m(g),color:p.color,round:2,_class:"flex-center ",padding:[0,0],margin:[4,4],class:"flex-1 flex flex-col","paren-class":"flex-1 flex-row flex-center"},{default:s((()=>[u(j,{userInteractionEnabled:!1,name:"tmicon-check"})])),_:1},8,["follow-theme","dark","color"])])),_:1})])),_:1})])),_:1})])),_:1},8,["dark"])}}}),[["__scopeId","data-v-8463698d"]]),O=e({__name:"tm-keyboard",props:{..._,followTheme:{type:[Boolean,String],default:!0},type:{type:String,default:"number"},show:{type:Boolean,default:!1},modelValue:{type:String,default:""},defaultValue:{type:String,default:""},color:{type:String,default:"primary"},random:{type:Boolean,default:!1},decimal:{type:Boolean,default:!1},showInputContent:{type:Boolean,default:!0},maxLength:{type:Number,default:0}},emits:["change","confirm","update:show","update:modelValue","success"],setup(e,{emit:f}){const d=e,i=y(),x=a(null),p=l((()=>i.tmStore)),_=l((()=>b(d,p.value))),C=a((null==d?void 0:d.show)??!1),I=a((null==d?void 0:d.defaultValue)??""),V=l((()=>d.maxLength)),B=w("tmuiSysInfo",l((()=>({bottom:0,height:750,width:k(750),top:0,isCustomHeader:!1,sysinfo:null})))),S=l((()=>d.type));n([()=>d.show,()=>d.maxLength],(()=>{C.value=d.show}));let T=NaN;function E(){f("update:show",!1)}function z(){f("update:show",!0)}function L(){f("update:modelValue",o(I.value)),v((()=>{I.value=d.modelValue,f("change",o(I.value))}))}function j(){!function(e,l=200,a=!1){if(isNaN(T)||clearTimeout(T),a){var o=!T;T=setTimeout((()=>{T=NaN}),l),o&&"function"==typeof e&&e()}else T=setTimeout((()=>{"function"==typeof e&&e()}),l)}((()=>{var e;f("confirm",o(I.value)),null==(e=x.value)||e.close()}),250,!0)}n((()=>d.modelValue),(()=>{I.value=d.modelValue}));const D=l((()=>520+B.value.bottom));return(e,l)=>{const a=h;return t(),r(a,{onClick:l[9]||(l[9]=e=>C.value=!C.value)},{default:s((()=>[g(e.$slots,"default"),u(A,{ref_key:"drawer",ref:x,onOpen:z,onClose:E,"onUpdate:show":l[8]||(l[8]=e=>C.value=e),show:C.value,dark:m(_),"follow-dark":d.followDark,"follow-theme":!1,height:m(D),"hide-header":!0,color:"grey-3",mask:!1},{default:s((()=>["number"==m(S)?(t(),r(U,{key:0,onSuccess:l[0]||(l[0]=e=>f("success",e)),maxLength:m(V),showInputContent:d.showInputContent,decimal:d.decimal,followTheme:d.followTheme,random:d.random,color:d.color,onChange:L,onConfirm:j,"model-value":I.value,"onUpdate:modelValue":l[1]||(l[1]=e=>I.value=e),dark:m(_),class:"flex-1"},null,8,["maxLength","showInputContent","decimal","followTheme","random","color","model-value","dark"])):c("v-if",!0),"password"==m(S)?(t(),r(X,{key:1,onSuccess:l[2]||(l[2]=e=>f("success",e)),maxLength:m(V),showInputContent:d.showInputContent,followTheme:d.followTheme,random:d.random,color:d.color,onChange:L,onConfirm:j,"model-value":I.value,"onUpdate:modelValue":l[3]||(l[3]=e=>I.value=e),dark:m(_),class:"flex-1"},null,8,["maxLength","showInputContent","followTheme","random","color","model-value","dark"])):c("v-if",!0),"car"==m(S)?(t(),r(F,{key:2,onSuccess:l[4]||(l[4]=e=>f("success",e)),maxLength:m(V),showInputContent:d.showInputContent,followTheme:d.followTheme,random:d.random,color:d.color,onChange:L,onConfirm:j,"model-value":I.value,"onUpdate:modelValue":l[5]||(l[5]=e=>I.value=e),dark:m(_),class:"flex-1"},null,8,["maxLength","showInputContent","followTheme","random","color","model-value","dark"])):c("v-if",!0),"card"==m(S)?(t(),r(M,{key:3,onSuccess:l[6]||(l[6]=e=>f("success",e)),maxLength:m(V),showInputContent:d.showInputContent,followTheme:d.followTheme,random:d.random,color:d.color,onChange:L,onConfirm:j,"model-value":I.value,"onUpdate:modelValue":l[7]||(l[7]=e=>I.value=e),dark:m(_),class:"flex-1"},null,8,["maxLength","showInputContent","followTheme","random","color","model-value","dark"])):c("v-if",!0)])),_:1},8,["show","dark","follow-dark","height"])])),_:3})}}}),Y=e({__name:"keyborad",setup(e){const l=a("password"),o=a(""),n=a(!1);return(e,a)=>(t(),r(C,null,{default:s((()=>[u(I,null,{default:s((()=>[u(V,{"font-size":24,_class:"font-weight-b",label:"基础示例,更多见文档"}),u(T),u(B,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},{default:s((()=>[u(S,{value:"password",label:"密码"}),u(S,{value:"card",color:"red",label:"身份证"}),u(S,{value:"car",color:"blue",label:"车牌"}),u(S,{value:"number",color:"green",label:"数字键盘"})])),_:1},8,["modelValue"])])),_:1}),u(E,{onClick:a[1]||(a[1]=e=>n.value=!0),title:"弹出键盘",rightColor:"primary","right-text":o.value},null,8,["right-text"]),u(O,{decimal:"",type:l.value,modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),show:n.value,"onUpdate:show":a[3]||(a[3]=e=>n.value=e)},null,8,["type","modelValue","show"])])),_:1}))}});export{Y as default};
