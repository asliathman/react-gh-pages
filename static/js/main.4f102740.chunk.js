(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),r=n(6),i=n.n(r),u=(n(12),n(5)),l=(n(13),n(7)),o=(n(14),n(15),n(0)),s=function(e){var a="";0===e.id||5===e.id?a="blue":1===e.id||6===e.id?a="yellow":2===e.id||7===e.id?a="green":3===e.id||8===e.id?a="pink":4===e.id&&(a="orange");return Object(o.jsx)("button",{className:"square",id:a,onClick:function(){e.onClickCallback(e.id)},children:e.value})},v=function(e){var a=function(e,a){var n;return(n=[]).concat.apply(n,Object(l.a)(e)).map((function(e){return Object(o.jsx)(s,{value:e.value,id:e.id,onClickCallback:a},e.id)}))}(e.squares,e.onClickCallback);return console.log(a),Object(o.jsx)("div",{className:"grid",children:a})},d=function(){for(var e=[],a=0,n=0;n<3;n+=1){e.push([]);for(var t=0;t<3;t+=1)e[n].push({id:a,value:""}),a+=1}return e},j=function(){var e=Object(t.useState)(d()),a=Object(u.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)(!1),i=Object(u.a)(r,2),l=i[0],s=i[1],j=l?"O":"X",h=function(){for(var e=0;e<3;){if(n[e][0].value===n[e][1].value&&n[e][2].value===n[e][1].value&&""!==n[e][0].value)return n[e][0].value;if(n[0][e].value===n[1][e].value&&n[2][e].value===n[1][e].value&&""!==n[0][e].value)return n[0][e].value;e+=1}return n[0][0].value===n[1][1].value&&n[2][2].value===n[1][1].value&&""!==n[1][1].value?n[0][0].value:n[0][2].value===n[1][1].value&&n[2][0].value===n[1][1].value&&""!==n[1][1].value?n[0][2].value:null},b=h()?"The winner is ".concat(h(),"!!!"):"Current player: ".concat(j);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{children:"TIC-TAC-TOE"}),Object(o.jsx)("h2",{children:b}),Object(o.jsx)("button",{onClick:function(){c(d())},children:"reset"})]}),Object(o.jsx)("main",{children:Object(o.jsx)(v,{squares:n,onClickCallback:h()?function(){}:function(e){for(var a=[],t=0;t<3;t+=1){a.push([]);for(var r=0;r<3;r+=1)e===n[t][r].id&&(n[t][r].value||(n[t][r].value=j,s(!l))),a[t].push(n[t][r])}c(a)}})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.4f102740.chunk.js.map