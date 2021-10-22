(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2202:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(2809),o=n(7294),a=(n(3146),n(4651)),i=n(9008),c=n(5893),s=function(){return(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:"Anas Araid"}),(0,c.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,c.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,c.jsx)("meta",{name:"title",content:"Anas Araid"}),(0,c.jsx)("meta",{name:"description",content:"Developer, designer and firefighter"}),(0,c.jsx)("meta",{name:"author",content:"Anas Araid"}),(0,c.jsx)("meta",{name:"keywords",content:"portfolio, bio, personal, projects"}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:url",content:"https://anasaraid.me/"}),(0,c.jsx)("meta",{property:"og:title",content:"Anas Araid"}),(0,c.jsx)("meta",{property:"og:description",content:"Developer, designer and firefighter"}),(0,c.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{property:"twitter:url",content:"https://anasaraid.me/"}),(0,c.jsx)("meta",{property:"twitter:title",content:"Anas Araid"}),(0,c.jsx)("meta",{property:"twitter:description",content:"Developer, designer and firefighter"}),(0,c.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter",rel:"stylesheet"}),(0,c.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat("UA-118641473-1")}),(0,c.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat("UA-118641473-1","', {\n              page_path: window.location.pathname,\n            });\n          ")}})]})},u=n(4999);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(t){var e=t.Component,n=t.pageProps,r=(0,a.useRouter)();return(0,o.useEffect)((function(){var t=function(t){!function(t){window.gtag("config","UA-118641473-1",{page_path:t})}(t)};return r.events.on("routeChangeComplete",t),function(){r.events.off("routeChangeComplete",t)}}),[r.events]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{}),(0,c.jsx)(u.Z,{children:(0,c.jsx)(e,f({},n))})]})}},4999:function(t,e,n){"use strict";n.d(e,{N:function(){return c},Z:function(){return s}});var r=n(6311),o=n(7294);var a=n(5893),i={dark:{backgroundColor:"bg-black",textColor:"text-white",gradientText:"from-pink-300 via-purple-300 to-indigo-400"},light:{backgroundColor:"bg-white",textColor:"text-black",gradientText:"from-pink-500 via-red-500 to-yellow-500"}},c=(0,o.createContext)({}),s=function(t){var e=t.children,n=function(){var t=(0,o.useState)(!0),e=t[0],n=t[1];return(0,o.useEffect)((function(){localStorage.getItem("isDark")&&n("true"===localStorage.getItem("isDark"))}),[e]),[e,function(t){localStorage.setItem("isDark",JSON.stringify(t)),n(t)}]}(),s=(0,r.Z)(n,2),u=s[0],l=s[1],f=u?i.dark:i.light;return(0,a.jsx)(c.Provider,{value:{theme:f,isDark:u,setDarkMode:l},children:e})}},6363:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2202)}])},3146:function(){},9008:function(t,e,n){t.exports=n(639)},2809:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},6311:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return o}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6363),e(4651)}));var n=t.O();_N_E=n}]);