import{b as z}from"./chunk-P4R64FMZ.js";import{Va as B,f as Y}from"./chunk-SBW523XW.js";import"./chunk-NEW56Z2U.js";import{g as x}from"./chunk-HX34N4W4.js";import{b as F}from"./chunk-F7QJ6WQ5.js";import{a as V}from"./chunk-TNVBYBO5.js";import{A as P,l as m,qa as D,y as p}from"./chunk-KRRNVCWZ.js";import{$i as O,Aa as T,Ca as k,Ki as I,Pa as g,Sh as S,Xi as A,de as b,e as h,ee as v,i as C,ja as U,k as N,wa as t}from"./chunk-YC2Z7II3.js";C();N();var e=h(U()),G=h(V());var f="RESET",$=3,q=["forgotpwd_mid_item_desc1","forgotpwd_mid_item_desc2","forgotpwd_mid_item_desc3"],Q="reset-password",le=({history:a})=>{let W=P(),n=b(),s=D(),_=v(S),[u,{toggle:c}]=m(!1),[Z,{set:w}]=m(!1),[d,y]=e.default.useState([]),[r,L]=e.default.useState(""),l=W.get("from")===Q,K=o=>{d.includes(o)?y(i=>i.filter(M=>M!==o)):y(i=>[...i,o])},E=p(async()=>{w(!0);try{await n(Y()),await n(B()),await n(z("isRpcMode",!1)),g.success({placement:g.DIRECTION.top,title:s("walletsecurity_top_toast_notification")}),a.push(I)}finally{w(!1)}},[]),H=p(()=>{_?a.push(`${A}?nextPath=${O}`):a.go(-1)},[_]);return e.default.createElement("div",{className:"forget-password"},e.default.createElement(x,{closeable:!1,title:s(l?"securityreset_header_text_reset":"forgotpwd_header_title_forget_password")}),e.default.createElement("div",{className:"forget-password__container"},e.default.createElement("img",{className:"forget-password__icon",src:"static/images/setting/forget-password_bg.svg",alt:"logo"}),!!l&&e.default.createElement("h1",{className:"forget-password__title"},s("securityreset_mid_title_risk_warning")),l?e.default.createElement("div",{className:"forget-password__desc"},s("securityreset_mid_subtitle_note")):e.default.createElement("ul",{className:"forget-password__tips"},q.map((o,i)=>e.default.createElement("li",{key:i,onClick:()=>{K(i)},className:"forget-password__tip"},e.default.createElement("img",{alt:"logo",className:"forget-password__tip__icon",src:d.includes(i)?"static/images/setting/check.svg":"static/images/setting/un_check.svg"}),s(o)))),e.default.createElement(F.FooterActions,null,l?e.default.createElement(e.default.Fragment,null,e.default.createElement(t,{size:t.SIZE.lg,category:t.CATEGORY.outline,type:t.TYPE.primary,onClick:c},s("securityreset_header_text_reset")),e.default.createElement(t,{onClick:H,size:t.SIZE.lg,type:t.TYPE.highlight,category:t.CATEGORY.fill},s(_?"securityreset_footer_btn_back":"securityreset_mid_btn_cancel"))):e.default.createElement(t,{block:!0,size:t.SIZE.lg,onClick:c,type:t.TYPE.highlight,category:t.CATEGORY.fill,className:"forget-password__action",disabled:d.length!==$},s("forgotpwd_footer_btn_reset_password")))),e.default.createElement(T,{hideCloseBtn:!0,noContentPadding:!0,visible:u},u&&e.default.createElement("div",{className:"reset-wallet"},e.default.createElement("h1",{className:"reset-wallet__title"},s("securityreset_mid_title_reset_password")),e.default.createElement("h2",{className:"reset-wallet__label"},s("securityreset_mid_text_enter_reset",{text:e.default.createElement("span",{key:"reset",style:{color:"#E3493F"}},s("securityreset_mid_placeholder_reset"))})),e.default.createElement(k,{size:"xl",cleanable:!0,value:r,autoFocus:!0,onKeyDown:o=>{o.keyCode===13&&r===f&&E()},placeholder:s("securityreset_mid_placeholder_reset"),onChange:({target:{value:o}})=>{L(o)}}),e.default.createElement("div",{className:"reset-wallet__actions"},e.default.createElement(t,{size:t.SIZE.lg,type:t.TYPE.primary,className:"reset-wallet__action reset-wallet__cancel",category:t.CATEGORY.outline,onClick:c},s("securityreset_mid_btn_cancel")),e.default.createElement(t,{size:t.SIZE.lg,type:t.TYPE.red,category:t.CATEGORY.fill,disabled:r!==f,className:(0,G.default)("reset-wallet__action",{"reset-wallet__action__disabled":r!==f}),loading:Z,onClick:E},s("securityreset_mid_btn_confirm"))))))};export{le as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
