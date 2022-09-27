"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?o.createElement(h,r(r({ref:t},u),{},{components:a})):o.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7785:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const i={slug:"working-with",title:"Working with Otomi CLI",sidebar_label:"Working with Otomi CLI"},r=void 0,l={unversionedId:"for-ops/cli/working-with",id:"for-ops/cli/working-with",title:"Working with Otomi CLI",description:"When you would like to:",source:"@site/docs/for-ops/cli/working-with.md",sourceDirName:"for-ops/cli",slug:"/for-ops/cli/working-with",permalink:"/docs/for-ops/cli/working-with",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/cli/working-with.md",tags:[],version:"current",frontMatter:{slug:"working-with",title:"Working with Otomi CLI",sidebar_label:"Working with Otomi CLI"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/for-ops/cli/overview"},next:{title:"Installing with CLI",permalink:"/docs/installation/cli"}},s={},p=[{value:"Bootstrap a values repo",id:"bootstrap-a-values-repo",level:2},{value:"1. Bootstrap a new (empty) values repo to deploy otomi with the CLI",id:"1-bootstrap-a-new-empty-values-repo-to-deploy-otomi-with-the-cli",level:3},{value:"2. Bootstrap the values from a values repo deployed by chart",id:"2-bootstrap-the-values-from-a-values-repo-deployed-by-chart",level:3},{value:"Bootstrap the repo locally",id:"bootstrap-the-repo-locally",level:2},{value:"Adjust the initial values",id:"adjust-the-initial-values",level:2},{value:"Validate changes (optional)",id:"validate-changes-optional",level:2},{value:"Deploy changes",id:"deploy-changes",level:2},{value:"Commit changes",id:"commit-changes",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When you would like to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new values repo locally and operate on a cluster"),(0,n.kt)("li",{parentName:"ul"},"Clone a cluster: copy a values repo, make modifications and deploy to new k8s context"),(0,n.kt)("li",{parentName:"ul"},"Edit values not yet under management by the console, such as chart settings"),(0,n.kt)("li",{parentName:"ul"},"Do local development")),(0,n.kt)("p",null,"Then you will have to create/edit a local values repo and perform operations with the CLI. If you haven't yet, ",(0,n.kt)("a",{parentName:"p",href:"overview#install-the-cli"},"install Otomi CLI")," first, and then follow the steps below."),(0,n.kt)("p",null,"At any time you may ask for an overview of the available commands and their options, so please don't hesitate to run ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi help"),". In order for any command to show more output use ",(0,n.kt)("inlineCode",{parentName:"p"},"-v")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"-vvv")," to get even more output)."),(0,n.kt)("h2",{id:"bootstrap-a-values-repo"},"Bootstrap a values repo"),(0,n.kt)("p",null,"Pick the scenario you are interested in:"),(0,n.kt)("h3",{id:"1-bootstrap-a-new-empty-values-repo-to-deploy-otomi-with-the-cli"},"1. Bootstrap a new (empty) values repo to deploy otomi with the CLI"),(0,n.kt)("p",null,"Running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export ENV_DIR=$PWD/otomi-values\notomi bootstrap\n")),(0,n.kt)("p",null,"Will create a folder named ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi-values")," in your cwd which contains all the files necessary to start editing. The minimal values that need to be provided are found in ",(0,n.kt)("inlineCode",{parentName:"p"},"env/cluster.yaml"),", but more may be configured to your liking. Any cluster operations afterwards expect a correct ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.k8sContext"),", so be sure to set it."),(0,n.kt)("p",null,"Running ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi validate-values")," immediately afterwards will show you errors for the missing minimal values. So go ahead and fill them in. If you are using VSCode yaml hinting is active and can be invoked with CTRL-SPACE. Keep running ",(0,n.kt)("inlineCode",{parentName:"p"},"validate-values")," until your input is correct."),(0,n.kt)("h3",{id:"2-bootstrap-the-values-from-a-values-repo-deployed-by-chart"},"2. Bootstrap the values from a values repo deployed by chart"),(0,n.kt)("p",null,"Clone the ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi/values")," repository from ",(0,n.kt)("inlineCode",{parentName:"p"},"gitea.<your.domain>/otomi/values")," to work with the values locally."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitea.<your.domain>/otomi/values.git otomi-values\ncd otomi-values\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Are you using SOPS?")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Then, for automatic en-/encryption, provide the credentials:"),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Create and edit the secrets file in the ",(0,n.kt)("inlineCode",{parentName:"li"},"otomi-values")," folder: ",(0,n.kt)("inlineCode",{parentName:"li"},"cp .secrets.sample .secrets"))),(0,n.kt)("p",{parentName:"div"},"Optionally, in order for VSCode to provide on the fly en-/encryption:"),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Install the SOPS extention for VSCode (as is automatically suggested from the config provided)"),(0,n.kt)("li",{parentName:"ul"},"Source the secrets: ",(0,n.kt)("inlineCode",{parentName:"li"},"source .secrets")," before opening the values project, so the plugin has access.")))),(0,n.kt)("p",null,"Now continue with the next step."),(0,n.kt)("h2",{id:"bootstrap-the-repo-locally"},"Bootstrap the repo locally"),(0,n.kt)("p",null,"A local repo always needs to be bootstrapped at least once to have all it's working files in place. However, whenever the ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi.version")," value has changed, it's corresponding artifacts need to be pulled and unpacked again. It can never hurt to run the bootstrap procedure as it is fast and idempotent:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"otomi bootstrap\n")),(0,n.kt)("p",null,"This will make sure that the correct files are unpacked from the versioned Otomi container, and other necessary files are generated."),(0,n.kt)("h2",{id:"adjust-the-initial-values"},"Adjust the initial values"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"$ENV_DIR/env/cluster.yaml")," file, and fill in the following minimal required values:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"cluster:\n    name: 'dev' # The name of your cluster\n    k8sVersion: '1.22' # The Kubernetes version of the cluster\n    provider: 'custom' # Use azure|aws|google|digitalocean|ovh|vultr|custom\n")),(0,n.kt)("h2",{id:"validate-changes-optional"},"Validate changes (optional)"),(0,n.kt)("p",null,"Validate the configuration after making changes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"otomi validate-values\n")),(0,n.kt)("p",null,"When successful, the output will show: ",(0,n.kt)("inlineCode",{parentName:"p"},"Values validation SUCCESSFUL")),(0,n.kt)("h2",{id:"deploy-changes"},"Deploy changes"),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Diff output is logged in stderr!")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Helmfile decided to output diff information to stderr to circumvent template output pollution. Don't be worried to see such output prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"error:"),"."))),(0,n.kt)("p",null,"Note: To see the diff in manifest output created by the changed values, run ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi diff")," first."),(0,n.kt)("p",null,"Now deploy changes with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"otomi apply\n")),(0,n.kt)("p",null,"Note: Creating a team can take around 5 to 10 minutes to complete."),(0,n.kt)("h2",{id:"commit-changes"},"Commit changes"),(0,n.kt)("p",null,"Now commit your changes to the (otomi/values) GIT repository on the cluster to store the new desired state configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"otomi commit\n")),(0,n.kt)("p",null,"When bringing your own git repo you will be asked to push the values as a last step yourself. (The myriad of git auth mechanisms out there we simply can't afford to support ;)"),(0,n.kt)("p",null,"Lastly, after seeing the new values in your remote git repo, one thing remains: restarting the otomi-api container. Why? The otomi-api container needs to re-inflate itself with the new values, and otomi does not (yet) detect such changes. (The drone runner does, however, and will immediately apply the changes in the values to the cluster.)"),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If the container does not get restarted and changes are deployed via the Otomi console, the api will run into a merge conflict and any user input will be lost."))),(0,n.kt)("p",null,"To restart the otomi-api containers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n otomi delete po -l app.kubernetes.io/name=otomi-api\n")))}d.isMDXComponent=!0}}]);