(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),i=(t(9),t(1)),l=(t(10),"9ca19c30a79184c3bd58ae35e6891d7b"),s="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),m=u[0],d=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"undefined"!=typeof m.main&&m.main.temp>26?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search your city.....",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(t,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){d(e),r(""),console.log(m)}))}})),"undefined"!=typeof m.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},m.name,",",m.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Fridaty","Saturday"][e.getDay()],t=e.getDate(),n=["January","Fabruary","March","April","May","June","July","Auguest","September","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(m.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},m.weather[0].main))):"")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.751137f0.chunk.js.map