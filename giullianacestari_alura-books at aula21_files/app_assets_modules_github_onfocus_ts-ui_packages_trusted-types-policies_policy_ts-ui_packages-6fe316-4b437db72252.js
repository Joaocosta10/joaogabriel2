"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316"],{75101:(e,t,n)=>{n.d(t,{Ff:()=>s,eC:()=>u,uE:()=>c});var r=n(6986);let o=!1,i=new r.A;function a(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of i.matches(t))e.data.call(null,t)}function c(e,t){o||(o=!0,document.addEventListener("focus",a,!0)),i.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function s(e,t,n){function r(t){let o=t.currentTarget;o&&(o.removeEventListener(e,n),o.removeEventListener("blur",r))}c(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",r)})}function u(e,t){function n(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",n))}c(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},40440:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){return`${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{M:()=>o})},40588:(e,t,n)=>{n.d(t,{N7:()=>h});var r=n(36301),o=n(54098),i=n(24212),a=n(40440),c=n(14740),s=n(97156),u=n(97564),l=n(54861);let d=!1,f=0,m=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function h(e,t={}){if((0,u.G7)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(_.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);g(w({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:E(n),catalogService:void 0},t));return}y(e)||g(w(v(e),t))}else y(e)||g(w(v(e),t))}async function g(e){if(!(!T&&!d&&f<10&&(0,o.TT)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>S.test(e.filename)||S.test(e.function))){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:E(e),catalogService:e.catalogService}}function w(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.M)()||window.location.href,readyState:document.readyState,referrer:(0,l.dR)(),timeSinceLoad:Math.round(Date.now()-m),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.y)();return`anonymous-${t}`}()||void 0,bundler:c.v,ui:!!document.querySelector('meta[name="ui"]')},t)}function E(e){return(0,i.q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let S=/(chrome|moz|safari)-extension:\/\//,T=!1;s.cg?.addEventListener("pageshow",()=>T=!1),s.cg?.addEventListener("pagehide",()=>T=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{h(e.data.error)});let _=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},51848:(e,t,n)=>{let r;n.d(t,{BI:()=>m,Ti:()=>p,lA:()=>f});var o=n(70837),i=n(97524),a=n(74572),c=n(51528);let{getItem:s}=(0,a.A)("localStorage"),u="dimension_",l=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,r=new i.s(e)}catch(e){}function d(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(u)&&(t[e.replace(u,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))l.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,c.X)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},69653:(e,t,n)=>{n.d(t,{Ai:()=>i,Gq:()=>r,SO:()=>o});let{getItem:r,setItem:o,removeItem:i}=(0,n(74572).A)("sessionStorage")},54861:(e,t,n)=>{n.d(t,{BW:()=>o,Ff:()=>m,HK:()=>w,JA:()=>b,LM:()=>p,Pv:()=>T,Vy:()=>f,ZW:()=>S,dR:()=>E,di:()=>y,fX:()=>_,k9:()=>v,my:()=>g,r7:()=>O,wG:()=>h,xT:()=>d});var r=n(69653);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",c="soft-nav:referrer",s="soft-nav:marker",u="soft-nav:react-app-name",l="soft-nav:latest-mechanism";function d(){(0,r.SO)(s,"0"),(0,r.Ai)(c),(0,r.Ai)(i),(0,r.Ai)(a),(0,r.Ai)(u),(0,r.Ai)(l)}function f(e){(0,r.SO)(s,e)}function m(){(0,r.SO)(s,"0")}function p(){let e=(0,r.Gq)(s);return e&&"0"!==e}function y(){return(0,r.Gq)(s)}function h(){return!!g()}function g(){return(0,r.Gq)(i)}function v(e){(0,r.SO)(i,e||o),(0,r.SO)(a,window.location.href)}function w(){(0,r.SO)(c,window.location.href)}function E(){return(0,r.Gq)(c)||document.referrer}function S(){let e=_();e?(0,r.SO)(u,e):(0,r.Ai)(u)}function T(){return(0,r.Gq)(u)}function _(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function b(e){(0,r.SO)(l,e)}function O(){return(0,r.Gq)(l)}},97156:(e,t,n)=>{n.d(t,{KJ:()=>r.KJ,Kn:()=>o.Kn,X3:()=>r.X3,XC:()=>o.XC,cg:()=>o.cg,fV:()=>o.fV,g5:()=>r.g5});var r=n(15572),o=n(86733)},86733:(e,t,n)=>{n.d(t,{Kn:()=>i,XC:()=>r,cg:()=>o,fV:()=>a});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,a="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:"",href:""}:location},15572:(e,t,n)=>{n.d(t,{KJ:()=>i,X3:()=>o,g5:()=>a});var r=n(86733);let o=void 0===r.XC,i=!o;function a(){return!!o||!!r.XC.querySelector('react-app[data-ssr="true"]')}},2240:(e,t,n)=>{n.d(t,{b:()=>u,r:()=>TrustedTypesPolicyError});var r=n(97564),o=n(51528),i=n(40588),a=n(42838),c=n.n(a),s=n(51848);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let u={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:u,silenceErrorReporting:l=!1}){try{if((0,r.G7)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return u&&new Promise(e=>{let n=window.performance.now(),r=c().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let a=Error("Trusted Types policy output sanitized"),c=a.stack?.slice(0,1e3),u=i.slice(0,250);(0,s.BI)("trusted_types_policy.sanitize",{policyName:t,output:u,stack:c,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(l||(0,i.N7)(e),(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},6440:(e,t,n)=>{n.d(t,{wA:()=>l});var r,o=n(97156),i=n(51528);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let c={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},s=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),u=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...c,...t})},l={createPolicy:(e,t)=>{if(s.has(e))return(0,i.i)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),s.get(e);{let n=Object.freeze(u.createPolicy(e,t));return s.set(e,n),n}}},d=!1;o.XC?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316-52ebd5def43e.js.map