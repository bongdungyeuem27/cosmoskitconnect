function o(s){return new Promise(t=>{setTimeout(()=>{t(!0)},s)})}const a=100,E=1e3,n=1,S=5,_=10,i=30,N=60,T=60,O=300,d=600,c=1800,l=3600,p=3600,f=10800,h=21600,D=43200,m=86400,I=86400,R=259200,U=432e3,u=604800,H=2592e3,Y=604800,w=1209600,W=1814400,M=2419200,A=31536e3;function y(s){return s*E}function C(s){return Math.floor(s/E)}class F{constructor(){this.timestamps=new Map}start(t){if(this.timestamps.has(t))throw new Error(`Watch already started for label: ${t}`);this.timestamps.set(t,{started:Date.now()})}stop(t){const e=this.get(t);if(typeof e.elapsed<"u")throw new Error(`Watch already stopped for label: ${t}`);const r=Date.now()-e.started;this.timestamps.set(t,{started:e.started,elapsed:r})}get(t){const e=this.timestamps.get(t);if(typeof e>"u")throw new Error(`No timestamp found for label: ${t}`);return e}elapsed(t){const e=this.get(t);return e.elapsed||Date.now()-e.started}}class V{}export{U as FIVE_DAYS,O as FIVE_MINUTES,S as FIVE_SECONDS,M as FOUR_WEEKS,V as IWatch,I as ONE_DAY,p as ONE_HOUR,a as ONE_HUNDRED,T as ONE_MINUTE,n as ONE_SECOND,E as ONE_THOUSAND,Y as ONE_WEEK,A as ONE_YEAR,u as SEVEN_DAYS,l as SIXTY_MINUTES,N as SIXTY_SECONDS,h as SIX_HOURS,d as TEN_MINUTES,_ as TEN_SECONDS,H as THIRTY_DAYS,c as THIRTY_MINUTES,i as THIRTY_SECONDS,R as THREE_DAYS,f as THREE_HOURS,W as THREE_WEEKS,D as TWELVE_HOURS,m as TWENTY_FOUR_HOURS,w as TWO_WEEKS,F as Watch,o as delay,C as fromMiliseconds,y as toMiliseconds};
//# sourceMappingURL=index.es.js.map