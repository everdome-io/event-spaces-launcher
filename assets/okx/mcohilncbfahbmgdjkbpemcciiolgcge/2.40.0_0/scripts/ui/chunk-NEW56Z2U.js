import{$ as L,Jc as h,Pa as i,Rf as E,_a as n,dh as m,e as k,fl as A,i as o,k as e,rh as y}from"./chunk-YC2Z7II3.js";o();e();var O="create wallet to server failed",N="the wallet quantity has reached the maximum";o();e();var U="IncorrectPassword",W="UnlockFAILED";o();e();o();e();var R="exceed_200_limit";o();e();var x=k(L());async function tt(r,t){try{await n().updateToastHashMap(r,t)}catch(a){x.default.debug("background.updateToastHashMap.error",a)}}async function rt(){try{return await n().removeToastHashMap()}catch(r){x.default.debug("background.removeToastHashMap.error",r)}}o();e();function it(r){return async()=>{try{return await n().sendUIEthereumTransaction(r)}catch(t){return i.error({title:t==null?void 0:t.message}),t}}}o();e();function B(r,t,a){return n().signTransaction(r,t,a)}function w(r,t){return async()=>B(r,t,h)}o();e();async function Et(r){try{return await n().addAddressBook(r)}catch(t){throw(t==null?void 0:t.message)!==R&&i.error({title:t==null?void 0:t.message}),t}}async function yt(r,t){try{return await n().updateAddressBook(r,t)}catch(a){return i.error({title:a==null?void 0:a.message}),a}}async function At(r){try{return await n().removeAddressBook(r)}catch(t){throw i.error({title:t==null?void 0:t.message}),t}}async function Rt(r,t){try{return await n().addRecentlyAddress(r,t)}catch(a){return i.error({title:a==null?void 0:a.message}),a}}o();e();var S=r=>async(t,a)=>{let u=a(),d=y(u),c=await n().getSignRequestHeaders({walletId:d}),p={txSource:m.NORMAL,...r};return await A(p,{headers:c})};async function Lt(r){return await n().updateServerPushTx(r)}async function Bt(r){return await n().updateServerPushConfirmTx(r)}o();e();var Ut=({type:r,from:t,to:a,coinId:u,blockHash:d,coinAmount:c,mint:p=null,createAssociatedAddress:l,serviceCharge:I,txSource:P=m.NORMAL,extJson:M=JSON.stringify({})})=>async T=>{let g={type:r,payer:t,blockHash:d,from:t,to:a,amount:c},f={};r===E.TRANSFER?f={...g}:f={...g,mint:p,createAssociatedAddress:l};let _={signedTx:await T(w(f,t)),coinAmount:c,coinId:u,fromAdr:t,toAdr:a,serviceCharge:I,txSource:P,extJson:M};return await T(S(_))};o();e();o();e();export{it as a,B as b,O as c,N as d,R as e,U as f,W as g,Et as h,yt as i,At as j,Rt as k,Lt as l,Bt as m,Ut as n,tt as o,rt as p};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
