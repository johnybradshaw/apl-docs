"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1785],{6582:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(5893),s=o(1151);const i={slug:"otomi",title:"Clone Otomi Instance",sidebar_label:"Clone Otomi"},l=void 0,a={id:"for-ops/how-to/clone-otomi",title:"Clone Otomi Instance",description:"It may happen that you need to move Otomi to another Kubernetes cluster. Because Otomi is a GitOps driven platfrom, you can export existing values that can then be used to install a new Otomi instance.",source:"@site/docs/for-ops/how-to/clone-otomi.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/otomi",permalink:"/docs/for-ops/how-to/otomi",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/clone-otomi.md",tags:[],version:"current",frontMatter:{slug:"otomi",title:"Clone Otomi Instance",sidebar_label:"Clone Otomi"},sidebar:"mainSidebar",previous:{title:"Use Core only",permalink:"/docs/for-ops/how-to/core-only"},next:{title:"Backups",permalink:"/docs/for-ops/how-to/backups"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Download values file",id:"download-values-file",level:3},{value:"Use the values to install a new Otomi instance",id:"use-the-values-to-install-a-new-otomi-instance",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"It may happen that you need to move Otomi to another Kubernetes cluster. Because Otomi is a GitOps driven platfrom, you can export existing values that can then be used to install a new Otomi instance."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This procedure does not cover cloning the persistent volumes from your old cluster."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Otomi version >= ",(0,t.jsx)(n.code,{children:"v2.6"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"download-values-file",children:"Download values file"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Sign in as an admin"}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.code,{children:"platform"})," view in the top bar"]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"Maintenance"})," page in the left menu bar"]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.code,{children:"Download Otomi values"})," link"]}),"\n",(0,t.jsxs)(n.li,{children:["The values should be in your ",(0,t.jsx)(n.code,{children:"Downloads"})," folder."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"It is advised to keep this file save as it contains passwords and access credentials."})}),"\n",(0,t.jsx)(n.h3,{id:"use-the-values-to-install-a-new-otomi-instance",children:"Use the values to install a new Otomi instance"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on your use case, you may need to change some settings from the ",(0,t.jsx)(n.code,{children:"values.yaml"})," file before using it to install a new Otomi instance. The most common use cases:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Change the ",(0,t.jsx)(n.code,{children:"domianSuffix"})]}),"\n",(0,t.jsx)(n.li,{children:"Change the team service URLs"}),"\n",(0,t.jsx)(n.li,{children:"Change the access credentials to cloud resources"}),"\n",(0,t.jsxs)(n.li,{children:["Change the Otomi ",(0,t.jsx)(n.code,{children:"license"})," key"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.code,{children:"values.yaml"})," file is ready you can use Helm to install Otomi on to a new Kubernetes cluster:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install -f values.yaml otomi otomi/otomi\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>l});var t=o(7294);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);