(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4e3bde"],{"4d48":function(t,e,n){"use strict";n("68ef"),n("bf60")},5246:function(t,e,n){"use strict";n("68ef"),n("8a0b")},"66b9":function(t,e,n){"use strict";n("68ef")},"6b41":function(t,e,n){"use strict";var i=n("2638"),a=n.n(i),r=n("a142"),s=n("ba31"),c=n("ad06"),l=Object(r["g"])("nav-bar"),o=l[0],u=l[1];function f(t,e,n,i){return t("div",a()([{class:[u({fixed:e.fixed}),{"van-hairline--bottom":e.border}],style:{zIndex:e.zIndex}},Object(s["b"])(i)]),[t("div",{class:u("left"),on:{click:i.listeners["click-left"]||r["f"]}},[n.left?n.left():[e.leftArrow&&t(c["a"],{class:u("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:u("text")},[e.leftText])]]),t("div",{class:[u("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:u("right"),on:{click:i.listeners["click-right"]||r["f"]}},[n.right?n.right():e.rightText&&t("span",{class:u("text")},[e.rightText])])])}f.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=o(f)},7744:function(t,e,n){"use strict";var i=n("c31d"),a=n("2638"),r=n.n(a),s=n("a142"),c=n("dfaf"),l=n("ba31"),o=n("48f4"),u=n("ad06"),f=Object(s["g"])("cell"),d=f[0],h=f[1];function b(t,e,n,i){var a=e.icon,c=e.size,f=e.title,d=e.label,b=e.value,p=e.isLink,m=e.arrowDirection,v=n.title||Object(s["c"])(f),g=n.default||Object(s["c"])(b),x=n.label||Object(s["c"])(d),w=x&&t("div",{class:[h("label"),e.labelClass]},[n.label?n.label():d]),k=v&&t("div",{class:[h("title"),e.titleClass]},[n.title?n.title():t("span",[f]),w]),j=g&&t("div",{class:[h("value",{alone:!n.title&&!f}),e.valueClass]},[n.default?n.default():t("span",[b])]),O=n.icon?n.icon():a&&t(u["a"],{class:h("left-icon"),attrs:{name:a}}),y=n["right-icon"],N=y?y():p&&t(u["a"],{class:h("right-icon"),attrs:{name:m?"arrow-"+m:"arrow"}}),S=function(t){Object(l["a"])(i,"click",t),Object(o["a"])(i)},T={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return c&&(T[c]=c),t("div",r()([{class:h(T),on:{click:S}},Object(l["b"])(i)]),[O,k,j,N,n.extra&&n.extra()])}b.props=Object(i["a"])({},c["a"],o["c"],{clickable:Boolean,arrowDirection:String}),e["a"]=d(b)},"7b0a":function(t,e,n){},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in a||n("9e1e")&&i(a,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"81e6":function(t,e,n){"use strict";n("68ef"),n("7b0a")},8624:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return l});var i=n("a142"),a=Date.now();function r(t){var e=Date.now(),n=Math.max(0,16-(e-a)),i=setTimeout(t,n);return a=e+n,i}var s=i["e"]?t:window,c=s.requestAnimationFrame||s.webkitRequestAnimationFrame||r;s.cancelAnimationFrame||s.webkitCancelAnimationFrame||s.clearTimeout;function l(t){return c.call(s,t)}}).call(this,n("c8ba"))},"8a0b":function(t,e,n){},"9ffb":function(t,e,n){"use strict";var i=n("a142"),a=Object(i["g"])("col"),r=a[0],s=a[1];e["a"]=r({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},render:function(t){var e,n=this.span,i=this.offset;return t(this.tag,{class:s((e={},e[n]=n,e["offset-"+i]=i,e)),style:this.style},[this.slots()])}})},bf60:function(t,e,n){},bff0:function(t,e,n){},c430:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"任务","lef-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-collapse",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("van-collapse-item",{attrs:{title:"已完成任务",name:"1"}}),n("van-collapse-item",{attrs:{title:"未完成任务",name:"2"}},[n("router-link",{attrs:{to:{path:"/"}}},[n("p",[t._v(t._s(t.task))])])],1)],1)],1)},r=[],s=n("bd86"),c=(n("68ef"),n("bff0"),n("c31d")),l=n("a142"),o=n("8624"),u=n("7744"),f=n("dfaf"),d={data:function(){return{parent:null}},methods:{findParent:function(t){var e=this.$parent;while(e){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}},h=Object(l["g"])("collapse-item"),b=h[0],p=h[1],m=["title","icon","right-icon"],v=b({mixins:[d],props:Object(c["a"])({},f["a"],{name:[String,Number],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{items:function(){return this.parent.items},index:function(){return this.items.indexOf(this)},currentName:function(){return Object(l["c"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent.value;return this.parent.accordion?e===this.currentName:e.some(function(e){return e===t.currentName})}},created:function(){this.findParent("van-collapse"),this.items.push(this),this.show=this.expanded,this.inited=this.expanded},destroyed:function(){this.items.splice(this.index,1)},watch:{expanded:function(t,e){var n=this;null!==e&&(t&&(this.show=!0,this.inited=!0),Object(o["a"])(function(){var e=n.$refs,i=e.content,a=e.wrapper;if(i&&a){var r=i.clientHeight;if(r){var s=r+"px";a.style.height=t?0:s,Object(o["a"])(function(){a.style.height=t?s:0})}else n.onTransitionEnd()}}))}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=t.accordion&&this.currentName===t.value?"":this.currentName,n=!this.expanded;this.parent.switch(e,n)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height=null:this.show=!1}},render:function(t){var e=this,n=m.reduce(function(t,n){return e.slots(n)&&(t[n]=function(){return e.slots(n)}),t},{});this.slots("value")&&(n.default=function(){return e.slots("value")});var i=t(u["a"],{class:p("title",{disabled:this.disabled,expanded:this.expanded}),on:{click:this.onClick},scopedSlots:n,props:Object(c["a"])({},this.$props)}),a=this.inited&&t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:p("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:p("content")},[this.slots()])]);return t("div",{class:[p(),{"van-hairline--top":this.index}]},[i,a])}}),g=Object(l["g"])("collapse"),x=g[0],w=g[1],k=x({props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},data:function(){return{items:[]}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter(function(e){return e!==t})),this.$emit("change",t),this.$emit("input",t)}},render:function(t){return t("div",{class:[w(),{"van-hairline--top-bottom":this.border}]},[this.slots()])}}),j=(n("81e6"),n("9ffb")),O=(n("4d48"),n("d1e1")),y=(n("5246"),n("6b41")),N=(n("7f7f"),n("66b9"),n("b650")),S={components:(i={},Object(s["a"])(i,N["a"].name,N["a"]),Object(s["a"])(i,y["a"].name,y["a"]),Object(s["a"])(i,O["a"].name,O["a"]),Object(s["a"])(i,j["a"].name,j["a"]),Object(s["a"])(i,k.name,k),Object(s["a"])(i,v.name,v),i),data:function(){return{activeName:["1"],unfinishedTask:"未完成任务",completedTask:"已完成任务",task:"红包返现"}},methods:{onClickLeft:function(){this.$router.go(-1)}},mounted:function(){console.log("in mounted"),this.$store.commit("tabbar/setActiveTab",0)}},T=S,$=n("2877"),B=Object($["a"])(T,a,r,!1,null,null,null);e["default"]=B.exports},d1e1:function(t,e,n){"use strict";var i=n("a142"),a=Object(i["g"])("row"),r=a[0],s=a[1];e["a"]=r({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},render:function(t){var e,n=this.align,i=this.justify,a="flex"===this.type,r="-"+Number(this.gutter)/2+"px",c=this.gutter?{marginLeft:r,marginRight:r}:{};return t(this.tag,{style:c,class:s((e={flex:a},e["align-"+n]=a&&n,e["justify-"+i]=a&&i,e))},[this.slots()])}})},dfaf:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,titleClass:null,valueClass:null,labelClass:null,title:[String,Number],value:[String,Number],label:[String,Number],border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-4b4e3bde.f193a1bf.js.map