System.register(["./vendor-legacy-315b566f.js","./england-legacy-c91ccd48.js","./makeStyle-legacy-fcb7e795.js","./index-legacy-fde3c65b.js","./MoreTime-legacy-5af4197b.js","./index-legacy-b49e5d1b.js"],(function(e,t){"use strict";var a,r,i,o,n,s,l,c,d,p,u,x,h,g,m,f,y,b,j,v,w,k,A,C,z,M,L,S,E,P,I,O,_,T,W,F,N,H,$,B;return{setters:[e=>{a=e.j,r=e.r,i=e.P,o=e.u,n=e.B,s=e.t,l=e.z,c=e.W,d=e.X,p=e.m,u=e.a3,x=e.q,h=e.O,g=e.U,m=e.a4,f=e.a5,y=e.a6,b=e.v,j=e.R,v=e.C,w=e.a7,k=e.I,A=e.o,C=e.D,z=e.L,M=e.A,L=e.a8},e=>{S=e.e,E=e.u,P=e.r,I=e.d,O=e.L},e=>{_=e.r,T=e.i,W=e.m,F=e.u},e=>{N=e.u},e=>{H=e.d,$=e.a,B=e.b},null],execute:function(){e("default",(function({children:e}){const t=y();console.log(t);const i=o(),{saveSettings:p,settings:u}=N(),[x,g]=r.useState("light"===u.theme),m=b((e=>e.breakpoints.down("md"))),{classes:f}=Ct(),{t:S,i18n:{changeLanguage:E,language:P}}=F(),[_,T]=j.useState(!m),W=e=>{E(e),p({...u,language:e}),gt.success(S("Language changed"))};return a.jsxs(n,{sx:{display:"flex"},children:[a.jsx(v,{}),a.jsx(St,{position:"fixed",open:_,children:a.jsxs(w,{className:f.toolbar_light,children:[a.jsx(k,{color:"inherit","aria-label":"open drawer",onClick:()=>{T(!0)},edge:"start",sx:{marginRight:5,..._&&{display:"none"}},children:a.jsx(I,{sx:{color:i.palette.text.secondary}})}),a.jsxs(n,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"transparent"},children:[a.jsxs(A,{className:f.logo_pack,children:[a.jsx("img",{src:"light"===u.theme?O:pe,alt:"logo",loading:"lazy"}),a.jsxs(n,{className:f.text_wrap,children:[a.jsx(h,{className:f.primary_text,children:"Real"}),a.jsx(h,{className:f.secondary_text,children:"Estate"})]})]}),a.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(k,{color:"inherit",onClick:()=>{p({...u,theme:"light"===u.theme?"dark":"light"}),g("light"===u.theme)},children:x?a.jsx(he,{sx:{color:i.palette.text.secondary}}):a.jsx(je,{sx:{color:i.palette.text.secondary}})}),a.jsx(kt,{language:P,onLanguageChange:W,sx:{display:{md:"inline-flex",xs:"none"}}})]})]})]})}),a.jsxs(Et,{variant:"permanent",open:_,children:[a.jsx(Lt,{children:a.jsx(k,{onClick:()=>{T(!1)},children:"rtl"===i.direction?a.jsx(q,{sx:{color:i.palette.text.secondary}}):a.jsx(R,{sx:{color:i.palette.text.secondary}})})}),a.jsx(C,{}),a.jsx(z,{children:[{text:S("sidebarBr1Title1"),url:"/"},{text:S("sidebarBr1Title2"),url:"/freeTrialUsers"},{text:S("sidebarBr1Title3"),url:"/purchasedUsers"},{text:S("sidebarBr1Title4"),url:"/wantToTrySoonUsers"}].map(((e,r)=>a.jsx(M,{title:e.text,placement:"right",arrow:!0,sx:{fontSize:"20px"},children:a.jsx(L,{to:e.url,style:{textDecoration:"none"},children:a.jsx(s,{disablePadding:!0,sx:{display:"block",backgroundColor:t.pathname===e.url?i.palette.primary.main:"",color:t.pathname===e.url?"#fff":i.palette.text.primary},children:a.jsxs(l,{sx:{minHeight:48,justifyContent:_?"initial":"center",px:2.5},children:[a.jsx(c,{sx:{minWidth:0,mr:_?3:"auto",justifyContent:"center",color:t.pathname===e.url?"#fff":""},children:0===r?a.jsx(te,{}):1===r?a.jsx(H,{}):2===r?a.jsx($,{}):a.jsx(B,{})}),a.jsx(d,{primary:e.text,sx:{opacity:_?1:0}})]})},e.text)})})))}),a.jsx(C,{}),a.jsx(z,{children:[{text:S("sidebarBr2Title1"),url:"/subscribers"}].map((e=>a.jsx(M,{title:e.text,placement:"right",arrow:!0,sx:{fontSize:"20px"},children:a.jsx(L,{to:e.url,style:{textDecoration:"none"},children:a.jsx(s,{disablePadding:!0,sx:{display:"block",backgroundColor:t.pathname===e.url?i.palette.primary.main:"",color:t.pathname===e.url?"#fff":i.palette.text.primary},children:a.jsxs(l,{sx:{minHeight:48,justifyContent:_?"initial":"center",px:2.5},children:[a.jsx(c,{sx:{minWidth:0,mr:_?3:"auto",justifyContent:"center",color:t.pathname===e.url?"#fff":""},children:a.jsx(se,{})}),a.jsx(d,{primary:e.text,sx:{opacity:_?1:0}})]})},e.text)})})))}),a.jsx(C,{}),a.jsx(z,{sx:{display:"none",[i.breakpoints.down("md")]:{display:"block"}},children:a.jsx(kt,{language:P,onLanguageChange:W,sidebarOpen:_,positionSidebar:!0,sx:{width:"100%"}})})]}),a.jsxs(n,{component:"main",sx:{flexGrow:1,p:3,overflow:"hidden"},children:[a.jsx(Lt,{}),e]})]})}));var t={},D=T;Object.defineProperty(t,"__esModule",{value:!0});var R=t.default=void 0,U=D(_()),G=a,V=(0,U.default)((0,G.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");R=t.default=V;var K={},X=T;Object.defineProperty(K,"__esModule",{value:!0});var q=K.default=void 0,Q=X(_()),Y=a,J=(0,Q.default)((0,Y.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");q=K.default=J;var Z={},ee=T;Object.defineProperty(Z,"__esModule",{value:!0});var te=Z.default=void 0,ae=ee(_()),re=a,ie=(0,ae.default)((0,re.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox");te=Z.default=ie;var oe={},ne=T;Object.defineProperty(oe,"__esModule",{value:!0});var se=oe.default=void 0,le=ne(_()),ce=a,de=(0,le.default)((0,ce.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");se=oe.default=de;const pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA1CAYAAAADOrgJAAAAAXNSR0IArs4c6QAAAZBJREFUaEPtmuEOwyAIhOf7P7SLS20MEzgo2qZhv53l4w6hpuUT+Ku11lJKCdwS3irkoQ2APnE30CWQGcBdQG4QBKJD7VAnDKQFq8GtBAoB6QGOIBLYCqClIM1anErRMMtBep2sBtoGIgFFqLMdZAaUIEPTSkW0o1azC/0/PFQxC0MUme2dIE5pXIpoo0iL5dGKaE3N4nvLWkQkSBENwNMbbgGhMxNnG0twlrVhiowgkvctwVnWJsgsAz2Dr1FEOlotdrGsXWKtV4P0+yxLli1rlypCewt9R6e1RGvsESDckCgFJ4012jgTpgg6W3lBkNlMg2FHFCT4cXPUWlpAXqg/EA1gtAH3cjWzilQjEhxqOxhECq5nUWqaWrGjgykHLYJo2YhShFPZYrPHgaCTNlUmQWaZu1IjY4Y9zTJMEXoUU+m1Yk+QIwOpCK2RtNbkDiyL3XtiWMaKPLXALyny1MpT67AK+japTeC9vtNaaa20lnxtIX7RoxWapyFyd2LepnwW+5WLsx0gyPXR793+LSBfMiggW8KGKbkAAAAASUVORK5CYII=";var ue={},xe=T;Object.defineProperty(ue,"__esModule",{value:!0});var he=ue.default=void 0,ge=xe(_()),me=a,fe=(0,ge.default)((0,me.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode");he=ue.default=fe;var ye={},be=T;Object.defineProperty(ye,"__esModule",{value:!0});var je=ye.default=void 0,ve=be(_()),we=a,ke=(0,ve.default)((0,we.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode");je=ye.default=ke;let Ae,Ce,ze,Me={data:""},Le=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Me,Se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ee=/\/\*[^]*?\*\/|  +/g,Pe=/\n+/g,Ie=(e,t)=>{let a="",r="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+n+";":r+="f"==o[1]?Ie(n,o):o+"{"+Ie(n,"k"==o[1]?"":t)+"}":"object"==typeof n?r+=Ie(n,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Ie.p?Ie.p(o,n):o+":"+n+";")}return a+(t&&i?t+"{"+i+"}":i)+r},Oe={},_e=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+_e(e[a]);return t}return e},Te=(e,t,a,r,i)=>{let o=_e(e),n=Oe[o]||(Oe[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!Oe[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=Se.exec(e.replace(Ee,""));)t[4]?r.shift():t[3]?(a=t[3].replace(Pe," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(Pe," ").trim();return r[0]})(e);Oe[n]=Ie(i?{["@keyframes "+n]:t}:t,a?"":"."+n)}let s=a&&Oe.g?Oe.g:null;return a&&(Oe.g=Oe[n]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(Oe[n],t,r,s),n},We=(e,t,a)=>e.reduce(((e,r,i)=>{let o=t[i];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":Ie(e,""):!1===e?"":e}return e+r+(null==o?"":o)}),"");function Fe(e){let t=this||{},a=e.call?e(t.p):e;return Te(a.unshift?a.raw?We(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,Le(t.target),t.g,t.o,t.k)}Fe.bind({g:1});let Ne=Fe.bind({k:1});function He(e,t){let a=this||{};return function(){let r=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;a.p=Object.assign({theme:Ce&&Ce()},s),a.o=/ *go\d+/.test(l),s.className=Fe.apply(a,r)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),ze&&c[0]&&ze(s),Ae(c,s)}return t?t(i):i}}var $e=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,Be=(()=>{let e=0;return()=>(++e).toString()})(),De=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Re=new Map,Ue=e=>{if(Re.has(e))return;let t=setTimeout((()=>{Re.delete(e),Xe({type:4,toastId:e})}),1e3);Re.set(e,t)},Ge=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=Re.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?Ge(e,{type:1,toast:a}):Ge(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?Ue(r):e.toasts.forEach((e=>{Ue(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},Ve=[],Ke={toasts:[],pausedAt:void 0},Xe=e=>{Ke=Ge(Ke,e),Ve.forEach((e=>{e(Ke)}))},qe=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||Be()}))(t,e,a);return Xe({type:2,toast:r}),r.id},Qe=(e,t)=>qe("blank")(e,t);Qe.error=qe("error"),Qe.success=qe("success"),Qe.loading=qe("loading"),Qe.custom=qe("custom"),Qe.dismiss=e=>{Xe({type:3,toastId:e})},Qe.remove=e=>Xe({type:4,toastId:e}),Qe.promise=(e,t,a)=>{let r=Qe.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(Qe.success($e(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{Qe.error($e(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var Ye=Ne`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Je=Ne`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ze=Ne`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,et=He("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Je} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ze} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,tt=Ne`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,at=He("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${tt} 1s linear infinite;
`,rt=Ne`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,it=Ne`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ot=He("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${it} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,nt=He("div")`
  position: absolute;
`,st=He("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,lt=Ne`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ct=He("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,dt=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return void 0!==t?"string"==typeof t?r.createElement(ct,null,t):t:"blank"===a?null:r.createElement(st,null,r.createElement(at,{...i}),"loading"!==a&&r.createElement(nt,null,"error"===a?r.createElement(et,{...i}):r.createElement(ot,{...i})))},pt=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,ut=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,xt=He("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ht=He("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;r.memo((({toast:e,position:t,style:a,children:i})=>{let o=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,i]=De()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pt(a),ut(a)];return{animation:t?`${Ne(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ne(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(dt,{toast:e}),s=r.createElement(ht,{...e.ariaProps},$e(e.message,e));return r.createElement(xt,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof i?i({icon:n,message:s}):r.createElement(r.Fragment,null,n,s))})),function(e,t,a,r){Ie.p=t,Ae=e,Ce=a,ze=r}(r.createElement),Fe`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var gt=Qe,mt={},ft=T;Object.defineProperty(mt,"__esModule",{value:!0});var yt=mt.default=void 0,bt=ft(_()),jt=a,vt=(0,bt.default)((0,jt.jsx)("path",{d:"m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"}),"Translate");yt=mt.default=vt;const wt={en:{icon:S,label:"English"},uz:{icon:E,label:"O'zbekcha"},ru:{icon:P,label:"Русский"},"uz-Cyrl-UZ":{icon:E,label:"Ўзбекча"}},kt=e=>{const t=o(),{language:i,onLanguageChange:g,positionSidebar:m,sidebarOpen:f,...y}=e,b=r.useRef(null),j=r.useRef(null),[v,w]=r.useState(!1),k=()=>{w(!0)},A=wt[i];return a.jsxs(a.Fragment,{children:[m?a.jsx(n,{ref:j,children:a.jsx(s,{disablePadding:!0,sx:{display:"block",backgroundColor:t.palette.primary.main,color:"#fff"},onClick:k,children:a.jsxs(l,{sx:{minHeight:48,justifyContent:f?"initial":"center",px:2.5},children:[a.jsx(c,{sx:{minWidth:0,mr:f?3:"auto",justifyContent:"center",color:"#fff"},children:a.jsx(yt,{})}),a.jsx(d,{primary:A?.label,sx:{opacity:f?1:0}})]})},A?.label)}):a.jsxs(p,{variant:"contained",onClick:k,ref:b,...y,children:[a.jsx(yt,{})," ",A?.label]}),a.jsx(u,{anchorEl:m?j.current:b.current,anchorOrigin:m?{horizontal:"left",vertical:"bottom"}:{horizontal:"center",vertical:"bottom"},keepMounted:!0,onClose:()=>{w(!1)},open:v,PaperProps:{sx:{width:240}},children:Object.keys(wt).map((e=>{const t=e;return a.jsxs(x,{onClick:()=>(g(t),void w(!1)),children:[a.jsx(c,{children:a.jsx(n,{sx:{display:"flex",height:20,width:"auto",objectFit:"cover",objectPosition:"top-left","& img":{width:"100%",objectFit:"cover",objectPosition:"top-left"}},children:a.jsx("img",{alt:wt[t].label,src:wt[t].icon,loading:"lazy"})})}),a.jsx(d,{primary:a.jsx(h,{color:"textPrimary",variant:"subtitle2",children:wt[t].label})})]},t)}))})]})};kt.propTypes={language:i.string.isRequired,onLanguageChange:i.func.isRequired};const At=250,Ct=W()((e=>({logo_pack:{display:"flex",gap:"5px",backgroundColor:"transparent",boxShadow:"none",border:"none"},text_wrap:{display:"flex",flexDirection:"column",alignSelf:"center"},primary_text:{color:e.palette.primary.main,fontSize:"18px",fontWeight:"bold",lineHeight:"1.2rem"},secondary_text:{color:e.palette.text.primary,fontSize:"18px",fontWeight:"bold",lineHeight:"1.2rem"},toolbar_light:{backgroundColor:e.palette.background.default}}))),zt=e=>({width:At,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),Mt=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${e.spacing(7)} + 1px)`,[e.breakpoints.up("sm")]:{width:`calc(${e.spacing(8)} + 1px)`}}),Lt=g("div")((({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1),...e.mixins.toolbar}))),St=g(m,{shouldForwardProp:e=>"open"!==e})((({theme:e,open:t})=>({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),...t&&{marginLeft:At,width:"calc(100% - 250px)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}}))),Et=g(f,{shouldForwardProp:e=>"open"!==e})((({theme:e,open:t})=>({width:At,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...t&&{...zt(e),"& .MuiDrawer-paper":zt(e)},...!t&&{...Mt(e),"& .MuiDrawer-paper":Mt(e)}})))}}}));
