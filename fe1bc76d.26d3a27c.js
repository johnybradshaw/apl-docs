(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(120)),i={slug:"known-issues/istio",title:"Known Issues: Istio",sidebar_label:"Istio"},c={unversionedId:"ki-istio",id:"ki-istio",isDocsHomePage:!1,title:"Known Issues: Istio",description:"When working with Istio you can expect to run into the following issues:",source:"@site/docs/ki-istio.md",slug:"/known-issues/istio",permalink:"/docs/known-issues/istio",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ki-istio.md",version:"current",sidebar_label:"Istio"},s=[{value:"Stale Keycloak JWKS cache",id:"stale-keycloak-jwks-cache",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When working with Istio you can expect to run into the following issues:"),Object(a.b)("h3",{id:"stale-keycloak-jwks-cache"},"Stale Keycloak JWKS cache"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Problem")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"`Jwks doesn't have key to match kid or alg from Jwt`\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cause")," The istio-proxy sidecar caches JWKS with a TTL of 20 minutes. The TTL is a hardcoded parameter (",Object(a.b)("inlineCode",{parentName:"p"},"JwtPubKeyRefreshInterval"),") and cannot be configured. By redeploing keycloak ",Object(a.b)("inlineCode",{parentName:"p"},"kid")," or ",Object(a.b)("inlineCode",{parentName:"p"},"alg")," can change, thus JWKS that is cached by istio-proxy sidecar is not valid anymore."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Solution")," Either wait 20 minutes, so JWKS is refreshed or kill all pods that are referenced by a RequestAuthentication resource. All services that have ",Object(a.b)("inlineCode",{parentName:"p"},"authz.workload")," set will have one (see: core.yaml)."))}u.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);