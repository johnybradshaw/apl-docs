"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"installation",title:"Installation",sidebar_label:"Overview"},i=void 0,o={unversionedId:"get-started/overview",id:"get-started/overview",title:"Installation",description:"How to install Otomi on various cloud and infrastructure platforms",source:"@site/docs/get-started/overview.md",sourceDirName:"get-started",slug:"/get-started/installation",permalink:"/docs/get-started/installation",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/overview.md",tags:[],version:"current",frontMatter:{slug:"installation",title:"Installation",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"Prerequisites",permalink:"/docs/get-started/prerequisites"},next:{title:"AWS",permalink:"/docs/get-started/installation/aws"}},s={},u=[{value:"AWS",id:"aws",level:3},{value:"Azure",id:"azure",level:3},{value:"Civo",id:"civo",level:3},{value:"Custom",id:"custom",level:3},{value:"Digital Ocean",id:"digital-ocean",level:3},{value:"Google Cloud Platform",id:"google-cloud-platform",level:3},{value:"Linode",id:"linode",level:3},{value:"Scaleway",id:"scaleway",level:3},{value:"Helm",id:"helm",level:3},{value:"Minikube",id:"minikube",level:3},{value:"Know issues",id:"know-issues",level:3},{value:"Use Azure AD as IDP",id:"use-azure-ad-as-idp",level:3},{value:"Use KMS to manage keys for encryption",id:"use-kms-to-manage-keys-for-encryption",level:3},{value:"Configure an entrypoint for an external gateway",id:"configure-an-entrypoint-for-an-external-gateway",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to install Otomi on various cloud and infrastructure platforms")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"aws"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/aws"},"AWS")),(0,r.kt)("p",null,"Install Otomi on EKS using Route53 for DNS"),(0,r.kt)("h3",{id:"azure"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/azure"},"Azure")),(0,r.kt)("p",null,"Install Otomi on AKS using an Azure public DNS zone"),(0,r.kt)("h3",{id:"civo"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/civo"},"Civo")),(0,r.kt)("p",null,"Install Otomi on Civo K3s using Civo DNS"),(0,r.kt)("h3",{id:"custom"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/custom"},"Custom")),(0,r.kt)("p",null,"Install Otomi on any other cloud or infrastructure platforms"),(0,r.kt)("h3",{id:"digital-ocean"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/digitalocean"},"Digital Ocean")),(0,r.kt)("p",null,"Install Otomi on Digital Ocean using Digital Ocean DNS"),(0,r.kt)("h3",{id:"google-cloud-platform"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/gcp"},"Google Cloud Platform")),(0,r.kt)("p",null,"Instal Otomi on GKE with Cloud DNS"),(0,r.kt)("h3",{id:"linode"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/linode"},"Linode")),(0,r.kt)("p",null,"Install Otomi on Linode Kubernetes Engine using Linode DNS"),(0,r.kt)("h3",{id:"scaleway"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/scaleway"},"Scaleway")),(0,r.kt)("p",null,"Install Otomi on Kapsule Kubernetes in Scaleway using a Scaleway Internal Domain"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Other installation resources")),(0,r.kt)("h3",{id:"helm"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/helm"},"Helm")),(0,r.kt)("p",null,"Instructions for using the Otomi Helm chart"),(0,r.kt)("h3",{id:"minikube"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/minikube"},"Minikube")),(0,r.kt)("p",null,"Install Otomi on Minikube"),(0,r.kt)("h3",{id:"know-issues"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/known-issues"},"Know issues")),(0,r.kt)("p",null,"Know installation issues"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advanced configurations")),(0,r.kt)("h3",{id:"use-azure-ad-as-idp"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/oidc"},"Use Azure AD as IDP")),(0,r.kt)("p",null,"Install Otomi with Azure AD for OIDC"),(0,r.kt)("h3",{id:"use-kms-to-manage-keys-for-encryption"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/kms"},"Use KMS to manage keys for encryption")),(0,r.kt)("p",null,"Install Otomi with KMS"),(0,r.kt)("h3",{id:"configure-an-entrypoint-for-an-external-gateway"},(0,r.kt)("a",{parentName:"h3",href:"/docs/get-started/installation/entrypoint"},"Configure an entrypoint for an external gateway")),(0,r.kt)("p",null,"Install Otomi with an entrypoint for an external gateway"),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);