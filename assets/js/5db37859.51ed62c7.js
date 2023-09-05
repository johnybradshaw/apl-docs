"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[344],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(o),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6797:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={title:"Contribution Expectations",slug:"expectations",sidebar_label:"Expectations"},a=void 0,c={unversionedId:"expectations",id:"expectations",title:"Contribution Expectations",description:"Otomi is a community project.",source:"@site/community/expectations.md",sourceDirName:".",slug:"/expectations",permalink:"/community/expectations",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/community/expectations.md",tags:[],version:"current",lastUpdatedBy:"Ani1357",lastUpdatedAt:1693898254,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{title:"Contribution Expectations",slug:"expectations",sidebar_label:"Expectations"},sidebar:"mainSidebar",previous:{title:"Code of Conduct",permalink:"/community/code-of-conduct"}},s={},l=[{value:"Code review",id:"code-review",level:2},{value:"Expectations of reviewers",id:"expectations-of-reviewers",level:2},{value:"Review comments",id:"review-comments",level:3},{value:"Review latency",id:"review-latency",level:3},{value:"Thank you",id:"thank-you",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Otomi is a community project.\nConsequently, it is wholly dependent on its community to provide a productive, friendly and collaborative environment."),(0,r.kt)("p",null,"The first and foremost goal of the Otomi community is to develop a stack of configurable k8s applications that work in tandem, in order to give k8s users control over their distributed applications."),(0,r.kt)("p",null,"We therefore describe the expectations for members of the Otomi community.\nThis document is intended to be a living one that evolves as the community evolves via the same PR and code review process that shapes the rest of the project.\nIt currently covers the expectations of conduct that govern all members of the community as well as the expectations around code review that govern all active contributors to Otomi."),(0,r.kt)("h2",{id:"code-review"},"Code review"),(0,r.kt)("p",null,"As a community we believe in the value of code review for all contributions.\nCode review increases both the quality and readability of our codebase, which\nin turn produces high quality software."),(0,r.kt)("p",null,"Consequently, as a community we expect that all active participants in the community will also be active reviewers."),(0,r.kt)("h2",{id:"expectations-of-reviewers"},"Expectations of reviewers"),(0,r.kt)("h3",{id:"review-comments"},"Review comments"),(0,r.kt)("p",null,"Because reviewers are often the first points of contact between new members of the community and can significantly impact the first impression of the Otomi community, reviewers are especially important in shaping the Otomi community. Reviewers are highly encouraged to not only abide by the ",(0,r.kt)("a",{parentName:"p",href:"code-of-conduct"},"code of conduct")," but are strongly encouraged to go above and beyond the code of conduct to promote a collaborative, respectful Otomi community."),(0,r.kt)("h3",{id:"review-latency"},"Review latency"),(0,r.kt)("p",null,"Reviewers are expected to respond in a timely fashion to PRs that are assigned to them. Reviewers are expected to respond to an ",(0,r.kt)("em",{parentName:"p"},"active")," PRs with reasonable latency, and if reviewers fail to respond, those PRs may be assigned to other reviewers."),(0,r.kt)("h2",{id:"thank-you"},"Thank you"),(0,r.kt)("p",null,"We want to thank everyone who contributes their time and effort to making Otomi both a successful endeavour as well as a successful community. The strength of our software lies in the combined strengths of each individual community member. Thanks!"))}p.isMDXComponent=!0}}]);