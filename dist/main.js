!function(e){function t(t){for(var n,d,r=t[0],c=t[1],i=0,l=[];i<r.length;i++)d=r[i],Object.prototype.hasOwnProperty.call(a,d)&&a[d]&&l.push(a[d][0]),a[d]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(o&&o(t);l.length;)l.shift()()}var n={},a={0:0};function d(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,d){n=a[e]=[t,d]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=function(e){return d.p+""+e+".main.js"}(e);var o=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var d=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+d+": "+r+")",o.name="ChunkLoadError",o.type=d,o.request=r,n[1](o)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var o=c;d(d.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>document.getElementById("content");var d=n.p+"1377bcf99d32671ac835602818ec19af.jpeg",r=n.p+"13a30d48272abe8a7a120f3927b2ce35.jpeg",c=n.p+"7942cf3d6655f6044c2f6956a08cdf7b.jpg",i=n.p+"c2cf3938b08569bec380a23ed7a7357c.jpg";var o=n.p+"d7445ccaec7157f601fc583954669e1c.jpeg",l=n.p+"fd411e812270df82a976eb366d87ec1e.jpg",s=n.p+"5de01f27857f6f3d05be751555d955a5.jpg",m=n.p+"e930332370fa2df6aabaccb69717070d.jpeg";const u=()=>{const e=document.createElement("div");e.classList.add("d-flex","flex-column","menu");let t=[o,l,s,m],n=["A sweet Roll based on creamed cheese and shrimps with hot sauce","The typical California roll with krab and cheese with cucumber","Poker roll with toasted carrot, krab meat , creamed cheese and avocado","The alaskan roll based on salmon, cucumber, creamed cheese and avocado"];const a=document.createElement("h2");a.innerHTML="The menu",e.appendChild(a);for(let a=0;a<t.length;a++){let d=document.createElement("div");d.classList.add("subMenu","d-flex");let r=document.createElement("img");r.src=t[a];let c=document.createElement("p");c.innerHTML=n[a],r.classList.add("rounded-circle","food"),c.classList.add("lead","text-white"),d.appendChild(r),d.appendChild(c),e.appendChild(d)}return e};var p=n.p+"f2f173e49ef091648c11d3cedc9b9f83.jpg";n.e(3).then(n.t.bind(null,9,7)),n.e(4).then(n.t.bind(null,10,7)),n.e(5).then(n.t.bind(null,14,7)),n.e(6).then(n.t.bind(null,16,7)),n.e(1).then(n.t.bind(null,11,7)),n.e(2).then(n.t.bind(null,12,7));const f=(e=>{const t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("img"),o=document.createElement("img"),l=document.createElement("img"),s=document.createElement("img");return a.src=d,o.src=r,l.src=c,s.src=i,t.appendChild(a),t.appendChild(o),t.appendChild(l),t.appendChild(s),n.innerHTML=e,t.appendChild(n),t.classList.add("main-header"),t})("Best Sushi on town!");a().appendChild((()=>{const e=document.createElement("nav"),t=document.createElement("ul"),n=document.createElement("h5");n.innerHTML="The Sushi King";let a=["Home","Contact","About"];for(let e=0;e<a.length;e++){let n=document.createElement("li");n.id=a[e],n.innerHTML=a[e],t.appendChild(n)}return e.appendChild(n),e.appendChild(t),e})()),a().appendChild(f),a().appendChild(u()),document.getElementById("Home").addEventListener("click",e=>{let t=a().children[2];t.classList.add("animate__animated","animate__backOutRight"),t.addEventListener("animationend",()=>{a().removeChild(t),a().appendChild(u())}),void 0===a().children[2]&&a().appendChild(u())}),document.getElementById("Contact").addEventListener("click",e=>{let t=a().children[2];t.classList.add("animate__animated","animate__backOutRight"),t.addEventListener("animationend",()=>{a().removeChild(t),a().appendChild((()=>{const e=document.createElement("div");e.classList.add("container","d-flex","flex-column","justify-content-center","align-items-center","col-12","mt-3","contact");const t=document.createElement("h3");t.innerHTML="Have a reservation ? Call us! at 222-222 ";const n=document.createElement("h4");return e.appendChild(t),e.appendChild(n),n.innerHTML="Or find us at :",n.insertAdjacentHTML("afterend","<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7631335462675!2d-122.206261685076!3d37.324438079843915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fae43c67a111b%3A0x7f46d8ea80e3f1c5!2sSilicon%20Valley%20Vista%20Point!5e0!3m2!1ses!2ssv!4v1596053065922!5m2!1ses!2ssv' width='600' height='450' frameborder='0' style='border:0;'  aria-hidden='false' tabindex='0'></iframe>"),e})())})}),document.getElementById("About").addEventListener("click",e=>{let t=a().children[2];t.classList.add("animate__animated","animate__backOutRight"),t.addEventListener("animationend",()=>{a().removeChild(t),a().appendChild((()=>{const e=document.createElement("div");e.classList.add("container","d-flex","flex-column","align-items-center","col-8","mt-3","profile-img");const t=document.createElement("h2");t.innerHTML="About the page";const n=document.createElement("div");n.classList.add("d-flex","profile-img-sub-container");const a=document.createElement("img");a.classList.add("rounded-circle"),a.src=p,a.onclick=()=>{window.location.href="https://www.linkedin.com/in/ferm0494"},n.appendChild(a);const d=document.createElement("p");return d.classList.add("lead","text-white","align-self-center","ml-2","text-left"),e.appendChild(t),e.appendChild(n),d.innerHTML="Restaurant created only using Vanilla Javascript/SASS/Webpack/Bootstrap/HTML5 make sure to check my <a href='https://ferm0494.github.io'>Porfolio</a> :) !",n.appendChild(d),e})())})})}]);