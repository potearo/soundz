(function(p,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("react"),require("howler"),require("lucide-react")):typeof define=="function"&&define.amd?define(["exports","react","howler","lucide-react"],o):(p=typeof globalThis<"u"?globalThis:p||self,o(p.Soundz={},p.React,p.Howler,p.Lucide))})(this,function(p,o,q,X){"use strict";var B={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function we(){if(ue)return O;ue=1;var c=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function s(w,l,f){var b=null;if(f!==void 0&&(b=""+f),l.key!==void 0&&(b=""+l.key),"key"in l){f={};for(var T in l)T!=="key"&&(f[T]=l[T])}else f=l;return l=f.ref,{$$typeof:c,type:w,key:b,ref:l!==void 0?l:null,props:f}}return O.Fragment=m,O.jsx=s,O.jsxs=s,O}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function he(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){function c(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case oe:return"Profiler";case J:return"StrictMode";case ae:return"Suspense";case se:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case re:return"Portal";case V:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:c(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return c(e(t))}catch{}}return null}function m(e){return""+e}function s(e){try{m(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,n=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),m(e)}}function w(e){if(e===D)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===G)return"<...>";try{var t=c(e);return t?"<"+t+">":"<...>"}catch{return"<...>"}}function l(){var e=S.A;return e===null?null:e.getOwner()}function f(){return Error("react-stack-top-frame")}function b(e){if(z.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function T(e,t){function r(){M||(M=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function te(){var e=c(this.type);return W[e]||(W[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function g(e,t,r,n,d,u,A,y){return r=u.ref,e={$$typeof:Y,type:e,key:t,props:u,_owner:d},(r!==void 0?r:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:te}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:A}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:y}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function _(e,t,r,n,d,u,A,y){var a=t.children;if(a!==void 0)if(n)if(Z(a)){for(n=0;n<a.length;n++)L(a[n]);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else L(a);if(z.call(t,"key")){a=c(e);var k=Object.keys(t).filter(function(ie){return ie!=="key"});n=0<k.length?"{key: someKey, "+k.join(": ..., ")+": ...}":"{key: someKey}",K[a+n]||(k=0<k.length?"{"+k.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,n,a,k,a),K[a+n]=!0)}if(a=null,r!==void 0&&(s(r),a=""+r),b(t)&&(s(t.key),a=""+t.key),"key"in t){r={};for(var x in t)x!=="key"&&(r[x]=t[x])}else r=t;return a&&T(r,typeof e=="function"?e.displayName||e.name||"Unknown":e),g(e,a,u,d,l(),r,A,y)}function L(e){typeof e=="object"&&e!==null&&e.$$typeof===Y&&e._store&&(e._store.validated=1)}var h=o,Y=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),V=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),I=Symbol.for("react.client.reference"),S=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=Object.prototype.hasOwnProperty,Z=Array.isArray,v=console.createTask?console.createTask:function(){return null};h={"react-stack-bottom-frame":function(e){return e()}};var M,W={},j=h["react-stack-bottom-frame"].bind(h,f)(),Q=v(w(f)),K={};N.Fragment=D,N.jsx=function(e,t,r,n,d){var u=1e4>S.recentlyCreatedOwnerStacks++;return _(e,t,r,!1,n,d,u?Error("react-stack-top-frame"):j,u?v(w(e)):Q)},N.jsxs=function(e,t,r,n,d){var u=1e4>S.recentlyCreatedOwnerStacks++;return _(e,t,r,!0,n,d,u?Error("react-stack-top-frame"):j,u?v(w(e)):Q)}}()),N}var de;function ve(){return de||(de=1,process.env.NODE_ENV==="production"?B.exports=we():B.exports=he()),B.exports}var E=ve();const Ee=(c,m)=>{const s={className:m?"sound-indicator":"",size:c.size??20,strokeWidth:c.strokeWidth??2.5};switch(c.name){case"speaker":return E.jsx(X.Volume2,{...s});case"waves":return E.jsx(X.Waves,{...s});case"audioLines":return E.jsx(X.AudioLines,{...s});case"audioWaves":return E.jsx(X.AudioWaveform,{...s});default:return null}},pe=o.createContext({});function be({children:c,...m}){return o.useEffect(()=>{const s=()=>{const w=new Audio;w.muted=!0,w.play().catch(()=>{}),window.removeEventListener("click",s)};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]),E.jsx(pe.Provider,{value:m,children:c})}const ee=new Map;function ye(c){var me;const m=o.useContext(pe),{children:s,providedFX:w="boop",customFX:l=null,noClickSound:f=!1,loading:b=null,wrap:T=null,fetchCooldown:te=1e4,clickCooldown:g=0,hoverFX:_=null,enableHaptics:L=!0,keyboardKey:h=null,icon:Y=null,showTooltip:re=!1,tooltipText:D="Now playing…",tooltipPosition:J="top",tooltipAnimation:oe="fade",theme:$="auto",customTheme:V=null,animationSpeed:ne="1s",layout:ae="inline-flex",className:se="",style:le={},apiBaseUrl:G}={...m,...c},[F,I]=o.useState(null),[S,z]=o.useState(!0),[Z,v]=o.useState(!1),M=o.useRef(0),W=o.useRef(0),j=o.useRef(null),Q=typeof window<"u"&&((me=window.matchMedia)==null?void 0:me.call(window,"(prefers-color-scheme: dark)").matches),K=$==="auto"?Q?"dark":"light":$,e={light:{tooltipBg:"#333",tooltipColor:"#fff",pulseColor:"#888"},dark:{tooltipBg:"#000",tooltipColor:"#fff",pulseColor:"#fff"},neon:{tooltipBg:"#0ff",tooltipColor:"#000",pulseColor:"#0ff"},pastel:{tooltipBg:"#ffeef1",tooltipColor:"#222",pulseColor:"#ffaacc"},mono:{tooltipBg:"#666",tooltipColor:"#eee",pulseColor:"#aaa"}},t=e[K]??e.light,r=V?{...t,...V}:t,n={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)"},d={top:"top: -1.5rem; left: 50%;",bottom:"bottom: -1.5rem; left: 50%;",left:"left: -1.5rem; top: 50%;",right:"right: -1.5rem; top: 50%;"},u={fade:"opacity 0.3s ease-in-out",scale:"transform 0.3s ease-in-out",slide:"top 0.3s ease-in-out"},A=T??`
    .wrap,
    .wrap:before,
    .wrap:after {
      margin: 0;
      padding: 0;
    }
    .wrap {
      position: relative;
      display: ${ae};
      align-items: center;
      gap: 0.5rem;
      border: none;
      font-family: inherit;
      cursor: pointer;
      color: inherit;
      background: transparent;
    }
    .wrap.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    .sound-indicator {
      animation: pulse ${ne} ease-in-out infinite;
      color: ${r.pulseColor};
    }
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.6; }
      100% { transform: scale(1); opacity: 1; }
    }
    .tooltip {
      position: absolute;
      ${d[J]||d.top}
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: inherit;
      opacity: 0.9;
      white-space: nowrap;
      color: ${r.tooltipColor};
      background: ${r.tooltipBg};
      transform: ${n[J]||"translateX(-50%)"};
      transition: ${u[oe]||u.fade};
    }
  `,y=w||"boop",a=o.useCallback(i=>{if(!i)return;const P=Date.now();new q.Howl({src:[`${i}?t=${P}`],autoplay:!0,onloaderror:(C,U)=>console.error("Howler load error:",U),onplay:()=>v(!0),onend:()=>v(!1)}).play(),L&&window.navigator.vibrate&&window.navigator.vibrate(50),g>0&&(z(!1),setTimeout(()=>z(!0),g))},[g,L]),k=async()=>{const i=Date.now();if(l){ee.set("custom",l),I(l);return}const P=ee.get(y);if(P&&i-M.current<te){I(P);return}try{const R=G??(typeof window<"u"&&window.location.hostname==="localhost"?"":"https://soundzjs.vercel.app"),C=await fetch(`${R}/api/sounds?sound=${y}`),U=C.headers.get("content-type");if(!C.ok)throw new Error(`Fetch failed: ${C.status} ${C.statusText}`);if(!(U!=null&&U.includes("application/json"))){const ke=await C.text();throw new Error(`Expected JSON, got: ${ke.slice(0,100)}...`)}const H=await C.json();H!=null&&H.url&&(ee.set(y,H.url),I(H.url),M.current=i)}catch(R){console.error("Sound fetch failed:",R)}};o.useEffect(()=>{k();const i=document.createElement("style");return i.innerHTML=A,document.head.appendChild(i),j.current=i,()=>{j.current&&document.head.removeChild(j.current)}},[l,y,A]);const x=()=>{if(!f){const i=Date.now();if(!F||g>0&&i-W.current<g)return;W.current=i,a(F)}},ie=()=>{const i=typeof window<"u"&&window.location.hostname==="localhost"?"http://localhost:3000":"https://soundzjs.vercel.app";_&&(_.includes("/")?new q.Howl({src:[`${_}?t=${Date.now()}`],autoplay:!0,onloaderror:(P,R)=>console.error("Howler load error:",R),onplay:()=>v(!0),onend:()=>v(!1)}).play():new q.Howl({src:[`${i}/sounds/${_}.mp3?t=${Date.now()}`],autoplay:!0,onloaderror:(P,R)=>console.error("Howler load error:",R),onplay:()=>v(!0),onend:()=>v(!1)}).play())},ce=o.useCallback(i=>{h&&i.key.toLowerCase()===h.toLowerCase()&&S&&x()},[h,S,x]);return o.useEffect(()=>{if(h)return window.addEventListener("keydown",ce),()=>window.removeEventListener("keydown",ce)},[h,ce]),F?E.jsxs("div",{className:`wrap ${S?"":"disabled"} ${se}`,onClick:x,onMouseEnter:ie,style:le,tabIndex:0,children:[Z&&re&&E.jsx("div",{className:"tooltip",children:D}),Y&&Ee(Y,Z),s]}):b?b():E.jsx("p",{children:"Loading sound…"})}p.Soundz=ye,p.SoundzProvider=be,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
