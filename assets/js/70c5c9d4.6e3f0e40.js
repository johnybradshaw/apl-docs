(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[8160],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8458:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],s={slug:"apps/drone",title:"Working with Drone",sidebar_label:"Drone"},c={unversionedId:"app-drone",id:"app-drone",isDocsHomePage:!1,title:"Working with Drone",description:"Drone CI is a build tool. The most prominent feature of Drone is that it uses containers for everything. Every stage in a complex pipeline in Drone is performed through a Docker container. This offers a great deal of flexibility when it comes to using several tools and/or environments for build and deployment needs. Drone CI must integrate with a Git repository to function correctly.",source:"@site/docs/app-drone.md",sourceDirName:".",slug:"/apps/drone",permalink:"/docs/apps/drone",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/app-drone.md",version:"current",sidebar_label:"Drone",frontMatter:{slug:"apps/drone",title:"Working with Drone",sidebar_label:"Drone"},sidebar:"mainSidebar",previous:{title:"Configuring Services in CE mode",permalink:"/docs/ce/services"},next:{title:"Working with Harbor",permalink:"/docs/apps/harbor"}},l=[],p={toc:l};function u(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Drone CI is a build tool. The most prominent feature of Drone is that it uses containers for everything. Every stage in a complex pipeline in Drone is performed through a Docker container. This offers a great deal of flexibility when it comes to using several tools and/or environments for build and deployment needs. Drone CI must integrate with a Git repository to function correctly."),(0,i.kt)("p",null,"Drone CI uses YAML files to get its instructions. The instructions file is checked in the repository with the rest of the application code. Otomi installs and configures Drone by default and provides a instructions file (pipeline definition) for synchronization with the otomi/values in Gitea."))}u.isMDXComponent=!0}}]);