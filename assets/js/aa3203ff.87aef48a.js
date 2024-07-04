"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2144],{4037:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=n(5893),l=n(1151);const s={slug:"builds",title:"Team Builds",sidebar_label:"Builds"},o=void 0,r={id:"for-devs/console/builds",title:"Team Builds",description:"A Build in Otomi is a self-service feature for building OCI compliant images based on application source code.",source:"@site/docs/for-devs/console/builds.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/builds",permalink:"/docs/for-devs/console/builds",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/console/builds.md",tags:[],version:"current",frontMatter:{slug:"builds",title:"Team Builds",sidebar_label:"Builds"},sidebar:"mainSidebar",previous:{title:"Projects",permalink:"/docs/for-devs/console/projects"},next:{title:"Workloads",permalink:"/docs/for-devs/console/workloads"}},d={},c=[{value:"Builds (all)",id:"builds-all",level:2},{value:"Create a build",id:"create-a-build",level:2},{value:"Docker",id:"docker",level:3},{value:"Buildpacks",id:"buildpacks",level:3},{value:"Build status details",id:"build-status-details",level:3},{value:"Configure a webhook for the Git repo in Gitea",id:"configure-a-webhook-for-the-git-repo-in-gitea",level:3},{value:"Expose the trigger listener publicly",id:"expose-the-trigger-listener-publicly",level:3},{value:"Restart a build",id:"restart-a-build",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"A Build in Otomi is a self-service feature for building OCI compliant images based on application source code."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"Ask your platform administrator to activate Harbor to use this feature."})}),"\n",(0,t.jsx)(i.h2,{id:"builds-all",children:"Builds (all)"}),"\n",(0,t.jsx)(i.p,{children:"All Builds of the team are listed here."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Team builds",src:n(4570).Z+"",width:"2256",height:"1498"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Name"}),(0,t.jsx)(i.td,{children:"The name of the build"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsxs)(i.td,{children:["Type of the build. ",(0,t.jsx)(i.code,{children:"buildpacks"})," or ",(0,t.jsx)(i.code,{children:"docker"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Webhook url"}),(0,t.jsxs)(i.td,{children:["The ",(0,t.jsx)(i.code,{children:"copy to clipboard"})," webhook URL if a trigger is configured for the build"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Tekton"}),(0,t.jsx)(i.td,{children:"Link to the `PipelineRun`` of the build in the Tekton dashboard"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Repository"}),(0,t.jsxs)(i.td,{children:["The ",(0,t.jsx)(i.code,{children:"copy to clipboard"})," repository name of the image"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Tag"}),(0,t.jsx)(i.td,{children:"The tag of the image"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Status"}),(0,t.jsx)(i.td,{children:"The status of the Build. If the Build has failed. click on the Tekton link to see more details"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"create-a-build",children:"Create a build"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Enter a name for the build"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The name of the build will be used for the registry name of the image (",(0,t.jsx)(i.code,{children:"harbor.<domainSuffix>/team-name/build-name"}),")"]}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsx)(i.li,{children:"(optional) Adjust the tag"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The tag will be used to tag the image  (",(0,t.jsx)(i.code,{children:"harbor.<domainSuffix>/team-name/build-name:tag"}),")"]}),"\n",(0,t.jsx)(i.p,{children:"Now choose the type of the build:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.code,{children:"Docker"})," to build an image using the ",(0,t.jsx)(i.code,{children:"./Dockerfile"})," in your code repository"]}),"\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.code,{children:"Buildpacks"})," to build an image from application source using Buildpacks"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"docker",children:"Docker"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Add the URL of the repository that contains the application source code."}),"\n",(0,t.jsxs)(i.li,{children:["(optional) Change the path of the ",(0,t.jsx)(i.code,{children:"Dockerfile"}),". Default is ",(0,t.jsx)(i.code,{children:"./Dockerfile"}),". To use a Dockerfile is a specific folder, use ",(0,t.jsx)(i.code,{children:"./folder/Dockerfile"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"(optional) Change the revision. This can be a commit, a tag, or a branch."}),"\n",(0,t.jsxs)(i.li,{children:["(Optional) Select ",(0,t.jsx)(i.code,{children:"External Repo"})," if the repository used for the Build is not a public or a private Git repo in the local Gitea. When selected, fill in the secret name that contains the required SSH credentials. Read more ",(0,t.jsx)(i.a,{href:"https://tekton.dev/docs/how-to-guides/clone-repository/#git-authentication",children:"here"})," about how to setup SSH authentication with your Git provider."]}),"\n",(0,t.jsx)(i.li,{children:"(optional) Select to create an event listener to trigger the build based on a Gitea webhook."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"buildpacks",children:"Buildpacks"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Add the URL of the Git repository that contains the application source code"}),"\n",(0,t.jsx)(i.li,{children:"(optional) Add the path. This is a subpath within the repo where the source to build is located"}),"\n",(0,t.jsx)(i.li,{children:"(optional) Change the revision. This can be a commit, a tag, or a branch"}),"\n",(0,t.jsx)(i.li,{children:"(optional) Add Environment variables to set during build-time"}),"\n",(0,t.jsxs)(i.li,{children:["(Optional) Select ",(0,t.jsx)(i.code,{children:"External Repo"})," if the repository used for the Build is not a public or a private Git repo in the local Gitea. When selected, fill in the secret name that contains the required SSH credentials. Read more ",(0,t.jsx)(i.a,{href:"https://tekton.dev/docs/how-to-guides/clone-repository/#git-authentication",children:"here"})," about how to setup SSH authentication with your Git provider."]}),"\n",(0,t.jsx)(i.li,{children:"(optional) Select to create an event listener to trigger the build based on a Gitea webhook."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"build-status-details",children:"Build status details"}),"\n",(0,t.jsxs)(i.p,{children:["To see the more status details of the build, click on the ",(0,t.jsx)(i.code,{children:"PipelineRun"})," link of the build in the list of builds. If a trigger is configured, the link will show all PipelineRuns."]}),"\n",(0,t.jsx)(i.h3,{id:"configure-a-webhook-for-the-git-repo-in-gitea",children:"Configure a webhook for the Git repo in Gitea"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["In Otomi Console, click on ",(0,t.jsx)(i.code,{children:"apps"})," the left menu and then open ",(0,t.jsx)(i.code,{children:"Gitea"})]}),"\n",(0,t.jsxs)(i.li,{children:["In the top menu of Gitea, click on ",(0,t.jsx)(i.code,{children:"Explore"})," and then on the ",(0,t.jsx)(i.code,{children:"green"})," repo"]}),"\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.code,{children:"Settings"})," (top right) and then to ",(0,t.jsx)(i.code,{children:"Webhooks"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.code,{children:"Add Webhook"})," and select ",(0,t.jsx)(i.code,{children:"Gitea"})]}),"\n",(0,t.jsxs)(i.li,{children:["In the ",(0,t.jsx)(i.code,{children:"Target URL"}),", paste the webhook URL from your clipboard."]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.code,{children:"Add Webhook"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"expose-the-trigger-listener-publicly",children:"Expose the trigger listener publicly"}),"\n",(0,t.jsx)(i.p,{children:"When using an external (private) Git repository, the trigger event listener that is created by Otomi can also be exposed publicly. To expose the event listener publicly:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Go to Services"}),"\n",(0,t.jsx)(i.li,{children:"Click create new service"}),"\n",(0,t.jsxs)(i.li,{children:["Select the ",(0,t.jsx)(i.code,{children:"el-gitea-webhook-<build-name>"})," internal service"]}),"\n",(0,t.jsxs)(i.li,{children:["Under ",(0,t.jsx)(i.code,{children:"Exposure"}),", select ",(0,t.jsx)(i.code,{children:"External"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.code,{children:"Submit"})," and the ",(0,t.jsx)(i.code,{children:"Deploy Changes"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"restart-a-build",children:"Restart a build"}),"\n",(0,t.jsx)(i.p,{children:"To restart a build:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Start a shell in the console"}),"\n",(0,t.jsx)(i.li,{children:"run the following command:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"tkn pipelineruns list\ntkn pipelinerun logs <pipelinerun-name> -f\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Build can be restarted by changing the ",(0,t.jsx)(i.code,{children:"tag"})," of the build or by restarting the pipeline manually:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Start/open a shell in the console"}),"\n",(0,t.jsx)(i.li,{children:"run the following command:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"tkn pipelines list\ntkn pipeline start <pipeline-name> --use-pipelinerun <pipelinerun-name>\n"})})]})}function h(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4570:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/team-builds-e662547a2ca3a3ce914168b5f65c9955.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(7294);const l={},s=t.createContext(l);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);