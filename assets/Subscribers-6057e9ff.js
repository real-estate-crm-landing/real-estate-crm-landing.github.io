import{f as e,R as a,r as l,j as s,B as t,q as i,a3 as n,a4 as o,a5 as r,a6 as c,a7 as d,a8 as u,a9 as x,i as p,I as h,n as m,M as g,aa as b,ab as j,ac as f,ad as v,a0 as y,a1 as S,X as k,m as w,ae as C,af as P,ag as T}from"./vendor-b6c45d61.js";import{m as B,u as N}from"./createSvgIcon-87ce3a62.js";import{d as I,a as D,b as F,c as R,n as z,e as E,f as A,g as O,h as W}from"./no_data-8cc9084b.js";import{b as M,d as _,a as V}from"./MoreTime-e0eaca9f.js";import{b as Y,u as H,c as L,d as q,r as U,e as X,f as G,o as J}from"./firestore-9fc78cf3.js";import"./index-e617e89f.js";const K=B()((a=>({root:{background:a.palette.background.default},h2:{fontSize:"20px"},freeTrialChip:{marginRight:"5px",color:"#ffd900",border:"1px solid #ffd900",backgroundColor:e("#ffd900",.2)},purchasedChip:{marginRight:"5px",color:"#008000",border:"1px solid #008000",backgroundColor:e("#008000",.2)},noStatusChip:{marginRight:"5px",color:"#808080",border:"1px solid #808080",backgroundColor:e("#808080",.2)},wannaTryChip:{marginRight:"5px",color:"#FF0000",border:"1px solid #FF0000",backgroundColor:e("#FF0000",.2)},typography:{width:"auto",display:"flex",alignItems:"center",gap:"5px",fontSize:"16px"},reloader:{color:a.palette.primary.main,textDecoration:"underline",cursor:"pointer"},blocked_row:{backgroundColor:e("#FF0000",.2)},usual_row:{},popper:{position:"absolute",borderRadius:"8px",border:"1.5px solid ".concat(a.palette.primary.main),height:"150px",overflowY:"scroll",width:"250px",transform:"translateY(-10%)",zIndex:11111111,"&::-webkit-scrollbar":{width:"6px","border-radius":"15px"},"&::-webkit-scrollbar-track":{background:"rgb(231, 230, 230)","border-radius":"15px"},"&::-webkit-scrollbar-thumb":{background:"white","border-radius":"15px"},"&:hover":{"&::-webkit-scrollbar-thumb":{background:"rgb(147, 147, 147)"},"&::-webkit-scrollbar-track":{background:"#f1f1f1"}}},popperOpen:{visibility:"visible",position:"absolute",opacity:"1",transition:"400ms ease",transform:"translateY(0)"},popperClose:{position:"absolute",visibility:"hidden",opacity:"0",transition:"400ms ease",transform:"translateY(-10%)"},noDataImg:{width:"350px",height:"auto",aspectRatio:"1/1",margin:"auto"},noDataImgFull:{height:"100%",width:"auto",aspectRatio:"1/1",marginLeft:"50px"}})));function Q(e){const{onSelectAllClick:a,numSelected:l,rowCount:t,headCells:i}=e;return s.jsx(v,{children:s.jsxs(c,{children:[s.jsx(d,{padding:"checkbox",children:s.jsx(u,{color:"primary",indeterminate:l>0&&l<t,checked:t>0&&l===t,onChange:a,inputProps:{"aria-label":"select all desserts"}})}),null==i?void 0:i.map((e=>s.jsx(d,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",children:e.label},e.id)))]})})}function Z(n){var o,r,c,d;const{t:u}=N(),{classes:x}=K(),{numSelected:m,tableTitle:b,selectedTitle:j,deleteSelecteds:f,nameVal:v,phoneVal:B,searchByName:I,searchByPhone:D,searchByStatus:R,status:Y}=n,[H,L]=l.useState(""),[U,Q]=l.useState(""),[Z,$]=l.useState(null),[ee,ae]=l.useState(null),[le,se]=l.useState(void 0),[te,ie]=l.useState(void 0),[ne]=a.useState(null),[oe,re,ce,de,ue,xe]=u("callTableUserStatuses").split(";"),pe=Boolean(ee),he=Boolean(Z),me=Boolean(ne),ge=me?"simple-popover":void 0;function be(){const e=X(G,"contactsName");J(e,(e=>{const a=e.docs[0].data().values.split(";");se(a)}))}function je(){const e=X(G,"contactsPhone");J(e,(e=>{const a=e.docs[0].data().values.split(";");ie(a)}))}function fe(e,a){return null==e?void 0:e.filter((e=>e.includes(null!=a?a:"")&&e.length>0))}l.useEffect((()=>{0===(null==H?void 0:H.length)&&I(void 0)}),[H]),l.useEffect((()=>{0===(null==U?void 0:U.length)&&D(void 0)}),[U]),l.useEffect((()=>{L(v)}),[v]),l.useEffect((()=>{Q(B)}),[B]),l.useEffect((()=>(be(),je(),()=>{be(),je()})),[]);return s.jsxs(y,{sx:{width:"100%",pl:{sm:2},pr:{xs:1,sm:1},...m>0&&{bgcolor:a=>e(a.palette.primary.main,a.palette.action.activatedOpacity)}},children:[m>0?s.jsxs(p,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[m," ",j]}):s.jsx(p,{sx:{flex:"1 1 100%",fontSize:"20px"},variant:"h6",id:"tableTitle",component:"div",children:b}),m>0?s.jsx(S,{title:"Delete",children:s.jsx(h,{onClick:f,children:s.jsx(E,{})})}):me?s.jsx(S,{title:"Filter list",children:s.jsx(h,{"aria-describedby":ge,children:s.jsx(q,{})})}):null,s.jsx(k,{id:ge,open:me,anchorEl:ne,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:s.jsxs(i,{sx:{display:"flex",flexDirection:"column",gap:"20px",padding:"10px"},children:[s.jsx(p,{sx:{textAlign:"center"},children:u("filterName")}),s.jsxs(t,{sx:{position:"relative"},children:[s.jsx(w,{id:"searchByPhone",label:u("searchByPhone"),variant:"outlined",value:U,onChange:e=>Q(e.target.value),onClick:e=>{ae(e.currentTarget)},onBlur:()=>{ae(null)}}),s.jsx(i,{className:"".concat(x.popper," ").concat(pe?x.popperOpen:x.popperClose),children:(null==(o=fe(te,U))?void 0:o.length)>0?null==(r=fe(te,U))?void 0:r.map(((e,a)=>e.length>1?s.jsx(s.Fragment,{children:s.jsxs(g,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"100%",borderBottom:"1px solid grey"},onClick:()=>{D(e),Q(e)},children:[s.jsx(A,{fontSize:"medium"}),s.jsxs(t,{sx:{display:"flex",flexDirection:"column"},children:[s.jsx(p,{sx:{fontSize:"14px",fontWeight:"bold"},children:e}),s.jsx(p,{sx:{fontSize:"12px",color:"gray"},children:fe(le,H)&&fe(le,H)[a]})]})]},e)}):null)):s.jsx(s.Fragment,{children:s.jsx("img",{src:z,alt:"no-data-img",className:x.noDataImgFull,loading:"lazy"})})})]}),s.jsxs(t,{sx:{position:"relative"},children:[s.jsx(w,{id:"searchByName",label:u("searchByName"),variant:"outlined",value:H,onChange:e=>L(e.target.value),onClick:e=>{$(e.currentTarget)},onBlur:()=>{$(null)}}),s.jsx(i,{className:"".concat(x.popper," ").concat(he?x.popperOpen:x.popperClose),children:(null==(c=fe(le,H))?void 0:c.length)>0?null==(d=fe(le,H))?void 0:d.map(((e,a)=>e.length>1?s.jsx(s.Fragment,{children:s.jsxs(g,{sx:{display:"flex",alignItems:"center",gap:"10px",width:"100%",borderBottom:"1px solid grey"},onClick:()=>{I(e),L(e)},children:[s.jsx(A,{fontSize:"medium"}),s.jsxs(t,{sx:{display:"flex",flexDirection:"column"},children:[s.jsx(p,{sx:{fontSize:"14px",fontWeight:"bold"},children:e}),s.jsx(p,{sx:{fontSize:"12px",color:"gray"},children:fe(te,U)&&fe(te,U)[a]})]})]},e)}):null)):s.jsx(s.Fragment,{children:s.jsx("img",{src:z,alt:"no-data-img",className:x.noDataImgFull,loading:"lazy"})})})]}),s.jsx(t,{sx:{minWidth:120,minHeight:"150px"},children:s.jsxs(C,{fullWidth:!0,children:[s.jsx(P,{id:"demo-simple-select-label",children:"Status:"}),s.jsxs(T,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Y,onChange:e=>{R(e.target.value)},children:[s.jsxs(g,{value:"all",children:[s.jsx(O,{sx:{marginRight:"5px"}}),xe]},0),s.jsxs(g,{value:"wantToContact",children:[s.jsx(W,{sx:{marginRight:"5px"}}),ue]},1),s.jsxs(g,{value:"isOnTrial",children:[s.jsx(_,{sx:{marginRight:"5px"}}),oe]},2),s.jsxs(g,{value:"isPurchased",children:[s.jsx(V,{sx:{marginRight:"5px"}}),re]},3),s.jsxs(g,{value:"isWannaTry",children:[s.jsx(M,{sx:{marginRight:"5px"}}),ce]},4),s.jsxs(g,{value:"noStatus",children:[s.jsx(F,{sx:{marginRight:"5px"}}),de]},5)]})]})})]})})]})}function $(){var e;const{classes:v}=K(),{t:y}=N(),[S,k]=a.useState([]),[w,C]=l.useState(void 0),[P,T]=l.useState({phoneNumber:void 0,name:void 0,status:void 0}),[B,E]=l.useState(""),[A,O]=l.useState(!0),[W,_]=a.useState(0),[V,q]=a.useState(!1),[X,G]=a.useState(void 0),[J,$]=l.useState(),[ee,ae]=l.useState(null);l.useEffect((()=>{const e=localStorage.getItem("rowsPerpageCalls");e?G(+e):(localStorage.setItem("rowsPerpageCalls","10"),G(10))}),[]),l.useEffect((()=>{(async()=>{const e=await U(X,w,J||void 0,P.phoneNumber,P.name,P.status);ae((()=>({...e,data:e.data,rawData:e.rawData})))})()}),[W,X,w,A,P]);const le=null==(e=null==ee?void 0:ee.data)?void 0:e.map((e=>{return a=e.id,l=e.isActive,s=e.isBlocked,t=e.name,i=e.email,n=e.time,{id:a,name:t,email:i,time:n,status:{isActive:l,isBlocked:s}};var a,l,s,t,i,n})),se=[{id:"name",numeric:!1,disablePadding:!0,label:y("callTableName")},{id:"email",numeric:!0,disablePadding:!1,label:y("callTableEmail")},{id:"time",numeric:!0,disablePadding:!1,label:y("callTableTime")},{id:"status",numeric:!0,disablePadding:!1,label:y("callTableEmailStatus")}],[te,ie]=a.useState(null),ne=Boolean(te),oe=e=>{e.stopPropagation(),ie(null),O((e=>!e))};return s.jsx(s.Fragment,{children:s.jsxs(t,{sx:{width:"100%"},children:[s.jsxs(i,{sx:{width:"100%",mb:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(Z,{numSelected:null==S?void 0:S.length,selectedTitle:y("selectTitle"),tableTitle:y("emailsTableTitle"),deleteSelecteds:()=>{Y("users",S),O((e=>!e))},status:P.status,nameVal:P.name,phoneVal:P.phoneNumber,searchByName:e=>{T((a=>({...a,name:e})))},searchByPhone:e=>{T((a=>({...a,phoneNumber:e})))},searchByStatus:e=>{T((a=>({...a,status:e})))}}),(null==le?void 0:le.length)>0?s.jsxs(s.Fragment,{children:[s.jsx(n,{children:s.jsxs(o,{sx:{minWidth:700},"aria-labelledby":"tableTitle",size:V?"small":"medium",children:[s.jsx(Q,{numSelected:null==S?void 0:S.length,onSelectAllClick:e=>{if(e.target.checked){const e=null==le?void 0:le.map((e=>e.id));k(e)}else k([])},rowCount:null==le?void 0:le.length,headCells:se}),s.jsx(r,{children:null==le?void 0:le.map(((e,a)=>{const l=(t=e.id,-1!==S.indexOf(t));var t;const i="enhanced-table-checkbox-".concat(a);return s.jsxs(c,{hover:!0,onClick:a=>((e,a)=>{const l=S.indexOf(a);let s=[];-1===l?s=s.concat(S,a):0===l?s=s.concat(S.slice(1)):l===(null==S?void 0:S.length)-1?s=s.concat(S.slice(0,-1)):l>0&&(s=s.concat(S.slice(0,l),S.slice(l+1))),k(s)})(0,e.id),role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,sx:{cursor:"pointer"},className:(null==e?void 0:e.status.isBlocked)?v.blocked_row:v.usual_row,children:[s.jsx(d,{padding:"checkbox",children:s.jsx(u,{color:"primary",checked:l,inputProps:{"aria-labelledby":i}})}),s.jsx(d,{component:"th",id:i,scope:"row",padding:"none",children:e.name}),s.jsx(d,{align:"right",children:s.jsx("a",{href:"mailto:".concat(e.email),onClick:a=>{a.stopPropagation(),H(e.id),O((e=>!e))},children:e.email})}),s.jsxs(d,{align:"right",children:[I(new Date(e.time),"HH:MM:ss")," ",s.jsx("br",{}),I(new Date(e.time),"mm/dd/yyyy")]}),s.jsxs(d,{align:"right",children:[e.status.isActive?s.jsx(x,{className:v.purchasedChip,label:s.jsxs(p,{className:v.typography,children:[s.jsx(D,{}),y("subscriberStatusActive")]})}):e.status.isBlocked?s.jsx(x,{className:v.wannaTryChip,label:s.jsxs(p,{className:v.typography,children:[s.jsx(M,{}),y("subscriberStatusBlocked")]})}):s.jsx(x,{className:v.noStatusChip,label:s.jsxs(p,{className:v.typography,children:[s.jsx(F,{}),"No Status"]})}),s.jsx(h,{"aria-label":"more",id:"long-button","aria-controls":ne?"long-menu":void 0,"aria-expanded":ne?"true":void 0,"aria-haspopup":"true",onClick:a=>((e,a)=>{e.stopPropagation(),E(a),ie(e.currentTarget)})(a,e.id),children:s.jsx(R,{})}),s.jsxs(m,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:te,open:ne,onClose:oe,PaperProps:{style:{width:"20ch"}},children:[s.jsxs(g,{onClick:e=>{oe(e),L(B,"isBlocked")},children:[s.jsx(M,{sx:{marginRight:"5px"}}),y("subscriberStatusBlocked")]},3),s.jsxs(g,{onClick:e=>{oe(e),L(B,"isActive")},children:[s.jsx(D,{}),y("subscriberStatusActive")]},4)]})]})]},e.id)}))})]})}),s.jsx(b,{rowsPerPageOptions:[5,10,25,50],component:"div",sx:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"flex-end",".css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar":{display:"flex",justifyContent:"flex-end",flexWrap:"wrap"}},count:null==ee?void 0:ee.totalElements,rowsPerPage:null!=X?X:10,page:W,onPageChange:(e,a)=>{var l,s;C(0===a?void 0:a>W?"forward":"back"),$(0===a||null==(s=null==ee?void 0:ee.rawData)?void 0:s[(null==(l=null==ee?void 0:ee.rawData)?void 0:l.length)-1]),_(a)},onRowsPerPageChange:e=>{var a;localStorage.setItem("rowsPerpageCalls",null!=(a=e.target.value)?a:"10"),G(parseInt(e.target.value,10)),_(0)}})]}):s.jsx("img",{src:z,alt:"no-data-img",className:v.noDataImg,loading:"lazy"})]}),s.jsxs(t,{sx:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[s.jsx(j,{control:s.jsx(f,{checked:V,onChange:e=>{q(e.target.checked)}}),label:"Dense padding"}),s.jsx("h4",{onClick:()=>O((e=>!e)),className:v.reloader,children:y("reloadTable")})]})]})})}export{$ as default};
