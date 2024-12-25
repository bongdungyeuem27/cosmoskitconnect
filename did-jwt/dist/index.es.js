import*as u from"@noble/ed25519";import C from"bs58";function F(r,e){if(r.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),n=0;n<t.length;n++)t[n]=255;for(var a=0;a<r.length;a++){var g=r.charAt(a),_=g.charCodeAt(0);if(t[_]!==255)throw new TypeError(g+" is ambiguous");t[_]=a}var E=r.length,O=r.charAt(0),K=Math.log(E)/Math.log(256),X=Math.log(256)/Math.log(E);function P(o){if(o instanceof Uint8Array||(ArrayBuffer.isView(o)?o=new Uint8Array(o.buffer,o.byteOffset,o.byteLength):Array.isArray(o)&&(o=Uint8Array.from(o))),!(o instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(o.length===0)return"";for(var i=0,b=0,d=0,h=o.length;d!==h&&o[d]===0;)d++,i++;for(var f=(h-d)*X+1>>>0,s=new Uint8Array(f);d!==h;){for(var l=o[d],y=0,c=f-1;(l!==0||y<b)&&c!==-1;c--,y++)l+=256*s[c]>>>0,s[c]=l%E>>>0,l=l/E>>>0;if(l!==0)throw new Error("Non-zero carry");b=y,d++}for(var p=f-b;p!==f&&s[p]===0;)p++;for(var A=O.repeat(i);p<f;++p)A+=r.charAt(s[p]);return A}function I(o){if(typeof o!="string")throw new TypeError("Expected String");if(o.length===0)return new Uint8Array;var i=0;if(o[i]!==" "){for(var b=0,d=0;o[i]===O;)b++,i++;for(var h=(o.length-i)*K+1>>>0,f=new Uint8Array(h);o[i];){var s=t[o.charCodeAt(i)];if(s===255)return;for(var l=0,y=h-1;(s!==0||l<d)&&y!==-1;y--,l++)s+=E*f[y]>>>0,f[y]=s%256>>>0,s=s/256>>>0;if(s!==0)throw new Error("Non-zero carry");d=l,i++}if(o[i]!==" "){for(var c=h-d;c!==h&&f[c]===0;)c++;for(var p=new Uint8Array(b+(h-c)),A=b;c!==h;)p[A++]=f[c++];return p}}}function W(o){var i=I(o);if(i)return i;throw new Error(`Non-${e} character`)}return{encode:P,decodeUnsafe:I,decode:W}}var H=F,V=H;const L=r=>{if(r instanceof Uint8Array&&r.constructor.name==="Uint8Array")return r;if(r instanceof ArrayBuffer)return new Uint8Array(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength);throw new Error("Unknown type, must be binary type")};class Y{constructor(e,t,n){this.name=e,this.prefix=t,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Z{constructor(e,t,n){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=n}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return S(this,e)}}class q{constructor(e){this.decoders=e}or(e){return S(this,e)}decode(e){const t=e[0],n=this.decoders[t];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const S=(r,e)=>new q({...r.decoders||{[r.prefix]:r},...e.decoders||{[e.prefix]:e}});class G{constructor(e,t,n,a){this.name=e,this.prefix=t,this.baseEncode=n,this.baseDecode=a,this.encoder=new Y(e,t,n),this.decoder=new Z(e,t,a)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Q=({name:r,prefix:e,encode:t,decode:n})=>new G(r,e,t,n),M=({prefix:r,name:e,alphabet:t})=>{const{encode:n,decode:a}=V(t,e);return Q({prefix:r,name:e,encode:n,decode:g=>L(a(g))})},$=M({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"});M({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});const k=864e5,m="key",w=":",D="did",J="pkh",U=".",R="K36",z="Jxg",x=r=>r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),T=(r,e)=>{const t=new Uint8Array(r.length+e.length);return t.set(r),t.set(e,r.length),t},N=r=>Object.getPrototypeOf(r)===Object.prototype&&Object.keys(r).length,v=r=>{if(!N(r))throw new Error(`Supplied object is not valid ${JSON.stringify(r)}`);return x(Buffer.from(new TextEncoder().encode(JSON.stringify(r))).toString("base64"))},ee=r=>`${D}${w}${J}${w}${r}`,re=r=>r+k,j=(r,e,t)=>{const n=x(Buffer.from(t).toString("base64"));return`${v(r)}${U}${v(e)}${U}${n}`},B=(r,e)=>{const t=v(r),n=v(e);return`${t}${U}${n}`},te=r=>{const e=C.decode(R),t=u.utils.hexToBytes(r),n=$.encode(T(e,t));return`${D}${w}${m}${w}${n}`},ne=r=>{var e;const t=(e=r.split(w).pop())!=null?e:"",n=u.utils.bytesToHex($.decode(t));if(!n.startsWith("ed01"))throw Error("Invalid Ed25519 key");return u.utils.hexToBytes(n.substring(4))},oe=r=>{const e=C.decode(z),t=u.utils.hexToBytes(r),n=$.encode(T(e,t));return`${D}${w}${m}${w}${n}`},ie=r=>{var e;const t=(e=r.split(w).pop())!=null?e:"",n=u.utils.bytesToHex($.decode(t));if(!n.startsWith("ec01"))throw Error("Invalid X25519 key");return u.utils.hexToBytes(n.substring(4))},se=async(r,e)=>{const[,t]=r,n={alg:"EdDSA",typ:"JWT"},a=new TextEncoder().encode(B(n,e)),g=await u.sign(a,t);return j(n,e,g)};export{k as DAY_IN_MS,w as DID_DELIMITER,m as DID_METHOD_KEY,J as DID_METHOD_PKH,D as DID_PREFIX,U as JWT_DELIMITER,R as MULTICODEC_ED25519_HEADER,z as MULTICODEC_X25519_HEADER,ee as composeDidPkh,T as concatUInt8Arrays,ne as decodeEd25519Key,ie as decodeX25519Key,B as encodeData,te as encodeEd25519Key,j as encodeJwt,oe as encodeX25519Key,se as generateJWT,N as isValidObject,re as jwtExp,x as makeBase64UrlSafe,v as objectToHex};
//# sourceMappingURL=index.es.js.map