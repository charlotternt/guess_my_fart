(function(){"use strict";var n={9703:function(n,t,e){var r=e(9242),i=e(3396);const o={class:"App"},u=(0,i._)("h1",null,"Guess my fart?",-1);function a(n,t,e,r,a,c){return(0,i.wg)(),(0,i.iD)("div",o,[u,(0,i._)("button",{onTouchstart:t[0]||(t[0]=(...n)=>c.initiateAudio&&c.initiateAudio(...n)),onClick:t[1]||(t[1]=(...n)=>c.initiateAudio&&c.initiateAudio(...n))},"Play",32)])}var c={name:"App",data(){return{initiated:!1}},methods:{initiateAudio(){if(!this.initiated){const n=[e(1843),e(3873),e(689),e(2135)],t=n[Math.floor(Math.random()*n.length)],r=new Audio(t);r.addEventListener("error",(n=>{console.error("Erreur de lecture audio:",n)})),r.addEventListener("canplaythrough",(()=>{r.play().then((()=>{console.log("Lecture audio démarrée avec succès")})).catch((n=>{console.error("Erreur de démarrage de la lecture audio:",n)}))})),this.initiated=!0}}}},f=e(89);const d=(0,f.Z)(c,[["render",a]]);var s=d;(0,r.ri)(s).mount("#app")},1843:function(n,t,e){n.exports=e.p+"media/audio01.35eadaa2.mp3"},3873:function(n,t,e){n.exports=e.p+"media/audio02.1ec18fb5.mp3"},689:function(n,t,e){n.exports=e.p+"media/audio03.791201e9.mp3"},2135:function(n,t,e){n.exports=e.p+"media/audio04.c78b7cd4.mp3"}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return n[r].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,r,i,o){if(!r){var u=1/0;for(d=0;d<n.length;d++){r=n[d][0],i=n[d][1],o=n[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(a=!1,o<u&&(u=o));if(a){n.splice(d--,1);var f=i();void 0!==f&&(t=f)}}return t}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[r,i,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var i,o,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(c)var d=c(e)}for(t&&t(r);f<u.length;f++)o=u[f],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(d)},r=self["webpackChunkguess_my_fart"]=self["webpackChunkguess_my_fart"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9703)}));r=e.O(r)})();
//# sourceMappingURL=app.1654a1f9.js.map