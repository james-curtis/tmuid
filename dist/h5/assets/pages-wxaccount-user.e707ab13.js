import{d as t,r as e,z as a,q as l,t as o,v as i,x as r,o as n,a as s,w as c,b as u,k as d,h as m,A as f,B as g,C as h,D as v,E as p,j as _}from"./index-5c06cf16.js";import{a as b,o as k,b as x,t as w}from"./tm-app.20954b06.js";import{t as j}from"./tm-sheet.2873fe67.js";import{t as y}from"./tm-text.fdd4f0a8.js";import{t as C}from"./tm-modal.d3192f9f.js";import{t as I}from"./tm-icon.5716c798.js";import{t as T}from"./tm-avatar.602874a0.js";import{t as $}from"./tm-button.5fc2eaaa.js";import{t as A}from"./tm-cell.e6d54032.js";import{_ as z}from"./tm-statistic.vue_vue_type_script_setup_true_lang.09125e02.js";import"./tm-translate.4fbb7927.js";import"./tm-overlay.3ea1101a.js";import"./tm-image.vue_vue_type_script_setup_true_lang.f325e7c1.js";import"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";const O=t({__name:"user",setup(t){const O=e(""),U=e(!1),V=e(null),D=e(!1),E="https://tmui.design/api_v2",J="wss://tmui.design:8124/wss",q=()=>{O.value&&(i({title:"...",mask:!0}),uni.$tm.fetch.get(E+"/store/user/getUserInfo/",{},{header:{token:O.value}}).then((t=>{r();const e=t.data;if(200!=e.code)return o({title:"授权失效，重新登录"}),void uni.$tm.u.delCookie("token");let a=e.data;V.value=a})).catch((t=>{r(),console.error(t),o({title:"网络错误，请下拉刷新"})})))};function B(t="adunit-9a1c077dc510ea12",e=1,a=50){if(!O.value)return void m({url:"login"});i({title:"加载中"});let l=null;wx.createRewardedVideoAd&&(l=wx.createRewardedVideoAd({adUnitId:t}),l.onLoad((()=>{console.log("成功"),r()})),l.onError((t=>{r(),o({title:"请重试"})})),l.onClose((l=>{r(),l.isEnded?l.isEnded&&uni.$tm.fetch.post(E+"/store/user/addjifenByuser/",{jifen:a,desc:encodeURIComponent("查看激励视频广告获得积分"),type:e,adid:t},{header:{token:O.value}}).then((t=>{r();200==t.data.code?(o({title:`已添加${a}积分`}),q()):o({title:"添加积分失败"})})).catch((t=>{r(),o({title:"添加积分失败"})})):o({title:"提前结束"})}))),l&&l.show().catch((()=>{l.load().then((()=>l.show())).catch((t=>{console.error(t),r(),console.log("激励视频 广告显示失败"),o({title:"请重试"})}))}))}function M(){uni.$tm.u.scanCode(!0,"qrCode").then((async t=>{var e;if("scanCode:ok"==t.errMsg)try{let l=JSON.parse(t.result).data;await(i({title:"...",mask:!0}),new Promise(((t,e)=>{U.value&&a(),g({url:J}),h((function(e){U.value=!0,r(),t()})),v((()=>{r(),o({title:"连接错误",icon:"none"}),e()})),p((function(t){console.log("收到服务器内容："+t.data);try{let e=JSON.parse(t.data);"info"==e.event&&o({title:e.message,icon:"none"}),"error"==e.event&&o({title:e.message,icon:"error"}),"success-wxauth"==e.event&&o({title:e.message,icon:"success"})}catch(e){}}))}))),e={event:"put-wxauth",data:l,code:O.value},f({data:JSON.stringify(e),fail(t){console.error(t,"授权错误。")}})}catch(l){o({title:"非法信息"})}else o({title:"识别失败"})}))}return b((()=>{})),k((()=>{l({success:t=>{if("login:ok"!=t.errMsg)return void o({title:t.errMsg});let e=t.code;i({title:"...",mask:!0}),uni.$tm.fetch.get(E+"/store/web/wssWxAuth",{code:e}).then((t=>{r();const e=t.data;let a=t.header.tmui_sid;if(200!=e.code||!a)return o({title:"失败，请重试"}),void uni.$tm.u.delCookie("token");uni.$tm.u.setCookie("token",a),O.value=a,q()})).catch((t=>{r(),console.error(t),o({title:"授权失败"})}))},fail:t=>{o({title:"授权login失败"}),rej(t)}})})),x((()=>{U.value&&a()})),(t,e)=>{const a=_;return n(),s(w,null,{default:c((()=>[u(j,{round:3,margin:[32,32],color:"white"},{default:c((()=>[u(a,{class:"pa-0 flex flex-col flex-col-center-center"},{default:c((()=>[u(T,{size:160,round:24,label:V.value?V.value.nicename[0]:"T"},null,8,["label"]),u(a,{class:"pt-24 flex flex-col flex-col-center-center"},{default:c((()=>[u(y,{"font-size":32,label:V.value?"ID#"+V.value.tmzdy_tmuiAccountID:"ID#"},null,8,["label"]),u(y,{color:"grey","font-size":22,label:V.value?V.value.loginTime:"未登录哦"},null,8,["label"])])),_:1})])),_:1}),O.value?d("v-if",!0):(n(),s($,{key:0,height:100,block:"",margin:[0,24],round:25,label:"登录中..."}))])),_:1}),u(a,{class:"py-1"}),u(A,{round:3,margin:[32,0],label:"请通过下方的广告来获取",title:"可用积分",rightIcon:"",rightText:"36"},{rightText:c((()=>[u(z,{color:"primary",endVal:V.value?V.value.jifen:0},null,8,["endVal"])])),_:1}),u(A,{onClick:e[0]||(e[0]=t=>D.value=!0),margin:[32,24],round:3,title:"积分规则"}),u(a,{class:"mb-24"},{default:c((()=>[u(A,{onClick:M,margin:[32,0],round:3,title:"扫码登录模板市场"},{right:c((()=>[u(I,{color:"primary",name:"tmicon-qrcode"})])),_:1})])),_:1}),u(a,{class:"mx-32 mb-32 round-3 overflow"},{default:c((()=>[u(A,{onClick:e[1]||(e[1]=t=>B("adunit-9a1c077dc510ea12")),margin:[0,0],title:"视频广告类型一",rightText:"50积分"}),u(A,{onClick:e[2]||(e[2]=t=>B("adunit-e12de49d0a0916fa")),margin:[0,0],title:"视频广告类型二",rightText:"50积分"}),d(' <tm-cell @click="createChatuAd(\'adunit-8be03c2f96d2dcaf\')" :margin="[0, 0]" title="插图广告一" rightText="25积分">\r\n\t\t\t</tm-cell>\r\n\t\t\t<tm-cell @click="createChatuAd(\'adunit-4bdf1fd36a9c8a47\')" :margin="[0, 0]" title="插图广告二" rightText="25积分">\r\n\t\t\t</tm-cell> ')])),_:1}),d(' <tm-button @click="loginOut" v-if="token" block :margin="[32, 24]" color="red" label="退出登录"></tm-button> '),u(C,{color:"primary","ok-text":"我明白",text:"",height:650,border:2,okColor:"primary",hideCancel:"",splitBtn:"",linear:"bottom",title:"积分规则",show:D.value,"onUpdate:show":e[3]||(e[3]=t=>D.value=t)},{default:c((()=>[u(a,null,{default:c((()=>[u(y,{label:"1.在用户或者贡献群中，作者表杨突出贡献者。通过作者发放相关积分。"}),u(y,{label:"2.通过联系作者购买积分，积分比例为1元兑100。"}),u(y,{label:"3、通过广告获取积分规则: 看插屏广告得25个积分。看激励视频广告得50个积分。"}),u(y,{label:"4、当天超过8次以后每次只能获取8个积分"})])),_:1})])),_:1},8,["show"])])),_:1})}}});export{O as default};
