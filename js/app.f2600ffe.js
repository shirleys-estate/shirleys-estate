(function(e){function t(t){for(var r,a,u=t[0],i=t[1],d=t[2],f=0,s=[];f<u.length;f++)a=u[f],c[a]&&s.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({index:"index"}[e]||e)+"."+{"chunk-0fa768b0":"0cec744b","chunk-2d0ac39a":"c83d6b0f","chunk-35f0e794":"d811eade","chunk-77d709c4":"ecfe5547","chunk-924b3d04":"19a866d7","chunk-60b1eb12":"64e5c1c0","chunk-2d0d63f1":"ee0ee5e2","chunk-2d0e95df":"9b1cf3cb","chunk-2d2086b7":"f8e3e20c","chunk-2d22d746":"893e6e64",index:"73f378ca"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-924b3d04":1,"chunk-60b1eb12":1,index:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({index:"index"}[e]||e)+"."+{"chunk-0fa768b0":"31d6cfe0","chunk-2d0ac39a":"31d6cfe0","chunk-35f0e794":"31d6cfe0","chunk-77d709c4":"31d6cfe0","chunk-924b3d04":"0a1eb9f0","chunk-60b1eb12":"e23c03fb","chunk-2d0d63f1":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d22d746":"31d6cfe0",index:"f4636d0b"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===c))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],f=d.getAttribute("data-href");if(f===r||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=o);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e),d=function(t){f.onerror=f.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}c[e]=void 0}};var s=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var l=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("6b54"),n("a481"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("0ff2"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{cart:e.cart},on:{addToCart:e.addToCart,removeFromCart:e.removeFromCart,clearCart:e.clearCart}})],1)},o=[],u=n("f499"),i=n.n(u),d=(n("7f7f"),n("ac6a"),n("7514"),{data:function(){return{cart:[]}},mounted:function(){localStorage.getItem("cart")&&(this.cart=JSON.parse(localStorage.getItem("cart")))},methods:{addToCart:function(e){this.cart.find(function(t){return t.id==e.id})||(this.cart.push(e),this.saveCart())},removeFromCart:function(e){this.cart=this.cart.filter(function(t){return t.id!==e.id}),this.saveCart()},clearCart:function(){this.cart=[],this.saveCart()},saveCart:function(){var e=[];this.cart.forEach(function(t){var n=t.id,r=t.name,a=t.description,c=t.price,o={id:n,name:r,description:a,price:c,pictures:[]};o.pictures=t.pictures,e.push(o)},this),localStorage.setItem("cart",i()(e))}}}),f=d,s=(n("5c0b"),n("2877")),l=Object(s["a"])(f,c,o,!1,null,null,null),h=l.exports,p=n("8c4f"),m=n("8aa5"),b=n.n(m);r["a"].use(p["a"]);var v=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("index").then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/cart",name:"cart",component:function(){return Promise.all([n.e("chunk-2d0ac39a"),n.e("chunk-60b1eb12")]).then(n.bind(null,"b789"))},props:!0},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/add-item",name:"add-item",component:function(){return Promise.all([n.e("chunk-0fa768b0"),n.e("chunk-2d0ac39a"),n.e("chunk-35f0e794")]).then(n.bind(null,"a291"))},meta:{requiresAuth:!0}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/i/:id",name:"item",component:function(){return Promise.all([n.e("chunk-0fa768b0"),n.e("chunk-924b3d04")]).then(n.bind(null,"f0df"))},props:!0},{path:"/edit/:id",name:"edit-item",component:function(){return Promise.all([n.e("chunk-0fa768b0"),n.e("chunk-2d0ac39a"),n.e("chunk-77d709c4")]).then(n.bind(null,"4047"))},props:!0,meta:{requiresAuth:!0}},{path:"/logout",name:"logout",beforeEnter:function(e,t,n){b.a.auth().signOut().then(function(){n("/")})}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}]});v.beforeEach(function(e,t,n){var r=b.a.auth().currentUser,a=e.meta.requiresAuth;a&&!r&&n("login"),r&&"login"==e.name&&n("/"),n()});var g="Shirley's Estate Sale";v.afterEach(function(e){document.title=e.meta.title||g});var k=v,y=n("ecee"),x=n("c074"),w=n("ad3d");y["c"].add([x["d"],x["f"],x["a"],x["c"],x["b"],x["g"],x["e"]]);var C=w["a"],S={apiKey:"AIzaSyBvmIFxKnFko79DyuWnx6BPnqN81qqDlmc",authDomain:"localhost",projectId:"shirleys-estate-sale",storageBucket:"shirleys-estate-sale.appspot.com"};r["a"].use(a["a"]),r["a"].component("font-awesome-icon",C),b.a.initializeApp(S),r["a"].config.productionTip=!1,r["a"].filter("currency",function(e){var t=(e/1).toFixed(2);return"$"+t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),r["a"].directive("focus",{inserted:function(e){e.focus()}}),b.a.auth().onAuthStateChanged(function(){new r["a"]({router:k,render:function(e){return e(h)}}).$mount("#app")})},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.f2600ffe.js.map