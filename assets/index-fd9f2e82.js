(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Hu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?a_(r):Hu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(He(t))return t;if(Ce(t))return t}}const s_=/;(?![^(]*\))/g,i_=/:([^]+)/,o_=/\/\*.*?\*\//gs;function a_(t){const e={};return t.replace(o_,"").split(s_).forEach(n=>{if(n){const r=n.split(i_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ku(t){let e="";if(He(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Ku(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const c_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l_=qu(c_);function Hp(t){return!!t||t===""}const Zr=t=>He(t)?t:t==null?"":Q(t)||Ce(t)&&(t.toString===Yp||!ee(t.toString))?JSON.stringify(t,Kp,2):String(t),Kp=(t,e)=>e&&e.__v_isRef?Kp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Wp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!Q(e)&&!Xp(e)?String(e):e,we={},ss=[],zt=()=>{},u_=()=>!1,h_=/^on[^a-z]/,Qa=t=>h_.test(t),Wu=t=>t.startsWith("onUpdate:"),bt=Object.assign,Gu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f_=Object.prototype.hasOwnProperty,ce=(t,e)=>f_.call(t,e),Q=Array.isArray,is=t=>Ja(t)==="[object Map]",Wp=t=>Ja(t)==="[object Set]",ee=t=>typeof t=="function",He=t=>typeof t=="string",Yu=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Gp=t=>Ce(t)&&ee(t.then)&&ee(t.catch),Yp=Object.prototype.toString,Ja=t=>Yp.call(t),d_=t=>Ja(t).slice(8,-1),Xp=t=>Ja(t)==="[object Object]",Xu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ea=qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Za=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},m_=/-(\w)/g,hn=Za(t=>t.replace(m_,(e,n)=>n?n.toUpperCase():"")),p_=/\B([A-Z])/g,Fr=Za(t=>t.replace(p_,"-$1").toLowerCase()),ec=Za(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=Za(t=>t?`on${ec(t)}`:""),_i=(t,e)=>!Object.is(t,e),ta=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ya=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ll=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wf;const g_=()=>Wf||(Wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ft;class y_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function v_(t,e=Ft){e&&e.active&&e.effects.push(t)}function b_(){return Ft}const Qu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qp=t=>(t.w&Xn)>0,Jp=t=>(t.n&Xn)>0,w_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xn},__=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Qp(s)&&!Jp(s)?s.delete(t):e[n++]=s,s.w&=~Xn,s.n&=~Xn}e.length=n}},va=new WeakMap;let Js=0,Xn=1;const Ul=30;let $t;const Er=Symbol(""),Fl=Symbol("");class Ju{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,v_(this,r)}run(){if(!this.active)return this.fn();let e=$t,n=Hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Hn=!0,Xn=1<<++Js,Js<=Ul?w_(this):Gf(this),this.fn()}finally{Js<=Ul&&__(this),Xn=1<<--Js,$t=this.parent,Hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(Gf(this),this.onStop&&this.onStop(),this.active=!1)}}function Gf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Hn=!0;const Zp=[];function Os(){Zp.push(Hn),Hn=!1}function Ns(){const t=Zp.pop();Hn=t===void 0?!0:t}function At(t,e,n){if(Hn&&$t){let r=va.get(t);r||va.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qu()),eg(s)}}function eg(t,e){let n=!1;Js<=Ul?Jp(t)||(t.n|=Xn,n=!Qp(t)):n=!t.has($t),n&&(t.add($t),$t.deps.push(t))}function _n(t,e,n,r,s,i){const o=va.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Xu(n)&&a.push(o.get("length")):(a.push(o.get(Er)),is(t)&&a.push(o.get(Fl)));break;case"delete":Q(t)||(a.push(o.get(Er)),is(t)&&a.push(o.get(Fl)));break;case"set":is(t)&&a.push(o.get(Er));break}if(a.length===1)a[0]&&$l(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$l(Qu(c))}}function $l(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&Yf(r);for(const r of n)r.computed||Yf(r)}function Yf(t,e){(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function E_(t,e){var n;return(n=va.get(t))===null||n===void 0?void 0:n.get(e)}const T_=qu("__proto__,__v_isRef,__isVue"),tg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yu)),I_=Zu(),k_=Zu(!1,!0),S_=Zu(!0),Xf=A_();function A_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)At(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Os();const r=le(this)[e].apply(this,n);return Ns(),r}}),t}function C_(t){const e=le(this);return At(e,"has",t),e.hasOwnProperty(t)}function Zu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?q_:og:e?ig:sg).get(r))return r;const o=Q(r);if(!t){if(o&&ce(Xf,s))return Reflect.get(Xf,s,i);if(s==="hasOwnProperty")return C_}const a=Reflect.get(r,s,i);return(Yu(s)?tg.has(s):T_(s))||(t||At(r,"get",s),e)?a:Ne(a)?o&&Xu(s)?a:a.value:Ce(a)?t?ag(a):Gi(a):a}}const x_=ng(),R_=ng(!0);function ng(t=!1){return function(n,r,s,i){let o=n[r];if(ps(o)&&Ne(o)&&!Ne(s))return!1;if(!t&&(!ba(s)&&!ps(s)&&(o=le(o),s=le(s)),!Q(n)&&Ne(o)&&!Ne(s)))return o.value=s,!0;const a=Q(n)&&Xu(r)?Number(r)<n.length:ce(n,r),c=Reflect.set(n,r,s,i);return n===le(i)&&(a?_i(s,o)&&_n(n,"set",r,s):_n(n,"add",r,s)),c}}function O_(t,e){const n=ce(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&_n(t,"delete",e,void 0),r}function N_(t,e){const n=Reflect.has(t,e);return(!Yu(e)||!tg.has(e))&&At(t,"has",e),n}function P_(t){return At(t,"iterate",Q(t)?"length":Er),Reflect.ownKeys(t)}const rg={get:I_,set:x_,deleteProperty:O_,has:N_,ownKeys:P_},D_={get:S_,set(t,e){return!0},deleteProperty(t,e){return!0}},M_=bt({},rg,{get:k_,set:R_}),eh=t=>t,tc=t=>Reflect.getPrototypeOf(t);function Co(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(e!==i&&At(s,"get",e),At(s,"get",i));const{has:o}=tc(s),a=r?eh:n?rh:Ei;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xo(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(t!==s&&At(r,"has",t),At(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ro(t,e=!1){return t=t.__v_raw,!e&&At(le(t),"iterate",Er),Reflect.get(t,"size",t)}function Qf(t){t=le(t);const e=le(this);return tc(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Jf(t,e){e=le(e);const n=le(this),{has:r,get:s}=tc(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?_i(e,o)&&_n(n,"set",t,e):_n(n,"add",t,e),this}function Zf(t){const e=le(this),{has:n,get:r}=tc(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_n(e,"delete",t,void 0),i}function ed(){const t=le(this),e=t.size!==0,n=t.clear();return e&&_n(t,"clear",void 0,void 0),n}function Oo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?eh:t?rh:Ei;return!t&&At(a,"iterate",Er),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function No(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=is(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?eh:e?rh:Ei;return!e&&At(i,"iterate",c?Fl:Er),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(t){return function(...e){return t==="delete"?!1:this}}function L_(){const t={get(i){return Co(this,i)},get size(){return Ro(this)},has:xo,add:Qf,set:Jf,delete:Zf,clear:ed,forEach:Oo(!1,!1)},e={get(i){return Co(this,i,!1,!0)},get size(){return Ro(this)},has:xo,add:Qf,set:Jf,delete:Zf,clear:ed,forEach:Oo(!1,!0)},n={get(i){return Co(this,i,!0)},get size(){return Ro(this,!0)},has(i){return xo.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Oo(!0,!1)},r={get(i){return Co(this,i,!0,!0)},get size(){return Ro(this,!0)},has(i){return xo.call(this,i,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=No(i,!1,!1),n[i]=No(i,!0,!1),e[i]=No(i,!1,!0),r[i]=No(i,!0,!0)}),[t,n,e,r]}const[U_,F_,$_,V_]=L_();function th(t,e){const n=e?t?V_:$_:t?F_:U_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const j_={get:th(!1,!1)},B_={get:th(!1,!0)},z_={get:th(!0,!1)},sg=new WeakMap,ig=new WeakMap,og=new WeakMap,q_=new WeakMap;function H_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K_(t){return t.__v_skip||!Object.isExtensible(t)?0:H_(d_(t))}function Gi(t){return ps(t)?t:nh(t,!1,rg,j_,sg)}function W_(t){return nh(t,!1,M_,B_,ig)}function ag(t){return nh(t,!0,D_,z_,og)}function nh(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=K_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function os(t){return ps(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function ps(t){return!!(t&&t.__v_isReadonly)}function ba(t){return!!(t&&t.__v_isShallow)}function cg(t){return os(t)||ps(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function lg(t){return ya(t,"__v_skip",!0),t}const Ei=t=>Ce(t)?Gi(t):t,rh=t=>Ce(t)?ag(t):t;function ug(t){Hn&&$t&&(t=le(t),eg(t.dep||(t.dep=Qu())))}function hg(t,e){t=le(t);const n=t.dep;n&&$l(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return fg(t,!1)}function G_(t){return fg(t,!0)}function fg(t,e){return Ne(t)?t:new Y_(t,e)}class Y_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Ei(e)}get value(){return ug(this),this._value}set value(e){const n=this.__v_isShallow||ba(e)||ps(e);e=n?e:le(e),_i(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ei(e),hg(this))}}function ge(t){return Ne(t)?t.value:t}const X_={get:(t,e,n)=>ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dg(t){return os(t)?t:new Proxy(t,X_)}function Q_(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=Z_(t,n);return e}class J_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return E_(le(this._object),this._key)}}function Z_(t,e,n){const r=t[e];return Ne(r)?r:new J_(t,e,n)}var mg;class e0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[mg]=!1,this._dirty=!0,this.effect=new Ju(e,()=>{this._dirty||(this._dirty=!0,hg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return ug(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}mg="__v_isReadonly";function t0(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=zt):(r=t.get,s=t.set),new e0(r,s,i||!s,n)}function Kn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){nc(i,e,n)}return s}function qt(t,e,n,r){if(ee(t)){const i=Kn(t,e,n,r);return i&&Gp(i)&&i.catch(o=>{nc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(qt(t[i],e,n,r));return s}function nc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Kn(c,null,10,[t,o,a]);return}}n0(t,n,s,r)}function n0(t,e,n,r=!0){console.error(t)}let Ti=!1,Vl=!1;const it=[];let nn=0;const as=[];let pn=null,dr=0;const pg=Promise.resolve();let sh=null;function gg(t){const e=sh||pg;return t?e.then(this?t.bind(this):t):e}function r0(t){let e=nn+1,n=it.length;for(;e<n;){const r=e+n>>>1;Ii(it[r])<t?e=r+1:n=r}return e}function ih(t){(!it.length||!it.includes(t,Ti&&t.allowRecurse?nn+1:nn))&&(t.id==null?it.push(t):it.splice(r0(t.id),0,t),yg())}function yg(){!Ti&&!Vl&&(Vl=!0,sh=pg.then(bg))}function s0(t){const e=it.indexOf(t);e>nn&&it.splice(e,1)}function i0(t){Q(t)?as.push(...t):(!pn||!pn.includes(t,t.allowRecurse?dr+1:dr))&&as.push(t),yg()}function td(t,e=Ti?nn+1:0){for(;e<it.length;e++){const n=it[e];n&&n.pre&&(it.splice(e,1),e--,n())}}function vg(t){if(as.length){const e=[...new Set(as)];if(as.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,r)=>Ii(n)-Ii(r)),dr=0;dr<pn.length;dr++)pn[dr]();pn=null,dr=0}}const Ii=t=>t.id==null?1/0:t.id,o0=(t,e)=>{const n=Ii(t)-Ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bg(t){Vl=!1,Ti=!0,it.sort(o0);const e=zt;try{for(nn=0;nn<it.length;nn++){const n=it[nn];n&&n.active!==!1&&Kn(n,null,14)}}finally{nn=0,it.length=0,vg(),Ti=!1,sh=null,(it.length||as.length)&&bg()}}function a0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||we;f&&(s=n.map(d=>He(d)?d.trim():d)),h&&(s=n.map(Ll))}let a,c=r[a=el(e)]||r[a=el(hn(e))];!c&&i&&(c=r[a=el(Fr(e))]),c&&qt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qt(l,t,6,s)}}function wg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=wg(l,e,!0);u&&(a=!0,bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):bt(o,i),Ce(t)&&r.set(t,o),o)}function rc(t,e){return!t||!Qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Fr(e))||ce(t,e))}let Pt=null,_g=null;function wa(t){const e=Pt;return Pt=t,_g=t&&t.type.__scopeId||null,e}function c0(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ud(-1);const i=wa(e);let o;try{o=t(...s)}finally{wa(i),r._d&&ud(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:y}=t;let _,v;const w=wa(t);try{if(n.shapeFlag&4){const O=s||r;_=tn(u.call(O,O,h,i,d,f,g)),v=c}else{const O=e;_=tn(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),v=e.props?c:l0(c)}}catch(O){ci.length=0,nc(O,t,1),_=Je(Cr)}let T=_;if(v&&y!==!1){const O=Object.keys(v),{shapeFlag:K}=T;O.length&&K&7&&(o&&O.some(Wu)&&(v=u0(v,o)),T=gs(T,v))}return n.dirs&&(T=gs(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),_=T,wa(w),_}const l0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qa(n))&&((e||(e={}))[n]=t[n]);return e},u0=(t,e)=>{const n={};for(const r in t)(!Wu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function h0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!rc(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nd(r,o,l):!0:!!o;return!1}function nd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rc(n,i))return!0}return!1}function f0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const d0=t=>t.__isSuspense;function m0(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):i0(t)}function na(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=je||Pt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r.proxy):e}}const Po={};function oi(t,e,n){return Eg(t,e,n)}function Eg(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){const a=b_()===(je==null?void 0:je.scope)?je:null;let c,l=!1,u=!1;if(Ne(t)?(c=()=>t.value,l=ba(t)):os(t)?(c=()=>t,r=!0):Q(t)?(u=!0,l=t.some(T=>os(T)||ba(T)),c=()=>t.map(T=>{if(Ne(T))return T.value;if(os(T))return pr(T);if(ee(T))return Kn(T,a,2)})):ee(t)?e?c=()=>Kn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),qt(t,a,3,[f])}:c=zt,e&&r){const T=c;c=()=>pr(T())}let h,f=T=>{h=v.onStop=()=>{Kn(T,a,4)}},d;if(Si)if(f=zt,e?n&&qt(e,a,3,[c(),u?[]:void 0,f]):c(),s==="sync"){const T=lE();d=T.__watcherHandles||(T.__watcherHandles=[])}else return zt;let g=u?new Array(t.length).fill(Po):Po;const y=()=>{if(v.active)if(e){const T=v.run();(r||l||(u?T.some((O,K)=>_i(O,g[K])):_i(T,g)))&&(h&&h(),qt(e,a,3,[T,g===Po?void 0:u&&g[0]===Po?[]:g,f]),g=T)}else v.run()};y.allowRecurse=!!e;let _;s==="sync"?_=y:s==="post"?_=()=>Tt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),_=()=>ih(y));const v=new Ju(c,_);e?n?y():g=v.run():s==="post"?Tt(v.run.bind(v),a&&a.suspense):v.run();const w=()=>{v.stop(),a&&a.scope&&Gu(a.scope.effects,v)};return d&&d.push(w),w}function p0(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Tg(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=je;ys(this);const a=Eg(s,i.bind(r),n);return o?ys(o):Tr(),a}function Tg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function pr(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))pr(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)pr(t[n],e);else if(Wp(t)||is(t))t.forEach(n=>{pr(n,e)});else if(Xp(t))for(const n in t)pr(t[n],e);return t}function Yt(t){return ee(t)?{setup:t,name:t.name}:t}const ra=t=>!!t.type.__asyncLoader,Ig=t=>t.type.__isKeepAlive;function g0(t,e){kg(t,"a",e)}function y0(t,e){kg(t,"da",e)}function kg(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ig(s.parent.vnode)&&v0(r,e,n,s),s=s.parent}}function v0(t,e,n,r){const s=sc(e,t,r,!0);oh(()=>{Gu(r[e],s)},n)}function sc(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Os(),ys(n);const a=qt(e,n,t,o);return Tr(),Ns(),a});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=je)=>(!Si||t==="sp")&&sc(t,(...r)=>e(...r),n),b0=On("bm"),w0=On("m"),_0=On("bu"),Sg=On("u"),E0=On("bum"),oh=On("um"),T0=On("sp"),I0=On("rtg"),k0=On("rtc");function S0(t,e=je){sc("ec",t,e)}function cs(t,e){const n=Pt;if(n===null)return t;const r=ac(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&pr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Os(),qt(c,n,8,[t.el,a,t,e]),Ns())}}const Ag="components";function Cg(t,e){return C0(Ag,t,!0,e)||t}const A0=Symbol();function C0(t,e,n=!0,r=!1){const s=Pt||je;if(s){const i=s.type;if(t===Ag){const a=oE(i,!1);if(a&&(a===e||a===hn(e)||a===ec(hn(e))))return i}const o=rd(s[t]||i[t],e)||rd(s.appContext[t],e);return!o&&r?i:o}}function rd(t,e){return t&&(t[e]||t[hn(e)]||t[ec(hn(e))])}function x0(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const jl=t=>t?$g(t)?ac(t)||t.proxy:jl(t.parent):null,ai=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jl(t.parent),$root:t=>jl(t.root),$emit:t=>t.emit,$options:t=>ah(t),$forceUpdate:t=>t.f||(t.f=()=>ih(t.update)),$nextTick:t=>t.n||(t.n=gg.bind(t.proxy)),$watch:t=>p0.bind(t)}),nl=(t,e)=>t!==we&&!t.__isScriptSetup&&ce(t,e),R0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nl(r,e))return o[e]=1,r[e];if(s!==we&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=ai[e];let h,f;if(u)return e==="$attrs"&&At(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nl(s,e)?(s[e]=n,!0):r!==we&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ce(t,o)||nl(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(ai,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Bl=!0;function O0(t){const e=ah(t),n=t.proxy,r=t.ctx;Bl=!1,e.beforeCreate&&sd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:y,deactivated:_,beforeDestroy:v,beforeUnmount:w,destroyed:T,unmounted:O,render:K,renderTracked:te,renderTriggered:ue,errorCaptured:ke,serverPrefetch:xe,expose:wt,inheritAttrs:Pn,components:Qt,directives:zr,filters:ar}=e;if(l&&N0(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ye in o){const me=o[ye];ee(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Ce(ye)&&(t.data=Gi(ye))}if(Bl=!0,i)for(const ye in i){const me=i[ye],Mt=ee(me)?me.bind(n,n):ee(me.get)?me.get.bind(n,n):zt,cr=!ee(me)&&ee(me.set)?me.set.bind(n):zt,Lt=Oe({get:Mt,set:cr});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:_t=>Lt.value=_t})}if(a)for(const ye in a)xg(a[ye],r,n,ye);if(c){const ye=ee(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(me=>{na(me,ye[me])})}u&&sd(u,t,"c");function Ue(ye,me){Q(me)?me.forEach(Mt=>ye(Mt.bind(n))):me&&ye(me.bind(n))}if(Ue(b0,h),Ue(w0,f),Ue(_0,d),Ue(Sg,g),Ue(g0,y),Ue(y0,_),Ue(S0,ke),Ue(k0,te),Ue(I0,ue),Ue(E0,w),Ue(oh,O),Ue(T0,xe),Q(wt))if(wt.length){const ye=t.exposed||(t.exposed={});wt.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Mt=>n[me]=Mt})})}else t.exposed||(t.exposed={});K&&t.render===zt&&(t.render=K),Pn!=null&&(t.inheritAttrs=Pn),Qt&&(t.components=Qt),zr&&(t.directives=zr)}function N0(t,e,n=zt,r=!1){Q(t)&&(t=zl(t));for(const s in t){const i=t[s];let o;Ce(i)?"default"in i?o=Ht(i.from||s,i.default,!0):o=Ht(i.from||s):o=Ht(i),Ne(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function sd(t,e,n){qt(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xg(t,e,n,r){const s=r.includes(".")?Tg(n,r):()=>n[r];if(He(t)){const i=e[t];ee(i)&&oi(s,i)}else if(ee(t))oi(s,t.bind(n));else if(Ce(t))if(Q(t))t.forEach(i=>xg(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&oi(s,i,t)}}function ah(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>_a(c,l,o,!0)),_a(c,e,o)),Ce(e)&&i.set(e,c),c}function _a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_a(t,i,n,!0),s&&s.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=P0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const P0={data:id,props:hr,emits:hr,methods:hr,computed:hr,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:hr,directives:hr,watch:M0,provide:id,inject:D0};function id(t,e){return e?t?function(){return bt(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function D0(t,e){return hr(zl(t),zl(e))}function zl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function hr(t,e){return t?bt(bt(Object.create(null),t),e):e}function M0(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function L0(t,e,n,r=!1){const s={},i={};ya(i,oc,1),t.propsDefaults=Object.create(null),Rg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:W_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function U0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(rc(t.emitsOptions,f))continue;const d=e[f];if(c)if(ce(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const g=hn(f);s[g]=ql(c,a,g,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Rg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=Fr(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ql(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs")}function Rg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ea(c))continue;const l=e[c];let u;s&&ce(s,u=hn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:rc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ql(s,c,h,l[h],t,!ce(l,h))}}return o}function ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ys(s),r=l[n]=c.call(null,e),Tr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}function Og(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,d]=Og(h,e,!0);bt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&r.set(t,ss),ss;if(Q(i))for(let u=0;u<i.length;u++){const h=hn(i[u]);od(h)&&(o[h]=we)}else if(i)for(const u in i){const h=hn(u);if(od(h)){const f=i[u],d=o[h]=Q(f)||ee(f)?{type:f}:Object.assign({},f);if(d){const g=ld(Boolean,d.type),y=ld(String,d.type);d[0]=g>-1,d[1]=y<0||g<y,(g>-1||ce(d,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&r.set(t,l),l}function od(t){return t[0]!=="$"}function ad(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cd(t,e){return ad(t)===ad(e)}function ld(t,e){return Q(e)?e.findIndex(n=>cd(n,t)):ee(e)&&cd(e,t)?0:-1}const Ng=t=>t[0]==="_"||t==="$stable",ch=t=>Q(t)?t.map(tn):[tn(t)],F0=(t,e,n)=>{if(e._n)return e;const r=c0((...s)=>ch(e(...s)),n);return r._c=!1,r},Pg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ng(s))continue;const i=t[s];if(ee(i))e[s]=F0(s,i,r);else if(i!=null){const o=ch(i);e[s]=()=>o}}},Dg=(t,e)=>{const n=ch(e);t.slots.default=()=>n},$0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),ya(e,"_",n)):Pg(e,t.slots={})}else t.slots={},e&&Dg(t,e);ya(t.slots,oc,1)},V0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(bt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Pg(e,s)),o=e}else e&&(Dg(t,e),o={default:1});if(i)for(const a in s)!Ng(a)&&!(a in o)&&delete s[a]};function Mg(){return{app:null,config:{isNativeTag:u_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j0=0;function B0(t,e){return function(r,s=null){ee(r)||(r=Object.assign({},r)),s!=null&&!Ce(s)&&(s=null);const i=Mg(),o=new Set;let a=!1;const c=i.app={_uid:j0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Je(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ac(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Hl(t,e,n,r,s=!1){if(Q(t)){t.forEach((f,d)=>Hl(f,e&&(Q(e)?e[d]:e),n,r,s));return}if(ra(r)&&!s)return;const i=r.shapeFlag&4?ac(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),ee(c))Kn(c,a,12,[o,u]);else{const f=He(c),d=Ne(c);if(f||d){const g=()=>{if(t.f){const y=f?ce(h,c)?h[c]:u[c]:c.value;s?Q(y)&&Gu(y,i):Q(y)?y.includes(i)||y.push(i):f?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ce(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Tt(g,n)):g()}}}const Tt=m0;function z0(t){return q0(t)}function q0(t,e){const n=g_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=zt,insertStaticContent:g}=t,y=(m,p,b,E=null,S=null,R=null,D=!1,x=null,N=!!p.dynamicChildren)=>{if(m===p)return;m&&!Ks(m,p)&&(E=P(m),_t(m,S,R,!0),m=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:A,ref:q,shapeFlag:F}=p;switch(A){case ic:_(m,p,b,E);break;case Cr:v(m,p,b,E);break;case rl:m==null&&w(p,b,E,D);break;case en:Qt(m,p,b,E,S,R,D,x,N);break;default:F&1?K(m,p,b,E,S,R,D,x,N):F&6?zr(m,p,b,E,S,R,D,x,N):(F&64||F&128)&&A.process(m,p,b,E,S,R,D,x,N,ae)}q!=null&&S&&Hl(q,m&&m.ref,R,p||m,!p)},_=(m,p,b,E)=>{if(m==null)r(p.el=a(p.children),b,E);else{const S=p.el=m.el;p.children!==m.children&&l(S,p.children)}},v=(m,p,b,E)=>{m==null?r(p.el=c(p.children||""),b,E):p.el=m.el},w=(m,p,b,E)=>{[m.el,m.anchor]=g(m.children,p,b,E,m.el,m.anchor)},T=({el:m,anchor:p},b,E)=>{let S;for(;m&&m!==p;)S=f(m),r(m,b,E),m=S;r(p,b,E)},O=({el:m,anchor:p})=>{let b;for(;m&&m!==p;)b=f(m),s(m),m=b;s(p)},K=(m,p,b,E,S,R,D,x,N)=>{D=D||p.type==="svg",m==null?te(p,b,E,S,R,D,x,N):xe(m,p,S,R,D,x,N)},te=(m,p,b,E,S,R,D,x)=>{let N,A;const{type:q,props:F,shapeFlag:H,transition:X,dirs:re}=m;if(N=m.el=o(m.type,R,F&&F.is,F),H&8?u(N,m.children):H&16&&ke(m.children,N,null,E,S,R&&q!=="foreignObject",D,x),re&&lr(m,null,E,"created"),ue(N,m,m.scopeId,D,E),F){for(const pe in F)pe!=="value"&&!ea(pe)&&i(N,pe,null,F[pe],R,m.children,E,S,M);"value"in F&&i(N,"value",null,F.value),(A=F.onVnodeBeforeMount)&&Zt(A,E,m)}re&&lr(m,null,E,"beforeMount");const ve=(!S||S&&!S.pendingBranch)&&X&&!X.persisted;ve&&X.beforeEnter(N),r(N,p,b),((A=F&&F.onVnodeMounted)||ve||re)&&Tt(()=>{A&&Zt(A,E,m),ve&&X.enter(N),re&&lr(m,null,E,"mounted")},S)},ue=(m,p,b,E,S)=>{if(b&&d(m,b),E)for(let R=0;R<E.length;R++)d(m,E[R]);if(S){let R=S.subTree;if(p===R){const D=S.vnode;ue(m,D,D.scopeId,D.slotScopeIds,S.parent)}}},ke=(m,p,b,E,S,R,D,x,N=0)=>{for(let A=N;A<m.length;A++){const q=m[A]=x?Fn(m[A]):tn(m[A]);y(null,q,p,b,E,S,R,D,x)}},xe=(m,p,b,E,S,R,D)=>{const x=p.el=m.el;let{patchFlag:N,dynamicChildren:A,dirs:q}=p;N|=m.patchFlag&16;const F=m.props||we,H=p.props||we;let X;b&&ur(b,!1),(X=H.onVnodeBeforeUpdate)&&Zt(X,b,p,m),q&&lr(p,m,b,"beforeUpdate"),b&&ur(b,!0);const re=S&&p.type!=="foreignObject";if(A?wt(m.dynamicChildren,A,x,b,E,re,R):D||me(m,p,x,null,b,E,re,R,!1),N>0){if(N&16)Pn(x,p,F,H,b,E,S);else if(N&2&&F.class!==H.class&&i(x,"class",null,H.class,S),N&4&&i(x,"style",F.style,H.style,S),N&8){const ve=p.dynamicProps;for(let pe=0;pe<ve.length;pe++){const Fe=ve[pe],Ut=F[Fe],Hr=H[Fe];(Hr!==Ut||Fe==="value")&&i(x,Fe,Ut,Hr,S,m.children,b,E,M)}}N&1&&m.children!==p.children&&u(x,p.children)}else!D&&A==null&&Pn(x,p,F,H,b,E,S);((X=H.onVnodeUpdated)||q)&&Tt(()=>{X&&Zt(X,b,p,m),q&&lr(p,m,b,"updated")},E)},wt=(m,p,b,E,S,R,D)=>{for(let x=0;x<p.length;x++){const N=m[x],A=p[x],q=N.el&&(N.type===en||!Ks(N,A)||N.shapeFlag&70)?h(N.el):b;y(N,A,q,null,E,S,R,D,!0)}},Pn=(m,p,b,E,S,R,D)=>{if(b!==E){if(b!==we)for(const x in b)!ea(x)&&!(x in E)&&i(m,x,b[x],null,D,p.children,S,R,M);for(const x in E){if(ea(x))continue;const N=E[x],A=b[x];N!==A&&x!=="value"&&i(m,x,A,N,D,p.children,S,R,M)}"value"in E&&i(m,"value",b.value,E.value)}},Qt=(m,p,b,E,S,R,D,x,N)=>{const A=p.el=m?m.el:a(""),q=p.anchor=m?m.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:X}=p;X&&(x=x?x.concat(X):X),m==null?(r(A,b,E),r(q,b,E),ke(p.children,b,q,S,R,D,x,N)):F>0&&F&64&&H&&m.dynamicChildren?(wt(m.dynamicChildren,H,b,S,R,D,x),(p.key!=null||S&&p===S.subTree)&&Lg(m,p,!0)):me(m,p,b,q,S,R,D,x,N)},zr=(m,p,b,E,S,R,D,x,N)=>{p.slotScopeIds=x,m==null?p.shapeFlag&512?S.ctx.activate(p,b,E,D,N):ar(p,b,E,S,R,D,N):qs(m,p,N)},ar=(m,p,b,E,S,R,D)=>{const x=m.component=tE(m,E,S);if(Ig(m)&&(x.ctx.renderer=ae),nE(x),x.asyncDep){if(S&&S.registerDep(x,Ue),!m.el){const N=x.subTree=Je(Cr);v(null,N,p,b)}return}Ue(x,m,p,b,S,R,D)},qs=(m,p,b)=>{const E=p.component=m.component;if(h0(m,p,b))if(E.asyncDep&&!E.asyncResolved){ye(E,p,b);return}else E.next=p,s0(E.update),E.update();else p.el=m.el,E.vnode=p},Ue=(m,p,b,E,S,R,D)=>{const x=()=>{if(m.isMounted){let{next:q,bu:F,u:H,parent:X,vnode:re}=m,ve=q,pe;ur(m,!1),q?(q.el=re.el,ye(m,q,D)):q=re,F&&ta(F),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&Zt(pe,X,q,re),ur(m,!0);const Fe=tl(m),Ut=m.subTree;m.subTree=Fe,y(Ut,Fe,h(Ut.el),P(Ut),m,S,R),q.el=Fe.el,ve===null&&f0(m,Fe.el),H&&Tt(H,S),(pe=q.props&&q.props.onVnodeUpdated)&&Tt(()=>Zt(pe,X,q,re),S)}else{let q;const{el:F,props:H}=p,{bm:X,m:re,parent:ve}=m,pe=ra(p);if(ur(m,!1),X&&ta(X),!pe&&(q=H&&H.onVnodeBeforeMount)&&Zt(q,ve,p),ur(m,!0),F&&ne){const Fe=()=>{m.subTree=tl(m),ne(F,m.subTree,m,S,null)};pe?p.type.__asyncLoader().then(()=>!m.isUnmounted&&Fe()):Fe()}else{const Fe=m.subTree=tl(m);y(null,Fe,b,E,m,S,R),p.el=Fe.el}if(re&&Tt(re,S),!pe&&(q=H&&H.onVnodeMounted)){const Fe=p;Tt(()=>Zt(q,ve,Fe),S)}(p.shapeFlag&256||ve&&ra(ve.vnode)&&ve.vnode.shapeFlag&256)&&m.a&&Tt(m.a,S),m.isMounted=!0,p=b=E=null}},N=m.effect=new Ju(x,()=>ih(A),m.scope),A=m.update=()=>N.run();A.id=m.uid,ur(m,!0),A()},ye=(m,p,b)=>{p.component=m;const E=m.vnode.props;m.vnode=p,m.next=null,U0(m,p.props,E,b),V0(m,p.children,b),Os(),td(),Ns()},me=(m,p,b,E,S,R,D,x,N=!1)=>{const A=m&&m.children,q=m?m.shapeFlag:0,F=p.children,{patchFlag:H,shapeFlag:X}=p;if(H>0){if(H&128){cr(A,F,b,E,S,R,D,x,N);return}else if(H&256){Mt(A,F,b,E,S,R,D,x,N);return}}X&8?(q&16&&M(A,S,R),F!==A&&u(b,F)):q&16?X&16?cr(A,F,b,E,S,R,D,x,N):M(A,S,R,!0):(q&8&&u(b,""),X&16&&ke(F,b,E,S,R,D,x,N))},Mt=(m,p,b,E,S,R,D,x,N)=>{m=m||ss,p=p||ss;const A=m.length,q=p.length,F=Math.min(A,q);let H;for(H=0;H<F;H++){const X=p[H]=N?Fn(p[H]):tn(p[H]);y(m[H],X,b,null,S,R,D,x,N)}A>q?M(m,S,R,!0,!1,F):ke(p,b,E,S,R,D,x,N,F)},cr=(m,p,b,E,S,R,D,x,N)=>{let A=0;const q=p.length;let F=m.length-1,H=q-1;for(;A<=F&&A<=H;){const X=m[A],re=p[A]=N?Fn(p[A]):tn(p[A]);if(Ks(X,re))y(X,re,b,null,S,R,D,x,N);else break;A++}for(;A<=F&&A<=H;){const X=m[F],re=p[H]=N?Fn(p[H]):tn(p[H]);if(Ks(X,re))y(X,re,b,null,S,R,D,x,N);else break;F--,H--}if(A>F){if(A<=H){const X=H+1,re=X<q?p[X].el:E;for(;A<=H;)y(null,p[A]=N?Fn(p[A]):tn(p[A]),b,re,S,R,D,x,N),A++}}else if(A>H)for(;A<=F;)_t(m[A],S,R,!0),A++;else{const X=A,re=A,ve=new Map;for(A=re;A<=H;A++){const Ct=p[A]=N?Fn(p[A]):tn(p[A]);Ct.key!=null&&ve.set(Ct.key,A)}let pe,Fe=0;const Ut=H-re+1;let Hr=!1,qf=0;const Hs=new Array(Ut);for(A=0;A<Ut;A++)Hs[A]=0;for(A=X;A<=F;A++){const Ct=m[A];if(Fe>=Ut){_t(Ct,S,R,!0);continue}let Jt;if(Ct.key!=null)Jt=ve.get(Ct.key);else for(pe=re;pe<=H;pe++)if(Hs[pe-re]===0&&Ks(Ct,p[pe])){Jt=pe;break}Jt===void 0?_t(Ct,S,R,!0):(Hs[Jt-re]=A+1,Jt>=qf?qf=Jt:Hr=!0,y(Ct,p[Jt],b,null,S,R,D,x,N),Fe++)}const Hf=Hr?H0(Hs):ss;for(pe=Hf.length-1,A=Ut-1;A>=0;A--){const Ct=re+A,Jt=p[Ct],Kf=Ct+1<q?p[Ct+1].el:E;Hs[A]===0?y(null,Jt,b,Kf,S,R,D,x,N):Hr&&(pe<0||A!==Hf[pe]?Lt(Jt,b,Kf,2):pe--)}}},Lt=(m,p,b,E,S=null)=>{const{el:R,type:D,transition:x,children:N,shapeFlag:A}=m;if(A&6){Lt(m.component.subTree,p,b,E);return}if(A&128){m.suspense.move(p,b,E);return}if(A&64){D.move(m,p,b,ae);return}if(D===en){r(R,p,b);for(let F=0;F<N.length;F++)Lt(N[F],p,b,E);r(m.anchor,p,b);return}if(D===rl){T(m,p,b);return}if(E!==2&&A&1&&x)if(E===0)x.beforeEnter(R),r(R,p,b),Tt(()=>x.enter(R),S);else{const{leave:F,delayLeave:H,afterLeave:X}=x,re=()=>r(R,p,b),ve=()=>{F(R,()=>{re(),X&&X()})};H?H(R,re,ve):ve()}else r(R,p,b)},_t=(m,p,b,E=!1,S=!1)=>{const{type:R,props:D,ref:x,children:N,dynamicChildren:A,shapeFlag:q,patchFlag:F,dirs:H}=m;if(x!=null&&Hl(x,null,b,m,!0),q&256){p.ctx.deactivate(m);return}const X=q&1&&H,re=!ra(m);let ve;if(re&&(ve=D&&D.onVnodeBeforeUnmount)&&Zt(ve,p,m),q&6)I(m.component,b,E);else{if(q&128){m.suspense.unmount(b,E);return}X&&lr(m,null,p,"beforeUnmount"),q&64?m.type.remove(m,p,b,S,ae,E):A&&(R!==en||F>0&&F&64)?M(A,p,b,!1,!0):(R===en&&F&384||!S&&q&16)&&M(N,p,b),E&&qr(m)}(re&&(ve=D&&D.onVnodeUnmounted)||X)&&Tt(()=>{ve&&Zt(ve,p,m),X&&lr(m,null,p,"unmounted")},b)},qr=m=>{const{type:p,el:b,anchor:E,transition:S}=m;if(p===en){Ao(b,E);return}if(p===rl){O(m);return}const R=()=>{s(b),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(m.shapeFlag&1&&S&&!S.persisted){const{leave:D,delayLeave:x}=S,N=()=>D(b,R);x?x(m.el,R,N):N()}else R()},Ao=(m,p)=>{let b;for(;m!==p;)b=f(m),s(m),m=b;s(p)},I=(m,p,b)=>{const{bum:E,scope:S,update:R,subTree:D,um:x}=m;E&&ta(E),S.stop(),R&&(R.active=!1,_t(D,m,p,b)),x&&Tt(x,p),Tt(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(m,p,b,E=!1,S=!1,R=0)=>{for(let D=R;D<m.length;D++)_t(m[D],p,b,E,S)},P=m=>m.shapeFlag&6?P(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),B=(m,p,b)=>{m==null?p._vnode&&_t(p._vnode,null,null,!0):y(p._vnode||null,m,p,null,null,null,b),td(),vg(),p._vnode=m},ae={p:y,um:_t,m:Lt,r:qr,mt:ar,mc:ke,pc:me,pbc:wt,n:P,o:t};let Re,ne;return e&&([Re,ne]=e(ae)),{render:B,hydrate:Re,createApp:B0(B,Re)}}function ur({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lg(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Fn(s[i]),a.el=o.el),n||Lg(o,a)),a.type===ic&&(a.el=o.el)}}function H0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const K0=t=>t.__isTeleport,en=Symbol(void 0),ic=Symbol(void 0),Cr=Symbol(void 0),rl=Symbol(void 0),ci=[];let jt=null;function ze(t=!1){ci.push(jt=t?null:[])}function W0(){ci.pop(),jt=ci[ci.length-1]||null}let ki=1;function ud(t){ki+=t}function Ug(t){return t.dynamicChildren=ki>0?jt||ss:null,W0(),ki>0&&jt&&jt.push(t),t}function at(t,e,n,r,s,i){return Ug(se(t,e,n,r,s,i,!0))}function lh(t,e,n,r,s){return Ug(Je(t,e,n,r,s,!0))}function Kl(t){return t?t.__v_isVNode===!0:!1}function Ks(t,e){return t.type===e.type&&t.key===e.key}const oc="__vInternal",Fg=({key:t})=>t??null,sa=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||Ne(t)||ee(t)?{i:Pt,r:t,k:e,f:!!n}:t:null;function se(t,e=null,n=null,r=0,s=null,i=t===en?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fg(e),ref:e&&sa(e),scopeId:_g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return a?(uh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),ki>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const Je=G0;function G0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===A0)&&(t=Cr),Kl(t)){const a=gs(t,e,!0);return n&&uh(a,n),ki>0&&!i&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag|=-2,a}if(aE(t)&&(t=t.__vccOpts),e){e=Y0(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Ku(a)),Ce(c)&&(cg(c)&&!Q(c)&&(c=bt({},c)),e.style=Hu(c))}const o=He(t)?1:d0(t)?128:K0(t)?64:Ce(t)?4:ee(t)?2:0;return se(t,e,n,r,s,o,i,!0)}function Y0(t){return t?cg(t)||oc in t?bt({},t):t:null}function gs(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?J0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fg(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(sa(e)):[s,sa(e)]:sa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==en?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function X0(t=" ",e=0){return Je(ic,null,t,e)}function Q0(t="",e=!1){return e?(ze(),lh(Cr,null,t)):Je(Cr,null,t)}function tn(t){return t==null||typeof t=="boolean"?Je(Cr):Q(t)?Je(en,null,t.slice()):typeof t=="object"?Fn(t):Je(ic,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function uh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(oc in e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[X0(e)]):n=8);t.children=e,t.shapeFlag|=n}function J0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ku([e.class,r.class]));else if(s==="style")e.style=Hu([e.style,r.style]);else if(Qa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){qt(t,e,7,[n,r])}const Z0=Mg();let eE=0;function tE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Z0,i={uid:eE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new y_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Og(r,s),emitsOptions:wg(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=a0.bind(null,i),t.ce&&t.ce(i),i}let je=null;const ys=t=>{je=t,t.scope.on()},Tr=()=>{je&&je.scope.off(),je=null};function $g(t){return t.vnode.shapeFlag&4}let Si=!1;function nE(t,e=!1){Si=e;const{props:n,children:r}=t.vnode,s=$g(t);L0(t,n,s,e),$0(t,r);const i=s?rE(t,e):void 0;return Si=!1,i}function rE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lg(new Proxy(t.ctx,R0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?iE(t):null;ys(t),Os();const i=Kn(r,t,0,[t.props,s]);if(Ns(),Tr(),Gp(i)){if(i.then(Tr,Tr),e)return i.then(o=>{hd(t,o,e)}).catch(o=>{nc(o,t,0)});t.asyncDep=i}else hd(t,i,e)}else Vg(t,e)}function hd(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=dg(e)),Vg(t,n)}let fd;function Vg(t,e,n){const r=t.type;if(!t.render){if(!e&&fd&&!r.render){const s=r.template||ah(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=bt(bt({isCustomElement:i,delimiters:a},o),c);r.render=fd(s,l)}}t.render=r.render||zt}ys(t),Os(),O0(t),Ns(),Tr()}function sE(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function iE(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=sE(t))},slots:t.slots,emit:t.emit,expose:e}}function ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dg(lg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}}))}function oE(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function aE(t){return ee(t)&&"__vccOpts"in t}const Oe=(t,e)=>t0(t,e,Si);function cc(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!Q(e)?Kl(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kl(n)&&(n=[n]),Je(t,e,n))}const cE=Symbol(""),lE=()=>Ht(cE),uE="3.2.47",hE="http://www.w3.org/2000/svg",mr=typeof document<"u"?document:null,dd=mr&&mr.createElement("template"),fE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?mr.createElementNS(hE,t):mr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mr.createTextNode(t),createComment:t=>mr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dd.innerHTML=r?`<svg>${t}</svg>`:t;const a=dd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mE(t,e,n){const r=t.style,s=He(n);if(n&&!s){if(e&&!He(e))for(const i in e)n[i]==null&&Wl(r,i,"");for(const i in n)Wl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const md=/\s*!important$/;function Wl(t,e,n){if(Q(n))n.forEach(r=>Wl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pE(t,e);md.test(n)?t.setProperty(Fr(r),n.replace(md,""),"important"):t[r]=n}}const pd=["Webkit","Moz","ms"],sl={};function pE(t,e){const n=sl[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return sl[e]=r;r=ec(r);for(let s=0;s<pd.length;s++){const i=pd[s]+r;if(i in t)return sl[e]=i}return e}const gd="http://www.w3.org/1999/xlink";function gE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gd,e.slice(6,e.length)):t.setAttributeNS(gd,e,n);else{const i=l_(e);n==null||i&&!Hp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Hp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function vE(t,e,n,r){t.removeEventListener(e,n,r)}function bE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=wE(e);if(r){const l=i[e]=TE(r,s);Gr(t,a,l,c)}else o&&(vE(t,a,o,c),i[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function wE(t){let e;if(yd.test(t)){e={};let r;for(;r=t.match(yd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let il=0;const _E=Promise.resolve(),EE=()=>il||(_E.then(()=>il=0),il=Date.now());function TE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qt(IE(r,n.value),e,5,[r])};return n.value=t,n.attached=EE(),n}function IE(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vd=/^on[a-z]/,kE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dE(t,r,s):e==="style"?mE(t,n,r):Qa(e)?Wu(e)||bE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SE(t,e,r,s))?yE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gE(t,e,r,s))};function SE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&vd.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vd.test(e)&&He(n)?!1:e in t}const bd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>ta(e,n):e};function AE(t){t.target.composing=!0}function wd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ls={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=bd(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ll(a)),t._assign(a)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",AE),Gr(t,"compositionend",wd),Gr(t,"change",wd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=bd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ll(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},CE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_d=(t,e)=>n=>{if(!("key"in n))return;const r=Fr(n.key);if(e.some(s=>s===r||CE[s]===r))return t(n)},xE=bt({patchProp:kE},fE);let Ed;function RE(){return Ed||(Ed=z0(xE))}const OE=(...t)=>{const e=RE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=NE(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function NE(t){return He(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof window<"u";function PE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function ol(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const li=()=>{},Kt=Array.isArray,DE=/\/$/,ME=t=>t.replace(DE,"");function al(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$E(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function LE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Td(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vs(e.matched[r],n.matched[s])&&jg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return Kt(t)?Id(t,e):Kt(e)?Id(e,t):t===e}function Id(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ai;(function(t){t.pop="pop",t.push="push"})(Ai||(Ai={}));var ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ui||(ui={}));function VE(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ME(t)}const jE=/^[^#]+#/;function BE(t,e){return t.replace(jE,"#")+e}function zE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const lc=()=>({left:window.pageXOffset,top:window.pageYOffset});function qE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function kd(t,e){return(history.state?history.state.position-e:-1)+t}const Gl=new Map;function HE(t,e){Gl.set(t,e)}function KE(t){const e=Gl.get(t);return Gl.delete(t),e}let WE=()=>location.protocol+"//"+location.host;function Bg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Td(c,"")}return Td(n,t)+r+s}function GE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=Bg(t,location),g=n.value,y=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}_=y?f.position-y.position:0}else r(d);s.forEach(v=>{v(n.value,g,{delta:_,type:Ai.pop,direction:_?_>0?ui.forward:ui.back:ui.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(de({},f.state,{scroll:lc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Sd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?lc():null}}function YE(t){const{history:e,location:n}=window,r={value:Bg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:WE()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=de({},e.state,Sd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=de({},s.value,e.state,{forward:c,scroll:lc()});i(u.current,u,!0);const h=de({},Sd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function XE(t){t=VE(t);const e=YE(t),n=GE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=de({location:"",base:t,go:r,createHref:BE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function QE(t){return typeof t=="string"||t&&typeof t=="object"}function zg(t){return typeof t=="string"||typeof t=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qg=Symbol("");var Ad;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ad||(Ad={}));function bs(t,e){return de(new Error,{type:t,[qg]:!0},e)}function mn(t,e){return t instanceof Error&&qg in t&&(e==null||!!(t.type&e))}const Cd="[^/]+?",JE={sensitive:!1,strict:!1,start:!0,end:!0},ZE=/[.+*?^${}()[\]/\\]/g;function e1(t,e){const n=de({},JE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(ZE,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:y,optional:_,regexp:v}=f;i.push({name:g,repeatable:y,optional:_});const w=v||Cd;if(w!==Cd){d+=10;try{new RegExp(`(${w})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+O.message)}}let T=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(T=_&&l.length<2?`(?:/${T})`:"/"+T),_&&(T+="?"),s+=T,d+=20,_&&(d+=-8),y&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=i[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:y,optional:_}=d,v=g in l?l[g]:"";if(Kt(v)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Kt(v)?v.join("/"):v;if(!w)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function t1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n1(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=t1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xd(r))return 1;if(xd(s))return-1}return s.length-r.length}function xd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const r1={type:0,value:""},s1=/[a-zA-Z0-9_]/;function i1(t){if(!t)return[[]];if(t==="/")return[[r1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:s1.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function o1(t,e,n){const r=e1(i1(t.path),n),s=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function a1(t,e){const n=[],r=new Map;e=Nd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,g=c1(u);g.aliasOf=f&&f.record;const y=Nd(e,u),_=[g];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of T)_.push(de({},g,{components:f?f.record.components:g.components,path:O,aliasOf:f?f.record:g}))}let v,w;for(const T of _){const{path:O}=T;if(h&&O[0]!=="/"){const K=h.record.path,te=K[K.length-1]==="/"?"":"/";T.path=h.record.path+(O&&te+O)}if(v=o1(T,h,y),f?f.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),d&&u.name&&!Od(v)&&o(u.name)),g.children){const K=g.children;for(let te=0;te<K.length;te++)i(K[te],v,f&&f.children[te])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return w?()=>{o(w)}:li}function o(u){if(zg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&n1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Od(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},g,y;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw bs(1,{location:u});y=f.record.name,d=de(Rd(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&Rd(u.params,f.keys.map(w=>w.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(w=>w.re.test(g)),f&&(d=f.parse(g),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw bs(1,{location:u,currentLocation:h});y=f.record.name,d=de({},h.params,u.params),g=f.stringify(d)}const _=[];let v=f;for(;v;)_.unshift(v.record),v=v.parent;return{name:y,path:g,params:d,matched:_,meta:u1(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Rd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function c1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:l1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function l1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Od(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function u1(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Nd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Hg(t,e){return e.children.some(n=>n===t||Hg(t,n))}const Kg=/#/g,h1=/&/g,f1=/\//g,d1=/=/g,m1=/\?/g,Wg=/\+/g,p1=/%5B/g,g1=/%5D/g,Gg=/%5E/g,y1=/%60/g,Yg=/%7B/g,v1=/%7C/g,Xg=/%7D/g,b1=/%20/g;function hh(t){return encodeURI(""+t).replace(v1,"|").replace(p1,"[").replace(g1,"]")}function w1(t){return hh(t).replace(Yg,"{").replace(Xg,"}").replace(Gg,"^")}function Yl(t){return hh(t).replace(Wg,"%2B").replace(b1,"+").replace(Kg,"%23").replace(h1,"%26").replace(y1,"`").replace(Yg,"{").replace(Xg,"}").replace(Gg,"^")}function _1(t){return Yl(t).replace(d1,"%3D")}function E1(t){return hh(t).replace(Kg,"%23").replace(m1,"%3F")}function T1(t){return t==null?"":E1(t).replace(f1,"%2F")}function Ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function I1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wg," "),o=i.indexOf("="),a=Ea(o<0?i:i.slice(0,o)),c=o<0?null:Ea(i.slice(o+1));if(a in e){let l=e[a];Kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Pd(t){let e="";for(let n in t){const r=t[n];if(n=_1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Yl(i)):[r&&Yl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function k1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const S1=Symbol(""),Dd=Symbol(""),uc=Symbol(""),fh=Symbol(""),Xl=Symbol("");function Ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $n(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(bs(4,{from:n,to:e})):h instanceof Error?a(h):QE(h)?a(bs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function cl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(A1(a)){const l=(a.__vccOpts||a)[e];l&&s.push($n(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=PE(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&$n(f,n,r,i,o)()}))}}return s}function A1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Md(t){const e=Ht(uc),n=Ht(fh),r=Oe(()=>e.resolve(ge(t.to))),s=Oe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(vs.bind(null,u));if(f>-1)return f;const d=Ld(c[l-2]);return l>1&&Ld(u)===d&&h[h.length-1].path!==d?h.findIndex(vs.bind(null,c[l-2])):f}),i=Oe(()=>s.value>-1&&O1(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&jg(n.params,r.value.params));function a(c={}){return R1(c)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(li):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const C1=Yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Md,setup(t,{slots:e}){const n=Gi(Md(t)),{options:r}=Ht(uc),s=Oe(()=>({[Ud(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ud(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),x1=C1;function R1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function O1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ud=(t,e,n)=>t??e??n,N1=Yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(Xl),s=Oe(()=>t.route||r.value),i=Ht(Dd,0),o=Oe(()=>{let l=ge(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Oe(()=>s.value.matched[o.value]);na(Dd,Oe(()=>o.value+1)),na(S1,a),na(Xl,s);const c=yt();return oi(()=>[c.value,a.value,t.name],([l,u,h],[f,d,g])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!vs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Fd(n.default,{Component:f,route:l});const d=h.props[u],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,_=cc(f,de({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Fd(n.default,{Component:_,route:l})||_}}});function Fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qg=N1;function P1(t){const e=a1(t.routes,t),n=t.parseQuery||I1,r=t.stringifyQuery||Pd,s=t.history,i=Ws(),o=Ws(),a=Ws(),c=G_(Mn);let l=Mn;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ol.bind(null,I=>""+I),h=ol.bind(null,T1),f=ol.bind(null,Ea);function d(I,M){let P,B;return zg(I)?(P=e.getRecordMatcher(I),B=M):B=I,e.addRoute(B,P)}function g(I){const M=e.getRecordMatcher(I);M&&e.removeRoute(M)}function y(){return e.getRoutes().map(I=>I.record)}function _(I){return!!e.getRecordMatcher(I)}function v(I,M){if(M=de({},M||c.value),typeof I=="string"){const m=al(n,I,M.path),p=e.resolve({path:m.path},M),b=s.createHref(m.fullPath);return de(m,p,{params:f(p.params),hash:Ea(m.hash),redirectedFrom:void 0,href:b})}let P;if("path"in I)P=de({},I,{path:al(n,I.path,M.path).path});else{const m=de({},I.params);for(const p in m)m[p]==null&&delete m[p];P=de({},I,{params:h(I.params)}),M.params=h(M.params)}const B=e.resolve(P,M),ae=I.hash||"";B.params=u(f(B.params));const Re=LE(r,de({},I,{hash:w1(ae),path:B.path})),ne=s.createHref(Re);return de({fullPath:Re,hash:ae,query:r===Pd?k1(I.query):I.query||{}},B,{redirectedFrom:void 0,href:ne})}function w(I){return typeof I=="string"?al(n,I,c.value.path):de({},I)}function T(I,M){if(l!==I)return bs(8,{from:M,to:I})}function O(I){return ue(I)}function K(I){return O(de(w(I),{replace:!0}))}function te(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let B=typeof P=="function"?P(I):P;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=w(B):{path:B},B.params={}),de({query:I.query,hash:I.hash,params:"path"in B?{}:I.params},B)}}function ue(I,M){const P=l=v(I),B=c.value,ae=I.state,Re=I.force,ne=I.replace===!0,m=te(P);if(m)return ue(de(w(m),{state:typeof m=="object"?de({},ae,m.state):ae,force:Re,replace:ne}),M||P);const p=P;p.redirectedFrom=M;let b;return!Re&&UE(r,B,P)&&(b=bs(16,{to:p,from:B}),cr(B,B,!0,!1)),(b?Promise.resolve(b):xe(p,B)).catch(E=>mn(E)?mn(E,2)?E:Mt(E):ye(E,p,B)).then(E=>{if(E){if(mn(E,2))return ue(de({replace:ne},w(E.to),{state:typeof E.to=="object"?de({},ae,E.to.state):ae,force:Re}),M||p)}else E=Pn(p,B,!0,ne,ae);return wt(p,B,E),E})}function ke(I,M){const P=T(I,M);return P?Promise.reject(P):Promise.resolve()}function xe(I,M){let P;const[B,ae,Re]=D1(I,M);P=cl(B.reverse(),"beforeRouteLeave",I,M);for(const m of B)m.leaveGuards.forEach(p=>{P.push($n(p,I,M))});const ne=ke.bind(null,I,M);return P.push(ne),Kr(P).then(()=>{P=[];for(const m of i.list())P.push($n(m,I,M));return P.push(ne),Kr(P)}).then(()=>{P=cl(ae,"beforeRouteUpdate",I,M);for(const m of ae)m.updateGuards.forEach(p=>{P.push($n(p,I,M))});return P.push(ne),Kr(P)}).then(()=>{P=[];for(const m of I.matched)if(m.beforeEnter&&!M.matched.includes(m))if(Kt(m.beforeEnter))for(const p of m.beforeEnter)P.push($n(p,I,M));else P.push($n(m.beforeEnter,I,M));return P.push(ne),Kr(P)}).then(()=>(I.matched.forEach(m=>m.enterCallbacks={}),P=cl(Re,"beforeRouteEnter",I,M),P.push(ne),Kr(P))).then(()=>{P=[];for(const m of o.list())P.push($n(m,I,M));return P.push(ne),Kr(P)}).catch(m=>mn(m,8)?m:Promise.reject(m))}function wt(I,M,P){for(const B of a.list())B(I,M,P)}function Pn(I,M,P,B,ae){const Re=T(I,M);if(Re)return Re;const ne=M===Mn,m=Yr?history.state:{};P&&(B||ne?s.replace(I.fullPath,de({scroll:ne&&m&&m.scroll},ae)):s.push(I.fullPath,ae)),c.value=I,cr(I,M,P,ne),Mt()}let Qt;function zr(){Qt||(Qt=s.listen((I,M,P)=>{if(!Ao.listening)return;const B=v(I),ae=te(B);if(ae){ue(de(ae,{replace:!0}),B).catch(li);return}l=B;const Re=c.value;Yr&&HE(kd(Re.fullPath,P.delta),lc()),xe(B,Re).catch(ne=>mn(ne,12)?ne:mn(ne,2)?(ue(ne.to,B).then(m=>{mn(m,20)&&!P.delta&&P.type===Ai.pop&&s.go(-1,!1)}).catch(li),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ye(ne,B,Re))).then(ne=>{ne=ne||Pn(B,Re,!1),ne&&(P.delta&&!mn(ne,8)?s.go(-P.delta,!1):P.type===Ai.pop&&mn(ne,20)&&s.go(-1,!1)),wt(B,Re,ne)}).catch(li)}))}let ar=Ws(),qs=Ws(),Ue;function ye(I,M,P){Mt(I);const B=qs.list();return B.length?B.forEach(ae=>ae(I,M,P)):console.error(I),Promise.reject(I)}function me(){return Ue&&c.value!==Mn?Promise.resolve():new Promise((I,M)=>{ar.add([I,M])})}function Mt(I){return Ue||(Ue=!I,zr(),ar.list().forEach(([M,P])=>I?P(I):M()),ar.reset()),I}function cr(I,M,P,B){const{scrollBehavior:ae}=t;if(!Yr||!ae)return Promise.resolve();const Re=!P&&KE(kd(I.fullPath,0))||(B||!P)&&history.state&&history.state.scroll||null;return gg().then(()=>ae(I,M,Re)).then(ne=>ne&&qE(ne)).catch(ne=>ye(ne,I,M))}const Lt=I=>s.go(I);let _t;const qr=new Set,Ao={currentRoute:c,listening:!0,addRoute:d,removeRoute:g,hasRoute:_,getRoutes:y,resolve:v,options:t,push:O,replace:K,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:qs.add,isReady:me,install(I){const M=this;I.component("RouterLink",x1),I.component("RouterView",Qg),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),Yr&&!_t&&c.value===Mn&&(_t=!0,O(s.location).catch(ae=>{}));const P={};for(const ae in Mn)P[ae]=Oe(()=>c.value[ae]);I.provide(uc,M),I.provide(fh,Gi(P)),I.provide(Xl,c);const B=I.unmount;qr.add(I),I.unmount=function(){qr.delete(I),qr.size<1&&(l=Mn,Qt&&Qt(),Qt=null,c.value=Mn,_t=!1,Ue=!1),B()}}};return Ao}function Kr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function D1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>vs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>vs(l,c))||s.push(c))}return[n,r,s]}function Jg(){return Ht(uc)}function M1(){return Ht(fh)}const L1={class:"min-h-screen bg-main"},U1=Yt({__name:"App",setup(t){return(e,n)=>(ze(),at("section",L1,[Je(ge(Qg))]))}}),F1="modulepreload",$1=function(t){return"/"+t},$d={},V1=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=$1(i),i in $d)return;$d[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":F1,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},j1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ey={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new B1;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class B1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z1=function(t){const e=Zg(t);return ey.encodeByteArray(e,!0)},Ta=function(t){return z1(t).replace(/\./g,"")},ty=function(t){try{return ey.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=()=>q1().__FIREBASE_DEFAULTS__,K1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},W1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ty(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return H1()||K1()||W1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ny=t=>{var e,n;return(n=(e=hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ry=t=>{const e=ny(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G1=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},sy=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Q1(){var t;const e=(t=hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eT(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tT(){try{return typeof indexedDB=="object"}catch{return!1}}function nT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rT,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dn(s,a,r)}}function sT(t,e){return t.replace(iT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const iT=/\{\$([^}]+)}/g;function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ia(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vd(i)&&Vd(o)){if(!Ia(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aT(t,e){const n=new cT(t,e);return n.subscribe.bind(n)}class cT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ll),s.error===void 0&&(s.error=ll),s.complete===void 0&&(s.complete=ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ll(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Y1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hT(t){return t===fr?void 0:t}function fT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const mT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},pT=he.INFO,gT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},yT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=pT,this._logHandler=yT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const vT=(t,e)=>e.some(n=>t instanceof n);let jd,Bd;function bT(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wT(){return Bd||(Bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oy=new WeakMap,Ql=new WeakMap,ay=new WeakMap,ul=new WeakMap,mh=new WeakMap;function _T(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oy.set(n,t)}).catch(()=>{}),mh.set(e,t),e}function ET(t){if(Ql.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ql.set(t,e)}let Jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ay.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TT(t){Jl=t(Jl)}function IT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hl(this),e,...n);return ay.set(r,e.sort?e.sort():[e]),Wn(r)}:wT().includes(t)?function(...e){return t.apply(hl(this),e),Wn(oy.get(this))}:function(...e){return Wn(t.apply(hl(this),e))}}function kT(t){return typeof t=="function"?IT(t):(t instanceof IDBTransaction&&ET(t),vT(t,bT())?new Proxy(t,Jl):t)}function Wn(t){if(t instanceof IDBRequest)return _T(t);if(ul.has(t))return ul.get(t);const e=kT(t);return e!==t&&(ul.set(t,e),mh.set(e,t)),e}const hl=t=>mh.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const AT=["get","getKey","getAll","getAllKeys","count"],CT=["put","add","delete","clear"],fl=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fl.get(e))return fl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=CT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fl.set(e,i),i}TT(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zl="@firebase/app",qd="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new dh("@firebase/app"),OT="@firebase/app-compat",NT="@firebase/analytics-compat",PT="@firebase/analytics",DT="@firebase/app-check-compat",MT="@firebase/app-check",LT="@firebase/auth",UT="@firebase/auth-compat",FT="@firebase/database",$T="@firebase/database-compat",VT="@firebase/functions",jT="@firebase/functions-compat",BT="@firebase/installations",zT="@firebase/installations-compat",qT="@firebase/messaging",HT="@firebase/messaging-compat",KT="@firebase/performance",WT="@firebase/performance-compat",GT="@firebase/remote-config",YT="@firebase/remote-config-compat",XT="@firebase/storage",QT="@firebase/storage-compat",JT="@firebase/firestore",ZT="@firebase/firestore-compat",eI="firebase",tI="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",nI={[Zl]:"fire-core",[OT]:"fire-core-compat",[PT]:"fire-analytics",[NT]:"fire-analytics-compat",[MT]:"fire-app-check",[DT]:"fire-app-check-compat",[LT]:"fire-auth",[UT]:"fire-auth-compat",[FT]:"fire-rtdb",[$T]:"fire-rtdb-compat",[VT]:"fire-fn",[jT]:"fire-fn-compat",[BT]:"fire-iid",[zT]:"fire-iid-compat",[qT]:"fire-fcm",[HT]:"fire-fcm-compat",[KT]:"fire-perf",[WT]:"fire-perf-compat",[GT]:"fire-rc",[YT]:"fire-rc-compat",[XT]:"fire-gcs",[QT]:"fire-gcs-compat",[JT]:"fire-fst",[ZT]:"fire-fst-compat","fire-js":"fire-js",[eI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map,tu=new Map;function rI(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rr(t){const e=t.name;if(tu.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,t);for(const n of ka.values())rI(n,t);return!0}function fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gn=new Yi("app","Firebase",sI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=tI;function cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=G1()),!n)throw Gn.create("no-options");const i=ka.get(s);if(i){if(Ia(n,i.options)&&Ia(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new dT(s);for(const c of tu.values())o.addComponent(c);const a=new iI(n,r,o);return ka.set(s,a),a}function ph(t=eu){const e=ka.get(t);if(!e&&t===eu)return cy();if(!e)throw Gn.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=nI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}Rr(new Qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebase-heartbeat-database",aI=1,Ci="firebase-heartbeat-store";let dl=null;function ly(){return dl||(dl=ST(oI,aI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ci)}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),dl}async function cI(t){try{return(await ly()).transaction(Ci).objectStore(Ci).get(uy(t))}catch(e){if(e instanceof dn)xr.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function Hd(t,e){try{const r=(await ly()).transaction(Ci,"readwrite");return await r.objectStore(Ci).put(e,uy(t)),r.done}catch(n){if(n instanceof dn)xr.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function uy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=1024,uI=30*24*60*60*1e3;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=uI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kd(),{heartbeatsToSend:n,unsentEntries:r}=fI(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Kd(){return new Date().toISOString().substring(0,10)}function fI(t,e=lI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tT()?nT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wd(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){Rr(new Qn("platform-logger",e=>new xT(e),"PRIVATE")),Rr(new Qn("heartbeat",e=>new hI(e),"PRIVATE")),an(Zl,qd,t),an(Zl,qd,"esm2017"),an("fire-js","")}mI("");var pI="firebase",gI="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(pI,gI,"app");var yI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,gh=gh||{},Y=yI||self;function Sa(){}function dc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vI(t){return Object.prototype.hasOwnProperty.call(t,ml)&&t[ml]||(t[ml]=++bI)}var ml="closure_uid_"+(1e9*Math.random()>>>0),bI=0;function wI(t,e,n){return t.call.apply(t.bind,arguments)}function _I(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=wI:lt=_I,lt.apply(null,arguments)}function Do(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function sr(){this.s=this.s,this.o=this.o}var EI=0;sr.prototype.s=!1;sr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),EI!=0)&&vI(this)};sr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var TI=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Sa,e),Y.removeEventListener("test",Sa,e)}catch{}return t}();function Aa(t){return/^[\s\xa0]*$/.test(t)}var Yd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pl(t,e){return t<e?-1:t>e?1:0}function mc(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function rn(t){return mc().indexOf(t)!=-1}function vh(t){return vh[" "](t),t}vh[" "]=Sa;function II(t){var e=AI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kI=rn("Opera"),ws=rn("Trident")||rn("MSIE"),fy=rn("Edge"),nu=fy||ws,dy=rn("Gecko")&&!(mc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge"))&&!(rn("Trident")||rn("MSIE"))&&!rn("Edge"),SI=mc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge");function my(){var t=Y.document;return t?t.documentMode:void 0}var Ca;e:{var gl="",yl=function(){var t=mc();if(dy)return/rv:([^\);]+)(\)|;)/.exec(t);if(fy)return/Edge\/([\d\.]+)/.exec(t);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SI)return/WebKit\/(\S+)/.exec(t);if(kI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yl&&(gl=yl?yl[1]:""),ws){var vl=my();if(vl!=null&&vl>parseFloat(gl)){Ca=String(vl);break e}}Ca=gl}var AI={};function CI(){return II(function(){let t=0;const e=Yd(String(Ca)).split("."),n=Yd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=pl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||pl(s[2].length==0,i[2].length==0)||pl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var ru;if(Y.document&&ws){var Xd=my();ru=Xd||parseInt(Ca,10)||void 0}else ru=void 0;var xI=ru;function xi(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dy){e:{try{vh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xi.X.h.call(this)}}et(xi,ut);var RI={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ji="closure_listenable_"+(1e6*Math.random()|0),OI=0;function NI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++OI,this.ba=this.ea=!1}function pc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function bh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function py(t){const e={};for(const n in t)e[n]=t[n];return e}const Qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Qd.length;i++)n=Qd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=iu(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new NI(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function su(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=hy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(pc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function iu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var wh="closure_lm_"+(1e6*Math.random()|0),bl={};function yy(t,e,n,r,s){if(r&&r.once)return by(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yy(t,e[i],n,r,s);return null}return n=Th(n),t&&t[Ji]?t.N(e,n,Qi(r)?!!r.capture:!!r,s):vy(t,e,n,!1,r,s)}function vy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Qi(s)?!!s.capture:!!s,a=Eh(t);if(a||(t[wh]=a=new gc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=PI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_y(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PI(){function t(n){return e.call(t.src,t.listener,n)}const e=DI;return t}function by(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)by(t,e[i],n,r,s);return null}return n=Th(n),t&&t[Ji]?t.O(e,n,Qi(r)?!!r.capture:!!r,s):vy(t,e,n,!0,r,s)}function wy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wy(t,e[i],n,r,s);else r=Qi(r)?!!r.capture:!!r,n=Th(n),t&&t[Ji]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=iu(i,n,r,s),-1<n&&(pc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=iu(e,n,r,s)),(n=-1<t?e[t]:null)&&_h(n))}function _h(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ji])su(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_y(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eh(e))?(su(n,t),n.h==0&&(n.src=null,e[wh]=null)):pc(t)}}}function _y(t){return t in bl?bl[t]:bl[t]="on"+t}function DI(t,e){if(t.ba)t=!0;else{e=new xi(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&_h(t),t=n.call(r,e)}return t}function Eh(t){return t=t[wh],t instanceof gc?t:null}var wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Th(t){return typeof t=="function"?t:(t[wl]||(t[wl]=function(e){return t.handleEvent(e)}),t[wl])}function Ye(){sr.call(this),this.i=new gc(this),this.P=this,this.I=null}et(Ye,sr);Ye.prototype[Ji]=!0;Ye.prototype.removeEventListener=function(t,e,n,r){wy(this,t,e,n,r)};function Ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var s=e;e=new ut(r,t),gy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Mo(o,r,!0,e)&&s}if(o=e.g=t,s=Mo(o,r,!0,e)&&s,s=Mo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Mo(o,r,!1,e)&&s}Ye.prototype.M=function(){if(Ye.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pc(n[r]);delete t.g[e],t.h--}}this.I=null};Ye.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ye.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&su(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ih=Y.JSON.stringify;function MI(){var t=Iy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LI{constructor(){this.h=this.g=null}add(e,n){const r=Ey.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ey=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new UI,t=>t.reset());class UI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FI(t){Y.setTimeout(()=>{throw t},0)}function Ty(t,e){ou||$I(),au||(ou(),au=!0),Iy.add(t,e)}var ou;function $I(){var t=Y.Promise.resolve(void 0);ou=function(){t.then(VI)}}var au=!1,Iy=new LI;function VI(){for(var t;t=MI();){try{t.h.call(t.g)}catch(n){FI(n)}var e=Ey;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}au=!1}function yc(t,e){Ye.call(this),this.h=t||1,this.g=e||Y,this.j=lt(this.lb,this),this.l=Date.now()}et(yc,Ye);V=yc.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ze(this,"tick"),this.ca&&(kh(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){yc.X.M.call(this),kh(this),delete this.g};function Sh(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function ky(t){t.g=Sh(()=>{t.g=null,t.i&&(t.i=!1,ky(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jI extends sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ky(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){sr.call(this),this.h=t,this.g={}}et(Ri,sr);var Jd=[];function Sy(t,e,n,r){Array.isArray(n)||(n&&(Jd[0]=n.toString()),n=Jd);for(var s=0;s<n.length;s++){var i=yy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ay(t){bh(t.g,function(e,n){this.g.hasOwnProperty(n)&&_h(e)},t),t.g={}}Ri.prototype.M=function(){Ri.X.M.call(this),Ay(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Aa=function(){this.g=!1};function BI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function zI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HI(t,n)+(r?" "+r:"")})}function qI(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function HI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ih(n)}catch{return e}}var $r={},Zd=null;function bc(){return Zd=Zd||new Ye}$r.Pa="serverreachability";function Cy(t){ut.call(this,$r.Pa,t)}et(Cy,ut);function Oi(t){const e=bc();Ze(e,new Cy(e))}$r.STAT_EVENT="statevent";function xy(t,e){ut.call(this,$r.STAT_EVENT,t),this.stat=e}et(xy,ut);function vt(t){const e=bc();Ze(e,new xy(e,t))}$r.Qa="timingevent";function Ry(t,e){ut.call(this,$r.Qa,t),this.size=e}et(Ry,ut);function Zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Oy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ah(){}Ah.prototype.h=null;function em(t){return t.h||(t.h=t.i())}function Ny(){}var eo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ch(){ut.call(this,"d")}et(Ch,ut);function xh(){ut.call(this,"c")}et(xh,ut);var cu;function _c(){}et(_c,Ah);_c.prototype.g=function(){return new XMLHttpRequest};_c.prototype.i=function(){return{}};cu=new _c;function to(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ri(this),this.O=KI,t=nu?125:void 0,this.T=new yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Py}function Py(){this.i=null,this.g="",this.h=!1}var KI=45e3,lu={},xa={};V=to.prototype;V.setTimeout=function(t){this.O=t};function uu(t,e,n){t.K=1,t.v=Tc(En(e)),t.s=n,t.P=!0,Dy(t,null)}function Dy(t,e){t.F=Date.now(),no(t),t.A=En(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),By(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Py,t.g=lv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jI(lt(t.La,t,t.g),t.N)),Sy(t.S,t.g,"readystatechange",t.ib),e=t.H?py(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Oi(),BI(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&gn(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=gn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||nu||this.g&&(this.h.h||this.g.fa()||sm(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Oi(3):Oi(2)),Ec(this);var n=this.g.aa();this.Y=n;t:if(My(this)){var r=sm(this.g);t="";var s=r.length,i=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),hi(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Aa(a)){var l=a;break t}}l=null}if(n=l)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hu(this,n);else{this.i=!1,this.o=3,vt(12),gr(this),hi(this);break e}}this.P?(Ly(this,u,o),nu&&this.i&&u==3&&(Sy(this.S,this.T,"tick",this.hb),this.T.start())):(es(this.j,this.m,o,null),hu(this,o)),u==4&&gr(this),this.i&&!this.I&&(u==4?iv(this.l,this):(this.i=!1,no(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),gr(this),hi(this)}}}catch{}finally{}};function My(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ly(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=WI(t,n),s==xa){e==4&&(t.o=4,vt(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==lu){t.o=4,vt(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else es(t.j,t.m,s,null),hu(t,s);My(t)&&s!=xa&&s!=lu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lh(e),e.K=!0,vt(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),gr(t),hi(t))}V.hb=function(){if(this.g){var t=gn(this.g),e=this.g.fa();this.C<e.length&&(Ec(this),Ly(this,t,e),this.i&&t!=4&&no(this))}};function WI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xa:(n=Number(e.substring(n,r)),isNaN(n)?lu:(r+=1,r+n>e.length?xa:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,gr(this)};function no(t){t.V=Date.now()+t.O,Uy(t,t.O)}function Uy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zi(lt(t.gb,t),e)}function Ec(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(qI(this.j,this.A),this.K!=2&&(Oi(),vt(17)),gr(this),this.o=2,hi(this)):Uy(this,this.V-t)};function hi(t){t.l.G==0||t.I||iv(t.l,t)}function gr(t){Ec(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,kh(t.T),Ay(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fu(n.h,t))){if(!t.J&&fu(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Na(n),Sc(n);else break e;Mh(n),vt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Zi(lt(n.cb,n),6e3));if(1>=Hy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else yr(n,11)}else if((t.J||n.g==t)&&Na(n),!Aa(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Rh(i,i.h),i.h=null))}if(r.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Se(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=cv(r,r.H?r.ka:null,r.V),o.J){Ky(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ec(a),no(a)),r.g=o}else rv(r);0<n.i.length&&Ac(n)}else l[0]!="stop"&&l[0]!="close"||yr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?yr(n,7):Dh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Oi(4)}catch{}}function GI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function YI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=YI(t),r=GI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var $y=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ir(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ir){this.h=e!==void 0?e:t.h,Ra(this,t.j),this.s=t.s,this.g=t.g,Oa(this,t.m),this.l=t.l,e=t.i;var n=new Ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tm(this,n),this.o=t.o}else t&&(n=String(t).match($y))?(this.h=!!e,Ra(this,n[1]||"",!0),this.s=ti(n[2]||""),this.g=ti(n[3]||"",!0),Oa(this,n[4]),this.l=ti(n[5]||"",!0),tm(this,n[6]||"",!0),this.o=ti(n[7]||"")):(this.h=!!e,this.i=new Ni(null,this.h))}Ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ni(e,nm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ni(e,nm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ni(n,n.charAt(0)=="/"?ZI:JI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ni(n,tk)),t.join("")};function En(t){return new Ir(t)}function Ra(t,e,n){t.j=n?ti(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tm(t,e,n){e instanceof Ni?(t.i=e,nk(t.i,t.h)):(n||(e=ni(e,ek)),t.i=new Ni(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Tc(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ti(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ni(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nm=/[#\/\?@]/g,JI=/[#\?:]/g,ZI=/[#\?]/g,ek=/[#\?@]/g,tk=/#/g;function Ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new Map,t.h=0,t.i&&XI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Ni.prototype;V.add=function(t,e){ir(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vy(t,e){ir(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jy(t,e){return ir(t),e=Ds(t,e),t.g.has(e)}V.forEach=function(t,e){ir(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.oa=function(){ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.W=function(t){ir(this);let e=[];if(typeof t=="string")jy(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ir(this),this.i=null,t=Ds(this,t),jy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function By(t,e,n){Vy(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),yh(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nk(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Vy(this,r),By(this,s,n))},t)),t.j=e}var rk=class{constructor(e,n){this.h=e,this.g=n}};function zy(t){this.l=t||sk,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sk=10;function qy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hy(t){return t.h?1:t.g?t.g.size:0}function fu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rh(t,e){t.g?t.g.add(e):t.h=e}function Ky(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zy.prototype.cancel=function(){if(this.i=Wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yh(t.i)}function Oh(){}Oh.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Oh.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function ik(){this.g=new Oh}function ok(t,e,n){const r=n||"";try{Fy(t,function(s,i){let o=s;Qi(s)&&(o=Ih(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ak(t,e){const n=new vc;if(Y.Image){const r=new Image;r.onload=Do(Lo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Do(Lo,n,r,"TestLoadImage: error",!1,e),r.onabort=Do(Lo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Do(Lo,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ro(t){this.l=t.ac||null,this.j=t.jb||!1}et(ro,Ah);ro.prototype.g=function(){return new Ic(this.l,this.j)};ro.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){Ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Ic,Ye);var Nh=0;V=Ic.prototype;V.open=function(t,e){if(this.readyState!=Nh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,so(this)),this.readyState=Nh};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Gy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?so(this):Pi(this),this.readyState==3&&Gy(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,so(this))};V.Ua=function(t){this.g&&(this.response=t,so(this))};V.ga=function(){this.g&&so(this)};function so(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ck=Y.JSON.parse;function Le(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yy,this.K=this.L=!1}et(Le,Ye);var Yy="",lk=/^https?$/i,uk=["POST","PUT"];V=Le.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cu.g(),this.C=this.u?em(this.u):em(cu),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){rm(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=hy(uk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jy(this),0<this.B&&((this.K=hk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=Sh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rm(this,i)}};function hk(t){return ws&&CI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof gh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function rm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xy(t),kc(t)}function Xy(t){t.D||(t.D=!0,Ze(t,"complete"),Ze(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),kc(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kc(this,!0)),Le.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Qy(this):this.fb())};V.fb=function(){Qy(this)};function Qy(t){if(t.h&&typeof gh<"u"&&(!t.C[1]||gn(t)!=4||t.aa()!=2)){if(t.v&&gn(t)==4)Sh(t.Ha,0,t);else if(Ze(t,"readystatechange"),gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match($y)[1]||null;if(!s&&Y.self&&Y.self.location){var i=Y.self.location.protocol;s=i.substr(0,i.length-1)}r=!lk.test(s?s.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xy(t)}}finally{kc(t)}}}}function kc(t,e){if(t.g){Jy(t);const n=t.g,r=t.C[0]?Sa:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function gn(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ck(e)}};function sm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zy(t){let e="";return bh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ph(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Zy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ev(t){this.Ca=0,this.i=[],this.j=new vc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gs("baseRetryDelayMs",5e3,t),this.bb=Gs("retryDelaySeedMs",1e4,t),this.$a=Gs("forwardChannelMaxRetries",2,t),this.ta=Gs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zy(t&&t.concurrentRequestLimit),this.Fa=new ik,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=ev.prototype;V.ma=8;V.G=1;function Dh(t){if(tv(t),t.G==3){var e=t.U++,n=En(t.F);Se(n,"SID",t.I),Se(n,"RID",e),Se(n,"TYPE","terminate"),io(t,n),e=new to(t,t.j,e,void 0),e.K=2,e.v=Tc(En(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=lv(e.l,null),e.g.da(e.v)),e.F=Date.now(),no(e)}av(t)}function Sc(t){t.g&&(Lh(t),t.g.cancel(),t.g=null)}function tv(t){Sc(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Na(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ac(t){qy(t.h)||t.m||(t.m=!0,Ty(t.Ja,t),t.C=0)}function fk(t,e){return Hy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Zi(lt(t.Ja,t,e),ov(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new to(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=py(i),gy(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=nv(this,s,e),n=En(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),io(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Zy(i)))+"&"+e:this.o&&Ph(n,this.o,i)),Rh(this.h,s),this.Ya&&Se(n,"TYPE","init"),this.O?(Se(n,"$req",e),Se(n,"SID","null"),s.Z=!0,uu(s,n,null)):uu(s,n,e),this.G=2}}else this.G==3&&(t?im(this,t):this.i.length==0||qy(this.h)||im(this))};function im(t,e){var n;e?n=e.m:n=t.U++;const r=En(t.F);Se(r,"SID",t.I),Se(r,"RID",n),Se(r,"AID",t.T),io(t,r),t.o&&t.s&&Ph(r,t.o,t.s),n=new to(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=nv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rh(t.h,n),uu(n,r,e)}function io(t,e){t.ia&&bh(t.ia,function(n,r){Se(e,r,n)}),t.l&&Fy({},function(n,r){Se(e,r,n)})}function nv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?lt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{ok(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function rv(t){t.g||t.u||(t.Z=1,Ty(t.Ia,t),t.A=0)}function Mh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Zi(lt(t.Ia,t),ov(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,sv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Zi(lt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),Sc(this),sv(this))};function Lh(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function sv(t){t.g=new to(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=En(t.sa);Se(e,"RID","rpc"),Se(e,"SID",t.I),Se(e,"CI",t.L?"0":"1"),Se(e,"AID",t.T),Se(e,"TYPE","xmlhttp"),io(t,e),t.o&&t.s&&Ph(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Tc(En(e)),n.s=null,n.P=!0,Dy(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Sc(this),Mh(this),vt(19))};function Na(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function iv(t,e){var n=null;if(t.g==e){Na(t),Lh(t),t.g=null;var r=2}else if(fu(t.h,e))n=e.D,Ky(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=bc(),Ze(r,new Ry(r,n)),Ac(t)}else rv(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&fk(t,e)||r==2&&Mh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:yr(t,5);break;case 4:yr(t,10);break;case 3:yr(t,6);break;default:yr(t,2)}}}function ov(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function yr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=lt(t.kb,t);n||(n=new Ir("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Ra(n,"https"),Tc(n)),ak(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),av(t),tv(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function av(t){if(t.G=0,t.la=[],t.l){const e=Wy(t.h);(e.length!=0||t.i.length!=0)&&(Gd(t.la,e),Gd(t.la,t.i),t.h.i.length=0,yh(t.i),t.i.length=0),t.l.ua()}}function cv(t,e,n){var r=n instanceof Ir?En(n):new Ir(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Oa(r,r.m);else{var s=Y.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ir(null,void 0);r&&Ra(i,r),e&&(i.g=e),s&&Oa(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Se(r,n,e),Se(r,"VER",t.ma),io(t,r),r}function lv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new ro({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function uv(){}V=uv.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Pa(){if(ws&&!(10<=Number(xI)))throw Error("Environmental error: no available transport.")}Pa.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){Ye.call(this),this.g=new ev(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Aa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ms(this)}et(Ot,Ye);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=cv(t,null,t.V),Ac(t)};Ot.prototype.close=function(){Dh(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ih(t),t=n);e.i.push(new rk(e.ab++,t)),e.G==3&&Ac(e)};Ot.prototype.M=function(){this.g.l=null,delete this.j,Dh(this.g),delete this.g,Ot.X.M.call(this)};function hv(t){Ch.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(hv,Ch);function fv(){xh.call(this),this.status=1}et(fv,xh);function Ms(t){this.g=t}et(Ms,uv);Ms.prototype.xa=function(){Ze(this.g,"a")};Ms.prototype.wa=function(t){Ze(this.g,new hv(t))};Ms.prototype.va=function(t){Ze(this.g,new fv)};Ms.prototype.ua=function(){Ze(this.g,"b")};Pa.prototype.createWebChannel=Pa.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;Oy.COMPLETE="complete";Ny.EventType=eo;eo.OPEN="a";eo.CLOSE="b";eo.ERROR="c";eo.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var dk=function(){return new Pa},mk=function(){return bc()},_l=wc,pk=Oy,gk=$r,om={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yk=ro,Uo=Ny,vk=Le;const am="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new dh("@firebase/firestore");function cm(){return Or.logLevel}function j(t,...e){if(Or.logLevel<=he.DEBUG){const n=e.map(Uh);Or.debug(`Firestore (${Ls}): ${t}`,...n)}}function Tn(t,...e){if(Or.logLevel<=he.ERROR){const n=e.map(Uh);Or.error(`Firestore (${Ls}): ${t}`,...n)}}function du(t,...e){if(Or.logLevel<=he.WARN){const n=e.map(Uh);Or.warn(`Firestore (${Ls}): ${t}`,...n)}}function Uh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function be(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class wk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _k{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new dv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new rt(e)}}class Ek{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(be(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Tk{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new Ek(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ik{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.A=n.token,new Ik(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Sk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ae(0,0))}static max(){return new J(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Di{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Ak=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Di{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return Ak.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ee.fromString(e))}static fromName(e){return new z(Ee.fromString(e).popFirst(5))}static empty(){return new z(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ee(e.slice()))}}function Ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new Jn(s,z.empty(),e)}function xk(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(J.min(),z.empty(),-1)}static max(){return new Jn(J.max(),z.empty(),-1)}}function Rk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==Ok)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Fh.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function Dk(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw s instanceof DOMException?new Mk("Invalid base64 string: "+s):s}}(e);return new dt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Lk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Lk.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yv(t){const e=t.mapValue.fields.__previous_value__;return gv(e)?yv(e):e}function Li(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gv(t)?4:Uk(t)?9007199254740991:10:G()}function fn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Zn(r.timestampValue),o=Zn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Es(r.bytesValue).isEqual(Es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ve(r.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ve(r.integerValue)===Ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ve(r.doubleValue),o=Ve(s.doubleValue);return i===o?Da(i)===Da(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(lm(i)!==lm(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!fn(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Ui(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ve(s.integerValue||s.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return um(t.timestampValue,e.timestampValue);case 4:return um(Li(t),Li(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Es(s),a=Es(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=fe(o[c],a[c]);if(l!==0)return l}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=fe(Ve(s.latitude),Ve(i.latitude));return o!==0?o:fe(Ve(s.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ts(o[c],a[c]);if(l)return l}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Fo.mapValue&&i===Fo.mapValue)return 0;if(s===Fo.mapValue)return 1;if(i===Fo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=fe(a[u],l[u]);if(h!==0)return h;const f=Ts(o[a[u]],c[l[u]]);if(f!==0)return f}return fe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Zn(t),r=Zn(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function Is(t){return mu(t)}function mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Zn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=mu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${mu(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function hm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pu(t){return!!t&&"integerValue"in t}function $h(t){return!!t&&"arrayValue"in t}function fm(t){return!!t&&"nullValue"in t}function dm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ia(t){return!!t&&"mapValue"in t}function fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Uk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.position=e,this.inclusive=n}}function mm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{}class Be extends vv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $k(e,n,r):n==="array-contains"?new Bk(e,r):n==="in"?new zk(e,r):n==="not-in"?new qk(e,r):n==="array-contains-any"?new Hk(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Vk(e,r):new jk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ts(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends vv{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Wt(e,n)}matches(e){return bv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bv(t){return t.op==="and"}function wv(t){return Fk(t)&&bv(t)}function Fk(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function gu(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(wv(t))return t.filters.map(e=>gu(e)).join(",");{const e=t.filters.map(n=>gu(n)).join(",");return`${t.op}(${e})`}}function _v(t,e){return t instanceof Be?function(n,r){return r instanceof Be&&n.op===r.op&&n.field.isEqual(r.field)&&fn(n.value,r.value)}(t,e):t instanceof Wt?function(n,r){return r instanceof Wt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&_v(i,r.filters[o]),!0):!1}(t,e):void G()}function Ev(t){return t instanceof Be?function(e){return`${e.field.canonicalString()} ${e.op} ${Is(e.value)}`}(t):t instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ev).join(" ,")+"}"}(t):"Filter"}class $k extends Be{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vk extends Be{constructor(e,n){super(e,"in",n),this.keys=Tv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jk extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Tv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class Bk extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $h(n)&&Ui(n.arrayValue,this.value)}}class zk extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class qk extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ui(this.value.arrayValue,n)}}class Hk extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$h(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ui(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $o(this.root,e,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $o(this.root,e,this.comparator,!0)}}class $o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gm(this.data.getIterator())}getIteratorFrom(e){return new gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new xt([])}unionWith(e){let n=new qe(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=fi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(fi(this.value))}}function Iv(t){const e=[];return Vr(t.fields,(n,r)=>{const s=new ot([n]);if(ia(r)){const i=Iv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,J.min(),J.min(),J.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,J.min(),J.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,J.min(),J.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function ym(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Wk(t,e,n,r,s,i,o)}function Vh(t){const e=Z(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e._t=n}return e._t}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_v(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pm(t.startAt,e.startAt)&&pm(t.endAt,e.endAt)}function yu(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Gk(t,e,n,r,s,i,o,a){return new co(t,e,n,r,s,i,o,a)}function xc(t){return new co(t)}function vm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Sv(t){return t.collectionGroup!==null}function us(t){const e=Z(t);if(e.wt===null){e.wt=[];const n=Bh(e),r=kv(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new di(n)),e.wt.push(new di(ot.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new di(ot.keyField(),i))}}}return e.wt}function In(t){const e=Z(t);if(!e.gt)if(e.limitType==="F")e.gt=ym(e.path,e.collectionGroup,us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of us(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new di(i.field,o))}const r=e.endAt?new Ma(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ma(e.startAt.position,e.startAt.inclusive):null;e.gt=ym(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.gt}function vu(t,e){e.getFirstInequalityField(),Bh(t);const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bu(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return jh(In(t),In(e))&&t.limitType===e.limitType}function Av(t){return`${Vh(In(t))}|lt:${t.limitType}`}function wu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Ev(r)).join(", ")}]`),Cc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),`Target(${n})`}(In(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of us(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=mm(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,us(n),r)||n.endAt&&!function(s,i,o){const a=mm(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,us(n),r))}(t,e)}function Yk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cv(t){return(e,n)=>{let r=!1;for(const s of us(t)){const i=Xk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xk(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Ts(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function Rv(t){return{integerValue:""+t}}function Qk(t,e){return Dk(e)?Rv(e):xv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this._=void 0}}function Jk(t,e,n){return t instanceof Fi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ks?Nv(t,e):t instanceof $i?Pv(t,e):function(r,s){const i=Ov(r,s),o=bm(i)+bm(r.It);return pu(i)&&pu(r.It)?Rv(o):xv(r.Tt,o)}(t,e)}function Zk(t,e,n){return t instanceof ks?Nv(t,e):t instanceof $i?Pv(t,e):n}function Ov(t,e){return t instanceof La?pu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fi extends Nc{}class ks extends Nc{constructor(e){super(),this.elements=e}}function Nv(t,e){const n=Dv(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class $i extends Nc{constructor(e){super(),this.elements=e}}function Pv(t,e){let n=Dv(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class La extends Nc{constructor(e,n){super(),this.Tt=e,this.It=n}}function bm(t){return Ve(t.integerValue||t.doubleValue)}function Dv(t){return $h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n){this.field=e,this.transform=n}}function eS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ks&&r instanceof ks||n instanceof $i&&r instanceof $i?_s(n.elements,r.elements,fn):n instanceof La&&r instanceof La?fn(n.It,r.It):n instanceof Fi&&r instanceof Fi}(t.transform,e.transform)}class tS{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function Lv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zh(t.key,Dt.none()):new lo(t.key,t.data,Dt.none());{const n=t.data,r=kt.empty();let s=new qe(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new or(t.key,r,new xt(s.toArray()),Dt.none())}}function nS(t,e,n){t instanceof lo?function(r,s,i){const o=r.value.clone(),a=_m(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof or?function(r,s,i){if(!oa(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=_m(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Uv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function mi(t,e,n,r){return t instanceof lo?function(s,i,o,a){if(!oa(s.precondition,i))return o;const c=s.value.clone(),l=Em(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof or?function(s,i,o,a){if(!oa(s.precondition,i))return o;const c=Em(s.fieldTransforms,a,i),l=i.data;return l.setAll(Uv(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return oa(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function rS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ov(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function wm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&_s(n,r,(s,i)=>eS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends Pc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends Pc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _m(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Zk(o,a,n[s]))}return r}function Em(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Jk(i,o,e))}return r}class zh extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sS extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,oe;function oS(t){switch(t){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Fv(t){if(t===void 0)return Tn("GRPC error has no .code"),k.UNKNOWN;switch(t){case $e.OK:return k.OK;case $e.CANCELLED:return k.CANCELLED;case $e.UNKNOWN:return k.UNKNOWN;case $e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case $e.INTERNAL:return k.INTERNAL;case $e.UNAVAILABLE:return k.UNAVAILABLE;case $e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case $e.NOT_FOUND:return k.NOT_FOUND;case $e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case $e.ABORTED:return k.ABORTED;case $e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case $e.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(oe=$e||($e={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Ke(z.comparator);function kn(){return aS}const $v=new Ke(z.comparator);function ri(...t){let e=$v;for(const n of t)e=e.insert(n.key,n);return e}function Vv(t){let e=$v;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return pi()}function jv(){return pi()}function pi(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const cS=new Ke(z.comparator),lS=new qe(z.comparator);function ie(...t){let e=lS;for(const n of t)e=e.add(n);return e}const uS=new qe(fe);function Bv(){return uS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(J.min(),s,Bv(),kn(),ie())}}class uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uo(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,s){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=s}}class zv{constructor(e,n){this.targetId=e,this.Rt=n}}class qv{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Tm{constructor(){this.Pt=0,this.vt=km(),this.bt=dt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=ie(),n=ie(),r=ie();return this.vt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new uo(this.bt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=km()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class hS{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=kn(),this.Kt=Im(),this.Gt=new qe(fe)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,s)=>{this.Jt(s)&&n(s)})}Zt(e){const n=e.targetId,r=e.Rt.count,s=this.Xt(n);if(s){const i=s.target;if(yu(i))if(r===0){const o=new z(i.path);this.zt(n,o,st.newNoDocument(o,J.min()))}else be(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&yu(a.target)){const c=new z(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,st.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let r=ie();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new Dc(e,n,this.Gt,this.Ut,r);return this.Ut=kn(),this.Kt=Im(),this.Gt=new qe(fe),s}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const s=this.Ht(e);this.ne(e,n)?s.$t(n,1):s.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new Tm,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new qe(fe),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Tm),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Im(){return new Ke(z.comparator)}function km(){return new Ke(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mS=(()=>({and:"AND",or:"OR"}))();class pS{constructor(e,n){this.databaseId=e,this.yt=n}}function Ua(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hv(t,e){return t.yt?e.toBase64():e.toUint8Array()}function gS(t,e){return Ua(t,e.toTimestamp())}function cn(t){return be(!!t),J.fromTimestamp(function(e){const n=Zn(e);return new Ae(n.seconds,n.nanos)}(t))}function qh(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Kv(t){const e=Ee.fromString(t);return be(Xv(e)),e}function _u(t,e){return qh(t.databaseId,e.path)}function El(t,e){const n=Kv(e);if(n.get(1)!==t.databaseId.projectId)throw new U(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Wv(n))}function Eu(t,e){return qh(t.databaseId,e)}function yS(t){const e=Kv(t);return e.length===4?Ee.emptyPath():Wv(e)}function Tu(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wv(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sm(t,e,n){return{name:_u(t,e),fields:n.value.mapValue.fields}}function vS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(be(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:Fv(c.code);return new U(l,c.message||"")}(o);n=new qv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=El(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):J.min(),a=new kt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new aa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=El(t,r.document),i=r.readTime?cn(r.readTime):J.min(),o=st.newNoDocument(s,i),a=r.removedTargetIds||[];n=new aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=El(t,r.document),i=r.removedTargetIds||[];n=new aa([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new iS(s),o=r.targetId;n=new zv(o,i)}}return n}function bS(t,e){let n;if(e instanceof lo)n={update:Sm(t,e.key,e.value)};else if(e instanceof zh)n={delete:_u(t,e.key)};else if(e instanceof or)n={update:Sm(t,e.key,e.data),updateMask:CS(e.fieldMask)};else{if(!(e instanceof sS))return G();n={verify:_u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Fi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $i)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof La)return{fieldPath:i.field.canonicalString(),increment:o.It};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:gS(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function wS(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?cn(r.updateTime):cn(s);return i.isEqual(J.min())&&(i=cn(s)),new tS(i,r.transformResults||[])}(n,e))):[]}function _S(t,e){return{documents:[Eu(t,e.path)]}}function ES(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Eu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Eu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Yv(Wt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Xr(u.field),direction:kS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Cc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function TS(t){let e=yS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Gv(u);return h instanceof Wt&&wv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new di(Qr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Cc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ma(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ma(f,h)}(n.endAt)),Gk(e,s,o,i,a,"F",c,l)}function IS(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Qr(e.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Qr(e.unaryFilter.field);return Be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(e.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qr(e.unaryFilter.field);return Be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Be.create(Qr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(n=>Gv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function kS(t){return fS[t]}function SS(t){return dS[t]}function AS(t){return mS[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return ot.fromServerFormat(t.fieldPath)}function Yv(t){return t instanceof Be?function(e){if(e.op==="=="){if(dm(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NAN"}};if(fm(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dm(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NOT_NAN"}};if(fm(e.value))return{unaryFilter:{field:Xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(e.field),op:SS(e.op),value:e.value}}}(t):t instanceof Wt?function(e){const n=e.getFilters().map(r=>Yv(r));return n.length===1?n[0]:{compositeFilter:{op:AS(e.op),filters:n}}}(t):G()}function CS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Lv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>wm(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>wm(n,r))}}class Hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=cS;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r,s,i=J.min(),o=J.min(),a=dt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.oe=e}}function NS(t){const e=TS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.Ze=new DS}addToCollectionParentIndex(e,n){return this.Ze.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Jn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class DS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(Ee.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Ss(0)}static Sn(){return new Ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&mi(r.mutation,s,xt.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ri();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=kn();const o=pi(),a=pi();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof or)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),mi(u.mutation,l,u.mutation.getFieldMask(),Ae.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new LS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pi();let s=new Ke((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=jv();u.forEach(f=>{if(!i.has(f)){const d=Lv(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(vr());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:Vv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let s=ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ri();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const c=function(l,u){return new co(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,st.newInvalidDocument(l)))});let o=ri();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&mi(l.mutation,c,xt.empty(),Ae.now()),Oc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return C.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:cn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:NS(r.bundledQuery),readTime:cn(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.overlays=new Ke(z.comparator),this.ss=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ce(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ss.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=vr(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=vr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}ce(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ss.get(s.largestBatchId).delete(r.key);this.ss.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RS(n,r));let i=this.ss.get(n);i===void 0&&(i=ie(),this.ss.set(n,i)),this.ss.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.rs=new qe(Ge.os),this.us=new qe(Ge.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Ge(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new z(new Ee([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.us.forEachInRange([r,s],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new z(new Ee([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ie();return this.us.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return z.comparator(e.key,n.key)||fe(e.gs,n.gs)}static cs(e,n){return fe(e.gs,n.gs)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new qe(Ge.os)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ps=this.ps.add(new Ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ts(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([r,s],o=>{const a=this.Is(o.gs);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(fe);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{r=r.add(a.gs)})}),C.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new z(i),0);let a=new qe(fe);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gs)),!0)},o),C.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const s=this.Is(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return C.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.ps.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.Rs=e,this.docs=new Ke(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Rk(xk(u),r)<=0||(s.has(u.key)||Oc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}Ps(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BS(this)}getSize(e){return C.resolve(this.size)}}class BS extends MS{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Xn.addEntry(e,s)):this.Xn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.persistence=e,this.vs=new Us(n=>Vh(n),jh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Kh,this.targetCount=0,this.Ss=Ss.Vn()}forEachTarget(e,n){return this.vs.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),C.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.xn(n),C.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Fh(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new zS(this),this.indexManager=new PS,this.remoteDocumentCache=function(r){return new jS(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new OS(n),this.$s=new FS(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $S,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new VS(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new HS(this.Cs.next());return this.referenceDelegate.Ms(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Fs(e,n){return C.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class HS extends Nk{constructor(e){super(),this.currentSequenceNumber=e}}class Wh{constructor(e){this.persistence=e,this.Bs=new Kh,this.Ls=null}static qs(e){return new Wh(e)}get Us(){if(this.Ls)return this.Ls;throw G()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),C.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(s=>this.Us.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Us.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Us,r=>{const s=z.fromPath(r);return this.Ks(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return C.or([()=>C.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=s}static Ni(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Mi(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(vm(n))return C.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bu(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,bu(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,r,s){return vm(n)||s.isEqual(J.min())?this.Fi(e,n):this.$i.getDocuments(e,r).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,r,s)?this.Fi(e,n):(cm()<=he.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wu(n)),this.qi(e,o,n,Ck(s,-1)))})}Bi(e,n){let r=new qe(Cv(e));return n.forEach((s,i)=>{Oc(e,i)&&(r=r.add(i))}),r}Li(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fi(e,n){return cm()<=he.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",wu(n)),this.$i.getDocumentsMatchingQuery(e,n,Jn.min())}qi(e,n,r,s){return this.$i.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r,s){this.persistence=e,this.Ui=n,this.Tt=s,this.Ki=new Ke(fe),this.Gi=new Us(i=>Vh(i),jh),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new US(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function GS(t,e,n,r){return new WS(t,e,n,r)}async function Qv(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function YS(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=C.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(g=>{const y=c.docVersions.get(d);be(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Jv(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function XS(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});s=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(dt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(g,y,_){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,d,u)&&a.push(n.Ns.updateTargetData(i,d))});let c=kn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(QS(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!r.isEqual(J.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=s,i))}function QS(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:s}})}function JS(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZS(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ns.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.Ns.allocateTargetId(r).next(o=>(s=new kr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ki.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Iu(t,e,n){const r=Z(t),s=r.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ao(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(s.target)}function Am(t,e,n){const r=Z(t);let s=J.min(),i=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Gi.get(l);return h!==void 0?C.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(r,o,In(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ie())).next(a=>(eA(r,Yk(e),a),{documents:a,Yi:i})))}function eA(t,e,n){let r=t.Qi.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Qi.set(e,r)}class Cm{constructor(){this.activeTargetIds=Bv()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tA{constructor(){this.Ur=new Cm,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Cm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo=null;function Tl(){return Vo===null?Vo=268435456+Math.round(2147483648*Math.random()):Vo++,"0x"+Vo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class iA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,s,i){const o=Tl(),a=this.fo(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this._o(c,s,i),this.wo(e,a,c,r).then(l=>(j("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw du("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}mo(e,n,r,s,i,o){return this.lo(e,n,r,s,i)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}fo(e,n){const r=rA[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,s){const i=Tl();return new Promise((o,a)=>{const c=new vk;c.setWithCredentials(!0),c.listenOnce(pk.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _l.NO_ERROR:const u=c.getResponseJson();j(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case _l.TIMEOUT:j(tt,`RPC '${e}' ${i} timed out`),a(new U(k.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const h=c.getStatus();if(j(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(_)>=0?_:k.UNKNOWN}(d.status);a(new U(g,d.message))}else a(new U(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{j(tt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);j(tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}yo(e,n,r){const s=Tl(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dk(),a=mk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new yk({})),this._o(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");j(tt,`Creating RPC '${e}' stream ${s}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new sA({Yr:y=>{f?j(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(h||(j(tt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),j(tt,`RPC '${e}' stream ${s} sending:`,y),u.send(y))},Zr:()=>u.close()}),g=(y,_,v)=>{y.listen(_,w=>{try{v(w)}catch(T){setTimeout(()=>{throw T},0)}})};return g(u,Uo.EventType.OPEN,()=>{f||j(tt,`RPC '${e}' stream ${s} transport opened.`)}),g(u,Uo.EventType.CLOSE,()=>{f||(f=!0,j(tt,`RPC '${e}' stream ${s} transport closed`),d.oo())}),g(u,Uo.EventType.ERROR,y=>{f||(f=!0,du(tt,`RPC '${e}' stream ${s} transport errored:`,y),d.oo(new U(k.UNAVAILABLE,"The operation could not be completed")))}),g(u,Uo.EventType.MESSAGE,y=>{var _;if(!f){const v=y.data[0];be(!!v);const w=v,T=w.error||((_=w[0])===null||_===void 0?void 0:_.error);if(T){j(tt,`RPC '${e}' stream ${s} received error:`,T);const O=T.status;let K=function(ue){const ke=$e[ue];if(ke!==void 0)return Fv(ke)}(O),te=T.message;K===void 0&&(K=k.INTERNAL,te="Unknown error status: "+O+" with message "+T.message),f=!0,d.oo(new U(K,te)),u.close()}else j(tt,`RPC '${e}' stream ${s} received:`,v),d.uo(v)}}),g(a,gk.STAT_EVENT,y=>{y.stat===om.PROXY?j(tt,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===om.NOPROXY&&j(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.ro()},0),d}}function Il(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new pS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=s,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,s,i,o,a,c){this.Ys=e,this.So=r,this.Do=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Zv(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Co===n&&this.jo(r,s)},r=>{e(()=>{const s=new U(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(s)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(s=>{r(()=>this.zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oA extends eb{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=vS(this.Tt,e),r=function(s){if(!("targetChange"in s))return J.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?cn(i.readTime):J.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Tu(this.Tt),n.addTarget=function(s,i){let o;const a=i.target;return o=yu(a)?{documents:_S(s,a)}:{query:ES(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Hv(s,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Ua(s,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=IS(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Tu(this.Tt),n.removeTarget=e,this.qo(n)}}class aA extends eb{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=wS(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.eu(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Tu(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bS(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=s,this.iu=!1}ru(){if(this.iu)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.lo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(k.UNKNOWN,s.toString())})}mo(e,n,r,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(k.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class lA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Tn(n),this.cu=!1):j("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{jr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.mu.add(4),await ho(c),c.pu.set("Unknown"),c.mu.delete(4),await Lc(c)}(this))})}),this.pu=new lA(r,s)}}async function Lc(t){if(jr(t))for(const e of t.gu)await e(!0)}async function ho(t){for(const e of t.gu)await e(!1)}function tb(t,e){const n=Z(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Qh(n)?Xh(n):Fs(n).Mo()&&Yh(n,e))}function nb(t,e){const n=Z(t),r=Fs(n);n.wu.delete(e),r.Mo()&&rb(n,e),n.wu.size===0&&(r.Mo()?r.Bo():jr(n)&&n.pu.set("Unknown"))}function Yh(t,e){t.Iu.Ot(e.targetId),Fs(t).Jo(e)}function rb(t,e){t.Iu.Ot(e),Fs(t).Yo(e)}function Xh(t){t.Iu=new hS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Fs(t).start(),t.pu.au()}function Qh(t){return jr(t)&&!Fs(t).$o()&&t.wu.size>0}function jr(t){return Z(t).mu.size===0}function sb(t){t.Iu=void 0}async function hA(t){t.wu.forEach((e,n)=>{Yh(t,e)})}async function fA(t,e){sb(t),Qh(t)?(t.pu.fu(e),Xh(t)):t.pu.set("Unknown")}async function dA(t,e,n){if(t.pu.set("Online"),e instanceof qv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(t,r)}else if(e instanceof aa?t.Iu.Qt(e):e instanceof zv?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(J.min()))try{const r=await Jv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.wu.get(c);l&&s.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.wu.get(a);if(!c)return;s.wu.set(a,c.withResumeToken(dt.EMPTY_BYTE_STRING,c.snapshotVersion)),rb(s,a);const l=new kr(c.target,a,1,c.sequenceNumber);Yh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Fa(t,r)}}async function Fa(t,e,n){if(!ao(e))throw e;t.mu.add(1),await ho(t),t.pu.set("Offline"),n||(n=()=>Jv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Lc(t)})}function ib(t,e){return e().catch(n=>Fa(t,n,e))}async function Uc(t){const e=Z(t),n=er(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;mA(e);)try{const s=await JS(e.localStore,r);if(s===null){e._u.length===0&&n.Bo();break}r=s.batchId,pA(e,s)}catch(s){await Fa(e,s)}ob(e)&&ab(e)}function mA(t){return jr(t)&&t._u.length<10}function pA(t,e){t._u.push(e);const n=er(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function ob(t){return jr(t)&&!er(t).$o()&&t._u.length>0}function ab(t){er(t).start()}async function gA(t){er(t).su()}async function yA(t){const e=er(t);for(const n of t._u)e.tu(n.mutations)}async function vA(t,e,n){const r=t._u.shift(),s=Hh.from(r,e,n);await ib(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Uc(t)}async function bA(t,e){e&&er(t).Xo&&await async function(n,r){if(s=r.code,oS(s)&&s!==k.ABORTED){const i=n._u.shift();er(n).Fo(),await ib(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Uc(n)}var s}(t,e),ob(t)&&ab(t)}async function Rm(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.mu.add(3),await ho(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Lc(n)}async function wA(t,e){const n=Z(t);e?(n.mu.delete(2),await Lc(n)):e||(n.mu.add(2),await ho(n),n.pu.set("Unknown"))}function Fs(t){return t.Tu||(t.Tu=function(e,n,r){const s=Z(e);return s.ru(),new oA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,r)}(t.datastore,t.asyncQueue,{Xr:hA.bind(null,t),no:fA.bind(null,t),Ho:dA.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Qh(t)?Xh(t):t.pu.set("Unknown")):(await t.Tu.stop(),sb(t))})),t.Tu}function er(t){return t.Eu||(t.Eu=function(e,n,r){const s=Z(e);return s.ru(),new aA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,r)}(t.datastore,t.asyncQueue,{Xr:gA.bind(null,t),no:bA.bind(null,t),nu:yA.bind(null,t),eu:vA.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Uc(t)):(await t.Eu.stop(),t._u.length>0&&(j("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Jh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),ao(t))return new U(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=ri(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.Au=new Ke(z.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):G():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this.Pu=void 0,this.listeners=[]}}class EA{constructor(){this.queries=new Us(e=>Av(e),Rc),this.onlineState="Unknown",this.vu=new Set}}async function ef(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new _A),s)try{i.Pu=await n.onListen(r)}catch(o){const a=Zh(o,`Initialization of query '${wu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&nf(n)}async function tf(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function TA(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(s)&&(r=!0);o.Pu=s}}r&&nf(n)}function IA(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function nf(t){t.vu.forEach(e=>{e.next()})}class rf{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.key=e}}class lb{constructor(e){this.key=e}}class kA{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ie(),this.mutatedKeys=ie(),this.ju=Cv(e),this.zu=new hs(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new Om,s=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Oc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?g!==y&&(r.track({type:3,doc:d}),_=!0):this.Yu(f,d)||(r.track({type:2,doc:d}),_=!0,(c&&this.ju(d,c)>0||l&&this.ju(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{zu:o,Ju:r,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return d(h)-d(f)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new As(this.query,e.zu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Om,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ie(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new lb(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new cb(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=ie();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return As.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class SA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AA{constructor(e){this.key=e,this.ic=!1}}class CA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Us(a=>Av(a),Rc),this.uc=new Map,this.cc=new Set,this.ac=new Ke(z.comparator),this.hc=new Map,this.lc=new Kh,this.fc={},this.dc=new Map,this._c=Ss.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function xA(t,e){const n=$A(t);let r,s;const i=n.oc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.sc();else{const o=await ZS(n.localStore,In(e));n.isPrimaryClient&&tb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await RA(n,e,r,a==="current",o.resumeToken)}return s}async function RA(t,e,n,r,s){t.mc=(h,f,d)=>async function(g,y,_,v){let w=y.view.Hu(_);w.Li&&(w=await Am(g.localStore,y.query,!1).then(({documents:K})=>y.view.Hu(K,w)));const T=v&&v.targetChanges.get(y.targetId),O=y.view.applyChanges(w,g.isPrimaryClient,T);return Pm(g,y.targetId,O.tc),O.snapshot}(t,h,f,d);const i=await Am(t.localStore,e,!0),o=new kA(e,i.Yi),a=o.Hu(i.documents),c=uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Pm(t,n,l.tc);const u=new SA(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function OA(t,e){const n=Z(t),r=n.oc.get(e),s=n.uc.get(r.targetId);if(s.length>1)return n.uc.set(r.targetId,s.filter(i=>!Rc(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Iu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),nb(n.remoteStore,r.targetId),ku(n,r.targetId)}).catch(oo)):(ku(n,r.targetId),await Iu(n.localStore,r.targetId,!0))}async function NA(t,e,n){const r=VA(t);try{const s=await function(i,o){const a=Z(i),c=Ae.now(),l=o.reduce((f,d)=>f.add(d.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=kn(),g=ie();return a.ji.getEntries(f,l).next(y=>{d=y,d.forEach((_,v)=>{v.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const _=[];for(const v of o){const w=rS(v,u.get(v.key).overlayedDocument);w!=null&&_.push(new or(v.key,w,Iv(w.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Vv(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Ke(fe)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(r,s.batchId,n),await fo(r,s.changes),await Uc(r.remoteStore)}catch(s){const i=Zh(s,"Failed to persist write");n.reject(i)}}async function ub(t,e){const n=Z(t);try{const r=await XS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.hc.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ic=!0:s.modifiedDocuments.size>0?be(o.ic):s.removedDocuments.size>0&&(be(o.ic),o.ic=!1))}),await fo(n,r,e)}catch(r){await oo(r)}}function Nm(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&nf(a)}(r.eventManager,e),s.length&&r.rc.Ho(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PA(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.hc.get(e),i=s&&s.key;if(i){let o=new Ke(z.comparator);o=o.insert(i,st.newNoDocument(i,J.min()));const a=ie().add(i),c=new Dc(J.min(),new Map,new qe(fe),o,a);await ub(r,c),r.ac=r.ac.remove(i),r.hc.delete(e),sf(r)}else await Iu(r.localStore,e,!1).then(()=>ku(r,e,n)).catch(oo)}async function DA(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await YS(n.localStore,e);fb(n,r,null),hb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fo(n,s)}catch(s){await oo(s)}}async function MA(t,e,n){const r=Z(t);try{const s=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(be(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);fb(r,e,n),hb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fo(r,s)}catch(s){await oo(s)}}function hb(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function fb(t,e,n){const r=Z(t);let s=r.fc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fc[r.currentUser.toKey()]=s}}function ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||db(t,r)})}function db(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(nb(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),sf(t))}function Pm(t,e,n){for(const r of n)r instanceof cb?(t.lc.addReference(r.key,e),LA(t,r)):r instanceof lb?(j("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||db(t,r.key)):G()}function LA(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.cc.add(r),sf(t))}function sf(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new z(Ee.fromString(e)),r=t._c.next();t.hc.set(r,new AA(n)),t.ac=t.ac.insert(n,r),tb(t.remoteStore,new kr(In(xc(n.path)),r,2,Fh.at))}}async function fo(t,e,n){const r=Z(t),s=[],i=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,c)=>{o.push(r.mc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Gh.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.rc.Ho(s),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Ci,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.xi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ao(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ki.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);l.Ki=l.Ki.insert(h,g)}}}(r.localStore,i))}async function UA(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Qv(n.localStore,e);n.currentUser=e,function(s,i){s.dc.forEach(o=>{o.forEach(a=>{a.reject(new U(k.CANCELLED,i))})}),s.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fo(n,r.Wi)}}function FA(t,e){const n=Z(t),r=n.hc.get(e);if(r&&r.ic)return ie().add(r.key);{let s=ie();const i=n.uc.get(e);if(!i)return s;for(const o of i){const a=n.oc.get(o);s=s.unionWith(a.view.Wu)}return s}}function $A(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ub.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PA.bind(null,e),e.rc.Ho=TA.bind(null,e.eventManager),e.rc.gc=IA.bind(null,e.eventManager),e}function VA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MA.bind(null,e),e}class jA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return GS(this.persistence,new KS,e.initialUser,this.Tt)}Tc(e){return new qS(Wh.qs,this.Tt)}Ic(e){return new tA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UA.bind(null,this.syncEngine),await wA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new EA}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new iA(s));var s;return function(i,o,a,c){return new cA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Nm(this.syncEngine,a,0),o=xm.C()?new xm:new nA,new uA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new CA(r,s,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);j("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await ho(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=mv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qA(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function HA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KA(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Rm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Rm(e.remoteStore,i)),t.onlineComponents=e}async function KA(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await qA(t,new jA)),t.offlineComponents}async function mb(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await HA(t,new BA)),t.onlineComponents}function WA(t){return mb(t).then(e=>e.syncEngine)}async function $a(t){const e=await mb(t),n=e.eventManager;return n.onListen=xA.bind(null,e.syncEngine),n.onUnlisten=OA.bind(null,e.syncEngine),n}function GA(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new of({next:h=>{i.enqueueAndForget(()=>tf(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new U(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new U(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new rf(xc(o.path),l,{includeMetadataChanges:!0,$u:!0});return ef(s,u)}(await $a(t),t.asyncQueue,e,n,r)),r.promise}function YA(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new of({next:h=>{i.enqueueAndForget(()=>tf(s,u)),h.fromCache&&a.source==="server"?c.reject(new U(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new rf(o,l,{includeMetadataChanges:!0,$u:!0});return ef(s,u)}(await $a(t),t.asyncQueue,e,n,r)),r.promise}const Dm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t,e,n){if(!n)throw new U(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XA(t,e,n,r){if(e===!0&&r===!0)throw new U(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mm(t){if(!z.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(z.isDocumentKey(t))throw new U(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fc(t);throw new U(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,XA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Um({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Um(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bk;switch(n.type){case"gapi":const r=n.client;return new Tk(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Dm.get(e);n&&(j("ComponentProvider","Removing Datastore"),Dm.delete(e),n.terminate())}(this),Promise.resolve()}}function QA(t,e,n,r={}){var s;const i=(t=St(t,$c))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&du("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rt.MOCK_USER;else{o=iy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rt(c)}t._authCredentials=new wk(new dv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Yn extends Br{constructor(e,n,r){super(e,n,xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new z(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function Fm(t,e,...n){if(t=Pe(t),pb("collection","path",e),t instanceof $c){const r=Ee.fromString(e,...n);return Lm(r),new Yn(t,null,r)}{if(!(t instanceof ht||t instanceof Yn))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Lm(r),new Yn(t.firestore,null,r)}}function gt(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=mv.R()),pb("doc","path",e),t instanceof $c){const r=Ee.fromString(e,...n);return Mm(r),new ht(t,null,new z(r))}{if(!(t instanceof ht||t instanceof Yn))throw new U(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Mm(r),new ht(t.firestore,t instanceof Yn?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Zv(this,"async_queue_retry"),this.Hc=()=>{const n=Il();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Il();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new bn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ao(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const s=Jh.createAndSchedule(this,e,n,r,i=>this.Xc(i));return this.Gc.push(s),s}Jc(){this.Qc&&G()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function $m(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Sn extends $c{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new JA,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gb(this),this._firestoreClient.terminate()}}function ZA(t,e){const n=typeof t=="object"?t:ph(),r=typeof t=="string"?t:e||"(default)",s=fc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ry("firestore");i&&QA(s,...i)}return s}function Vc(t){return t._firestoreClient||gb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gb(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Pk(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(dt.fromBase64String(e))}catch(n){throw new U(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=/^__.*__$/;class tC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}class yb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Bc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.oa({path:r,ca:!1});return s.aa(e),s}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.oa({path:r,ca:!1});return s.ia(),s}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Va(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(vb(this.ra)&&eC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class nC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Mc(e)}wa(e,n,r,s=!1){return new Bc({ra:e,methodName:n,_a:r,path:ot.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function zc(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new nC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bb(t,e,n,r,s,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,s);lf("Data must be an object, but it was:",o,r);const a=wb(r,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Su(e,h,n);if(!o.contains(f))throw new U(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Eb(u,f)||u.push(f)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new tC(new kt(a),c,l)}class po extends mo{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof po}}function rC(t,e,n){return new Bc({ra:3,_a:e.settings._a,methodName:t._methodName,ca:n},e.databaseId,e.Tt,e.ignoreUndefinedProperties)}class cf extends mo{_toFieldTransform(e){return new Mv(e.path,new Fi)}isEqual(e){return e instanceof cf}}class sC extends mo{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=rC(this,e,!0),r=this.ma.map(i=>$s(i,n)),s=new ks(r);return new Mv(e.path,s)}isEqual(e){return this===e}}function iC(t,e,n,r){const s=t.wa(1,e,n);lf("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Vr(r,(c,l)=>{const u=uf(e,c,n);l=Pe(l);const h=s.ha(u);if(l instanceof po)i.push(u);else{const f=$s(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new xt(i);return new yb(o,a,s.fieldTransforms)}function oC(t,e,n,r,s,i){const o=t.wa(1,e,n),a=[Su(e,r,n)],c=[s];if(i.length%2!=0)throw new U(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Su(e,i[f])),c.push(i[f+1]);const l=[],u=kt.empty();for(let f=a.length-1;f>=0;--f)if(!Eb(l,a[f])){const d=a[f];let g=c[f];g=Pe(g);const y=o.ha(d);if(g instanceof po)l.push(d);else{const _=$s(g,y);_!=null&&(l.push(d),u.set(d,_))}}const h=new xt(l);return new yb(u,h,o.fieldTransforms)}function aC(t,e,n,r=!1){return $s(n,t.wa(r?4:3,e))}function $s(t,e){if(_b(t=Pe(t)))return lf("Unsupported field value:",e,t),wb(t,e);if(t instanceof mo)return function(n,r){if(!vb(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=$s(o,r.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qk(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ae.fromDate(n);return{timestampValue:Ua(r.Tt,s)}}if(n instanceof Ae){const s=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ua(r.Tt,s)}}if(n instanceof af)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cs)return{bytesValue:Hv(r.Tt,n._byteString)};if(n instanceof ht){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${Fc(n)}`)}(t,e)}function wb(t,e){const n={};return pv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=$s(s,e.ua(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _b(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof af||t instanceof Cs||t instanceof ht||t instanceof mo)}function lf(t,e,n){if(!_b(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fc(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function Su(t,e,n){if((e=Pe(e))instanceof jc)return e._internalPath;if(typeof e=="string")return uf(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const cC=new RegExp("[~\\*/\\[\\]]");function uf(t,e,n){if(e.search(cC)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jc(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(k.INVALID_ARGUMENT,a+t+c)}function Eb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lC extends Tb{data(){return super.data()}}function hf(t,e){return typeof e=="string"?uf(t,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ff{}class uC extends ff{}function hC(t,e,...n){let r=[];e instanceof ff&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof df).length,o=s.filter(a=>a instanceof qc).length;if(i>1||i>0&&o>0)throw new U(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class qc extends uC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return kb(e._query,n),new Br(e.firestore,e.converter,vu(e._query,n))}_parse(e){const n=zc(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){jm(u,l);const f=[];for(const d of u)f.push(Vm(a,s,d));h={arrayValue:{values:f}}}else h=Vm(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||jm(u,l),h=aC(o,i,u,l==="in"||l==="not-in");return Be.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fC(t,e,n){const r=e,s=hf("where",t);return qc._create(s,r,n)}class df extends ff{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new df(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)kb(i,a),i=vu(i,a)}(e._query,n),new Br(e.firestore,e.converter,vu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vm(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new U(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sv(e)&&n.indexOf("/")!==-1)throw new U(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!z.isDocumentKey(r))throw new U(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hm(t,new z(r))}if(n instanceof ht)return hm(t,n._key);throw new U(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fc(n)}.`)}function jm(t,e){if(!Array.isArray(t)||t.length===0)throw new U(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kb(t,e){if(e.isInequality()){const r=Bh(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new U(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=kv(t);i!==null&&dC(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dC(t,e,n){if(!n.isEqual(e))throw new U(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class mC{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Vr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new af(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);be(Xv(r));const s=new Mi(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ab extends Tb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ca extends Ab{data(e={}){return super.data(e)}}class Cb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new ca(r._firestore,r._userDataWriter,o.doc.key,o.doc,new si(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ca(r._firestore,r._userDataWriter,o.doc.key,o.doc,new si(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:pC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){t=St(t,ht);const e=St(t.firestore,Sn);return GA(Vc(e),t._key).then(n=>Rb(e,t,n))}class mf extends mC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function gC(t){t=St(t,Br);const e=St(t.firestore,Sn),n=Vc(e),r=new mf(e);return Ib(t._query),YA(n,t._query).then(s=>new Cb(e,r,t,s))}function Au(t,e,n){t=St(t,ht);const r=St(t.firestore,Sn),s=Sb(t.converter,e,n);return Hc(r,[bb(zc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function br(t,e,n,...r){t=St(t,ht);const s=St(t.firestore,Sn),i=zc(s);let o;return o=typeof(e=Pe(e))=="string"||e instanceof jc?oC(i,"updateDoc",t._key,e,n,r):iC(i,"updateDoc",t._key,e),Hc(s,[o.toMutation(t._key,Dt.exists(!0))])}function yC(t){return Hc(St(t.firestore,Sn),[new zh(t._key,Dt.none())])}function vC(t,e){const n=St(t.firestore,Sn),r=gt(t),s=Sb(t.converter,e);return Hc(n,[bb(zc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function bC(t,...e){var n,r,s;t=Pe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$m(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($m(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ht)l=St(t.firestore,Sn),u=xc(t._key.path),c={next:h=>{e[o]&&e[o](Rb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=St(t,Br);l=St(h.firestore,Sn),u=h._query;const f=new mf(l);c={next:d=>{e[o]&&e[o](new Cb(l,f,h,d))},error:e[o+1],complete:e[o+2]},Ib(t._query)}return function(h,f,d,g){const y=new of(g),_=new rf(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>ef(await $a(h),_)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>tf(await $a(h),_))}}(Vc(l),u,a,c)}function Hc(t,e){return function(n,r){const s=new bn;return n.asyncQueue.enqueueAndForget(async()=>NA(await WA(n),r,s)),s.promise}(Vc(t),e)}function Rb(t,e,n){const r=n.docs.get(e._key),s=new mf(t);return new Ab(t,s,e._key,r,new si(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return new po("deleteField")}function zm(){return new cf("serverTimestamp")}function wC(...t){return new sC("arrayUnion",t)}(function(t,e=!0){(function(n){Ls=n})(Ps),Rr(new Qn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Sn(new _k(n.getProvider("auth-internal")),new kk(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),an(am,"3.9.0",t),an(am,"3.9.0","esm2017")})();function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ob(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=Ob,Nb=new Yi("auth","Firebase",Ob());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new dh("@firebase/auth");function la(t,...e){qm.logLevel<=he.ERROR&&qm.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw gf(t,...e)}function ln(t,...e){return gf(t,...e)}function EC(t,e,n){const r=Object.assign(Object.assign({},_C()),{[e]:n});return new Yi("auth","Firebase",r).create(e,{appName:t.name})}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nb.create(t,...e)}function W(t,e,...n){if(!t)throw gf(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw la(e),new Error(e)}function An(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Map;function vn(t){An(t instanceof Function,"Expected a class definition");let e=Hm.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){const n=fc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ia(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kC(){return Km()==="http:"||Km()==="https:"}function Km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kC()||J1()||"connection"in navigator)?navigator.onLine:!0}function AC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=X1()||Z1()}get(){return SC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new go(3e4,6e4);function yo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vs(t,e,n,r,s={}){return Db(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pb.fetch()(Mb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Db(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CC),e);try{const s=new RC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw EC(t,u,l);Gt(t,u)}}catch(s){if(s instanceof dn)throw s;Gt(t,"internal-error",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await Vs(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mb(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,s):`${t.config.apiScheme}://${s}`}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),xC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){return Vs(t,"POST","/v1/accounts:delete",e)}async function NC(t,e){return Vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PC(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),s=vf(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gi(kl(s.auth_time)),issuedAtTime:gi(kl(s.iat)),expirationTime:gi(kl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kl(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return la("JWT malformed, contained fewer than 3 sections"),null;try{const s=ty(n);return s?JSON.parse(s):(la("Failed to decode base64 JWT payload"),null)}catch(s){return la("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function DC(t){const e=vf(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&MC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xs(t,NC(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$C(i.providerUserInfo):[],a=FC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Lb(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UC(t){const e=Pe(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $C(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){const n=await Db(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Mb(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lb(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PC(this,e)}reload(){return UC(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xs(this,OC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:O,isAnonymous:K,providerData:te,stsTokenManager:ue}=n;W(T&&ue,e,"internal-error");const ke=Vi.fromJSON(this.name,ue);W(typeof T=="string",e,"internal-error"),Ln(h,e.name),Ln(f,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof K=="boolean",e,"internal-error"),Ln(d,e.name),Ln(g,e.name),Ln(y,e.name),Ln(_,e.name),Ln(v,e.name),Ln(w,e.name);const xe=new Sr({uid:T,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:K,photoURL:g,phoneNumber:d,tenantId:y,stsTokenManager:ke,createdAt:v,lastLoginAt:w});return te&&Array.isArray(te)&&(xe.providerData=te.map(wt=>Object.assign({},wt))),_&&(xe._redirectEventId=_),xe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vi;s.updateFromServerResponse(n);const i=new Sr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ja(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ub.type="NONE";const Wm=Ub;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ua(this.userKey,s.apiKey,i),this.fullPersistenceKey=ua("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(vn(Wm),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||vn(Wm);const o=ua(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Sr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bb(e))return"Blackberry";if(zb(e))return"Webos";if(bf(e))return"Safari";if((e.includes("chrome/")||$b(e))&&!e.includes("edge/"))return"Chrome";if(jb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fb(t=ft()){return/firefox\//i.test(t)}function bf(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $b(t=ft()){return/crios\//i.test(t)}function Vb(t=ft()){return/iemobile/i.test(t)}function jb(t=ft()){return/android/i.test(t)}function Bb(t=ft()){return/blackberry/i.test(t)}function zb(t=ft()){return/webos/i.test(t)}function Kc(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jC(t=ft()){var e;return Kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return eT()&&document.documentMode===10}function qb(t=ft()){return Kc(t)||jb(t)||zb(t)||Bb(t)||/windows phone/i.test(t)||Vb(t)}function zC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t,e=[]){let n;switch(t){case"Browser":n=Gm(ft());break;case"Worker":n=`${Gm(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new qC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bo(t){return Pe(t)}class Ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=aT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function KC(t,e,n){const r=bo(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Kb(e),{host:o,port:a}=WC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||GC()}function Kb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WC(t){const e=Kb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xm(o)}}}function Xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function YC(t,e){return Vs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",yo(t,e))}async function JC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends wf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return XC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QC(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return YC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JC(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="http://localhost";class Pr extends wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=pf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:ZC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tx(t){const e=Zs(ei(t)).link,n=e?Zs(ei(e)).deep_link_id:null,r=Zs(ei(t)).deep_link_id;return(r?Zs(ei(r)).link:null)||r||n||e||t}class _f{constructor(e){var n,r,s,i,o,a;const c=Zs(ei(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ex((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tx(e);try{return new _f(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_f.parseLink(n);return W(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Wb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends wo{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends wo{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends wo{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t,e){return vo(t,"POST","/v1/accounts:signUp",yo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Sr._fromIdTokenResponse(e,r,s),o=Qm(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qm(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ba(e,n,r,s)}}function Gb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ba._fromErrorAndOperation(t,i,e,r):i})}async function rx(t,e,n=!1){const r=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xs(t,Gb(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=vf(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e,n=!1){const r="signIn",s=await Gb(t,r,e),i=await Dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ix(t,e){return Yb(bo(t),e)}async function ox(t,e,n){const r=bo(t),s=await nx(r,{returnSecureToken:!0,email:e,password:n}),i=await Dr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function ax(t,e,n){return ix(Pe(t),js.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){return Vs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await xs(r,cx(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ux(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function hx(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function UM(t){return Pe(t).signOut()}const za="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(za,"1"),this.storage.removeItem(za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(){const t=ft();return bf(t)||Kc(t)}const dx=1e3,mx=10;class Qb extends Xb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fx()&&zC(),this.fallbackToPolling=qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qb.type="LOCAL";const px=Qb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb extends Xb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jb.type="SESSION";const Zb=Jb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await gx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ef("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function vx(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _x(){return ew()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebaseLocalStorageDb",Ex=1,qa="firebaseLocalStorage",nw="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gc(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function Tx(){const t=indexedDB.deleteDatabase(tw);return new _o(t).toPromise()}function xu(){const t=indexedDB.open(tw,Ex);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qa,{keyPath:nw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qa)?e(r):(r.close(),await Tx(),e(await xu()))})})}async function Jm(t,e,n){const r=Gc(t,!0).put({[nw]:e,value:n});return new _o(r).toPromise()}async function Ix(t,e){const n=Gc(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Zm(t,e){const n=Gc(t,!0).delete(e);return new _o(n).toPromise()}const kx=800,Sx=3;class rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(_x()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bx(),!this.activeServiceWorker)return;this.sender=new yx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xu();return await Jm(e,za,"1"),await Zm(e,za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ix(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gc(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rw.type="LOCAL";const Ax=rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Cx().appendChild(r)})}function Rx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e){return e?vn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nx(t){return Yb(t.auth,new Tf(t),t.bypassAuthState)}function Px(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),sx(n,new Tf(t),t.bypassAuthState)}async function Dx(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),rx(n,new Tf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nx;case"linkViaPopup":case"linkViaRedirect":return Dx;case"reauthViaPopup":case"reauthViaRedirect":return Px;default:Gt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=new go(2e3,1e4);class ts extends sw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mx.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx="pendingRedirect",ha=new Map;class Ux extends sw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await Fx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fx(t,e){const n=jx(e),r=Vx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $x(t,e){ha.set(t._key(),e)}function Vx(t){return vn(t._redirectPersistence)}function jx(t){return ua(Lx,t.config.apiKey,t.name)}async function Bx(t,e,n=!1){const r=bo(t),s=Ox(r,e),o=await new Ux(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=10*60*1e3;class qx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zx&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e={}){return Vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gx=/^https?/;async function Yx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kx(t);for(const n of e)try{if(Xx(n))return}catch{}Gt(t,"unauthorized-domain")}function Xx(t){const e=Cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gx.test(n))return!1;if(Wx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new go(3e4,6e4);function tp(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jx(t){return new Promise((e,n)=>{var r,s,i;function o(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(ln(t,"network-request-failed"))},timeout:Qx.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const a=Rx("iframefcb");return un()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},xx(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fa=null,e})}let fa=null;function Zx(t){return fa=fa||Jx(t),fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new go(5e3,15e3),tR="__/auth/iframe",nR="emulator/auth/iframe",rR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iR(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,nR):`https://${t.config.authDomain}/${tR}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=sR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function oR(t){const e=await Zx(t),n=un().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:iR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=un().setTimeout(()=>{i(o)},eR.get());function c(){un().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,lR=600,uR="_blank",hR="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fR(t,e,n,r=cR,s=lR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},aR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ft().toLowerCase();n&&(a=$b(l)?uR:n),Fb(l)&&(e=e||hR,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(jC(l)&&a!=="_self")return dR(e||"",a),new np(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new np(h)}function dR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="__/auth/handler",pR="emulator/auth/handler";function rp(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof Wb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof wo){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${gR(t)}?${Xi(a).slice(1)}`}function gR({config:t}){return t.emulator?yf(t,pR):`https://${t.authDomain}/${mR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="webStorageSupport";class yR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zb,this._completeRedirectFn=Bx,this._overrideRedirectResult=$x}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rp(e,n,r,Cu(),s);return fR(e,o,Ef())}async _openRedirect(e,n,r,s){return await this._originValidation(e),vx(rp(e,n,r,Cu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oR(e),r=new qx(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sl,{type:Sl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sl];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qb()||bf()||Kc()}}const vR=yR;var sp="@firebase/auth",ip="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _R(t){Rr(new Qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{W(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hb(t)},u=new HC(a,c,l);return IC(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rr(new Qn("auth-internal",e=>{const n=bo(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(sp,ip,wR(t)),an(sp,ip,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=5*60,TR=sy("authIdTokenMaxAge")||ER;let op=null;const IR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TR)return;const s=n==null?void 0:n.token;op!==s&&(op=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kR(t=ph()){const e=fc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TC(t,{popupRedirectResolver:vR,persistence:[Ax,px,Zb]}),r=sy("authTokenSyncURL");if(r){const i=IR(r);hx(n,i,()=>i(n.currentUser)),ux(n,o=>i(o))}const s=ny("auth");return s&&KC(n,`http://${s}`),n}_R("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebasestorage.googleapis.com",aw="storageBucket",SR=2*60*1e3,AR=10*60*1e3,CR=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends dn{constructor(e,n,r=0){super(Al(e),`Firebase Storage: ${n} (${Al(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Al(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Al(t){return"storage/"+t}function If(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Ie.UNKNOWN,t)}function xR(t){return new De(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RR(t){return new De(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Ie.UNAUTHENTICATED,t)}function NR(){return new De(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PR(t){return new De(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function cw(){return new De(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lw(){return new De(Ie.CANCELED,"User canceled the upload/download.")}function DR(t){return new De(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function MR(t){return new De(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LR(){return new De(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+aw+"' property when initializing the app?")}function uw(){return new De(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UR(){return new De(Ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function FR(){return new De(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $R(t){return new De(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ru(t){return new De(Ie.INVALID_ARGUMENT,t)}function hw(){return new De(Ie.APP_DELETED,"The Firebase app was deleted.")}function VR(t){return new De(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yi(t,e){return new De(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ys(t){throw new De(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw MR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},y=n===ow?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",v=new RegExp(`^https?://${y}/${s}/${_}`,"i"),T=[{regex:a,indices:c,postModify:i},{regex:d,indices:g,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<T.length;O++){const K=T[O],te=K.regex.exec(e);if(te){const ue=te[K.indices.bucket];let ke=te[K.indices.path];ke||(ke=""),r=new Rt(ue,ke),K.postModify(r);break}}if(r==null)throw DR(e);return r}}class jR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(d,c())},_)}function f(){i&&clearTimeout(i)}function d(_,...v){if(l){f();return}if(_){f(),u.call(null,_,...v);return}if(c()||o){f(),u.call(null,_,...v);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,h(T)}let g=!1;function y(_){g||(g=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function zR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){return t!==void 0}function HR(t){return typeof t=="function"}function KR(t){return typeof t=="object"&&!Array.isArray(t)}function Yc(t){return typeof t=="string"||t instanceof String}function ap(t){return kf()&&t instanceof Blob}function kf(){return typeof Blob<"u"&&!Q1()}function cp(t,e,n,r){if(r<e)throw Ru(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ru(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function fw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ar||(Ar={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ar.NO_ERROR,c=i.getStatus();if(!a||dw(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ar.ABORT;r(!1,new Bo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Bo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qR(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=If();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?hw():lw();o(c)}else{const c=cw();o(c)}};this.canceled_?n(!1,new Bo(!1,null,!0)):this.backoffId_=BR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function GR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JR(t,e,n,r,s,i,o=!0){const a=fw(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return XR(l,e),GR(l,n),YR(l,i),QR(l,r),new WR(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eO(...t){const e=ZR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kf())return new Blob(t);throw new De(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){if(typeof atob>"u")throw $R("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cl{constructor(e,n){this.data=e,this.contentType=n||null}}function rO(t,e){switch(t){case sn.RAW:return new Cl(mw(e));case sn.BASE64:case sn.BASE64URL:return new Cl(pw(t,e));case sn.DATA_URL:return new Cl(iO(e),oO(e))}throw If()}function mw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sO(t){let e;try{e=decodeURIComponent(t)}catch{throw yi(sn.DATA_URL,"Malformed data URL.")}return mw(e)}function pw(t,e){switch(t){case sn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw yi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw yi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nO(e)}catch(s){throw s.message.includes("polyfill")?s:yi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class gw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw yi(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=aO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function iO(t){const e=new gw(t);return e.base64?pw(sn.BASE64,e.rest):sO(e.rest)}function oO(t){return new gw(t).contentType}function aO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){let r=0,s="";ap(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ap(this.data_)){const r=this.data_,s=tO(r,e,n);return s===null?null:new qn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qn(r,!0)}}static getBlob(...e){if(kf()){const n=e.map(r=>r instanceof qn?r.data_:r);return new qn(eO.apply(null,n))}else{const n=e.map(o=>Yc(o)?rO(sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new qn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){let e;try{e=JSON.parse(t)}catch{return null}return KR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function vw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e){return e}class mt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||uO}}let zo=null;function hO(t){return!Yc(t)||t.length<2?t:vw(t)}function bw(){if(zo)return zo;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(i,o){return hO(o)}const n=new mt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new mt("size");return s.xform=r,t.push(s),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),zo=t,zo}function fO(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function dO(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return fO(r,t),r}function ww(t,e,n){const r=yw(e);return r===null?null:dO(t,r,n)}function mO(t,e,n,r){const s=yw(e);if(s===null||!Yc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=Eo(f,n,r),g=fw({alt:"media",token:l});return d+g})[0]}function _w(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Bs{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){if(!t)throw If()}function Sf(t,e){function n(r,s){const i=ww(t,s,e);return wn(i!==null),i}return n}function pO(t,e){function n(r,s){const i=ww(t,s,e);return wn(i!==null),mO(i,s,t.host,t._protocol)}return n}function To(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=NR():s=OR():n.getStatus()===402?s=RR(t.bucket):n.getStatus()===403?s=PR(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ew(t){const e=To(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=xR(t.path)),i.serverResponse=s.serverResponse,i}return n}function gO(t,e,n){const r=e.fullServerUrl(),s=Eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Bs(s,i,Sf(t,n),o);return a.errorHandler=Ew(e),a}function yO(t,e,n){const r=e.fullServerUrl(),s=Eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Bs(s,i,pO(t,n),o);return a.errorHandler=Ew(e),a}function vO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Tw(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vO(null,e)),r}function bO(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let O=0;O<2;O++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Tw(e,r,s),u=_w(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",d=qn.getBlob(h,r,f);if(d===null)throw uw();const g={name:l.fullPath},y=Eo(i,t.host,t._protocol),_="POST",v=t.maxUploadRetryTime,w=new Bs(y,_,Sf(t,n),v);return w.urlParams=g,w.headers=o,w.body=d.uploadData(),w.errorHandler=To(e),w}class Ha{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Af(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wn(!1)}return wn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function wO(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Tw(e,r,s),a={name:o.fullPath},c=Eo(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=_w(o,n),f=t.maxUploadRetryTime;function d(y){Af(y);let _;try{_=y.getResponseHeader("X-Goog-Upload-URL")}catch{wn(!1)}return wn(Yc(_)),_}const g=new Bs(c,l,d,f);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=To(e),g}function _O(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=Af(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wn(!1)}h||wn(!1);const f=Number(h);return wn(!isNaN(f)),new Ha(f,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Bs(n,o,i,a);return c.headers=s,c.errorHandler=To(e),c}const lp=256*1024;function EO(t,e,n,r,s,i,o,a){const c=new Ha(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw UR();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const h=c.current,f=h+u;let d="";u===0?d="finalize":l===u?d="upload, finalize":d="upload";const g={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,f);if(y===null)throw uw();function _(O,K){const te=Af(O,["active","final"]),ue=c.current+u,ke=r.size();let xe;return te==="final"?xe=Sf(e,i)(O,K):xe=null,new Ha(ue,ke,te==="final",xe)}const v="POST",w=e.maxUploadRetryTime,T=new Bs(n,v,_,w);return T.headers=g,T.body=y.uploadData(),T.progressCallback=a||null,T.errorHandler=To(t),T}const It={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function xl(t){switch(t){case"running":case"pausing":case"canceling":return It.RUNNING;case"paused":return It.PAUSED;case"success":return It.SUCCESS;case"canceled":return It.CANCELED;case"error":return It.ERROR;default:return It.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n,r){if(HR(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class IO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ys("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kO extends IO{initXhr(){this.xhr_.responseType="text"}}function Jr(){return new kO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=bw(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(dw(s.status,[]))if(i)s=cw();else{this.sleepTime=Math.max(this.sleepTime*2,CR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ie.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=wO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Jr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=_O(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Jr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=lp*this._chunkMultiplier,n=new Ha(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=EO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Jr,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){lp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=gO(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Jr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=bO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Jr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=lw(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=xl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new TO(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(xl(this._state)){case It.SUCCESS:Wr(this._resolve.bind(null,this.snapshot))();break;case It.CANCELED:case It.ERROR:const n=this._reject;Wr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(xl(this._state)){case It.RUNNING:case It.PAUSED:e.next&&Wr(e.next.bind(e,this.snapshot))();break;case It.SUCCESS:e.complete&&Wr(e.complete.bind(e))();break;case It.CANCELED:case It.ERROR:e.error&&Wr(e.error.bind(e,this._error))();break;default:e.error&&Wr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Mr(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vw(this._location.path)}get storage(){return this._service}get parent(){const e=cO(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new Mr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VR(e)}}function AO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new SO(t,new qn(e),n)}function CO(t){t._throwIfRoot("getDownloadURL");const e=yO(t.storage,t._location,bw());return t.storage.makeRequestWithTokens(e,Jr).then(n=>{if(n===null)throw FR();return n})}function xO(t,e){const n=lO(t._location.path,e),r=new Rt(t._location.bucket,n);return new Mr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){return/^[A-Za-z]+:\/\//.test(t)}function OO(t,e){return new Mr(t,e)}function Iw(t,e){if(t instanceof Cf){const n=t;if(n._bucket==null)throw LR();const r=new Mr(n,n._bucket);return e!=null?Iw(r,e):r}else return e!==void 0?xO(t,e):t}function NO(t,e){if(e&&RO(e)){if(t instanceof Cf)return OO(t,e);throw Ru("To use ref(service, url), the first argument must be a Storage instance.")}else return Iw(t,e)}function up(t,e){const n=e==null?void 0:e[aw];return n==null?null:Rt.makeFromBucketSpec(n,t)}function PO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:iy(s,t.app.options.projectId))}class Cf{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ow,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SR,this._maxUploadRetryTime=AR,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=up(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=up(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new jR(hw());{const o=JR(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const hp="@firebase/storage",fp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="storage";function DO(t,e,n){return t=Pe(t),AO(t,e,n)}function MO(t){return t=Pe(t),CO(t)}function LO(t,e){return t=Pe(t),NO(t,e)}function UO(t=ph(),e){t=Pe(t);const r=fc(t,kw).getImmediate({identifier:e}),s=ry("storage");return s&&FO(r,...s),r}function FO(t,e,n,r={}){PO(t,e,n,r)}function $O(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Cf(n,r,s,e,Ps)}function VO(){Rr(new Qn(kw,$O,"PUBLIC").setMultipleInstances(!0)),an(hp,fp,""),an(hp,fp,"esm2017")}VO();const jO={apiKey:"AIzaSyAWjyB5pINtrtT-4GP7uKfM6uQUqx_v5Rc",authDomain:"live-chat-7197d.firebaseapp.com",projectId:"live-chat-7197d",storageBucket:"live-chat-7197d.appspot.com",messagingSenderId:"442930563873",appId:"1:442930563873:web:51a1743b6dcb2f26ab0c60"},BO=cy(jO),nt=ZA(BO),Bi=kR(),zO=UO();class qO{async singUp(e,n,r,s){const i=await ox(Bi,e,n);if(!i)throw new Error("could not create new account");let o=i.user;const a=LO(zO,`${e}`);let c=DO(a,s);c.on("state_changed",l=>{const u=l.bytesTransferred/l.totalBytes*100;switch(console.log("Upload is "+u+"% done"),l.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},l=>{c.cancel(),console.log(l)},()=>{MO(c.snapshot.ref).then(async l=>{await lx(o,{displayName:r,photoURL:l}),await Au(gt(nt,"users",o.uid),{uid:o.uid,displayName:r,email:e,photoURL:l}),await Au(gt(nt,"userChats",o.uid),{})})})}async logIn(e,n){try{const r=await ax(Bi,e,n);if(!r)throw new Error("could not log in !");return{user:r.user}}catch(r){return{error:r.message}}}}const Sw=new qO,HO={class:"min-h-screen bg-main px-3 flex flex-col justify-between"},KO=se("div",{class:"w-full h-10"},[se("h1",{class:"text-secondary text-4xl drop-shadow-xl font-semibold"},"MurMurs")],-1),WO={class:"mt-20"},GO={id:"input-form",class:"flex flex-col lg:mx-auto drop-shadow-xl justify-between items-center border-2 lg:w-2/4 relative border-secondary rounded-[15px]"},YO={class:"border-2 shadow-inner -mt-20 border-secondary hover:bg-slate-200 flex justify-center items-center h-36 w-36 rounded-full bg-main overflow-hidden"},XO=["src"],QO={class:"space-y-14 px-6 mt-5"},JO={class:"h-14 lg:h-18 w-full flex items-center justify-center p-2 mt-10 rounded-b-[13px] bg-secondary"},ZO={key:0,class:"text-main tracking-wide text-center"},eN={key:1,class:"text-red-500 tracking-wide text-center"},tN=se("p",{class:"text-md text-neutral-900 cursor-pointer"},"Already have an account ? log in",-1),nN=[tN],rN=Yt({__name:"signup",emits:["toggleFormAction"],setup(t,{emit:e}){let n=yt(""),r=yt(""),s=yt(""),i=yt(null),o=yt(""),a=yt("");const c=Jg(),l=f=>{f.preventDefault(),i.value=f.target.files[0],o.value=URL.createObjectURL(f.target.files[0])},u=async()=>{if(!n.value.trim()||!r.value.trim()||!s.value.trim()||!o.value)return a.value="You need to add all informations";try{await Sw.singUp(r.value,s.value,n.value,i.value)}catch(f){a.value=f.message}c.push({name:"userroom"})},h=()=>{e("toggleFormAction")};return(f,d)=>{const g=Cg("font-awesome-icon");return ze(),at("section",HO,[KO,se("div",WO,[se("form",GO,[se("label",YO,[ge(o)?(ze(),at("img",{key:0,class:"w-36 h-36",src:ge(o),alt:"profile-photo"},null,8,XO)):(ze(),lh(g,{key:1,icon:"fa-regular fa-file-image",class:"text-4xl text-secondary"})),se("input",{onChange:d[0]||(d[0]=y=>l(y)),type:"file",accept:".jpg,.jpeg,.png",hidden:""},null,32)]),se("div",QO,[cs(se("input",{"onUpdate:modelValue":d[1]||(d[1]=y=>Ne(n)?n.value=y:n=y),type:"text",class:"w-full py-2 outline-none placeholder:text-slate-400 placeholder:text-lg text-lg border-b-2 bg-transparent border-secondary",placeholder:"Display Name"},null,512),[[ls,ge(n)]]),cs(se("input",{"onUpdate:modelValue":d[2]||(d[2]=y=>Ne(r)?r.value=y:r=y),type:"text",class:"w-full py-2 outline-none placeholder:text-slate-400 placeholder:text-lg text-lg border-b-2 bg-transparent border-secondary",placeholder:"Email"},null,512),[[ls,ge(r)]]),cs(se("input",{"onUpdate:modelValue":d[3]||(d[3]=y=>Ne(s)?s.value=y:s=y),type:"text",class:"w-full py-2 outline-none placeholder:text-slate-400 placeholder:text-lg text-lg border-b-2 bg-transparent border-secondary",placeholder:"Password"},null,512),[[ls,ge(s)]])]),se("div",JO,[ge(a)?(ze(),at("p",eN,Zr(ge(a)),1)):(ze(),at("p",ZO,"Let's talk about our feelings with others"))])]),se("div",{class:"w-full flex justify-center mt-10"},[se("button",{onClick:u,class:"cursor-pointer drop-shadow-xl px-8 py-2 rounded-xl ring-4 ring-offset-2 ring-secondary active:bg-secondary active:text-main"},"CREATE MY ACCOUNT")])]),se("div",{onClick:h,class:"w-full text-center my-5"},nN)])}}}),sN={class:"min-h-screen bg-main px-3 flex flex-col justify-between"},iN=se("div",{class:"w-full h-10"},[se("h1",{class:"text-secondary text-4xl drop-shadow-xl font-semibold"},"MurMurs")],-1),oN={class:"mt-20"},aN={id:"input-form",class:"flex flex-col lg:mx-auto drop-shadow-xl justify-between items-center border-2 lg:w-2/4 relative border-secondary rounded-[15px]"},cN={class:"space-y-14 px-6 mt-5"},lN={class:"h-14 lg:h-18 w-full flex items-center justify-center p-2 mt-10 rounded-b-[13px] bg-secondary"},uN={key:0,class:"text-main tracking-wide text-center"},hN={key:1,class:"text-red-500 tracking-wide text-center"},fN=se("p",{class:"text-md text-neutral-900 cursor-pointer"},"You don't have an account? Create Here!",-1),dN=[fN],mN=Yt({__name:"login",emits:["toggleFormAction"],setup(t,{emit:e}){let n=yt(""),r=yt(""),s=yt();const i=Jg(),o=async()=>{if(!n.value.trim()||!r.value.trim())return s.value="Need to add all informations";let{user:c,error:l}=await Sw.logIn(n.value,r.value);if(l)return s.value=l;i.push({name:"userroom"}),s.value=""},a=()=>{e("toggleFormAction")};return(c,l)=>(ze(),at("section",sN,[iN,se("div",oN,[se("form",aN,[se("div",cN,[cs(se("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=u=>Ne(n)?n.value=u:n=u),class:"w-full py-2 outline-none placeholder:text-slate-400 placeholder:text-lg text-lg border-b-2 bg-transparent border-secondary",placeholder:"Email"},null,512),[[ls,ge(n)]]),cs(se("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=u=>Ne(r)?r.value=u:r=u),class:"w-full py-2 outline-none placeholder:text-slate-400 placeholder:text-lg text-lg border-b-2 bg-transparent border-secondary",placeholder:"Password"},null,512),[[ls,ge(r)]])]),se("div",lN,[ge(s)?(ze(),at("p",hN,Zr(ge(s)),1)):(ze(),at("p",uN,"Let's talk about our feelings with others"))])]),se("div",{class:"w-full flex justify-center mt-10"},[se("button",{onClick:o,class:"cursor-pointer drop-shadow-xl px-8 py-2 rounded-xl ring-4 ring-offset-2 ring-secondary active:bg-secondary active:text-main"},"LOG IN MY ACCOUNT")])]),se("div",{onClick:a,class:"w-full text-center my-5"},dN)]))}}),pN={key:0},gN={key:1},yN=Yt({__name:"HomeView",setup(t){let e=yt(!0);const n=()=>{e.value=!e.value};return(r,s)=>(ze(),at("div",null,[ge(e)?(ze(),at("div",pN,[Je(rN,{onToggleFormAction:n})])):(ze(),at("div",gN,[Je(mN,{onToggleFormAction:n})]))]))}});class vN{getUserInfos(){if(Bi.currentUser)return Bi.currentUser}async searchUser(e){let n=[],r=Fm(nt,"users");const s=hC(r,fC("displayName","==",e));return(await gC(s)).forEach(o=>{n.push(o.data())}),n}async sendingMessage(e,n){let r=yt();try{let s=Fm(nt,e);return{newMessage:await vC(s,n)}}catch{return r.value="could not send the messagae",{error:r.value}}}async selectUser(e){let n=this.getUserInfos(),r=n.uid>e.uid?n.uid+e.uid:e.uid+n.uid;(await xb(gt(nt,"chats",r))).exists()||(await Au(gt(nt,"chats",r),{messages:[]}),await br(gt(nt,"userChats",e.uid),{[r+".userInfos"]:{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL,lastMessage:"say hi",lastSendTime:Ae.now()},[r+".date"]:zm()}),await br(gt(nt,"userChats",n.uid),{[r+".userInfos"]:{uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,lastMessage:"say hi",lastSendTime:Ae.now()},[r+".date"]:zm()}))}async delUser(e,n){let r=e>n?e+n:n+e;await yC(gt(nt,"chats",r));const s=gt(nt,"userChats",n),i=gt(nt,"userChats",e);await br(s,{[r]:Bm()}),await br(i,{[r]:Bm()})}}const xf=new vN;let qo;const bN=new Uint8Array(16);function wN(){if(!qo&&(qo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!qo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return qo(bN)}const Xe=[];for(let t=0;t<256;++t)Xe.push((t+256).toString(16).slice(1));function _N(t,e=0){return(Xe[t[e+0]]+Xe[t[e+1]]+Xe[t[e+2]]+Xe[t[e+3]]+"-"+Xe[t[e+4]]+Xe[t[e+5]]+"-"+Xe[t[e+6]]+Xe[t[e+7]]+"-"+Xe[t[e+8]]+Xe[t[e+9]]+"-"+Xe[t[e+10]]+Xe[t[e+11]]+Xe[t[e+12]]+Xe[t[e+13]]+Xe[t[e+14]]+Xe[t[e+15]]).toLowerCase()}const EN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),dp={randomUUID:EN};function TN(t,e,n){if(dp.randomUUID&&!e&&!t)return dp.randomUUID();t=t||{};const r=t.random||(t.rng||wN)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return _N(r)}var IN={};function kN(){return IN}function Xt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function da(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?da=function(n){return typeof n}:da=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},da(t)}function ct(t){Xt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||da(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ma(t,e){Xt(2,arguments);var n=ct(t),r=ct(e),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}function SN(t,e){Xt(2,arguments);var n=ct(t),r=ct(e),s=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return s*12+i}function AN(t){Xt(1,arguments);var e=ct(t);return e.setHours(23,59,59,999),e}function CN(t){Xt(1,arguments);var e=ct(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function xN(t){Xt(1,arguments);var e=ct(t);return AN(e).getTime()===CN(e).getTime()}function RN(t,e){Xt(2,arguments);var n=ct(t),r=ct(e),s=ma(n,r),i=Math.abs(SN(n,r)),o;if(i<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*i);var a=ma(n,r)===-s;xN(ct(t))&&i===1&&ma(t,r)===1&&(a=!1),o=s*(i-Number(a))}return o===0?0:o}function ON(t,e){return Xt(2,arguments),ct(t).getTime()-ct(e).getTime()}var mp={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},NN="trunc";function PN(t){return t?mp[t]:mp[NN]}function DN(t,e,n){Xt(2,arguments);var r=ON(t,e)/1e3;return PN(n==null?void 0:n.roundingMethod)(r)}var MN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},LN=function(e,n,r){var s,i=MN[e];return typeof i=="string"?s=i:n===1?s=i.one:s=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+s:s+" ago":s};const UN=LN;function Rl(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var FN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$N={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},VN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jN={date:Rl({formats:FN,defaultWidth:"full"}),time:Rl({formats:$N,defaultWidth:"full"}),dateTime:Rl({formats:VN,defaultWidth:"full"})};const BN=jN;var zN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qN=function(e,n,r,s){return zN[e]};const HN=qN;function Xs(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",s;if(r==="formatting"&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):i;s=t.formattingValues[o]||t.formattingValues[i]}else{var a=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;s=t.values[c]||t.values[a]}var l=t.argumentCallback?t.argumentCallback(e):e;return s[l]}}var KN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},WN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},GN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},YN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},XN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},QN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},JN=function(e,n){var r=Number(e),s=r%100;if(s>20||s<10)switch(s%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ZN={ordinalNumber:JN,era:Xs({values:KN,defaultWidth:"wide"}),quarter:Xs({values:WN,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Xs({values:GN,defaultWidth:"wide"}),day:Xs({values:YN,defaultWidth:"wide"}),dayPeriod:Xs({values:XN,defaultWidth:"wide",formattingValues:QN,defaultFormattingWidth:"wide"})};const eP=ZN;function Qs(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;var o=i[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?nP(a,function(h){return h.test(o)}):tP(a,function(h){return h.test(o)}),l;l=t.valueCallback?t.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;var u=e.slice(o.length);return{value:l,rest:u}}}function tP(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function nP(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function rP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var s=r[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(s.length);return{value:o,rest:a}}}var sP=/^(\d+)(th|st|nd|rd)?/i,iP=/\d+/i,oP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},aP={any:[/^b/i,/^(a|c)/i]},cP={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},lP={any:[/1/i,/2/i,/3/i,/4/i]},uP={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hP={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fP={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dP={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},mP={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pP={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},gP={ordinalNumber:rP({matchPattern:sP,parsePattern:iP,valueCallback:function(e){return parseInt(e,10)}}),era:Qs({matchPatterns:oP,defaultMatchWidth:"wide",parsePatterns:aP,defaultParseWidth:"any"}),quarter:Qs({matchPatterns:cP,defaultMatchWidth:"wide",parsePatterns:lP,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Qs({matchPatterns:uP,defaultMatchWidth:"wide",parsePatterns:hP,defaultParseWidth:"any"}),day:Qs({matchPatterns:fP,defaultMatchWidth:"wide",parsePatterns:dP,defaultParseWidth:"any"}),dayPeriod:Qs({matchPatterns:mP,defaultMatchWidth:"any",parsePatterns:pP,defaultParseWidth:"any"})};const yP=gP;var vP={code:"en-US",formatDistance:UN,formatLong:BN,formatRelative:HN,localize:eP,match:yP,options:{weekStartsOn:0,firstWeekContainsDate:1}};const bP=vP;function Aw(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function wP(t){return Aw({},t)}function pp(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var gp=1440,_P=2520,Ol=43200,EP=86400;function TP(t,e,n){var r,s;Xt(2,arguments);var i=kN(),o=(r=(s=n==null?void 0:n.locale)!==null&&s!==void 0?s:i.locale)!==null&&r!==void 0?r:bP;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=ma(t,e);if(isNaN(a))throw new RangeError("Invalid time value");var c=Aw(wP(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:a}),l,u;a>0?(l=ct(e),u=ct(t)):(l=ct(t),u=ct(e));var h=DN(u,l),f=(pp(u)-pp(l))/1e3,d=Math.round((h-f)/60),g;if(d<2)return n!=null&&n.includeSeconds?h<5?o.formatDistance("lessThanXSeconds",5,c):h<10?o.formatDistance("lessThanXSeconds",10,c):h<20?o.formatDistance("lessThanXSeconds",20,c):h<40?o.formatDistance("halfAMinute",0,c):h<60?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",1,c):d===0?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",d,c);if(d<45)return o.formatDistance("xMinutes",d,c);if(d<90)return o.formatDistance("aboutXHours",1,c);if(d<gp){var y=Math.round(d/60);return o.formatDistance("aboutXHours",y,c)}else{if(d<_P)return o.formatDistance("xDays",1,c);if(d<Ol){var _=Math.round(d/gp);return o.formatDistance("xDays",_,c)}else if(d<EP)return g=Math.round(d/Ol),o.formatDistance("aboutXMonths",g,c)}if(g=RN(u,l),g<12){var v=Math.round(d/Ol);return o.formatDistance("xMonths",v,c)}else{var w=g%12,T=Math.floor(g/12);return w<3?o.formatDistance("aboutXYears",T,c):w<9?o.formatDistance("overXYears",T,c):o.formatDistance("almostXYears",T+1,c)}}function IP(t,e){return Xt(1,arguments),TP(t,Date.now(),e)}const kP={key:0,class:"mb-5 flex flex-col items-end"},SP={class:"text-sm text-slate-500 mb-1"},AP={class:"py-2 px-4 drop-shadow-md bg-secondary rounded-xl inline-flex"},CP={key:1,class:"mb-5 flex-col"},xP={class:"text-sm text-slate-500 mb-1"},RP={class:"py-2 px-4 drop-shadow-md bg-secondary rounded-xl inline-flex"},OP=Yt({__name:"messagebox",props:{message:{type:Object,required:!0}},setup(t){const e=t;let n=xf.getUserInfos();const{message:r}=Q_(e);let s=r.value.date.toDate(),i=IP(s);return(o,a)=>{var c;return((c=ge(n))==null?void 0:c.uid)==ge(r).senderId?(ze(),at("div",kP,[se("p",SP,Zr(ge(i)),1),se("p",AP,Zr(ge(r).text),1)])):(ze(),at("div",CP,[se("p",xP,Zr(ge(i)),1),se("p",RP,Zr(ge(r).text),1)]))}}}),NP={class:"relative min-h-screen bg-main"},PP={class:"flex w-full px-2 py-3 drop-shadow-md bg-white h-[10vh]"},DP=["onKeypress"],MP=["onKeypress"],LP=Yt({__name:"ChatRoom",setup(t){let n=M1().params.id,r=xf.getUserInfos(),s=r.uid>n?r.uid+n:n+r.uid,i=yt(""),o=yt(),a=yt([]);const c=async()=>{i.value.trim()&&(await br(gt(nt,"chats",s),{messages:wC({id:TN(),text:i.value,senderId:r.uid,date:Ae.now()})}),i.value="")};bC(gt(nt,"chats",s),h=>{let f=h.data();if(!f)return a.value=[];a.value=f.messages});const l=async()=>{let d=(await xb(gt(nt,"chats",s))).data().messages,g=d[d.length-1];g&&(await br(gt(nt,"userChats",n),{[s+".userInfos.lastMessage"]:g.text,[s+".userInfos.lastSendTime"]:Ae.now()}),await br(gt(nt,"userChats",r.uid),{[s+".userInfos.lastMessage"]:g.text,[s+".userInfos.lastSendTime"]:Ae.now()}))};function u(){o.value.scrollTop=o.value.scrollHeight}return Sg(()=>{u()}),oh(()=>{l()}),(h,f)=>{const d=Cg("font-awesome-icon");return ze(),at("section",NP,[ge(a)?(ze(),at("div",{key:0,ref_key:"msgBox",ref:o,class:"shadow-inner p-3 overflow-y-auto h-[90vh]"},[(ze(!0),at(en,null,x0(ge(a),g=>(ze(),lh(OP,{message:g},null,8,["message"]))),256))],512)):Q0("",!0),se("div",PP,[cs(se("input",{onClick:u,class:"w-full px-2 border-2 rounded-xl border-secondary outline-none",type:"text","onUpdate:modelValue":f[0]||(f[0]=g=>Ne(i)?i.value=g:i=g),onKeypress:_d(c,["enter"])},null,40,DP),[[ls,ge(i)]]),se("button",{onKeypress:_d(c,["enter"]),onClick:c,class:"border-2 flex justify-center items-center p-3 border-secondary rounded-full ml-2 active:ring-2"},[Je(d,{icon:"fa-regular fa-paper-plane",class:"text-secondary text-xl"})],40,MP)])])}}}),UP=P1({history:XE("/"),routes:[{path:"/",name:"home",component:yN},{path:"/userroom",name:"userroom",component:()=>V1(()=>import("./UserRoom-330eeadc.js"),[]),beforeEnter(t,e,n){xf.getUserInfos()?n():n({name:"home"})}},{path:"/chatroom/:id",name:"chatroom",component:LP,props:!0}]});function yp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yp(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ka(t){return Ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ka(t)}function FP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vp(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $P(t,e,n){return e&&vp(t.prototype,e),n&&vp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rf(t,e){return jP(t)||zP(t,e)||Cw(t,e)||HP()}function Io(t){return VP(t)||BP(t)||Cw(t)||qP()}function VP(t){if(Array.isArray(t))return Ou(t)}function jP(t){if(Array.isArray(t))return t}function BP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));s=!0);}catch(c){i=!0,a=c}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function Cw(t,e){if(t){if(typeof t=="string")return Ou(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ou(t,e)}}function Ou(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bp=function(){},Of={},xw={},Rw=null,Ow={mark:bp,measure:bp};try{typeof window<"u"&&(Of=window),typeof document<"u"&&(xw=document),typeof MutationObserver<"u"&&(Rw=MutationObserver),typeof performance<"u"&&(Ow=performance)}catch{}var KP=Of.navigator||{},wp=KP.userAgent,_p=wp===void 0?"":wp,tr=Of,Te=xw,Ep=Rw,Ho=Ow;tr.document;var Nn=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",Nw=~_p.indexOf("MSIE")||~_p.indexOf("Trident/"),Ko,Wo,Go,Yo,Xo,Cn="___FONT_AWESOME___",Nu=16,Pw="fa",Dw="svg-inline--fa",Lr="data-fa-i2svg",Pu="data-fa-pseudo-element",WP="data-fa-pseudo-element-pending",Nf="data-prefix",Pf="data-icon",Tp="fontawesome-i2svg",GP="async",YP=["HTML","HEAD","STYLE","SCRIPT"],Mw=function(){try{return!0}catch{return!1}}(),_e="classic",Me="sharp",Df=[_e,Me];function ko(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[_e]}})}var zi=ko((Ko={},We(Ko,_e,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),We(Ko,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ko)),qi=ko((Wo={},We(Wo,_e,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(Wo,Me,{solid:"fass",regular:"fasr",light:"fasl"}),Wo)),Hi=ko((Go={},We(Go,_e,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(Go,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Go)),XP=ko((Yo={},We(Yo,_e,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(Yo,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Yo)),QP=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Lw="fa-layers-text",JP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ZP=ko((Xo={},We(Xo,_e,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(Xo,Me,{900:"fass",400:"fasr",300:"fasl"}),Xo)),Uw=[1,2,3,4,5,6,7,8,9,10],eD=Uw.concat([11,12,13,14,15,16,17,18,19,20]),tD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ki=new Set;Object.keys(qi[_e]).map(Ki.add.bind(Ki));Object.keys(qi[Me]).map(Ki.add.bind(Ki));var nD=[].concat(Df,Io(Ki),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wr.GROUP,wr.SWAP_OPACITY,wr.PRIMARY,wr.SECONDARY]).concat(Uw.map(function(t){return"".concat(t,"x")})).concat(eD.map(function(t){return"w-".concat(t)})),vi=tr.FontAwesomeConfig||{};function rD(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Te&&typeof Te.querySelector=="function"){var iD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];iD.forEach(function(t){var e=Rf(t,2),n=e[0],r=e[1],s=sD(rD(n));s!=null&&(vi[r]=s)})}var Fw={styleDefault:"solid",familyDefault:"classic",cssPrefix:Pw,replacementClass:Dw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vi.familyPrefix&&(vi.cssPrefix=vi.familyPrefix);var Rs=L(L({},Fw),vi);Rs.autoReplaceSvg||(Rs.observeMutations=!1);var $={};Object.keys(Fw).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){Rs[t]=n,bi.forEach(function(r){return r($)})},get:function(){return Rs[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){Rs.cssPrefix=e,bi.forEach(function(n){return n($)})},get:function(){return Rs.cssPrefix}});tr.FontAwesomeConfig=$;var bi=[];function oD(t){return bi.push(t),function(){bi.splice(bi.indexOf(t),1)}}var Un=Nu,on={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aD(t){if(!(!t||!Nn)){var e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Te.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Te.head.insertBefore(e,r),t}}var cD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Wi(){for(var t=12,e="";t-- >0;)e+=cD[Math.random()*62|0];return e}function zs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mf(t){return t.classList?zs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function $w(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat($w(t[n]),'" ')},"").trim()}function Xc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Lf(t){return t.size!==on.size||t.x!==on.x||t.y!==on.y||t.rotate!==on.rotate||t.flipX||t.flipY}function uD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:l}}function hD(t){var e=t.transform,n=t.width,r=n===void 0?Nu:n,s=t.height,i=s===void 0?Nu:s,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Nw?c+="translate(".concat(e.x/Un-r/2,"em, ").concat(e.y/Un-i/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Un,"em), calc(-50% + ").concat(e.y/Un,"em)) "):c+="translate(".concat(e.x/Un,"em, ").concat(e.y/Un,"em) "),c+="scale(".concat(e.size/Un*(e.flipX?-1:1),", ").concat(e.size/Un*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var fD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Vw(){var t=Pw,e=Dw,n=$.cssPrefix,r=$.replacementClass,s=fD;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var Ip=!1;function Nl(){$.autoAddCss&&!Ip&&(aD(Vw()),Ip=!0)}var dD={mixout:function(){return{dom:{css:Vw,insertCss:Nl}}},hooks:function(){return{beforeDOMElementCreation:function(){Nl()},beforeI2svg:function(){Nl()}}}},xn=tr||{};xn[Cn]||(xn[Cn]={});xn[Cn].styles||(xn[Cn].styles={});xn[Cn].hooks||(xn[Cn].hooks={});xn[Cn].shims||(xn[Cn].shims=[]);var Bt=xn[Cn],jw=[],mD=function t(){Te.removeEventListener("DOMContentLoaded",t),Wa=1,jw.map(function(e){return e()})},Wa=!1;Nn&&(Wa=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Wa||Te.addEventListener("DOMContentLoaded",mD));function pD(t){Nn&&(Wa?setTimeout(t,0):jw.push(t))}function So(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?$w(t):"<".concat(e," ").concat(lD(r),">").concat(i.map(So).join(""),"</").concat(e,">")}function kp(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gD=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},Pl=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=s!==void 0?gD(n,s):n,c,l,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=a(u,e[l],l,e);return u};function yD(t){for(var e=[],n=0,r=t.length;n<r;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Du(t){var e=yD(t);return e.length===1?e[0].toString(16):null}function vD(t,e){var n=t.length,r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Sp(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function Mu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Sp(e);typeof Bt.hooks.addPack=="function"&&!s?Bt.hooks.addPack(t,Sp(e)):Bt.styles[t]=L(L({},Bt.styles[t]||{}),i),t==="fas"&&Mu("fa",e)}var Qo,Jo,Zo,ns=Bt.styles,bD=Bt.shims,wD=(Qo={},We(Qo,_e,Object.values(Hi[_e])),We(Qo,Me,Object.values(Hi[Me])),Qo),Uf=null,Bw={},zw={},qw={},Hw={},Kw={},_D=(Jo={},We(Jo,_e,Object.keys(zi[_e])),We(Jo,Me,Object.keys(zi[Me])),Jo);function ED(t){return~nD.indexOf(t)}function TD(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!ED(s)?s:null}var Ww=function(){var e=function(i){return Pl(ns,function(o,a,c){return o[c]=Pl(a,i,{}),o},{})};Bw=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),zw=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),Kw=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in ns||$.autoFetchSvg,r=Pl(bD,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});qw=r.names,Hw=r.unicodes,Uf=Qc($.styleDefault,{family:$.familyDefault})};oD(function(t){Uf=Qc(t.styleDefault,{family:$.familyDefault})});Ww();function Ff(t,e){return(Bw[t]||{})[e]}function ID(t,e){return(zw[t]||{})[e]}function _r(t,e){return(Kw[t]||{})[e]}function Gw(t){return qw[t]||{prefix:null,iconName:null}}function kD(t){var e=Hw[t],n=Ff("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nr(){return Uf}var $f=function(){return{prefix:null,iconName:null,rest:[]}};function Qc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?_e:n,s=zi[r][t],i=qi[r][t]||qi[r][s],o=t in Bt.styles?t:null;return i||o||null}var Ap=(Zo={},We(Zo,_e,Object.keys(Hi[_e])),We(Zo,Me,Object.keys(Hi[Me])),Zo);function Jc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(e={},We(e,_e,"".concat($.cssPrefix,"-").concat(_e)),We(e,Me,"".concat($.cssPrefix,"-").concat(Me)),e),o=null,a=_e;(t.includes(i[_e])||t.some(function(l){return Ap[_e].includes(l)}))&&(a=_e),(t.includes(i[Me])||t.some(function(l){return Ap[Me].includes(l)}))&&(a=Me);var c=t.reduce(function(l,u){var h=TD($.cssPrefix,u);if(ns[u]?(u=wD[a].includes(u)?XP[a][u]:u,o=u,l.prefix=u):_D[a].indexOf(u)>-1?(o=u,l.prefix=Qc(u,{family:a})):h?l.iconName=h:u!==$.replacementClass&&u!==i[_e]&&u!==i[Me]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var f=o==="fa"?Gw(l.iconName):{},d=_r(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!ns.far&&ns.fas&&!$.autoFetchSvg&&(l.prefix="fas")}return l},$f());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Me&&(ns.fass||$.autoFetchSvg)&&(c.prefix="fass",c.iconName=_r(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=nr()||"fas"),c}var SD=function(){function t(){FP(this,t),this.definitions={}}return $P(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),Mu(a,o[a]);var c=Hi[_e][a];c&&Mu(c,o[a]),Ww()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Cp=[],rs={},ms={},AD=Object.keys(ms);function CD(t,e){var n=e.mixoutsTo;return Cp=t,rs={},Object.keys(ms).forEach(function(r){AD.indexOf(r)===-1&&delete ms[r]}),Cp.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Ka(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){rs[o]||(rs[o]=[]),rs[o].push(i[o])})}r.provides&&r.provides(ms)}),n}function Lu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=rs[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ur(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=rs[t]||[];s.forEach(function(i){i.apply(null,n)})}function Rn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ms[t]?ms[t].apply(null,e):void 0}function Uu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||nr();if(e)return e=_r(n,e)||e,kp(Yw.definitions,n,e)||kp(Bt.styles,n,e)}var Yw=new SD,xD=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Ur("noAuto")},RD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nn?(Ur("beforeI2svg",e),Rn("pseudoElements2svg",e),Rn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,pD(function(){ND({autoReplaceSvgRoot:n}),Ur("watch",e)})}},OD={icon:function(e){if(e===null)return null;if(Ka(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Qc(e[0]);return{prefix:r,iconName:_r(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(QP))){var s=Jc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||nr(),iconName:_r(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=nr();return{prefix:i,iconName:_r(i,e)||e}}}},Nt={noAuto:xD,config:$,dom:RD,parse:OD,library:Yw,findIconDefinition:Uu,toHtml:So},ND=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Te:n;(Object.keys(Bt.styles).length>0||$.autoFetchSvg)&&Nn&&$.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function Zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return So(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Nn){var r=Te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function PD(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(Lf(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};s.style=Xc(L(L({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function DD(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},s),{},{id:o}),children:r}]}]}function Vf(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,g=r.found?r:n,y=g.width,_=g.height,v=s==="fak",w=[$.replacementClass,i?"".concat($.cssPrefix,"-").concat(i):""].filter(function(xe){return h.classes.indexOf(xe)===-1}).filter(function(xe){return xe!==""||!!xe}).concat(h.classes).join(" "),T={children:[],attributes:L(L({},h.attributes),{},{"data-prefix":s,"data-icon":i,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},O=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};d&&(T.attributes[Lr]=""),c&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(u||Wi())},children:[c]}),delete T.attributes.title);var K=L(L({},T),{},{prefix:s,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:L(L({},O),h.styles)}),te=r.found&&n.found?Rn("generateAbstractMask",K)||{children:[],attributes:{}}:Rn("generateAbstractIcon",K)||{children:[],attributes:{}},ue=te.children,ke=te.attributes;return K.children=ue,K.attributes=ke,a?DD(K):PD(K)}function xp(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=L(L(L({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Lr]="");var u=L({},o.styles);Lf(s)&&(u.transform=hD({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Xc(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function MD(t){var e=t.content,n=t.title,r=t.extra,s=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xc(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Dl=Bt.styles;function Fu(t){var e=t[0],n=t[1],r=t.slice(4),s=Rf(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(wr.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(wr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(wr.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var LD={found:!1,width:512,height:512};function UD(t,e){!Mw&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $u(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=nr()),new Promise(function(r,s){if(Rn("missingIconAbstract"),n==="fa"){var i=Gw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Dl[e]&&Dl[e][t]){var o=Dl[e][t];return r(Fu(o))}UD(t,e),r(L(L({},LD),{},{icon:$.showMissingIcons&&t?Rn("missingIconAbstract")||{}:{}}))})}var Rp=function(){},Vu=$.measurePerformance&&Ho&&Ho.mark&&Ho.measure?Ho:{mark:Rp,measure:Rp},ii='FA "6.4.0"',FD=function(e){return Vu.mark("".concat(ii," ").concat(e," begins")),function(){return Xw(e)}},Xw=function(e){Vu.mark("".concat(ii," ").concat(e," ends")),Vu.measure("".concat(ii," ").concat(e),"".concat(ii," ").concat(e," begins"),"".concat(ii," ").concat(e," ends"))},jf={begin:FD,end:Xw},pa=function(){};function Op(t){var e=t.getAttribute?t.getAttribute(Lr):null;return typeof e=="string"}function $D(t){var e=t.getAttribute?t.getAttribute(Nf):null,n=t.getAttribute?t.getAttribute(Pf):null;return e&&n}function VD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function jD(){if($.autoReplaceSvg===!0)return ga.replace;var t=ga[$.autoReplaceSvg];return t||ga.replace}function BD(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function zD(t){return Te.createElement(t)}function Qw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?BD:zD:n;if(typeof t=="string")return Te.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(Qw(o,{ceFn:r}))}),s}function qD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ga={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(Qw(s),n)}),n.getAttribute(Lr)===null&&$.keepOriginalSource){var r=Te.createComment(qD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Mf(n).indexOf($.replacementClass))return ga.replace(e);var s=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===$.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return So(a)}).join(`
`);n.setAttribute(Lr,""),n.innerHTML=o}};function Np(t){t()}function Jw(t,e){var n=typeof e=="function"?e:pa;if(t.length===0)n();else{var r=Np;$.mutateApproach===GP&&(r=tr.requestAnimationFrame||Np),r(function(){var s=jD(),i=jf.begin("mutate");t.map(s),i(),n()})}}var Bf=!1;function Zw(){Bf=!0}function ju(){Bf=!1}var Ga=null;function Pp(t){if(Ep&&$.observeMutations){var e=t.treeCallback,n=e===void 0?pa:e,r=t.nodeCallback,s=r===void 0?pa:r,i=t.pseudoElementsCallback,o=i===void 0?pa:i,a=t.observeMutationsRoot,c=a===void 0?Te:a;Ga=new Ep(function(l){if(!Bf){var u=nr();zs(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Op(h.addedNodes[0])&&($.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&$.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Op(h.target)&&~tD.indexOf(h.attributeName))if(h.attributeName==="class"&&$D(h.target)){var f=Jc(Mf(h.target)),d=f.prefix,g=f.iconName;h.target.setAttribute(Nf,d||u),g&&h.target.setAttribute(Pf,g)}else VD(h.target)&&s(h.target)})}}),Nn&&Ga.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function HD(){Ga&&Ga.disconnect()}function KD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function WD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Jc(Mf(t));return s.prefix||(s.prefix=nr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=ID(s.prefix,t.innerText)||Ff(s.prefix,Du(t.innerText))),!s.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function GD(t){var e=zs(t.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Wi()):(e["aria-hidden"]="true",e.focusable="false")),e}function YD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:on,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=WD(t),r=n.iconName,s=n.prefix,i=n.rest,o=GD(t),a=Lu("parseNodeAttributes",{},t),c=e.styleParser?KD(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:on,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var XD=Bt.styles;function e_(t){var e=$.autoReplaceSvg==="nest"?Dp(t,{styleParser:!1}):Dp(t);return~e.extra.classes.indexOf(Lw)?Rn("generateLayersText",t,e):Rn("generateSvgReplacementMutation",t,e)}var rr=new Set;Df.map(function(t){rr.add("fa-".concat(t))});Object.keys(zi[_e]).map(rr.add.bind(rr));Object.keys(zi[Me]).map(rr.add.bind(rr));rr=Io(rr);function Mp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nn)return Promise.resolve();var n=Te.documentElement.classList,r=function(h){return n.add("".concat(Tp,"-").concat(h))},s=function(h){return n.remove("".concat(Tp,"-").concat(h))},i=$.autoFetchSvg?rr:Df.map(function(u){return"fa-".concat(u)}).concat(Object.keys(XD));i.includes("fa")||i.push("fa");var o=[".".concat(Lw,":not([").concat(Lr,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Lr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=zs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=jf.begin("onTree"),l=a.reduce(function(u,h){try{var f=e_(h);f&&u.push(f)}catch(d){Mw||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){Jw(f,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function QD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;e_(t).then(function(n){n&&Jw([n],e)})}function JD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Uu(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:Uu(s||{})),t(r,L(L({},n),{},{mask:s}))}}var ZD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?on:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,g=d===void 0?null:d,y=n.classes,_=y===void 0?[]:y,v=n.attributes,w=v===void 0?{}:v,T=n.styles,O=T===void 0?{}:T;if(e){var K=e.prefix,te=e.iconName,ue=e.icon;return Zc(L({type:"icon"},e),function(){return Ur("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(f?w["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(g||Wi()):(w["aria-hidden"]="true",w.focusable="false")),Vf({icons:{main:Fu(ue),mask:c?Fu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:te,transform:L(L({},on),s),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:w,styles:O,classes:_}})})}},eM={mixout:function(){return{icon:JD(ZD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mp,n.nodeCallback=QD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Te:r,i=n.callback,o=i===void 0?function(){}:i;return Mp(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(d,g){Promise.all([$u(s,a),u.iconName?$u(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=Rf(y,2),v=_[0],w=_[1];d([n,Vf({icons:{main:v,mask:w},prefix:a,iconName:s,transform:c,symbol:l,maskId:h,title:i,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=Xc(a);c.length>0&&(s.style=c);var l;return Lf(o)&&(l=Rn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:s}}}},tM={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Zc({type:"layer"},function(){Ur("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Io(i)).join(" ")},children:o}]})}}}},nM={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return Zc({type:"counter",content:n},function(){return Ur("beforeDOMElementCreation",{content:n,params:r}),MD({content:n.toString(),title:i,extra:{attributes:l,styles:h,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Io(a))}})})}}}},rM={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?on:s,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,f=r.styles,d=f===void 0?{}:f;return Zc({type:"text",content:n},function(){return Ur("beforeDOMElementCreation",{content:n,params:r}),xp({content:n,transform:L(L({},on),i),title:a,extra:{attributes:h,styles:d,classes:["".concat($.cssPrefix,"-layers-text")].concat(Io(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,c=null;if(Nw){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return $.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xp({content:n.innerHTML,width:a,height:c,transform:i,title:s,extra:o,watchable:!0})])}}},sM=new RegExp('"',"ug"),Lp=[1105920,1112319];function iM(t){var e=t.replace(sM,""),n=vD(e,0),r=n>=Lp[0]&&n<=Lp[1],s=e.length===2?e[0]===e[1]:!1;return{value:Du(s?e[0]:e),isSecondary:r||s}}function Up(t,e){var n="".concat(WP).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=zs(t.children),o=i.filter(function(ue){return ue.getAttribute(Pu)===e})[0],a=tr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(JP),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?Me:_e,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?qi[f][c[2].toLowerCase()]:ZP[f][l],g=iM(h),y=g.value,_=g.isSecondary,v=c[0].startsWith("FontAwesome"),w=Ff(d,y),T=w;if(v){var O=kD(y);O.iconName&&O.prefix&&(w=O.iconName,d=O.prefix)}if(w&&!_&&(!o||o.getAttribute(Nf)!==d||o.getAttribute(Pf)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);var K=YD(),te=K.extra;te.attributes[Pu]=e,$u(w,d).then(function(ue){var ke=Vf(L(L({},K),{},{icons:{main:ue,mask:$f()},prefix:d,iconName:T,extra:te,watchable:!0})),xe=Te.createElement("svg");e==="::before"?t.insertBefore(xe,t.firstChild):t.appendChild(xe),xe.outerHTML=ke.map(function(wt){return So(wt)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function oM(t){return Promise.all([Up(t,"::before"),Up(t,"::after")])}function aM(t){return t.parentNode!==document.head&&!~YP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Pu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fp(t){if(Nn)return new Promise(function(e,n){var r=zs(t.querySelectorAll("*")).filter(aM).map(oM),s=jf.begin("searchPseudoElements");Zw(),Promise.all(r).then(function(){s(),ju(),e()}).catch(function(){s(),ju(),n()})})}var cM={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Te:r;$.searchPseudoElements&&Fp(s)}}},$p=!1,lM={mixout:function(){return{dom:{unwatch:function(){Zw(),$p=!0}}}},hooks:function(){return{bootstrap:function(){Pp(Lu("mutationObserverCallbacks",{}))},noAuto:function(){HD()},watch:function(n){var r=n.observeMutationsRoot;$p?ju():Pp(Lu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Vp=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},uM={mixout:function(){return{parse:{transform:function(n){return Vp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=Vp(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:L({},d.outer),children:[{tag:"g",attributes:L({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),d.path)}]}]}}}},Ml={x:0,y:0,width:"100%",height:"100%"};function jp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hM(t){return t.tag==="g"?t.children:[t]}var fM={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Jc(s.split(" ").map(function(o){return o.trim()})):$f();return i.prefix||(i.prefix=nr()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,l=i.width,u=i.icon,h=o.width,f=o.icon,d=uD({transform:c,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:L(L({},Ml),{},{fill:"white"})},y=u.children?{children:u.children.map(jp)}:{},_={tag:"g",attributes:L({},d.inner),children:[jp(L({tag:u.tag,attributes:L(L({},u.attributes),d.path)},y))]},v={tag:"g",attributes:L({},d.outer),children:[_]},w="mask-".concat(a||Wi()),T="clip-".concat(a||Wi()),O={tag:"mask",attributes:L(L({},Ml),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:hM(f)},O]};return r.push(K,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(w,")")},Ml)}),{children:r,attributes:s}}}},dM={provides:function(e){var n=!1;tr.matchMedia&&(n=tr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},mM={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},pM=[dD,eM,tM,nM,rM,cM,lM,uM,fM,dM,mM];CD(pM,{mixoutsTo:Nt});Nt.noAuto;var t_=Nt.config,gM=Nt.library;Nt.dom;var Ya=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var yM=Nt.icon;Nt.layer;var vM=Nt.text;Nt.counter;function Bp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Vt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bp(Object(n),!0).forEach(function(r){Et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xa(t){return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xa(t)}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bM(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function wM(t,e){if(t==null)return{};var n=bM(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Bu(t){return _M(t)||EM(t)||TM(t)||IM()}function _M(t){if(Array.isArray(t))return zu(t)}function EM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function TM(t,e){if(t){if(typeof t=="string")return zu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zu(t,e)}}function zu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function IM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n_={exports:{}};(function(t){(function(e){var n=function(v,w,T){if(!l(w)||h(w)||f(w)||d(w)||c(w))return w;var O,K=0,te=0;if(u(w))for(O=[],te=w.length;K<te;K++)O.push(n(v,w[K],T));else{O={};for(var ue in w)Object.prototype.hasOwnProperty.call(w,ue)&&(O[v(ue,T)]=n(v,w[ue],T))}return O},r=function(v,w){w=w||{};var T=w.separator||"_",O=w.split||/(?=[A-Z])/;return v.split(O).join(T)},s=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,T){return T?T.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var w=s(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},d=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},y=function(v,w){var T=w&&"process"in w?w.process:w;return typeof T!="function"?v:function(O,K){return T(O,v,K)}},_={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,w){return n(y(s,w),v)},decamelizeKeys:function(v,w){return n(y(o,w),v,w)},pascalizeKeys:function(v,w){return n(y(i,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(kM)})(n_);var SM=n_.exports,AM=["class","style"];function CM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=SM.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function xM(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function zf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return zf(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=xM(u);break;case"style":c.style=CM(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=wM(n,AM);return cc(t.tag,Vt(Vt(Vt({},e),{},{class:s.class,style:Vt(Vt({},s.style),o)},s.attrs),a),r)}var r_=!1;try{r_=!0}catch{}function RM(){if(!r_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function wi(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Et({},t,e):{}}function OM(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Et(e,"fa-".concat(t.size),t.size!==null),Et(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Et(e,"fa-pull-".concat(t.pull),t.pull!==null),Et(e,"fa-swap-opacity",t.swapOpacity),Et(e,"fa-bounce",t.bounce),Et(e,"fa-shake",t.shake),Et(e,"fa-beat",t.beat),Et(e,"fa-fade",t.fade),Et(e,"fa-beat-fade",t.beatFade),Et(e,"fa-flash",t.flash),Et(e,"fa-spin-pulse",t.spinPulse),Et(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zp(t){if(t&&Xa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ya.icon)return Ya.icon(t);if(t===null)return null;if(Xa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var NM=Yt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Oe(function(){return zp(e.icon)}),i=Oe(function(){return wi("classes",OM(e))}),o=Oe(function(){return wi("transform",typeof e.transform=="string"?Ya.transform(e.transform):e.transform)}),a=Oe(function(){return wi("mask",zp(e.mask))}),c=Oe(function(){return yM(s.value,Vt(Vt(Vt(Vt({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});oi(c,function(u){if(!u)return RM("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Oe(function(){return c.value?zf(c.value.abstract[0],{},r):null});return function(){return l.value}}});Yt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=t_.familyPrefix,i=Oe(function(){return["".concat(s,"-layers")].concat(Bu(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return cc("div",{class:i.value},r.default?r.default():[])}}});Yt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=t_.familyPrefix,i=Oe(function(){return wi("classes",[].concat(Bu(e.counter?["".concat(s,"-layers-counter")]:[]),Bu(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Oe(function(){return wi("transform",typeof e.transform=="string"?Ya.transform(e.transform):e.transform)}),a=Oe(function(){var l=vM(e.value.toString(),Vt(Vt({},o.value),i.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Oe(function(){return zf(a.value,{},r)});return function(){return c.value}}});var PM={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},DM={prefix:"far",iconName:"file-image",icon:[384,512,[128443],"f1c5","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h48 32 40 72c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z"]},MM={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]};gM.add(DM,MM,PM);let qp;Bi.onAuthStateChanged(t=>{qp||(qp=OE(U1).component("font-awesome-icon",NM).use(UP).mount("#app"))});export{en as F,Bi as a,ge as b,at as c,Yt as d,se as e,Q0 as f,Jg as g,Q_ as h,Je as i,Cg as j,bC as k,gt as l,nt as m,Ku as n,ze as o,cs as p,_d as q,yt as r,UM as s,Zr as t,xf as u,ls as v,oi as w,Ne as x,x0 as y,lh as z};
