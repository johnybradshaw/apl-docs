"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7894],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"lab-1",title:"Prerequisites for getting started",sidebar_label:"Prerequisites"},i=void 0,l={unversionedId:"for-devs/get-started/lab-1",id:"for-devs/get-started/lab-1",title:"Prerequisites for getting started",description:"Welcome to Otomi! If you would like to explore Otomi, this getting started guide is for you.",source:"@site/docs/for-devs/get-started/lab-1.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-1",permalink:"/docs/for-devs/get-started/lab-1",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-1.md",tags:[],version:"current",frontMatter:{slug:"lab-1",title:"Prerequisites for getting started",sidebar_label:"Prerequisites"},sidebar:"mainSidebar",previous:{title:"Get Started Labs",permalink:"/docs/for-devs/get-started/overview"},next:{title:"Create GIT repos",permalink:"/docs/for-devs/get-started/lab-3"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sign in to the Console",id:"sign-in-to-the-console",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to Otomi! If you would like to explore Otomi, this getting started guide is for you."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"We assume you (or the platform administrator) have:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Installed Otomi with DNS configured")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Activated the following applications:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Harbor"),(0,a.kt)("li",{parentName:"ul"},"ArgoCD"),(0,a.kt)("li",{parentName:"ul"},"Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Loki"),(0,a.kt)("li",{parentName:"ul"},"Grafana"),(0,a.kt)("li",{parentName:"ul"},"Trivy Operator"),(0,a.kt)("li",{parentName:"ul"},"Gatekeeper (with option ",(0,a.kt)("inlineCode",{parentName:"li"},"Disable validating webhook")," set to true)")),(0,a.kt)("p",null,"For the ",(0,a.kt)("a",{parentName:"p",href:"lab-27"},"Use OpenTelemery")," Lab, the Tempo app needs to be enabled together with tracing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Istio")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Nginx Ingress")," apps."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Created a team called ",(0,a.kt)("inlineCode",{parentName:"li"},"demo")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"Managed prometheus and alert manager")," enabled"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/keycloak#create-a-user-in-keycloak"},"Created an account")," and added your user to the team group in Keycloak"),(0,a.kt)("li",{parentName:"ol"},"Provided you with the following information:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to access the Otomi web UI (Otomi Console)"),(0,a.kt)("li",{parentName:"ul"},"Your login credentials")),(0,a.kt)("p",null,"When you have received the URL of the web UI and have a username/password, then it's time to sign-in"),(0,a.kt)("h2",{id:"sign-in-to-the-console"},"Sign in to the Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the provided URL. The URL will look like this: ",(0,a.kt)("a",{parentName:"li",href:"https://otomi.yourdomain.com"},"https://otomi.yourdomain.com")),(0,a.kt)("li",{parentName:"ul"},"Sign in with the provided username/password or your existing corporate AD account")),(0,a.kt)("p",null,"After sign in, you will see this page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Team apps",src:r(3874).Z,width:"2954",height:"1734"})))}d.isMDXComponent=!0},3874:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/team-apps-801d3401d1ec86bfead774e901d2bb83.png"}}]);