import{a as B}from"./chunk-UKDME73C.js";import{a as os}from"./chunk-TXMRZH72.js";import{b as q}from"./chunk-WQMUAJQQ.js";import{a as H}from"./chunk-RYMLTDAH.js";import{a as F}from"./chunk-VNM7HA44.js";import{a as x}from"./chunk-4DLG5GSZ.js";import{a as is}from"./chunk-TNVBYBO5.js";import{T as k,qa as R}from"./chunk-KRRNVCWZ.js";import{Ik as W,Qc as b,e as f,ee as C,gd as w,i as d,ja as D,jd as t,k as a,ke as V,oa as ss,rh as Y,ui as p,wh as U,xl as $}from"./chunk-YC2Z7II3.js";d();a();var o={MANAGE_COIN_ADDED_CRYPTO:"manageCoinAddedCrypto",OVERVIEW:"overview",HOME_PAGE:"homePage",MANAGE_COIN_POPULAR_CRYPTO:"manageCoinPopularCrypto",SEARCH_LIST:"searchList"};d();a();var i=f(D()),l=f(ss());var P=f(os());var j=f(is());d();a();function rs(r){return r===null?"--":k(r)}var z=({listData:r,hidden:y,listType:e,title:h,clickHandle:m,keyword:N})=>{let c=R(),u=V(),A=C(q),g=C(Y),J=C(s=>({address:U(s)[g].account[b]})),[M,L]=(0,i.useState)({register:!1,status:0,contractAddress:""}),Q=s=>s&&`${s.slice(0,6)}....${s.slice(-6)}`,X=s=>!N||N.length>=10?s:i.default.createElement(H,{text:s,keyword:N}),v=s=>i.default.createElement(F,{alt:"",src:s.logo||s.imageUrl||s.image||W,className:"asset-list-item-icon"}),I=(s,n)=>{var T;let _=((T=s.childrenCoin)==null?void 0:T.length)>1?c("wallet_manage_crypto_labels_crypto_multichain"):s.tokenType;return i.default.createElement("div",{className:"asset-list-item-info-left"},i.default.createElement("div",{className:"asset-list-item-info-left-top"},i.default.createElement("div",{className:"asset-list-item-info-symbol"},X(s.symbol)),e!==o.HOME_PAGE&&_&&i.default.createElement("div",{className:"asset-list-item-info-chain-info"},_)),e==o.OVERVIEW&&i.default.createElement("div",{className:"asset-list-item-info-name"},s.rate),i.default.createElement("div",{className:"asset-list-item-info-name"},s.coinId===w?s.chainName:s.name),!s.aggregation&&s.address&&n?i.default.createElement("div",{className:"asset-list-item-info-address"},c("wallet_manage_crypto_label_contract_address"),":"," ",Q(s.address)):"")},O=async s=>{let{register:n,status:_}=await $({address:J.address,contractAddress:s});return n||L({register:!n,status:_,contractAddress:s}),n},E=(s,n)=>{switch(n){case o.OVERVIEW:case o.HOME_PAGE:return i.default.createElement("div",{className:"asset-list-item-info-right"},i.default.createElement("div",{className:"asset-list-item-info-account"},y?"***":rs(s.coinAmount)),i.default.createElement("div",{className:"asset-list-item-info-amount"},s.currencyAmountFormated===null?"--":y?"***":`${s.currencyAmountFormated}`));case o.MANAGE_COIN_ADDED_CRYPTO:case o.MANAGE_COIN_POPULAR_CRYPTO:return i.default.createElement("div",{className:"asset-list-item-info-right"},i.default.createElement(x,{onClick:async()=>{s.baseCoinId===t&&s.coinID!=t&&e===o.MANAGE_COIN_POPULAR_CRYPTO&&await O(s.address),s.uniquity||m&&m(s)},className:"asset-list-item-info-right-func-icon"},i.default.createElement("img",{src:e===o.MANAGE_COIN_POPULAR_CRYPTO?"/static/images/add.svg":s.uniquity?"/static/images/minus-gray.svg":"/static/images/minus.svg"})));case o.SEARCH_LIST:return i.default.createElement("div",{className:"asset-list-item-info-right"},i.default.createElement("img",{className:"asset-list-item-info-right-func-icon",src:s.added?s.uniquity?"./static/images/minus-gray.png":"./static/images/minus.svg":"./static/images/add.svg"}));default:return""}},G=(s,n=null)=>i.default.createElement("div",{className:"asset-list-item",key:s.key||s.coinId,onClick:async()=>{s.baseCoinId===t&&s.coinID!=t&&!await O(s.address)||(n===o.OVERVIEW?u.push(`${p}?aggregation=true&coinSymbol=${s.coinSymbol}&coinId=${s.coinId}`):s.aggregation?A[g]&&A[g][s.symbol]?u.push(A[g][s.symbol]):u.push(`${p}?aggregation=true&coinSymbol=${s.symbol}`):u.push(`${p}?coinId=${s.coinId}`))}},v(s),i.default.createElement("div",{className:"asset-list-item-info"},I(s),E(s,e)),n===o.OVERVIEW&&i.default.createElement("img",{style:{marginLeft:"10px"},src:"/static/images/icon-right-overview.svg"})),S=s=>i.default.createElement("div",{className:(0,j.default)("asset-list-item asset-list-item-manage",{"asset-list-custom-token-item":e===o.MANAGE_COIN_ADDED_CRYPTO||e===o.MANAGE_COIN_POPULAR_CRYPTO}),key:s.key,onClick:async()=>{e!==o.MANAGE_COIN_ADDED_CRYPTO&&e!==o.MANAGE_COIN_POPULAR_CRYPTO&&m&&m(s)}},v(s),i.default.createElement("div",{className:"asset-list-item-info"},I(s),E(s,e))),Z=(s,n)=>i.default.createElement("div",{className:"asset-list-item asset-list-item-search",key:s.key,onClick:async()=>{s.baseCoinId===t&&s.coinID!=t&&!await O(s.address)&&e===o.MANAGE_COIN_POPULAR_CRYPTO||m&&m(s)}},v(s),i.default.createElement("div",{className:"asset-list-item-info"},I(s,n),E(s,e)));return i.default.createElement(i.default.Fragment,null,i.default.createElement(B,{customCoin:M,registerDialog:M,onCancel:()=>{L({register:!1,status:0})}}),(()=>{switch(e){case o.OVERVIEW:return r?i.default.createElement("div",{className:"asset-list"},r.map(s=>G(s,o.OVERVIEW))):"";case o.HOME_PAGE:return r?i.default.createElement("div",{className:"asset-list"},r.map(s=>G(s))):"";case o.MANAGE_COIN_ADDED_CRYPTO:return r?i.default.createElement("div",{className:"manage-coin-list"},h&&i.default.createElement("div",{className:"added-crypto"},c("wallet_manage_crypto_list_added_crypto")),i.default.createElement(P.default,{transitionName:"fade-added",transitionEnterTimeout:300,transitionLeaveTimeout:300},r.map(s=>S(s)))):"";case o.MANAGE_COIN_POPULAR_CRYPTO:return r?i.default.createElement("div",{className:"manage-coin-list"},h&&i.default.createElement("div",{className:"popular-crypto"},c("wallet_manage_crypto_subtitle_popular_crypto")),i.default.createElement(P.default,{transitionEnterTimeout:300,transitionLeaveTimeout:300,transitionName:"fade"},r.map(s=>S(s)))):"";case o.SEARCH_LIST:return r?i.default.createElement("div",{className:"manage-coin-list"},r.map(s=>Z(s,!0))):"";default:return""}})())};z.propTypes={listData:l.default.array,listType:l.default.string,title:l.default.bool,clickHandle:l.default.func,keyword:l.default.string};var Gs=z;export{o as a,Gs as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
