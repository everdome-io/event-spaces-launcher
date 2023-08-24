import{a as ke,b as ge,d as Et}from"./chunk-MFUKPLPN.js";import{A as He,b as P,c as de,d as J,e as Ue,f as me,h as process,i as v,j as b,k as g,p as Le,q as qt,s as Q,t as K,u as Fe,v as ee,w as ye,x as ve}from"./chunk-YC2Z7II3.js";function Be(){if(typeof V<"u")return V;try{new globalThis.Blob([new ArrayBuffer(1)]),V=!0}catch{V=!1}return V}function be(e){M||(M=new globalThis.XMLHttpRequest,M.open("GET",globalThis.location.host?"/":"https://example.com"));try{return M.responseType=e,M.responseType===e}catch{return!1}}function z(e){return typeof e=="function"}var te,V,M,xe,St,De,je,Ge,re,Ke,Ce=P(()=>{v();g();te=z(globalThis.fetch)&&z(globalThis.ReadableStream);xe=typeof globalThis.ArrayBuffer<"u",St=xe&&z(globalThis.ArrayBuffer.prototype.slice),De=xe&&be("arraybuffer"),je=!te&&St&&be("ms-stream"),Ge=!te&&xe&&be("moz-chunked-arraybuffer"),re=z(M.overrideMimeType),Ke=z(globalThis.VBArray);M=null});function X(e,r,t){var o=this;Te.Readable.call(o),o._mode=t,o.headers={},o.rawHeaders=[],o.trailers={},o.rawTrailers=[],o.on("end",function(){process.nextTick(function(){o.emit("close")})});var s;if(t==="fetch"){o._fetchResponse=r,o.url=r.url,o.statusCode=r.status,o.statusMessage=r.statusText;for(var a,i,f=r.headers[Symbol.iterator]();a=(i=f.next()).value,!i.done;)o.headers[a[0].toLowerCase()]=a[1],o.rawHeaders.push(a[0],a[1]);var n=r.body.getReader();s=function(){n.read().then(function(m){if(!o._destroyed){if(m.done){o.push(null);return}o.push(new b.Buffer(m.value)),s()}})},s()}else{o._xhr=e,o._pos=0,o.url=e.responseURL,o.statusCode=e.status,o.statusMessage=e.statusText;var c=e.getAllResponseHeaders().split(/\r?\n/);if(c.forEach(function(m){var u=m.match(/^([^:]+):\s*(.*)/);if(u){var d=u[1].toLowerCase();d==="set-cookie"?(o.headers[d]===void 0&&(o.headers[d]=[]),o.headers[d].push(u[2])):o.headers[d]!==void 0?o.headers[d]+=", "+u[2]:o.headers[d]=u[2],o.rawHeaders.push(u[1],u[2])}}),o._charset="x-user-defined",!re){var p=o.rawHeaders["mime-type"];if(p){var l=p.match(/;\s*charset=([^;])(;|$)/);l&&(o._charset=l[1].toLowerCase())}o._charset||(o._charset="utf-8")}}}var Te,N,Ve=P(()=>{v();g();Ce();ve();Te=Ue(He()),N={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4};Q(X,Te.Readable);X.prototype._read=function(){};X.prototype._onXHRProgress=function(){var e=this,r=e._xhr,t=null;switch(e._mode){case"text:vbarray":if(r.readyState!==N.DONE)break;try{t=new globalThis.VBArray(r.responseBody).toArray()}catch{}if(t!==null){e.push(new b.Buffer(t));break}case"text":try{t=r.responseText}catch{e._mode="text:vbarray";break}if(t.length>e._pos){var o=t.substr(e._pos);if(e._charset==="x-user-defined"){for(var s=new b.Buffer(o.length),a=0;a<o.length;a++)s[a]=o.charCodeAt(a)&255;e.push(s)}else e.push(o,e._charset);e._pos=t.length}break;case"arraybuffer":if(r.readyState!==N.DONE||!r.response)break;t=r.response,e.push(new b.Buffer(new Uint8Array(t)));break;case"moz-chunked-arraybuffer":if(t=r.response,r.readyState!==N.LOADING||!t)break;e.push(new b.Buffer(new Uint8Array(t)));break;case"ms-stream":if(t=r.response,r.readyState!==N.LOADING)break;var i=new globalThis.MSStreamReader;i.onprogress=function(){i.result.byteLength>e._pos&&(e.push(new b.Buffer(new Uint8Array(i.result.slice(e._pos)))),e._pos=i.result.byteLength)},i.onload=function(){e.push(null)},i.readAsArrayBuffer(t);break}e._xhr.readyState===N.DONE&&e._mode!=="ms-stream"&&e.push(null)}});function ze(e){if(e instanceof Uint8Array){if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer;if(typeof e.buffer.slice=="function")return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(Le(e)){for(var r=new Uint8Array(e.length),t=e.length,o=0;o<t;o++)r[o]=e[o];return r.buffer}else throw new Error("Argument must be a Buffer")}var Xe=P(()=>{v();g();qt()});function Nt(e,r){return te&&r?"fetch":Ge?"moz-chunked-arraybuffer":je?"ms-stream":De&&e?"arraybuffer":Ke&&e?"text:vbarray":"text"}function x(e){var r=this;oe.Writable.call(r),r._opts=e,r._body=[],r._headers={},e.auth&&r.setHeader("Authorization","Basic "+new b.Buffer(e.auth).toString("base64")),Object.keys(e.headers).forEach(function(s){r.setHeader(s,e.headers[s])});var t,o=!0;if(e.mode==="disable-fetch")o=!1,t=!0;else if(e.mode==="prefer-streaming")t=!1;else if(e.mode==="allow-wrong-content-type")t=!re;else if(!e.mode||e.mode==="default"||e.mode==="prefer-fast")t=!0;else throw new Error("Invalid value for opts.mode");r._mode=Nt(t,o),r.on("finish",function(){r._onFinish()})}function Mt(e){try{var r=e.status;return r!==null&&r!==0}catch{return!1}}var oe,ae,It,Re=P(()=>{v();g();Ce();ve();Ve();oe=Ue(He());Xe();ae=x;Q(x,oe.Writable);It=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];x.prototype.setHeader=function(e,r){var t=this,o=e.toLowerCase();It.indexOf(o)===-1&&(t._headers[o]={name:e,value:r})};x.prototype.getHeader=function(e){var r=this;return r._headers[e.toLowerCase()].value};x.prototype.removeHeader=function(e){var r=this;delete r._headers[e.toLowerCase()]};x.prototype._onFinish=function(){var e=this;if(!e._destroyed){var r=e._opts,t=e._headers,o;if((r.method==="POST"||r.method==="PUT"||r.method==="PATCH")&&(Be()?o=new globalThis.Blob(e._body.map(function(i){return ze(i)}),{type:(t["content-type"]||{}).value||""}):o=b.Buffer.concat(e._body).toString()),e._mode==="fetch"){var s=Object.keys(t).map(function(i){return[t[i].name,t[i].value]});globalThis.fetch(e._opts.url,{method:e._opts.method,headers:s,body:o,mode:"cors",credentials:r.withCredentials?"include":"same-origin"}).then(function(i){e._fetchResponse=i,e._connect()},function(i){e.emit("error",i)})}else{var a=e._xhr=new globalThis.XMLHttpRequest;try{a.open(e._opts.method,e._opts.url,!0)}catch(i){process.nextTick(function(){e.emit("error",i)});return}"responseType"in a&&(a.responseType=e._mode.split(":")[0]),"withCredentials"in a&&(a.withCredentials=!!r.withCredentials),e._mode==="text"&&"overrideMimeType"in a&&a.overrideMimeType("text/plain; charset=x-user-defined"),Object.keys(t).forEach(function(i){a.setRequestHeader(t[i].name,t[i].value)}),e._response=null,a.onreadystatechange=function(){switch(a.readyState){case N.LOADING:case N.DONE:e._onXHRProgress();break}},e._mode==="moz-chunked-arraybuffer"&&(a.onprogress=function(){e._onXHRProgress()}),a.onerror=function(){e._destroyed||e.emit("error",new Error("XHR error"))};try{a.send(o)}catch(i){process.nextTick(function(){e.emit("error",i)});return}}}};x.prototype._onXHRProgress=function(){var e=this;!Mt(e._xhr)||e._destroyed||(e._response||e._connect(),e._response._onXHRProgress())};x.prototype._connect=function(){var e=this;e._destroyed||(e._response=new X(e._xhr,e._fetchResponse,e._mode),e.emit("response",e._response))};x.prototype._write=function(e,r,t){var o=this;o._body.push(e),t()};x.prototype.abort=x.prototype.destroy=function(){var e=this;e._destroyed=!0,e._response&&(e._response._destroyed=!0),e._xhr&&e._xhr.abort()};x.prototype.end=function(e,r,t){var o=this;typeof e=="function"&&(t=e,e=void 0),oe.Writable.prototype.end.call(o,e,r,t)};x.prototype.flushHeaders=function(){};x.prototype.setTimeout=function(){};x.prototype.setNoDelay=function(){};x.prototype.setSocketKeepAlive=function(){}});var Gt={};J(Gt,{decode:()=>_e,default:()=>jt,encode:()=>we,toASCII:()=>ne,toUnicode:()=>ot,ucs2:()=>nt,version:()=>at});function U(e){throw new RangeError(Bt[e])}function Je(e,r){for(var t=e.length,o=[];t--;)o[t]=r(e[t]);return o}function Qe(e,r){var t=e.split("@"),o="";t.length>1&&(o=t[0]+"@",e=t[1]),e=e.replace(kt,".");var s=e.split("."),a=Je(s,r).join(".");return o+a}function et(e){for(var r=[],t=0,o=e.length,s,a;t<o;)s=e.charCodeAt(t++),s>=55296&&s<=56319&&t<o?(a=e.charCodeAt(t++),(a&64512)==56320?r.push(((s&1023)<<10)+(a&1023)+65536):(r.push(s),t--)):r.push(s);return r}function tt(e){return Je(e,function(r){var t="";return r>65535&&(r-=65536,t+=$(r>>>10&1023|55296),r=56320|r&1023),t+=$(r),t}).join("")}function Dt(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:w}function $e(e,r){return e+22+75*(e<26)-((r!=0)<<5)}function rt(e,r,t){var o=0;for(e=t?q(e/Lt):e>>1,e+=q(e/r);e>Ae*Y>>1;o+=w)e=q(e/Ae);return q(o+(Ae+1)*e/(e+Ut))}function _e(e){var r=[],t=e.length,o,s=0,a=Ze,i=Ye,f,n,c,p,l,m,u,d,C;for(f=e.lastIndexOf(We),f<0&&(f=0),n=0;n<f;++n)e.charCodeAt(n)>=128&&U("not-basic"),r.push(e.charCodeAt(n));for(c=f>0?f+1:0;c<t;){for(p=s,l=1,m=w;c>=t&&U("invalid-input"),u=Dt(e.charCodeAt(c++)),(u>=w||u>q((k-s)/l))&&U("overflow"),s+=u*l,d=m<=i?Oe:m>=i+Y?Y:m-i,!(u<d);m+=w)C=w-d,l>q(k/C)&&U("overflow"),l*=C;o=r.length+1,i=rt(s-p,o,p==0),q(s/o)>k-a&&U("overflow"),a+=q(s/o),s%=o,r.splice(s++,0,a)}return tt(r)}function we(e){var r,t,o,s,a,i,f,n,c,p,l,m=[],u,d,C,A;for(e=et(e),u=e.length,r=Ze,t=0,a=Ye,i=0;i<u;++i)l=e[i],l<128&&m.push($(l));for(o=s=m.length,s&&m.push(We);o<u;){for(f=k,i=0;i<u;++i)l=e[i],l>=r&&l<f&&(f=l);for(d=o+1,f-r>q((k-t)/d)&&U("overflow"),t+=(f-r)*d,r=f,i=0;i<u;++i)if(l=e[i],l<r&&++t>k&&U("overflow"),l==r){for(n=t,c=w;p=c<=a?Oe:c>=a+Y?Y:c-a,!(n<p);c+=w)A=n-p,C=w-p,m.push($($e(p+A%C,0))),n=q(A/C);m.push($($e(n,0))),a=rt(t,d,o==s),t=0,++o}++t,++r}return m.join("")}function ot(e){return Qe(e,function(r){return Ft.test(r)?_e(r.slice(4).toLowerCase()):r})}function ne(e){return Qe(e,function(r){return Ht.test(r)?"xn--"+we(r):r})}var k,w,Oe,Y,Ut,Lt,Ye,Ze,We,Ft,Ht,kt,Bt,Ae,q,$,at,nt,jt,st=P(()=>{v();g();k=2147483647,w=36,Oe=1,Y=26,Ut=38,Lt=700,Ye=72,Ze=128,We="-",Ft=/^xn--/,Ht=/[^\x20-\x7E]/,kt=/[\x2E\u3002\uFF0E\uFF61]/g,Bt={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Ae=w-Oe,q=Math.floor,$=String.fromCharCode;at="1.4.1",nt={decode:et,encode:tt},jt={version:at,ucs2:nt,toASCII:ne,toUnicode:ot,encode:we,decode:_e}});var mt={};J(mt,{Url:()=>O,default:()=>Kt,format:()=>ct,parse:()=>E,resolve:()=>pt,resolveObject:()=>lt});function O(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function E(e,r,t){if(e&&ye(e)&&e instanceof O)return e;var o=new O;return o.parse(e,r,t),o}function ft(e,r,t,o){if(!ee(r))throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var s=r.indexOf("?"),a=s!==-1&&s<r.indexOf("#")?"?":"#",i=r.split(a),f=/\\/g;i[0]=i[0].replace(f,"/"),r=i.join(a);var n=r;if(n=n.trim(),!o&&r.split("#").length===1){var c=Xt.exec(n);if(c)return e.path=n,e.href=n,e.pathname=c[1],c[2]?(e.search=c[2],t?e.query=ge(e.search.substr(1)):e.query=e.search.substr(1)):t&&(e.search="",e.query={}),e}var p=Vt.exec(n);if(p){p=p[0];var l=p.toLowerCase();e.protocol=l,n=n.substr(p.length)}if(o||p||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var m=n.substr(0,2)==="//";m&&!(p&&Ee[p])&&(n=n.substr(2),e.slashes=!0)}var u,d,C,A;if(!Ee[p]&&(m||p&&!B[p])){var y=-1;for(u=0;u<ht.length;u++)d=n.indexOf(ht[u]),d!==-1&&(y===-1||d<y)&&(y=d);var Z,h;for(y===-1?h=n.lastIndexOf("@"):h=n.lastIndexOf("@",y),h!==-1&&(Z=n.slice(0,h),n=n.slice(h+1),e.auth=decodeURIComponent(Z)),y=-1,u=0;u<it.length;u++)d=n.indexOf(it[u]),d!==-1&&(y===-1||d<y)&&(y=d);y===-1&&(y=n.length),e.host=n.slice(0,y),n=n.slice(y),dt(e),e.hostname=e.hostname||"";var I=e.hostname[0]==="["&&e.hostname[e.hostname.length-1]==="]";if(!I){var T=e.hostname.split(/\./);for(u=0,C=T.length;u<C;u++){var R=T[u];if(!!R&&!R.match(ut)){for(var D="",_=0,S=R.length;_<S;_++)R.charCodeAt(_)>127?D+="x":D+=R[_];if(!D.match(ut)){var j=T.slice(0,u),fe=T.slice(u+1),ce=R.match(Wt);ce&&(j.push(ce[1]),fe.unshift(ce[2])),fe.length&&(n="/"+fe.join(".")+n),e.hostname=j.join(".");break}}}}e.hostname.length>Zt?e.hostname="":e.hostname=e.hostname.toLowerCase(),I||(e.hostname=ne(e.hostname)),A=e.port?":"+e.port:"";var _t=e.hostname||"";e.host=_t+A,e.href+=e.host,I&&(e.hostname=e.hostname.substr(1,e.hostname.length-2),n[0]!=="/"&&(n="/"+n))}if(!Jt[l])for(u=0,C=qe.length;u<C;u++){var G=qe[u];if(n.indexOf(G)!==-1){var pe=encodeURIComponent(G);pe===G&&(pe=escape(G)),n=n.split(G).join(pe)}}var le=n.indexOf("#");le!==-1&&(e.hash=n.substr(le),n=n.slice(0,le));var W=n.indexOf("?");if(W!==-1?(e.search=n.substr(W),e.query=n.substr(W+1),t&&(e.query=ge(e.query)),n=n.slice(0,W)):t&&(e.search="",e.query={}),n&&(e.pathname=n),B[l]&&e.hostname&&!e.pathname&&(e.pathname="/"),e.pathname||e.search){A=e.pathname||"";var wt=e.search||"";e.path=A+wt}return e.href=Se(e),e}function ct(e){return ee(e)&&(e=ft({},e)),Se(e)}function Se(e){var r=e.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var t=e.protocol||"",o=e.pathname||"",s=e.hash||"",a=!1,i="";e.host?a=r+e.host:e.hostname&&(a=r+(e.hostname.indexOf(":")===-1?e.hostname:"["+this.hostname+"]"),e.port&&(a+=":"+e.port)),e.query&&ye(e.query)&&Object.keys(e.query).length&&(i=ke(e.query));var f=e.search||i&&"?"+i||"";return t&&t.substr(-1)!==":"&&(t+=":"),e.slashes||(!t||B[t])&&a!==!1?(a="//"+(a||""),o&&o.charAt(0)!=="/"&&(o="/"+o)):a||(a=""),s&&s.charAt(0)!=="#"&&(s="#"+s),f&&f.charAt(0)!=="?"&&(f="?"+f),o=o.replace(/[?#]/g,function(n){return encodeURIComponent(n)}),f=f.replace("#","%23"),t+a+o+f+s}function pt(e,r){return E(e,!1,!0).resolve(r)}function lt(e,r){return e?E(e,!1,!0).resolveObject(r):r}function dt(e){var r=e.host,t=zt.exec(r);t&&(t=t[0],t!==":"&&(e.port=t.substr(1)),r=r.substr(0,r.length-t.length)),r&&(e.hostname=r)}var Kt,Vt,zt,Xt,$t,Yt,qe,it,ht,Zt,ut,Wt,Jt,Ee,B,se=P(()=>{v();g();st();ve();Et();Kt={parse:E,resolve:pt,resolveObject:lt,format:ct,Url:O};Vt=/^([a-z0-9.+-]+:)/i,zt=/:[0-9]*$/,Xt=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,$t=["<",">",'"',"`"," ","\r",`
`,"	"],Yt=["{","}","|","\\","^","`"].concat($t),qe=["'"].concat(Yt),it=["%","/","?",";","#"].concat(qe),ht=["/","?","#"],Zt=255,ut=/^[+a-z0-9A-Z_-]{0,63}$/,Wt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Jt={javascript:!0,"javascript:":!0},Ee={javascript:!0,"javascript:":!0},B={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};O.prototype.parse=function(e,r,t){return ft(this,e,r,t)};O.prototype.format=function(){return Se(this)};O.prototype.resolve=function(e){return this.resolveObject(E(e,!1,!0)).format()};O.prototype.resolveObject=function(e){if(ee(e)){var r=new O;r.parse(e,!1,!0),e=r}for(var t=new O,o=Object.keys(this),s=0;s<o.length;s++){var a=o[s];t[a]=this[a]}if(t.hash=e.hash,e.href==="")return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),f=0;f<i.length;f++){var n=i[f];n!=="protocol"&&(t[n]=e[n])}return B[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}var c;if(e.protocol&&e.protocol!==t.protocol){if(!B[e.protocol]){for(var p=Object.keys(e),l=0;l<p.length;l++){var m=p[l];t[m]=e[m]}return t.href=t.format(),t}if(t.protocol=e.protocol,!e.host&&!Ee[e.protocol]){for(c=(e.pathname||"").split("/");c.length&&!(e.host=c.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),c[0]!==""&&c.unshift(""),c.length<2&&c.unshift(""),t.pathname=c.join("/")}else t.pathname=e.pathname;if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){var u=t.pathname||"",d=t.search||"";t.path=u+d}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var C=t.pathname&&t.pathname.charAt(0)==="/",A=e.host||e.pathname&&e.pathname.charAt(0)==="/",y=A||C||t.host&&e.pathname,Z=y,h=t.pathname&&t.pathname.split("/")||[],I=t.protocol&&!B[t.protocol];c=e.pathname&&e.pathname.split("/")||[],I&&(t.hostname="",t.port=null,t.host&&(h[0]===""?h[0]=t.host:h.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(c[0]===""?c[0]=e.host:c.unshift(e.host)),e.host=null),y=y&&(c[0]===""||h[0]===""));var T;if(A)t.host=e.host||e.host===""?e.host:t.host,t.hostname=e.hostname||e.hostname===""?e.hostname:t.hostname,t.search=e.search,t.query=e.query,h=c;else if(c.length)h||(h=[]),h.pop(),h=h.concat(c),t.search=e.search,t.query=e.query;else if(!Fe(e.search))return I&&(t.hostname=t.host=h.shift(),T=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1,T&&(t.auth=T.shift(),t.host=t.hostname=T.shift())),t.search=e.search,t.query=e.query,(!K(t.pathname)||!K(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t;if(!h.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var R=h.slice(-1)[0],D=(t.host||e.host||h.length>1)&&(R==="."||R==="..")||R==="",_=0,S=h.length;S>=0;S--)R=h[S],R==="."?h.splice(S,1):R===".."?(h.splice(S,1),_++):_&&(h.splice(S,1),_--);if(!y&&!Z)for(;_--;_)h.unshift("..");y&&h[0]!==""&&(!h[0]||h[0].charAt(0)!=="/")&&h.unshift(""),D&&h.join("/").substr(-1)!=="/"&&h.push("");var j=h[0]===""||h[0]&&h[0].charAt(0)==="/";return I&&(t.hostname=t.host=j?"":h.length?h.shift():"",T=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1,T&&(t.auth=T.shift(),t.host=t.hostname=T.shift())),y=y||t.host&&h.length,y&&!j&&h.unshift(""),h.length?t.pathname=h.join("/"):(t.pathname=null,t.path=null),(!K(t.pathname)||!K(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t};O.prototype.parseHost=function(){return dt(this)}});var bt={};J(bt,{Agent:()=>Ne,METHODS:()=>vt,STATUS_CODES:()=>gt,default:()=>Qt,get:()=>yt,request:()=>Pe});function Pe(e,r){typeof e=="string"&&(e=E(e));var t=globalThis.location.protocol.search(/^https?:$/)===-1?"http:":"",o=e.protocol||t,s=e.hostname||e.host,a=e.port,i=e.path||"/";s&&s.indexOf(":")!==-1&&(s="["+s+"]"),e.url=(s?o+"//"+s:"")+(a?":"+a:"")+i,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};var f=new ae(e);return r&&f.on("response",r),f}function yt(e,r){var t=Pe(e,r);return t.end(),t}function Ne(){}var vt,gt,Qt,xt=P(()=>{v();g();Re();se();Ne.defaultMaxSockets=4;vt=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"],gt={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"},Qt={request:Pe,get:yt,Agent:Ne,METHODS:vt,STATUS_CODES:gt}});var er=de((Nr,ie)=>{v();g();var L=(xt(),me(bt));if(L&&L.default){ie.exports=L.default;for(let e in L)ie.exports[e]=L[e]}else L&&(ie.exports=L)});var At={};J(At,{Agent:()=>Me,METHODS:()=>Tt,STATUS_CODES:()=>Rt,default:()=>tr,get:()=>Ct,request:()=>Ie});function Ie(e,r){typeof e=="string"&&(e=E(e));var t=globalThis.location.protocol.search(/^https?:$/)===-1?"http:":"",o=e.protocol||t,s=e.hostname||e.host,a=e.port,i=e.path||"/";s&&s.indexOf(":")!==-1&&(s="["+s+"]"),e.url=(s?o+"//"+s:"")+(a?":"+a:"")+i,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};var f=new ae(e);return r&&f.on("response",r),f}function Ct(e,r){var t=Ie(e,r);return t.end(),t}function Me(){}var Tt,Rt,tr,Ot=P(()=>{v();g();Re();se();Me.defaultMaxSockets=4;Tt=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"],Rt={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"},tr={request:Ie,get:Ct,Agent:Me,METHODS:Tt,STATUS_CODES:Rt}});var rr=de((kr,he)=>{v();g();var F=(Ot(),me(At));if(F&&F.default){he.exports=F.default;for(let e in F)he.exports[e]=F[e]}else F&&(he.exports=F)});var or=de((jr,ue)=>{v();g();var H=(se(),me(mt));if(H&&H.default){ue.exports=H.default;for(let e in H)ue.exports[e]=H[e]}else H&&(ue.exports=H)});export{Gt as a,st as b,or as c,er as d,rr as e};
/*! https://mths.be/punycode v1.4.1 by @mathias */

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";
