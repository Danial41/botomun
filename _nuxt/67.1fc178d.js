(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1100:function(e,r,t){"use strict";t.r(r);t(12),t(10),t(6),t(5),t(11),t(7);var o=t(0),n=t(4),d=t(31);function c(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var f={name:"WideSupervisoryBoard",computed:v(v({},Object(d.c)(["isMobile","supervisors"])),{},{list:function(){return this.supervisors.slice(1)}}),mounted:function(){this.$mainMixinScrollUp()},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.loadSupervisors();case 2:case"end":return r.stop()}}),r)})))()},methods:v({},Object(d.b)(["loadSupervisors"]))},m=(t(968),t(17)),component=Object(m.a)(f,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"wide-supervisory"},[t("div",{staticClass:"wrapper"},[e.isMobile?t("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"index"},"no-prefetch":""}},[e._v("\n            Главная\n        ")]):e._e(),e._v(" "),t("h1",{staticClass:"header"},[e._v("Наблюдательный совет")]),e._v(" "),t("div",{staticClass:"wide-supervisory__content mb-6"},[e.supervisors.length?t("div",{staticClass:"person-card person-card_big"},[t("img",{staticClass:"person-card__image",attrs:{alt:"",src:e.supervisors[0].image,itemprop:"image"}}),e._v(" "),t("div",{staticClass:"person-card__text"},[t("h4",{staticClass:"person-card__name",attrs:{itemprop:"familyName"}},[e._v("\n                        "+e._s(e.supervisors[0].surname)+"\n                        "+e._s(e.supervisors[0].name)+"\n                        "+e._s(e.supervisors[0].patronymic)+"\n                    ")]),e._v(" "),t("p",{staticClass:"person-card__position",attrs:{itemprop:"jobTitle"}},[e._v("\n                        "+e._s(e.supervisors[0].position)+"\n                    ")])])]):e._e(),e._v(" "),e._l(e.list,(function(r){return t("div",{key:r.id,staticClass:"person-card"},[t("img",{staticClass:"person-card__image",attrs:{alt:"",src:r.image,itemprop:"image"}}),e._v(" "),t("div",{staticClass:"person-card__text"},[t("h4",{staticClass:"person-card__name",attrs:{itemprop:"familyName"}},[e._v("\n                        "+e._s(r.surname)+" "+e._s(r.name)+"\n                        "+e._s(r.patronymic)+"\n                    ")]),e._v(" "),t("p",{staticClass:"person-card__position",attrs:{itemprop:"jobTitle"}},[e._v("\n                        "+e._s(r.position)+"\n                    ")])])])}))],2)],1)])}),[],!1,null,"4d1f5f80",null);r.default=component.exports},469:function(e,r){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDggMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjQxNDIxIDYuNUw3LjcwNzExIDEuNTg1MTdDOC4wOTc2MyAxLjIyMjU0IDguMDk3NjMgMC42MzQ2MDIgNy43MDcxMSAwLjI3MTk3MkM3LjMxNjU4IC0wLjA5MDY1NzUgNi42ODM0MiAtMC4wOTA2NTc1IDYuMjkyODkgMC4yNzE5NzJMMC4yOTI4OTMgNS44NDM0Qy0wLjA5NzYzMTEgNi4yMDYwMyAtMC4wOTc2MzExIDYuNzkzOTcgMC4yOTI4OTMgNy4xNTY2TDYuMjkyODkgMTIuNzI4QzYuNjgzNDIgMTMuMDkwNyA3LjMxNjU4IDEzLjA5MDcgNy43MDcxMSAxMi43MjhDOC4wOTc2MyAxMi4zNjU0IDguMDk3NjMgMTEuNzc3NSA3LjcwNzExIDExLjQxNDhMMi40MTQyMSA2LjVaIiBmaWxsPSIjQkFDNUNCIi8+Cjwvc3ZnPgo="},633:function(e,r,t){var content=t(969);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(19).default)("c1afaf5e",content,!0,{sourceMap:!1})},968:function(e,r,t){"use strict";var o=t(633);t.n(o).a},969:function(e,r,t){var o=t(18),n=t(47),d=t(469);r=o(!1);var c=n(d);r.push([e.i,".wide-supervisory[data-v-4d1f5f80]{display:flex;justify-content:center}.wide-supervisory *[data-v-4d1f5f80]{color:#2a2626}.wide-supervisory .margin-bottom[data-v-4d1f5f80]{margin-bottom:2rem}.wide-supervisory .wrapper[data-v-4d1f5f80]{padding:0;width:80%}.wide-supervisory .wrapper .header[data-v-4d1f5f80]{font-size:1.66rem;margin:2.075rem 0}.wide-supervisory .wide-supervisory__content[data-v-4d1f5f80]{display:flex;flex-wrap:wrap}.wide-supervisory .wide-supervisory__content .person-card[data-v-4d1f5f80]{width:18.15625rem;padding:2.075rem 1.66rem;background-color:#fff;margin-bottom:2.17875rem;margin-left:2.43812rem;display:flex;flex-direction:column;align-items:center;border:1px solid #d2d5d9;border-radius:.2075rem}.wide-supervisory .wide-supervisory__content .person-card[data-v-4d1f5f80]:nth-child(4n-2){margin-left:0}.wide-supervisory .wide-supervisory__content .person-card .person-card__image[data-v-4d1f5f80]{width:7.885rem;height:7.885rem;border-radius:100%;overflow:hidden;margin-bottom:.83rem}.wide-supervisory .wide-supervisory__content .person-card .person-card__text[data-v-4d1f5f80]{display:flex;flex-direction:column;align-items:center;text-align:center}.wide-supervisory .wide-supervisory__content .person-card .person-card__name[data-v-4d1f5f80]{font-size:1.08937rem;line-height:1.66rem;text-transform:uppercase;font-weight:700;color:#2a2626;margin:0 0 .415rem;width:16rem}.wide-supervisory .wide-supervisory__content .person-card .person-card__position[data-v-4d1f5f80]{font-size:.77812rem;line-height:1.14125rem;text-align:center;color:#98a0a9;margin:0;width:16rem}.wide-supervisory .wide-supervisory__content .person-card_big[data-v-4d1f5f80]{width:100%;padding:2.075rem 2.49rem;flex-direction:row;margin-left:0}.wide-supervisory .wide-supervisory__content .person-card_big .person-card__image[data-v-4d1f5f80]{margin:0}.wide-supervisory .wide-supervisory__content .person-card_big .person-card__text[data-v-4d1f5f80]{margin:0 0 0 1.245rem;align-items:flex-start}.wide-supervisory .wide-supervisory__content .person-card_big .person-card__name[data-v-4d1f5f80]{font-size:1.4525rem;line-height:1.76375rem;margin-bottom:.415rem;width:auto}.wide-supervisory .wide-supervisory__content .person-card_big .person-card__position[data-v-4d1f5f80]{font-size:1.0375rem;line-height:1.4525rem;width:auto}@media (max-width:450px){.wide-supervisory .wrapper[data-v-4d1f5f80]{width:90%;padding:6.07595rem 0 0}.wide-supervisory .wrapper .header[data-v-4d1f5f80]{margin:6.07595rem 0;font-size:6.07595rem;line-height:7.34177rem}.wide-supervisory .nav-link[data-v-4d1f5f80]{position:relative;display:inline-block;padding-left:3.5443rem;font-size:3.03797rem;line-height:3.79747rem;font-weight:600;color:#bac5cb}.wide-supervisory .nav-link[data-v-4d1f5f80]:before{content:url("+c+');position:absolute;left:0;top:.25316rem;width:2.02532rem;height:3.29114rem}.wide-supervisory .header h1[data-v-4d1f5f80]{font-size:6.07595rem;line-height:7.34177rem}.wide-supervisory .divider[data-v-4d1f5f80]{position:relative;width:100%;height:.25316rem;background:#d2d5d9}.wide-supervisory .divider[data-v-4d1f5f80]:before{left:-4.05063rem}.wide-supervisory .divider[data-v-4d1f5f80]:after,.wide-supervisory .divider[data-v-4d1f5f80]:before{content:"";position:absolute;width:4.05063rem;height:.25316rem;background:#d2d5d9}.wide-supervisory .divider[data-v-4d1f5f80]:after{right:-4.05063rem}.wide-supervisory .wide-supervisory__content[data-v-4d1f5f80]{display:flex;flex-wrap:wrap}.wide-supervisory .wide-supervisory__content .person-card[data-v-4d1f5f80],.wide-supervisory .wide-supervisory__content .person-card_big[data-v-4d1f5f80]{width:100%;padding:8.10127rem 4.05063rem;flex-direction:row;margin:0 0 6.07595rem}.wide-supervisory .wide-supervisory__content .person-card .person-card__image[data-v-4d1f5f80],.wide-supervisory .wide-supervisory__content .person-card_big .person-card__image[data-v-4d1f5f80]{margin:0 4.05063rem 0 0;width:26.32911rem;height:26.32911rem;flex:0 0 auto}.wide-supervisory .wide-supervisory__content .person-card .person-card__text[data-v-4d1f5f80],.wide-supervisory .wide-supervisory__content .person-card_big .person-card__text[data-v-4d1f5f80]{margin:0;flex-direction:column;align-items:flex-start;text-align:left}.wide-supervisory .wide-supervisory__content .person-card .person-card__name[data-v-4d1f5f80],.wide-supervisory .wide-supervisory__content .person-card_big .person-card__name[data-v-4d1f5f80]{width:auto;margin-bottom:2.02532rem;font-size:4.05063rem;line-height:6.58228rem}.wide-supervisory .wide-supervisory__content .person-card .person-card__position[data-v-4d1f5f80],.wide-supervisory .wide-supervisory__content .person-card_big .person-card__position[data-v-4d1f5f80]{width:auto;font-size:3.5443rem;line-height:5.56962rem;text-align:left}}',""]),e.exports=r}}]);