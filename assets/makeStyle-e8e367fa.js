import{r as e,ao as t,ap as n,aq as s,ar as o,as as c,at as r,R as a,u as i}from"./vendor-5c9c311d.js";import{g as u,a as l}from"./index-a2625635.js";const f={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&f[t[0]]||("string"==typeof t[0]&&(f[t[0]]=new Date),function(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),console.warn(...t)}}(...t))}const p=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout((()=>{e.off("initialized",n)}),0),t()};e.on("initialized",n)}};function g(e,t,n){e.loadNamespaces(t,p(e,n))}function m(e,t,n,s){"string"==typeof n&&(n=[n]),n.forEach((t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,p(e,s))}const y=e.createContext();class h{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function b(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:s}=n,{i18n:o,defaultNS:c}=e.useContext(y)||{},r=s||o||l();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new h),!r){d("You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>"string"==typeof t?t:t&&"object"==typeof t&&"string"==typeof t.defaultValue?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}r.options.react&&void 0!==r.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...u(),...r.options.react,...n},{useSuspense:i,keyPrefix:f}=a;let p=t||c||r.options&&r.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(p);const b=(r.isInitialized||r.initializedStoreOnce)&&p.every((e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e))return!1}}):function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=t.languages[0],o=!!t.options&&t.options.fallbackLng,c=t.languages[t.languages.length-1];if("cimode"===s.toLowerCase())return!0;const r=(e,n)=>{const s=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===s||2===s};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e)||!t.hasResourceBundle(s,e)&&t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages)&&(!r(s,e)||o&&!r(c,e)))}(e,t,n):(d("i18n.languages were undefined or empty",t.languages),!0)}(e,r,a)));function v(){return r.getFixedT(n.lng||null,"fallback"===a.nsMode?p:p[0],f)}const[O,S]=e.useState(v);let j=p.join();n.lng&&(j="".concat(n.lng).concat(j));const x=((t,n)=>{const s=e.useRef();return e.useEffect((()=>{s.current=n?s.current:t}),[t,n]),s.current})(j),w=e.useRef(!0);e.useEffect((()=>{const{bindI18n:e,bindI18nStore:t}=a;function s(){w.current&&S(v)}return w.current=!0,b||i||(n.lng?m(r,n.lng,p,(()=>{w.current&&S(v)})):g(r,p,(()=>{w.current&&S(v)}))),b&&x&&x!==j&&w.current&&S(v),e&&r&&r.on(e,s),t&&r&&r.store.on(t,s),()=>{w.current=!1,e&&r&&e.split(" ").forEach((e=>r.off(e,s))),t&&r&&t.split(" ").forEach((e=>r.store.off(e,s)))}}),[r,j]);const C=e.useRef(!0);e.useEffect((()=>{w.current&&!C.current&&S(v),C.current=!1}),[r,f]);const N=[O,r,b];if(N.t=O,N.i18n=r,N.ready=b,b)return N;if(!b&&!i)return N;throw new Promise((e=>{n.lng?m(r,n.lng,p,(()=>e())):g(r,p,(()=>e()))}))}var v,O={exports:{}};(v=O).exports=function(e){return e&&e.__esModule?e:{default:e}},v.exports.__esModule=!0,v.exports.default=v.exports;var S=O.exports,j={};const x=t(n);var w;function C(){return w||(w=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=x}(j)),j}const N=Object.fromEntries?Object.fromEntries:e=>{if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");const t={};return Object.keys(e).forEach((n=>{const[s,o]=e[n];t[s]=o})),t};function k(e){return Object.keys(e)}function E(e,t){if(!e)throw new Error(t)}function P(e,t){return t}const I=e=>{const t=e.length;let n=0,s="";for(;n<t;n++){const t=e[n];if(null==t)continue;let o;switch(typeof t){case"boolean":break;case"object":if(Array.isArray(t))o=I(t);else{E(!P(0,!1)),o="";for(const e in t)t[e]&&e&&(o&&(o+=" "),o+=e)}break;default:o=t}o&&(s&&(s+=" "),s+=o)}return s};const{createCssAndCx:M}={createCssAndCx:function(e){const{cache:t}=e,n=(...e)=>{const n=s(e,t.registered);o(t,n,!1);const c="".concat(t.key,"-").concat(n.name);{const n=e[0];(function(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)})(n)&&_.saveClassNameCSSObjectMapping(t,c,n)}return c};return{css:n,cx:(...e)=>{const s=I(e),o=_.fixClassName(t,s,n);return function(e,t,n){const s=[],o=c(e,s,n);return s.length<2?n:o+t(s)}(t.registered,n,o)}}}};function U(t){const{useCache:n}=t;return{useCssAndCx:function(){const t=n(),{css:s,cx:o}=function(t,n){const s=e.useRef();return(!s.current||n.length!==s.current.prevDeps.length||s.current.prevDeps.map(((e,t)=>e===n[t])).indexOf(!1)>=0)&&(s.current={v:t(),prevDeps:[...n]}),s.current.v}((()=>M({cache:t})),[t]);return{css:s,cx:o}}}}const _=(()=>{const e=new WeakMap;return{saveClassNameCSSObjectMapping:(t,n,s)=>{let o=e.get(t);void 0===o&&(o=new Map,e.set(t,o)),o.set(n,s)},fixClassName:(t,n,s)=>{const o=e.get(t);return I(function(e){let t=!1;return e.map((([e,n])=>{if(void 0===n)return e;let s;if(t)s={"&&":n};else{s=e;for(const e in n)if(e.startsWith("@media")){t=!0;break}}return s}))}(n.split(" ").map((e=>[e,null==o?void 0:o.get(e)]))).map((e=>"string"==typeof e?e:s(e))))}}})();function A(e){if(!(e instanceof Object)||"function"==typeof e)return e;const t=[];for(const n in e){const s=e[n],o=typeof s;if("string"!==o&&("number"!==o||isNaN(s))&&"boolean"!==o&&null!=s)return e;t.push("".concat(n,":").concat(o,"_").concat(s))}return"xSqLiJdLMd9s"+t.join("|")}function T(e,t,n){if(!(t instanceof Object))return e;const s={};return k(e).forEach((o=>s[o]=n(e[o],t[o]))),k(t).forEach((n=>{if(n in e)return;const o=t[n];"string"==typeof o&&(s[n]=o)})),s}const R=({classes:t,theme:n,muiStyleOverridesParams:s,css:o,cx:c,name:r})=>{var a,i;if("makeStyle no name"!==r){if(void 0!==s&&void 0===r)throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')")}else r=void 0;let u;try{u=void 0===r?void 0:(null===(i=null===(a=n.components)||void 0===a?void 0:a[r])||void 0===i?void 0:i.styleOverrides)||void 0}catch(f){}const l=e.useMemo((()=>{if(void 0===u)return;const e={};for(const t in u){const c=u[t];c instanceof Object&&(e[t]=o("function"==typeof c?c(Object.assign({theme:n,ownerState:null==s?void 0:s.ownerState},null==s?void 0:s.props)):c))}return e}),[u,A(null==s?void 0:s.props),A(null==s?void 0:s.ownerState),o]);return{classes:t=e.useMemo((()=>T(t,l,c)),[t,l,c])}};let L=0;function q(t){const{useTheme:n,cache:s}=t,{useCache:o}=D({cacheProvidedAtInception:s}),{useCssAndCx:c}=U({useCache:o});return{makeStyles:function(t){const{name:s,uniqId:r="".concat(L++)}=null!=t?t:{},a="object"!=typeof s?s:Object.keys(s)[0];return function(t){const s="function"==typeof t?t:()=>t;return function(t,i){const u=n();let{css:l,cx:f}=c();const d=o();let p=e.useMemo((()=>{const e={},n="undefined"!=typeof Proxy&&new Proxy({},{get:(t,n)=>("symbol"==typeof n&&E(!1),e[n]="".concat(d.key,"-").concat(r).concat(void 0!==a?"-".concat(a):"","-").concat(n,"-ref"))}),o=s(u,t,n||{}),c=N(k(o).map((t=>{const n=o[t];return n.label||(n.label="".concat(void 0!==a?"".concat(a,"-"):"").concat(t)),[t,"".concat(l(n)).concat(P(0,t in e)?" ".concat(e[t]):"")]})));return k(e).forEach((t=>{t in c||(c[t]=e[t])})),c}),[d,l,f,u,A(t)]);{const t=null==i?void 0:i.props.classes;p=e.useMemo((()=>T(p,t,f)),[p,A(t),f])}{const e=R({classes:p,css:l,cx:f,name:null!=a?a:"makeStyle no name",idOfUseStyles:r,muiStyleOverridesParams:i,theme:u});void 0!==e.classes&&(p=e.classes),void 0!==e.css&&(l=e.css),void 0!==e.cx&&(f=e.cx)}return{classes:p,theme:u,css:l,cx:f}}}},useStyles:function(){const e=n(),{css:t,cx:s}=c();return{theme:e,css:t,cx:s}}}}const z=e.createContext(void 0),{createUseCache:D}={createUseCache:function(t){const{cacheProvidedAtInception:n}=t;return{useCache:function(){var t;const s=r(),o=e.useContext(z),c=null!==(t=null!=n?n:o)&&void 0!==t?t:s;if(null===c)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join("\n"));return c}}}};function W(e){return e.charAt(0).toUpperCase()+e.slice(1)}var B=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};const J=new WeakMap,V="getClasses should only be used in conjunction with withStyles";function F(e){const t=e.classes;if(void 0===t)throw new Error(V);const n=J.get(t);if(void 0===n)throw new Error(V);return n}function H(e){const t={},n={};return Object.keys(e).forEach((s=>(s.startsWith("@media")?n:t)[s]=e[s])),Object.keys(n).forEach((e=>{const s=n[e];Object.keys(s).forEach((n=>{var o;return t[n]=Object.assign(Object.assign({},null!==(o=t[n])&&void 0!==o?o:{}),{[e]:s[n]})}))})),t}const Y=(()=>{const e="object"==typeof document&&"function"==typeof(null===document||void 0===document?void 0:document.getElementById),t="undefined"!=typeof jest,n="undefined"!=typeof mocha,s="undefined"!=typeof __vitest_worker__;return!(e||t||n||s)})();var $=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};let G=0;const K=[];function Q(t){const{useContext:n,useCache:s,useCssAndCx:o,usePlugin:c,name:r,doesUseNestedSelectors:a}=t;return{withParams:()=>Q(Object.assign({},t)),withName:e=>Q(Object.assign(Object.assign({},t),{name:"object"!=typeof e?e:Object.keys(e)[0]})),withNestedSelectors:()=>Q(Object.assign(Object.assign({},t),{doesUseNestedSelectors:!0})),create:t=>{const i="x".concat(G++),u="function"==typeof t?t:()=>t;return function(t){var l,f,d;const p=null!=t?t:{},{classesOverrides:g}=p,m=$(p,["classesOverrides"]),y=n(),{css:h,cx:b}=o(),v=s();let O=e.useMemo((()=>{const e={},n=u(Object.assign(Object.assign(Object.assign({},t),y),a?{classes:"undefined"==typeof Proxy?{}:new Proxy({},{get:(t,n)=>{if("symbol"==typeof n&&E(!1),Y){{let e=K.find((e=>e.name===r&&e.idOfUseStyles===i));void 0===e&&(e={name:r,idOfUseStyles:i,nestedSelectorRuleNames:new Set},K.push(e)),e.nestedSelectorRuleNames.add(n)}if(void 0!==K.find((e=>e.name===r&&e.idOfUseStyles!==i&&e.nestedSelectorRuleNames.has(n))))throw new Error(['tss-react: Duplicate nested selector "'.concat(n,'" detected in ').concat(void 0===r?'useStyles named "'.concat(r,'"'):"anonymous useStyles function","."),"In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.",'Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.'].join("\n"))}return e[n]="".concat(v.key,"-").concat(i).concat(void 0!==r?"-".concat(r):"","-").concat(n,"-ref")}})}:{})),s=N(k(n).map((t=>{const s=n[t];return s.label||(s.label="".concat(void 0!==r?"".concat(r,"-"):"").concat(t)),[t,"".concat(h(s)).concat(P(0,t in e)?" ".concat(e[t]):"")]})));return k(e).forEach((t=>{t in s||(s[t]=e[t])})),s}),[v,h,b,A(t),...Object.values(y)]);O=e.useMemo((()=>T(O,g,b)),[O,A(g),b]);const S=c(Object.assign(Object.assign({classes:O,css:h,cx:b,idOfUseStyles:i,name:r},y),m));return Object.assign({classes:null!==(l=S.classes)&&void 0!==l?l:O,css:null!==(f=S.css)&&void 0!==f?f:h,cx:null!==(d=S.cx)&&void 0!==d?d:b},y)}}}}const{tss:X}=function(e){const{useContext:t,usePlugin:n,cache:s}=e,{useCache:o}=D({cacheProvidedAtInception:s}),{useCssAndCx:c}=U({useCache:o});return{tss:Q({useContext:t,useCache:o,useCssAndCx:c,usePlugin:null!=n?n:({classes:e,cx:t,css:n})=>({classes:e,cx:t,css:n}),name:void 0,doesUseNestedSelectors:!1})}}({useContext:()=>({})});X.create({});const{makeStyles:Z}=(ee={useTheme:i},Object.assign(Object.assign({},q(ee)),function(t){const{useTheme:n,cache:s}=t,{makeStyles:o}=q({useTheme:n,cache:s});function c(t,n,s){const c="string"==typeof t?(()=>{const n=t,s=function(t){var{children:s}=t,o=B(t,["children"]);return e.createElement(n,o,s)};return Object.defineProperty(s,"name",{value:W(n)}),s})():t,r=(()=>{{const{name:e}=null!=s?s:{};if(void 0!==e)return"object"!=typeof e?e:Object.keys(e)[0]}{const e=c.displayName;if("string"==typeof e&&""!==e)return e}{const{name:e}=c;if(e)return e.replace(/\$/g,"usd")}})(),i=o(Object.assign(Object.assign({},s),{name:r}))("function"==typeof n?(e,t,s)=>H(n(e,t,s)):H(n));function u(e){for(const t in e)if("root"!==t)return!0;return!1}const l=e.forwardRef((function(e,n){const{className:s,classes:o}=e,r=B(e,["className","classes"]),{classes:l,cx:f}=i(e,{props:e}),d=f(l.root,s);return J.set(l,Object.assign(Object.assign({},l),{root:d})),a.createElement(c,Object.assign({ref:n,className:u(l)?s:d},"string"==typeof t?{}:{classes:l},r))}));return void 0!==r&&(l.displayName="".concat(W(r),"WithStyles"),Object.defineProperty(l,"name",{value:l.displayName})),l}return c.getClasses=F,{withStyles:c}}(ee)));var ee;export{S as i,Z as m,C as r,b as u};
