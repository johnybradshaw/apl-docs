"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/",title:"About Otomi",sidebar_label:"Introduction",tags:["About","philosophy"]},i=void 0,l={unversionedId:"about-intro",id:"about-intro",title:"About Otomi",description:"Otomi is an open source self-hosted PaaS to run on top of Kubernetes and is placed in the CNCF landscape under the PaaS/Container Service section. A PaaS attempts to connect many of the technologies found in the CNCF landscape in a way to provide direct value to developers.",source:"@site/about/about-intro.md",sourceDirName:".",slug:"/",permalink:"/about/",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/about/about-intro.md",tags:[{label:"About",permalink:"/about/tags/about"},{label:"philosophy",permalink:"/about/tags/philosophy"}],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1664289592,formattedLastUpdatedAt:"9/27/2022",frontMatter:{slug:"/",title:"About Otomi",sidebar_label:"Introduction",tags:["About","philosophy"]},sidebar:"about",next:{title:"Vision",permalink:"/about/vision"}},u={},s=[{value:"Highlights",id:"highlights",level:2},{value:"Why Otomi?",id:"why-otomi",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otomi is an open source self-hosted PaaS to run on top of Kubernetes and is placed in the CNCF landscape under the ",(0,r.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/guide#platform--paas-container-service"},"PaaS/Container Service")," section. A PaaS attempts to connect many of the technologies found in the CNCF landscape in a way to provide direct value to developers."),(0,r.kt)("h2",{id:"highlights"},"Highlights"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy to install"),(0,r.kt)("li",{parentName:"ul"},"Works out-of-the-box"),(0,r.kt)("li",{parentName:"ul"},"Comes with ready-to-use, pre-configured and built-in ",(0,r.kt)("a",{parentName:"li",href:"/#appsuite"},"applications")),(0,r.kt)("li",{parentName:"ul"},"Install all your favorite Kubernetes apps in one run"),(0,r.kt)("li",{parentName:"ul"},"Unified user experience (web UI)"),(0,r.kt)("li",{parentName:"ul"},"All apps are pre-configured based on sane defaults"),(0,r.kt)("li",{parentName:"ul"},"Turn apps on/off to create your ideal suite of apps"),(0,r.kt)("li",{parentName:"ul"},"Developer Self-service features"),(0,r.kt)("li",{parentName:"ul"},"Delegation of control"),(0,r.kt)("li",{parentName:"ul"},"Advanced Multi-tenancy"),(0,r.kt)("li",{parentName:"ul"},"Adjust the configuration of apps based on Configuration as Code"),(0,r.kt)("li",{parentName:"ul"},"One UI to access all apps and self-service features"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes-native: Install Otomi on any Kubernetes cluster in any cloud or your private (on-premises) infrastructure"),(0,r.kt)("li",{parentName:"ul"},"Over 20 pre-configured and integrated apps for Kubernetes")),(0,r.kt)("p",null,"After installing Otomi on Kubernetes, you can sign in and immediately start deploying applications."),(0,r.kt)("h2",{id:"why-otomi"},"Why Otomi?"),(0,r.kt)("p",null,"Otomi empowers developers and lowers the burden on IT operations. Otomi provides opinions and choices around how to piece/glue together the various open source tools needed to run applications. Otomi:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows for customization and extensibility"),(0,r.kt)("li",{parentName:"ul"},"Comes with with curated industry proven applications and policies for better governance and security"),(0,r.kt)("li",{parentName:"ul"},"Offers an enterprise-grade platform experience out-of-the-box"),(0,r.kt)("li",{parentName:"ul"},"Increases developer efficiency and makes developers self-serving"),(0,r.kt)("li",{parentName:"ul"},"Offers carefully crafted sane defaults to minimize configuration effort and speed up time to market"),(0,r.kt)("li",{parentName:"ul"},"Incorporates the 12-factor app methodology and Kubernetes best-practices")),(0,r.kt)("p",null,"Check out the following sections to understand the reasoning and decisions made involving the development of Otomi:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/about/vision"},"Vision")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/about/journey"},"Development journey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/about/architecture"},"Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/about/roadmap"},"Roadmap"))))}c.isMDXComponent=!0}}]);