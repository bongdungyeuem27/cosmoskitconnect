(function(e,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(e=typeof globalThis<"u"?globalThis:e||self,r(e["@cosmoskitconnect/relay-api"]={}))})(this,function(e){"use strict";function r(i,s,u="string"){if(!i[s]||typeof i[s]!==u)throw new Error(`Missing or invalid "${s}" param`)}function f(i,s){let u=!0;return s.forEach(b=>{b in i||(u=!1)}),u}function R(i,s){return Array.isArray(i)?i.length===s:Object.keys(i).length===s}function P(i,s){return Array.isArray(i)?i.length>=s:Object.keys(i).length>=s}function t(i,s,u){return(u.length?P(i,s.length):R(i,s.length))?f(i,s):!1}function n(i,s,u="_"){const b=i.split(u);return b[b.length-1].trim().toLowerCase()===s.trim().toLowerCase()}function S(i){return a(i.method)&&c(i.params)}function a(i){return n(i,"subscribe")}function c(i){return t(i,["topic"],[])}function w(i){return h(i.method)&&o(i.params)}function h(i){return n(i,"publish")}function o(i){return t(i,["message","topic","ttl"],["prompt","tag"])}function _(i){return m(i.method)&&d(i.params)}function m(i){return n(i,"unsubscribe")}function d(i){return t(i,["id","topic"],[])}function q(i){return p(i.method)&&l(i.params)}function p(i){return n(i,"subscription")}function l(i){return t(i,["id","data"],[])}function g(i){if(!a(i.method))throw new Error("JSON-RPC Request has invalid subscribe method");if(!c(i.params))throw new Error("JSON-RPC Request has invalid subscribe params");const s=i.params;return r(s,"topic"),s}function M(i){if(!h(i.method))throw new Error("JSON-RPC Request has invalid publish method");if(!o(i.params))throw new Error("JSON-RPC Request has invalid publish params");const s=i.params;return r(s,"topic"),r(s,"message"),r(s,"ttl","number"),s}function E(i){if(!m(i.method))throw new Error("JSON-RPC Request has invalid unsubscribe method");if(!d(i.params))throw new Error("JSON-RPC Request has invalid unsubscribe params");const s=i.params;return r(s,"id"),s}function U(i){if(!p(i.method))throw new Error("JSON-RPC Request has invalid subscription method");if(!l(i.params))throw new Error("JSON-RPC Request has invalid subscription params");const s=i.params;return r(s,"id"),r(s,"data"),s}const k={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};e.RELAY_JSONRPC=k,e.isPublishMethod=h,e.isPublishParams=o,e.isPublishRequest=w,e.isSubscribeMethod=a,e.isSubscribeParams=c,e.isSubscribeRequest=S,e.isSubscriptionMethod=p,e.isSubscriptionParams=l,e.isSubscriptionRequest=q,e.isUnsubscribeMethod=m,e.isUnsubscribeParams=d,e.isUnsubscribeRequest=_,e.parsePublishRequest=M,e.parseSubscribeRequest=g,e.parseSubscriptionRequest=U,e.parseUnsubscribeRequest=E,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map
