"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={slug:"vault",title:"Hashicorp Vault",sidebar_label:"Hashicorp Vault"},i=void 0,l={unversionedId:"apps/vault",id:"apps/vault",title:"Hashicorp Vault",description:"HashiCorp Vault is a shared application for securely storing and managing secrets. Read more about Vault here.",source:"@site/docs/apps/vault.md",sourceDirName:"apps",slug:"/apps/vault",permalink:"/docs/apps/vault",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/vault.md",tags:[],version:"current",frontMatter:{slug:"vault",title:"Hashicorp Vault",sidebar_label:"Hashicorp Vault"},sidebar:"mainSidebar",previous:{title:"Tekton",permalink:"/docs/apps/tekton"},next:{title:"Velero",permalink:"/docs/apps/velero"}},s={},u=[{value:"Instructions",id:"instructions",level:2},{value:"Sign in with full access",id:"sign-in-with-full-access",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HashiCorp Vault is a shared application for securely storing and managing secrets. Read more about Vault ",(0,n.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/what-is-vault"},"here"),".\nVault has been made tenant aware in Otomi. When it is enabled, a space will automatically be created for each team, and only team members are allowed access. Vault is automatically configured to use Otomi's Keycloak OIDC settings to login users through Otomi's SSO."),(0,n.kt)("p",null,"Vault (like all parts of Otomi) runs natively on Kubernetes. To prevent data from Vault being lost during a rolling cluster upgrade, data persistence can be configured in combination with external (blob) storage. Read more ",(0,n.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/configuration/storage"},"here")," for configuring external data persistence."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("h3",{id:"sign-in-with-full-access"},"Sign in with full access"),(0,n.kt)("p",null,"If you would like to sign in into Vault with full access (and not with limited access provided by Otomi), you need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get the token")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get secret -n vault vault-unseal-keys -o jsonpath='{.data.vault-root}' | base64 -d | pbcopy\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Vault and sign in with method ",(0,n.kt)("inlineCode",{parentName:"p"},"token"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the token generated in step 1."))))}p.isMDXComponent=!0}}]);