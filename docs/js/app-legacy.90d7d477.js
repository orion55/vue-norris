(function(t){function e(e){for(var r,l,i=e[0],u=e[1],s=e[2],d=0,p=[];d<i.length;d++)l=i[d],o[l]&&p.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c87":function(t,e,n){},"1eba":function(t,e,n){"use strict";var r=n("a13b"),o=n.n(r);o.a},3812:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{staticClass:"dance",attrs:{src:n("97ad")}}),r("Btn",{attrs:{title:"Получить шутку"},on:{handleClick:t.handleFetchJoke}}),r("JokeBox",{attrs:{title:t.joke.value,poster:t.joke.icon_url}})],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:{btn:!0,btn_block:t.block,btn_disabled:t.disabled},style:{width:t.width},attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.title?n("span",{staticClass:"btn__title"},[t._v(t._s(t.title))]):t._e()])},i=[],u={name:"Button",props:{hadnleClick:{type:Function,default:()=>{}},title:{type:String,default:""},buttonType:{type:String,default:"primary",validator:t=>-1!==["primary","secondary","thirdly","fourthly","fifthly","sixthly"].indexOf(t)},width:{type:String,default:null},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},methods:{handleClick(){this.$emit("handleClick")}}},s=u,c=(n("1eba"),n("2877")),d=Object(c["a"])(s,l,i,!1,null,"0b92f096",null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"joke-box"},[n("h2",[t._v(t._s(t.title))]),n("img",{attrs:{src:t.poster,alt:""}})])},b=[],h={name:"JokeBox",props:{title:String,poster:String}},v=h,y=(n("bbfd"),Object(c["a"])(v,f,b,!1,null,"05c384c8",null)),k=y.exports,m={name:"App",components:{Btn:p,JokeBox:k},methods:{handleFetchJoke(){}},computed:{joke(){return{}}}},g=m,_=(n("bb8b"),Object(c["a"])(g,o,a,!1,null,null,null)),j=_.exports,x=n("2f62");const w={joke:{}},O={joke:()=>w.joke},S={handleSetJoke(t,e){t.joke=e}},B={};var C={state:w,getters:O,mutations:S,actions:B};r["a"].use(x["a"]);var J=new x["a"].Store({strict:!0,modules:{jokes:C}});r["a"].config.productionTip=!1,new r["a"]({render:t=>t(j),store:J}).$mount("#app")},"97ad":function(t,e,n){t.exports=n.p+"img/chuk.7f6ea452.gif"},a13b:function(t,e,n){},bb8b:function(t,e,n){"use strict";var r=n("3812"),o=n.n(r);o.a},bbfd:function(t,e,n){"use strict";var r=n("0c87"),o=n.n(r);o.a}});
//# sourceMappingURL=app-legacy.90d7d477.js.map