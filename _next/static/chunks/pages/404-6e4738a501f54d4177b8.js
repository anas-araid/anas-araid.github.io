(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1063),l=t(4651),s=t(7426);var i={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var n=c.resolveHref(a,e.href,!0),t=r(n,2),o=t[0],l=t[1];return{href:o,as:e.as?c.resolveHref(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,m=e.shallow,b=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,g=s.useIntersection({rootMargin:"200px"}),N=r(g,2),_=N[0],w=N[1],k=o.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);o.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,r=i[d+"%"+v+(n?"%"+n:"")];e&&!r&&u(a,d,v,{locale:n})}),[v,d,w,x,t,a]);var E={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:l}))}(e,a,d,v,p,m,b,x)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var j="undefined"!==typeof x?x:a&&a.locale,L=a&&a.isLocaleDomain&&c.getDomainLocale(v,j,a&&a.locales,a&&a.domainLocales);E.href=L||c.addBasePath(c.addLocale(v,j,a&&a.defaultLocale))}return o.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=a.useRef(),i=a.useState(!1),u=r(i,2),f=u[0],d=u[1],v=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[v,f]};var a=t(7294),o=t(3447),c="undefined"!==typeof IntersectionObserver;var l=new Map},7348:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(1664),a=t(6764),o=t(3196),c=t(5893);function l(){var e=(0,a.T)().isDark;return(0,c.jsx)("div",{className:"flex ",style:{height:"60vh"},children:(0,c.jsxs)("div",{className:"flex-col m-auto",children:[(0,c.jsx)("div",{className:"w-full mb-6",children:(0,c.jsx)("img",{src:"/assets/404.gif",className:"h-36 m-auto"})}),(0,c.jsxs)("div",{className:"flex flex-row m-auto",children:[(0,c.jsx)("div",{className:(0,o.x)("border-r-2 mr-5 pr-5 my-auto",e?"border-white":"border-black"),children:(0,c.jsx)("h1",{className:"font-medium text-4xl inline",children:"404"})}),(0,c.jsxs)("div",{className:"m-auto",children:[(0,c.jsx)("h1",{className:"text-lg",children:"Where's the page, Lebowski?"}),(0,c.jsx)(r.default,{href:"/",children:(0,c.jsx)("a",{className:"text-sm underline",children:"Go back home"})})]})]})]})})}},9014:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(7348)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=9014,e(e.s=n);var n}));var n=e.O();_N_E=n}]);