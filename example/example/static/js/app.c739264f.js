(function(e){function n(n){for(var r,c,i=n[0],u=n[1],l=n[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-7085684b":"f9f1aa89","chunk-c463f1b4":"fabd03c7"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var p=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={id:"nav"},a=Object(r["f"])("example1"),c=Object(r["f"])(" | "),i=Object(r["f"])("example2");function u(e,n){var t=Object(r["v"])("router-link"),u=Object(r["v"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(t,{to:"/example1"},{default:Object(r["B"])((function(){return[a]})),_:1}),c,Object(r["g"])(t,{to:"/example2"},{default:Object(r["B"])((function(){return[i]})),_:1})]),Object(r["g"])(u)],64)}t("e3a5");var l=t("6b0d"),s=t.n(l);const p={},f=s()(p,[["render",u]]);var d=f,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),A=[{path:"/",name:"index",redirect:"/example1"},{path:"/example1",name:"example1",component:function(){return t.e("chunk-c463f1b4").then(t.bind(null,"1104"))}},{path:"/example2",name:"example2",component:function(){return t.e("chunk-7085684b").then(t.bind(null,"23f1"))}}],v=Object(b["a"])({base:"/example/",history:Object(b["b"])(),routes:A}),m=v,h=t("7ce4"),g=t.n(h);Object(r["c"])(d).use(m).use(g.a).mount("#app")},"6c6e":function(e,n,t){var r=t("24fb");n=r(!0),n.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}","",{version:3,sources:["D:/project/vue-trigger/example/src/D:/project/vue-trigger/example/src/D:/project/vue-trigger/example/src/App.vue"],names:[],mappings:"AACA,KACE,6CAAA,CACA,kCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CAGF,KACE,YAAA,CAEA,OACE,eAAA,CACA,aAAA,CAEA,gCACE,aAAA",file:"App.vue",sourcesContent:["\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n\n#nav {\n  padding: 30px;\n\n  a {\n    font-weight: bold;\n    color: #2c3e50;\n\n    &.router-link-exact-active {\n      color: #42b983;\n    }\n  }\n}\n"]}]),e.exports=n},e3a5:function(e,n,t){"use strict";t("fb27")},fb27:function(e,n,t){var r=t("6c6e");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=t("499e").default;o("a550beae",r,!0,{sourceMap:!0,shadowMode:!1})}});
//# sourceMappingURL=app.c739264f.js.map