function A(){}function U(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function O(){return Object.create(null)}function h(t){t.forEach(C)}function L(t){return typeof t=="function"}function V(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function W(t,n){return m||(m=document.createElement("a")),m.href=n,t===m.href}function N(t){return Object.keys(t).length===0}function X(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Y(t,n){t.appendChild(n)}function Z(t,n,e){t.insertBefore(n,e||null)}function z(t){t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function nt(){return M(" ")}function et(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function P(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ot(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)n[o]==null?t.removeAttribute(o):o==="style"?t.style.cssText=n[o]:o==="__value"?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:P(t,o,n[o])}function T(t){return Array.from(t.childNodes)}function rt(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}let l;function d(t){l=t}function y(){if(!l)throw new Error("Function called outside component initialization");return l}function st(t){y().$$.on_mount.push(t)}function ct(t){y().$$.on_destroy.push(t)}function it(){const t=y();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const c=B(n,e);o.slice().forEach(u=>{u.call(t,c)})}}}const _=[],S=[],p=[],q=[],F=Promise.resolve();let x=!1;function G(){x||(x=!0,F.then(D))}function v(t){p.push(t)}const k=new Set;let g=0;function D(){const t=l;do{for(;g<_.length;){const n=_[g];g++,d(n),H(n.$$)}for(d(null),_.length=0,g=0;S.length;)S.pop()();for(let n=0;n<p.length;n+=1){const e=p[n];k.has(e)||(k.add(e),e())}p.length=0}while(_.length);for(;q.length;)q.pop()();x=!1,k.clear(),d(t)}function H(t){if(t.fragment!==null){t.update(),h(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const $=new Set;let I;function J(t,n){t&&t.i&&($.delete(t),t.i(n))}function ut(t,n,e,o){if(t&&t.o){if($.has(t))return;$.add(t),I.c.push(()=>{$.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function ft(t,n){const e={},o={},c={$$scope:1};let u=t.length;for(;u--;){const i=t[u],f=n[u];if(f){for(const r in i)r in f||(o[r]=1);for(const r in f)c[r]||(e[r]=f[r],c[r]=1);t[u]=f}else for(const r in i)c[r]=1}for(const i in o)i in e||(e[i]=void 0);return e}function at(t){t&&t.c()}function K(t,n,e,o){const{fragment:c,on_mount:u,on_destroy:i,after_update:f}=t.$$;c&&c.m(n,e),o||v(()=>{const r=u.map(C).filter(L);i?i.push(...r):h(r),t.$$.on_mount=[]}),f.forEach(v)}function Q(t,n){const e=t.$$;e.fragment!==null&&(h(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){t.$$.dirty[0]===-1&&(_.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(t,n,e,o,c,u,i,f=[-1]){const r=l;d(t);const s=t.$$={fragment:null,ctx:null,props:u,update:A,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:O(),dirty:f,skip_bound:!1,root:n.target||r.$$.root};i&&i(s.root);let E=!1;if(s.ctx=e?e(t,n.props||{},(a,b,...w)=>{const j=w.length?w[0]:b;return s.ctx&&c(s.ctx[a],s.ctx[a]=j)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](j),E&&R(t,a)),b}):[],s.update(),E=!0,h(s.before_update),s.fragment=o?o(s.ctx):!1,n.target){if(n.hydrate){const a=T(n.target);s.fragment&&s.fragment.l(a),a.forEach(z)}else s.fragment&&s.fragment.c();n.intro&&J(t.$$.fragment),K(t,n.target,n.anchor,n.customElement),D()}d(r)}class dt{$destroy(){Q(this,1),this.$destroy=A}$on(n,e){const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const c=o.indexOf(e);c!==-1&&o.splice(c,1)}}$set(n){this.$$set&&!N(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{dt as S,U as a,nt as b,P as c,ot as d,tt as e,Z as f,Y as g,ft as h,lt as i,z as j,X as k,et as l,W as m,A as n,it as o,st as p,ct as q,S as r,V as s,rt as t,at as u,K as v,J as w,ut as x,Q as y,h as z};
