"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"builds",title:"Platform - Builds",sidebar_label:"Builds"},i=void 0,l={unversionedId:"for-ops/console/builds",id:"for-ops/console/builds",title:"Platform - Builds",description:"To enable this feature, first make sure Harbor and Tekton are activated. To be able to push images to Harbor, Otomi needs to be configured with a DNS zone and trusted certificates (Lets encrypt with production certificates)",source:"@site/docs/for-ops/console/builds.md",sourceDirName:"for-ops/console",slug:"/for-ops/console/builds",permalink:"/docs/for-ops/console/builds",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/console/builds.md",tags:[],version:"current",frontMatter:{slug:"builds",title:"Platform - Builds",sidebar_label:"Builds"},sidebar:"mainSidebar",previous:{title:"Projects",permalink:"/docs/for-ops/console/projects"},next:{title:"Secrets",permalink:"/docs/for-ops/console/secrets"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To enable this feature, first make sure ",(0,o.kt)("a",{parentName:"p",href:"/docs/apps/harbor"},"Harbor")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/apps/tekton"},"Tekton")," are activated. To be able to push images to Harbor, Otomi needs to be configured with a DNS zone and trusted certificates (Lets encrypt with production certificates)")),(0,o.kt)("p",null,"All known Builds on the platform are listed here. Builds can be sorted based on:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Build"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the build")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Team"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the Team responsible for the build")))),(0,o.kt)("p",null,"A platform admin can also create builds. Make sure to select the correct context (team-name) in the top bar. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/for-devs/console/builds"},"here")," for more information about creating builds."),(0,o.kt)("p",null,"Follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"/docs/for-devs/console/builds"},"here")," to create a build."))}p.isMDXComponent=!0}}]);