var xe=Object.defineProperty;var Ce=(s,e,i)=>e in s?xe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var j=(s,e,i)=>(Ce(s,typeof e!="symbol"?e+"":e,i),i),ie=(s,e,i)=>{if(!e.has(s))throw TypeError("Cannot "+i)};var t=(s,e,i)=>(ie(s,e,"read from private field"),i?i.call(s):e.get(s)),A=(s,e,i)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,i)},g=(s,e,i,n)=>(ie(s,e,"write to private field"),n?n.call(s,i):e.set(s,i),i);var Vt=(s,e,i,n)=>({set _(r){g(s,e,r,i)},get _(){return t(s,e,n)}}),d=(s,e,i)=>(ie(s,e,"access private method"),i);import{cv as _e,ae as Fe,R as ft}from"./index-5pNbV5yM.js";const{Axios:ke,AxiosError:Pe,CanceledError:Me,isCancel:Re,CancelToken:He,VERSION:Qe,all:qe,Cancel:$e,isAxiosError:Ve,spread:Be,toFormData:Ye,AxiosHeaders:Ke,HttpStatusCode:Je,formToJSON:Xe,getAdapter:Ze,mergeConfig:ti}=_e;function fe(s,e,i,n,r,o,h){try{var c=s[o](h),f=c.value}catch(O){i(O);return}c.done?e(f):Promise.resolve(f).then(n,r)}function ne(s){return function(){var e=this,i=arguments;return new Promise(function(n,r){var o=s.apply(e,i);function h(f){fe(o,n,r,h,c,"next",f)}function c(f){fe(o,n,r,h,c,"throw",f)}h(void 0)})}}function it(){return it=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},it.apply(this,arguments)}var Se={exports:{}},be={exports:{}};(function(s){function e(i){"@babel/helpers - typeof";return s.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s.exports.__esModule=!0,s.exports.default=s.exports,e(i)}s.exports=e,s.exports.__esModule=!0,s.exports.default=s.exports})(be);var ze=be.exports;(function(s){var e=ze.default;function i(){s.exports=i=function(){return r},s.exports.__esModule=!0,s.exports.default=s.exports;var n,r={},o=Object.prototype,h=o.hasOwnProperty,c=Object.defineProperty||function(u,a,l){u[a]=l.value},f=typeof Symbol=="function"?Symbol:{},O=f.iterator||"@@iterator",Q=f.asyncIterator||"@@asyncIterator",x=f.toStringTag||"@@toStringTag";function G(u,a,l){return Object.defineProperty(u,a,{value:l,enumerable:!0,configurable:!0,writable:!0}),u[a]}try{G({},"")}catch{G=function(l,v,E){return l[v]=E}}function M(u,a,l,v){var E=a&&a.prototype instanceof p?a:p,w=Object.create(E.prototype),N=new te(v||[]);return c(w,"_invoke",{value:Ct(u,l,N)}),w}function H(u,a,l){try{return{type:"normal",arg:u.call(a,l)}}catch(v){return{type:"throw",arg:v}}}r.wrap=M;var z="suspendedStart",W="suspendedYield",y="executing",T="completed",F={};function p(){}function m(){}function _(){}var b={};G(b,O,function(){return this});var q=Object.getPrototypeOf,C=q&&q(q(ee([])));C&&C!==o&&h.call(C,O)&&(b=C);var et=_.prototype=p.prototype=Object.create(b);function Ut(u){["next","throw","return"].forEach(function(a){G(u,a,function(l){return this._invoke(a,l)})})}function ct(u,a){function l(E,w,N,V){var K=H(u[E],u,w);if(K.type!=="throw"){var bt=K.arg,vt=bt.value;return vt&&e(vt)=="object"&&h.call(vt,"__await")?a.resolve(vt.__await).then(function(Et){l("next",Et,N,V)},function(Et){l("throw",Et,N,V)}):a.resolve(vt).then(function(Et){bt.value=Et,N(bt)},function(Et){return l("throw",Et,N,V)})}V(K.arg)}var v;c(this,"_invoke",{value:function(w,N){function V(){return new a(function(K,bt){l(w,N,K,bt)})}return v=v?v.then(V,V):V()}})}function Ct(u,a,l){var v=z;return function(E,w){if(v===y)throw new Error("Generator is already running");if(v===T){if(E==="throw")throw w;return{value:n,done:!0}}for(l.method=E,l.arg=w;;){var N=l.delegate;if(N){var V=$t(N,l);if(V){if(V===F)continue;return V}}if(l.method==="next")l.sent=l._sent=l.arg;else if(l.method==="throw"){if(v===z)throw v=T,l.arg;l.dispatchException(l.arg)}else l.method==="return"&&l.abrupt("return",l.arg);v=y;var K=H(u,a,l);if(K.type==="normal"){if(v=l.done?T:W,K.arg===F)continue;return{value:K.arg,done:l.done}}K.type==="throw"&&(v=T,l.method="throw",l.arg=K.arg)}}}function $t(u,a){var l=a.method,v=u.iterator[l];if(v===n)return a.delegate=null,l==="throw"&&u.iterator.return&&(a.method="return",a.arg=n,$t(u,a),a.method==="throw")||l!=="return"&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+l+"' method")),F;var E=H(v,u.iterator,a.arg);if(E.type==="throw")return a.method="throw",a.arg=E.arg,a.delegate=null,F;var w=E.arg;return w?w.done?(a[u.resultName]=w.value,a.next=u.nextLoc,a.method!=="return"&&(a.method="next",a.arg=n),a.delegate=null,F):w:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,F)}function gt(u){var a={tryLoc:u[0]};1 in u&&(a.catchLoc=u[1]),2 in u&&(a.finallyLoc=u[2],a.afterLoc=u[3]),this.tryEntries.push(a)}function It(u){var a=u.completion||{};a.type="normal",delete a.arg,u.completion=a}function te(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(gt,this),this.reset(!0)}function ee(u){if(u||u===""){var a=u[O];if(a)return a.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var l=-1,v=function E(){for(;++l<u.length;)if(h.call(u,l))return E.value=u[l],E.done=!1,E;return E.value=n,E.done=!0,E};return v.next=v}}throw new TypeError(e(u)+" is not iterable")}return m.prototype=_,c(et,"constructor",{value:_,configurable:!0}),c(_,"constructor",{value:m,configurable:!0}),m.displayName=G(_,x,"GeneratorFunction"),r.isGeneratorFunction=function(u){var a=typeof u=="function"&&u.constructor;return!!a&&(a===m||(a.displayName||a.name)==="GeneratorFunction")},r.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,_):(u.__proto__=_,G(u,x,"GeneratorFunction")),u.prototype=Object.create(et),u},r.awrap=function(u){return{__await:u}},Ut(ct.prototype),G(ct.prototype,Q,function(){return this}),r.AsyncIterator=ct,r.async=function(u,a,l,v,E){E===void 0&&(E=Promise);var w=new ct(M(u,a,l,v),E);return r.isGeneratorFunction(a)?w:w.next().then(function(N){return N.done?N.value:w.next()})},Ut(et),G(et,x,"Generator"),G(et,O,function(){return this}),G(et,"toString",function(){return"[object Generator]"}),r.keys=function(u){var a=Object(u),l=[];for(var v in a)l.push(v);return l.reverse(),function E(){for(;l.length;){var w=l.pop();if(w in a)return E.value=w,E.done=!1,E}return E.done=!0,E}},r.values=ee,te.prototype={constructor:te,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(It),!a)for(var l in this)l.charAt(0)==="t"&&h.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=n)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if(a.type==="throw")throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var l=this;function v(bt,vt){return N.type="throw",N.arg=a,l.next=bt,vt&&(l.method="next",l.arg=n),!!vt}for(var E=this.tryEntries.length-1;E>=0;--E){var w=this.tryEntries[E],N=w.completion;if(w.tryLoc==="root")return v("end");if(w.tryLoc<=this.prev){var V=h.call(w,"catchLoc"),K=h.call(w,"finallyLoc");if(V&&K){if(this.prev<w.catchLoc)return v(w.catchLoc,!0);if(this.prev<w.finallyLoc)return v(w.finallyLoc)}else if(V){if(this.prev<w.catchLoc)return v(w.catchLoc,!0)}else{if(!K)throw new Error("try statement without catch or finally");if(this.prev<w.finallyLoc)return v(w.finallyLoc)}}}},abrupt:function(a,l){for(var v=this.tryEntries.length-1;v>=0;--v){var E=this.tryEntries[v];if(E.tryLoc<=this.prev&&h.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var w=E;break}}w&&(a==="break"||a==="continue")&&w.tryLoc<=l&&l<=w.finallyLoc&&(w=null);var N=w?w.completion:{};return N.type=a,N.arg=l,w?(this.method="next",this.next=w.finallyLoc,F):this.complete(N)},complete:function(a,l){if(a.type==="throw")throw a.arg;return a.type==="break"||a.type==="continue"?this.next=a.arg:a.type==="return"?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):a.type==="normal"&&l&&(this.next=l),F},finish:function(a){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.finallyLoc===a)return this.complete(v.completion,v.afterLoc),It(v),F}},catch:function(a){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.tryLoc===a){var E=v.completion;if(E.type==="throw"){var w=E.arg;It(v)}return w}}throw new Error("illegal catch attempt")},delegateYield:function(a,l,v){return this.delegate={iterator:ee(a),resultName:l,nextLoc:v},this.method==="next"&&(this.arg=n),F}},r}s.exports=i,s.exports.__esModule=!0,s.exports.default=s.exports})(Se);var Le=Se.exports,Bt=Le(),De=Bt;try{regeneratorRuntime=Bt}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Bt:Function("r","regeneratorRuntime = r")(Bt)}const Ft=Fe(De),Rt=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,Ee=new Set,re=typeof process=="object"&&process?process:{},Ae=(s,e,i,n)=>{typeof re.emitWarning=="function"?re.emitWarning(s,e,i,n):console.error(`[${i}] ${e}: ${s}`)};let Xt=globalThis.AbortController,de=globalThis.AbortSignal;var me;if(typeof Xt>"u"){de=class{constructor(){j(this,"onabort");j(this,"_onabort",[]);j(this,"reason");j(this,"aborted",!1)}addEventListener(n,r){this._onabort.push(r)}},Xt=class{constructor(){j(this,"signal",new de);e()}abort(n){var r,o;if(!this.signal.aborted){this.signal.reason=n,this.signal.aborted=!0;for(const h of this.signal._onabort)h(n);(o=(r=this.signal).onabort)==null||o.call(r,n)}}};let s=((me=re.env)==null?void 0:me.LRU_CACHE_IGNORE_AC_WARNING)!=="1";const e=()=>{s&&(s=!1,Ae("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",e))}}const je=s=>!Ee.has(s),wt=s=>s&&s===Math.floor(s)&&s>0&&isFinite(s),Te=s=>wt(s)?s<=Math.pow(2,8)?Uint8Array:s<=Math.pow(2,16)?Uint16Array:s<=Math.pow(2,32)?Uint32Array:s<=Number.MAX_SAFE_INTEGER?Yt:null:null;class Yt extends Array{constructor(e){super(e),this.fill(0)}}var Lt;const At=class At{constructor(e,i){j(this,"heap");j(this,"length");if(!t(At,Lt))throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new i(e),this.length=0}static create(e){const i=Te(e);if(!i)return[];g(At,Lt,!0);const n=new At(e,i);return g(At,Lt,!1),n}push(e){this.heap[this.length++]=e}pop(){return this.heap[--this.length]}};Lt=new WeakMap,A(At,Lt,!1);let se=At;var nt,J,rt,st,Dt,I,ot,U,D,S,B,X,$,k,at,P,ht,lt,Z,ut,St,Y,Pt,ae,Tt,yt,Mt,tt,Zt,Oe,Ot,jt,Ht,dt,mt,pt,_t,Qt,he,Ne,Wt,Kt,Gt,Jt,R,L,qt,le,xt,kt;const ce=class ce{constructor(e){A(this,Pt);A(this,Zt);A(this,dt);A(this,pt);A(this,Qt);A(this,Wt);A(this,Gt);A(this,R);A(this,qt);A(this,xt);A(this,nt,void 0);A(this,J,void 0);A(this,rt,void 0);A(this,st,void 0);A(this,Dt,void 0);j(this,"ttl");j(this,"ttlResolution");j(this,"ttlAutopurge");j(this,"updateAgeOnGet");j(this,"updateAgeOnHas");j(this,"allowStale");j(this,"noDisposeOnSet");j(this,"noUpdateTTL");j(this,"maxEntrySize");j(this,"sizeCalculation");j(this,"noDeleteOnFetchRejection");j(this,"noDeleteOnStaleGet");j(this,"allowStaleOnFetchAbort");j(this,"allowStaleOnFetchRejection");j(this,"ignoreFetchAbort");A(this,I,void 0);A(this,ot,void 0);A(this,U,void 0);A(this,D,void 0);A(this,S,void 0);A(this,B,void 0);A(this,X,void 0);A(this,$,void 0);A(this,k,void 0);A(this,at,void 0);A(this,P,void 0);A(this,ht,void 0);A(this,lt,void 0);A(this,Z,void 0);A(this,ut,void 0);A(this,St,void 0);A(this,Y,void 0);A(this,Tt,()=>{});A(this,yt,()=>{});A(this,Mt,()=>{});A(this,tt,()=>!1);A(this,Ot,e=>{});A(this,jt,(e,i,n)=>{});A(this,Ht,(e,i,n,r)=>{if(n||r)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0});j(this,Ne,"LRUCache");const{max:i=0,ttl:n,ttlResolution:r=1,ttlAutopurge:o,updateAgeOnGet:h,updateAgeOnHas:c,allowStale:f,dispose:O,disposeAfter:Q,noDisposeOnSet:x,noUpdateTTL:G,maxSize:M=0,maxEntrySize:H=0,sizeCalculation:z,fetchMethod:W,noDeleteOnFetchRejection:y,noDeleteOnStaleGet:T,allowStaleOnFetchRejection:F,allowStaleOnFetchAbort:p,ignoreFetchAbort:m}=e;if(i!==0&&!wt(i))throw new TypeError("max option must be a nonnegative integer");const _=i?Te(i):Array;if(!_)throw new Error("invalid max value: "+i);if(g(this,nt,i),g(this,J,M),this.maxEntrySize=H||t(this,J),this.sizeCalculation=z,this.sizeCalculation){if(!t(this,J)&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(W!==void 0&&typeof W!="function")throw new TypeError("fetchMethod must be a function if specified");if(g(this,Dt,W),g(this,St,!!W),g(this,U,new Map),g(this,D,new Array(i).fill(void 0)),g(this,S,new Array(i).fill(void 0)),g(this,B,new _(i)),g(this,X,new _(i)),g(this,$,0),g(this,k,0),g(this,at,se.create(i)),g(this,I,0),g(this,ot,0),typeof O=="function"&&g(this,rt,O),typeof Q=="function"?(g(this,st,Q),g(this,P,[])):(g(this,st,void 0),g(this,P,void 0)),g(this,ut,!!t(this,rt)),g(this,Y,!!t(this,st)),this.noDisposeOnSet=!!x,this.noUpdateTTL=!!G,this.noDeleteOnFetchRejection=!!y,this.allowStaleOnFetchRejection=!!F,this.allowStaleOnFetchAbort=!!p,this.ignoreFetchAbort=!!m,this.maxEntrySize!==0){if(t(this,J)!==0&&!wt(t(this,J)))throw new TypeError("maxSize must be a positive integer if specified");if(!wt(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");d(this,Zt,Oe).call(this)}if(this.allowStale=!!f,this.noDeleteOnStaleGet=!!T,this.updateAgeOnGet=!!h,this.updateAgeOnHas=!!c,this.ttlResolution=wt(r)||r===0?r:1,this.ttlAutopurge=!!o,this.ttl=n||0,this.ttl){if(!wt(this.ttl))throw new TypeError("ttl must be a positive integer if specified");d(this,Pt,ae).call(this)}if(t(this,nt)===0&&this.ttl===0&&t(this,J)===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!t(this,nt)&&!t(this,J)){const b="LRU_CACHE_UNBOUNDED";je(b)&&(Ee.add(b),Ae("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",b,ce))}}static unsafeExposeInternals(e){return{starts:t(e,lt),ttls:t(e,Z),sizes:t(e,ht),keyMap:t(e,U),keyList:t(e,D),valList:t(e,S),next:t(e,B),prev:t(e,X),get head(){return t(e,$)},get tail(){return t(e,k)},free:t(e,at),isBackgroundFetch:i=>{var n;return d(n=e,R,L).call(n,i)},backgroundFetch:(i,n,r,o)=>{var h;return d(h=e,Gt,Jt).call(h,i,n,r,o)},moveToTail:i=>{var n;return d(n=e,xt,kt).call(n,i)},indexes:i=>{var n;return d(n=e,dt,mt).call(n,i)},rindexes:i=>{var n;return d(n=e,pt,_t).call(n,i)},isStale:i=>{var n;return t(n=e,tt).call(n,i)}}}get max(){return t(this,nt)}get maxSize(){return t(this,J)}get calculatedSize(){return t(this,ot)}get size(){return t(this,I)}get fetchMethod(){return t(this,Dt)}get dispose(){return t(this,rt)}get disposeAfter(){return t(this,st)}getRemainingTTL(e){return t(this,U).has(e)?1/0:0}*entries(){for(const e of d(this,dt,mt).call(this))t(this,S)[e]!==void 0&&t(this,D)[e]!==void 0&&!d(this,R,L).call(this,t(this,S)[e])&&(yield[t(this,D)[e],t(this,S)[e]])}*rentries(){for(const e of d(this,pt,_t).call(this))t(this,S)[e]!==void 0&&t(this,D)[e]!==void 0&&!d(this,R,L).call(this,t(this,S)[e])&&(yield[t(this,D)[e],t(this,S)[e]])}*keys(){for(const e of d(this,dt,mt).call(this)){const i=t(this,D)[e];i!==void 0&&!d(this,R,L).call(this,t(this,S)[e])&&(yield i)}}*rkeys(){for(const e of d(this,pt,_t).call(this)){const i=t(this,D)[e];i!==void 0&&!d(this,R,L).call(this,t(this,S)[e])&&(yield i)}}*values(){for(const e of d(this,dt,mt).call(this))t(this,S)[e]!==void 0&&!d(this,R,L).call(this,t(this,S)[e])&&(yield t(this,S)[e])}*rvalues(){for(const e of d(this,pt,_t).call(this))t(this,S)[e]!==void 0&&!d(this,R,L).call(this,t(this,S)[e])&&(yield t(this,S)[e])}[Symbol.iterator](){return this.entries()}find(e,i={}){for(const n of d(this,dt,mt).call(this)){const r=t(this,S)[n],o=d(this,R,L).call(this,r)?r.__staleWhileFetching:r;if(o!==void 0&&e(o,t(this,D)[n],this))return this.get(t(this,D)[n],i)}}forEach(e,i=this){for(const n of d(this,dt,mt).call(this)){const r=t(this,S)[n],o=d(this,R,L).call(this,r)?r.__staleWhileFetching:r;o!==void 0&&e.call(i,o,t(this,D)[n],this)}}rforEach(e,i=this){for(const n of d(this,pt,_t).call(this)){const r=t(this,S)[n],o=d(this,R,L).call(this,r)?r.__staleWhileFetching:r;o!==void 0&&e.call(i,o,t(this,D)[n],this)}}purgeStale(){let e=!1;for(const i of d(this,pt,_t).call(this,{allowStale:!0}))t(this,tt).call(this,i)&&(this.delete(t(this,D)[i]),e=!0);return e}info(e){const i=t(this,U).get(e);if(i===void 0)return;const n=t(this,S)[i],r=d(this,R,L).call(this,n)?n.__staleWhileFetching:n;if(r===void 0)return;const o={value:r};if(t(this,Z)&&t(this,lt)){const h=t(this,Z)[i],c=t(this,lt)[i];if(h&&c){const f=h-(Rt.now()-c);o.ttl=f,o.start=Date.now()}}return t(this,ht)&&(o.size=t(this,ht)[i]),o}dump(){const e=[];for(const i of d(this,dt,mt).call(this,{allowStale:!0})){const n=t(this,D)[i],r=t(this,S)[i],o=d(this,R,L).call(this,r)?r.__staleWhileFetching:r;if(o===void 0||n===void 0)continue;const h={value:o};if(t(this,Z)&&t(this,lt)){h.ttl=t(this,Z)[i];const c=Rt.now()-t(this,lt)[i];h.start=Math.floor(Date.now()-c)}t(this,ht)&&(h.size=t(this,ht)[i]),e.unshift([n,h])}return e}load(e){this.clear();for(const[i,n]of e){if(n.start){const r=Date.now()-n.start;n.start=Rt.now()-r}this.set(i,n.value,n)}}set(e,i,n={}){var G,M,H,z,W;if(i===void 0)return this.delete(e),this;const{ttl:r=this.ttl,start:o,noDisposeOnSet:h=this.noDisposeOnSet,sizeCalculation:c=this.sizeCalculation,status:f}=n;let{noUpdateTTL:O=this.noUpdateTTL}=n;const Q=t(this,Ht).call(this,e,i,n.size||0,c);if(this.maxEntrySize&&Q>this.maxEntrySize)return f&&(f.set="miss",f.maxEntrySizeExceeded=!0),this.delete(e),this;let x=t(this,I)===0?void 0:t(this,U).get(e);if(x===void 0)x=t(this,I)===0?t(this,k):t(this,at).length!==0?t(this,at).pop():t(this,I)===t(this,nt)?d(this,Wt,Kt).call(this,!1):t(this,I),t(this,D)[x]=e,t(this,S)[x]=i,t(this,U).set(e,x),t(this,B)[t(this,k)]=x,t(this,X)[x]=t(this,k),g(this,k,x),Vt(this,I)._++,t(this,jt).call(this,x,Q,f),f&&(f.set="add"),O=!1;else{d(this,xt,kt).call(this,x);const y=t(this,S)[x];if(i!==y){if(t(this,St)&&d(this,R,L).call(this,y)){y.__abortController.abort(new Error("replaced"));const{__staleWhileFetching:T}=y;T!==void 0&&!h&&(t(this,ut)&&((G=t(this,rt))==null||G.call(this,T,e,"set")),t(this,Y)&&((M=t(this,P))==null||M.push([T,e,"set"])))}else h||(t(this,ut)&&((H=t(this,rt))==null||H.call(this,y,e,"set")),t(this,Y)&&((z=t(this,P))==null||z.push([y,e,"set"])));if(t(this,Ot).call(this,x),t(this,jt).call(this,x,Q,f),t(this,S)[x]=i,f){f.set="replace";const T=y&&d(this,R,L).call(this,y)?y.__staleWhileFetching:y;T!==void 0&&(f.oldValue=T)}}else f&&(f.set="update")}if(r!==0&&!t(this,Z)&&d(this,Pt,ae).call(this),t(this,Z)&&(O||t(this,Mt).call(this,x,r,o),f&&t(this,yt).call(this,f,x)),!h&&t(this,Y)&&t(this,P)){const y=t(this,P);let T;for(;T=y==null?void 0:y.shift();)(W=t(this,st))==null||W.call(this,...T)}return this}pop(){var e;try{for(;t(this,I);){const i=t(this,S)[t(this,$)];if(d(this,Wt,Kt).call(this,!0),d(this,R,L).call(this,i)){if(i.__staleWhileFetching)return i.__staleWhileFetching}else if(i!==void 0)return i}}finally{if(t(this,Y)&&t(this,P)){const i=t(this,P);let n;for(;n=i==null?void 0:i.shift();)(e=t(this,st))==null||e.call(this,...n)}}}has(e,i={}){const{updateAgeOnHas:n=this.updateAgeOnHas,status:r}=i,o=t(this,U).get(e);if(o!==void 0){const h=t(this,S)[o];if(d(this,R,L).call(this,h)&&h.__staleWhileFetching===void 0)return!1;if(t(this,tt).call(this,o))r&&(r.has="stale",t(this,yt).call(this,r,o));else return n&&t(this,Tt).call(this,o),r&&(r.has="hit",t(this,yt).call(this,r,o)),!0}else r&&(r.has="miss");return!1}peek(e,i={}){const{allowStale:n=this.allowStale}=i,r=t(this,U).get(e);if(r===void 0||!n&&t(this,tt).call(this,r))return;const o=t(this,S)[r];return d(this,R,L).call(this,o)?o.__staleWhileFetching:o}async fetch(e,i={}){const{allowStale:n=this.allowStale,updateAgeOnGet:r=this.updateAgeOnGet,noDeleteOnStaleGet:o=this.noDeleteOnStaleGet,ttl:h=this.ttl,noDisposeOnSet:c=this.noDisposeOnSet,size:f=0,sizeCalculation:O=this.sizeCalculation,noUpdateTTL:Q=this.noUpdateTTL,noDeleteOnFetchRejection:x=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:G=this.allowStaleOnFetchRejection,ignoreFetchAbort:M=this.ignoreFetchAbort,allowStaleOnFetchAbort:H=this.allowStaleOnFetchAbort,context:z,forceRefresh:W=!1,status:y,signal:T}=i;if(!t(this,St))return y&&(y.fetch="get"),this.get(e,{allowStale:n,updateAgeOnGet:r,noDeleteOnStaleGet:o,status:y});const F={allowStale:n,updateAgeOnGet:r,noDeleteOnStaleGet:o,ttl:h,noDisposeOnSet:c,size:f,sizeCalculation:O,noUpdateTTL:Q,noDeleteOnFetchRejection:x,allowStaleOnFetchRejection:G,allowStaleOnFetchAbort:H,ignoreFetchAbort:M,status:y,signal:T};let p=t(this,U).get(e);if(p===void 0){y&&(y.fetch="miss");const m=d(this,Gt,Jt).call(this,e,p,F,z);return m.__returned=m}else{const m=t(this,S)[p];if(d(this,R,L).call(this,m)){const et=n&&m.__staleWhileFetching!==void 0;return y&&(y.fetch="inflight",et&&(y.returnedStale=!0)),et?m.__staleWhileFetching:m.__returned=m}const _=t(this,tt).call(this,p);if(!W&&!_)return y&&(y.fetch="hit"),d(this,xt,kt).call(this,p),r&&t(this,Tt).call(this,p),y&&t(this,yt).call(this,y,p),m;const b=d(this,Gt,Jt).call(this,e,p,F,z),C=b.__staleWhileFetching!==void 0&&n;return y&&(y.fetch=_?"stale":"refresh",C&&_&&(y.returnedStale=!0)),C?b.__staleWhileFetching:b.__returned=b}}get(e,i={}){const{allowStale:n=this.allowStale,updateAgeOnGet:r=this.updateAgeOnGet,noDeleteOnStaleGet:o=this.noDeleteOnStaleGet,status:h}=i,c=t(this,U).get(e);if(c!==void 0){const f=t(this,S)[c],O=d(this,R,L).call(this,f);return h&&t(this,yt).call(this,h,c),t(this,tt).call(this,c)?(h&&(h.get="stale"),O?(h&&n&&f.__staleWhileFetching!==void 0&&(h.returnedStale=!0),n?f.__staleWhileFetching:void 0):(o||this.delete(e),h&&n&&(h.returnedStale=!0),n?f:void 0)):(h&&(h.get="hit"),O?f.__staleWhileFetching:(d(this,xt,kt).call(this,c),r&&t(this,Tt).call(this,c),f))}else h&&(h.get="miss")}delete(e){var n,r,o,h;let i=!1;if(t(this,I)!==0){const c=t(this,U).get(e);if(c!==void 0)if(i=!0,t(this,I)===1)this.clear();else{t(this,Ot).call(this,c);const f=t(this,S)[c];if(d(this,R,L).call(this,f)?f.__abortController.abort(new Error("deleted")):(t(this,ut)||t(this,Y))&&(t(this,ut)&&((n=t(this,rt))==null||n.call(this,f,e,"delete")),t(this,Y)&&((r=t(this,P))==null||r.push([f,e,"delete"]))),t(this,U).delete(e),t(this,D)[c]=void 0,t(this,S)[c]=void 0,c===t(this,k))g(this,k,t(this,X)[c]);else if(c===t(this,$))g(this,$,t(this,B)[c]);else{const O=t(this,X)[c];t(this,B)[O]=t(this,B)[c];const Q=t(this,B)[c];t(this,X)[Q]=t(this,X)[c]}Vt(this,I)._--,t(this,at).push(c)}}if(t(this,Y)&&((o=t(this,P))!=null&&o.length)){const c=t(this,P);let f;for(;f=c==null?void 0:c.shift();)(h=t(this,st))==null||h.call(this,...f)}return i}clear(){var e,i,n;for(const r of d(this,pt,_t).call(this,{allowStale:!0})){const o=t(this,S)[r];if(d(this,R,L).call(this,o))o.__abortController.abort(new Error("deleted"));else{const h=t(this,D)[r];t(this,ut)&&((e=t(this,rt))==null||e.call(this,o,h,"delete")),t(this,Y)&&((i=t(this,P))==null||i.push([o,h,"delete"]))}}if(t(this,U).clear(),t(this,S).fill(void 0),t(this,D).fill(void 0),t(this,Z)&&t(this,lt)&&(t(this,Z).fill(0),t(this,lt).fill(0)),t(this,ht)&&t(this,ht).fill(0),g(this,$,0),g(this,k,0),t(this,at).length=0,g(this,ot,0),g(this,I,0),t(this,Y)&&t(this,P)){const r=t(this,P);let o;for(;o=r==null?void 0:r.shift();)(n=t(this,st))==null||n.call(this,...o)}}};Ne=Symbol.toStringTag,nt=new WeakMap,J=new WeakMap,rt=new WeakMap,st=new WeakMap,Dt=new WeakMap,I=new WeakMap,ot=new WeakMap,U=new WeakMap,D=new WeakMap,S=new WeakMap,B=new WeakMap,X=new WeakMap,$=new WeakMap,k=new WeakMap,at=new WeakMap,P=new WeakMap,ht=new WeakMap,lt=new WeakMap,Z=new WeakMap,ut=new WeakMap,St=new WeakMap,Y=new WeakMap,Pt=new WeakSet,ae=function(){const e=new Yt(t(this,nt)),i=new Yt(t(this,nt));g(this,Z,e),g(this,lt,i),g(this,Mt,(o,h,c=Rt.now())=>{if(i[o]=h!==0?c:0,e[o]=h,h!==0&&this.ttlAutopurge){const f=setTimeout(()=>{t(this,tt).call(this,o)&&this.delete(t(this,D)[o])},h+1);f.unref&&f.unref()}}),g(this,Tt,o=>{i[o]=e[o]!==0?Rt.now():0}),g(this,yt,(o,h)=>{if(e[h]){const c=e[h],f=i[h];if(!c||!f)return;o.ttl=c,o.start=f,o.now=n||r();const O=o.now-f;o.remainingTTL=c-O}});let n=0;const r=()=>{const o=Rt.now();if(this.ttlResolution>0){n=o;const h=setTimeout(()=>n=0,this.ttlResolution);h.unref&&h.unref()}return o};this.getRemainingTTL=o=>{const h=t(this,U).get(o);if(h===void 0)return 0;const c=e[h],f=i[h];if(!c||!f)return 1/0;const O=(n||r())-f;return c-O},g(this,tt,o=>{const h=i[o],c=e[o];return!!c&&!!h&&(n||r())-h>c})},Tt=new WeakMap,yt=new WeakMap,Mt=new WeakMap,tt=new WeakMap,Zt=new WeakSet,Oe=function(){const e=new Yt(t(this,nt));g(this,ot,0),g(this,ht,e),g(this,Ot,i=>{g(this,ot,t(this,ot)-e[i]),e[i]=0}),g(this,Ht,(i,n,r,o)=>{if(d(this,R,L).call(this,n))return 0;if(!wt(r))if(o){if(typeof o!="function")throw new TypeError("sizeCalculation must be a function");if(r=o(n,i),!wt(r))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return r}),g(this,jt,(i,n,r)=>{if(e[i]=n,t(this,J)){const o=t(this,J)-e[i];for(;t(this,ot)>o;)d(this,Wt,Kt).call(this,!0)}g(this,ot,t(this,ot)+e[i]),r&&(r.entrySize=n,r.totalCalculatedSize=t(this,ot))})},Ot=new WeakMap,jt=new WeakMap,Ht=new WeakMap,dt=new WeakSet,mt=function*({allowStale:e=this.allowStale}={}){if(t(this,I))for(let i=t(this,k);!(!d(this,Qt,he).call(this,i)||((e||!t(this,tt).call(this,i))&&(yield i),i===t(this,$)));)i=t(this,X)[i]},pt=new WeakSet,_t=function*({allowStale:e=this.allowStale}={}){if(t(this,I))for(let i=t(this,$);!(!d(this,Qt,he).call(this,i)||((e||!t(this,tt).call(this,i))&&(yield i),i===t(this,k)));)i=t(this,B)[i]},Qt=new WeakSet,he=function(e){return e!==void 0&&t(this,U).get(t(this,D)[e])===e},Wt=new WeakSet,Kt=function(e){var o,h;const i=t(this,$),n=t(this,D)[i],r=t(this,S)[i];return t(this,St)&&d(this,R,L).call(this,r)?r.__abortController.abort(new Error("evicted")):(t(this,ut)||t(this,Y))&&(t(this,ut)&&((o=t(this,rt))==null||o.call(this,r,n,"evict")),t(this,Y)&&((h=t(this,P))==null||h.push([r,n,"evict"]))),t(this,Ot).call(this,i),e&&(t(this,D)[i]=void 0,t(this,S)[i]=void 0,t(this,at).push(i)),t(this,I)===1?(g(this,$,g(this,k,0)),t(this,at).length=0):g(this,$,t(this,B)[i]),t(this,U).delete(n),Vt(this,I)._--,i},Gt=new WeakSet,Jt=function(e,i,n,r){const o=i===void 0?void 0:t(this,S)[i];if(d(this,R,L).call(this,o))return o;const h=new Xt,{signal:c}=n;c==null||c.addEventListener("abort",()=>h.abort(c.reason),{signal:h.signal});const f={signal:h.signal,options:n,context:r},O=(z,W=!1)=>{const{aborted:y}=h.signal,T=n.ignoreFetchAbort&&z!==void 0;if(n.status&&(y&&!W?(n.status.fetchAborted=!0,n.status.fetchError=h.signal.reason,T&&(n.status.fetchAbortIgnored=!0)):n.status.fetchResolved=!0),y&&!T&&!W)return x(h.signal.reason);const F=M;return t(this,S)[i]===M&&(z===void 0?F.__staleWhileFetching?t(this,S)[i]=F.__staleWhileFetching:this.delete(e):(n.status&&(n.status.fetchUpdated=!0),this.set(e,z,f.options))),z},Q=z=>(n.status&&(n.status.fetchRejected=!0,n.status.fetchError=z),x(z)),x=z=>{const{aborted:W}=h.signal,y=W&&n.allowStaleOnFetchAbort,T=y||n.allowStaleOnFetchRejection,F=T||n.noDeleteOnFetchRejection,p=M;if(t(this,S)[i]===M&&(!F||p.__staleWhileFetching===void 0?this.delete(e):y||(t(this,S)[i]=p.__staleWhileFetching)),T)return n.status&&p.__staleWhileFetching!==void 0&&(n.status.returnedStale=!0),p.__staleWhileFetching;if(p.__returned===p)throw z},G=(z,W)=>{var T;const y=(T=t(this,Dt))==null?void 0:T.call(this,e,o,f);y&&y instanceof Promise&&y.then(F=>z(F===void 0?void 0:F),W),h.signal.addEventListener("abort",()=>{(!n.ignoreFetchAbort||n.allowStaleOnFetchAbort)&&(z(void 0),n.allowStaleOnFetchAbort&&(z=F=>O(F,!0)))})};n.status&&(n.status.fetchDispatched=!0);const M=new Promise(G).then(O,Q),H=Object.assign(M,{__abortController:h,__staleWhileFetching:o,__returned:void 0});return i===void 0?(this.set(e,H,{...f.options,status:void 0}),i=t(this,U).get(e)):t(this,S)[i]=H,H},R=new WeakSet,L=function(e){if(!t(this,St))return!1;const i=e;return!!i&&i instanceof Promise&&i.hasOwnProperty("__staleWhileFetching")&&i.__abortController instanceof Xt},qt=new WeakSet,le=function(e,i){t(this,X)[i]=e,t(this,B)[e]=i},xt=new WeakSet,kt=function(e){e!==t(this,k)&&(e===t(this,$)?g(this,$,t(this,B)[e]):d(this,qt,le).call(this,t(this,X)[e],t(this,B)[e]),d(this,qt,le).call(this,t(this,k),e),g(this,k,e))};let oe=ce;var pe=Object.prototype.hasOwnProperty;function ue(s,e){var i,n;if(s===e)return!0;if(s&&e&&(i=s.constructor)===e.constructor){if(i===Date)return s.getTime()===e.getTime();if(i===RegExp)return s.toString()===e.toString();if(i===Array){if((n=s.length)===e.length)for(;n--&&ue(s[n],e[n]););return n===-1}if(!i||typeof s=="object"){n=0;for(i in s)if(pe.call(s,i)&&++n&&!pe.call(e,i)||!(i in e)||!ue(s[i],e[i]))return!1;return Object.keys(e).length===n}}return s!==s&&e!==e}var zt={REQUEST_START:"REQUEST_START",REQUEST_END:"REQUEST_END"},ge={manual:!1,useCache:!0,ssr:!0,autoCancel:!0},Nt=Ge();Nt.__ssrPromises;Nt.resetConfigure;Nt.configure;Nt.loadCache;Nt.serializeCache;Nt.clearCache;function We(s){return s&&s.nativeEvent&&s.nativeEvent instanceof Event}function ye(s){var e=it({},s);return delete e.cancelToken,JSON.stringify(e)}function ve(s){return typeof s=="string"?{url:s}:Object.assign({},s)}function Ge(s){var e,i,n,r=[];function o(){e=new oe({max:500}),i=_e,n=ge}function h(p){p===void 0&&(p={}),p.axios!==void 0&&(i=p.axios),p.cache!==void 0&&(e=p.cache),p.defaultOptions!==void 0&&(n=it({},ge,p.defaultOptions))}o(),h(s);function c(p){e.load(p)}function f(){return O.apply(this,arguments)}function O(){return O=ne(Ft.mark(function p(){var m;return Ft.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return m=[].concat(r),r.length=0,b.next=4,Promise.all(m);case 4:return b.abrupt("return",e.dump());case 5:case"end":return b.stop()}},p)})),O.apply(this,arguments)}function Q(){e.clear()}return Object.assign(F,{__ssrPromises:r,resetConfigure:o,configure:h,loadCache:c,serializeCache:f,clearCache:Q});function x(p,m){if(e){var _=ye(p),b=it({},m);delete b.config,delete b.request,e.set(_,b)}}function G(p,m){var _=!m.manual&&H(p,m);return it({loading:!m.manual&&!_,error:null},_?{data:_.data,response:_}:null)}function M(p,m){var _;switch(m.type){case zt.REQUEST_START:return it({},p,{loading:!0,error:null});case zt.REQUEST_END:return it({},p,{loading:!1},m.error?{}:{data:m.payload.data,error:null},(_={},_[m.error?"error":"response"]=m.payload,_))}}function H(p,m,_){if(!(!e||!m.useCache)){var b=ye(p),q=e.get(b);return q&&_&&_({type:zt.REQUEST_END,payload:q}),q}}function z(p,m){return W.apply(this,arguments)}function W(){return W=ne(Ft.mark(function p(m,_){var b;return Ft.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.prev=0,_({type:zt.REQUEST_START}),C.next=4,i(m);case 4:return b=C.sent,x(m,b),_({type:zt.REQUEST_END,payload:b}),C.abrupt("return",b);case 10:throw C.prev=10,C.t0=C.catch(0),Re(C.t0)||_({type:zt.REQUEST_END,payload:C.t0,error:!0}),C.t0;case 14:case"end":return C.stop()}},p,null,[[0,10]])})),W.apply(this,arguments)}function y(p,m,_){return T.apply(this,arguments)}function T(){return T=ne(Ft.mark(function p(m,_,b){return Ft.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",H(m,_,b)||z(m,b));case 1:case"end":return C.stop()}},p)})),T.apply(this,arguments)}function F(p,m){var _=ft.useMemo(function(){return ve(p)},we(p)),b=ft.useMemo(function(){return it({},n,m)},we(m)),q=ft.useRef(),C=ft.useReducer(M,G(_,b)),et=C[0],Ut=C[1];typeof window>"u"&&b.ssr&&!b.manual&&F.__ssrPromises.push(i(_));var ct=ft.useCallback(function(){q.current&&q.current.abort()},[]),Ct=ft.useCallback(function(gt){return b.autoCancel&&ct(),q.current=new AbortController,gt.signal=q.current.signal,gt},[ct,b.autoCancel]);ft.useEffect(function(){return b.manual||y(Ct(_),b,Ut).catch(function(){}),function(){b.autoCancel&&ct()}},[_,b,Ct,ct]);var $t=ft.useCallback(function(gt,It){return gt=ve(gt),y(Ct(it({},_,We(gt)?null:gt)),it({useCache:!1},It),Ut)},[_,Ct]);return[et,$t,ct]}}function we(s){var e=ft.useRef(),i=ft.useRef(0);return ue(s,e.current)||(e.current=s,i.current+=1),[i.current]}export{Nt as u};