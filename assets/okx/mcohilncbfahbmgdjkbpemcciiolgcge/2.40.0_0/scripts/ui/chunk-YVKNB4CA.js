import{b as U,ba as S,c as v,d as W,f as z,h as process,i as n,k as t}from"./chunk-YC2Z7II3.js";var O=v((Pr,F)=>{n();t();F.exports=C;function C(r,e){if(r&&e)return C(r)(e);if(typeof r!="function")throw new TypeError("need wrapper function");return Object.keys(r).forEach(function(o){i[o]=r[o]}),i;function i(){for(var o=new Array(arguments.length),c=0;c<o.length;c++)o[c]=arguments[c];var f=r.apply(this,o),u=o[o.length-1];return typeof f=="function"&&f!==u&&Object.keys(u).forEach(function(a){f[a]=u[a]}),f}}});var L=v((Gr,_)=>{n();t();var P=O();_.exports=P(b);_.exports.strict=P(V);b.proto=b(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return b(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return V(this)},configurable:!0})});function b(r){var e=function(){return e.called?e.value:(e.called=!0,e.value=r.apply(this,arguments))};return e.called=!1,e}function V(r){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=r.apply(this,arguments)},i=r.name||"Function wrapped with `once`";return e.onceError=i+" shouldn't be called more than once",e.called=!1,e}});var M=v((Ir,G)=>{n();t();var Q=L(),X=function(){},Z=function(r){return r.setHeader&&typeof r.abort=="function"},$=function(r){return r.stdio&&Array.isArray(r.stdio)&&r.stdio.length===3},D=function(r,e,i){if(typeof e=="function")return D(r,null,e);e||(e={}),i=Q(i||X);var o=r._writableState,c=r._readableState,f=e.readable||e.readable!==!1&&r.readable,u=e.writable||e.writable!==!1&&r.writable,a=!1,s=function(){r.writable||d()},d=function(){u=!1,f||i.call(r)},R=function(){f=!1,u||i.call(r)},A=function(y){i.call(r,y?new Error("exited with error code: "+y):null)},T=function(y){i.call(r,y)},w=function(){process.nextTick(N)},N=function(){if(!a){if(f&&!(c&&c.ended&&!c.destroyed))return i.call(r,new Error("premature close"));if(u&&!(o&&o.ended&&!o.destroyed))return i.call(r,new Error("premature close"))}},E=function(){r.req.on("finish",d)};return Z(r)?(r.on("complete",d),r.on("abort",w),r.req?E():r.on("request",E)):u&&!o&&(r.on("end",s),r.on("close",s)),$(r)&&r.on("exit",A),r.on("end",R),r.on("finish",d),e.error!==!1&&r.on("error",T),r.on("close",w),function(){a=!0,r.removeListener("complete",d),r.removeListener("abort",w),r.removeListener("request",E),r.req&&r.req.removeListener("finish",d),r.removeListener("end",s),r.removeListener("close",s),r.removeListener("finish",d),r.removeListener("exit",A),r.removeListener("end",R),r.removeListener("error",T),r.removeListener("close",w)}};G.exports=D});var j={};W(j,{default:()=>m});var m,I=U(()=>{n();t();m={}});var Y=v((Ur,h)=>{n();t();var p=(I(),z(j));if(p&&p.default){h.exports=p.default;for(let r in p)h.exports[r]=p[r]}else p&&(h.exports=p)});var cr=v((Jr,H)=>{n();t();var k=L(),rr=M(),q=Y(),g=function(){},er=/^v?\.0/.test(process.version),x=function(r){return typeof r=="function"},or=function(r){return!er||!q?!1:(r instanceof(q.ReadStream||g)||r instanceof(q.WriteStream||g))&&x(r.close)},nr=function(r){return r.setHeader&&x(r.abort)},tr=function(r,e,i,o){o=k(o);var c=!1;r.on("close",function(){c=!0}),rr(r,{readable:e,writable:i},function(u){if(u)return o(u);c=!0,o()});var f=!1;return function(u){if(!c&&!f){if(f=!0,or(r))return r.close(g);if(nr(r))return r.abort();if(x(r.destroy))return r.destroy();o(u||new Error("stream was destroyed"))}}},B=function(r){r()},ir=function(r,e){return r.pipe(e)},ur=function(){var r=Array.prototype.slice.call(arguments),e=x(r[r.length-1]||g)&&r.pop()||g;if(Array.isArray(r[0])&&(r=r[0]),r.length<2)throw new Error("pump requires two streams per minimum");var i,o=r.map(function(c,f){var u=f<r.length-1,a=f>0;return tr(c,u,a,function(s){i||(i=s),s&&o.forEach(B),!u&&(o.forEach(B),e(i))})});return r.reduce(ir)};H.exports=ur});n();t();n();t();var J=S()?()=>{}:()=>document.body,lr=S()?void 0:window.getComputedStyle;n();t();n();t();export{L as a,M as b,Y as c,cr as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

