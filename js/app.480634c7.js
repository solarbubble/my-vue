(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-09f13312":"4b8d2456","chunk-0a2cb40a":"d12caacb","chunk-1fe08ddc":"f2db8f65","chunk-230217a0":"6fef93c5","chunk-24bcd976":"177fa4a9","chunk-24edacf1":"be6f34e9","chunk-2e736cbf":"bf196e62","chunk-43bce742":"713a49ce","chunk-66fcf9b1":"e9779735","chunk-6c273948":"980bf67c","chunk-70057374":"1b79c06e","chunk-768ae2b9":"180fb017","chunk-91268c8c":"073b49ff","chunk-a4b4bf38":"1548eaad","chunk-ef211c80":"a2eeca49"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-09f13312":1,"chunk-0a2cb40a":1,"chunk-1fe08ddc":1,"chunk-230217a0":1,"chunk-24bcd976":1,"chunk-24edacf1":1,"chunk-2e736cbf":1,"chunk-43bce742":1,"chunk-66fcf9b1":1,"chunk-6c273948":1,"chunk-70057374":1,"chunk-768ae2b9":1,"chunk-91268c8c":1,"chunk-a4b4bf38":1,"chunk-ef211c80":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-09f13312":"cf6ea22a","chunk-0a2cb40a":"ab423e90","chunk-1fe08ddc":"667f0550","chunk-230217a0":"0b606b54","chunk-24bcd976":"e65d3229","chunk-24edacf1":"97e46409","chunk-2e736cbf":"63002551","chunk-43bce742":"7b163f63","chunk-66fcf9b1":"e4fd8f56","chunk-6c273948":"015f3f03","chunk-70057374":"065b1828","chunk-768ae2b9":"7b163f63","chunk-91268c8c":"46ad796a","chunk-a4b4bf38":"a729f7b6","chunk-ef211c80":"6a5a23de"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"29ca":function(e,t,n){"use strict";n("77d8")},4360:function(e,t,n){"use strict";n("caad"),n("2532"),n("a434"),n("99af");var a=n("a026"),r=n("2f62");a["default"].use(r["a"]);var o=new r["a"].Store({state:{count:2,tabbarKeepAlive:["login","shoppingCart","calendar","vuejswar"],tempKeepAlive:[],tabbarList:[{name:"首页",icon:"home-o",path:"/"},{name:"工具",icon:"search",path:"/shoppingCart"},{name:"我的",icon:"setting-o",path:"/calendar"},{name:"实战",icon:"setting-o",path:"/vuejswar"}]},mutations:{add:function(e){e.count++},reduce:function(e){e.count--},handleTempKeepAlive:function(e,t){var n=t.toName,a=t.fromName;e.tempKeepAlive.includes(n)?e.tempKeepAlive.includes(a)&&e.tempKeepAlive.splice(e.tempKeepAlive.indexOf(a),1):e.tempKeepAlive.push(n)},clearTempKeepAlive:function(e){e.tempKeepAlive=[]}},getters:{keepAlive:function(e){return e.tabbarKeepAlive.concat(e.tempKeepAlive)}}});t["a"]=o},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getWeatherInfo",(function(){return J}));n("66b9");var r=n("b650"),o=(n("5246"),n("6b41")),c=(n("537a"),n("ac28")),i=(n("a52c"),n("2ed4")),u=(n("ab71"),n("58e6")),l=(n("2994"),n("2bdd")),s=(n("e7e5"),n("d399")),f=(n("8a58"),n("e41f")),d=(n("e17f"),n("2241")),h=(n("be7f"),n("565f")),p=(n("5f5f"),n("f253")),m=(n("db2c"),n("1125")),v=(n("ac1e"),n("543e")),b=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("keep-alive",{attrs:{include:e.keepAlive}},[n("router-view",{staticClass:"com-page-container"})],1)],1)],1)},k=[],y=n("1da1"),w=n("5530"),O=(n("96cf"),n("b0c0"),n("caad"),n("2532"),n("2f62")),A={name:"App",computed:Object(w["a"])(Object(w["a"])({},Object(O["c"])({routerHistory:function(e){return e.routerHistory},tabbarKeepAlive:function(e){return e.tabbarKeepAlive}})),Object(O["b"])(["keepAlive"])),watch:{$route:function(e,t){console.log("isBack",this.$router.isBack),this.$router.isBack?this.transitionName="com-slide-right":!t.name||this.tabbarKeepAlive.includes(e.name)?this.transitionName="":this.transitionName="com-slide-left",this.$router.isBack=!1}},data:function(){return{transitionName:"com-fade",dom:[]}},methods:{onDeviceReady:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=window.chcp,n&&n.fetchUpdate((function(e,t){if(e)alert("1当前是最新版本");else if(-2===e.code){var a="1发现新版本，为避免影响使用请更新";alert(a),n.requestApplicationUpdate(a,null,null)}})),a=e,document.addEventListener("backbutton",a.onBackKeyDown,!1),a.initJPush(),console.log("uuid:"+device.uuid),t.next=8,e.checkPermissions();case 8:case"end":return t.stop()}}),t)})))()},onBackKeyDown:function(){var e=this;console.log("currentRouteName",e.$router.currentRoute.name),e.tabbarKeepAlive.includes(e.$router.currentRoute.name)?(console.log("111"),e.$toast({message:"再按一次退出",position:"bottom"}),document.addEventListener("backbutton",e.exitApp,!1),setTimeout((function(){document.removeEventListener("backbutton",e.exitApp,!1)}),2e3)):(console.log("222"),e.$router.go(-1))},exitApp:function(){navigator.app.exitApp()},checkPermissions:function(){return Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=cordova.plugins.permissions,n=[t.ACCESS_COARSE_LOCATION,t.CAMERA,t.WRITE_EXTERNAL_STORAGE],t.requestPermissions(n,(function(e){console.log("success",e)}),(function(e){console.log("error",e)}));case 3:case"end":return e.stop()}}),e)})))()},initJPush:function(){console.log("===[初始化极光推送]===");try{window.JPush.init(),document.addEventListener("jpush.receiveRegistrationId",(function(e){alert(e.registrationId)}),!1),window.JPush.setDebugMode(!0),"Android"!=device.platform&&window.JPush.setApplicationIconBadgeNumber(0)}catch(e){alert(e)}document.addEventListener("jpush.openNotification",(function(t){try{console.log("openNotification",JSON.stringify(t)),alert(JSON.stringify(t));var n=t.extras.id,a=t.extras.lx;alert(n+"==="+a)}catch(e){console.log("JPushPlugin:onOpenNotification"+e)}}),!1),document.addEventListener("jpush.receiveNotification",(function(t){try{console.log("receiveNotification",JSON.stringify(t)),alert(JSON.stringify(t));var n=t.extras.id,a=t.extras.lx;alert(n+"==="+a)}catch(e){console.log("JPushPlugin:onReceiveNotification"+e)}}),!1)}},created:function(){var e=this;document.addEventListener("deviceready",e.onDeviceReady,!1),alert("版本5")},mounted:function(){},destroyed:function(){var e=this;document.removeEventListener("backbutton",e.exitApp,!1),document.removeEventListener("backbutton",e.onBackKeyDown,!1)}},N=A,E=(n("29ca"),n("2877")),T=Object(E["a"])(N,g,k,!1,null,"a3a27fc6",null),j=T.exports,S=n("a18c"),D=n("4360"),P={GET_WEATHER_INFO:"https://restapi.amap.com/v3/weather/weatherInfo"},C=P,I=n("b85c"),x=(n("d3b7"),n("a434"),n("bc3a")),R=n.n(x),F=n("4328"),K=n.n(F),L=[],M=12e4;setInterval((function(){var e,t=0,n=(new Date).getTime(),a=Object(I["a"])(L);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(n-r.timeStamp>M){L.length=t;break}t++}}catch(o){a.e(o)}finally{a.f()}}),M),R.a.interceptors.request.use((function(e){var t=e.data||{};return t.cancelTokenId&&(e.cancelToken=new R.a.CancelToken((function(e){L.unshift({id:t.cancelTokenId,cancel:e,timeStamp:(new Date).getTime()})}))),delete t.cancelTokenId,"post"===e.method.toLowerCase()&&("json"===e.type?(e.headers["Content-Type"]="application/json;charset=UTF-8",e.data=JSON.stringify(e.data)):"formData"===e.type?console.log("=================",e.data):e.data=K.a.stringify(e.data)),e})),R.a.interceptors.response.use((function(e){return e.data&&200===e.status||200!==e.status&&console.log("系统异常!"),e}),(function(e){return console.log(e),Promise.reject(e)}));var _=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{method:"GET"},n=!0,a=!1,"POST"!==t.method.toUpperCase()&&"DELETE"!==t.method.toUpperCase()&&t.downFile&&(a=!0),e.prev=4,e.next=7,R()({method:t.method,url:t.url,data:n?t.data:null,params:"POST"===t.method.toUpperCase()?null:n?t.data:null,responseType:a?"blob":"json",type:t.type,transformRequest:[function(){return null!==t.data?JSON.stringify(t.data):""}],headers:{"Content-Type":"application/json;charset=UTF-8"}});case 7:if(r=e.sent,!a){e.next=10;break}return e.abrupt("return",r);case 10:if(!(r.status>=200&&r.status<300)){e.next=12;break}return e.abrupt("return",r.data);case 12:return e.abrupt("return",!0);case 15:throw e.prev=15,e.t0=e["catch"](4),console.log(e.t0),new b["default"],new Error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,15]])}))),J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json";return _({url:"".concat(C.GET_WEATHER_INFO),method:"GET",data:e,type:t})},B=n("53ca"),U=n("d4ec"),$=n("bee2"),q=n("ade3"),V=(n("ac1f"),n("1276"),n("466d"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("841c"),n("fb6a"),n("99af"),n("5319"),n("a9e3"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AQI",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=6;return t=t.toUpperCase(),("0"===e||0===e||e)&&(e=Number(e),"AQI"===t&&(e>=0&&e<=50?a=0:e>50&&e<=100?a=1:e>100&&e<=150?a=2:e>150&&e<=200?a=3:e>200&&e<=300?a=4:e>300&&(a=5)),"SO2"!==t&&"SO₂"!==t||(n?e>=0&&e<=50?a=0:e>50&&e<=150?a=1:e>150&&e<=475?a=2:e>475&&e<=800?a=3:e>800&&e<=1600?a=4:e>1600&&(a=5):e>=0&&e<=150?a=0:e>150&&e<=500?a=1:e>500&&e<=650?a=2:e>650&&e<=800?a=3:e>800&&(a=4)),"NO2"!==t&&"NO₂"!==t||(n?e>=0&&e<=40?a=0:e>40&&e<=80?a=1:e>80&&e<=180?a=2:e>180&&e<=280?a=3:e>280&&e<=565?a=4:e>565&&(a=5):e>=0&&e<=100?a=0:e>100&&e<=200?a=1:e>200&&e<=700?a=2:e>700&&e<=1200?a=3:e>1200&&e<=2340?a=4:e>2340&&(a=5)),"NO"===t&&e>=0&&(a=0),"NOX"===t&&(n?e>=0&&e<=40?a=0:e>40&&e<=80?a=1:e>80&&e<=180?a=2:e>180&&e<=280?a=3:e>280&&e<=565?a=4:e>565&&(a=5):e>=0&&e<=100?a=0:e>100&&e<=200?a=1:e>200&&e<=700?a=2:e>700&&e<=1200?a=3:e>1200&&e<=2340?a=4:e>2340&&(a=5)),"PM10"!==t&&"PM₁₀"!==t||(e>=0&&e<=50?a=0:e>50&&e<=150?a=1:e>150&&e<=250?a=2:e>250&&e<=350?a=3:e>350&&e<=420?a=4:e>420&&(a=5)),"CO"===t&&(n?e>=0&&e<=2?a=0:e>2&&e<=4?a=1:e>4&&e<=14?a=2:e>14&&e<=24?a=3:e>24&&e<=36?a=4:e>36&&(a=5):e>=0&&e<=5?a=0:e>5&&e<=10?a=1:e>10&&e<=35?a=2:e>35&&e<=60?a=3:e>60&&e<=90?a=4:e>90&&(a=5)),"O3"!==t&&"O₃"!==t||(n?e>=0&&e<=100?a=0:e>100&&e<=160?a=1:e>160&&e<=215?a=2:e>215&&e<=265?a=3:e>265&&e<=800?a=4:e>800&&(a=5):e>=0&&e<=160?a=0:e>160&&e<=200?a=1:e>200&&e<=300?a=2:e>300&&e<=400?a=3:e>400&&e<=800?a=4:e>800&&(a=5)),"PM25"!==t&&"PM₂.₅"!==t||(e>=0&&e<=35?a=0:e>35&&e<=75?a=1:e>75&&e<=115?a=2:e>115&&e<=150?a=3:e>150&&e<=250?a=4:e>250&&(a=5)),"WINDSPEED"===t&&e>=0&&(a=7),"VISIBILITY"===t&&e>=0&&(a=7)),a}),W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AQI",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a="#fff";return t=t.toUpperCase(),("0"===e||0===e||e)&&(e=Number(e),e>=0&&e<=50||e>50&&e<=100?a="#323233":e>100&&(a="#fff"),"SO2"!==t&&"SO₂"!==t||(n?e>=0&&e<=50||e>50&&e<=150?a="#323233":e>150&&(a="#fff"):e>=0&&e<=150||e>150&&e<=500?a="#323233":e>500&&(a="#fff")),"NO2"!==t&&"NO₂"!==t||(n?e>=0&&e<=40||e>40&&e<=80?a="#323233":e>80&&(a="#fff"):e>=0&&e<=100||e>100&&e<=200?a="#323233":e>200&&(a="#fff")),"NO"===t&&e>=0&&(a="#323233"),"NOX"===t&&(n?e>=0&&e<=40||e>40&&e<=80?a="#323233":e>80&&(a="#fff"):e>=0&&e<=100||e>100&&e<=200?a="#323233":e>200&&(a="#fff")),"PM10"!==t&&"PM₁₀"!==t||(e>=0&&e<=50||e>50&&e<=150?a="#323233":e>150&&(a="#fff")),"CO"===t&&(n?e>=0&&e<=2||e>2&&e<=4?a="#323233":e>4&&(a="#fff"):e>=0&&e<=5||e>5&&e<=10?a="#323233":e>10&&(a="#fff")),"O3"!==t&&"O₃"!==t||(n?e>=0&&e<=100||e>100&&e<=160?a="#323233":e>160&&(a="#fff"):e>=0&&e<=160||e>160&&e<=200?a="#323233":e>200&&(a="#fff")),"PM25"!==t&&"PM₂.₅"!==t||(e>=0&&e<=35||e>35&&e<=75?a="#323233":e>75&&(a="#fff")),"WINDSPEED"===t&&e>=0&&(a="#fff"),"VISIBILITY"===t&&e>=0&&(a="#fff")),a},H=(new b["default"],function(){function e(){Object(U["a"])(this,e),Object(q["a"])(this,"base64ToFile",(function(e,t){var n=e.split(","),a=n[0].match(/:(.*?);/)[1],r=atob(n[1]),o=r.length,c=new Uint8Array(o);while(o--)c[o]=r.charCodeAt(o);return new File([c],t,{type:a})})),this.getAqiLevel=V,this.getAqiFontColor=W,this.DAY=864e5,this.WEEK=7*this.DAY,this.colors=["rgb(120,205,0)","rgb(254,218,30)","rgb(247,138,0)","rgb(216,29,29)","rgb(146,2,86)","rgb(96,0,28)"],this.aqiColorArr=["#3FD271","#FFC517","#FF8A2E","#FC3939","#D31468","#AF0522","#D8D9D9","#588DFF"],this.aqiShadowArr=["rgba(63, 210, 113, 0.35)","rgba(255, 197, 23, 0.35)","rgba(255, 138, 46, 0.35)","rgba(252, 57, 57, 0.35)","rgba(211, 20, 104, 0.35)","rgba(175, 5, 34, 0.35)","rgba(216, 217, 217, 0.35)"]}return Object($["a"])(e,[{key:"getUrlParams",value:function(){var e=window.location.search;if(e.indexOf("?")>-1){e=e.slice(1);var t,n=e.split("&"),a={},r=Object(I["a"])(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;o=o.split("="),a[o[0]]=o[1]}}catch(c){r.e(c)}finally{r.f()}return this.params=a,a}return{}}},{key:"getTotalPage",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e=t%n===0?t/n:parseInt(t/n)+1,e}},{key:"getFormatDate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e instanceof Date||(e=new Date(e));var n=this.formatNum(e.getFullYear()),a=this.formatNum(e.getMonth()+1),r=this.formatNum(e.getDate()),o=this.formatNum(e.getHours()),c=this.formatNum(e.getMinutes()),i=this.formatNum(e.getSeconds()),u="".concat(n,"-").concat(a,"-").concat(r),l="".concat(o,":").concat(c,":").concat(i);return 1===t?u:2===t?l:3===t?u+" 00:00:00":4===t?"".concat(n).concat(a).concat(r):5===t?[n,a,r,o,c,i]:6===t?"".concat(u," ").concat(o,":00:00"):"".concat(u," ").concat(l)}},{key:"formatNum",value:function(e){return e<10?"0"+e:e+""}},{key:"getTimeRang",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=this.DAY,a=(t||(new Date).getTime())+n,r=a-e*n,o=new Date(a),c=new Date(r),i=this.getFormatDate(o,3),u=this.getFormatDate(c,3);return[u,i]}},{key:"getPrevMonth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";e=e.slice(0,7),e+="-01";var n=new Date(e.replace(/\-/g,"/")),a=this.getFormatDate(n,5),r=a[0],o=a[1]-1;return o<=0?(o=12,--r):o<10&&(o="0"+o),"".concat(r).concat(t).concat(o)}},{key:"getNextMonth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";e=e.slice(0,7),e+="-01";var n=new Date(e.replace(/\-/g,"/")),a=this.getFormatDate(n,5),r=a[0],o=+a[1]+1;return o>12?(o="01",++r):o<10&&(o="0"+o),"".concat(r).concat(t).concat(o)}},{key:"getRangColor",value:function(e){var t=e.value,n=e.rang,a=void 0===n?[]:n,r=e.colors,o=void 0===r?this.colors:r,c=e.defaultColor,i=void 0===c?"rgb(170,170,170)":c;if(a.length<=1||o.length<=0)return i;if(t<=a[0])return i;for(var u=1,l=u-1;u<a.length||l<o.length;u++,l++)if(t<=a[u])return o[l];return i}},{key:"getStorage",value:function(e){var t,n=window.localStorage.getItem(e);try{t=JSON.parse(n)}catch(a){return n}return t}},{key:"getStorageVal",value:function(e){for(var t=e.split("."),n=this.getStorage(t[0]),a=1;a<t.length;a++){if(!n)break;n=n[t[a]]}return n}},{key:"setStorage",value:function(e,t){var n=JSON.stringify(t);window.localStorage.setItem(e,n)}},{key:"mergeObj",value:function(e,t){for(var n in t)if(t[n]instanceof Array){if(t[n].length<=0||!(e[n]instanceof Array))continue;var a,r=Object(I["a"])(e[n]);try{for(r.s();!(a=r.n()).done;){var o=a.value;this.mergeObj(o,t[n][0])}}catch(i){r.e(i)}finally{r.f()}}else if("object"===Object(B["a"])(t[n])){var c=this.mergeObj(e[n]||{},t[n]);e[n]||(e[n]=c)}else{if(e[n]||0===e[n]||!1===e[n])continue;e[n]=t[n]}return e}},{key:"throttle",value:function(e,t){var n=new Date;return function(){var a=new Date;a-n>=t&&(e.apply(this,arguments),n=a)}}},{key:"getTimeStampId",value:function(){var e=(new Date).getTime(),t=parseInt(1e3*Math.random());return 1e3*e+t}},{key:"toRealPx",value:function(e){return e/75*(window.innerWidth/10)}},{key:"toRealRem",value:function(e){return e/75}},{key:"getValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!(t.length<=0)){var n,a=Object(I["a"])(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(!e)break;e=e[r]}}catch(o){a.e(o)}finally{a.f()}return e}}},{key:"sortArr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e.length<=0)return 0;for(var n=0,a=1;a<e.length;a++)for(var r=a;r>0;r--){var o=this.getValue(e[r-1],t),c=this.getValue(e[r],t);if(0===o||o||!c&&0===c){if(o=+o,0!==c&&!c){n++;break}if(c=+c,o>c){var i=[e[r],e[r-1]];e[r-1]=i[0],e[r]=i[1]}}else{var u=[e[r],e[r-1]];e[r-1]=u[0],e[r]=u[1]}}var l=this.getValue(e[0],t);return 0===l||l?e.length-n:0}},{key:"sortArrReverse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e.length<=0)return 0;for(var n=0,a=1;a<e.length;a++)for(var r=a;r>0;r--){var o=this.getValue(e[r-1],t),c=this.getValue(e[r],t);if(0===o||o||!c&&0===c){if(o=+o,0!==c&&!c){n++;break}if(c=+c,o<c){var i=[e[r],e[r-1]];e[r-1]=i[0],e[r]=i[1]}}else{var u=[e[r],e[r-1]];e[r-1]=u[0],e[r]=u[1]}}var l=this.getValue(e[0],t);return 0===l||l?e.length-n:0}},{key:"MsgError",value:function(e){var t=function(e){this.name="MsgError",this.message=e||"系统错误",this.stack=(new Error).stack};return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,new t(e)}},{key:"loading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...";Object(s["a"])({type:"loading",message:e,forbidClick:!0,duration:0})}},{key:"getTimeStampId16",value:function(){var e=(new Date).getTime(),t=Math.random()+"";return"".concat(e,"-").concat(t.substr(2,16))}}]),e}()),Y=new H,G=n("b311"),Q=n.n(G);b["default"].prototype.$http=a,b["default"].prototype.$common=Y,b["default"].prototype.$eventBus=new b["default"],b["default"].prototype.clipboard=Q.a;var X=n("723b");b["default"].directive("on-clickaway",X["directive"]);n("6562"),n("f579"),n("833e");b["default"].config.productionTip=!1,b["default"].use(r["a"]).use(o["a"]).use(c["a"]).use(i["a"]).use(u["a"]).use(l["a"]).use(s["a"]).use(f["a"]).use(d["a"]).use(h["a"]).use(p["a"]).use(m["a"]).use(v["a"]),window.addEventListener("popstate",(function(e){S["a"].isBack=!0}),!1);var z=window.chcp;z&&z.fetchUpdate((function(e,t){if(e)alert("当前是最新版本");else if(-2===e.code){var n="发现新版本，为避免影响使用请更新";alert(n),z.requestApplicationUpdate(n,null,null)}})),new b["default"]({el:"#app",router:S["a"],store:D["a"],components:{App:j},template:"<App/>"})},6562:function(e,t,n){},"77d8":function(e,t,n){},a18c:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n("1da1"),r=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("caad"),n("2532"),n("b0c0"),n("a026")),o=n("8c4f"),c=n("4360");r["default"].use(o["a"]);var i=[{path:"/view-template",name:"viewTemplate",meta:{title:"view模板"},component:function(){return n.e("chunk-43bce742").then(n.bind(null,"55ed"))}},{path:"/",name:"login",meta:{title:"登录页",landscape:!1},component:function(){return n.e("chunk-230217a0").then(n.bind(null,"9ed6"))}},{path:"/pollutionRose",name:"pollutionRose",meta:{title:"污染玫瑰",landscape:!0},component:function(){return n.e("chunk-ef211c80").then(n.bind(null,"aae7"))}},{path:"/calendar",name:"calendar",meta:{title:"空气日历",landscape:!1},component:function(){return n.e("chunk-09f13312").then(n.bind(null,"6eea"))}},{path:"/download",name:"download",meta:{title:"下载页"},component:function(){return n.e("chunk-66fcf9b1").then(n.bind(null,"0ea3"))}}],u=[{path:"/demo-template",name:"demoTemplate",meta:{title:"demo模板"},component:function(){return n.e("chunk-768ae2b9").then(n.bind(null,"70b7"))}},{path:"/slot",name:"slot",meta:{title:"插槽-slot"},component:function(){return n.e("chunk-1fe08ddc").then(n.bind(null,"0cdd"))}},{path:"/vuejswar",name:"vuejswar",meta:{title:"vue.js实战"},component:function(){return n.e("chunk-24edacf1").then(n.bind(null,"0a20"))}},{path:"/shoppingCart",name:"shoppingCart",meta:{title:"vue.js实战-购物车"},component:function(){return n.e("chunk-70057374").then(n.bind(null,"ec95"))}},{path:"/pdf",name:"pdf",meta:{title:"pdf预览"},component:function(){return n.e("chunk-0a2cb40a").then(n.bind(null,"50f3"))}},{path:"/drag",name:"drag",meta:{title:"drag拖拽"},component:function(){return n.e("chunk-a4b4bf38").then(n.bind(null,"12aa"))}},{path:"/weather",name:"weather",meta:{title:"天气预报"},component:function(){return n.e("chunk-91268c8c").then(n.bind(null,"1161"))}},{path:"/callCamera",name:"callCamera",meta:{title:"调用摄像头",landscape:!1},component:function(){return n.e("chunk-24bcd976").then(n.bind(null,"6a4f"))}},{path:"/cordova",name:"cordova",meta:{title:"cordova能力"},component:function(){return n.e("chunk-2e736cbf").then(n.bind(null,"ee56"))}},{path:"/clickaway",name:"clickaway",meta:{title:"插件vue-clickaway2"},component:function(){return n.e("chunk-6c273948").then(n.bind(null,"d87b"))}}],l=i.concat(u),s=new o["a"]({routes:l});s.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c["a"].state.tabbarKeepAlive.includes(t.name)?c["a"].commit("clearTempKeepAlive"):c["a"].commit("handleTempKeepAlive",{toName:t.name,fromName:n.name}),a(),t.meta["landscape"]!==n.meta["landscape"])try{t.meta["landscape"]?(screen.orientation.unlock(),screen.orientation.lock("landscape")):(screen.orientation.unlock(),screen.orientation.lock("portrait"))}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),t["a"]=s},f579:function(e,t,n){}});
//# sourceMappingURL=app.480634c7.js.map