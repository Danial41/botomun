(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7866b412"],{1694:function(t,e,a){},"3d73":function(t,e,a){"use strict";var s=a("e957"),i=a.n(s);i.a},"6e41":function(t,e,a){},"7fb6":function(t,e,a){"use strict";var s=a("1694"),i=a.n(s);i.a},8755:function(t,e,a){"use strict";var s=a("6e41"),i=a.n(s);i.a},9282:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("two-col-view",{staticClass:"wide-news",attrs:{"mobile-view":t.mobileView},scopedSlots:t._u([{key:"header",fn:function(){return["detail"!==t.mobileView?a("Breadcrumbs",{attrs:{items:t.breadcrumbs}}):a("CloseDetail",{attrs:{label:"Новости"}})]},proxy:!0},{key:"navigation",fn:function(){return[a("list",{attrs:{items:t.news,"active-item-id":t.article?t.article.id:0,page:t.page}}),a("Pagination",{staticClass:"my-6",attrs:{value:t.page,max:t.pagesCount}})]},proxy:!0},{key:"content",fn:function(){return[t.article?a("div",{staticClass:"wide-news-article"},[a("div",{staticClass:"article__date"},[t._v("\n                "+t._s(t._f("timestampFullDate")(t.article.createdAt))+"\n            ")]),a("h1",{staticClass:"article__title"},[t._v("\n                "+t._s(t.article.title)+"\n            ")]),a("div",{staticClass:"article__image mt-4"},[a("img",{attrs:{src:t.article.preview,alt:t.article.title}})]),a("div",{staticClass:"article__content",domProps:{innerHTML:t._s(t.article.text)}}),t.article.hashtags&&t.article.hashtags.length?a("hashtags",{attrs:{items:t.article.hashtags,type:"news",circle:""}}):t._e()],1):t._e()]},proxy:!0}])})},i=[],r=(a("c5f6"),a("fc94")),n=a("65b5"),c=a("3962"),l=a("d7ee"),o=a("61b6"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feed"},[a("div",{staticClass:"tags"},[a("ActiveHashTag",{attrs:{label:t.getHashTag,type:"news"}})],1),a("div",{staticClass:"list"},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"list__item",class:{active:t.activeItemId===e.id}},[a("router-link",{staticClass:"list__item__block",attrs:{to:{name:t.resourceName,params:{page:t.page,id:e.id},query:{mView:"detail"}}}},[e.preview?a("div",{staticClass:"list__item__block__img",style:{"background-image":"url("+e.preview+")"}}):t._e(),a("div",{staticClass:"list__item__block__content"},[a("div",{staticClass:"list__item__block__content__date"},[t._v("\n                            "+t._s(t._f("timestampFullDate")(e.createdAt))+"\n                        ")]),a("div",{staticClass:"list__item__block__content__title"},[t._v("\n                            "+t._s(e.title)+"\n                        ")]),e.hashtags&&e.hashtags.length?a("hashtags",{staticClass:"list__item__tags",attrs:{items:e.hashtags,type:"news"}}):t._e()],1)])],1)})),0)])},_=[],p=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),m=a("2f62"),d=a("0ed9");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(p["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f=["getHashTag"],v={components:{Hashtags:o["a"],ActiveHashTag:d["a"]},data:function(){return{hashtags:[]}},props:{resourceName:{type:String,default:"news"},activeItemId:{type:Number,required:!1},items:{type:Array,required:!0},page:{type:Number,required:!1}},computed:g({},Object(m["c"])("news",f))},h=v,w=(a("8755"),a("2877")),y=Object(w["a"])(h,u,_,!1,null,"16e81b38",null),C=y.exports,O={name:"WideNews",data:function(){return{breadcrumbs:[{text:"Главная",path:{name:"portal"}},{text:"Новости",path:{name:"news"}}]}},components:{TwoColView:r["a"],Breadcrumbs:n["a"],List:C,Pagination:l["a"],Hashtags:o["a"],CloseDetail:c["a"]},props:{news:Array,article:Object,page:Number,pagesCount:Number,resourceName:String,mobileView:String}},j=O,k=(a("3d73"),a("7fb6"),Object(w["a"])(j,s,i,!1,null,null,null));e["default"]=k.exports},e957:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7866b412.4aaed809.js.map