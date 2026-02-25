var Lv=s=>{throw TypeError(s)};var $h=(s,t,i)=>t.has(s)||Lv("Cannot "+i);var V=(s,t,i)=>($h(s,t,"read from private field"),i?i.call(s):t.get(s)),te=(s,t,i)=>t.has(s)?Lv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,i),Ft=(s,t,i,r)=>($h(s,t,"write to private field"),r?r.call(s,i):t.set(s,i),i),Ee=(s,t,i)=>($h(s,t,"access private method"),i);var sc=(s,t,i,r)=>({set _(l){Ft(s,t,l,i)},get _(){return V(s,t,r)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var td={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function aM(){if(Nv)return Tl;Nv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Tl.Fragment=t,Tl.jsx=i,Tl.jsxs=i,Tl}var Ov;function rM(){return Ov||(Ov=1,td.exports=aM()),td.exports}var dt=rM(),ed={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function sM(){if(Pv)return ae;Pv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function g(N,nt,Mt){this.props=N,this.context=nt,this.refs=S,this.updater=Mt||E}g.prototype.isReactComponent={},g.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=g.prototype;function L(N,nt,Mt){this.props=N,this.context=nt,this.refs=S,this.updater=Mt||E}var w=L.prototype=new F;w.constructor=L,A(w,g.prototype),w.isPureReactComponent=!0;var X=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(N,nt,Mt){var Z=Mt.ref;return{$$typeof:s,type:N,key:nt,ref:Z!==void 0?Z:null,props:Mt}}function C(N,nt){return D(N.type,nt,N.props)}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function lt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return nt[Mt]})}var rt=/\/+/g;function mt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):nt.toString(36)}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,nt,Mt,Z,ct){var Tt=typeof N;(Tt==="undefined"||Tt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(Tt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case s:case t:St=!0;break;case x:return St=N._init,P(St(N._payload),nt,Mt,Z,ct)}}if(St)return ct=ct(N),St=Z===""?"."+mt(N,0):Z,X(ct)?(Mt="",St!=null&&(Mt=St.replace(rt,"$&/")+"/"),P(ct,nt,Mt,"",function(re){return re})):ct!=null&&(B(ct)&&(ct=C(ct,Mt+(ct.key==null||N&&N.key===ct.key?"":(""+ct.key).replace(rt,"$&/")+"/")+St)),nt.push(ct)),1;St=0;var kt=Z===""?".":Z+":";if(X(N))for(var Gt=0;Gt<N.length;Gt++)Z=N[Gt],Tt=kt+mt(Z,Gt),St+=P(Z,nt,Mt,Tt,ct);else if(Gt=M(N),typeof Gt=="function")for(N=Gt.call(N),Gt=0;!(Z=N.next()).done;)Z=Z.value,Tt=kt+mt(Z,Gt++),St+=P(Z,nt,Mt,Tt,ct);else if(Tt==="object"){if(typeof N.then=="function")return P(gt(N),nt,Mt,Z,ct);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function K(N,nt,Mt){if(N==null)return N;var Z=[],ct=0;return P(N,Z,"","",function(Tt){return nt.call(Mt,Tt,ct++)}),Z}function Q(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var Et=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},At={map:K,forEach:function(N,nt,Mt){K(N,function(){nt.apply(this,arguments)},Mt)},count:function(N){var nt=0;return K(N,function(){nt++}),nt},toArray:function(N){return K(N,function(nt){return nt})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ae.Activity=_,ae.Children=At,ae.Component=g,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ae.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ae.cache=function(N){return function(){return N.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(N,nt,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Z=A({},N.props),ct=N.key;if(nt!=null)for(Tt in nt.key!==void 0&&(ct=""+nt.key),nt)!k.call(nt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&nt.ref===void 0||(Z[Tt]=nt[Tt]);var Tt=arguments.length-2;if(Tt===1)Z.children=Mt;else if(1<Tt){for(var St=Array(Tt),kt=0;kt<Tt;kt++)St[kt]=arguments[kt+2];Z.children=St}return D(N.type,ct,Z)},ae.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ae.createElement=function(N,nt,Mt){var Z,ct={},Tt=null;if(nt!=null)for(Z in nt.key!==void 0&&(Tt=""+nt.key),nt)k.call(nt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ct[Z]=nt[Z]);var St=arguments.length-2;if(St===1)ct.children=Mt;else if(1<St){for(var kt=Array(St),Gt=0;Gt<St;Gt++)kt[Gt]=arguments[Gt+2];ct.children=kt}if(N&&N.defaultProps)for(Z in St=N.defaultProps,St)ct[Z]===void 0&&(ct[Z]=St[Z]);return D(N,Tt,ct)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(N){return{$$typeof:d,render:N}},ae.isValidElement=B,ae.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:Q}},ae.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},ae.startTransition=function(N){var nt=O.T,Mt={};O.T=Mt;try{var Z=N(),ct=O.S;ct!==null&&ct(Mt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,Et)}catch(Tt){Et(Tt)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),O.T=nt}},ae.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ae.use=function(N){return O.H.use(N)},ae.useActionState=function(N,nt,Mt){return O.H.useActionState(N,nt,Mt)},ae.useCallback=function(N,nt){return O.H.useCallback(N,nt)},ae.useContext=function(N){return O.H.useContext(N)},ae.useDebugValue=function(){},ae.useDeferredValue=function(N,nt){return O.H.useDeferredValue(N,nt)},ae.useEffect=function(N,nt){return O.H.useEffect(N,nt)},ae.useEffectEvent=function(N){return O.H.useEffectEvent(N)},ae.useId=function(){return O.H.useId()},ae.useImperativeHandle=function(N,nt,Mt){return O.H.useImperativeHandle(N,nt,Mt)},ae.useInsertionEffect=function(N,nt){return O.H.useInsertionEffect(N,nt)},ae.useLayoutEffect=function(N,nt){return O.H.useLayoutEffect(N,nt)},ae.useMemo=function(N,nt){return O.H.useMemo(N,nt)},ae.useOptimistic=function(N,nt){return O.H.useOptimistic(N,nt)},ae.useReducer=function(N,nt,Mt){return O.H.useReducer(N,nt,Mt)},ae.useRef=function(N){return O.H.useRef(N)},ae.useState=function(N){return O.H.useState(N)},ae.useSyncExternalStore=function(N,nt,Mt){return O.H.useSyncExternalStore(N,nt,Mt)},ae.useTransition=function(){return O.H.useTransition()},ae.version="19.2.4",ae}var zv;function Ip(){return zv||(zv=1,ed.exports=sM()),ed.exports}var Vn=Ip(),nd={exports:{}},Al={},id={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function oM(){return Fv||(Fv=1,(function(s){function t(P,K){var Q=P.length;P.push(K);t:for(;0<Q;){var Et=Q-1>>>1,At=P[Et];if(0<l(At,K))P[Et]=K,P[Q]=At,Q=Et;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],Q=P.pop();if(Q!==K){P[0]=Q;t:for(var Et=0,At=P.length,N=At>>>1;Et<N;){var nt=2*(Et+1)-1,Mt=P[nt],Z=nt+1,ct=P[Z];if(0>l(Mt,Q))Z<At&&0>l(ct,Mt)?(P[Et]=ct,P[Z]=Q,Et=Z):(P[Et]=Mt,P[nt]=Q,Et=nt);else if(Z<At&&0>l(ct,Q))P[Et]=ct,P[Z]=Q,Et=Z;else break t}}return K}function l(P,K){var Q=P.sortIndex-K.sortIndex;return Q!==0?Q:P.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,_=null,y=3,M=!1,E=!1,A=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=P)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function X(P){if(A=!1,w(P),!E)if(i(m)!==null)E=!0,I||(I=!0,lt());else{var K=i(p);K!==null&&gt(X,K.startTime-P)}}var I=!1,O=-1,k=5,D=-1;function C(){return S?!0:!(s.unstable_now()-D<k)}function B(){if(S=!1,I){var P=s.unstable_now();D=P;var K=!0;try{t:{E=!1,A&&(A=!1,F(O),O=-1),M=!0;var Q=y;try{e:{for(w(P),_=i(m);_!==null&&!(_.expirationTime>P&&C());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,y=_.priorityLevel;var At=Et(_.expirationTime<=P);if(P=s.unstable_now(),typeof At=="function"){_.callback=At,w(P),K=!0;break e}_===i(m)&&r(m),w(P)}else r(m);_=i(m)}if(_!==null)K=!0;else{var N=i(p);N!==null&&gt(X,N.startTime-P),K=!1}}break t}finally{_=null,y=Q,M=!1}K=void 0}}finally{K?lt():I=!1}}}var lt;if(typeof L=="function")lt=function(){L(B)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,mt=rt.port2;rt.port1.onmessage=B,lt=function(){mt.postMessage(null)}}else lt=function(){g(B,0)};function gt(P,K){O=g(function(){P(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(P){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Q=y;y=K;try{return P()}finally{y=Q}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=y;y=P;try{return K()}finally{y=Q}},s.unstable_scheduleCallback=function(P,K,Q){var Et=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Et+Q:Et):Q=Et,P){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=Q+At,P={id:x++,callback:K,priorityLevel:P,startTime:Q,expirationTime:At,sortIndex:-1},Q>Et?(P.sortIndex=Q,t(p,P),i(m)===null&&P===i(p)&&(A?(F(O),O=-1):A=!0,gt(X,Q-Et))):(P.sortIndex=At,t(m,P),E||M||(E=!0,I||(I=!0,lt()))),P},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(P){var K=y;return function(){var Q=y;y=K;try{return P.apply(this,arguments)}finally{y=Q}}}})(ad)),ad}var Bv;function lM(){return Bv||(Bv=1,id.exports=oM()),id.exports}var rd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function uM(){if(Iv)return Nn;Iv=1;var s=Ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=x,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var Hv;function cM(){if(Hv)return rd.exports;Hv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),rd.exports=uM(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function fM(){if(Gv)return Al;Gv=1;var s=lM(),t=Ip(),i=cM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,o=f;break}if(b===o){v=!0,o=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,o=u;break}if(b===o){v=!0,o=f,a=u;break}b=b.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case X:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var gt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Et=[],At=-1;function N(e){return{current:e}}function nt(e){0>At||(e.current=Et[At],Et[At]=null,At--)}function Mt(e,n){At++,Et[At]=e.current,e.current=n}var Z=N(null),ct=N(null),Tt=N(null),St=N(null);function kt(e,n){switch(Mt(Tt,n),Mt(ct,e),Mt(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ev(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ev(n),e=nv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Z),Mt(Z,e)}function Gt(){nt(Z),nt(ct),nt(Tt)}function re(e){e.memoizedState!==null&&Mt(St,e);var n=Z.current,a=nv(n,e.type);n!==a&&(Mt(ct,e),Mt(Z,a))}function Be(e){ct.current===e&&(nt(Z),nt(ct)),St.current===e&&(nt(St),Sl._currentValue=Q)}var de,Qe;function H(e){if(de===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);de=n&&n[1]||"",Qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+e+Qe}var Un=!1;function he(e,n){if(!e||Un)return"";Un=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var tt=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){tt=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){tt=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&tt&&typeof st.stack=="string")return[st.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var z=v.split(`
`),$=b.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===$.length)for(o=z.length-1,u=$.length-1;1<=o&&0<=u&&z[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==$[u]){var ft=`
`+z[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Un=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?H(a):""}function _e(e,n){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return H("Activity");default:return""}}function jt(e){try{var n="",a=null;do n+=_e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Pe=Object.prototype.hasOwnProperty,Yt=s.unstable_scheduleCallback,U=s.unstable_cancelCallback,T=s.unstable_shouldYield,et=s.unstable_requestPaint,ht=s.unstable_now,bt=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,qt=s.unstable_UserBlockingPriority,Dt=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,ve=s.unstable_IdlePriority,Rt=s.log,It=s.unstable_setDisableYieldValue,Zt=null,Wt=null;function Ot(e){if(typeof Rt=="function"&&It(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Zt,e)}catch{}}var ee=Math.clz32?Math.clz32:q,se=Math.log,Ie=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(se(e)/Ie|0)|0}var Ct=256,ut=262144,xt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=wt(o):(v&=b,v!==0?u=wt(v):a||(a=b&~e,a!==0&&(u=wt(a))))):(b=o&~f,b!==0?u=wt(b):v!==0?u=wt(v):a||(a=o&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ke(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mn(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=v&~a;0<a;){var ft=31-ee(a),vt=1<<ft;b[ft]=0,z[ft]=-1;var tt=$[ft];if(tt!==null)for($[ft]=null,ft=0;ft<tt.length;ft++){var st=tt[ft];st!==null&&(st.lane&=-536870913)}a&=~vt}o!==0&&Oo(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Oo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ee(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Po(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ee(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Fi(e,n){var a=n&-n;return a=(a&42)!==0?1:yr(a),(a&(e.suspendedLanes|n))!==0?0:a}function yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zo(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Tv(e.type))}function Sr(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Ti=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ti,Tn="__reactProps$"+Ti,ji="__reactContainer$"+Ti,Fo="__reactEvents$"+Ti,Wc="__reactListeners$"+Ti,Yc="__reactHandles$"+Ti,Ql="__reactResources$"+Ti,Mr="__reactMarker$"+Ti;function R(e){delete e[$e],delete e[Tn],delete e[Fo],delete e[Wc],delete e[Yc]}function W(e){var n=e[$e];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[$e]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=uv(e);e!==null;){if(a=e[$e])return a;e=uv(e)}return n}e=a,a=e.parentNode}return null}function it(e){if(e=e[$e]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function at(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Y(e){var n=e[Ql];return n||(n=e[Ql]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(e){e[Mr]=!0}var Lt=new Set,zt={};function Pt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(zt[e]=n,e=0;e<n.length;e++)Lt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},xe={};function Re(e){return Pe.call(xe,e)?!0:Pe.call(Qt,e)?!1:ie.test(e)?xe[e]=!0:(Qt[e]=!0,!1)}function Ye(e,n,a){if(Re(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function oe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function un(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ce(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fn(e){if(!e._valueTracker){var n=un(e)?"checked":"value";e._valueTracker=Ce(e,n,""+e[n])}}function Zi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=un(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Er=/[\n"\\]/g;function pe(e){return e.replace(Er,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(e,n,a,o,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Vt(n)):e.value!==""+Vt(n)&&(e.value=""+Vt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?gn(e,v,Vt(n)):a!=null?gn(e,v,Vt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Vt(b):e.removeAttribute("name")}function Bn(e,n,a,o,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Fn(e);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Fn(e)}function gn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ds(e,n,a){if(n!=null&&(n=""+Vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Vt(a):""}function Bi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(gt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Vt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Fn(e)}function ps(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var $x=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||$x.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $p(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Jp(e,f,n[f])}function jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ty=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return ey.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var Zc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,gs=null;function tm(e){var n=it(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Tn]||null;if(!u)throw Error(r(90));Ln(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Zi(o)}break t;case"textarea":ds(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var Kc=!1;function em(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(ms!==null||gs!==null)&&(Bu(),ms&&(n=ms,e=gs,gs=ms=null,tm(n),e)))for(n=0;n<e.length;n++)tm(e[n])}}function Bo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Ki)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{Jc=!1}var Da=null,$c=null,Jl=null;function nm(){if(Jl)return Jl;var e,n=$c,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return Jl=u.slice(e,1<o?1-o:void 0)}function $l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function im(){return!1}function kn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tu:im,this.isPropagationStopped=im,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=kn(br),Ho=_({},br,{view:0,detail:0}),ny=kn(Ho),tf,ef,Go,nu=_({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(tf=e.screenX-Go.screenX,ef=e.screenY-Go.screenY):ef=tf=0,Go=e),tf)},movementY:function(e){return"movementY"in e?e.movementY:ef}}),am=kn(nu),iy=_({},nu,{dataTransfer:0}),ay=kn(iy),ry=_({},Ho,{relatedTarget:0}),nf=kn(ry),sy=_({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=kn(sy),ly=_({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=kn(ly),cy=_({},br,{data:0}),rm=kn(cy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dy[e])?!!n[e]:!1}function af(){return py}var my=_({},Ho,{key:function(e){if(e.key){var n=fy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gy=kn(my),_y=_({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=kn(_y),vy=_({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),xy=kn(vy),yy=_({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=kn(yy),My=_({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=kn(My),by=_({},br,{newState:0,oldState:0}),Ty=kn(by),Ay=[9,13,27,32],rf=Ki&&"CompositionEvent"in window,Vo=null;Ki&&"documentMode"in document&&(Vo=document.documentMode);var Ry=Ki&&"TextEvent"in window&&!Vo,om=Ki&&(!rf||Vo&&8<Vo&&11>=Vo),lm=" ",um=!1;function cm(e,n){switch(e){case"keyup":return Ay.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _s=!1;function Cy(e,n){switch(e){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(um=!0,lm);case"textInput":return e=n.data,e===lm&&um?null:e;default:return null}}function wy(e,n){if(_s)return e==="compositionend"||!rf&&cm(e,n)?(e=nm(),Jl=$c=Da=null,_s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dy[e.type]:n==="textarea"}function dm(e,n,a,o){ms?gs?gs.push(o):gs=[o]:ms=o,n=qu(n,"onChange"),0<n.length&&(a=new eu("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ko=null,Xo=null;function Uy(e){Z_(e,0)}function iu(e){var n=at(e);if(Zi(n))return e}function pm(e,n){if(e==="change")return n}var mm=!1;if(Ki){var sf;if(Ki){var of="oninput"in document;if(!of){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),of=typeof gm.oninput=="function"}sf=of}else sf=!1;mm=sf&&(!document.documentMode||9<document.documentMode)}function _m(){ko&&(ko.detachEvent("onpropertychange",vm),Xo=ko=null)}function vm(e){if(e.propertyName==="value"&&iu(Xo)){var n=[];dm(n,Xo,e,Qc(e)),em(Uy,n)}}function Ly(e,n,a){e==="focusin"?(_m(),ko=n,Xo=a,ko.attachEvent("onpropertychange",vm)):e==="focusout"&&_m()}function Ny(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return iu(Xo)}function Oy(e,n){if(e==="click")return iu(n)}function Py(e,n){if(e==="input"||e==="change")return iu(n)}function zy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:zy;function qo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Pe.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ym(e,n){var a=xm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xm(a)}}function Sm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function lf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Fy=Ki&&"documentMode"in document&&11>=document.documentMode,vs=null,uf=null,Wo=null,cf=!1;function Em(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cf||vs==null||vs!==yn(o)||(o=vs,"selectionStart"in o&&lf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wo&&qo(Wo,o)||(Wo=o,o=qu(uf,"onSelect"),0<o.length&&(n=new eu("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=vs)))}function Tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var xs={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},ff={},bm={};Ki&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ar(e){if(ff[e])return ff[e];if(!xs[e])return e;var n=xs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in bm)return ff[e]=n[a];return e}var Tm=Ar("animationend"),Am=Ar("animationiteration"),Rm=Ar("animationstart"),By=Ar("transitionrun"),Iy=Ar("transitionstart"),Hy=Ar("transitioncancel"),Cm=Ar("transitionend"),wm=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Ai(e,n){wm.set(e,n),Pt(n,[e])}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],ys=0,df=0;function ru(){for(var e=ys,n=df=ys=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Dm(a,u,f)}}function su(e,n,a,o){ci[ys++]=e,ci[ys++]=n,ci[ys++]=a,ci[ys++]=o,df|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pf(e,n,a,o){return su(e,n,a,o),ou(e)}function Rr(e,n){return su(e,null,null,n),ou(e)}function Dm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-ee(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ou(e){if(50<pl)throw pl=0,Eh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ss={};function Gy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new Gy(e,n,a,o)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Um(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function lu(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")mf(e)&&(v=1);else if(typeof e=="string")v=WS(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ni(31,a,n,u),e.elementType=D,e.lanes=f,e;case A:return Cr(a.children,u,f,n);case S:v=8,u|=24;break;case g:return e=ni(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case X:return e=ni(13,a,n,u),e.elementType=X,e.lanes=f,e;case I:return e=ni(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case F:v=9;break t;case w:v=11;break t;case O:v=14;break t;case k:v=16,o=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ni(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Cr(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function gf(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Lm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function _f(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nm=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:jt(n)},Nm.set(e,n),n)}return{value:e,source:n,stack:jt(n)}}var Ms=[],Es=0,uu=null,Yo=0,hi=[],di=0,Ua=null,Ii=1,Hi="";function $i(e,n){Ms[Es++]=Yo,Ms[Es++]=uu,uu=e,Yo=n}function Om(e,n,a){hi[di++]=Ii,hi[di++]=Hi,hi[di++]=Ua,Ua=e;var o=Ii;e=Hi;var u=32-ee(o)-1;o&=~(1<<u),a+=1;var f=32-ee(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ii=1<<32-ee(n)+u|a<<u|o,Hi=f+e}else Ii=1<<f|a<<u|o,Hi=e}function vf(e){e.return!==null&&($i(e,1),Om(e,1,0))}function xf(e){for(;e===uu;)uu=Ms[--Es],Ms[Es]=null,Yo=Ms[--Es],Ms[Es]=null;for(;e===Ua;)Ua=hi[--di],hi[di]=null,Hi=hi[--di],hi[di]=null,Ii=hi[--di],hi[di]=null}function Pm(e,n){hi[di++]=Ii,hi[di++]=Hi,hi[di++]=Ua,Ii=n.id,Hi=n.overflow,Ua=e}var An=null,je=null,Me=!1,La=null,pi=!1,yf=Error(r(519));function Na(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(fi(n,e)),yf}function zm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[$e]=e,n[Tn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<gl.length;a++)ge(gl[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$_(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Na(e,!0)}function Fm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:An=An.return}}function bs(e){if(e!==An)return!1;if(!Me)return Fm(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bh(e.type,e.memoizedProps)),a=!a),a&&je&&Na(e),Fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=lv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=lv(e)}else n===27?(n=je,Ya(e.type)?(e=kh,kh=null,je=e):je=n):je=An?gi(e.stateNode.nextSibling):null;return!0}function wr(){je=An=null,Me=!1}function Sf(){var e=La;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),La=null),e}function jo(e){La===null?La=[e]:La.push(e)}var Mf=N(null),Dr=null,ta=null;function Oa(e,n,a){Mt(Mf,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Mf.current,nt(Mf)}function Ef(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function bf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Ef(f.return,a,e),o||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ef(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ts(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var b=u.type;ei(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===St.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Sl):e=[Sl])}u=u.return}e!==null&&bf(n,e,a,o),n.flags|=262144}function cu(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ur(e){Dr=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Bm(Dr,e)}function fu(e,n){return Dr===null&&Ur(e),Bm(e,n)}function Bm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(r(308));ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ta=ta.next=n;return a}var Vy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ky=s.unstable_scheduleCallback,Xy=s.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new Vy,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&ky(Xy,function(){e.controller.abort()})}var Qo=null,Af=0,As=0,Rs=null;function qy(e,n){if(Qo===null){var a=Qo=[];Af=0,As=wh(),Rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Af++,n.then(Im,Im),n}function Im(){if(--Af===0&&Qo!==null){Rs!==null&&(Rs.status="fulfilled");var e=Qo;Qo=null,As=0,Rs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Wy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Hm=P.S;P.S=function(e,n){E_=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qy(e,n),Hm!==null&&Hm(e,n)};var Lr=N(null);function Rf(){var e=Lr.current;return e!==null?e:qe.pooledCache}function hu(e,n){n===null?Mt(Lr,Lr.current):Mt(Lr,n.pool)}function Gm(){var e=Rf();return e===null?null:{parent:cn._currentValue,pool:e}}var Cs=Error(r(460)),Cf=Error(r(474)),du=Error(r(542)),pu={then:function(){}};function Vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function km(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qm(e),e}throw Or=n,Cs}}function Nr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Or=a,Cs):a}}var Or=null;function Xm(){if(Or===null)throw Error(r(459));var e=Or;return Or=null,e}function qm(e){if(e===Cs||e===du)throw Error(r(483))}var ws=null,Ko=0;function mu(e){var n=Ko;return Ko+=1,ws===null&&(ws=[]),km(ws,e,n)}function Jo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gu(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wm(e){function n(j,G){if(e){var J=j.deletions;J===null?(j.deletions=[G],j.flags|=16):J.push(G)}}function a(j,G){if(!e)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function o(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function u(j,G){return j=Ji(j,G),j.index=0,j.sibling=null,j}function f(j,G,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<G?(j.flags|=67108866,G):J):(j.flags|=67108866,G)):(j.flags|=1048576,G)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,G,J,pt){return G===null||G.tag!==6?(G=gf(J,j.mode,pt),G.return=j,G):(G=u(G,J),G.return=j,G)}function z(j,G,J,pt){var Kt=J.type;return Kt===A?ft(j,G,J.props.children,pt,J.key):G!==null&&(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&Nr(Kt)===G.type)?(G=u(G,J.props),Jo(G,J),G.return=j,G):(G=lu(J.type,J.key,J.props,null,j.mode,pt),Jo(G,J),G.return=j,G)}function $(j,G,J,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=_f(J,j.mode,pt),G.return=j,G):(G=u(G,J.children||[]),G.return=j,G)}function ft(j,G,J,pt,Kt){return G===null||G.tag!==7?(G=Cr(J,j.mode,pt,Kt),G.return=j,G):(G=u(G,J),G.return=j,G)}function vt(j,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gf(""+G,j.mode,J),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return J=lu(G.type,G.key,G.props,null,j.mode,J),Jo(J,G),J.return=j,J;case E:return G=_f(G,j.mode,J),G.return=j,G;case k:return G=Nr(G),vt(j,G,J)}if(gt(G)||lt(G))return G=Cr(G,j.mode,J,null),G.return=j,G;if(typeof G.then=="function")return vt(j,mu(G),J);if(G.$$typeof===L)return vt(j,fu(j,G),J);gu(j,G)}return null}function tt(j,G,J,pt){var Kt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:b(j,G,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Kt?z(j,G,J,pt):null;case E:return J.key===Kt?$(j,G,J,pt):null;case k:return J=Nr(J),tt(j,G,J,pt)}if(gt(J)||lt(J))return Kt!==null?null:ft(j,G,J,pt,null);if(typeof J.then=="function")return tt(j,G,mu(J),pt);if(J.$$typeof===L)return tt(j,G,fu(j,J),pt);gu(j,J)}return null}function st(j,G,J,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,b(G,j,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return j=j.get(pt.key===null?J:pt.key)||null,z(G,j,pt,Kt);case E:return j=j.get(pt.key===null?J:pt.key)||null,$(G,j,pt,Kt);case k:return pt=Nr(pt),st(j,G,J,pt,Kt)}if(gt(pt)||lt(pt))return j=j.get(J)||null,ft(G,j,pt,Kt,null);if(typeof pt.then=="function")return st(j,G,J,mu(pt),Kt);if(pt.$$typeof===L)return st(j,G,J,fu(G,pt),Kt);gu(G,pt)}return null}function Ht(j,G,J,pt){for(var Kt=null,we=null,Xt=G,ue=G=0,Se=null;Xt!==null&&ue<J.length;ue++){Xt.index>ue?(Se=Xt,Xt=null):Se=Xt.sibling;var De=tt(j,Xt,J[ue],pt);if(De===null){Xt===null&&(Xt=Se);break}e&&Xt&&De.alternate===null&&n(j,Xt),G=f(De,G,ue),we===null?Kt=De:we.sibling=De,we=De,Xt=Se}if(ue===J.length)return a(j,Xt),Me&&$i(j,ue),Kt;if(Xt===null){for(;ue<J.length;ue++)Xt=vt(j,J[ue],pt),Xt!==null&&(G=f(Xt,G,ue),we===null?Kt=Xt:we.sibling=Xt,we=Xt);return Me&&$i(j,ue),Kt}for(Xt=o(Xt);ue<J.length;ue++)Se=st(Xt,j,ue,J[ue],pt),Se!==null&&(e&&Se.alternate!==null&&Xt.delete(Se.key===null?ue:Se.key),G=f(Se,G,ue),we===null?Kt=Se:we.sibling=Se,we=Se);return e&&Xt.forEach(function(Ja){return n(j,Ja)}),Me&&$i(j,ue),Kt}function $t(j,G,J,pt){if(J==null)throw Error(r(151));for(var Kt=null,we=null,Xt=G,ue=G=0,Se=null,De=J.next();Xt!==null&&!De.done;ue++,De=J.next()){Xt.index>ue?(Se=Xt,Xt=null):Se=Xt.sibling;var Ja=tt(j,Xt,De.value,pt);if(Ja===null){Xt===null&&(Xt=Se);break}e&&Xt&&Ja.alternate===null&&n(j,Xt),G=f(Ja,G,ue),we===null?Kt=Ja:we.sibling=Ja,we=Ja,Xt=Se}if(De.done)return a(j,Xt),Me&&$i(j,ue),Kt;if(Xt===null){for(;!De.done;ue++,De=J.next())De=vt(j,De.value,pt),De!==null&&(G=f(De,G,ue),we===null?Kt=De:we.sibling=De,we=De);return Me&&$i(j,ue),Kt}for(Xt=o(Xt);!De.done;ue++,De=J.next())De=st(Xt,j,ue,De.value,pt),De!==null&&(e&&De.alternate!==null&&Xt.delete(De.key===null?ue:De.key),G=f(De,G,ue),we===null?Kt=De:we.sibling=De,we=De);return e&&Xt.forEach(function(iM){return n(j,iM)}),Me&&$i(j,ue),Kt}function Ve(j,G,J,pt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Kt=J.key;G!==null;){if(G.key===Kt){if(Kt=J.type,Kt===A){if(G.tag===7){a(j,G.sibling),pt=u(G,J.props.children),pt.return=j,j=pt;break t}}else if(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&Nr(Kt)===G.type){a(j,G.sibling),pt=u(G,J.props),Jo(pt,J),pt.return=j,j=pt;break t}a(j,G);break}else n(j,G);G=G.sibling}J.type===A?(pt=Cr(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=lu(J.type,J.key,J.props,null,j.mode,pt),Jo(pt,J),pt.return=j,j=pt)}return v(j);case E:t:{for(Kt=J.key;G!==null;){if(G.key===Kt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(j,G.sibling),pt=u(G,J.children||[]),pt.return=j,j=pt;break t}else{a(j,G);break}else n(j,G);G=G.sibling}pt=_f(J,j.mode,pt),pt.return=j,j=pt}return v(j);case k:return J=Nr(J),Ve(j,G,J,pt)}if(gt(J))return Ht(j,G,J,pt);if(lt(J)){if(Kt=lt(J),typeof Kt!="function")throw Error(r(150));return J=Kt.call(J),$t(j,G,J,pt)}if(typeof J.then=="function")return Ve(j,G,mu(J),pt);if(J.$$typeof===L)return Ve(j,G,fu(j,J),pt);gu(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(j,G.sibling),pt=u(G,J),pt.return=j,j=pt):(a(j,G),pt=gf(J,j.mode,pt),pt.return=j,j=pt),v(j)):a(j,G)}return function(j,G,J,pt){try{Ko=0;var Kt=Ve(j,G,J,pt);return ws=null,Kt}catch(Xt){if(Xt===Cs||Xt===du)throw Xt;var we=ni(29,Xt,null,j.mode);return we.lanes=pt,we.return=j,we}finally{}}}var Pr=Wm(!0),Ym=Wm(!1),Pa=!1;function wf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ou(e),Dm(e,null,a),n}return su(e,o,n,a),ou(e)}function $o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Po(e,a)}}function Uf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lf=!1;function tl(){if(Lf){var e=Rs;if(e!==null)throw e}}function el(e,n,a,o){Lf=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var z=b,$=z.next;z.next=null,v===null?f=$:v.next=$,v=z;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==v&&(b===null?ft.firstBaseUpdate=$:b.next=$,ft.lastBaseUpdate=z))}if(f!==null){var vt=u.baseState;v=0,ft=$=z=null,b=f;do{var tt=b.lane&-536870913,st=tt!==b.lane;if(st?(ye&tt)===tt:(o&tt)===tt){tt!==0&&tt===As&&(Lf=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ht=e,$t=b;tt=n;var Ve=a;switch($t.tag){case 1:if(Ht=$t.payload,typeof Ht=="function"){vt=Ht.call(Ve,vt,tt);break t}vt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=$t.payload,tt=typeof Ht=="function"?Ht.call(Ve,vt,tt):Ht,tt==null)break t;vt=_({},vt,tt);break t;case 2:Pa=!0}}tt=b.callback,tt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?($=ft=st,z=vt):ft=ft.next=st,v|=tt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;st=b,b=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ft===null&&(z=vt),u.baseState=z,u.firstBaseUpdate=$,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Va|=v,e.lanes=v,e.memoizedState=vt}}function jm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Zm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jm(a[e],n)}var Ds=N(null),_u=N(0);function Qm(e,n){e=ca,Mt(_u,e),Mt(Ds,n),ca=e|n.baseLanes}function Nf(){Mt(_u,ca),Mt(Ds,Ds.current)}function Of(){ca=_u.current,nt(Ds),nt(_u)}var ii=N(null),mi=null;function Ba(e){var n=e.alternate;Mt(rn,rn.current&1),Mt(ii,e),mi===null&&(n===null||Ds.current!==null||n.memoizedState!==null)&&(mi=e)}function Pf(e){Mt(rn,rn.current),Mt(ii,e),mi===null&&(mi=e)}function Km(e){e.tag===22?(Mt(rn,rn.current),Mt(ii,e),mi===null&&(mi=e)):Ia()}function Ia(){Mt(rn,rn.current),Mt(ii,ii.current)}function ai(e){nt(ii),mi===e&&(mi=null),nt(rn)}var rn=N(0);function vu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gh(a)||Vh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,le=null,He=null,fn=null,xu=!1,Us=!1,zr=!1,yu=0,nl=0,Ls=null,Yy=0;function tn(){throw Error(r(321))}function zf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Ff(e,n,a,o,u,f){return na=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Og:Jf,zr=!1,f=a(o,u),zr=!1,Us&&(f=$m(n,a,o,u)),Jm(e),f}function Jm(e){P.H=rl;var n=He!==null&&He.next!==null;if(na=0,fn=He=le=null,xu=!1,nl=0,Ls=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&cu(e)&&(hn=!0))}function $m(e,n,a,o){le=e;var u=0;do{if(Us&&(Ls=null),nl=0,Us=!1,25<=u)throw Error(r(301));if(u+=1,fn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Pg,f=n(a,o)}while(Us);return f}function jy(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?il(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(le.flags|=1024),n}function Bf(){var e=yu!==0;return yu=0,e}function If(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hf(e){if(xu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xu=!1}na=0,fn=He=le=null,Us=!1,nl=yu=0,Ls=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?le.memoizedState=fn=e:fn=fn.next=e,fn}function sn(){if(He===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=fn===null?le.memoizedState:fn.next;if(n!==null)fn=n,He=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},fn===null?le.memoizedState=fn=e:fn=fn.next=e}return fn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(e){var n=nl;return nl+=1,Ls===null&&(Ls=[]),e=km(Ls,e,n),n=le,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Og:Jf),e}function Mu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return il(e);if(e.$$typeof===L)return Rn(e)}throw Error(r(438,String(e)))}function Gf(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function Eu(e){var n=sn();return Vf(n,He,e)}function Vf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,z=null,$=n,ft=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(ye&vt)===vt:(na&vt)===vt){var tt=$.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===As&&(ft=!0);else if((na&tt)===tt){$=$.next,tt===As&&(ft=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(b=z=vt,v=f):z=z.next=vt,le.lanes|=tt,Va|=tt;vt=$.action,zr&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else tt={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(b=z=tt,v=f):z=z.next=tt,le.lanes|=vt,Va|=vt;$=$.next}while($!==null&&$!==n);if(z===null?v=f:z.next=b,!ei(f,e.memoizedState)&&(hn=!0,ft&&(a=Rs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kf(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);ei(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function tg(e,n,a){var o=le,u=sn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ei((He||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,Wf(ig.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Ns(9,{destroy:void 0},ng.bind(null,o,u,a,n),null),qe===null)throw Error(r(349));f||(na&127)!==0||eg(o,n,a)}return a}function eg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Su(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ng(e,n,a,o){n.value=a,n.getSnapshot=o,ag(n)&&rg(e)}function ig(e,n,a){return a(function(){ag(n)&&rg(e)})}function ag(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function rg(e){var n=Rr(e,2);n!==null&&jn(n,e,2)}function Xf(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),zr){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function sg(e,n,a,o){return e.baseState=a,Vf(e,He,typeof o=="function"?o:ia)}function Zy(e,n,a,o,u){if(Au(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,og(n,f)):(f.next=a.next,n.pending=a.next=f)}}function og(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var b=a(u,o),z=P.S;z!==null&&z(v,b),lg(e,n,b)}catch($){qf(e,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,o),lg(e,n,f)}catch($){qf(e,n,$)}}function lg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ug(e,n,o)},function(o){return qf(e,n,o)}):ug(e,n,a)}function ug(e,n,a){n.status="fulfilled",n.value=a,cg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,og(e,a)))}function qf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cg(n),n=n.next;while(n!==o)}e.action=null}function cg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fg(e,n){return n}function hg(e,n){if(Me){var a=qe.formState;if(a!==null){t:{var o=le;if(Me){if(je){e:{for(var u=je,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=gi(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},a.queue=o,a=Ug.bind(null,le,o),o.dispatch=a,o=Xf(!1),f=Kf.bind(null,le,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Zy.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dg(e){var n=sn();return pg(n,He,e)}function pg(e,n,a){if(n=Vf(e,n,fg)[0],e=Eu(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=il(n)}catch(v){throw v===Cs?du:v}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Ns(9,{destroy:void 0},Qy.bind(null,u,a),null)),[o,f,e]}function Qy(e,n){e.action=n}function mg(e){var n=sn(),a=He;if(a!==null)return pg(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ns(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Su(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gg(){return sn().memoizedState}function bu(e,n,a,o){var u=In();le.flags|=e,u.memoizedState=Ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tu(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;He!==null&&o!==null&&zf(o,He.memoizedState.deps)?u.memoizedState=Ns(n,f,a,o):(le.flags|=e,u.memoizedState=Ns(1|n,f,a,o))}function _g(e,n){bu(8390656,8,e,n)}function Wf(e,n){Tu(2048,8,e,n)}function Ky(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Su(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=sn().memoizedState;return Ky({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function xg(e,n){return Tu(4,2,e,n)}function yg(e,n){return Tu(4,4,e,n)}function Sg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mg(e,n,a){a=a!=null?a.concat([e]):null,Tu(4,4,Sg.bind(null,n,e),a)}function Yf(){}function Eg(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bg(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zf(n,o[1]))return o[0];if(o=e(),zr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function jf(e,n,a){return a===void 0||(na&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T_(),le.lanes|=e,Va|=e,a)}function Tg(e,n,a,o){return ei(a,n)?a:Ds.current!==null?(e=jf(e,a,o),ei(e,n)||(hn=!0),e):(na&42)===0||(na&1073741824)!==0&&(ye&261930)===0?(hn=!0,e.memoizedState=a):(e=T_(),le.lanes|=e,Va|=e,n)}function Ag(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var v=P.T,b={};P.T=b,Kf(e,!1,n,a);try{var z=u(),$=P.S;if($!==null&&$(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=Wy(z,o);al(e,n,ft,oi(e))}else al(e,n,o,oi(e))}catch(vt){al(e,n,{then:function(){},status:"rejected",reason:vt},oi())}finally{K.p=f,v!==null&&b.types!==null&&(v.types=b.types),P.T=v}}function Jy(){}function Zf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Rg(e).queue;Ag(e,u,n,Q,a===null?Jy:function(){return Cg(e),a(o)})}function Rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cg(e){var n=Rg(e);n.next===null&&(n=e.alternate.memoizedState),al(e,n.next.queue,{},oi())}function Qf(){return Rn(Sl)}function wg(){return sn().memoizedState}function Dg(){return sn().memoizedState}function $y(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=za(a);var o=Fa(n,e,a);o!==null&&(jn(o,n,a),$o(o,n,a)),n={cache:Tf()},e.payload=n;return}n=n.return}}function tS(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Au(e)?Lg(n,a):(a=pf(e,n,a,o),a!==null&&(jn(a,e,o),Ng(a,n,o)))}function Ug(e,n,a){var o=oi();al(e,n,a,o)}function al(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Lg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,ei(b,v))return su(e,n,u,0),qe===null&&ru(),!1}catch{}finally{}if(a=pf(e,n,u,o),a!==null)return jn(a,e,o),Ng(a,n,o),!0}return!1}function Kf(e,n,a,o){if(o={lane:2,revertLane:wh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Au(e)){if(n)throw Error(r(479))}else n=pf(e,a,o,2),n!==null&&jn(n,e,2)}function Au(e){var n=e.alternate;return e===le||n!==null&&n===le}function Lg(e,n){Us=xu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Po(e,a)}}var rl={readContext:Rn,use:Mu,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};rl.useEffectEvent=tn;var Og={readContext:Rn,use:Mu,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:_g,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bu(4194308,4,Sg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bu(4194308,4,e,n)},useInsertionEffect:function(e,n){bu(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(zr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(zr){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=tS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Xf(e);var n=e.queue,a=Ug.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yf,useDeferredValue:function(e,n){var a=In();return jf(a,e,n)},useTransition:function(){var e=Xf(!1);return e=Ag.bind(null,le,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=In();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(ye&127)!==0||eg(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_g(ig.bind(null,o,f,e),[e]),o.flags|=2048,Ns(9,{destroy:void 0},ng.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=qe.identifierPrefix;if(Me){var a=Hi,o=Ii;a=(o&~(1<<32-ee(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qf,useFormState:hg,useActionState:hg,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gf,useCacheRefresh:function(){return In().memoizedState=$y.bind(null,le)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Jf={readContext:Rn,use:Mu,useCallback:Eg,useContext:Rn,useEffect:Wf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:bg,useReducer:Eu,useRef:gg,useState:function(){return Eu(ia)},useDebugValue:Yf,useDeferredValue:function(e,n){var a=sn();return Tg(a,He.memoizedState,e,n)},useTransition:function(){var e=Eu(ia)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:il(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Qf,useFormState:dg,useActionState:dg,useOptimistic:function(e,n){var a=sn();return sg(a,He,e,n)},useMemoCache:Gf,useCacheRefresh:Dg};Jf.useEffectEvent=vg;var Pg={readContext:Rn,use:Mu,useCallback:Eg,useContext:Rn,useEffect:Wf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:yg,useMemo:bg,useReducer:kf,useRef:gg,useState:function(){return kf(ia)},useDebugValue:Yf,useDeferredValue:function(e,n){var a=sn();return He===null?jf(a,e,n):Tg(a,He.memoizedState,e,n)},useTransition:function(){var e=kf(ia)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:il(e),n]},useSyncExternalStore:tg,useId:wg,useHostTransitionStatus:Qf,useFormState:mg,useActionState:mg,useOptimistic:function(e,n){var a=sn();return He!==null?sg(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:Dg};Pg.useEffectEvent=vg;function $f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var th={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(jn(n,e,o),$o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(jn(n,e,o),$o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(e,o,a),n!==null&&(jn(n,e,a),$o(n,e,a))}};function zg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!qo(a,o)||!qo(u,f):!0}function Fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&th.enqueueReplaceState(n,n.state,null)}function Fr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Bg(e){au(e)}function Ig(e){console.error(e)}function Hg(e){au(e)}function Ru(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function eh(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Ru(e,n)},a}function Vg(e){return e=za(e),e.tag=3,e}function kg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Gg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Gg(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function eS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ts(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Iu():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ah(e,o,u)),!1;case 22:return a.flags|=65536,o===pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ah(e,o,u)),!1}throw Error(r(435,a.tag))}return Ah(e,o,u),Iu(),!1}if(Me)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==yf&&(e=Error(r(422),{cause:o}),jo(fi(e,a)))):(o!==yf&&(n=Error(r(423),{cause:o}),jo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=eh(e.stateNode,o,u),Uf(e,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:o});if(f=fi(f,a),dl===null?dl=[f]:dl.push(f),en!==4&&(en=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=eh(a.stateNode,o,e),Uf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vg(u),kg(u,e,a,o),Uf(a,u),!1}a=a.return}while(a!==null);return!1}var nh=Error(r(461)),hn=!1;function Cn(e,n,a,o){n.child=e===null?Ym(n,null,a,o):Pr(n,e.child,a,o)}function Xg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var b in o)b!=="ref"&&(v[b]=o[b])}else v=o;return Ur(n),o=Ff(e,n,a,v,f,u),b=Bf(),e!==null&&!hn?(If(e,n,u),aa(e,n,u)):(Me&&b&&vf(n),n.flags|=1,Cn(e,n,o,u),n.child)}function qg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!mf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wg(e,n,f,o,u)):(e=lu(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ch(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:qo,a(v,o)&&e.ref===n.ref)return aa(e,n,u)}return n.flags|=1,e=Ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function Wg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(qo(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,ch(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,aa(e,n,u)}return ih(e,n,a,o,u)}function Yg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return jg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hu(n,f!==null?f.cachePool:null),f!==null?Qm(n,f):Nf(),Km(n);else return o=n.lanes=536870912,jg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(hu(n,f.cachePool),Qm(n,f),Ia(),n.memoizedState=null):(e!==null&&hu(n,null),Nf(),Ia());return Cn(e,n,u,a),n.child}function sl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(e,n,a,o,u){var f=Rf();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hu(n,null),Nf(),Km(n),e!==null&&Ts(e,n,o,!0),n.childLanes=u,null}function Cu(e,n){return n=Du({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zg(e,n,a){return Pr(n,e.child,null,a),e=Cu(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function nS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Cu(n,o),n.lanes=536870912,sl(null,e);if(Pf(n),(e=je)?(e=ov(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(e),a.return=n,n.child=a,An=n,je=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Cu(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Pf(n),u)if(n.flags&256)n.flags&=-257,n=Zg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||Ts(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=qe,o!==null&&(v=Fi(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Rr(e,v),jn(o,e,v),nh;Iu(),n=Zg(e,n,a)}else e=f.treeContext,je=gi(v.nextSibling),An=n,Me=!0,La=null,pi=!1,e!==null&&Pm(n,e),n=Cu(n,o),n.flags|=4096;return n}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wu(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ih(e,n,a,o,u){return Ur(n),a=Ff(e,n,a,o,void 0,u),o=Bf(),e!==null&&!hn?(If(e,n,u),aa(e,n,u)):(Me&&o&&vf(n),n.flags|=1,Cn(e,n,a,u),n.child)}function Qg(e,n,a,o,u,f){return Ur(n),n.updateQueue=null,a=$m(n,o,a,u),Jm(e),o=Bf(),e!==null&&!hn?(If(e,n,f),aa(e,n,f)):(Me&&o&&vf(n),n.flags|=1,Cn(e,n,a,f),n.child)}function Kg(e,n,a,o,u){if(Ur(n),n.stateNode===null){var f=Ss,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=th,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):Ss,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&($f(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&th.enqueueReplaceState(f,f.state,null),el(n,o,f,u),tl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,z=Fr(a,b);f.props=z;var $=f.context,ft=a.contextType;v=Ss,typeof ft=="object"&&ft!==null&&(v=Rn(ft));var vt=a.getDerivedStateFromProps;ft=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==v)&&Fg(n,f,o,v),Pa=!1;var tt=n.memoizedState;f.state=tt,el(n,o,f,u),tl(),$=n.memoizedState,b||tt!==$||Pa?(typeof vt=="function"&&($f(n,a,vt,o),$=n.memoizedState),(z=Pa||zg(n,a,z,o,tt,$,v))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=v,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Df(e,n),v=n.memoizedProps,ft=Fr(a,v),f.props=ft,vt=n.pendingProps,tt=f.context,$=a.contextType,z=Ss,typeof $=="object"&&$!==null&&(z=Rn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==vt||tt!==z)&&Fg(n,f,o,z),Pa=!1,tt=n.memoizedState,f.state=tt,el(n,o,f,u),tl();var st=n.memoizedState;v!==vt||tt!==st||Pa||e!==null&&e.dependencies!==null&&cu(e.dependencies)?(typeof b=="function"&&($f(n,a,b,o),st=n.memoizedState),(ft=Pa||zg(n,a,ft,o,tt,st,z)||e!==null&&e.dependencies!==null&&cu(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,st,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,st,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=z,o=ft):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,wu(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Pr(n,e.child,null,u),n.child=Pr(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=aa(e,n,u),e}function Jg(e,n,a,o){return wr(),n.flags|=256,Cn(e,n,a,o),n.child}var ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rh(e){return{baseLanes:e,cachePool:Gm()}}function sh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function $g(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Ba(n):Ia(),(e=je)?(e=ov(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(e),a.return=n,n.child=a,An=n,je=null)):e=null,e===null)throw Na(n);return Vh(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Ia(),u=n.mode,b=Du({mode:"hidden",children:b},u),o=Cr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=rh(a),o.childLanes=sh(e,v,a),n.memoizedState=ah,sl(null,o)):(Ba(n),oh(n,b))}var z=e.memoizedState;if(z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=lh(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),b=o.fallback,u=n.mode,o=Du({mode:"visible",children:o.children},u),b=Cr(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,Pr(n,e.child,null,a),o=n.child,o.memoizedState=rh(a),o.childLanes=sh(e,v,a),n.memoizedState=ah,n=sl(null,o));else if(Ba(n),Vh(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var $=v.dgst;v=$,o=Error(r(419)),o.stack="",o.digest=v,jo({value:o,source:null,stack:null}),n=lh(e,n,a)}else if(hn||Ts(e,n,a,!1),v=(a&e.childLanes)!==0,hn||v){if(v=qe,v!==null&&(o=Fi(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,Rr(e,o),jn(v,e,o),nh;Gh(b)||Iu(),n=lh(e,n,a)}else Gh(b)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,je=gi(b.nextSibling),An=n,Me=!0,La=null,pi=!1,e!==null&&Pm(n,e),n=oh(n,o.children),n.flags|=4096);return n}return u?(Ia(),b=o.fallback,u=n.mode,z=e.child,$=z.sibling,o=Ji(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?b=Ji($,b):(b=Cr(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,sl(null,o),o=n.child,b=e.child.memoizedState,b===null?b=rh(a):(u=b.cachePool,u!==null?(z=cn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Gm(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=sh(e,v,a),n.memoizedState=ah,sl(e.child,o)):(Ba(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function oh(e,n){return n=Du({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Du(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function lh(e,n,a){return Pr(n,e.child,null,a),e=oh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ef(e.return,n,a)}function uh(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function e_(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=rn.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,Mt(rn,v),Cn(e,n,o,a),o=Me?Yo:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t_(e,a,n);else if(e.tag===19)t_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vu(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uh(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}uh(n,!0,a,null,f,o);break;case"together":uh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ts(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ch(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cu(e)))}function iS(e,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),Oa(n,cn,e.memoizedState.cache),wr();break;case 27:case 5:re(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$g(e,n,a):(Ba(n),e=aa(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ts(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return e_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,Yg(e,n,a,n.pendingProps);case 24:Oa(n,cn,e.memoizedState.cache)}return aa(e,n,a)}function n_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!ch(e,a)&&(n.flags&128)===0)return hn=!1,iS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Me&&(n.flags&1048576)!==0&&Om(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Nr(n.elementType),n.type=e,typeof e=="function")mf(e)?(o=Fr(e,o),n.tag=1,n=Kg(null,n,e,o,a)):(n.tag=0,n=ih(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Xg(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=qg(null,n,e,o,a);break t}}throw n=mt(e)||e,Error(r(306,n,""))}}return n;case 0:return ih(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Fr(o,n.pendingProps),Kg(e,n,o,u,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Df(e,n),el(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Oa(n,cn,o),o!==f.cache&&bf(n,[cn],a,!0),tl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jg(e,n,o,a);break t}else if(o!==u){u=fi(Error(r(424)),n),jo(u),n=Jg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=gi(e.firstChild),An=n,Me=!0,La=null,pi=!0,a=Ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wr(),o===u){n=aa(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return wu(e,n),e===null?(a=dv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Wu(Tt.current).createElement(a),o[$e]=n,o[Tn]=e,wn(o,a,e),yt(o),n.stateNode=o):n.memoizedState=dv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return re(n),e===null&&Me&&(o=n.stateNode=cv(n.type,n.pendingProps,Tt.current),An=n,pi=!0,u=je,Ya(n.type)?(kh=u,je=gi(o.firstChild)):je=u),Cn(e,n,n.pendingProps.children,a),wu(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=je)&&(o=NS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,An=n,je=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Na(n)),re(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Bh(u,f)?o=null:v!==null&&Bh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ff(e,n,jy,null,null,a),Sl._currentValue=u),wu(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=je)&&(a=OS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,An=n,je=null,e=!0):e=!1),e||Na(n)),null;case 13:return $g(e,n,a);case 4:return kt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Pr(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return Xg(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ur(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return qg(e,n,n.type,n.pendingProps,a);case 15:return Wg(e,n,n.type,n.pendingProps,a);case 19:return e_(e,n,a);case 31:return nS(e,n,a);case 22:return Yg(e,n,a,n.pendingProps);case 24:return Ur(n),o=Rn(cn),e===null?(u=Rf(),u===null&&(u=qe,f=Tf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},wf(n),Oa(n,cn,u)):((e.lanes&a)!==0&&(Df(e,n),el(n,null,null,a),tl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,cn,o)):(o=f.cache,Oa(n,cn,o),o!==u.cache&&bf(n,[cn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ra(e){e.flags|=4}function fh(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(w_())e.flags|=8192;else throw Or=pu,Cf}else e.flags&=-16777217}function i_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vv(n))if(w_())e.flags|=8192;else throw Or=pu,Cf}function Uu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?mn():536870912,e.lanes|=n,Fs|=n)}function ol(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function aS(e,n,a){var o=n.pendingProps;switch(xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(cn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bs(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sf())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Ze(n),i_(n,f)):(Ze(n),fh(n,u,null,o,a))):f?f!==e.memoizedState?(ra(n),Ze(n),i_(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ze(n),fh(n,u,e,o,a)),null;case 27:if(Be(n),a=Tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=Z.current,bs(n)?zm(n):(e=cv(u,o,a),n.stateNode=e,ra(n))}return Ze(n),null;case 5:if(Be(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Z.current,bs(n))zm(n);else{var v=Wu(Tt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[$e]=n,f[Tn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ze(n),fh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Tt.current,bs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[$e]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$_(e.nodeValue,a)),e||Na(n,!0)}else e=Wu(e).createTextNode(o),e[$e]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=bs(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[$e]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=bs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[$e]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Uu(n,n.updateQueue),Ze(n),null);case 4:return Gt(),e===null&&Nh(n.stateNode.containerInfo),Ze(n),null;case 10:return ea(n.type),Ze(n),null;case 19:if(nt(rn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)ol(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vu(e),f!==null){for(n.flags|=128,ol(o,!1),e=f.updateQueue,n.updateQueue=e,Uu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Um(a,e),a=a.sibling;return Mt(rn,rn.current&1|2),Me&&$i(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ht()>zu&&(n.flags|=128,u=!0,ol(o,!1),n.lanes=4194304)}else{if(!u)if(e=vu(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Uu(n,e),ol(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return Ze(n),null}else 2*ht()-o.renderingStartTime>zu&&a!==536870912&&(n.flags|=128,u=!0,ol(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ht(),e.sibling=null,a=rn.current,Mt(rn,u?a&1|2:a&1),Me&&$i(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ai(n),Of(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Uu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(Lr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function rS(e,n){switch(xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(cn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Be(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(rn),null;case 4:return Gt(),null;case 10:return ea(n.type),null;case 22:case 23:return ai(n),Of(),e!==null&&nt(Lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function a_(e,n){switch(xf(n),n.tag){case 3:ea(cn),Gt();break;case 26:case 27:case 5:Be(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:nt(rn);break;case 10:ea(n.type);break;case 22:case 23:ai(n),Of(),e!==null&&nt(Lr);break;case 24:ea(cn)}}function ll(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var z=a,$=b;try{$()}catch(ft){Fe(u,z,ft)}}}o=o.next}while(o!==f)}}catch(ft){Fe(n,n.return,ft)}}function r_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Zm(n,a)}catch(o){Fe(e,e.return,o)}}}function s_(e,n,a){a.props=Fr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function ul(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Gi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function o_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function hh(e,n,a){try{var o=e.stateNode;RS(o,e.type,a,n),o[Tn]=n}catch(u){Fe(e,e.return,u)}}function l_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function dh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||l_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ph(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ph(e,n,a),e=e.sibling;e!==null;)ph(e,n,a),e=e.sibling}function Lu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Lu(e,n,a),e=e.sibling;e!==null;)Lu(e,n,a),e=e.sibling}function u_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[$e]=e,n[Tn]=a}catch(f){Fe(e,e.return,f)}}var sa=!1,dn=!1,mh=!1,c_=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function sS(e,n){if(e=e.containerInfo,zh=$u,e=Mm(e),lf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,z=-1,$=0,ft=0,vt=e,tt=null;e:for(;;){for(var st;vt!==a||u!==0&&vt.nodeType!==3||(b=v+u),vt!==f||o!==0&&vt.nodeType!==3||(z=v+o),vt.nodeType===3&&(v+=vt.nodeValue.length),(st=vt.firstChild)!==null;)tt=vt,vt=st;for(;;){if(vt===e)break e;if(tt===a&&++$===u&&(b=v),tt===f&&++ft===o&&(z=v),(st=vt.nextSibling)!==null)break;vt=tt,tt=vt.parentNode}vt=st}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fh={focusedElem:e,selectionRange:a},$u=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ht=Fr(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function f_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&ll(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=Fr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}o&64&&r_(a),o&512&&ul(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zm(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&o&4&&u_(a);case 26:case 5:la(e,a),n===null&&o&4&&o_(a),o&512&&ul(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&p_(e,a);break;case 13:la(e,a),o&4&&m_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mS.bind(null,a),PS(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||dn,u=sa;var f=dn;sa=o,(dn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):la(e,a),sa=u,dn=f}break;case 30:break;default:la(e,a)}}function h_(e){var n=e.alternate;n!==null&&(e.alternate=null,h_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Xn=!1;function oa(e,n,a){for(a=a.child;a!==null;)d_(e,n,a),a=a.sibling}function d_(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:dn||Gi(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Gi(a,n);var o=Je,u=Xn;Ya(a.type)&&(Je=a.stateNode,Xn=!1),oa(e,n,a),vl(a.stateNode),Je=o,Xn=u;break;case 5:dn||Gi(a,n);case 6:if(o=Je,u=Xn,Je=null,oa(e,n,a),Je=o,Xn=u,Je!==null)if(Xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(Xn?(e=Je,rv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),qs(e)):rv(Je,a.stateNode));break;case 4:o=Je,u=Xn,Je=a.stateNode.containerInfo,Xn=!0,oa(e,n,a),Je=o,Xn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),dn||Ha(4,a,n),oa(e,n,a);break;case 1:dn||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&s_(a,n,o)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,oa(e,n,a),dn=o;break;default:oa(e,n,a)}}function p_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qs(e)}catch(a){Fe(n,n.return,a)}}}function m_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qs(e)}catch(a){Fe(n,n.return,a)}}function oS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c_),n;default:throw Error(r(435,e.tag))}}function Nu(e,n){var a=oS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=gS.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(Ya(b.type)){Je=b.stateNode,Xn=!1;break t}break;case 5:Je=b.stateNode,Xn=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,Xn=!0;break t}b=b.return}if(Je===null)throw Error(r(160));d_(f,v,u),Je=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g_(n,e),n=n.sibling}var Ri=null;function g_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Wn(e),o&4&&(Ha(3,e,e.return),ll(3,e),Ha(5,e,e.return));break;case 1:qn(n,e),Wn(e),o&512&&(dn||a===null||Gi(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(qn(n,e),Wn(e),o&512&&(dn||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Mr]||f[$e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[$e]=e,yt(f),o=f;break t;case"link":var v=gv("link","href",u).get(o+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=gv("meta","content",u).get(o+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[$e]=e,yt(f),o=f}e.stateNode=o}else _v(u,e.type,e.stateNode);else e.stateNode=mv(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?_v(u,e.type,e.stateNode):mv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&hh(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Wn(e),o&512&&(dn||a===null||Gi(a,a.return)),a!==null&&o&4&&hh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Wn(e),o&512&&(dn||a===null||Gi(a,a.return)),e.flags&32){u=e.stateNode;try{ps(u,"")}catch(Ht){Fe(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,hh(e,u,a!==null?a.memoizedProps:u)),o&1024&&(mh=!0);break;case 6:if(qn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){Fe(e,e.return,Ht)}}break;case 3:if(Zu=null,u=Ri,Ri=Yu(n.containerInfo),qn(n,e),Ri=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{qs(n.containerInfo)}catch(Ht){Fe(e,e.return,Ht)}mh&&(mh=!1,__(e));break;case 4:o=Ri,Ri=Yu(e.stateNode.containerInfo),qn(n,e),Wn(e),Ri=o;break;case 12:qn(n,e),Wn(e);break;case 31:qn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nu(e,o)));break;case 13:qn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pu=ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nu(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=sa,ft=dn;if(sa=$||u,dn=ft||z,qn(n,e),dn=ft,sa=$,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||sa||dn||Br(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=z.stateNode;var vt=z.memoizedProps.style,tt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ht){Fe(z,z.return,Ht)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Ht){Fe(z,z.return,Ht)}}}else if(n.tag===18){if(a===null){z=n;try{var st=z.stateNode;u?sv(st,!0):sv(z.stateNode,!1)}catch(Ht){Fe(z,z.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Nu(e,a))));break;case 19:qn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nu(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(l_(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=dh(e);Lu(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ps(v,""),a.flags&=-33);var b=dh(e);Lu(e,b,v);break;case 3:case 4:var z=a.stateNode.containerInfo,$=dh(e);ph(e,$,z);break;default:throw Error(r(161))}}catch(ft){Fe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function __(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;__(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(e,n.alternate,n),n=n.sibling}function Br(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Br(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s_(n,n.return,a),Br(n);break;case 27:vl(n.stateNode);case 26:case 5:Gi(n,n.return),Br(n);break;case 22:n.memoizedState===null&&Br(n);break;case 30:Br(n);break;default:Br(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),ll(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Fe(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)jm(z[u],b)}catch($){Fe(o,o.return,$)}}a&&v&64&&r_(f),ul(f,f.return);break;case 27:u_(f);case 26:case 5:ua(u,f,a),a&&o===null&&v&4&&o_(f),ul(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&v&4&&p_(u,f);break;case 13:ua(u,f,a),a&&v&4&&m_(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),ul(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function gh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zo(a))}function _h(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zo(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)v_(e,n,a,o),n=n.sibling}function v_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&ll(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zo(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):cl(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,Os(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gh(v,n);break;case 24:Ci(e,n,a,o),u&2048&&_h(n.alternate,n);break;default:Ci(e,n,a,o)}}function Os(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,z=o,$=v.flags;switch(v.tag){case 0:case 11:case 15:Os(f,v,b,z,u),ll(8,v);break;case 23:break;case 22:var ft=v.stateNode;v.memoizedState!==null?ft._visibility&2?Os(f,v,b,z,u):cl(f,v):(ft._visibility|=2,Os(f,v,b,z,u)),u&&$&2048&&gh(v.alternate,v);break;case 24:Os(f,v,b,z,u),u&&$&2048&&_h(v.alternate,v);break;default:Os(f,v,b,z,u)}n=n.sibling}}function cl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:cl(a,o),u&2048&&gh(o.alternate,o);break;case 24:cl(a,o),u&2048&&_h(o.alternate,o);break;default:cl(a,o)}n=n.sibling}}var fl=8192;function Ps(e,n,a){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)x_(e,n,a),e=e.sibling}function x_(e,n,a){switch(e.tag){case 26:Ps(e,n,a),e.flags&fl&&e.memoizedState!==null&&YS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:Ps(e,n,a);break;case 3:case 4:var o=Ri;Ri=Yu(e.stateNode.containerInfo),Ps(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fl,fl=16777216,Ps(e,n,a),fl=o):Ps(e,n,a));break;default:Ps(e,n,a)}}function y_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,M_(o,e)}y_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S_(e),e=e.sibling}function S_(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ou(e)):hl(e);break;default:hl(e)}}function Ou(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,M_(o,e)}y_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Ou(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ou(n));break;default:Ou(n)}e=e.sibling}}function M_(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(h_(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var lS={getCacheForType:function(e){var n=Rn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},uS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,me=null,ye=0,ze=0,ri=null,Ga=!1,zs=!1,vh=!1,ca=0,en=0,Va=0,Ir=0,xh=0,si=0,Fs=0,dl=null,Yn=null,yh=!1,Pu=0,E_=0,zu=1/0,Fu=null,ka=null,_n=0,Xa=null,Bs=null,fa=0,Sh=0,Mh=null,b_=null,pl=0,Eh=null;function oi(){return(Ne&2)!==0&&ye!==0?ye&-ye:P.T!==null?wh():zo()}function T_(){if(si===0)if((ye&536870912)===0||Me){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),si=e}else si=536870912;return e=ii.current,e!==null&&(e.flags|=32),si}function jn(e,n,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Is(e,0),qa(e,ye,si,!1)),bn(e,a),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(Ir|=a),en===4&&qa(e,ye,si,!1)),Vi(e))}function A_(e,n,a){if((Ne&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?hS(e,n):Th(e,n,!0),f=o;do{if(u===0){zs&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!cS(a)){u=Th(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;u=dl;var z=b.current.memoizedState.isDehydrated;if(z&&(Is(b,v).flags|=256),v=Th(b,v,!1),v!==2){if(vh&&!z){b.errorRecoveryDisabledLanes|=f,Ir|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Is(e,0),qa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,si,!Ga);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Pu+300-ht(),10<u)){if(qa(o,n,si,!Ga),Ut(o,0,!0)!==0)break t;fa=n,o.timeoutHandle=iv(R_.bind(null,o,a,Yn,Fu,yh,n,si,Ir,Fs,Ga,f,"Throttled",-0,0),u);break t}R_(o,a,Yn,Fu,yh,n,si,Ir,Fs,Ga,f,null,-0,0)}}break}while(!0);Vi(e)}function R_(e,n,a,o,u,f,v,b,z,$,ft,vt,tt,st){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},x_(n,f,vt);var Ht=(f&62914560)===f?Pu-ht():(f&4194048)===f?E_-ht():0;if(Ht=jS(vt,Ht),Ht!==null){fa=f,e.cancelPendingCommit=Ht(P_.bind(null,e,n,f,a,o,u,v,b,z,ft,vt,null,tt,st)),qa(e,f,v,!$);return}}P_(e,n,f,a,o,u,v,b,z)}function cS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~xh,n&=~Ir,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-ee(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Oo(e,a,n)}function Bu(){return(Ne&6)===0?(ml(0),!1):!0}function bh(){if(me!==null){if(ze===0)var e=me.return;else e=me,ta=Dr=null,Hf(e),ws=null,Ko=0,e=me;for(;e!==null;)a_(e.alternate,e),e=e.return;me=null}}function Is(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,DS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,bh(),qe=e,me=a=Ji(e.current,null),ye=n,ze=0,ri=null,Ga=!1,zs=ne(e,n),vh=!1,Fs=si=xh=Ir=Va=en=0,Yn=dl=null,yh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ee(o),f=1<<u;n|=e[u],o&=~f}return ca=n,ru(),a}function C_(e,n){le=null,P.H=rl,n===Cs||n===du?(n=Xm(),ze=3):n===Cf?(n=Xm(),ze=4):ze=n===nh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,me===null&&(en=1,Ru(e,fi(n,e.current)))}function w_(){var e=ii.current;return e===null?!0:(ye&4194048)===ye?mi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===mi:!1}function D_(){var e=P.H;return P.H=rl,e===null?rl:e}function U_(){var e=P.A;return P.A=lS,e}function Iu(){en=4,Ga||(ye&4194048)!==ye&&ii.current!==null||(zs=!0),(Va&134217727)===0&&(Ir&134217727)===0||qe===null||qa(qe,ye,si,!1)}function Th(e,n,a){var o=Ne;Ne|=2;var u=D_(),f=U_();(qe!==e||ye!==n)&&(Fu=null,Is(e,n)),n=!1;var v=en;t:do try{if(ze!==0&&me!==null){var b=me,z=ri;switch(ze){case 8:bh(),v=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=ze;if(ze=0,ri=null,Hs(e,b,z,$),a&&zs){v=0;break t}break;default:$=ze,ze=0,ri=null,Hs(e,b,z,$)}}fS(),v=en;break}catch(ft){C_(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ta=Dr=null,Ne=o,P.H=u,P.A=f,me===null&&(qe=null,ye=0,ru()),v}function fS(){for(;me!==null;)L_(me)}function hS(e,n){var a=Ne;Ne|=2;var o=D_(),u=U_();qe!==e||ye!==n?(Fu=null,zu=ht()+500,Is(e,n)):zs=ne(e,n);t:do try{if(ze!==0&&me!==null){n=me;var f=ri;e:switch(ze){case 1:ze=0,ri=null,Hs(e,n,f,1);break;case 2:case 9:if(Vm(f)){ze=0,ri=null,N_(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Vi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Vm(f)?(ze=0,ri=null,N_(n)):(ze=0,ri=null,Hs(e,n,f,7));break;case 5:var v=null;switch(me.tag){case 26:v=me.memoizedState;case 5:case 27:var b=me;if(v?vv(v):b.stateNode.complete){ze=0,ri=null;var z=b.sibling;if(z!==null)me=z;else{var $=b.return;$!==null?(me=$,Hu($)):me=null}break e}}ze=0,ri=null,Hs(e,n,f,5);break;case 6:ze=0,ri=null,Hs(e,n,f,6);break;case 8:bh(),en=6;break t;default:throw Error(r(462))}}dS();break}catch(ft){C_(e,ft)}while(!0);return ta=Dr=null,P.H=o,P.A=u,Ne=a,me!==null?0:(qe=null,ye=0,ru(),en)}function dS(){for(;me!==null&&!T();)L_(me)}function L_(e){var n=n_(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?Hu(e):me=n}function N_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Qg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Qg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Hf(n);default:a_(a,n),n=me=Um(n,ca),n=n_(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?Hu(e):me=n}function Hs(e,n,a,o){ta=Dr=null,Hf(n),ws=null,Ko=0;var u=n.return;try{if(eS(e,u,n,a,ye)){en=1,Ru(e,fi(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;en=1,Ru(e,fi(a,e.current)),me=null;return}n.flags&32768?(Me||o===1?e=!0:zs||(ye&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),O_(n,e)):Hu(n)}function Hu(e){var n=e;do{if((n.flags&32768)!==0){O_(n,Ga);return}e=n.return;var a=aS(n.alternate,n,ca);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);en===0&&(en=5)}function O_(e,n){do{var a=rS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);en=6,me=null}function P_(e,n,a,o,u,f,v,b,z){e.cancelPendingCommit=null;do Gu();while(_n!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=df,bi(e,a,f,v,b,z),e===qe&&(me=qe=null,ye=0),Bs=n,Xa=e,fa=a,Sh=f,Mh=u,b_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_S(Dt,function(){return H_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,v=Ne,Ne|=4;try{sS(e,n,a)}finally{Ne=v,K.p=u,P.T=o}}_n=1,z_(),F_(),B_()}}function z_(){if(_n===1){_n=0;var e=Xa,n=Bs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Ne;Ne|=4;try{g_(n,e);var f=Fh,v=Mm(e.containerInfo),b=f.focusedElem,z=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&Sm(b.ownerDocument.documentElement,b)){if(z!==null&&lf(b)){var $=z.start,ft=z.end;if(ft===void 0&&(ft=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ft,b.value.length);else{var vt=b.ownerDocument||document,tt=vt&&vt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),Ht=b.textContent.length,$t=Math.min(z.start,Ht),Ve=z.end===void 0?$t:Math.min(z.end,Ht);!st.extend&&$t>Ve&&(v=Ve,Ve=$t,$t=v);var j=ym(b,$t),G=ym(b,Ve);if(j&&G&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==G.node||st.focusOffset!==G.offset)){var J=vt.createRange();J.setStart(j.node,j.offset),st.removeAllRanges(),$t>Ve?(st.addRange(J),st.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),st.addRange(J))}}}}for(vt=[],st=b;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var pt=vt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}$u=!!zh,Fh=zh=null}finally{Ne=u,K.p=o,P.T=a}}e.current=n,_n=2}}function F_(){if(_n===2){_n=0;var e=Xa,n=Bs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Ne;Ne|=4;try{f_(e,n.alternate,n)}finally{Ne=u,K.p=o,P.T=a}}_n=3}}function B_(){if(_n===4||_n===3){_n=0,et();var e=Xa,n=Bs,a=fa,o=b_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,Bs=Xa=null,I_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),hs(a),n=n.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var b=o[v];f(b.value,{componentStack:b.stack})}}finally{P.T=n,K.p=u}}(fa&3)!==0&&Gu(),Vi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Eh?pl++:(pl=0,Eh=e):pl=0,ml(0)}}function I_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zo(n)))}function Gu(){return z_(),F_(),B_(),H_()}function H_(){if(_n!==5)return!1;var e=Xa,n=Sh;Sh=0;var a=hs(fa),o=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=Mh,Mh=null;var f=Xa,v=fa;if(_n=0,Bs=Xa=null,fa=0,(Ne&6)!==0)throw Error(r(331));var b=Ne;if(Ne|=4,S_(f.current),v_(f,f.current,v,a),Ne=b,ml(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{K.p=u,P.T=o,I_(e,n)}}function G_(e,n,a){n=fi(a,n),n=eh(e.stateNode,n,2),e=Fa(e,n,2),e!==null&&(bn(e,2),Vi(e))}function Fe(e,n,a){if(e.tag===3)G_(e,e,a);else for(;n!==null;){if(n.tag===3){G_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=fi(a,e),a=Vg(2),o=Fa(n,a,2),o!==null&&(kg(a,o,n,e),bn(o,2),Vi(o));break}}n=n.return}}function Ah(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new uS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(vh=!0,u.add(a),e=pS.bind(null,e,n,a),n.then(e,e))}function pS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(en===4||en===3&&(ye&62914560)===ye&&300>ht()-Pu?(Ne&2)===0&&Is(e,0):xh|=a,Fs===ye&&(Fs=0)),Vi(e)}function V_(e,n){n===0&&(n=mn()),e=Rr(e,n),e!==null&&(bn(e,n),Vi(e))}function mS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),V_(e,a)}function gS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),V_(e,a)}function _S(e,n){return Yt(e,n)}var Vu=null,Gs=null,Rh=!1,ku=!1,Ch=!1,Wa=0;function Vi(e){e!==Gs&&e.next===null&&(Gs===null?Vu=Gs=e:Gs=Gs.next=e),ku=!0,Rh||(Rh=!0,xS())}function ml(e,n){if(!Ch&&ku){Ch=!0;do for(var a=!1,o=Vu;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-ee(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,W_(o,f))}else f=ye,f=Ut(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ne(o,f)||(a=!0,W_(o,f));o=o.next}while(a);Ch=!1}}function vS(){k_()}function k_(){ku=Rh=!1;var e=0;Wa!==0&&wS()&&(e=Wa);for(var n=ht(),a=null,o=Vu;o!==null;){var u=o.next,f=X_(o,n);f===0?(o.next=null,a===null?Vu=u:a.next=u,u===null&&(Gs=a)):(a=o,(e!==0||(f&3)!==0)&&(ku=!0)),o=u}_n!==0&&_n!==5||ml(e),Wa!==0&&(Wa=0)}function X_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-ee(f),b=1<<v,z=u[v];z===-1?((b&a)===0||(b&o)!==0)&&(u[v]=Ke(b,n)):z<=n&&(e.expiredLanes|=b),f&=~b}if(n=qe,a=ye,a=Ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),hs(a)){case 2:case 8:a=qt;break;case 32:a=Dt;break;case 268435456:a=ve;break;default:a=Dt}return o=q_.bind(null,e),a=Yt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function q_(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gu()&&e.callbackNode!==a)return null;var o=ye;return o=Ut(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(A_(e,o,n),X_(e,ht()),e.callbackNode!=null&&e.callbackNode===a?q_.bind(null,e):null)}function W_(e,n){if(Gu())return null;A_(e,n,!0)}function xS(){US(function(){(Ne&6)!==0?Yt(_t,vS):k_()})}function wh(){if(Wa===0){var e=As;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Wa=e}return Wa}function Y_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(""+e)}function j_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function yS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Y_((u[Tn]||null).action),v=o.submitter;v&&(n=(n=v[Tn]||null)?Y_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new eu("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var z=v?j_(u,v):new FormData(u);Zf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=v?j_(u,v):new FormData(u),Zf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Dh=0;Dh<hf.length;Dh++){var Uh=hf[Dh],SS=Uh.toLowerCase(),MS=Uh[0].toUpperCase()+Uh.slice(1);Ai(SS,"on"+MS)}Ai(Tm,"onAnimationEnd"),Ai(Am,"onAnimationIteration"),Ai(Rm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(By,"onTransitionRun"),Ai(Iy,"onTransitionStart"),Ai(Hy,"onTransitionCancel"),Ai(Cm,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function Z_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var b=o[v],z=b.instance,$=b.currentTarget;if(b=b.listener,z!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ft){au(ft)}u.currentTarget=null,f=z}else for(v=0;v<o.length;v++){if(b=o[v],z=b.instance,$=b.currentTarget,b=b.listener,z!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(ft){au(ft)}u.currentTarget=null,f=z}}}}function ge(e,n){var a=n[Fo];a===void 0&&(a=n[Fo]=new Set);var o=e+"__bubble";a.has(o)||(Q_(n,e,2,!1),a.add(o))}function Lh(e,n,a){var o=0;n&&(o|=4),Q_(a,e,o,n)}var Xu="_reactListening"+Math.random().toString(36).slice(2);function Nh(e){if(!e[Xu]){e[Xu]=!0,Lt.forEach(function(a){a!=="selectionchange"&&(ES.has(a)||Lh(a,!1,e),Lh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xu]||(n[Xu]=!0,Lh("selectionchange",!1,n))}}function Q_(e,n,a,o){switch(Tv(n)){case 2:var u=KS;break;case 8:u=JS;break;default:u=jh}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Oh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var b=o.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=W(b),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=f=v;continue t}b=b.parentNode}}o=o.return}em(function(){var $=f,ft=Qc(a),vt=[];t:{var tt=wm.get(e);if(tt!==void 0){var st=eu,Ht=e;switch(e){case"keypress":if($l(a)===0)break t;case"keydown":case"keyup":st=gy;break;case"focusin":Ht="focus",st=nf;break;case"focusout":Ht="blur",st=nf;break;case"beforeblur":case"afterblur":st=nf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=xy;break;case Tm:case Am:case Rm:st=oy;break;case Cm:st=Sy;break;case"scroll":case"scrollend":st=ny;break;case"wheel":st=Ey;break;case"copy":case"cut":case"paste":st=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=sm;break;case"toggle":case"beforetoggle":st=Ty}var $t=(n&4)!==0,Ve=!$t&&(e==="scroll"||e==="scrollend"),j=$t?tt!==null?tt+"Capture":null:tt;$t=[];for(var G=$,J;G!==null;){var pt=G;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Bo(G,j),pt!=null&&$t.push(_l(G,pt,J))),Ve)break;G=G.return}0<$t.length&&(tt=new st(tt,Ht,null,a,ft),vt.push({event:tt,listeners:$t}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",tt&&a!==Zc&&(Ht=a.relatedTarget||a.fromElement)&&(W(Ht)||Ht[ji]))break t;if((st||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(Ht=a.relatedTarget||a.toElement,st=$,Ht=Ht?W(Ht):null,Ht!==null&&(Ve=c(Ht),$t=Ht.tag,Ht!==Ve||$t!==5&&$t!==27&&$t!==6)&&(Ht=null)):(st=null,Ht=$),st!==Ht)){if($t=am,pt="onMouseLeave",j="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=sm,pt="onPointerLeave",j="onPointerEnter",G="pointer"),Ve=st==null?tt:at(st),J=Ht==null?tt:at(Ht),tt=new $t(pt,G+"leave",st,a,ft),tt.target=Ve,tt.relatedTarget=J,pt=null,W(ft)===$&&($t=new $t(j,G+"enter",Ht,a,ft),$t.target=J,$t.relatedTarget=Ve,pt=$t),Ve=pt,st&&Ht)e:{for($t=bS,j=st,G=Ht,J=0,pt=j;pt;pt=$t(pt))J++;pt=0;for(var Kt=G;Kt;Kt=$t(Kt))pt++;for(;0<J-pt;)j=$t(j),J--;for(;0<pt-J;)G=$t(G),pt--;for(;J--;){if(j===G||G!==null&&j===G.alternate){$t=j;break e}j=$t(j),G=$t(G)}$t=null}else $t=null;st!==null&&K_(vt,tt,st,$t,!1),Ht!==null&&Ve!==null&&K_(vt,Ve,Ht,$t,!0)}}t:{if(tt=$?at($):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var we=pm;else if(hm(tt))if(mm)we=Py;else{we=Ny;var Xt=Ly}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?$&&jc($.elementType)&&(we=pm):we=Oy;if(we&&(we=we(e,$))){dm(vt,we,a,ft);break t}Xt&&Xt(e,tt,$),e==="focusout"&&$&&tt.type==="number"&&$.memoizedProps.value!=null&&gn(tt,"number",tt.value)}switch(Xt=$?at($):window,e){case"focusin":(hm(Xt)||Xt.contentEditable==="true")&&(vs=Xt,uf=$,Wo=null);break;case"focusout":Wo=uf=vs=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Em(vt,a,ft);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":Em(vt,a,ft)}var ue;if(rf)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else _s?cm(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(om&&a.locale!=="ko"&&(_s||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&_s&&(ue=nm()):(Da=ft,$c="value"in Da?Da.value:Da.textContent,_s=!0)),Xt=qu($,Se),0<Xt.length&&(Se=new rm(Se,e,null,a,ft),vt.push({event:Se,listeners:Xt}),ue?Se.data=ue:(ue=fm(a),ue!==null&&(Se.data=ue)))),(ue=Ry?Cy(e,a):wy(e,a))&&(Se=qu($,"onBeforeInput"),0<Se.length&&(Xt=new rm("onBeforeInput","beforeinput",null,a,ft),vt.push({event:Xt,listeners:Se}),Xt.data=ue)),yS(vt,e,$,a,ft)}Z_(vt,n)})}function _l(e,n,a){return{instance:e,listener:n,currentTarget:a}}function qu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Bo(e,a),u!=null&&o.unshift(_l(e,u,f)),u=Bo(e,n),u!=null&&o.push(_l(e,u,f))),e.tag===3)return o;e=e.return}return[]}function bS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var b=a,z=b.alternate,$=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||$===null||(z=$,u?($=Bo(a,f),$!=null&&v.unshift(_l(a,$,z))):u||($=Bo(a,f),$!=null&&v.push(_l(a,$,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var TS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function J_(e){return(typeof e=="string"?e:""+e).replace(TS,`
`).replace(AS,"")}function $_(e,n){return n=J_(n),J_(e)===n}function Ge(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ps(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ps(e,""+o);break;case"className":Xe(e,"class",o);break;case"tabIndex":Xe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,a,o);break;case"style":$p(e,o,f);break;case"data":if(n!=="object"){Xe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Kl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Kl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Kl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":oe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":oe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":oe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":oe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ty.get(a)||a,Ye(e,a,o))}}function Ph(e,n,a,o,u,f){switch(a){case"style":$p(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ps(e,o):(typeof o=="number"||typeof o=="bigint")&&ps(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ye(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,f,v,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=v=u=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":v=ft;break;case"checked":z=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ge(e,n,o,ft,a,null)}}Bn(e,f,b,z,$,v,u,!1);return;case"select":ge("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":o=b;default:Ge(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(e,n,v,b,a,null)}Bi(e,o,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,z,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<gl.length;o++)ge(gl[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,$,o,a,null)}return;default:if(jc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Ph(e,n,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ge(e,n,b,o,a,null))}function RS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,z=null,$=null,ft=null;for(st in a){var vt=a[st];if(a.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=vt;default:o.hasOwnProperty(st)||Ge(e,n,st,null,o,vt)}}for(var tt in o){var st=o[tt];if(vt=a[tt],o.hasOwnProperty(tt)&&(st!=null||vt!=null))switch(tt){case"type":f=st;break;case"name":u=st;break;case"checked":$=st;break;case"defaultChecked":ft=st;break;case"value":v=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==vt&&Ge(e,n,tt,st,o,vt)}}Ln(e,v,b,z,$,ft,f,u);return;case"select":st=v=b=tt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":st=z;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":tt=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==z&&Ge(e,n,u,f,o,z)}n=b,a=v,o=st,tt!=null?an(e,!!a,tt,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":st=tt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(e,n,b,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":tt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(e,n,v,u,o,f)}ds(e,tt,st);return;case"option":for(var Ht in a)if(tt=a[Ht],a.hasOwnProperty(Ht)&&tt!=null&&!o.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:Ge(e,n,Ht,null,o,tt)}for(z in o)if(tt=o[z],st=a[z],o.hasOwnProperty(z)&&tt!==st&&(tt!=null||st!=null))switch(z){case"selected":e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ge(e,n,z,tt,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)tt=a[$t],a.hasOwnProperty($t)&&tt!=null&&!o.hasOwnProperty($t)&&Ge(e,n,$t,null,o,tt);for($ in o)if(tt=o[$],st=a[$],o.hasOwnProperty($)&&tt!==st&&(tt!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ge(e,n,$,tt,o,st)}return;default:if(jc(n)){for(var Ve in a)tt=a[Ve],a.hasOwnProperty(Ve)&&tt!==void 0&&!o.hasOwnProperty(Ve)&&Ph(e,n,Ve,void 0,o,tt);for(ft in o)tt=o[ft],st=a[ft],!o.hasOwnProperty(ft)||tt===st||tt===void 0&&st===void 0||Ph(e,n,ft,tt,o,st);return}}for(var j in a)tt=a[j],a.hasOwnProperty(j)&&tt!=null&&!o.hasOwnProperty(j)&&Ge(e,n,j,null,o,tt);for(vt in o)tt=o[vt],st=a[vt],!o.hasOwnProperty(vt)||tt===st||tt==null&&st==null||Ge(e,n,vt,tt,o,st)}function tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&tv(v)){for(v=0,b=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],$=z.startTime;if($>b)break;var ft=z.transferSize,vt=z.initiatorType;ft&&tv(vt)&&(z=z.responseEnd,v+=ft*(z<b?1:(b-$)/(z-$)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zh=null,Fh=null;function Wu(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ih=null;function wS(){var e=window.event;return e&&e.type==="popstate"?e===Ih?!1:(Ih=e,!0):(Ih=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(LS)}:iv;function LS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function rv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),qs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")vl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vl(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[Mr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&vl(e.ownerDocument.body);a=u}while(a);qs(n)}function sv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Hh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function NS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Mr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function OS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function ov(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function Gh(e){return e.data==="$?"||e.data==="$~"}function Vh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kh=null;function lv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function uv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function cv(e,n,a){switch(n=Wu(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var _i=new Map,fv=new Set;function Yu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=K.d;K.d={f:zS,r:FS,D:BS,C:IS,L:HS,m:GS,X:kS,S:VS,M:XS};function zS(){var e=ha.f(),n=Bu();return e||n}function FS(e){var n=it(e);n!==null&&n.tag===5&&n.type==="form"?Cg(n):ha.r(e)}var Vs=typeof document>"u"?null:document;function hv(e,n,a){var o=Vs;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fv.has(u)||(fv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),yt(n),o.head.appendChild(n)))}}function BS(e){ha.D(e),hv("dns-prefetch",e,null)}function IS(e,n){ha.C(e,n),hv("preconnect",e,n)}function HS(e,n,a){ha.L(e,n,a);var o=Vs;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var f=u;switch(n){case"style":f=ks(e);break;case"script":f=Xs(e)}_i.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xl(f))||n==="script"&&o.querySelector(yl(f))||(n=o.createElement("link"),wn(n,"link",e),yt(n),o.head.appendChild(n)))}}function GS(e,n){ha.m(e,n);var a=Vs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Xs(e)}if(!_i.has(f)&&(e=_({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(f)))return}o=a.createElement("link"),wn(o,"link",e),yt(o),a.head.appendChild(o)}}}function VS(e,n,a){ha.S(e,n,a);var o=Vs;if(o&&e){var u=Y(o).hoistableStyles,f=ks(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=o.querySelector(xl(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&Xh(e,a);var z=v=o.createElement("link");yt(z),wn(z,"link",e),z._p=new Promise(function($,ft){z.onload=$,z.onerror=ft}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ju(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function kS(e,n){ha.X(e,n);var a=Vs;if(a&&e){var o=Y(a).hoistableScripts,u=Xs(e),f=o.get(u);f||(f=a.querySelector(yl(u)),f||(e=_({src:e,async:!0},n),(n=_i.get(u))&&qh(e,n),f=a.createElement("script"),yt(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function XS(e,n){ha.M(e,n);var a=Vs;if(a&&e){var o=Y(a).hoistableScripts,u=Xs(e),f=o.get(u);f||(f=a.querySelector(yl(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&qh(e,n),f=a.createElement("script"),yt(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function dv(e,n,a,o){var u=(u=Tt.current)?Yu(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ks(a.href),a=Y(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ks(a.href);var f=Y(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(xl(e)))&&!f._p&&(v.instance=f,v.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||qS(u,e,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Xs(a),a=Y(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ks(e){return'href="'+pe(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function pv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function qS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),yt(n),e.head.appendChild(n))}function Xs(e){return'[src="'+pe(e)+'"]'}function yl(e){return"script[async]"+e}function mv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,yt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),yt(o),wn(o,"style",u),ju(o,a.precedence,e),n.instance=o;case"stylesheet":u=ks(a.href);var f=e.querySelector(xl(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;o=pv(a),(u=_i.get(u))&&Xh(o,u),f=(e.ownerDocument||e).createElement("link"),yt(f);var v=f;return v._p=new Promise(function(b,z){v.onload=b,v.onerror=z}),wn(f,"link",o),n.state.loading|=4,ju(f,a.precedence,e),n.instance=f;case"script":return f=Xs(a.src),(u=e.querySelector(yl(f)))?(n.instance=u,yt(u),u):(o=a,(u=_i.get(f))&&(o=_({},a),qh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),yt(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ju(o,a.precedence,e));return n.instance}function ju(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var b=o[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zu=null;function gv(e,n,a){if(Zu===null){var o=new Map,u=Zu=new Map;u.set(a,o)}else u=Zu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Mr]||f[$e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=o.get(v);b?b.push(f):o.set(v,[f])}}return o}function _v(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function WS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function YS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ks(o.href),f=n.querySelector(xl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Qu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,yt(f);return}f=n.ownerDocument||n,o=pv(o),(u=_i.get(u))&&Xh(o,u),f=f.createElement("link"),yt(f);var v=f;v._p=new Promise(function(b,z){v.onload=b,v.onerror=z}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Qu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wh=0;function jS(e,n){return e.stylesheets&&e.count===0&&Ju(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wh===0&&(Wh=62500*CS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Qu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ju(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ku=null;function Ju(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ku=new Map,n.forEach(ZS,e),Ku=null,Qu.call(e))}function ZS(e,n){if(!(n.state.loading&4)){var a=Ku.get(e);if(a)var o=a.get(null);else{a=new Map,Ku.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=Qu.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Sl={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function QS(e,n,a,o,u,f,v,b,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function xv(e,n,a,o,u,f,v,b,z,$,ft,vt){return e=new QS(e,n,a,v,z,$,ft,vt,b),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=Tf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wf(f),e}function yv(e){return e?(e=Ss,e):Ss}function Sv(e,n,a,o,u,f){u=yv(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Fa(e,o,n),a!==null&&(jn(a,e,n),$o(a,e,n))}function Mv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Yh(e,n){Mv(e,n),(e=e.alternate)&&Mv(e,n)}function Ev(e){if(e.tag===13||e.tag===31){var n=Rr(e,67108864);n!==null&&jn(n,e,67108864),Yh(e,67108864)}}function bv(e){if(e.tag===13||e.tag===31){var n=oi();n=yr(n);var a=Rr(e,n);a!==null&&jn(a,e,n),Yh(e,n)}}var $u=!0;function KS(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=2,jh(e,n,a,o)}finally{K.p=f,P.T=u}}function JS(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=8,jh(e,n,a,o)}finally{K.p=f,P.T=u}}function jh(e,n,a,o){if($u){var u=Zh(o);if(u===null)Oh(e,n,o,tc,a),Av(e,o);else if(tM(u,e,n,a,o))o.stopPropagation();else if(Av(e,o),n&4&&-1<$S.indexOf(e)){for(;u!==null;){var f=it(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=wt(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var z=1<<31-ee(v);b.entanglements[1]|=z,v&=~z}Vi(f),(Ne&6)===0&&(zu=ht()+500,ml(0))}}break;case 31:case 13:b=Rr(f,2),b!==null&&jn(b,f,2),Bu(),Yh(f,2)}if(f=Zh(o),f===null&&Oh(e,n,o,tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Oh(e,n,o,null,a)}}function Zh(e){return e=Qc(e),Qh(e)}var tc=null;function Qh(e){if(tc=null,e=W(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function Tv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case _t:return 2;case qt:return 8;case Dt:case Bt:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Kh=!1,ja=null,Za=null,Qa=null,Ml=new Map,El=new Map,Ka=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Av(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(n.pointerId)}}function bl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=it(n),n!==null&&Ev(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function tM(e,n,a,o,u){switch(n){case"focusin":return ja=bl(ja,e,n,a,o,u),!0;case"dragenter":return Za=bl(Za,e,n,a,o,u),!0;case"mouseover":return Qa=bl(Qa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ml.set(f,bl(Ml.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,El.set(f,bl(El.get(f)||null,e,n,a,o,u)),!0}return!1}function Rv(e){var n=W(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Sr(e.priority,function(){bv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Sr(e.priority,function(){bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=it(a),n!==null&&Ev(n),e.blockedOn=a,!1;n.shift()}return!0}function Cv(e,n,a){ec(e)&&a.delete(n)}function eM(){Kh=!1,ja!==null&&ec(ja)&&(ja=null),Za!==null&&ec(Za)&&(Za=null),Qa!==null&&ec(Qa)&&(Qa=null),Ml.forEach(Cv),El.forEach(Cv)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,Kh||(Kh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,eM)))}var ic=null;function wv(e){ic!==e&&(ic=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Qh(o||a)===null)continue;break}var f=it(a);f!==null&&(e.splice(n,3),n-=3,Zf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function qs(e){function n(z){return nc(z,e)}ja!==null&&nc(ja,e),Za!==null&&nc(Za,e),Qa!==null&&nc(Qa,e),Ml.forEach(n),El.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Tn]||null;if(typeof f=="function")v||wv(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Tn]||null)b=v.formAction;else if(Qh(u)!==null)continue}else b=v.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),wv(a)}}}function Dv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jh(e){this._internalRoot=e}ac.prototype.render=Jh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=oi();Sv(a,o,e,n,null,null)},ac.prototype.unmount=Jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sv(e.current,2,null,e,null,null),Bu(),n[ji]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=zo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Rv(e)}};var Uv=t.version;if(Uv!=="19.2.4")throw Error(r(527,Uv,"19.2.4"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var nM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Zt=rc.inject(nM),Wt=rc}catch{}}return Al.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Bg,f=Ig,v=Hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=xv(e,1,!1,null,null,a,o,null,u,f,v,Dv),e[ji]=n.current,Nh(e),new Jh(n)},Al.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Bg,v=Ig,b=Hg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=xv(e,1,!0,n,a??null,o,u,z,f,v,b,Dv),n.context=yv(null),a=n.current,o=oi(),o=yr(o),u=za(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,bn(n,a),Vi(n),e[ji]=n.current,Nh(e),new ac(n)},Al.version="19.2.4",Al}var Vv;function hM(){if(Vv)return nd.exports;Vv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nd.exports=fM(),nd.exports}var dM=hM(),kl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(s){return this.listeners.add(s),this.onSubscribe(),()=>{this.listeners.delete(s),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},pM={setTimeout:(s,t)=>setTimeout(s,t),clearTimeout:s=>clearTimeout(s),setInterval:(s,t)=>setInterval(s,t),clearInterval:s=>clearInterval(s)},or,Bp,K0,mM=(K0=class{constructor(){te(this,or,pM);te(this,Bp,!1)}setTimeoutProvider(s){Ft(this,or,s)}setTimeout(s,t){return V(this,or).setTimeout(s,t)}clearTimeout(s){V(this,or).clearTimeout(s)}setInterval(s,t){return V(this,or).setInterval(s,t)}clearInterval(s){V(this,or).clearInterval(s)}},or=new WeakMap,Bp=new WeakMap,K0),Qr=new mM;function gM(s){setTimeout(s,0)}var us=typeof window>"u"||"Deno"in globalThis;function Kn(){}function _M(s,t){return typeof s=="function"?s(t):s}function zd(s){return typeof s=="number"&&s>=0&&s!==1/0}function ox(s,t){return Math.max(s+(t||0)-Date.now(),0)}function mr(s,t){return typeof s=="function"?s(t):s}function yi(s,t){return typeof s=="function"?s(t):s}function kv(s,t){const{type:i="all",exact:r,fetchStatus:l,predicate:c,queryKey:h,stale:d}=s;if(h){if(r){if(t.queryHash!==Hp(h,t.options))return!1}else if(!zl(t.queryKey,h))return!1}if(i!=="all"){const m=t.isActive();if(i==="active"&&!m||i==="inactive"&&m)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||l&&l!==t.state.fetchStatus||c&&!c(t))}function Xv(s,t){const{exact:i,status:r,predicate:l,mutationKey:c}=s;if(c){if(!t.options.mutationKey)return!1;if(i){if(Pl(t.options.mutationKey)!==Pl(c))return!1}else if(!zl(t.options.mutationKey,c))return!1}return!(r&&t.state.status!==r||l&&!l(t))}function Hp(s,t){return((t==null?void 0:t.queryKeyHashFn)||Pl)(s)}function Pl(s){return JSON.stringify(s,(t,i)=>Bd(i)?Object.keys(i).sort().reduce((r,l)=>(r[l]=i[l],r),{}):i)}function zl(s,t){return s===t?!0:typeof s!=typeof t?!1:s&&t&&typeof s=="object"&&typeof t=="object"?Object.keys(t).every(i=>zl(s[i],t[i])):!1}var vM=Object.prototype.hasOwnProperty;function lx(s,t,i=0){if(s===t)return s;if(i>500)return t;const r=qv(s)&&qv(t);if(!r&&!(Bd(s)&&Bd(t)))return t;const c=(r?s:Object.keys(s)).length,h=r?t:Object.keys(t),d=h.length,m=r?new Array(d):{};let p=0;for(let x=0;x<d;x++){const _=r?x:h[x],y=s[_],M=t[_];if(y===M){m[_]=y,(r?x<c:vM.call(s,_))&&p++;continue}if(y===null||M===null||typeof y!="object"||typeof M!="object"){m[_]=M;continue}const E=lx(y,M,i+1);m[_]=E,E===y&&p++}return c===d&&p===c?s:m}function Fd(s,t){if(!t||Object.keys(s).length!==Object.keys(t).length)return!1;for(const i in s)if(s[i]!==t[i])return!1;return!0}function qv(s){return Array.isArray(s)&&s.length===Object.keys(s).length}function Bd(s){if(!Wv(s))return!1;const t=s.constructor;if(t===void 0)return!0;const i=t.prototype;return!(!Wv(i)||!i.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(s)!==Object.prototype)}function Wv(s){return Object.prototype.toString.call(s)==="[object Object]"}function xM(s){return new Promise(t=>{Qr.setTimeout(t,s)})}function Id(s,t,i){return typeof i.structuralSharing=="function"?i.structuralSharing(s,t):i.structuralSharing!==!1?lx(s,t):t}function yM(s,t,i=0){const r=[...s,t];return i&&r.length>i?r.slice(1):r}function SM(s,t,i=0){const r=[t,...s];return i&&r.length>i?r.slice(0,-1):r}var Gp=Symbol();function ux(s,t){return!s.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!s.queryFn||s.queryFn===Gp?()=>Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`)):s.queryFn}function cx(s,t){return typeof s=="function"?s(...t):!!s}function MM(s,t,i){let r=!1,l;return Object.defineProperty(s,"signal",{enumerable:!0,get:()=>(l??(l=t()),r||(r=!0,l.aborted?i():l.addEventListener("abort",i,{once:!0})),l)}),s}var $r,lr,ho,J0,EM=(J0=class extends kl{constructor(){super();te(this,$r);te(this,lr);te(this,ho);Ft(this,ho,t=>{if(!us&&window.addEventListener){const i=()=>t();return window.addEventListener("visibilitychange",i,!1),()=>{window.removeEventListener("visibilitychange",i)}}})}onSubscribe(){V(this,lr)||this.setEventListener(V(this,ho))}onUnsubscribe(){var t;this.hasListeners()||((t=V(this,lr))==null||t.call(this),Ft(this,lr,void 0))}setEventListener(t){var i;Ft(this,ho,t),(i=V(this,lr))==null||i.call(this),Ft(this,lr,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){V(this,$r)!==t&&(Ft(this,$r,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(i=>{i(t)})}isFocused(){var t;return typeof V(this,$r)=="boolean"?V(this,$r):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},$r=new WeakMap,lr=new WeakMap,ho=new WeakMap,J0),Vp=new EM;function Hd(){let s,t;const i=new Promise((l,c)=>{s=l,t=c});i.status="pending",i.catch(()=>{});function r(l){Object.assign(i,l),delete i.resolve,delete i.reject}return i.resolve=l=>{r({status:"fulfilled",value:l}),s(l)},i.reject=l=>{r({status:"rejected",reason:l}),t(l)},i}var bM=gM;function TM(){let s=[],t=0,i=d=>{d()},r=d=>{d()},l=bM;const c=d=>{t?s.push(d):l(()=>{i(d)})},h=()=>{const d=s;s=[],d.length&&l(()=>{r(()=>{d.forEach(m=>{i(m)})})})};return{batch:d=>{let m;t++;try{m=d()}finally{t--,t||h()}return m},batchCalls:d=>(...m)=>{c(()=>{d(...m)})},schedule:c,setNotifyFunction:d=>{i=d},setBatchNotifyFunction:d=>{r=d},setScheduler:d=>{l=d}}}var Dn=TM(),po,ur,mo,$0,AM=($0=class extends kl{constructor(){super();te(this,po,!0);te(this,ur);te(this,mo);Ft(this,mo,t=>{if(!us&&window.addEventListener){const i=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",i,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",r)}}})}onSubscribe(){V(this,ur)||this.setEventListener(V(this,mo))}onUnsubscribe(){var t;this.hasListeners()||((t=V(this,ur))==null||t.call(this),Ft(this,ur,void 0))}setEventListener(t){var i;Ft(this,mo,t),(i=V(this,ur))==null||i.call(this),Ft(this,ur,t(this.setOnline.bind(this)))}setOnline(t){V(this,po)!==t&&(Ft(this,po,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return V(this,po)}},po=new WeakMap,ur=new WeakMap,mo=new WeakMap,$0),Bc=new AM;function RM(s){return Math.min(1e3*2**s,3e4)}function fx(s){return(s??"online")==="online"?Bc.isOnline():!0}var Gd=class extends Error{constructor(s){super("CancelledError"),this.revert=s==null?void 0:s.revert,this.silent=s==null?void 0:s.silent}};function hx(s){let t=!1,i=0,r;const l=Hd(),c=()=>l.status!=="pending",h=A=>{var S;if(!c()){const g=new Gd(A);y(g),(S=s.onCancel)==null||S.call(s,g)}},d=()=>{t=!0},m=()=>{t=!1},p=()=>Vp.isFocused()&&(s.networkMode==="always"||Bc.isOnline())&&s.canRun(),x=()=>fx(s.networkMode)&&s.canRun(),_=A=>{c()||(r==null||r(),l.resolve(A))},y=A=>{c()||(r==null||r(),l.reject(A))},M=()=>new Promise(A=>{var S;r=g=>{(c()||p())&&A(g)},(S=s.onPause)==null||S.call(s)}).then(()=>{var A;r=void 0,c()||(A=s.onContinue)==null||A.call(s)}),E=()=>{if(c())return;let A;const S=i===0?s.initialPromise:void 0;try{A=S??s.fn()}catch(g){A=Promise.reject(g)}Promise.resolve(A).then(_).catch(g=>{var I;if(c())return;const F=s.retry??(us?0:3),L=s.retryDelay??RM,w=typeof L=="function"?L(i,g):L,X=F===!0||typeof F=="number"&&i<F||typeof F=="function"&&F(i,g);if(t||!X){y(g);return}i++,(I=s.onFail)==null||I.call(s,i,g),xM(w).then(()=>p()?void 0:M()).then(()=>{t?y(g):E()})})};return{promise:l,status:()=>l.status,cancel:h,continue:()=>(r==null||r(),l),cancelRetry:d,continueRetry:m,canStart:x,start:()=>(x()?E():M().then(E),l)}}var ts,tx,dx=(tx=class{constructor(){te(this,ts)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),zd(this.gcTime)&&Ft(this,ts,Qr.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(s){this.gcTime=Math.max(this.gcTime||0,s??(us?1/0:300*1e3))}clearGcTimeout(){V(this,ts)&&(Qr.clearTimeout(V(this,ts)),Ft(this,ts,void 0))}},ts=new WeakMap,tx),es,go,xi,ns,En,Bl,is,Li,va,ex,CM=(ex=class extends dx{constructor(t){super();te(this,Li);te(this,es);te(this,go);te(this,xi);te(this,ns);te(this,En);te(this,Bl);te(this,is);Ft(this,is,!1),Ft(this,Bl,t.defaultOptions),this.setOptions(t.options),this.observers=[],Ft(this,ns,t.client),Ft(this,xi,V(this,ns).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Ft(this,es,jv(this.options)),this.state=t.state??V(this,es),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=V(this,En))==null?void 0:t.promise}setOptions(t){if(this.options={...V(this,Bl),...t},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const i=jv(this.options);i.data!==void 0&&(this.setState(Yv(i.data,i.dataUpdatedAt)),Ft(this,es,i))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&V(this,xi).remove(this)}setData(t,i){const r=Id(this.state.data,t,this.options);return Ee(this,Li,va).call(this,{data:r,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),r}setState(t,i){Ee(this,Li,va).call(this,{type:"setState",state:t,setStateOptions:i})}cancel(t){var r,l;const i=(r=V(this,En))==null?void 0:r.promise;return(l=V(this,En))==null||l.cancel(t),i?i.then(Kn).catch(Kn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(V(this,es))}isActive(){return this.observers.some(t=>yi(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Gp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>mr(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!ox(this.state.dataUpdatedAt,t)}onFocus(){var i;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(i=V(this,En))==null||i.continue()}onOnline(){var i;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(i=V(this,En))==null||i.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),V(this,xi).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(i=>i!==t),this.observers.length||(V(this,En)&&(V(this,is)?V(this,En).cancel({revert:!0}):V(this,En).cancelRetry()),this.scheduleGc()),V(this,xi).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ee(this,Li,va).call(this,{type:"invalidate"})}async fetch(t,i){var m,p,x,_,y,M,E,A,S,g,F,L;if(this.state.fetchStatus!=="idle"&&((m=V(this,En))==null?void 0:m.status())!=="rejected"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(V(this,En))return V(this,En).continueRetry(),V(this,En).promise}if(t&&this.setOptions(t),!this.options.queryFn){const w=this.observers.find(X=>X.options.queryFn);w&&this.setOptions(w.options)}const r=new AbortController,l=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(Ft(this,is,!0),r.signal)})},c=()=>{const w=ux(this.options,i),I=(()=>{const O={client:V(this,ns),queryKey:this.queryKey,meta:this.meta};return l(O),O})();return Ft(this,is,!1),this.options.persister?this.options.persister(w,I,this):w(I)},d=(()=>{const w={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:V(this,ns),state:this.state,fetchFn:c};return l(w),w})();(p=this.options.behavior)==null||p.onFetch(d,this),Ft(this,go,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((x=d.fetchOptions)==null?void 0:x.meta))&&Ee(this,Li,va).call(this,{type:"fetch",meta:(_=d.fetchOptions)==null?void 0:_.meta}),Ft(this,En,hx({initialPromise:i==null?void 0:i.initialPromise,fn:d.fetchFn,onCancel:w=>{w instanceof Gd&&w.revert&&this.setState({...V(this,go),fetchStatus:"idle"}),r.abort()},onFail:(w,X)=>{Ee(this,Li,va).call(this,{type:"failed",failureCount:w,error:X})},onPause:()=>{Ee(this,Li,va).call(this,{type:"pause"})},onContinue:()=>{Ee(this,Li,va).call(this,{type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0}));try{const w=await V(this,En).start();if(w===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(w),(M=(y=V(this,xi).config).onSuccess)==null||M.call(y,w,this),(A=(E=V(this,xi).config).onSettled)==null||A.call(E,w,this.state.error,this),w}catch(w){if(w instanceof Gd){if(w.silent)return V(this,En).promise;if(w.revert){if(this.state.data===void 0)throw w;return this.state.data}}throw Ee(this,Li,va).call(this,{type:"error",error:w}),(g=(S=V(this,xi).config).onError)==null||g.call(S,w,this),(L=(F=V(this,xi).config).onSettled)==null||L.call(F,this.state.data,w,this),w}finally{this.scheduleGc()}}},es=new WeakMap,go=new WeakMap,xi=new WeakMap,ns=new WeakMap,En=new WeakMap,Bl=new WeakMap,is=new WeakMap,Li=new WeakSet,va=function(t){const i=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...px(r.data,this.options),fetchMeta:t.meta??null};case"success":const l={...r,...Yv(t.data,t.dataUpdatedAt),dataUpdateCount:r.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Ft(this,go,t.manual?l:void 0),l;case"error":const c=t.error;return{...r,error:c,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:c,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=i(this.state),Dn.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),V(this,xi).notify({query:this,type:"updated",action:t})})},ex);function px(s,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:fx(t.networkMode)?"fetching":"paused",...s===void 0&&{error:null,status:"pending"}}}function Yv(s,t){return{data:s,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function jv(s){const t=typeof s.initialData=="function"?s.initialData():s.initialData,i=t!==void 0,r=i?typeof s.initialDataUpdatedAt=="function"?s.initialDataUpdatedAt():s.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:i?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var Qn,be,Il,Gn,as,_o,ya,cr,Hl,vo,xo,rs,ss,fr,yo,Oe,Nl,Vd,kd,Xd,qd,Wd,Yd,jd,mx,nx,wM=(nx=class extends kl{constructor(t,i){super();te(this,Oe);te(this,Qn);te(this,be);te(this,Il);te(this,Gn);te(this,as);te(this,_o);te(this,ya);te(this,cr);te(this,Hl);te(this,vo);te(this,xo);te(this,rs);te(this,ss);te(this,fr);te(this,yo,new Set);this.options=i,Ft(this,Qn,t),Ft(this,cr,null),Ft(this,ya,Hd()),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(V(this,be).addObserver(this),Zv(V(this,be),this.options)?Ee(this,Oe,Nl).call(this):this.updateResult(),Ee(this,Oe,qd).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Zd(V(this,be),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Zd(V(this,be),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Ee(this,Oe,Wd).call(this),Ee(this,Oe,Yd).call(this),V(this,be).removeObserver(this)}setOptions(t){const i=this.options,r=V(this,be);if(this.options=V(this,Qn).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof yi(this.options.enabled,V(this,be))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Ee(this,Oe,jd).call(this),V(this,be).setOptions(this.options),i._defaulted&&!Fd(this.options,i)&&V(this,Qn).getQueryCache().notify({type:"observerOptionsUpdated",query:V(this,be),observer:this});const l=this.hasListeners();l&&Qv(V(this,be),r,this.options,i)&&Ee(this,Oe,Nl).call(this),this.updateResult(),l&&(V(this,be)!==r||yi(this.options.enabled,V(this,be))!==yi(i.enabled,V(this,be))||mr(this.options.staleTime,V(this,be))!==mr(i.staleTime,V(this,be)))&&Ee(this,Oe,Vd).call(this);const c=Ee(this,Oe,kd).call(this);l&&(V(this,be)!==r||yi(this.options.enabled,V(this,be))!==yi(i.enabled,V(this,be))||c!==V(this,fr))&&Ee(this,Oe,Xd).call(this,c)}getOptimisticResult(t){const i=V(this,Qn).getQueryCache().build(V(this,Qn),t),r=this.createResult(i,t);return UM(this,r)&&(Ft(this,Gn,r),Ft(this,_o,this.options),Ft(this,as,V(this,be).state)),r}getCurrentResult(){return V(this,Gn)}trackResult(t,i){return new Proxy(t,{get:(r,l)=>(this.trackProp(l),i==null||i(l),l==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&V(this,ya).status==="pending"&&V(this,ya).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(r,l))})}trackProp(t){V(this,yo).add(t)}getCurrentQuery(){return V(this,be)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const i=V(this,Qn).defaultQueryOptions(t),r=V(this,Qn).getQueryCache().build(V(this,Qn),i);return r.fetch().then(()=>this.createResult(r,i))}fetch(t){return Ee(this,Oe,Nl).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),V(this,Gn)))}createResult(t,i){var D;const r=V(this,be),l=this.options,c=V(this,Gn),h=V(this,as),d=V(this,_o),p=t!==r?t.state:V(this,Il),{state:x}=t;let _={...x},y=!1,M;if(i._optimisticResults){const C=this.hasListeners(),B=!C&&Zv(t,i),lt=C&&Qv(t,r,i,l);(B||lt)&&(_={..._,...px(x.data,t.options)}),i._optimisticResults==="isRestoring"&&(_.fetchStatus="idle")}let{error:E,errorUpdatedAt:A,status:S}=_;M=_.data;let g=!1;if(i.placeholderData!==void 0&&M===void 0&&S==="pending"){let C;c!=null&&c.isPlaceholderData&&i.placeholderData===(d==null?void 0:d.placeholderData)?(C=c.data,g=!0):C=typeof i.placeholderData=="function"?i.placeholderData((D=V(this,xo))==null?void 0:D.state.data,V(this,xo)):i.placeholderData,C!==void 0&&(S="success",M=Id(c==null?void 0:c.data,C,i),y=!0)}if(i.select&&M!==void 0&&!g)if(c&&M===(h==null?void 0:h.data)&&i.select===V(this,Hl))M=V(this,vo);else try{Ft(this,Hl,i.select),M=i.select(M),M=Id(c==null?void 0:c.data,M,i),Ft(this,vo,M),Ft(this,cr,null)}catch(C){Ft(this,cr,C)}V(this,cr)&&(E=V(this,cr),M=V(this,vo),A=Date.now(),S="error");const F=_.fetchStatus==="fetching",L=S==="pending",w=S==="error",X=L&&F,I=M!==void 0,k={status:S,fetchStatus:_.fetchStatus,isPending:L,isSuccess:S==="success",isError:w,isInitialLoading:X,isLoading:X,data:M,dataUpdatedAt:_.dataUpdatedAt,error:E,errorUpdatedAt:A,failureCount:_.fetchFailureCount,failureReason:_.fetchFailureReason,errorUpdateCount:_.errorUpdateCount,isFetched:_.dataUpdateCount>0||_.errorUpdateCount>0,isFetchedAfterMount:_.dataUpdateCount>p.dataUpdateCount||_.errorUpdateCount>p.errorUpdateCount,isFetching:F,isRefetching:F&&!L,isLoadingError:w&&!I,isPaused:_.fetchStatus==="paused",isPlaceholderData:y,isRefetchError:w&&I,isStale:kp(t,i),refetch:this.refetch,promise:V(this,ya),isEnabled:yi(i.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const C=k.data!==void 0,B=k.status==="error"&&!C,lt=gt=>{B?gt.reject(k.error):C&&gt.resolve(k.data)},rt=()=>{const gt=Ft(this,ya,k.promise=Hd());lt(gt)},mt=V(this,ya);switch(mt.status){case"pending":t.queryHash===r.queryHash&&lt(mt);break;case"fulfilled":(B||k.data!==mt.value)&&rt();break;case"rejected":(!B||k.error!==mt.reason)&&rt();break}}return k}updateResult(){const t=V(this,Gn),i=this.createResult(V(this,be),this.options);if(Ft(this,as,V(this,be).state),Ft(this,_o,this.options),V(this,as).data!==void 0&&Ft(this,xo,V(this,be)),Fd(i,t))return;Ft(this,Gn,i);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:l}=this.options,c=typeof l=="function"?l():l;if(c==="all"||!c&&!V(this,yo).size)return!0;const h=new Set(c??V(this,yo));return this.options.throwOnError&&h.add("error"),Object.keys(V(this,Gn)).some(d=>{const m=d;return V(this,Gn)[m]!==t[m]&&h.has(m)})};Ee(this,Oe,mx).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Ee(this,Oe,qd).call(this)}},Qn=new WeakMap,be=new WeakMap,Il=new WeakMap,Gn=new WeakMap,as=new WeakMap,_o=new WeakMap,ya=new WeakMap,cr=new WeakMap,Hl=new WeakMap,vo=new WeakMap,xo=new WeakMap,rs=new WeakMap,ss=new WeakMap,fr=new WeakMap,yo=new WeakMap,Oe=new WeakSet,Nl=function(t){Ee(this,Oe,jd).call(this);let i=V(this,be).fetch(this.options,t);return t!=null&&t.throwOnError||(i=i.catch(Kn)),i},Vd=function(){Ee(this,Oe,Wd).call(this);const t=mr(this.options.staleTime,V(this,be));if(us||V(this,Gn).isStale||!zd(t))return;const r=ox(V(this,Gn).dataUpdatedAt,t)+1;Ft(this,rs,Qr.setTimeout(()=>{V(this,Gn).isStale||this.updateResult()},r))},kd=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(V(this,be)):this.options.refetchInterval)??!1},Xd=function(t){Ee(this,Oe,Yd).call(this),Ft(this,fr,t),!(us||yi(this.options.enabled,V(this,be))===!1||!zd(V(this,fr))||V(this,fr)===0)&&Ft(this,ss,Qr.setInterval(()=>{(this.options.refetchIntervalInBackground||Vp.isFocused())&&Ee(this,Oe,Nl).call(this)},V(this,fr)))},qd=function(){Ee(this,Oe,Vd).call(this),Ee(this,Oe,Xd).call(this,Ee(this,Oe,kd).call(this))},Wd=function(){V(this,rs)&&(Qr.clearTimeout(V(this,rs)),Ft(this,rs,void 0))},Yd=function(){V(this,ss)&&(Qr.clearInterval(V(this,ss)),Ft(this,ss,void 0))},jd=function(){const t=V(this,Qn).getQueryCache().build(V(this,Qn),this.options);if(t===V(this,be))return;const i=V(this,be);Ft(this,be,t),Ft(this,Il,t.state),this.hasListeners()&&(i==null||i.removeObserver(this),t.addObserver(this))},mx=function(t){Dn.batch(()=>{t.listeners&&this.listeners.forEach(i=>{i(V(this,Gn))}),V(this,Qn).getQueryCache().notify({query:V(this,be),type:"observerResultsUpdated"})})},nx);function DM(s,t){return yi(t.enabled,s)!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function Zv(s,t){return DM(s,t)||s.state.data!==void 0&&Zd(s,t,t.refetchOnMount)}function Zd(s,t,i){if(yi(t.enabled,s)!==!1&&mr(t.staleTime,s)!=="static"){const r=typeof i=="function"?i(s):i;return r==="always"||r!==!1&&kp(s,t)}return!1}function Qv(s,t,i,r){return(s!==t||yi(r.enabled,s)===!1)&&(!i.suspense||s.state.status!=="error")&&kp(s,i)}function kp(s,t){return yi(t.enabled,s)!==!1&&s.isStaleByTime(mr(t.staleTime,s))}function UM(s,t){return!Fd(s.getCurrentResult(),t)}function Kv(s){return{onFetch:(t,i)=>{var x,_,y,M,E;const r=t.options,l=(y=(_=(x=t.fetchOptions)==null?void 0:x.meta)==null?void 0:_.fetchMore)==null?void 0:y.direction,c=((M=t.state.data)==null?void 0:M.pages)||[],h=((E=t.state.data)==null?void 0:E.pageParams)||[];let d={pages:[],pageParams:[]},m=0;const p=async()=>{let A=!1;const S=L=>{MM(L,()=>t.signal,()=>A=!0)},g=ux(t.options,t.fetchOptions),F=async(L,w,X)=>{if(A)return Promise.reject();if(w==null&&L.pages.length)return Promise.resolve(L);const O=(()=>{const B={client:t.client,queryKey:t.queryKey,pageParam:w,direction:X?"backward":"forward",meta:t.options.meta};return S(B),B})(),k=await g(O),{maxPages:D}=t.options,C=X?SM:yM;return{pages:C(L.pages,k,D),pageParams:C(L.pageParams,w,D)}};if(l&&c.length){const L=l==="backward",w=L?LM:Jv,X={pages:c,pageParams:h},I=w(r,X);d=await F(X,I,L)}else{const L=s??c.length;do{const w=m===0?h[0]??r.initialPageParam:Jv(r,d);if(m>0&&w==null)break;d=await F(d,w),m++}while(m<L)}return d};t.options.persister?t.fetchFn=()=>{var A,S;return(S=(A=t.options).persister)==null?void 0:S.call(A,p,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i)}:t.fetchFn=p}}}function Jv(s,{pages:t,pageParams:i}){const r=t.length-1;return t.length>0?s.getNextPageParam(t[r],t,i[r],i):void 0}function LM(s,{pages:t,pageParams:i}){var r;return t.length>0?(r=s.getPreviousPageParam)==null?void 0:r.call(s,t[0],t,i[0],i):void 0}var Gl,ki,zn,os,Xi,rr,ix,NM=(ix=class extends dx{constructor(t){super();te(this,Xi);te(this,Gl);te(this,ki);te(this,zn);te(this,os);Ft(this,Gl,t.client),this.mutationId=t.mutationId,Ft(this,zn,t.mutationCache),Ft(this,ki,[]),this.state=t.state||OM(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){V(this,ki).includes(t)||(V(this,ki).push(t),this.clearGcTimeout(),V(this,zn).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Ft(this,ki,V(this,ki).filter(i=>i!==t)),this.scheduleGc(),V(this,zn).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){V(this,ki).length||(this.state.status==="pending"?this.scheduleGc():V(this,zn).remove(this))}continue(){var t;return((t=V(this,os))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var h,d,m,p,x,_,y,M,E,A,S,g,F,L,w,X,I,O;const i=()=>{Ee(this,Xi,rr).call(this,{type:"continue"})},r={client:V(this,Gl),meta:this.options.meta,mutationKey:this.options.mutationKey};Ft(this,os,hx({fn:()=>this.options.mutationFn?this.options.mutationFn(t,r):Promise.reject(new Error("No mutationFn found")),onFail:(k,D)=>{Ee(this,Xi,rr).call(this,{type:"failed",failureCount:k,error:D})},onPause:()=>{Ee(this,Xi,rr).call(this,{type:"pause"})},onContinue:i,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>V(this,zn).canRun(this)}));const l=this.state.status==="pending",c=!V(this,os).canStart();try{if(l)i();else{Ee(this,Xi,rr).call(this,{type:"pending",variables:t,isPaused:c}),V(this,zn).config.onMutate&&await V(this,zn).config.onMutate(t,this,r);const D=await((d=(h=this.options).onMutate)==null?void 0:d.call(h,t,r));D!==this.state.context&&Ee(this,Xi,rr).call(this,{type:"pending",context:D,variables:t,isPaused:c})}const k=await V(this,os).start();return await((p=(m=V(this,zn).config).onSuccess)==null?void 0:p.call(m,k,t,this.state.context,this,r)),await((_=(x=this.options).onSuccess)==null?void 0:_.call(x,k,t,this.state.context,r)),await((M=(y=V(this,zn).config).onSettled)==null?void 0:M.call(y,k,null,this.state.variables,this.state.context,this,r)),await((A=(E=this.options).onSettled)==null?void 0:A.call(E,k,null,t,this.state.context,r)),Ee(this,Xi,rr).call(this,{type:"success",data:k}),k}catch(k){try{await((g=(S=V(this,zn).config).onError)==null?void 0:g.call(S,k,t,this.state.context,this,r))}catch(D){Promise.reject(D)}try{await((L=(F=this.options).onError)==null?void 0:L.call(F,k,t,this.state.context,r))}catch(D){Promise.reject(D)}try{await((X=(w=V(this,zn).config).onSettled)==null?void 0:X.call(w,void 0,k,this.state.variables,this.state.context,this,r))}catch(D){Promise.reject(D)}try{await((O=(I=this.options).onSettled)==null?void 0:O.call(I,void 0,k,t,this.state.context,r))}catch(D){Promise.reject(D)}throw Ee(this,Xi,rr).call(this,{type:"error",error:k}),k}finally{V(this,zn).runNext(this)}}},Gl=new WeakMap,ki=new WeakMap,zn=new WeakMap,os=new WeakMap,Xi=new WeakSet,rr=function(t){const i=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=i(this.state),Dn.batch(()=>{V(this,ki).forEach(r=>{r.onMutationUpdate(t)}),V(this,zn).notify({mutation:this,type:"updated",action:t})})},ix);function OM(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Sa,Ni,Vl,ax,PM=(ax=class extends kl{constructor(t={}){super();te(this,Sa);te(this,Ni);te(this,Vl);this.config=t,Ft(this,Sa,new Set),Ft(this,Ni,new Map),Ft(this,Vl,0)}build(t,i,r){const l=new NM({client:t,mutationCache:this,mutationId:++sc(this,Vl)._,options:t.defaultMutationOptions(i),state:r});return this.add(l),l}add(t){V(this,Sa).add(t);const i=oc(t);if(typeof i=="string"){const r=V(this,Ni).get(i);r?r.push(t):V(this,Ni).set(i,[t])}this.notify({type:"added",mutation:t})}remove(t){if(V(this,Sa).delete(t)){const i=oc(t);if(typeof i=="string"){const r=V(this,Ni).get(i);if(r)if(r.length>1){const l=r.indexOf(t);l!==-1&&r.splice(l,1)}else r[0]===t&&V(this,Ni).delete(i)}}this.notify({type:"removed",mutation:t})}canRun(t){const i=oc(t);if(typeof i=="string"){const r=V(this,Ni).get(i),l=r==null?void 0:r.find(c=>c.state.status==="pending");return!l||l===t}else return!0}runNext(t){var r;const i=oc(t);if(typeof i=="string"){const l=(r=V(this,Ni).get(i))==null?void 0:r.find(c=>c!==t&&c.state.isPaused);return(l==null?void 0:l.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Dn.batch(()=>{V(this,Sa).forEach(t=>{this.notify({type:"removed",mutation:t})}),V(this,Sa).clear(),V(this,Ni).clear()})}getAll(){return Array.from(V(this,Sa))}find(t){const i={exact:!0,...t};return this.getAll().find(r=>Xv(i,r))}findAll(t={}){return this.getAll().filter(i=>Xv(t,i))}notify(t){Dn.batch(()=>{this.listeners.forEach(i=>{i(t)})})}resumePausedMutations(){const t=this.getAll().filter(i=>i.state.isPaused);return Dn.batch(()=>Promise.all(t.map(i=>i.continue().catch(Kn))))}},Sa=new WeakMap,Ni=new WeakMap,Vl=new WeakMap,ax);function oc(s){var t;return(t=s.options.scope)==null?void 0:t.id}var qi,rx,zM=(rx=class extends kl{constructor(t={}){super();te(this,qi);this.config=t,Ft(this,qi,new Map)}build(t,i,r){const l=i.queryKey,c=i.queryHash??Hp(l,i);let h=this.get(c);return h||(h=new CM({client:t,queryKey:l,queryHash:c,options:t.defaultQueryOptions(i),state:r,defaultOptions:t.getQueryDefaults(l)}),this.add(h)),h}add(t){V(this,qi).has(t.queryHash)||(V(this,qi).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const i=V(this,qi).get(t.queryHash);i&&(t.destroy(),i===t&&V(this,qi).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Dn.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return V(this,qi).get(t)}getAll(){return[...V(this,qi).values()]}find(t){const i={exact:!0,...t};return this.getAll().find(r=>kv(i,r))}findAll(t={}){const i=this.getAll();return Object.keys(t).length>0?i.filter(r=>kv(t,r)):i}notify(t){Dn.batch(()=>{this.listeners.forEach(i=>{i(t)})})}onFocus(){Dn.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Dn.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},qi=new WeakMap,rx),nn,hr,dr,So,Mo,pr,Eo,bo,sx,FM=(sx=class{constructor(s={}){te(this,nn);te(this,hr);te(this,dr);te(this,So);te(this,Mo);te(this,pr);te(this,Eo);te(this,bo);Ft(this,nn,s.queryCache||new zM),Ft(this,hr,s.mutationCache||new PM),Ft(this,dr,s.defaultOptions||{}),Ft(this,So,new Map),Ft(this,Mo,new Map),Ft(this,pr,0)}mount(){sc(this,pr)._++,V(this,pr)===1&&(Ft(this,Eo,Vp.subscribe(async s=>{s&&(await this.resumePausedMutations(),V(this,nn).onFocus())})),Ft(this,bo,Bc.subscribe(async s=>{s&&(await this.resumePausedMutations(),V(this,nn).onOnline())})))}unmount(){var s,t;sc(this,pr)._--,V(this,pr)===0&&((s=V(this,Eo))==null||s.call(this),Ft(this,Eo,void 0),(t=V(this,bo))==null||t.call(this),Ft(this,bo,void 0))}isFetching(s){return V(this,nn).findAll({...s,fetchStatus:"fetching"}).length}isMutating(s){return V(this,hr).findAll({...s,status:"pending"}).length}getQueryData(s){var i;const t=this.defaultQueryOptions({queryKey:s});return(i=V(this,nn).get(t.queryHash))==null?void 0:i.state.data}ensureQueryData(s){const t=this.defaultQueryOptions(s),i=V(this,nn).build(this,t),r=i.state.data;return r===void 0?this.fetchQuery(s):(s.revalidateIfStale&&i.isStaleByTime(mr(t.staleTime,i))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(s){return V(this,nn).findAll(s).map(({queryKey:t,state:i})=>{const r=i.data;return[t,r]})}setQueryData(s,t,i){const r=this.defaultQueryOptions({queryKey:s}),l=V(this,nn).get(r.queryHash),c=l==null?void 0:l.state.data,h=_M(t,c);if(h!==void 0)return V(this,nn).build(this,r).setData(h,{...i,manual:!0})}setQueriesData(s,t,i){return Dn.batch(()=>V(this,nn).findAll(s).map(({queryKey:r})=>[r,this.setQueryData(r,t,i)]))}getQueryState(s){var i;const t=this.defaultQueryOptions({queryKey:s});return(i=V(this,nn).get(t.queryHash))==null?void 0:i.state}removeQueries(s){const t=V(this,nn);Dn.batch(()=>{t.findAll(s).forEach(i=>{t.remove(i)})})}resetQueries(s,t){const i=V(this,nn);return Dn.batch(()=>(i.findAll(s).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...s},t)))}cancelQueries(s,t={}){const i={revert:!0,...t},r=Dn.batch(()=>V(this,nn).findAll(s).map(l=>l.cancel(i)));return Promise.all(r).then(Kn).catch(Kn)}invalidateQueries(s,t={}){return Dn.batch(()=>(V(this,nn).findAll(s).forEach(i=>{i.invalidate()}),(s==null?void 0:s.refetchType)==="none"?Promise.resolve():this.refetchQueries({...s,type:(s==null?void 0:s.refetchType)??(s==null?void 0:s.type)??"active"},t)))}refetchQueries(s,t={}){const i={...t,cancelRefetch:t.cancelRefetch??!0},r=Dn.batch(()=>V(this,nn).findAll(s).filter(l=>!l.isDisabled()&&!l.isStatic()).map(l=>{let c=l.fetch(void 0,i);return i.throwOnError||(c=c.catch(Kn)),l.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(r).then(Kn)}fetchQuery(s){const t=this.defaultQueryOptions(s);t.retry===void 0&&(t.retry=!1);const i=V(this,nn).build(this,t);return i.isStaleByTime(mr(t.staleTime,i))?i.fetch(t):Promise.resolve(i.state.data)}prefetchQuery(s){return this.fetchQuery(s).then(Kn).catch(Kn)}fetchInfiniteQuery(s){return s.behavior=Kv(s.pages),this.fetchQuery(s)}prefetchInfiniteQuery(s){return this.fetchInfiniteQuery(s).then(Kn).catch(Kn)}ensureInfiniteQueryData(s){return s.behavior=Kv(s.pages),this.ensureQueryData(s)}resumePausedMutations(){return Bc.isOnline()?V(this,hr).resumePausedMutations():Promise.resolve()}getQueryCache(){return V(this,nn)}getMutationCache(){return V(this,hr)}getDefaultOptions(){return V(this,dr)}setDefaultOptions(s){Ft(this,dr,s)}setQueryDefaults(s,t){V(this,So).set(Pl(s),{queryKey:s,defaultOptions:t})}getQueryDefaults(s){const t=[...V(this,So).values()],i={};return t.forEach(r=>{zl(s,r.queryKey)&&Object.assign(i,r.defaultOptions)}),i}setMutationDefaults(s,t){V(this,Mo).set(Pl(s),{mutationKey:s,defaultOptions:t})}getMutationDefaults(s){const t=[...V(this,Mo).values()],i={};return t.forEach(r=>{zl(s,r.mutationKey)&&Object.assign(i,r.defaultOptions)}),i}defaultQueryOptions(s){if(s._defaulted)return s;const t={...V(this,dr).queries,...this.getQueryDefaults(s.queryKey),...s,_defaulted:!0};return t.queryHash||(t.queryHash=Hp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Gp&&(t.enabled=!1),t}defaultMutationOptions(s){return s!=null&&s._defaulted?s:{...V(this,dr).mutations,...(s==null?void 0:s.mutationKey)&&this.getMutationDefaults(s.mutationKey),...s,_defaulted:!0}}clear(){V(this,nn).clear(),V(this,hr).clear()}},nn=new WeakMap,hr=new WeakMap,dr=new WeakMap,So=new WeakMap,Mo=new WeakMap,pr=new WeakMap,Eo=new WeakMap,bo=new WeakMap,sx),gx=Vn.createContext(void 0),BM=s=>{const t=Vn.useContext(gx);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},IM=({client:s,children:t})=>(Vn.useEffect(()=>(s.mount(),()=>{s.unmount()}),[s]),dt.jsx(gx.Provider,{value:s,children:t})),_x=Vn.createContext(!1),HM=()=>Vn.useContext(_x);_x.Provider;function GM(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var VM=Vn.createContext(GM()),kM=()=>Vn.useContext(VM),XM=(s,t,i)=>{const r=i!=null&&i.state.error&&typeof s.throwOnError=="function"?cx(s.throwOnError,[i.state.error,i]):s.throwOnError;(s.suspense||s.experimental_prefetchInRender||r)&&(t.isReset()||(s.retryOnMount=!1))},qM=s=>{Vn.useEffect(()=>{s.clearReset()},[s])},WM=({result:s,errorResetBoundary:t,throwOnError:i,query:r,suspense:l})=>s.isError&&!t.isReset()&&!s.isFetching&&r&&(l&&s.data===void 0||cx(i,[s.error,r])),YM=s=>{if(s.suspense){const i=l=>l==="static"?l:Math.max(l??1e3,1e3),r=s.staleTime;s.staleTime=typeof r=="function"?(...l)=>i(r(...l)):i(r),typeof s.gcTime=="number"&&(s.gcTime=Math.max(s.gcTime,1e3))}},jM=(s,t)=>s.isLoading&&s.isFetching&&!t,ZM=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,$v=(s,t,i)=>t.fetchOptimistic(s).catch(()=>{i.clearReset()});function QM(s,t,i){var y,M,E,A;const r=HM(),l=kM(),c=BM(),h=c.defaultQueryOptions(s);(M=(y=c.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||M.call(y,h);const d=c.getQueryCache().get(h.queryHash);h._optimisticResults=r?"isRestoring":"optimistic",YM(h),XM(h,l,d),qM(l);const m=!c.getQueryCache().get(h.queryHash),[p]=Vn.useState(()=>new t(c,h)),x=p.getOptimisticResult(h),_=!r&&s.subscribed!==!1;if(Vn.useSyncExternalStore(Vn.useCallback(S=>{const g=_?p.subscribe(Dn.batchCalls(S)):Kn;return p.updateResult(),g},[p,_]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),Vn.useEffect(()=>{p.setOptions(h)},[h,p]),ZM(h,x))throw $v(h,p,l);if(WM({result:x,errorResetBoundary:l,throwOnError:h.throwOnError,query:d,suspense:h.suspense}))throw x.error;if((A=(E=c.getDefaultOptions().queries)==null?void 0:E._experimental_afterQuery)==null||A.call(E,h,x),h.experimental_prefetchInRender&&!us&&jM(x,r)){const S=m?$v(h,p,l):d==null?void 0:d.promise;S==null||S.catch(Kn).finally(()=>{p.updateResult()})}return h.notifyOnChangeProps?x:p.trackResult(x)}function vx(s,t){return QM(s,wM)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="171",KM=0,t0=1,JM=2,xx=1,$M=2,xa=3,vr=0,Jn=1,Ma=2,gr=0,lo=1,e0=2,n0=3,i0=4,tE=5,jr=100,eE=101,nE=102,iE=103,aE=104,rE=200,sE=201,oE=202,lE=203,Qd=204,Kd=205,uE=206,cE=207,fE=208,hE=209,dE=210,pE=211,mE=212,gE=213,_E=214,Jd=0,$d=1,tp=2,To=3,ep=4,np=5,ip=6,ap=7,yx=0,vE=1,xE=2,_r=0,yE=1,SE=2,ME=3,EE=4,bE=5,TE=6,AE=7,Sx=300,Ao=301,Ro=302,rp=303,sp=304,Vc=306,op=1e3,Kr=1001,lp=1002,zi=1003,RE=1004,lc=1005,Yi=1006,sd=1007,Jr=1008,Ra=1009,Mx=1010,Ex=1011,Fl=1012,qp=1013,cs=1014,Ea=1015,Xl=1016,Wp=1017,Yp=1018,Co=1020,bx=35902,Tx=1021,Ax=1022,Pi=1023,Rx=1024,Cx=1025,uo=1026,wo=1027,wx=1028,jp=1029,Dx=1030,Zp=1031,Qp=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,up=35840,cp=35841,fp=35842,hp=35843,dp=36196,pp=37492,mp=37496,gp=37808,_p=37809,vp=37810,xp=37811,yp=37812,Sp=37813,Mp=37814,Ep=37815,bp=37816,Tp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,zc=36492,Dp=36494,Up=36495,Ux=36283,Lp=36284,Np=36285,Op=36286,CE=3200,wE=3201,DE=0,UE=1,sr="",Si="srgb",Do="srgb-linear",Ic="linear",ke="srgb",Ws=7680,a0=519,LE=512,NE=513,OE=514,Lx=515,PE=516,zE=517,FE=518,BE=519,r0=35044,s0="300 es",ba=2e3,Hc=2001;class Lo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Pp=180/Math.PI;function ql(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Te(s,t,i){return Math.max(t,Math.min(i,s))}function IE(s,t){return(s%t+t)%t}function ld(s,t,i){return(1-i)*s+i*t}function Rl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class We{constructor(t=0,i=0){We.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,r,l,c,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],x=r[4],_=r[7],y=r[2],M=r[5],E=r[8],A=l[0],S=l[3],g=l[6],F=l[1],L=l[4],w=l[7],X=l[2],I=l[5],O=l[8];return c[0]=h*A+d*F+m*X,c[3]=h*S+d*L+m*I,c[6]=h*g+d*w+m*O,c[1]=p*A+x*F+_*X,c[4]=p*S+x*L+_*I,c[7]=p*g+x*w+_*O,c[2]=y*A+M*F+E*X,c[5]=y*S+M*L+E*I,c[8]=y*g+M*w+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-r*c*x+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],_=x*h-d*p,y=d*m-x*c,M=p*c-h*m,E=i*_+r*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*p-x*r)*A,t[2]=(d*r-l*h)*A,t[3]=y*A,t[4]=(x*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ud.makeScale(t,i)),this}rotate(t){return this.premultiply(ud.makeRotation(-t)),this}translate(t,i){return this.premultiply(ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new ce;function Nx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function HE(){const s=Gc("canvas");return s.style.display="block",s}const o0={};function so(s){s in o0||(o0[s]=!0,console.warn(s))}function GE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function VE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const l0=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u0=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const s={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ke&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(l.r=co(l.r),l.g=co(l.g),l.b=co(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===sr?Ic:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Do]:{primaries:t,whitePoint:r,transfer:Ic,toXYZ:l0,fromXYZ:u0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:r,transfer:ke,toXYZ:l0,fromXYZ:u0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Ue=XE();function Aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ys;class qE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ys===void 0&&(Ys=Gc("canvas")),Ys.width=t.width,Ys.height=t.height;const r=Ys.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ys}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Aa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Aa(i[r]/255)*255):i[r]=Aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WE=0;class Ox{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=ql(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(cd(l[h].image)):c.push(cd(l[h]))}else c=cd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YE=0;class $n extends Lo{constructor(t=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,r=Kr,l=Kr,c=Yi,h=Jr,d=Pi,m=Ra,p=$n.DEFAULT_ANISOTROPY,x=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ql(),this.name="",this.source=new Ox(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case op:t.x=t.x-Math.floor(t.x);break;case Kr:t.x=t.x<0?0:1;break;case lp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case op:t.y=t.y-Math.floor(t.y);break;case Kr:t.y=t.y<0?0:1;break;case lp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Sx;$n.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],x=m[4],_=m[8],y=m[1],M=m[5],E=m[9],A=m[2],S=m[6],g=m[10];if(Math.abs(x-y)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(M+1)/2,X=(g+1)/2,I=(x+y)/4,O=(_+A)/4,k=(E+S)/4;return L>w&&L>X?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=I/r,c=O/r):w>X?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=I/l,c=k/l):X<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),r=O/c,l=k/c),this.set(r,l,c,i),this}let F=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(y-x)*(y-x));return Math.abs(F)<.001&&(F=1),this.x=(S-E)/F,this.y=(_-A)/F,this.z=(y-x)/F,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jE extends Lo{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new $n(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Ox(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends jE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Px extends $n{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends $n{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3];const y=c[h+0],M=c[h+1],E=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(_!==A||m!==y||p!==M||x!==E){let S=1-d;const g=m*y+p*M+x*E+_*A,F=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const X=Math.sqrt(L),I=Math.atan2(X,g*F);S=Math.sin(S*I)/X,d=Math.sin(d*I)/X}const w=d*F;if(m=m*S+y*w,p=p*S+M*w,x=x*S+E*w,_=_*S+A*w,S===1-d){const X=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=X,p*=X,x*=X,_*=X}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=c[h],y=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+x*_+m*M-p*y,t[i+1]=m*E+x*y+p*_-d*M,t[i+2]=p*E+x*M+d*y-m*_,t[i+3]=x*E-d*_-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),_=d(c/2),y=m(r/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*x*_+p*M*E,this._y=p*M*_-y*x*E,this._z=p*x*E+y*M*_,this._w=p*x*_-y*M*E;break;case"YXZ":this._x=y*x*_+p*M*E,this._y=p*M*_-y*x*E,this._z=p*x*E-y*M*_,this._w=p*x*_+y*M*E;break;case"ZXY":this._x=y*x*_-p*M*E,this._y=p*M*_+y*x*E,this._z=p*x*E+y*M*_,this._w=p*x*_-y*M*E;break;case"ZYX":this._x=y*x*_-p*M*E,this._y=p*M*_+y*x*E,this._z=p*x*E-y*M*_,this._w=p*x*_+y*M*E;break;case"YZX":this._x=y*x*_+p*M*E,this._y=p*M*_+y*x*E,this._z=p*x*E-y*M*_,this._w=p*x*_-y*M*E;break;case"XZY":this._x=y*x*_-p*M*E,this._y=p*M*_-y*x*E,this._z=p*x*E+y*M*_,this._w=p*x*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],_=i[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-r*p,this._z=c*x+h*p+r*m-l*d,this._w=h*x-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),_=Math.sin((1-i)*x)/p,y=Math.sin(i*x)/p;return this._w=h*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(c0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(c0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),x=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*x,this.y=r+m*x+d*p-c*_,this.z=l+m*_+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new ot,c0=new Wl;class Yl{constructor(t=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cl),cc.subVectors(this.max,Cl),js.subVectors(t.a,Cl),Zs.subVectors(t.b,Cl),Qs.subVectors(t.c,Cl),$a.subVectors(Zs,js),tr.subVectors(Qs,Zs),Hr.subVectors(js,Qs);let i=[0,-$a.z,$a.y,0,-tr.z,tr.y,0,-Hr.z,Hr.y,$a.z,0,-$a.x,tr.z,0,-tr.x,Hr.z,0,-Hr.x,-$a.y,$a.x,0,-tr.y,tr.x,0,-Hr.y,Hr.x,0];return!hd(i,js,Zs,Qs,cc)||(i=[1,0,0,0,1,0,0,0,1],!hd(i,js,Zs,Qs,cc))?!1:(fc.crossVectors($a,tr),i=[fc.x,fc.y,fc.z],hd(i,js,Zs,Qs,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const da=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],wi=new ot,uc=new Yl,js=new ot,Zs=new ot,Qs=new ot,$a=new ot,tr=new ot,Hr=new ot,Cl=new ot,cc=new ot,fc=new ot,Gr=new ot;function hd(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Gr.fromArray(s,c);const d=l.x*Math.abs(Gr.x)+l.y*Math.abs(Gr.y)+l.z*Math.abs(Gr.z),m=t.dot(Gr),p=i.dot(Gr),x=r.dot(Gr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const QE=new Yl,wl=new ot,dd=new ot;class kc{constructor(t=new ot,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):QE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wl.subVectors(t,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wl.copy(t.center).add(dd)),this.expandByPoint(wl.copy(t.center).sub(dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pa=new ot,pd=new ot,hc=new ot,er=new ot,md=new ot,dc=new ot,gd=new ot;class zx{constructor(t=new ot,i=new ot(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){pd.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),er.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(hc),d=er.dot(this.direction),m=-er.dot(hc),p=er.lengthSq(),x=Math.abs(1-h*h);let _,y,M,E;if(x>0)if(_=h*m-d,y=h*d-m,E=c*x,_>=0)if(y>=-E)if(y<=E){const A=1/x;_*=A,y*=A,M=_*(_+h*y+2*d)+y*(h*_+y+2*m)+p}else y=c,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-h*c+d)),y=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(_=Math.max(0,-(h*c+d)),y=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+y*(y+2*m)+p);else y=h>0?-c:c,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(pd).addScaledVector(hc,y),M}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const r=pa.dot(this.direction),l=pa.dot(pa)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),x>=0?(c=(t.min.y-y.y)*x,h=(t.max.y-y.y)*x):(c=(t.max.y-y.y)*x,h=(t.min.y-y.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,r,l,c){md.subVectors(i,t),dc.subVectors(r,t),gd.crossVectors(md,dc);let h=this.direction.dot(gd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,t);const m=d*this.direction.dot(dc.crossVectors(er,dc));if(m<0)return null;const p=d*this.direction.dot(md.cross(er));if(p<0||m+p>h)return null;const x=-d*er.dot(gd);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,r,l,c,h,d,m,p,x,_,y,M,E,A,S){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,x,_,y,M,E,A,S)}set(t,i,r,l,c,h,d,m,p,x,_,y,M,E,A,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=x,g[10]=_,g[14]=y,g[3]=M,g[7]=E,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ks.setFromMatrixColumn(t,0).length(),c=1/Ks.setFromMatrixColumn(t,1).length(),h=1/Ks.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=h*x,M=h*_,E=d*x,A=d*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*x,M=m*_,E=p*x,A=p*_;i[0]=y+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*x,i[9]=-d,i[2]=M*d-E,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*x,M=m*_,E=p*x,A=p*_;i[0]=y-A*d,i[4]=-h*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*x,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*x,M=h*_,E=d*x,A=d*_;i[0]=m*x,i[4]=E*p-M,i[8]=y*p+A,i[1]=m*_,i[5]=A*p+y,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*x,i[4]=A-y*_,i[8]=E*_+M,i[1]=_,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*_+E,i[10]=y-A*_}else if(t.order==="XZY"){const y=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=y*_+A,i[5]=h*x,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*x,i[10]=A*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KE,t,JE)}lookAt(t,i,r){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),nr.crossVectors(r,li),nr.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),nr.crossVectors(r,li)),nr.normalize(),pc.crossVectors(li,nr),l[0]=nr.x,l[4]=pc.x,l[8]=li.x,l[1]=nr.y,l[5]=pc.y,l[9]=li.y,l[2]=nr.z,l[6]=pc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],x=r[1],_=r[5],y=r[9],M=r[13],E=r[2],A=r[6],S=r[10],g=r[14],F=r[3],L=r[7],w=r[11],X=r[15],I=l[0],O=l[4],k=l[8],D=l[12],C=l[1],B=l[5],lt=l[9],rt=l[13],mt=l[2],gt=l[6],P=l[10],K=l[14],Q=l[3],Et=l[7],At=l[11],N=l[15];return c[0]=h*I+d*C+m*mt+p*Q,c[4]=h*O+d*B+m*gt+p*Et,c[8]=h*k+d*lt+m*P+p*At,c[12]=h*D+d*rt+m*K+p*N,c[1]=x*I+_*C+y*mt+M*Q,c[5]=x*O+_*B+y*gt+M*Et,c[9]=x*k+_*lt+y*P+M*At,c[13]=x*D+_*rt+y*K+M*N,c[2]=E*I+A*C+S*mt+g*Q,c[6]=E*O+A*B+S*gt+g*Et,c[10]=E*k+A*lt+S*P+g*At,c[14]=E*D+A*rt+S*K+g*N,c[3]=F*I+L*C+w*mt+X*Q,c[7]=F*O+L*B+w*gt+X*Et,c[11]=F*k+L*lt+w*P+X*At,c[15]=F*D+L*rt+w*K+X*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],_=t[6],y=t[10],M=t[14],E=t[3],A=t[7],S=t[11],g=t[15];return E*(+c*m*_-l*p*_-c*d*y+r*p*y+l*d*M-r*m*M)+A*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*x-c*m*x)+S*(+i*p*_-i*d*M-c*h*_+r*h*M+c*d*x-r*p*x)+g*(-l*d*x-i*m*_+i*d*y+l*h*_-r*h*y+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],_=t[9],y=t[10],M=t[11],E=t[12],A=t[13],S=t[14],g=t[15],F=_*S*p-A*y*p+A*m*M-d*S*M-_*m*g+d*y*g,L=E*y*p-x*S*p-E*m*M+h*S*M+x*m*g-h*y*g,w=x*A*p-E*_*p+E*d*M-h*A*M-x*d*g+h*_*g,X=E*_*m-x*A*m-E*d*y+h*A*y+x*d*S-h*_*S,I=i*F+r*L+l*w+c*X;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return t[0]=F*O,t[1]=(A*y*c-_*S*c-A*l*M+r*S*M+_*l*g-r*y*g)*O,t[2]=(d*S*c-A*m*c+A*l*p-r*S*p-d*l*g+r*m*g)*O,t[3]=(_*m*c-d*y*c-_*l*p+r*y*p+d*l*M-r*m*M)*O,t[4]=L*O,t[5]=(x*S*c-E*y*c+E*l*M-i*S*M-x*l*g+i*y*g)*O,t[6]=(E*m*c-h*S*c-E*l*p+i*S*p+h*l*g-i*m*g)*O,t[7]=(h*y*c-x*m*c+x*l*p-i*y*p-h*l*M+i*m*M)*O,t[8]=w*O,t[9]=(E*_*c-x*A*c-E*r*M+i*A*M+x*r*g-i*_*g)*O,t[10]=(h*A*c-E*d*c+E*r*p-i*A*p-h*r*g+i*d*g)*O,t[11]=(x*d*c-h*_*c-x*r*p+i*_*p+h*r*M-i*d*M)*O,t[12]=X*O,t[13]=(x*A*l-E*_*l+E*r*y-i*A*y-x*r*S+i*_*S)*O,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*S-i*d*S)*O,t[15]=(h*_*l-x*d*l+x*r*m-i*_*m-h*r*y+i*d*y)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,_=d+d,y=c*p,M=c*x,E=c*_,A=h*x,S=h*_,g=d*_,F=m*p,L=m*x,w=m*_,X=r.x,I=r.y,O=r.z;return l[0]=(1-(A+g))*X,l[1]=(M+w)*X,l[2]=(E-L)*X,l[3]=0,l[4]=(M-w)*I,l[5]=(1-(y+g))*I,l[6]=(S+F)*I,l[7]=0,l[8]=(E+L)*O,l[9]=(S-F)*O,l[10]=(1-(y+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Ks.set(l[0],l[1],l[2]).length();const h=Ks.set(l[4],l[5],l[6]).length(),d=Ks.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Di.copy(this);const p=1/c,x=1/h,_=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=ba){const m=this.elements,p=2*c/(i-t),x=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let M,E;if(d===ba)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Hc)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=x,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=ba){const m=this.elements,p=1/(i-t),x=1/(r-l),_=1/(h-c),y=(i+t)*p,M=(r+l)*x;let E,A;if(d===ba)E=(h+c)*_,A=-2*_;else if(d===Hc)E=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*x,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ks=new ot,Di=new ln,KE=new ot(0,0,0),JE=new ot(1,1,1),nr=new ot,pc=new ot,li=new ot,f0=new ln,h0=new Wl;class Ca{constructor(t=0,i=0,r=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return f0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return h0.setFromEuler(this),this.setFromQuaternion(h0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class Fx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $E=0;const d0=new ot,Js=new Wl,ma=new ln,mc=new ot,Dl=new ot,tb=new ot,eb=new Wl,p0=new ot(1,0,0),m0=new ot(0,1,0),g0=new ot(0,0,1),_0={type:"added"},nb={type:"removed"},$s={type:"childadded",child:null},_d={type:"childremoved",child:null};class ti extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new ot,i=new Ca,r=new Wl,l=new ot(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ce}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Js.setFromAxisAngle(t,i),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,i){return Js.setFromAxisAngle(t,i),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(p0,t)}rotateY(t){return this.rotateOnAxis(m0,t)}rotateZ(t){return this.rotateOnAxis(g0,t)}translateOnAxis(t,i){return d0.copy(t).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(p0,t)}translateY(t){return this.translateOnAxis(m0,t)}translateZ(t){return this.translateOnAxis(g0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?mc.copy(t):mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Dl,mc,this.up):ma.lookAt(mc,Dl,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Js.setFromRotationMatrix(ma),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_0),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(nb),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_0),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,t,tb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,eb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),_=h(t.shapes),y=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new ot(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new ot,ga=new ot,vd=new ot,_a=new ot,to=new ot,eo=new ot,v0=new ot,xd=new ot,yd=new ot,Sd=new ot,Md=new on,Ed=new on,bd=new on;class Oi{constructor(t=new ot,i=new ot,r=new ot){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ui.subVectors(l,i),ga.subVectors(r,i),vd.subVectors(t,i);const h=Ui.dot(Ui),d=Ui.dot(ga),m=Ui.dot(vd),p=ga.dot(ga),x=ga.dot(vd),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,M=(p*m-d*x)*y,E=(h*x-d*m)*y;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(h,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Md.setScalar(0),Ed.setScalar(0),bd.setScalar(0),Md.fromBufferAttribute(t,i),Ed.fromBufferAttribute(t,r),bd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Md,c.x),h.addScaledVector(Ed,c.y),h.addScaledVector(bd,c.z),h}static isFrontFacing(t,i,r,l){return Ui.subVectors(r,i),ga.subVectors(t,i),Ui.cross(ga).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ui.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Oi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;to.subVectors(l,r),eo.subVectors(c,r),xd.subVectors(t,r);const m=to.dot(xd),p=eo.dot(xd);if(m<=0&&p<=0)return i.copy(r);yd.subVectors(t,l);const x=to.dot(yd),_=eo.dot(yd);if(x>=0&&_<=x)return i.copy(l);const y=m*_-x*p;if(y<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(to,h);Sd.subVectors(t,c);const M=to.dot(Sd),E=eo.dot(Sd);if(E>=0&&M<=E)return i.copy(c);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(eo,d);const S=x*E-M*_;if(S<=0&&_-x>=0&&M-E>=0)return v0.subVectors(c,l),d=(_-x)/(_-x+(M-E)),i.copy(l).addScaledVector(v0,d);const g=1/(S+A+y);return h=A*g,d=y*g,i.copy(r).addScaledVector(to,h).addScaledVector(eo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Td(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Le{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ue.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ue.workingColorSpace){if(t=IE(t,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Td(h,c,t+1/3),this.g=Td(h,c,t),this.b=Td(h,c,t-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(t,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const r=Bx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ue.fromWorkingColorSpace(Pn.copy(this),t),Math.round(Te(Pn.r*255,0,255))*65536+Math.round(Te(Pn.g*255,0,255))*256+Math.round(Te(Pn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=x<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Si){Ue.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+i,ir.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ir),t.getHSL(gc);const r=ld(ir.h,gc.h,i),l=ld(ir.s,gc.s,i),c=ld(ir.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Le;Le.NAMES=Bx;let ib=0;class jl extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=ql(),this.name="",this.type="Material",this.blending=lo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Kd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Kd&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ix extends jl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new ot,_c=new We;class Ei{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=r0,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Rl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Rl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Rl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Rl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Rl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==r0&&(t.usage=this.usage),t}}class Hx extends Ei{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Gx extends Ei{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ls extends Ei{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ab=0;const vi=new ln,Ad=new ti,no=new ot,ui=new Yl,Ul=new Yl,Mn=new ot;class wa extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nx(t)?Gx:Hx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,r){return vi.makeTranslation(t,i,r),this.applyMatrix4(vi),this}scale(t,i,r){return vi.makeScale(t,i,r),this.applyMatrix4(vi),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ls(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ul.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ui.min,Ul.min),ui.expandByPoint(Mn),Mn.addVectors(ui.max,Ul.max),ui.expandByPoint(Mn)):(ui.expandByPoint(Ul.min),ui.expandByPoint(Ul.max))}ui.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Mn.fromBufferAttribute(d,p),m&&(no.fromBufferAttribute(t,p),Mn.add(no)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new ot,m[k]=new ot;const p=new ot,x=new ot,_=new ot,y=new We,M=new We,E=new We,A=new ot,S=new ot;function g(k,D,C){p.fromBufferAttribute(r,k),x.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),y.fromBufferAttribute(c,k),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),x.sub(p),_.sub(p),M.sub(y),E.sub(y);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(A.copy(x).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(B),S.copy(_).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(B),d[k].add(A),d[D].add(A),d[C].add(A),m[k].add(S),m[D].add(S),m[C].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let k=0,D=F.length;k<D;++k){const C=F[k],B=C.start,lt=C.count;for(let rt=B,mt=B+lt;rt<mt;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new ot,w=new ot,X=new ot,I=new ot;function O(k){X.fromBufferAttribute(l,k),I.copy(X);const D=d[k];L.copy(D),L.sub(X.multiplyScalar(X.dot(D))).normalize(),w.crossVectors(I,D);const B=w.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,B)}for(let k=0,D=F.length;k<D;++k){const C=F[k],B=C.start,lt=C.count;for(let rt=B,mt=B+lt;rt<mt;rt+=3)O(t.getX(rt+0)),O(t.getX(rt+1)),O(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new ot,c=new ot,h=new ot,d=new ot,m=new ot,p=new ot,x=new ot,_=new ot;if(t)for(let y=0,M=t.count;y<M;y+=3){const E=t.getX(y+0),A=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(x),m.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,_=d.normalized,y=new p.constructor(m.length*x);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*x;for(let g=0;g<x;g++)y[E++]=p[M++]}return new Ei(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,_=p.length;x<_;x++){const y=p[x],M=t(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],_=c[p];for(let y=0,M=_.length;y<M;y++)x.push(_[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new ln,Vr=new zx,vc=new kc,y0=new ot,xc=new ot,yc=new ot,Sc=new ot,Rd=new ot,Mc=new ot,S0=new ot,Ec=new ot;class Ta extends ti{constructor(t=new wa,i=new Ix){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],_=c[m];x!==0&&(Rd.fromBufferAttribute(_,t),h?Mc.addScaledVector(Rd,x):Mc.addScaledVector(Rd.sub(i),x))}i.add(Mc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(c),Vr.copy(t.ray).recast(t.near),!(vc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(vc,y0)===null||Vr.origin.distanceToSquared(y0)>(t.far-t.near)**2))&&(x0.copy(c).invert(),Vr.copy(t.ray).applyMatrix4(x0),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Vr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=y.length;E<A;E++){const S=y[E],g=h[S.materialIndex],F=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let w=F,X=L;w<X;w+=3){const I=d.getX(w),O=d.getX(w+1),k=d.getX(w+2);l=bc(this,g,t,r,p,x,_,I,O,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,g=A;S<g;S+=3){const F=d.getX(S),L=d.getX(S+1),w=d.getX(S+2);l=bc(this,h,t,r,p,x,_,F,L,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=y.length;E<A;E++){const S=y[E],g=h[S.materialIndex],F=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=F,X=L;w<X;w+=3){const I=w,O=w+1,k=w+2;l=bc(this,g,t,r,p,x,_,I,O,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,g=A;S<g;S+=3){const F=S,L=S+1,w=S+2;l=bc(this,h,t,r,p,x,_,F,L,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function rb(s,t,i,r,l,c,h,d){let m;if(t.side===Jn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===vr,d),m===null)return null;Ec.copy(d),Ec.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:s}}function bc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,xc),s.getVertexPosition(m,yc),s.getVertexPosition(p,Sc);const x=rb(s,t,i,r,xc,yc,Sc,S0);if(x){const _=new ot;Oi.getBarycoord(S0,xc,yc,Sc,_),l&&(x.uv=Oi.getInterpolatedAttribute(l,d,m,p,_,new We)),c&&(x.uv1=Oi.getInterpolatedAttribute(c,d,m,p,_,new We)),h&&(x.normal=Oi.getInterpolatedAttribute(h,d,m,p,_,new ot),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new ot,materialIndex:0};Oi.getNormal(xc,yc,Sc,y.normal),x.face=y,x.barycoord=_}return x}class Zl extends wa{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ls(p,3)),this.setAttribute("normal",new ls(x,3)),this.setAttribute("uv",new ls(_,2));function E(A,S,g,F,L,w,X,I,O,k,D){const C=w/O,B=X/k,lt=w/2,rt=X/2,mt=I/2,gt=O+1,P=k+1;let K=0,Q=0;const Et=new ot;for(let At=0;At<P;At++){const N=At*B-rt;for(let nt=0;nt<gt;nt++){const Mt=nt*C-lt;Et[A]=Mt*F,Et[S]=N*L,Et[g]=mt,p.push(Et.x,Et.y,Et.z),Et[A]=0,Et[S]=0,Et[g]=I>0?1:-1,x.push(Et.x,Et.y,Et.z),_.push(nt/O),_.push(1-At/k),K+=1}}for(let At=0;At<k;At++)for(let N=0;N<O;N++){const nt=y+N+gt*At,Mt=y+N+gt*(At+1),Z=y+(N+1)+gt*(At+1),ct=y+(N+1)+gt*At;m.push(nt,Mt,ct),m.push(Mt,Z,ct),Q+=6}d.addGroup(M,Q,D),M+=Q,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Uo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Uo(s[i]);for(const l in r)t[l]=r[l]}return t}function sb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Vx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const ob={clone:Uo,merge:Hn};var lb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends jl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Uo(t.uniforms),this.uniformsGroups=sb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class kx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ba}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ot,M0=new We,E0=new We;class Mi extends kx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,i){return this.getViewBounds(t,M0,E0),i.subVectors(E0,M0)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(od*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const io=-90,ao=1;class cb extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(io,ao,t,i);l.layers=this.layers,this.add(l);const c=new Mi(io,ao,t,i);c.layers=this.layers,this.add(c);const h=new Mi(io,ao,t,i);h.layers=this.layers,this.add(h);const d=new Mi(io,ao,t,i);d.layers=this.layers,this.add(d);const m=new Mi(io,ao,t,i);m.layers=this.layers,this.add(m);const p=new Mi(io,ao,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ba)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(_,y,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Xx extends $n{constructor(t,i,r,l,c,h,d,m,p,x){t=t!==void 0?t:[],i=i!==void 0?i:Ao,super(t,i,r,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fb extends fs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Xx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Yi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zl(5,5,5),c=new xr({name:"CubemapFromEquirect",uniforms:Uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:gr});c.uniforms.tEquirect.value=i;const h=new Ta(l,c),d=i.minFilter;return i.minFilter===Jr&&(i.minFilter=Yi),new cb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class hb extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Cd=new ot,db=new ot,pb=new ce;class Wr{constructor(t=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Cd.subVectors(r,i).cross(db.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Cd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||pb.getNormalMatrix(t),l=this.coplanarPoint(Cd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new kc,Tc=new ot;class qx{constructor(t=new Wr,i=new Wr,r=new Wr,l=new Wr,c=new Wr,h=new Wr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ba){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],x=l[5],_=l[6],y=l[7],M=l[8],E=l[9],A=l[10],S=l[11],g=l[12],F=l[13],L=l[14],w=l[15];if(r[0].setComponents(m-c,y-p,S-M,w-g).normalize(),r[1].setComponents(m+c,y+p,S+M,w+g).normalize(),r[2].setComponents(m+h,y+x,S+E,w+F).normalize(),r[3].setComponents(m-h,y-x,S-E,w-F).normalize(),r[4].setComponents(m-d,y-_,S-A,w-L).normalize(),i===ba)r[5].setComponents(m+d,y+_,S+A,w+L).normalize();else if(i===Hc)r[5].setComponents(d,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(t){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wx extends jl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const b0=new ln,zp=new zx,Ac=new kc,Rc=new ot;class mb extends ti{constructor(t=new wa,i=new Wx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;b0.copy(l).invert(),zp.copy(t.ray).applyMatrix4(b0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,_=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=y,A=M;E<A;E++){const S=p.getX(E);Rc.fromBufferAttribute(_,S),T0(Rc,S,m,l,t,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let E=y,A=M;E<A;E++)Rc.fromBufferAttribute(_,E),T0(Rc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T0(s,t,i,r,l,c,h){const d=zp.distanceSqToPoint(s);if(d<i){const m=new ot;zp.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Cc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Yx extends $n{constructor(t,i,r,l,c,h,d,m,p,x=uo){if(x!==uo&&x!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===uo&&(r=cs),r===void 0&&x===wo&&(r=Co),super(null,l,c,h,d,m,x,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:zi,this.minFilter=m!==void 0?m:zi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Xc extends wa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,_=t/d,y=i/m,M=[],E=[],A=[],S=[];for(let g=0;g<x;g++){const F=g*y-h;for(let L=0;L<p;L++){const w=L*_-c;E.push(w,-F,0),A.push(0,0,1),S.push(L/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let F=0;F<d;F++){const L=F+p*g,w=F+p*(g+1),X=F+1+p*(g+1),I=F+1+p*g;M.push(L,w,I),M.push(w,X,I)}this.setIndex(M),this.setAttribute("position",new ls(E,3)),this.setAttribute("normal",new ls(A,3)),this.setAttribute("uv",new ls(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class gb extends jl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _b extends jl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vb extends kx{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xb extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function A0(s,t,i,r){const l=yb(r);switch(i){case Tx:return s*t;case Rx:return s*t;case Cx:return s*t*2;case wx:return s*t/l.components*l.byteLength;case jp:return s*t/l.components*l.byteLength;case Dx:return s*t*2/l.components*l.byteLength;case Zp:return s*t*2/l.components*l.byteLength;case Ax:return s*t*3/l.components*l.byteLength;case Pi:return s*t*4/l.components*l.byteLength;case Qp:return s*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cp:case hp:return Math.max(s,16)*Math.max(t,8)/4;case up:case fp:return Math.max(s,8)*Math.max(t,8)/2;case dp:case pp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _p:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case bp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Tp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ap:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zc:case Dp:case Up:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ux:case Lp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Np:case Op:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yb(s){switch(s){case Ra:case Mx:return{byteLength:1,components:1};case Fl:case Ex:case Xl:return{byteLength:2,components:1};case Wp:case Yp:return{byteLength:2,components:4};case cs:case qp:case Ea:return{byteLength:4,components:1};case bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Sb(s){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,_=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const x=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,x);else{_.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<_.length;M++){const E=_[y],A=_[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,_[y]=A)}_.length=y+1;for(let M=0,E=_.length;M<E;M++){const A=_[M];s.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",$b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ST=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:bb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Rb,aomap_fragment:Cb,aomap_pars_fragment:wb,batching_pars_vertex:Db,batching_vertex:Ub,begin_vertex:Lb,beginnormal_vertex:Nb,bsdfs:Ob,iridescence_fragment:Pb,bumpmap_pars_fragment:zb,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Bb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Vb,color_pars_vertex:kb,color_vertex:Xb,common:qb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:jb,displacementmap_vertex:Zb,emissivemap_fragment:Qb,emissivemap_pars_fragment:Kb,colorspace_fragment:Jb,colorspace_pars_fragment:$b,envmap_fragment:tT,envmap_common_pars_fragment:eT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:aT,fog_vertex:rT,fog_pars_vertex:sT,fog_fragment:oT,fog_pars_fragment:lT,gradientmap_pars_fragment:uT,lightmap_pars_fragment:cT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:hT,lights_pars_begin:dT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:_T,lights_phong_pars_fragment:vT,lights_physical_fragment:xT,lights_physical_pars_fragment:yT,lights_fragment_begin:ST,lights_fragment_maps:MT,lights_fragment_end:ET,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:RT,map_fragment:CT,map_pars_fragment:wT,map_particle_fragment:DT,map_particle_pars_fragment:UT,metalnessmap_fragment:LT,metalnessmap_pars_fragment:NT,morphinstance_vertex:OT,morphcolor_vertex:PT,morphnormal_vertex:zT,morphtarget_pars_vertex:FT,morphtarget_vertex:BT,normal_fragment_begin:IT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:VT,normal_vertex:kT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:WT,clearcoat_pars_fragment:YT,iridescence_pars_fragment:jT,opaque_fragment:ZT,packing:QT,premultiplied_alpha_fragment:KT,project_vertex:JT,dithering_fragment:$T,dithering_pars_fragment:tA,roughnessmap_fragment:eA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:rA,shadowmask_pars_fragment:sA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:uA,skinnormal_vertex:cA,specularmap_fragment:fA,specularmap_pars_fragment:hA,tonemapping_fragment:dA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:_A,uv_pars_vertex:vA,uv_vertex:xA,worldpos_vertex:yA,background_vert:SA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:bA,cube_vert:TA,cube_frag:AA,depth_vert:RA,depth_frag:CA,distanceRGBA_vert:wA,distanceRGBA_frag:DA,equirect_vert:UA,equirect_frag:LA,linedashed_vert:NA,linedashed_frag:OA,meshbasic_vert:PA,meshbasic_frag:zA,meshlambert_vert:FA,meshlambert_frag:BA,meshmatcap_vert:IA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:kA,meshphong_frag:XA,meshphysical_vert:qA,meshphysical_frag:WA,meshtoon_vert:YA,meshtoon_frag:jA,points_vert:ZA,points_frag:QA,shadow_vert:KA,shadow_frag:JA,sprite_vert:$A,sprite_frag:t1},Nt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Hn([Nt.common,Nt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Hn([Nt.lights,Nt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const wc={r:0,b:0,g:0},Xr=new Ca,e1=new ln;function n1(s,t,i,r,l,c,h){const d=new Le(0);let m=c===!0?0:1,p,x,_=null,y=0,M=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function A(L){let w=!1;const X=E(L);X===null?g(d,m):X&&X.isColor&&(g(X,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,w){const X=E(w);X&&(X.isCubeTexture||X.mapping===Vc)?(x===void 0&&(x=new Ta(new Zl(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Uo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(I,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Xr.copy(w.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),x.material.uniforms.envMap.value=X,x.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Xr)),x.material.toneMapped=Ue.getTransfer(X.colorSpace)!==ke,(_!==X||y!==X.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,_=X,y=X.version,M=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Ta(new Xc(2,2),new xr({name:"BackgroundMaterial",uniforms:Uo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(X.colorSpace)!==ke,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||y!==X.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=X,y=X.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,w){L.getRGB(wc,Vx(s)),r.buffers.color.setClear(wc.r,wc.g,wc.b,w,h)}function F(){x!==void 0&&(x.geometry.dispose(),x.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:A,addToRenderList:S,dispose:F}}function i1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,B,lt,rt,mt){let gt=!1;const P=_(rt,lt,B);c!==P&&(c=P,p(c.object)),gt=M(C,rt,lt,mt),gt&&E(C,rt,lt,mt),mt!==null&&t.update(mt,s.ELEMENT_ARRAY_BUFFER),(gt||h)&&(h=!1,w(C,B,lt,rt),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function _(C,B,lt){const rt=lt.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let gt=mt[B.id];gt===void 0&&(gt={},mt[B.id]=gt);let P=gt[rt];return P===void 0&&(P=y(m()),gt[rt]=P),P}function y(C){const B=[],lt=[],rt=[];for(let mt=0;mt<i;mt++)B[mt]=0,lt[mt]=0,rt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,B,lt,rt){const mt=c.attributes,gt=B.attributes;let P=0;const K=lt.getAttributes();for(const Q in K)if(K[Q].location>=0){const At=mt[Q];let N=gt[Q];if(N===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),At===void 0||At.attribute!==N||N&&At.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==rt}function E(C,B,lt,rt){const mt={},gt=B.attributes;let P=0;const K=lt.getAttributes();for(const Q in K)if(K[Q].location>=0){let At=gt[Q];At===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(At=C.instanceColor));const N={};N.attribute=At,At&&At.data&&(N.data=At.data),mt[Q]=N,P++}c.attributes=mt,c.attributesNum=P,c.index=rt}function A(){const C=c.newAttributes;for(let B=0,lt=C.length;B<lt;B++)C[B]=0}function S(C){g(C,0)}function g(C,B){const lt=c.newAttributes,rt=c.enabledAttributes,mt=c.attributeDivisors;lt[C]=1,rt[C]===0&&(s.enableVertexAttribArray(C),rt[C]=1),mt[C]!==B&&(s.vertexAttribDivisor(C,B),mt[C]=B)}function F(){const C=c.newAttributes,B=c.enabledAttributes;for(let lt=0,rt=B.length;lt<rt;lt++)B[lt]!==C[lt]&&(s.disableVertexAttribArray(lt),B[lt]=0)}function L(C,B,lt,rt,mt,gt,P){P===!0?s.vertexAttribIPointer(C,B,lt,mt,gt):s.vertexAttribPointer(C,B,lt,rt,mt,gt)}function w(C,B,lt,rt){A();const mt=rt.attributes,gt=lt.getAttributes(),P=B.defaultAttributeValues;for(const K in gt){const Q=gt[K];if(Q.location>=0){let Et=mt[K];if(Et===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const At=Et.normalized,N=Et.itemSize,nt=t.get(Et);if(nt===void 0)continue;const Mt=nt.buffer,Z=nt.type,ct=nt.bytesPerElement,Tt=Z===s.INT||Z===s.UNSIGNED_INT||Et.gpuType===qp;if(Et.isInterleavedBufferAttribute){const St=Et.data,kt=St.stride,Gt=Et.offset;if(St.isInstancedInterleavedBuffer){for(let re=0;re<Q.locationSize;re++)g(Q.location+re,St.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let re=0;re<Q.locationSize;re++)S(Q.location+re);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let re=0;re<Q.locationSize;re++)L(Q.location+re,N/Q.locationSize,Z,At,kt*ct,(Gt+N/Q.locationSize*re)*ct,Tt)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<Q.locationSize;St++)g(Q.location+St,Et.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<Q.locationSize;St++)S(Q.location+St);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let St=0;St<Q.locationSize;St++)L(Q.location+St,N/Q.locationSize,Z,At,N*ct,N/Q.locationSize*St*ct,Tt)}}else if(P!==void 0){const At=P[K];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(Q.location,At);break;case 3:s.vertexAttrib3fv(Q.location,At);break;case 4:s.vertexAttrib4fv(Q.location,At);break;default:s.vertexAttrib1fv(Q.location,At)}}}}F()}function X(){k();for(const C in r){const B=r[C];for(const lt in B){const rt=B[lt];for(const mt in rt)x(rt[mt].object),delete rt[mt];delete B[lt]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const lt in B){const rt=B[lt];for(const mt in rt)x(rt[mt].object),delete rt[mt];delete B[lt]}delete r[C.id]}function O(C){for(const B in r){const lt=r[B];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const mt in rt)x(rt[mt].object),delete rt[mt];delete lt[C.id]}}function k(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:F}}function a1(s,t,i){let r;function l(p){r=p}function c(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,_){_!==0&&(s.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function d(p,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=x[E];i.update(M,r,1)}function m(p,x,_,y){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],x[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,_);let E=0;for(let A=0;A<_;A++)E+=x[A]*y[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function r1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Pi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const k=O===Xl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ra&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ea&&!k)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:F,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:X,maxSamples:I}}function s1(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Wr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||l;return l=y,r=_.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=x(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?x(null):p();else{const F=c?0:r,L=F*4;let w=g.clippingState||null;m.value=w,w=x(E,y,L,M);for(let X=0;X!==L;++X)w[X]=i[X];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(_,y,M,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const g=M+A*4,F=y.matrixWorldInverse;d.getNormalMatrix(F),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,w=M;L!==A;++L,w+=4)h.copy(_[L]).applyMatrix4(F,d),h.normal.toArray(S,w),S[w+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function o1(s){let t=new WeakMap;function i(h,d){return d===rp?h.mapping=Ao:d===sp&&(h.mapping=Ro),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===rp||d===sp)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new fb(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const oo=4,R0=[.125,.215,.35,.446,.526,.582],Zr=20,wd=new vb,C0=new Le;let Dd=null,Ud=0,Ld=0,Nd=!1;const Yr=(1+Math.sqrt(5))/2,ro=1/Yr,w0=[new ot(-Yr,ro,0),new ot(Yr,ro,0),new ot(-ro,0,Yr),new ot(ro,0,Yr),new ot(0,Yr,-ro),new ot(0,Yr,ro),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)];class D0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Ud,Ld),this._renderer.xr.enabled=Nd,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ao||t.mapping===Ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:Xl,format:Pi,colorSpace:Do,depthBuffer:!1},l=U0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l1(c)),this._blurMaterial=u1(c,t,i)}return l}_compileMaterial(t){const i=new Ta(this._lodPlanes[0],t);this._renderer.compile(i,wd)}_sceneToCubeUV(t,i,r,l){const d=new Mi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(C0),x.toneMapping=_r,x.autoClear=!1;const M=new Ix({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),E=new Ta(new Zl,M);let A=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,A=!0):(M.color.copy(C0),A=!0);for(let g=0;g<6;g++){const F=g%3;F===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):F===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const L=this._cubeSize;Dc(l,F*L,g>2?L:0,L,L),x.setRenderTarget(l),A&&x.render(E,d),x.render(t,d)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=y,x.autoClear=_,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ao||t.mapping===Ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ta(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,wd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=w0[(l-c-1)%w0.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Ta(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),A=c/E,S=isFinite(c)?1+Math.floor(x*A):Zr;S>Zr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const g=[];let F=0;for(let O=0;O<Zr;++O){const k=O/A,D=Math.exp(-k*k/2);g.push(D),O===0?F+=D:O<S&&(F+=2*D)}for(let O=0;O<g.length;O++)g[O]=g[O]/F;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-r;const w=this._sizeLods[l],X=3*w*(l>L-oo?l-L+oo:0),I=4*(this._cubeSize-w);Dc(i,X,I,3*w,2*w),m.setRenderTarget(i),m.render(_,wd)}}function l1(s){const t=[],i=[],r=[];let l=s;const c=s-oo+1+R0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-oo?m=R0[h-s+oo-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),x=-p,_=1+p,y=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,E=6,A=3,S=2,g=1,F=new Float32Array(A*E*M),L=new Float32Array(S*E*M),w=new Float32Array(g*E*M);for(let I=0;I<M;I++){const O=I%3*2/3-1,k=I>2?0:-1,D=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];F.set(D,A*E*I),L.set(y,S*E*I);const C=[I,I,I,I,I,I];w.set(C,g*E*I)}const X=new wa;X.setAttribute("position",new Ei(F,A)),X.setAttribute("uv",new Ei(L,S)),X.setAttribute("faceIndex",new Ei(w,g)),t.push(X),l>oo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function U0(s,t,i){const r=new fs(s,t,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function u1(s,t,i){const r=new Float32Array(Zr),l=new ot(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function L0(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function N0(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Kp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===rp||m===sp,x=m===Ao||m===Ro;if(p||x){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new D0(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new D0(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function f1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&so("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function h1(s,t,i,r){const l={},c=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const M in y)t.update(y[M],s.ARRAY_BUFFER)}function p(_){const y=[],M=_.index,E=_.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let L=0,w=F.length;L<w;L+=3){const X=F[L+0],I=F[L+1],O=F[L+2];y.push(X,I,I,O,O,X)}}else if(E!==void 0){const F=E.array;A=E.version;for(let L=0,w=F.length/3-1;L<w;L+=3){const X=L+0,I=L+1,O=L+2;y.push(X,I,I,O,O,X)}}else return;const S=new(Nx(y)?Gx:Hx)(y,1);S.version=A;const g=c.get(_);g&&t.remove(g),c.set(_,S)}function x(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:x}}function d1(s,t,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*h),i.update(M,r,1)}function p(y,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,y*h,E),i.update(M,r,E))}function x(y,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,r,1)}function _(y,M,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)p(y[g]/h,M[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,A,0,E);let g=0;for(let F=0;F<E;F++)g+=M[F]*A[F];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function p1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function m1(s,t,i){const r=new WeakMap,l=new on;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let C=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let X=d.attributes.position.count*w,I=1;X>t.maxTextureSize&&(I=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const O=new Float32Array(X*I*4*_),k=new Px(O,X,I,_);k.type=Ea,k.needsUpdate=!0;const D=w*4;for(let B=0;B<_;B++){const lt=g[B],rt=F[B],mt=L[B],gt=X*I*4*B;for(let P=0;P<lt.count;P++){const K=P*D;E===!0&&(l.fromBufferAttribute(lt,P),O[gt+K+0]=l.x,O[gt+K+1]=l.y,O[gt+K+2]=l.z,O[gt+K+3]=0),A===!0&&(l.fromBufferAttribute(rt,P),O[gt+K+4]=l.x,O[gt+K+5]=l.y,O[gt+K+6]=l.z,O[gt+K+7]=0),S===!0&&(l.fromBufferAttribute(mt,P),O[gt+K+8]=l.x,O[gt+K+9]=l.y,O[gt+K+10]=l.z,O[gt+K+11]=mt.itemSize===4?l.w:1)}}y={count:_,texture:k,size:new We(X,I)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function g1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,_=t.get(m,x);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Zx=new $n,O0=new Yx(1,1),Qx=new Px,Kx=new ZE,Jx=new Xx,P0=[],z0=[],F0=new Float32Array(16),B0=new Float32Array(9),I0=new Float32Array(4);function No(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=P0[l];if(c===void 0&&(c=new Float32Array(l),P0[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function xn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function qc(s,t){let i=z0[t];i===void 0&&(i=new Int32Array(t),z0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function _1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function v1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),xn(i,t)}}function x1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),xn(i,t)}}function y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),xn(i,t)}}function S1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;I0.set(r),s.uniformMatrix2fv(this.addr,!1,I0),xn(i,r)}}function M1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;B0.set(r),s.uniformMatrix3fv(this.addr,!1,B0),xn(i,r)}}function E1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;F0.set(r),s.uniformMatrix4fv(this.addr,!1,F0),xn(i,r)}}function b1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function T1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),xn(i,t)}}function A1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),xn(i,t)}}function R1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),xn(i,t)}}function C1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function w1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),xn(i,t)}}function D1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),xn(i,t)}}function U1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),xn(i,t)}}function L1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(O0.compareFunction=Lx,c=O0):c=Zx,i.setTexture2D(t||c,l)}function N1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Kx,l)}function O1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Jx,l)}function P1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Qx,l)}function z1(s){switch(s){case 5126:return _1;case 35664:return v1;case 35665:return x1;case 35666:return y1;case 35674:return S1;case 35675:return M1;case 35676:return E1;case 5124:case 35670:return b1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return w1;case 36295:return D1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return P1}}function F1(s,t){s.uniform1fv(this.addr,t)}function B1(s,t){const i=No(t,this.size,2);s.uniform2fv(this.addr,i)}function I1(s,t){const i=No(t,this.size,3);s.uniform3fv(this.addr,i)}function H1(s,t){const i=No(t,this.size,4);s.uniform4fv(this.addr,i)}function G1(s,t){const i=No(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function V1(s,t){const i=No(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function k1(s,t){const i=No(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function X1(s,t){s.uniform1iv(this.addr,t)}function q1(s,t){s.uniform2iv(this.addr,t)}function W1(s,t){s.uniform3iv(this.addr,t)}function Y1(s,t){s.uniform4iv(this.addr,t)}function j1(s,t){s.uniform1uiv(this.addr,t)}function Z1(s,t){s.uniform2uiv(this.addr,t)}function Q1(s,t){s.uniform3uiv(this.addr,t)}function K1(s,t){s.uniform4uiv(this.addr,t)}function J1(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Zx,c[h])}function $1(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Kx,c[h])}function tR(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Jx,c[h])}function eR(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Qx,c[h])}function nR(s){switch(s){case 5126:return F1;case 35664:return B1;case 35665:return I1;case 35666:return H1;case 35674:return G1;case 35675:return V1;case 35676:return k1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return W1;case 35669:case 35673:return Y1;case 5125:return j1;case 36294:return Z1;case 36295:return Q1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return tR;case 36289:case 36303:case 36311:case 36292:return eR}}class iR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=z1(i.type)}}class aR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nR(i.type)}}class rR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function H0(s,t){s.seq.push(t),s.map[t.id]=t}function sR(s,t,i){const r=s.name,l=r.length;for(Od.lastIndex=0;;){const c=Od.exec(r),h=Od.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H0(i,p===void 0?new iR(d,s,t):new aR(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new rR(d),H0(i,_)),i=_}}}class Fc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);sR(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function G0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const oR=37297;let lR=0;function uR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const V0=new ce;function cR(s){Ue._getMatrix(V0,Ue.workingColorSpace,s);const t=`mat3( ${V0.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(s)){case Ic:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function k0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+uR(s.getShaderSource(t),h)}else return l}function fR(s,t){const i=cR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function hR(s,t){let i;switch(t){case yE:i="Linear";break;case SE:i="Reinhard";break;case ME:i="Cineon";break;case EE:i="ACESFilmic";break;case TE:i="AgX";break;case AE:i="Neutral";break;case bE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new ot;function dR(){Ue.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function mR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function gR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Ol(s){return s!==""}function X0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function q0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(s){return s.replace(_R,xR)}const vR=new Map;function xR(s,t){let i=fe[t];if(i===void 0){const r=vR.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Fp(i)}const yR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(s){return s.replace(yR,SR)}function SR(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xx?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$M?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xa&&(t="SHADOWMAP_TYPE_VSM"),t}function ER(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ao:case Ro:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ro:t="ENVMAP_MODE_REFRACTION";break}return t}function TR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yx:t="ENVMAP_BLENDING_MULTIPLY";break;case vE:t="ENVMAP_BLENDING_MIX";break;case xE:t="ENVMAP_BLENDING_ADD";break}return t}function AR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function RR(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=MR(i),p=ER(i),x=bR(i),_=TR(i),y=AR(i),M=pR(i),E=mR(c),A=l.createProgram();let S,g,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ol).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ol).join(`
`),g.length>0&&(g+=`
`)):(S=[Y0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),g=[Y0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==_r?"#define TONE_MAPPING":"",i.toneMapping!==_r?fe.tonemapping_pars_fragment:"",i.toneMapping!==_r?hR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,fR("linearToOutputTexel",i.outputColorSpace),dR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ol).join(`
`)),h=Fp(h),h=X0(h,i),h=q0(h,i),d=Fp(d),d=X0(d,i),d=q0(d,i),h=W0(h),d=W0(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=F+S+h,w=F+g+d,X=G0(l,l.VERTEX_SHADER,L),I=G0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,X),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(B){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(A).trim(),rt=l.getShaderInfoLog(X).trim(),mt=l.getShaderInfoLog(I).trim();let gt=!0,P=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(gt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,X,I);else{const K=k0(l,X,"vertex"),Q=k0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+lt+`
`+K+`
`+Q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||mt==="")&&(P=!1);P&&(B.diagnostics={runnable:gt,programLog:lt,vertexShader:{log:rt,prefix:S},fragmentShader:{log:mt,prefix:g}})}l.deleteShader(X),l.deleteShader(I),k=new Fc(l,A),D=gR(l,A)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,oR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lR++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=X,this.fragmentShader=I,this}let CR=0;class wR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new DR(t),i.set(t,r)),r}}class DR{constructor(t){this.id=CR++,this.code=t,this.usedTimes=0}}function UR(s,t,i,r,l,c,h){const d=new Fx,m=new wR,p=new Set,x=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,B,lt,rt){const mt=lt.fog,gt=rt.geometry,P=D.isMeshStandardMaterial?lt.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Q=K&&K.mapping===Vc?K.image.height:null,Et=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const At=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,N=At!==void 0?At.length:0;let nt=0;gt.morphAttributes.position!==void 0&&(nt=1),gt.morphAttributes.normal!==void 0&&(nt=2),gt.morphAttributes.color!==void 0&&(nt=3);let Mt,Z,ct,Tt;if(Et){const Ae=Wi[Et];Mt=Ae.vertexShader,Z=Ae.fragmentShader}else Mt=D.vertexShader,Z=D.fragmentShader,m.update(D),ct=m.getVertexShaderID(D),Tt=m.getFragmentShaderID(D);const St=s.getRenderTarget(),kt=s.state.buffers.depth.getReversed(),Gt=rt.isInstancedMesh===!0,re=rt.isBatchedMesh===!0,Be=!!D.map,de=!!D.matcap,Qe=!!K,H=!!D.aoMap,Un=!!D.lightMap,he=!!D.bumpMap,_e=!!D.normalMap,jt=!!D.displacementMap,Pe=!!D.emissiveMap,Yt=!!D.metalnessMap,U=!!D.roughnessMap,T=D.anisotropy>0,et=D.clearcoat>0,ht=D.dispersion>0,bt=D.iridescence>0,_t=D.sheen>0,qt=D.transmission>0,Dt=T&&!!D.anisotropyMap,Bt=et&&!!D.clearcoatMap,ve=et&&!!D.clearcoatNormalMap,Rt=et&&!!D.clearcoatRoughnessMap,It=bt&&!!D.iridescenceMap,Zt=bt&&!!D.iridescenceThicknessMap,Wt=_t&&!!D.sheenColorMap,Ot=_t&&!!D.sheenRoughnessMap,ee=!!D.specularMap,se=!!D.specularColorMap,Ie=!!D.specularIntensityMap,q=qt&&!!D.transmissionMap,Ct=qt&&!!D.thicknessMap,ut=!!D.gradientMap,xt=!!D.alphaMap,wt=D.alphaTest>0,Ut=!!D.alphaHash,ne=!!D.extensions;let Ke=_r;D.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const mn={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Z,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:Tt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:re,batchingColor:re&&rt._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&rt.instanceColor!==null,instancingMorph:Gt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Do,alphaToCoverage:!!D.alphaToCoverage,map:Be,matcap:de,envMap:Qe,envMapMode:Qe&&K.mapping,envMapCubeUVHeight:Q,aoMap:H,lightMap:Un,bumpMap:he,normalMap:_e,displacementMap:y&&jt,emissiveMap:Pe,normalMapObjectSpace:_e&&D.normalMapType===UE,normalMapTangentSpace:_e&&D.normalMapType===DE,metalnessMap:Yt,roughnessMap:U,anisotropy:T,anisotropyMap:Dt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:ve,clearcoatRoughnessMap:Rt,dispersion:ht,iridescence:bt,iridescenceMap:It,iridescenceThicknessMap:Zt,sheen:_t,sheenColorMap:Wt,sheenRoughnessMap:Ot,specularMap:ee,specularColorMap:se,specularIntensityMap:Ie,transmission:qt,transmissionMap:q,thicknessMap:Ct,gradientMap:ut,opaque:D.transparent===!1&&D.blending===lo&&D.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:Ut,combine:D.combine,mapUv:Be&&A(D.map.channel),aoMapUv:H&&A(D.aoMap.channel),lightMapUv:Un&&A(D.lightMap.channel),bumpMapUv:he&&A(D.bumpMap.channel),normalMapUv:_e&&A(D.normalMap.channel),displacementMapUv:jt&&A(D.displacementMap.channel),emissiveMapUv:Pe&&A(D.emissiveMap.channel),metalnessMapUv:Yt&&A(D.metalnessMap.channel),roughnessMapUv:U&&A(D.roughnessMap.channel),anisotropyMapUv:Dt&&A(D.anisotropyMap.channel),clearcoatMapUv:Bt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:ve&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&A(D.sheenRoughnessMap.channel),specularMapUv:ee&&A(D.specularMap.channel),specularColorMapUv:se&&A(D.specularColorMap.channel),specularIntensityMapUv:Ie&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Ct&&A(D.thicknessMap.channel),alphaMapUv:xt&&A(D.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(_e||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!gt.attributes.uv&&(Be||xt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:kt,skinning:rt.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Be&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Pe&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ma,flipSided:D.side===Jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ne&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&D.extensions.multiDraw===!0||re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return mn.vertexUv1s=p.has(1),mn.vertexUv2s=p.has(2),mn.vertexUv3s=p.has(3),p.clear(),mn}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(F(C,D),L(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function F(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let B;if(C){const lt=Wi[C];B=ob.clone(lt.uniforms)}else B=D.uniforms;return B}function X(D,C){let B;for(let lt=0,rt=x.length;lt<rt;lt++){const mt=x[lt];if(mt.cacheKey===C){B=mt,++B.usedTimes;break}}return B===void 0&&(B=new RR(s,C,D,c),x.push(B)),B}function I(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function O(D){m.remove(D)}function k(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:w,acquireProgram:X,releaseProgram:I,releaseShaderCache:O,programs:x,dispose:k}}function LR(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function NR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function j0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Z0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,y,M,E,A,S){let g=s[t];return g===void 0?(g={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:A,group:S},s[t]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=M,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=A,g.group=S),t++,g}function d(_,y,M,E,A,S){const g=h(_,y,M,E,A,S);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(_,y,M,E,A,S){const g=h(_,y,M,E,A,S);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,y){i.length>1&&i.sort(_||NR),r.length>1&&r.sort(y||j0),l.length>1&&l.sort(y||j0)}function x(){for(let _=t,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function OR(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Z0,s.set(r,[h])):l>=c.length?(h=new Z0,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function PR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ot,color:new Le};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return s[t.id]=i,i}}}function zR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let FR=0;function BR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function IR(s){const t=new PR,i=zR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,c=new ln,h=new ln;function d(p){let x=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,S=0,g=0,F=0,L=0,w=0,X=0,I=0,O=0;p.sort(BR);for(let D=0,C=p.length;D<C;D++){const B=p[D],lt=B.color,rt=B.intensity,mt=B.distance,gt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=lt.r*rt,_+=lt.g*rt,y+=lt.b*rt;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],rt);O++}else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Q=i.get(B);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.directionalShadow[M]=Q,r.directionalShadowMap[M]=gt,r.directionalShadowMatrix[M]=B.shadow.matrix,F++}r.directional[M]=P,M++}else if(B.isSpotLight){const P=t.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(lt).multiplyScalar(rt),P.distance=mt,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[A]=P;const K=B.shadow;if(B.map&&(r.spotLightMap[X]=B.map,X++,K.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[A]=K.matrix,B.castShadow){const Q=i.get(B);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.spotShadow[A]=Q,r.spotShadowMap[A]=gt,w++}A++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(lt).multiplyScalar(rt),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=P,S++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const K=B.shadow,Q=i.get(B);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,r.pointShadow[E]=Q,r.pointShadowMap[E]=gt,r.pointShadowMatrix[E]=B.shadow.matrix,L++}r.point[E]=P,E++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(rt),P.groundColor.copy(B.groundColor).multiplyScalar(rt),r.hemi[g]=P,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==M||k.pointLength!==E||k.spotLength!==A||k.rectAreaLength!==S||k.hemiLength!==g||k.numDirectionalShadows!==F||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==X||k.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+X-I,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,k.directionalLength=M,k.pointLength=E,k.spotLength=A,k.rectAreaLength=S,k.hemiLength=g,k.numDirectionalShadows=F,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=X,k.numLightProbes=O,r.version=FR++)}function m(p,x){let _=0,y=0,M=0,E=0,A=0;const S=x.matrixWorldInverse;for(let g=0,F=p.length;g<F;g++){const L=p[g];if(L.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),_++}else if(L.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),h.identity(),c.copy(L.matrixWorld),c.premultiply(S),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function Q0(s){const t=new IR(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function h(x){r.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function HR(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Q0(s),t.set(l,[d])):c>=h.length?(d=new Q0(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kR(s,t,i){let r=new qx;const l=new We,c=new We,h=new on,d=new gb({depthPacking:wE}),m=new _b,p={},x=i.maxTextureSize,_={[vr]:Jn,[Jn]:vr,[Ma]:Ma},y=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:GR,fragmentShader:VR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new wa;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ta(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xx;let g=this.type;this.render=function(I,O,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(gr),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=g!==xa&&this.type===xa,mt=g===xa&&this.type!==xa;for(let gt=0,P=I.length;gt<P;gt++){const K=I[gt],Q=K.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const Et=Q.getFrameExtents();if(l.multiply(Et),c.copy(Q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/Et.x),l.x=c.x*Et.x,Q.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/Et.y),l.y=c.y*Et.y,Q.mapSize.y=c.y)),Q.map===null||rt===!0||mt===!0){const N=this.type!==xa?{minFilter:zi,magFilter:zi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new fs(l.x,l.y,N),Q.map.texture.name=K.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const At=Q.getViewportCount();for(let N=0;N<At;N++){const nt=Q.getViewport(N);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),lt.viewport(h),Q.updateMatrices(K,N),r=Q.getFrustum(),w(O,k,Q.camera,K,this.type)}Q.isPointLightShadow!==!0&&this.type===xa&&F(Q,k),Q.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(D,C,B)};function F(I,O){const k=t.update(A);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new fs(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,k,y,A,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,k,M,A,null)}function L(I,O,k,D){let C=null;const B=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)C=B;else if(C=k.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=C.uuid,rt=O.uuid;let mt=p[lt];mt===void 0&&(mt={},p[lt]=mt);let gt=mt[rt];gt===void 0&&(gt=C.clone(),mt[rt]=gt,O.addEventListener("dispose",X)),C=gt}if(C.visible=O.visible,C.wireframe=O.wireframe,D===xa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=s.properties.get(C);lt.light=k}return C}function w(I,O,k,D,C){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===xa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const rt=t.update(I),mt=I.material;if(Array.isArray(mt)){const gt=rt.groups;for(let P=0,K=gt.length;P<K;P++){const Q=gt[P],Et=mt[Q.materialIndex];if(Et&&Et.visible){const At=L(I,Et,D,C);I.onBeforeShadow(s,I,O,k,rt,At,Q),s.renderBufferDirect(k,null,rt,At,I,Q),I.onAfterShadow(s,I,O,k,rt,At,Q)}}}else if(mt.visible){const gt=L(I,mt,D,C);I.onBeforeShadow(s,I,O,k,rt,gt,null),s.renderBufferDirect(k,null,rt,gt,I,null),I.onAfterShadow(s,I,O,k,rt,gt,null)}}const lt=I.children;for(let rt=0,mt=lt.length;rt<mt;rt++)w(lt[rt],O,k,D,C)}function X(I){I.target.removeEventListener("dispose",X);for(const k in p){const D=p[k],C=I.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const XR={[Jd]:$d,[tp]:ip,[ep]:ap,[To]:np,[$d]:Jd,[ip]:tp,[ap]:ep,[np]:To};function qR(s,t){function i(){let q=!1;const Ct=new on;let ut=null;const xt=new on(0,0,0,0);return{setMask:function(wt){ut!==wt&&!q&&(s.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){q=wt},setClear:function(wt,Ut,ne,Ke,mn){mn===!0&&(wt*=Ke,Ut*=Ke,ne*=Ke),Ct.set(wt,Ut,ne,Ke),xt.equals(Ct)===!1&&(s.clearColor(wt,Ut,ne,Ke),xt.copy(Ct))},reset:function(){q=!1,ut=null,xt.set(-1,0,0,0)}}}function r(){let q=!1,Ct=!1,ut=null,xt=null,wt=null;return{setReversed:function(Ut){if(Ct!==Ut){const ne=t.get("EXT_clip_control");Ct?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Ke=wt;wt=null,this.setClear(Ke)}Ct=Ut},getReversed:function(){return Ct},setTest:function(Ut){Ut?St(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(Ut){ut!==Ut&&!q&&(s.depthMask(Ut),ut=Ut)},setFunc:function(Ut){if(Ct&&(Ut=XR[Ut]),xt!==Ut){switch(Ut){case Jd:s.depthFunc(s.NEVER);break;case $d:s.depthFunc(s.ALWAYS);break;case tp:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case ep:s.depthFunc(s.EQUAL);break;case np:s.depthFunc(s.GEQUAL);break;case ip:s.depthFunc(s.GREATER);break;case ap:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Ut}},setLocked:function(Ut){q=Ut},setClear:function(Ut){wt!==Ut&&(Ct&&(Ut=1-Ut),s.clearDepth(Ut),wt=Ut)},reset:function(){q=!1,ut=null,xt=null,wt=null,Ct=!1}}}function l(){let q=!1,Ct=null,ut=null,xt=null,wt=null,Ut=null,ne=null,Ke=null,mn=null;return{setTest:function(Ae){q||(Ae?St(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(Ae){Ct!==Ae&&!q&&(s.stencilMask(Ae),Ct=Ae)},setFunc:function(Ae,bn,bi){(ut!==Ae||xt!==bn||wt!==bi)&&(s.stencilFunc(Ae,bn,bi),ut=Ae,xt=bn,wt=bi)},setOp:function(Ae,bn,bi){(Ut!==Ae||ne!==bn||Ke!==bi)&&(s.stencilOp(Ae,bn,bi),Ut=Ae,ne=bn,Ke=bi)},setLocked:function(Ae){q=Ae},setClear:function(Ae){mn!==Ae&&(s.clearStencil(Ae),mn=Ae)},reset:function(){q=!1,Ct=null,ut=null,xt=null,wt=null,Ut=null,ne=null,Ke=null,mn=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},_={},y=new WeakMap,M=[],E=null,A=!1,S=null,g=null,F=null,L=null,w=null,X=null,I=null,O=new Le(0,0,0),k=0,D=!1,C=null,B=null,lt=null,rt=null,mt=null;const gt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),P=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),P=K>=2);let Et=null,At={};const N=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),Mt=new on().fromArray(N),Z=new on().fromArray(nt);function ct(q,Ct,ut,xt){const wt=new Uint8Array(4),Ut=s.createTexture();s.bindTexture(q,Ut),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<ut;ne++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(Ct+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Ut}const Tt={};Tt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(s.DEPTH_TEST),h.setFunc(To),he(!1),_e(t0),St(s.CULL_FACE),H(gr);function St(q){x[q]!==!0&&(s.enable(q),x[q]=!0)}function kt(q){x[q]!==!1&&(s.disable(q),x[q]=!1)}function Gt(q,Ct){return _[q]!==Ct?(s.bindFramebuffer(q,Ct),_[q]=Ct,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ct),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function re(q,Ct){let ut=M,xt=!1;if(q){ut=y.get(Ct),ut===void 0&&(ut=[],y.set(Ct,ut));const wt=q.textures;if(ut.length!==wt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Ut=0,ne=wt.length;Ut<ne;Ut++)ut[Ut]=s.COLOR_ATTACHMENT0+Ut;ut.length=wt.length,xt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ut)}function Be(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const de={[jr]:s.FUNC_ADD,[eE]:s.FUNC_SUBTRACT,[nE]:s.FUNC_REVERSE_SUBTRACT};de[iE]=s.MIN,de[aE]=s.MAX;const Qe={[rE]:s.ZERO,[sE]:s.ONE,[oE]:s.SRC_COLOR,[Qd]:s.SRC_ALPHA,[dE]:s.SRC_ALPHA_SATURATE,[fE]:s.DST_COLOR,[uE]:s.DST_ALPHA,[lE]:s.ONE_MINUS_SRC_COLOR,[Kd]:s.ONE_MINUS_SRC_ALPHA,[hE]:s.ONE_MINUS_DST_COLOR,[cE]:s.ONE_MINUS_DST_ALPHA,[pE]:s.CONSTANT_COLOR,[mE]:s.ONE_MINUS_CONSTANT_COLOR,[gE]:s.CONSTANT_ALPHA,[_E]:s.ONE_MINUS_CONSTANT_ALPHA};function H(q,Ct,ut,xt,wt,Ut,ne,Ke,mn,Ae){if(q===gr){A===!0&&(kt(s.BLEND),A=!1);return}if(A===!1&&(St(s.BLEND),A=!0),q!==tE){if(q!==S||Ae!==D){if((g!==jr||w!==jr)&&(s.blendEquation(s.FUNC_ADD),g=jr,w=jr),Ae)switch(q){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case e0:s.blendFunc(s.ONE,s.ONE);break;case n0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case i0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case e0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case n0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case i0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}F=null,L=null,X=null,I=null,O.set(0,0,0),k=0,S=q,D=Ae}return}wt=wt||Ct,Ut=Ut||ut,ne=ne||xt,(Ct!==g||wt!==w)&&(s.blendEquationSeparate(de[Ct],de[wt]),g=Ct,w=wt),(ut!==F||xt!==L||Ut!==X||ne!==I)&&(s.blendFuncSeparate(Qe[ut],Qe[xt],Qe[Ut],Qe[ne]),F=ut,L=xt,X=Ut,I=ne),(Ke.equals(O)===!1||mn!==k)&&(s.blendColor(Ke.r,Ke.g,Ke.b,mn),O.copy(Ke),k=mn),S=q,D=!1}function Un(q,Ct){q.side===Ma?kt(s.CULL_FACE):St(s.CULL_FACE);let ut=q.side===Jn;Ct&&(ut=!ut),he(ut),q.blending===lo&&q.transparent===!1?H(gr):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const xt=q.stencilWrite;d.setTest(xt),xt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Pe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(q){C!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),C=q)}function _e(q){q!==KM?(St(s.CULL_FACE),q!==B&&(q===t0?s.cullFace(s.BACK):q===JM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),B=q}function jt(q){q!==lt&&(P&&s.lineWidth(q),lt=q)}function Pe(q,Ct,ut){q?(St(s.POLYGON_OFFSET_FILL),(rt!==Ct||mt!==ut)&&(s.polygonOffset(Ct,ut),rt=Ct,mt=ut)):kt(s.POLYGON_OFFSET_FILL)}function Yt(q){q?St(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function U(q){q===void 0&&(q=s.TEXTURE0+gt-1),Et!==q&&(s.activeTexture(q),Et=q)}function T(q,Ct,ut){ut===void 0&&(Et===null?ut=s.TEXTURE0+gt-1:ut=Et);let xt=At[ut];xt===void 0&&(xt={type:void 0,texture:void 0},At[ut]=xt),(xt.type!==q||xt.texture!==Ct)&&(Et!==ut&&(s.activeTexture(ut),Et=ut),s.bindTexture(q,Ct||Tt[q]),xt.type=q,xt.texture=Ct)}function et(){const q=At[Et];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(q){Mt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Mt.copy(q))}function Ot(q){Z.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Z.copy(q))}function ee(q,Ct){let ut=p.get(Ct);ut===void 0&&(ut=new WeakMap,p.set(Ct,ut));let xt=ut.get(q);xt===void 0&&(xt=s.getUniformBlockIndex(Ct,q.name),ut.set(q,xt))}function se(q,Ct){const xt=p.get(Ct).get(q);m.get(Ct)!==xt&&(s.uniformBlockBinding(Ct,xt,q.__bindingPointIndex),m.set(Ct,xt))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},Et=null,At={},_={},y=new WeakMap,M=[],E=null,A=!1,S=null,g=null,F=null,L=null,w=null,X=null,I=null,O=new Le(0,0,0),k=0,D=!1,C=null,B=null,lt=null,rt=null,mt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:St,disable:kt,bindFramebuffer:Gt,drawBuffers:re,useProgram:Be,setBlending:H,setMaterial:Un,setFlipSided:he,setCullFace:_e,setLineWidth:jt,setPolygonOffset:Pe,setScissorTest:Yt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:bt,texImage2D:It,texImage3D:Zt,updateUBOMapping:ee,uniformBlockBinding:se,texStorage2D:ve,texStorage3D:Rt,texSubImage2D:_t,texSubImage3D:qt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Wt,viewport:Ot,reset:Ie}}function WR(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new We,x=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return M?new OffscreenCanvas(U,T):Gc("canvas")}function A(U,T,et){let ht=1;const bt=Yt(U);if((bt.width>et||bt.height>et)&&(ht=et/Math.max(bt.width,bt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const _t=Math.floor(ht*bt.width),qt=Math.floor(ht*bt.height);_===void 0&&(_=E(_t,qt));const Dt=T?E(_t,qt):_;return Dt.width=_t,Dt.height=qt,Dt.getContext("2d").drawImage(U,0,0,_t,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+_t+"x"+qt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),U;return U}function S(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,T,et,ht,bt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let _t=T;if(T===s.RED&&(et===s.FLOAT&&(_t=s.R32F),et===s.HALF_FLOAT&&(_t=s.R16F),et===s.UNSIGNED_BYTE&&(_t=s.R8)),T===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(_t=s.R8UI),et===s.UNSIGNED_SHORT&&(_t=s.R16UI),et===s.UNSIGNED_INT&&(_t=s.R32UI),et===s.BYTE&&(_t=s.R8I),et===s.SHORT&&(_t=s.R16I),et===s.INT&&(_t=s.R32I)),T===s.RG&&(et===s.FLOAT&&(_t=s.RG32F),et===s.HALF_FLOAT&&(_t=s.RG16F),et===s.UNSIGNED_BYTE&&(_t=s.RG8)),T===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(_t=s.RG8UI),et===s.UNSIGNED_SHORT&&(_t=s.RG16UI),et===s.UNSIGNED_INT&&(_t=s.RG32UI),et===s.BYTE&&(_t=s.RG8I),et===s.SHORT&&(_t=s.RG16I),et===s.INT&&(_t=s.RG32I)),T===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),et===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),et===s.UNSIGNED_INT&&(_t=s.RGB32UI),et===s.BYTE&&(_t=s.RGB8I),et===s.SHORT&&(_t=s.RGB16I),et===s.INT&&(_t=s.RGB32I)),T===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),et===s.UNSIGNED_INT&&(_t=s.RGBA32UI),et===s.BYTE&&(_t=s.RGBA8I),et===s.SHORT&&(_t=s.RGBA16I),et===s.INT&&(_t=s.RGBA32I)),T===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),T===s.RGBA){const qt=bt?Ic:Ue.getTransfer(ht);et===s.FLOAT&&(_t=s.RGBA32F),et===s.HALF_FLOAT&&(_t=s.RGBA16F),et===s.UNSIGNED_BYTE&&(_t=qt===ke?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function w(U,T){let et;return U?T===null||T===cs||T===Co?et=s.DEPTH24_STENCIL8:T===Ea?et=s.DEPTH32F_STENCIL8:T===Fl&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===cs||T===Co?et=s.DEPTH_COMPONENT24:T===Ea?et=s.DEPTH_COMPONENT32F:T===Fl&&(et=s.DEPTH_COMPONENT16),et}function X(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==zi&&U.minFilter!==Yi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function I(U){const T=U.target;T.removeEventListener("dispose",I),k(T),T.isVideoTexture&&x.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),C(T)}function k(U){const T=r.get(U);if(T.__webglInit===void 0)return;const et=U.source,ht=y.get(et);if(ht){const bt=ht[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&D(U),Object.keys(ht).length===0&&y.delete(et)}r.remove(U)}function D(U){const T=r.get(U);s.deleteTexture(T.__webglTexture);const et=U.source,ht=y.get(et);delete ht[T.__cacheKey],h.memory.textures--}function C(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let bt=0;bt<T.__webglFramebuffer[ht].length;bt++)s.deleteFramebuffer(T.__webglFramebuffer[ht][bt]);else s.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)s.deleteFramebuffer(T.__webglFramebuffer[ht]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let ht=0,bt=et.length;ht<bt;ht++){const _t=r.get(et[ht]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),h.memory.textures--),r.remove(et[ht])}r.remove(U)}let B=0;function lt(){B=0}function rt(){const U=B;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),B+=1,U}function mt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function gt(U,T){const et=r.get(U);if(U.isVideoTexture&&jt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(et,U,T);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+T)}function P(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Z(et,U,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+T)}function K(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Z(et,U,T);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+T)}function Q(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){ct(et,U,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+T)}const Et={[op]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[lp]:s.MIRRORED_REPEAT},At={[zi]:s.NEAREST,[RE]:s.NEAREST_MIPMAP_NEAREST,[lc]:s.NEAREST_MIPMAP_LINEAR,[Yi]:s.LINEAR,[sd]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},N={[LE]:s.NEVER,[BE]:s.ALWAYS,[NE]:s.LESS,[Lx]:s.LEQUAL,[OE]:s.EQUAL,[FE]:s.GEQUAL,[PE]:s.GREATER,[zE]:s.NOTEQUAL};function nt(U,T){if(T.type===Ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Yi||T.magFilter===sd||T.magFilter===lc||T.magFilter===Jr||T.minFilter===Yi||T.minFilter===sd||T.minFilter===lc||T.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Et[T.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Et[T.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Et[T.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,At[T.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zi||T.minFilter!==lc&&T.minFilter!==Jr||T.type===Ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",I));const ht=T.source;let bt=y.get(ht);bt===void 0&&(bt={},y.set(ht,bt));const _t=mt(T);if(_t!==U.__cacheKey){bt[_t]===void 0&&(bt[_t]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,et=!0),bt[_t].usedTimes++;const qt=bt[U.__cacheKey];qt!==void 0&&(bt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&D(T)),U.__cacheKey=_t,U.__webglTexture=bt[_t].texture}return et}function Z(U,T,et){let ht=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=s.TEXTURE_3D);const bt=Mt(U,T),_t=T.source;i.bindTexture(ht,U.__webglTexture,s.TEXTURE0+et);const qt=r.get(_t);if(_t.version!==qt.__version||bt===!0){i.activeTexture(s.TEXTURE0+et);const Dt=Ue.getPrimaries(Ue.workingColorSpace),Bt=T.colorSpace===sr?null:Ue.getPrimaries(T.colorSpace),ve=T.colorSpace===sr||Dt===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Rt=A(T.image,!1,l.maxTextureSize);Rt=Pe(T,Rt);const It=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type);let Wt=L(T.internalFormat,It,Zt,T.colorSpace,T.isVideoTexture);nt(ht,T);let Ot;const ee=T.mipmaps,se=T.isVideoTexture!==!0,Ie=qt.__version===void 0||bt===!0,q=_t.dataReady,Ct=X(T,Rt);if(T.isDepthTexture)Wt=w(T.format===wo,T.type),Ie&&(se?i.texStorage2D(s.TEXTURE_2D,1,Wt,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,Wt,Rt.width,Rt.height,0,It,Zt,null));else if(T.isDataTexture)if(ee.length>0){se&&Ie&&i.texStorage2D(s.TEXTURE_2D,Ct,Wt,ee[0].width,ee[0].height);for(let ut=0,xt=ee.length;ut<xt;ut++)Ot=ee[ut],se?q&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,It,Zt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Wt,Ot.width,Ot.height,0,It,Zt,Ot.data);T.generateMipmaps=!1}else se?(Ie&&i.texStorage2D(s.TEXTURE_2D,Ct,Wt,Rt.width,Rt.height),q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,It,Zt,Rt.data)):i.texImage2D(s.TEXTURE_2D,0,Wt,Rt.width,Rt.height,0,It,Zt,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&Ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Wt,ee[0].width,ee[0].height,Rt.depth);for(let ut=0,xt=ee.length;ut<xt;ut++)if(Ot=ee[ut],T.format!==Pi)if(It!==null)if(se){if(q)if(T.layerUpdates.size>0){const wt=A0(Ot.width,Ot.height,T.format,T.type);for(const Ut of T.layerUpdates){const ne=Ot.data.subarray(Ut*wt/Ot.data.BYTES_PER_ELEMENT,(Ut+1)*wt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Ut,Ot.width,Ot.height,1,It,ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,Rt.depth,It,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Wt,Ot.width,Ot.height,Rt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?q&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,Rt.depth,It,Zt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,Wt,Ot.width,Ot.height,Rt.depth,0,It,Zt,Ot.data)}else{se&&Ie&&i.texStorage2D(s.TEXTURE_2D,Ct,Wt,ee[0].width,ee[0].height);for(let ut=0,xt=ee.length;ut<xt;ut++)Ot=ee[ut],T.format!==Pi?It!==null?se?q&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,Wt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?q&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,It,Zt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Wt,Ot.width,Ot.height,0,It,Zt,Ot.data)}else if(T.isDataArrayTexture)if(se){if(Ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Wt,Rt.width,Rt.height,Rt.depth),q)if(T.layerUpdates.size>0){const ut=A0(Rt.width,Rt.height,T.format,T.type);for(const xt of T.layerUpdates){const wt=Rt.data.subarray(xt*ut/Rt.data.BYTES_PER_ELEMENT,(xt+1)*ut/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,Rt.width,Rt.height,1,It,Zt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,Zt,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,Rt.width,Rt.height,Rt.depth,0,It,Zt,Rt.data);else if(T.isData3DTexture)se?(Ie&&i.texStorage3D(s.TEXTURE_3D,Ct,Wt,Rt.width,Rt.height,Rt.depth),q&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,Zt,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,Wt,Rt.width,Rt.height,Rt.depth,0,It,Zt,Rt.data);else if(T.isFramebufferTexture){if(Ie)if(se)i.texStorage2D(s.TEXTURE_2D,Ct,Wt,Rt.width,Rt.height);else{let ut=Rt.width,xt=Rt.height;for(let wt=0;wt<Ct;wt++)i.texImage2D(s.TEXTURE_2D,wt,Wt,ut,xt,0,It,Zt,null),ut>>=1,xt>>=1}}else if(ee.length>0){if(se&&Ie){const ut=Yt(ee[0]);i.texStorage2D(s.TEXTURE_2D,Ct,Wt,ut.width,ut.height)}for(let ut=0,xt=ee.length;ut<xt;ut++)Ot=ee[ut],se?q&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,It,Zt,Ot):i.texImage2D(s.TEXTURE_2D,ut,Wt,It,Zt,Ot);T.generateMipmaps=!1}else if(se){if(Ie){const ut=Yt(Rt);i.texStorage2D(s.TEXTURE_2D,Ct,Wt,ut.width,ut.height)}q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Zt,Rt)}else i.texImage2D(s.TEXTURE_2D,0,Wt,It,Zt,Rt);S(T)&&g(ht),qt.__version=_t.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ct(U,T,et){if(T.image.length!==6)return;const ht=Mt(U,T),bt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+et);const _t=r.get(bt);if(bt.version!==_t.__version||ht===!0){i.activeTexture(s.TEXTURE0+et);const qt=Ue.getPrimaries(Ue.workingColorSpace),Dt=T.colorSpace===sr?null:Ue.getPrimaries(T.colorSpace),Bt=T.colorSpace===sr||qt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ve=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let xt=0;xt<6;xt++)!ve&&!Rt?It[xt]=A(T.image[xt],!0,l.maxCubemapSize):It[xt]=Rt?T.image[xt].image:T.image[xt],It[xt]=Pe(T,It[xt]);const Zt=It[0],Wt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),ee=L(T.internalFormat,Wt,Ot,T.colorSpace),se=T.isVideoTexture!==!0,Ie=_t.__version===void 0||ht===!0,q=bt.dataReady;let Ct=X(T,Zt);nt(s.TEXTURE_CUBE_MAP,T);let ut;if(ve){se&&Ie&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ee,Zt.width,Zt.height);for(let xt=0;xt<6;xt++){ut=It[xt].mipmaps;for(let wt=0;wt<ut.length;wt++){const Ut=ut[wt];T.format!==Pi?Wt!==null?se?q&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,Ut.width,Ut.height,Wt,Ut.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ee,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,Ut.width,Ut.height,Wt,Ot,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ee,Ut.width,Ut.height,0,Wt,Ot,Ut.data)}}}else{if(ut=T.mipmaps,se&&Ie){ut.length>0&&Ct++;const xt=Yt(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ee,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Rt){se?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It[xt].width,It[xt].height,Wt,Ot,It[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ee,It[xt].width,It[xt].height,0,Wt,Ot,It[xt].data);for(let wt=0;wt<ut.length;wt++){const ne=ut[wt].image[xt].image;se?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,ne.width,ne.height,Wt,Ot,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ee,ne.width,ne.height,0,Wt,Ot,ne.data)}}else{se?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,Ot,It[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ee,Wt,Ot,It[xt]);for(let wt=0;wt<ut.length;wt++){const Ut=ut[wt];se?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Wt,Ot,Ut.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ee,Wt,Ot,Ut.image[xt])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),_t.__version=bt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Tt(U,T,et,ht,bt,_t){const qt=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Bt=L(et.internalFormat,qt,Dt,et.colorSpace),ve=r.get(T),Rt=r.get(et);if(Rt.__renderTarget=T,!ve.__hasExternalTextures){const It=Math.max(1,T.width>>_t),Zt=Math.max(1,T.height>>_t);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?i.texImage3D(bt,_t,Bt,It,Zt,T.depth,0,qt,Dt,null):i.texImage2D(bt,_t,Bt,It,Zt,0,qt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),_e(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,bt,Rt.__webglTexture,0,he(T)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,bt,Rt.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function St(U,T,et){if(s.bindRenderbuffer(s.RENDERBUFFER,U),T.depthBuffer){const ht=T.depthTexture,bt=ht&&ht.isDepthTexture?ht.type:null,_t=w(T.stencilBuffer,bt),qt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=he(T);_e(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,_t,T.width,T.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,_t,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,_t,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qt,s.RENDERBUFFER,U)}else{const ht=T.textures;for(let bt=0;bt<ht.length;bt++){const _t=ht[bt],qt=c.convert(_t.format,_t.colorSpace),Dt=c.convert(_t.type),Bt=L(_t.internalFormat,qt,Dt,_t.colorSpace),ve=he(T);et&&_e(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Bt,T.width,T.height):_e(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Bt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),gt(T.depthTexture,0);const bt=ht.__webglTexture,_t=he(T);if(T.depthTexture.format===uo)_e(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0);else if(T.depthTexture.format===wo)_e(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Gt(U){const T=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",bt)};ht.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=ht}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");kt(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=s.createRenderbuffer(),St(T.__webglDepthbuffer[ht],U,!1);else{const bt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),St(T.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,bt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function re(U,T,et){const ht=r.get(U);T!==void 0&&Tt(ht.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Gt(U)}function Be(U){const T=U.texture,et=r.get(U),ht=r.get(T);U.addEventListener("dispose",O);const bt=U.textures,_t=U.isWebGLCubeRenderTarget===!0,qt=bt.length>1;if(qt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=T.version,h.memory.textures++),_t){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)et.__webglFramebuffer[Dt][Bt]=s.createFramebuffer()}else et.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(qt)for(let Dt=0,Bt=bt.length;Dt<Bt;Dt++){const ve=r.get(bt[Dt]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),h.memory.textures++)}if(U.samples>0&&_e(U)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<bt.length;Dt++){const Bt=bt[Dt];et.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const ve=c.convert(Bt.format,Bt.colorSpace),Rt=c.convert(Bt.type),It=L(Bt.internalFormat,ve,Rt,Bt.colorSpace,U.isXRRenderTarget===!0),Zt=he(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,It,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),St(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(s.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Tt(et.__webglFramebuffer[Dt][Bt],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else Tt(et.__webglFramebuffer[Dt],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,Bt=bt.length;Dt<Bt;Dt++){const ve=bt[Dt],Rt=r.get(ve);i.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),nt(s.TEXTURE_2D,ve),Tt(et.__webglFramebuffer,U,ve,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),S(ve)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),nt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Tt(et.__webglFramebuffer[Bt],U,T,s.COLOR_ATTACHMENT0,Dt,Bt);else Tt(et.__webglFramebuffer,U,T,s.COLOR_ATTACHMENT0,Dt,0);S(T)&&g(Dt),i.unbindTexture()}U.depthBuffer&&Gt(U)}function de(U){const T=U.textures;for(let et=0,ht=T.length;et<ht;et++){const bt=T[et];if(S(bt)){const _t=F(U),qt=r.get(bt).__webglTexture;i.bindTexture(_t,qt),g(_t),i.unbindTexture()}}}const Qe=[],H=[];function Un(U){if(U.samples>0){if(_e(U)===!1){const T=U.textures,et=U.width,ht=U.height;let bt=s.COLOR_BUFFER_BIT;const _t=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qt=r.get(U),Dt=T.length>1;if(Dt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Bt]);const ve=r.get(T[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,et,ht,0,0,et,ht,bt,s.NEAREST),m===!0&&(Qe.length=0,H.length=0,Qe.push(s.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Qe.push(_t),H.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Bt]);const ve=r.get(T[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,ve,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function he(U){return Math.min(l.maxSamples,U.samples)}function _e(U){const T=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(U){const T=h.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function Pe(U,T){const et=U.colorSpace,ht=U.format,bt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Do&&et!==sr&&(Ue.getTransfer(et)===ke?(ht!==Pi||bt!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=gt,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=re,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=_e}function YR(s,t){function i(r,l=sr){let c;const h=Ue.getTransfer(l);if(r===Ra)return s.UNSIGNED_BYTE;if(r===Wp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Mx)return s.BYTE;if(r===Ex)return s.SHORT;if(r===Fl)return s.UNSIGNED_SHORT;if(r===qp)return s.INT;if(r===cs)return s.UNSIGNED_INT;if(r===Ea)return s.FLOAT;if(r===Xl)return s.HALF_FLOAT;if(r===Tx)return s.ALPHA;if(r===Ax)return s.RGB;if(r===Pi)return s.RGBA;if(r===Rx)return s.LUMINANCE;if(r===Cx)return s.LUMINANCE_ALPHA;if(r===uo)return s.DEPTH_COMPONENT;if(r===wo)return s.DEPTH_STENCIL;if(r===wx)return s.RED;if(r===jp)return s.RED_INTEGER;if(r===Dx)return s.RG;if(r===Zp)return s.RG_INTEGER;if(r===Qp)return s.RGBA_INTEGER;if(r===Lc||r===Nc||r===Oc||r===Pc)if(h===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===up||r===cp||r===fp||r===hp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dp||r===pp||r===mp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dp||r===pp)return h===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===mp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gp||r===_p||r===vp||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===bp||r===Tp||r===Ap||r===Rp||r===Cp||r===wp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_p)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ep)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ap)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zc||r===Dp||r===Up)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===zc)return h===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ux||r===Lp||r===Np||r===Op)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const jR={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),g=this._getHandJoint(p,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=x.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Cc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const ZR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new $n,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new xr({vertexShader:ZR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ta(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JR extends Lo{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,_=null,y=null,M=null,E=null;const A=new KR,S=i.getContextAttributes();let g=null,F=null;const L=[],w=[],X=new We;let I=null;const O=new Mi;O.viewport=new on;const k=new Mi;k.viewport=new on;const D=[O,k],C=new xb;let B=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=L[Z];return ct===void 0&&(ct=new Pd,L[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=L[Z];return ct===void 0&&(ct=new Pd,L[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=L[Z];return ct===void 0&&(ct=new Pd,L[Z]=ct),ct.getHandSpace()};function rt(Z){const ct=w.indexOf(Z.inputSource);if(ct===-1)return;const Tt=L[ct];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,p||h),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function mt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",gt);for(let Z=0;Z<L.length;Z++){const ct=w[Z];ct!==null&&(w[Z]=null,L[Z].disconnect(ct))}B=null,lt=null,A.reset(),t.setRenderTarget(g),M=null,y=null,_=null,l=null,F=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",gt),S.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(X),l.renderState.layers===void 0){const ct={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new fs(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:Ra,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let ct=null,Tt=null,St=null;S.depth&&(St=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=S.stencil?wo:uo,Tt=S.stencil?Co:cs);const kt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:c};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(kt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),F=new fs(y.textureWidth,y.textureHeight,{format:Pi,type:Ra,depthTexture:new Yx(y.textureWidth,y.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function gt(Z){for(let ct=0;ct<Z.removed.length;ct++){const Tt=Z.removed[ct],St=w.indexOf(Tt);St>=0&&(w[St]=null,L[St].disconnect(Tt))}for(let ct=0;ct<Z.added.length;ct++){const Tt=Z.added[ct];let St=w.indexOf(Tt);if(St===-1){for(let Gt=0;Gt<L.length;Gt++)if(Gt>=w.length){w.push(Tt),St=Gt;break}else if(w[Gt]===null){w[Gt]=Tt,St=Gt;break}if(St===-1)break}const kt=L[St];kt&&kt.connect(Tt)}}const P=new ot,K=new ot;function Q(Z,ct,Tt){P.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(Tt.matrixWorld);const St=P.distanceTo(K),kt=ct.projectionMatrix.elements,Gt=Tt.projectionMatrix.elements,re=kt[14]/(kt[10]-1),Be=kt[14]/(kt[10]+1),de=(kt[9]+1)/kt[5],Qe=(kt[9]-1)/kt[5],H=(kt[8]-1)/kt[0],Un=(Gt[8]+1)/Gt[0],he=re*H,_e=re*Un,jt=St/(-H+Un),Pe=jt*-H;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(jt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),kt[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=re+jt,U=Be+jt,T=he-Pe,et=_e+(St-Pe),ht=de*Be/U*Yt,bt=Qe*Be/U*Yt;Z.projectionMatrix.makePerspective(T,et,ht,bt,Yt,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Et(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ct=Z.near,Tt=Z.far;A.texture!==null&&(A.depthNear>0&&(ct=A.depthNear),A.depthFar>0&&(Tt=A.depthFar)),C.near=k.near=O.near=ct,C.far=k.far=O.far=Tt,(B!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,lt=C.far),O.layers.mask=Z.layers.mask|2,k.layers.mask=Z.layers.mask|4,C.layers.mask=O.layers.mask|k.layers.mask;const St=Z.parent,kt=C.cameras;Et(C,St);for(let Gt=0;Gt<kt.length;Gt++)Et(kt[Gt],St);kt.length===2?Q(C,O,k):C.projectionMatrix.copy(O.projectionMatrix),At(Z,C,St)};function At(Z,ct,Tt){Tt===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(Z){m=Z,y!==null&&(y.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let N=null;function nt(Z,ct){if(x=ct.getViewerPose(p||h),E=ct,x!==null){const Tt=x.views;M!==null&&(t.setRenderTargetFramebuffer(F,M.framebuffer),t.setRenderTarget(F));let St=!1;Tt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Gt=0;Gt<Tt.length;Gt++){const re=Tt[Gt];let Be=null;if(M!==null)Be=M.getViewport(re);else{const Qe=_.getViewSubImage(y,re);Be=Qe.viewport,Gt===0&&(t.setRenderTargetTextures(F,Qe.colorTexture,y.ignoreDepthValues?void 0:Qe.depthStencilTexture),t.setRenderTarget(F))}let de=D[Gt];de===void 0&&(de=new Mi,de.layers.enable(Gt),de.viewport=new on,D[Gt]=de),de.matrix.fromArray(re.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(re.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Be.x,Be.y,Be.width,Be.height),Gt===0&&(C.matrix.copy(de.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(de)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Gt=_.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&A.init(t,Gt,l.renderState)}}for(let Tt=0;Tt<L.length;Tt++){const St=w[Tt],kt=L[Tt];St!==null&&kt!==void 0&&kt.update(St,ct,p||h)}N&&N(Z,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),E=null}const Mt=new jx;Mt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const qr=new Ca,$R=new ln;function tC(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Vx(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,F,L,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),x(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,w)):g.isMeshMatcapMaterial?(c(S,g),E(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),A(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(h(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,F,L):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Jn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Jn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const F=t.get(g),L=F.envMap,w=F.envMapRotation;L&&(S.envMap.value=L,qr.copy(w),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4($R.makeRotationFromEuler(qr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,F,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*F,S.scale.value=L*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function x(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,F){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const F=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function eC(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,L){const w=L.program;r.uniformBlockBinding(F,w)}function p(F,L){let w=l[F.id];w===void 0&&(E(F),w=x(F),l[F.id]=w,F.addEventListener("dispose",S));const X=L.program;r.updateUBOMapping(F,X);const I=t.render.frame;c[F.id]!==I&&(y(F),c[F.id]=I)}function x(F){const L=_();F.__bindingPointIndex=L;const w=s.createBuffer(),X=F.__size,I=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,X,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function _(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const L=l[F.id],w=F.uniforms,X=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let I=0,O=w.length;I<O;I++){const k=Array.isArray(w[I])?w[I]:[w[I]];for(let D=0,C=k.length;D<C;D++){const B=k[D];if(M(B,I,D,X)===!0){const lt=B.__offset,rt=Array.isArray(B.value)?B.value:[B.value];let mt=0;for(let gt=0;gt<rt.length;gt++){const P=rt[gt],K=A(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,lt+mt,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,mt),mt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(F,L,w,X){const I=F.value,O=L+"_"+w;if(X[O]===void 0)return typeof I=="number"||typeof I=="boolean"?X[O]=I:X[O]=I.clone(),!0;{const k=X[O];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return X[O]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function E(F){const L=F.uniforms;let w=0;const X=16;for(let O=0,k=L.length;O<k;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,B=D.length;C<B;C++){const lt=D[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let mt=0,gt=rt.length;mt<gt;mt++){const P=rt[mt],K=A(P),Q=w%X,Et=Q%K.boundary,At=Q+Et;w+=Et,At!==0&&X-At<K.storage&&(w+=X-At),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=K.storage}}}const I=w%X;return I>0&&(w+=X-I),F.__size=w,F.__cache={},this}function A(F){const L={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(L.boundary=4,L.storage=4):F.isVector2?(L.boundary=8,L.storage=8):F.isVector3||F.isColor?(L.boundary=16,L.storage=12):F.isVector4?(L.boundary=16,L.storage=16):F.isMatrix3?(L.boundary=48,L.storage=48):F.isMatrix4?(L.boundary=64,L.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),L}function S(F){const L=F.target;L.removeEventListener("dispose",S);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const F in l)s.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class nC{constructor(t={}){const{canvas:i=HE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const F=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=_r,this.toneMappingExposure=1;const w=this;let X=!1,I=0,O=0,k=null,D=-1,C=null;const B=new on,lt=new on;let rt=null;const mt=new Le(0);let gt=0,P=i.width,K=i.height,Q=1,Et=null,At=null;const N=new on(0,0,P,K),nt=new on(0,0,P,K);let Mt=!1;const Z=new qx;let ct=!1,Tt=!1;const St=new ln,kt=new ln,Gt=new ot,re=new on,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Qe(){return k===null?Q:1}let H=r;function Un(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xp}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),H===null){const W="webgl2";if(H=Un(W,R),H===null)throw Un(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let he,_e,jt,Pe,Yt,U,T,et,ht,bt,_t,qt,Dt,Bt,ve,Rt,It,Zt,Wt,Ot,ee,se,Ie,q;function Ct(){he=new f1(H),he.init(),se=new YR(H,he),_e=new r1(H,he,t,se),jt=new qR(H,he),_e.reverseDepthBuffer&&y&&jt.buffers.depth.setReversed(!0),Pe=new p1(H),Yt=new LR,U=new WR(H,he,jt,Yt,_e,se,Pe),T=new o1(w),et=new c1(w),ht=new Sb(H),Ie=new i1(H,ht),bt=new h1(H,ht,Pe,Ie),_t=new g1(H,bt,ht,Pe),Wt=new m1(H,_e,U),Rt=new s1(Yt),qt=new UR(w,T,et,he,_e,Ie,Rt),Dt=new tC(w,Yt),Bt=new OR,ve=new HR(he),Zt=new n1(w,T,et,jt,_t,M,m),It=new kR(w,_t,_e),q=new eC(H,Pe,_e,jt),Ot=new a1(H,he,Pe),ee=new d1(H,he,Pe),Pe.programs=qt.programs,w.capabilities=_e,w.extensions=he,w.properties=Yt,w.renderLists=Bt,w.shadowMap=It,w.state=jt,w.info=Pe}Ct();const ut=new JR(w,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=he.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=he.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(P,K,!1))},this.getSize=function(R){return R.set(P,K)},this.setSize=function(R,W,it=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,K=W,i.width=Math.floor(R*Q),i.height=Math.floor(W*Q),it===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*Q,K*Q).floor()},this.setDrawingBufferSize=function(R,W,it){P=R,K=W,Q=it,i.width=Math.floor(R*it),i.height=Math.floor(W*it),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,W,it,at){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,W,it,at),jt.viewport(B.copy(N).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,W,it,at){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,W,it,at),jt.scissor(lt.copy(nt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){jt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(R=!0,W=!0,it=!0){let at=0;if(R){let Y=!1;if(k!==null){const yt=k.texture.format;Y=yt===Qp||yt===Zp||yt===jp}if(Y){const yt=k.texture.type,Lt=yt===Ra||yt===cs||yt===Fl||yt===Co||yt===Wp||yt===Yp,zt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),Jt=zt.r,ie=zt.g,Qt=zt.b;Lt?(E[0]=Jt,E[1]=ie,E[2]=Qt,E[3]=Pt,H.clearBufferuiv(H.COLOR,0,E)):(A[0]=Jt,A[1]=ie,A[2]=Qt,A[3]=Pt,H.clearBufferiv(H.COLOR,0,A))}else at|=H.COLOR_BUFFER_BIT}W&&(at|=H.DEPTH_BUFFER_BIT),it&&(at|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Zt.dispose(),Bt.dispose(),ve.dispose(),Yt.dispose(),T.dispose(),et.dispose(),_t.dispose(),Ie.dispose(),q.dispose(),qt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Oo),ut.removeEventListener("sessionend",Po),Fi.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=Pe.autoReset,W=It.enabled,it=It.autoUpdate,at=It.needsUpdate,Y=It.type;Ct(),Pe.autoReset=R,It.enabled=W,It.autoUpdate=it,It.needsUpdate=at,It.type=Y}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const W=R.target;W.removeEventListener("dispose",ne),Ke(W)}function Ke(R){mn(R),Yt.remove(R)}function mn(R){const W=Yt.get(R).programs;W!==void 0&&(W.forEach(function(it){qt.releaseProgram(it)}),R.isShaderMaterial&&qt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,it,at,Y,yt){W===null&&(W=Be);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=Fo(R,W,it,at,Y);jt.setMaterial(at,Lt);let Pt=it.index,Jt=1;if(at.wireframe===!0){if(Pt=bt.getWireframeAttribute(it),Pt===void 0)return;Jt=2}const ie=it.drawRange,Qt=it.attributes.position;let xe=ie.start*Jt,Re=(ie.start+ie.count)*Jt;yt!==null&&(xe=Math.max(xe,yt.start*Jt),Re=Math.min(Re,(yt.start+yt.count)*Jt)),Pt!==null?(xe=Math.max(xe,0),Re=Math.min(Re,Pt.count)):Qt!=null&&(xe=Math.max(xe,0),Re=Math.min(Re,Qt.count));const Ye=Re-xe;if(Ye<0||Ye===1/0)return;Ie.setup(Y,at,zt,it,Pt);let Xe,oe=Ot;if(Pt!==null&&(Xe=ht.get(Pt),oe=ee,oe.setIndex(Xe)),Y.isMesh)at.wireframe===!0?(jt.setLineWidth(at.wireframeLinewidth*Qe()),oe.setMode(H.LINES)):oe.setMode(H.TRIANGLES);else if(Y.isLine){let Vt=at.linewidth;Vt===void 0&&(Vt=1),jt.setLineWidth(Vt*Qe()),Y.isLineSegments?oe.setMode(H.LINES):Y.isLineLoop?oe.setMode(H.LINE_LOOP):oe.setMode(H.LINE_STRIP)}else Y.isPoints?oe.setMode(H.POINTS):Y.isSprite&&oe.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)oe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Vt=Y._multiDrawStarts,un=Y._multiDrawCounts,Ce=Y._multiDrawCount,Fn=Pt?ht.get(Pt).bytesPerElement:1,Zi=Yt.get(at).currentProgram.getUniforms();for(let yn=0;yn<Ce;yn++)Zi.setValue(H,"_gl_DrawID",yn),oe.render(Vt[yn]/Fn,un[yn])}else if(Y.isInstancedMesh)oe.renderInstances(xe,Ye,Y.count);else if(it.isInstancedBufferGeometry){const Vt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,un=Math.min(it.instanceCount,Vt);oe.renderInstances(xe,Ye,un)}else oe.render(xe,Ye)};function Ae(R,W,it){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,$e(R,W,it),R.side=vr,R.needsUpdate=!0,$e(R,W,it),R.side=Ma):$e(R,W,it)}this.compile=function(R,W,it=null){it===null&&(it=R),g=ve.get(it),g.init(W),L.push(g),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==it&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const at=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const yt=Y.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const zt=yt[Lt];Ae(zt,it,Y),at.add(zt)}else Ae(yt,it,Y),at.add(yt)}),L.pop(),g=null,at},this.compileAsync=function(R,W,it=null){const at=this.compile(R,W,it);return new Promise(Y=>{function yt(){if(at.forEach(function(Lt){Yt.get(Lt).currentProgram.isReady()&&at.delete(Lt)}),at.size===0){Y(R);return}setTimeout(yt,10)}he.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let bn=null;function bi(R){bn&&bn(R)}function Oo(){Fi.stop()}function Po(){Fi.start()}const Fi=new jx;Fi.setAnimationLoop(bi),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){bn=R,ut.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},ut.addEventListener("sessionstart",Oo),ut.addEventListener("sessionend",Po),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(W),W=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,k),g=ve.get(R,L.length),g.init(W),L.push(g),kt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(kt),Tt=this.localClippingEnabled,ct=Rt.init(this.clippingPlanes,Tt),S=Bt.get(R,F.length),S.init(),F.push(S),ut.enabled===!0&&ut.isPresenting===!0){const yt=w.xr.getDepthSensingMesh();yt!==null&&yr(yt,W,-1/0,w.sortObjects)}yr(R,W,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Et,At),de=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,de&&Zt.addToRenderList(S,R),this.info.render.frame++,ct===!0&&Rt.beginShadows();const it=g.state.shadowsArray;It.render(it,R,W),ct===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,Y=S.transmissive;if(g.setupLights(),W.isArrayCamera){const yt=W.cameras;if(Y.length>0)for(let Lt=0,zt=yt.length;Lt<zt;Lt++){const Pt=yt[Lt];zo(at,Y,R,Pt)}de&&Zt.render(R);for(let Lt=0,zt=yt.length;Lt<zt;Lt++){const Pt=yt[Lt];hs(S,R,Pt,Pt.viewport)}}else Y.length>0&&zo(at,Y,R,W),de&&Zt.render(R),hs(S,R,W);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(w,R,W),Ie.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ct===!0&&Rt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function yr(R,W,it,at){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){at&&re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(kt);const Lt=_t.update(R),zt=R.material;zt.visible&&S.push(R,Lt,zt,it,re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Lt=_t.update(R),zt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),re.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),re.copy(Lt.boundingSphere.center)),re.applyMatrix4(R.matrixWorld).applyMatrix4(kt)),Array.isArray(zt)){const Pt=Lt.groups;for(let Jt=0,ie=Pt.length;Jt<ie;Jt++){const Qt=Pt[Jt],xe=zt[Qt.materialIndex];xe&&xe.visible&&S.push(R,Lt,xe,it,re.z,Qt)}}else zt.visible&&S.push(R,Lt,zt,it,re.z,null)}}const yt=R.children;for(let Lt=0,zt=yt.length;Lt<zt;Lt++)yr(yt[Lt],W,it,at)}function hs(R,W,it,at){const Y=R.opaque,yt=R.transmissive,Lt=R.transparent;g.setupLightsView(it),ct===!0&&Rt.setGlobalState(w.clippingPlanes,it),at&&jt.viewport(B.copy(at)),Y.length>0&&Sr(Y,W,it),yt.length>0&&Sr(yt,W,it),Lt.length>0&&Sr(Lt,W,it),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function zo(R,W,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[at.id]===void 0&&(g.state.transmissionRenderTarget[at.id]=new fs(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Xl:Ra,minFilter:Jr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const yt=g.state.transmissionRenderTarget[at.id],Lt=at.viewport||B;yt.setSize(Lt.z,Lt.w);const zt=w.getRenderTarget();w.setRenderTarget(yt),w.getClearColor(mt),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),de&&Zt.render(it);const Pt=w.toneMapping;w.toneMapping=_r;const Jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),g.setupLightsView(at),ct===!0&&Rt.setGlobalState(w.clippingPlanes,at),Sr(R,it,at),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),he.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Qt=0,xe=W.length;Qt<xe;Qt++){const Re=W[Qt],Ye=Re.object,Xe=Re.geometry,oe=Re.material,Vt=Re.group;if(oe.side===Ma&&Ye.layers.test(at.layers)){const un=oe.side;oe.side=Jn,oe.needsUpdate=!0,Ti(Ye,it,at,Xe,oe,Vt),oe.side=un,oe.needsUpdate=!0,ie=!0}}ie===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}w.setRenderTarget(zt),w.setClearColor(mt,gt),Jt!==void 0&&(at.viewport=Jt),w.toneMapping=Pt}function Sr(R,W,it){const at=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,yt=R.length;Y<yt;Y++){const Lt=R[Y],zt=Lt.object,Pt=Lt.geometry,Jt=at===null?Lt.material:at,ie=Lt.group;zt.layers.test(it.layers)&&Ti(zt,W,it,Pt,Jt,ie)}}function Ti(R,W,it,at,Y,yt){R.onBeforeRender(w,W,it,at,Y,yt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(w,W,it,at,R,yt),Y.transparent===!0&&Y.side===Ma&&Y.forceSinglePass===!1?(Y.side=Jn,Y.needsUpdate=!0,w.renderBufferDirect(it,W,at,Y,R,yt),Y.side=vr,Y.needsUpdate=!0,w.renderBufferDirect(it,W,at,Y,R,yt),Y.side=Ma):w.renderBufferDirect(it,W,at,Y,R,yt),R.onAfterRender(w,W,it,at,Y,yt)}function $e(R,W,it){W.isScene!==!0&&(W=Be);const at=Yt.get(R),Y=g.state.lights,yt=g.state.shadowsArray,Lt=Y.state.version,zt=qt.getParameters(R,Y.state,yt,W,it),Pt=qt.getProgramCacheKey(zt);let Jt=at.programs;at.environment=R.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(R.isMeshStandardMaterial?et:T).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",ne),Jt=new Map,at.programs=Jt);let ie=Jt.get(Pt);if(ie!==void 0){if(at.currentProgram===ie&&at.lightsStateVersion===Lt)return ji(R,zt),ie}else zt.uniforms=qt.getUniforms(R),R.onBeforeCompile(zt,w),ie=qt.acquireProgram(zt,Pt),Jt.set(Pt,ie),at.uniforms=zt.uniforms;const Qt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),ji(R,zt),at.needsLights=Yc(R),at.lightsStateVersion=Lt,at.needsLights&&(Qt.ambientLightColor.value=Y.state.ambient,Qt.lightProbe.value=Y.state.probe,Qt.directionalLights.value=Y.state.directional,Qt.directionalLightShadows.value=Y.state.directionalShadow,Qt.spotLights.value=Y.state.spot,Qt.spotLightShadows.value=Y.state.spotShadow,Qt.rectAreaLights.value=Y.state.rectArea,Qt.ltc_1.value=Y.state.rectAreaLTC1,Qt.ltc_2.value=Y.state.rectAreaLTC2,Qt.pointLights.value=Y.state.point,Qt.pointLightShadows.value=Y.state.pointShadow,Qt.hemisphereLights.value=Y.state.hemi,Qt.directionalShadowMap.value=Y.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Qt.spotShadowMap.value=Y.state.spotShadowMap,Qt.spotLightMatrix.value=Y.state.spotLightMatrix,Qt.spotLightMap.value=Y.state.spotLightMap,Qt.pointShadowMap.value=Y.state.pointShadowMap,Qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=ie,at.uniformsList=null,ie}function Tn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Fc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ji(R,W){const it=Yt.get(R);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Fo(R,W,it,at,Y){W.isScene!==!0&&(W=Be),U.resetTextureUnits();const yt=W.fog,Lt=at.isMeshStandardMaterial?W.environment:null,zt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Do,Pt=(at.isMeshStandardMaterial?et:T).get(at.envMap||Lt),Jt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ie=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Qt=!!it.morphAttributes.position,xe=!!it.morphAttributes.normal,Re=!!it.morphAttributes.color;let Ye=_r;at.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ye=w.toneMapping);const Xe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,oe=Xe!==void 0?Xe.length:0,Vt=Yt.get(at),un=g.state.lights;if(ct===!0&&(Tt===!0||R!==C)){const gn=R===C&&at.id===D;Rt.setState(at,R,gn)}let Ce=!1;at.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==un.state.version||Vt.outputColorSpace!==zt||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isBatchedMesh&&Vt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Vt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Vt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Vt.instancingMorph===!1&&Y.morphTexture!==null||Vt.envMap!==Pt||at.fog===!0&&Vt.fog!==yt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Rt.numPlanes||Vt.numIntersection!==Rt.numIntersection)||Vt.vertexAlphas!==Jt||Vt.vertexTangents!==ie||Vt.morphTargets!==Qt||Vt.morphNormals!==xe||Vt.morphColors!==Re||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==oe)&&(Ce=!0):(Ce=!0,Vt.__version=at.version);let Fn=Vt.currentProgram;Ce===!0&&(Fn=$e(at,W,Y));let Zi=!1,yn=!1,Er=!1;const pe=Fn.getUniforms(),Ln=Vt.uniforms;if(jt.useProgram(Fn.program)&&(Zi=!0,yn=!0,Er=!0),at.id!==D&&(D=at.id,yn=!0),Zi||C!==R){jt.buffers.depth.getReversed()?(St.copy(R.projectionMatrix),VE(St),kE(St),pe.setValue(H,"projectionMatrix",St)):pe.setValue(H,"projectionMatrix",R.projectionMatrix),pe.setValue(H,"viewMatrix",R.matrixWorldInverse);const an=pe.map.cameraPosition;an!==void 0&&an.setValue(H,Gt.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&pe.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&pe.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,yn=!0,Er=!0)}if(Y.isSkinnedMesh){pe.setOptional(H,Y,"bindMatrix"),pe.setOptional(H,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),pe.setValue(H,"boneTexture",gn.boneTexture,U))}Y.isBatchedMesh&&(pe.setOptional(H,Y,"batchingTexture"),pe.setValue(H,"batchingTexture",Y._matricesTexture,U),pe.setOptional(H,Y,"batchingIdTexture"),pe.setValue(H,"batchingIdTexture",Y._indirectTexture,U),pe.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pe.setValue(H,"batchingColorTexture",Y._colorsTexture,U));const Bn=it.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Wt.update(Y,it,Fn),(yn||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,pe.setValue(H,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(Ln.envMapIntensity.value=W.environmentIntensity),yn&&(pe.setValue(H,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&Wc(Ln,Er),yt&&at.fog===!0&&Dt.refreshFogUniforms(Ln,yt),Dt.refreshMaterialUniforms(Ln,at,Q,K,g.state.transmissionRenderTarget[R.id]),Fc.upload(H,Tn(Vt),Ln,U)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Fc.upload(H,Tn(Vt),Ln,U),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&pe.setValue(H,"center",Y.center),pe.setValue(H,"modelViewMatrix",Y.modelViewMatrix),pe.setValue(H,"normalMatrix",Y.normalMatrix),pe.setValue(H,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const gn=at.uniformsGroups;for(let an=0,ds=gn.length;an<ds;an++){const Bi=gn[an];q.update(Bi,Fn),q.bind(Bi,Fn)}}return Fn}function Wc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Yc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,W,it){Yt.get(R.texture).__webglTexture=W,Yt.get(R.depthTexture).__webglTexture=it;const at=Yt.get(R);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=it===void 0,at.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const it=Yt.get(R);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,it=0){k=R,I=W,O=it;let at=!0,Y=null,yt=!1,Lt=!1;if(R){const Pt=Yt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(H.FRAMEBUFFER,null),at=!1;else if(Pt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Pt.__hasExternalTextures)U.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Pt.__boundDepthTexture!==Qt){if(Qt!==null&&Yt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const ie=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?Y=ie[W][it]:Y=ie[W],yt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Y=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Y=ie[it]:Y=ie,B.copy(R.viewport),lt.copy(R.scissor),rt=R.scissorTest}else B.copy(N).multiplyScalar(Q).floor(),lt.copy(nt).multiplyScalar(Q).floor(),rt=Mt;if(jt.bindFramebuffer(H.FRAMEBUFFER,Y)&&at&&jt.drawBuffers(R,Y),jt.viewport(B),jt.scissor(lt),jt.setScissorTest(rt),yt){const Pt=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,it)}else if(Lt){const Pt=Yt.get(R.texture),Jt=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.__webglTexture,it||0,Jt)}D=-1},this.readRenderTargetPixels=function(R,W,it,at,Y,yt,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){jt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Pt=R.texture,Jt=Pt.format,ie=Pt.type;if(!_e.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-at&&it>=0&&it<=R.height-Y&&H.readPixels(W,it,at,Y,se.convert(Jt),se.convert(ie),yt)}finally{const Pt=k!==null?Yt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,W,it,at,Y,yt,Lt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){const Pt=R.texture,Jt=Pt.format,ie=Pt.type;if(!_e.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-at&&it>=0&&it<=R.height-Y){jt.bindFramebuffer(H.FRAMEBUFFER,zt);const Qt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qt),H.bufferData(H.PIXEL_PACK_BUFFER,yt.byteLength,H.STREAM_READ),H.readPixels(W,it,at,Y,se.convert(Jt),se.convert(ie),0);const xe=k!==null?Yt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,xe);const Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await GE(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Qt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,yt),H.deleteBuffer(Qt),H.deleteSync(Re),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,it=0){R.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const at=Math.pow(2,-it),Y=Math.floor(R.image.width*at),yt=Math.floor(R.image.height*at),Lt=W!==null?W.x:0,zt=W!==null?W.y:0;U.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Lt,zt,Y,yt),jt.unbindTexture()};const Ql=H.createFramebuffer(),Mr=H.createFramebuffer();this.copyTextureToTexture=function(R,W,it=null,at=null,Y=0,yt=null){R.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,R=arguments[1],W=arguments[2],yt=arguments[3]||0,it=null),yt===null&&(Y!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Y,Y=0):yt=0);let Lt,zt,Pt,Jt,ie,Qt,xe,Re,Ye;const Xe=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(it!==null)Lt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Pt=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,ie=it.min.y,Qt=it.isBox3?it.min.z:0;else{const Bn=Math.pow(2,-Y);Lt=Math.floor(Xe.width*Bn),zt=Math.floor(Xe.height*Bn),R.isDataArrayTexture?Pt=Xe.depth:R.isData3DTexture?Pt=Math.floor(Xe.depth*Bn):Pt=1,Jt=0,ie=0,Qt=0}at!==null?(xe=at.x,Re=at.y,Ye=at.z):(xe=0,Re=0,Ye=0);const oe=se.convert(W.format),Vt=se.convert(W.type);let un;W.isData3DTexture?(U.setTexture3D(W,0),un=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),un=H.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),un=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Ce=H.getParameter(H.UNPACK_ROW_LENGTH),Fn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zi=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),Er=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Xe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const pe=R.isDataArrayTexture||R.isData3DTexture,Ln=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Bn=Yt.get(R),gn=Yt.get(W),an=Yt.get(Bn.__renderTarget),ds=Yt.get(gn.__renderTarget);jt.bindFramebuffer(H.READ_FRAMEBUFFER,an.__webglFramebuffer),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let Bi=0;Bi<Pt;Bi++)pe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,Y,Qt+Bi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(W).__webglTexture,yt,Ye+Bi)),H.blitFramebuffer(Jt,ie,Lt,zt,xe,Re,Lt,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Yt.has(R)){const Bn=Yt.get(R),gn=Yt.get(W);jt.bindFramebuffer(H.READ_FRAMEBUFFER,Ql),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mr);for(let an=0;an<Pt;an++)pe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bn.__webglTexture,Y,Qt+an):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bn.__webglTexture,Y),Ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,yt,Ye+an):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,yt),Y!==0?H.blitFramebuffer(Jt,ie,Lt,zt,xe,Re,Lt,zt,H.COLOR_BUFFER_BIT,H.NEAREST):Ln?H.copyTexSubImage3D(un,yt,xe,Re,Ye+an,Jt,ie,Lt,zt):H.copyTexSubImage2D(un,yt,xe,Re,Jt,ie,Lt,zt);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(un,yt,xe,Re,Ye,Lt,zt,Pt,oe,Vt,Xe.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(un,yt,xe,Re,Ye,Lt,zt,Pt,oe,Xe.data):H.texSubImage3D(un,yt,xe,Re,Ye,Lt,zt,Pt,oe,Vt,Xe):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,yt,xe,Re,Lt,zt,oe,Vt,Xe.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,yt,xe,Re,Xe.width,Xe.height,oe,Xe.data):H.texSubImage2D(H.TEXTURE_2D,yt,xe,Re,Lt,zt,oe,Vt,Xe);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ce),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Fn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zi),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Er),yt===0&&W.generateMipmaps&&H.generateMipmap(un),jt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,it=null,at=null,Y=0){return R.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,at=arguments[1]||null,R=arguments[2],W=arguments[3],Y=arguments[4]||0),so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,it,at,Y)},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){I=0,O=0,k=null,jt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}function iC(){const s=Vn.useRef(null);return Vn.useEffect(()=>{const t=s.current;if(!t)return;const i=new hb,r=new Mi(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=80;const l=new nC({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(328968,1),t.appendChild(l.domElement);const c=1e3,h=new Float32Array(c*3),d=new Float32Array(c*3),m=new Le("#a855f7"),p=new Le("#06b6d4"),x=new Le("#ec4899");for(let g=0;g<c;g++){h[g*3]=(Math.random()-.5)*200,h[g*3+1]=(Math.random()-.5)*200,h[g*3+2]=(Math.random()-.5)*200;const F=Math.random(),L=F<.5?m:F<.8?p:x;d[g*3]=L.r,d[g*3+1]=L.g,d[g*3+2]=L.b}const _=new wa;_.setAttribute("position",new Ei(h,3)),_.setAttribute("color",new Ei(d,3));const y=new Wx({size:.6,vertexColors:!0,transparent:!0,opacity:.8,sizeAttenuation:!0}),M=new mb(_,y);i.add(M);let E;const A=()=>{E=requestAnimationFrame(A),M.rotation.y+=3e-4,M.rotation.x+=1e-4,l.render(i,r)};A();const S=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",S),()=>{cancelAnimationFrame(E),window.removeEventListener("resize",S),t.removeChild(l.domElement),_.dispose(),y.dispose(),l.dispose()}},[]),dt.jsx("div",{ref:s,className:"fixed inset-0 z-0 pointer-events-none","aria-hidden":"true"})}function aC({profile:s}){return dt.jsxs("section",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center",children:[dt.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse 80% 60% at 50% 40%, rgba(168,85,247,0.15) 0%, rgba(6,182,212,0.07) 50%, transparent 100%)"}}),dt.jsxs("div",{className:"relative mb-8 animate-float",children:[dt.jsx("div",{className:"w-28 h-28 rounded-full holo-border overflow-hidden mx-auto",children:dt.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-br from-purple-900 via-cyan-900 to-pink-900 flex items-center justify-center text-5xl select-none",children:"⚡"})}),dt.jsx("span",{className:"absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#a855f7] animate-pulse-neon border-2 border-[#050508]"})]}),dt.jsx("h1",{className:"text-7xl md:text-9xl font-black tracking-widest mb-4 neon-text-purple select-none",style:{fontVariantNumeric:"tabular-nums",letterSpacing:"0.15em"},children:s.name}),dt.jsx("div",{className:"relative -mt-4 mb-2 h-0 overflow-visible pointer-events-none select-none","aria-hidden":"true",children:dt.jsx("span",{className:"absolute left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-black tracking-widest text-[#06b6d4] opacity-20 animate-glitch",style:{letterSpacing:"0.15em",top:"-1rem"},children:s.name})}),dt.jsx("p",{className:"text-xl md:text-2xl font-semibold mb-6 neon-text-cyan tracking-widest uppercase",children:s.tagline}),dt.jsx("p",{className:"max-w-xl text-gray-400 text-base md:text-lg leading-relaxed mb-10",children:s.bio}),dt.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[dt.jsxs("a",{href:s.discord.inviteUrl,className:"relative px-8 py-3 rounded-lg font-bold text-white tracking-wider uppercase transition-all duration-300 overflow-hidden group",style:{background:"linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.4))",border:"1px solid #ec4899",boxShadow:"0 0 20px rgba(236,72,153,0.3)"},children:[dt.jsx("span",{className:"relative z-10",children:"Join Discord"}),dt.jsx("span",{className:"absolute inset-0 bg-[#ec4899] opacity-0 group-hover:opacity-20 transition-opacity duration-300"})]}),dt.jsxs("a",{href:"#store",className:"relative px-8 py-3 rounded-lg font-bold text-white tracking-wider uppercase transition-all duration-300 overflow-hidden group",style:{background:"linear-gradient(135deg, rgba(168,85,247,0.2), rgba(168,85,247,0.4))",border:"1px solid #a855f7",boxShadow:"0 0 20px rgba(168,85,247,0.3)"},children:[dt.jsx("span",{className:"relative z-10",children:"Shop Now"}),dt.jsx("span",{className:"absolute inset-0 bg-[#a855f7] opacity-0 group-hover:opacity-20 transition-opacity duration-300"})]})]}),dt.jsxs("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50",children:[dt.jsx("span",{className:"text-xs tracking-widest text-gray-500 uppercase",children:"Scroll"}),dt.jsx("div",{className:"w-px h-8 bg-gradient-to-b from-[#a855f7] to-transparent animate-pulse-neon"})]})]})}function rC({profile:s}){const t=[{name:"YouTube",icon:"▶",handle:s.youtube.handle??"@zyztm",url:s.youtube.channelUrl??"#",color:"#ff0000",glowColor:"rgba(255,0,0,0.3)"},{name:"Twitch",icon:"🎮",handle:s.twitch.username??"zyztm",url:s.twitch.channelUrl??"#",color:"#9147ff",glowColor:"rgba(145,71,255,0.3)"},{name:"TikTok",icon:"♪",handle:s.tiktok.username??"@zyztm",url:s.tiktok.profileUrl??"#",color:"#ff0050",glowColor:"rgba(255,0,80,0.3)"},{name:"Twitter / X",icon:"✕",handle:s.twitter.username??"@zyztm",url:s.twitter.profileUrl??"#",color:"#1d9bf0",glowColor:"rgba(29,155,240,0.3)"},{name:"Instagram",icon:"◈",handle:s.instagram.username??"@zyztm",url:s.instagram.profileUrl??"#",color:"#e1306c",glowColor:"rgba(225,48,108,0.3)"},{name:"Discord",icon:"◉",handle:s.discord.serverName??"ZYZTM Universe",url:s.discord.inviteUrl??"#",color:"#5865f2",glowColor:"rgba(88,101,242,0.3)"}];return dt.jsx("section",{className:"relative z-10 py-20 px-6",children:dt.jsxs("div",{className:"max-w-5xl mx-auto",children:[dt.jsxs("div",{className:"text-center mb-12",children:[dt.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-widest neon-text-cyan uppercase mb-2",children:"Connect"}),dt.jsx("div",{className:"w-24 h-px bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent mx-auto"})]}),dt.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:t.map(i=>dt.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"holo-border glass-card rounded-xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 group cursor-pointer",style:{"--glow":i.glowColor},onMouseEnter:r=>{r.currentTarget.style.boxShadow=`0 0 30px ${i.glowColor}, 0 0 60px ${i.glowColor}`},onMouseLeave:r=>{r.currentTarget.style.boxShadow="0 0 30px rgba(168,85,247,0.1), inset 0 0 30px rgba(168,85,247,0.05)"},children:[dt.jsx("span",{className:"text-4xl transition-transform duration-300 group-hover:scale-110",style:{filter:`drop-shadow(0 0 8px ${i.color})`},children:i.icon}),dt.jsx("span",{className:"font-bold tracking-wider text-sm uppercase text-white/90",children:i.name}),dt.jsx("span",{className:"text-xs text-gray-400 truncate max-w-full",children:i.handle})]},i.name))})]})})}function sC(){return vx({queryKey:["youtube","videos"],queryFn:async()=>{const s=await fetch("/api/youtube");if(!s.ok)throw new Error("Failed to fetch YouTube videos");return s.json()},staleTime:300*1e3,retry:2})}function oC(){return vx({queryKey:["twitch","status"],queryFn:async()=>{const s=await fetch("/api/twitch");if(!s.ok)throw new Error("Failed to fetch Twitch status");return s.json()},staleTime:60*1e3,refetchInterval:60*1e3,retry:1})}function fo({width:s="w-full",height:t="h-4",className:i="",count:r=1}){return dt.jsx(dt.Fragment,{children:Array.from({length:r}).map((l,c)=>dt.jsx("div",{className:`rounded-md animate-shimmer ${s} ${t} ${i}`,"aria-hidden":"true"},c))})}function lC({profile:s}){const t=s.twitch.username??"zyztm",{data:i,isLoading:r,isError:l}=oC();return dt.jsx("section",{className:"relative z-10 py-20 px-6",children:dt.jsxs("div",{className:"max-w-5xl mx-auto",children:[dt.jsxs("div",{className:"text-center mb-12",children:[dt.jsxs("div",{className:"flex items-center justify-center gap-3 mb-2",children:[(i==null?void 0:i.isLive)&&dt.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500 animate-pulse-neon"}),dt.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-widest neon-text-magenta uppercase",children:(i!=null&&i.isLive,"Live on Twitch")})]}),dt.jsx("div",{className:"w-24 h-px bg-gradient-to-r from-transparent via-[#ec4899] to-transparent mx-auto"})]}),r?dt.jsxs("div",{className:"glass-card rounded-2xl overflow-hidden p-6 space-y-4",children:[dt.jsx(fo,{height:"h-64 md:h-96",className:"rounded-xl"}),dt.jsx(fo,{height:"h-6",width:"w-3/4"}),dt.jsx(fo,{height:"h-4",width:"w-1/3"})]}):l||!(i!=null&&i.isLive)?dt.jsx("div",{className:"glass-card holo-border rounded-2xl overflow-hidden",children:dt.jsxs("div",{className:"flex flex-col items-center justify-center py-20 px-6 text-center gap-6",children:[dt.jsx("div",{className:"text-6xl animate-pulse-neon",style:{filter:"drop-shadow(0 0 16px #a855f7)"},children:"📡"}),dt.jsxs("div",{children:[dt.jsx("p",{className:"text-2xl font-black tracking-widest neon-text-purple uppercase mb-2",children:"Currently Offline"}),dt.jsx("p",{className:"text-gray-400 text-sm",children:"Signal lost. Check back soon for live transmissions."})]}),dt.jsx("div",{className:"w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-60"}),dt.jsx("a",{href:s.twitch.channelUrl,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-2 rounded-lg font-bold tracking-widest text-sm uppercase transition-all duration-300 hover:scale-105",style:{border:"1px solid #a855f7",boxShadow:"0 0 20px rgba(168,85,247,0.3)",background:"rgba(168,85,247,0.1)"},children:"Follow on Twitch"})]})}):dt.jsxs("div",{className:"glass-card holo-border rounded-2xl overflow-hidden",children:[i.title&&dt.jsxs("div",{className:"px-6 py-4 flex items-center gap-3 border-b border-purple-500/20",children:[dt.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),dt.jsx("span",{className:"text-sm font-semibold text-gray-200 truncate",children:i.title}),i.viewers!=null&&i.viewers>0&&dt.jsxs("span",{className:"ml-auto text-xs text-gray-400 shrink-0",children:["👁 ",i.viewers.toLocaleString()," viewers"]})]}),dt.jsx("div",{className:"aspect-video",children:dt.jsx("iframe",{src:`https://player.twitch.tv/?channel=${t}&parent=${window.location.hostname}`,className:"w-full h-full",allowFullScreen:!0,title:`${t} Twitch Stream`})})]})]})})}function uC({profile:s}){var l;const{data:t,isLoading:i,isError:r}=sC();return dt.jsx("section",{className:"relative z-10 py-20 px-6",children:dt.jsxs("div",{className:"max-w-5xl mx-auto",children:[dt.jsxs("div",{className:"text-center mb-12",children:[dt.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-widest neon-text-purple uppercase mb-2",children:"Latest Videos"}),dt.jsx("div",{className:"w-24 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent mx-auto"})]}),i?dt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Array.from({length:6}).map((c,h)=>dt.jsxs("div",{className:"glass-card rounded-xl overflow-hidden space-y-3 p-0",children:[dt.jsx(fo,{height:"h-44",className:"rounded-none"}),dt.jsxs("div",{className:"p-4 space-y-2",children:[dt.jsx(fo,{height:"h-4"}),dt.jsx(fo,{height:"h-3",width:"w-2/3"})]})]},h))}):r||!((l=t==null?void 0:t.videos)!=null&&l.length)?dt.jsxs("div",{className:"text-center py-16 glass-card rounded-2xl",children:[dt.jsx("p",{className:"text-5xl mb-4",children:"🎬"}),dt.jsx("p",{className:"neon-text-purple font-black tracking-widest uppercase text-xl mb-2",children:"Videos Loading Soon"}),dt.jsx("p",{className:"text-gray-400 text-sm",children:"Configure your YouTube API key to display latest videos."})]}):dt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.videos.map(c=>dt.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"glass-card holo-border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 group",children:[dt.jsxs("div",{className:"relative overflow-hidden",children:[dt.jsx("img",{src:c.thumbnail,alt:c.title,className:"w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"}),dt.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent"}),dt.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:dt.jsx("span",{className:"text-5xl",style:{filter:"drop-shadow(0 0 16px #a855f7)"},children:"▶"})})]}),dt.jsxs("div",{className:"p-4",children:[dt.jsx("h3",{className:"font-bold text-sm text-white/90 line-clamp-2 mb-2 leading-snug",children:c.title}),dt.jsx("span",{className:"text-xs text-gray-500",children:new Date(c.publishedAt).toLocaleDateString()})]})]},c.id))})]})})}function cC({product:s}){return dt.jsxs("div",{className:"glass-card holo-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 group",children:[dt.jsxs("div",{className:"relative h-48 bg-gradient-to-br from-purple-900/40 via-cyan-900/20 to-pink-900/40 flex items-center justify-center overflow-hidden",children:[dt.jsx("span",{className:"text-6xl transition-transform duration-500 group-hover:scale-110",style:{filter:"drop-shadow(0 0 20px #a855f7)"},children:s.category==="presets"?"🎨":s.category==="wallpapers"?"🌆":"📺"}),dt.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[rgba(15,10,30,0.8)] to-transparent"}),dt.jsx("span",{className:"absolute top-3 right-3 text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-[#a855f7]/20 border border-[#a855f7]/40 text-[#a855f7]",children:s.category})]}),dt.jsxs("div",{className:"p-5 flex flex-col flex-1 gap-3",children:[dt.jsx("h3",{className:"font-black text-lg tracking-wide text-white/95",children:s.name}),dt.jsx("p",{className:"text-gray-400 text-sm leading-relaxed flex-1",children:s.description}),dt.jsxs("div",{className:"flex items-center justify-between mt-2",children:[dt.jsxs("span",{className:"text-2xl font-black neon-text-cyan",children:["$",s.price.toFixed(2),dt.jsx("span",{className:"text-xs font-normal text-gray-500 ml-1",children:s.currency})]}),dt.jsx("a",{href:s.purchaseUrl,className:"relative px-5 py-2 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden group/btn",style:{background:"linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3))",border:"1px solid rgba(168,85,247,0.5)",boxShadow:"0 0 15px rgba(168,85,247,0.2)"},onMouseEnter:t=>{t.currentTarget.style.boxShadow="0 0 25px rgba(168,85,247,0.5)"},onMouseLeave:t=>{t.currentTarget.style.boxShadow="0 0 15px rgba(168,85,247,0.2)"},children:"Buy Now"})]})]})]})}function fC({profile:s}){return dt.jsxs("section",{id:"store",className:"relative z-10 py-20 px-6",children:[dt.jsxs("div",{className:"max-w-5xl mx-auto",children:[dt.jsxs("div",{className:"text-center mb-12",children:[dt.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-widest neon-text-cyan uppercase mb-2",children:"Digital Store"}),dt.jsx("div",{className:"w-24 h-px bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent mx-auto mb-4"}),dt.jsx("p",{className:"text-gray-400 text-sm max-w-md mx-auto",children:"Premium digital assets for creators. Level up your aesthetic."})]}),dt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:s.products.map(t=>dt.jsx(cC,{product:t},t.id))})]}),dt.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pt-10 border-t border-purple-500/10 text-center",children:[dt.jsx("p",{className:"neon-text-purple font-black tracking-widest text-xl mb-1",children:s.name}),dt.jsxs("p",{className:"text-gray-600 text-xs tracking-widest uppercase",children:["© ",new Date().getFullYear()," ZYZTM Universe. All rights reserved."]})]})]})}const hC="ZYZTM",dC="Cyberpunk Content Creator & Digital Artist",pC="/avatar.png",mC="/banner.png",gC="Welcome to ZYZTM Universe – where cyberpunk meets digital art. Join me on this journey through neon-lit worlds, gaming streams, and digital creations.",_C={channelId:"CHANNEL_ID_PLACEHOLDER",channelUrl:"https://youtube.com/@zyztm",handle:"@zyztm"},vC={username:"zyztm",channelUrl:"https://twitch.tv/zyztm"},xC={username:"@zyztm",profileUrl:"https://tiktok.com/@zyztm"},yC={username:"@zyztm",profileUrl:"https://twitter.com/zyztm"},SC={username:"@zyztm",profileUrl:"https://instagram.com/zyztm"},MC={serverName:"ZYZTM Universe",inviteUrl:"https://discord.gg/zyztm"},EC=[{id:"1",name:"Cyberpunk Preset Pack",description:"50+ Lightroom & Capture One presets for that perfect cyberpunk aesthetic",price:19.99,currency:"USD",imageUrl:"/products/preset-pack.png",purchaseUrl:"#",category:"presets"},{id:"2",name:"Neon City Wallpack",description:"40 4K wallpapers of AI-generated neon cityscapes",price:9.99,currency:"USD",imageUrl:"/products/wallpack.png",purchaseUrl:"#",category:"wallpapers"},{id:"3",name:"Stream Overlay Pack",description:"Full cyberpunk stream overlay set – alerts, panels, overlays",price:29.99,currency:"USD",imageUrl:"/products/overlay-pack.png",purchaseUrl:"#",category:"overlays"}],bC={name:hC,tagline:dC,avatar:pC,banner:mC,bio:gC,youtube:_C,twitch:vC,tiktok:xC,twitter:yC,instagram:SC,discord:MC,products:EC},TC=new FM({defaultOptions:{queries:{staleTime:300*1e3,retry:2}}}),Ll=bC;function AC(){return dt.jsx(IM,{client:TC,children:dt.jsxs("div",{className:"relative min-h-screen bg-[#050508] text-white overflow-x-hidden",children:[dt.jsx(iC,{}),dt.jsx(aC,{profile:Ll}),dt.jsx(rC,{profile:Ll}),dt.jsx(lC,{profile:Ll}),dt.jsx(uC,{profile:Ll}),dt.jsx(fC,{profile:Ll})]})})}dM.createRoot(document.getElementById("root")).render(dt.jsx(Vn.StrictMode,{children:dt.jsx(AC,{})}));
