import{IEvents as o}from"@cosmoskitconnect/events";import c,{EventEmitter as i}from"events";class n extends o{constructor(s){super(),this.opts=s,this.protocol="wc",this.version=2}}class l{constructor(s,t,e){this.core=s,this.logger=t}}class h extends o{constructor(s,t){super(),this.core=s,this.logger=t,this.records=new Map}}class a{constructor(s,t){this.logger=s,this.core=t}}class g extends o{constructor(s,t){super(),this.relayer=s,this.logger=t}}class u extends o{constructor(s){super()}}class p{constructor(s,t,e,f){this.core=s,this.logger=t,this.name=e}}class I{constructor(){this.map=new Map}}class d extends o{constructor(s,t){super(),this.relayer=s,this.logger=t}}class E{constructor(s,t){this.core=s,this.logger=t}}class x extends o{constructor(s,t){super(),this.core=s,this.logger=t}}class m{constructor(s,t){this.logger=s,this.core=t}}class y{constructor(s,t,e){this.core=s,this.logger=t,this.store=e}}class v{constructor(s,t){this.projectId=s,this.logger=t}}class C{constructor(s,t,e){this.core=s,this.logger=t,this.telemetryEnabled=e}}class b extends c{constructor(){super()}}class S{constructor(s){this.opts=s,this.protocol="wc",this.version=2}}class w extends i{constructor(){super()}}class M{constructor(s){this.client=s}}export{n as ICore,l as ICrypto,v as IEchoClient,M as IEngine,w as IEngineEvents,C as IEventClient,x as IExpirer,h as IJsonRpcHistory,E as IKeyChain,a as IMessageTracker,m as IPairing,g as IPublisher,u as IRelayer,S as ISignClient,b as ISignClientEvents,p as IStore,d as ISubscriber,I as ISubscriberTopicMap,y as IVerify};
//# sourceMappingURL=index.es.js.map