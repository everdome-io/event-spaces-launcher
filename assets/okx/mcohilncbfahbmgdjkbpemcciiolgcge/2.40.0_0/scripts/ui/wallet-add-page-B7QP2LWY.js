import{a as F}from"./chunk-IUDJEPPS.js";import{a as A}from"./chunk-LFHLA7U2.js";import"./chunk-FJ7GWYCT.js";import{a as q}from"./chunk-FQDBFLDR.js";import{e as $}from"./chunk-3TZVDMZB.js";import{h as O}from"./chunk-POEDNLGY.js";import"./chunk-IWZNXKTF.js";import{g as D,i as V}from"./chunk-SBW523XW.js";import{c as Y,d as B}from"./chunk-NEW56Z2U.js";import"./chunk-HX34N4W4.js";import"./chunk-F7QJ6WQ5.js";import"./chunk-TNVBYBO5.js";import{qa as z}from"./chunk-KRRNVCWZ.js";import{Aa as N,Ad as P,Fd as I,Hd as R,Id as x,Qa as C,_i as M,bh as h,ce as S,e as f,g as c,i as n,ja as k,k as s,ke as v,oa as W,qi as L,wa as t,wi as y,xj as H,yj as U}from"./chunk-YC2Z7II3.js";n();s();n();s();var l=f(k()),T=f(W());n();s();n();s();var d=f(k()),u=f(W());function w(a){let{visible:i,setVisible:e,handlerImportPrivatekey:o,handlerImportSeedPhrase:p}=a,_=z(),r=v(),E=()=>{p?p():r.push(H)},G=()=>{o?o():r.push(U)};return d.default.createElement(N.Action,{hideCloseBtn:!0,noContentPadding:!1,visible:i},d.default.createElement(t,{block:!0,category:t.CATEGORY.fill,type:t.TYPE.highlight,size:t.SIZE.lg,onClick:E,className:"mask__common__button"},_("wallet_addwallet_btn_import_seed_phase")),d.default.createElement(t,{block:!0,category:t.CATEGORY.fill,type:t.TYPE.highlight,size:t.SIZE.lg,onClick:G,className:"mask__common__button"},_("wallet_addwallet_btn_import_private_key")),d.default.createElement(t,{block:!0,category:t.CATEGORY.outline,type:t.TYPE.secondary,size:t.SIZE.lg,onClick:e,className:"mask__common__button"},_("wallet_transfer_btn_cancel_transaction")))}w.propTypes={visible:u.default.bool,setVisible:u.default.func,handlerImportSeedPhrase:u.default.func,handlerImportPrivatekey:u.default.func};var g=({title:a,explain:i,leftIconName:e,onClick:o})=>l.default.createElement(F,{className:"wallet-add-page__list-card",isShowLeftIcon:!0,leftIconName:e,onClick:()=>o()},l.default.createElement("div",{className:"wallet-add-page__list-card-text"},l.default.createElement(A,{size:"large",type:"block",weight:"500"},a),l.default.createElement(A,{weight:"400",size:"mini",style:{marginTop:"4px",color:"#929292"}},i))),m=class extends l.PureComponent{constructor(){super(...arguments);c(this,"state",{visible:!1});c(this,"setVisible",e=>{this.setState({visible:e===!0})});c(this,"checkSelectWallet",async(e,o=["all"])=>{let{history:p}=this.props,{keyringName:_="",walletName:r=""}=e||{},E=`${_}-${r}`;p.push({pathname:`${M}/create/${o[0]}`,state:{walletName:E,anim:"1",next:L}})});c(this,"handlerCreateNewAccount",async()=>{let{t:e}=this.context,{createWallet:o,createAccounts:p}=this.props;this.addTypeCardClickReport(h.NEW),await(async()=>{try{let r=await o();await p(r),this.checkSelectWallet(r)}catch(r){r.message===Y&&C.error(e("wallet_home_toast_network_error")),r.message===B&&C.error(e("extension_wallet_addwallet_toast_wallets_added",{amount:100}))}})()});c(this,"openChromeToConnectHardware",()=>{let{history:e}=this.props;this.addTypeCardClickReport(h.HARDWARE),R()===P?globalThis.platform.openExtensionInBrowser(y):e.push(y)});c(this,"addTypeCardClickReport",e=>{O({tx_trminal:"web",wallet_type:e})})}render(){let{t:e}=this.context,{visible:o}=this.state;return l.default.createElement(q,{bordered:!1,themeTypeClass:"darkThemeWrapper",title:e("wallet_add_wallet_maintitle_add_wallet")},l.default.createElement("div",{className:"wallet-management__container wallet-add-page"},l.default.createElement(g,{leftIconName:"okx-wallet-plugin-import-wallet",title:e("wallet_addwallet_btn_import_wallet"),explain:e("wallet_addwallet_subtitle_import_wallet"),onClick:()=>(this.addTypeCardClickReport(h.IMPORTED),this.setVisible(!0))}),l.default.createElement(g,{leftIconName:"okx-wallet-plugin-plus",title:e("wallet_addwallet_btn_create_wallet"),explain:e("wallet_addwallet_subtitle_create_wallet"),onClick:this.handlerCreateNewAccount}),x()===I?null:l.default.createElement(g,{leftIconName:"okx-wallet-plugin-hardware-wallet",title:e("wallet_add_wallet_btn_conncet_hardware_wallet"),explain:e("wallet_addwallet_subtitle_connect_hardware_wallet"),onClick:this.openChromeToConnectHardware})),l.default.createElement(w,{visible:o,setVisible:this.setVisible}))}};m.propTypes={history:T.default.object.isRequired,createWallet:T.default.func.isRequired,createAccounts:T.default.func.isRequired};m.contextTypes={t:T.default.func};var K=a=>({selectedWallet:a.metamask.selectedWallet}),X=a=>({createWallet:()=>a(D()),addNewWallet:i=>a(V(i)),createAccounts:i=>a($(i))}),Pe=S(K,X)(m);export{Pe as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
