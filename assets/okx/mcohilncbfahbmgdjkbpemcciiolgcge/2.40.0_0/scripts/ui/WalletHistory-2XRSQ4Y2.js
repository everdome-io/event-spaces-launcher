import{a as tt,c as et,d as ot}from"./chunk-INZTVOJF.js";import{a as st}from"./chunk-SDGHKHQ6.js";import{d as g}from"./chunk-SRF3OTW4.js";import"./chunk-4J3KLI53.js";import"./chunk-MO6HYXXQ.js";import{b as J,c as h,d as I,e as Q,f as V,h as X,j as k,k as G,l as Y,m as Z,o as E,p as D,q as O,r as $,s as w}from"./chunk-TNEPVJCF.js";import"./chunk-GCK4PCMX.js";import{a as U}from"./chunk-EQU2E42M.js";import"./chunk-4SCEKLXQ.js";import"./chunk-RYMLTDAH.js";import"./chunk-VNM7HA44.js";import{P as b}from"./chunk-SBW523XW.js";import"./chunk-NEW56Z2U.js";import{g as z}from"./chunk-HX34N4W4.js";import"./chunk-F7QJ6WQ5.js";import"./chunk-TNVBYBO5.js";import{B as W,o as q,oa as K,qa as j}from"./chunk-KRRNVCWZ.js";import{Af as v,Gf as e,Lf as M,de as l,e as N,ee as i,i as n,ja as T,k as a,ke as _,ul as A}from"./chunk-YC2Z7II3.js";n();a();var s=N(T());n();a();var P=N(T());var at=()=>{let r=l();return(0,P.useEffect)(()=>()=>{r(b()),r(Y()),r(D())},[]),null},rt=(0,P.memo)(at);n();a();var o=N(T());function lt(r,m){let t=l(),c=i(V),f=i(h),u=i(X);(0,o.useEffect)(()=>{c&&(f.status===M.PENDING?!c.oldTxHash||c.txStatus!==e.PENDING||u?t(E(!0)):t($())&&t(E(!0)):c.txStatus!==e.PENDING&&t(E(!0)))},[c]),ot({scrollContainer:r},m)}var mt=()=>{let r=l(),[m,t]=(0,o.useState)(),c=i(h),f=i(J),u=i(v),y=i(Q),L=i(I),[S,H]=(0,o.useState)(null),{run:p}=q(()=>{r(O({...L,status:[e.PENDING,e.CONFIRMING,e.ERROR,e.SUCCESS]},{autoRefresh:!0}))},{wait:200}),C=(0,o.useCallback)(()=>{r(O({...L,status:[e.PENDING,e.CONFIRMING,e.ERROR,e.SUCCESS]},{scrollLoad:!0}))},[c]);lt(S,p),W(S,C,10);let[x,R]=(0,o.useMemo)(()=>K(f,u),[f,u]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(et.HistoryList,{completedList:R,pendingList:x,isLoading:y,onClick:t,onRepeat:p,onContainer:H}),o.default.createElement(tt,{params:m,onRefresh:p,onClose:()=>{t(null)}}))},it=(0,o.memo)(mt);n();a();var d=N(T());function ct(){let r=l(),m=i(h);return d.default.createElement(st,{value:m.mainCoinId,onChange:t=>{r(w({mainCoinId:t}))}})}function ft(){let r=l(),m=i(h);return d.default.createElement(g.DateRangeSelection,{dates:m.dates,onChange:t=>{r(w({dates:t}))}})}function ut(){return d.default.createElement("div",{className:"tx-detail-selection"},d.default.createElement(ct,null),d.default.createElement(ft,null))}var nt=ut;n();a();var pt=()=>{let r=j(),m=_(),t=l(),c=i(I),[f,u]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let L=[(()=>A({...c,status:[e.PENDING,e.CONFIRMING,e.ERROR,e.SUCCESS]}))()];Promise.all(L).then(([S])=>{let H=C=>{var B;let x=C.length,R=x&&x%20===0?(B=C[x-1])==null?void 0:B.rowId:"";t(Z(R)),t(G(!1))},p=S.content||[];t(k(p)),H(p)}).catch(()=>{t(k([])),t(G(!1))}).finally(()=>{u(!1)})},[]),s.default.createElement(g.PageContainer,{className:"tx-history__container"},s.default.createElement(z,{sticky:!1,className:"tx-history__navigator",title:r("wallet_extension_header_text_history"),onBack:()=>{m.goBack(),t(D())},closeable:!1}),f?s.default.createElement(U,null):s.default.createElement(s.default.Fragment,null,s.default.createElement(g.FilterContainer,null,s.default.createElement(nt,null)),s.default.createElement(it,null)),s.default.createElement(rt,null))},oe=(0,s.memo)(pt);export{oe as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
