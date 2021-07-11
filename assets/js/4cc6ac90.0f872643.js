(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[1656],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},286:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),l=["components"],i={slug:"roadmap",title:"Roadmap"},s={unversionedId:"about-roadmap",id:"about-roadmap",isDocsHomePage:!1,title:"Roadmap",description:"We are currently working on the following features for the next release. We release from our stable channel every 2 months. We will release from beta channel bi-weekly, and alpha is nightly. This approach might change, so keep watching our blog.",source:"@site/about/about-roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/about/roadmap",editUrl:"https://github.com/redkubes/redkubes/edit/master/about/about-roadmap.md",version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1626047360,formattedLastUpdatedAt:"7/11/2021",frontMatter:{slug:"roadmap",title:"Roadmap"},sidebar:"about",previous:{title:"Otomi Architecture",permalink:"/about/architecture"}},u=[],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are currently working on the following features for the next release. We release from our ",(0,o.kt)("strong",{parentName:"p"},"stable")," channel every 2 months. We will release from ",(0,o.kt)("strong",{parentName:"p"},"beta")," channel bi-weekly, and ",(0,o.kt)("strong",{parentName:"p"},"alpha")," is nightly. This approach might change, so keep watching our blog."),(0,o.kt)("p",null,"For the next release (around september 2021) we aim to incorporate the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Continuous Deployment: semver/glob based image tags scanned in registry are deployed automatically and state is written back to values repo"),(0,o.kt)("li",{parentName:"ul"},"[EE only]"," Upgrade channels: subscribe a cluster to ALPHA/BETA/STABLE channel to automatically receive updates, or approve manually after")),(0,o.kt)("p",null,"For the end of 2021 we aim to release the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)"),(0,o.kt)("li",{parentName:"ul"},"Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs"),(0,o.kt)("li",{parentName:"ul"},"CI pipeline for teams: most teams already have CI, but we like Drone and GitHub and will offer various flavours of pipeline templates for both. Drone is already deployed for gitops and thus available, and GitHub rather heavy so will become optional")),(0,o.kt)("p",null,"After that we see the following features on the horizon:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multi tenancy enhancements: Allow multiple tenants to have their own teams, allowing sharing of cluster resources bringing down costs with scale"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes operators: expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades)."),(0,o.kt)("li",{parentName:"ul"},"Bring Message Queue options to the stack. We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)"),(0,o.kt)("li",{parentName:"ul"},"Streaming tools for real time inspection and tagging of traffic")))}c.isMDXComponent=!0}}]);