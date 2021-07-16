(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(167)),i={slug:"apps/vault",title:"Working with Hashicorp Vault",sidebar_label:"Hashicorp Vault"},s={unversionedId:"app-vault",id:"app-vault",isDocsHomePage:!1,title:"Working with Hashicorp Vault",description:"Vault is a tool for safe use of secrets. A secret is something (e.g. a password) to which you want to restrict access and to be able to find out who used which secret based on an audit log. Read more about Vault here",source:"@site/docs/app-vault.md",slug:"/apps/vault",permalink:"/docs/apps/vault",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/app-vault.md",version:"current",sidebar_label:"Hashicorp Vault",sidebar:"mainSidebar",previous:{title:"Working with Kubeapps",permalink:"/docs/apps/kubeapps"},next:{title:"Working with Gatekeeper Operator",permalink:"/docs/apps/gatekeeper"}},c=[],u={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Vault is a tool for safe use of secrets. A secret is something (e.g. a password) to which you want to restrict access and to be able to find out who used which secret based on an audit log. Read more about Vault ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.vaultproject.io/docs/what-is-vault"}),"here")),Object(o.b)("p",null,"HashiCorp Vault is a shared application for securely storing and managing secrets. Vault has been made tennant aware in Otomi. When Vault is enabled, each team will automatically be provided with a space in Vault and is only allowed to see and manage secrets owned by the team. Vault uses the generic Otomi integration options for user management. Based on the roles in Otomi, users get access to a space in Vault. A team user automatically gains access to the secrets of the team. The authentication (via OIDC) is also integrated offering SSO."),Object(o.b)("p",null,"Vault (like all parts of Otomi) runs natively on Kubernetes. To prevent data from Vault being lost during a rolling cluster upgrade, data persistence can be configured in combination with external (blob) storage. Read more ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.vaultproject.io/docs/configuration/storage/azure"}),"here")," for configuring data persistence for Vault on Azure."))}l.isMDXComponent=!0},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?n.a.createElement(f,s(s({ref:t},u),{},{components:r})):n.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);