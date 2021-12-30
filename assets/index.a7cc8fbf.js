import{S as L,i as T,s as C,a as v,e as d,b as j,c as _,d as h,t as g,f as y,g as b,h as A,n as k,j as p,k as I,l as D,m as H,o as z,p as F,q as K,r as M,u as G,v as N,w as O,x as P,y as E,z as S,A as J,B as Q}from"./vendor.19f82abd.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};R();function U(r){let e,t,i,s,n=[{class:"card"},r[1]],a={};for(let o=0;o<n.length;o+=1)a=v(a,n[o]);return{c(){e=d("article"),t=d("section"),t.innerHTML=`<div class="front svelte-13f2ayu"></div> 
    <div class="back svelte-13f2ayu"><span class="svelte-13f2ayu">Think all the stories we&#39;ll learn...</span></div>`,i=j(),s=d("section"),s.innerHTML=`<div class="front svelte-13f2ayu"><span class="svelte-13f2ayu">...as we write our own.</span></div> 
    <div class="back svelte-13f2ayu"><small>This is the back.</small></div>`,_(t,"class","page pg1 svelte-13f2ayu"),_(s,"class","page pg2 svelte-13f2ayu"),h(e,a),g(e,"open",r[0]),g(e,"svelte-13f2ayu",!0)},m(o,f){y(o,e,f),b(e,t),b(e,i),b(e,s)},p(o,[f]){h(e,a=A(n,[{class:"card"},f&2&&o[1]])),g(e,"open",o[0]),g(e,"svelte-13f2ayu",!0)},i:k,o:k,d(o){o&&p(e)}}}function V(r,e,t){let{open:i=!1}=e;return r.$$set=s=>{t(1,e=v(v({},e),I(s))),"open"in s&&t(0,i=s.open)},e=I(e),[i,e]}class W extends L{constructor(e){super();T(this,e,V,U,C,{open:0})}}function X(r){let e,t,i,s=[{loop:!0},{autoplay:!0},r[1]],n={};for(let a=0;a<s.length;a+=1)n=v(n,s[a]);return{c(){e=d("audio"),t=d("source"),D(t.src,i="music.mp3")||_(t,"src",i),_(t,"type","audio/mp3"),h(e,n)},m(a,o){y(a,e,o),b(e,t),r[7](e)},p(a,[o]){h(e,n=A(s,[{loop:!0},{autoplay:!0},o&2&&a[1]]))},i:k,o:k,d(a){a&&p(e),r[7](null)}}}function Y(r,e,t){const i=H();let{rate:s=100}=e,{delta:n=.015}=e,{min:a=.025}=e,{max:o=.3}=e,{target:f=a}=e,c,l;z(()=>{t(0,l.currentTime=5,l),t(0,l.volume=a,l);let u=setInterval(()=>{l.play().then(()=>{i("playing"),clearInterval(u)}).catch(()=>{})});c=setInterval(()=>{l.paused&&l.play().catch(()=>{}),l.volume<f?t(0,l.volume=Math.min(o,l.volume+n),l):l.volume>f&&t(0,l.volume=Math.max(a,l.volume-n),l)},s)}),F(()=>{clearInterval(c)});function m(u){K[u?"unshift":"push"](()=>{l=u,t(0,l)})}return r.$$set=u=>{t(1,e=v(v({},e),I(u))),"rate"in u&&t(2,s=u.rate),"delta"in u&&t(3,n=u.delta),"min"in u&&t(4,a=u.min),"max"in u&&t(5,o=u.max),"target"in u&&t(6,f=u.target)},e=I(e),[l,e,s,n,a,o,f,m]}class Z extends L{constructor(e){super();T(this,e,Y,X,C,{rate:2,delta:3,min:4,max:5,target:6})}}function B(r){let e,t,i;return{c(){e=d("button"),e.textContent="Click here!",_(e,"class","svelte-1jxt3f1")},m(s,n){y(s,e,n),t||(i=M(e,"click",G(r[3])),t=!0)},d(s){s&&p(e),t=!1,i()}}}function w(r){let e,t,i,s,n,a,o,f,c=!r[0]&&B(r);return i=new W({props:{open:r[0]&&r[1]}}),n=new Z({props:{target:r[1]?1:0}}),n.$on("playing",r[2]),{c(){c&&c.c(),e=j(),t=d("main"),N(i.$$.fragment),s=j(),N(n.$$.fragment),_(t,"class","svelte-1jxt3f1"),g(t,"active",r[0])},m(l,m){c&&c.m(l,m),y(l,e,m),y(l,t,m),O(i,t,null),y(l,s,m),O(n,l,m),a=!0,o||(f=[M(t,"click",r[4]),M(t,"mouseenter",r[5]),M(t,"mouseleave",r[6])],o=!0)},p(l,[m]){l[0]?c&&(c.d(1),c=null):c||(c=B(l),c.c(),c.m(e.parentNode,e));const u={};m&3&&(u.open=l[0]&&l[1]),i.$set(u),m&1&&g(t,"active",l[0]);const q={};m&2&&(q.target=l[1]?1:0),n.$set(q)},i(l){a||(P(i.$$.fragment,l),P(n.$$.fragment,l),a=!0)},o(l){E(i.$$.fragment,l),E(n.$$.fragment,l),a=!1},d(l){c&&c.d(l),l&&p(e),l&&p(t),S(i),l&&p(s),S(n,l),o=!1,J(f)}}}function x(r,e,t){let i=!1,s=!1;function n(){t(0,i=!0)}function a(l){Q.call(this,r,l)}return[i,s,n,a,()=>t(1,s=!s),()=>t(1,s=!0),()=>t(1,s=!1)]}class $ extends L{constructor(e){super();T(this,e,x,w,C,{})}}new $({target:document.getElementById("app")});
