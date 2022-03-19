(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{883:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(7294),s=t(6764),i=t(1230),a=t(11),l=t.n(a),o=t(2809),c=t(219),u="(prefers-reduced-motion: no-preference)",d=function(){return!window.matchMedia(u).matches};var f=function(e){return{id:String(m(1e4,99999)),createdAt:Date.now(),color:e,size:m(10,20),style:{top:m(0,100)+"%",left:m(0,100)+"%"}}},m=function(e,n){return Math.floor(Math.random()*(n-e))+e},h=t(5893),p=["color","children"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){var n=e.size,t=e.color,r=e.style;return(0,h.jsx)("span",{className:"sparkle-wrapper",style:r,children:(0,h.jsx)("svg",{className:"sparkle-svg",width:n,height:n,viewBox:"0 0 68 68",fill:"none",children:(0,h.jsx)("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t})})})},v=function(e){var n=e.color,t=void 0===n?"#FFC700":n,s=e.children,i=(0,c.Z)(e,p),a=(0,r.useState)((function(){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];"undefined"===typeof n&&(n=e,e=0);for(var s=e;s<n;s+=t)r.push(s);return r}(3).map((function(){return f(t)}))})),l=a[0],o=a[1],x=function(){var e=(0,r.useState)(d),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e=window.matchMedia(u),n=function(e){t(!e.matches)};return e.addEventListener?e.addEventListener("change",n):e.addListener(n),function(){e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}}),[]),n}();return function(e,n,t){var s=(0,r.useRef)(void 0),i=(0,r.useRef)(e);(0,r.useEffect)((function(){i.current=e}),[e]),(0,r.useEffect)((function(){return"number"===typeof n&&"number"===typeof t&&function e(){var r=m(n,t);s.current=window.setTimeout((function(){i.current(),e()}),r)}(),function(){return window.clearTimeout(s.current)}}),[n,t]),(0,r.useCallback)((function(){window.clearTimeout(s.current)}),[])}((function(){var e=f(t),n=Date.now(),r=l.filter((function(e){return n-e.createdAt<750}));r.push(e),o(r)}),x?null:50,x?null:450),(0,h.jsxs)("span",j(j({className:"parent-sparkle-wrapper"},i),{},{children:[l.map((function(e){return(0,h.jsx)(g,{color:e.color,size:e.size,style:e.style},e.id)})),(0,h.jsx)("span",{className:"child-wrapper",children:s})]}))},w=function(){var e=(0,s.T)().isDark,n=(0,r.useState)(!1),t=n[0],a=n[1];return(0,r.useEffect)((function(){t&&setTimeout((function(){a(!1)}),3e3)}),[t]),(0,h.jsxs)("div",{className:"mt-20",children:[t&&(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"absolute top-1/2 left-1/2  z-50",children:(0,h.jsx)(l(),{duration:3e3,floorWidth:document.documentElement.offsetWidth})}),(0,h.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 z-50",children:(0,h.jsx)("img",{className:"doge h-80",src:"/assets/doge.png"})}),(0,h.jsx)("div",{className:"w-1/2 nyan absolute left-0 top-1/3 z-50",children:(0,h.jsx)("img",{className:"h-24",src:"/assets/nyan.gif"})})]}),(0,h.jsx)("p",{className:"text-xl mt-8 font-font-normal",children:"Well, I\u2019m a non-award winning frontend developer, HCI undergraduate and maker of dad jokes without being a dad."}),(0,h.jsxs)("p",{className:"text-xl mt-8 font-normal",children:["Currently I\u2019m working with good people and pushing pixels at"," ",(0,h.jsx)("a",{onClick:function(){return window.open("https://belkadigital.com","_blank")},className:"cursor-pointer font-medium",children:(0,h.jsx)("b",{className:(0,i.x)("font-medium underline--magical pt-1",e?"underline--dark":"underline--light"),children:"Belka"})}),"."]}),(0,h.jsx)("h2",{className:"text-2xl mt-10 font-medium",children:"What else?"}),(0,h.jsxs)("p",{className:"text-xl mt-8 font-normal",children:["I was born and raised in ",(0,h.jsx)("span",{className:"font-medium",children:"Trento"}),", a small city in the heart of the Italian Alps."," "]}),(0,h.jsx)("p",{className:"text-xl mt-8 font-normal",children:"In my spare time I enjoy "}),(0,h.jsxs)("ul",{className:"list-disc pl-8",children:[(0,h.jsx)("li",{children:(0,h.jsxs)("p",{className:"text-xl font-normal",children:["Building things using ",(0,h.jsx)("span",{className:"font-medium",children:"React"})," and ",(0,h.jsx)("span",{className:"font-medium",children:"TypeScript"}),"."]})}),(0,h.jsx)("li",{children:(0,h.jsx)("p",{className:"text-xl font-normal",children:"Hiking and playing football."})}),(0,h.jsx)("li",{children:(0,h.jsxs)("p",{className:"text-xl font-normal",children:["Designing"," ",(0,h.jsx)("span",{onClick:function(){return a(!0)},className:"underline--magical rainbow-gradient-bg pt-1 cursor-pointer hover:text-white",children:(0,h.jsx)(v,{children:"memes"})}),"."]})}),(0,h.jsx)("li",{children:(0,h.jsx)("p",{className:"text-xl font-normal",children:"Rescuing cats from trees. Yes, for real."})})]}),(0,h.jsx)("h2",{className:"text-2xl mt-10 font-medium ",children:"And that\u2019s it."}),(0,h.jsxs)("p",{className:"text-xl mt-8 mb-32 font-normal",children:["But if you\u2019re still curious, you can check out my"," ",(0,h.jsx)("a",{onClick:function(){return window.open("https://www.github.com/asdf1899/","_blank")},className:"cursor-pointer font-medium",children:(0,h.jsx)("b",{className:(0,i.x)("font-medium underline--magical pt-1",e?"underline--dark":"underline--light"),children:"GitHub"})})," ","profile."]})]})},b=t(1163),N=t(8249),y=function(e){var n=e.children,t=e.isActive,r=(0,b.useRouter)(),s=(0,N.C)((function(e){return e.featureFlags.isLoading}));return t||s||r.push("/404"),t&&!s?n:(0,h.jsx)("div",{className:"flex m-auto h-full w-full",children:(0,h.jsx)("img",{src:"/assets/loading.svg",className:"m-auto h-52",alt:"loading"})})},k=function(){var e=(0,N.C)((function(e){return e.featureFlags.isAboutPageActive}));return(0,h.jsx)(y,{isActive:e,children:(0,h.jsx)(w,{})})}},4613:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(883)}])}},function(e){e.O(0,[11,774,888,179],(function(){return n=4613,e(e.s=n);var n}));var n=e.O();_N_E=n}]);