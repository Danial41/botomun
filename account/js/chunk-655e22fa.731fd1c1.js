(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-655e22fa"],{"35d1":function(e,t,n){"use strict";var s=n("380c"),r=n.n(s);r.a},"380c":function(e,t,n){},"52c6":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"description-wrapper"},[n("h1",{staticClass:"description-header"},[e._v("Приветствуем на карте тестов Трека Развития!")]),e._m(0),n("div",{staticClass:"track-btn-container"},[n("router-link",{class:e.getTrackButtonClass,attrs:{to:{name:"account-track"},event:e.isAllComplete?"click":""}},[e._v("Трек развития\n        ")]),n("question",{attrs:{text:"Пройдите все 4 теста, чтобы выбрать профессию и построить собственный Трек Развития",show:!e.isAllComplete}})],1),n("div",{staticClass:"track-btn-container"},[e.isShowResult?n("router-link",{staticClass:"res-btn",attrs:{to:{name:"account-testing"}}},[e._v("Результаты тестирования")]):e._e()],1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"description"},[n("p",[e._v("Вы здесь. Значит, вы готовы к карьерному росту. \n            Это захватывающий путь, который обязательно приведет к победе! \n            Но с него легко сбиться. Чтобы достичь цели, нужен план развития. \n            Мы называем его индивидуальный Трек Развития — система по диагностике, \n            построению и сопровождению твоего образовательного пути. Нужно пройти тесты, \n            которые укажут направление и помогут в выборе профессии. \n            Найдите дело всей жизни и исполните свою мечту.")])])}],c=(n("ac6a"),n("8615"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"help-circle-container",on:{click:e.helpCircleClick}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.helpCircleClicked,expression:"helpCircleClicked"}],staticClass:"hint-text-container"},[n("div",{staticClass:"hint-text"},[e._v("\n            "+e._s(e.text)+"\n        ")]),n("div",{staticClass:"hint-text-close-btn",on:{click:e.helpCircleClick}})])])}),i=[],a={props:{text:{type:String,required:!0},show:{type:Boolean,required:!0}},data:function(){return{helpCircleClicked:!1}},methods:{helpCircleClick:function(){this.helpCircleClicked=!this.helpCircleClicked}}},o=a,l=(n("e3ab"),n("2877")),u=Object(l["a"])(o,c,i,!1,null,"0f2a173e",null),h=u.exports,p={name:"ScreenDescription",components:{Question:h},data:function(){return{helpCircleHovered:!1}},props:{branches:Object},computed:{isShowResult:function(){return!!this.branches&&!!Object.values(this.branches).filter((function(e){return e.isComplete})).length},isAllComplete:function(){return!!this.branches&&4===Object.values(this.branches).filter((function(e){return e.isComplete})).length},getTrackButtonClass:function(){return this.isAllComplete?"res-btn red":"res-btn grey"}},methods:{helpCircleMouseOver:function(){this.helpCircleHovered=!this.helpCircleHovered}}},f=p,v=(n("9b87"),Object(l["a"])(f,s,r,!1,null,"20171fe6",null));t["a"]=v.exports},5543:function(e,t,n){},"720e":function(e,t,n){},"79d9":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"trackMobile"},[n("ScreenDescription",{staticClass:"description",attrs:{branches:e.branches}}),n("CircleContent",{staticClass:"wtest",class:{"complete-test-1":e.branches["1"].isComplete},attrs:{config:e.branches["1"]},on:{changeBranchHoverStatus:function(t){return e.setBranchHover("1",t)}}}),n("CircleContent",{staticClass:"wtest",class:{"complete-test-2":e.branches["2"].isComplete},attrs:{config:e.branches["2"]},on:{changeBranchHoverStatus:function(t){return e.setBranchHover("2",t)}}}),n("CircleContent",{staticClass:"wtest",class:{"complete-test-3":e.branches["3"].isComplete},attrs:{config:e.branches["3"]},on:{changeBranchHoverStatus:function(t){return e.setBranchHover("3",t)}}}),n("CircleContent",{staticClass:"wtest",class:{"complete-test-4":e.branches["4"].isComplete},attrs:{config:e.branches["4"]},on:{changeBranchHoverStatus:function(t){return e.setBranchHover("4",t)}}})],1)},r=[],c=n("8c76"),i=n("52c6"),a={name:"TrackMobile",props:{branches:Object},components:{CircleContent:c["a"],ScreenDescription:i["a"]},methods:{setBranchHover:function(e,t){this.$emit("setBranchHover",{branch:e,e:t})}}},o=a,l=(n("88e5"),n("2877")),u=Object(l["a"])(o,s,r,!1,null,"8001f272",null);t["default"]=u.exports},"88e5":function(e,t,n){"use strict";var s=n("5543"),r=n.n(s);r.a},"8c76":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"track-test-wrapper",on:{mouseover:e.branchHoverHandler,mouseleave:e.branchHoverHandler}},[e.config.loading?n("Wait"):n("div",{staticClass:"test",class:{isComplete:e.config.isComplete,hover:e.config.hover}},[n("div",{staticClass:"title",class:{"title-margin-bottom":e.isMobile||e.config.hover||e.config.isComplete}},[e._v(e._s(e.config.title))]),e.isMobile||e.config.hover||e.config.isComplete?n("div",{staticClass:"test-btn",on:{click:e.startTest}},[e._v(e._s(e.config.isComplete?"Пройти еще раз":"Начать"))]):e._e()])],1)},r=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("7412"),a=n("2f62"),o=n("1f71");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=["user","isMobile"],p={name:"CircleContent",props:{config:Object},computed:u({},Object(a["c"])(h)),components:{Wait:o["a"]},methods:{branchHoverHandler:function(e){var t;if("mouseover"==e.type)t=!0;else{if("mouseleave"!=e.type)return;t=!1}this.$emit("changeBranchHoverStatus",t)},startTest:function(){this.user.id?this.$router.push({name:"multiple-test-start",params:{id:this.config.testId}}):Object(i["b"])()}}},f=p,v=(n("35d1"),n("2877")),C=Object(v["a"])(f,s,r,!1,null,"7f29ce43",null);t["a"]=C.exports},"9b87":function(e,t,n){"use strict";var s=n("720e"),r=n.n(s);r.a},dfdc:function(e,t,n){},e3ab:function(e,t,n){"use strict";var s=n("dfdc"),r=n.n(s);r.a}}]);
//# sourceMappingURL=chunk-655e22fa.731fd1c1.js.map