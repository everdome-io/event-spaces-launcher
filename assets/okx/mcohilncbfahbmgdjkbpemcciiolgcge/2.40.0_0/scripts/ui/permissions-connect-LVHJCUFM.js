import{a as ze}from"./chunk-FMH5IOJD.js";import"./chunk-EA42FJLL.js";import"./chunk-WF3X5RMC.js";import"./chunk-4PTE5JIT.js";import{a as Ue,b as Be,c as Me}from"./chunk-TL6DTDXH.js";import{a as ee}from"./chunk-XKAB6HLO.js";import{a as je}from"./chunk-6TY3WXUG.js";import"./chunk-BZBZNG4R.js";import{a as De}from"./chunk-MXVCAI6G.js";import{b as re}from"./chunk-4SCEKLXQ.js";import"./chunk-RYMLTDAH.js";import"./chunk-VNM7HA44.js";import{Ba as Oe,I as ke,Ka as $e,Wa as Le,Xa as Re,i as xe,p as ie}from"./chunk-SBW523XW.js";import"./chunk-NEW56Z2U.js";import{g as U}from"./chunk-HX34N4W4.js";import"./chunk-F7QJ6WQ5.js";import{a as et}from"./chunk-TNVBYBO5.js";import{$a as D,Wa as Z,Ya as R,db as b,f as ve,qa as I}from"./chunk-KRRNVCWZ.js";import{Bd as pe,Bi as Pe,Ci as G,Eh as Ce,Ek as be,Fk as Ae,Gi as Se,Hc as _e,Hd as de,Qh as ye,ce as he,ch as Te,de as $,e as q,ee as g,ei as Ie,g as X,he as oe,i as c,ie as Ne,ja as O,k as a,ke as L,oa as F,pa as se,qg as we,qi as ne,tg as qe,wa as y,xk as We,zi as x,zk as Ee}from"./chunk-YC2Z7II3.js";c();a();c();a();var te=q(F());c();a();var f=q(F()),E=q(O());c();a();var P=q(O());c();a();var B=q(O()),Ye=q(et()),Ke=q(F());c();a();var tt=(e,o)=>{if(!e||!e.length||!o)return{};let t;return{...e.find(m=>(t=m.walletIdentities.find(n=>n.walletId===o),t)),walletIdentities:[t]}},st=(e,o)=>{var s,m,n,l;if(!e||o>((s=e.walletIdentities)==null?void 0:s.length)-1)return"";let t=(l=(n=(m=e.walletIdentities)==null?void 0:m[o])==null?void 0:n.account)==null?void 0:l[_e];return{name:`${e.keyringName} - ${e.walletIdentities[o].walletName}`,address:t}},He=(e,o)=>st(tt(e,o),0),z="account-selector",Fe=e=>{let o=I(),t=L(),{permissionsRequestId:s}=e,m=()=>{t.push({pathname:`${x}/${s}${G}`})},n=g(R),{keyringIdentities:l,selectedWallet:r}=g(D),p=d=>{let{name:w,address:C}=d;return B.default.createElement("div",{className:`${z}__info-single`},B.default.createElement(re,{className:`${z}__info-single-name`,text:w}),B.default.createElement(re,{className:`${z}__info-single-address`,text:qe(C)}))},i=()=>{if(n.length){if(n.length===1){let d=He(l,n[0]);return p(d)}}else{let d=He(l,r);return p(d)}return o("wallet_extension_mid_text_accounts",{num:n.length})};return B.default.createElement("div",{className:(0,Ye.default)(z),onClick:m},B.default.createElement(re,{className:`${z}__title`,maxWidth:"170px",text:o("wallet_dapp_conncetion_requesr_subtitle_current_account")}),B.default.createElement("div",{className:`${z}__info`},i(),B.default.createElement("img",{alt:"",src:"/static/images/dapp-arrow-right.svg",className:`${z}__info-arrow`})))};Fe.propTypes={permissionsRequestId:Ke.default.string.isRequired};var Ge=Fe;c();a();var ce="choose-account",ot=e=>{let{approvePermissionsRequest:o,cancelPermissionsRequest:t,targetDomainMetadata:s,permissionsRequestId:m}=e,n=I(),l=$(),r=g(Z),{selectedWallet:p}=g(D),i=g(R);(0,P.useEffect)(()=>{i.length||l(b.setSelectAccounts([p]))},[i]);let d=()=>t(m),w=()=>{let{request:C}=e,v={...C,permissions:{...C.permissions}};Object.keys(v.permissions).length>0?(o(v,i,r==null?void 0:r.type),i.length===1&&l(ie(i[0]))):t(v.metadata.id)};return P.default.createElement("div",{className:ce},P.default.createElement(U,{backable:!1,closeable:!1,className:`${ce}__header`,title:n("wallet_dapp_conncetion_maintitle_conncet_account")}),P.default.createElement("div",{className:`${ce}__main`},P.default.createElement(Ue,null,P.default.createElement(De,{dappInfo:{icon:s==null?void 0:s.icon,name:s==null?void 0:s.name,host:s==null?void 0:s.origin},desc:n("wallet_dapp_conncetion_notify_conncet_permission")})),P.default.createElement(Ge,{permissionsRequestId:m})),P.default.createElement("div",{className:`${ce}__footer`},P.default.createElement(y,{category:y.CATEGORY.outline,type:y.TYPE.secondary,size:y.SIZE.lg,block:!0,onClick:d},n("wallet_transfer_btn_cancel_transaction")),P.default.createElement(y,{block:!0,category:y.CATEGORY.fill,type:y.TYPE.highlight,size:y.SIZE.lg,disabled:i.size===0&&!(r!=null&&r.type),onClick:w},n("wallet_home_dapp_connection_btn_connect"))))},Ze=ot;c();a();c();a();var N=q(O());c();a();c();a();var S=q(F()),_=q(O());c();a();c();a();var ae=q(F()),H=q(O());c();a();function V(e){let{icon:o,iconName:t,siteOrigin:s}=e,m=I();function n(l=""){return l.split("://")[1]}return H.default.createElement("div",{className:"permissions-connect-header"},H.default.createElement("div",{className:"permissions-connect-header__icon"},H.default.createElement(ee,{icon:o,name:t,size:72,iconSize:72,borderStyle:{overflow:"hidden"}}),H.default.createElement("div",{className:"permissions-connect-header__iconName"},t&&t.split("-")[0]),H.default.createElement("div",{className:"permissions-connect-header__text"},n(s))),H.default.createElement("div",{className:"permissions-connect-header__tip"},m("wallet_dapp_conncetion_notify_conncet_permission")))}V.propTypes={icon:ae.default.string,iconName:ae.default.string.isRequired,siteOrigin:ae.default.string.isRequired};V.defaultProps={icon:null};var nt=(e,o)=>{if(!e||!e.length||!o)return{};let t;return{...e.find(m=>(t=m.walletIdentities.find(n=>n.walletId===o),t)),walletIdentities:[t]}},it=(e,o)=>!e||o>e.walletIdentities.length-1?"":`${e.keyringName} - ${e.walletIdentities[o].walletName}`,Ve=(e,o)=>it(nt(e,o),0),le=e=>e==null?void 0:e.map(o=>o.walletId);function me(e){let o=I(),t=L(),s=$(),{approvePermissionsRequest:m,cancelPermissionsRequest:n,targetDomainMetadata:l,permissionsRequestId:r}=e,p=g(Z),i=g(R),{keyringIdentities:d,selectedWallet:w}=g(D);(0,_.useEffect)(()=>{i.length||s(b.setSelectAccounts([w]))},[i]);function C(){if(i.length){if(i.length===1)return Ve(d,i[0])}else return Ve(d,w);return o("wallet_extension_mid_text_accounts",{num:i.length})}function v(){return _.default.createElement(_.default.Fragment,null,_.default.createElement("div",{className:"permissions-connect-choose-account__select-list"},_.default.createElement("div",{className:"permissions-connect-choose-account__select-item",onClick:()=>{t.push({pathname:`${x}/${r}${G}`})}},_.default.createElement("span",null,o("wallet_dapp_conncetion_requesr_subtitle_current_account")),_.default.createElement("span",null,C()),_.default.createElement("img",{src:"/static/images/nav-global/new-right-arrow.svg"}))))}function K(){let{request:M}=e,u={...M,permissions:{...M.permissions}};Object.keys(u.permissions).length>0?(m(u,i,p==null?void 0:p.type),i.length===1&&s(ie(i[0]))):n(u.metadata.id)}return _.default.createElement(_.default.Fragment,null,_.default.createElement(U,{title:o("wallet_dapp_conncetion_maintitle_conncet_account"),backable:!1,closeable:!1}),_.default.createElement(Be,{className:"permissions-connect-choose-account",header:_.default.createElement(V,{icon:l==null?void 0:l.icon,iconName:l==null?void 0:l.name,siteOrigin:l.origin}),content:_.default.createElement(_.default.Fragment,null,v()),footerWrapClass:"permissions-connect-choose-account__footer-container",footer:_.default.createElement(Me,{cancelText:o("wallet_transfer_btn_cancel_transaction"),confirmText:o("wallet_home_dapp_connection_btn_connect"),cancelProps:{onClick:()=>n(r)},confirmProps:{onClick:K,disabled:i.size===0&&!(p!=null&&p.type)}})}))}me.propTypes={origin:S.default.string,request:S.default.object,targetDomainMetadata:S.default.shape({extensionId:S.default.string,icon:S.default.string,host:S.default.string.isRequired,name:S.default.string.isRequired,origin:S.default.string.isRequired}),approvePermissionsRequest:S.default.func,cancelPermissionsRequest:S.default.func,permissionsRequestId:S.default.string.isRequired};me.defaultProps={origin:"",request:{},targetDomainMetadata:{},approvePermissionsRequest:()=>{},cancelPermissionsRequest:()=>{}};function Je(){let e=I(),o=L(),t=$(),s=g(je),{keyringIdentitiesBackup:m,backupWallets:n}=g(D),l=g(R),[r,p]=(0,N.useState)(l&&l.length>0?l:le(n));function i(){return m.reduce((u,A)=>(u+=A.walletIdentities.length,u),0)>1}function d(){return n.length===r.length}let w=()=>{d()?p([]):p(le(n))},C=u=>{let A=[...r],k=r.indexOf(u);k===-1?A.push(u):A.splice(k,1),p(A)},v=()=>{r.length&&(t(b.setSelectAccounts(r)),o.goBack())},K=u=>t(xe(u)),M=()=>N.default.createElement("div",{className:"wallet-management-page__list-wrapper"},m.map((u,A)=>N.default.createElement(ze,{key:A,walletName:u.keyringName,walletColor:u.keyringColor,needAddButton:u.keyringIdentityType===Te.MNEMONIC,handleClickAddAccount:K,selectedWallet:r,verifySeedWalletId:u.walletId,handlerSelectWallet:k=>C(k),data:u,dataList:u.walletIdentities||[],amountObj:s,showExplain:!0,showTotalExplain:!1,showUnselect:!0})));return N.default.createElement("div",{className:"permissions-connect-choose-wallet"},N.default.createElement(U,{closeable:!1,title:e("wallet_dapp_conncetion_subtitle_select_accounts"),className:"permissions-connect-choose-wallet__title"}),i()&&N.default.createElement("li",{className:"permissions-connect-choose-wallet__select-all"},N.default.createElement("span",null,e("wallet_dapp_conncetion_subtitle_select_all")),N.default.createElement("p",{onClick:w,className:"permissions-connect-choose-wallet__icon"},d()?N.default.createElement(se,{className:"okx-wallet-plugin-check"}):N.default.createElement("span",{className:"permissions-connect-choose-wallet__icon-unselect"}))),N.default.createElement("div",{className:"wallet-management__container scroller-container",id:"wallet-manage-list"},M()),N.default.createElement("div",{className:"permissions-connect-choose-wallet__confirm"},N.default.createElement(y,{block:!0,disabled:!r.length,category:y.CATEGORY.fill,type:y.TYPE.highlight,size:y.SIZE.lg,onClick:v},e("wallet_set_password_btn_confirm"))))}Je.propTypes={};var ue=(0,N.memo)(Je);c();a();c();a();var T=q(O());function rt(){let e=I(),o=$(),t=g(be),s=g(Ie),m=L(),n=g(Z),[l,r]=(0,T.useState)(n);(0,T.useEffect)(()=>{if(!Object.keys(n).length){let i=s.find(d=>d.providerType===t.type);r(i),o(b.setSelectNetwork(i))}},[]);let p=i=>{r(i),o(b.setSelectNetwork(i)),setTimeout(()=>{m.goBack()},300)};return T.default.createElement("div",null,T.default.createElement(U,{closeable:!1,title:e("wallet_transfer_multichain_coin_maintitle_select_network")}),T.default.createElement("div",{className:"network-list--panel"},s.map(i=>T.default.createElement("div",{key:i.chainId,className:"network-list--item",onClick:()=>{p(i)}},T.default.createElement("div",{className:"network-list--info"},T.default.createElement("img",{className:"network-list--icon",src:i.icon}),T.default.createElement("div",{className:"network-list--name"},i.chainName)),l.providerType===i.providerType&&T.default.createElement(se,{className:"okx-wallet-plugin-check"})))))}var fe=(0,T.memo)(rt);c();a();c();a();var W=q(O()),Y=q(F());function J({domainMetadata:e}){let o=(0,W.useContext)(ve);return W.default.createElement("div",{className:"permissions-redirect"},W.default.createElement("div",{className:"permissions-redirect__result"},o("wallet_addwallet_notify_hardware_wallet_connecting"),W.default.createElement("div",{className:"permissions-redirect__icons"},W.default.createElement(ee,{icon:e.icon,name:e.name,size:48}),W.default.createElement("div",{className:"permissions-redirect__center-icon"},W.default.createElement("span",{className:"permissions-redirect__line"}),W.default.createElement("span",{className:"permissions-redirect__check"}),W.default.createElement("span",{className:"permissions-redirect__line"})),W.default.createElement(ee,{icon:"/static/images/icon-64.png",size:48}))))}J.propTypes={domainMetadata:Y.default.shape({extensionId:Y.default.string,icon:Y.default.string,host:Y.default.string.isRequired,name:Y.default.string.isRequired,origin:Y.default.string.isRequired})};J.defaultProps={domainMetadata:{extensionId:"",icon:"",host:"",name:"",origin:""}};var ct=1200,Q=class extends E.Component{constructor(){super(...arguments);X(this,"state",{redirecting:!1,permissionsApproved:null,origin:this.props.origin,targetDomainMetadata:this.props.targetDomainMetadata||{}});X(this,"beforeUnload",()=>{let{permissionsRequestId:t,rejectPermissionsRequest:s}=this.props,{permissionsApproved:m}=this.state;m===null&&t&&s(t)});X(this,"removeBeforeUnload",()=>{de()===pe&&window.removeEventListener("beforeunload",this.beforeUnload)});X(this,"cancelPermissionsRequest",async t=>{let{rejectPermissionsRequest:s}=this.props;t&&(await s(t),this.redirect(!1))})}componentDidMount(){let{getCurrentWindowTab:t,getRequestAccountTabIds:s,permissionsRequest:m,history:n}=this.props;if(t(),s(),!m){n.push(ne);return}de()===pe&&window.addEventListener("beforeunload",this.beforeUnload)}static getDerivedStateFromProps(t,s){let{permissionsRequest:m,targetDomainMetadata:n}=t,{targetDomainMetadata:l}=s;return m&&l.origin!==(n==null?void 0:n.origin)?{targetDomainMetadata:n}:null}componentDidUpdate(t){var r,p;let{permissionsRequest:s,lastConnectedInfo:m}=this.props,{redirecting:n,origin:l}=this.state;if(!s&&t.permissionsRequest&&!n){let i=((r=m[l])==null?void 0:r.lastApproved)||0,d=((p=t.lastConnectedInfo[l])==null?void 0:p.lastApproved)||0,w=i>d;this.redirect(w)}}redirect(t){let{history:s}=this.props;this.setState({redirecting:!0,permissionsApproved:t}),this.removeBeforeUnload(),t?setTimeout(()=>s.push(ne),ct):s.push(ne)}goBack(){let{history:t,connectPath:s}=this.props;t.push(s)}render(){let{approvePermissionsRequest:t,permissionsRequest:s,permissionsRequestId:m,connectPath:n,origin:l,selectWalletPath:r,selectNetworkPath:p,setDappConnectSuccess:i}=this.props,{permissionsApproved:d,redirecting:w,targetDomainMetadata:C}=this.state;return E.default.createElement("div",{className:"page-container permissions-connect"},w&&d?E.default.createElement(J,{domainMetadata:C}):E.default.createElement(Ne,null,E.default.createElement(oe,{path:r,exact:!0,render:()=>E.default.createElement(ue,null)}),E.default.createElement(oe,{path:p,exact:!0,render:()=>E.default.createElement(fe,null)}),E.default.createElement(oe,{path:n,exact:!0,render:()=>E.default.createElement(Ze,{origin:l,request:s||{},cancelPermissionsRequest:v=>this.cancelPermissionsRequest(v),permissionsRequestId:m,targetDomainMetadata:C,approvePermissionsRequest:(...v)=>{t(...v),i(!0),setTimeout(()=>{i(!1)},2e3)}})})))}};Q.propTypes={approvePermissionsRequest:f.default.func.isRequired,setDappConnectSuccess:f.default.func.isRequired,rejectPermissionsRequest:f.default.func.isRequired,getRequestAccountTabIds:f.default.func.isRequired,getCurrentWindowTab:f.default.func.isRequired,origin:f.default.string,permissionsRequest:f.default.object,lastConnectedInfo:f.default.object.isRequired,permissionsRequestId:f.default.string,history:f.default.object.isRequired,connectPath:f.default.string.isRequired,selectNetworkPath:f.default.string.isRequired,selectWalletPath:f.default.string.isRequired,targetDomainMetadata:f.default.shape({extensionId:f.default.string,icon:f.default.string,host:f.default.string.isRequired,name:f.default.string.isRequired,origin:f.default.string.isRequired})};Q.defaultProps={origin:"",permissionsRequest:void 0,permissionsRequestId:"",targetDomainMetadata:{}};Q.contextTypes={t:f.default.func};var Qe=Q;var at=(e,o)=>{var ge;let{match:{params:{id:t}},location:{pathname:s}}=o,n=Ee(e).find(j=>j.metadata.id===t),{metadata:l={}}=n||{},{origin:r}=l,p=Ae(e),i=ye(e),d=null;if(r)if(i[r])d={...i[r],origin:r};else{let j=new URL(r);d={host:j.host,name:j.hostname,origin:r}}let w=Ce(e),C=We(e)||{},v=((ge=C[r])==null?void 0:ge.accounts)||{};Object.keys(v).forEach(j=>{v[j]=we(v[j],"yyyy-MM-dd")});let K=`${x}/${t}`,M=`${x}/${t}${G}`,u=`${x}/${t}${Pe}`,A=`${x}/${t}${Se}`,k="";if(s===K)k="1";else if(s===A||s===u||s===M)k="2";else throw new Error("Incorrect path for permissions-connect component");return{permissionsRequest:n,permissionsRequestId:t,accounts:w,origin:r,newAccountNumber:w.length+1,nativeCurrency:p,addressLastConnectedMap:v,lastConnectedInfo:C,connectPath:K,selectWalletPath:M,selectNetworkPath:u,confirmPermissionPath:A,page:k,targetDomainMetadata:d}},lt=e=>({approvePermissionsRequest:(o,t,s)=>e(Le(o,t,s)),rejectPermissionsRequest:o=>e(Re(o)),showNewAccountModal:({onCreateNewAccount:o,newAccountNumber:t})=>e(ke({name:"NEW_ACCOUNT",onCreateNewAccount:o,newAccountNumber:t})),getRequestAccountTabIds:()=>e($e()),getCurrentWindowTab:()=>e(Oe()),setDappConnectSuccess:o=>e(b.setDappFinish(o))}),Xe=he(at,lt)(Qe);Xe.propTypes={history:te.default.object.isRequired,match:te.default.shape({params:te.default.shape({id:te.default.string}).isRequired}).isRequired};var mt=Xe;export{mt as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
