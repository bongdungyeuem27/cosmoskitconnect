"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("@cosmoskitconnect/events"),c=require("events");function i(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var n=i(c);class l extends o.IEvents{constructor(s){super(),this.opts=s,this.protocol="wc",this.version=2}}class a{constructor(s,e,r){this.core=s,this.logger=e}}class u extends o.IEvents{constructor(s,e){super(),this.core=s,this.logger=e,this.records=new Map}}class I{constructor(s,e){this.logger=s,this.core=e}}class h extends o.IEvents{constructor(s,e){super(),this.relayer=s,this.logger=e}}class g extends o.IEvents{constructor(s){super()}}class p{constructor(s,e,r,m){this.core=s,this.logger=e,this.name=r}}class E{constructor(){this.map=new Map}}class v extends o.IEvents{constructor(s,e){super(),this.relayer=s,this.logger=e}}class d{constructor(s,e){this.core=s,this.logger=e}}class y extends o.IEvents{constructor(s,e){super(),this.core=s,this.logger=e}}class C{constructor(s,e){this.logger=s,this.core=e}}class b{constructor(s,e,r){this.core=s,this.logger=e,this.store=r}}class f{constructor(s,e){this.projectId=s,this.logger=e}}class x{constructor(s,e,r){this.core=s,this.logger=e,this.telemetryEnabled=r}}class S extends n.default{constructor(){super()}}class M{constructor(s){this.opts=s,this.protocol="wc",this.version=2}}class P extends c.EventEmitter{constructor(){super()}}class _{constructor(s){this.client=s}}exports.ICore=l,exports.ICrypto=a,exports.IEchoClient=f,exports.IEngine=_,exports.IEngineEvents=P,exports.IEventClient=x,exports.IExpirer=y,exports.IJsonRpcHistory=u,exports.IKeyChain=d,exports.IMessageTracker=I,exports.IPairing=C,exports.IPublisher=h,exports.IRelayer=g,exports.ISignClient=M,exports.ISignClientEvents=S,exports.IStore=p,exports.ISubscriber=v,exports.ISubscriberTopicMap=E,exports.IVerify=b;
//# sourceMappingURL=index.cjs.js.map