"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={slug:"builds",title:"Team Builds",sidebar_label:"Builds"},r=void 0,o={unversionedId:"for-devs/console/builds",id:"for-devs/console/builds",title:"Team Builds",description:"A Build in Otomi is a self-service feature for building OCI compliant images based on application source code.",source:"@site/docs/for-devs/console/builds.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/builds",permalink:"/docs/for-devs/console/builds",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/console/builds.md",tags:[],version:"current",frontMatter:{slug:"builds",title:"Team Builds",sidebar_label:"Builds"},sidebar:"mainSidebar",previous:{title:"Projects",permalink:"/docs/for-devs/console/projects"},next:{title:"Workloads",permalink:"/docs/for-devs/console/workloads"}},u={},p=[{value:"Builds (all)",id:"builds-all",level:2},{value:"Create a build",id:"create-a-build",level:2},{value:"Docker",id:"docker",level:3},{value:"Buildpacks",id:"buildpacks",level:3},{value:"Build status",id:"build-status",level:3},{value:"Restart a build",id:"restart-a-build",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Build in Otomi is a self-service feature for building OCI compliant images based on application source code."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Ask you platform administrator to activate Harbor and Tekton to be able to use this feature.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The otomi Builds feature can only use public code repositories or private repo's in the local Gitea. Images will always be pushed to a registry in the local Harbor.")),(0,i.kt)("h2",{id:"builds-all"},"Builds (all)"),(0,i.kt)("p",null,"All known Builds of the team are listed here."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Build"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the build")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of the build. Buildpacks or Docker")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trigger"),(0,i.kt)("td",{parentName:"tr",align:null},"Is trigger configured for the build")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tekton"),(0,i.kt)("td",{parentName:"tr",align:null},"Link to the PipelineRun of the build in Tekton dashboard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Harbor"),(0,i.kt)("td",{parentName:"tr",align:null},"Link to the image in Harbor")))),(0,i.kt)("h2",{id:"create-a-build"},"Create a build"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter a name for the build")),(0,i.kt)("p",null,"The name of the build will be used for the registry name of the image (",(0,i.kt)("inlineCode",{parentName:"p"},"harbor.<domainSuffix>/team-name/build-name"),")"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"(optional) Adjust the tag")),(0,i.kt)("p",null,"The tag will be used to tag the image  (",(0,i.kt)("inlineCode",{parentName:"p"},"harbor.<domainSuffix>/team-name/build-name:tag"),")"),(0,i.kt)("p",null,"Now choose the type of the build:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker")," to build an image using the ",(0,i.kt)("inlineCode",{parentName:"li"},"./Dockerfile")," in your code repository"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"Buildpacks")," to build an image from application source using Buildpacks")),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the URL of the Git repository that contains the application source code"),(0,i.kt)("li",{parentName:"ol"},"(optional) Change the path of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile")),(0,i.kt)("li",{parentName:"ol"},"(optional) Change the revsion. This can be a commit, a tag, or a branch"),(0,i.kt)("li",{parentName:"ol"},"(optional) Select to create an event listener to trigger the build based on a Gitea webhook.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Configuring a Trigger is only supported when the Repo is in the local Gitea.")),(0,i.kt)("h3",{id:"buildpacks"},"Buildpacks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the URL of the Git repository that contains the application source code"),(0,i.kt)("li",{parentName:"ol"},"(optional) Add the path. This is a subpath within the repo where the source to build is located"),(0,i.kt)("li",{parentName:"ol"},"(optional) Change the revsion. This can be a commit, a tag, or a branch"),(0,i.kt)("li",{parentName:"ol"},"(optional) Select to create an event listener to trigger the build based on a Gitea webhook.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Configuring a Trigger is only supported when the Repo is in the local Gitea.")),(0,i.kt)("h3",{id:"build-status"},"Build status"),(0,i.kt)("p",null,"To see the status of the build, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"PipelineRun")," link of the build in the list of builds. If a trigger is configured, the link will show all PipelineRuns."),(0,i.kt)("h3",{id:"restart-a-build"},"Restart a build"),(0,i.kt)("p",null,"To restart a build:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start a shell in the console"),(0,i.kt)("li",{parentName:"ul"},"run the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tkn pipelineruns list\ntkn pipelinerun logs <pipelinerun-name> -f\n")),(0,i.kt)("p",null,"Build can be restarted by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," of the build or by restarting the pipeline manually:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start/open a shell in the console"),(0,i.kt)("li",{parentName:"ul"},"run the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tkn pipelines list\ntkn pipeline start <pipeline-name> --use-pipelinerun <pipelinerun-name>\n")))}d.isMDXComponent=!0}}]);