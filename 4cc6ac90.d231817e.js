(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(176)),i={slug:"roadmap",title:"Roadmap"},l={unversionedId:"about-roadmap",id:"about-roadmap",isDocsHomePage:!1,title:"Roadmap",description:"We are currently working on the following features for the next release. We release from our stable channel every 2 months. We will release from beta channel bi-weekly, and alpha is nightly. This approach might change, so keep watching our socials.",source:"@site/about/about-roadmap.md",slug:"/roadmap",permalink:"/about/roadmap",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-roadmap.md",version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1630652769,sidebar:"about",previous:{title:"Otomi Architecture",permalink:"/about/architecture"}},s=[],c={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are currently working on the following features for the next release. We release from our ",Object(o.b)("strong",{parentName:"p"},"stable")," channel every 2 months. We will release from ",Object(o.b)("strong",{parentName:"p"},"beta")," channel bi-weekly, and ",Object(o.b)("strong",{parentName:"p"},"alpha")," is nightly. This approach might change, so keep watching our socials."),Object(o.b)("p",null,"For the next release (around oct/nov 2021) we aim to incorporate the following features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Continuous Deployment: semver/glob based image tags scanned in registry are deployed automatically and state is written back to values repo"),Object(o.b)("li",{parentName:"ul"},"Deploy Otomi without OIDC (and manage users in KeyCloak)"),Object(o.b)("li",{parentName:"ul"},"Create Teams and Services using the CLI")),Object(o.b)("p",null,"For the end of 2021 we aim to release the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CI pipeline for teams: most teams already have CI, but we like Drone and GitHub and will offer various flavours of pipeline templates for both. Drone is already deployed for gitops and thus available, and GitHub is rather heavy so will become optional")),Object(o.b)("p",null,"After that we see the following features on the horizon:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Multi tenancy enhancements: Allow multiple tenants to have their own teams, allowing sharing of cluster resources bringing down costs with scale"),Object(o.b)("li",{parentName:"ul"},"Kubernetes operators: expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades)."),Object(o.b)("li",{parentName:"ul"},"Bring Message Queue options to the stack. We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)"),Object(o.b)("li",{parentName:"ul"},"Streaming tools for real time inspection and tagging of traffic"),Object(o.b)("li",{parentName:"ul"},"A Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)"),Object(o.b)("li",{parentName:"ul"},"A Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs")))}u.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return r?n.a.createElement(m,l(l({ref:t},c),{},{components:r})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);