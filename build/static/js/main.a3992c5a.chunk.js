(this["webpackJsonplaney-tech"]=this["webpackJsonplaney-tech"]||[]).push([[0],{15:function(e,n,l){e.exports=l(22)},22:function(e,n,l){"use strict";l.r(n);var t={};l.r(t),l.d(t,"light",(function(){return o})),l.d(t,"dark",(function(){return i})),l.d(t,"rainbow",(function(){return d}));var a=l(0),r=l.n(a),c=l(10),u=l.n(c),m=l(3),E=l(1),o={backgroundColor:"#FFFFFF",textColor:"#24292e",linkColor:"#0366d6",gridBackgroundColor:"#FFFFFF",cellColor:"rgb(235, 237, 240)",borderColor:"#d1d5da",accentColor1:"#c6e48b",accentColor2:"#7bc96f",accentColor3:"#239a3b",accentColor4:"#196127",accentColor5:"#196127"},i={backgroundColor:"#1E1E1E",textColor:"#D2D2D2",linkColor:"rgb(79, 140, 201)",gridBackgroundColor:"#181818",cellColor:"#222222",borderColor:"#4a4a4a",accentColor1:"#253543",accentColor2:"#345170",accentColor3:"#416f9c",accentColor4:"#4f8cc9",accentColor5:"#4f8cc9"},d={backgroundColor:"repeating-linear-gradient(45deg,\n    rgba(255, 108, 108, 0.25) 0px, rgba(255, 108, 108, 0.25) 20px,\n    rgba(255, 162, 42, 0.25) 20px, rgba(255, 162, 42, 0.25) 40px,\n    rgba(123, 201, 111, 0.25) 40px, rgba(123, 201, 111, 0.25) 60px,\n    rgba(94, 195, 220, 0.25) 60px, rgba(94, 195, 220, 0.25) 80px,\n    rgba(193, 127, 214, 0.25) 80px, rgba(193, 127, 214, 0.25) 100px\n    )",textColor:"#24292e",linkColor:"#6765de",gridBackgroundColor:"#FFFFFF",cellColor:"rgb(235, 237, 240)",borderColor:"#9796d2",accentColor1:"rgba(255, 108, 108, 1)",accentColor2:"rgba(255, 162, 42, 1)",accentColor3:"rgba(123, 201, 111, 1)",accentColor4:"rgba(94, 195, 220, 1)",accentColor5:"rgba(165, 107, 183, 1)"},f=l(2);function b(){var e=Object(f.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    background-attachment: fixed;\n    color: ",';\n    font-size: 14px;\n    line-height: 1.4rem;\n    margin: 1em;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    transition: all 0.25s linear;\n  }\n\n  h2 {\n    font-size: 16px;\n  }\n\n  a {\n    color: ',";\n    font-weight: 500;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: ",";\n    text-decoration: underline;\n  }\n\n   @media only screen and (max-width: 600px) {\n    body {\n      margin: 0.5em 0;\n    }\n  }\n"]);return b=function(){return e},e}var s=Object(E.b)(b(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.linkColor}),(function(e){return e.theme.linkColor})),g=l(14);function h(){var e=Object(f.a)(["\n  background: ",";\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"]);return h=function(){return e},e}function p(){var e=Object(f.a)(["\n  background: ",";\n  cursor: pointer;\n"]);return p=function(){return e},e}function x(){var e=Object(f.a)(["\n  height: 12px;\n  width: 12px;\n  outline: none;\n\n  &:hover {\n    border: 1px solid ",";\n  }\n"]);return x=function(){return e},e}function v(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 12px);\n  grid-template-rows: repeat(7, 12px);\n  grid-column-gap: 3px;\n  grid-row-gap: 3px;\n  grid-auto-flow: column;\n  /* width: 100%; */\n"]);return v=function(){return e},e}function C(){var e=Object(f.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1em 0;\n  padding: 16px;\n\n  @media only screen and (max-width: 600px) {\n    padding: 1em 0;\n    border-top: 1px solid ",";\n    border-bottom: 1px solid ",";\n    border-left: 0;\n    border-right: 0;\n    border-radius: 0;\n    margin: 0.5em 0;\n  }\n"]);return C=function(){return e},e}var k=E.c.div(C(),(function(e){return e.theme.gridBackgroundColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.borderColor})),w=E.c.div(v()),y=E.c.div(x(),(function(e){return e.theme.textColor})),O=Object(E.c)(y)(p(),(function(e){var n=e.theme,l=e.colorNumber;return 0===l?n.cellColor:n["accentColor".concat(l)]})),j=Object(E.c)(y)(h(),(function(e){var n=e.theme,l=e.randomNumber;return n["accentColor".concat(l)]}),(function(e){return e.theme.textColor})),F=function(){var e=Object(a.useState)(0),n=Object(m.a)(e,2),l=n[0],t=n[1],c=function(){t((function(e){return 5===e?0:e+1}))},u=function(e){"Enter"===e.key&&c()};return r.a.createElement(O,{colorNumber:l,onClick:c,onMouseOver:c,onKeyDown:u,onFocus:u,tabIndex:0})},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null))},S=function(){var e=Math.floor(5*Math.random())+1;return r.a.createElement(j,{randomNumber:e})},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(B,null))},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(B,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(F,null),r.a.createElement(B,null))},L=["light","dark","rainbow"],D=function(e,n){var l=e?35:21;return Math.floor((n+3)/15)-l},N=function(){return{width:window.innerWidth}},R=function(){var e=Object(a.useState)(N()),n=Object(m.a)(e,2),l=n[0],t=n[1];return Object(a.useEffect)((function(){var e=function(){t(N())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),l},I=function(){var e=Object(a.useRef)(),n=Object(a.useRef)(r.a.createElement(z,null)),l=Object(a.useRef)(r.a.createElement(M,null)),t=R().width,c=t>=532,u=c?n:l,m=D(c,t<=600?t:t-60),E=m>0?Object(g.a)(Array(m)).map((function(e,n){return r.a.createElement(B,{key:n})})):null;return r.a.createElement(k,{ref:e},r.a.createElement(w,null,u.current,E))};function W(){var e=Object(f.a)(["\n  padding: 1em;\n  margin-left: 1em;\n  border-left: 1px solid ",";\n"]);return W=function(){return e},e}function A(){var e=Object(f.a)(["\n  margin: 2em auto;\n  padding: 0 1em;\n  max-width: 550px;\n\n  @media only screen and (max-width: 600px) {\n    padding: 0 0.5em;\n  }\n"]);return A=function(){return e},e}var T=E.c.section(A()),J=E.c.div(W(),(function(e){return e.theme.borderColor})),U=function(e){var n=e.title,l=e.children;return r.a.createElement(T,null,r.a.createElement("h2",null,n),r.a.createElement(J,null,l))};function H(){var e=Object(f.a)(["\n  display: inline-block;\n  width: 20px;\n  margin-right: 0.5em;\n"]);return H=function(){return e},e}function K(){var e=Object(f.a)(["\n  margin: 0.5em 0 0.5em 0.5em;\n"]);return K=function(){return e},e}var P=E.c.div(K()),$=E.c.span(H()),q=function(e){var n=e.children;return r.a.createElement(P,{role:"list"},n)},G=function(e){var n=e.children,l=e.icon;return r.a.createElement("div",{role:"listitem"},!!l&&r.a.createElement($,{role:"img"},l),n)};G.defaultProps={icon:null};var Q=G,V=function(){return r.a.createElement(U,{title:"Laney Smith"},r.a.createElement(q,null,r.a.createElement(Q,{icon:"\ud83d\udc69\u200d\ud83d\udcbb"},"web developer"),r.a.createElement(Q,{icon:"\ud83c\udfd4"},"Bellingham, WA")))},X=function(){return r.a.createElement(U,{title:"Recent Activity"},"Lately I've been...",r.a.createElement(q,null,r.a.createElement(Q,{icon:"\ud83d\uddfa"},"making ",r.a.createElement("a",{href:"https://covid.laney.tech/"},"data-driven maps"),","),r.a.createElement(Q,{icon:"\ud83e\uddea"},"conducting various ",r.a.createElement("a",{href:"https://github.com/laneysmith/"},"experiments"),","),r.a.createElement(Q,{icon:"\ud83d\udcd3"},"writing a few ",r.a.createElement("a",{href:"https://dev.to/laney"},"articles")," about coding,"),r.a.createElement(Q,{icon:"\u2728"},"and building modern websites that make people's lives easier.")))},Y=function(){return r.a.createElement(U,{title:"Contact Me"},r.a.createElement(q,null,r.a.createElement(Q,{icon:"\ud83d\udcbb"},r.a.createElement("a",{href:"https://github.com/laneysmith"},"github")),r.a.createElement(Q,{icon:"\ud83d\udc54"},r.a.createElement("a",{href:"https://linkedin.com/in/laneysmith"},"linkedin")),r.a.createElement(Q,{icon:"\ud83d\udce8"},r.a.createElement("a",{href:"mailto:lsmith.unc@gmail.com"},"email"))))};function Z(){var e=Object(f.a)(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 3px;\n  color: ",";\n  font-size: 1em;\n  font-weight: 500;\n  text-decoration: none;\n  padding: 6px 8px;\n  margin: 0 0 0 0.5em;\n\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  &:disabled {\n    color: ",";\n    opacity: 0.8;\n  }\n\n  &:disabled:hover {\n    text-decoration: none;\n    cursor: default;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return Z=function(){return e},e}function _(){var e=Object(f.a)(["\n  text-align: right;\n  width: 100%;\n\n  @media only screen and (max-width: 600px) {\n    padding-right: 0.5em;\n  }\n"]);return _=function(){return e},e}var ee=E.c.div(_()),ne=E.c.button(Z(),(function(e){return e.theme.gridBackgroundColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.linkColor}),(function(e){return e.theme.textColor})),le=function(e){var n=e.themeList,l=e.theme,t=e.setTheme;return r.a.createElement(ee,null,r.a.createElement("b",null,"Theme:"),n.map((function(e){var n=l===e;return r.a.createElement(ne,{id:"".concat(e,"-theme-btn"),key:"".concat(e,"-theme"),type:"button",onClick:function(){return t(e)},disabled:n},e)})))},te=function(){var e=Object(a.useState)("light"),n=Object(m.a)(e,2),l=n[0],c=n[1];return r.a.createElement(E.a,{theme:t[l]},r.a.createElement(s,null),r.a.createElement(le,{theme:l,setTheme:c,themeList:L}),r.a.createElement(I,null),r.a.createElement(V,null),r.a.createElement(X,null),r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a3992c5a.chunk.js.map