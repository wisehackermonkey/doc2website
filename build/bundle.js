var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function i(){return Object.create(null)}function o(e){e.forEach(n)}function r(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t,n,i){return e[1]&&i?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](i(t))):n.ctx}const u="undefined"!=typeof window;let s=u?()=>window.performance.now():()=>Date.now(),d=u?e=>requestAnimationFrame(e):e;const f=new Set;function p(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(p)}function m(e){let t;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}function g(e,t){e.appendChild(t)}function h(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function v(e){const t=x("style");return function(e,t){g(e.head||e,t)}(h(e),t),t}function y(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function w(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function E(){return $(" ")}function _(){return $("")}function k(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function L(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t){e.value=null==t?"":t}function T(e,t){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];if(i.__value===t)return void(i.selected=!0)}e.selectedIndex=-1}function D(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function S(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}const z=new Set;let M,B=0;function N(e,t,n,i,o,r,l,a=0){const c=16.666/i;let u="{\n";for(let e=0;e<=1;e+=c){const i=t+(n-t)*r(e);u+=100*e+`%{${l(i,1-i)}}\n`}const s=u+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(s)}_${a}`,f=h(e);z.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=v(e).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${s}`,p.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${o}ms 1 both`,B+=1,d}function I(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-i.length;o&&(e.style.animation=i.join(", "),B-=o,B||d((()=>{B||(z.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),z.clear())})))}function j(e){M=e}function A(){const e=function(){if(!M)throw new Error("Function called outside component initialization");return M}();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const o=S(t,n);i.slice().forEach((t=>{t.call(e,o)}))}}}function P(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const O=[],H=[],U=[],R=[],q=Promise.resolve();let G=!1;function Y(e){U.push(e)}function X(e){R.push(e)}const K=new Set;let Z,V=0;function W(){const e=M;do{for(;V<O.length;){const e=O[V];V++,j(e),Q(e.$$)}for(j(null),O.length=0,V=0;H.length;)H.pop()();for(let e=0;e<U.length;e+=1){const t=U[e];K.has(t)||(K.add(t),t())}U.length=0}while(O.length);for(;R.length;)R.pop()();G=!1,K.clear(),j(e)}function Q(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function J(e,t,n){e.dispatchEvent(S(`${t?"intro":"outro"}${n}`))}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function ie(){te.r||o(te.c),te=te.p}function oe(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function re(e,t,n,i){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}const le={duration:0};function ae(n,i,l,a){let c=i(n,l),u=a?0:1,d=null,f=null,p=null;function g(){p&&I(n,p)}function h(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function v(i){const{delay:r=0,duration:l=300,easing:a=t,tick:v=e,css:y}=c||le,b={start:s()+r,b:i};i||(b.group=te,te.r+=1),d||f?f=b:(y&&(g(),p=N(n,u,i,l,r,a,y)),i&&v(0,1),d=h(b,l),Y((()=>J(n,i,"start"))),m((e=>{if(f&&e>f.start&&(d=h(f,l),f=null,J(n,d.b,"start"),y&&(g(),p=N(n,u,d.b,d.duration,0,a,c.css))),d)if(e>=d.end)v(u=d.b,1-u),J(n,d.b,"end"),f||(d.b?g():--d.group.r||o(d.group.c)),d=null;else if(e>=d.start){const t=e-d.start;u=d.a+d.d*a(t/d.duration),v(u,1-u)}return!(!d&&!f)})))}return{run(e){r(c)?(Z||(Z=Promise.resolve(),Z.then((()=>{Z=null}))),Z).then((()=>{c=c(),v(e)})):v(e)},end(){g(),d=f=null}}}function ce(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function ue(e){e&&e.c()}function se(e,t,i,l){const{fragment:a,on_mount:c,on_destroy:u,after_update:s}=e.$$;a&&a.m(t,i),l||Y((()=>{const t=c.map(n).filter(r);u?u.push(...t):o(t),e.$$.on_mount=[]})),s.forEach(Y)}function de(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){-1===e.$$.dirty[0]&&(O.push(e),G||(G=!0,q.then(W)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(t,n,r,l,a,c,u,s=[-1]){const d=M;j(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:i(),dirty:s,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=r?r(t,n.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&fe(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&oe(t.$$.fragment),se(t,n.target,n.anchor,n.customElement),W()}j(d)}class me{$destroy(){de(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;
/*!
     2021 Jason Mulligan <jason.mulligan@avoidwork.com>
     @version 8.0.6
    */
var ge,he,ve=(ge=function(e,t){e.exports=function(){var e=/^(b|B)$/,t={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},n={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},i={floor:Math.floor,ceil:Math.ceil};function o(o){var r,l,a,c,u,s,d,f,p,m,g,h,v,y,b,w,x,$,E,_,k,L=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},C=[],F=0;if(isNaN(o))throw new TypeError("Invalid number");if(a=!0===L.bits,b=!0===L.unix,h=!0===L.pad,l=L.base||10,v=void 0!==L.round?L.round:b?1:2,d=void 0!==L.locale?L.locale:"",f=L.localeOptions||{},w=void 0!==L.separator?L.separator:"",x=void 0!==L.spacer?L.spacer:b?"":" ",E=L.symbols||{},$=2===l?L.standard||"iec":"jedec",g=L.output||"string",u=!0===L.fullform,s=L.fullforms instanceof Array?L.fullforms:[],r=void 0!==L.exponent?L.exponent:-1,_=i[L.roundingMethod]||Math.round,p=(m=Number(o))<0,c=l>2?1e3:1024,k=!1===isNaN(L.precision)?parseInt(L.precision,10):0,p&&(m=-m),(-1===r||isNaN(r))&&(r=Math.floor(Math.log(m)/Math.log(c)))<0&&(r=0),r>8&&(k>0&&(k+=8-r),r=8),"exponent"===g)return r;if(0===m)C[0]=0,y=C[1]=b?"":t[$][a?"bits":"bytes"][r];else{F=m/(2===l?Math.pow(2,10*r):Math.pow(1e3,r)),a&&(F*=8)>=c&&r<8&&(F/=c,r++);var T=Math.pow(10,r>0?v:0);C[0]=_(F*T)/T,C[0]===c&&r<8&&void 0===L.exponent&&(C[0]=1,r++),y=C[1]=10===l&&1===r?a?"kbit":"kB":t[$][a?"bits":"bytes"][r],b&&(C[1]=C[1].charAt(0),e.test(C[1])&&(C[0]=Math.floor(C[0]),C[1]=""))}if(p&&(C[0]=-C[0]),k>0&&(C[0]=C[0].toPrecision(k)),C[1]=E[C[1]]||C[1],!0===d?C[0]=C[0].toLocaleString():d.length>0?C[0]=C[0].toLocaleString(d,f):w.length>0&&(C[0]=C[0].toString().replace(".",w)),h&&!1===Number.isInteger(C[0])&&v>0){var D=w||".",S=C[0].toString().split(D),z=S[1]||"",M=z.length,B=v-M;C[0]="".concat(S[0]).concat(D).concat(z.padEnd(M+B,"0"))}return u&&(C[1]=s[r]?s[r]:n[$][r]+(a?"bit":"byte")+(1===C[0]?"":"s")),"array"===g?C:"object"===g?{value:C[0],symbol:C[1],exponent:r,unit:y}:C.join(x)}return o.partial=function(e){return function(t){return o(t,e)}},o}()},ge(he={exports:{}},he.exports),he.exports);
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function ye(e,t,n,i){return new(n||(n=Promise))((function(o,r){function l(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}c((i=i.apply(e,t||[])).next())}))}function be(e,t){var n,i,o,r,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){l=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){l.label=r[1];break}if(6===r[0]&&l.label<o[1]){l.label=o[1],o=r;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(r);break}o[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}function we(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,o,r=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)l.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return l}var xe=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function $e(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),i=xe.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var i=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof i&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var Ee,_e=[".DS_Store","Thumbs.db"];function ke(e){return(null!==e.target&&e.target.files?Fe(e.target.files):[]).map((function(e){return $e(e)}))}function Le(e,t){return ye(this,void 0,void 0,(function(){var n;return be(this,(function(i){switch(i.label){case 0:return e.items?(n=Fe(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(Te))]):[3,2];case 1:return[2,Ce(De(i.sent()))];case 2:return[2,Ce(Fe(e.files).map((function(e){return $e(e)})))]}}))}))}function Ce(e){return e.filter((function(e){return-1===_e.indexOf(e.name)}))}function Fe(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];t.push(i)}return t}function Te(e){if("function"!=typeof e.webkitGetAsEntry)return Se(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Me(t):Se(e)}function De(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(we(arguments[t]));return e}(e,Array.isArray(t)?De(t):[t])}),[])}function Se(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=$e(t);return Promise.resolve(n)}function ze(e){return ye(this,void 0,void 0,(function(){return be(this,(function(t){return[2,e.isDirectory?Me(e):Be(e)]}))}))}function Me(e){var t=e.createReader();return new Promise((function(e,n){var i=[];!function o(){var r=this;t.readEntries((function(t){return ye(r,void 0,void 0,(function(){var r,l,a;return be(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return r=c.sent(),e(r),[3,4];case 3:return l=c.sent(),n(l),[3,4];case 4:return[3,6];case 5:a=Promise.all(t.map(ze)),i.push(a),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function Be(e){return ye(this,void 0,void 0,(function(){return be(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var i=$e(n,e.fullPath);t(i)}),(function(e){n(e)}))}))]}))}))}!function(e){e[e.InvalidFileType=0]="InvalidFileType",e[e.FileSizeMaximumExceeded=1]="FileSizeMaximumExceeded",e[e.FileSizeMinimumNotMet=2]="FileSizeMinimumNotMet",e[e.FileCountExceeded=3]="FileCountExceeded"}(Ee||(Ee={}));const Ne={[Ee.InvalidFileType]:"invalid file type",[Ee.FileCountExceeded]:"file count exceeded",[Ee.FileSizeMinimumNotMet]:"min file size not met",[Ee.FileSizeMaximumExceeded]:"max file size exceeded"};class Ie extends Error{constructor(e,t,n){super(n),this.code=e,this.message=n,this.file=t,this.name=Ne[e]}}class je extends Ie{constructor(e,t,n){n||(n=`${e.name} is not an accepted file type (${e.type}`),super(Ee.InvalidFileType,e,n),"string"==typeof t&&(t=t.split(",")),this.allowed=t}}class Ae extends Ie{constructor(e,t,n){n=null!=n?n:`$file size ${e.size} does not meet the file size minimum of ${t}.`,super(Ee.FileSizeMinimumNotMet,e,n),this.minimum=t}}class Pe extends Ie{constructor(e,t,n){n=null!=n?n:`file size ${e.size} exceeds file size limit of ${t}.`,super(Ee.FileSizeMinimumNotMet,e,n)}}class Oe extends Ie{constructor(e,t,n){n=null!=n?n:`file count limit of ${t} exceeded`,super(Ee.FileCountExceeded,e,n),this.limit=t}}function He(e,t){let{fileLimit:n}=t;null==t.multiple||t.multiple||(n=1);let i=0;return e.reduce(((e,o)=>{let r=function(e,t){const{accept:n,minSize:i,maxSize:o}=t;return function(e,t){if(null!=t&&("string"==typeof t&&(t=t.split(",")),t.push("application/x-moz-file"),!function(e,t){if(!e||!t)return!0;const n=Array.isArray(t)?t:t.split(","),i=e.name||"",o=(e.type||"").toLowerCase(),r=o.replace(/\/.*$/,"");return n.some((e=>{const t=e.trim().toLowerCase();return"."===t.charAt(0)?i.toLowerCase().endsWith(t):t.endsWith("/*")?r===t.replace(/\/.*$/,""):o===t}))}(e,t)))return new je(e,t);return}(e,n)||function(e,{min:t,max:n}){return function(e,t){if(t&&e.size>t)return new Pe(e,t)}(e,n)||function(e,t){if(t&&e.size<t)return new Ae(e,t)}(e,t)}(e,{min:i,max:o})}(o,t);return null!=r?(e.rejected.push({file:o,error:r}),e):n>0&&i>=n?(r=new Oe(o,n),e.rejected.push({file:o,error:r}),e):(e.accepted.push(o),i+=1,e)}),{accepted:[],rejected:[]})}function Ue(e){return function(e){return"tagName"in e.target&&(t=e.target,"files"in t);var t}(e)?!!e.target.files.length:"dataTransfer"in e&&e.dataTransfer.types.some((e=>"Files"===e||"application/x-moz-file"===e))}async function Re(e){return(await function(e){return ye(this,void 0,void 0,(function(){return be(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?Le(e.dataTransfer,e.type):ke(e))];var n}))}))}(e)).map((e=>function(e){return"arrayBuffer"in e&&"size"in e}(e)?e:e.getAsFile()))}async function qe(e,t){return He(await Re(e),t)}function Ge(e){return"childNodes"in e}function Ye(){return"undefined"!=typeof window}function Xe(e){return e||void 0===e}function Ke(e,t){const n=t?{...t}:{};return n.disabled=function(e){return 0===e.fileLimit||void 0!==e.disabled&&e.disabled}(n),n.id=function(e,t){var n;if(null===(n=t.id)||void 0===n?void 0:n.length)return t.id;return e.id.length?e.id:void 0}(e,n),n.hideInput=Xe(n.hideInput),n.input=function(e,{input:t}){if(null!=t){if(function(e){var t;return"INPUT"===e.tagName&&"file"===(null===(t=e.getAttribute("type"))||void 0===t?void 0:t.toLowerCase())}(t))return t;throw new Error("input must be an HTMLInputElement with type file")}if("INPUT"===e.tagName)throw new Error("FileDrop: action must be used on a containing element, not the input.");const n=e.querySelectorAll("input[type='file']");if(!n.length){const t=document.createElement("input");return t.setAttribute("type","file"),t.style.display="none",t.tabIndex=-1,e.appendChild(t)}if(n.length>1)throw new Error("FileDrop: container node may only contain a single file input unless input is specified in the options");return n.item(0)}(e,n),n.multiple=function(e){return!!(e.fileLimit&&e.fileLimit>1)||(void 0===e.fileLimit||1!==e.fileLimit)&&(void 0===e.multiple||e.multiple)}(n),n.hideInput=Xe(n.hideInput),n.windowDrop=Ye()&&Xe(n.windowDrop),n.tabIndex=function(e,t){return t.disabled?-1:e.tabIndex>-1?e.tabIndex:void 0!==t.tabIndex?t.tabIndex:t.input.tabIndex>-1?t.input.tabIndex:t.hideInput?0:-1}(e,n),n.clickToUpload=Xe(n.clickToUpload),n.accept=function(e){var t,n;return void 0!==e.accept&&e.accept.length?Array.isArray(e.accept)?[...e.accept]:e.accept:(null===(t=e.input)||void 0===t?void 0:t.accept.length)?null===(n=e.input)||void 0===n?void 0:n.accept:void 0}(n),n}const Ze=function(e,t){function n(t,n){e.dispatchEvent(new CustomEvent(t,{detail:n}))}let i,o,r,l=!1,a=!1;async function c(e){e.preventDefault();n("filedrop",{method:"input",files:await qe(e,o),isFileDialogOpen:l,isDraggingFiles:a,event:r,id:o.id,options:o})}async function u(e){if(a=Ue(e),!a)return;e.preventDefault(),r=e;n("filedrop",{method:"drop",files:await qe(e,o),options:o,id:o.id,isFileDialogOpen:l,isDraggingFiles:a,event:r})}function s(){setTimeout((()=>{i.click()}),0)}function d(e){r=e," "!==e.key&&"Enter"!==e.key||(e.preventDefault(),s())}function f(){l=!0,n("filedialogopen",{isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}function p(e){Ge(e.target)&&i.isEqualNode(e.target)||(e.preventDefault(),r=e,s())}function m(e){a=Ue(e)}async function g(e){if(a=Ue(e),!a)return;a=!1;n("windowfiledragleave",{event:e,files:await Re(e),isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}async function h(e){if(e.preventDefault(),a=Ue(e),!a)return;n("windowfiledragover",{event:e,files:await Re(e),isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}async function v(e){if(a=Ue(e),!a)return;a=!0;n("filedragenter",{files:await Re(e),event:e,isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}async function y(e){if(a=Ue(e),!a)return;n("filedragleave",{event:e,files:await Re(e),isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}async function b(e){if(a=Ue(e),!a)return;n("filedragover",{event:e,files:await Re(e),isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}async function w(t){if(t.preventDefault(),a=Ue(t),!a)return;if(Ge(t.target)&&(e.isEqualNode(t.target)||e.contains(t.target)))return;if(!o.windowDrop)return;n("filedrop",{method:"drop",event:t,files:await qe(t,o),isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})}function x(){if(i&&l){l=!1;const e=t=>()=>{!(null==i?void 0:i.files.length)&&t<21?setTimeout(e(t+1),35):i.files.length?n("filedialogclose",{isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o}):n("filedialogcancel",{isDraggingFiles:a,isFileDialogOpen:l,id:o.id,options:o})};setTimeout(e(0),35)}}function $(t){var n;o=Ke(e,t),i=o.input,e.tabIndex=o.tabIndex,o.disabled?(e.classList.add("disabled"),E()):(e.classList.remove("disabled"),i.multiple=o.multiple,(null===(n=o.accept)||void 0===n?void 0:n.length)?Array.isArray(o.accept)?i.accept=o.accept.join(","):i.accept=o.accept:i.removeAttribute("accept"),i.autocomplete="off",o.hideInput&&(i.style.display="none"),Ye&&(e.addEventListener("dragenter",v),e.addEventListener("dragleave",y),e.addEventListener("dragover",b),e.addEventListener("drop",u),i.addEventListener("change",c),i.addEventListener("click",f),o.clickToUpload?e.addEventListener("click",p):e.removeEventListener("click",p),o.hideInput&&e.addEventListener("keydown",d),o.hideInput||o.clickToUpload||e.removeEventListener("keydown",d),window.addEventListener("focus",x),document.addEventListener("dragenter",m),document.addEventListener("dragleave",g),document.addEventListener("dragover",h),document.addEventListener("drop",w)))}function E(){e.removeEventListener("keydown",d),e.removeEventListener("dragenter",v),e.removeEventListener("dragleave",y),e.removeEventListener("dragover",b),e.removeEventListener("drop",u),e.removeEventListener("click",p),i.removeEventListener("change",c),i.removeEventListener("click",f),i.files=null,Ye&&(document.removeEventListener("dragover",h),document.removeEventListener("dragenter",m),document.removeEventListener("dragleave",g),document.removeEventListener("drop",w),window.removeEventListener("focus",x))}return $(t),{update(e){$(e||{})},destroy(){E()}}};function Ve(t){let n,i,l,a,u,s,d;const f=t[13].default,p=function(e,t,n,i){if(e){const o=c(e,t,n,i);return e[0](o)}}(f,t,t[12],null),m=p||function(e){let t,n,i,o,r=e[2]?"files":"a file ";return{c(){t=x("p"),n=x("span"),i=$("Drag & drop or select to upload "),o=$(r),L(n,"class","svelte-1r2u3jm"),L(t,"class","svelte-1r2u3jm")},m(e,r){y(e,t,r),g(t,n),g(n,i),g(n,o)},p(e,t){4&t&&r!==(r=e[2]?"files":"a file ")&&C(o,r)},d(e){e&&b(t)}}}(t);return{c(){n=x("label"),m&&m.c(),i=E(),l=x("input"),L(l,"type","file"),L(n,"id",t[0])},m(o,c){var f;y(o,n,c),m&&m.m(n,null),g(n,i),g(n,l),u=!0,s||(d=[(f=a=Ze.call(null,n,t[1]),f&&r(f.destroy)?f.destroy:e),k(n,"filedrop",t[3]("filedrop")),k(n,"filedialogcancel",t[3]("filedialogcancel")),k(n,"filedialogclose",t[3]("filedialogclose")),k(n,"filedialogopen",t[3]("filedialogopen")),k(n,"filedragenter",t[3]("filedragenter")),k(n,"filedragleave",t[3]("filedragleave")),k(n,"filedragover",t[3]("filedragover")),k(n,"windowfiledragenter",t[3]("windowfiledragenter")),k(n,"windowfiledragleave",t[3]("windowfiledragleave")),k(n,"windowfiledragover",t[3]("windowfiledragover")),k(n,"dragenter",t[14]),k(n,"dragleave",t[15]),k(n,"dragover",t[16])],s=!0)},p(e,[t]){p?p.p&&(!u||4096&t)&&function(e,t,n,i,o,r){if(o){const l=c(t,n,i,r);e.p(l,o)}}(p,f,e,e[12],u?function(e,t,n,i){if(e[2]&&i){const o=e[2](i(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|o[i];return e}return t.dirty|o}return t.dirty}(f,e[12],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[12]),null):m&&m.p&&(!u||4&t)&&m.p(e,u?t:-1),(!u||1&t)&&L(n,"id",e[0]),a&&r(a.update)&&2&t&&a.update.call(null,e[1])},i(e){u||(oe(m,e),u=!0)},o(e){re(m,e),u=!1},d(e){e&&b(n),m&&m.d(e),s=!1,o(d)}}}function We(e,t,n){let i,{$$slots:o={},$$scope:r}=t,{id:l}=t,{accept:a}=t,{multiple:c}=t,{disabled:u}=t,{maxSize:s}=t,{minSize:d}=t,{fileLimit:f}=t,{clickToUpload:p=!0}=t,{input:m}=t,g={};const h=A();return e.$$set=e=>{"id"in e&&n(0,l=e.id),"accept"in e&&n(4,a=e.accept),"multiple"in e&&n(5,c=e.multiple),"disabled"in e&&n(6,u=e.disabled),"maxSize"in e&&n(7,s=e.maxSize),"minSize"in e&&n(8,d=e.minSize),"fileLimit"in e&&n(9,f=e.fileLimit),"clickToUpload"in e&&n(10,p=e.clickToUpload),"input"in e&&n(11,m=e.input),"$$scope"in e&&n(12,r=e.$$scope)},e.$$.update=()=>{4081&e.$$.dirty&&n(1,g={id:l,accept:a,disabled:u,clickToUpload:p,maxSize:s,minSize:d,input:m,fileLimit:f,multiple:c}),544&e.$$.dirty&&n(2,i=(void 0===f||f>1)&&(void 0===c||c))},[l,g,i,function(e){return function(t){t.stopPropagation(),h(e,t.detail)}},a,c,u,s,d,f,p,m,r,o,function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)}]}class Qe extends me{constructor(e){super(),pe(this,e,We,Ve,l,{id:0,accept:4,multiple:5,disabled:6,maxSize:7,minSize:8,fileLimit:9,clickToUpload:10,input:11})}}function Je(e){const t=e-1;return t*t*t+1}var et={$:e=>"string"==typeof e?document.querySelector(e):e,extend:(...e)=>Object.assign(...e),cumulativeOffset(e){let t=0,n=0;do{t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:n}},directScroll:e=>e&&e!==document&&e!==document.body,scrollTop(e,t){let n=void 0!==t;return this.directScroll(e)?n?e.scrollTop=t:e.scrollTop:n?document.documentElement.scrollTop=document.body.scrollTop=t:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(e,t){let n=void 0!==t;return this.directScroll(e)?n?e.scrollLeft=t:e.scrollLeft:n?document.documentElement.scrollLeft=document.body.scrollLeft=t:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const tt={container:"body",duration:500,delay:0,offset:0,easing:function(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1},onStart:e,onDone:e,onAborting:e,scrollX:!1,scrollY:!0},nt=e=>{let{offset:t,duration:n,delay:i,easing:o,x:r=0,y:l=0,scrollX:a,scrollY:c,onStart:u,onDone:d,container:f,onAborting:p,element:g}=e;"function"==typeof t&&(t=t());var h=et.cumulativeOffset(f),v=g?et.cumulativeOffset(g):{top:l,left:r},y=et.scrollLeft(f),b=et.scrollTop(f),w=v.left-h.left+t,x=v.top-h.top+t,$=w-y,E=x-b;let _=!0,k=!1,L=s()+i,C=L+n;function F(e){e||(k=!0,u(g,{x:r,y:l}))}function T(e){!function(e,t,n){a&&et.scrollLeft(e,n),c&&et.scrollTop(e,t)}(f,b+E*e,y+$*e)}function D(){_=!1}return m((e=>{if(!k&&e>=L&&F(!1),k&&e>=C&&(T(1),D(),d(g,{x:r,y:l})),!_)return p(g,{x:r,y:l}),!1;if(k){T(0+1*o((e-L)/n))}return!0})),F(i),T(0),D},it=e=>{if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;{let e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}},ot=e=>(e=(e=>{let t=et.extend({},tt,e);return t.container=et.$(t.container),t.element=et.$(t.element),t})(e),nt(et.extend(e,{element:null,y:it(e.container)})));function rt(e,{delay:n=0,duration:i=400,easing:o=t}={}){const r=+getComputedStyle(e).opacity;return{delay:n,duration:i,easing:o,css:e=>"opacity: "+e*r}}function lt(e,{delay:t=0,duration:n=400,easing:i=Je,x:o=0,y:r=0,opacity:l=0}={}){const a=getComputedStyle(e),c=+a.opacity,u="none"===a.transform?"":a.transform,s=c*(1-l);return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*o}px, ${(1-e)*r}px);\n\t\t\topacity: ${c-s*t}`}}function at(e){let t;function n(e,t){return e[0]?ut:ct}let i=n(e),o=i(e);return{c(){o.c(),t=_()},m(e,n){o.m(e,n),y(e,t,n)},p(e,r){i===(i=n(e))&&o?o.p(e,r):(o.d(1),o=i(e),o&&(o.c(),o.m(t.parentNode,t)))},d(e){o.d(e),e&&b(t)}}}function ct(t){let n;return{c(){n=x("p"),n.textContent="the domain is not avaible, ="},m(e,t){y(e,n,t)},p:e,d(e){e&&b(n)}}}function ut(t){let n;return{c(){n=x("p"),n.textContent=`the domain is avaible!  it costs $${Math.trunc(10*Math.random(100),1)} per year`},m(e,t){y(e,n,t)},p:e,d(e){e&&b(n)}}}function st(e){let t,n,i,r,l,a,c,u,s="undefined"!==e[1]&&at(e);return{c(){t=x("input"),i=x("button"),i.textContent="search",r=E(),s&&s.c(),l=_(),L(t,"type","text")},m(n,o){y(n,t,o),F(t,e[1]),y(n,i,o),y(n,r,o),s&&s.m(n,o),y(n,l,o),a=!0,c||(u=[k(t,"input",e[2]),k(t,"change",e[3]),k(i,"click",e[4])],c=!0)},p(e,[n]){2&n&&t.value!==e[1]&&F(t,e[1]),"undefined"!==e[1]?s?s.p(e,n):(s=at(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},i(e){a||(Y((()=>{n||(n=ae(t,rt,{},!0)),n.run(1)})),a=!0)},o(e){n||(n=ae(t,rt,{},!1)),n.run(0),a=!1},d(e){e&&b(t),e&&n&&n.end(),e&&b(i),e&&b(r),s&&s.d(e),e&&b(l),c=!1,o(u)}}}function dt(e,t,n){let{domainBox:i}=t,{isDomainFound:o}=t;return e.$$set=e=>{"domainBox"in e&&n(1,i=e.domainBox),"isDomainFound"in e&&n(0,o=e.isDomainFound)},e.$$.update=()=>{e.$$.dirty},[o,i,function(){i=this.value,n(1,i)},()=>{n(0,o=i?.includes(".com")),n(0,o)},()=>{ot()}]}class ft extends me{constructor(e){super(),pe(this,e,dt,st,l,{domainBox:1,isDomainFound:0})}}function pt(e,t,n){const i=e.slice();return i[21]=t[n],i}function mt(e,t,n){const i=e.slice();return i[24]=t[n],i}function gt(e){let t,n,i,r,l,a,c,u,s,d,f,p,m,h,v,$,L,C,F,D,S,z,M,B,N,I,j=e[0].accepted,A=[];for(let t=0;t<j.length;t+=1)A[t]=ht(mt(e,j,t));let P=e[0].rejected,O=[];for(let t=0;t<P.length;t+=1)O[t]=vt(pt(e,P,t));const H=[bt,yt],U=[];function R(e,t){return"paid"===e[3]?0:1}return S=R(e),z=U[S]=H[S](e),{c(){for(let e=0;e<A.length;e+=1)A[e].c();t=E();for(let e=0;e<O.length;e+=1)O[e].c();n=E(),i=x("h1"),i.textContent="First decision!",r=E(),l=x("h3"),l.textContent="What do you want your website's link to look like?",a=E(),c=x("h2"),c.textContent="Too options:",u=E(),s=x("h4"),s.innerHTML="EX: <em>oran.com</em> (paid)",d=E(),f=x("h3"),f.textContent="or",p=E(),m=x("h4"),m.innerHTML="EX: <em>oran.hostingmenis.app.dev.com</em> (free)",h=E(),v=x("select"),$=x("option"),$.textContent="Choose which option you want",L=x("option"),L.textContent="Paid custom website link (paid monthly)",C=x("option"),C.textContent="Free Custom website link ($10 once for hosting)",F=x("option"),F.textContent="non Custom website link & free hosting but no custom domain allowed",D=E(),z.c(),M=_(),$.__value="none",$.value=$.__value,L.__value="paid",L.value=L.__value,C.__value="custom",C.value=C.__value,F.__value="non-custom",F.value=F.__value,void 0===e[3]&&Y((()=>e[9].call(v)))},m(o,b){for(let e=0;e<A.length;e+=1)A[e].m(o,b);y(o,t,b);for(let e=0;e<O.length;e+=1)O[e].m(o,b);y(o,n,b),y(o,i,b),y(o,r,b),y(o,l,b),y(o,a,b),y(o,c,b),y(o,u,b),y(o,s,b),y(o,d,b),y(o,f,b),y(o,p,b),y(o,m,b),y(o,h,b),y(o,v,b),g(v,$),g(v,L),g(v,C),g(v,F),T(v,e[3]),y(o,D,b),U[S].m(o,b),y(o,M,b),B=!0,N||(I=[k(v,"change",e[9]),k(v,"click",e[10])],N=!0)},p(e,i){if(1&i){let n;for(j=e[0].accepted,n=0;n<j.length;n+=1){const o=mt(e,j,n);A[n]?A[n].p(o,i):(A[n]=ht(o),A[n].c(),A[n].m(t.parentNode,t))}for(;n<A.length;n+=1)A[n].d(1);A.length=j.length}if(1&i){let t;for(P=e[0].rejected,t=0;t<P.length;t+=1){const o=pt(e,P,t);O[t]?O[t].p(o,i):(O[t]=vt(o),O[t].c(),O[t].m(n.parentNode,n))}for(;t<O.length;t+=1)O[t].d(1);O.length=P.length}8&i&&T(v,e[3]);let o=S;S=R(e),S===o?U[S].p(e,i):(ne(),re(U[o],1,1,(()=>{U[o]=null})),ie(),z=U[S],z?z.p(e,i):(z=U[S]=H[S](e),z.c()),oe(z,1),z.m(M.parentNode,M))},i(e){B||(oe(z),B=!0)},o(e){re(z),B=!1},d(e){w(A,e),e&&b(t),w(O,e),e&&b(n),e&&b(i),e&&b(r),e&&b(l),e&&b(a),e&&b(c),e&&b(u),e&&b(s),e&&b(d),e&&b(f),e&&b(p),e&&b(m),e&&b(h),e&&b(v),e&&b(D),U[S].d(e),e&&b(M),N=!1,o(I)}}}function ht(e){let t,n,i,o,r,l,a,c=e[24].name+"",u=ve(e[24].size)+"";return{c(){t=x("h5"),t.textContent="Accepted files",n=E(),i=x("ul"),o=x("li"),r=$(c),l=$(" - "),a=$(u)},m(e,c){y(e,t,c),y(e,n,c),y(e,i,c),g(i,o),g(o,r),g(o,l),g(o,a)},p(e,t){1&t&&c!==(c=e[24].name+"")&&C(r,c),1&t&&u!==(u=ve(e[24].size)+"")&&C(a,u)},d(e){e&&b(t),e&&b(n),e&&b(i)}}}function vt(e){let t,n,i,o,r,l,a,c=e[21].file.name+"",u=e[21].error.message+"";return{c(){t=x("h5"),t.textContent="Rejected files",n=E(),i=x("ul"),o=x("li"),r=$(c),l=$(" - "),a=$(u)},m(e,c){y(e,t,c),y(e,n,c),y(e,i,c),g(i,o),g(o,r),g(o,l),g(o,a)},p(e,t){1&t&&c!==(c=e[21].file.name+"")&&C(r,c),1&t&&u!==(u=e[21].error.message+"")&&C(a,u)},d(e){e&&b(t),e&&b(n),e&&b(i)}}}function yt(t){let n;return{c(){n=x("p"),n.textContent="Please select a choice"},m(e,t){y(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function bt(e){let t,n,i,o,r,l,a,c,u;function s(t){e[11](t)}function d(t){e[12](t)}let f={};void 0!==e[1]&&(f.domainBox=e[1]),void 0!==e[4]&&(f.isDomainFound=e[4]),o=new ft({props:f}),H.push((()=>ce(o,"domainBox",s))),H.push((()=>ce(o,"isDomainFound",d)));let p=e[4]&&wt(e);return{c(){t=x("div"),n=x("p"),n.textContent="Search to see if the website link name is avaible>",i=E(),ue(o.$$.fragment),a=E(),p&&p.c()},m(e,r){y(e,t,r),g(t,n),g(t,i),se(o,t,null),g(t,a),p&&p.m(t,null),u=!0},p(e,n){const i={};!r&&2&n&&(r=!0,i.domainBox=e[1],X((()=>r=!1))),!l&&16&n&&(l=!0,i.isDomainFound=e[4],X((()=>l=!1))),o.$set(i),e[4]?p?(p.p(e,n),16&n&&oe(p,1)):(p=wt(e),p.c(),oe(p,1),p.m(t,null)):p&&(ne(),re(p,1,1,(()=>{p=null})),ie())},i(e){u||(oe(o.$$.fragment,e),oe(p),Y((()=>{c||(c=ae(t,lt,{y:200,duration:1e3},!0)),c.run(1)})),u=!0)},o(e){re(o.$$.fragment,e),re(p),c||(c=ae(t,lt,{y:200,duration:1e3},!1)),c.run(0),u=!1},d(e){e&&b(t),de(o),p&&p.d(),e&&c&&c.end()}}}function wt(e){let t,n,i,o,r,l,a,c,u,s,d,f,p,m=e[6]?"":"",h=e[5]&&xt(e);return{c(){t=x("h3"),t.textContent="Great! you found your kickass website name, now lets buy it (also in webspeak called domain registration)",n=E(),i=x("button"),o=$("Buy domain "),r=$(e[1]),l=E(),a=x("span"),c=$(m),u=E(),h&&h.c(),s=_()},m(m,v){y(m,t,v),y(m,n,v),y(m,i,v),g(i,o),g(i,r),y(m,l,v),y(m,a,v),g(a,c),y(m,u,v),h&&h.m(m,v),y(m,s,v),d=!0,f||(p=k(i,"click",e[13]),f=!0)},p(e,t){(!d||2&t)&&C(r,e[1]),(!d||64&t)&&m!==(m=e[6]?"":"")&&C(c,m),e[5]?h?(h.p(e,t),32&t&&oe(h,1)):(h=xt(e),h.c(),oe(h,1),h.m(s.parentNode,s)):h&&(ne(),re(h,1,1,(()=>{h=null})),ie())},i(e){d||(oe(h),d=!0)},o(e){re(h),d=!1},d(e){e&&b(t),e&&b(n),e&&b(i),e&&b(l),e&&b(a),e&&b(u),h&&h.d(e),e&&b(s),f=!1,p()}}}function xt(e){let t,n,i,r,l,a,c,u,s,d,f,p,m,h,v=e[2]&&$t(e);return{c(){t=x("h1"),t.textContent="Next Step",n=E(),i=x("h3"),i.textContent="Choose what style you want your site to look like",r=E(),l=x("select"),a=x("option"),a.textContent="Select Style",c=x("option"),c.textContent="Caviler",u=x("option"),u.textContent="Velvet",s=x("option"),s.textContent="Buroke",d=E(),v&&v.c(),f=_(),a.__value="",a.value=a.__value,c.__value="Caviler",c.value=c.__value,u.__value="Velvet",u.value=u.__value,s.__value="Buroke",s.value=s.__value,void 0===e[2]&&Y((()=>e[14].call(l)))},m(o,b){y(o,t,b),y(o,n,b),y(o,i,b),y(o,r,b),y(o,l,b),g(l,a),g(l,c),g(l,u),g(l,s),T(l,e[2]),y(o,d,b),v&&v.m(o,b),y(o,f,b),p=!0,m||(h=[k(l,"change",e[14]),k(l,"click",e[15])],m=!0)},p(e,t){4&t&&T(l,e[2]),e[2]?v?(v.p(e,t),4&t&&oe(v,1)):(v=$t(e),v.c(),oe(v,1),v.m(f.parentNode,f)):v&&(ne(),re(v,1,1,(()=>{v=null})),ie())},i(e){p||(oe(v),p=!0)},o(e){re(v),p=!1},d(e){e&&b(t),e&&b(n),e&&b(i),e&&b(r),e&&b(l),e&&b(d),v&&v.d(e),e&&b(f),m=!1,o(h)}}}function $t(e){let t,n,i,r,l,c,u,s,d,f,p,m,h,v,w,_,F,T,D,S,z,M,B,N,I,j,A,P,O,H,U,R,q,G,X,K,Z,V,W,Q;return{c(){var o,g;t=x("div"),n=x("h3"),i=$("Awesome you selected "),r=$(e[2]),l=$(", great choice!"),c=E(),u=x("h3"),u.textContent="Here's a preview of what your site looks like",s=E(),d=x("img"),p=E(),m=x("button"),h=$("Preview "),v=$(e[1]),w=$(".app.com"),_=E(),F=x("h1"),F.textContent="Next Step",T=E(),D=x("h3"),D.textContent="Pay for site",S=E(),z=x("button"),z.textContent="Pay now",M=E(),B=x("button"),N=$("View Live Site!"),A=E(),P=x("h1"),O=$("Congraduations! you now are the proud owner of "),H=$(e[1]),U=E(),R=x("h3"),R.textContent="Click Copy button to add your website link to your clipboard",q=E(),G=x("input"),X=E(),K=x("button"),K.innerHTML='<img alt="copy text icon" height="30" src="https://www.svgrepo.com/show/3110/copy.svg"/>',L(d,"alt","preview of website"),L(d,"width","400"),o=d.src,g=f="https://i.imgur.com/mmBjBQz.png",a||(a=document.createElement("a")),a.href=g,o!==a.href&&L(d,"src","https://i.imgur.com/mmBjBQz.png"),L(m,"href","https://orancollins.com/"),L(m,"target","popup"),B.disabled=I=!e[7],L(B,"href","https://orancollins.com/"),L(B,"target","popup"),G.value=e[1]},m(o,a){y(o,t,a),g(t,n),g(n,i),g(n,r),g(n,l),g(t,c),g(t,u),g(t,s),g(t,d),g(t,p),g(t,m),g(m,h),g(m,v),g(m,w),g(t,_),g(t,F),g(t,T),g(t,D),g(t,S),g(t,z),g(t,M),g(t,B),g(B,N),g(t,A),g(t,P),g(P,O),g(P,H),g(t,U),g(t,R),g(t,q),g(t,G),g(t,X),g(t,K),V=!0,W||(Q=[k(m,"click",e[16]),k(z,"click",e[17]),k(B,"click",e[18]),k(K,"click",e[19])],W=!0)},p(e,t){(!V||4&t)&&C(r,e[2]),(!V||2&t)&&C(v,e[1]),(!V||128&t&&I!==(I=!e[7]))&&(B.disabled=I),(!V||2&t)&&C(H,e[1]),(!V||2&t&&G.value!==e[1])&&(G.value=e[1])},i(e){V||(Y((()=>{j||(j=ae(B,lt,{x:500,duration:1e3},!0)),j.run(1)})),Y((()=>{Z||(Z=ae(t,lt,{y:500,duration:1e3},!0)),Z.run(1)})),V=!0)},o(e){j||(j=ae(B,lt,{x:500,duration:1e3},!1)),j.run(0),Z||(Z=ae(t,lt,{y:500,duration:1e3},!1)),Z.run(0),V=!1},d(e){e&&b(t),e&&j&&j.end(),e&&Z&&Z.end(),W=!1,o(Q)}}}function Et(e){let t,n,i,o,r,l,a,c;r=new Qe({}),r.$on("filedrop",e[8]);let u=e[0]&&gt(e);return{c(){t=x("h1"),t.innerHTML='<a href="https://github.com/chanced/filedrop-svelte">Make your own website</a>',n=E(),i=x("h3"),i.textContent="Upload a word doc with a photo and some text you would like on your website and get it hosted!",o=E(),ue(r.$$.fragment),l=E(),u&&u.c(),a=_()},m(e,s){y(e,t,s),y(e,n,s),y(e,i,s),y(e,o,s),se(r,e,s),y(e,l,s),u&&u.m(e,s),y(e,a,s),c=!0},p(e,[t]){e[0]?u?(u.p(e,t),1&t&&oe(u,1)):(u=gt(e),u.c(),oe(u,1),u.m(a.parentNode,a)):u&&(ne(),re(u,1,1,(()=>{u=null})),ie())},i(e){c||(oe(r.$$.fragment,e),oe(u),c=!0)},o(e){re(r.$$.fragment,e),re(u),c=!1},d(e){e&&b(t),e&&b(n),e&&b(i),e&&b(o),de(r,e),e&&b(l),u&&u.d(e),e&&b(a)}}}function _t(e,t,n){let i,o,r,l,a,c=!1,u=!1,s=!1;return[i,o,r,l,a,c,u,s,e=>n(0,i=e.detail.files),function(){l=D(this),n(3,l)},()=>{ot()},function(e){o=e,n(1,o)},function(e){a=e,n(4,a)},()=>{confirm(`do you really want to buy ${o}?`),alert("k, im buying it now."),alert("done!"),n(6,u=!0),n(5,c=!0),ot()},function(){r=D(this),n(2,r)},()=>{ot()},()=>(window.open("https://orancollins.com/","popup","width=600,height=600"),!1),()=>{prompt("Credit card number"),confirm("Do you want to pay $14 bucks?"),alert("paid!"),n(7,s=!0)},()=>(window.open("https://orancollins.com/","popup","width=600,height=600"),!1),()=>{navigator.clipboard.writeText({domainBox:o})}]}return new class extends me{constructor(e){super(),pe(this,e,_t,Et,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
