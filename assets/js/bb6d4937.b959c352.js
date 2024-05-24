"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9637],{9701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(5893),i=n(1151);const a={slug:"activation",title:"Activation steps",sidebar_label:"Activation"},r=void 0,s={id:"get-started/activation",title:"Activation steps",description:"Follow the steps below to activate Otomi after initial installation.",source:"@site/docs/get-started/activation.md",sourceDirName:"get-started",slug:"/get-started/activation",permalink:"/docs/get-started/activation",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/activation.md",tags:[],version:"current",frontMatter:{slug:"activation",title:"Activation steps",sidebar_label:"Activation"},sidebar:"mainSidebar",previous:{title:"BYO Wild Card Cert",permalink:"/docs/get-started/installation/byo-wildcard-cert"},next:{title:"Labs Overview",permalink:"/docs/get-started/labs/overview"}},l={},d=[{value:"Step 1: Get the log output of the installer job",id:"step-1-get-the-log-output-of-the-installer-job",level:2},{value:"Step 2 (optional): Add the auto generated CA to your keychain",id:"step-2-optional-add-the-auto-generated-ca-to-your-keychain",level:2},{value:"Step 3 (Optional): Create a new admin user",id:"step-3-optional-create-a-new-admin-user",level:2},{value:"Step 4 (Optional): Add the URL of the Kubernetes API",id:"step-4-optional-add-the-url-of-the-kubernetes-api",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Follow the steps below to activate Otomi after initial installation."}),"\n",(0,o.jsx)(t.h2,{id:"step-1-get-the-log-output-of-the-installer-job",children:"Step 1: Get the log output of the installer job"}),"\n",(0,o.jsx)(t.p,{children:"When the installer job (in the default namespace) has finished, copy the URL and the generated password from the bottom of the logs, sign in to the console with the provided URL, username and password."}),"\n",(0,o.jsx)(t.p,{children:"Use the following command to get the logs of the installer job:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"kubectl logs jobs/otomi -n default -f\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-2-optional-add-the-auto-generated-ca-to-your-keychain",children:"Step 2 (optional): Add the auto generated CA to your keychain"}),"\n",(0,o.jsx)(t.p,{children:"Otomi by default automatically generates a CA. The generated CA is of course not trusted on your local machine. Here are some options to prevent you from clicking away lots of security warning in your browser:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'In the left menu of the console, click on "Download CA"'}),"\n",(0,o.jsx)(t.li,{children:"Double click the downloaded CA.crt or add the CA to your keychain on Mac using the following command:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt\n"})}),"\n",(0,o.jsx)(t.p,{children:"On Windows, use PowerShell (running as Administrator) with the Certutil:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",children:"certutil.exe -addstore root <downloaded cert path>\n"})}),"\n",(0,o.jsx)(t.p,{children:"Or:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-powershell",children:'Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\\LocalMachine\\Root\n# Restart the browser\n'})}),"\n",(0,o.jsx)(t.p,{children:"But you could also run Chrome in insecure mode:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"alias chrome-insecure='/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsx)(t.li,{children:"Optional: Restart Docker (to support pushing images to Harbor)"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-3-optional-create-a-new-admin-user",children:"Step 3 (Optional): Create a new admin user"}),"\n",(0,o.jsx)(t.admonition,{title:"ATTENTION",type:"info",children:(0,o.jsxs)(t.p,{children:["We strongly advise to not use the default ",(0,o.jsx)(t.code,{children:"otomi-admin"})," account after activation and to not change the password. Store it somewhere safe and only use it in case absolutely required."]})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/apps/keycloak#create-a-user-in-keycloak",children:"Create a new user account in Keycloak"})," and add the new user to the ",(0,o.jsx)(t.code,{children:"otomi-admin"})," and ",(0,o.jsx)(t.code,{children:"team-admin"})," group."]}),"\n",(0,o.jsx)(t.h2,{id:"step-4-optional-add-the-url-of-the-kubernetes-api",children:"Step 4 (Optional): Add the URL of the Kubernetes API"}),"\n",(0,o.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,o.jsx)(t.p,{children:"Adding the URL of the K8s cluster API is required by teams to be able to download the KUBECONFIG"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Under ",(0,o.jsx)(t.code,{children:"Platform"})," in Otomi Console, click on ",(0,o.jsx)(t.code,{children:"Settings"})]}),"\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.code,{children:"Cluster"})]}),"\n",(0,o.jsx)(t.li,{children:"Add the full URL of the API server"}),"\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.code,{children:"Submit"})]}),"\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.code,{children:"Deploy Changes"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(7294);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);