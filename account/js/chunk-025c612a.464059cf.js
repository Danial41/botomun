(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-025c612a"],{"0031":function(e,t,n){},"1adc":function(e,t,n){},"211c":function(e,t,n){"use strict";var a=n("cf41"),r=n.n(a);r.a},"28c6":function(e,t,n){"use strict";var a=n("d0e2"),r=n.n(a);r.a},"2a46":function(e,t,n){},3903:function(e,t,n){},4893:function(e,t,n){"use strict";var a=n("fb49"),r=n.n(a);r.a},"4af2":function(e,t,n){"use strict";var a=n("3903"),r=n.n(a);r.a},"6cfa":function(e,t,n){"use strict";var a=n("2a46"),r=n.n(a);r.a},"7e18":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-proposal"},[e.proposal&&!e.isMobileDetailShown?n("h1",[e._v("Заявка на проектную инициативу")]):e._e(),e.proposalError?n("h1",[e._v(e._s(e.proposalError))]):e._e(),e.proposal?n("div",{staticClass:"proposal-contents"},[e.isMobileDetailShown||null===e.proposal.id?e._e():n("div",{staticClass:"controls"},[n("Button",{staticClass:"btn_details",attrs:{outline:""},on:{click:function(t){e.isMobileDetailOpen=!0}}},[e._v("Детали заявки")]),n("Button",{staticClass:"btn_delete",attrs:{outline:"",icon:"trash"},on:{click:function(t){e.deleting=!0}}})],1),e.isMobile?n("MobileDetails",{directives:[{name:"show",rawName:"v-show",value:e.isMobileDetailShown,expression:"isMobileDetailShown"}],on:{close:function(t){e.isMobileDetailOpen=!1}}}):n("div",{directives:[{name:"show",rawName:"v-show",value:null!==e.proposal.id,expression:"proposal.id !== null"}],staticClass:"details"},[n("div",{staticClass:"card"},[n("Logs"),e.isCommentsEnabled?n("CreateComment"):e._e()],1),e.isMobile?e._e():n("Button",{staticClass:"red btn_delete",attrs:{outline:""},on:{click:function(t){e.deleting=!0}}},[e._v("Удалить заявку")])],1),e.isMobileDetailShown?e._e():n("div",{staticClass:"general"},[n("Form",{attrs:{disabled:e.disabled}})],1)],1):e._e(),n("Dialog",{attrs:{scrollable:!1,"has-close-button":!1},model:{value:e.deleting,callback:function(t){e.deleting=t},expression:"deleting"}},[n("div",{staticClass:"proposal-popup"},[n("h1",[e._v("\n                Уверены, что хотите удалить заявку?\n            ")]),n("div",{staticClass:"buttons"},[n("Button",{staticClass:"btn btn--cancel",attrs:{outline:""},on:{click:function(t){e.deleting=!1}}},[e._v("Отмена")]),n("Button",{staticClass:"btn",on:{click:e.onDelete}},[e._v("Удалить")])],1)])])],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("96cf"),n("3b8d")),s=n("bd86"),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-proposal-logs"},[n("h2",[e._v("История заявки")]),n("div",{ref:"items",staticClass:"items"},e._l(e.proposalLogs,(function(e){return n("SingleLog",{key:e.createTime,attrs:{item:e}})})),1)])},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",{staticClass:"title",class:{current:e.item.isCurrentStatus}},[e._v(e._s(e.title))]),e.item.comment?n("p",{staticClass:"message"},[e._v("«"+e._s(e.item.comment)+"»")]):e._e(),n("span",{staticClass:"date"},[e._v(e._s(e.date))])])},p=[],d=(n("6b54"),n("f576"),{props:{item:{type:Object,required:!0}},data:function(){return{title:"",date:""}},computed:{formattedDate:function(){if(!this.item)return"";var e=new Date(this.item.updateTime),t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");return"".concat(t,".").concat(n,".").concat(e.getFullYear()," в ").concat(a,":").concat(r)}},methods:{updateContents:function(){var e="",t=this.formattedDate;switch(this.item.action){case"create":e="Новая",t="Создана "+t;break;case"to_consideration":e="На рассмотрении",t="Переведена "+t;break;case"to_revision":e="Доработка",t="Переведена "+t;break;case"to_review":e="На рассмотрении",t="Переведена "+t;break;case"to_reserve":e="Резерв",t="Переведена "+t;break;case"reject":e="Инициатива отклонена",t="Переведена "+t;break;case"approve":e="Инициатива согласована",t="Переведена "+t;break;case"comment":e="author"===this.item.initiatorRole?"Ваш комментарий:":"Комментарий администратора:";break;default:return}this.item.isCurrentStatus&&(e="Текущий статус: "+e.toLocaleLowerCase()),this.title=e,this.date=t}},watch:{item:function(e){e&&this.updateContents()}},mounted:function(){this.updateContents()}}),f=d,b=(n("28c6"),n("2877")),m=Object(b["a"])(f,u,p,!1,null,"05c55830",null),h=m.exports;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={components:{SingleLog:h},computed:g({},Object(o["c"])("proposals",["proposalLogs"])),watch:{proposalLogs:function(){this.$refs.items.scrollTop=0}}},j=O,y=(n("211c"),Object(b["a"])(j,c,l,!1,null,"3102aaa5",null)),_=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Комментарий для администратора")]),n("ModelTextArea",{attrs:{label:"Напишите комментарий",disabled:e.loading},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),n("Button",{attrs:{lass:"btn_send",disabled:!e.canSend},on:{click:e.send}},[e._v("Отправить")])],1)},C=[],P=n("2eef"),k=n("d672");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={name:"ProposalCreateComment",components:{Button:P["a"],ModelTextArea:k["a"]},data:function(){return{text:"",loading:!1}},computed:{canSend:function(){return!this.loading&&this.text.length>0}},methods:x({},Object(o["b"])("proposals",["updateProposal"]),{send:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.updateProposal({action:"comment",comment:this.text});case 3:this.text="",this.loading=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},M=S,F=(n("4af2"),Object(b["a"])(M,w,C,!1,null,"72b5f416",null)),E=F.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"proposal-form"},[n("ModelString",{staticClass:"model-item",attrs:{label:"Планируемое название проекта",required:"",value:e.proposal.name,disabled:e.disabled,valid:e.isFieldValid["name"]},on:{change:function(t){return e.setUpdate("name",t)}}}),n("ModelMultiAutoComplete",{staticClass:"model-item",attrs:{label:"Тематические направления",required:"",itemValue:"id",itemText:"field_value",value:e.proposal.thematicDirections,search:e.filteredThematicDirections,selected:e.selectedThematicDirections,disabled:e.disabled,valid:e.isFieldValid["thematicDirections"]},on:{change:function(t){return e.setUpdate("thematicDirections",t)},"debounce-end":function(t){e.thematicDirectionsSearchString=t.value}}}),n("ModelTextArea",{staticClass:"model-item",attrs:{label:"Описание",required:"",value:e.proposal.description,valid:e.isFieldValid["description"],disabled:e.disabled},on:{change:function(t){return e.setUpdate("description",t)}}}),n("ModelSelect",{staticClass:"model-item project_type",attrs:{label:"Тип проекта",required:"",value:e.proposal.type,items:e.projectTypesList,disabled:e.disabled,valid:e.isFieldValid["type"]},on:{change:function(t){return e.setUpdate("type",t)}}}),n("ModelTextArea",{staticClass:"model-item",attrs:{label:"Цель",value:e.proposal.objective,disabled:e.disabled},on:{change:function(t){return e.setUpdate("objective",t)}}}),n("ModelTextArea",{staticClass:"model-item",attrs:{label:"Актуальность",value:e.proposal.relevance,disabled:e.disabled},on:{change:function(t){return e.setUpdate("relevance",t)}}}),n("a",{staticClass:"passport-template",attrs:{href:e.passportTemplateUrl}},[e._v("   Скачать шаблон")]),n("div",{staticClass:"files"},[n("ModelFile",{staticClass:"file",attrs:{label:"Загрузить паспорт проекта",required:"",value:e.proposal.passportFile,disabled:e.disabled,valid:e.isFieldValid["passportFile"]},on:{change:function(t){return e.setUpdate("passportFile",t)}}}),n("ModelFile",{staticClass:"file",attrs:{label:"Загрузить дополнительные файлы",multiple:"",value:e.proposal.attachments,disabled:e.disabled},on:{change:function(t){return e.setUpdate("attachments",t)},remove:e.removeAttachment}})],1),e.disabled?e._e():n("p",{staticClass:"label_required"},[n("span",{staticClass:"required"},[e._v("  *")]),e._v(" — поля, обязательные для заполенния\n    ")]),e.disabled?e._e():n("div",{staticClass:"buttons"},[n("Button",{staticClass:"btn_send",attrs:{disabled:!e.canSendUpdate},on:{click:e.clickSend}},[e._v("Отправить на рассмотрение")]),e.proposal.id?n("Button",{staticClass:"btn_save",attrs:{disabled:!e.canSaveProposal},on:{click:e.clickSave}},[e._v("Сохранить")]):e._e()],1),e.saving?n("Dialog",{attrs:{"is-popup":"",scrollable:!1,"has-close-button":!1}},[n("div",{staticClass:"proposal-popup"},[n("h1",[e._v("\n                Комментарий для администратора\n            ")]),n("p",{domProps:{innerHTML:e._s(e.saving.comment_description)}}),n("ModelTextArea",{attrs:{label:"Комментарий"},model:{value:e.saving.comment,callback:function(t){e.$set(e.saving,"comment",t)},expression:"saving.comment"}}),n("div",{staticClass:"buttons"},[n("Button",{staticClass:"btn btn--cancel",attrs:{outline:""},on:{click:e.saving.cancel}},[e._v("Отмена")]),n("Button",{staticClass:"btn",attrs:{disabled:!e.saving.is_valid(e.saving.comment)},on:{click:function(t){return e.saving.confirm(e.saving.comment)}}},[e._v("Отправить")])],1)],1)]):e._e()],1)},B=[],R=n("75fc"),$=(n("6762"),n("2fdb"),n("ffc1"),n("7f7f"),n("9a73")),U=n("12a3"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"data-model-wrapper"},[n("div",{staticClass:"data-model",class:{uploading:e.uploading,disabled:e.disabled,filled:e.value},on:{click:e.onClick}},[n("input",{ref:"file",attrs:{hidden:"",type:"file",multiple:""},on:{change:e.onChange}}),e.coins?n("div",{staticClass:"coins"},[e._v(e._s(e.coins))]):e._e(),e.label?n("div",{staticClass:"label",class:{"hold-place":!e.value}},[e._v(e._s(e.label)),e.required?n("span",{staticClass:"required"},[e._v("  *")]):e._e()]):e._e()]),e.multiple?e._l(e.value,(function(t,a){return n("div",{key:t.id,staticClass:"doc",class:{disabled:e.disabled}},[n("span",{staticClass:"close",on:{click:function(t){return e.remove(a)}}}),e._v("\n            Файл загружен \n            "),n("span",{on:{click:function(t){return t.stopPropagation(),e.download(a)}}},[e._v("(скачать)")])])})):e.value?n("div",{staticClass:"doc",class:{disabled:e.disabled}},[n("span",{staticClass:"close",on:{click:e.remove}}),e._v("\n        Файл загружен \n        "),n("span",{on:{click:e.download}},[e._v("(скачать)")])]):e._e()],2)},L=[],q=(n("c5f6"),{name:"ModelFile",props:{coins:Number,label:String,value:[Object,Array],multiple:Boolean,required:{type:Boolean,default:!1},uploading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{error:{success:!1,title:"Файл не загружен!",text:"Недопустимые расширение или размер файла",button:"Понятно",color:"#D1004A"}}},mounted:function(){},methods:{onClick:function(){this.disabled||this.$refs.file.click()},onChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("change",this.$refs.file.files);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),download:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:null,n=this.multiple?this.value[t]:this.value,n){e.next=4;break}return e.abrupt("return");case 4:n.url&&(a=window.open(n.url,"_blank"),a.focus());case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$emit("remove",e)}}}),V=q,N=(n("6cfa"),Object(b["a"])(V,A,L,!1,null,"41224329",null)),H=N.exports,I=n("fde1"),J=n("2961");function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=["dictionaryByType"],G=["loadDictionaryItems"],K={name:function(e){return!!e.name&&e.name.length<=255},type:function(e){return!!e.type&&e.type.length>0},thematicDirections:function(e){return e.thematicDirections&&e.thematicDirections.length>0},description:function(e){return!!e.description},passportFile:function(e){return e.passportFile&&e.passportFile.uuid}},Q={name:"ProposalForm",components:{ModelString:U["a"],ModelTextArea:k["a"],ModelSelect:$["a"],ModelMultiAutoComplete:I["a"],ModelFile:H,Button:P["a"],Dialog:J["a"]},props:{disabled:{type:Boolean,default:!1}},data:function(){return{passportTemplateUrl:"https://s3-cms.rsv.ru/pasport_proyektnoi_initsiativy.docx",thematicDirectionsSearchString:"",dictionaries:["projects_thematic_directions"],isFieldValid:{},isFormValid:!1,loading:!1,isCreatePopupOpen:!0,saving:null,deleting:!1}},computed:Y({},Object(o["c"])(z),{},Object(o["e"])("proposals",["projectTypes","proposal","updatedFields"]),{projectTypesList:function(){return Object.entries(this.projectTypes).map((function(e){return{text:e[1],value:e[0]}}))},selectedThematicDirections:function(){var e=this;return this.dictionaryByType("projects_thematic_directions").filter((function(t){return e.proposal.thematicDirections.indexOf(t.id)>-1}))},filteredThematicDirections:function(){var e=this,t=this.dictionaryByType("projects_thematic_directions");return""!==this.thematicDirectionsSearchString&&(t=t.filter((function(t){return t.field_value.includes(e.thematicDirectionsSearchString)}))),t},canSendUpdate:function(){return!this.loading&&this.isFormValid},canSaveProposal:function(){return!this.loading&&this.isFormValid&&Object.keys(this.updatedFields).length>0}}),watch:{proposal:{handler:function(e){var t=this;this.isFormValid=Object.keys(K).map((function(e){return K[e](t.proposal)})).every((function(e){return e})),this.isFieldValid=Object.keys(this.updatedFields).reduce((function(e,n){return K[n]&&(e[n]=K[n](t.proposal)),e}),{}),console.log("validate!",this.updatedFields)},deep:!0}},methods:Y({},Object(o["b"])(G),{},Object(o["b"])("proposals",["createProposal","saveProposal","uploadFile","updateProposal"]),{},Object(o["d"])("proposals",["setProposalUpdate"]),{setUpdate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("passportFile"!==t){e.next=6;break}return e.next=3,this.uploadFile(n);case 3:n=e.sent[0],e.next=15;break;case 6:if("attachments"!==t){e.next=15;break}return e.t0=[],e.t1=Object(R["a"])(this.proposal.attachments),e.t2=R["a"],e.next=12,this.uploadFile(n);case 12:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),n=e.t0.concat.call(e.t0,e.t1,e.t4);case 15:this.setProposalUpdate({key:t,value:n});case 16:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),removeAttachment:function(e){var t=Object(R["a"])(this.proposal.attachments);t.splice(e,1),this.setProposalUpdate({key:"attachments",value:t})},clickSend:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,t=!!this.proposal.id,n=t?"Укажите доработки, которые внесли. <br> Комментарий является обязательным.":"Вы можете описать дополнительную информацию по инициативе.<br>Комментарий не является обязательным.",e.next=6,new Promise((function(e,a){r.saving={comment_description:n,is_comment_required:t,is_valid:function(e){return!t||e.trim().length>0},comment:"",confirm:function(t){r.saving=null,e(t)},cancel:function(){r.saving=null,a()}}}));case 6:if(a=e.sent,!this.proposal.id){e.next=14;break}return e.next=10,this.saveProposal();case 10:return e.next=12,this.updateProposal({action:"to_review",comment:a});case 12:e.next=17;break;case 14:return e.next=16,this.createProposal(a);case 16:this.$router.push({name:"proposal",params:{id:this.proposal.id}});case 17:e.next=21;break;case 19:e.prev=19,e.t0=e["catch"](1);case 21:this.loading=!1;case 22:case"end":return e.stop()}}),e,this,[[1,19]])})));function t(){return e.apply(this,arguments)}return t}(),clickSave:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.saveProposal();case 3:this.loading=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){var e=this;this.dictionaries.forEach((function(t){e.loadDictionaryItems(t)}))}},X=Q,Z=(n("4893"),Object(b["a"])(X,T,B,!1,null,"7bf04168",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"proposal-mobile-details"},[n("div",{staticClass:"header"},[e._v("\n        Детали заявки\n        "),n("font-awesome-icon",{staticClass:"icon close",style:{color:"#98A0A9"},attrs:{icon:"times"},on:{click:function(t){return e.$emit("close")}}})],1),n("div",{staticClass:"card"},[n("Logs"),e.isCommentsEnabled?n("CreateComment"):e._e()],1)])},ne=[];function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie={name:"MobileDetails",components:{Logs:_,CreateComment:E},data:function(){return{}},computed:re({},Object(o["c"])("proposals",["proposalStatus"]),{},Object(o["e"])("proposals",["proposal","proposalError","isCommentsEnabled"])),props:{},methods:{},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},se=ie,oe=(n("bdac"),Object(b["a"])(se,te,ne,!1,null,"1486af81",null)),ce=oe.exports;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=["isMobile"],de=["showPopup"],fe={name:"WideSingleProposal",components:{Logs:_,CreateComment:E,Form:ee,Button:P["a"],MobileDetails:ce,Dialog:J["a"]},data:function(){return{isMobileDetailOpen:!1,deleting:!1}},computed:ue({},Object(o["c"])(pe),{},Object(o["c"])("proposals",["proposalStatus"]),{},Object(o["e"])("proposals",["proposal","proposalError","isCommentsEnabled"]),{disabled:function(){return"create"!==this.proposalStatus&&"in_revision"!==this.proposalStatus},isMobileDetailShown:function(){return this.isMobile&&this.isMobileDetailOpen}}),props:{},methods:ue({},Object(o["b"])(de),{},Object(o["b"])("proposals",["loadProposal","initProposal","clearProposal","deleteProposal"]),{onDelete:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteProposal();case 2:this.$router.replace({name:"account",params:{accField:"proposal"}});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.clearProposal(),"create"!==this.$route.params.id){e.next=5;break}this.initProposal(),e.next=7;break;case 5:return e.next=7,this.loadProposal(this.$route.params.id);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},be=fe,me=(n("7ec7"),n("da0a"),Object(b["a"])(be,a,r,!1,null,"7112311f",null));t["default"]=me.exports},"7ec7":function(e,t,n){"use strict";var a=n("b2a5"),r=n.n(a);r.a},b2a5:function(e,t,n){},bdac:function(e,t,n){"use strict";var a=n("0031"),r=n.n(a);r.a},cf41:function(e,t,n){},d0e2:function(e,t,n){},da0a:function(e,t,n){"use strict";var a=n("1adc"),r=n.n(a);r.a},fb49:function(e,t,n){}}]);
//# sourceMappingURL=chunk-025c612a.464059cf.js.map