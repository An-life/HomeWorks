(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,r){e.exports={spanClassName:"SuperCheckbox_spanClassName__3cQFG",checkbox:"SuperCheckbox_checkbox__220J5",path:"SuperCheckbox_path__1wqIH"}},function(e,t,r){e.exports={ErrorText:"Error404_ErrorText__3FmKO",ErrorTitle:"Error404_ErrorTitle__3Iic_",ErrorImg:"Error404_ErrorImg__6N-cd",container:"Error404_container__11sSQ"}},,function(e,t,r){e.exports={messageContainer:"Message_messageContainer__3StXa",textContainer:"Message_textContainer__1cotw",time:"Message_time__149-m"}},function(e,t,r){e.exports={superInput:"SuperInputText_superInput__39EUZ",errorInput:"SuperInputText_errorInput__1HTdo",error:"SuperInputText_error__T4zbq"}},,,function(e,t,r){e.exports={App:"App_App__6SuGm",AppTitle:"App_AppTitle__14Nn5"}},,function(e,t,r){e.exports={red:"SuperButton_red__21cjm",default:"SuperButton_default__3g5cT"}},function(e,t,r){e.exports={blue:"HW4_blue__VFLQu",column:"HW4_column__2wZTQ",testSpanError:"HW4_testSpanError__2_q_5"}},,,,,,function(e,t,r){e.exports={spanStyle:"Affairs_spanStyle__2bMDU"}},function(e,t,r){e.exports={someClass:"Greeting_someClass__VWIKM",mistakeMessage:"Greeting_mistakeMessage__3_KJ4",error:"Greeting_error__1AHrw",button:"Greeting_button__2Mj4r"}},,,,,,function(e,t,r){},,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(24),s=r.n(a),o=(r(34),r(18)),i=r.n(o),l=r(6),j=r(0);var u=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l.b,{to:"/pre-junior",children:"PreJunior"}),Object(j.jsx)(l.b,{to:"/junior",children:"Junior"}),Object(j.jsx)(l.b,{to:"/junior-plus",children:"JuniorPlus"})]})},d=r(2),b=r(14),h=r.n(b);var x=function(e){return Object(j.jsxs)("div",{className:h.a.messageContainer,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.avatar})}),Object(j.jsxs)("div",{className:h.a.textContainer,children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("p",{children:e.message}),Object(j.jsx)("p",{className:h.a.time,children:e.time})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",m="some text",_="22:00";var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(x,{avatar:p,name:O,message:m,time:_})]})},v=r(5),g=r(7),C=r(8),k=r(20),N=r.n(k),S=function(e){var t=e.red,r=e.className,n=Object(C.a)(e,["red","className"]),c="".concat(t?N.a.red:N.a.default," ").concat(r);return Object(j.jsx)("button",Object(g.a)({className:c},n))},E=r(27),w=r.n(E);var T=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:w.a.spanStyle,children:"show some text"}),Object(j.jsx)(S,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(j.jsx)(T,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{children:[t,Object(j.jsx)(S,{onClick:function(){e.setFilter("all")},children:"All"}),Object(j.jsx)(S,{onClick:function(){e.setFilter("high")},children:"High"}),Object(j.jsx)(S,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(j.jsx)(S,{onClick:function(){e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(A),t=Object(v.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)("all"),s=Object(v.a)(a,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,o);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(y,{data:l,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!=t}))}(r,e))},filter:o})]})},M=r(29),F=r(28),H=r.n(F),J=r(15),L=r.n(J),U=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=(e.value,e.onKeyPress),c=e.onEnter,a=e.error,s=(e.className,e.spanClassName),o=e.setError,i=Object(C.a)(e,["type","onChange","onChangeText","value","onKeyPress","onEnter","error","className","spanClassName","setError"]),l="".concat(L.a.error," ").concat(s||""),u="".concat(L.a.superInput," ").concat(a?L.a.errorInput:"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(g.a)({type:"text",onChange:function(e){e.currentTarget.value?o(""):console.log("err"),t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.code&&(e.currentTarget.value?o(""):o("error")),c&&"Enter"===e.key&&c(e)},className:u,defaultValue:""},i)),a?Object(j.jsx)("span",{className:l,children:a}):null]})},W=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,c=e.error,a=e.totalUsers;return Object(j.jsxs)("div",{children:[Object(j.jsx)(U,{value:t,setError:function(){},spanClassName:H.a.testSpanError,error:c,onChange:r}),Object(j.jsx)(S,{onClick:n,children:"add"}),Object(j.jsx)("span",{children:a})]})},G=function(e){var t=e.users,r=e.addUserCallback,c=(e.children,Object(n.useState)("")),a=Object(v.a)(c,2),s=a[0],o=a[1],i=Object(n.useState)(""),l=Object(v.a)(i,2),u=l[0],d=l[1],b=t.length;return Object(j.jsx)(W,{name:s,setNameCallback:function(e){o(e.currentTarget.value),d("")},addUser:function(){s?r(s):d("You have mistake!"),o("")},error:u,totalUsers:b,users:t})},P=r(43);var B=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),r=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(G,{users:r,addUserCallback:function(e){var t={_id:Object(P.a)(),name:e},n=[].concat(Object(M.a)(r),[t]);c(n)}})]})},K=r(21),q=r.n(K),Q=r(11),V=r.n(Q),X=function(e){e.type,e.onChange;var t=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(C.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(V.a.\u0441heckbox2," ").concat(r||"");return Object(j.jsxs)("label",{className:"".concat(V.a.checkbox," ").concat(V.a.path),children:[Object(j.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){t&&t((function(e){return!e}))},className:a},c)),Object(j.jsx)("svg",{viewBox:"0 0 21 21",children:Object(j.jsx)("path",{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186",children:" "})}),n&&Object(j.jsx)("span",{className:V.a.spanClassName,children:n})]})};var Z=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(""),s=Object(v.a)(a,2),o=s[0],i=s[1],l=function(){r?alert(r):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...")},u=Object(n.useState)(!1),d=Object(v.a)(u,2),b=d[0],h=d[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:q.a.column,children:[Object(j.jsx)(U,{setError:i,value:r,onChangeText:c,onEnter:l,error:o,spanClassName:q.a.testSpanError}),Object(j.jsx)(S,{children:"default"}),Object(j.jsx)(S,{red:!0,onClick:l,children:"delete"}),Object(j.jsx)(S,{disabled:!0,children:"disabled"}),"----------------------------------------------------",Object(j.jsx)(X,{checked:b,onChangeChecked:h,children:"some text"}),Object(j.jsx)(X,{checked:b,onChange:function(e){return h(e.currentTarget.checked)}})]})]})};var R=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(I,{}),Object(j.jsx)(B,{}),Object(j.jsx)(Z,{})]})},Y=r(12),z=r.n(Y);var D=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:z.a.ErrorTitle,children:"404"}),Object(j.jsx)("h3",{className:z.a.ErrorText,children:"Page not found!"}),Object(j.jsxs)("div",{className:z.a.container,children:[" ",Object(j.jsx)("img",{src:"https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",className:z.a.ErrorImg,alt:"Error"})]})]})},$="/pre-junior";var ee=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:$,render:function(){return Object(j.jsx)(R,{})}}),Object(j.jsx)(d.a,{render:function(){return Object(j.jsx)(D,{})}})]})})};var te=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(ee,{})]})})};var re=function(){return Object(j.jsxs)("div",{className:i.a.App,children:[Object(j.jsx)("h1",{className:i.a.AppTitle,children:"React homeworks"}),Object(j.jsx)(te,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.2362c8f4.chunk.js.map