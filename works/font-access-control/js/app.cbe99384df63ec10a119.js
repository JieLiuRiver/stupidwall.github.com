webpackJsonp([8],{"/2tN":function(e,t){},"14gb":function(e,t,n){"use strict";var r=n("VCXJ"),a=n("2sCs");n.n(a);t.a=new r.default({data:function(){return{resourcePermission:null,menuTreeRoutes:[],hashMenus:{},allowedRouters:[],username:"",myInterceptor:null}},methods:{}})},"7/0V":function(e,t){},IGsd:function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},staticRenderFns:[]},a=n("8AGX")({data:function(){return{}}},r,!1,null,null,null).exports;t.a=[{path:"/home",name:"home",component:function(e){return n.e(3).then(function(){var t=[n("8hXn")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"roles",name:"roles",meta:{name:"角色管理"},component:function(e){return n.e(0).then(function(){var t=[n("1XJF")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"accounts",name:"accounts",meta:{name:"账号管理"},component:function(e){return n.e(4).then(function(){var t=[n("jk0N")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"goods",name:"goods",meta:{icon:"&#xe62e;",name:"商品管理"},component:a,children:[{path:"goods-list",name:"goods-list",meta:{name:"商品信息"},component:function(e){return n.e(2).then(function(){var t=[n("8dlZ")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}]}]},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("VCXJ"),a=n("S0kX"),s=n.n(a),o=n("14gb"),i=n("sUQS"),u=n("IGsd"),c=n("gyMJ"),h=new i.a,l={name:"app",data:function(){return{}},methods:{init:function(e){var t=this,n=h.verifyToken();n?h.getAuthDataByToken(n.token).then(function(n){o.a.username=n.data.name,o.a.resourcePermission=h.assembleResource(n.data.resources),o.a.myInterceptor=h.setInterceptor(o.a.resourcePermission,c.a),console.log("myInterceptor",o.a.myInterceptor),o.a.menuTreeRoutes=h.assembleTreeRoutesByMenus(n.data.menus),o.a.hashMenus=h.switchHashMenus(o.a.hashMenus,o.a.menuTreeRoutes),t.$root.hashMenus=o.a.hashMenus,o.a.allowedRouters=h.getAllowedRouters(u.a[0].children,o.a.allowedRouters,o.a.hashMenus),h.extendRouters(o.a.allowedRouters,o.a.hashMenus).then(function(n){console.log("readyRouters",n),t.$router.addRoutes(n),h.addHasMethods(o.a.resourcePermission),e&&e()}).catch(function(e){console.log("error"),t.$router.push({name:"login"})})}):this.$router.push({name:"login"})}},created:function(){var e=this;this.init(),o.a.$on("on-after-login-success",function(t){c.a.interceptors.request.eject(o.a.myInterceptor),e.init(function(){e.$router.push("home")})})}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var d=n("8AGX")(l,f,!1,function(e){n("/2tN")},null,null).exports,v=n("zO6J"),p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))]),this._v(" "),t("h2",[this._v("Essential Links")]),this._v(" "),this._m(0),this._v(" "),t("h2",[this._v("Ecosystem")]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[this._v("Core Docs")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[this._v("Forum")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[this._v("Community Chat")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[this._v("Twitter")])]),this._v(" "),t("br"),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[this._v("Docs for This Template")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]};n("8AGX")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(e){n("rBJF")},"data-v-651ad60c",null).exports;r.default.use(v.a);var m=new v.a({routes:[{path:"/login",name:"login",component:function(e){return n.e(1).then(function(){var t=[n("Quw4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/401",name:"401",component:function(e){return n.e(6).then(function(){var t=[n("aXys")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/404",name:"404",component:function(e){return n.e(5).then(function(){var t=[n("+H76")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});n("7/0V");r.default.use(s.a),r.default.directive("has",{bind:function(e,t){r.default.prototype.$_has(t.value)||e.parentNode.removeChild(e)}}),new r.default({el:"#app",router:m,render:function(e){return e(d)}})},gyMJ:function(e,t,n){"use strict";var r=n("rVsN"),a=n.n(r),s=n("2sCs"),o=n.n(s).a.create({baseURL:"http://rap2api.taobao.org/app/mock/3358",timeout:1e4});o.defaults.headers.post["Content-Type"]="application/json",o.interceptors.response.use(function(e){return e},function(e){return a.a.reject(e)}),t.a=o},rBJF:function(e,t){},sUQS:function(e,t,n){"use strict";var r=n("Yarq"),a=n.n(r),s=n("AA3o"),o=n.n(s),i=n("xSur"),u=n.n(i),c=n("UzKs"),h=n.n(c),l=n("Y7Ml"),f=n.n(l),d=n("rVsN"),v=n.n(d),p=n("lC5x"),m=n.n(p),y=n("J0Oq"),g=n.n(y),_=n("3cXf"),k=n.n(_),b=n("hRKE"),A=n.n(b),w=(n("2sCs"),n("VCXJ")),E=n("S0kX"),R=n("IGsd"),T=n("gyMJ"),x=function(e){function t(){return o()(this,t),h()(this,(t.__proto__||a()(t)).call(this))}return f()(t,e),u()(t,[{key:"g_adminToken",value:function(e){return T.a.get("GET/v1/admin/token",{params:e})}},{key:"g_userToken",value:function(e){return T.a.get("GET/v1/user/token",{params:e})}},{key:"noallowRequest",value:function(e){return T.a.get("GET/v1/admin/roles",{params:e})}},{key:"allowRequest",value:function(e){return T.a.get("GET/v1/user/goodlist",{params:e})}}]),t}(function(){function e(){o()(this,e)}return u()(e,[{key:"handleSession",value:function(e,t){if(e&&void 0===t){var n=sessionStorage.getItem(e);return n&&0===n.indexOf("autostringify-")?JSON.parse(n.split("autostringify-")[1]):n}if(e&&t)return("object"===(void 0===t?"undefined":A()(t))||Array.isArray(t))&&(t="autostringify-"+k()(t)),sessionStorage.setItem(e,t);e||t||sessionStorage.clear()}},{key:"verifyToken",value:function(e){var t=this.handleSession("token");return!(!t||!t.token)&&t}},{key:"getAuthDataByToken",value:function(){var e=g()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,-1===t.indexOf("admin")){e.next=7;break}return e.next=4,this.getAdminAuthData({Authorization:t});case 4:n=e.sent,e.next=11;break;case 7:if(-1===t.indexOf("user")){e.next=11;break}return e.next=10,this.getUserAuthData({Authorization:t});case 10:n=e.sent;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAdminAuthData",value:function(e){return T.a.get("GET/v1/admin/authdata",{params:e})}},{key:"getUserAuthData",value:function(e){return T.a.get("GET/v1/user/authdata",e)}},{key:"assembleResource",value:function(e){var t={};return Array.isArray(e)&&e.forEach(function(e,n){var r=e.method.toLowerCase()+","+e.url;t[r]=!0}),t}},{key:"assembleTreeRoutesByMenus",value:function(e,t){var n=this,r=[],a=Array.isArray(e)?e.map(function(e){return e.id}):[];t=t||"parent_id",e.forEach(function(e,s){if(e[t]&&e[t]!==e.id){if(Array.isArray(a)){-1===a.findIndex(function(n){return n==e[t]})&&r.push(e)}}else delete e[t],r.push(n.clone(e))});return function n(r){Array.isArray(r)&&r.length&&r.forEach(function(r){e.forEach(function(e){r.id===e[t]&&(r.children?r.children.push(e):r.children=[e])}),r.children&&n(r.children)})}(r),r}},{key:"switchHashMenus",value:function(e,t,n){var r=this;return t.forEach(function(t){if(t.route){var n=t.route.replace(/^\//,"");e[n]=!0,Array.isArray(t.children)&&t.children.length&&r.switchHashMenus(e,t.children)}}),e}},{key:"setInterceptor",value:function(e,t){return t.interceptors.request.use(function(t){var n=t.url.replace(t.baseURL,"").replace("GET/v1/","").replace("POST/v1/","").split("?")[0];return"token"===n.split("/").pop()?t:e[t.method+","+n]?t:(E.Message.error("无访问权限，请联系企业管理员"),v.a.reject({message:"no permission"}))})}},{key:"getAllowedRouters",value:function(e,t,n,r){return function e(t,r){return(t=t.filter(function(e,t){return n[e.name]})).forEach(function(t){Array.isArray(t.children)&&t.children.length&&(t.children=e(t.children))}),t}(this.clone(e))}},{key:"extendRouters",value:function(e,t){var n=this;return new v.a(function(r,a){e&&e.length||(n.handleSession("token",""),a(!1));var s=n.clone(R.a);function o(e){return Array.isArray(e.children)&&e.children.length&&e.children.forEach(function(e){o(e)}),e.beforeEnter=function(e,n,r){t[e.name]?r():r("/401")}}e.map(function(e){return o}),e.forEach(function(e){o(e)}),s[0].children=e,r(s)})}},{key:"addHasMethods",value:function(e){w.default.prototype.$_has=function(t){var n=!0;return Array.isArray(t)?t.forEach(function(t){e[t]||(n=!1)}):"string"==typeof t&&(e[t]||(n=!1)),n}}},{key:"clone",value:function(e){if(!e)return e;var t=e instanceof Array?[]:{};for(var n in e)t[n]="object"===A()(e[n])?this.clone(e[n]):e[n];return t}}]),e}());t.a=x}},["NHnr"]);
//# sourceMappingURL=app.cbe99384df63ec10a119.js.map