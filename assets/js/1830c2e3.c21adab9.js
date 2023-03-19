"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"certmanager",title:"CertManager",sidebar_label:"Cert-Manager"},i=void 0,c={unversionedId:"apps/certmanager",id:"apps/certmanager",title:"CertManager",description:"Introduction",source:"@site/docs/apps/certmanager.md",sourceDirName:"apps",slug:"/apps/certmanager",permalink:"/docs/apps/certmanager",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/certmanager.md",tags:[],version:"current",frontMatter:{slug:"certmanager",title:"CertManager",sidebar_label:"Cert-Manager"},sidebar:"mainSidebar",previous:{title:"Argo CD",permalink:"/docs/apps/argocd"},next:{title:"Drone",permalink:"/docs/apps/drone"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Automation",id:"automation",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Instructions",id:"instructions",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Cert-Manager is used by Otomi to automatically create and rotate TLS certificates for service endpoints. You may bring your own CA, or let Otomi create one for you, but we recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org"},"Letsencrypt")," for production certificates."),(0,a.kt)("p",null,"Setting CertManager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install ",(0,a.kt)("a",{parentName:"p",href:"external-dns"},"ExternalDNS"),". Because a lot of DNS settings are used by other Otomi contexts, all DNS configuration can be found ",(0,a.kt)("a",{parentName:"p",href:"../for-ops/console/settings/dns"},"here"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h2",{id:"automation"},"Automation"),(0,a.kt)("p",null,"Not applicable."),(0,a.kt)("h2",{id:"integrations"},"Integrations"),(0,a.kt)("h2",{id:"instructions"},"Instructions"))}p.isMDXComponent=!0}}]);