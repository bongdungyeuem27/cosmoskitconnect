(function(r,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(r=typeof globalThis<"u"?globalThis:r||self,f(r["@cosmoskitconnect/encoding"]={}))})(this,function(r){"use strict";var f=B;B.strict=v,B.loose=S;var D=Object.prototype.toString,G={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function B(n){return v(n)||S(n)}function v(n){return n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Uint16Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array}function S(n){return G[D.call(n)]}/*! typedarray-to-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var J=function(t){return ArrayBuffer.isView(t)?Buffer.from(t.buffer,t.byteOffset,t.byteLength):Buffer.from(t)};const s="hex",d="utf8",K="binary",Q="buffer",X="array",Y="typed-array",p="array-buffer",i="0";function c(n){return new Uint8Array(n)}function g(n,t=!1){const e=n.toString(s);return t?A(e):e}function h(n){return n.toString(d)}function I(n){return n.readUIntBE(0,n.length)}function x(n){return y(c(n))}function o(n){return J(n)}function E(n,t=!1){return g(o(n),t)}function R(n){return h(o(n))}function l(n){return I(o(n))}function y(n){return Array.from(n).map(a).join("")}function U(n){return Buffer.from(m(n),s)}function H(n){return c(U(n))}function nn(n){return h(U(n))}function rn(n){return l(H(n))}function $(n){return y(H(n))}function j(n){return Buffer.from(n,d)}function F(n){return c(j(n))}function tn(n,t=!1){return g(j(n),t)}function en(n){const t=parseInt(n,10);return wn(jn(t),"Number can only safely store up to 53 bits"),t}function un(n){return y(F(n))}function fn(n){return P(a(n))}function on(n){return u(a(n))}function an(n,t){return w(a(n),t)}function cn(n){return`${n}`}function a(n){const t=(n>>>0).toString(2);return b(t)}function P(n){return o(u(n))}function u(n){return new Uint8Array(N(n).map(t=>parseInt(t,2)))}function w(n,t){return E(u(n),t)}function yn(n){return R(u(n))}function Tn(n){return l(u(n))}function z(n){return!(typeof n!="string"||!new RegExp(/^[01]+$/).test(n)||n.length%8!==0)}function O(n,t){return!(typeof n!="string"||!n.match(/^0x[0-9A-Fa-f]*$/)||t&&n.length!==2+2*t)}function T(n){return Buffer.isBuffer(n)}function L(n){return f.strict(n)&&!T(n)}function W(n){return!L(n)&&!T(n)&&typeof n.byteLength<"u"}function bn(n){return T(n)?Q:L(n)?Y:W(n)?p:Array.isArray(n)?X:typeof n}function mn(n){return z(n)?K:O(n)?s:d}function An(...n){return Buffer.concat(n)}function Bn(...n){let t=[];return n.forEach(e=>t=t.concat(Array.from(e))),new Uint8Array([...t])}function sn(n,t){const e=n.length-t;return e>0&&(n=n.slice(e)),n}function dn(n,t){return n.slice(0,t)}function C(n,t=8){const e=n%t;return e?(n-e)/t*t+t:n}function N(n,t=8){const e=b(n).match(new RegExp(`.{${t}}`,"gi"));return Array.from(e||[])}function Z(n){return N(n).map(Ln).join("")}function gn(n){return w(Z($(n)))}function b(n,t=8,e=i){return _(n,C(n.length,t),e)}function _(n,t,e=i){return k(n,t,!0,e)}function hn(n,t,e=i){return k(n,t,!1,e)}function m(n){return n.replace(/^0x/,"")}function A(n){return n.startsWith("0x")?n:`0x${n}`}function ln(n){return n=m(n),n=b(n,2),n&&(n=A(n)),n}function Un(n){const t=n.startsWith("0x");return n=m(n),n=n.startsWith(i)?n.substring(1):n,t?A(n):n}function Hn(n){return typeof n>"u"}function jn(n){return!Hn(n)}function wn(n,t){if(!n)throw new Error(t)}function Ln(n){return n.split("").reverse().join("")}function k(n,t,e,Nn=i){const M=t-n.length;let V=n;if(M>0){const q=Nn.repeat(M);V=e?q+n:n+q}return V}r.addHexPrefix=A,r.arrayToBinary=y,r.arrayToBuffer=o,r.arrayToHex=E,r.arrayToNumber=l,r.arrayToUtf8=R,r.binaryToArray=u,r.binaryToBuffer=P,r.binaryToHex=w,r.binaryToNumber=Tn,r.binaryToUtf8=yn,r.bufferToArray=c,r.bufferToBinary=x,r.bufferToHex=g,r.bufferToNumber=I,r.bufferToUtf8=h,r.calcByteLength=C,r.concatArrays=Bn,r.concatBuffers=An,r.getEncoding=mn,r.getType=bn,r.hexToArray=H,r.hexToBinary=$,r.hexToBuffer=U,r.hexToNumber=rn,r.hexToUtf8=nn,r.isArrayBuffer=W,r.isBinaryString=z,r.isBuffer=T,r.isHexString=O,r.isTypedArray=L,r.numberToArray=on,r.numberToBinary=a,r.numberToBuffer=fn,r.numberToHex=an,r.numberToUtf8=cn,r.padLeft=_,r.padRight=hn,r.removeHexLeadingZeros=Un,r.removeHexPrefix=m,r.sanitizeBytes=b,r.sanitizeHex=ln,r.splitBytes=N,r.swapBytes=Z,r.swapHex=gn,r.trimLeft=sn,r.trimRight=dn,r.utf8ToArray=F,r.utf8ToBinary=un,r.utf8ToBuffer=j,r.utf8ToHex=tn,r.utf8ToNumber=en,Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map
