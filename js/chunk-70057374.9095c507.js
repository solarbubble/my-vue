(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70057374"],{"1a38":function(t,n,e){"use strict";e("5966")},"25f0":function(t,n,e){"use strict";var a=e("6eeb"),r=e("825a"),i=e("d039"),c=e("ad6d"),o="toString",u=RegExp.prototype,s=u[o],l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),d=s.name!=o;(l||d)&&a(RegExp.prototype,o,(function(){var t=r(this),n=String(t.source),e=t.flags,a=String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e);return"/"+n+"/"+a}),{unsafe:!0})},5966:function(t,n,e){},d81d:function(t,n,e){"use strict";var a=e("23e7"),r=e("b727").map,i=e("1dde"),c=i("map");a({target:"Array",proto:!0,forced:!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},db18:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tab-bar"},[e("van-tabbar",{attrs:{placeholder:""},on:{change:t.routerChange},model:{value:t.curPath,callback:function(n){t.curPath=n},expression:"curPath"}},[t._l(t.$store.state.tabbarList,(function(n,a){return[e("van-tabbar-item",{key:a,attrs:{name:n.path,icon:n.icon}},[t._v(t._s(n.name))])]}))],2)],1)},r=[],i=(e("ac1f"),e("5319"),{name:"tabBar",watch:{"$route.path":{handler:function(t,n){this.curPath=t},deep:!0,immediate:!0}},computed:{},data:function(){return{curPath:this.$route.path}},methods:{routerChange:function(t){this.curPath=t,this.$router.replace(t)}}}),c=i,o=e("2877"),u=Object(o["a"])(c,a,r,!1,null,"dbbd4d84",null);n["a"]=u.exports},ec95:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t.list.length?[e("table",[t._m(0),e("tbody",[t._l(t.list,(function(n,a){return[e("tr",{key:a},[e("td",[t._v(t._s(a+1))]),e("td",[t._v(t._s(n.name))]),e("td",[t._v(t._s(n.price))]),e("td",[e("button",{attrs:{disabled:t.list[a].count<=1},on:{click:function(n){return t.handleMinus(a)}}},[t._v("-")]),t._v(" "+t._s(n.count)+" "),e("button",{on:{click:function(n){return t.handlePlus(a)}}},[t._v("+")])]),e("td",[e("button",{on:{click:function(n){return t.handleRemove(a)}}},[t._v("移除")])])])]}))],2)]),e("div",[t._v("总价：￥ "+t._s(t.totalPrice))])]:e("div",[t._v("购物车为空")]),e("tab-bar")],2)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th"),e("th",[t._v("商品名称")]),e("th",[t._v("商品单价")]),e("th",[t._v("购买数量")]),e("th",[t._v("操作")])])])}],i=(e("d81d"),e("ac1f"),e("5319"),e("d3b7"),e("25f0"),e("a434"),e("db18")),c={name:"shoppingCart",components:{tabBar:i["a"]},props:{},data:function(){return{list:[{id:1,name:"iPhone 7",price:6188,count:1},{id:2,name:"iPad Pro",price:5888,count:1},{id:3,name:"MacBook Pro",price:21488,count:1}]}},filters:{},computed:{totalPrice:function(){var t=0;return this.list.map((function(n,e){t+=n.price*n.count})),t.toString().replace(/\B(?=((\d{3})+)$)/g,",")}},methods:{handleMinus:function(t){this.list[t].count>1&&this.list[t].count--},handlePlus:function(t){this.list[t].count++},handleRemove:function(t){this.list.splice(t,1)}}},o=c,u=(e("1a38"),e("2877")),s=Object(u["a"])(o,a,r,!1,null,"3797fb25",null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-70057374.9095c507.js.map