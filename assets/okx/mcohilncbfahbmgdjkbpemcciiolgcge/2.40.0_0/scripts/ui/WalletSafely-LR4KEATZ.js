import{i as c,j as u}from"./chunk-Z3F5FSEH.js";import"./chunk-IWZNXKTF.js";import{a as _}from"./chunk-LN5KNA7T.js";import{d as l,f as m,g as d}from"./chunk-HX34N4W4.js";import{a as r}from"./chunk-F7QJ6WQ5.js";import"./chunk-TNVBYBO5.js";import{qa as g}from"./chunk-KRRNVCWZ.js";import{Ii as E,Ji as x,La as f,e as k,ee as y,gh as L,gj as S,hh as T,i as n,ja as O,k as p}from"./chunk-YC2Z7II3.js";n();p();var e=k(O());n();p();var w=[{isLink:!0,to:x,title:"wallet_extension_settings_reset_password",point:u},{title:{text:"wallet_settings_subtitle_reset_wallet",style:{color:"#e3493f"}},to:`${E}?from=reset-password`,point:c},{type:"divider"},{title:"settings_intro_title_protection_level",icon:{placement:f.DIRECTION.topLeft,icon:"okx-wallet-plugin-information-circle",tooltip:"settings_intro_tooltips_strictness_level"},value:"walletProtectionLevel",isLink:!0,to:S}];var h=()=>{let o=g(),C=y(({metamask:a})=>({walletProtectionLevel:T[a.preferences.walletProtectionLevel||L.LOW]}));return e.default.createElement(r.Container,null,e.default.createElement(d,{title:o("wallet_settings_subtitle_security_settings")}),e.default.createElement(_,{style:{paddingTop:8},dataSource:w,renderItem:({type:a,title:t,to:P,isLink:v,point:I,icon:i,value:b})=>{if(a==="divider")return e.default.createElement(r.Box,{style:{height:"1px",background:"#ebebeb",margin:"8px 16px"}});let s="";return i?s=e.default.createElement(r.Space,{space:"6px",align:r.ALIGN.center},e.default.createElement(l.Text,{strong:!0,size:l.SIZE.md,type:l.TYPE.default,style:{flex:1,flexShrink:0}},o(t)),e.default.createElement(m,{tooltip:o(i.tooltip),style:{color:"#929292"},icon:i.icon,placement:i.placement,size:m.SIZE.xs})):typeof t=="object"?s=e.default.createElement(l.Text,{style:t==null?void 0:t.style},o(t==null?void 0:t.text)):s=o(t),e.default.createElement(_.Cell,{title:s,value:o(C[b]),isLink:v,to:P,onClick:I,style:{height:56}})}}))},q=e.default.memo(h);export{q as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
