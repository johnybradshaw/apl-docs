"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3120],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<n;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5282:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(7462),i=(o(7294),o(3905));const n={slug:"ci-cd",title:"CI/CD",sidebar_label:"CI/CD"},a=void 0,s={unversionedId:"use-cases/ci-cd",id:"use-cases/ci-cd",title:"CI/CD",description:"Introduction",source:"@site/product/use-cases/ci-cd.md",sourceDirName:"use-cases",slug:"/use-cases/ci-cd",permalink:"/product/use-cases/ci-cd",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/ci-cd.md",tags:[],version:"current",lastUpdatedBy:"Sander Rodenhuis",lastUpdatedAt:1699019557,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{slug:"ci-cd",title:"CI/CD",sidebar_label:"CI/CD"},sidebar:"mainSidebar",previous:{title:"Multi-tenancy",permalink:"/product/use-cases/multi-tenancy"},next:{title:"Serverless",permalink:"/product/use-cases/serverless"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"CI with Otomi",id:"ci-with-otomi",level:2},{value:"CD with Otomi",id:"cd-with-otomi",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Otomi adds developer- and operations-centric tools, automation and self-service on top of Kubernetes. The integrated tools mainly focus on Continuous Deployment  (to automatically deploy code changes after the build stage) and on all runtime controls. When using Otomi, we advice to setup a seprate CI environment (using specialized CI tools like GitHub Actions or CircleCI) where artifacts (images) are build and then pushed to an image registry (like Harbor provided by Otomi). But with integrated tools like Gitea and Drone, Otomi can in some cases also be used for Continuous Integration (CI). This can be especially interesting in greenfield environments (where there is (not yet) a full CI toolset implemented) or in isolated environments (where developers don't have access to cloud CI services)."),(0,i.kt)("h2",{id:"ci-with-otomi"},"CI with Otomi"),(0,i.kt)("p",null,"Users on the platform can get access to an organization in Gitea. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitea.io/en-us/comparison/"},"here")," for a full list of all Gitea features and a comparison with other self-hosted Git solutions. By adding a Drone pipeline to a Git repository, users can take advantage of Drone to automate steps in the software delivery process, such as initiating code builds, running automated tests, and pushing images to a private image registry in harbor."),(0,i.kt)("p",null,"Next to using Drone for build pipelines, Otomi also includes Tekton pipelines. Tekton is used for the build feature in Otomi. The build feature can be used to build images from source using Kaniko (when there is a Docker file), or Buildpacks. To use the build feature, source code needs to be in a private Gitea repo, or in a public git repo. Other private repo's can also be replicated to Gitea."),(0,i.kt)("h2",{id:"cd-with-otomi"},"CD with Otomi"),(0,i.kt)("p",null,"The most common workflow when using Otomi starts when an artifact (image) has been build. Using the workloads feature in Otomi, images can be used in 3 supported types of workloads:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A Kubernetes ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment"),", combined with an ","[HPA]","(",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/"},"https://kubernetes.io/docs/tasks/")),(0,i.kt)("li",{parentName:"ol"},"(if Knative is enabled) A ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#service"},"Knative service")),(0,i.kt)("li",{parentName:"ol"},"A custom (BYO) Helm chart")),(0,i.kt)("p",null,"Otomi uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi-charts")," repository that contains a library of curated Helm charts that are used to deploy the supported workload types. When a workload specification (a combination of a Helm chart with custom values) has been created, Otomi automatically creates an Argo CD applicationset that deploys the configured chart. A workload can also be configured with the ",(0,i.kt)("a",{parentName:"p",href:"https://argocd-image-updater.readthedocs.io/en/stable/"},"Argo CD Image Updater")," that can check for new versions of the container images that are deployed with the workload and automatically update the workload to the latest allowed version. The Argo CD Image Updater is only supported in combination with Otomi workloads and images stored in Harbor."))}d.isMDXComponent=!0}}]);