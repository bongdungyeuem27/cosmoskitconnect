"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var l=require("@cosmoskitconnect/safe-json"),S=require("fs");function k(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var d=k(S);function _(){try{const t=require("unstorage"),e=require("unstorage/drivers/fs-lite");return{db:t,driver:e}}catch{throw new Error(`To use WalletConnect server side, you'll need to install the "unstorage" dependency. If you are seeing this error during a build / in an SSR environment, you can add "unstorage" as a devDependency to make this error go away.`)}}let r;const h=":memory:",n=class{constructor(t){this.writeActionsQueue={state:"idle",actions:[]},r||(r=_()),t?.dbName===h?this.database=r.db.createStorage():this.database=r.db.createStorage({driver:r.driver({base:t?.dbName})})}static create(t){const e=t.dbName;return e===h?new n(t):(n.instances[e]||(n.instances[e]=new n(t)),n.instances[e])}async getKeys(){return this.database.getKeys()}async getEntries(){return(await this.database.getItems(await this.database.getKeys())).map(t=>[t.key,t.value])}async onWriteAction(t){const{key:e,value:a,action:i}=t;let s=()=>({});const o=new Promise(c=>s=c);this.writeActionsQueue.actions.push({key:e,value:a,action:i,callback:s}),this.writeActionsQueue.state==="idle"&&this.startWriteActions(),await o}async startWriteActions(){if(this.writeActionsQueue.actions.length===0){this.writeActionsQueue.state="idle";return}for(this.writeActionsQueue.state="active";this.writeActionsQueue.actions.length>0;){const t=this.writeActionsQueue.actions.shift();if(!t)continue;const{key:e,value:a,action:i,callback:s}=t;switch(i){case"setItem":await this.database.setItem(e),await this.database.setItem(e,l.safeJsonStringify(a));break;case"removeItem":await this.database.removeItem(e);break}s()}this.writeActionsQueue.state="idle"}async getItem(t){const e=await this.database.getItem(t);if(e!==null)return e}async setItem(t,e){await this.onWriteAction({key:t,value:e,action:"setItem"})}async removeItem(t){await this.onWriteAction({key:t,action:"removeItem"})}};let f=n;f.instances={};const $="wc_storage_version",m=".to_migrate",p=".migrated",v=1,K=async(t,e,a)=>{var i;if(t===h){a();return}const s=$,o=await e.getItem(s);if(o&&o>=v){a();return}const c=await Q(`${t}${m}`);if(!c){a();return}const y=l.safeJsonParse(c);if(!y){a();return}const w=(i=y?.collections)==null?void 0:i[0],u=w?.data;if(!u||!u.length){a();return}for(;u.length;){const g=u.shift();if(!g)continue;const{id:A,value:z}=g;await e.setItem(A,l.safeJsonParse(z))}await e.setItem(s,v),b(`${t}${m}`,`${t}${p}`),a()},Q=async t=>await new Promise(e=>{d.default.readFile(t,{encoding:"utf8"},(a,i)=>{a&&e(void 0),e(i)})}),E=t=>{t!==h&&d.default.existsSync(t)&&(d.default.lstatSync(t).isDirectory()||b(t,`${t}${m}`))},b=(t,e)=>{try{d.default.renameSync(t,e)}catch{}},P="walletconnect.db";class I{constructor(e){this.initialized=!1,this.setInitialized=()=>{this.initialized=!0};const a=e?.database||e?.table||P;E(a),this.database=f.create({dbName:a}),K(a,this.database,this.setInitialized)}async getKeys(){return await this.initialize(),this.database.getKeys()}async getEntries(){return await this.initialize(),this.database.getEntries()}async getItem(e){return await this.initialize(),this.database.getItem(e)}async setItem(e,a){await this.initialize(),await this.database.setItem(e,a)}async removeItem(e){await this.initialize(),await this.database.removeItem(e)}async initialize(){this.initialized||await new Promise(e=>{const a=setInterval(()=>{this.initialized&&(clearInterval(a),e())},20)})}}class W{}function J(t){var e;return[t[0],l.safeJsonParse((e=t[1])!=null?e:"")]}exports.IKeyValueStorage=W,exports.KeyValueStorage=I,exports.default=I,exports.parseEntry=J;
//# sourceMappingURL=index.cjs.js.map
