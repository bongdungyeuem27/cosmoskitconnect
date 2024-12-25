"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var l=require("isomorphic-unfetch");function g(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var n=g(l);const i="https://history.walletconnect.com",y=86400*1e3;class c{constructor(e,t){this.core=e,this.messageResponse=t}async injectIntoRelayer(){const{messages:e,topic:t}=this.messageResponse;for(const{message:r}of e)this.core.relayer.messages.has(t,r)||(await this.core.relayer.messages.set(t,r),this.core.relayer.events.emit("relayer_message",{topic:t,publishedAt:Date.now(),message:r}))}}class w{constructor(e,t=i){this.core=e,this.historyUrl=t,this.jwt=""}async registerTags(e,t=i){try{await n.default(`${t}/register`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:`Bearer ${await this.getJwt()}`}})}catch(r){throw new Error(`[HistoryClient] Failed to register tags: ${JSON.stringify(r)}`)}}async getMessages(e,t=i){const r=Object.entries(e).map(([a,o])=>[a,o.toString()]),h=new URLSearchParams(r);try{const a=`${t}/messages?${h.toString()}`,o=await(await n.default(a,{method:"GET",headers:{"Content-Type":"application/json"}})).json();return new c(this.core,o)}catch(a){throw new Error(`[HistoryClient] Failed to fetch messages: ${JSON.stringify(a)}`)}}async getJwt(){return this.jwt?this.jwt:(this.jwt=await this.core.crypto.signJWT(this.historyUrl),this.jwt)}}exports.DAY_IN_MS=y,exports.DEFAULT_HISTORY_URL=i,exports.HistoricalMessages=c,exports.HistoryClient=w;
//# sourceMappingURL=index.cjs.js.map