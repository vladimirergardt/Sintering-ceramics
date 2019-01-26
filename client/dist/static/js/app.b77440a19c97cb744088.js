webpackJsonp([1],{"1FGi":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("NYxO"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"menu"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("wTWJ")},null,null).exports,o=a("/ocq"),c=a("Dd8w"),l=a.n(c),u={name:"auth",data:function(){return{authForm:{login:"",password:""},errors:{login:[{required:!0,message:"Введите логин",trigger:"blur"}],password:[{required:!0,message:"Введите пароль",trigger:"change"}]}}},computed:l()({},Object(n.c)(["getAuth"])),methods:l()({},Object(n.b)(["setAuth"]),{auth:function(){var t=this,e={login:this.authForm.login,password:this.authForm.password};this.setAuth(e).then(function(){t.getAuth.status?t.$router.push({path:"/"}):t.$message.error("Неверный логин или пароль")&&t.resetForm("authForm")})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.auth()})},resetForm:function(t){this.$refs[t].resetFields()},back:function(){this.status="",this.login="",this.password=""}}),mounted:function(){}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100vh"}},[a("el-card",{staticClass:"box-card auth"},[a("h3",{staticClass:"s-auth_h"},[t._v("Вход в систему")]),t._v(" "),a("el-form",{ref:"authForm",staticClass:"auth-form",attrs:{model:t.authForm,rules:t.errors,"label-width":"120px"}},[a("el-form-item",{staticClass:"s-input",attrs:{prop:"login"}},[a("el-input",{attrs:{placeholder:"Логин"},model:{value:t.authForm.login,callback:function(e){t.$set(t.authForm,"login",e)},expression:"authForm.login"}})],1),t._v(" "),a("el-form-item",{staticClass:"s-input",attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:"Пароль"},model:{value:t.authForm.password,callback:function(e){t.$set(t.authForm,"password",e)},expression:"authForm.password"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary"},on:{click:function(e){t.submitForm("authForm")}}},[t._v("Войти")])],1)],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(u,m,!1,function(t){a("1FGi")},null,null).exports,d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-row",{staticClass:"container",attrs:{type:"flex",align:"flex-end"}},[a("el-card",{staticClass:"box-card"},[a("h2",[t._v("Справка API")]),t._v(" "),a("div",{staticClass:"method"},[a("span",{staticClass:"method-path"},[t._v("/addUser")]),t._v(" "),a("span",{staticClass:"method-info"},[t._v(" - добавление пользователя в базу")]),t._v(" "),a("h5",{staticClass:"params-h"},[t._v("Параметры (POST):")]),t._v(" "),a("div",{staticClass:"method-params"},[t._v("\n          {"),a("br"),t._v('\n           "login": "login",'),a("br"),t._v('\n           "password": "password",'),a("br"),t._v('\n           "access": "access",'),a("br"),t._v("\n          }\n        ")])]),t._v(" "),a("div",{staticClass:"method"},[a("span",{staticClass:"method-path"},[t._v("/getUsers")]),t._v(" "),a("span",{staticClass:"method-info"},[t._v(" - получить список всех пользователей")]),t._v(" "),a("h5",{staticClass:"params-h"},[t._v("Параметры (GET):")]),t._v(" "),a("div",{staticClass:"method-params"},[t._v("\n          нет\n        ")])]),t._v(" "),a("div",{staticClass:"method"},[a("span",{staticClass:"method-path"},[t._v("/auth")]),t._v(" "),a("span",{staticClass:"method-info"},[t._v(" - аутентефикация")]),t._v(" "),a("h5",{staticClass:"params-h"},[t._v("Параметры (POST):")]),t._v(" "),a("div",{staticClass:"method-params"},[t._v("\n          {"),a("br"),t._v('\n           "login": "login",'),a("br"),t._v('\n           "password": "password",'),a("br"),t._v("\n          }\n        ")])])])],1)],1)},staticRenderFns:[]};var p=a("VU/8")({name:"helpApi",data:function(){return{}}},d,!1,function(t){a("g3vv")},null,null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"s-section"},[e("el-card",{staticClass:"box-card s-content"},[e("h3",{staticClass:"s-header"},[this._v("Calculation")])])],1)},staticRenderFns:[]};var v=a("VU/8")({name:"calculation",data:function(){return{}}},f,!1,function(t){a("cRjz")},null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  CalculationResult\n")])},staticRenderFns:[]};var g=a("VU/8")({name:"calculationResult"},_,!1,function(t){a("wMBH")},null,null).exports,b={name:"materialsList",data:function(){return{}},computed:l()({},Object(n.c)(["materialsList"])),methods:l()({},Object(n.b)(["getMaterialsList","deleteMaterial"]),{deleteItem:function(t){var e=this;this.deleteMaterial(t._id).then(function(){e.getMaterialsList()})},addItem:function(){this.$router.push({name:"materialEdit",params:{id:"new"}})},editItem:function(t){this.$router.push({name:"materialEdit",params:{id:t._id}})}}),mounted:function(){console.log(this.materialsList),this.getMaterialsList()}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"s-section"},[a("el-card",{staticClass:"box-card s-content"},[a("h3",{staticClass:"s-header"},[t._v("Список материалов")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit-outline"},on:{click:function(e){t.addItem()}}},[t._v("Добавить")]),t._v(" "),a("ul",{staticClass:"s-list"},t._l(t.materialsList,function(e){return a("li",{key:e._id,staticClass:"s-list_item",on:{click:function(a){t.editItem(e)}}},[a("span",{staticClass:"s-list_item_name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"s-list_item_options"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-delete",circle:""},on:{click:function(a){t.deleteItem(e)}}})],1)])}))],1)],1)},staticRenderFns:[]};var w=a("VU/8")(b,C,!1,function(t){a("wwkY")},null,null).exports,F={name:"materialEdit",data:function(){return{materialForm:{test:""},errors:{name:[{required:!0,trigger:"blur"}],start:[{required:!0,trigger:"blur"}],test:[{required:!0,message:"Введите логин",trigger:"blur"}]}}},computed:{checkAction:function(){return"new"===this.$router.history.current.params.id?"Добавление материала":"Редактирование материала"}},methods:{submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;console.log("ok!")})}},mounted:function(){}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"s-section"},[a("el-card",{staticClass:"box-card s-content"},[a("h3",{staticClass:"s-header"},[t._v(" "+t._s(t.checkAction)+" ")]),t._v(" "),a("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:function(e){t.$router.push({name:"materialsList"})}}},[t._v("Вернуться")]),t._v(" "),a("el-form",{ref:"materialForm",staticClass:"material-form",attrs:{"label-position":"top",model:t.materialForm,rules:t.errors,"label-width":"120px"}},[a("el-form-item",{staticClass:"s-input",attrs:{label:"Что то",prop:"test"}},[a("el-input",{model:{value:t.materialForm.test,callback:function(e){t.$set(t.materialForm,"test",e)},expression:"materialForm.test"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"primary"},on:{click:function(e){t.submitForm("materialForm")}}},[t._v("Сохранить")])],1)],1)],1)],1)},staticRenderFns:[]};var A=a("VU/8")(F,S,!1,function(t){a("RPVk")},null,null).exports,k={name:"top-menu",data:function(){return{menuItems:[{name:"Рассчет",pathName:"calculation",path:""},{name:"Материалы",pathName:"materialsList",path:"materials-list"}],statusMenu:""}},computed:l()({},Object(n.c)(["getAuth"]),{checkStatusMenu:function(){return this.statusMenu=window.location.hash.slice(2),window.location.hash.slice(2)},checkUser:function(){return"stud"===this.getAuth.access?"студент":"администратор"}}),methods:l()({},Object(n.b)(["clearAuth"]),{selectItem:function(t){this.statusMenu=t.path,this.$router.push({name:t.pathName})},logout:function(){this.clearAuth(),!this.getAuth.status&&this.$router.push({name:"auth"})}}),mounted:function(){}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"s-menu"},[a("el-row",{staticClass:"container",staticStyle:{"justify-content":"space-between"},attrs:{type:"flex"}},[a("div",{staticClass:"s-menu_links"},t._l(t.menuItems,function(e){return a("div",{staticClass:"s-menu_item",class:{active:e.path===t.statusMenu},on:{click:function(a){t.selectItem(e)}},model:{value:t.checkStatusMenu,callback:function(e){t.checkStatusMenu=e},expression:"checkStatusMenu"}},[t._v(t._s(e.name)+"\n      ")])})),t._v(" "),a("div",{staticClass:"s-menu_options"},[a("div",{staticClass:"s-menu_active"},[t._v("В сети: "+t._s(t.checkUser))]),t._v(" "),a("div",{staticClass:"s-menu_option",on:{click:t.logout}},[t._v("Выйти")])])])],1)},staticRenderFns:[]};var E=a("VU/8")(k,x,!1,function(t){a("bUW1")},null,null).exports;s.default.use(o.a);var R=new o.a({mode:"hash",routes:[{path:"/auth",name:"auth",component:h},{path:"/",name:"calculation",components:{default:v,menu:E}},{path:"/calculation-result",name:"calculationResult",components:{default:g,menu:E}},{path:"/materials-list",name:"materialsList",components:{default:w,menu:E}},{path:"/material-edit/:id",name:"materialEdit",components:{default:A,menu:E}},{path:"/api",name:"helpApi",component:p}]});R.beforeEach(function(t,e,a){"auth"===t.name&&a(),"false"!==localStorage.authStatus&&localStorage.authStatus?a():a({path:"/auth"})});var y,L=R,M=a("bOdI"),U=a.n(M),$=a("mtWM"),T=a.n($),I=a("2aIq"),j=a.n(I),O={state:{materialsList:[]},getters:{materialsList:function(t){return t.materialsList}},mutations:U()({},"SET_MATERIALS_LIST",function(t,e){t.materialsList=e}),actions:{getMaterialsList:function(t){var e=t.commit;return T.a.post("/getMaterials").then(function(t){var a=t.data.data;e("SET_MATERIALS_LIST",a)}).catch(function(t){console.log(t)})},deleteMaterial:function(t,e){j()(t);var a={id:e};return T.a.post("/deleteMaterial",a).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}};s.default.use(n.a);var V=new n.a.Store({modules:{materials:O},state:{auth:{status:!1,access:"access denied"},materialsList:[]},getters:{getAuth:function(t){return t.auth}},mutations:(y={},U()(y,"SET_AUTH_USER",function(t,e){t.auth.status=!0,t.auth.access=e}),U()(y,"CLEAR_AUTH_USER",function(t){t.auth.status=!1,t.auth.access="access denied"}),y),actions:{setAuth:function(t,e){var a=t.commit;return T.a.post("/auth",e).then(function(t){t.data.status&&(localStorage.authAccess="access true",localStorage.authStatus="true",a("SET_AUTH_USER",t.data.access))}).catch(function(t){console.log(t)})},clearAuth:function(t){var e=t.commit;localStorage.authStatus=!1,localStorage.authAccess="access denied",e("CLEAR_AUTH_USER")}}}),q=a("zL8q"),H=a.n(q);a("tvR6");s.default.use(n.a),s.default.use(H.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:L,store:V,components:{App:r},template:"<App/>"})},RPVk:function(t,e){},bUW1:function(t,e){},cRjz:function(t,e){},g3vv:function(t,e){},tvR6:function(t,e){},wMBH:function(t,e){},wTWJ:function(t,e){},wwkY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b77440a19c97cb744088.js.map