System.register(["./vendor-legacy-a8910e3f.js","./index-legacy-0033a12e.js"],(function(e,t){"use strict";var n,s,o,r,c,i,a,u,l,f,d;return{setters:[e=>{n=e.r,s=e.am,o=e.an,r=e.ao,c=e.ap,i=e.aq,a=e.ar,u=e.R,l=e.u},e=>{f=e.g,d=e.a}],execute:function(){e({r:function(){return x||(x=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=j}(S)),S},u:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:s}=t,{i18n:o,defaultNS:r}=n.useContext(h)||{},c=s||o||d();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new b),!c){p("You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>"string"==typeof t?t:t&&"object"==typeof t&&"string"==typeof t.defaultValue?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}c.options.react&&void 0!==c.options.react.wait&&p("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i={...f(),...c.options.react,...t},{useSuspense:a,keyPrefix:u}=i;let l=e||r||c.options&&c.options.defaultNS;l="string"==typeof l?[l]:l||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(l);const g=(c.isInitialized||c.initializedStoreOnce)&&l.every((e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return p("i18n.languages were undefined or empty",t.languages),!0;const s=void 0!==t.options.ignoreJSONStructure;return s?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e))return!1}}):function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=t.languages[0],o=!!t.options&&t.options.fallbackLng,r=t.languages[t.languages.length-1];if("cimode"===s.toLowerCase())return!0;const c=(e,n)=>{const s=t.services.backendConnector.state[`${e}|${n}`];return-1===s||2===s};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e)||!t.hasResourceBundle(s,e)&&t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages)&&(!c(s,e)||o&&!c(r,e)))}(e,t,n)}(e,c,i)));function O(){return c.getFixedT(t.lng||null,"fallback"===i.nsMode?l:l[0],u)}const[S,j]=n.useState(O);let x=l.join();t.lng&&(x=`${t.lng}${x}`);const w=v(x),C=n.useRef(!0);n.useEffect((()=>{const{bindI18n:e,bindI18nStore:n}=i;function s(){C.current&&j(O)}return C.current=!0,g||a||(t.lng?y(c,t.lng,l,(()=>{C.current&&j(O)})):m(c,l,(()=>{C.current&&j(O)}))),g&&w&&w!==x&&C.current&&j(O),e&&c&&c.on(e,s),n&&c&&c.store.on(n,s),()=>{C.current=!1,e&&c&&e.split(" ").forEach((e=>c.off(e,s))),n&&c&&n.split(" ").forEach((e=>c.store.off(e,s)))}}),[c,x]);const N=n.useRef(!0);n.useEffect((()=>{C.current&&!N.current&&j(O),N.current=!1}),[c,u]);const k=[S,c,g];if(k.t=S,k.i18n=c,k.ready=g,g)return k;if(!g&&!a)return k;throw new Promise((e=>{t.lng?y(c,t.lng,l,(()=>e())):m(c,l,(()=>e()))}))}});const t={};function p(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];"string"==typeof n[0]&&t[n[0]]||("string"==typeof n[0]&&(t[n[0]]=new Date),function(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}(...n))}const g=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout((()=>{e.off("initialized",n)}),0),t()};e.on("initialized",n)}};function m(e,t,n){e.loadNamespaces(t,g(e,n))}function y(e,t,n,s){"string"==typeof n&&(n=[n]),n.forEach((t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,g(e,s))}const h=n.createContext();class b{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const v=(e,t)=>{const s=n.useRef();return n.useEffect((()=>{s.current=t?s.current:e}),[e,t]),s.current};var O={exports:{}};!function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}(O),e("i",O.exports);var S={};const j=s(o);var x;const w=Object.fromEntries?Object.fromEntries:e=>{if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");const t={};return Object.keys(e).forEach((n=>{const[s,o]=e[n];t[s]=o})),t};function C(e){return Object.keys(e)}function N(e,t){if(!e)throw new Error(t)}function k(e,t){return t}const $=e=>{const t=e.length;let n=0,s="";for(;n<t;n++){const t=e[n];if(null==t)continue;let o;switch(typeof t){case"boolean":break;case"object":if(Array.isArray(t))o=$(t);else{N(!k(0,!1)),o="";for(const e in t)t[e]&&e&&(o&&(o+=" "),o+=e)}break;default:o=t}o&&(s&&(s+=" "),s+=o)}return s},{createCssAndCx:E}={createCssAndCx:function(e){const{cache:t}=e,n=(...e)=>{const n=r(e,t.registered);c(t,n,!1);const s=`${t.key}-${n.name}`;{const n=e[0];(function(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)})(n)&&I.saveClassNameCSSObjectMapping(t,s,n)}return s};return{css:n,cx:(...e)=>{const s=$(e),o=I.fixClassName(t,s,n);return function(e,t,n){const s=[],o=i(e,s,n);return s.length<2?n:o+t(s)}(t.registered,n,o)}}}};function P(e){const{useCache:t}=e;return{useCssAndCx:function(){const e=t(),{css:s,cx:o}=function(e,t){const s=n.useRef();return(!s.current||t.length!==s.current.prevDeps.length||s.current.prevDeps.map(((e,n)=>e===t[n])).indexOf(!1)>=0)&&(s.current={v:e(),prevDeps:[...t]}),s.current.v}((()=>E({cache:e})),[e]);return{css:s,cx:o}}}}const I=(()=>{const e=new WeakMap;return{saveClassNameCSSObjectMapping:(t,n,s)=>{let o=e.get(t);void 0===o&&(o=new Map,e.set(t,o)),o.set(n,s)},fixClassName:(t,n,s)=>{const o=e.get(t);return $(function(e){let t=!1;return e.map((([e,n])=>{if(void 0===n)return e;let s;if(t)s={"&&":n};else{s=e;for(const e in n)if(e.startsWith("@media")){t=!0;break}}return s}))}(n.split(" ").map((e=>[e,null==o?void 0:o.get(e)]))).map((e=>"string"==typeof e?e:s(e))))}}})();function M(e){if(!(e instanceof Object)||"function"==typeof e)return e;const t=[];for(const n in e){const s=e[n],o=typeof s;if("string"!==o&&("number"!==o||isNaN(s))&&"boolean"!==o&&null!=s)return e;t.push(`${n}:${o}_${s}`)}return"xSqLiJdLMd9s"+t.join("|")}function U(e,t,n){if(!(t instanceof Object))return e;const s={};return C(e).forEach((o=>s[o]=n(e[o],t[o]))),C(t).forEach((n=>{if(n in e)return;const o=t[n];"string"==typeof o&&(s[n]=o)})),s}const _=({classes:e,theme:t,muiStyleOverridesParams:s,css:o,cx:r,name:c})=>{var i,a;if("makeStyle no name"!==c){if(void 0!==s&&void 0===c)throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')")}else c=void 0;let u;try{u=void 0===c?void 0:(null===(a=null===(i=t.components)||void 0===i?void 0:i[c])||void 0===a?void 0:a.styleOverrides)||void 0}catch(f){}const l=n.useMemo((()=>{if(void 0===u)return;const e={};for(const n in u){const r=u[n];r instanceof Object&&(e[n]=o("function"==typeof r?r(Object.assign({theme:t,ownerState:null==s?void 0:s.ownerState},null==s?void 0:s.props)):r))}return e}),[u,M(null==s?void 0:s.props),M(null==s?void 0:s.ownerState),o]);return{classes:e=n.useMemo((()=>U(e,l,r)),[e,l,r])}};let A=0;function T(e){const{useTheme:t,cache:s}=e,{useCache:o}=L({cacheProvidedAtInception:s}),{useCssAndCx:r}=P({useCache:o});return{makeStyles:function(e){const{name:s,uniqId:c=""+A++}=null!=e?e:{},i="object"!=typeof s?s:Object.keys(s)[0];return function(e){const s="function"==typeof e?e:()=>e;return function(e,a){const u=t();let{css:l,cx:f}=r();const d=o();let p=n.useMemo((()=>{const t={},n="undefined"!=typeof Proxy&&new Proxy({},{get:(e,n)=>("symbol"==typeof n&&N(!1),t[n]=`${d.key}-${c}${void 0!==i?`-${i}`:""}-${n}-ref`)}),o=s(u,e,n||{}),r=w(C(o).map((e=>{const n=o[e];return n.label||(n.label=`${void 0!==i?`${i}-`:""}${e}`),[e,`${l(n)}${k(0,e in t)?` ${t[e]}`:""}`]})));return C(t).forEach((e=>{e in r||(r[e]=t[e])})),r}),[d,l,f,u,M(e)]);{const e=null==a?void 0:a.props.classes;p=n.useMemo((()=>U(p,e,f)),[p,M(e),f])}{const e=_({classes:p,css:l,cx:f,name:null!=i?i:"makeStyle no name",idOfUseStyles:c,muiStyleOverridesParams:a,theme:u});void 0!==e.classes&&(p=e.classes),void 0!==e.css&&(l=e.css),void 0!==e.cx&&(f=e.cx)}return{classes:p,theme:u,css:l,cx:f}}}},useStyles:function(){const e=t(),{css:n,cx:s}=r();return{theme:e,css:n,cx:s}}}}const R=n.createContext(void 0),{createUseCache:L}={createUseCache:function(e){const{cacheProvidedAtInception:t}=e;return{useCache:function(){var e;const s=a(),o=n.useContext(R),r=null!==(e=null!=t?t:o)&&void 0!==e?e:s;if(null===r)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join("\n"));return r}}}};function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}var z=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};const D=new WeakMap,W="getClasses should only be used in conjunction with withStyles";function B(e){const t=e.classes;if(void 0===t)throw new Error(W);const n=D.get(t);if(void 0===n)throw new Error(W);return n}function J(e){const t={},n={};return Object.keys(e).forEach((s=>(s.startsWith("@media")?n:t)[s]=e[s])),Object.keys(n).forEach((e=>{const s=n[e];Object.keys(s).forEach((n=>{var o;return t[n]=Object.assign(Object.assign({},null!==(o=t[n])&&void 0!==o?o:{}),{[e]:s[n]})}))})),t}const V=(()=>{const e="object"==typeof document&&"function"==typeof(null===document||void 0===document?void 0:document.getElementById),t="undefined"!=typeof jest,n="undefined"!=typeof mocha,s="undefined"!=typeof __vitest_worker__;return!(e||t||n||s)})();var F=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};let H=0;const Y=[];function G(e){const{useContext:t,useCache:s,useCssAndCx:o,usePlugin:r,name:c,doesUseNestedSelectors:i}=e;return{withParams:()=>G(Object.assign({},e)),withName:t=>G(Object.assign(Object.assign({},e),{name:"object"!=typeof t?t:Object.keys(t)[0]})),withNestedSelectors:()=>G(Object.assign(Object.assign({},e),{doesUseNestedSelectors:!0})),create:e=>{const a="x"+H++,u="function"==typeof e?e:()=>e;return function(e){var l,f,d;const p=null!=e?e:{},{classesOverrides:g}=p,m=F(p,["classesOverrides"]),y=t(),{css:h,cx:b}=o(),v=s();let O=n.useMemo((()=>{const t={},n=u(Object.assign(Object.assign(Object.assign({},e),y),i?{classes:"undefined"==typeof Proxy?{}:new Proxy({},{get:(e,n)=>{if("symbol"==typeof n&&N(!1),V){{let e=Y.find((e=>e.name===c&&e.idOfUseStyles===a));void 0===e&&(e={name:c,idOfUseStyles:a,nestedSelectorRuleNames:new Set},Y.push(e)),e.nestedSelectorRuleNames.add(n)}if(void 0!==Y.find((e=>e.name===c&&e.idOfUseStyles!==a&&e.nestedSelectorRuleNames.has(n))))throw new Error([`tss-react: Duplicate nested selector "${n}" detected in ${void 0===c?`useStyles named "${c}"`:"anonymous useStyles function"}.`,"In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.",'Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.'].join("\n"))}return t[n]=`${v.key}-${a}${void 0!==c?`-${c}`:""}-${n}-ref`}})}:{})),s=w(C(n).map((e=>{const s=n[e];return s.label||(s.label=`${void 0!==c?`${c}-`:""}${e}`),[e,`${h(s)}${k(0,e in t)?` ${t[e]}`:""}`]})));return C(t).forEach((e=>{e in s||(s[e]=t[e])})),s}),[v,h,b,M(e),...Object.values(y)]);O=n.useMemo((()=>U(O,g,b)),[O,M(g),b]);const S=r(Object.assign(Object.assign({classes:O,css:h,cx:b,idOfUseStyles:a,name:c},y),m));return Object.assign({classes:null!==(l=S.classes)&&void 0!==l?l:O,css:null!==(f=S.css)&&void 0!==f?f:h,cx:null!==(d=S.cx)&&void 0!==d?d:b},y)}}}}const{tss:K}=function(e){const{useContext:t,usePlugin:n,cache:s}=e,{useCache:o}=L({cacheProvidedAtInception:s}),{useCssAndCx:r}=P({useCache:o});return{tss:G({useContext:t,useCache:o,useCssAndCx:r,usePlugin:null!=n?n:({classes:e,cx:t,css:n})=>({classes:e,cx:t,css:n}),name:void 0,doesUseNestedSelectors:!1})}}({useContext:()=>({})});K.create({});const{makeStyles:Q}=(X={useTheme:l},Object.assign(Object.assign({},T(X)),function(e){const{useTheme:t,cache:s}=e,{makeStyles:o}=T({useTheme:t,cache:s});function r(e,t,s){const r="string"==typeof e?(()=>{const t=e,s=function(e){var{children:s}=e,o=z(e,["children"]);return n.createElement(t,o,s)};return Object.defineProperty(s,"name",{value:q(t)}),s})():e,c=(()=>{{const{name:e}=null!=s?s:{};if(void 0!==e)return"object"!=typeof e?e:Object.keys(e)[0]}{const e=r.displayName;if("string"==typeof e&&""!==e)return e}{const{name:e}=r;if(e)return e.replace(/\$/g,"usd")}})(),i=o(Object.assign(Object.assign({},s),{name:c}))("function"==typeof t?(e,n,s)=>J(t(e,n,s)):J(t));function a(e){for(const t in e)if("root"!==t)return!0;return!1}const l=n.forwardRef((function(t,n){const{className:s,classes:o}=t,c=z(t,["className","classes"]),{classes:l,cx:f}=i(t,{props:t}),d=f(l.root,s);return D.set(l,Object.assign(Object.assign({},l),{root:d})),u.createElement(r,Object.assign({ref:n,className:a(l)?s:d},"string"==typeof e?{}:{classes:l},c))}));return void 0!==c&&(l.displayName=`${q(c)}WithStyles`,Object.defineProperty(l,"name",{value:l.displayName})),l}return r.getClasses=B,{withStyles:r}}(X)));var X;e("m",Q)}}}));