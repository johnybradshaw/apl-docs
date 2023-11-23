"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={slug:"lab-6",title:"Build images from application source",sidebar_label:"Build images"},i=void 0,o={unversionedId:"for-devs/get-started/lab-6",id:"for-devs/get-started/lab-6",title:"Build images from application source",description:"Harbor needs to be activated for this lab.",source:"@site/docs/for-devs/get-started/lab-6.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-6",permalink:"/docs/for-devs/get-started/lab-6",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-6.md",tags:[],version:"current",frontMatter:{slug:"lab-6",title:"Build images from application source",sidebar_label:"Build images"},sidebar:"mainSidebar",previous:{title:"Create GIT repos",permalink:"/docs/for-devs/get-started/lab-3"},next:{title:"Trigger builds",permalink:"/docs/for-devs/get-started/lab-26"}},u={},p=[{value:"Build the blue image",id:"build-the-blue-image",level:2},{value:"Re-run the build (optional)",id:"re-run-the-build-optional",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Harbor needs to be activated for this lab.")),(0,a.kt)("p",null,"When your team is using Harbor for private image registries, you can build images from source using pre-configured Tekton pipelines using the ",(0,a.kt)("a",{parentName:"p",href:"https://buildpacks.io/docs/buildpack-author-guide/package-a-buildpack/"},"paketo")," task or the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/kaniko"},"Kaniko")," task to build images from application source."),(0,a.kt)("h2",{id:"build-the-blue-image"},"Build the blue image"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the left menu, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Builds")),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Build")),(0,a.kt)("li",{parentName:"ol"},"Fill in the name ",(0,a.kt)("inlineCode",{parentName:"li"},"blue")," for your build and a tag (default tag is latest)"),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," and fill in the repo URL for the ",(0,a.kt)("inlineCode",{parentName:"li"},"blue")," repo created in the previous lab."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,a.kt)("p",null,"Otomi will now leverage Tekton Pipeline to build the image. To see the status of the build, go to Tekton App and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"PipelineRun")," of your build in the list of Builds. This will open the Tekton Dashboard and show the status of the PipelineRun of the build."),(0,a.kt)("p",null,"When the build is ready you can see the image in Harbor:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Harbor"),(0,a.kt)("li",{parentName:"ol"},"Click on the project of your team. Here you will see all the registries of the team, including the registry of the new build image")),(0,a.kt)("h2",{id:"re-run-the-build-optional"},"Re-run the build (optional)"),(0,a.kt)("p",null,"To run the build again using Otomi Console, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the tag of the build for example to ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0.0")),(0,a.kt)("li",{parentName:"ol"},"Submit changes")),(0,a.kt)("p",null,"To re-build the image using the same tag, restart the build pipeline using the Tekton cli in the Shell:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start a shell in Otomi Console")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get the name of the pipeline"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pipelines\nNAME                         AGE\ndocker-build-blue            41h\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Get the name of the pipelinerun:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pipelineruns\nNAME                       SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME\ndocker-build-blue-latest   True        Succeeded   41h         41h\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the pipeline using the pipelinerun:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkn pipeline start docker-build-blue --use-pipelinerun docker-build-blue-latest\nPipelineRun started: docker-build-blue-latest-j5mmt\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"In order to track the PipelineRun progress run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkn pipelinerun logs docker-build-blue-latest-j5mmt -f\n")),(0,a.kt)("p",null,"But it's much easier to just open the Tekton dashboard and Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"PipelineRuns"),"."))}d.isMDXComponent=!0}}]);