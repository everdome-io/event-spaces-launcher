import{a as v}from"./chunk-4VBWXLGM.js";import{c as U}from"./chunk-JL7XP3PK.js";import{A as B,R as F,i as w,qa as $}from"./chunk-KRRNVCWZ.js";import{Ma as x,Rc as L,bl as M,e as T,ee as b,i as c,ik as E,ja as g,k as m,kd as _,ke as D,xb as k,yb as C,zb as N}from"./chunk-YC2Z7II3.js";c();m();var I=T(g());var R=()=>{let e=b(U);return(0,I.useMemo)(()=>e.map(o=>{let{coinAmountDec:t="0"}=o;return{...o,balance:t,balanceShow:F(t,{fixed:6})}}),[e])},q=()=>R().find(t=>t.coinId===_)||{},O=e=>{let o=R(),t=q(),s=(0,I.useMemo)(()=>o.find(r=>r.coinId===e),[o,e]);return(0,I.useMemo)(()=>({coin:s,suiBaseToken:t}),[s,t])};c();m();var V=()=>{let{accountMap:e={}}=v(),o=e[L];return o||null};c();m();c();m();var i=T(g());var po=()=>{let e=B(),o=e.get("coinId")&&Number(e.get("coinId"))||_,{coin:t={},suiBaseToken:s={}}=O(o),{symbol:a,imageUrl:r,decimalNum:u,coinAmountDec:d}=t,{coinAmountDec:f}=s;return{symbol:a,coinLogo:r,decimals:u,coinId:o||_,baseCoinSymbol:s.symbol,baseCoinDecimals:s.decimalNum,baseCoin:t.baseCoinId===t.coinId,balance:d,baseBalance:f}},So=({coinId:e,decimals:o})=>{let t=V(),[s,a]=(0,i.useState)(!0),[r,u]=(0,i.useState)(0),d=(0,i.useCallback)(async()=>{var p,y;try{let{data:l}=await M({coinId:e,address:t}),h=((y=(p=l==null?void 0:l.info)==null?void 0:p.data)==null?void 0:y.totalGasFee)||0;u(h)}catch(l){console.log(l)}finally{a(!1)}},[]);w(()=>{d()});let f=(0,i.useMemo)(()=>k(r,10**o),[o,r]);return[s,f]},_o=({decimals:e,baseCoin:o,balance:t,baseBalance:s,coinId:a,networkFee:r})=>{let u=x.useForm(),d=D(),f=$(),p=n=>n==0?f("wallet_transfer_amount_errortip_amount_zero"):s<r?f("wallet_transfer_errortip_mainchain_coin_insufficient",{chainSymbol:o==null?void 0:o.symbol}):o&&C(n,r)>t||!o&&n>t?f("wallet_transfer_errortip_insufficient_balance"):null,y=(0,i.useCallback)(async n=>{let S=p(n);u.setErrors({amount:S})},[r]),l=(0,i.useCallback)(async()=>{let n=0;o?n=N(t,r):n=t,u.setFieldsValue({amount:n});let S=p(n);u.setErrors({amount:S})},[t,o,r]),h=(0,i.useCallback)(()=>{let{amount:n,toAddress:S}=u.getFieldsValue();d.push(`${E}?coinId=${a}&amount=${n}&toAddress=${S}&networkFee=${r}`)},[a,d,r]);return[u,{onConfirm:h,onSendAmountChange:y,onSetSendAmountMax:l}]};export{R as a,q as b,O as c,V as d,po as e,So as f,_o as g};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

