(function(r,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(r=typeof globalThis<"u"?globalThis:r||self,i(r["@cosmoskitconnect/jsonrpc-utils"]={}))})(this,function(r){"use strict";const i="PARSE_ERROR",v="INVALID_REQUEST",y="METHOD_NOT_FOUND",_="INVALID_PARAMS",R="INTERNAL_ERROR",s="SERVER_ERROR",N=[-32700,-32600,-32601,-32602,-32603],d=[-32e3,-32099],t={[i]:{code:-32700,message:"Parse error"},[v]:{code:-32600,message:"Invalid Request"},[y]:{code:-32601,message:"Method not found"},[_]:{code:-32602,message:"Invalid params"},[R]:{code:-32603,message:"Internal error"},[s]:{code:-32e3,message:"Server error"}},c=s;function h(e){return e<=d[0]&&e>=d[1]}function l(e){return N.includes(e)}function I(e){return typeof e=="number"}function f(e){return Object.keys(t).includes(e)?t[e]:t[c]}function E(e){return Object.values(t).find(o=>o.code===e)||t[c]}function j(e){if(typeof e.error.code>"u")return{valid:!1,error:"Missing code for JSON-RPC error"};if(typeof e.error.message>"u")return{valid:!1,error:"Missing message for JSON-RPC error"};if(!I(e.error.code))return{valid:!1,error:`Invalid error code type for JSON-RPC: ${e.error.code}`};if(l(e.error.code)){const n=E(e.error.code);if(n.message!==t[c].message&&e.error.message===n.message)return{valid:!1,error:`Invalid error code message for JSON-RPC: ${e.error.code}`}}return{valid:!0}}function $(e,n,o){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${o} RPC url at ${n}`):e}function g(){return(global==null?void 0:global.crypto)||(global==null?void 0:global.msCrypto)||{}}function V(){const e=g();return e.subtle||e.webkitSubtle}function L(){return!!g()&&!!V()}function A(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}function p(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function M(){return!A()&&!p()}const B=p;var W=Object.defineProperty,F=Object.defineProperties,q=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,S=(e,n,o)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,Q=(e,n)=>{for(var o in n||(n={}))H.call(n,o)&&S(e,o,n[o]);if(D)for(var o of D(n))k.call(n,o)&&S(e,o,n[o]);return e},G=(e,n)=>F(e,q(n));class J{constructor(n){this.i=1;const o=n===8?new Uint8Array(1):n===16?new Uint16Array(1):new Uint32Array(1);this.initialValue=crypto.getRandomValues(o)[0]}getNextValue(){return this.initialValue+this.i++}}const z=new J(8),K=new J(16);function b(){const e=Date.now()*1e3,n=z.getNextValue();return e+n}function X(){const e=BigInt(Date.now())*BigInt(1e6),n=BigInt(K.getNextValue());return e+n}function Y(e,n,o){return{id:o||b(),jsonrpc:"2.0",method:e,params:n}}function Z(e,n){return{id:e,jsonrpc:"2.0",result:n}}function x(e,n,o){return{id:e,jsonrpc:"2.0",error:C(n,o)}}function C(e,n){return typeof e>"u"?f(R):(typeof e=="string"&&(e=G(Q({},f(s)),{message:e})),typeof n<"u"&&(e.data=n),l(e.code)&&(e=E(e.code)),e)}function ee(e){return e.includes("*")?a(e):!/\W/g.test(e)}function u(e){return e==="*"}function a(e){return u(e)?!0:!(!e.includes("*")||e.split("*").length!==2||e.split("*").filter(n=>n.trim()==="").length!==1)}function re(e){return!u(e)&&a(e)&&!e.split("*")[0].trim()}function ne(e){return!u(e)&&a(e)&&!e.split("*")[1].trim()}class O{}class oe extends O{constructor(n){super()}}class P extends O{constructor(){super()}}class te extends P{constructor(n){super()}}const ie="^https?:",se="^wss?:";function ce(e){const n=e.match(new RegExp(/^\w+:/,"gi"));if(!(!n||!n.length))return n[0]}function w(e,n){const o=ce(e);return typeof o>"u"?!1:new RegExp(n).test(o)}function ue(e){return w(e,ie)}function ae(e){return w(e,se)}function Re(e){return new RegExp("wss?://localhost(:d{2,5})?").test(e)}function m(e){return typeof e=="object"&&"id"in e&&"jsonrpc"in e&&e.jsonrpc==="2.0"}function de(e){return m(e)&&"method"in e}function le(e){return m(e)&&(T(e)||U(e))}function T(e){return"result"in e}function U(e){return"error"in e}function fe(e){return"error"in e&&e.valid===!1}r.DEFAULT_ERROR=c,r.IBaseJsonRpcProvider=P,r.IEvents=O,r.IJsonRpcConnection=oe,r.IJsonRpcProvider=te,r.INTERNAL_ERROR=R,r.INVALID_PARAMS=_,r.INVALID_REQUEST=v,r.METHOD_NOT_FOUND=y,r.PARSE_ERROR=i,r.RESERVED_ERROR_CODES=N,r.SERVER_ERROR=s,r.SERVER_ERROR_CODE_RANGE=d,r.STANDARD_ERROR_MAP=t,r.formatErrorMessage=C,r.formatJsonRpcError=x,r.formatJsonRpcRequest=Y,r.formatJsonRpcResult=Z,r.getBigIntRpcId=X,r.getBrowerCrypto=g,r.getError=f,r.getErrorByCode=E,r.getSubtleCrypto=V,r.isBrowser=M,r.isBrowserCryptoAvailable=L,r.isHttpUrl=ue,r.isJsonRpcError=U,r.isJsonRpcPayload=m,r.isJsonRpcRequest=de,r.isJsonRpcResponse=le,r.isJsonRpcResult=T,r.isJsonRpcValidationInvalid=fe,r.isLocalhostUrl=Re,r.isNode=p,r.isNodeJs=B,r.isReactNative=A,r.isReservedErrorCode=l,r.isServerErrorCode=h,r.isValidDefaultRoute=u,r.isValidErrorCode=I,r.isValidLeadingWildcardRoute=re,r.isValidRoute=ee,r.isValidTrailingWildcardRoute=ne,r.isValidWildcardRoute=a,r.isWsUrl=ae,r.parseConnectionError=$,r.payloadId=b,r.validateJsonRpcError=j,Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map