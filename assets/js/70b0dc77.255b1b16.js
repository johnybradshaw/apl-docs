"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={slug:"edge",title:"Otomi at the edge",sidebar_label:"Edge"},s=void 0,a={unversionedId:"use-cases/edge",id:"use-cases/edge",title:"Otomi at the edge",description:"Introduction",source:"@site/product/use-cases/edge.md",sourceDirName:"use-cases",slug:"/use-cases/edge",permalink:"/product/use-cases/edge",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/edge.md",tags:[],version:"current",lastUpdatedBy:"Ani1357",lastUpdatedAt:1693898254,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{slug:"edge",title:"Otomi at the edge",sidebar_label:"Edge"},sidebar:"mainSidebar",previous:{title:"Multi-cluster observability",permalink:"/product/use-cases/multi-cluster"},next:{title:"CI/CD",permalink:"/product/use-cases/ci-cd"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"How Otomi supports edge computing using Kubernetes",id:"how-otomi-supports-edge-computing-using-kubernetes",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Edge computing is an approach where you run applications as close as possible to its data sources or end users. One of the benefits is improved response times. "),(0,o.kt)("p",null,"However, managing edge applications using Kubernetes comes with challenges, like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy and update applications consistently accross multiple clusters"),(0,o.kt)("li",{parentName:"ul"},"Manage the run-time specifications for the applications like ingress, certificates, DNS, network policies, etc."),(0,o.kt)("li",{parentName:"ul"},"Lifecycle management of all supporting tools"),(0,o.kt)("li",{parentName:"ul"},"Using managed Kubernetes services in different clouds/infrastructures")),(0,o.kt)("h2",{id:"how-otomi-supports-edge-computing-using-kubernetes"},"How Otomi supports edge computing using Kubernetes"),(0,o.kt)("p",null,"One of the benefits of Otomi is that everything managed by Otomi can be specified in a single values file. This enables you to not only define the applications workloads that need to be running on the cluster, but also all the required tools and configuration to support and secure the workloads."),(0,o.kt)("p",null,"Let's explain this with an example:"),(0,o.kt)("p",null,"Suppose you have 2 application workloads that you would like to run on multiple Kubernetes clusters in multiple geographic regions, using different public cloud providers (AWS, Azure, GCP) and different Kubernetes versions (1.22 and 1.23). Next to the 2 workloads, you also would like to use Istio for mTLS, cert-manager for certificates, ingress/egress network policies for isolation and HTTP response headers. Because you can not afford using L7 load balancers with WAF features in the different clouds, you would like to implement Nginx ingress with Modsecurity and OWASP filtering. The following picture shows the desired situation:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"edge",src:n(2300).Z,width:"1496",height:"1398"})),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"../../docs/for-ops/how-to/core-only"},"this")," how-to to learn more about installing Otomi at the edge."))}p.isMDXComponent=!0},2300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edge-173d01e1fe3f7ac45484237e916968e3.png"}}]);