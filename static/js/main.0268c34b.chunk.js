(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={spanClassName:"SuperCheckbox_spanClassName__3cQFG",checkbox:"SuperCheckbox_checkbox__220J5",path:"SuperCheckbox_path__1wqIH"}},,function(e,t,n){e.exports={messageContainer:"Message_messageContainer__3StXa",textContainer:"Message_textContainer__1cotw",time:"Message_time__149-m"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__39EUZ",errorInput:"SuperInputText_errorInput__1HTdo",error:"SuperInputText_error__T4zbq"}},,function(e,t,n){e.exports={red:"SuperButton_red__21cjm",default:"SuperButton_default__3g5cT"}},function(e,t,n){e.exports={blue:"HW4_blue__VFLQu",column:"HW4_column__2wZTQ",testSpanError:"HW4_testSpanError__2_q_5"}},,function(e,t,n){e.exports={App:"App_App__6SuGm"}},function(e,t,n){e.exports={spanStyle:"Affairs_spanStyle__2bMDU"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__VWIKM",mistakeMessage:"Greeting_mistakeMessage__3_KJ4",error:"Greeting_error__1AHrw",button:"Greeting_button__2Mj4r"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(13),s=n.n(c),o=(n(22),n(14)),i=n.n(o),l=n(8),u=n.n(l),j=n(0);var d=function(e){return Object(j.jsxs)("div",{className:u.a.messageContainer,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.avatar})}),Object(j.jsxs)("div",{className:u.a.textContainer,children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("p",{children:e.message}),Object(j.jsx)("p",{className:u.a.time,children:e.time})]})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",m="some text",p="22:00";var x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(d,{avatar:b,name:h,message:m,time:p})]})},O=n(2),_=n(3),f=n(4),C=n(11),g=n.n(C),v=function(e){var t=e.red,n=e.className,r=Object(f.a)(e,["red","className"]),a="".concat(t?g.a.red:g.a.default," ").concat(n);return Object(j.jsx)("button",Object(_.a)({className:a},r))},k=n(15),N=n.n(k);var S=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:N.a.spanStyle,children:"show some text"}),Object(j.jsx)(v,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(j.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{children:[t,Object(j.jsx)(v,{onClick:function(){e.setFilter("all")},children:"All"}),Object(j.jsx)(v,{onClick:function(){e.setFilter("high")},children:"High"}),Object(j.jsx)(v,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(j.jsx)(v,{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(r.useState)(y),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(O.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(w,{data:l,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))},filter:o})]})},T=n(17),A=n(16),I=n.n(A),M=n(9),F=n.n(M),H=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=(e.value,e.onKeyPress),a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),o=e.setError,i=Object(f.a)(e,["type","onChange","onChangeText","value","onKeyPress","onEnter","error","className","spanClassName","setError"]),l="".concat(F.a.error," ").concat(s||""),u="".concat(F.a.superInput," ").concat(c?F.a.errorInput:"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(_.a)({type:"text",onChange:function(e){e.currentTarget.value?o(""):console.log("err"),t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.code&&(e.currentTarget.value?o(""):o("error")),a&&"Enter"===e.key&&a(e)},className:u,defaultValue:""},i)),c?Object(j.jsx)("span",{className:l,children:c}):null]})},L=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers;return Object(j.jsxs)("div",{children:[Object(j.jsx)(H,{value:t,setError:function(){},spanClassName:I.a.testSpanError,error:a,onChange:n}),Object(j.jsx)(v,{onClick:r,children:"add"}),Object(j.jsx)("span",{children:c})]})},U=function(e){var t=e.users,n=e.addUserCallback,a=(e.children,Object(r.useState)("")),c=Object(O.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(""),l=Object(O.a)(i,2),u=l[0],d=l[1],b=t.length;return Object(j.jsx)(L,{name:s,setNameCallback:function(e){o(e.currentTarget.value),d("")},addUser:function(){s?n(s):d("You have mistake!"),o("")},error:u,totalUsers:b,users:t})},W=n(26);var G=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(U,{users:n,addUserCallback:function(e){var t={_id:Object(W.a)(),name:e},r=[].concat(Object(T.a)(n),[t]);a(r)}})]})},B=n(12),J=n.n(B),K=n(6),q=n.n(K),P=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),a=Object(f.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(q.a.\u0441heckbox2," ").concat(n||"");return Object(j.jsxs)("label",{className:"".concat(q.a.checkbox," ").concat(q.a.path),children:[Object(j.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){t&&t((function(e){return!e}))},className:c},a)),Object(j.jsx)("svg",{viewBox:"0 0 21 21",children:Object(j.jsx)("path",{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186",children:" "})}),r&&Object(j.jsx)("span",{className:q.a.spanClassName,children:r})]})};var Q=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(O.a)(c,2),o=s[0],i=s[1],l=function(){n?alert(n):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...")},u=Object(r.useState)(!1),d=Object(O.a)(u,2),b=d[0],h=d[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:J.a.column,children:[Object(j.jsx)(H,{setError:i,value:n,onChangeText:a,onEnter:l,error:o,spanClassName:J.a.testSpanError}),Object(j.jsx)(v,{children:"default"}),Object(j.jsx)(v,{red:!0,onClick:l,children:"delete"}),Object(j.jsx)(v,{disabled:!0,children:"disabled"}),"----------------------------------------------------",Object(j.jsx)(P,{checked:b,onChangeChecked:h,children:"some text"}),Object(j.jsx)(P,{checked:b,onChange:function(e){return h(e.currentTarget.checked)}})]})]})};var V=function(){return Object(j.jsxs)("div",{className:i.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)(x,{}),Object(j.jsx)(E,{}),Object(j.jsx)(G,{}),Object(j.jsx)(Q,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.0268c34b.chunk.js.map