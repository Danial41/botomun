(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1075:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(6),r(5),r(11);var n=r(4),c=(r(7),r(0)),o=(r(99),r(687)),f=r(688),l=r(31);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"contests",components:{ListPageTemplate:o.a,ListView:f.a},middleware:["listPages"],head:function(){return{title:this.pageTitle,link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/competitions/contests/")}]}},computed:{pageTitle:function(){var e=this.$route.params.page||1;return"Конкурсы ".concat(e>1?" - Страница ".concat(e):"")},type:function(){return"contests"},page:function(){return+(this.$route.params.page||1)}},watch:{$route:function(e,t){var r=e.params;if(r!==t.params){var n=r.page?Number(r.page):1;this.updatePage(n)}}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updatePage(e.page);case 2:case"end":return t.stop()}}),t)})))()},methods:m(m({},Object(l.b)("projects",["loadSeasons"])),{},{updatePage:function(){var e=arguments,t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:1,t.loading=!0,r.prev=2,r.next=5,t.loadSeasons({page:n,type:t.type});case 5:return r.prev=5,t.loading=!1,r.finish(5);case 8:case"end":return r.stop()}}),r,null,[[2,,5,8]])})))()}})},O=r(17),component=Object(O.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("ListPageTemplate",[t("ListView",{attrs:{type:this.type,"card-pathname":"competitions-contests-page-id"}})],1)}),[],!1,null,"c9c672a8",null);t.default=component.exports}}]);