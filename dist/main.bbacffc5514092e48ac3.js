webpackJsonp([1],{13:function(e,t,n){"use strict";var o=n(5),r=n.n(o),u=n(36),i={};i.title=function(e){e=e?e+" - Home":"iView project",window.document.title=e};var a="development"===u.a?"http://127.0.0.1:8888":"production"===u.a?"https://www.url.com":"https://debug.url.com";i.ajax=r.a.create({baseURL:a,timeout:3e4}),t.a=i},14:function(e,t,n){"use strict";var o=[{path:"/",meta:{title:""},component:function(e){return n.e(0).then(function(){var t=[n(43)];e.apply(null,t)}.bind(this)).catch(n.oe)}}];t.a=o},15:function(e,t){},16:function(e,t,n){var o=n(17)(n(35),n(41),null,null);o.options.__file="/Users/heliujie/Projects/stupidwall.github.com/src/app.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},17:function(e,t){e.exports=function(e,t,n,o){var r,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=Object.create(a.computed||null);Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}}),a.computed=c}return{esModule:r,exports:u,options:a}}},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},36:function(e,t,n){"use strict";t.a="production"},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n(2),u=n.n(r),i=n(3),a=n(14),c=n(13),s=n(16),d=n.n(s),l=n(15);n.n(l);o.default.use(i.a),o.default.use(u.a);var f={mode:"history",routes:a.a},p=new i.a(f);p.beforeEach(function(e,t,n){u.a.LoadingBar.start(),c.a.title(e.meta.title),n()}),p.afterEach(function(){u.a.LoadingBar.finish(),window.scrollTo(0,0)}),new o.default({el:"#app",router:p,render:function(e){return e(d.a)}})},41:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}},[37]);