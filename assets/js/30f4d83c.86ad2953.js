"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(i,".").concat(p)]||h[p]||d[p]||o;return n?l.createElement(m,s(s({ref:t},c),{},{components:n})):l.createElement(m,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const o={slug:"shell",title:"Shell (TTY Console)",sidebar_label:"Shell"},s=void 0,a={unversionedId:"for-devs/console/shell",id:"for-devs/console/shell",title:"Shell (TTY Console)",description:"The Shell feature allows to start a web based shell in Console with Kube API access. When starting a shell, a dedicated shell instance will be started for the user. The shell includes the following tools:",source:"@site/docs/for-devs/console/shell.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/shell",permalink:"/docs/for-devs/console/shell",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/console/shell.md",tags:[],version:"current",frontMatter:{slug:"shell",title:"Shell (TTY Console)",sidebar_label:"Shell"},sidebar:"mainSidebar",previous:{title:"Secrets",permalink:"/docs/for-devs/console/secrets"},next:{title:"Deploy Changes",permalink:"/docs/for-devs/console/deploy-changes"}},i={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Logging In",id:"logging-in",level:3},{value:"Accessing Your Kubernetes Namespace",id:"accessing-your-kubernetes-namespace",level:3},{value:"Using the Shell",id:"using-the-shell",level:2},{value:"Basic Commands and Shortcuts",id:"basic-commands-and-shortcuts",level:3},{value:"Working with Tmux",id:"working-with-tmux",level:3},{value:"Session Management",id:"session-management",level:2},{value:"Browser Crash Resilience",id:"browser-crash-resilience",level:3},{value:"Ending Sessions",id:"ending-sessions",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Shell feature allows to start a web based shell in Console with Kube API access. When starting a shell, a dedicated shell instance will be started for the user. The shell includes the following tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/"},"Kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://k9scli.io/"},"K9s")),(0,r.kt)("li",{parentName:"ul"},"Tekton CLI")),(0,r.kt)("p",null,"When running the shell as a member of a team, the shell will allow only provide acccess to resources in the team namespace."),(0,r.kt)("p",null,"The Shell provides an easy and efficient way to access and manage Kubernetes resources directly from your browser, eliminating the need for complex VPN setups or external tools. This guide will walk you through the steps of using the TTY Console effectively:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simplified Access"),": Access your Kubernetes cluster without the hassle of VPNs or additional tools."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Identity-Based Access"),": Leverage your group membership from an Identity Provider, such as Azure AD, for secure access to your Kubernetes namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Efficient Interface"),": Utilize essential Kubernetes management tools and perform tasks seamlessly.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"logging-in"},"Logging In"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your Otomi account."),(0,r.kt)("li",{parentName:"ol"},"Upon successful login, you'll be directed to the platform dashboard.")),(0,r.kt)("h3",{id:"accessing-your-kubernetes-namespace"},"Accessing Your Kubernetes Namespace"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Locate and click on the "Shell" option on the left-hand side of the dashboard.'),(0,r.kt)("li",{parentName:"ol"},"You'll be connected to the TTY Console interface, granting direct access to your Kubernetes namespace.")),(0,r.kt)("h2",{id:"using-the-shell"},"Using the Shell"),(0,r.kt)("h3",{id:"basic-commands-and-shortcuts"},"Basic Commands and Shortcuts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utilize the ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," command to interact with your Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},"Benefit from the convenient ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," shortcut for ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," with bash-completion."),(0,r.kt)("li",{parentName:"ul"},"Explore various tools, all available within the console:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"k9s"),": Gain insights into your Kubernetes resources with an intuitive UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Velero Cli"),": Manage cluster backups effortlessly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tekton Cli"),": Monitor Project pipelines efficiently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Other Tools"),": Tools like ",(0,r.kt)("inlineCode",{parentName:"li"},"jq"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"yq"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"curl")," are at your disposal for enhanced functionality.")))),(0,r.kt)("h3",{id:"working-with-tmux"},"Working with Tmux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're a Tmux enthusiast, enjoy the ability to create multiple windows and panes for multitasking."),(0,r.kt)("li",{parentName:"ul"},"This feature enhances your productivity by allowing you to organize your workspace effectively.")),(0,r.kt)("h2",{id:"session-management"},"Session Management"),(0,r.kt)("h3",{id:"browser-crash-resilience"},"Browser Crash Resilience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The TTY Console is designed to be resilient in the face of browser crashes."),(0,r.kt)("li",{parentName:"ul"},"If your browser unexpectedly crashes, your session remains intact."),(0,r.kt)("li",{parentName:"ul"},"You can simply reopen the browser and resume your Kubernetes management tasks.")),(0,r.kt)("h3",{id:"ending-sessions"},"Ending Sessions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you're finished with your Kubernetes management tasks, remember to properly end your session by clicking the recycle bin button on the top right of the TTY window. This will delete your session."),(0,r.kt)("li",{parentName:"ul"},"Logging out of your session will also have the same effect")))}d.isMDXComponent=!0}}]);