(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9029)}])},2925:function(t,e,i){"use strict";i.d(e,{K:function(){return s}});var n=i(5033);let s=()=>t=>{(0,n.eN)(n.PY,{event_label:t}),window.open(t,"_blank")}},9029:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return R}});var n=i(5893),s=i(7294);let r="http://www.w3.org/2000/svg";class o{constructor(t){this.seed=t}next(){return this.seed?(2147483648-1&(this.seed=Math.imul(48271,this.seed)))/2147483648:Math.random()}}function a(t,e,i,n,s){return{type:"path",ops:f(t,e,i,n,s)}}function h(t,e,i){let n=(t||[]).length;if(n>2){let s=[];for(let e=0;e<n-1;e++)s.push(...f(t[e][0],t[e][1],t[e+1][0],t[e+1][1],i));return e&&s.push(...f(t[n-1][0],t[n-1][1],t[0][0],t[0][1],i)),{type:"path",ops:s}}return 2===n?a(t[0][0],t[0][1],t[1][0],t[1][1],i):{type:"path",ops:[]}}function l(t,e,i,n,s){return function(t,e,i,n){let[s,r]=m(n.increment,t,e,n.rx,n.ry,1,n.increment*c(.1,c(.4,1,i),i),i),o=p(s,null,i);if(!i.disableMultiStroke){let[s]=m(n.increment,t,e,n.rx,n.ry,1.5,0,i),r=p(s,null,i);o=o.concat(r)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}(t,e,s,function(t,e,i){let n=Math.max(i.curveStepCount,i.curveStepCount/Math.sqrt(200)*Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2))),s=Math.abs(t/2),r=Math.abs(e/2),o=1-i.curveFitting;return s+=d(s*o,i),r+=d(r*o,i),{increment:2*Math.PI/n,rx:s,ry:r}}(i,n,s)).opset}function u(t){return t.randomizer||(t.randomizer=new o(t.seed||0)),t.randomizer.next()}function c(t,e,i,n=1){return i.roughness*n*(u(i)*(e-t)+t)}function d(t,e,i=1){return c(-t,t,e,i)}function f(t,e,i,n,s,r=!1){let o=r?s.disableMultiStrokeFill:s.disableMultiStroke,a=g(t,e,i,n,s,!0,!1);if(o)return a;let h=g(t,e,i,n,s,!0,!0);return a.concat(h)}function g(t,e,i,n,s,r,o){let a=Math.pow(t-i,2)+Math.pow(e-n,2),h=Math.sqrt(a),l=1;l=h<200?1:h>500?.4:-.0016668*h+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>a&&(c=h/10);let f=c/2,g=.2+.2*u(s),p=s.bowing*s.maxRandomnessOffset*(n-e)/200,m=s.bowing*s.maxRandomnessOffset*(t-i)/200;p=d(p,s,l),m=d(m,s,l);let _=[],v=()=>d(f,s,l),w=()=>d(c,s,l);return r&&(o?_.push({op:"move",data:[t+v(),e+v()]}):_.push({op:"move",data:[t+d(c,s,l),e+d(c,s,l)]})),o?_.push({op:"bcurveTo",data:[p+t+(i-t)*g+v(),m+e+(n-e)*g+v(),p+t+2*(i-t)*g+v(),m+e+2*(n-e)*g+v(),i+v(),n+v()]}):_.push({op:"bcurveTo",data:[p+t+(i-t)*g+w(),m+e+(n-e)*g+w(),p+t+2*(i-t)*g+w(),m+e+2*(n-e)*g+w(),i+w(),n+w()]}),_}function p(t,e,i){let n=t.length,s=[];if(n>3){let r=[],o=1-i.curveTightness;s.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){let i=t[e];r[0]=[i[0],i[1]],r[1]=[i[0]+(o*t[e+1][0]-o*t[e-1][0])/6,i[1]+(o*t[e+1][1]-o*t[e-1][1])/6],r[2]=[t[e+1][0]+(o*t[e][0]-o*t[e+2][0])/6,t[e+1][1]+(o*t[e][1]-o*t[e+2][1])/6],r[3]=[t[e+1][0],t[e+1][1]],s.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(e&&2===e.length){let t=i.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+d(t,i),e[1]+d(t,i)]})}}else 3===n?(s.push({op:"move",data:[t[1][0],t[1][1]]}),s.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&s.push(...f(t[0][0],t[0][1],t[1][0],t[1][1],i));return s}function m(t,e,i,n,s,r,o,a){let h=[],l=[],u=d(.5,a)-Math.PI/2;l.push([d(r,a)+e+.9*n*Math.cos(u-t),d(r,a)+i+.9*s*Math.sin(u-t)]);for(let o=u;o<2*Math.PI+u-.01;o+=t){let t=[d(r,a)+e+n*Math.cos(o),d(r,a)+i+s*Math.sin(o)];h.push(t),l.push(t)}return l.push([d(r,a)+e+n*Math.cos(u+2*Math.PI+.5*o),d(r,a)+i+s*Math.sin(u+2*Math.PI+.5*o)]),l.push([d(r,a)+e+.98*n*Math.cos(u+o),d(r,a)+i+.98*s*Math.sin(u+o)]),l.push([d(r,a)+e+.9*n*Math.cos(u+.5*o),d(r,a)+i+.9*s*Math.sin(u+.5*o)]),[l,h]}function _(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}class v{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(2147483648*Math.random()),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){let t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();let t=this._svg=document.createElementNS(r,"svg");t.setAttribute("class","rough-annotation");let e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";let i="highlight"===this._config.type;if(this._e.insertAdjacentElement(i?"beforebegin":"afterend",t),this._state="not-showing",i){let t=window.getComputedStyle(this._e).position;t&&"static"!==t||(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(let e of t)e.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){let t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){let i=(t,e)=>Math.round(t)===Math.round(e);return i(t.x,e.x)&&i(t.y,e.y)&&i(t.w,e.w)&&i(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let i=this._config;e&&((i=JSON.parse(JSON.stringify(this._config))).animate=!1);let n=this.rects(),s=0;n.forEach(t=>s+=t.w);let o=i.animationDuration||800,u=0;for(let e=0;e<n.length;e++){let c=o*(n[e].w/s);(function(t,e,i,n,s,o){let u=[],c=i.strokeWidth||2,d=function(t){let e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)&&e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}return[5,5,5,5]}(i),f=void 0===i.animate||!!i.animate,g=i.iterations||2,p=i.rtl?1:0,m=_("single",o);switch(i.type){case"underline":{let t=e.y+e.h+d[2];for(let i=p;i<g+p;i++)i%2?u.push(a(e.x+e.w,t,e.x,t,m)):u.push(a(e.x,t,e.x+e.w,t,m));break}case"strike-through":{let t=e.y+e.h/2;for(let i=p;i<g+p;i++)i%2?u.push(a(e.x+e.w,t,e.x,t,m)):u.push(a(e.x,t,e.x+e.w,t,m));break}case"box":{let t=e.x-d[3],i=e.y-d[0],n=e.w+(d[1]+d[3]),s=e.h+(d[0]+d[2]);for(let e=0;e<g;e++)u.push(h([[t,i],[t+n,i],[t+n,i+s],[t,i+s]],!0,m));break}case"bracket":{let t=Array.isArray(i.brackets)?i.brackets:i.brackets?[i.brackets]:["right"],n=e.x-2*d[3],s=e.x+e.w+2*d[1],r=e.y-2*d[0],o=e.y+e.h+2*d[2];for(let i of t){let t;switch(i){case"bottom":t=[[n,e.y+e.h],[n,o],[s,o],[s,e.y+e.h]];break;case"top":t=[[n,e.y],[n,r],[s,r],[s,e.y]];break;case"left":t=[[e.x,r],[n,r],[n,o],[e.x,o]];break;case"right":t=[[e.x+e.w,r],[s,r],[s,o],[e.x+e.w,o]]}t&&u.push(h(t,!1,m))}break}case"crossed-off":{let t=e.x,i=e.y,n=t+e.w,s=i+e.h;for(let e=p;e<g+p;e++)e%2?u.push(a(n,s,t,i,m)):u.push(a(t,i,n,s,m));for(let e=p;e<g+p;e++)e%2?u.push(a(t,s,n,i,m)):u.push(a(n,i,t,s,m));break}case"circle":{let t=_("double",o),i=e.w+(d[1]+d[3]),n=e.h+(d[0]+d[2]),s=e.x-d[3]+i/2,r=e.y-d[0]+n/2,a=Math.floor(g/2),h=g-2*a;for(let e=0;e<a;e++)u.push(l(s,r,i,n,t));for(let t=0;t<h;t++)u.push(l(s,r,i,n,m));break}case"highlight":{let t=_("highlight",o);c=.95*e.h;let i=e.y+e.h/2;for(let n=p;n<g+p;n++)n%2?u.push(a(e.x+e.w,i,e.x,i,t)):u.push(a(e.x,i,e.x+e.w,i,t))}}if(u.length){let e=function(t){let e=[];for(let i of t){let t="";for(let n of i.ops){let i=n.data;switch(n.op){case"move":t.trim()&&e.push(t.trim()),t=`M${i[0]} ${i[1]} `;break;case"bcurveTo":t+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":t+=`L${i[0]} ${i[1]} `}}t.trim()&&e.push(t.trim())}return e}(u),o=[],a=[],h=0,l=(t,e,i)=>t.setAttribute(e,i);for(let n of e){let e=document.createElementNS(r,"path");if(l(e,"d",n),l(e,"fill","none"),l(e,"stroke",i.color||"currentColor"),l(e,"stroke-width",""+c),f){let t=e.getTotalLength();o.push(t),h+=t}t.appendChild(e),a.push(e)}if(f){let t=0;for(let e=0;e<a.length;e++){let i=a[e],r=o[e],l=h?s*(r/h):0,u=n+t,c=i.style;c.strokeDashoffset=""+r,c.strokeDasharray=""+r,c.animation=`rough-notation-dash ${l}ms ease-out ${u}ms forwards`,t+=l}}}})(t,n[e],i,u+this._animationDelay,c,this._seed),u+=c}this._lastSizes=n,this._state="showing"}rects(){let t=[];if(this._svg){if(this._config.multiline){let e=this._e.getClientRects();for(let i=0;i<e.length;i++)t.push(this.svgRect(this._svg,e[i]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()))}return t}svgRect(t,e){let i=t.getBoundingClientRect();return{x:(e.x||e.left)-(i.x||i.left),y:(e.y||e.top)-(i.y||i.top),w:e.width,h:e.height}}}/*! *****************************************************************************
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
***************************************************************************** */var w=function(){return(w=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},b=(0,s.createContext)(null),x=(0,s.createContext)(null),y=function(t,e){var i=(0,s.useContext)(b),n=(0,s.useContext)(x),r=(0,s.useRef)({annotation:t,context:i,dispatch:n,order:e});(0,s.useEffect)(function(){var t=r.current,e=t.annotation,i=t.context,n=t.dispatch,s=t.order;if(i&&n)return n({type:"ADD",payload:{annotation:e,order:s}})},[])},k=function(t){var e=t.animate,i=void 0===e||e,n=t.animationDelay,r=void 0===n?0:n,o=t.animationDuration,a=void 0===o?800:o,h=t.brackets,l=t.children,u=t.color,c=t.customElement,d=t.getAnnotationObject,f=t.iterations,g=t.multiline,p=t.order,m=t.padding,_=void 0===m?5:m,b=t.show,x=void 0!==b&&b,k=t.strokeWidth,M=void 0===k?1:k,O=t.type,C=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)0>e.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]]);return i}(t,["animate","animationDelay","animationDuration","brackets","children","color","customElement","getAnnotationObject","iterations","multiline","order","padding","show","strokeWidth","type"]),S=(0,s.useRef)(null),E=(0,s.useRef)(),R=(0,s.useRef)({playing:!1,timeout:null}),z=(0,s.useRef)({animate:i,animationDuration:a,brackets:h,color:u,getAnnotationObject:d,iterations:void 0===f?2:f,multiline:void 0!==g&&g,padding:_,strokeWidth:M,type:void 0===O?"underline":O}),N=(0,s.useCallback)(function(){R.current.timeout||(R.current.timeout=window.setTimeout(function(){var t,e;R.current.playing=!0,null===(e=null===(t=E.current)||void 0===t?void 0:t.show)||void 0===e||e.call(t),window.setTimeout(function(){R.current.playing=!1,R.current.timeout=null},a)},r))},[r,a]),j=(0,s.useCallback)(function(){var t,e;null===(e=null===(t=E.current)||void 0===t?void 0:t.hide)||void 0===e||e.call(t),R.current.playing=!1,R.current.timeout&&(clearTimeout(R.current.timeout),R.current.timeout=null)},[]);return y({getAnnotation:(0,s.useCallback)(function(){return E.current},[E]),show:N,hide:j},"string"==typeof p?parseInt(p):p),(0,s.useEffect)(function(){var t,e=z.current,i=e.getAnnotationObject;return E.current=(t=S.current,new v(t,e)),i&&i(E.current),function(){var t,e;null===(e=null===(t=E.current)||void 0===t?void 0:t.remove)||void 0===e||e.call(t)}},[]),(0,s.useEffect)(function(){x?N():j()},[E,x,r,R,a,N,j]),(0,s.useEffect)(function(){E.current&&(E.current.animate=i,E.current.animationDuration=a,E.current.color=u,E.current.strokeWidth=M,E.current.padding=_)},[E,i,a,u,M,_]),s.createElement(void 0===c?"span":c,w({ref:S},C),l)},M=i(221),O=i(2925),C=i(4082);let S=()=>{let{isDark:t,theme:e}=(0,M.T)(),i=(0,O.K)();return(0,n.jsxs)("div",{className:"mt-20",children:[(0,n.jsx)("h1",{className:"text-4xl font-normal",children:"Anas Araid"}),(0,n.jsxs)("h3",{className:"text-xl mt-12 mb-8 font-normal",children:["Multidisciplinary frontend developer, ",(0,n.jsx)(k,{type:"crossed-off",animationDuration:1500,show:!0,children:"designer"})," and firefighter based in"," ",(0,n.jsx)("a",{onClick:()=>i("https://goo.gl/maps/6fnYAANFEEsi1Mce7"),className:(0,C.x)("cursor-pointer font-medium text-gradient bg-gradient-to-br",e.gradientText),children:(0,n.jsx)("b",{className:"font-medium",children:"Trento"})}),"."]}),(0,n.jsxs)("h3",{className:"text-xl font-normal",children:["Crafting digital products at"," ",(0,n.jsx)("a",{onClick:()=>i("https://belkadigital.com"),className:"cursor-pointer font-medium 0",children:(0,n.jsx)("b",{className:(0,C.x)("font-medium underline--magical pt-1",t?"underline--dark":"underline--light"),children:"Belka"})}),"."]})]})},E=()=>(0,n.jsx)(S,{});var R=E}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);