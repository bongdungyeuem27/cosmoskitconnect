const s=n=>JSON.stringify(n,(t,e)=>typeof e=="bigint"?e.toString()+"n":e),i=n=>{const t=new RegExp('(?<!")(?<=:)\\b(\\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))(?=[,\\}\\]]|$)',"g"),e=n.replace(t,o=>`"${o}n"`);return JSON.parse(e,(o,r)=>typeof r=="string"&&r.match(/^\d+n$/)?BigInt(r.substring(0,r.length-1)):r)};function f(n){if(typeof n!="string")throw new Error(`Cannot safe json parse value of type ${typeof n}`);try{return i(n)}catch(t){return console.error("safeJsonParse error:",t),n}}function a(n){return typeof n=="string"?n:s(n)||""}export{f as safeJsonParse,a as safeJsonStringify};
//# sourceMappingURL=index.es.js.map
