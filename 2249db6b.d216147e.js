(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{175:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(175)),i={slug:"/",title:"About Otomi",sidebar_label:"Introduction"},c={unversionedId:"about-intro",id:"about-intro",isDocsHomePage:!1,title:"About Otomi",description:"Otomi is an open-source cloud-agnostic platform to run on top of Kubernetes to securely deploy, run and manage applications with a desktop-like user experience.",source:"@site/about/about-intro.md",slug:"/",permalink:"/about/",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-intro.md",version:"current",lastUpdatedBy:"Maurice Faber",lastUpdatedAt:1633338081,sidebar_label:"Introduction",sidebar:"about",next:{title:"Vision",permalink:"/about/vision"}},l=[{value:"Highlights",id:"highlights",children:[]},{value:"Why Otomi?",id:"why-otomi",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Otomi is an open-source cloud-agnostic platform to run on top of Kubernetes to securely deploy, run and manage applications with a desktop-like user experience."),Object(a.b)("h2",{id:"highlights"},"Highlights"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Otomi is Open Source"),Object(a.b)("li",{parentName:"ul"},"Easy to install"),Object(a.b)("li",{parentName:"ul"},"Comes with an intuitive desktop-like UI"),Object(a.b)("li",{parentName:"ul"},"Comes with ready to use, pre-configured and built-in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/#appsuite"}),"applications")),Object(a.b)("li",{parentName:"ul"},"Works out-of-the-box")),Object(a.b)("p",null,"Just as you would expect from your favorite Linux distribution. After installing Otomi on Kubernetes, you can sign in and immediately start deploying applications."),Object(a.b)("h2",{id:"why-otomi"},"Why Otomi?"),Object(a.b)("p",null,"Otomi offers an Operating System like experience, using Kubernetes as its kernel. Why Otomi?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Otomi is completely open source, allowing customization and extensibility"),Object(a.b)("li",{parentName:"ul"},"Otomi integrates upstream Kubernetes with proven open source applications and add-ons"),Object(a.b)("li",{parentName:"ul"},"Otomi is a single deployable package with curated industry proven applications and policies for better governance and security"),Object(a.b)("li",{parentName:"ul"},"Use Otomi to create your enterprise-grade container platform or internal developer platform to increase developer efficiency"),Object(a.b)("li",{parentName:"ul"},"Otomi offers carefully crafted sane defaults to minimize configuration effort and time to market"),Object(a.b)("li",{parentName:"ul"},"Otomi incorporates open source standards and best practices")),Object(a.b)("p",null,"Check out the following sections to understand the reasoning and decisions made involving the development of Otomi:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/about/vision"}),"Vision")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/about/journey"}),"Development journey")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/about/architecture"}),"Architecture")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/about/roadmap"}),"Roadmap"))))}p.isMDXComponent=!0}}]);