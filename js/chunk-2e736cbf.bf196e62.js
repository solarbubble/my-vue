(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e736cbf"],{"56a0":function(t,e,n){"use strict";n("871b")},"871b":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ee56:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("img",{attrs:{src:t.imgsrc,width:"64",height:"64"}}),n("br"),n("h1",[t._v("位置信息："+t._s(t.msg))]),n("h1",[t._v("二维码信息："+t._s(t.codeinfo))]),n("button",{on:{click:function(e){return t.getposition(1)}}},[t._v("获取位置")]),n("button",{on:{click:function(e){return t.getimage("SAVEDPHOTOALBUM")}}},[t._v("从文件夹获取")]),n("button",{on:{click:function(e){return t.getimage("Camera")}}},[t._v("使用相机")]),n("button",{on:{click:function(e){return t.getcode()}}},[t._v("获取二维码")]),n("br")])},c=[],i=n("cf05"),a=n.n(i),r={name:"Cordova",data:function(){return{imgsrc:a.a,msg:"Welcome to Your Vue.js App",codeinfo:"这是初始的二维码信息",sourceType:{SAVEDPHOTOALBUM:0,Camera:1}}},methods:{getposition:function(t){navigator.vibrate(500);var e=this,n=function(t){e.msg="Latitude:\t"+t.coords.latitude+"\nLongitude:\t"+t.coords.longitude+"\nAltitude:\t"+t.coords.altitude+"\nAccuracy:\t"+t.coords.accuracy+"\nAltitude Accuracy:\t"+t.coords.altitudeAccuracy+"\nHeading:\t"+t.coords.heading+"\nSpeed:\t"+t.coords.speed+"\nTimestamp:\t"+t.timestamp+"\n"},o=function(t){e.msg="code: "+t.code+"\nmessage: "+t.message+"\n"};navigator.geolocation.getCurrentPosition(n,o,{maximumAge:3e4,timeout:3e4,enableHighAccuracy:t})},getimage:function(t){var e=this;function n(t){e.imgsrc="data:image/jpeg;base64,"+t}function o(t){alert("Failed because: "+t)}navigator.camera.getPicture(n,o,{quality:50,sourceType:e.sourceType[t],destinationType:Camera.DestinationType.DATA_URL})},getcode:function(){var t=this;cordova.plugins.barcodeScanner.scan((function(e){t.codeinfo="We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled}),(function(t){alert("Scanning failed: "+t)}))}},mounted:function(){document.addEventListener("deviceready",e,!1);var t=this;function e(){t.msg="cordova is ready"}}},u=r,s=(n("56a0"),n("2877")),d=Object(s["a"])(u,o,c,!1,null,"0652f816",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2e736cbf.bf196e62.js.map