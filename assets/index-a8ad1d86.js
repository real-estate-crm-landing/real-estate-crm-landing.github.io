function e(){import.meta.url,import("_").catch((()=>1))}import{u as t,j as n,B as r,d as i,c as s,r as o,S as a,P as l,a as c,R as d,b as u}from"./vendor-5c9c311d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={},p=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in m)return;m[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const i=r[n];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector('link[href="'.concat(e,'"]').concat(i)))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error("Unable to preload CSS for ".concat(e)))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},h=()=>{const e=t();return n.jsx(r,{sx:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(i,{type:"bubble-ping",bgColor:e.palette.primary.main,color:e.palette.primary.main,size:150})})},f=s(),g=o.lazy((()=>p((()=>import("./AdminPage-27d358a3.js")),["assets/AdminPage-27d358a3.js","assets/vendor-5c9c311d.js","assets/vendor-cc15680c.css","assets/index-a2625635.js"]))),y=o.lazy((()=>p((()=>import("./MainPage-6831e863.js")),["assets/MainPage-6831e863.js","assets/vendor-5c9c311d.js","assets/vendor-cc15680c.css","assets/england-1704218e.js","assets/makeStyle-e8e367fa.js","assets/index-a2625635.js","assets/firestore-9044e9fa.js","assets/MainPage-37c44bdf.css"]))),j=[{path:"/",redirect:"/main"},{path:"/main",element:()=>n.jsx(o.Suspense,{fallback:n.jsx(h,{}),children:n.jsx(y,{})})},{path:"/admin",element:()=>n.jsx(o.Suspense,{fallback:n.jsx(h,{}),children:n.jsx(g,{})})}];window.openAdminPanel=()=>f.push("/admin"),document.openAdminPanel=()=>f.push("/admin");function x(){return n.jsxs(n.Fragment,{children:[n.jsx(a,{history:f,items:j,Loader:h}),n.jsx("button",{style:{display:"none"},id:"btn",onClick:()=>{window.openAdminPanel()},children:"Display"})]})}const S={direction:"ltr",language:"ru",pinSidebar:!0,theme:"light"},b=o.createContext({settings:S,saveSettings:()=>{}}),w=e=>{const{children:t}=e,[r,i]=o.useState(S);o.useEffect((()=>{const e=(()=>{let e=null;try{const t=window.localStorage.getItem("settings");e=t?JSON.parse(t):{direction:"ltr",language:"ru",pinSidebar:!0,theme:"light"}}catch(t){console.error(t)}return e})();e&&i(e)}),[]);return n.jsx(b.Provider,{value:{settings:r,saveSettings:e=>{i(e),(e=>{window.localStorage.setItem("settings",JSON.stringify(e))})(e)}},children:t})};w.propTypes={children:l.node.isRequired},b.Consumer;const v=()=>o.useContext(b);c.createRoot(document.getElementById("root")).render(n.jsx(d.StrictMode,{children:n.jsx(u,{children:n.jsx(w,{children:n.jsx(x,{})})})}));export{h as L,p as _,e as __vite_legacy_guard,v as u};