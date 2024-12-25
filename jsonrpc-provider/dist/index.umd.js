(function(f,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(f=typeof globalThis<"u"?globalThis:f||self,a(f["@cosmoskitconnect/jsonrpc-provider"]={}))})(this,function(f){"use strict";var a={exports:{}},h=typeof Reflect=="object"?Reflect:null,p=h&&typeof h.apply=="function"?h.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},d;h&&typeof h.ownKeys=="function"?d=h.ownKeys:Object.getOwnPropertySymbols?d=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:d=function(e){return Object.getOwnPropertyNames(e)};function N(t){console&&console.warn&&console.warn(t)}var m=Number.isNaN||function(e){return e!==e};function c(){c.init.call(this)}a.exports=c,a.exports.once=T,c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var y=10;function v(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return y},set:function(t){if(typeof t!="number"||t<0||m(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");y=t}}),c.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||m(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function L(t){return t._maxListeners===void 0?c.defaultMaxListeners:t._maxListeners}c.prototype.getMaxListeners=function(){return L(this)},c.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var i=e==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var s;if(n.length>0&&(s=n[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var l=o[e];if(l===void 0)return!1;if(typeof l=="function")p(l,this,n);else for(var R=l.length,J=E(l,R),r=0;r<R;++r)p(J[r],this,n);return!0};function g(t,e,n,r){var i,o,s;if(v(n),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),s===void 0)s=o[e]=n,++t._eventsCount;else if(typeof s=="function"?s=o[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=L(t),i>0&&s.length>i&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,N(u)}return t}c.prototype.addListener=function(e,n){return g(this,e,n,!1)},c.prototype.on=c.prototype.addListener,c.prototype.prependListener=function(e,n){return g(this,e,n,!0)};function P(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function w(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=P.bind(r);return i.listener=n,r.wrapFn=i,i}c.prototype.once=function(e,n){return v(n),this.on(e,w(this,e,n)),this},c.prototype.prependOnceListener=function(e,n){return v(n),this.prependListener(e,w(this,e,n)),this},c.prototype.removeListener=function(e,n){var r,i,o,s,u;if(v(n),i=this._events,i===void 0)return this;if(r=i[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(o=-1,s=r.length-1;s>=0;s--)if(r[s]===n||r[s].listener===n){u=r[s].listener,o=s;break}if(o<0)return this;o===0?r.shift():A(r,o),r.length===1&&(i[e]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",e,u||n)}return this},c.prototype.off=c.prototype.removeListener,c.prototype.removeAllListeners=function(e){var n,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var o=Object.keys(r),s;for(i=0;i<o.length;++i)s=o[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(i=n.length-1;i>=0;i--)this.removeListener(e,n[i]);return this};function _(t,e,n){var r=t._events;if(r===void 0)return[];var i=r[e];return i===void 0?[]:typeof i=="function"?n?[i.listener||i]:[i]:n?M(i):E(i,i.length)}c.prototype.listeners=function(e){return _(this,e,!0)},c.prototype.rawListeners=function(e){return _(this,e,!1)},c.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):b.call(t,e)},c.prototype.listenerCount=b;function b(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}c.prototype.eventNames=function(){return this._eventsCount>0?d(this._events):[]};function E(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function A(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function M(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function T(t,e){return new Promise(function(n,r){function i(s){t.removeListener(e,o),r(s)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",i),n([].slice.call(arguments))}x(t,e,o,{once:!0}),e!=="error"&&I(t,i,{once:!0})})}function I(t,e,n){typeof t.on=="function"&&x(t,"error",e,n)}function x(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(o){r.once&&t.removeEventListener(e,i),n(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}class S{}class F extends S{constructor(){super()}}class V extends F{constructor(e){super()}}class O{constructor(e){this.i=1;const n=e===8?new Uint8Array(1):e===16?new Uint16Array(1):new Uint32Array(1);this.initialValue=crypto.getRandomValues(n)[0]}getNextValue(){return this.initialValue+this.i++}}const W=new O(8),$=new O(16);function K(){const t=Date.now()*1e3,e=W.getNextValue();return t+e}function U(){const t=BigInt(Date.now())*BigInt(1e6),e=BigInt($.getNextValue());return t+e}function B(t,e,n){return{id:n||K(),jsonrpc:"2.0",method:t,params:e}}function k(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function q(t){return k(t)&&(D(t)||j(t))}function D(t){return"result"in t}function j(t){return"error"in t}class C extends V{constructor(e){super(e),this.events=new a.exports.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(B(e.method,e.params||[],e.id||U().toString()),n)}async requestStrict(e,n){return new Promise(async(r,i)=>{if(!this.connection.connected)try{await this.open()}catch(o){i(o)}this.events.on(`${e.id}`,o=>{j(o)?i(o.error):r(o.result)});try{await this.connection.send(e,n)}catch(o){i(o)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),q(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}f.JsonRpcProvider=C,f.default=C,Object.defineProperty(f,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map