"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6248],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={slug:"apps/gitea",title:"Working with Gitea",sidebar_label:"Gitea"},l=void 0,c={unversionedId:"app-gitea",id:"app-gitea",title:"Working with Gitea",description:"Introduction",source:"@site/docs/app-gitea.md",sourceDirName:".",slug:"/apps/gitea",permalink:"/docs/apps/gitea",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/app-gitea.md",tags:[],version:"current",frontMatter:{slug:"apps/gitea",title:"Working with Gitea",sidebar_label:"Gitea"},sidebar:"mainSidebar",previous:{title:"ExternalDNS",permalink:"/docs/apps/external-dns"},next:{title:"Grafana",permalink:"/docs/apps/grafana"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Gitea for GitOps",id:"gitea-for-gitops",level:2},{value:"Role based access",id:"role-based-access",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Gitea is a community managed lightweight code hosting solution written in Go. Because Otomi uses Drone to deploy changes to the values repo, it needs a git hosting solution. When no source control is configured, Otomi will deploy Gitea for Drone to target as a git repo."),(0,o.kt)("p",null,"Gitea may be used for other purposes, and is especially useful in combination with Drone as a CI/CD solution. Just like Otomi uses it."),(0,o.kt)("h2",{id:"gitea-for-gitops"},"Gitea for GitOps"),(0,o.kt)("p",null,"When Argo CD is enabled, Otomi will automatically create a GitOps repository for each Team in Gitea."),(0,o.kt)("h2",{id:"role-based-access"},"Role based access"),(0,o.kt)("p",null,"Currently Gitea only supports a single role in combination with OIDC. To sign in to Gitea, a user needs to be a member of the ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," group. Team members will not have access to Gitea."))}f.isMDXComponent=!0}}]);