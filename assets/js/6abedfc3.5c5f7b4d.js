"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,d=m["".concat(l,".").concat(b)]||m[b]||p[b]||i;return r?a.createElement(d,s(s({ref:t},u),{},{components:r})):a.createElement(d,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={slug:"lab-7",title:"Scan your images for vulnerabilities",sidebar_label:"Scan images"},s=void 0,o={unversionedId:"get-started/labs/lab-7",id:"get-started/labs/lab-7",title:"Scan your images for vulnerabilities",description:"Prerequisites",source:"@site/docs/get-started/labs/lab-7.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-7",permalink:"/docs/get-started/labs/lab-7",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-7.md",tags:[],version:"current",frontMatter:{slug:"lab-7",title:"Scan your images for vulnerabilities",sidebar_label:"Scan images"},sidebar:"mainSidebar",previous:{title:"Check policy compliance",permalink:"/docs/get-started/labs/lab-15"},next:{title:"Scan containers",permalink:"/docs/get-started/labs/lab-17"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Scanning images",id:"scanning-images",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To automatically scan images for vulnerabilities, ",(0,n.kt)("inlineCode",{parentName:"p"},"Automatically scan images on push")," in the Team project settings in Harbor needs to be enabled by the platform administrator:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image vulnerabilities",src:r(8377).Z,width:"2836",height:"1360"})),(0,n.kt)("h2",{id:"scanning-images"},"Scanning images"),(0,n.kt)("p",null,"When your team is using Harbor for private image registries, you can use Trivy to automatically scan your images on push. When ",(0,n.kt)("inlineCode",{parentName:"p"},"Automatically scan images on push")," is enabled by the platform administrator, you can see the results of the scans by following these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the apps section in Otomi console, click on Harbor"),(0,n.kt)("li",{parentName:"ul"},"Click on your project. You will only see the projects of the Teams that you are a member of"),(0,n.kt)("li",{parentName:"ul"},"You will now see a list of the teams repositories"),(0,n.kt)("li",{parentName:"ul"},"Click on the repository that contains the artifact (image) that you would like to investigate"),(0,n.kt)("li",{parentName:"ul"},"In the list of artifacts, you can see a summary of the scan results")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubecfg",src:r(8699).Z,width:"3420",height:"1356"})),(0,n.kt)("p",null,"When you click on the scanned artifact, you'll see a more detailed report on all the vulnerabilities:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubecfg",src:r(1603).Z,width:"2806",height:"1646"})))}p.isMDXComponent=!0},8377:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harbor-config-a3f05759475e9def0cefc7059856865e.png"},1603:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/trivy-scan-details-58f58d9bfa78b2082397f7d8ead99289.png"},8699:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/trivy-scan-sum-75f1210f5bbddfd25a36a2dff38ef69e.png"}}]);