(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(5056)}])},9843:function(e,t,n){"use strict";n.d(t,{Hk:function(){return r},Kd:function(){return a},N$:function(){return s},_v:function(){return l},xK:function(){return i}});let s="https://twitter.com/anas_araid",a="https://github.com/anas-araid",r="https://linkedin.com/in/anas-araid",l="https://instagram.com/anas.araid",i="araid.anas99@gmail.com"},507:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});var s=n(5893),a=n(1163);n(7294);var r=n(2320),l=n(1427);let i=e=>{let{children:t,isActive:n}=e,i=(0,a.useRouter)(),c=(0,l.C)(e=>e.featureFlags.isLoading);return(n||c||i.push("/404"),n&&!c)?t:(0,s.jsx)(r.g,{})};var c=i},2925:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var s=n(5033);let a=()=>e=>{(0,s.eN)(s.PY,{event_label:e}),window.open(e,"_blank")}},5056:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s=n(5893),a=n(7294),r=n(1067);let l="(prefers-reduced-motion: no-preference)",i=()=>!window.matchMedia(l).matches,c=(e,t,n)=>{let s=(0,a.useRef)(void 0),r=(0,a.useRef)(e);(0,a.useEffect)(()=>{r.current=e},[e]),(0,a.useEffect)(()=>{if("number"==typeof t&&"number"==typeof n){let e=()=>{let a=u(t,n);s.current=window.setTimeout(()=>{r.current(),e()},a)};e()}return()=>window.clearTimeout(s.current)},[t,n]);let l=(0,a.useCallback)(function(){window.clearTimeout(s.current)},[]);return l},o=e=>{let t={id:String(u(1e4,99999)),createdAt:Date.now(),color:e,size:u(10,20),style:{top:u(0,100)+"%",left:u(0,100)+"%"}};return t},d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=[];void 0===t&&(t=e,e=0);for(let a=e;a<t;a+=n)s.push(a);return s},u=(e,t)=>Math.floor(Math.random()*(t-e))+e,m=e=>{let{color:t="#FFC700",children:n,...r}=e,[u,m]=(0,a.useState)(()=>d(3).map(()=>o(t))),f=function(){let[e,t]=(0,a.useState)(i);return(0,a.useEffect)(()=>{let e=window.matchMedia(l),n=e=>{t(!e.matches)};return e.addEventListener?e.addEventListener("change",n):e.addListener(n),()=>{e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}},[]),e}();return c(()=>{let e=o(t),n=Date.now(),s=u.filter(e=>{let t=n-e.createdAt;return t<750});s.push(e),m(s)},f?null:50,f?null:450),(0,s.jsxs)("span",{className:"parent-sparkle-wrapper",...r,children:[u.map(e=>(0,s.jsx)(h,{color:e.color,size:e.size,style:e.style},e.id)),(0,s.jsx)("span",{className:"child-wrapper",children:n})]})},h=e=>{let{size:t,color:n,style:a}=e;return(0,s.jsx)("span",{className:"sparkle-wrapper",style:a,children:(0,s.jsx)("svg",{className:"sparkle-svg",width:t,height:t,viewBox:"0 0 68 68",fill:"none",children:(0,s.jsx)("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:n})})})};var f=n(9843),x=n(221),p=n(2925),j=n(5033),g=n(4082);let w=()=>{let{isDark:e}=(0,x.T)(),[t,n]=(0,a.useState)(!1),l=(0,p.K)();(0,a.useEffect)(()=>{t&&setTimeout(()=>{n(!1)},3e3)},[t]);let i=()=>{(0,j.eN)(j.cH,{event_label:"memes_link"}),n(!0)};return(0,s.jsxs)("div",{className:"mt-20",children:[t&&(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 z-50",children:(0,s.jsx)(r.Z,{duration:3e3})}),(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 z-50",children:(0,s.jsx)("img",{className:"doge h-80",src:"/assets/doge.png"})}),(0,s.jsx)("div",{className:"w-1/2 nyan absolute left-0 top-1/3 z-50",children:(0,s.jsx)("img",{className:"h-24",src:"/assets/nyan.gif"})})]}),(0,s.jsx)("p",{className:"text-xl mt-8 font-font-normal",children:"Well, I’m a non-award winning frontend developer, Human-Computer Interaction graduate and maker of dad jokes without being a dad."}),(0,s.jsxs)("p",{className:"text-xl mt-8 font-normal",children:["Currently I’m working with good people and pushing pixels at"," ",(0,s.jsx)("a",{onClick:()=>l("https://belkadigital.com"),className:"cursor-pointer font-medium",children:(0,s.jsx)("b",{className:(0,g.x)("font-medium underline--magical pt-1",e?"underline--dark":"underline--light"),children:"Belka"})}),"."]}),(0,s.jsx)("h2",{className:"text-2xl mt-10 font-medium",children:"What else?"}),(0,s.jsxs)("p",{className:"text-xl mt-8 font-normal",children:["I was born and raised in ",(0,s.jsx)("u",{children:"Trento"}),", a small city in the heart of the Italian Alps."," "]}),(0,s.jsx)("p",{className:"text-xl mt-8 font-normal",children:"In my spare time I enjoy "}),(0,s.jsxs)("ul",{className:"pl-8 shiny-list",children:[(0,s.jsx)("li",{children:(0,s.jsxs)("p",{className:"text-xl font-normal",children:["Building things using ",(0,s.jsx)("u",{children:"React"})," and ",(0,s.jsx)("u",{children:"TypeScript"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{className:"text-xl font-normal",children:"Hiking and playing football."})}),(0,s.jsx)("li",{children:(0,s.jsxs)("p",{className:"text-xl font-normal",children:["Designing"," ",(0,s.jsx)("span",{onClick:()=>i(),className:"underline--magical rainbow-gradient-bg pt-1 cursor-pointer hover:text-white",children:(0,s.jsx)(m,{children:"memes"})}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsx)("p",{className:"text-xl font-normal",children:"Rescuing cats from trees."})})]}),(0,s.jsx)("h2",{className:"text-2xl mt-10 font-medium ",children:"And that’s it."}),(0,s.jsxs)("p",{className:"text-xl mt-8 mb-32 font-normal",children:["The best way to contact me is on"," ",(0,s.jsx)("a",{onClick:()=>l(f.N$),className:"cursor-pointer font-medium",children:(0,s.jsx)("b",{className:(0,g.x)("font-medium underline--magical pt-1",e?"underline--dark":"underline--light"),children:"Twitter"})}),"."]})]})};var N=n(507),v=n(1427);let b=()=>{let e=(0,v.C)(e=>e.featureFlags.isAboutPageActive);return(0,s.jsx)(N.T,{isActive:e,children:(0,s.jsx)(w,{})})};var k=b}},function(e){e.O(0,[67,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);