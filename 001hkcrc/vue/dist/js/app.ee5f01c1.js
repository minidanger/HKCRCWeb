(function(e){function t(t){for(var n,r,i=t[0],l=t[1],s=t[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},c=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ca1cc53f","chunk-2d0d6d35":"cefd98b2","chunk-2d0e922d":"1cda1e9c","chunk-2d2086b7":"40d84ba8"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=n);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var s=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(u);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,o[1](s)}a[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0418":function(e,t,o){"use strict";var n=o("7a23"),a=o("7396"),c=o.n(a);Object(n["pushScopeId"])("data-v-24424cc0");var r={style:{height:"100%","border-bottom":"1px solid red",display:"flex"}},i=Object(n["createElementVNode"])("div",{style:{height:"100%",width:"40%"}},[Object(n["createElementVNode"])("img",{src:c.a,alt:"",style:{height:"100%",width:"50%"}})],-1),l={id:"clock",style:{width:"30%","margin-top":"3%",color:"#8d91ff"}},s={style:{"font-weight":"700"}},u={id:"clock",style:{width:"30%","margin-top":"3%",color:"#8d91ff"}},d=Object(n["createElementVNode"])("div",{style:{flex:"1"}},null,-1),h={style:{width:"10%","margin-top":"2%"}},m=Object(n["createElementVNode"])("span",{class:"el-dropdown-link"},[Object(n["createTextVNode"])("用户"),Object(n["createElementVNode"])("i",{class:"el-icon-arrow-down el-icon--right"})],-1),b=Object(n["createTextVNode"])("个人信息"),g=Object(n["createTextVNode"])("退出系统");function S(e,t,o,a,c,S){var f=Object(n["resolveComponent"])("el-dropdown-item"),p=Object(n["resolveComponent"])("el-dropdown-menu"),O=Object(n["resolveComponent"])("el-dropdown");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[i,Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("p",s,"(15/12)Site: "+Object(n["toDisplayString"])(c.MIXItemsValue),1)]),Object(n["createElementVNode"])("div",u,Object(n["toDisplayString"])(c.date),1),d,Object(n["createElementVNode"])("div",h,[Object(n["createVNode"])(O,null,{dropdown:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[b]})),_:1}),Object(n["createVNode"])(f,{onClick:t[0]||(t[0]=function(t){return e.$router.push("/login")})},{default:Object(n["withCtx"])((function(){return[g]})),_:1})]})),_:1})]})),default:Object(n["withCtx"])((function(){return[m]})),_:1})])])}Object(n["popScopeId"])();var f={name:"Header",data:function(){return{date:String(new Date),MIXItemsValue:""}},mounted:function(){var e=this;this.timer=setInterval((function(){var t=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],o=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sept.","Oct.","Nov.","Dec."],n=new Date,a=String(n.getFullYear()),c=String(n.getMonth()),r=o[c],i=String(n.getDate()<10?"0"+n.getDate():n.getDate()),l=String(n.getHours()<10?"0"+n.getHours():n.getHours()),s=String(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes()),u=String(n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds()),d=n.getDay(),h=String(t[d]);e.date=h+" "+r+" "+i+" "+a+","+l+":"+s+":"+u;try{e.MIXItemsValue=sessionStorage.getItem("MIXItemsValue");var m=e.MIXItemsValue.substr(1,e.MIXItemsValue.length-2);e.MIXItemsValue=m}catch(b){}}),1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}};o("4b8d");f.render=S,f.__scopeId="data-v-24424cc0";t["a"]=f},"08b9":function(e,t,o){"use strict";o("5314")},"188e":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function a(e,t,o,a,c,r){var i=Object(n["resolveComponent"])("el-checkbox");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowID,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.ShowID=e}),label:"ID",border:"",onChange:r.handleIDStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowDocketNO,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.ShowDocketNO=e}),label:"Docket Number",border:"",onChange:r.handleDocketNOStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowSiteName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.ShowSiteName=e}),label:"Site Name",border:"",onChange:r.handleSiteNameStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowLocation,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.ShowLocation=e}),label:"Location",border:"",onChange:r.handleLocationStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowTruckNO,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.ShowTruckNO=e}),label:"Truck Number",border:"",onChange:r.handleTruckNOStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowDespatchT,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.ShowDespatchT=e}),label:"Despatch Time",border:"",onChange:r.handleDespatchTStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowArrivalT,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.ShowArrivalT=e}),label:"Arrival Time",border:"",onChange:r.handleArrivalTStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowBatchName,"onUpdate:modelValue":t[7]||(t[7]=function(e){return c.ShowBatchName=e}),label:"Batch Name",border:"",onChange:r.handleBatchNameStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowThisLoad,"onUpdate:modelValue":t[8]||(t[8]=function(e){return c.ShowThisLoad=e}),label:"This Load",border:"",onChange:r.handleThisLoadStatus},null,8,["modelValue","onChange"]),Object(n["createVNode"])(i,{class:"box1",modelValue:c.ShowCummulatedqty,"onUpdate:modelValue":t[9]||(t[9]=function(e){return c.ShowCummulatedqty=e}),label:"Sum Load",border:"",onChange:r.handlecummulatedqtyStatus},null,8,["modelValue","onChange"])])}var c={data:function(){return{ShowID:!0,ShowDocketNO:!1,ShowSiteName:!1,ShowLocation:!0,ShowTruckNO:!0,ShowDespatchT:!0,ShowArrivalT:!0,ShowBatchName:!1,ShowThisLoad:!0,ShowCummulatedqty:!1}},created:function(){console.log("created function");try{sessionStorage.getItem("ShowID")==String(!0)?this.ShowID=!0:sessionStorage.getItem("ShowID")==String(!1)&&(this.ShowID=!1)}catch(e){console.log("failed to get 'ShowID'")}try{sessionStorage.getItem("ShowDocketNO")==String(!0)?(this.ShowDocketNO=!0,console.log("created function  1")):sessionStorage.getItem("ShowDocketNO")==String(!1)&&(this.ShowDocketNO=!1,console.log("created function  2"))}catch(t){console.log("failed to get 'ShowDocketNO'")}try{sessionStorage.getItem("ShowSiteName")==String(!0)?this.ShowSiteName=!0:sessionStorage.getItem("ShowSiteName")==String(!1)&&(this.ShowSiteName=!1)}catch(o){console.log("failed to get 'ShowSiteName'")}try{sessionStorage.getItem("ShowLocation")==String(!0)?this.ShowLocation=!0:sessionStorage.getItem("ShowLocation")==String(!1)&&(this.ShowLocation=!1)}catch(n){console.log("failed to get 'ShowLocation'")}try{sessionStorage.getItem("ShowTruckNO")==String(!0)?this.ShowTruckNO=!0:sessionStorage.getItem("ShowTruckNO")==String(!1)&&(this.ShowTruckNO=!1)}catch(a){console.log("failed to get 'ShowTruckNO'")}try{sessionStorage.getItem("ShowDespatchT")==String(!0)?this.ShowDespatchT=!0:sessionStorage.getItem("ShowDespatchT")==String(!1)&&(this.ShowDespatchT=!1)}catch(c){console.log("failed to get 'ShowDespatchT'")}try{sessionStorage.getItem("ShowArrivalT")==String(!0)?this.ShowArrivalT=!0:sessionStorage.getItem("ShowArrivalT")==String(!1)&&(this.ShowArrivalT=!1)}catch(r){console.log("failed to get 'ShowArrivalT'")}try{sessionStorage.getItem("ShowBatchName")==String(!0)?this.ShowBatchName=!0:sessionStorage.getItem("ShowBatchName")==String(!1)&&(this.ShowBatchName=!1)}catch(i){console.log("failed to get 'ShowArrivalT'")}try{sessionStorage.getItem("ShowThisLoad")==String(!0)?this.ShowThisLoad=!0:sessionStorage.getItem("ShowThisLoad")==String(!1)&&(this.ShowThisLoad=!1)}catch(l){console.log("failed to get 'ShowThisLoad'")}try{sessionStorage.getItem("ShowCummulatedqty")==String(!0)?this.ShowCummulatedqty=!0:sessionStorage.getItem("ShowCummulatedqty")==String(!1)&&(this.ShowCummulatedqty=!1)}catch(s){console.log("failed to get 'ShowCummulatedqty'")}},load:function(){console.log("created load")},methods:{handleIDStatus:function(){sessionStorage.setItem("ShowID",JSON.stringify(this.ShowID))},handleDocketNOStatus:function(){sessionStorage.setItem("ShowDocketNO",JSON.stringify(this.ShowDocketNO))},handleSiteNameStatus:function(){sessionStorage.setItem("ShowSiteName",JSON.stringify(this.ShowSiteName))},handleLocationStatus:function(){sessionStorage.setItem("ShowLocation",JSON.stringify(this.ShowLocation))},handleTruckNOStatus:function(){sessionStorage.setItem("ShowTruckNO",JSON.stringify(this.ShowTruckNO))},handleDespatchTStatus:function(){sessionStorage.setItem("ShowDespatchT",JSON.stringify(this.ShowDespatchT))},handleArrivalTStatus:function(){sessionStorage.setItem("ShowArrivalT",JSON.stringify(this.ShowArrivalT))},handleBatchNameStatus:function(){sessionStorage.setItem("ShowBatchName",JSON.stringify(this.ShowBatchName))},handleThisLoadStatus:function(){sessionStorage.setItem("ShowThisLoad",JSON.stringify(this.ShowThisLoad))},handlecummulatedqtyStatus:function(){sessionStorage.setItem("ShowCummulatedqty",JSON.stringify(this.ShowCummulatedqty))}}};o("ce93");c.render=a,c.__scopeId="data-v-03d03cdd";t["default"]=c},3642:function(e,t,o){e.exports=o.p+"img/camera.fcf59c6c.jpg"},"3d13":function(e,t,o){"use strict";var n=o("7a23");Object(n["pushScopeId"])("data-v-4fd881fe");var a={style:{width:"138%"}},c=Object(n["createElementVNode"])("i",{class:"el-icon-location"},null,-1),r=Object(n["createElementVNode"])("span",null,"选项",-1),i=Object(n["createTextVNode"])("车辆监测"),l=Object(n["createTextVNode"])("安全帽"),s=Object(n["createElementVNode"])("i",{class:"el-icon-menu"},null,-1),u=Object(n["createElementVNode"])("span",null,"MIX",-1),d=Object(n["createElementVNode"])("i",{class:"el-icon-document"},null,-1),h=Object(n["createElementVNode"])("span",null,"语言",-1),m=Object(n["createTextVNode"])("繁体字"),b=Object(n["createTextVNode"])("中文"),g=Object(n["createElementVNode"])("i",{class:"el-icon-setting"},null,-1),S=Object(n["createElementVNode"])("span",null,"设置",-1),f=Object(n["createTextVNode"])("显示设置");function p(e,t,o,p,O,w){var j=this,N=Object(n["resolveComponent"])("el-menu-item"),V=Object(n["resolveComponent"])("el-sub-menu"),k=Object(n["resolveComponent"])("el-menu"),y=Object(n["resolveComponent"])("el-col");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(y,{span:12,id:"aside",style:{"margin-right":"5px",width:"100%"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{style:{width:"151%","border-box":"0 0 0 0"},"default-active":"2","default-openeds":[1],class:"el-menu-vertical-demo",router:"",onOpen:w.handleOpen,onClose:w.handleClose},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{index:"1",style:{width:"100%"},class:"asideSlot"},{title:Object(n["withCtx"])((function(){return[c,r]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{index:"buildTable"},{default:Object(n["withCtx"])((function(){return[i]})),_:1}),Object(n["createVNode"])(N,{index:"book"},{default:Object(n["withCtx"])((function(){return[l]})),_:1})]})),_:1}),Object(n["createVNode"])(V,{index:"2",style:{width:"100%"},class:"asideSlot"},{title:Object(n["withCtx"])((function(){return[s,u]})),default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(O.MIXItems,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(N,{onClick:function(e){return w.handleMIXItemsClick(t)}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(j.MIXItems[t]),1)]})),_:2},1032,["onClick"])})),256))]})),_:1}),Object(n["createVNode"])(V,{index:"3",style:{width:"100%"},class:"asideSlot"},{title:Object(n["withCtx"])((function(){return[d,h]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{index:"buildTable",disabled:""},{default:Object(n["withCtx"])((function(){return[m]})),_:1}),Object(n["createVNode"])(N,{index:"book",disabled:""},{default:Object(n["withCtx"])((function(){return[b]})),_:1})]})),_:1}),Object(n["createVNode"])(V,{index:"4",style:{width:"100%"},class:"asideSlot"},{title:Object(n["withCtx"])((function(){return[g,S]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{index:"ShowItems"},{default:Object(n["withCtx"])((function(){return[f]})),_:1})]})),_:1})]})),_:1},8,["onOpen","onClose"])]})),_:1})])}Object(n["popScopeId"])();o("ac1f"),o("1276");var O={data:function(){return{MIXItems:["All"],MIXItemsString:""}},mounted:function(){var e=this;this.timer=setInterval((function(){try{e.MIXItemsString=sessionStorage.getItem("allSiteListStringFormat")}catch(t){}e.MIXItems=e.MIXItemsString.substr(1,e.MIXItemsString.length-2).split(","),console.log(e.MIXItems)}),1e3)},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},handleMIXItemsClick:function(e){console.log(this.MIXItems[e]),sessionStorage.setItem("MIXItemsValue",JSON.stringify(this.MIXItems[e]))}}};o("5d49");O.render=p,O.__scopeId="data-v-4fd881fe";t["a"]=O},"4b8d":function(e,t,o){"use strict";o("52f5")},"4e64":function(e,t,o){"use strict";o("628a")},"52f5":function(e,t,o){},5314:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),a={id:"nav"};function c(e,t,o,c,r,i){var l=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(l)])}var r=o("0418"),i=o("cc54"),l=o("fd2d"),s=o("3d13"),u={name:"App"};u.render=c;var d=u,h=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),m={id:"nav"},b={id:"Header"},g={id:"Aside"},S={id:"Table"};function f(e,t,o,a,c,r){var i=Object(n["resolveComponent"])("Header"),l=Object(n["resolveComponent"])("Aside"),s=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",m,[Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(i)]),Object(n["createElementVNode"])("div",g,[Object(n["createVNode"])(l)]),Object(n["createElementVNode"])("div",S,[Object(n["createVNode"])(s,{style:{flex:"1"}})])])}var p={name:"Layout",components:{Header:r["a"],BuildTable:i["default"],Footer:l["a"],Aside:s["a"]}};o("4e64");p.render=f;var O=p,w=[{path:"/",name:"Layout",component:O,redirect:"/buildTable",children:[{path:"buildTable",name:"BuildTable",component:function(){return Promise.resolve().then(o.bind(null,"cc54"))}},{path:"book",name:"Book",component:function(){return o.e("chunk-2d0e922d").then(o.bind(null,"8bf3"))}},{path:"ShowItems",name:"ShowItems",component:function(){return Promise.resolve().then(o.bind(null,"188e"))}}]},{path:"/Login",name:"Login",component:function(){return o.e("chunk-2d2086b7").then(o.bind(null,"a55b"))}},{path:"/Register",name:"Register",component:function(){return o.e("chunk-2d0d6d35").then(o.bind(null,"73cf"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],j=Object(h["a"])({history:Object(h["b"])("/"),routes:w}),N=j,V=o("5502"),k=Object(V["a"])({state:{},mutations:{},actions:{},modules:{}}),y=o("1250");o("7437"),o("aede");Object(n["createApp"])(d).use(k).use(N).use(y["a"]).mount("#app")},"5d49":function(e,t,o){"use strict";o("6a85")},"628a":function(e,t,o){},"6a85":function(e,t,o){},"6df6":function(e,t,o){"use strict";o("f14d")},7396:function(e,t,o){e.exports=o.p+"img/xhj1.533862e9.png"},"873a":function(e,t,o){},aede:function(e,t,o){},b775:function(e,t,o){"use strict";o("d3b7");var n=o("bc3a"),a=o.n(n),c=a.a.create({timeout:5e3});c.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json;charset=utf-8",e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return"blob"===e.config.responseType||"string"===typeof t&&(t=t?JSON.parse(t):t),t}),(function(e){return console.log("err"+e),Promise.reject(e)})),t["a"]=c},cc54:function(e,t,o){"use strict";o.r(t);o("ac1f"),o("841c");var n=o("7a23");Object(n["pushScopeId"])("data-v-45c037a0");var a={style:{padding:"0px"}},c={id:"buttons"},r=Object(n["createTextVNode"])("新增"),i=Object(n["createTextVNode"])("重新导入"),l=Object(n["createTextVNode"])("清除列表"),s={id:"uploadfile"},u=Object(n["createTextVNode"])("文件上传"),d={id:"search"},h=Object(n["createTextVNode"])("查询"),m={id:"table"},b=Object(n["createTextVNode"])("编辑"),g=Object(n["createTextVNode"])("删除"),S={id:"pagination"},f={id:"Footer"},p=Object(n["createTextVNode"])("点击上传"),O={class:"dialog-footer"},w=Object(n["createTextVNode"])("取消"),j=Object(n["createTextVNode"])("确定");function N(e,t,o,N,V,k){var y=this,C=Object(n["resolveComponent"])("el-button"),v=Object(n["resolveComponent"])("el-upload"),I=Object(n["resolveComponent"])("el-input"),T=Object(n["resolveComponent"])("el-table-column"),x=Object(n["resolveComponent"])("el-popconfirm"),D=Object(n["resolveComponent"])("el-table"),B=Object(n["resolveComponent"])("el-pagination"),_=Object(n["resolveComponent"])("Footer"),L=Object(n["resolveComponent"])("el-form-item"),E=Object(n["resolveComponent"])("el-form"),A=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",c,[Object(n["createVNode"])(C,{size:"mini",type:"primary",onClick:k.add,style:{width:"18%"}},{default:Object(n["withCtx"])((function(){return[r]})),_:1},8,["onClick"]),Object(n["createVNode"])(C,{size:"mini",type:"primary",onClick:k.loadList,style:{width:"25%"}},{default:Object(n["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),Object(n["createVNode"])(C,{size:"mini",type:"primary",onClick:k.deleteList,style:{width:"25%"}},{default:Object(n["withCtx"])((function(){return[l]})),_:1},8,["onClick"])]),Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(v,{action:"http://localhost:9090/files/upload","on-sucess":k.filesUploadSucces},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(C,{type:"primary"},{default:Object(n["withCtx"])((function(){return[u]})),_:1})]})),_:1},8,["on-sucess"])]),Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(I,{size:"mini",modelValue:V.search,"onUpdate:modelValue":t[0]||(t[0]=function(e){return V.search=e}),placeholder:"请输入关键字",style:{width:"60%"},clearable:""},null,8,["modelValue"]),Object(n["createVNode"])(C,{id:"searchButton",size:"mini",type:"primary",style:{"margin-left":"2px"},onClick:k.load},{default:Object(n["withCtx"])((function(){return[h]})),_:1},8,["onClick"])]),Object(n["createElementVNode"])("div",m,[Object(n["createVNode"])(D,{data:V.tableData,style:{width:"100%"},stripe:"","row-style":k.tableRowClassName},{default:Object(n["withCtx"])((function(){return[y.ShowID?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:0,prop:"num",label:"ID",width:"180",sortable:"false"})):Object(n["createCommentVNode"])("",!0),y.ShowDocketNO?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:1,prop:"docketno",label:"序列号",width:"180",sortable:"false"})):Object(n["createCommentVNode"])("",!0),y.ShowSiteName?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:2,prop:"sitename",label:"地点",width:"180",sortable:"true"})):Object(n["createCommentVNode"])("",!0),y.ShowLocation?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:3,prop:"location",label:"地点2",width:"180",sortable:"true"})):Object(n["createCommentVNode"])("",!0),y.ShowTruckNO?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:4,prop:"trucknumber",label:"车牌号码",width:"180"})):Object(n["createCommentVNode"])("",!0),y.ShowBatchName?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:5,prop:"batchname",label:"槽口"})):Object(n["createCommentVNode"])("",!0),y.ShowDespatchT?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:6,prop:"despatchtime",label:"离槽时间"})):Object(n["createCommentVNode"])("",!0),y.ShowArrivalT?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:7,prop:"arrivaltime",label:"到达时间"})):Object(n["createCommentVNode"])("",!0),y.ShowThisLoad?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:8,prop:"thisload",label:"载重"})):Object(n["createCommentVNode"])("",!0),y.ShowCummulatedqty?(Object(n["openBlock"])(),Object(n["createBlock"])(T,{key:9,prop:"cummulatedqty",label:"总重"})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(T,{label:"操作",width:"120"},{default:Object(n["withCtx"])((function(e){return[Object(n["createVNode"])(C,{size:"mini",onClick:function(t){return k.handleEdit(e.row)},type:"text"},{default:Object(n["withCtx"])((function(){return[b]})),_:2},1032,["onClick"]),Object(n["createVNode"])(x,{title:"确认删除吗？",onConfirm:function(t){return k.handleDelete(e.row.id)}},{reference:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(C,{size:"mini",type:"danger"},{default:Object(n["withCtx"])((function(){return[g]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:1})]})),_:1},8,["data","row-style"])]),Object(n["createElementVNode"])("div",S,[Object(n["createVNode"])(B,{onSizeChange:k.handleSizeChange,onCurrentChange:k.handleCurrentChange,"current-page":V.currentPage,"page-sizes":[8,9,10],"page-size":V.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:V.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),Object(n["createElementVNode"])("div",f,[Object(n["createVNode"])(_)]),Object(n["createVNode"])(A,{title:"新增信息",modelValue:V.dialogVisible,"onUpdate:modelValue":t[9]||(t[9]=function(e){return V.dialogVisible=e}),width:"50%"},{footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",O,[Object(n["createVNode"])(C,{onClick:t[8]||(t[8]=function(e){return V.dialogVisible=!1})},{default:Object(n["withCtx"])((function(){return[w]})),_:1}),Object(n["createVNode"])(C,{type:"primary",onClick:k.save},{default:Object(n["withCtx"])((function(){return[j]})),_:1},8,["onClick"])])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{model:V.form,"label-width":"120px"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{label:"序列号"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.docketno,"onUpdate:modelValue":t[1]||(t[1]=function(e){return V.form.docketno=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"地点"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.sitename,"onUpdate:modelValue":t[2]||(t[2]=function(e){return V.form.sitename=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"地点2"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.location,"onUpdate:modelValue":t[3]||(t[3]=function(e){return V.form.location=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"车牌号码"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.trucknumber,"onUpdate:modelValue":t[4]||(t[4]=function(e){return V.form.trucknumber=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"槽点2"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.batchname,"onUpdate:modelValue":t[5]||(t[5]=function(e){return V.form.batchname=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"载重"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.thisload,"onUpdate:modelValue":t[6]||(t[6]=function(e){return V.form.thisload=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"总重"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(I,{modelValue:V.form.cummulatedqty,"onUpdate:modelValue":t[7]||(t[7]=function(e){return V.form.cummulatedqty=e}),style:{width:"60%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(L,{label:"封面"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{action:"http://localhost:9090/files/upload","on-sucess":k.filesUploadSucces},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(C,{type:"primary"},{default:Object(n["withCtx"])((function(){return[p]})),_:1})]})),_:1},8,["on-sucess"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["modelValue"])])}Object(n["popScopeId"])();var V=o("b775"),k=(o("0418"),o("fd2d")),y=o("3d13"),C=o("188e"),v={name:"BuildTable",created:function(){var e=this;this.load(),this.loadList(),this.timer=setInterval((function(){e.updateCurrentTruck(),e.GetCurrentTruck()}),5e3);try{sessionStorage.getItem("ShowID")==String(!0)?this.ShowID=!0:sessionStorage.getItem("ShowID")==String(!1)&&(this.ShowID=!1)}catch(t){console.log("failed to get 'ShowID'")}try{sessionStorage.getItem("ShowDocketNO")==String(!0)?(this.ShowDocketNO=!0,console.log("created function  1")):sessionStorage.getItem("ShowDocketNO")==String(!1)&&(this.ShowDocketNO=!1,console.log("created function  2"))}catch(o){console.log("failed to get 'ShowDocketNO'")}try{sessionStorage.getItem("ShowSiteName")==String(!0)?this.ShowSiteName=!0:sessionStorage.getItem("ShowSiteName")==String(!1)&&(this.ShowSiteName=!1)}catch(n){console.log("failed to get 'ShowSiteName'")}try{sessionStorage.getItem("ShowLocation")==String(!0)?this.ShowLocation=!0:sessionStorage.getItem("ShowLocation")==String(!1)&&(this.ShowLocation=!1)}catch(a){console.log("failed to get 'ShowLocation'")}try{sessionStorage.getItem("ShowTruckNO")==String(!0)?this.ShowTruckNO=!0:sessionStorage.getItem("ShowTruckNO")==String(!1)&&(this.ShowTruckNO=!1)}catch(c){console.log("failed to get 'ShowTruckNO'")}try{sessionStorage.getItem("ShowDespatchT")==String(!0)?this.ShowDespatchT=!0:sessionStorage.getItem("ShowDespatchT")==String(!1)&&(this.ShowDespatchT=!1)}catch(r){console.log("failed to get 'ShowDespatchT'")}try{sessionStorage.getItem("ShowArrivalT")==String(!0)?this.ShowArrivalT=!0:sessionStorage.getItem("ShowArrivalT")==String(!1)&&(this.ShowArrivalT=!1)}catch(i){console.log("failed to get 'ShowArrivalT'")}try{sessionStorage.getItem("ShowBatchName")==String(!0)?this.ShowBatchName=!0:sessionStorage.getItem("ShowBatchName")==String(!1)&&(this.ShowBatchName=!1)}catch(l){console.log("failed to get 'ShowArrivalT'")}try{sessionStorage.getItem("ShowThisLoad")==String(!0)?this.ShowThisLoad=!0:sessionStorage.getItem("ShowThisLoad")==String(!1)&&(this.ShowThisLoad=!1)}catch(s){console.log("failed to get 'ShowThisLoad'")}try{sessionStorage.getItem("ShowCummulatedqty")==String(!0)?this.ShowCummulatedqty=!0:sessionStorage.getItem("ShowCummulatedqty")==String(!1)&&(this.ShowCummulatedqty=!1)}catch(u){console.log("failed to get 'ShowCummulatedqty'")}},destroyed:function(){this.websock.close()},components:{Aside:y["a"],Footer:k["a"],ShowItems:C["default"]},methods:{load:function(){var e=this;console.log("load");var t=sessionStorage.getItem("MIXItemsValue"),o=t;null!=t&&-1==t.indexOf("All")&&"All"!==t?(o=t.substr(1,t.length-2),this.SelectedSite=o):this.SelectedSite="",console.log("===================aa=b======================",this.SelectedSite),V["a"].get("/api/user",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search,site:this.SelectedSite}}).then((function(t){console.log("-------------------load: "),console.log(t.data.records),e.tableData=t.data.records,e.total=t.data.total})),console.log("load done")},GetAllSiteByString:function(){V["a"].get("/api/user",{params:{pageNum:1,pageSize:1e4,search:"",site:""}}).then((function(e){for(var t=[],o=0;o<e.data.records.length;o++){0==t.length&&t.push(e.data.records[o].sitename);for(var n=0;n<t.length;n++){if(e.data.records[o].sitename==t[n])break;if(n==t.length-1){t.push(e.data.records[o].sitename);break}}}var a="";if(t.length>0){a=String(t[0]);for(var c=1;c<t.length;c++)a=a+","+String(t[c])}a+=", All",console.log("allSiteListStringFormat===",a),sessionStorage.setItem("allSiteListStringFormat",JSON.stringify(a))}))},filesUploadSucces:function(e){},tableRowClassName:function(e){var t=e.row,o=(e.rowIndex,{});return t.id===this.currentTrcukID?(o.color="blue",o.backgroundColor="##F1D0FB",o):(o.color="black",o.backgroundColor="#ECFEFD",o)},handleEdit:function(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0},handleDelete:function(e){var t=this;V["a"].delete("/api/user/"+e).then((function(e){console.log(e),"0"===e.code?t.$message({type:"success",message:"更新成功！"}):t.$message({type:"error",message:e.msg}),t.load()}))},handleSizeChange:function(e){this.pageSize=e,this.load()},handleCurrentChange:function(e){this.currentPage=e,this.load()},add:function(){this.dialogVisible=!0,this.form={}},updateCurrentTruck:function(){var e=this;console.log("update truck"),null==this.currentTrcukID&&(this.currentTrcukID=0),V["a"].get("/api/user/updateCurrentTruck/"+this.total+"/"+this.currentTrcukID).then((function(t){console.log(t),"0"===t.code&&null!=t.data.id&&0!=t.data.id?(e.currentPage=Math.ceil(t.data.num/e.pageSize),e.currentTrcukID=t.data.num):"0"===t.code?(e.currentTrcukID=0,e.$message({type:"success",message:"第一辆车还未到达！"+e.currentTrcukID})):e.$message({type:"error",message:t.msg+e.currentTrcukID}),e.load()})),console.log("update truck done")},GetCurrentTruck:function(){console.log("update truck  333"),null==this.currentTrcukID&&(this.currentTrcukID=0),V["a"].get("/api/user/GetCurrentTruckNO/"+this.total+"/"+this.currentTrcukID).then((function(e){console.log("res:"),console.log(e.data.docketno),console.log("---res:")})),console.log("update truck done")},loadList:function(){var e=this;console.log("start load list"),V["a"].post("/api/user/loadlist/"+this.total).then((function(t){"0"===t.code?e.$message({type:"success",message:"更新成功！"}):e.$message({type:"error",message:t.msg}),e.GetAllSiteByString(),e.load(),e.dialogVisible=!1}))},deleteList:function(){var e=this;V["a"].delete("/api/user/deletelist/"+this.total).then((function(t){console.log(t),"0"===t.code?e.$message({type:"success",message:"更新成功！"}):e.$message({type:"error",message:t.msg}),e.total=0,e.load(),e.dialogVisible=!1}))},save:function(){var e=this;this.form.id?V["a"].put("/api/user",this.form).then((function(t){console.log(t),"0"===t.code?e.$message({type:"success",message:"更新成功！"}):e.$message({type:"error",message:t.msg}),e.load(),e.dialogVisible=!1})):V["a"].post("/api/user",this.form).then((function(t){console.log(t),"0"===t.code?e.$message({type:"success",message:"添加成功！"}):e.$message({type:"error",message:t.msg}),e.load(),e.dialogVisible=!1}))},initWebSocket:function(){},websocketonopen:function(){var e={test:"12345"};this.websocketsend(JSON.stringify(e)),console.log("Open sucess")},websocketonerror:function(){this.initWebSocket()},websocketonmessage:function(e){var t=JSON.parse(e.data);console.log("=================---------redata-----------=============="),console.log(t)},websocketsend:function(e){this.websock.send(e)},websocketclose:function(e){console.log("断开连接",e)}},data:function(){return{ShowID:!0,ShowDocketNO:!1,ShowSiteName:!1,ShowLocation:!0,ShowTruckNO:!0,ShowDespatchT:!0,ShowArrivalT:!0,ShowBatchName:!1,ShowThisLoad:!0,ShowCummulatedqty:!1,SelectedSite:"",websock:null,form:{},filename:"",dialogVisible:!1,currentTrcukID:0,search:"",total:1,currentPage:1,pageSize:8,tableData:[]}}};o("6df6");v.render=N,v.__scopeId="data-v-45c037a0";t["default"]=v},ce93:function(e,t,o){"use strict";o("873a")},edec:function(e,t,o){e.exports=o.p+"img/zoonin.06eb44f9.jpg"},f14d:function(e,t,o){},fd2d:function(e,t,o){"use strict";var n=o("7a23"),a=o("3642"),c=o.n(a),r=o("edec"),i=o.n(r);Object(n["pushScopeId"])("data-v-c5bdcfc2");var l={style:{height:"100%","border-bottom":"1px solid red",display:"flex"}},s=Object(n["createElementVNode"])("div",{id:"camera"},[Object(n["createElementVNode"])("img",{src:c.a,alt:"C:\\Software\\IDEA_Projects\\GIT\\001hkcrc\\vue\\src\\assets\\img\\camera.jpg"})],-1),u=Object(n["createElementVNode"])("div",{id:"zoonin"},[Object(n["createElementVNode"])("img",{src:i.a,alt:"zoonin1.jpg",style:{height:"100%",width:"100%"}})],-1),d=[s,u];function h(e,t,o,a,c,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,d)}Object(n["popScopeId"])();var m={name:"Footer",data:function(){return{image1:"../webfiles/camera.jpg",numTest:1}},computed:{},created:function(){},methods:{updateEx:function(){1==this.numTest?(this.image1="../webfiles/camera.jpg",this.numTest=2):(this.image1="../webfiles/camera1.jpg",this.numTest=1),console.log("====Update camera====",this.image1,this.numTest)}}};o("08b9");m.render=h,m.__scopeId="data-v-c5bdcfc2";t["a"]=m}});
//# sourceMappingURL=app.ee5f01c1.js.map