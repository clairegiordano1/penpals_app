(this.webpackJsonppenpals=this.webpackJsonppenpals||[]).push([[0],{167:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(37),s=n.n(c),o=n(84),u=n(85),i=n(111),l=n(104),p=n(10),d=n(19),h=n.n(d),b=n(38),j=n(141),f=n(209),O=n(208),v=n(207),x=n(211),m=n(195),g=n(59),w=(n(167),n(103)),k=n(148),y=n(60),E=n.n(y),C="GET_USER",S="REMOVE_USER",F="UPDATE_CURRENT_USER",R="ADD_USER",U={},D=function(e){return{type:C,user:e}};var L=n(9),T=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleLogin=Object(b.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.state.email.length||!e.state.password.length){t.next=6;break}return t.next=4,e.props.auth1(e.state.email,e.state.password);case 4:return t.next=6,e.props.me();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.state={email:"",password:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserInfo(1)}},{key:"render",value:function(){return Object(L.jsxs)(f.a,{centered:!0,children:[Object(L.jsxs)(O.a,{onSubmit:this.handleLogin,children:[Object(L.jsxs)(O.a.Field,{children:[Object(L.jsx)("label",{children:"Email"}),Object(L.jsx)(v.a,{placeholder:"Email Address",type:"text",value:this.state.email,name:"email",onChange:this.handleChange})]}),Object(L.jsxs)(O.a.Field,{children:[Object(L.jsx)("label",{children:"Password"}),Object(L.jsx)(v.a,{placeholder:"Password",type:"password",value:this.state.password,name:"password",onChange:this.handleChange})]}),Object(L.jsx)(O.a.Field,{children:Object(L.jsx)(x.a,{label:"My information looks correct"})}),Object(L.jsx)(m.a,{fluid:!0,basic:!0,color:"blue",content:"Blue",type:"submit",children:"Submit"})]}),Object(L.jsxs)(m.a,{color:"facebook",children:[Object(L.jsx)(g.a,{name:"facebook"})," Facebook"]}),Object(L.jsxs)(m.a,{color:"green",children:[Object(L.jsx)(g.a,{name:"google plus"})," Google"]})]})}}]),n}(a.a.Component),P=Object(w.b)((function(e){return{user:e.user}}),(function(e){return{auth1:function(t,n){return e(function(e,t){return function(){var n=Object(b.a)(h.a.mark((function n(r){var a,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.post("http://localhost:8081/auth/login",{email:e,password:t});case 3:return a=n.sent,c=a.data,n.abrupt("return",r(D(c)));case 8:throw n.prev=8,n.t0=n.catch(0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},me:function(){return e(function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("http://localhost:8081/auth/me");case 3:if(!(n=e.sent).data){e.next=8;break}t(D(n.data)),e.next=9;break;case 8:return e.abrupt("return");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},getUserInfo:function(t){return e(function(e){return function(){var t=Object(b.a)(h.a.mark((function t(n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("http://localhost:8081/api/users/".concat(e));case 3:return r=t.sent,a=r.data,t.abrupt("return",n(D(a)));case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(T),_=n(147),I=n.p+"static/media/logo.46014b6f.png",M=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(L.jsxs)("div",{id:"main",children:[Object(L.jsx)(_.a,{src:I,size:"small",centered:!0}),Object(L.jsx)(p.a,{exact:!0,path:"/",component:P})]})}}]),n}(r.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,212)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},B=n(122),G=n(54),J=n(144),z=n(145),N=n(146),V=Object(G.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.user;case S:return U;case F:return t.user;case R:return[].concat(Object(k.a)(e),[t.user]);default:return e}}}),W=Object(N.composeWithDevTools)(Object(G.applyMiddleware)(z.a,Object(J.createLogger)({collapsed:!0}))),q=Object(G.createStore)(V,W),H=(n(193),function(){s.a.render(Object(L.jsx)(w.a,{store:q,children:Object(L.jsx)(B.a,{children:Object(L.jsx)(M,{})})}),document.getElementById("root"))});window.cordova?document.addEventListener("deviceready",(function(){H()}),!1):H(),A()}},[[194,1,2]]]);
//# sourceMappingURL=main.95b7100a.chunk.js.map