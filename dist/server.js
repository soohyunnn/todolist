!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("axios")},function(e,t,n){e.exports=n(7)},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("@babel/runtime/helpers/esm/defineProperty.js")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),u=n(2),i=n.n(u),l=n(5),s=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={input:"",todos:[],imsiTodos:[]};var m=n(1);var O=function(){var e=Object(m.useDispatch)(),t=Object(r.useCallback)((function(){e({type:"ALL_TODO"})}),[]),n=Object(r.useCallback)((function(){e({type:"TRUE_TODO",action:!0})}),[]),a=Object(r.useCallback)((function(){e({type:"FALSE_TODO",action:!1})}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"button",onClick:t},"전체"),o.a.createElement("button",{className:"button",onClick:n},"진행중"),o.a.createElement("button",{className:"button",onClick:a},"완료"))};var b=function(){var e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),n=e.toLocaleDateString("ko-KR",{weekday:"long"});return o.a.createElement("div",{className:"TodoHeadBlock"},o.a.createElement("h1",null,"Todos"),o.a.createElement("h1",null,t),o.a.createElement("div",{className:"day"},n))};var E=function(){var e=Object(m.useSelector)((function(e){return{todos:e.todos,input:e.input}})),t=e.todos,n=e.input,a=Object(m.useDispatch)(),c=Object(r.useRef)(t.length);console.log("id",c);var u=Object(r.useCallback)((function(e){var t=e.target.value;a({type:"CHANGE_INPUT",value:t})}),[]),l=Object(r.useCallback)((function(){console.log("aaa",t),i.a.post("/todos",{id:c.current,text:n,action:!0}),a({type:"CREATE_TODO",todo:{id:c.current,text:n,action:!0}})}),[n]),s=Object(r.useCallback)((function(){a({type:"RESET_INPUT"})}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{onChange:u,onKeyPress:function(e){"Enter"===e.key&&l()},value:n}),o.a.createElement("button",{className:"button",onClick:l},"등록"),o.a.createElement("button",{className:"button",onClick:s},"초기화"))},v=n(3),y=n.n(v);function g(e,t,n,r,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}var T=function(){var e=function(){var e,t=(e=y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/todos");case 2:return t=e.sent,n({type:"aaa",response:t.data}),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){g(a,r,o,c,u,"next",e)}function u(e){g(a,r,o,c,u,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){e()}),[]),console.log("todos1",[]);var t=Object(m.useSelector)((function(e){return{todos:e.todos}})).todos,n=Object(m.useDispatch)(),a=Object(r.useCallback)((function(e){n({type:"DELETE_TODO",id:e})}),[]),c=Object(r.useCallback)((function(e){console.log("id",e),n({type:"TOGGLE_TODO",id:e})}),[]);return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement("div",{className:"todolist"},o.a.createElement("li",{style:{color:!0===e.action?"green":"purple"},key:e.id,onClick:function(){return c(e.id)}},e.text,o.a.createElement("button",{onClick:function(){return a(e.id)},className:"XButton"},"X")))})))};var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"♥ List ♥"),o.a.createElement("div",{style:{padding:23}},o.a.createElement(T,null)))};var h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(E,null),o.a.createElement(j,null),o.a.createElement(O,null))};var D=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,null)))},k=n(6),x=Object(k.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"aaa":return console.log("aaa",t.response),f(f({},e),{},{todos:t.response});case"CHANGE_INPUT":return f(f({},e),{},{input:t.value});case"RESET_INPUT":return f(f({},e),{},{input:""});case"CREATE_TODO":return{input:p.input,todos:e.todos.concat(t.todo),imsiTodos:e.todos.concat(t.todo)};case"DELETE_TODO":return f(f({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id})),imsiTodos:e.todos.filter((function(e){return e.id!==t.id}))});case"TOGGLE_TODO":return f(f({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?f(f({},e),{},{action:!e.action}):e})),imsiTodos:e.todos.map((function(e){return e.id===t.id?f(f({},e),{},{action:!e.action}):e}))});case"ALL_TODO":return f(f({},e),{},{todos:e.imsiTodos});case"TRUE_TODO":return f(f({},e),{},{todos:e.imsiTodos.filter((function(e){return!0===e.action}))});case"FALSE_TODO":return f(f({},e),{},{todos:e.imsiTodos.filter((function(e){return!1===e.action}))});default:return e}}));console.log(x.getState()),c.a.render(o.a.createElement(m.Provider,{store:x},o.a.createElement(D,null)),document.getElementById("root"))}]);