(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9695],{6957:function(e,t,n){Promise.resolve().then(n.t.bind(n,2489,23)),Promise.resolve().then(n.t.bind(n,1111,23)),Promise.resolve().then(n.bind(n,7050))},7050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(7437),o=n(2265),a=n(3428),l=n(7927),i=n(4281);let f=(e,t)=>(0,a.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),s=e=>(0,a.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=(e,t=!1)=>{var n;let r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,n])=>{var o;r[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(o=n.palette)?void 0:o.mode}});let o=(0,a.Z)({html:f(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,a.Z)({margin:0},s(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r),l=null==(n=e.components)||null==(n=n.MuiCssBaseline)?void 0:n.styleOverrides;return l&&(o=[o,l]),o};var u=function(e){let t=(0,l.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:a=!1}=t;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(i.Z,{styles:e=>c(e,a)}),n]})},m=n(6335),d=n(4033),p=n(6375),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function b(e){let{options:t,CacheProvider:n=p.C,children:r}=e,{prepend:a=!1}=t,l=h(t,["prepend"]),[{cache:i,flush:f}]=(0,o.useState)(()=>{let e=(0,m.Z)(l);e.compat=!0;let t=e.insert,n=[];return e.insert=(...r)=>{let[o,a]=r;return void 0===e.inserted[a.name]&&n.push({name:a.name,isGlobal:""===o}),t(...r)},{cache:e,flush:()=>{let e=n;return n=[],e}}});return(0,d.useServerInsertedHTML)(()=>{let e=f();if(0===e.length)return null;let t="",n=i.key,r=[];for(let{name:o,isGlobal:a}of e){let e=i.inserted[o];"boolean"!=typeof e&&(a?r.push({name:o,style:e}):(t+=e,n+=` ${o}`))}let s=e=>a?`@layer emotion {${e}}`:e;return o.createElement(o.Fragment,null,r.map(({name:e,style:t})=>o.createElement("style",{nonce:l.nonce,key:e,"data-emotion":`${i.key}-global ${e}`,dangerouslySetInnerHTML:{__html:s(t)}})),""!==t&&o.createElement("style",{nonce:l.nonce,"data-emotion":n,dangerouslySetInnerHTML:{__html:s(t)}}))}),o.createElement(n,{value:i},r)}var y=n(18);function g(e){return String(parseFloat(e)).length===String(e).length}function v(e){return parseFloat(e)}var x=n(7475),F=n(791);let S=o.createContext(null);function k(){let e=o.useContext(S);return e}let _="function"==typeof Symbol&&Symbol.for;var j=_?Symbol.for("mui.nested"):"__THEME_NESTED__",Z=function(e){let{children:t,theme:n}=e,l=k(),i=o.useMemo(()=>{let e=null===l?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,a.Z)({},e,t)}(l,n);return null!=e&&(e[j]=null!==l),e},[n,l]);return(0,r.jsx)(S.Provider,{value:i,children:t})},E=n(4809);let O={};function C(e,t,n,r=!1){return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof n){let l=n(o),i=e?(0,a.Z)({},t,{[e]:l}):l;return r?()=>i:i}return e?(0,a.Z)({},t,{[e]:n}):(0,a.Z)({},t,n)},[e,t,n,r])}var w=function(e){let{children:t,theme:n,themeId:o}=e,a=(0,E.Z)(O),l=k()||O,i=C(o,a,n),f=C(o,l,n,!0);return(0,r.jsx)(Z,{theme:f,children:(0,r.jsx)(p.T.Provider,{value:i,children:t})})},z=n(3469);let M=["theme"];function P(e){let{theme:t}=e,n=(0,F.Z)(e,M),o=t[z.Z];return(0,r.jsx)(w,(0,a.Z)({},n,{themeId:o?z.Z:void 0,theme:o||t}))}var T=n(4275),B=n.n(T);let $=(0,o.createContext)({settings:{direction:"ltr",language:"uz",theme:"light"},saveSettings:()=>{}});B().node.isRequired,$.Consumer;let I=()=>(0,o.useContext)($);function N(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var L=n(9538);function D(){let e=N(["\n    from {\n        opacity:0;\n        transform: translateY('-25%');\n    }\n    to{\n        opacity:1;\n        transform: translateY('0%');\n    }\n"]);return D=function(){return e},e}function H(){let e=N(["\n   from {\n        opacity:0;\n        transform: translateY('25%');\n    }\n    to{\n        opacity:1;\n        transform: translateY('0%');\n    }\n"]);return H=function(){return e},e}function W(){let e=N(["\n    from {\n        opacity:0;\n        transform: translateX('-25%');\n    }\n    to{\n        opacity:1;\n        transform: translateX('0%');\n    }\n"]);return W=function(){return e},e}function X(){let e=N(["\n    from {\n        opacity:0;\n        transform: translateX('25%');\n    }\n    to{\n        opacity:1;\n        transform: translateX('0%');\n    }\n"]);return X=function(){return e},e}let Y=(0,L.F4)(D()),A=(0,L.F4)(H()),R=(0,L.F4)(W()),q=(0,L.F4)(X()),G={animationsController:{renderFromBottom:"",renderFromLeft:"",renderFromRight:"",renderFromTop:""},keyframes:{fromTop:Y,fromBottom:A,fromLeft:R,fromRight:q},breakpoints:{values:{xs:0,sm:600,md:900,mid:750,lg:1200,xl:1536,tablet:640,laptop:1050,desktop:1100}},components:{MuiOutlinedInput:{styleOverrides:{root:{boxShadow:"0px 0px 6px 0px rgba(63, 81, 181, 0.25)"}}}}},J={components:{},palette:{primary:{main:"#3F51B5"},secondary:{main:"#F5F8FF",dark:"#DEE8FF"},success:{contrast:"#ffffff",dark:"#1b774d",light:"#52bb8b",main:"#27AB6E"},warning:{contrast:"#ffffff",dark:"#975b1e",light:"#e09b55",main:"#d9822b"},info:{contrast:"#ffffff",dark:"#0b4e8d",light:"#3f8cd4",main:"#1070CA"},error:{contrast:"#ffffff",dark:"#a53531",light:"#ef6f6b",main:"#ec4c47"},text:{primary:"#111",secondary:"#3F51B5"}}},K={components:{},palette:{primary:{main:"#3F51B5"},secondary:{main:"#F5F8FF"},success:{contrast:"#ffffff",dark:"#2F6b39",light:"#5fc16d",main:"#38b249"},warning:{contrast:"#ffffff",dark:"#8D682d",light:"#f7bb57",main:"#f6ab2e"},info:{contrast:"#ffffff",dark:"#1D4580",light:"#4483df",main:"#1664d8"},error:{contrast:"#ffffff",dark:"#85372b",light:"#eb6d57",main:"#e6492d"},text:{primary:"#d8dade",secondary:"#868998"}}},Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="light"===e.theme?J:K;t||(console.warn(Error("The theme ".concat(e.theme," is not valid"))),t=J);let n=function(e,t={}){var n;let{breakpoints:r=["sm","md","lg"],disableAlign:o=!1,factor:l=2,variants:i=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,f=(0,a.Z)({},e);f.typography=(0,a.Z)({},f.typography);let s=f.typography,c=(n=s.htmlFontSize,(e,t)=>{let r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===t)return e;let o=v(e);"px"!==r&&("em"===r?o=v(e)*v(n):"rem"===r&&(o=v(e)*v(n)));let a=o;if("px"!==t){if("em"===t)a=o/v(n);else{if("rem"!==t)return e;a=o/v(n)}}return parseFloat(a.toFixed(5))+t}),u=r.map(e=>f.breakpoints.values[e]);return i.forEach(e=>{let t=s[e],n=parseFloat(c(t.fontSize,"rem"));if(n<=1)return;let{lineHeight:r}=t;if(!g(r)&&!o)throw Error((0,y.Z)(6));g(r)||(r=parseFloat(c(r,"rem"))/parseFloat(n));let i=null;o||(i=e=>(function({size:e,grid:t}){let n=e-e%t,r=n+t;return e-n<r-e?n:r})({size:e,grid:function({lineHeight:e,pixels:t,htmlFontSize:n}){return t/(e*n)}({pixels:4,lineHeight:r,htmlFontSize:s.htmlFontSize})})),s[e]=(0,a.Z)({},t,function({cssProperty:e,min:t,max:n,unit:r="rem",breakpoints:o=[600,900,1200],transform:a=null}){let l={[e]:`${t}${r}`},i=(n-t)/o[o.length-1];return o.forEach(n=>{let o=t+i*n;null!==a&&(o=a(o)),l[`@media (min-width:${n}px)`]={[e]:`${Math.round(1e4*o)/1e4}${r}`}}),l}({cssProperty:"fontSize",min:1+(n-1)/l,max:n,unit:"rem",breakpoints:u,transform:i}))}),f}((0,x.Z)({...G},{...t},{direction:e.direction}));return n};function U(e){let{children:t}=e,{settings:n}=I(),o=Q({theme:n.theme,direction:n.direction});return(0,r.jsxs)(P,{theme:o,children:[(0,r.jsx)(u,{}),t]})}var V=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(b,{options:{key:"mui"},children:(0,r.jsx)(U,{children:t})})]})}},2489:function(){},1111:function(e){e.exports={style:{fontFamily:"'__Inter_f134cf', '__Inter_Fallback_f134cf'",fontStyle:"normal"},className:"__className_f134cf"}},4033:function(e,t,n){e.exports=n(94)}},function(e){e.O(0,[6070,2971,2472,1744],function(){return e(e.s=6957)}),_N_E=e.O()}]);