(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1067:function(e,t,n){"use strict";n.r(t);n(7);var r=n(0),c=n(443),o=n(709),d={name:"HardSkills",components:{Breadcrumbs:c.a,Competences:o.a},head:function(){return{title:"Навыки",link:[{rel:"canonical",href:"https://".concat(this.$config.rsvDomain,"/hard-skills/")}]}},data:function(){return{key:"hard",breadcrumbs:[{text:"Главная",path:{name:"index"}},{text:"Профессиональные навыки",path:{name:"hard-skills-id"}}]}},computed:{types:function(){return this.$store.getters["newCompetences/typesByKey"](this.key)}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("newCompetences/loadByKey",e.key);case 2:e.$mainMixinScrollUp();case 3:case"end":return t.stop()}}),t)})))()}},l=(n(721),n(17)),component=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"prof-skills"},[t("Breadcrumbs",{staticClass:"breadcrumbs-container",attrs:{items:this.breadcrumbs}}),this._v(" "),t("Competences",{attrs:{types:this.types,mode:this.key}})],1)}),[],!1,null,"11c7a992",null);t.default=component.exports},508:function(e,t,n){var content=n(722);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("3f9c9858",content,!0,{sourceMap:!1})},721:function(e,t,n){"use strict";var r=n(508);n.n(r).a},722:function(e,t,n){(t=n(18)(!1)).push([e.i,".breadcrumbs-container[data-v-11c7a992]{padding:0 9.7525rem}@media (max-width:449px){.breadcrumbs-container[data-v-11c7a992]{padding:0}}",""]),e.exports=t}}]);