"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={slug:"vultr",title:"Vultr",sidebar_label:"Vultr"},o="Install Otomi on Vultr",i={unversionedId:"get-started/installation/vultr",id:"get-started/installation/vultr",title:"Vultr",description:"Prerequisites",source:"@site/docs/get-started/installation/vultr.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/vultr",permalink:"/docs/get-started/installation/vultr",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/vultr.md",tags:[],version:"current",frontMatter:{slug:"vultr",title:"Vultr",sidebar_label:"Vultr"},sidebar:"mainSidebar",previous:{title:"Scaleway",permalink:"/docs/get-started/installation/scaleway"},next:{title:"Helm",permalink:"/docs/get-started/installation/helm"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Kubernetes cluster",id:"create-a-kubernetes-cluster",level:2},{value:"Configure DNS using Cloudflare",id:"configure-dns-using-cloudflare",level:2},{value:"Creating a Cloudflare DNS zone",id:"creating-a-cloudflare-dns-zone",level:3},{value:"Creating Cloudflare Credentials",id:"creating-cloudflare-credentials",level:3},{value:"Create the values.yaml file",id:"create-the-valuesyaml-file",level:2},{value:"Install Otomi using helm",id:"install-otomi-using-helm",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-otomi-on-vultr"},"Install Otomi on Vultr"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vultr/vultr-cli"},"Vultr CLI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Helm"))),(0,a.kt)("p",null,"Export your Vultr API Key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export VULTR_API_KEY=<your api key>\n")),(0,a.kt)("h2",{id:"create-a-kubernetes-cluster"},"Create a Kubernetes cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'vultr-cli kubernetes create \\\n    --label="otomi" \\\n    --region="ams" \\\n    --version="v1.27.7+1" \\\n    --node-pools="quantity:3,plan:vc2-4c-8gb,label:otomipool"\n')),(0,a.kt)("h2",{id:"configure-dns-using-cloudflare"},"Configure DNS using Cloudflare"),(0,a.kt)("p",null,"Because DNS support for Vultr is not available in Otomi yet, we'll use Cloudflare DNS."),(0,a.kt)("h3",{id:"creating-a-cloudflare-dns-zone"},"Creating a Cloudflare DNS zone"),(0,a.kt)("p",null,"We highly recommend to read this tutorial if you haven't used Cloudflare before:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-Cloudflare-account-and-add-a-website"},"Create a Cloudflare account and add a website")),(0,a.kt)("h3",{id:"creating-cloudflare-credentials"},"Creating Cloudflare Credentials"),(0,a.kt)("p",null,"Snippet from ",(0,a.kt)("a",{parentName:"p",href:"https://api.cloudflare.com/#getting-started-endpoints"},"Cloudflare - Getting Started"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cloudflare's API exposes the entire Cloudflare infrastructure via a standardized programmatic interface. Using Cloudflare's API, you can do just about anything you can do on cloudflare.com via the customer dashboard.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'The Cloudflare API is a RESTful API based on HTTPS requests and JSON responses. If you are registered with Cloudflare, you can obtain your API key from the bottom of the "My Account" page, found here: ',(0,a.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/profile"},"Go to My account"),".")),(0,a.kt)("p",null,"When using API Token authentication, the token should be granted Zone ",(0,a.kt)("inlineCode",{parentName:"p"},"Read"),", DNS ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," privileges, and access to ",(0,a.kt)("inlineCode",{parentName:"p"},"All zones"),"."),(0,a.kt)("p",null,"If you would like to further restrict the API permissions to a specific zone (or zones), you also need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zone-id-filter")," so that the underlying API requests only access the zones that you explicitly specify, as opposed to accessing all zones."),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"CF_API_TOKEN")," environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CF_API_TOKEN="Your Cloudflare API Token"\n')),(0,a.kt)("h2",{id:"create-the-valuesyaml-file"},"Create the values.yaml file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cluster:\n  name: otomi\n  provider: vultr\n  domainSuffix: linode.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters:\n    - example.com\n  provider:\n    cloudflare:\n      apiToken: $CF_API_TOKEN\n      proxied: false\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\n")),(0,a.kt)("h2",{id:"install-otomi-using-helm"},"Install Otomi using helm"),(0,a.kt)("p",null,"Install Otomi using Helm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\nhelm install -f values.yaml otomi otomi/otomi\n")),(0,a.kt)("p",null,"Monitor the logs of the installer job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs jobs/otomi -n default -f\n")),(0,a.kt)("p",null,"When the installer is finished, copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin-password")," from the console output."),(0,a.kt)("p",null,"Follow the activation steps ",(0,a.kt)("a",{parentName:"p",href:"https://otomi.io/docs/get-started/activation"},"here.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Like to learn how to use Otomi? Go through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/for-devs/get-started/overview"},"Get Started labs"))))}d.isMDXComponent=!0}}]);