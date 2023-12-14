import{r as t,i as e}from"./makeStyle-2de5b8bd.js";import{j as n,an as r}from"./vendor-6f257c0b.js";var s={},i=e;Object.defineProperty(s,"__esModule",{value:!0});var o=s.default=void 0,a=n,c=(0,i(t()).default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");o=s.default=c;
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
const u=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length?n[t.charAt(s)]:0;++s;const o=s<t.length?n[t.charAt(s)]:64;++s;const a=s<t.length?n[t.charAt(s)]:64;if(++s,null==e||null==i||null==o||null==a)throw new l;const c=e<<2|i>>4;if(r.push(c),64!==o){const t=i<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d=function(t){return function(t){const e=u(t);return h.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
const f=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.global)return r.global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&function(t){try{return h.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(t[1]);return e&&JSON.parse(e)},g=()=>{try{return f()||(()=>{if(void 0===r.process||void 0===r.process.env)return;const t={}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{const e=(t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
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
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(b,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new w(r,o,n)}}const b=/\{\$([^}]+)}/g;function E(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(T(n)&&T(i)){if(!E(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function T(t){return null!==t&&"object"==typeof t}
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
 */function I(t){return t&&t._delegate?t._delegate:t}class S{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const C="[DEFAULT]";
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
 */class A{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new v;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===C?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new A(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */var N,k;(k=N||(N={}))[k.DEBUG=0]="DEBUG",k[k.VERBOSE=1]="VERBOSE",k[k.INFO=2]="INFO",k[k.WARN=3]="WARN",k[k.ERROR=4]="ERROR",k[k.SILENT=5]="SILENT";const R={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},x=N.INFO,O={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},M=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=O[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class L{constructor(t){this.name=t,this._logLevel=x,this._logHandler=M,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?R[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const P=(t,e)=>e.some((e=>t instanceof e));let F,V;const U=new WeakMap,B=new WeakMap,q=new WeakMap,j=new WeakMap,$=new WeakMap;let z={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return B.get(t);if("objectStoreNames"===e)return t.objectStoreNames||q.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function G(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(V||(V=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Q(this),e),H(U.get(this))}:function(...e){return H(t.apply(Q(this),e))}:function(e,...n){const r=t.call(Q(this),e,...n);return q.set(r,e.sort?e.sort():[e]),H(r)}}function K(t){return"function"==typeof t?G(t):(t instanceof IDBTransaction&&function(t){if(B.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));B.set(t,e)}(t),P(t,F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,z):t)}function H(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(H(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&U.set(e,t)})).catch((()=>{})),$.set(e,t),e}(t);if(j.has(t))return j.get(t);const e=K(t);return e!==t&&(j.set(t,e),$.set(e,t)),e}const Q=t=>$.get(t);const W=["get","getKey","getAll","getAllKeys","count"],Y=["put","add","delete","clear"],X=new Map;function J(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(X.get(e))return X.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!W.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return X.set(e,i),i}z=(t=>({...t,get:(e,n,r)=>J(e,n)||t.get(e,n,r),has:(e,n)=>!!J(e,n)||t.has(e,n)}))(z);
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
class Z{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const tt="@firebase/app",et="0.9.23",nt=new L("@firebase/app"),rt="[DEFAULT]",st={[tt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},it=new Map,ot=new Map;function at(t,e){try{t.container.addComponent(e)}catch(n){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ct(t){const e=t.name;if(ot.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;ot.set(e,t);for(const n of it.values())at(n,t);return!0}
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
const ut=new _("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ht{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new S("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}
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
 */function lt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:rt,automaticDataCollectionEnabled:!1},e),s=r.name;if("string"!=typeof s||!s)throw ut.create("bad-app-name",{appName:String(s)});if(n||(n=y()),!n)throw ut.create("no-options");const i=it.get(s);if(i){if(E(n,i.options)&&E(r,i.config))return i;throw ut.create("duplicate-app",{appName:s})}const o=new D(s);for(const c of ot.values())o.addComponent(c);const a=new ht(n,r,o);return it.set(s,a),a}function dt(t,e,n){var r;let s=null!==(r=st[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void nt.warn(t.join(" "))}ct(new S(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
 */const ft="firebase-heartbeat-database",pt=1,gt="firebase-heartbeat-store";let mt=null;function yt(){return mt||(mt=function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=H(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(H(o.result),t.oldVersion,t.newVersion,H(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(ft,pt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(gt)}}).catch((t=>{throw ut.create("idb-open",{originalErrorMessage:t.message})}))),mt}async function vt(t,e){try{const n=(await yt()).transaction(gt,"readwrite"),r=n.objectStore(gt);await r.put(e,wt(t)),await n.done}catch(n){if(n instanceof w)nt.warn(n.message);else{const t=ut.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});nt.warn(t.message)}}}function wt(t){return`${t.name}!${t.options.appId}`}
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
 */class _t{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Et(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t;const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=bt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=bt(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Tt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=d(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bt(){return(new Date).toISOString().substring(0,10)}class Et{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await yt();return await e.transaction(gt).objectStore(gt).get(wt(t))}catch(e){if(e instanceof w)nt.warn(e.message);else{const t=ut.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});nt.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return vt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return vt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Tt(t){return d(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var It;It="",ct(new S("platform-logger",(t=>new Z(t)),"PRIVATE")),ct(new S("heartbeat",(t=>new _t(t)),"PRIVATE")),dt(tt,et,It),dt(tt,et,"esm2017"),dt("fire-js","");var St,Ct="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.global?r.global:"undefined"!=typeof self?self:{},At=At||{},Dt=Ct||self;function Nt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function kt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Rt="closure_uid_"+(1e9*Math.random()>>>0),xt=0;function Ot(t,e,n){return t.call.apply(t.bind,arguments)}function Mt(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return(Lt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ot:Mt).apply(null,arguments)}function Pt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ft(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function Vt(){this.s=this.s,this.o=this.o}Vt.prototype.s=!1,Vt.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Rt)&&t[Rt]||(t[Rt]=++xt))},Vt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ut=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bt(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qt(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(Nt(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!Dt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Dt.addEventListener("test",(()=>{}),e),Dt.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function zt(t){return/^[\s\xa0]*$/.test(t)}function Gt(){var t=Dt.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return-1!=Gt().indexOf(t)}function Ht(t){return Ht[" "](t),t}Ht[" "]=function(){};var Qt,Wt,Yt,Xt=Kt("Opera"),Jt=Kt("Trident")||Kt("MSIE"),Zt=Kt("Edge"),te=Zt||Jt,ee=Kt("Gecko")&&!(-1!=Gt().toLowerCase().indexOf("webkit")&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),ne=-1!=Gt().toLowerCase().indexOf("webkit")&&!Kt("Edge");function re(){var t=Dt.document;return t?t.documentMode:void 0}t:{var se="",ie=(Wt=Gt(),ee?/rv:([^\);]+)(\)|;)/.exec(Wt):Zt?/Edge\/([\d\.]+)/.exec(Wt):Jt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Wt):ne?/WebKit\/(\S+)/.exec(Wt):Xt?/(?:Version)[ \/]?(\S+)/.exec(Wt):void 0);if(ie&&(se=ie?ie[1]:""),Jt){var oe=re();if(null!=oe&&oe>parseFloat(se)){Qt=String(oe);break t}}Qt=se}if(Dt.document&&Jt){var ae=re();Yt=ae||(parseInt(Qt,10)||void 0)}else Yt=void 0;var ce=Yt;function ue(t,e){if(jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ee){t:{try{Ht(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:he[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ue.$.h.call(this)}}Ft(ue,jt);var he={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++de,this.fa=this.ia=!1}function pe(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ge(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function me(t){const e={};for(const n in t)e[n]=t[n];return e}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<ye.length;e++)n=ye[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function we(t){this.src=t,this.g={},this.h=0}function _e(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Ut(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pe(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function be(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}we.prototype.add=function(t,e,n,r,s){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=be(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new fe(e,this.src,i,!!r,s)).ia=n,t.push(e)),e};var Ee="closure_lm_"+(1e6*Math.random()|0),Te={};function Ie(t,e,n,r,s){if(r&&r.once)return Ce(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ie(t,e[i],n,r,s);return null}return n=Oe(n),t&&t[le]?t.O(e,n,kt(r)?!!r.capture:!!r,s):Se(t,e,n,!1,r,s)}function Se(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=kt(s)?!!s.capture:!!s,a=Re(t);if(a||(t[Ee]=a=new we(t)),(n=a.add(e,n,r,o,i)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ke;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)$t||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ne(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Ce(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ce(t,e[i],n,r,s);return null}return n=Oe(n),t&&t[le]?t.P(e,n,kt(r)?!!r.capture:!!r,s):Se(t,e,n,!0,r,s)}function Ae(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ae(t,e[i],n,r,s);else r=kt(r)?!!r.capture:!!r,n=Oe(n),t&&t[le]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=be(i=t.g[e],n,r,s))&&(pe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Re(t))&&(e=t.g[e.toString()],t=-1,e&&(t=be(e,n,r,s)),(n=-1<t?e[t]:null)&&De(n))}function De(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[le])_e(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ne(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Re(e))?(_e(n,t),0==n.h&&(n.src=null,e[Ee]=null)):pe(t)}}}function Ne(t){return t in Te?Te[t]:Te[t]="on"+t}function ke(t,e){if(t.fa)t=!0;else{e=new ue(e,this);var n=t.listener,r=t.la||t.src;t.ia&&De(t),t=n.call(r,e)}return t}function Re(t){return(t=t[Ee])instanceof we?t:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oe(t){return"function"==typeof t?t:(t[xe]||(t[xe]=function(e){return t.handleEvent(e)}),t[xe])}function Me(){Vt.call(this),this.i=new we(this),this.S=this,this.J=null}function Le(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new jt(e,t);else if(e instanceof jt)e.target=e.target||t;else{var s=e;ve(e=new jt(r,t),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Pe(o,r,!0,e)&&s}if(s=Pe(o=e.g=t,r,!0,e)&&s,s=Pe(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=Pe(o=e.g=n[i],r,!1,e)&&s}function Pe(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&_e(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Ft(Me,Vt),Me.prototype[le]=!0,Me.prototype.removeEventListener=function(t,e,n,r){Ae(this,t,e,n,r)},Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)pe(n[r]);delete e.g[t],e.h--}}this.J=null},Me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Me.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Fe=Dt.JSON.stringify;function Ve(){var t=Ge;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ue=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Be),(t=>t.reset()));class Be{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function qe(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function je(t){Dt.setTimeout((()=>{throw t}),0)}let $e,ze=!1,Ge=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ue.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Ke=()=>{const t=Dt.Promise.resolve(void 0);$e=()=>{t.then(He)}};var He=()=>{for(var t;t=Ve();){try{t.h.call(t.g)}catch(n){je(n)}var e=Ue;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ze=!1};function Qe(t,e){Me.call(this),this.h=t||1,this.g=e||Dt,this.j=Lt(this.qb,this),this.l=Date.now()}function We(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ye(t,e,n){if("function"==typeof t)n&&(t=Lt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Lt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Dt.setTimeout(t,e||0)}function Xe(t){t.g=Ye((()=>{t.g=null,t.i&&(t.i=!1,Xe(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ft(Qe,Me),(St=Qe.prototype).ga=!1,St.T=null,St.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(We(this),this.start()))}},St.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},St.N=function(){Qe.$.N.call(this),We(this),delete this.g};class Je extends Vt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(Dt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(t){Vt.call(this),this.h=t,this.g={}}Ft(Ze,Vt);var tn=[];function en(t,e,n,r){Array.isArray(n)||(n&&(tn[0]=n.toString()),n=tn);for(var s=0;s<n.length;s++){var i=Ie(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function nn(t){ge(t.g,(function(t,e){this.g.hasOwnProperty(e)&&De(t)}),t),t.g={}}function rn(){this.g=!0}function sn(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Fe(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}Ze.prototype.N=function(){Ze.$.N.call(this),nn(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},rn.prototype.Ea=function(){this.g=!1},rn.prototype.info=function(){};var on={},an=null;function cn(){return an=an||new Me}function un(t){jt.call(this,on.Ta,t)}function hn(t){const e=cn();Le(e,new un(e))}function ln(t,e){jt.call(this,on.STAT_EVENT,t),this.stat=e}function dn(t){const e=cn();Le(e,new ln(e,t))}function fn(t,e){jt.call(this,on.Ua,t),this.size=e}function pn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Dt.setTimeout((function(){t()}),e)}on.Ta="serverreachability",Ft(un,jt),on.STAT_EVENT="statevent",Ft(ln,jt),on.Ua="timingevent",Ft(fn,jt);var gn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yn(){}function vn(t){return t.h||(t.h=t.i())}function wn(){}yn.prototype.h=null;var _n,bn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function En(){jt.call(this,"d")}function Tn(){jt.call(this,"c")}function In(){}function Sn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ze(this),this.P=An,t=te?125:void 0,this.V=new Qe(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Cn}function Cn(){this.i=null,this.g="",this.h=!1}Ft(En,jt),Ft(Tn,jt),Ft(In,yn),In.prototype.g=function(){return new XMLHttpRequest},In.prototype.i=function(){return{}},_n=new In;var An=45e3,Dn={},Nn={};function kn(t,e,n){t.L=1,t.v=Wn(zn(e)),t.s=n,t.S=!0,Rn(t,null)}function Rn(t,e){t.G=Date.now(),Ln(t),t.A=zn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),cr(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Cn,t.g=cs(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Je(Lt(t.Pa,t,t.g),t.O)),en(t.U,t.g,"readystatechange",t.nb),e=t.I?me(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),hn(),function(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function xn(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function On(t,e,n){let r,s=!0;for(;!t.J&&t.C<n.length;){if(r=Mn(t,n),r==Nn){4==e&&(t.o=4,dn(14),s=!1),sn(t.j,t.m,null,"[Incomplete Response]");break}if(r==Dn){t.o=4,dn(15),sn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}sn(t.j,t.m,r,null),Bn(t,r)}xn(t)&&r!=Nn&&r!=Dn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,dn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ts(e),e.M=!0,dn(11))):(sn(t.j,t.m,n,"[Invalid Chunked Response]"),Un(t),Vn(t))}function Mn(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Nn:(n=Number(e.substring(n,r)),isNaN(n)?Dn:(r+=1)+n>e.length?Nn:(e=e.slice(r,r+n),t.C=r+n,e))}function Ln(t){t.Y=Date.now()+t.P,Pn(t,t.P)}function Pn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pn(Lt(t.lb,t),e)}function Fn(t){t.B&&(Dt.clearTimeout(t.B),t.B=null)}function Vn(t){0==t.l.H||t.J||rs(t.l,t)}function Un(t){Fn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,We(t.V),nn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bn(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||gr(n.i,t)))if(!t.K&&gr(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;ns(n),Kr(n)}Zr(n),dn(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=pn(Lt(n.ib,n),6e3));if(1>=pr(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else is(n,11)}else if((t.K||n.g==t)&&ns(n),!zt(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const s=u[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(mr(i,i.h),i.h=null))}if(r.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Qn(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=as(r,r.J?r.pa:null,r.Y),o.K){yr(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Fn(a),Ln(a)),r.g=o}else Jr(r);0<n.j.length&&Qr(n)}else"stop"!=u[0]&&"close"!=u[0]||is(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?is(n,7):Gr(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}hn()}catch(u){}}function qn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Nt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Nt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Nt(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}(St=Sn.prototype).setTimeout=function(t){this.P=t},St.nb=function(t){t=t.target;const e=this.M;e&&3==Ur(t)?e.l():this.Pa(t)},St.Pa=function(t){try{if(t==this.g)t:{const h=Ur(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||te||this.g&&(this.h.h||this.g.ja()||Br(this.g)))){this.J||4!=h||7==e||hn(),Fn(this);var n=this.g.da();this.ca=n;e:if(xn(this)){var r=Br(this.g);t="";var s=r.length,i=4==Ur(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Un(this),Vn(this);var o="";break e}this.h.i=new Dt.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zt(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,dn(12),Un(this),Vn(this);break t}sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bn(this,n)}this.S?(On(this,h,o),te&&this.i&&3==h&&(en(this.U,this.V,"tick",this.mb),this.V.start())):(sn(this.j,this.m,o,null),Bn(this,o)),4==h&&Un(this),this.i&&!this.J&&(4==h?rs(this.l,this):(this.i=!1,Ln(this)))}else(function(t){const e={};t=(t.g&&2<=Ur(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(zt(t[r]))continue;var n=qe(t[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dn(12)):(this.o=0,dn(13)),Un(this),Vn(this)}}}catch(h){}},St.mb=function(){if(this.g){var t=Ur(this.g),e=this.g.ja();this.C<e.length&&(Fn(this),On(this,t,e),this.i&&4!=t&&Ln(this))}},St.cancel=function(){this.J=!0,Un(this)},St.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(hn(),dn(17)),Un(this),this.o=2,Vn(this)):Pn(this,this.Y-t)};var jn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $n(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $n){this.h=t.h,Gn(this,t.j),this.s=t.s,this.g=t.g,Kn(this,t.m),this.l=t.l;var e=t.i,n=new sr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hn(this,n),this.o=t.o}else t&&(e=String(t).match(jn))?(this.h=!1,Gn(this,e[1]||"",!0),this.s=Yn(e[2]||""),this.g=Yn(e[3]||"",!0),Kn(this,e[4]),this.l=Yn(e[5]||"",!0),Hn(this,e[6]||"",!0),this.o=Yn(e[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}function zn(t){return new $n(t)}function Gn(t,e,n){t.j=n?Yn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hn(t,e,n){e instanceof sr?(t.i=e,function(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(or(this,e),cr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Xn(e,nr)),t.i=new sr(e,t.h))}function Qn(t,e,n){t.i.set(e,n)}function Wn(t){return Qn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Jn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Jn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}$n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,Zn,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Xn(e,Zn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Xn(n,"/"==n.charAt(0)?er:tr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,rr)),t.join("")};var Zn=/[#\/\?@]/g,tr=/[#\?:]/g,er=/[#\?]/g,nr=/[#\?@]/g,rr=/#/g;function sr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function or(t,e){ir(t),e=ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ar(t,e){return ir(t),e=ur(t,e),t.g.has(e)}function cr(t,e,n){or(t,e),0<n.length&&(t.i=null,t.g.set(ur(t,e),Bt(n)),t.h+=n.length)}function ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(St=sr.prototype).add=function(t,e){ir(this),this.i=null,t=ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},St.forEach=function(t,e){ir(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},St.ta=function(){ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},St.Z=function(t){ir(this);let e=[];if("string"==typeof t)ar(this,t)&&(e=e.concat(this.g.get(ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},St.set=function(t,e){return ir(this),this.i=null,ar(this,t=ur(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},St.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},St.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var hr=class{constructor(t,e){this.g=t,this.map=e}};function lr(t){this.l=t||dr,Dt.PerformanceNavigationTiming?t=0<(t=Dt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Dt.g&&Dt.g.Ka&&Dt.g.Ka()&&Dt.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dr=10;function fr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pr(t){return t.h?1:t.g?t.g.size:0}function gr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mr(t,e){t.g?t.g.add(e):t.h=e}function yr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function vr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bt(t.i)}lr.prototype.cancel=function(){if(this.i=vr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var wr=class{stringify(t){return Dt.JSON.stringify(t,void 0)}parse(t){return Dt.JSON.parse(t,void 0)}};function _r(){this.g=new wr}function br(t,e,n){const r=n||"";try{qn(t,(function(t,n){let s=t;kt(t)&&(s=Fe(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Er(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Tr(t){this.l=t.ec||null,this.j=t.ob||!1}function Ir(t,e){Me.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Sr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ft(Tr,yn),Tr.prototype.g=function(){return new Ir(this.l,this.j)},Tr.prototype.i=function(t){return function(){return t}}({}),Ft(Ir,Me);var Sr=0;function Cr(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Ar(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dr(t)}function Dr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(St=Ir.prototype).open=function(t,e){if(this.readyState!=Sr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dr(this)},St.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Dt).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},St.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ar(this)),this.readyState=Sr},St.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Dt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cr(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},St.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ar(this):Dr(this),3==this.readyState&&Cr(this)}},St.Za=function(t){this.g&&(this.response=this.responseText=t,Ar(this))},St.Ya=function(t){this.g&&(this.response=t,Ar(this))},St.ka=function(){this.g&&Ar(this)},St.setRequestHeader=function(t,e){this.v.append(t,e)},St.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},St.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ir.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Nr=Dt.JSON.parse;function kr(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rr,this.L=this.M=!1}Ft(kr,Me);var Rr="",xr=/^https?$/i,Or=["POST","PUT"];function Mr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lr(t),Fr(t)}function Lr(t){t.F||(t.F=!0,Le(t,"complete"),Le(t,"error"))}function Pr(t){if(t.h&&void 0!==At&&(!t.C[1]||4!=Ur(t)||2!=t.da()))if(t.v&&4==Ur(t))Ye(t.La,0,t);else if(Le(t,"readystatechange"),4==Ur(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var s=String(t.I).match(jn)[1]||null;!s&&Dt.self&&Dt.self.location&&(s=Dt.self.location.protocol.slice(0,-1)),r=!xr.test(s?s.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var i=2<Ur(t)?t.g.statusText:""}catch(o){i=""}t.j=i+" ["+t.da()+"]",Lr(t)}}finally{Fr(t)}}}function Fr(t,e){if(t.g){Vr(t);const r=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Le(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Vr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Dt.clearTimeout(t.A),t.A=null)}function Ur(t){return t.g?t.g.readyState:0}function Br(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qr(t){let e="";return ge(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function jr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qr(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Qn(t,e,n))}function $r(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zr(t){this.Ga=0,this.j=[],this.l=new rn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$r("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$r("baseRetryDelayMs",5e3,t),this.hb=$r("retryDelaySeedMs",1e4,t),this.eb=$r("forwardChannelMaxRetries",2,t),this.xa=$r("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new lr(t&&t.concurrentRequestLimit),this.Ja=new _r,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Gr(t){if(Hr(t),3==t.H){var e=t.W++,n=zn(t.I);if(Qn(n,"SID",t.K),Qn(n,"RID",e),Qn(n,"TYPE","terminate"),Yr(t,n),(e=new Sn(t,t.l,e)).L=2,e.v=Wn(zn(n)),n=!1,Dt.navigator&&Dt.navigator.sendBeacon)try{n=Dt.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&Dt.Image&&((new Image).src=e.v,n=!0),n||(e.g=cs(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ln(e)}os(t)}function Kr(t){t.g&&(ts(t),t.g.cancel(),t.g=null)}function Hr(t){Kr(t),t.u&&(Dt.clearTimeout(t.u),t.u=null),ns(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Dt.clearTimeout(t.m),t.m=null)}function Qr(t){if(!fr(t.i)&&!t.m){t.m=!0;var e=t.Na;$e||Ke(),ze||($e(),ze=!0),Ge.add(e,t),t.C=0}}function Wr(t,e){var n;n=e?e.m:t.W++;const r=zn(t.I);Qn(r,"SID",t.K),Qn(r,"RID",n),Qn(r,"AID",t.V),Yr(t,r),t.o&&t.s&&jr(r,t.o,t.s),n=new Sn(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mr(t.i,n),kn(n,r,e)}function Yr(t,e){t.na&&ge(t.na,(function(t,n){Qn(e,n,t)})),t.h&&qn({},(function(t,n){Qn(e,n,t)}))}function Xr(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Lt(t.h.Va,t.h,t):null;t:{var s=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{br(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Jr(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$e||Ke(),ze||($e(),ze=!0),Ge.add(e,t),t.A=0}}function Zr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=pn(Lt(t.Ma,t),ss(t,t.A)),t.A++,!0)}function ts(t){null!=t.B&&(Dt.clearTimeout(t.B),t.B=null)}function es(t){t.g=new Sn(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=zn(t.wa);Qn(e,"RID","rpc"),Qn(e,"SID",t.K),Qn(e,"AID",t.V),Qn(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Qn(e,"TO",t.qa),Qn(e,"TYPE","xmlhttp"),Yr(t,e),t.o&&t.s&&jr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Wn(zn(e)),n.s=null,n.S=!0,Rn(n,t)}function ns(t){null!=t.v&&(Dt.clearTimeout(t.v),t.v=null)}function rs(t,e){var n=null;if(t.g==e){ns(t),ts(t),t.g=null;var r=2}else{if(!gr(t.i,e))return;n=e.F,yr(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;Le(r=cn(),new fn(r,n)),Qr(t)}else Jr(t);else if(3==(s=e.o)||0==s&&0<e.ca||!(1==r&&function(t,e){return!(pr(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=pn(Lt(t.Na,t,e),ss(t,t.C)),t.C++,0)))}(t,e)||2==r&&Zr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:is(t,5);break;case 4:is(t,10);break;case 3:is(t,6);break;default:is(t,2)}}function ss(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function is(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=Lt(t.pb,t);n||(n=new $n("//www.google.com/images/cleardot.gif"),Dt.location&&"http"==Dt.location.protocol||Gn(n,"https"),Wn(n)),function(t,e){const n=new rn;if(Dt.Image){const r=new Image;r.onload=Pt(Er,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pt(Er,n,r,"TestLoadImage: error",!1,e),r.onabort=Pt(Er,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pt(Er,n,r,"TestLoadImage: timeout",!1,e),Dt.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else dn(2);t.H=0,t.h&&t.h.za(e),os(t),Hr(t)}function os(t){if(t.H=0,t.ma=[],t.h){const e=vr(t.i);0==e.length&&0==t.j.length||(qt(t.ma,e),qt(t.ma,t.j),t.i.i.length=0,Bt(t.j),t.j.length=0),t.h.ya()}}function as(t,e,n){var r=n instanceof $n?zn(n):new $n(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Kn(r,r.m);else{var s=Dt.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new $n(null);r&&Gn(i,r),e&&(i.g=e),s&&Kn(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Qn(r,n,e),Qn(r,"VER",t.ra),Yr(t,r),r}function cs(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new kr(new Tr({ob:!0})):new kr(t.va)).Oa(t.J),e}function us(){}function hs(){if(Jt&&!(10<=Number(ce)))throw Error("Environmental error: no available transport.")}function ls(t,e){Me.call(this),this.g=new zr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zt(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ps(this)}function ds(t){En.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function fs(){Tn.call(this),this.status=1}function ps(t){this.g=t}function gs(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ms(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=(n=(s=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^e&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^s&(i^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(e^n&(i^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(e^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(e^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function ys(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}(St=kr.prototype).Oa=function(t){this.M=t},St.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_n.g(),this.C=this.u?vn(this.u):vn(_n),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){return void Mr(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=Dt.FormData&&t instanceof Dt.FormData,!(0<=Ut(Or,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vr(this),0<this.B&&((this.L=function(t){return Jt&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=Ye(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Mr(this,i)}},St.ua=function(){void 0!==At&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))},St.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Fr(this))},St.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fr(this,!0)),kr.$.N.call(this)},St.La=function(){this.s||(this.G||this.v||this.l?Pr(this):this.kb())},St.kb=function(){Pr(this)},St.isActive=function(){return!!this.g},St.da=function(){try{return 2<Ur(this)?this.g.status:-1}catch(Wt){return-1}},St.ja=function(){try{return this.g?this.g.responseText:""}catch(Wt){return""}},St.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Nr(e)}},St.Ia=function(){return this.m},St.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(St=zr.prototype).ra=8,St.H=1,St.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Sn(this,this.l,t);let i=this.s;if(this.U&&(i?(i=me(i),ve(i,this.U)):i=this.U),null!==this.o||this.O||(s.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xr(this,s,e),Qn(n=zn(this.I),"RID",t),Qn(n,"CVER",22),this.F&&Qn(n,"X-HTTP-Session-Id",this.F),Yr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(qr(i)))+"&"+e:this.o&&jr(n,this.o,i)),mr(this.i,s),this.bb&&Qn(n,"TYPE","init"),this.P?(Qn(n,"$req",e),Qn(n,"SID","null"),s.aa=!0,kn(s,n,null)):kn(s,n,e),this.H=2}}else 3==this.H&&(t?Wr(this,t):0==this.j.length||fr(this.i)||Wr(this))},St.Ma=function(){if(this.u=null,es(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=pn(Lt(this.jb,this),t)}},St.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dn(10),Kr(this),es(this))},St.ib=function(){null!=this.v&&(this.v=null,Kr(this),Zr(this),dn(19))},St.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dn(2)):(this.l.info("Failed to ping google.com"),dn(1))},St.isActive=function(){return!!this.h&&this.h.isActive(this)},(St=us.prototype).Ba=function(){},St.Aa=function(){},St.za=function(){},St.ya=function(){},St.isActive=function(){return!0},St.Va=function(){},hs.prototype.g=function(t,e){return new ls(t,e)},Ft(ls,Me),ls.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=as(t,null,t.Y),Qr(t)},ls.prototype.close=function(){Gr(this.g)},ls.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Fe(t),t=n);e.j.push(new hr(e.fb++,t)),3==e.H&&Qr(e)},ls.prototype.N=function(){this.g.h=null,delete this.j,Gr(this.g),delete this.g,ls.$.N.call(this)},Ft(ds,En),Ft(fs,Tn),Ft(ps,us),ps.prototype.Ba=function(){Le(this.g,"a")},ps.prototype.Aa=function(t){Le(this.g,new ds(t))},ps.prototype.za=function(t){Le(this.g,new fs)},ps.prototype.ya=function(){Le(this.g,"b")},Ft(gs,(function(){this.blockSize=-1})),gs.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},gs.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(0==s)for(;i<=n;)ms(this,t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ms(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ms(this,r),s=0;break}}this.h=s,this.i+=e},gs.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var vs={};function ws(t){return-128<=t&&128>t?function(t,e){var n=vs;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new ys([0|t],0>t?-1:0)})):new ys([0|t],0>t?-1:0)}function _s(t){if(isNaN(t)||!isFinite(t))return Es;if(0>t)return As(_s(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=bs;return new ys(e,0)}var bs=4294967296,Es=ws(0),Ts=ws(1),Is=ws(16777216);function Ss(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Cs(t){return-1==t.h}function As(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ys(n,~t.h).add(Ts)}function Ds(t,e){return t.add(As(e))}function Ns(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ks(t,e){this.g=t,this.h=e}function Rs(t,e){if(Ss(e))throw Error("division by zero");if(Ss(t))return new ks(Es,Es);if(Cs(t))return e=Rs(As(t),e),new ks(As(e.g),As(e.h));if(Cs(e))return e=Rs(t,As(e)),new ks(As(e.g),e.h);if(30<t.g.length){if(Cs(t)||Cs(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ts,r=e;0>=r.X(t);)n=xs(n),r=xs(r);var s=Os(n,1),i=Os(r,1);for(r=Os(r,2),n=Os(n,2);!Ss(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Os(r,1),n=Os(n,1)}return e=Ds(t,s.R(e)),new ks(s,e)}for(s=Es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(i=_s(n)).R(e);Cs(o)||0<o.X(t);)o=(i=_s(n-=r)).R(e);Ss(i)&&(i=Ts),s=s.add(i),t=Ds(t,o)}return new ks(s,t)}function xs(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ys(n,t.h)}function Os(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ys(s,t.h)}(St=ys.prototype).ea=function(){if(Cs(this))return-As(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:bs+r)*e,e*=bs}return t},St.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Ss(this))return"0";if(Cs(this))return"-"+As(this).toString(t);for(var e=_s(Math.pow(t,6)),n=this,r="";;){var s=Rs(n,e).g,i=((0<(n=Ds(n,s.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Ss(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},St.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},St.X=function(t){return Cs(t=Ds(this,t))?-1:Ss(t)?0:1},St.abs=function(){return Cs(this)?As(this):this},St.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(65535&this.D(s))+(65535&t.D(s)),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ys(n,-2147483648&n[n.length-1]?-1:0)},St.R=function(t){if(Ss(this)||Ss(t))return Es;if(Cs(this))return Cs(t)?As(this).R(As(t)):As(As(this).R(t));if(Cs(t))return As(this.R(As(t)));if(0>this.X(Is)&&0>t.X(Is))return _s(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=65535&this.D(r),a=t.D(s)>>>16,c=65535&t.D(s);n[2*r+2*s]+=o*c,Ns(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ns(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ns(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ns(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ys(n,0)},St.gb=function(t){return Rs(this,t).h},St.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ys(n,this.h&t.h)},St.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ys(n,this.h|t.h)},St.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ys(n,this.h^t.h)},hs.prototype.createWebChannel=hs.prototype.g,ls.prototype.send=ls.prototype.u,ls.prototype.open=ls.prototype.m,ls.prototype.close=ls.prototype.close,gn.NO_ERROR=0,gn.TIMEOUT=8,gn.HTTP_ERROR=6,mn.COMPLETE="complete",wn.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",Me.prototype.listen=Me.prototype.O,kr.prototype.listenOnce=kr.prototype.P,kr.prototype.getLastError=kr.prototype.Sa,kr.prototype.getLastErrorCode=kr.prototype.Ia,kr.prototype.getStatus=kr.prototype.da,kr.prototype.getResponseJson=kr.prototype.Wa,kr.prototype.getResponseText=kr.prototype.ja,kr.prototype.send=kr.prototype.ha,kr.prototype.setWithCredentials=kr.prototype.Oa,gs.prototype.digest=gs.prototype.l,gs.prototype.reset=gs.prototype.reset,gs.prototype.update=gs.prototype.j,ys.prototype.add=ys.prototype.add,ys.prototype.multiply=ys.prototype.R,ys.prototype.modulo=ys.prototype.gb,ys.prototype.compare=ys.prototype.X,ys.prototype.toNumber=ys.prototype.ea,ys.prototype.toString=ys.prototype.toString,ys.prototype.getBits=ys.prototype.D,ys.fromNumber=_s,ys.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return As(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=_s(Math.pow(n,8)),s=Es,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),a=parseInt(e.substring(i,i+o),n);8>o?(o=_s(Math.pow(n,o)),s=s.R(o).add(_s(a))):s=(s=s.R(r)).add(_s(a))}return s};var Ms=gn,Ls=mn,Ps=on,Fs=10,Vs=11,Us=Tr,Bs=wn,qs=kr,js=gs,$s=ys;const zs="@firebase/firestore";
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
 */class Gs{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Gs.UNAUTHENTICATED=new Gs(null),Gs.GOOGLE_CREDENTIALS=new Gs("google-credentials-uid"),Gs.FIRST_PARTY=new Gs("first-party-uid"),Gs.MOCK_USER=new Gs("mock-user");
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
let Ks="10.5.2";
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
 */const Hs=new L("@firebase/firestore");function Qs(){return Hs.logLevel}function Ws(t,...e){if(Hs.logLevel<=N.DEBUG){const n=e.map(Js);Hs.debug(`Firestore (${Ks}): ${t}`,...n)}}function Ys(t,...e){if(Hs.logLevel<=N.ERROR){const n=e.map(Js);Hs.error(`Firestore (${Ks}): ${t}`,...n)}}function Xs(t,...e){if(Hs.logLevel<=N.WARN){const n=e.map(Js);Hs.warn(`Firestore (${Ks}): ${t}`,...n)}}function Js(t){if("string"==typeof t)return t;try{
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
return e=t,JSON.stringify(e)}catch(n){return t}var e}
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
 */function Zs(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw Ys(e),new Error(e)}function ti(t,e){t||Zs()}function ei(t,e){return t}
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
 */const ni={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ri extends w{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class si{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class ii{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class oi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Gs.UNAUTHENTICATED)))}shutdown(){}}class ai{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ci{constructor(t){this.t=t,this.currentUser=Gs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new si;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new si,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Ws("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ws("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new si)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ws("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ti("string"==typeof e.accessToken),new ii(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ti(null===t||"string"==typeof t),new Gs(t)}}class ui{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Gs.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hi{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ui(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Gs.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class li{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class di{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Ws("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Ws("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Ws("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Ws("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ti("string"==typeof t.token),this.R=t.token,new li(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */function fi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class pi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=fi(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function gi(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
 */class yi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ri(ni.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ri(ni.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ri(ni.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ri(ni.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yi.fromMillis(Date.now())}static fromDate(t){return yi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new yi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gi(this.nanoseconds,t.nanoseconds):gi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class vi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new vi(t)}static min(){return new vi(new yi(0,0))}static max(){return new vi(new yi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class wi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Zs(),void 0===n?n=t.length-e:n>t.length-e&&Zs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===wi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class _i extends wi{construct(t,e,n){return new _i(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ri(ni.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new _i(e)}static emptyPath(){return new _i([])}}const bi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ei extends wi{construct(t,e,n){return new Ei(t,e,n)}static isValidIdentifier(t){return bi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ei.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ei(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new ri(ni.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ri(ni.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ri(ni.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new ri(ni.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ei(e)}static emptyPath(){return new Ei([])}}
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
 */class Ti{constructor(t){this.path=t}static fromPath(t){return new Ti(_i.fromString(t))}static fromName(t){return new Ti(_i.fromString(t).popFirst(5))}static empty(){return new Ti(_i.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===_i.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return _i.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ti(new _i(t.slice()))}}function Ii(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Si(vi.min(),Ti.empty(),-1)}static max(){return new Si(vi.max(),Ti.empty(),-1)}}function Ci(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ti.comparator(t.documentKey,e.documentKey),0!==n?n:gi(t.largestBatchId,e.largestBatchId))}
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
 */const Ai="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Ni(t){if(t.code!==ni.FAILED_PRECONDITION||t.message!==Ai)throw t;Ws("LocalStore","Unexpectedly lost primary lease")}
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
 */class ki{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Zs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ki(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ki?e:ki.resolve(e)}catch(e){return ki.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ki.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ki.reject(e)}static resolve(t){return new ki(((e,n)=>{e(t)}))}static reject(t){return new ki(((e,n)=>{n(t)}))}static waitFor(t){return new ki(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ki.resolve(!1);for(const n of t)e=e.next((t=>t?ki.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ki(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ki(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}function Ri(t){return"IndexedDbTransactionError"===t.name}
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
 */class xi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Oi(t){return null==t}function Mi(t){return 0===t&&1/t==-1/0}
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
function Li(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */xi._e=-1;class Vi{constructor(t,e){this.comparator=t,this.root=e||Bi.EMPTY}insert(t,e){return new Vi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bi.BLACK,null,null))}remove(t){return new Vi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ui(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ui(this.root,t,this.comparator,!0)}}class Ui{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bi{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Bi.RED,this.left=null!=r?r:Bi.EMPTY,this.right=null!=s?s:Bi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Bi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Bi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Bi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zs();if(this.right.isRed())throw Zs();const t=this.left.check();if(t!==this.right.check())throw Zs();return t+(this.isRed()?0:1)}}Bi.EMPTY=null,Bi.RED=!0,Bi.BLACK=!1,Bi.EMPTY=new class{constructor(){this.size=0}get key(){throw Zs()}get value(){throw Zs()}get color(){throw Zs()}get left(){throw Zs()}get right(){throw Zs()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Bi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class qi{constructor(t){this.comparator=t,this.data=new Vi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ji(this.data.getIterator())}getIteratorFrom(t){return new ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof qi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new qi(this.comparator);return e.data=t,e}}class ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class $i{constructor(t){this.fields=t,t.sort(Ei.comparator)}static empty(){return new $i([])}unionWith(t){let e=new qi(Ei.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new $i(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return mi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class zi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class Gi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new zi("Invalid base64 string: "+e):e}}(t);return new Gi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Gi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gi.EMPTY_BYTE_STRING=new Gi("");const Ki=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hi(t){if(ti(!!t),"string"==typeof t){let e=0;const n=Ki.exec(t);if(ti(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qi(t.seconds),nanos:Qi(t.nanos)}}function Qi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Wi(t){return"string"==typeof t?Gi.fromBase64String(t):Gi.fromUint8Array(t)}
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
 */function Yi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Xi(t){const e=t.mapValue.fields.__previous_value__;return Yi(e)?Xi(e):e}function Ji(t){const e=Hi(t.mapValue.fields.__local_write_time__.timestampValue);return new yi(e.seconds,e.nanos)}
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
 */class Zi{constructor(t,e,n,r,s,i,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class to{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof to&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function no(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yi(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */(t)?9007199254740991:10:Zs()}function ro(t,e){if(t===e)return!0;const n=no(t);if(n!==no(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Hi(t.timestampValue),r=Hi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Wi(t.bytesValue).isEqual(Wi(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Qi(t.geoPointValue.latitude)===Qi(e.geoPointValue.latitude)&&Qi(t.geoPointValue.longitude)===Qi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Qi(t.integerValue)===Qi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Qi(t.doubleValue),r=Qi(e.doubleValue);return n===r?Mi(n)===Mi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],ro);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Li(n)!==Li(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!ro(n[s],r[s])))return!1;return!0}(t,e);default:return Zs()}var r}function so(t,e){return void 0!==(t.values||[]).find((t=>ro(t,e)))}function io(t,e){if(t===e)return 0;const n=no(t),r=no(e);if(n!==r)return gi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return gi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Qi(t.integerValue||t.doubleValue),r=Qi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return oo(t.timestampValue,e.timestampValue);case 4:return oo(Ji(t),Ji(e));case 5:return gi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Wi(t),r=Wi(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=gi(n[s],r[s]);if(0!==t)return t}return gi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=gi(Qi(t.latitude),Qi(e.latitude));return 0!==n?n:gi(Qi(t.longitude),Qi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=io(n[s],r[s]);if(t)return t}return gi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===eo.mapValue&&e===eo.mapValue)return 0;if(t===eo.mapValue)return 1;if(e===eo.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=gi(r[o],i[o]);if(0!==t)return t;const e=io(n[r[o]],s[i[o]]);if(0!==e)return e}return gi(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Zs()}}function oo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return gi(t,e);const n=Hi(t),r=Hi(e),s=gi(n.seconds,r.seconds);return 0!==s?s:gi(n.nanos,r.nanos)}function ao(t){return co(t)}function co(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Hi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Wi(t.bytesValue).toBase64():"referenceValue"in t?function(t){return Ti.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=co(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${co(t.fields[s])}`;return n+"}"}(t.mapValue):Zs()}function uo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ho(t){return!!t&&"integerValue"in t}function lo(t){return!!t&&"arrayValue"in t}function fo(t){return!!t&&"nullValue"in t}function po(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=mo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class yo{constructor(t){this.value=t}static empty(){return new yo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!go(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mo(e)}setAll(t){let e=Ei.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=mo(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());go(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ro(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];go(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Pi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new yo(mo(this.value))}}function vo(t){const e=[];return Pi(t.fields,((t,n)=>{const r=new Ei([t]);if(go(n)){const t=vo(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new $i(e)
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
 */}class wo{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new wo(t,0,vi.min(),vi.min(),vi.min(),yo.empty(),0)}static newFoundDocument(t,e,n,r){return new wo(t,1,e,vi.min(),n,r,0)}static newNoDocument(t,e){return new wo(t,2,e,vi.min(),vi.min(),yo.empty(),0)}static newUnknownDocument(t,e){return new wo(t,3,e,vi.min(),vi.min(),yo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(vi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof wo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class _o{constructor(t,e){this.position=t,this.inclusive=e}}function bo(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?Ti.comparator(Ti.fromName(o.referenceValue),n.key):io(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Eo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ro(t.position[n],e.position[n]))return!1;return!0}
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
 */class To{constructor(t,e="asc"){this.field=t,this.dir=e}}function Io(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class So{}class Co extends So{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Oo(t,e,n):"array-contains"===e?new Fo(t,n):"in"===e?new Vo(t,n):"not-in"===e?new Uo(t,n):"array-contains-any"===e?new Bo(t,n):new Co(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Mo(t,n):new Lo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(io(e,this.value)):null!==e&&no(this.value)===no(e)&&this.matchesComparison(io(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Zs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ao extends So{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Ao(t,e)}matches(t){return Do(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Do(t){return"and"===t.op}function No(t){return function(t){for(const e of t.filters)if(e instanceof Ao)return!1;return!0}(t)&&Do(t)}function ko(t){if(t instanceof Co)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(No(t))return t.filters.map((t=>ko(t))).join(",");{const e=t.filters.map((t=>ko(t))).join(",");return`${t.op}(${e})`}}function Ro(t,e){return t instanceof Co?(n=t,(r=e)instanceof Co&&n.op===r.op&&n.field.isEqual(r.field)&&ro(n.value,r.value)):t instanceof Ao?function(t,e){return e instanceof Ao&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Ro(n,e.filters[r])),!0)}(t,e):void Zs();var n,r}function xo(t){return t instanceof Co?`${(e=t).field.canonicalString()} ${e.op} ${ao(e.value)}`:t instanceof Ao?function(t){return t.op.toString()+" {"+t.getFilters().map(xo).join(" ,")+"}"}(t):"Filter";var e}class Oo extends Co{constructor(t,e,n){super(t,e,n),this.key=Ti.fromName(n.referenceValue)}matches(t){const e=Ti.comparator(t.key,this.key);return this.matchesComparison(e)}}class Mo extends Co{constructor(t,e){super(t,"in",e),this.keys=Po("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Lo extends Co{constructor(t,e){super(t,"not-in",e),this.keys=Po("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Po(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ti.fromName(t.referenceValue)))}class Fo extends Co{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lo(e)&&so(e.arrayValue,this.value)}}class Vo extends Co{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&so(this.value.arrayValue,e)}}class Uo extends Co{constructor(t,e){super(t,"not-in",e)}matches(t){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!so(this.value.arrayValue,e)}}class Bo extends Co{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>so(this.value.arrayValue,t)))}}
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
 */class qo{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ce=null}}function jo(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qo(t,e,n,r,s,i,o)}function $o(t){const e=ei(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ko(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ao(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ao(t))).join(",")),e.ce=t}return e.ce}function zo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Io(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ro(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Eo(t.startAt,e.startAt)&&Eo(t.endAt,e.endAt)}function Go(t){return Ti.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
 */class Ko{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ho(t){return new Ko(t)}function Qo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Wo(t){return null!==t.collectionGroup}function Yo(t){const e=ei(t);if(null===e.le){e.le=[];const t=new Set;for(const r of e.explicitOrderBy)e.le.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new qi(Ei.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new To(r,n))})),t.has(Ei.keyField().canonicalString())||e.le.push(new To(Ei.keyField(),n))}return e.le}function Xo(t){const e=ei(t);return e.he||(e.he=Jo(e,Yo(t))),e.he}function Jo(t,e){if("F"===t.limitType)return jo(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new To(t.field,e)}));const n=t.endAt?new _o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _o(t.startAt.position,t.startAt.inclusive):null;return jo(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zo(t,e){const n=t.filters.concat([e]);return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ta(t,e,n){return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ea(t,e){return zo(Xo(t),Xo(e))&&t.limitType===e.limitType}function na(t){return`${$o(Xo(t))}|lt:${t.limitType}`}function ra(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>xo(t))).join(", ")}]`),Oi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ao(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ao(t))).join(",")),`Target(${e})`}(Xo(t))}; limitType=${t.limitType})`}function sa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ti.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Yo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=bo(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Yo(n),r)||n.endAt&&!function(t,e,n){const r=bo(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Yo(n),r)));var n,r}function ia(t){return(e,n)=>{let r=!1;for(const s of Yo(t)){const t=oa(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function oa(t,e,n){const r=t.field.isKeyField()?Ti.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?io(r,s):Zs()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Zs()}}
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
 */class aa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Pi(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Fi(this.inner)}size(){return this.innerSize}}
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
 */const ca=new Vi(Ti.comparator);function ua(){return ca}const ha=new Vi(Ti.comparator);function la(...t){let e=ha;for(const n of t)e=e.insert(n.key,n);return e}function da(t){let e=ha;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function fa(){return ga()}function pa(){return ga()}function ga(){return new aa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ma=new Vi(Ti.comparator),ya=new qi(Ti.comparator);function va(...t){let e=ya;for(const n of t)e=e.add(n);return e}const wa=new qi(gi);
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
function _a(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(e)?"-0":e}}function ba(t){return{integerValue:""+t}}function Ea(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Mi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?ba(e):_a(t,e)}
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
 */class Ta{constructor(){this._=void 0}}function Ia(t,e,n){return t instanceof Aa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Yi(e)&&(e=Xi(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Da?Na(t,e):t instanceof ka?Ra(t,e):function(t,e){const n=Ca(t,e),r=Oa(n)+Oa(t.Ie);return ho(n)&&ho(t.Ie)?ba(r):_a(t.serializer,r)}(t,e)}function Sa(t,e,n){return t instanceof Da?Na(t,e):t instanceof ka?Ra(t,e):n}function Ca(t,e){return t instanceof xa?ho(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class Aa extends Ta{}class Da extends Ta{constructor(t){super(),this.elements=t}}function Na(t,e){const n=Ma(e);for(const r of t.elements)n.some((t=>ro(t,r)))||n.push(r);return{arrayValue:{values:n}}}class ka extends Ta{constructor(t){super(),this.elements=t}}function Ra(t,e){let n=Ma(e);for(const r of t.elements)n=n.filter((t=>!ro(t,r)));return{arrayValue:{values:n}}}class xa extends Ta{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Oa(t){return Qi(t.integerValue||t.doubleValue)}function Ma(t){return lo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class La{constructor(t,e){this.version=t,this.transformResults=e}}class Pa{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pa}static exists(t){return new Pa(void 0,t)}static updateTime(t){return new Pa(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Va{}function Ua(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Wa(t.key,Pa.none()):new za(t.key,t.data,Pa.none());{const n=t.data,r=yo.empty();let s=new qi(Ei.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Ga(t.key,r,new $i(s.toArray()),Pa.none())}}function Ba(t,e,n){var r;t instanceof za?function(t,e,n){const r=t.value.clone(),s=Ha(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ga?function(t,e,n){if(!Fa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ha(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ka(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function qa(t,e,n,r){return t instanceof za?function(t,e,n,r){if(!Fa(t.precondition,e))return n;const s=t.value.clone(),i=Qa(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ga?function(t,e,n,r){if(!Fa(t.precondition,e))return n;const s=Qa(t.fieldTransforms,r,e),i=e.data;return i.setAll(Ka(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(s=e,i=n,Fa(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function ja(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Ca(r.transform,t||null);null!=s&&(null===n&&(n=yo.empty()),n.set(r.field,s))}return n||null}function $a(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&mi(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Da&&r instanceof Da||n instanceof ka&&r instanceof ka?mi(n.elements,r.elements,ro):n instanceof xa&&r instanceof xa?ro(n.Ie,r.Ie):n instanceof Aa&&r instanceof Aa);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}class za extends Va{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ga extends Va{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ka(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ha(t,e,n){const r=new Map;ti(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Sa(o,a,n[s]))}return r}function Qa(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Ia(t,i,e))}return r}class Wa extends Va{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ya extends Va{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Xa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ba(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=qa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=qa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=pa();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Ua(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(vi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),va())}isEqual(t){return this.batchId===t.batchId&&mi(this.mutations,t.mutations,((t,e)=>$a(t,e)))&&mi(this.baseMutations,t.baseMutations,((t,e)=>$a(t,e)))}}class Ja{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ti(t.mutations.length===n.length);let r=ma;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Ja(t,e,n,r)}}
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
 */class Za{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class tc{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}
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
 */class ec{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var nc,rc;function sc(t){if(void 0===t)return Ys("GRPC error has no .code"),ni.UNKNOWN;switch(t){case nc.OK:return ni.OK;case nc.CANCELLED:return ni.CANCELLED;case nc.UNKNOWN:return ni.UNKNOWN;case nc.DEADLINE_EXCEEDED:return ni.DEADLINE_EXCEEDED;case nc.RESOURCE_EXHAUSTED:return ni.RESOURCE_EXHAUSTED;case nc.INTERNAL:return ni.INTERNAL;case nc.UNAVAILABLE:return ni.UNAVAILABLE;case nc.UNAUTHENTICATED:return ni.UNAUTHENTICATED;case nc.INVALID_ARGUMENT:return ni.INVALID_ARGUMENT;case nc.NOT_FOUND:return ni.NOT_FOUND;case nc.ALREADY_EXISTS:return ni.ALREADY_EXISTS;case nc.PERMISSION_DENIED:return ni.PERMISSION_DENIED;case nc.FAILED_PRECONDITION:return ni.FAILED_PRECONDITION;case nc.ABORTED:return ni.ABORTED;case nc.OUT_OF_RANGE:return ni.OUT_OF_RANGE;case nc.UNIMPLEMENTED:return ni.UNIMPLEMENTED;case nc.DATA_LOSS:return ni.DATA_LOSS;default:return Zs()}}(rc=nc||(nc={}))[rc.OK=0]="OK",rc[rc.CANCELLED=1]="CANCELLED",rc[rc.UNKNOWN=2]="UNKNOWN",rc[rc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rc[rc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rc[rc.NOT_FOUND=5]="NOT_FOUND",rc[rc.ALREADY_EXISTS=6]="ALREADY_EXISTS",rc[rc.PERMISSION_DENIED=7]="PERMISSION_DENIED",rc[rc.UNAUTHENTICATED=16]="UNAUTHENTICATED",rc[rc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rc[rc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rc[rc.ABORTED=10]="ABORTED",rc[rc.OUT_OF_RANGE=11]="OUT_OF_RANGE",rc[rc.UNIMPLEMENTED=12]="UNIMPLEMENTED",rc[rc.INTERNAL=13]="INTERNAL",rc[rc.UNAVAILABLE=14]="UNAVAILABLE",rc[rc.DATA_LOSS=15]="DATA_LOSS";
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
const ic=new $s([4294967295,4294967295],0);function oc(t){const e=(new TextEncoder).encode(t),n=new js;return n.update(e),new Uint8Array(n.digest())}function ac(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $s([n,r],0),new $s([s,i],0)]}class cc{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new uc(`Invalid padding: ${e}`);if(n<0)throw new uc(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new uc(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new uc(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=$s.fromNumber(this.Te)}de(t,e,n){let r=t.add(e.multiply($s.fromNumber(n)));return 1===r.compare(ic)&&(r=new $s([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=oc(t),[n,r]=ac(e);for(let s=0;s<this.hashCount;s++){const t=this.de(n,r,s);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new cc(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Te)return;const e=oc(t),[n,r]=ac(e);for(let s=0;s<this.hashCount;s++){const t=this.de(n,r,s);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class uc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class hc{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,lc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hc(vi.min(),r,new Vi(gi),ua(),va())}}class lc{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new lc(n,e,va(),va(),va())}}
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
 */class dc{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class fc{constructor(t,e){this.targetId=t,this.fe=e}}class pc{constructor(t,e,n=Gi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class gc{constructor(){this.ge=0,this.pe=vc(),this.ye=Gi.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=va(),e=va(),n=va();return this.pe.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Zs()}})),new lc(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=vc()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class mc{constructor(t){this.Le=t,this.ke=new Map,this.qe=ua(),this.Qe=yc(),this.Ke=new Vi(gi)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:Zs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const s=r.target;if(Go(s))if(0===n){const t=new Ti(s.path);this.We(e,t,wo.newNoDocument(t,vi.min()))}else ti(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),s=n?this.et(n,t,r):1;if(0!==s){this.He(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Wi(n).toUint8Array()}catch(a){if(a instanceof zi)return Xs("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new cc(i,r,s)}catch(a){return Xs(a instanceof uc?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Le.nt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const s=this.Ye(r);if(s){if(n.current&&Go(s.target)){const e=new Ti(s.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,wo.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=va();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new hc(t,e,this.Ke,this.qe,n);return this.qe=ua(),this.Qe=yc(),this.Ke=new Vi(gi),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new gc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new qi(gi),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Ws("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new gc),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function yc(){return new Vi(Ti.comparator)}function vc(){return new Vi(Ti.comparator)}const wc={asc:"ASCENDING",desc:"DESCENDING"},_c={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bc={and:"AND",or:"OR"};class Ec{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Tc(t,e){return t.useProto3Json||Oi(e)?e:{value:e}}function Ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Cc(t,e){return Ic(t,e.toTimestamp())}function Ac(t){return ti(!!t),vi.fromTimestamp(function(t){const e=Hi(t);return new yi(e.seconds,e.nanos)}(t))}function Dc(t,e){return(n=t,new _i(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Nc(t){const e=_i.fromString(t);return ti(Hc(e)),e}function kc(t,e){return Dc(t.databaseId,e.path)}function Rc(t,e){const n=Nc(e);if(n.get(1)!==t.databaseId.projectId)throw new ri(ni.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ri(ni.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ti(Mc(n))}function xc(t,e){return Dc(t.databaseId,e)}function Oc(t){return new _i(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mc(t){return ti(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Lc(t,e,n){return{name:kc(t,e),fields:n.value.mapValue.fields}}function Pc(t,e){return{documents:[xc(t,e.path)]}}function Fc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=xc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0!==t.length)return Gc(Ao.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>{return{field:$c((e=t).field),direction:Bc(e.dir)};var e}))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Tc(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n;var a}function Vc(t){let e=function(t){const e=Nc(t);return 4===e.length?_i.emptyPath():Mc(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ti(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Uc(t);return e instanceof Ao&&No(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new To(zc((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Oi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new _o(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new _o(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new Ko(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,u)}function Uc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=zc(t.unaryFilter.field);return Co.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=zc(t.unaryFilter.field);return Co.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zc(t.unaryFilter.field);return Co.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=zc(t.unaryFilter.field);return Co.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Zs()}}(t):void 0!==t.fieldFilter?(e=t,Co.create(zc(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Zs()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return Ao.create(t.compositeFilter.filters.map((t=>Uc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Zs()}}(t.compositeFilter.op))}(t):Zs();var e}function Bc(t){return wc[t]}function qc(t){return _c[t]}function jc(t){return bc[t]}function $c(t){return{fieldPath:t.canonicalString()}}function zc(t){return Ei.fromServerFormat(t.fieldPath)}function Gc(t){return t instanceof Co?function(t){if("=="===t.op){if(po(t.value))return{unaryFilter:{field:$c(t.field),op:"IS_NAN"}};if(fo(t.value))return{unaryFilter:{field:$c(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(po(t.value))return{unaryFilter:{field:$c(t.field),op:"IS_NOT_NAN"}};if(fo(t.value))return{unaryFilter:{field:$c(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$c(t.field),op:qc(t.op),value:t.value}}}(t):t instanceof Ao?function(t){const e=t.getFilters().map((t=>Gc(t)));return 1===e.length?e[0]:{compositeFilter:{op:jc(t.op),filters:e}}}(t):Zs()}function Kc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Qc{constructor(t,e,n,r,s=vi.min(),i=vi.min(),o=Gi.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Qc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Wc{constructor(t){this.ut=t}}function Yc(t){const e=Vc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ta(e,e.limit,"L"):e}
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
 */class Xc{constructor(){this.on=new Jc}addToCollectionParentIndex(t,e){return this.on.add(e),ki.resolve()}getCollectionParents(t,e){return ki.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return ki.resolve()}deleteFieldIndex(t,e){return ki.resolve()}deleteAllFieldIndexes(t){return ki.resolve()}createTargetIndexes(t,e){return ki.resolve()}getDocumentsMatchingTarget(t,e){return ki.resolve(null)}getIndexType(t,e){return ki.resolve(0)}getFieldIndexes(t,e){return ki.resolve([])}getNextCollectionGroupToUpdate(t){return ki.resolve(null)}getMinOffset(t,e){return ki.resolve(Si.min())}getMinOffsetFromCollectionGroup(t,e){return ki.resolve(Si.min())}updateCollectionGroup(t,e,n){return ki.resolve()}updateIndexEntries(t,e){return ki.resolve()}}class Jc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new qi(_i.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new qi(_i.comparator)).toArray()}}
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
 */class Zc{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Zc(0)}static Nn(){return new Zc(-1)}}
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
 */class tu{constructor(){this.changes=new aa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ki.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class eu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class nu{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&qa(n.mutation,t,$i.empty(),yi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,va()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=va()){const r=fa();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=la();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=fa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,va())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=ua();const i=ga(),o=ga();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ga)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),qa(o.mutation,e,o.mutation.getFieldMask(),yi.now())):i.set(e.key,$i.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new eu(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ga();let r=new Vi(((t,e)=>t-e)),s=va();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||$i.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||va()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=pa();c.forEach((t=>{if(!s.has(t)){const r=Ua(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ki.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return s=e,Ti.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Wo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r);var s}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ki.resolve(fa());let o=-1,a=s;return i.next((e=>ki.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ki.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,va()))).next((t=>({batchId:o,changes:da(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ti(e)).next((t=>{let e=la();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=la();return this.indexManager.getCollectionParents(t,s).next((o=>ki.forEach(o,(o=>{const a=(c=e,u=o.child(s),new Ko(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,wo.newInvalidDocument(r)))}));let n=la();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&qa(i.mutation,r,$i.empty(),yi.now()),sa(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class ru{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return ki.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,{id:(n=e).id,version:n.version,createTime:Ac(n.createTime)}),ki.resolve();var n}getNamedQuery(t,e){return ki.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,{name:(n=e).name,query:Yc(n.bundledQuery),readTime:Ac(n.readTime)}),ki.resolve();var n}}
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
 */class su{constructor(){this.overlays=new Vi(Ti.comparator),this.lr=new Map}getOverlay(t,e){return ki.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fa();return ki.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.lt(t,e,r)})),ki.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),ki.resolve()}getOverlaysForCollection(t,e,n){const r=fa(),s=e.length+1,i=new Ti(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ki.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Vi(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=fa(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=fa(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return ki.resolve(o)}lt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Za(e,n));let s=this.lr.get(e);void 0===s&&(s=va(),this.lr.set(e,s)),this.lr.set(e,s.add(n.key))}}
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
 */class iu{constructor(){this.hr=new qi(ou.Pr),this.Ir=new qi(ou.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new ou(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new ou(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new Ti(new _i([])),n=new ou(e,t),r=new ou(e,t+1),s=[];return this.Ir.forEachInRange([n,r],(t=>{this.dr(t),s.push(t.key)})),s}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new Ti(new _i([])),n=new ou(e,t),r=new ou(e,t+1);let s=va();return this.Ir.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new ou(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ou{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return Ti.comparator(t.key,e.key)||gi(t.gr,e.gr)}static Tr(t,e){return gi(t.gr,e.gr)||Ti.comparator(t.key,e.key)}}
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
 */class au{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new qi(ou.Pr)}checkEmpty(t){return ki.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Xa(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.yr=this.yr.add(new ou(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ki.resolve(i)}lookupMutationBatch(t,e){return ki.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),s=r<0?0:r;return ki.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ki.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return ki.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ou(e,0),r=new ou(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([n,r],(t=>{const e=this.wr(t.gr);s.push(e)})),ki.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qi(gi);return e.forEach((t=>{const e=new ou(t,0),r=new ou(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,r],(t=>{n=n.add(t.gr)}))})),ki.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Ti.isDocumentKey(s)||(s=s.child(""));const i=new ou(new Ti(s),0);let o=new qi(gi);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gr)),!0)}),i),ki.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ti(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return ki.forEach(e.mutations,(r=>{const s=new ou(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new ou(e,0),r=this.yr.firstAfterOrEqual(n);return ki.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ki.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class cu{constructor(t){this.Cr=t,this.docs=new Vi(Ti.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ki.resolve(n?n.document.mutableCopy():wo.newInvalidDocument(e))}getEntries(t,e){let n=ua();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():wo.newInvalidDocument(t))})),ki.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=ua();const i=e.path,o=new Ti(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Ci(Ii(o),n)<=0||(r.has(o.key)||sa(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return ki.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Zs()}vr(t,e){return ki.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new uu(this)}getSize(t){return ki.resolve(this.size)}}class uu extends tu{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)})),ki.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
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
 */class hu{constructor(t){this.persistence=t,this.Fr=new aa((t=>$o(t)),zo),this.lastRemoteSnapshotVersion=vi.min(),this.highestTargetId=0,this.Mr=0,this.Or=new iu,this.targetCount=0,this.Nr=Zc.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),ki.resolve()}getLastRemoteSnapshotVersion(t){return ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ki.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),ki.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),ki.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Zc(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,ki.resolve()}updateTargetData(t,e){return this.kn(e),ki.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,ki.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Fr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ki.waitFor(s).next((()=>r))}getTargetCount(t){return ki.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return ki.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),ki.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ki.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),ki.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return ki.resolve(n)}containsKey(t,e){return ki.resolve(this.Or.containsKey(e))}}
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
 */class lu{constructor(t,e){this.Br={},this.overlays={},this.Lr=new xi(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new hu(this),this.indexManager=new Xc,this.remoteDocumentCache=new cu((t=>this.referenceDelegate.Qr(t))),this.serializer=new Wc(e),this.Kr=new ru(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new su,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new au(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Ws("MemoryPersistence","Starting transaction:",t);const r=new du(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((t=>this.referenceDelegate.Ur(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Wr(t,e){return ki.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class du extends Di{constructor(t){super(),this.currentSequenceNumber=t}}class fu{constructor(t){this.persistence=t,this.Gr=new iu,this.zr=null}static jr(t){return new fu(t)}get Hr(){if(this.zr)return this.zr;throw Zs()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),ki.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),ki.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),ki.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ki.forEach(this.Hr,(n=>{const r=Ti.fromPath(n);return this.Jr(t,r).next((t=>{t||e.removeEntry(r,vi.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return ki.or([()=>ki.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
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
 */class pu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}static Qi(t,e){let n=va(),r=va();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new pu(t,e.fromCache,n,r)}}
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
 */class gu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class mu{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.zi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.ji(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new gu;return this.Hi(t,e,n).next((r=>{if(s.result=r,this.$i)return this.Ji(t,e,n,r.size)}))})).next((()=>s.result))}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(Qs()<=N.DEBUG&&Ws("QueryEngine","SDK will not create cache indexes for query:",ra(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),ki.resolve()):(Qs()<=N.DEBUG&&Ws("QueryEngine","Query:",ra(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(Qs()<=N.DEBUG&&Ws("QueryEngine","The SDK decides to create cache indexes for query:",ra(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xo(e))):ki.resolve())}zi(t,e){if(Qo(e))return ki.resolve(null);let n=Xo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ta(e,null,"F"),n=Xo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=va(...r);return this.Gi.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Yi(e,r);return this.Zi(e,i,s,n.readTime)?this.zi(t,ta(e,null,"F")):this.Xi(t,i,e,n)}))))})))))}ji(t,e,n,r){return Qo(e)||r.isEqual(vi.min())?ki.resolve(null):this.Gi.getDocuments(t,n).next((s=>{const i=this.Yi(e,s);return this.Zi(e,i,n,r)?ki.resolve(null):(Qs()<=N.DEBUG&&Ws("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ra(e)),this.Xi(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=vi.fromTimestamp(1e9===r?new yi(n+1,0):new yi(n,r));return new Si(s,Ti.empty(),e)}(r,-1)).next((t=>t)))}))}Yi(t,e){let n=new qi(ia(t));return e.forEach(((e,r)=>{sa(t,r)&&(n=n.add(r))})),n}Zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Hi(t,e,n){return Qs()<=N.DEBUG&&Ws("QueryEngine","Using full collection scan to execute query:",ra(e)),this.Gi.getDocumentsMatchingQuery(t,e,Si.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class yu{constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new Vi(gi),this.ns=new aa((t=>$o(t)),zo),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nu(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}async function vu(t,e){const n=ei(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=va();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function wu(t){const e=ei(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function _u(t,e){const n=ei(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var h,l,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(Gi.EMPTY_BYTE_STRING,vi.min()).withLastLimboFreeSnapshotVersion(vi.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),l=u,d=i,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.qr.updateTargetData(t,u))}));let a=ua(),c=va();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=va(),s=va();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ua();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(vi.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Ws("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{us:r,cs:s}}))}(t,i,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!r.isEqual(vi.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ki.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=s,t)))}function bu(t,e){const n=ei(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function Eu(t,e,n){const r=ei(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(o){if(!Ri(o))throw o;Ws("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Tu(t,e,n){const r=ei(t);let s=vi.min(),i=va();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=ei(t),s=r.ns.get(n);return void 0!==s?ki.resolve(r.ts.get(s)):r.qr.getTargetData(e,n)}(r,t,Xo(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.es.getDocumentsMatchingQuery(t,e,n?s:vi.min(),n?i:va()))).next((t=>(function(t,e,n){let r=t.rs.get(e)||vi.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.rs.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ls:i})))))}class Iu{constructor(){this.activeTargetIds=wa}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Su{constructor(){this.eo=new Iu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Iu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Cu{ro(t){}shutdown(){}}
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
 */class Au{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Ws("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Ws("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Du=null;function Nu(){return null===Du?Du=268435456+Math.round(2147483648*Math.random()):Du++,"0x"+Du.toString(16)
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
 */}const ku={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Ru{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
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
 */const xu="WebChannelConnection";class Ou extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(t,e,n,r,s){const i=Nu(),o=this.So(t,e);Ws("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,s),this.Do(t,o,a,n).then((e=>(Ws("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw Xs("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,s,i){return this.wo(t,e,n,r,s)}bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ks,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=ku[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,r){const s=Nu();return new Promise(((i,o)=>{const a=new qs;a.setWithCredentials(!0),a.listenOnce(Ls.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ms.NO_ERROR:const e=a.getResponseJson();Ws(xu,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case Ms.TIMEOUT:Ws(xu,`RPC '${t}' ${s} timed out`),o(new ri(ni.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const n=a.getStatus();if(Ws(xu,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ni).indexOf(e)>=0?e:ni.UNKNOWN}(e.status);o(new ri(t,e.message))}else o(new ri(ni.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ri(ni.UNAVAILABLE,"Connection failed."));break;default:Zs()}}finally{Ws(xu,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);Ws(xu,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}vo(t,e,n){const r=Nu(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new hs,o=cn(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Us({})),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=s.join("");Ws(xu,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=i.createWebChannel(u,a);let l=!1,d=!1;const f=new Ru({co:e=>{d?Ws(xu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(Ws(xu,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),Ws(xu,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},lo:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(h,Bs.EventType.OPEN,(()=>{d||Ws(xu,`RPC '${t}' stream ${r} transport opened.`)})),p(h,Bs.EventType.CLOSE,(()=>{d||(d=!0,Ws(xu,`RPC '${t}' stream ${r} transport closed`),f.Ro())})),p(h,Bs.EventType.ERROR,(e=>{d||(d=!0,Xs(xu,`RPC '${t}' stream ${r} transport errored:`,e),f.Ro(new ri(ni.UNAVAILABLE,"The operation could not be completed")))})),p(h,Bs.EventType.MESSAGE,(e=>{var n;if(!d){const s=e.data[0];ti(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){Ws(xu,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=nc[t];if(void 0!==e)return sc(e)}(e),s=o.message;void 0===n&&(n=ni.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.Ro(new ri(n,s)),h.close()}else Ws(xu,`RPC '${t}' stream ${r} received:`,s),f.Vo(s)}})),p(o,Ps.STAT_EVENT,(e=>{e.stat===Fs?Ws(xu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Vs&&Ws(xu,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ao()}),0),f}}function Mu(){return"undefined"!=typeof document?document:null}
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
 */function Lu(t){return new Ec(t,!0)}
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
 */class Pu{constructor(t,e,n=1e3,r=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&Ws("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
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
 */class Fu{constructor(t,e,n,r,s,i,o,a){this.si=t,this.Ko=n,this.$o=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Pu(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===ni.RESOURCE_EXHAUSTED?(Ys(e.toString()),Ys("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===ni.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new ri(ni.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return Ws("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(Ws("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vu extends Fu{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Zs(),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(ti(void 0===e||"string"==typeof e),Gi.fromBase64String(e||"")):(ti(void 0===e||e instanceof Uint8Array),Gi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?ni.UNKNOWN:sc(t.code);return new ri(e,t.message||"")}(a);n=new pc(s,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rc(t,r.document.name),i=Ac(r.document.updateTime),o=r.document.createTime?Ac(r.document.createTime):vi.min(),a=new yo({mapValue:{fields:r.document.fields}}),c=wo.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new dc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rc(t,r.document),i=r.readTime?Ac(r.readTime):vi.min(),o=wo.newNoDocument(s,i),a=r.removedTargetIds||[];n=new dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rc(t,r.document),i=r.removedTargetIds||[];n=new dc([],i,s,null)}else{if(!("filter"in e))return Zs();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new ec(r,s),o=t.targetId;n=new fc(o,i)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return vi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?vi.min():e.readTime?Ac(e.readTime):vi.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=Oc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Go(r)?{documents:Pc(t,r)}:{query:Fc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Sc(t,e.resumeToken);const r=Tc(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(vi.min())>0){n.readTime=Ic(t,e.snapshotVersion.toTimestamp());const r=Tc(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Zs()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=Oc(this.serializer),e.removeTarget=t,this.e_(e)}}class Uu extends Fu{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(ti(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=function(t,e){return t&&t.length>0?(ti(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ac(t.updateTime):Ac(e);return n.isEqual(vi.min())&&(n=Ac(e)),new La(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Ac(t.commitTime);return this.listener.I_(n,e)}return ti(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Oc(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof za)n={update:Lc(t,e.key,e.value)};else if(e instanceof Wa)n={delete:kc(t,e.key)};else if(e instanceof Ga)n={update:Lc(t,e.key,e.data),updateMask:Kc(e.fieldMask)};else{if(!(e instanceof Ya))return Zs();n={verify:kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Aa)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Da)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ka)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xa)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw Zs()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(s=e.precondition).updateTime?{updateTime:Cc(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Zs())),n;var r,s}(this.serializer,t)))};this.e_(e)}}
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
 */class Bu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new ri(ni.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.wo(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ni.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ri(ni.UNKNOWN,t.toString())}))}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Co(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ni.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ri(ni.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class qu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ys(e),this.f_=!1):Ws("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
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
 */class ju{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro((t=>{n.enqueueAndForget((async()=>{Xu(this)&&(Ws("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ei(t);e.C_.add(4),await zu(e),e.M_.set("Unknown"),e.C_.delete(4),await $u(e)}(this))}))})),this.M_=new qu(n,r)}}async function $u(t){if(Xu(t))for(const e of t.v_)await e(!0)}async function zu(t){for(const e of t.v_)await e(!1)}function Gu(t,e){const n=ei(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Yu(n)?Wu(n):ph(n).Ho()&&Hu(n,e))}function Ku(t,e){const n=ei(t),r=ph(n);n.D_.delete(e),r.Ho()&&Qu(n,e),0===n.D_.size&&(r.Ho()?r.Zo():Xu(n)&&n.M_.set("Unknown"))}function Hu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(vi.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ph(t).u_(e)}function Qu(t,e){t.x_.Oe(e),ph(t).c_(e)}function Wu(t){t.x_=new mc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ph(t).start(),t.M_.g_()}function Yu(t){return Xu(t)&&!ph(t).jo()&&t.D_.size>0}function Xu(t){return 0===ei(t).C_.size}function Ju(t){t.x_=void 0}async function Zu(t){t.D_.forEach(((e,n)=>{Hu(t,e)}))}async function th(t,e){Ju(t),Yu(t)?(t.M_.w_(e),Wu(t)):t.M_.set("Unknown")}async function eh(t,e,n){if(t.M_.set("Online"),e instanceof pc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.D_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.D_.delete(r),t.x_.removeTarget(r))}(t,e)}catch(r){Ws("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nh(t,r)}else if(e instanceof dc?t.x_.$e(e):e instanceof fc?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(vi.min()))try{const e=await wu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.D_.get(r);s&&t.D_.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.D_.get(e);if(!r)return;t.D_.set(e,r.withResumeToken(Gi.EMPTY_BYTE_STRING,r.snapshotVersion)),Qu(t,e);const s=new Qc(r.target,e,n,r.sequenceNumber);Hu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(s){Ws("RemoteStore","Failed to raise snapshot:",s),await nh(t,s)}}async function nh(t,e,n){if(!Ri(e))throw e;t.C_.add(1),await zu(t),t.M_.set("Offline"),n||(n=()=>wu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ws("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await $u(t)}))}function rh(t,e){return e().catch((n=>nh(t,n,e)))}async function sh(t){const e=ei(t),n=gh(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ih(e);)try{const t=await bu(e.localStore,r);if(null===t){0===e.b_.length&&n.Zo();break}r=t.batchId,oh(e,t)}catch(s){await nh(e,s)}ah(e)&&ch(e)}function ih(t){return Xu(t)&&t.b_.length<10}function oh(t,e){t.b_.push(e);const n=gh(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function ah(t){return Xu(t)&&!gh(t).jo()&&t.b_.length>0}function ch(t){gh(t).start()}async function uh(t){gh(t).E_()}async function hh(t){const e=gh(t);for(const n of t.b_)e.P_(n.mutations)}async function lh(t,e,n){const r=t.b_.shift(),s=Ja.from(r,e,n);await rh(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await sh(t)}async function dh(t,e){e&&gh(t).h_&&await async function(t,e){if(function(t){switch(t){default:return Zs();case ni.CANCELLED:case ni.UNKNOWN:case ni.DEADLINE_EXCEEDED:case ni.RESOURCE_EXHAUSTED:case ni.INTERNAL:case ni.UNAVAILABLE:case ni.UNAUTHENTICATED:return!1;case ni.INVALID_ARGUMENT:case ni.NOT_FOUND:case ni.ALREADY_EXISTS:case ni.PERMISSION_DENIED:case ni.FAILED_PRECONDITION:case ni.ABORTED:case ni.OUT_OF_RANGE:case ni.UNIMPLEMENTED:case ni.DATA_LOSS:return!0}}(n=e.code)&&n!==ni.ABORTED){const n=t.b_.shift();gh(t).Yo(),await rh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await sh(t)}var n}(t,e),ah(t)&&ch(t)}async function fh(t,e){const n=ei(t);n.asyncQueue.verifyOperationInProgress(),Ws("RemoteStore","RemoteStore received new credentials");const r=Xu(n);n.C_.add(3),await zu(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await $u(n)}function ph(t){return t.O_||(t.O_=function(t,e,n){const r=ei(t);return r.A_(),new Vu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:Zu.bind(null,t),Io:th.bind(null,t),a_:eh.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),Yu(t)?Wu(t):t.M_.set("Unknown")):(await t.O_.stop(),Ju(t))}))),t.O_}function gh(t){return t.N_||(t.N_=function(t,e,n){const r=ei(t);return r.A_(),new Uu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:uh.bind(null,t),Io:dh.bind(null,t),T_:hh.bind(null,t),I_:lh.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await sh(t)):(await t.N_.stop(),t.b_.length>0&&(Ws("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
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
 */}class mh{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new mh(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ri(ni.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yh(t,e){if(Ys("AsyncQueue",`${e}: ${t}`),Ri(t))return new ri(ni.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class vh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ti.comparator(e.key,n.key):(t,e)=>Ti.comparator(t.key,e.key),this.keyedMap=la(),this.sortedSet=new Vi(this.comparator)}static emptySet(t){return new vh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof vh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new vh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class wh{constructor(){this.B_=new Vi(Ti.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):Zs():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class _h{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new _h(t,e,vh.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ea(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class bh{constructor(){this.k_=void 0,this.listeners=[]}}class Eh{constructor(){this.queries=new aa((t=>na(t)),ea),this.onlineState="Unknown",this.q_=new Set}}async function Th(t,e){const n=ei(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new bh),s)try{i.k_=await n.onListen(r)}catch(o){const t=yh(o,`Initialization of query '${ra(e.query)}' failed`);return void e.onError(t)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Ah(n)}async function Ih(t,e){const n=ei(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Sh(t,e){const n=ei(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.K_(s)&&(r=!0);e.k_=s}}r&&Ah(n)}function Ch(t,e,n){const r=ei(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ah(t){t.q_.forEach((t=>{t.next()}))}class Dh{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new _h(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=_h.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
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
 */class Nh{constructor(t){this.key=t}}class kh{constructor(t){this.key=t}}class Rh{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=va(),this.mutatedKeys=va(),this._a=ia(t),this.aa=new vh(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new wh,r=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=sa(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ha(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this._a(h,a)>0||c&&this._a(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{aa:i,la:n,Zi:o,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Zs()}};return n(t)-n(e)}(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n);const i=e?this.Ia():[],o=0===this.oa.size&&this.current?1:0,a=o!==this.sa;return this.sa=o,0!==s.length||a?{snapshot:new _h(this.query,t.aa,r,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:i}:{Ta:i}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new wh,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=va(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new kh(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new Nh(n))})),e}da(t){this.ia=t.ls,this.oa=va();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return _h.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class xh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Oh{constructor(t){this.key=t,this.Ra=!1}}class Mh{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Va={},this.ma=new aa((t=>na(t)),ea),this.fa=new Map,this.ga=new Set,this.pa=new Vi(Ti.comparator),this.ya=new Map,this.wa=new iu,this.Sa={},this.ba=new Map,this.Da=Zc.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function Lh(t,e){const n=function(t){const e=ei(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bh.bind(null,e),e.Va.a_=Sh.bind(null,e.eventManager),e.Va.Fa=Ch.bind(null,e.eventManager),e}(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const t=await function(t,e){const n=ei(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qr.getTargetData(t,e).next((s=>s?(r=s,ki.resolve(r)):n.qr.allocateTargetId(t).next((s=>(r=new Qc(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}(n.localStore,Xo(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await async function(t,e,n,r,s){t.va=(e,n,r)=>async function(t,e,n,r){let s=e.view.ca(n);s.Zi&&(s=await Tu(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Hh(t,e.targetId,o.Ta),o.snapshot}(t,e,n,r);const i=await Tu(t.localStore,e,!0),o=new Rh(e,i.ls),a=o.ca(i.documents),c=lc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Hh(t,n,u.Ta);const h=new xh(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}(n,e,r,"current"===i,t.resumeToken),n.isPrimaryClient&&Gu(n.remoteStore,t)}return s}async function Ph(t,e){const n=ei(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter((t=>!ea(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Eu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ku(n.remoteStore,r.targetId),Gh(n,r.targetId)})).catch(Ni)):(Gh(n,r.targetId),await Eu(n.localStore,r.targetId,!0))}async function Fh(t,e,n){const r=function(t){const e=ei(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jh.bind(null,e),e}(t);try{const t=await function(t,e){const n=ei(t),r=yi.now(),s=e.reduce(((t,e)=>t.add(e.key)),va());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ua(),c=va();return n.ss.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=ja(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Ga(t.key,e,vo(e.value.mapValue),Pa.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:da(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Sa[t.currentUser.toKey()];r||(r=new Vi(gi)),r=r.insert(e,n),t.Sa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Yh(r,t.changes),await sh(r.remoteStore)}catch(s){const t=yh(s,"Failed to persist write");n.reject(t)}}async function Vh(t,e){const n=ei(t);try{const t=await _u(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ya.get(e);r&&(ti(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?ti(r.Ra):t.removedDocuments.size>0&&(ti(r.Ra),r.Ra=!1))})),await Yh(n,t,e)}catch(r){await Ni(r)}}function Uh(t,e,n){const r=ei(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ma.forEach(((n,r)=>{const s=r.view.Q_(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ei(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Q_(e)&&(r=!0)})),r&&Ah(n)}(r.eventManager,e),t.length&&r.Va.a_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bh(t,e,n){const r=ei(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let t=new Vi(Ti.comparator);t=t.insert(i,wo.newNoDocument(i,vi.min()));const n=va().add(i),s=new hc(vi.min(),new Map,new Vi(gi),t,n);await Vh(r,s),r.pa=r.pa.remove(i),r.ya.delete(e),Wh(r)}else await Eu(r.localStore,e,!1).then((()=>Gh(r,e,n))).catch(Ni)}async function qh(t,e){const n=ei(t),r=e.batch.batchId;try{const t=await function(t,e){const n=ei(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ki.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);ti(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=va();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);zh(n,r,null),$h(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yh(n,t)}catch(s){await Ni(s)}}async function jh(t,e,n){const r=ei(t);try{const t=await function(t,e){const n=ei(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ti(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);zh(r,e,n),$h(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yh(r,t)}catch(s){await Ni(s)}}function $h(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function zh(t,e,n){const r=ei(t);let s=r.Sa[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||Kh(t,e)}))}function Kh(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(Ku(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Wh(t))}function Hh(t,e,n){for(const r of n)r instanceof Nh?(t.wa.addReference(r.key,e),Qh(t,r)):r instanceof kh?(Ws("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Kh(t,r.key)):Zs()}function Qh(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(Ws("SyncEngine","New document in limbo: "+n),t.ga.add(r),Wh(t))}function Wh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Ti(_i.fromString(e)),r=t.Da.next();t.ya.set(r,new Oh(n)),t.pa=t.pa.insert(n,r),Gu(t.remoteStore,new Qc(Xo(Ho(n.path)),r,"TargetPurposeLimboResolution",xi._e))}}async function Yh(t,e,n){const r=ei(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((t,a)=>{o.push(r.va(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=pu.Qi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Va.a_(s),await async function(t,e){const n=ei(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ki.forEach(e,(e=>ki.forEach(e.ki,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ki.forEach(e.qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!Ri(r))throw r;Ws("LocalStore","Failed to update sequence numbers: "+r)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.ts.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(t,s)}}}(r.localStore,i))}async function Xh(t,e){const n=ei(t);if(!n.currentUser.isEqual(e)){Ws("SyncEngine","User change. New user:",e.toKey());const t=await vu(n.localStore,e);n.currentUser=e,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ba.forEach((t=>{t.forEach((t=>{t.reject(new ri(ni.CANCELLED,s))}))})),r.ba.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Yh(n,t._s)}var r,s}function Jh(t,e){const n=ei(t),r=n.ya.get(e);if(r&&r.Ra)return va().add(r.key);{let t=va();const r=n.fa.get(e);if(!r)return t;for(const e of r){const r=n.ma.get(e);t=t.unionWith(r.view.ua)}return t}}class Zh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Lu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,r){return new yu(t,e,n,r)}(this.persistence,new mu,t.initialUser,this.serializer)}createPersistence(t){return new lu(fu.jr,this.serializer)}createSharedClientState(t){return new Su}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Uh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xh.bind(null,this.syncEngine),await async function(t,e){const n=ei(t);e?(n.C_.delete(2),await $u(n)):e||(n.C_.add(2),await zu(n),n.M_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Eh}createDatastore(t){const e=Lu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ou(r));var r;return function(t,e,n,r){return new Bu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Uh(this.syncEngine,t,0),i=Au.D()?new Au:new Cu,new ju(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Mh(t,e,n,r,s,i);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ei(t);Ws("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await zu(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
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
 */class el{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Ys("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
 */class nl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Gs.UNAUTHENTICATED,this.clientId=pi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ws("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ws("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ri(ni.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new si;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=yh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress(),Ws("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await vu(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function sl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ws("FirestoreClient","Using user provided OfflineComponentProvider");try{await rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(t){return"FirebaseError"===t.name?t.code===ni.FAILED_PRECONDITION||t.code===ni.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(r))throw r;Xs("Error using user provided cache. Falling back to memory cache: "+r),await rl(t,new Zh)}}else Ws("FirestoreClient","Using default OfflineComponentProvider"),await rl(t,new Zh);return t._offlineComponents}(t);Ws("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>fh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>fh(e.remoteStore,n))),t._onlineComponents=e}async function il(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ws("FirestoreClient","Using user provided OnlineComponentProvider"),await sl(t,t._uninitializedComponentsProvider._online)):(Ws("FirestoreClient","Using default OnlineComponentProvider"),await sl(t,new tl))),t._onlineComponents}async function ol(t){const e=await il(t),n=e.eventManager;return n.onListen=Lh.bind(null,e.syncEngine),n.onUnlisten=Ph.bind(null,e.syncEngine),n}
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
function al(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const cl=new Map;
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
 */function ul(t,e,n){if(!n)throw new ri(ni.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hl(t){if(!Ti.isDocumentKey(t))throw new ri(ni.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ll(t){if(Ti.isDocumentKey(t))throw new ri(ni.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Zs()}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ri(ni.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(t);throw new ri(ni.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class pl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ri(ni.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ri(ni.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new ri(ni.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=al(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ri(ni.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ri(ni.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ri(ni.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class gl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ri(ni.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ri(ni.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new oi;switch(t.type){case"firstParty":return new hi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ri(ni.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=cl.get(t);e&&(Ws("ComponentProvider","Removing Datastore"),cl.delete(t),e.terminate())}(this),Promise.resolve()}}function ml(t,e,n,r={}){var s;const i=(t=fl(t,gl))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Gs.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[d(JSON.stringify({alg:"none",type:"JWT"})),d(JSON.stringify(i)),""].join(".")}(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new ri(ni.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Gs(i)}t._authCredentials=new ai(new ii(e,n))}}
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
 */class yl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yl(this.firestore,t,this._query)}}class vl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vl(this.firestore,t,this._key)}}class wl extends yl{constructor(t,e,n){super(t,e,Ho(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vl(this.firestore,null,new Ti(t))}withConverter(t){return new wl(this.firestore,t,this._path)}}function _l(t,e,...n){if(t=I(t),ul("collection","path",e),t instanceof gl){const r=_i.fromString(e,...n);return ll(r),new wl(t,null,r)}{if(!(t instanceof vl||t instanceof wl))throw new ri(ni.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_i.fromString(e,...n));return ll(r),new wl(t.firestore,null,r)}}function bl(t,e,...n){if(t=I(t),1===arguments.length&&(e=pi.newId()),ul("doc","path",e),t instanceof gl){const r=_i.fromString(e,...n);return hl(r),new vl(t,null,new Ti(r))}{if(!(t instanceof vl||t instanceof wl))throw new ri(ni.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_i.fromString(e,...n));return hl(r),new vl(t.firestore,t instanceof wl?t.converter:null,new Ti(r))}}
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
 */class El{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Pu(this,"async_queue_retry"),this.iu=()=>{const t=Mu();t&&Ws("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=Mu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Mu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new si;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Ri(t))throw t;Ws("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;throw Ys("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=mh.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(r),r}su(){this.eu&&Zs()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function Tl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}(t,["next","error","complete"])}class Il extends gl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new El,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function Sl(t){return t._firestoreClient||Cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cl(t){var e,n,r;const s=t._freezeSettings(),i=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new Zi(o,a,c,(u=s).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,al(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;t._firestoreClient=new nl(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}
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
 */class Al{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Dl{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}
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
 */class Nl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nl(Gi.fromBase64String(t))}catch(e){throw new ri(ni.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nl(Gi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class kl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ri(ni.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ei(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
 */class Rl{constructor(t){this._methodName=t}}
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
 */class xl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ri(ni.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ri(ni.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gi(this._lat,t._lat)||gi(this._long,t._long)}}
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
 */const Ol=/^__.*__$/;class Ml{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ga(t,this.data,this.fieldMask,e,this.fieldTransforms):new za(t,this.data,e,this.fieldTransforms)}}class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ga(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Zs()}}class Fl{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Fl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Yl(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(Pl(this.Iu)&&Ol.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Vl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Lu(t)}pu(t,e,n,r=!1){return new Fl({Iu:t,methodName:e,gu:n,path:Ei.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ul(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new Vl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bl(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Kl("Data must be an object, but it was:",o,r);const a=zl(r,o);let c,u;if(i.merge)c=new $i(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Hl(e,r,n);if(!o.contains(s))throw new ri(ni.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Xl(t,s)||t.push(s)}c=new $i(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Ml(new yo(a),c,u)}class ql extends Rl{_toFieldTransform(t){if(2!==t.Iu)throw 1===t.Iu?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ql}}function jl(t,e,n,r=!1){return $l(n,t.pu(r?4:3,e))}function $l(t,e){if(Gl(t=I(t)))return Kl("Unsupported field value:",e,t),zl(t,e);if(t instanceof Rl)return function(t,e){if(!Pl(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=$l(s,e.Vu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=I(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ea(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=yi.fromDate(t);return{timestampValue:Ic(e.serializer,n)}}if(t instanceof yi){const n=new yi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ic(e.serializer,n)}}if(t instanceof xl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nl)return{bytesValue:Sc(e.serializer,t._byteString)};if(t instanceof vl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Dc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${dl(t)}`)}(t,e)}function zl(t,e){const n={};return Fi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,((t,r)=>{const s=$l(r,e.Eu(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Gl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof yi||t instanceof xl||t instanceof Nl||t instanceof vl||t instanceof Rl)}function Kl(t,e,n){if(!Gl(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=dl(n);throw"an object"===r?e.mu(t+" a custom object"):e.mu(t+" "+r)}var r}function Hl(t,e,n){if((e=I(e))instanceof kl)return e._internalPath;if("string"==typeof e)return Wl(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ql=new RegExp("[~\\*/\\[\\]]");function Wl(t,e,n){if(e.search(Ql)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kl(...e.split("."))._internalPath}catch(r){throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ri(ni.INVALID_ARGUMENT,a+t+c)}function Xl(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Jl{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Zl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(td("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Zl extends Jl{data(){return super.data()}}function td(t,e){return"string"==typeof e?Wl(t,e):e instanceof kl?e._internalPath:e._delegate._internalPath}
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
 */function ed(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ri(ni.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nd{}class rd extends nd{}function sd(t,e,...n){let r=[];e instanceof nd&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof ad)).length,n=t.filter((t=>t instanceof id)).length;if(e>1||e>0&&n>0)throw new ri(ni.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class id extends rd{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new id(t,e,n)}_apply(t){const e=this._parse(t);return md(t._query,e),new yl(t.firestore,t.converter,Zo(t._query,e))}_parse(t){const e=Ul(t.firestore);return function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new ri(ni.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){gd(o,i);const e=[];for(const n of o)e.push(pd(r,t,n));a={arrayValue:{values:e}}}else a=pd(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||gd(o,i),a=jl(n,e,o,"in"===i||"not-in"===i);return Co.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function od(t,e,n){const r=e,s=td("where",t);return id._create(s,r,n)}class ad extends nd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ad(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Ao.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)md(n,s),n=Zo(n,s)}(t._query,e),new yl(t.firestore,t.converter,Zo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class cd extends rd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new cd(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ri(ni.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ri(ni.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new To(e,n)}(t._query,this._field,this._direction);return new yl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ko(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function ud(t,e="asc"){const n=e,r=td("orderBy",t);return cd._create(r,n)}class hd extends rd{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new hd(t,e,n)}_apply(t){return new yl(t.firestore,t.converter,ta(t._query,this._limit,this._limitType))}}function ld(t){return function(t,e){if(e<=0)throw new ri(ni.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}("limit",t),hd._create("limit",t,"F")}class dd extends rd{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new dd(t,e,n)}_apply(t){const e=function(t,e,n,r){if(n[0]=I(n[0]),n[0]instanceof Jl)return function(t,e,n,r,s){if(!r)throw new ri(ni.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Yo(t))if(o.field.isKeyField())i.push(uo(e,r.key));else{const t=r.data.field(o.field);if(Yi(t))throw new ri(ni.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new ri(ni.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new _o(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Ul(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new ri(ni.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new ri(ni.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Wo(t)&&-1!==i.indexOf("/"))throw new ri(ni.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(_i.fromString(i));if(!Ti.isDocumentKey(n))throw new ri(ni.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new Ti(n);a.push(uo(e,s))}else{const t=jl(n,r,i);a.push(t)}}return new _o(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}(t,this.type,this._docOrFields,this._inclusive);return new yl(t.firestore,t.converter,(n=t._query,r=e,new Ko(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}function fd(...t){return dd._create("startAfter",t,!1)}function pd(t,e,n){if("string"==typeof(n=I(n))){if(""===n)throw new ri(ni.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wo(e)&&-1!==n.indexOf("/"))throw new ri(ni.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_i.fromString(n));if(!Ti.isDocumentKey(r))throw new ri(ni.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uo(t,new Ti(r))}if(n instanceof vl)return uo(t,n._key);throw new ri(ni.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dl(n)}.`)}function gd(t,e){if(!Array.isArray(t)||0===t.length)throw new ri(ni.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function md(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ri(ni.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ri(ni.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yd{convertValue(t,e="none"){switch(no(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Zs()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Pi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new xl(Qi(t.latitude),Qi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Xi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ji(t));default:return null}}convertTimestamp(t){const e=Hi(t);return new yi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=_i.fromString(t);ti(Hc(n));const r=new to(n.get(1),n.get(3)),s=new Ti(n.popFirst(5));return r.isEqual(e)||Ys(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
class vd{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wd extends Jl{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _d(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(td("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class _d extends wd{data(t={}){return super.data(t)}}class bd{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new vd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new _d(this._firestore,this._userDataWriter,n.key,n,new vd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ri(ni.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new _d(t._firestore,t._userDataWriter,n.doc.key,n.doc,new vd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new _d(t._firestore,t._userDataWriter,e.doc.key,e.doc,new vd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Ed(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ed(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zs()}}
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
 */function Td(t){t=fl(t,vl);const e=fl(t.firestore,Il);return function(t,e,n={}){const r=new si;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new el({next:i=>{e.enqueueAndForget((()=>Ih(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new ri(ni.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new ri(ni.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Dh(Ho(n.path),i,{includeMetadataChanges:!0,J_:!0});return Th(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}(Sl(e),t._key).then((n=>kd(e,t,n)))}class Id extends yd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new vl(this.firestore,null,e)}}function Sd(t){t=fl(t,yl);const e=fl(t.firestore,Il),n=Sl(e),r=new Id(e);return ed(t._query),function(t,e,n={}){const r=new si;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new el({next:n=>{e.enqueueAndForget((()=>Ih(t,o))),n.fromCache&&"server"===r.source?s.reject(new ri(ni.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Dh(n,i,{includeMetadataChanges:!0,J_:!0});return Th(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}(n,t._query).then((n=>new bd(e,r,t,n)))}function Cd(t,e,n){t=fl(t,vl);const r=fl(t.firestore,Il),s=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t.converter,e,n);return Nd(r,[Bl(Ul(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Pa.none())])}function Ad(t,e,n,...r){t=fl(t,vl);const s=fl(t.firestore,Il),i=Ul(s);let o;return o="string"==typeof(e=I(e))||e instanceof kl?function(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[Hl(e,r,n)],c=[s];if(i.length%2!=0)throw new ri(ni.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Hl(e,i[d])),c.push(i[d+1]);const u=[],h=yo.empty();for(let d=a.length-1;d>=0;--d)if(!Xl(u,a[d])){const t=a[d];let e=c[d];e=I(e);const n=o.Ru(t);if(e instanceof ql)u.push(t);else{const r=$l(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new $i(u);return new Ll(h,l,o.fieldTransforms)}(i,"updateDoc",t._key,e,n,r):function(t,e,n,r){const s=t.pu(1,e,n);Kl("Data must be an object, but it was:",s,r);const i=[],o=yo.empty();Pi(r,((t,r)=>{const a=Wl(e,t,n);r=I(r);const c=s.Ru(a);if(r instanceof ql)i.push(a);else{const t=$l(r,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new $i(i);return new Ll(o,a,s.fieldTransforms)}(i,"updateDoc",t._key,e),Nd(s,[o.toMutation(t._key,Pa.exists(!0))])}function Dd(t,...e){var n,r,s;t=I(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Tl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Tl(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,h;if(t instanceof vl)u=fl(t.firestore,Il),h=Ho(t._key.path),c={next:n=>{e[o]&&e[o](kd(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=fl(t,yl);u=fl(n.firestore,Il),h=n._query;const r=new Id(u);c={next:t=>{e[o]&&e[o](new bd(u,r,n,t))},error:e[o+1],complete:e[o+2]},ed(t._query)}return function(t,e,n,r){const s=new el(r),i=new Dh(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Th(await ol(t),i))),()=>{s.Na(),t.asyncQueue.enqueueAndForget((async()=>Ih(await ol(t),i)))}}(Sl(u),h,a,c)}function Nd(t,e){return function(t,e){const n=new si;return t.asyncQueue.enqueueAndForget((async()=>Fh(await function(t){return il(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Sl(t),e)}function kd(t,e,n){const r=n.docs.get(e._key),s=new Id(t);return new wd(t,s,e._key,r,new vd(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */function Rd(t){return function(t,e){const n=fl(t.firestore,Il),r=Sl(n),s=function(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}(e,((t,e)=>new tc(e,t.aggregateType,t._internalFieldPath)));return function(t,e,n){const r=new si;return t.asyncQueue.enqueueAndForget((async()=>{try{const s=await function(t){return il(t).then((t=>t.datastore))}(t);r.resolve(async function(t,e,n){var r;const s=ei(t),{request:i,R_:o}=function(t,e,n){const r=Fc(t,e),s={},i=[];let o=0;return n.forEach((t=>{const e="aggregate_"+o++;s[e]=t.alias,"count"===t.aggregateType?i.push({alias:e,count:{}}):"avg"===t.aggregateType?i.push({alias:e,avg:{field:$c(t.fieldPath)}}):"sum"===t.aggregateType&&i.push({alias:e,sum:{field:$c(t.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:i,structuredQuery:r.structuredQuery},parent:r.parent},R_:s}}(s.serializer,function(t){const e=ei(t);return e.Pe||(e.Pe=Jo(e,t.explicitOrderBy)),e.Pe}(e),n),a=i.parent;s.connection.yo||delete i.parent;const c=(await s.Co("RunAggregationQuery",a,i,1)).filter((t=>!!t.result));ti(1===c.length);const u=null===(r=c[0].result)||void 0===r?void 0:r.aggregateFields;return Object.keys(u).reduce(((t,e)=>(t[o[e]]=u[e],t)),{})}(s,e,n))}catch(s){r.reject(s)}})),r.promise}(r,t._query,s).then((e=>function(t,e,n){const r=new Id(t);return new Dl(e,r,n)}(n,t,e)))}(t,{count:new Al("count")})}let xd;!function(t,e=!0){Ks="10.6.0",ct(new S("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new Il(new ci(t.getProvider("auth-internal")),new di(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ri(ni.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),dt(zs,"4.3.2",t),dt(zs,"4.3.2","esm2017")}();const Od=new Uint8Array(16);function Md(){if(!xd&&(xd="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xd))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xd(Od)}const Ld=[];for(let Yd=0;Yd<256;++Yd)Ld.push((Yd+256).toString(16).slice(1));const Pd={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Fd(t,e,n){if(Pd.randomUUID&&!e&&!t)return Pd.randomUUID();const r=(t=t||{}).random||(t.rng||Md)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return function(t,e=0){return Ld[t[e+0]]+Ld[t[e+1]]+Ld[t[e+2]]+Ld[t[e+3]]+"-"+Ld[t[e+4]]+Ld[t[e+5]]+"-"+Ld[t[e+6]]+Ld[t[e+7]]+"-"+Ld[t[e+8]]+Ld[t[e+9]]+"-"+Ld[t[e+10]]+Ld[t[e+11]]+Ld[t[e+12]]+Ld[t[e+13]]+Ld[t[e+14]]+Ld[t[e+15]]}(r)}
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
dt("firebase","10.6.0","app");const Vd=function(t,e){const n="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}("object"==typeof t?t:function(t=rt){const e=it.get(t);if(!e&&t===rt&&y())return lt();if(!e)throw ut.create("no-app",{appName:t});return e}(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=m("firestore");t&&ml(r,...t)}return r}(lt({apiKey:"AIzaSyDglu9H4HOJipz9iSWbUKEuO-pjMfxg79k",authDomain:"real-estate-72f54.firebaseapp.com",databaseURL:"https://real-estate-72f54-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"real-estate-72f54",storageBucket:"real-estate-72f54.appspot.com",messagingSenderId:"592970894895",appId:"1:592970894895:web:3a96a3204cd5a702a8c0da"}));function Ud(t,{phoneNumber:e,name:n,email:r,status:s}){switch(e&&(t=sd(t,od("phoneNumber","==",e))),n&&(t=sd(t,od("name","==",n))),r&&(t=sd(t,od("email","==",r))),s){case"isOnTrial":t=sd(t,od("isOnTrial","==",!0));break;case"isPurchased":t=sd(t,od("isPurchased","==",!0));break;case"isWannaTry":t=sd(t,od("isWannaTry","==",!0));break;case"wantToContact":t=sd(t,od("wantToContact","==",!0));break;case"noStatus":t=sd(t,od("isOnTrial","==",!1),od("isPurchased","==",!1),od("isWannaTry","==",!1));break;case"isActive":t=sd(t,od("isActive","==",!0));break;case"isBlocked":t=sd(t,od("isBlocked","==",!0));break;default:return t}return t}async function Bd(t,e,n,r="users"){var s;let i=sd(_l(Vd,r));i=Ud(i,{phoneNumber:t,name:e,email:n});const o=await Sd(i);return null==(s=null==o?void 0:o.docs)?void 0:s.map((t=>({id:t.id,...t.data()})))}async function qd(t,e){const n=sd((t?_l(Vd,t):void 0)??e);return(await Rd(n)).data().count}function jd(t,e){const n=bl(Vd,"users",t),r="trial"===e?{isOnTrial:!0,isPurchased:!1,isWannaTry:!1}:"purchased"===e?{isOnTrial:!1,isPurchased:!0,isWannaTry:!1}:"wannaTry"===e?{isOnTrial:!1,isPurchased:!1,isWannaTry:!0}:{isOnTrial:!1,isPurchased:!1,isWannaTry:!1};return console.log("server",t,r),Ad(n,{...r})}function $d(t,e){const n=bl(Vd,"subscribers",t),r="isBlocked"===e?{isBlocked:!0,isActive:!1}:{isActive:!0,isBlocked:!1};return console.log("server",t,r),Ad(n,{...r})}function zd(t){return Ad(bl(Vd,"users",t),{wantToContact:!1})}function Gd(t,e){for(const r of e){const e=bl(_l(Vd,t),r);Nd(fl((n=e).firestore,Il),[new Wa(n._key,Pa.none())])}var n}async function Kd(t,e,n,r,s,i){var o;const a=_l(Vd,"users"),c=sd(a,ud("time","desc"));let u=sd(c,ld(t));const h=await qd(void 0,Ud(c,{phoneNumber:r,name:s,status:i})),l=[],d=[];n&&(console.log({startingAt:n}),u="forward"===e?sd(a,ud("time","desc"),ld(t),fd(n)):sd(a,ud("time","asc"),ld(t),od("time",">",null==(o=n.data())?void 0:o.time))),u=Ud(u,{phoneNumber:r,name:s,status:i});return(await Sd(u)).forEach((t=>{"back"===e?(l.unshift(t),d.unshift({id:t.id,...t.data()})):(l.push(t),d.push({id:t.id,...t.data()}))})),{data:d,rawData:l,totalElements:h}}async function Hd(t,e,n,r,s,i){var o;const a=_l(Vd,"subscribers"),c=sd(a,ud("time","desc"));let u=sd(c,ld(t));const h=await qd(void 0,Ud(c,{email:r,name:s,status:i})),l=[],d=[];n&&(console.log({startingAt:n}),u="forward"===e?sd(a,ud("time","desc"),ld(t),fd(n)):sd(a,ud("time","asc"),ld(t),od("time",">",null==(o=n.data())?void 0:o.time))),u=Ud(u,{email:r,name:s,status:i});return(await Sd(u)).forEach((t=>{"back"===e?(l.unshift(t),d.unshift({id:t.id,...t.data()})):(l.push(t),d.push({id:t.id,...t.data()}))})),{data:d,rawData:l,totalElements:h}}async function Qd(t,e){var n,r,s,i,o,a;const c=await Bd(t);if(t){if(null==(n=null==c?void 0:c[0])?void 0:n.id){return Ad(bl(Vd,"users",null==(r=null==c?void 0:c[0])?void 0:r.id),{wantToContact:!0,time:yi.now().toDate().getTime()})}{const n=bl(Vd,"contactsName","uNJW3Y2cU8nbX6u9gzP5"),r=bl(Vd,"contactsPhone","9Pn6dgJeRyjH9XVIW0Qj"),c=await Td(n),u=await Td(r),h=null==(s=c.data())?void 0:s.values.split(";"),l=null==(i=u.data())?void 0:i.values.split(";");h.push(e),l.push(t),console.log("trynames",null==(o=c.data())?void 0:o.values),console.log("tryphones",null==(a=u.data())?void 0:a.values),Cd(n,{values:h.join(";")}),Cd(r,{values:l.join(";")});return Cd(bl(Vd,"users",Fd()),{name:e,phoneNumber:t,isOnTrial:!1,isPurchased:!1,isWannaTry:!1,wantToContact:!0,time:yi.now().toDate().getTime()})}}throw new Error("error: invalid_phone")}async function Wd(t,e){var n;const r=function(t){return/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(t)?"valid email address":null}(t),s=await Bd(void 0,void 0,t,"subscribers");if(console.log({checkEmail:r}),r){if(null==(n=null==s?void 0:s[0])?void 0:n.id){return Ad(bl(Vd,"subscribers",null==s?void 0:s[0].id),{isActive:!0})}return Cd(bl(Vd,"subscribers",Fd()),{name:e,email:t,isActive:!0,isBlocked:!1,time:yi.now().toDate().getTime()})}throw new Error("error: invalid_email")}export{Wd as a,Qd as b,Gd as c,o as d,$d as e,_l as f,Vd as g,jd as h,Kd as i,ud as j,Ud as k,ld as l,qd as m,Dd as o,sd as q,Hd as r,zd as u};
