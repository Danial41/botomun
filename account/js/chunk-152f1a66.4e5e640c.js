(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-152f1a66"],{"0ff5":function(t,e,s){"use strict";var r=s("b314"),a=s.n(r);a.a},"1d92":function(t,e,s){"use strict";var r=s("4a02"),a=s.n(r);a.a},"4a02":function(t,e,s){},b314:function(t,e,s){},b40a:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("two-col-view",{staticClass:"wide-education",attrs:{"mobile-view":t.mobileView,"hide-social":!t.items.length},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"wide-education__header"},[s("breadcrumbs",{attrs:{"mobile-view":t.mobileView}}),t.filters.length?s("drop-down-filter",{attrs:{value:t.currentFilter,filters:t.filters},on:{input:function(e){return t.$emit("update:filters",e)}}}):t._e()],1)]},proxy:!0},{key:"navigation",fn:function(){return[s("list",{attrs:{"resource-name":t.resourceName,items:t.items,"active-item-id":t.currentItem?t.currentItem.id:0,page:t.page},scopedSlots:t._u([{key:"top",fn:function(){return[s("Tabs"),t.items.length?[s("div",{staticClass:"my-4"},t._l(t.hashtags,(function(e,r){return s("chip",{key:r,class:{blue:0===r}},[t._v("\n                            #"+t._s(e)+"\n                        ")])})),1)]:[t.isMobile?s("stab",{attrs:{text:"Расписание онлайн-курсов появится в ближайшее время"}}):t._e()]]},proxy:!0},{key:"bottom",fn:function(){return[t.items.length?s("Pagination",{staticClass:"my-6",attrs:{value:t.page,max:t.pagesCount}}):t._e()]},proxy:!0}])})]},proxy:!0},{key:"content",fn:function(){return[t.currentItem?s("div",{staticClass:"article"},[s("div",{staticClass:"article__row"},[s("span",{staticClass:"article__type"},[t._v("\n                    Онлайн-курс\n                ")])]),s("h1",{staticClass:"article__title"},[t._v("\n                "+t._s(t.currentItem.theme)+"\n            ")]),t.currentItem.hashtags&&t.currentItem.hashtags.length?s("hashtags",{staticClass:"article__tags",attrs:{value:t.currentItem.hashtags,itemStyle:{fontSize:".7rem"}}}):t._e(),t.currentItem.preview?s("div",{staticClass:"article__image",style:{"background-image":"url('"+t.currentItem.preview+"')"}}):t._e(),s("div",{staticClass:"article__join"},[s("button",{staticClass:"green-button article__button",on:{click:t.courseBtnClick}},[t._v("\n                    Пройти курс\n                ")]),s("Dialog",{attrs:{scrollable:!0,overClose:!1},model:{value:t.isCourseDialog,callback:function(e){t.isCourseDialog=e},expression:"isCourseDialog"}},[s("DataRequest",{attrs:{formFields:t.currentItem.formFields,successMessage:t.successMessage,outerLoading:t.dataReqLoad,isInitUser:t.isInitUser,successBtnText:t.successBtnText},on:{success:t.goToCourse,initUser:t.initUser}})],1)],1),s("div",{staticClass:"article__content",domProps:{innerHTML:t._s(t.currentItem.description)}}),s("div",{staticClass:"article__content",domProps:{innerHTML:t._s(t.currentItem.text)}}),t.currentItem.hashtags&&t.currentItem.hashtags.length?s("hashtags",{staticClass:"list__item__tags",attrs:{items:t.currentItem.hashtags,type:"courses",circle:""}}):t._e()],1):s("div",[s("stab",{attrs:{text:"Расписание онлайн-курсов появится в ближайшее время"}})],1)]},proxy:!0}])})},a=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=(s("96cf"),s("3b8d")),c=(s("c5f6"),s("7364")),o=s("fc94"),u=s("d7ee"),l=s("61b6"),m=s("2edb"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feed"},[t._t("top"),s("div",{staticClass:"tags"},[s("ActiveHashTag",{attrs:{label:t.getHashTag,type:"courses"}})],1),s("div",{staticClass:"list"},t._l(t.items,(function(e){return s("router-link",{key:e.id,staticClass:"list__item",class:{active:t.activeItemId===e.id},attrs:{to:{name:t.resourceName,params:{page:t.page,id:e.id},query:{mView:"detail"}}}},[s("div",[e.preview?s("div",{staticClass:"list__item__img",style:{"background-image":"url("+e.preview+")"}}):t._e()]),s("div",[s("div",{staticClass:"list__item__title"},[t._v("\n                    "+t._s(e.theme)+"\n                ")]),e.hashtags&&e.hashtags.length?s("hashtags",{staticClass:"list__item__tags",attrs:{items:e.hashtags,type:"courses"}}):t._e()],1)])})),1),t._t("bottom")],2)},p=[],d=s("2f62"),b=s("0ed9");function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _=["getHashTag"],v={components:{Hashtags:l["a"],ActiveHashTag:b["a"]},data:function(){return{currentTime:Date.now()/1e3}},props:{resourceName:{type:String,default:"news"},activeItemId:{type:Number,required:!1},items:{type:Array,required:!0},page:{type:Number,required:!1}},computed:h({},Object(d["c"])("courses",_))},y=v,w=(s("e384"),s("2877")),O=Object(w["a"])(y,g,p,!1,null,"6ecb9849",null),C=O.exports,j=s("1efe"),I=s("bdc3"),P=s("2961"),D=s("d55b"),k=s("696c"),T=s("7412");function x(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var q=["isAuthorized","isMobile"],L={name:"WideCourses",data:function(){return{hashtags:[],isCourseDialog:!1,successMessage:"",dataReqLoad:!1,isInitUser:!1,successBtnText:"Перейти"}},components:{TwoColView:o["a"],Breadcrumbs:D["a"],List:C,Pagination:u["a"],Hashtags:l["a"],Chip:m["a"],Tabs:k["a"],DropDownFilter:c["a"],Stab:j["a"],DataRequest:I["a"],Dialog:P["a"]},props:{resourceName:String,items:Array,currentItem:Object,page:Number,pagesCount:Number,filters:Array,currentFilter:Object,isLoading:Boolean,mobileView:String},methods:{goToPage:function(t){window.location="https://lms.".concat(window.rsvDomain,"/courses/").concat(t.foreignCourseId,"/page")},initUser:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isInitUser=!0,this.dataReqLoad=!0,this.successMessage="Данные записаны, вы можете перейти к курсу",this.dataReqLoad=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goToCourse:function(){this.goToPage(this.currentItem)},courseBtnClick:function(){this.isAuthorized?this.currentItem.formFields.length?this.isCourseDialog=!0:this.goToPage(this.currentItem):Object(T["b"])()}},computed:S({},Object(d["c"])(q))},H=L,M=(s("1d92"),s("0ff5"),Object(w["a"])(H,r,a,!1,null,"717265d4",null));e["default"]=M.exports},b60a:function(t,e,s){},e384:function(t,e,s){"use strict";var r=s("b60a"),a=s.n(r);a.a}}]);
//# sourceMappingURL=chunk-152f1a66.4e5e640c.js.map