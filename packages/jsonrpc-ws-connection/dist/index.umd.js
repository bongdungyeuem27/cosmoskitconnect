(function(c,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(c=typeof globalThis<"u"?globalThis:c||self,a(c["@cosmoskitconnect/jsonrpc-ws-connection"]={}))})(this,function(c){"use strict";var a={exports:{}},d=typeof Reflect=="object"?Reflect:null,g=d&&typeof d.apply=="function"?d.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},h;d&&typeof d.ownKeys=="function"?h=d.ownKeys:Object.getOwnPropertySymbols?h=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:h=function(e){return Object.getOwnPropertyNames(e)};function U(t){console&&console.warn&&console.warn(t)}var m=Number.isNaN||function(e){return e!==e};function f(){f.init.call(this)}a.exports=f,a.exports.once=D,f.EventEmitter=f,f.prototype._events=void 0,f.prototype._eventsCount=0,f.prototype._maxListeners=void 0;var w=10;function v(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(f,"defaultMaxListeners",{enumerable:!0,get:function(){return w},set:function(t){if(typeof t!="number"||t<0||m(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");w=t}}),f.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},f.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||m(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function b(t){return t._maxListeners===void 0?f.defaultMaxListeners:t._maxListeners}f.prototype.getMaxListeners=function(){return b(this)},f.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(n.length>0&&(o=n[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw u.context=o,u}var p=s[e];if(p===void 0)return!1;if(typeof p=="function")g(p,this,n);else for(var T=p.length,we=R(p,T),r=0;r<T;++r)g(we[r],this,n);return!0};function L(t,e,n,r){var i,s,o;if(v(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),o===void 0)o=s[e]=n,++t._eventsCount;else if(typeof o=="function"?o=s[e]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),i=b(t),i>0&&o.length>i&&!o.warned){o.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=o.length,U(u)}return t}f.prototype.addListener=function(e,n){return L(this,e,n,!1)},f.prototype.on=f.prototype.addListener,f.prototype.prependListener=function(e,n){return L(this,e,n,!0)};function $(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function E(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=$.bind(r);return i.listener=n,r.wrapFn=i,i}f.prototype.once=function(e,n){return v(n),this.on(e,E(this,e,n)),this},f.prototype.prependOnceListener=function(e,n){return v(n),this.prependListener(e,E(this,e,n)),this},f.prototype.removeListener=function(e,n){var r,i,s,o,u;if(v(n),i=this._events,i===void 0)return this;if(r=i[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(s=-1,o=r.length-1;o>=0;o--)if(r[o]===n||r[o].listener===n){u=r[o].listener,s=o;break}if(s<0)return this;s===0?r.shift():F(r,s),r.length===1&&(i[e]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",e,u||n)}return this},f.prototype.off=f.prototype.removeListener,f.prototype.removeAllListeners=function(e){var n,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var s=Object.keys(r),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(i=n.length-1;i>=0;i--)this.removeListener(e,n[i]);return this};function O(t,e,n){var r=t._events;if(r===void 0)return[];var i=r[e];return i===void 0?[]:typeof i=="function"?n?[i.listener||i]:[i]:n?V(i):R(i,i.length)}f.prototype.listeners=function(e){return O(this,e,!0)},f.prototype.rawListeners=function(e){return O(this,e,!1)},f.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):_.call(t,e)},f.prototype.listenerCount=_;function _(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}f.prototype.eventNames=function(){return this._eventsCount>0?h(this._events):[]};function R(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function F(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function V(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function D(t,e){return new Promise(function(n,r){function i(o){t.removeListener(e,s),r(o)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",i),n([].slice.call(arguments))}x(t,e,s,{once:!0}),e!=="error"&&K(t,i,{once:!0})})}function K(t,e,n){typeof t.on=="function"&&x(t,"error",e,n)}function x(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(s){r.once&&t.removeEventListener(e,i),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}const H=t=>JSON.stringify(t,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),J=t=>{const e=new RegExp('(?<!")(?<=:)\\b(\\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))(?=[,\\}\\]]|$)',"g"),n=t.replace(e,r=>`"${r}n"`);return JSON.parse(n,(r,i)=>typeof i=="string"&&i.match(/^\d+n$/)?BigInt(i.substring(0,i.length-1)):i)};function q(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return J(t)}catch(e){return console.error("safeJsonParse error:",e),t}}function B(t){return typeof t=="string"?t:H(t)||""}function Q(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}const z="PARSE_ERROR",X="INVALID_REQUEST",Z="METHOD_NOT_FOUND",G="INVALID_PARAMS",S="INTERNAL_ERROR",y="SERVER_ERROR",Y=[-32700,-32600,-32601,-32602,-32603],l={[z]:{code:-32700,message:"Parse error"},[X]:{code:-32600,message:"Invalid Request"},[Z]:{code:-32601,message:"Method not found"},[G]:{code:-32602,message:"Invalid params"},[S]:{code:-32603,message:"Internal error"},[y]:{code:-32e3,message:"Server error"}},k=y;function ee(t){return Y.includes(t)}function j(t){return Object.keys(l).includes(t)?l[t]:l[k]}function te(t){return Object.values(l).find(e=>e.code===t)||l[k]}function ne(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var re=Object.defineProperty,ie=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,N=(t,e,n)=>e in t?re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ue=(t,e)=>{for(var n in e||(e={}))se.call(e,n)&&N(t,n,e[n]);if(C)for(var n of C(e))fe.call(e,n)&&N(t,n,e[n]);return t},ce=(t,e)=>ie(t,oe(e));class P{constructor(e){this.i=1;const n=e===8?new Uint8Array(1):e===16?new Uint16Array(1):new Uint32Array(1);this.initialValue=crypto.getRandomValues(n)[0]}getNextValue(){return this.initialValue+this.i++}}new P(8),new P(16);function ae(t,e,n){return{id:t,jsonrpc:"2.0",error:de(e,n)}}function de(t,e){return typeof t>"u"?j(S):(typeof t=="string"&&(t=ce(ue({},j(y)),{message:t})),typeof e<"u"&&(t.data=e),ee(t.code)&&(t=te(t.code)),t)}const le="^wss?:";function pe(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function he(t,e){const n=pe(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function W(t){return he(t,le)}function ve(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}const ye=()=>typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:require("ws"),ge=()=>typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",M=t=>t.split("?")[0],A=10,me=ye();class I{constructor(e){if(this.url=e,this.events=new a.exports.EventEmitter,this.registering=!1,!W(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,n)=>{if(typeof this.socket>"u"){n(new Error("Connection already closed"));return}this.socket.onclose=r=>{this.onClose(r),e()},this.socket.close()})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(B(e))}catch(n){this.onError(e.id,n)}}register(e=this.url){if(!W(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((r,i)=>{this.events.once("register_error",s=>{this.resetMaxListeners(),i(s)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return i(new Error("WebSocket connection is missing or invalid"));r(this.socket)})})}return this.url=e,this.registering=!0,new Promise((n,r)=>{const i=Q()?void 0:{rejectUnauthorized:!ve(e)},s=new me(e,[],i);ge()?s.onerror=o=>{const u=o;r(this.emitError(u.error))}:s.on("error",o=>{r(this.emitError(o))}),s.onopen=()=>{this.onOpen(s),n(s)}})}onOpen(e){e.onmessage=n=>this.onPayload(n),e.onclose=n=>this.onClose(n),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?q(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const r=this.parseError(n),i=r.message||r.toString(),s=ae(e,i);this.events.emit("payload",s)}parseError(e,n=this.url){return ne(e,M(n),"WS")}resetMaxListeners(){this.events.getMaxListeners()>A&&this.events.setMaxListeners(A)}emitError(e){const n=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${M(this.url)}`));return this.events.emit("register_error",n),n}}c.WsConnection=I,c.default=I,Object.defineProperty(c,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map