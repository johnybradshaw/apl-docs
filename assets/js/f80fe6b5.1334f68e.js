"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9620],{9184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const o={slug:"lab-3",title:"Create a private Git repo",sidebar_label:"Create GIT repos"},r=void 0,l={id:"get-started/labs/lab-3",title:"Create a private Git repo",description:"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete self-hosted Git solution called Gitea.",source:"@site/docs/get-started/labs/lab-3.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-3",permalink:"/docs/get-started/labs/lab-3",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-3.md",tags:[],version:"current",frontMatter:{slug:"lab-3",title:"Create a private Git repo",sidebar_label:"Create GIT repos"},sidebar:"mainSidebar",previous:{title:"Prerequisites",permalink:"/docs/get-started/labs/lab-1"},next:{title:"Build images",permalink:"/docs/get-started/labs/lab-6"}},a={},d=[{value:"Using a Git client",id:"using-a-git-client",level:2},{value:"Create the private repository",id:"create-the-private-repository",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete self-hosted Git solution called Gitea."}),"\n",(0,i.jsx)(n.p,{children:"As a team member, you can create and manage your own repositories."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Team members first have to sign in to Gitea (using OpenID), after which they are automatically added to the correct team."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"otomi-admin"})," account is unable to login with OpenID, this account needs to login with the user/password login form."]})}),"\n",(0,i.jsxs)(n.p,{children:["In the labs we'll be using a Team called ",(0,i.jsx)(n.code,{children:"labs"})," and a user called ",(0,i.jsx)(n.code,{children:"labs-user"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"using-a-git-client",children:"Using a Git client"}),"\n",(0,i.jsx)(n.p,{children:"Gitea in Otomi only supports HTTPS for Git authentication. To connect to Git using HTTPS you'll first need to add a password to your account in Gitea:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sign in to Gitea using OpenID"}),"\n",(0,i.jsxs)(n.li,{children:["Click on your account (top right) and then click ",(0,i.jsx)(n.code,{children:"Settings"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fill in a password in the ",(0,i.jsx)(n.code,{children:"Account"})," tab"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After adding a password, you can now authenticate using your username (labs-user) and the password created in Gitea."}),"\n",(0,i.jsx)(n.h2,{id:"create-the-private-repository",children:"Create the private repository"}),"\n",(0,i.jsx)(n.p,{children:"In the apps section in Otomi console, you'll see an app called Gitea. Click on it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(1194).Z+"",width:"2930",height:"1916"})}),"\n",(0,i.jsx)(n.p,{children:"Now follow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Sign In"})," with OpenID"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(8379).Z+"",width:"2200",height:"1082"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"+ New Repository"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(9857).Z+"",width:"2926",height:"1224"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the name ",(0,i.jsx)(n.code,{children:"blue"})," for the repository"]}),"\n",(0,i.jsxs)(n.li,{children:["Optional: Enable ",(0,i.jsx)(n.code,{children:"Initialize Repository"})]}),"\n",(0,i.jsx)(n.li,{children:"Make Repository Private"}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Create Repository"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your repo is now ready to be used!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kubecfg",src:t(3471).Z+"",width:"2926",height:"1494"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following 2 files to the repository:"}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Dockerfile",children:"FROM nginxinc/nginx-unprivileged:stable\nCOPY blue.html /usr/share/nginx/html/index.html\nEXPOSE 8080\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"blue.html"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Sample Deployment</title>\n    <style>\n      body {\n        color: #ffffff;\n        background-color: blue;\n        font-family: Arial, sans-serif;\n        font-size: 14px;\n      }\n      h1 {\n        font-size: 500%;\n        font-weight: normal;\n        margin-bottom: 0;\n      }\n      h2 {\n        font-size: 200%;\n        font-weight: normal;\n        margin-bottom: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div align="center">\n      <h1>Welcome to Blue</h1>\n    </div>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the following labs we are going to use the ",(0,i.jsx)(n.code,{children:"blue"})," repository, but we'll also need a ",(0,i.jsx)(n.code,{children:"green"})," repository. Create the ",(0,i.jsx)(n.code,{children:"green"})," repository and add the 2 files, but change ",(0,i.jsx)(n.code,{children:"blue"})," into ",(0,i.jsx)(n.code,{children:"green"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8379:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gitea-openid-dca1d73e3512321edcd5fc9a3c290cb0.png"},3471:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-gitea-repo-ready-c7d9f13c78c08fbbec40d83ed7f59f45.png"},9857:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-gitea-repo-ae8b4ad9ecc7436acffaade0a79585d6.png"},1194:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/team-app-gitea-3e65e2076c06453640841d751ff8cce6.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);