(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports={Nav:"Header_Nav__2PlT7",activeLink:"Header_activeLink__2rKWh",toggle:"Header_toggle__39XY7"}},,,function(e,t,r){e.exports={spanClassName:"SuperCheckbox_spanClassName__3cQFG",checkbox:"SuperCheckbox_checkbox__220J5",path:"SuperCheckbox_path__1wqIH"}},function(e,t,r){e.exports={ErrorText:"Error404_ErrorText__3FmKO",ErrorTitle:"Error404_ErrorTitle__3Iic_",ErrorImg:"Error404_ErrorImg__6N-cd",container:"Error404_container__11sSQ"}},,function(e,t,r){e.exports={messageContainer:"Message_messageContainer__3StXa",textContainer:"Message_textContainer__1cotw",time:"Message_time__149-m"}},function(e,t,r){e.exports={superInput:"SuperInputText_superInput__39EUZ",errorInput:"SuperInputText_errorInput__1HTdo",error:"SuperInputText_error__T4zbq"}},,,function(e,t,r){e.exports={App:"App_App__6SuGm",AppTitle:"App_AppTitle__14Nn5"}},,function(e,t,r){e.exports={red:"SuperButton_red__21cjm",default:"SuperButton_default__3g5cT"}},function(e,t,r){e.exports={blue:"HW4_blue__VFLQu",column:"HW4_column__2wZTQ",testSpanError:"HW4_testSpanError__2_q_5"}},,,,,,function(e,t,r){e.exports={spanStyle:"Affairs_spanStyle__2bMDU"}},function(e,t,r){e.exports={someClass:"Greeting_someClass__VWIKM",mistakeMessage:"Greeting_mistakeMessage__3_KJ4",error:"Greeting_error__1AHrw",button:"Greeting_button__2Mj4r"}},,,,,,function(e,t,r){},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(25),s=r.n(c),o=(r(35),r(19)),i=r.n(o),l=r(6),j=r(9),u=r.n(j),d=r(0);var b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:u.a.Nav,children:[Object(d.jsx)(l.b,{to:"/pre-junior",activeClassName:u.a.activeLink,children:"PreJunior"}),Object(d.jsx)(l.b,{to:"/junior",activeClassName:u.a.activeLink,children:"Junior"}),Object(d.jsx)(l.b,{to:"/junior-plus",activeClassName:u.a.activeLink,children:"JuniorPlus"}),Object(d.jsx)("span",{className:u.a.toggle,children:" "})]})})},h=r(2),x=r(15),p=r.n(x);var m=function(e){return Object(d.jsxs)("div",{className:p.a.messageContainer,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.avatar})}),Object(d.jsxs)("div",{className:p.a.textContainer,children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsx)("p",{children:e.message}),Object(d.jsx)("p",{className:p.a.time,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",v="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(m,{avatar:O,name:_,message:f,time:v})]})},C=r(5),k=r(7),N=r(8),S=r(21),E=r.n(S),T=function(e){var t=e.red,r=e.className,n=Object(N.a)(e,["red","className"]),a="".concat(t?E.a.red:E.a.default," ").concat(r);return Object(d.jsx)("button",Object(k.a)({className:a},n))},w=r(28),y=r.n(w);var A=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:y.a.spanStyle,children:"show some text"}),Object(d.jsx)(T,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var I=function(e){var t=e.data.map((function(t){return Object(d.jsx)(A,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(T,{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(T,{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(T,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(T,{onClick:function(){e.setFilter("low")},children:"Low"})]})},L=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(n.useState)(L),t=Object(C.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)("all"),s=Object(C.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,o);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(I,{data:l,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!=t}))}(r,e))},filter:o})]})},H=r(30),M=r(29),W=r.n(M),J=r(16),P=r.n(J),U=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=(e.value,e.onKeyPress),a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),o=e.setError,i=Object(N.a)(e,["type","onChange","onChangeText","value","onKeyPress","onEnter","error","className","spanClassName","setError"]),l="".concat(P.a.error," ").concat(s||""),j="".concat(P.a.superInput," ").concat(c?P.a.errorInput:"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)({type:"text",onChange:function(e){e.currentTarget.value?o(""):console.log("err"),t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.code&&(e.currentTarget.value?o(""):o("error")),a&&"Enter"===e.key&&a(e)},className:j,defaultValue:""},i)),c?Object(d.jsx)("span",{className:l,children:c}):null]})},G=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,a=e.error,c=e.totalUsers;return Object(d.jsxs)("div",{children:[Object(d.jsx)(U,{value:t,setError:function(){},spanClassName:W.a.testSpanError,error:a,onChange:r}),Object(d.jsx)(T,{onClick:n,children:"add"}),Object(d.jsx)("span",{children:c})]})},K=function(e){var t=e.users,r=e.addUserCallback,a=(e.children,Object(n.useState)("")),c=Object(C.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(""),l=Object(C.a)(i,2),j=l[0],u=l[1],b=t.length;return Object(d.jsx)(G,{name:s,setNameCallback:function(e){o(e.currentTarget.value),u("")},addUser:function(){s?r(s):u("You have mistake!"),o("")},error:j,totalUsers:b,users:t})},B=r(44);var q=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),r=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(K,{users:r,addUserCallback:function(e){var t={_id:Object(B.a)(),name:e},n=[].concat(Object(H.a)(r),[t]);a(n)}})]})},Q=r(22),X=r.n(Q),V=r(12),Y=r.n(V),Z=function(e){e.type,e.onChange;var t=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),a=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Y.a.\u0441heckbox2," ").concat(r||"");return Object(d.jsxs)("label",{className:"".concat(Y.a.checkbox," ").concat(Y.a.path),children:[Object(d.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t((function(e){return!e}))},className:c},a)),Object(d.jsx)("svg",{viewBox:"0 0 21 21",children:Object(d.jsx)("path",{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186",children:" "})}),n&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:n})]})};var R=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(C.a)(c,2),o=s[0],i=s[1],l=function(){r?alert(r):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...")},j=Object(n.useState)(!1),u=Object(C.a)(j,2),b=u[0],h=u[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:X.a.column,children:[Object(d.jsx)(U,{setError:i,value:r,onChangeText:a,onEnter:l,error:o,spanClassName:X.a.testSpanError}),Object(d.jsx)(T,{children:"default"}),Object(d.jsx)(T,{red:!0,onClick:l,children:"delete"}),Object(d.jsx)(T,{disabled:!0,children:"disabled"}),"----------------------------------------------------",Object(d.jsx)(Z,{checked:b,onChangeChecked:h,children:"some text"}),Object(d.jsx)(Z,{checked:b,onChange:function(e){return h(e.currentTarget.checked)}})]})]})};var z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(F,{}),Object(d.jsx)(q,{}),Object(d.jsx)(R,{})]})},D=r(13),$=r.n(D);var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:$.a.ErrorTitle,children:"404"}),Object(d.jsx)("h3",{className:$.a.ErrorText,children:"Page not found!"}),Object(d.jsxs)("div",{className:$.a.container,children:[" ",Object(d.jsx)("img",{src:"https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",className:$.a.ErrorImg,alt:"Error"})]})]})},te="/pre-junior";var re=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:te,render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(h.a,{render:function(){return Object(d.jsx)(ee,{})}})]})})};var ne=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(re,{})]})})};var ae=function(){return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)("h1",{className:i.a.AppTitle,children:"React homeworks"}),Object(d.jsx)(ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.66c96c37.chunk.js.map