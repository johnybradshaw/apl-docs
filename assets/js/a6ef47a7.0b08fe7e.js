"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5039],{7305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),i=t(1151);const s={slug:"deploy-workloads-argo-cd-otomi-kubernetes",title:"Using Argo CD",sidebar_label:"Using Argo CD",description:"Learn how to deploy your applications on Kubernetes using Argo CD with this comprehensive guide. Discover how to manage resources effectively using Git and streamline your deployment process.",keywords:["Argo","ArgoCD","Otomi","Kubernetes","GitOps","Workloads","Deployment","Deploying","HowTo","Tutorial"]},r=void 0,a={id:"get-started/labs/lab-10",title:"Using Argo CD",description:"Learn how to deploy your applications on Kubernetes using Argo CD with this comprehensive guide. Discover how to manage resources effectively using Git and streamline your deployment process.",source:"@site/docs/get-started/labs/lab-10.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/deploy-workloads-argo-cd-otomi-kubernetes",permalink:"/docs/get-started/labs/deploy-workloads-argo-cd-otomi-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-10.md",tags:[],version:"current",frontMatter:{slug:"deploy-workloads-argo-cd-otomi-kubernetes",title:"Using Argo CD",sidebar_label:"Using Argo CD",description:"Learn how to deploy your applications on Kubernetes using Argo CD with this comprehensive guide. Discover how to manage resources effectively using Git and streamline your deployment process.",keywords:["Argo","ArgoCD","Otomi","Kubernetes","GitOps","Workloads","Deployment","Deploying","HowTo","Tutorial"]}},c={},l=[{value:"Create Kubernetes resources with Argo CD",id:"create-kubernetes-resources-with-argo-cd",level:2},{value:"See the Power of Argo CD in action",id:"see-the-power-of-argo-cd-in-action",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Creating Kubernetes resources using ",(0,o.jsx)(n.code,{children:"kubectl apply -f"})," can be inefficient. As a developer, managing resources based on code stored in Git enhances control and traceability. Otomi integrates with Argo CD to provide a seamless GitOps experience, streamlining your deployment process."]}),"\n",(0,o.jsx)(n.h2,{id:"create-kubernetes-resources-with-argo-cd",children:"Create Kubernetes resources with Argo CD"}),"\n",(0,o.jsx)(n.p,{children:"Start by navigating to the apps section in the Otomi console, where you will find an app named Argo CD. Click on it to proceed."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Argo CD App in Otomi Console",src:t(9530).Z+"",width:"3260",height:"2304"})}),"\n",(0,o.jsx)(n.p,{children:"In Argo CD, notice that an application specific to your team has already been set up. This application syncs with any manifest present in the Gitea repository designated for your team."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Argo CD Team Application Overview",src:t(5396).Z+"",width:"2992",height:"2314"})}),"\n",(0,o.jsxs)(n.p,{children:["After clicking on the app and selecting ",(0,o.jsx)(n.code,{children:"APP DETAILS"}),", you'll find the ",(0,o.jsx)(n.code,{children:"REPO URL"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Return to the Otomi console, select the Gitea app in the apps section. In Gitea you will see a repository titled ",(0,o.jsx)(n.code,{children:"otomi/team-<name>-argocd"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gitea Repository for Argo CD in Otomi",src:t(2195).Z+"",width:"2878",height:"1554"})}),"\n",(0,o.jsx)(n.h2,{id:"see-the-power-of-argo-cd-in-action",children:"See the Power of Argo CD in action"}),"\n",(0,o.jsx)(n.p,{children:"Let's demonstrate the capabilities of Argo CD by adding some manifests to the repository:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a file named ",(0,o.jsx)(n.code,{children:"deploy-nginx.yaml"})," in the repository."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Insert the following contents into the file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx\n  labels:\n    otomi.io/app: nginx\n    app: nginx\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginxinc/nginx-unprivileged:stable\n          resources:\n            limits:\n              memory: '128Mi'\n              cpu: '200m'\n            requests:\n              memory: '64Mi'\n              cpu: '100m'\n          ports:\n            - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - port: 80\n      targetPort: 8080\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Commit the changes to the repository."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Once you return to the Argo CD application, click on the ",(0,o.jsx)(n.code,{children:"team<name>"})," application."]}),"\n",(0,o.jsxs)(n.p,{children:["The application is configured for automatic syncing, so a manual ",(0,o.jsx)(n.code,{children:"SYNC"})," is not needed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Syncing in ArgoCD",src:t(7753).Z+"",width:"2900",height:"1484"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5396:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/argo-team-app-c542dc6043accbd15bd6e1341e0f2621.png"},2195:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/argo-team-repo-55d332f9a5cd3961872c7b4c2dc42c73.png"},7753:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/argo-team-sync-fadd7f408a457c16fc11e9faf568ee2a.png"},9530:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/team-app-argo-5e25da2c918c9bc350d9cde0d436c0cd.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);