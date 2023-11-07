"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={slug:"linode",title:"Linode",sidebar_label:"Linode"},l="# Install Otomi on Linode Kubernetes Engine (LKE) with Linode DNS",r={unversionedId:"get-started/installation/linode",id:"get-started/installation/linode",title:"Linode",description:"Install Otomi on Linode Kubernetes Engine (LKE) with Linode DNS",source:"@site/docs/get-started/installation/linode.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/linode",permalink:"/docs/get-started/installation/linode",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/linode.md",tags:[],version:"current",frontMatter:{slug:"linode",title:"Linode",sidebar_label:"Linode"},sidebar:"mainSidebar",previous:{title:"Google Cloud Platform",permalink:"/docs/get-started/installation/gcp"},next:{title:"Scaleway",permalink:"/docs/get-started/installation/scaleway"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Linode Kubernetes cluster",id:"configure-linode-kubernetes-cluster",level:2},{value:"Configure DNS",id:"configure-dns",level:2},{value:"Creating Linode Credentials",id:"creating-linode-credentials",level:3},{value:"Create the values.yaml file",id:"create-the-valuesyaml-file",level:2},{value:"Install Otomi using helm",id:"install-otomi-using-helm",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-install-otomi-on-linode-kubernetes-engine-lke-with-linode-dns"},"# Install Otomi on Linode Kubernetes Engine (LKE) with Linode DNS"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.linode.com/"},"linode-access"))),(0,i.kt)("h2",{id:"configure-linode-kubernetes-cluster"},"Configure Linode Kubernetes cluster"),(0,i.kt)("p",null,"Configure the LKE cluster with the following specs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"K8s version: ",(0,i.kt)("inlineCode",{parentName:"li"},"1.27")),(0,i.kt)("li",{parentName:"ul"},"Enable HA Control Plane"),(0,i.kt)("li",{parentName:"ul"},"Dedicated CPU: Dedicated 8 GB Plan, 4 CPUs, 160 GB Storage")),(0,i.kt)("p",null,"Download the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Update the KUBECONFIG env to gain access to the cluster\nexport KUBECONFIG=<path-to-downloads>/otomi--kubeconfig.yaml\n")),(0,i.kt)("h2",{id:"configure-dns"},"Configure DNS"),(0,i.kt)("admonition",{title:"AlERT",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Support for Linode DNS is tested, but not officially released yet!")),(0,i.kt)("p",null,"If you want to learn about how to use Linode DNS Manager read the following tutorials:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.linode.com/docs/platform/manager/dns-manager/"},"An Introduction to Managing DNS"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://www.linode.com/docs/networking/dns/"},"general documentation")),(0,i.kt)("h3",{id:"creating-linode-credentials"},"Creating Linode Credentials"),(0,i.kt)("p",null,"Generate a new oauth token by following the instructions at ",(0,i.kt)("a",{parentName:"p",href:"https://developers.linode.com/api/v4#section/Access-and-Authentication"},"Access-and-Authentication")),(0,i.kt)("p",null,"Set environment variable for the token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'LINODE_TOKEN="<your-token-here>"\n')),(0,i.kt)("p",null,"The environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"LINODE_TOKEN")," will be needed to run ExternalDNS with Linode."),(0,i.kt)("h2",{id:"create-the-valuesyaml-file"},"Create the values.yaml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tee values.yaml<<EOF\ncluster:\n  name: otomi\n  provider: linode\n  domainSuffix: linode.example.com\notomi:\n  hasExternalDNS: true\n  version: linode-dns\ndns:\n  domainFilters: \n    - example.com\n  provider:\n    linode:\n      apiToken: $LINODE_TOKEN\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\nEOF\n")),(0,i.kt)("p",null,"And adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"domainSuffix"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"domainFilters")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),"."),(0,i.kt)("h2",{id:"install-otomi-using-helm"},"Install Otomi using helm"),(0,i.kt)("p",null,"Install Otomi using Helm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\nhelm install -f values.yaml otomi otomi/otomi\n")),(0,i.kt)("p",null,"Monitor the logs of the installer job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs jobs/otomi -n default -f\n")),(0,i.kt)("p",null,"When the installer is finished, copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin-password")," from the console output."),(0,i.kt)("p",null,"Follow the activation steps ",(0,i.kt)("a",{parentName:"p",href:"https://otomi.io/docs/get-started/activation"},"here.")))}p.isMDXComponent=!0}}]);