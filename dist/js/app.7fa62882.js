(function(t){function e(e){for(var n,c,a=e[0],l=e[1],s=e[2],d=0,f=[];d<a.length;d++)c=a[d],r[c]&&f.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0b93":function(t,e,o){"use strict";var n=o("de3d"),r=o.n(n);r.a},"2afd":function(t,e,o){"use strict";var n=o("6705"),r=o.n(n);r.a},"389c":function(t,e,o){},"3d90":function(t,e,o){"use strict";var n=o("389c"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=o("5c96"),i=o.n(r),c=(o("0fae"),o("2f62")),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",{staticClass:"typing"},[t._v("走心的提醒事项，作者：菇凉大人")]),o("Todoheader"),o("router-view"),o("TodoFooter")],1)},l=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"header"}},[o("el-input",{attrs:{placeholder:"小主，快来写下今天的日程吧～",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addItem(e):null}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[o("i",{staticClass:"el-input__icon el-icon-arrow-down",attrs:{slot:"prefix"},on:{click:t.isAllDone},slot:"prefix"})])],1)},u=[],d={data:function(){return{title:""}},methods:{addItem:function(){var t=this.title&&this.title.trim();if(t){var e={title:t,complete:!1};this.$store.dispatch("addTodo",e),this.title=""}},isAllDone:function(){var t=this.$store.getters.totalSize;if(t>0){var e=!this.$store.getters.isAllPick;this.$store.dispatch("isAllDone",e)}else this.$message({message:"不如先记录下第一个 todo thing 吧～",type:"warning",center:!0})}}},f=d,p=(o("cf03"),o("2877")),v=Object(p["a"])(f,s,u,!1,null,"7759b76f",null);v.options.__file="TodoHeader.vue";var m=v.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.totalSize,expression:"totalSize"}],attrs:{id:"footer"}},[o("span",[t._v(" "+t._s(t.unfinishSize)+" 项未完成")]),o("el-button",{attrs:{type:"info",plain:""},on:{click:function(e){t.goTo("/all")}}},[t._v("全部")]),o("el-button",{attrs:{type:"success",plain:""},on:{click:function(e){t.goTo("/actived")}}},[t._v("已完成")]),o("el-button",{attrs:{type:"warning",plain:""},on:{click:function(e){t.goTo("/unfinish")}}},[t._v("未完成")]),o("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",circle:""},on:{click:t.deleteDone}})],1)},b=[],_=(o("a481"),o("cebc")),T={computed:Object(_["a"])({},Object(c["c"])(["totalSize","unfinishSize"])),methods:Object(_["a"])({},Object(c["b"])(["deleteDone"]),{goTo:function(t){this.$router.replace(t)}})},O=T,g=(o("3d90"),Object(p["a"])(O,h,b,!1,null,"7d9d3ca8",null));g.options.__file="TodoFooter.vue";var y=g.exports,j={components:{Todoheader:m,TodoFooter:y},created:function(){this.$store.dispatch("readTodo")}},k=j,x=(o("b20d"),Object(p["a"])(k,a,l,!1,null,null,null));x.options.__file="App.vue";var w,S=x.exports,$=o("bd86"),E=(o("ac6a"),"ADD_TODO"),A="DELETE_DONE",D="IS_ALL_DONE",I="RECIVE_TODOS",z=(w={},Object($["a"])(w,I,function(t,e){var o=e.todos;t.todos=o}),Object($["a"])(w,E,function(t,e){var o=e.todo;t.todos.unshift(o)}),Object($["a"])(w,A,function(t){t.todos=t.todos.filter(function(t){return!t.complete})}),Object($["a"])(w,D,function(t,e){var o=e.checked;t.todos.forEach(function(t){return t.complete=o})}),w),P=o("f499"),C=o.n(P),L="todos",N={readTodos:function(){return JSON.parse(localStorage.getItem(L)||"[]")},saveTodos:function(t){localStorage.setItem(L,C()(t))}},M={readTodo:function(t){var e=t.commit;setTimeout(function(){var t=N.readTodos();e(I,{todos:t})},1e3)},addTodo:function(t,e){var o=t.commit;o(E,{todo:e})},deleteDone:function(t){var e=t.commit;e(A)},isAllDone:function(t,e){var o=t.commit;o(D,{checked:e})}},F={todos:function(t){return t.todos},totalSize:function(t){return t.todos.length},unfinish:function(t){return t.todos.filter(function(t){return!t.complete})},unfinishSize:function(t,e){return e.unfinish.length},completeTodo:function(t){return t.todos.filter(function(t){return t.complete})},completeSize:function(t,e){return e.completeTodo.length},isAllPick:function(t,e){return e.completeSize===e.totalSize}};n["default"].use(c["a"]);var J={todos:[]},H=new c["a"].Store({state:J,mutations:z,actions:M,getters:F}),R=o("8c4f"),U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todoList"},t._l(t.todos,function(t,e){return o("TodoItem",{key:e,attrs:{todo:t,index:e}})}),1)},V=[],q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"item"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.complete,expression:"todo.complete"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todo.complete)?t._i(t.todo.complete,null)>-1:t.todo.complete},on:{change:function(e){var o=t.todo.complete,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,c=t._i(o,i);n.checked?c<0&&t.$set(t.todo,"complete",o.concat([i])):c>-1&&t.$set(t.todo,"complete",o.slice(0,c).concat(o.slice(c+1)))}else t.$set(t.todo,"complete",r)}}}),o("span",[t._v(t._s(t.todo.title))])])])},B=[],G={props:["todo","index"]},K=G,Q=(o("0b93"),Object(p["a"])(K,q,B,!1,null,"3efbcc40",null));Q.options.__file="TodoItem.vue";var W=Q.exports,X={components:{TodoItem:W},computed:{todos:function(){return this.$store.getters.todos}},watch:{todos:{handler:N.saveTodos,deep:!0}}},Y=X,Z=(o("2afd"),Object(p["a"])(Y,U,V,!1,null,"2e8eda36",null));Z.options.__file="AllTodoList.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"todoList"},t._l(t.completeTodo,function(t,e){return o("TodoItem",{key:e,attrs:{todo:t,index:e}})}),1)])},ot=[],nt={components:{TodoItem:W},computed:Object(_["a"])({},Object(c["c"])(["completeTodo"]))},rt=nt,it=(o("6758"),Object(p["a"])(rt,et,ot,!1,null,"3e8a2314",null));it.options.__file="Actived.vue";var ct=it.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todoList"},t._l(t.unfinish,function(t,e){return o("TodoItem",{key:e,attrs:{todo:t,index:e}})}),1)},lt=[],st={components:{TodoItem:W},computed:Object(_["a"])({},Object(c["c"])(["unfinish"]))},ut=st,dt=(o("7378"),Object(p["a"])(ut,at,lt,!1,null,"17585dd6",null));dt.options.__file="Unfinish.vue";var ft=dt.exports;n["default"].use(R["a"]);var pt=new R["a"]({routes:[{path:"/",redirect:"/all"},{path:"/all",component:tt},{path:"/actived",component:ct},{path:"/unfinish",component:ft}]});n["default"].config.productionTip=!1,n["default"].use(i.a,c["a"]),new n["default"]({render:function(t){return t(S)},store:H,router:pt}).$mount("#app")},6705:function(t,e,o){},6758:function(t,e,o){"use strict";var n=o("6bdb"),r=o.n(n);r.a},"6bdb":function(t,e,o){},7378:function(t,e,o){"use strict";var n=o("aac6"),r=o.n(n);r.a},aac6:function(t,e,o){},acd4:function(t,e,o){},b20d:function(t,e,o){"use strict";var n=o("e0ef"),r=o.n(n);r.a},cf03:function(t,e,o){"use strict";var n=o("acd4"),r=o.n(n);r.a},de3d:function(t,e,o){},e0ef:function(t,e,o){}});
//# sourceMappingURL=app.7fa62882.js.map