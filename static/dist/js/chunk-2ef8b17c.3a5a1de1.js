(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ef8b17c"],{"73b0":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{staticStyle:{"z-index":"1999"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabbar,function(e,i){return n("van-tabbar-item",{key:i,attrs:{icon:e.icon,to:e.path,dot:e.dot,info:e.info}},[t._v("\n    "+t._s(e.name)+"\n  ")])}),1)},o=[],c=n("bd86"),s=(n("68ef"),n("ae73"),n("c31d")),r=n("a142"),u=n("ad06"),f=n("6f2f"),h=n("48f4"),b=Object(r["g"])("tabbar-item"),l=b[0],d=b[1],m=l({props:Object(s["a"])({},h["c"],{icon:String,dot:Boolean,info:[String,Number]}),data:function(){return{active:!1}},beforeCreate:function(){this.$parent.items.push(this)},destroyed:function(){this.$parent.items.splice(this.$parent.items.indexOf(this),1)},methods:{onClick:function(t){this.$parent.onChange(this.$parent.items.indexOf(this)),this.$emit("click",t),Object(h["b"])(this.$router,this)}},render:function(t){var e=this.icon,n=this.slots,i=this.active,a=i?{color:this.$parent.activeColor}:null;return t("div",{class:d({active:i}),style:a,on:{click:this.onClick}},[t("div",{class:d("icon",{dot:this.dot})},[n("icon",{active:i})||e&&t(u["a"],{attrs:{name:e}}),t(f["a"],{attrs:{info:this.info}})]),t("div",{class:d("text")},[n("default",{active:i})])])}}),v=(n("7f7f"),n("9312"),Object(r["g"])("tabbar")),p=v[0],$=v[1],x=p({data:function(){return{items:[]}},props:{value:Number,activeColor:String,fixed:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},watch:{items:function(){this.setActiveItem()},value:function(){this.setActiveItem()}},methods:{setActiveItem:function(){var t=this;this.items.forEach(function(e,n){e.active=n===t.value})},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))}},render:function(t){return t("div",{style:{zIndex:this.zIndex},class:["van-hairline--top-bottom",$({fixed:this.fixed})]},[this.slots()])}}),g={data:function(){return{tabbar:[{name:"任务",path:"/task",pathName:"task",icon:"home-o",dot:!1},{name:"我的",path:"/about",pathName:"about",icon:"friends-o",dot:!1}]}},computed:{activeTab:{get:function(){return this.$store.state.tabbar.activeTab},set:function(t){this.$store.commit("tabbar/setActiveTab",t)}}},methods:{},components:(i={},Object(c["a"])(i,x.name,x),Object(c["a"])(i,m.name,m),i)},k=g,y=n("2877"),O=Object(y["a"])(k,a,o,!1,null,null,null);e["default"]=O.exports},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in a||n("9e1e")&&i(a,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},9312:function(t,e,n){},ae73:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2ef8b17c.3a5a1de1.js.map