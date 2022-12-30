"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={slug:"part-3",title:"Push your container images",sidebar_label:"Part 3"},i=void 0,l={unversionedId:"for-devs/get-started/part-3",id:"for-devs/get-started/part-3",title:"Push your container images",description:"Now that you have kubectl access to your team namespace, you are ready to deploy your first container. When the platform administrator created your team, a private container registry has been automatically created for your team in Harbor and a pull secret has been added to your team namespace. To be able to push container images to your private repository, you'll first need to create a robot-account in your Harbor project with push access rights.",source:"@site/docs/for-devs/get-started/part-3.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/part-3",permalink:"/docs/for-devs/get-started/part-3",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/part-3.md",tags:[],version:"current",frontMatter:{slug:"part-3",title:"Push your container images",sidebar_label:"Part 3"},sidebar:"mainSidebar",previous:{title:"Part 2",permalink:"/docs/for-devs/get-started/part-2"},next:{title:"Part 4",permalink:"/docs/for-devs/get-started/part-4"}},s={},c=[{value:"Access Harbor UI",id:"access-harbor-ui",level:2},{value:"Login to Harbor",id:"login-to-harbor",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that you have kubectl access to your team namespace, you are ready to deploy your first container. When the platform administrator created your team, a private container registry has been automatically created for your team in Harbor and a pull secret has been added to your team namespace. To be able to push container images to your private repository, you'll first need to create a robot-account in your Harbor project with push access rights."),(0,o.kt)("h2",{id:"access-harbor-ui"},"Access Harbor UI"),(0,o.kt)("p",null,"In the apps section in Otomi console, you'll see an app called Harbor. Click on it and follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Login via OIDC provider"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"oidc",src:r(4419).Z,width:"2198",height:"1458"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set your OIDC user name")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"harbor-oidc",src:r(3767).Z,width:"1344",height:"776"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In Harbor you'll all the projects of the teams that you are a member of")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"harbor-projects",src:r(2946).Z,width:"2474",height:"1378"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the project of your team. Here you will see all team repositories")),(0,o.kt)("h2",{id:"login-to-harbor"},"Login to Harbor"),(0,o.kt)("p",null,"To be able to push images to Harbor, you'll need a robot account with push permissions. At the moment Harbor does not allow the ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer")," role permissions to create robot accounts. So for now you will need to ask the platform administrator to create one for you. In the near future we will add the option to download the Docker login credentials in Otomi Console."),(0,o.kt)("p",null,"When you have received the username and token of the created robot account, then you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"login")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker login -u 'otomi-<team-name>-push' -p <token> harbor.<your-domain>\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If Docker refuses to connect with an error\n",(0,o.kt)("inlineCode",{parentName:"p"},"x509: certificate signed by unknown authority"),", go to the Otomi Console,\nand click ",(0,o.kt)("inlineCode",{parentName:"p"},"Download CA")," (if you have not done so already); then copy the\nobtained file to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.docker/ca.crt")," or restart docker desktop."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build and tag your image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t harbor.<your-domain>/<team-name>/<image-name>:<tag> .\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Push the image to Harbor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker push harbor.<your-domain>/<team-name>/<image-name>:<tag>\n")))}p.isMDXComponent=!0},4419:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harbor-oidc-d75571afb9485dee778fee74cb6b33d9.png"},2946:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harbor-projects-1eeb9db71bd67b284169f5ea4494dc14.png"},3767:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harbor-user-name-ce1b5f1731671cd0a8d46d4967eb680f.png"}}]);