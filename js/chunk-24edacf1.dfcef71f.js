(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24edacf1"],{"0a20":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("nav-bar"),n("div",{ref:"content",staticClass:"content"},[n("pull-refresh",{attrs:{pullDisabled:!1},on:{pullRefresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[n("list",{attrs:{moreFinished:e.moreFinished,moreFinishedText:"没有更多了"},on:{moreLoad:e.moreLoad},model:{value:e.moreLoading,callback:function(t){e.moreLoading=t},expression:"moreLoading"}},[n("p",[e._v("store次数: "+e._s(e.count))]),n("p",[e._v("刷新次数: "+e._s(e.reflashCount))]),n("div",[n("div",{staticClass:"title"},[e._v("过滤器")]),e._v(" 时间："+e._s(e._f("formatDate")(e.date))+" ")]),n("div",[n("div",{staticClass:"title"},[e._v("计算属性set,get")]),e._v(" 姓："+e._s(e.firstName)+" 名："+e._s(e.lastName)+" 姓名："+e._s(e.fullName)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})]),n("div",[n("div",{staticClass:"title"},[e._v("class绑定")]),n("div",{class:{active:e.isActive,error:e.isError}},[e._v("对象语法")]),n("div",{class:[e.activeCls,e.errorCls,e.isVisited?e.visitedCls:""]},[e._v("数组语法")]),n("div",{class:[{active:e.isActive,error:e.isError},e.visitedCls]},[e._v("数组语法中使用对象语法")]),n("div",{class:e.computedClasses},[e._v("数组语法中使用对象语法-计算属性")])]),n("div",[n("div",{staticClass:"title"},[e._v("style绑定")]),n("div",{style:{color:e.color,"font-weight":e.fontWeight,fontSize:e.fontSize}},[e._v("对象语法")]),n("div",{style:[e.styleA,e.styleB]},[e._v("数组语法")])]),n("div",[n("div",{staticClass:"title"},[e._v("条件渲染指令")]),n("div",{staticClass:"tip"},[e._v(" Vue 在渲染元素时 ，出于效率考虑，会尽可能地复用已有的元素而非重新渲染,加唯一值的key属性可以避免。v-show不能在template上使用 ")]),"name"===e.type?[n("label",[e._v("用户名")]),n("input",{key:"name-input",attrs:{type:"text",placeholder:"请输入用户名"}})]:[n("label",[e._v("邮箱")]),n("input",{key:"mail-input",attrs:{type:"text",placeholder:"请输入邮箱"}})],n("button",{on:{click:e.toggleType}},[e._v("切换输入类型")])],2),e._l(e.listLength,(function(t){return n("div",{key:t,on:{click:e.lineClick}},[e._v("第"+e._s(t)+"行")])}))],2)],1),n("tab-bar")],1)],1)},o=[],a=n("ade3"),l=n("5530"),r=(n("99af"),n("ac1f"),n("1276"),n("db18")),s=n("9872"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pull-refresh"},[n("van-pull-refresh",{attrs:{value:e.value,"pulling-text":e.pullingText,"loosing-text":e.pullLoosingText,"loading-text":e.pullLoadingText,"success-text":e.pullSuccessText,"success-duration":e.pullSuccessDuration,"animation-duration":e.pullAnimationDuration,"head-height":e.pullHeadHeight,disabled:e.pullDisabled},on:{refresh:e.pullRefresh},scopedSlots:e._u([{key:"pulling",fn:function(){return[e._t("pulling")]},proxy:!0},{key:"loosing",fn:function(){return[e._t("loosing")]},proxy:!0},{key:"loading",fn:function(){return[e._t("loading")]},proxy:!0}],null,!0)},[e._t("default")],2)],1)},c=[],d=(n("a9e3"),{name:"pullRefresh",model:{prop:"value",event:"change"},props:{value:{type:Boolean,default:!1},pullingText:{type:String,default:"下拉即可刷新..."},pullLoosingText:{type:String,default:"释放即可刷新..."},pullLoadingText:{type:String,default:"加载中..."},pullSuccessText:{type:String,default:""},pullSuccessDuration:{type:[Number,String],default:500},pullAnimationDuration:{type:[Number,String],default:300},pullHeadHeight:{type:[Number,String],default:50},pullDisabled:{type:Boolean,default:!0}},watch:{},computed:{},data:function(){return{}},methods:{pullRefresh:function(){this.$emit("change",!0),this.$emit("pullRefresh")}}}),f=d,p=n("2877"),h=Object(p["a"])(f,u,c,!1,null,"7d4fde8e",null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("van-list",{attrs:{loading:e.value,finished:e.moreFinished,error:e.moreError,offset:e.moreOffset,loadingText:e.moreLoadingText,finishedText:e.moreFinishedText,errorText:e.moreErrorText,immediateCheck:e.moreImmediateCheck,direction:e.moreDirection},on:{load:e.moreLoad},scopedSlots:e._u([{key:"loading",fn:function(){return[e._t("loading")]},proxy:!0},{key:"finished",fn:function(){return[e._t("finished")]},proxy:!0},{key:"error",fn:function(){return[e._t("error")]},proxy:!0}],null,!0)},[e._t("default")],2)],1)},g=[],y={name:"list",model:{prop:"value",event:"change"},props:{value:{type:Boolean,default:!1},moreFinished:{type:Boolean,default:!1},moreError:{type:Boolean,default:!1},moreOffset:{type:[Number,String],default:300},moreLoadingText:{type:String,default:"加载中..."},moreFinishedText:{type:String,default:"1"},moreErrorText:{type:String,default:"2"},moreImmediateCheck:{type:Boolean,default:!0},moreDirection:{type:String,default:"down"}},watch:{},computed:{},data:function(){return{}},methods:{moreLoad:function(){this.$emit("change",!0),this.$emit("moreLoad")}}},b=y,x=Object(p["a"])(b,v,g,!1,null,"792fc7c9",null),_=x.exports,T=n("2f62"),k={name:"vuejswar",components:{tabBar:r["a"],navBar:s["a"],pullRefresh:m,list:_},props:{},watch:{},data:function(){return{listLength:50,reflashCount:0,isLoading:!1,moreLoading:!1,moreFinished:!1,contentScrollTop:0,date:new Date,firstName:"Jack",lastName:"Green",isActive:!0,isError:!1,activeCls:"active",errorCls:"error",isVisited:!0,visitedCls:"visited",btnSize:"large",disabled:!0,color:"blue",fontWeight:"bold",fontSize:"20px",styleA:{color:"red","font-size":"18px"},styleB:{"font-weight":"bold"},type:"name"}},filters:{formatDate:function(e){var t=new Date(e),n=t.getFullYear(),i=t.getMonth()+1,o=t.getDay();return"".concat(n,"-").concat(i,"-").concat(o)}},computed:Object(l["a"])(Object(l["a"])({},Object(T["c"])({count:function(e){return e.count}})),{},{fullName:{get:function(){return"".concat(this.firstName," ").concat(this.lastName)},set:function(e){this.firstName=e.split(" ")[0],this.lastName=e.split(" ")[1]}},computedClasses:function(){var e;return["btn",(e={},Object(a["a"])(e,"btn-"+this.btnSize,""!==this.size),Object(a["a"])(e,"btn-disabled",this.disabled),e)]}}),methods:{toggleType:function(){this.type="name"===this.type?"mail":"name"},onRefresh:function(){var e=this;console.log("onRefresh"),setTimeout((function(){e.listLength=50,e.$toast("刷新成功"),e.isLoading=!1,e.moreLoading=!1,e.moreFinished=!1,e.reflashCount++}),3e3)},moreLoad:function(){var e=this;console.log("moreLoad"),setTimeout((function(){e.listLength+=50,e.moreLoading=!1,e.listLength>=300&&(e.moreFinished=!0)}),1e3)},lineClick:function(){console.log("scrollTop",this.$refs.content.scrollTop)}},beforeRouteLeave:function(e,t,n){this.contentScrollTop=this.$refs.content.scrollTop,console.log(this.contentScrollTop),n()},activated:function(){var e=this;this.$nextTick((function(){e.$refs.content.scrollTop=e.contentScrollTop}))}},C=k,L=(n("2d56"),Object(p["a"])(C,i,o,!1,null,"071b19ea",null));t["default"]=L.exports},"2d56":function(e,t,n){"use strict";n("8dc8")},"8dc8":function(e,t,n){},9872:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("van-nav-bar",{attrs:{title:e.title||e.$route.meta.title,"left-text":e.leftText,"right-text":e.rightText,"left-arrow":e.leftArrow,border:e.border,fixed:e.fixed,placeholder:e.placeholder,"z-index":e.zIndex,"safe-area-inset-top":e.safeAreaInsetTop},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight},scopedSlots:e._u([{key:"left",fn:function(){return[e._t("left")]},proxy:!0},{key:"title",fn:function(){return[e._t("title")]},proxy:!0},{key:"right",fn:function(){return[e._t("right")]},proxy:!0}],null,!0)})],1)},o=[],a=(n("a9e3"),{name:"navBar",props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftArrow:{type:Boolean,default:!0},border:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean,default:!0},zIndex:{type:[Number,String],default:1},safeAreaInsetTop:{type:Boolean,default:!1}},watch:{},computed:{},data:function(){return{}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){}}}),l=a,r=n("2877"),s=Object(r["a"])(l,i,o,!1,null,"31ba662a",null);t["a"]=s.exports},db18:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-bar"},[n("van-tabbar",{attrs:{placeholder:""},on:{change:e.routerChange},model:{value:e.curPath,callback:function(t){e.curPath=t},expression:"curPath"}},[e._l(e.$store.state.tabbarList,(function(t,i){return[n("van-tabbar-item",{key:i,attrs:{name:t.path,icon:t.icon}},[e._v(e._s(t.name))])]}))],2)],1)},o=[],a=(n("ac1f"),n("5319"),{name:"tabBar",watch:{"$route.path":{handler:function(e,t){this.curPath=e},deep:!0,immediate:!0}},computed:{},data:function(){return{curPath:this.$route.path}},methods:{routerChange:function(e){this.curPath=e,this.$router.replace(e)}}}),l=a,r=n("2877"),s=Object(r["a"])(l,i,o,!1,null,"dbbd4d84",null);t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-24edacf1.dfcef71f.js.map