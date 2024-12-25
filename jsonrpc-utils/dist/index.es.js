import{isNode as w}from"@cosmoskitconnect/environment";export*from"@cosmoskitconnect/environment";export*from"@cosmoskitconnect/jsonrpc-types";const p="PARSE_ERROR",E="INVALID_REQUEST",g="METHOD_NOT_FOUND",m="INVALID_PARAMS",u="INTERNAL_ERROR",o="SERVER_ERROR",O=[-32700,-32600,-32601,-32602,-32603],a=[-32e3,-32099],t={[p]:{code:-32700,message:"Parse error"},[E]:{code:-32600,message:"Invalid Request"},[g]:{code:-32601,message:"Method not found"},[m]:{code:-32602,message:"Invalid params"},[u]:{code:-32603,message:"Internal error"},[o]:{code:-32e3,message:"Server error"}},i=o;function P(e){return e<=a[0]&&e>=a[1]}function d(e){return O.includes(e)}function N(e){return typeof e=="number"}function R(e){return Object.keys(t).includes(e)?t[e]:t[i]}function l(e){return Object.values(t).find(n=>n.code===e)||t[i]}function b(e){if(typeof e.error.code>"u")return{valid:!1,error:"Missing code for JSON-RPC error"};if(typeof e.error.message>"u")return{valid:!1,error:"Missing message for JSON-RPC error"};if(!N(e.error.code))return{valid:!1,error:`Invalid error code type for JSON-RPC: ${e.error.code}`};if(d(e.error.code)){const r=l(e.error.code);if(r.message!==t[i].message&&e.error.message===r.message)return{valid:!1,error:`Invalid error code message for JSON-RPC: ${e.error.code}`}}return{valid:!0}}function h(e,r,n){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${r}`):e}const J=w;var j=Object.defineProperty,U=Object.defineProperties,C=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,v=(e,r,n)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,L=(e,r)=>{for(var n in r||(r={}))T.call(r,n)&&v(e,n,r[n]);if(y)for(var n of y(r))x.call(r,n)&&v(e,n,r[n]);return e},M=(e,r)=>U(e,C(r));class I{constructor(r){this.i=1;const n=r===8?new Uint8Array(1):r===16?new Uint16Array(1):new Uint32Array(1);this.initialValue=crypto.getRandomValues(n)[0]}getNextValue(){return this.initialValue+this.i++}}const $=new I(8),B=new I(16);function _(){const e=Date.now()*1e3,r=$.getNextValue();return e+r}function F(){const e=BigInt(Date.now())*BigInt(1e6),r=BigInt(B.getNextValue());return e+r}function W(e,r,n){return{id:n||_(),jsonrpc:"2.0",method:e,params:r}}function q(e,r){return{id:e,jsonrpc:"2.0",result:r}}function H(e,r,n){return{id:e,jsonrpc:"2.0",error:V(r,n)}}function V(e,r){return typeof e>"u"?R(u):(typeof e=="string"&&(e=M(L({},R(o)),{message:e})),typeof r<"u"&&(e.data=r),d(e.code)&&(e=l(e.code)),e)}function Q(e){return e.includes("*")?c(e):!/\W/g.test(e)}function s(e){return e==="*"}function c(e){return s(e)?!0:!(!e.includes("*")||e.split("*").length!==2||e.split("*").filter(r=>r.trim()==="").length!==1)}function k(e){return!s(e)&&c(e)&&!e.split("*")[0].trim()}function G(e){return!s(e)&&c(e)&&!e.split("*")[1].trim()}const z="^https?:",K="^wss?:";function X(e){const r=e.match(new RegExp(/^\w+:/,"gi"));if(!(!r||!r.length))return r[0]}function A(e,r){const n=X(e);return typeof n>"u"?!1:new RegExp(r).test(n)}function Y(e){return A(e,z)}function Z(e){return A(e,K)}function ee(e){return new RegExp("wss?://localhost(:d{2,5})?").test(e)}function f(e){return typeof e=="object"&&"id"in e&&"jsonrpc"in e&&e.jsonrpc==="2.0"}function re(e){return f(e)&&"method"in e}function ne(e){return f(e)&&(D(e)||S(e))}function D(e){return"result"in e}function S(e){return"error"in e}function te(e){return"error"in e&&e.valid===!1}export{i as DEFAULT_ERROR,u as INTERNAL_ERROR,m as INVALID_PARAMS,E as INVALID_REQUEST,g as METHOD_NOT_FOUND,p as PARSE_ERROR,O as RESERVED_ERROR_CODES,o as SERVER_ERROR,a as SERVER_ERROR_CODE_RANGE,t as STANDARD_ERROR_MAP,V as formatErrorMessage,H as formatJsonRpcError,W as formatJsonRpcRequest,q as formatJsonRpcResult,F as getBigIntRpcId,R as getError,l as getErrorByCode,Y as isHttpUrl,S as isJsonRpcError,f as isJsonRpcPayload,re as isJsonRpcRequest,ne as isJsonRpcResponse,D as isJsonRpcResult,te as isJsonRpcValidationInvalid,ee as isLocalhostUrl,J as isNodeJs,d as isReservedErrorCode,P as isServerErrorCode,s as isValidDefaultRoute,N as isValidErrorCode,k as isValidLeadingWildcardRoute,Q as isValidRoute,G as isValidTrailingWildcardRoute,c as isValidWildcardRoute,Z as isWsUrl,h as parseConnectionError,_ as payloadId,b as validateJsonRpcError};
//# sourceMappingURL=index.es.js.map