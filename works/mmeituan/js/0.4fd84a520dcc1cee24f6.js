webpackJsonp([0],{Rv23:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("4YfN"),c=a.n(e),i=a("2/o2"),r=a("VhwH"),n=a("9rMa"),h={data:function(){return{searchKey:"",choseSuggestFlag:!1,iconlist:[{name:"主页",type:"⟰",routename:"home"}]}},methods:c()({},Object(n.b)(["searchAction"]),{resetAction:function(){this.searchKey="",this.$refs.searchInput.focus()},searchKeyup:function(){this.searchlist.length?this.choseSuggestFlag=!1:this.searchAction({keyword:this.searchKey})},choseSuggest:function(t){this.searchKey=t,this.choseSuggestFlag=!0}}),computed:c()({},Object(n.c)(["searchlist"])),components:{AppFooter:r.a,AppHeader:i.a}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search-wrapper"},[a("app-header",{attrs:{mode:"back",title:"搜索",iconlist:t.iconlist}}),t._v(" "),a("div",[a("form",{staticClass:"search-form"},[a("div",{staticClass:"box-search f-flex f-jcc f-aic"},[a("i",{staticClass:"icon-search f-b ion-ios-search-strong f-tc"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],ref:"searchInput",staticClass:"f-b",attrs:{type:"text",name:"w",placeholder:"输入商家名、品类或商圈",autocomplete:"off"},domProps:{value:t.searchKey},on:{keyup:t.searchKeyup,input:function(s){s.target.composing||(t.searchKey=s.target.value)}}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!!t.searchKey.length,expression:"!!searchKey.length"}],staticClass:"btn-reset f-b ion-close-circled f-tc",on:{click:t.resetAction}})]),t._v(" "),a("button",{staticClass:"submit-btn btn",class:[{highlight:!!t.searchKey.length},{nohighlight:!t.searchKey.length}],attrs:{type:"submit"}},[t._v("搜索")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!(t.searchlist.length&&!t.choseSuggestFlag),expression:"!(searchlist.length && !choseSuggestFlag)"}],staticClass:"hot-list"},[a("h2",[t._v("热门搜索")]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"search-info"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchlist.length&&!t.choseSuggestFlag,expression:"searchlist.length && !choseSuggestFlag"}],staticClass:"search-list"},t._l(t.searchlist,function(s,e){return a("li",{key:e,staticClass:"search-item vmc-1px-b-ccc"},[a("a",{staticClass:"f-b f-wf f-hf link f-flex f-jcb f-aic",attrs:{href:"javascript:;"},on:{click:function(a){t.choseSuggest(s.word)}}},[a("span",{staticClass:"f-b"},[a("i",{staticClass:"ion-ios-search-strong"}),a("span",{staticClass:"text f-pr"},[t._v(t._s(s.word))])]),t._v(" "),a("span",{staticClass:"f-b"},[t._v("约"+t._s(s.dealCount)+"个团购")])])])}))]),t._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"icon-list f-flex f-jcs f-aic f-wrap"},[a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/堂会",href:"/s/guangzhou-堂会"}},[t._v("堂会")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/KTV自助餐",href:"/s/guangzhou-KTV自助餐"}},[t._v("KTV自助餐")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/蒙肥羊",href:"/s/guangzhou-蒙肥羊"}},[t._v("蒙肥羊")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/巴喜阳光BBQ自助餐厅",href:"/s/guangzhou-巴喜阳光BBQ自助餐厅"}},[t._v("巴喜阳光BBQ自助餐厅")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/新派KTV",href:"/s/guangzhou-新派KTV"}},[t._v("新派KTV")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/盈点V-PARTY",href:"/s/guangzhou-盈点V-PARTY"}},[t._v("盈点V-PARTY")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/幸福西饼生日蛋糕",href:"/s/guangzhou-幸福西饼生日蛋糕"}},[t._v("幸福西饼生日蛋糕")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/广州长隆野生动物世界",href:"/s/guangzhou-广州长隆野生动物世界"}},[t._v("广州长隆野生动物世界")])]),t._v(" "),a("li",{staticClass:"icon"},[a("a",{staticClass:"hot-link react",attrs:{gaevent:"imt/search/hot/四海一家",href:"/s/guangzhou-四海一家"}},[t._v("四海一家")])])])}]};var l=a("X4nt")(h,o,!1,function(t){a("Ss6f")},"data-v-3ad2022d",null);s.default=l.exports},Ss6f:function(t,s){}});
//# sourceMappingURL=0.4fd84a520dcc1cee24f6.js.map