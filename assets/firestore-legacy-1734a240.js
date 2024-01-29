System.register(["./makeStyle-legacy-0f5d17e5.js","./vendor-legacy-11a7b592.js"],(function(t,e){"use strict";var n,r,s,i;return{setters:[t=>{n=t.r,r=t.i},t=>{s=t.j,i=t.ak}],execute:function(){t({a:async function(t,e){const n=await qd(t);if(t){if(n?.[0]?.id)return Dd(El(Ud,"users",n?.[0]?.id),{wantToContact:!0,time:vi.now().toDate().getTime()});{const n=El(Ud,"contactsName","uNJW3Y2cU8nbX6u9gzP5"),r=El(Ud,"contactsPhone","9Pn6dgJeRyjH9XVIW0Qj"),s=await Id(n),i=await Id(r),o=s.data()?.values.split(";"),a=i.data()?.values.split(";");return o.push(e),a.push(t),Ad(n,{values:o.join(";")}),Ad(r,{values:a.join(";")}),Ad(El(Ud,"users",Fd()),{name:e,phoneNumber:t,isOnTrial:!1,isPurchased:!1,isWannaTry:!1,wantToContact:!0,time:vi.now().toDate().getTime()})}}throw new Error("error: invalid_phone")},b:function(t,e){for(const r of e){const e=El(bl(Ud,t),r);Nd(pl((n=e).firestore,Sl),[new Ya(n._key,Fa.none())])}var n},c:function(t,e){const n=El(Ud,"subscribers",t);return Dd(n,{..."isBlocked"===e?{isBlocked:!0,isActive:!1}:{isActive:!0,isBlocked:!1}})},e:bl,g:function(t,e){const n=El(Ud,"users",t);return Dd(n,{..."trial"===e?{isOnTrial:!0,isPurchased:!1,isWannaTry:!1}:"purchased"===e?{isOnTrial:!1,isPurchased:!0,isWannaTry:!1}:"wannaTry"===e?{isOnTrial:!1,isPurchased:!1,isWannaTry:!0}:{isOnTrial:!1,isPurchased:!1,isWannaTry:!1}})},h:async function(t,e,n,r,s,i){const o=bl(Ud,"users"),a=id(o,hd("time","desc"));let c=id(a,dd(t));const u=await jd(void 0,Bd(a,{phoneNumber:r,name:s,status:i})),h=[],l=[];return n&&(c="forward"===e?id(o,hd("time","desc"),dd(t),pd(n)):id(o,hd("time","asc"),dd(t),ad("time",">",n.data()?.time))),c=Bd(c,{phoneNumber:r,name:s,status:i}),(await Cd(c)).forEach((t=>{"back"===e?(h.unshift(t),l.unshift({id:t.id,...t.data()})):(h.push(t),l.push({id:t.id,...t.data()}))})),{data:l,rawData:h,totalElements:u}},i:hd,j:Bd,k:jd,l:dd,m:async function(t,e){const n=function(t){return/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(t)?"valid email address":null}(t),r=await qd(void 0,void 0,t,"subscribers");if(n)return r?.[0]?.id?Dd(El(Ud,"subscribers",r?.[0].id),{isActive:!0}):Ad(El(Ud,"subscribers",Fd()),{name:e,email:t,isActive:!0,isBlocked:!1,time:vi.now().toDate().getTime()});throw new Error("error: invalid_email")},o:function(t,...e){var n,r,s;t=S(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Il(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Il(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,h;if(t instanceof wl)u=pl(t.firestore,Sl),h=Qo(t._key.path),c={next:n=>{e[o]&&e[o](kd(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=pl(t,vl);u=pl(n.firestore,Sl),h=n._query;const r=new Sd(u);c={next:t=>{e[o]&&e[o](new Ed(u,r,n,t))},error:e[o+1],complete:e[o+2]},nd(t._query)}return function(t,e,n,r){const s=new nl(r),i=new Nh(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Ih(await al(t),i))),()=>{s.Na(),t.asyncQueue.enqueueAndForget((async()=>Sh(await al(t),i)))}}(Cl(u),h,a,c)},q:id,r:async function(t,e,n,r,s,i){const o=bl(Ud,"subscribers"),a=id(o,hd("time","desc"));let c=id(a,dd(t));const u=await jd(void 0,Bd(a,{email:r,name:s,status:i})),h=[],l=[];return n&&(c="forward"===e?id(o,hd("time","desc"),dd(t),pd(n)):id(o,hd("time","asc"),dd(t),ad("time",">",n.data()?.time))),c=Bd(c,{email:r,name:s,status:i}),(await Cd(c)).forEach((t=>{"back"===e?(h.unshift(t),l.unshift({id:t.id,...t.data()})):(h.push(t),l.push({id:t.id,...t.data()}))})),{data:l,rawData:h,totalElements:u}},u:function(t){const e=El(Ud,"users",t);return Dd(e,{wantToContact:!1})}});var e={},o=r;Object.defineProperty(e,"__esModule",{value:!0}),t("d",e.default=void 0);var a=o(n()),c=s,u=(0,a.default)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t("d",e.default=u);
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const h=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(h(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length?n[t.charAt(s)]:0;++s;const o=s<t.length?n[t.charAt(s)]:64;++s;const a=s<t.length?n[t.charAt(s)]:64;if(++s,null==e||null==i||null==o||null==a)throw new d;const c=e<<2|i>>4;if(r.push(c),64!==o){const t=i<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f=function(t){return function(t){const e=h(t);return l.encodeByteArray(e,!0)}(t).replace(/\./g,"")},p=()=>
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i.global)return i.global;throw new Error("Unable to locate global object.")}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */().__FIREBASE_DEFAULTS__,g=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return l.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},m=()=>{try{return p()||(()=>{if(void 0===i.process||void 0===i.process.env)return;const t={}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||g()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},y=t=>{const e=(t=>{var e,n;return null===(n=null===(e=m())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=m())||void 0===t?void 0:t.config};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(E,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new _(r,o,n)}}const E=/\{\$([^}]+)}/g;function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(I(n)&&I(i)){if(!T(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function I(t){return null!==t&&"object"==typeof t}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function S(t){return t&&t._delegate?t._delegate:t}class C{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const A="[DEFAULT]";
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class D{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new w;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t))try{this.getOrInitializeService({instanceIdentifier:A})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=A){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=A){return this.instances.has(t)}getOptions(t=A){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(s)&&i.resolve(r);return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===A?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(t=A){return this.component?this.component.multipleInstances?t:A:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class N{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new D(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var k;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(k||(k={}));const R={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},x=k.INFO,O={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},M=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=O[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class L{constructor(t){this.name=t,this._logLevel=x,this._logHandler=M,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?R[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const P=(t,e)=>e.some((e=>t instanceof e));let F,V;const U=new WeakMap,B=new WeakMap,q=new WeakMap,j=new WeakMap,$=new WeakMap;let z={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return B.get(t);if("objectStoreNames"===e)return t.objectStoreNames||q.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function G(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(V||(V=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Q(this),e),H(U.get(this))}:function(...e){return H(t.apply(Q(this),e))}:function(e,...n){const r=t.call(Q(this),e,...n);return q.set(r,e.sort?e.sort():[e]),H(r)}}function K(t){return"function"==typeof t?G(t):(t instanceof IDBTransaction&&function(t){if(B.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));B.set(t,e)}(t),P(t,F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,z):t)}function H(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(H(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&U.set(e,t)})).catch((()=>{})),$.set(e,t),e}(t);if(j.has(t))return j.get(t);const e=K(t);return e!==t&&(j.set(t,e),$.set(e,t)),e}const Q=t=>$.get(t),W=["get","getKey","getAll","getAllKeys","count"],Y=["put","add","delete","clear"],X=new Map;function J(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(X.get(e))return X.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!W.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return X.set(e,i),i}var Z;Z=z,z={...Z,get:(t,e,n)=>J(t,e)||Z.get(t,e,n),has:(t,e)=>!!J(t,e)||Z.has(t,e)};
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class tt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const et="@firebase/app",nt="0.9.23",rt=new L("@firebase/app"),st="[DEFAULT]",it={[et]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ot=new Map,at=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(at.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;at.set(e,t);for(const n of ot.values())ct(n,t);return!0}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const ht=new b("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class lt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new C("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function dt(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const r=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),s=r.name;if("string"!=typeof s||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=v()),!n)throw ht.create("no-options");const i=ot.get(s);if(i){if(T(n,i.options)&&T(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new N(s);for(const c of at.values())o.addComponent(c);const a=new lt(n,r,o);return ot.set(s,a),a}function ft(t,e,n){var r;let s=null!==(r=it[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void rt.warn(t.join(" "))}ut(new C(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const pt="firebase-heartbeat-database",gt=1,mt="firebase-heartbeat-store";let yt=null;function vt(){return yt||(yt=function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=H(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(H(o.result),t.oldVersion,t.newVersion,H(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(pt,gt,{upgrade:(t,e)=>{0===e&&t.createObjectStore(mt)}}).catch((t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})}))),yt}async function wt(t,e){try{const n=(await vt()).transaction(mt,"readwrite"),r=n.objectStore(mt);await r.put(e,_t(t)),await n.done}catch(n){if(n instanceof _)rt.warn(n.message);else{const t=ht.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});rt.warn(t.message)}}}function _t(t){return`${t.name}!${t.options.appId}`}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class bt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Tt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t;const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Et();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Et(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),It(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),It(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=f(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Et(){return(new Date).toISOString().substring(0,10)}class Tt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await vt();return await e.transaction(mt).objectStore(mt).get(_t(t))}catch(e){if(e instanceof _)rt.warn(e.message);else{const t=ht.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});rt.warn(t.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return wt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return wt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function It(t){return f(JSON.stringify({version:2,heartbeats:t})).length}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var St;St="",ut(new C("platform-logger",(t=>new tt(t)),"PRIVATE")),ut(new C("heartbeat",(t=>new bt(t)),"PRIVATE")),ft(et,nt,St),ft(et,nt,"esm2017"),ft("fire-js","");var Ct,At="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.global?i.global:"undefined"!=typeof self?self:{},Dt=Dt||{},Nt=At||self;function kt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Rt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var xt="closure_uid_"+(1e9*Math.random()>>>0),Ot=0;function Mt(t,e,n){return t.call.apply(t.bind,arguments)}function Lt(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return(Pt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Mt:Lt).apply(null,arguments)}function Ft(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function Ut(){this.s=this.s,this.o=this.o}Ut.prototype.s=!1,Ut.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,xt)&&t[xt]||(t[xt]=++Ot))},Ut.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qt(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jt(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(kt(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function $t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$t.prototype.h=function(){this.defaultPrevented=!0};var zt=function(){if(!Nt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Nt.addEventListener("test",(()=>{}),e),Nt.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function Gt(t){return/^[\s\xa0]*$/.test(t)}function Kt(){var t=Nt.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return-1!=Kt().indexOf(t)}function Qt(t){return Qt[" "](t),t}Qt[" "]=function(){};var Wt,Yt,Xt,Jt=Ht("Opera"),Zt=Ht("Trident")||Ht("MSIE"),te=Ht("Edge"),ee=te||Zt,ne=Ht("Gecko")&&!(-1!=Kt().toLowerCase().indexOf("webkit")&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),re=-1!=Kt().toLowerCase().indexOf("webkit")&&!Ht("Edge");function se(){var t=Nt.document;return t?t.documentMode:void 0}t:{var ie="",oe=(Yt=Kt(),ne?/rv:([^\);]+)(\)|;)/.exec(Yt):te?/Edge\/([\d\.]+)/.exec(Yt):Zt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yt):re?/WebKit\/(\S+)/.exec(Yt):Jt?/(?:Version)[ \/]?(\S+)/.exec(Yt):void 0);if(oe&&(ie=oe?oe[1]:""),Zt){var ae=se();if(null!=ae&&ae>parseFloat(ie)){Wt=String(ae);break t}}Wt=ie}if(Nt.document&&Zt){var ce=se();Xt=ce||parseInt(Wt,10)||void 0}else Xt=void 0;var ue=Xt;function he(t,e){if($t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ne){t:{try{Qt(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:le[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&he.$.h.call(this)}}Vt(he,$t);var le={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),fe=0;function pe(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++fe,this.fa=this.ia=!1}function ge(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function me(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ye(t){const e={};for(const n in t)e[n]=t[n];return e}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<ve.length;e++)n=ve[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _e(t){this.src=t,this.g={},this.h=0}function be(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Bt(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ge(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ee(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}_e.prototype.add=function(t,e,n,r,s){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=Ee(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new pe(e,this.src,i,!!r,s)).ia=n,t.push(e)),e};var Te="closure_lm_"+(1e6*Math.random()|0),Ie={};function Se(t,e,n,r,s){if(r&&r.once)return Ae(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Se(t,e[i],n,r,s);return null}return n=Me(n),t&&t[de]?t.O(e,n,Rt(r)?!!r.capture:!!r,s):Ce(t,e,n,!1,r,s)}function Ce(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Rt(s)?!!s.capture:!!s,a=xe(t);if(a||(t[Te]=a=new _e(t)),(n=a.add(e,n,r,o,i)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Re;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)zt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ke(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Ae(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ae(t,e[i],n,r,s);return null}return n=Me(n),t&&t[de]?t.P(e,n,Rt(r)?!!r.capture:!!r,s):Ce(t,e,n,!0,r,s)}function De(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)De(t,e[i],n,r,s);else r=Rt(r)?!!r.capture:!!r,n=Me(n),t&&t[de]?(t=t.i,(e=String(e).toString())in t.g&&-1<(n=Ee(i=t.g[e],n,r,s))&&(ge(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--))):t&&(t=xe(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ee(e,n,r,s)),(n=-1<t?e[t]:null)&&Ne(n))}function Ne(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[de])be(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ke(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xe(e))?(be(n,t),0==n.h&&(n.src=null,e[Te]=null)):ge(t)}}}function ke(t){return t in Ie?Ie[t]:Ie[t]="on"+t}function Re(t,e){if(t.fa)t=!0;else{e=new he(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ne(t),t=n.call(r,e)}return t}function xe(t){return(t=t[Te])instanceof _e?t:null}var Oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Me(t){return"function"==typeof t?t:(t[Oe]||(t[Oe]=function(e){return t.handleEvent(e)}),t[Oe])}function Le(){Ut.call(this),this.i=new _e(this),this.S=this,this.J=null}function Pe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new $t(e,t);else if(e instanceof $t)e.target=e.target||t;else{var s=e;we(e=new $t(r,t),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Fe(o,r,!0,e)&&s}if(s=Fe(o=e.g=t,r,!0,e)&&s,s=Fe(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=Fe(o=e.g=n[i],r,!1,e)&&s}function Fe(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&be(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Vt(Le,Ut),Le.prototype[de]=!0,Le.prototype.removeEventListener=function(t,e,n,r){De(this,t,e,n,r)},Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ge(n[r]);delete e.g[t],e.h--}}this.J=null},Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ve=Nt.JSON.stringify;function Ue(){var t=Ke;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Be=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new qe),(t=>t.reset()));class qe{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function je(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $e(t){Nt.setTimeout((()=>{throw t}),0)}let ze,Ge=!1,Ke=new class{constructor(){this.h=this.g=null}add(t,e){const n=Be.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},He=()=>{const t=Nt.Promise.resolve(void 0);ze=()=>{t.then(Qe)}};var Qe=()=>{for(var t;t=Ue();){try{t.h.call(t.g)}catch(n){$e(n)}var e=Be;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ge=!1};function We(t,e){Le.call(this),this.h=t||1,this.g=e||Nt,this.j=Pt(this.qb,this),this.l=Date.now()}function Ye(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Xe(t,e,n){if("function"==typeof t)n&&(t=Pt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Nt.setTimeout(t,e||0)}function Je(t){t.g=Xe((()=>{t.g=null,t.i&&(t.i=!1,Je(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Vt(We,Le),(Ct=We.prototype).ga=!1,Ct.T=null,Ct.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pe(this,"tick"),this.ga&&(Ye(this),this.start()))}},Ct.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ct.N=function(){We.$.N.call(this),Ye(this),delete this.g};class Ze extends Ut{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(Nt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tn(t){Ut.call(this),this.h=t,this.g={}}Vt(tn,Ut);var en=[];function nn(t,e,n,r){Array.isArray(n)||(n&&(en[0]=n.toString()),n=en);for(var s=0;s<n.length;s++){var i=Se(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rn(t){me(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ne(t)}),t),t.g={}}function sn(){this.g=!0}function on(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ve(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}tn.prototype.N=function(){tn.$.N.call(this),rn(this)},tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},sn.prototype.Ea=function(){this.g=!1},sn.prototype.info=function(){};var an={},cn=null;function un(){return cn=cn||new Le}function hn(t){$t.call(this,an.Ta,t)}function ln(t){const e=un();Pe(e,new hn(e))}function dn(t,e){$t.call(this,an.STAT_EVENT,t),this.stat=e}function fn(t){const e=un();Pe(e,new dn(e,t))}function pn(t,e){$t.call(this,an.Ua,t),this.size=e}function gn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Nt.setTimeout((function(){t()}),e)}an.Ta="serverreachability",Vt(hn,$t),an.STAT_EVENT="statevent",Vt(dn,$t),an.Ua="timingevent",Vt(pn,$t);var mn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vn(){}function wn(t){return t.h||(t.h=t.i())}function _n(){}vn.prototype.h=null;var bn,En={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Tn(){$t.call(this,"d")}function In(){$t.call(this,"c")}function Sn(){}function Cn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new tn(this),this.P=Dn,t=ee?125:void 0,this.V=new We(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new An}function An(){this.i=null,this.g="",this.h=!1}Vt(Tn,$t),Vt(In,$t),Vt(Sn,vn),Sn.prototype.g=function(){return new XMLHttpRequest},Sn.prototype.i=function(){return{}},bn=new Sn;var Dn=45e3,Nn={},kn={};function Rn(t,e,n){t.L=1,t.v=Yn(Gn(e)),t.s=n,t.S=!0,xn(t,null)}function xn(t,e){t.G=Date.now(),Pn(t),t.A=Gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ur(n.i,"t",r),t.C=0,n=t.l.J,t.h=new An,t.g=us(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ze(Pt(t.Pa,t,t.g),t.O)),nn(t.U,t.g,"readystatechange",t.nb),e=t.I?ye(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ln(),function(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function On(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.l.Ha}function Mn(t,e,n){let r,s=!0;for(;!t.J&&t.C<n.length;){if(r=Ln(t,n),r==kn){4==e&&(t.o=4,fn(14),s=!1),on(t.j,t.m,null,"[Incomplete Response]");break}if(r==Nn){t.o=4,fn(15),on(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}on(t.j,t.m,r,null),qn(t,r)}On(t)&&r!=kn&&r!=Nn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),es(e),e.M=!0,fn(11))):(on(t.j,t.m,n,"[Invalid Chunked Response]"),Bn(t),Un(t))}function Ln(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?kn:(n=Number(e.substring(n,r)),isNaN(n)?Nn:(r+=1)+n>e.length?kn:(e=e.slice(r,r+n),t.C=r+n,e))}function Pn(t){t.Y=Date.now()+t.P,Fn(t,t.P)}function Fn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=gn(Pt(t.lb,t),e)}function Vn(t){t.B&&(Nt.clearTimeout(t.B),t.B=null)}function Un(t){0==t.l.H||t.J||ss(t.l,t)}function Bn(t){Vn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ye(t.V),rn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function qn(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||mr(n.i,t)))if(!t.K&&mr(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rs(n),Hr(n)}ts(n),fn(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=gn(Pt(n.ib,n),6e3));if(1>=gr(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else os(n,11)}else if((t.K||n.g==t)&&rs(n),!Gt(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const s=u[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(yr(i,i.h),i.h=null))}if(r.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Wn(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=cs(r,r.J?r.pa:null,r.Y),o.K){vr(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Vn(a),Pn(a)),r.g=o}else Zr(r);0<n.j.length&&Wr(n)}else"stop"!=u[0]&&"close"!=u[0]||os(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?os(n,7):Kr(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ln()}catch(u){}}function jn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(kt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(kt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(kt(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}(Ct=Cn.prototype).setTimeout=function(t){this.P=t},Ct.nb=function(t){t=t.target;const e=this.M;e&&3==Br(t)?e.l():this.Pa(t)},Ct.Pa=function(t){try{if(t==this.g)t:{const h=Br(this.g);var e=this.g.Ia();if(this.g.da(),!(3>h)&&(3!=h||ee||this.g&&(this.h.h||this.g.ja()||qr(this.g)))){this.J||4!=h||7==e||ln(),Vn(this);var n=this.g.da();this.ca=n;e:if(On(this)){var r=qr(this.g);t="";var s=r.length,i=4==Br(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Bn(this),Un(this);var o="";break e}this.h.i=new Nt.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gt(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fn(12),Bn(this),Un(this);break t}on(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qn(this,n)}this.S?(Mn(this,h,o),ee&&this.i&&3==h&&(nn(this.U,this.V,"tick",this.mb),this.V.start())):(on(this.j,this.m,o,null),qn(this,o)),4==h&&Bn(this),this.i&&!this.J&&(4==h?ss(this.l,this):(this.i=!1,Pn(this)))}else(function(t){const e={};t=(t.g&&2<=Br(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(Gt(t[r]))continue;var n=je(t[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fn(12)):(this.o=0,fn(13)),Bn(this),Un(this)}}}catch(h){}},Ct.mb=function(){if(this.g){var t=Br(this.g),e=this.g.ja();this.C<e.length&&(Vn(this),Mn(this,t,e),this.i&&4!=t&&Pn(this))}},Ct.cancel=function(){this.J=!0,Bn(this)},Ct.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(ln(),fn(17)),Bn(this),this.o=2,Un(this)):Fn(this,this.Y-t)};var $n=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zn){this.h=t.h,Kn(this,t.j),this.s=t.s,this.g=t.g,Hn(this,t.m),this.l=t.l;var e=t.i,n=new ir;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qn(this,n),this.o=t.o}else t&&(e=String(t).match($n))?(this.h=!1,Kn(this,e[1]||"",!0),this.s=Xn(e[2]||""),this.g=Xn(e[3]||"",!0),Hn(this,e[4]),this.l=Xn(e[5]||"",!0),Qn(this,e[6]||"",!0),this.o=Xn(e[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}function Gn(t){return new zn(t)}function Kn(t,e,n){t.j=n?Xn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qn(t,e,n){e instanceof ir?(t.i=e,function(t,e){e&&!t.j&&(or(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ar(this,e),ur(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Jn(e,rr)),t.i=new ir(e,t.h))}function Wn(t,e,n){t.i.set(e,n)}function Yn(t){return Wn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Zn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jn(e,tr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Jn(e,tr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Jn(n,"/"==n.charAt(0)?nr:er,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jn(n,sr)),t.join("")};var tr=/[#\/\?@]/g,er=/[#\?:]/g,nr=/[#\?]/g,rr=/[#\?@]/g,sr=/#/g;function ir(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function or(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ar(t,e){or(t),e=hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function cr(t,e){return or(t),e=hr(t,e),t.g.has(e)}function ur(t,e,n){ar(t,e),0<n.length&&(t.i=null,t.g.set(hr(t,e),qt(n)),t.h+=n.length)}function hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ct=ir.prototype).add=function(t,e){or(this),this.i=null,t=hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ct.forEach=function(t,e){or(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Ct.ta=function(){or(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},Ct.Z=function(t){or(this);let e=[];if("string"==typeof t)cr(this,t)&&(e=e.concat(this.g.get(hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ct.set=function(t,e){return or(this),this.i=null,cr(this,t=hr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ct.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Ct.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var lr=class{constructor(t,e){this.g=t,this.map=e}};function dr(t){this.l=t||fr,t=Nt.PerformanceNavigationTiming?0<(t=Nt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(Nt.g&&Nt.g.Ka&&Nt.g.Ka()&&Nt.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fr=10;function pr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gr(t){return t.h?1:t.g?t.g.size:0}function mr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yr(t,e){t.g?t.g.add(e):t.h=e}function vr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qt(t.i)}dr.prototype.cancel=function(){if(this.i=wr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var _r=class{stringify(t){return Nt.JSON.stringify(t,void 0)}parse(t){return Nt.JSON.parse(t,void 0)}};function br(){this.g=new _r}function Er(t,e,n){const r=n||"";try{jn(t,(function(t,n){let s=t;Rt(t)&&(s=Ve(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Tr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Ir(t){this.l=t.ec||null,this.j=t.ob||!1}function Sr(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vt(Ir,vn),Ir.prototype.g=function(){return new Sr(this.l,this.j)},Ir.prototype.i=function(t){return function(){return t}}({}),Vt(Sr,Le);var Cr=0;function Ar(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Dr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nr(t)}function Nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ct=Sr.prototype).open=function(t,e){if(this.readyState!=Cr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nr(this)},Ct.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Nt).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Ct.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dr(this)),this.readyState=Cr},Ct.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Nt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ar(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Ct.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dr(this):Nr(this),3==this.readyState&&Ar(this)}},Ct.Za=function(t){this.g&&(this.response=this.responseText=t,Dr(this))},Ct.Ya=function(t){this.g&&(this.response=t,Dr(this))},Ct.ka=function(){this.g&&Dr(this)},Ct.setRequestHeader=function(t,e){this.v.append(t,e)},Ct.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ct.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kr=Nt.JSON.parse;function Rr(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xr,this.L=this.M=!1}Vt(Rr,Le);var xr="",Or=/^https?$/i,Mr=["POST","PUT"];function Lr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pr(t),Vr(t)}function Pr(t){t.F||(t.F=!0,Pe(t,"complete"),Pe(t,"error"))}function Fr(t){if(t.h&&void 0!==Dt&&(!t.C[1]||4!=Br(t)||2!=t.da()))if(t.v&&4==Br(t))Xe(t.La,0,t);else if(Pe(t,"readystatechange"),4==Br(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var s=String(t.I).match($n)[1]||null;!s&&Nt.self&&Nt.self.location&&(s=Nt.self.location.protocol.slice(0,-1)),r=!Or.test(s?s.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var i=2<Br(t)?t.g.statusText:""}catch(o){i=""}t.j=i+" ["+t.da()+"]",Pr(t)}}finally{Vr(t)}}}function Vr(t,e){if(t.g){Ur(t);const r=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pe(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Ur(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Nt.clearTimeout(t.A),t.A=null)}function Br(t){return t.g?t.g.readyState:0}function qr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Hs){return null}}function jr(t){let e="";return me(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $r(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=jr(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Wn(t,e,n))}function zr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gr(t){this.Ga=0,this.j=[],this.l=new sn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zr("baseRetryDelayMs",5e3,t),this.hb=zr("retryDelaySeedMs",1e4,t),this.eb=zr("forwardChannelMaxRetries",2,t),this.xa=zr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new dr(t&&t.concurrentRequestLimit),this.Ja=new br,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kr(t){if(Qr(t),3==t.H){var e=t.W++,n=Gn(t.I);if(Wn(n,"SID",t.K),Wn(n,"RID",e),Wn(n,"TYPE","terminate"),Xr(t,n),(e=new Cn(t,t.l,e)).L=2,e.v=Yn(Gn(n)),n=!1,Nt.navigator&&Nt.navigator.sendBeacon)try{n=Nt.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&Nt.Image&&((new Image).src=e.v,n=!0),n||(e.g=us(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Pn(e)}as(t)}function Hr(t){t.g&&(es(t),t.g.cancel(),t.g=null)}function Qr(t){Hr(t),t.u&&(Nt.clearTimeout(t.u),t.u=null),rs(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Nt.clearTimeout(t.m),t.m=null)}function Wr(t){if(!pr(t.i)&&!t.m){t.m=!0;var e=t.Na;ze||He(),Ge||(ze(),Ge=!0),Ke.add(e,t),t.C=0}}function Yr(t,e){var n;n=e?e.m:t.W++;const r=Gn(t.I);Wn(r,"SID",t.K),Wn(r,"RID",n),Wn(r,"AID",t.V),Xr(t,r),t.o&&t.s&&$r(r,t.o,t.s),n=new Cn(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yr(t.i,n),Rn(n,r,e)}function Xr(t,e){t.na&&me(t.na,(function(t,n){Wn(e,n,t)})),t.h&&jn({},(function(t,n){Wn(e,n,t)}))}function Jr(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Pt(t.h.Va,t.h,t):null;t:{var s=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{Er(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zr(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ze||He(),Ge||(ze(),Ge=!0),Ke.add(e,t),t.A=0}}function ts(t){return!(t.g||t.u||3<=t.A||(t.ba++,t.u=gn(Pt(t.Ma,t),is(t,t.A)),t.A++,0))}function es(t){null!=t.B&&(Nt.clearTimeout(t.B),t.B=null)}function ns(t){t.g=new Cn(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);Wn(e,"RID","rpc"),Wn(e,"SID",t.K),Wn(e,"AID",t.V),Wn(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Wn(e,"TO",t.qa),Wn(e,"TYPE","xmlhttp"),Xr(t,e),t.o&&t.s&&$r(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Yn(Gn(e)),n.s=null,n.S=!0,xn(n,t)}function rs(t){null!=t.v&&(Nt.clearTimeout(t.v),t.v=null)}function ss(t,e){var n=null;if(t.g==e){rs(t),es(t),t.g=null;var r=2}else{if(!mr(t.i,e))return;n=e.F,vr(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;Pe(r=un(),new pn(r,n)),Wr(t)}else Zr(t);else if(3==(s=e.o)||0==s&&0<e.ca||!(1==r&&function(t,e){return!(gr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=gn(Pt(t.Na,t,e),is(t,t.C)),t.C++,0)))}(t,e)||2==r&&ts(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}function is(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function os(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=Pt(t.pb,t);n||(n=new zn("//www.google.com/images/cleardot.gif"),Nt.location&&"http"==Nt.location.protocol||Kn(n,"https"),Yn(n)),function(t,e){const n=new sn;if(Nt.Image){const r=new Image;r.onload=Ft(Tr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ft(Tr,n,r,"TestLoadImage: error",!1,e),r.onabort=Ft(Tr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ft(Tr,n,r,"TestLoadImage: timeout",!1,e),Nt.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else fn(2);t.H=0,t.h&&t.h.za(e),as(t),Qr(t)}function as(t){if(t.H=0,t.ma=[],t.h){const e=wr(t.i);0==e.length&&0==t.j.length||(jt(t.ma,e),jt(t.ma,t.j),t.i.i.length=0,qt(t.j),t.j.length=0),t.h.ya()}}function cs(t,e,n){var r=n instanceof zn?Gn(n):new zn(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Hn(r,r.m);else{var s=Nt.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new zn(null);r&&Kn(i,r),e&&(i.g=e),s&&Hn(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Wn(r,n,e),Wn(r,"VER",t.ra),Xr(t,r),r}function us(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Rr(new Ir({ob:!0})):new Rr(t.va)).Oa(t.J),e}function hs(){}function ls(){if(Zt&&!(10<=Number(ue)))throw Error("Environmental error: no available transport.")}function ds(t,e){Le.call(this),this.g=new Gr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Gt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gt(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new gs(this)}function fs(t){Tn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ps(){In.call(this),this.status=1}function gs(t){this.g=t}function ms(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ys(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(e^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function vs(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}(Ct=Rr.prototype).Oa=function(t){this.M=t},Ct.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bn.g(),this.C=this.u?wn(this.u):wn(bn),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){return void Lr(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=Nt.FormData&&t instanceof Nt.FormData,!(0<=Bt(Mr,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ur(this),0<this.B&&((this.L=function(t){return Zt&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=Xe(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Lr(this,i)}},Ct.ua=function(){void 0!==Dt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))},Ct.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Vr(this))},Ct.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vr(this,!0)),Rr.$.N.call(this)},Ct.La=function(){this.s||(this.G||this.v||this.l?Fr(this):this.kb())},Ct.kb=function(){Fr(this)},Ct.isActive=function(){return!!this.g},Ct.da=function(){try{return 2<Br(this)?this.g.status:-1}catch(Yt){return-1}},Ct.ja=function(){try{return this.g?this.g.responseText:""}catch(Yt){return""}},Ct.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kr(e)}},Ct.Ia=function(){return this.m},Ct.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ct=Gr.prototype).ra=8,Ct.H=1,Ct.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Cn(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ye(i),we(i,this.U)):i=this.U),null!==this.o||this.O||(s.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jr(this,s,e),Wn(n=Gn(this.I),"RID",t),Wn(n,"CVER",22),this.F&&Wn(n,"X-HTTP-Session-Id",this.F),Xr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jr(i)))+"&"+e:this.o&&$r(n,this.o,i)),yr(this.i,s),this.bb&&Wn(n,"TYPE","init"),this.P?(Wn(n,"$req",e),Wn(n,"SID","null"),s.aa=!0,Rn(s,n,null)):Rn(s,n,e),this.H=2}}else 3==this.H&&(t?Yr(this,t):0==this.j.length||pr(this.i)||Yr(this))},Ct.Ma=function(){if(this.u=null,ns(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gn(Pt(this.jb,this),t)}},Ct.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,fn(10),Hr(this),ns(this))},Ct.ib=function(){null!=this.v&&(this.v=null,Hr(this),ts(this),fn(19))},Ct.pb=function(t){t?(this.l.info("Successfully pinged google.com"),fn(2)):(this.l.info("Failed to ping google.com"),fn(1))},Ct.isActive=function(){return!!this.h&&this.h.isActive(this)},(Ct=hs.prototype).Ba=function(){},Ct.Aa=function(){},Ct.za=function(){},Ct.ya=function(){},Ct.isActive=function(){return!0},Ct.Va=function(){},ls.prototype.g=function(t,e){return new ds(t,e)},Vt(ds,Le),ds.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;fn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cs(t,null,t.Y),Wr(t)},ds.prototype.close=function(){Kr(this.g)},ds.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ve(t),t=n);e.j.push(new lr(e.fb++,t)),3==e.H&&Wr(e)},ds.prototype.N=function(){this.g.h=null,delete this.j,Kr(this.g),delete this.g,ds.$.N.call(this)},Vt(fs,Tn),Vt(ps,In),Vt(gs,hs),gs.prototype.Ba=function(){Pe(this.g,"a")},gs.prototype.Aa=function(t){Pe(this.g,new fs(t))},gs.prototype.za=function(t){Pe(this.g,new ps)},gs.prototype.ya=function(){Pe(this.g,"b")},Vt(ms,(function(){this.blockSize=-1})),ms.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ms.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(0==s)for(;i<=n;)ys(this,t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ys(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ys(this,r),s=0;break}}this.h=s,this.i+=e},ms.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var ws={};function _s(t){return-128<=t&&128>t?function(t,e){var n=ws;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new vs([0|t],0>t?-1:0)})):new vs([0|t],0>t?-1:0)}function bs(t){if(isNaN(t)||!isFinite(t))return Ts;if(0>t)return Ds(bs(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Es;return new vs(e,0)}var Es=4294967296,Ts=_s(0),Is=_s(1),Ss=_s(16777216);function Cs(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function As(t){return-1==t.h}function Ds(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new vs(n,~t.h).add(Is)}function Ns(t,e){return t.add(Ds(e))}function ks(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rs(t,e){this.g=t,this.h=e}function xs(t,e){if(Cs(e))throw Error("division by zero");if(Cs(t))return new Rs(Ts,Ts);if(As(t))return e=xs(Ds(t),e),new Rs(Ds(e.g),Ds(e.h));if(As(e))return e=xs(t,Ds(e)),new Rs(Ds(e.g),e.h);if(30<t.g.length){if(As(t)||As(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Is,r=e;0>=r.X(t);)n=Os(n),r=Os(r);var s=Ms(n,1),i=Ms(r,1);for(r=Ms(r,2),n=Ms(n,2);!Cs(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ms(r,1),n=Ms(n,1)}return e=Ns(t,s.R(e)),new Rs(s,e)}for(s=Ts;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(i=bs(n)).R(e);As(o)||0<o.X(t);)o=(i=bs(n-=r)).R(e);Cs(i)&&(i=Is),s=s.add(i),t=Ns(t,o)}return new Rs(s,t)}function Os(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new vs(n,t.h)}function Ms(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new vs(s,t.h)}(Ct=vs.prototype).ea=function(){if(As(this))return-Ds(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Es+r)*e,e*=Es}return t},Ct.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Cs(this))return"0";if(As(this))return"-"+Ds(this).toString(t);for(var e=bs(Math.pow(t,6)),n=this,r="";;){var s=xs(n,e).g,i=((0<(n=Ns(n,s.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Cs(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},Ct.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Ct.X=function(t){return As(t=Ns(this,t))?-1:Cs(t)?0:1},Ct.abs=function(){return As(this)?Ds(this):this},Ct.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(65535&this.D(s))+(65535&t.D(s)),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new vs(n,-2147483648&n[n.length-1]?-1:0)},Ct.R=function(t){if(Cs(this)||Cs(t))return Ts;if(As(this))return As(t)?Ds(this).R(Ds(t)):Ds(Ds(this).R(t));if(As(t))return Ds(this.R(Ds(t)));if(0>this.X(Ss)&&0>t.X(Ss))return bs(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=65535&this.D(r),a=t.D(s)>>>16,c=65535&t.D(s);n[2*r+2*s]+=o*c,ks(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ks(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ks(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ks(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new vs(n,0)},Ct.gb=function(t){return xs(this,t).h},Ct.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new vs(n,this.h&t.h)},Ct.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new vs(n,this.h|t.h)},Ct.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new vs(n,this.h^t.h)},ls.prototype.createWebChannel=ls.prototype.g,ds.prototype.send=ds.prototype.u,ds.prototype.open=ds.prototype.m,ds.prototype.close=ds.prototype.close,mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,yn.COMPLETE="complete",_n.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",Le.prototype.listen=Le.prototype.O,Rr.prototype.listenOnce=Rr.prototype.P,Rr.prototype.getLastError=Rr.prototype.Sa,Rr.prototype.getLastErrorCode=Rr.prototype.Ia,Rr.prototype.getStatus=Rr.prototype.da,Rr.prototype.getResponseJson=Rr.prototype.Wa,Rr.prototype.getResponseText=Rr.prototype.ja,Rr.prototype.send=Rr.prototype.ha,Rr.prototype.setWithCredentials=Rr.prototype.Oa,ms.prototype.digest=ms.prototype.l,ms.prototype.reset=ms.prototype.reset,ms.prototype.update=ms.prototype.j,vs.prototype.add=vs.prototype.add,vs.prototype.multiply=vs.prototype.R,vs.prototype.modulo=vs.prototype.gb,vs.prototype.compare=vs.prototype.X,vs.prototype.toNumber=vs.prototype.ea,vs.prototype.toString=vs.prototype.toString,vs.prototype.getBits=vs.prototype.D,vs.fromNumber=bs,vs.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Ds(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=bs(Math.pow(n,8)),s=Ts,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),a=parseInt(e.substring(i,i+o),n);8>o?(o=bs(Math.pow(n,o)),s=s.R(o).add(bs(a))):s=(s=s.R(r)).add(bs(a))}return s};var Ls=mn,Ps=yn,Fs=an,Vs=10,Us=11,Bs=Ir,qs=_n,js=Rr,$s=ms,zs=vs;const Gs="@firebase/firestore";
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ks{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ks.UNAUTHENTICATED=new Ks(null),Ks.GOOGLE_CREDENTIALS=new Ks("google-credentials-uid"),Ks.FIRST_PARTY=new Ks("first-party-uid"),Ks.MOCK_USER=new Ks("mock-user");
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
let Hs="10.5.2";
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Qs=new L("@firebase/firestore");function Ws(){return Qs.logLevel}function Ys(t,...e){if(Qs.logLevel<=k.DEBUG){const n=e.map(Zs);Qs.debug(`Firestore (${Hs}): ${t}`,...n)}}function Xs(t,...e){if(Qs.logLevel<=k.ERROR){const n=e.map(Zs);Qs.error(`Firestore (${Hs}): ${t}`,...n)}}function Js(t,...e){if(Qs.logLevel<=k.WARN){const n=e.map(Zs);Qs.warn(`Firestore (${Hs}): ${t}`,...n)}}function Zs(t){if("string"==typeof t)return t;try{
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ti(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Xs(e),new Error(e)}function ei(t,e){t||ti()}function ni(t,e){return t}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const ri={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class si extends _{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ii{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class oi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ai{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ks.UNAUTHENTICATED)))}shutdown(){}}class ci{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ui{constructor(t){this.t=t,this.currentUser=Ks.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Ys("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ys("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ys("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ei("string"==typeof e.accessToken),new oi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ei(null===t||"string"==typeof t),new Ks(t)}}class hi{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Ks.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class li{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new hi(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Ks.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class di{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fi{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Ys("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Ys("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Ys("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Ys("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ei("string"==typeof t.token),this.R=t.token,new di(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function pi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class gi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=pi(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function mi(t,e){return t<e?-1:t>e?1:0}function yi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class vi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new si(ri.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new si(ri.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new si(ri.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new si(ri.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vi.fromMillis(Date.now())}static fromDate(t){return vi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new vi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?mi(this.nanoseconds,t.nanoseconds):mi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class wi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new wi(t)}static min(){return new wi(new vi(0,0))}static max(){return new wi(new vi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class _i{constructor(t,e,n){void 0===e?e=0:e>t.length&&ti(),void 0===n?n=t.length-e:n>t.length-e&&ti(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===_i.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class bi extends _i{construct(t,e,n){return new bi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new si(ri.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new bi(e)}static emptyPath(){return new bi([])}}const Ei=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ti extends _i{construct(t,e,n){return new Ti(t,e,n)}static isValidIdentifier(t){return Ei.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ti.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ti(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new si(ri.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new si(ri.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new si(ri.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new si(ri.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ti(e)}static emptyPath(){return new Ti([])}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ii{constructor(t){this.path=t}static fromPath(t){return new Ii(bi.fromString(t))}static fromName(t){return new Ii(bi.fromString(t).popFirst(5))}static empty(){return new Ii(bi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===bi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return bi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ii(new bi(t.slice()))}}function Si(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ci(wi.min(),Ii.empty(),-1)}static max(){return new Ci(wi.max(),Ii.empty(),-1)}}function Ai(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ii.comparator(t.documentKey,e.documentKey),0!==n?n:mi(t.largestBatchId,e.largestBatchId)
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */)}const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ni{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */async function ki(t){if(t.code!==ri.FAILED_PRECONDITION||t.message!==Di)throw t;Ys("LocalStore","Unexpectedly lost primary lease")}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ri{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ti(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ri(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ri?e:Ri.resolve(e)}catch(t){return Ri.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ri.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ri.reject(e)}static resolve(t){return new Ri(((e,n)=>{e(t)}))}static reject(t){return new Ri(((e,n)=>{n(t)}))}static waitFor(t){return new Ri(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Ri.resolve(!1);for(const n of t)e=e.next((t=>t?Ri.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ri(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ri(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}function xi(t){return"IndexedDbTransactionError"===t.name}
/**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Oi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Mi(t){return null==t}function Li(t){return 0===t&&1/t==-1/0}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */Oi._e=-1;class Ui{constructor(t,e){this.comparator=t,this.root=e||qi.EMPTY}insert(t,e){return new Ui(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,qi.BLACK,null,null))}remove(t){return new Ui(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bi(this.root,t,this.comparator,!0)}}class Bi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qi{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:qi.RED,this.left=null!=r?r:qi.EMPTY,this.right=null!=s?s:qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new qi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return qi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ti();if(this.right.isRed())throw ti();const t=this.left.check();if(t!==this.right.check())throw ti();return t+(this.isRed()?0:1)}}qi.EMPTY=null,qi.RED=!0,qi.BLACK=!1,qi.EMPTY=new class{constructor(){this.size=0}get key(){throw ti()}get value(){throw ti()}get color(){throw ti()}get left(){throw ti()}get right(){throw ti()}copy(t,e,n,r,s){return this}insert(t,e,n){return new qi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class ji{constructor(t){this.comparator=t,this.data=new Ui(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $i(this.data.getIterator())}getIteratorFrom(t){return new $i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ji))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ji(this.comparator);return e.data=t,e}}class $i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class zi{constructor(t){this.fields=t,t.sort(Ti.comparator)}static empty(){return new zi([])}unionWith(t){let e=new ji(Ti.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return yi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Gi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ki{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Gi("Invalid base64 string: "+t):t}}(t);return new Ki(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ki(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return mi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ki.EMPTY_BYTE_STRING=new Ki("");const Hi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qi(t){if(ei(!!t),"string"==typeof t){let e=0;const n=Hi.exec(t);if(ei(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Wi(t.seconds),nanos:Wi(t.nanos)}}function Wi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Yi(t){return"string"==typeof t?Ki.fromBase64String(t):Ki.fromUint8Array(t)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Xi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ji(t){const e=t.mapValue.fields.__previous_value__;return Xi(e)?Ji(e):e}function Zi(t){const e=Qi(t.mapValue.fields.__local_write_time__.timestampValue);return new vi(e.seconds,e.nanos)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class to{constructor(t,e,n,r,s,i,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class eo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new eo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof eo&&t.projectId===this.projectId&&t.database===this.database}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ro(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xi(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t)?9007199254740991:10:ti()}function so(t,e){if(t===e)return!0;const n=ro(t);if(n!==ro(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zi(t).isEqual(Zi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Qi(t.timestampValue),r=Qi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Yi(t.bytesValue).isEqual(Yi(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Wi(t.geoPointValue.latitude)===Wi(e.geoPointValue.latitude)&&Wi(t.geoPointValue.longitude)===Wi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Wi(t.integerValue)===Wi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Wi(t.doubleValue),r=Wi(e.doubleValue);return n===r?Li(n)===Li(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],so);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Pi(n)!==Pi(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!so(n[s],r[s])))return!1;return!0}(t,e);default:return ti()}}function io(t,e){return void 0!==(t.values||[]).find((t=>so(t,e)))}function oo(t,e){if(t===e)return 0;const n=ro(t),r=ro(e);if(n!==r)return mi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return mi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Wi(t.integerValue||t.doubleValue),r=Wi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ao(t.timestampValue,e.timestampValue);case 4:return ao(Zi(t),Zi(e));case 5:return mi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Yi(t),r=Yi(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=mi(n[s],r[s]);if(0!==t)return t}return mi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=mi(Wi(t.latitude),Wi(e.latitude));return 0!==n?n:mi(Wi(t.longitude),Wi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=oo(n[s],r[s]);if(t)return t}return mi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===no.mapValue&&e===no.mapValue)return 0;if(t===no.mapValue)return 1;if(e===no.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=mi(r[o],i[o]);if(0!==t)return t;const e=oo(n[r[o]],s[i[o]]);if(0!==e)return e}return mi(r.length,i.length)}(t.mapValue,e.mapValue);default:throw ti()}}function ao(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return mi(t,e);const n=Qi(t),r=Qi(e),s=mi(n.seconds,r.seconds);return 0!==s?s:mi(n.nanos,r.nanos)}function co(t){return uo(t)}function uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Qi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Yi(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Ii.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=uo(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${uo(t.fields[s])}`;return n+"}"}(t.mapValue):ti()}function ho(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lo(t){return!!t&&"integerValue"in t}function fo(t){return!!t&&"arrayValue"in t}function po(t){return!!t&&"nullValue"in t}function go(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mo(t){return!!t&&"mapValue"in t}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=yo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class vo{constructor(t){this.value=t}static empty(){return new vo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!mo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yo(e)}setAll(t){let e=Ti.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=yo(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());mo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return so(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];mo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Fi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new vo(yo(this.value))}}function wo(t){const e=[];return Fi(t.fields,((t,n)=>{const r=new Ti([t]);if(mo(n)){const t=wo(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new zi(e)
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}class _o{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new _o(t,0,wi.min(),wi.min(),wi.min(),vo.empty(),0)}static newFoundDocument(t,e,n,r){return new _o(t,1,e,wi.min(),n,r,0)}static newNoDocument(t,e){return new _o(t,2,e,wi.min(),wi.min(),vo.empty(),0)}static newUnknownDocument(t,e){return new _o(t,3,e,wi.min(),wi.min(),vo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(wi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof _o&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _o(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class bo{constructor(t,e){this.position=t,this.inclusive=e}}function Eo(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?Ii.comparator(Ii.fromName(o.referenceValue),n.key):oo(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function To(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!so(t.position[n],e.position[n]))return!1;return!0}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Io{constructor(t,e="asc"){this.field=t,this.dir=e}}function So(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Co{}class Ao extends Co{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Mo(t,e,n):"array-contains"===e?new Vo(t,n):"in"===e?new Uo(t,n):"not-in"===e?new Bo(t,n):"array-contains-any"===e?new qo(t,n):new Ao(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Lo(t,n):new Po(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(oo(e,this.value)):null!==e&&ro(this.value)===ro(e)&&this.matchesComparison(oo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ti()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Do extends Co{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Do(t,e)}matches(t){return No(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function No(t){return"and"===t.op}function ko(t){return function(t){for(const e of t.filters)if(e instanceof Do)return!1;return!0}(t)&&No(t)}function Ro(t){if(t instanceof Ao)return t.field.canonicalString()+t.op.toString()+co(t.value);if(ko(t))return t.filters.map((t=>Ro(t))).join(",");{const e=t.filters.map((t=>Ro(t))).join(",");return`${t.op}(${e})`}}function xo(t,e){return t instanceof Ao?function(t,e){return e instanceof Ao&&t.op===e.op&&t.field.isEqual(e.field)&&so(t.value,e.value)}(t,e):t instanceof Do?function(t,e){return e instanceof Do&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&xo(n,e.filters[r])),!0)}(t,e):void ti()}function Oo(t){return t instanceof Ao?function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`}(t):t instanceof Do?function(t){return t.op.toString()+" {"+t.getFilters().map(Oo).join(" ,")+"}"}(t):"Filter"}class Mo extends Ao{constructor(t,e,n){super(t,e,n),this.key=Ii.fromName(n.referenceValue)}matches(t){const e=Ii.comparator(t.key,this.key);return this.matchesComparison(e)}}class Lo extends Ao{constructor(t,e){super(t,"in",e),this.keys=Fo(0,e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Po extends Ao{constructor(t,e){super(t,"not-in",e),this.keys=Fo(0,e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Fo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ii.fromName(t.referenceValue)))}class Vo extends Ao{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fo(e)&&io(e.arrayValue,this.value)}}class Uo extends Ao{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&io(this.value.arrayValue,e)}}class Bo extends Ao{constructor(t,e){super(t,"not-in",e)}matches(t){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!io(this.value.arrayValue,e)}}class qo extends Ao{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>io(this.value.arrayValue,t)))}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class jo{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ce=null}}function $o(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jo(t,e,n,r,s,i,o)}function zo(t){const e=ni(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ro(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>co(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>co(t))).join(",")),e.ce=t}return e.ce}function Go(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!So(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xo(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!To(t.startAt,e.startAt)&&To(t.endAt,e.endAt)}function Ko(t){return Ii.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ho{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Qo(t){return new Ho(t)}function Wo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Yo(t){return null!==t.collectionGroup}function Xo(t){const e=ni(t);if(null===e.le){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new ji(Ti.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new Io(r,n))})),t.has(Ti.keyField().canonicalString())||e.le.push(new Io(Ti.keyField(),n))}return e.le}function Jo(t){const e=ni(t);return e.he||(e.he=Zo(e,Xo(t))),e.he}function Zo(t,e){if("F"===t.limitType)return $o(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Io(t.field,e)}));const n=t.endAt?new bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bo(t.startAt.position,t.startAt.inclusive):null;return $o(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ta(t,e){const n=t.filters.concat([e]);return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ea(t,e,n){return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function na(t,e){return Go(Jo(t),Jo(e))&&t.limitType===e.limitType}function ra(t){return`${zo(Jo(t))}|lt:${t.limitType}`}function sa(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Oo(t))).join(", ")}]`),Mi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>co(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>co(t))).join(",")),`Target(${e})`}(Jo(t))}; limitType=${t.limitType})`}function ia(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ii.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Xo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Eo(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Xo(t),e)||t.endAt&&!function(t,e,n){const r=Eo(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Xo(t),e))}(t,e)}function oa(t){return(e,n)=>{let r=!1;for(const s of Xo(t)){const t=aa(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function aa(t,e,n){const r=t.field.isKeyField()?Ii.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?oo(r,s):ti()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ti()}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ca{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Fi(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Vi(this.inner)}size(){return this.innerSize}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const ua=new Ui(Ii.comparator);function ha(){return ua}const la=new Ui(Ii.comparator);function da(...t){let e=la;for(const n of t)e=e.insert(n.key,n);return e}function fa(t){let e=la;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function pa(){return ma()}function ga(){return ma()}function ma(){return new ca((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ya=new Ui(Ii.comparator),va=new ji(Ii.comparator);function wa(...t){let e=va;for(const n of t)e=e.add(n);return e}const _a=new ji(mi);
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function ba(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function Ea(t){return{integerValue:""+t}}function Ta(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Ea(e):ba(t,e)}
/**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ia{constructor(){this._=void 0}}function Sa(t,e,n){return t instanceof Da?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Xi(e)&&(e=Ji(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Na?ka(t,e):t instanceof Ra?xa(t,e):function(t,e){const n=Aa(t,e),r=Ma(n)+Ma(t.Ie);return lo(n)&&lo(t.Ie)?Ea(r):ba(t.serializer,r)}(t,e)}function Ca(t,e,n){return t instanceof Na?ka(t,e):t instanceof Ra?xa(t,e):n}function Aa(t,e){return t instanceof Oa?function(t){return lo(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Da extends Ia{}class Na extends Ia{constructor(t){super(),this.elements=t}}function ka(t,e){const n=La(e);for(const r of t.elements)n.some((t=>so(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ra extends Ia{constructor(t){super(),this.elements=t}}function xa(t,e){let n=La(e);for(const r of t.elements)n=n.filter((t=>!so(t,r)));return{arrayValue:{values:n}}}class Oa extends Ia{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ma(t){return Wi(t.integerValue||t.doubleValue)}function La(t){return fo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Pa{constructor(t,e){this.version=t,this.transformResults=e}}class Fa{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Fa}static exists(t){return new Fa(void 0,t)}static updateTime(t){return new Fa(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Va(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ua{}function Ba(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ya(t.key,Fa.none()):new Ga(t.key,t.data,Fa.none());{const n=t.data,r=vo.empty();let s=new ji(Ti.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Ka(t.key,r,new zi(s.toArray()),Fa.none())}}function qa(t,e,n){t instanceof Ga?function(t,e,n){const r=t.value.clone(),s=Qa(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ka?function(t,e,n){if(!Va(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Qa(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ha(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof Ga?function(t,e,n,r){if(!Va(t.precondition,e))return n;const s=t.value.clone(),i=Wa(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ka?function(t,e,n,r){if(!Va(t.precondition,e))return n;const s=Wa(t.fieldTransforms,r,e),i=e.data;return i.setAll(Ha(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Va(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function $a(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Aa(r.transform,t||null);null!=s&&(null===n&&(n=vo.empty()),n.set(r.field,s))}return n||null}function za(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&yi(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Na&&e instanceof Na||t instanceof Ra&&e instanceof Ra?yi(t.elements,e.elements,so):t instanceof Oa&&e instanceof Oa?so(t.Ie,e.Ie):t instanceof Da&&e instanceof Da}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Ua{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ka extends Ua{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ha(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Qa(t,e,n){const r=new Map;ei(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ca(o,a,n[s]))}return r}function Wa(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Sa(t,i,e))}return r}class Ya extends Ua{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xa extends Ua{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ja{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&qa(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ja(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ja(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ga();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Ba(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(wi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),wa())}isEqual(t){return this.batchId===t.batchId&&yi(this.mutations,t.mutations,((t,e)=>za(t,e)))&&yi(this.baseMutations,t.baseMutations,((t,e)=>za(t,e)))}}class Za{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ei(t.mutations.length===n.length);let r=ya;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Za(t,e,n,r)}}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class tc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ec{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class nc{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var rc,sc;function ic(t){if(void 0===t)return Xs("GRPC error has no .code"),ri.UNKNOWN;switch(t){case rc.OK:return ri.OK;case rc.CANCELLED:return ri.CANCELLED;case rc.UNKNOWN:return ri.UNKNOWN;case rc.DEADLINE_EXCEEDED:return ri.DEADLINE_EXCEEDED;case rc.RESOURCE_EXHAUSTED:return ri.RESOURCE_EXHAUSTED;case rc.INTERNAL:return ri.INTERNAL;case rc.UNAVAILABLE:return ri.UNAVAILABLE;case rc.UNAUTHENTICATED:return ri.UNAUTHENTICATED;case rc.INVALID_ARGUMENT:return ri.INVALID_ARGUMENT;case rc.NOT_FOUND:return ri.NOT_FOUND;case rc.ALREADY_EXISTS:return ri.ALREADY_EXISTS;case rc.PERMISSION_DENIED:return ri.PERMISSION_DENIED;case rc.FAILED_PRECONDITION:return ri.FAILED_PRECONDITION;case rc.ABORTED:return ri.ABORTED;case rc.OUT_OF_RANGE:return ri.OUT_OF_RANGE;case rc.UNIMPLEMENTED:return ri.UNIMPLEMENTED;case rc.DATA_LOSS:return ri.DATA_LOSS;default:return ti()}}(sc=rc||(rc={}))[sc.OK=0]="OK",sc[sc.CANCELLED=1]="CANCELLED",sc[sc.UNKNOWN=2]="UNKNOWN",sc[sc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",sc[sc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",sc[sc.NOT_FOUND=5]="NOT_FOUND",sc[sc.ALREADY_EXISTS=6]="ALREADY_EXISTS",sc[sc.PERMISSION_DENIED=7]="PERMISSION_DENIED",sc[sc.UNAUTHENTICATED=16]="UNAUTHENTICATED",sc[sc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",sc[sc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",sc[sc.ABORTED=10]="ABORTED",sc[sc.OUT_OF_RANGE=11]="OUT_OF_RANGE",sc[sc.UNIMPLEMENTED=12]="UNIMPLEMENTED",sc[sc.INTERNAL=13]="INTERNAL",sc[sc.UNAVAILABLE=14]="UNAVAILABLE",sc[sc.DATA_LOSS=15]="DATA_LOSS";
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const oc=new zs([4294967295,4294967295],0);function ac(t){const e=(new TextEncoder).encode(t),n=new $s;return n.update(e),new Uint8Array(n.digest())}function cc(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zs([n,r],0),new zs([s,i],0)]}class uc{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new hc(`Invalid padding: ${e}`);if(n<0)throw new hc(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new hc(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new hc(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=zs.fromNumber(this.Te)}de(t,e,n){let r=t.add(e.multiply(zs.fromNumber(n)));return 1===r.compare(oc)&&(r=new zs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=ac(t),[n,r]=cc(e);for(let s=0;s<this.hashCount;s++){const t=this.de(n,r,s);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new uc(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Te)return;const e=ac(t),[n,r]=cc(e);for(let s=0;s<this.hashCount;s++){const t=this.de(n,r,s);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class hc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class lc{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,dc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new lc(wi.min(),r,new Ui(mi),ha(),wa())}}class dc{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new dc(n,e,wa(),wa(),wa())}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class fc{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class pc{constructor(t,e){this.targetId=t,this.fe=e}}class gc{constructor(t,e,n=Ki.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class mc{constructor(){this.ge=0,this.pe=wc(),this.ye=Ki.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=wa(),e=wa(),n=wa();return this.pe.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ti()}})),new dc(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=wc()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class yc{constructor(t){this.Le=t,this.ke=new Map,this.qe=ha(),this.Qe=vc(),this.Ke=new Ui(mi)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:ti()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const s=r.target;if(Ko(s))if(0===n){const t=new Ii(s.path);this.We(e,t,_o.newNoDocument(t,wi.min()))}else ei(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),s=n?this.et(n,t,r):1;if(0!==s){this.He(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Yi(n).toUint8Array()}catch(t){if(t instanceof Gi)return Js("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new uc(i,r,s)}catch(t){return Js(t instanceof hc?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Le.nt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const s=this.Ye(r);if(s){if(n.current&&Ko(s.target)){const e=new Ii(s.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,_o.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=wa();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new lc(t,e,this.Ke,this.qe,n);return this.qe=ha(),this.Qe=vc(),this.Ke=new Ui(mi),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new mc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new ji(mi),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Ys("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new mc),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vc(){return new Ui(Ii.comparator)}function wc(){return new Ui(Ii.comparator)}const _c={asc:"ASCENDING",desc:"DESCENDING"},bc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ec={and:"AND",or:"OR"};class Tc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ic(t,e){return t.useProto3Json||Mi(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ac(t,e){return Sc(t,e.toTimestamp())}function Dc(t){return ei(!!t),wi.fromTimestamp(function(t){const e=Qi(t);return new vi(e.seconds,e.nanos)}(t))}function Nc(t,e){return function(t){return new bi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function kc(t){const e=bi.fromString(t);return ei(Qc(e)),e}function Rc(t,e){return Nc(t.databaseId,e.path)}function xc(t,e){const n=kc(e);if(n.get(1)!==t.databaseId.projectId)throw new si(ri.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new si(ri.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ii(Lc(n))}function Oc(t,e){return Nc(t.databaseId,e)}function Mc(t){return new bi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lc(t){return ei(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pc(t,e,n){return{name:Rc(t,e),fields:n.value.mapValue.fields}}function Fc(t,e){return{documents:[Oc(t,e.path)]}}function Vc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Oc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Oc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0!==t.length)return Kc(Do.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:zc(t.field),direction:qc(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ic(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Uc(t){let e=function(t){const e=kc(t);return 4===e.length?bi.emptyPath():Lc(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ei(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Bc(t);return e instanceof Do&&ko(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Io(Gc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Mi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new bo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new bo(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new Ho(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,u)}function Bc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gc(t.unaryFilter.field);return Ao.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gc(t.unaryFilter.field);return Ao.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gc(t.unaryFilter.field);return Ao.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Gc(t.unaryFilter.field);return Ao.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ti()}}(t):void 0!==t.fieldFilter?function(t){return Ao.create(Gc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ti()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Do.create(t.compositeFilter.filters.map((t=>Bc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ti()}}(t.compositeFilter.op))}(t):ti()}function qc(t){return _c[t]}function jc(t){return bc[t]}function $c(t){return Ec[t]}function zc(t){return{fieldPath:t.canonicalString()}}function Gc(t){return Ti.fromServerFormat(t.fieldPath)}function Kc(t){return t instanceof Ao?function(t){if("=="===t.op){if(go(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NAN"}};if(po(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(go(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NOT_NAN"}};if(po(t.value))return{unaryFilter:{field:zc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zc(t.field),op:jc(t.op),value:t.value}}}(t):t instanceof Do?function(t){const e=t.getFilters().map((t=>Kc(t)));return 1===e.length?e[0]:{compositeFilter:{op:$c(t.op),filters:e}}}(t):ti()}function Hc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Wc{constructor(t,e,n,r,s=wi.min(),i=wi.min(),o=Ki.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Wc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Yc{constructor(t){this.ut=t}}function Xc(t){const e=Uc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ea(e,e.limit,"L"):e}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Jc{constructor(){this.on=new Zc}addToCollectionParentIndex(t,e){return this.on.add(e),Ri.resolve()}getCollectionParents(t,e){return Ri.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Ri.resolve()}deleteFieldIndex(t,e){return Ri.resolve()}deleteAllFieldIndexes(t){return Ri.resolve()}createTargetIndexes(t,e){return Ri.resolve()}getDocumentsMatchingTarget(t,e){return Ri.resolve(null)}getIndexType(t,e){return Ri.resolve(0)}getFieldIndexes(t,e){return Ri.resolve([])}getNextCollectionGroupToUpdate(t){return Ri.resolve(null)}getMinOffset(t,e){return Ri.resolve(Ci.min())}getMinOffsetFromCollectionGroup(t,e){return Ri.resolve(Ci.min())}updateCollectionGroup(t,e,n){return Ri.resolve()}updateIndexEntries(t,e){return Ri.resolve()}}class Zc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ji(bi.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ji(bi.comparator)).toArray()}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class tu{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new tu(0)}static Nn(){return new tu(-1)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class eu{constructor(){this.changes=new ca((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_o.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ri.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class nu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ru{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ja(n.mutation,t,zi.empty(),vi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,wa()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=wa()){const r=pa();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=da();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=pa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,wa())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=ha();const i=ma(),o=ma();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ka)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),ja(o.mutation,e,o.mutation.getFieldMask(),vi.now())):i.set(e.key,zi.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new nu(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ma();let r=new Ui(((t,e)=>t-e)),s=wa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||zi.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||wa()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ga();c.forEach((t=>{if(!s.has(t)){const r=Ba(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ri.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Ii.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Yo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Ri.resolve(pa());let o=-1,a=s;return i.next((e=>Ri.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Ri.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,wa()))).next((t=>({batchId:o,changes:fa(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ii(e)).next((t=>{let e=da();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=da();return this.indexManager.getCollectionParents(t,s).next((o=>Ri.forEach(o,(o=>{const a=function(t,e){return new Ho(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,_o.newInvalidDocument(r)))}));let n=da();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&ja(i.mutation,r,zi.empty(),vi.now()),ia(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class su{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return Ri.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Dc(t.createTime)}}(e)),Ri.resolve()}getNamedQuery(t,e){return Ri.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:Xc(t.bundledQuery),readTime:Dc(t.readTime)}}(e)),Ri.resolve()}}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class iu{constructor(){this.overlays=new Ui(Ii.comparator),this.lr=new Map}getOverlay(t,e){return Ri.resolve(this.overlays.get(e))}getOverlays(t,e){const n=pa();return Ri.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.lt(t,e,r)})),Ri.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Ri.resolve()}getOverlaysForCollection(t,e,n){const r=pa(),s=e.length+1,i=new Ii(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ri.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Ui(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=pa(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=pa(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Ri.resolve(o)}lt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new tc(e,n));let s=this.lr.get(e);void 0===s&&(s=wa(),this.lr.set(e,s)),this.lr.set(e,s.add(n.key))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ou{constructor(){this.hr=new ji(au.Pr),this.Ir=new ji(au.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new au(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new au(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new Ii(new bi([])),n=new au(e,t),r=new au(e,t+1),s=[];return this.Ir.forEachInRange([n,r],(t=>{this.dr(t),s.push(t.key)})),s}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new Ii(new bi([])),n=new au(e,t),r=new au(e,t+1);let s=wa();return this.Ir.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new au(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class au{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return Ii.comparator(t.key,e.key)||mi(t.gr,e.gr)}static Tr(t,e){return mi(t.gr,e.gr)||Ii.comparator(t.key,e.key)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class cu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new ji(au.Pr)}checkEmpty(t){return Ri.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ja(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.yr=this.yr.add(new au(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ri.resolve(i)}lookupMutationBatch(t,e){return Ri.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),s=r<0?0:r;return Ri.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ri.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Ri.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new au(e,0),r=new au(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([n,r],(t=>{const e=this.wr(t.gr);s.push(e)})),Ri.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ji(mi);return e.forEach((t=>{const e=new au(t,0),r=new au(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,r],(t=>{n=n.add(t.gr)}))})),Ri.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Ii.isDocumentKey(s)||(s=s.child(""));const i=new au(new Ii(s),0);let o=new ji(mi);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gr)),!0)}),i),Ri.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ei(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Ri.forEach(e.mutations,(r=>{const s=new au(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new au(e,0),r=this.yr.firstAfterOrEqual(n);return Ri.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ri.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class uu{constructor(t){this.Cr=t,this.docs=new Ui(Ii.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ri.resolve(n?n.document.mutableCopy():_o.newInvalidDocument(e))}getEntries(t,e){let n=ha();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():_o.newInvalidDocument(t))})),Ri.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=ha();const i=e.path,o=new Ii(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Ai(Si(o),n)<=0||(r.has(o.key)||ia(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ri.resolve(s)}getAllFromCollectionGroup(t,e,n,r){ti()}vr(t,e){return Ri.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new hu(this)}getSize(t){return Ri.resolve(this.size)}}class hu extends eu{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)})),Ri.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class lu{constructor(t){this.persistence=t,this.Fr=new ca((t=>zo(t)),Go),this.lastRemoteSnapshotVersion=wi.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ou,this.targetCount=0,this.Nr=tu.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Ri.resolve()}getLastRemoteSnapshotVersion(t){return Ri.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ri.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Ri.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Ri.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new tu(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Ri.resolve()}updateTargetData(t,e){return this.kn(e),Ri.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Ri.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Fr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ri.waitFor(s).next((()=>r))}getTargetCount(t){return Ri.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Ri.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Ri.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Ri.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Ri.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Ri.resolve(n)}containsKey(t,e){return Ri.resolve(this.Or.containsKey(e))}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class du{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Oi(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new lu(this),this.indexManager=new Jc,this.remoteDocumentCache=function(t){return new uu(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new Yc(e),this.Kr=new su(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new iu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new cu(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Ys("MemoryPersistence","Starting transaction:",t);const r=new fu(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((t=>this.referenceDelegate.Ur(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Wr(t,e){return Ri.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class fu extends Ni{constructor(t){super(),this.currentSequenceNumber=t}}class pu{constructor(t){this.persistence=t,this.Gr=new ou,this.zr=null}static jr(t){return new pu(t)}get Hr(){if(this.zr)return this.zr;throw ti()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Ri.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Ri.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Ri.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ri.forEach(this.Hr,(n=>{const r=Ii.fromPath(n);return this.Jr(t,r).next((t=>{t||e.removeEntry(r,wi.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Ri.or([()=>Ri.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class gu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}static Qi(t,e){let n=wa(),r=wa();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new gu(t,e.fromCache,n,r)}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class mu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class yu{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.zi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.ji(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new mu;return this.Hi(t,e,n).next((r=>{if(s.result=r,this.$i)return this.Ji(t,e,n,r.size)}))})).next((()=>s.result))}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(Ws()<=k.DEBUG&&Ys("QueryEngine","SDK will not create cache indexes for query:",sa(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Ri.resolve()):(Ws()<=k.DEBUG&&Ys("QueryEngine","Query:",sa(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(Ws()<=k.DEBUG&&Ys("QueryEngine","The SDK decides to create cache indexes for query:",sa(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jo(e))):Ri.resolve())}zi(t,e){if(Wo(e))return Ri.resolve(null);let n=Jo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ea(e,null,"F"),n=Jo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=wa(...r);return this.Gi.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Yi(e,r);return this.Zi(e,i,s,n.readTime)?this.zi(t,ea(e,null,"F")):this.Xi(t,i,e,n)}))))})))))}ji(t,e,n,r){return Wo(e)||r.isEqual(wi.min())?Ri.resolve(null):this.Gi.getDocuments(t,n).next((s=>{const i=this.Yi(e,s);return this.Zi(e,i,n,r)?Ri.resolve(null):(Ws()<=k.DEBUG&&Ys("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),sa(e)),this.Xi(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=wi.fromTimestamp(1e9===r?new vi(n+1,0):new vi(n,r));return new Ci(s,Ii.empty(),e)}(r,-1)).next((t=>t)))}))}Yi(t,e){let n=new ji(oa(t));return e.forEach(((e,r)=>{ia(t,r)&&(n=n.add(r))})),n}Zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Hi(t,e,n){return Ws()<=k.DEBUG&&Ys("QueryEngine","Using full collection scan to execute query:",sa(e)),this.Gi.getDocumentsMatchingQuery(t,e,Ci.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class vu{constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new Ui(mi),this.ns=new ca((t=>zo(t)),Go),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ru(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}async function wu(t,e){const n=ni(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=wa();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function _u(t){const e=ni(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function bu(t,e){const n=ni(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(Ki.EMPTY_BYTE_STRING,wi.min()).withLastLimboFreeSnapshotVersion(wi.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.qr.updateTargetData(t,u))}));let a=ha(),c=wa();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=wa(),s=wa();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ha();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(wi.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Ys("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{us:r,cs:s}}))}(t,i,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!r.isEqual(wi.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ri.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=s,t)))}function Eu(t,e){const n=ni(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function Tu(t,e,n){const r=ni(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!xi(t))throw t;Ys("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Iu(t,e,n){const r=ni(t);let s=wi.min(),i=wa();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=ni(t),s=r.ns.get(n);return void 0!==s?Ri.resolve(r.ts.get(s)):r.qr.getTargetData(e,n)}(r,t,Jo(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.es.getDocumentsMatchingQuery(t,e,n?s:wi.min(),n?i:wa()))).next((t=>(function(t,e,n){let r=t.rs.get(e)||wi.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.rs.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ls:i})))))}class Su{constructor(){this.activeTargetIds=_a}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cu{constructor(){this.eo=new Su,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Su,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Au{ro(t){}shutdown(){}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Du{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Ys("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Ys("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */let Nu=null;function ku(){return null===Nu?Nu=268435456+Math.round(2147483648*Math.random()):Nu++,"0x"+Nu.toString(16)
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}const Ru={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class xu{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Ou="WebChannelConnection";class Mu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(t,e,n,r,s){const i=ku(),o=this.So(t,e);Ys("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,s),this.Do(t,o,a,n).then((e=>(Ys("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw Js("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,s,i){return this.wo(t,e,n,r,s)}bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Hs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=Ru[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,r){const s=ku();return new Promise(((i,o)=>{const a=new js;a.setWithCredentials(!0),a.listenOnce(Ps.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ls.NO_ERROR:const e=a.getResponseJson();Ys(Ou,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case Ls.TIMEOUT:Ys(Ou,`RPC '${t}' ${s} timed out`),o(new si(ri.DEADLINE_EXCEEDED,"Request time out"));break;case Ls.HTTP_ERROR:const n=a.getStatus();if(Ys(Ou,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ri).indexOf(e)>=0?e:ri.UNKNOWN}(e.status);o(new si(t,e.message))}else o(new si(ri.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new si(ri.UNAVAILABLE,"Connection failed."));break;default:ti()}}finally{Ys(Ou,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);Ys(Ou,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}vo(t,e,n){const r=ku(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new ls,o=un(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Bs({})),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=s.join("");Ys(Ou,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=i.createWebChannel(u,a);let l=!1,d=!1;const f=new xu({co:e=>{d?Ys(Ou,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(Ys(Ou,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),Ys(Ou,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},lo:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,qs.EventType.OPEN,(()=>{d||Ys(Ou,`RPC '${t}' stream ${r} transport opened.`)})),p(h,qs.EventType.CLOSE,(()=>{d||(d=!0,Ys(Ou,`RPC '${t}' stream ${r} transport closed`),f.Ro())})),p(h,qs.EventType.ERROR,(e=>{d||(d=!0,Js(Ou,`RPC '${t}' stream ${r} transport errored:`,e),f.Ro(new si(ri.UNAVAILABLE,"The operation could not be completed")))})),p(h,qs.EventType.MESSAGE,(e=>{var n;if(!d){const s=e.data[0];ei(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){Ys(Ou,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=rc[t];if(void 0!==e)return ic(e)}(e),s=o.message;void 0===n&&(n=ri.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.Ro(new si(n,s)),h.close()}else Ys(Ou,`RPC '${t}' stream ${r} received:`,s),f.Vo(s)}})),p(o,Fs.STAT_EVENT,(e=>{e.stat===Vs?Ys(Ou,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Us&&Ys(Ou,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ao()}),0),f}}function Lu(){return"undefined"!=typeof document?document:null}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Pu(t){return new Tc(t,!0)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Fu{constructor(t,e,n=1e3,r=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&Ys("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Vu{constructor(t,e,n,r,s,i,o,a){this.si=t,this.Ko=n,this.$o=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Fu(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===ri.RESOURCE_EXHAUSTED?(Xs(e.toString()),Xs("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===ri.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new si(ri.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return Ys("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(Ys("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Uu extends Vu{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ti()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(ei(void 0===e||"string"==typeof e),Ki.fromBase64String(e||"")):(ei(void 0===e||e instanceof Uint8Array),Ki.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ri.UNKNOWN:ic(t.code);return new si(e,t.message||"")}(o);n=new gc(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xc(t,r.document.name),i=Dc(r.document.updateTime),o=r.document.createTime?Dc(r.document.createTime):wi.min(),a=new vo({mapValue:{fields:r.document.fields}}),c=_o.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new fc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xc(t,r.document),i=r.readTime?Dc(r.readTime):wi.min(),o=_o.newNoDocument(s,i),a=r.removedTargetIds||[];n=new fc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xc(t,r.document),i=r.removedTargetIds||[];n=new fc([],i,s,null)}else{if(!("filter"in e))return ti();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new nc(r,s),o=t.targetId;n=new pc(o,i)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return wi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?wi.min():e.readTime?Dc(e.readTime):wi.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=Mc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Ko(r)?{documents:Fc(t,r)}:{query:Vc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Cc(t,e.resumeToken);const r=Ic(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(wi.min())>0){n.readTime=Sc(t,e.snapshotVersion.toTimestamp());const r=Ic(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ti()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=Mc(this.serializer),e.removeTarget=t,this.e_(e)}}class Bu extends Vu{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(ei(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=function(t,e){return t&&t.length>0?(ei(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Dc(t.updateTime):Dc(e);return n.isEqual(wi.min())&&(n=Dc(e)),new Pa(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Dc(t.commitTime);return this.listener.I_(n,e)}return ei(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Mc(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Ga)n={update:Pc(t,e.key,e.value)};else if(e instanceof Ya)n={delete:Rc(t,e.key)};else if(e instanceof Ka)n={update:Pc(t,e.key,e.data),updateMask:Hc(e.fieldMask)};else{if(!(e instanceof Xa))return ti();n={verify:Rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Da)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Na)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ra)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Oa)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw ti()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ac(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ti()}(t,e.precondition)),n}(this.serializer,t)))};this.e_(e)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class qu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new si(ri.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.wo(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ri.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new si(ri.UNKNOWN,t.toString())}))}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Co(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ri.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new si(ri.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class ju{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Xs(e),this.f_=!1):Ys("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class $u{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro((t=>{n.enqueueAndForget((async()=>{Ju(this)&&(Ys("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ni(t);e.C_.add(4),await Gu(e),e.M_.set("Unknown"),e.C_.delete(4),await zu(e)}(this))}))})),this.M_=new ju(n,r)}}async function zu(t){if(Ju(t))for(const e of t.v_)await e(!0)}async function Gu(t){for(const e of t.v_)await e(!1)}function Ku(t,e){const n=ni(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Xu(n)?Yu(n):gh(n).Ho()&&Qu(n,e))}function Hu(t,e){const n=ni(t),r=gh(n);n.D_.delete(e),r.Ho()&&Wu(n,e),0===n.D_.size&&(r.Ho()?r.Zo():Ju(n)&&n.M_.set("Unknown"))}function Qu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(wi.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gh(t).u_(e)}function Wu(t,e){t.x_.Oe(e),gh(t).c_(e)}function Yu(t){t.x_=new yc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),gh(t).start(),t.M_.g_()}function Xu(t){return Ju(t)&&!gh(t).jo()&&t.D_.size>0}function Ju(t){return 0===ni(t).C_.size}function Zu(t){t.x_=void 0}async function th(t){t.D_.forEach(((e,n)=>{Qu(t,e)}))}async function eh(t,e){Zu(t),Xu(t)?(t.M_.w_(e),Yu(t)):t.M_.set("Unknown")}async function nh(t,e,n){if(t.M_.set("Online"),e instanceof gc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.D_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.D_.delete(r),t.x_.removeTarget(r))}(t,e)}catch(n){Ys("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rh(t,n)}else if(e instanceof fc?t.x_.$e(e):e instanceof pc?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(wi.min()))try{const e=await _u(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.D_.get(r);s&&t.D_.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.D_.get(e);if(!r)return;t.D_.set(e,r.withResumeToken(Ki.EMPTY_BYTE_STRING,r.snapshotVersion)),Wu(t,e);const s=new Wc(r.target,e,n,r.sequenceNumber);Qu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ys("RemoteStore","Failed to raise snapshot:",e),await rh(t,e)}}async function rh(t,e,n){if(!xi(e))throw e;t.C_.add(1),await Gu(t),t.M_.set("Offline"),n||(n=()=>_u(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ys("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await zu(t)}))}function sh(t,e){return e().catch((n=>rh(t,n,e)))}async function ih(t){const e=ni(t),n=mh(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;oh(e);)try{const t=await Eu(e.localStore,r);if(null===t){0===e.b_.length&&n.Zo();break}r=t.batchId,ah(e,t)}catch(t){await rh(e,t)}ch(e)&&uh(e)}function oh(t){return Ju(t)&&t.b_.length<10}function ah(t,e){t.b_.push(e);const n=mh(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function ch(t){return Ju(t)&&!mh(t).jo()&&t.b_.length>0}function uh(t){mh(t).start()}async function hh(t){mh(t).E_()}async function lh(t){const e=mh(t);for(const n of t.b_)e.P_(n.mutations)}async function dh(t,e,n){const r=t.b_.shift(),s=Za.from(r,e,n);await sh(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ih(t)}async function fh(t,e){e&&mh(t).h_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return ti();case ri.CANCELLED:case ri.UNKNOWN:case ri.DEADLINE_EXCEEDED:case ri.RESOURCE_EXHAUSTED:case ri.INTERNAL:case ri.UNAVAILABLE:case ri.UNAUTHENTICATED:return!1;case ri.INVALID_ARGUMENT:case ri.NOT_FOUND:case ri.ALREADY_EXISTS:case ri.PERMISSION_DENIED:case ri.FAILED_PRECONDITION:case ri.ABORTED:case ri.OUT_OF_RANGE:case ri.UNIMPLEMENTED:case ri.DATA_LOSS:return!0}}(t)&&t!==ri.ABORTED}(e.code)){const n=t.b_.shift();mh(t).Yo(),await sh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ih(t)}}(t,e),ch(t)&&uh(t)}async function ph(t,e){const n=ni(t);n.asyncQueue.verifyOperationInProgress(),Ys("RemoteStore","RemoteStore received new credentials");const r=Ju(n);n.C_.add(3),await Gu(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await zu(n)}function gh(t){return t.O_||(t.O_=function(t,e,n){const r=ni(t);return r.A_(),new Uu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}(t.datastore,t.asyncQueue,{ho:th.bind(null,t),Io:eh.bind(null,t),a_:nh.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),Xu(t)?Yu(t):t.M_.set("Unknown")):(await t.O_.stop(),Zu(t))}))),t.O_}function mh(t){return t.N_||(t.N_=function(t,e,n){const r=ni(t);return r.A_(),new Bu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:hh.bind(null,t),Io:fh.bind(null,t),T_:lh.bind(null,t),I_:dh.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await ih(t)):(await t.N_.stop(),t.b_.length>0&&(Ys("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}class yh{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new yh(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new si(ri.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(t,e){if(Xs("AsyncQueue",`${e}: ${t}`),xi(t))return new si(ri.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class wh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ii.comparator(e.key,n.key):(t,e)=>Ii.comparator(t.key,e.key),this.keyedMap=da(),this.sortedSet=new Ui(this.comparator)}static emptySet(t){return new wh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new wh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class _h{constructor(){this.B_=new Ui(Ii.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):ti():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class bh{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new bh(t,e,wh.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&na(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Eh{constructor(){this.k_=void 0,this.listeners=[]}}class Th{constructor(){this.queries=new ca((t=>ra(t)),na),this.onlineState="Unknown",this.q_=new Set}}async function Ih(t,e){const n=ni(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Eh),s)try{i.k_=await n.onListen(r)}catch(t){const n=vh(t,`Initialization of query '${sa(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Dh(n)}async function Sh(t,e){const n=ni(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ch(t,e){const n=ni(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.K_(s)&&(r=!0);e.k_=s}}r&&Dh(n)}function Ah(t,e,n){const r=ni(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Dh(t){t.q_.forEach((t=>{t.next()}))}class Nh{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=bh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class kh{constructor(t){this.key=t}}class Rh{constructor(t){this.key=t}}class xh{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=wa(),this.mutatedKeys=wa(),this._a=oa(t),this.aa=new wh(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new _h,r=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=ia(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ha(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this._a(h,a)>0||c&&this._a(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{aa:i,la:n,Zi:o,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ti()}};return n(t)-n(e)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n);const i=e?this.Ia():[],o=0===this.oa.size&&this.current?1:0,a=o!==this.sa;return this.sa=o,0!==s.length||a?{snapshot:new bh(this.query,t.aa,r,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:i}:{Ta:i}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new _h,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=wa(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new Rh(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new kh(n))})),e}da(t){this.ia=t.ls,this.oa=wa();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return bh.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class Oh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mh{constructor(t){this.key=t,this.Ra=!1}}class Lh{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Va={},this.ma=new ca((t=>ra(t)),na),this.fa=new Map,this.ga=new Set,this.pa=new Ui(Ii.comparator),this.ya=new Map,this.wa=new ou,this.Sa={},this.ba=new Map,this.Da=tu.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function Ph(t,e){const n=function(t){const e=ni(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qh.bind(null,e),e.Va.a_=Ch.bind(null,e.eventManager),e.Va.Fa=Ah.bind(null,e.eventManager),e}(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const t=await function(t,e){const n=ni(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qr.getTargetData(t,e).next((s=>s?(r=s,Ri.resolve(r)):n.qr.allocateTargetId(t).next((s=>(r=new Wc(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}(n.localStore,Jo(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await async function(t,e,n,r,s){t.va=(e,n,r)=>async function(t,e,n,r){let s=e.view.ca(n);s.Zi&&(s=await Iu(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Qh(t,e.targetId,o.Ta),o.snapshot}(t,e,n,r);const i=await Iu(t.localStore,e,!0),o=new xh(e,i.ls),a=o.ca(i.documents),c=dc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Qh(t,n,u.Ta);const h=new Oh(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}(n,e,r,"current"===i,t.resumeToken),n.isPrimaryClient&&Ku(n.remoteStore,t)}return s}async function Fh(t,e){const n=ni(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter((t=>!na(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Tu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Hu(n.remoteStore,r.targetId),Kh(n,r.targetId)})).catch(ki)):(Kh(n,r.targetId),await Tu(n.localStore,r.targetId,!0))}async function Vh(t,e,n){const r=function(t){const e=ni(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$h.bind(null,e),e}(t);try{const t=await function(t,e){const n=ni(t),r=vi.now(),s=e.reduce(((t,e)=>t.add(e.key)),wa());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ha(),c=wa();return n.ss.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=$a(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ka(t.key,e,wo(e.value.mapValue),Fa.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:fa(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Sa[t.currentUser.toKey()];r||(r=new Ui(mi)),r=r.insert(e,n),t.Sa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Xh(r,t.changes),await ih(r.remoteStore)}catch(t){const e=vh(t,"Failed to persist write");n.reject(e)}}async function Uh(t,e){const n=ni(t);try{const t=await bu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ya.get(e);r&&(ei(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?ei(r.Ra):t.removedDocuments.size>0&&(ei(r.Ra),r.Ra=!1))})),await Xh(n,t,e)}catch(t){await ki(t)}}function Bh(t,e,n){const r=ni(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ma.forEach(((n,r)=>{const s=r.view.Q_(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ni(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Q_(e)&&(r=!0)})),r&&Dh(n)}(r.eventManager,e),t.length&&r.Va.a_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qh(t,e,n){const r=ni(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let t=new Ui(Ii.comparator);t=t.insert(i,_o.newNoDocument(i,wi.min()));const n=wa().add(i),s=new lc(wi.min(),new Map,new Ui(mi),t,n);await Uh(r,s),r.pa=r.pa.remove(i),r.ya.delete(e),Yh(r)}else await Tu(r.localStore,e,!1).then((()=>Kh(r,e,n))).catch(ki)}async function jh(t,e){const n=ni(t),r=e.batch.batchId;try{const t=await function(t,e){const n=ni(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Ri.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);ei(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=wa();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);Gh(n,r,null),zh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xh(n,t)}catch(t){await ki(t)}}async function $h(t,e,n){const r=ni(t);try{const t=await function(t,e){const n=ni(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ei(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Gh(r,e,n),zh(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xh(r,t)}catch(n){await ki(n)}}function zh(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function Gh(t,e,n){const r=ni(t);let s=r.Sa[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||Hh(t,e)}))}function Hh(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(Hu(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Yh(t))}function Qh(t,e,n){for(const r of n)r instanceof kh?(t.wa.addReference(r.key,e),Wh(t,r)):r instanceof Rh?(Ys("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Hh(t,r.key)):ti()}function Wh(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(Ys("SyncEngine","New document in limbo: "+n),t.ga.add(r),Yh(t))}function Yh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Ii(bi.fromString(e)),r=t.Da.next();t.ya.set(r,new Mh(n)),t.pa=t.pa.insert(n,r),Ku(t.remoteStore,new Wc(Jo(Qo(n.path)),r,"TargetPurposeLimboResolution",Oi._e))}}async function Xh(t,e,n){const r=ni(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((t,a)=>{o.push(r.va(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=gu.Qi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Va.a_(s),await async function(t,e){const n=ni(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ri.forEach(e,(e=>Ri.forEach(e.ki,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ri.forEach(e.qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!xi(t))throw t;Ys("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ts.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(t,s)}}}(r.localStore,i))}async function Jh(t,e){const n=ni(t);if(!n.currentUser.isEqual(e)){Ys("SyncEngine","User change. New user:",e.toKey());const t=await wu(n.localStore,e);n.currentUser=e,function(t,e){t.ba.forEach((t=>{t.forEach((t=>{t.reject(new si(ri.CANCELLED,e))}))})),t.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xh(n,t._s)}}function Zh(t,e){const n=ni(t),r=n.ya.get(e);if(r&&r.Ra)return wa().add(r.key);{let t=wa();const r=n.fa.get(e);if(!r)return t;for(const e of r){const r=n.ma.get(e);t=t.unionWith(r.view.ua)}return t}}class tl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Pu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,r){return new vu(t,e,n,r)}(this.persistence,new yu,t.initialUser,this.serializer)}createPersistence(t){return new du(pu.jr,this.serializer)}createSharedClientState(t){return new Cu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class el{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jh.bind(null,this.syncEngine),await async function(t,e){const n=ni(t);e?(n.C_.delete(2),await zu(n)):e||(n.C_.add(2),await Gu(n),n.M_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Th}createDatastore(t){const e=Pu(t.databaseInfo.databaseId),n=function(t){return new Mu(t)}(t.databaseInfo);return function(t,e,n,r){return new qu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new $u(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,(t=>Bh(this.syncEngine,t,0)),Du.D()?new Du:new Au)}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Lh(t,e,n,r,s,i);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ni(t);Ys("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await Gu(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class nl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Xs("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class rl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ks.UNAUTHENTICATED,this.clientId=gi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ys("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ys("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new si(ri.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),Ys("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await wu(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function il(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ys("FirestoreClient","Using user provided OfflineComponentProvider");try{await sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(t){return"FirebaseError"===t.name?t.code===ri.FAILED_PRECONDITION||t.code===ri.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(r))throw r;Js("Error using user provided cache. Falling back to memory cache: "+r),await sl(t,new tl)}}else Ys("FirestoreClient","Using default OfflineComponentProvider"),await sl(t,new tl);return t._offlineComponents}(t);Ys("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ph(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ph(e.remoteStore,n))),t._onlineComponents=e}async function ol(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ys("FirestoreClient","Using user provided OnlineComponentProvider"),await il(t,t._uninitializedComponentsProvider._online)):(Ys("FirestoreClient","Using default OnlineComponentProvider"),await il(t,new el))),t._onlineComponents}async function al(t){const e=await ol(t),n=e.eventManager;return n.onListen=Ph.bind(null,e.syncEngine),n.onUnlisten=Fh.bind(null,e.syncEngine),n}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function cl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */}const ul=new Map;
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function hl(t,e,n){if(!n)throw new si(ri.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ll(t){if(!Ii.isDocumentKey(t))throw new si(ri.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dl(t){if(Ii.isDocumentKey(t))throw new si(ri.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ti()}function pl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new si(ri.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new si(ri.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class gl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new si(ri.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new si(ri.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new si(ri.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new si(ri.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new si(ri.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new si(ri.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ml{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new si(ri.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new si(ri.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ai;switch(t.type){case"firstParty":return new li(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new si(ri.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ul.get(t);e&&(Ys("ComponentProvider","Removing Datastore"),ul.delete(t),e.terminate())}(this),Promise.resolve()}}function yl(t,e,n,r={}){var s;const i=(t=pl(t,ml))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Ks.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(i)),""].join(".")}(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new si(ri.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ks(i)}t._authCredentials=new ci(new oi(e,n))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class vl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new vl(this.firestore,t,this._query)}}class wl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _l(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wl(this.firestore,t,this._key)}}class _l extends vl{constructor(t,e,n){super(t,e,Qo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wl(this.firestore,null,new Ii(t))}withConverter(t){return new _l(this.firestore,t,this._path)}}function bl(t,e,...n){if(t=S(t),hl("collection","path",e),t instanceof ml){const r=bi.fromString(e,...n);return dl(r),new _l(t,null,r)}{if(!(t instanceof wl||t instanceof _l))throw new si(ri.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(bi.fromString(e,...n));return dl(r),new _l(t.firestore,null,r)}}function El(t,e,...n){if(t=S(t),1===arguments.length&&(e=gi.newId()),hl("doc","path",e),t instanceof ml){const r=bi.fromString(e,...n);return ll(r),new wl(t,null,new Ii(r))}{if(!(t instanceof wl||t instanceof _l))throw new si(ri.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(bi.fromString(e,...n));return ll(r),new wl(t.firestore,t instanceof _l?t.converter:null,new Ii(r))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Tl{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Fu(this,"async_queue_retry"),this.iu=()=>{const t=Lu();t&&Ys("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=Lu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Lu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new ii;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!xi(t))throw t;Ys("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t);throw Xs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=yh.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(r),r}su(){this.eu&&ti()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function Il(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t,["next","error","complete"])}class Sl extends ml{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Tl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Al(this),this._firestoreClient.terminate()}}function Cl(t){return t._firestoreClient||Al(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Al(t){var e,n,r;const s=t._freezeSettings(),i=function(t,e,n,r){return new to(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,cl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new rl(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Dl{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Nl{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class kl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kl(Ki.fromBase64String(t))}catch(t){throw new si(ri.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new kl(Ki.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Rl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new si(ri.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ti(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class xl{constructor(t){this._methodName=t}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Ol{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new si(ri.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new si(ri.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return mi(this._lat,t._lat)||mi(this._long,t._long)}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Ml=/^__.*__$/;class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ka(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ga(t,this.data,e,this.fieldTransforms)}}class Pl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ka(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Fl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ti()}}class Vl{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Vl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Xl(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(Fl(this.Iu)&&Ml.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Ul{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Pu(t)}pu(t,e,n,r=!1){return new Vl({Iu:t,methodName:e,gu:n,path:Ti.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bl(t){const e=t._freezeSettings(),n=Pu(t._databaseId);return new Ul(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ql(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Hl("Data must be an object, but it was:",o,r);const a=Gl(r,o);let c,u;if(i.merge)c=new zi(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Ql(e,r,n);if(!o.contains(s))throw new si(ri.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Jl(t,s)||t.push(s)}c=new zi(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Ll(new vo(a),c,u)}class jl extends xl{_toFieldTransform(t){if(2!==t.Iu)throw 1===t.Iu?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jl}}function $l(t,e,n,r=!1){return zl(n,t.pu(r?4:3,e))}function zl(t,e){if(Kl(t=S(t)))return Hl("Unsupported field value:",e,t),Gl(t,e);if(t instanceof xl)return function(t,e){if(!Fl(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=zl(s,e.Vu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=S(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ta(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=vi.fromDate(t);return{timestampValue:Sc(e.serializer,n)}}if(t instanceof vi){const n=new vi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Sc(e.serializer,n)}}if(t instanceof Ol)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof kl)return{bytesValue:Cc(e.serializer,t._byteString)};if(t instanceof wl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Nc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${fl(t)}`)}(t,e)}function Gl(t,e){const n={};return Vi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,((t,r)=>{const s=zl(r,e.Eu(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Kl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof vi||t instanceof Ol||t instanceof kl||t instanceof wl||t instanceof xl)}function Hl(t,e,n){if(!Kl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=fl(n);throw"an object"===r?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Ql(t,e,n){if((e=S(e))instanceof Rl)return e._internalPath;if("string"==typeof e)return Yl(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wl=new RegExp("[~\\*/\\[\\]]");function Yl(t,e,n){if(e.search(Wl)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rl(...e.split("."))._internalPath}catch(Vt){throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new si(ri.INVALID_ARGUMENT,a+t+c)}function Jl(t,e){return t.some((t=>t.isEqual(e)))}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class Zl{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new td(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ed("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class td extends Zl{data(){return super.data()}}function ed(t,e){return"string"==typeof e?Yl(t,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function nd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new si(ri.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rd{}class sd extends rd{}function id(t,e,...n){let r=[];e instanceof rd&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof cd)).length,n=t.filter((t=>t instanceof od)).length;if(e>1||e>0&&n>0)throw new si(ri.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(r);for(const s of r)t=s._apply(t);return t}class od extends sd{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new od(t,e,n)}_apply(t){const e=this._parse(t);return yd(t._query,e),new vl(t.firestore,t.converter,ta(t._query,e))}_parse(t){const e=Bl(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new si(ri.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){md(o,i);const e=[];for(const n of o)e.push(gd(r,t,n));a={arrayValue:{values:e}}}else a=gd(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||md(o,i),a=$l(n,e,o,"in"===i||"not-in"===i);return Ao.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function ad(t,e,n){const r=e,s=ed("where",t);return od._create(s,r,n)}class cd extends rd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new cd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Do.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)yd(n,s),n=ta(n,s)}(t._query,e),new vl(t.firestore,t.converter,ta(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ud extends sd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ud(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new si(ri.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new si(ri.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Io(e,n)}(t._query,this._field,this._direction);return new vl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ho(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function hd(t,e="asc"){const n=e,r=ed("orderBy",t);return ud._create(r,n)}class ld extends sd{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new ld(t,e,n)}_apply(t){return new vl(t.firestore,t.converter,ea(t._query,this._limit,this._limitType))}}function dd(t){return function(t,e){if(e<=0)throw new si(ri.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}("limit",t),ld._create("limit",t,"F")}class fd extends sd{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new fd(t,e,n)}_apply(t){const e=function(t,e,n,r){if(n[0]=S(n[0]),n[0]instanceof Zl)return function(t,e,n,r,s){if(!r)throw new si(ri.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Xo(t))if(o.field.isKeyField())i.push(ho(e,r.key));else{const t=r.data.field(o.field);if(Xi(t))throw new si(ri.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new si(ri.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new bo(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Bl(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new si(ri.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new si(ri.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Yo(t)&&-1!==i.indexOf("/"))throw new si(ri.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(bi.fromString(i));if(!Ii.isDocumentKey(n))throw new si(ri.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new Ii(n);a.push(ho(e,s))}else{const t=$l(n,r,i);a.push(t)}}return new bo(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}(t,this.type,this._docOrFields,this._inclusive);return new vl(t.firestore,t.converter,function(t,e){return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function pd(...t){return fd._create("startAfter",t,!1)}function gd(t,e,n){if("string"==typeof(n=S(n))){if(""===n)throw new si(ri.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yo(e)&&-1!==n.indexOf("/"))throw new si(ri.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(bi.fromString(n));if(!Ii.isDocumentKey(r))throw new si(ri.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ho(t,new Ii(r))}if(n instanceof wl)return ho(t,n._key);throw new si(ri.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fl(n)}.`)}function md(t,e){if(!Array.isArray(t)||0===t.length)throw new si(ri.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yd(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new si(ri.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new si(ri.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class vd{convertValue(t,e="none"){switch(ro(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Wi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ti()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Fi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Ol(Wi(t.latitude),Wi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ji(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Zi(t));default:return null}}convertTimestamp(t){const e=Qi(t);return new vi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=bi.fromString(t);ei(Qc(n));const r=new eo(n.get(1),n.get(3)),s=new Ii(n.popFirst(5));return r.isEqual(e)||Xs(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class wd{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _d extends Zl{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new bd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ed("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class bd extends _d{data(t={}){return super.data(t)}}class Ed{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new wd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new bd(this._firestore,this._userDataWriter,n.key,n,new wd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new si(ri.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new bd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new wd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new bd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new wd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Td(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Td(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ti()}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Id(t){t=pl(t,wl);const e=pl(t.firestore,Sl);return function(t,e,n={}){const r=new ii;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new nl({next:i=>{e.enqueueAndForget((()=>Sh(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new si(ri.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new si(ri.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Nh(Qo(n.path),i,{includeMetadataChanges:!0,J_:!0});return Ih(t,o)}(await al(t),t.asyncQueue,e,n,r))),r.promise}(Cl(e),t._key).then((n=>kd(e,t,n)))}class Sd extends vd{constructor(t){super(),this.firestore=t}convertBytes(t){return new kl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wl(this.firestore,null,e)}}function Cd(t){t=pl(t,vl);const e=pl(t.firestore,Sl),n=Cl(e),r=new Sd(e);return nd(t._query),function(t,e,n={}){const r=new ii;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new nl({next:n=>{e.enqueueAndForget((()=>Sh(t,o))),n.fromCache&&"server"===r.source?s.reject(new si(ri.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Nh(n,i,{includeMetadataChanges:!0,J_:!0});return Ih(t,o)}(await al(t),t.asyncQueue,e,n,r))),r.promise}(n,t._query).then((n=>new Ed(e,r,t,n)))}function Ad(t,e,n){t=pl(t,wl);const r=pl(t.firestore,Sl),s=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t.converter,e,n);return Nd(r,[ql(Bl(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Fa.none())])}function Dd(t,e,n,...r){t=pl(t,wl);const s=pl(t.firestore,Sl),i=Bl(s);let o;return o="string"==typeof(e=S(e))||e instanceof Rl?function(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[Ql(e,r,n)],c=[s];if(i.length%2!=0)throw new si(ri.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ql(e,i[d])),c.push(i[d+1]);const u=[],h=vo.empty();for(let d=a.length-1;d>=0;--d)if(!Jl(u,a[d])){const t=a[d];let e=c[d];e=S(e);const n=o.Ru(t);if(e instanceof jl)u.push(t);else{const r=zl(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new zi(u);return new Pl(h,l,o.fieldTransforms)}(i,"updateDoc",t._key,e,n,r):function(t,e,n,r){const s=t.pu(1,e,n);Hl("Data must be an object, but it was:",s,r);const i=[],o=vo.empty();Fi(r,((t,r)=>{const a=Yl(e,t,n);r=S(r);const c=s.Ru(a);if(r instanceof jl)i.push(a);else{const t=zl(r,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new zi(i);return new Pl(o,a,s.fieldTransforms)}(i,"updateDoc",t._key,e),Nd(s,[o.toMutation(t._key,Fa.exists(!0))])}function Nd(t,e){return function(t,e){const n=new ii;return t.asyncQueue.enqueueAndForget((async()=>Vh(await function(t){return ol(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Cl(t),e)}function kd(t,e,n){const r=n.docs.get(e._key),s=new Sd(t);return new _d(t,s,e._key,r,new wd(n.hasPendingWrites,n.fromCache),e.converter)}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Rd(t){return function(t,e){const n=pl(t.firestore,Sl),r=Cl(n),s=function(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}(e,((t,e)=>new ec(e,t.aggregateType,t._internalFieldPath)));return function(t,e,n){const r=new ii;return t.asyncQueue.enqueueAndForget((async()=>{try{const s=await function(t){return ol(t).then((t=>t.datastore))}(t);r.resolve(async function(t,e,n){var r;const s=ni(t),{request:i,R_:o}=function(t,e,n){const r=Vc(t,e),s={},i=[];let o=0;return n.forEach((t=>{const e="aggregate_"+o++;s[e]=t.alias,"count"===t.aggregateType?i.push({alias:e,count:{}}):"avg"===t.aggregateType?i.push({alias:e,avg:{field:zc(t.fieldPath)}}):"sum"===t.aggregateType&&i.push({alias:e,sum:{field:zc(t.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:i,structuredQuery:r.structuredQuery},parent:r.parent},R_:s}}(s.serializer,function(t){const e=ni(t);return e.Pe||(e.Pe=Zo(e,t.explicitOrderBy)),e.Pe}(e),n),a=i.parent;s.connection.yo||delete i.parent;const c=(await s.Co("RunAggregationQuery",a,i,1)).filter((t=>!!t.result));ei(1===c.length);const u=null===(r=c[0].result)||void 0===r?void 0:r.aggregateFields;return Object.keys(u).reduce(((t,e)=>(t[o[e]]=u[e],t)),{})}(s,e,n))}catch(t){r.reject(t)}})),r.promise}(r,t._query,s).then((e=>function(t,e,n){const r=new Sd(t);return new Nl(e,r,n)}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(n,t,e)))}(t,{count:new Dl("count")})}let xd;!function(t,e=!0){!function(t){Hs=t}("10.6.0"),ut(new C("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new Sl(new ui(t.getProvider("auth-internal")),new fi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new si(ri.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eo(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),ft(Gs,"4.3.2",t),ft(Gs,"4.3.2","esm2017")}();const Od=new Uint8Array(16);function Md(){if(!xd&&(xd="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xd))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xd(Od)}const Ld=[];for(let t=0;t<256;++t)Ld.push((t+256).toString(16).slice(1));const Pd={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Fd(t,e,n){if(Pd.randomUUID&&!e&&!t)return Pd.randomUUID();const r=(t=t||{}).random||(t.rng||Md)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return function(t,e=0){return Ld[t[e+0]]+Ld[t[e+1]]+Ld[t[e+2]]+Ld[t[e+3]]+"-"+Ld[t[e+4]]+Ld[t[e+5]]+"-"+Ld[t[e+6]]+Ld[t[e+7]]+"-"+Ld[t[e+8]]+Ld[t[e+9]]+"-"+Ld[t[e+10]]+Ld[t[e+11]]+Ld[t[e+12]]+Ld[t[e+13]]+Ld[t[e+14]]+Ld[t[e+15]]}(r)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
ft("firebase","10.6.0","app");const Vd=dt({apiKey:"AIzaSyDglu9H4HOJipz9iSWbUKEuO-pjMfxg79k",authDomain:"real-estate-72f54.firebaseapp.com",databaseURL:"https://real-estate-72f54-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"real-estate-72f54",storageBucket:"real-estate-72f54.appspot.com",messagingSenderId:"592970894895",appId:"1:592970894895:web:3a96a3204cd5a702a8c0da"}),Ud=t("f",function(t,e){const n="object"==typeof t?t:function(t=st){const e=ot.get(t);if(!e&&t===st&&v())return dt();if(!e)throw ht.create("no-app",{appName:t});return e}(),r="string"==typeof t?t:e||"(default)",s=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=y("firestore");t&&yl(s,...t)}return s}(Vd));function Bd(t,{phoneNumber:e,name:n,email:r,status:s}){switch(e&&(t=id(t,ad("phoneNumber","==",e))),n&&(t=id(t,ad("name","==",n))),r&&(t=id(t,ad("email","==",r))),s){case"isOnTrial":t=id(t,ad("isOnTrial","==",!0));break;case"isPurchased":t=id(t,ad("isPurchased","==",!0));break;case"isWannaTry":t=id(t,ad("isWannaTry","==",!0));break;case"wantToContact":t=id(t,ad("wantToContact","==",!0));break;case"noStatus":t=id(t,ad("isOnTrial","==",!1),ad("isPurchased","==",!1),ad("isWannaTry","==",!1));break;case"isActive":t=id(t,ad("isActive","==",!0));break;case"isBlocked":t=id(t,ad("isBlocked","==",!0));break;default:return t}return t}async function qd(t,e,n,r="users"){let s=id(bl(Ud,r));s=Bd(s,{phoneNumber:t,name:e,email:n});const i=await Cd(s);return i?.docs?.map((t=>({id:t.id,...t.data()})))}async function jd(t,e){const n=id((t?bl(Ud,t):void 0)??e);return(await Rd(n)).data().count}}}}));
