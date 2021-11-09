(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(189)),l={slug:"installation/post-install/",title:"Post installation steps"},r={unversionedId:"post-install",id:"post-install",isDocsHomePage:!1,title:"Post installation steps",description:"After Otomi is installed, a couple of post install configuration steps are required. Follow the instructions below:",source:"@site/docs/post-install.md",slug:"/installation/post-install/",permalink:"/docs/installation/post-install/",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/post-install.md",version:"current",sidebar:"mainSidebar",previous:{title:"Install from chart",permalink:"/docs/installation/chart"},next:{title:"Overview",permalink:"/docs/console/"}},c=[{value:"When Otomi is installed without optional configuration",id:"when-otomi-is-installed-without-optional-configuration",children:[{value:"Get the log output of the installer job",id:"get-the-log-output-of-the-installer-job",children:[]},{value:"Create a user in Keycloak",id:"create-a-user-in-keycloak",children:[]},{value:"Sign in to the console",id:"sign-in-to-the-console",children:[]},{value:"Add the auto generated CA to your keychain (optional)",id:"add-the-auto-generated-ca-to-your-keychain-optional",children:[]},{value:"Activate Drone",id:"activate-drone",children:[]}]},{value:"When Otomi is installed with optional configuration",id:"when-otomi-is-installed-with-optional-configuration",children:[{value:"Sign in to the console",id:"sign-in-to-the-console-1",children:[]}]}],s={toc:c};function b(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After Otomi is installed, a couple of post install configuration steps are required. Follow the instructions below:"),Object(o.b)("h2",{id:"when-otomi-is-installed-without-optional-configuration"},"When Otomi is installed without optional configuration"),Object(o.b)("p",null,"Follow these instructions when Otomi is installed without DNS (",Object(o.b)("inlineCode",{parentName:"p"},"otomi.hasExternalDNS=false"),") and without 3rd party IdP (",Object(o.b)("inlineCode",{parentName:"p"},"otomi.hasExternalIDP=false"),")."),Object(o.b)("h3",{id:"get-the-log-output-of-the-installer-job"},"Get the log output of the installer job"),Object(o.b)("p",null,"When Otomi is installed without any optional configuration, passwords and public URLs are automatically derived. The ",Object(o.b)("inlineCode",{parentName:"p"},"Keycloak")," app acts an IdP, which is used to define users of the otomi containers platform. Some usefoul information like ",Object(o.b)("inlineCode",{parentName:"p"},"Otomi Console")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Keycloak")," public URL with admin credentials can be found at the end of the installer log."),Object(o.b)("p",null,"Use the following command to access the log output."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl logs jobs/otomi -n default\n")),Object(o.b)("h3",{id:"create-a-user-in-keycloak"},"Create a user in Keycloak"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to Keycloak app (using the URL provided in the installer log)"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Administration Console")),Object(o.b)("li",{parentName:"ol"},"Login with admin credentials (using admin and password provided in the installer log)"),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Otomi")," realm"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Users")," then ",Object(o.b)("inlineCode",{parentName:"li"},"Add user")),Object(o.b)("li",{parentName:"ol"},"Fill in a user name in the Username field"),Object(o.b)("li",{parentName:"ol"},"Fill in your email address in the Email field"),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"otomi-admin")," group"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Save")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Credentials")," tab and then fill in a password for this user in the ",Object(o.b)("inlineCode",{parentName:"li"},"Password")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Password Confirmation")," fields"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Set Password"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When a password for the Keycloak admin is not provided in the values.yaml (but automatically generated), it is advised to first change the password."))),Object(o.b)("h3",{id:"sign-in-to-the-console"},"Sign in to the console"),Object(o.b)("p",null,"Open the Otomi console (using the URL provided in the installer logs), and sign in with the new user."),Object(o.b)("p",null,"After you have successfully logged in, you will see the Otomi Admin Dashboard. Click ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/console"}),"here")," to learn more about using Otomi Console."),Object(o.b)("p",null,Object(o.b)("img",{alt:"console-lading-page",src:n(255).default})),Object(o.b)("h3",{id:"add-the-auto-generated-ca-to-your-keychain-optional"},"Add the auto generated CA to your keychain (optional)"),Object(o.b)("p",null,"When Otomi is installed without DNS and with an auto generated CA, add the CA to you keychain:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the left pane of the console, click on ",Object(o.b)("inlineCode",{parentName:"li"},"download CA")),Object(o.b)("li",{parentName:"ol"},"Add the CA to your keychain:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt\n")),Object(o.b)("h3",{id:"activate-drone"},"Activate Drone"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitea.io/en-us/"}),"Gitea")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.drone.io/"}),"Drone")," are an integral part of how Otomi cluster configurations are stored and updated."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Drone")," app (under Platform/Otomi Apps) in the console.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When you see this message: 'Jwks doesn't have key to match kid or alg from Jwt' Drone is not yet ready. Please wait for a couple of minutes and try again."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When Otomi is installed with an auto-generated CA or when using LetsEncrypt staging certificates, sign in with user ",Object(o.b)("inlineCode",{parentName:"p"},"otomi-admin"),". To get the password, go to Platform / Settings / Otomi in the console."))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Sign in with ",Object(o.b)("inlineCode",{parentName:"li"},"OpenID Connent")),Object(o.b)("li",{parentName:"ol"},"Use the pre-filled values for the ",Object(o.b)("inlineCode",{parentName:"li"},"Username")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Email Address")," and click ",Object(o.b)("inlineCode",{parentName:"li"},"Complete Account")),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("inlineCode",{parentName:"li"},"Activate"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"drone-landing",src:n(256).default})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"ACTIVATE REPOSITORY"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"drone-activate",src:n(257).default})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Save the changes and you are good to go.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"drone-save",src:n(258).default})),Object(o.b)("p",null,"Now the final step is to create a Team. See the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/docs/console/teams"}),"Teams"))," page for more information."),Object(o.b)("h2",{id:"when-otomi-is-installed-with-optional-configuration"},"When Otomi is installed with optional configuration"),Object(o.b)("h3",{id:"sign-in-to-the-console-1"},"Sign in to the console"),Object(o.b)("p",null,"If Otomi is configured with OIDC (using Azure AD as an IdP), click on the right button (redkubes-azure in the example below)."),Object(o.b)("p",null,Object(o.b)("img",{alt:"console-login",src:n(259).default})),Object(o.b)("p",null,"When OIDC is configured, an Active Directory user needs to be a member of the otomi-admin group. Now follow the same steps as described above to activate Drone."))}b.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.a.createElement(u,r(r({ref:t},s),{},{components:n})):i.a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},255:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-landing-page-515451f2df816a4eb939656ab5302b06.png"},256:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone-landing-ec436af98acc3e7ebf02819bd04df0d2.png"},257:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone-activate-d0cdfcda638a52092ce04000db3ba07e.png"},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/drone-save-2f6f70cf0b764de14c0b811f6cd12c44.png"},259:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-login-674f187bd93d1c7535335041aa140840.png"}}]);