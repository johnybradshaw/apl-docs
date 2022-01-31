(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(185)),i={slug:"tutorials/build-tag-push",title:"Build, tag and push an image to Harbor",sidebar_label:"Push an image to harbor"},c={unversionedId:"tutorial-3-push-harbor",id:"tutorial-3-push-harbor",isDocsHomePage:!1,title:"Build, tag and push an image to Harbor",description:"When Otomi is installed with minimal values, make sure to download the CA.crt, add it to your Keychain and restart Docker. See here for more information",source:"@site/docs/tutorial-3-push-harbor.md",slug:"/tutorials/build-tag-push",permalink:"/docs/tutorials/build-tag-push",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-3-push-harbor.md",version:"current",sidebar_label:"Push an image to harbor",sidebar:"mainSidebar",previous:{title:"Creating users in Keycloak when using Keycloak as IDP",permalink:"/docs/tutorials/create-keycloak-users"},next:{title:"Create a Kubernetes service",permalink:"/docs/tutorials/create-k8s-service"}},l=[{value:"Create a robot account in Harbor",id:"create-a-robot-account-in-harbor",children:[]},{value:"Download the demo application used in this tutorial",id:"download-the-demo-application-used-in-this-tutorial",children:[]},{value:"Login to Harbor",id:"login-to-harbor",children:[]},{value:"Build, tag and push the image",id:"build-tag-and-push-the-image",children:[]}],b={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When Otomi is installed with minimal values, make sure to download the CA.crt, add it to your Keychain and restart Docker. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/post-install/#step-4-add-the-auto-generated-ca-to-your-keychain"}),"here")," for more information "))),Object(o.b)("p",null,"In this tutorial, you are going to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Build an image and push it to Harbor in Otomi"),Object(o.b)("li",{parentName:"ol"},"Create a Kubernetes Deployment and Service"),Object(o.b)("li",{parentName:"ol"},"Publicly expose the Hello World app using Otomi")),Object(o.b)("p",null,"When you created a Team in Otomi, Otomi has automatically created a project for the team in Harbor. In this tutorial we'll assume you have created a team called ",Object(o.b)("inlineCode",{parentName:"p"},"demo"),"."),Object(o.b)("h3",{id:"create-a-robot-account-in-harbor"},"Create a robot account in Harbor"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Robot accounts for teams can only be created by users with the ",Object(o.b)("inlineCode",{parentName:"p"},"otomi-admin")," role"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"https://harbor.<your domainSuffix>")),Object(o.b)("li",{parentName:"ul"},"Click 'Login with OIDC Provider'"),Object(o.b)("li",{parentName:"ul"},"Fill in your user name and click save"),Object(o.b)("li",{parentName:"ul"},"Under ",Object(o.b)("inlineCode",{parentName:"li"},"Administration"),", click ",Object(o.b)("inlineCode",{parentName:"li"},"Robot Accounts")),Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"+ New Robot account")),Object(o.b)("li",{parentName:"ul"},"Provide a name for the new robot account: ",Object(o.b)("inlineCode",{parentName:"li"},"team-demo-push")),Object(o.b)("li",{parentName:"ul"},"Set an Expiration time"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("inlineCode",{parentName:"li"},"team-demo")," and optionally change the permissions"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("inlineCode",{parentName:"li"},"Add")),Object(o.b)("li",{parentName:"ul"},"Copy the generated token")),Object(o.b)("h3",{id:"download-the-demo-application-used-in-this-tutorial"},"Download the demo application used in this tutorial"),Object(o.b)("p",null,"Clone the repo used for this tutorial:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/redkubes/nodejs-helloworld.git\n")),Object(o.b)("h3",{id:"login-to-harbor"},"Login to Harbor"),Object(o.b)("p",null,"Login with username ",Object(o.b)("inlineCode",{parentName:"p"},"otomi-team-demo-push")," & password: ",Object(o.b)("inlineCode",{parentName:"p"},"token")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker login -u 'otomi-team-demo-push' -p '$token' harbor.your-domain.com\n")),Object(o.b)("h3",{id:"build-tag-and-push-the-image"},"Build, tag and push the image"),Object(o.b)("p",null,"Build and tag the image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t harbor.your-domain.com/team-demo/hello-world:latest .\n")),Object(o.b)("p",null,"Push the image to Harbor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker push harbor.your-domain.com/team-demo/hello-world:latest\n")),Object(o.b)("p",null,"Now go to the team-demo project and verify that the hello-world repository has been created."))}d.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||s[p]||o;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);