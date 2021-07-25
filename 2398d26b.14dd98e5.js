(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{167:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,d=m["".concat(l,".").concat(p)]||m[p]||u[p]||c;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(167)),l={slug:"ce/secrets",title:"Configuring Secrets in CE mode",sidebar_label:"Secrets"},i={unversionedId:"ce-configure-secrets",id:"ce-configure-secrets",isDocsHomePage:!1,title:"Configuring Secrets in CE mode",description:"When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually. Before you can start creating Secrets, you first need to create a Team. Follow these steps to create a Secret in Otomi CE:",source:"@site/docs/ce-configure-secrets.md",slug:"/ce/secrets",permalink:"/docs/ce/secrets",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ce-configure-secrets.md",version:"current",sidebar_label:"Secrets",sidebar:"mainSidebar",previous:{title:"Configuring Jobs in CE mode",permalink:"/docs/ce/jobs"},next:{title:"EE Overview",permalink:"/docs/ee/"}},o=[{value:"Create generic secrets",id:"create-generic-secrets",children:[{value:"1. Create a secret in Vault",id:"1-create-a-secret-in-vault",children:[]},{value:"2. Create a generic secret in Otomi",id:"2-create-a-generic-secret-in-otomi",children:[]}]},{value:"Create a (Kubernetes) pull secret",id:"create-a-kubernetes-pull-secret",children:[{value:"1. Create a Kubernetes docker-registry secret",id:"1-create-a-kubernetes-docker-registry-secret",children:[]},{value:"2. Create a secret in Vault",id:"2-create-a-secret-in-vault",children:[]},{value:"3. Create a Docker registry secret in Otomi",id:"3-create-a-docker-registry-secret-in-otomi",children:[]}]},{value:"Create TLS secrets",id:"create-tls-secrets",children:[{value:"1. Create a secret in Vault",id:"1-create-a-secret-in-vault-1",children:[]},{value:"2. Create a TLS secret in Otomi",id:"2-create-a-tls-secret-in-otomi",children:[]}]}],s={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When you are running Otomi in CE mode or doing local development, you will operate on values directly and have to commit them manually. Before you can start creating Secrets, you first need to create a Team. Follow these steps to create a Secret in Otomi CE:"),Object(c.b)("h2",{id:"create-generic-secrets"},"Create generic secrets"),Object(c.b)("h3",{id:"1-create-a-secret-in-vault"},"1. Create a secret in Vault"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Login in to Otomi Console as a team-admin or team-member"),Object(c.b)("li",{parentName:"ul"},"If you are a member of multiple teams, select the team in the top bar"),Object(c.b)("li",{parentName:"ul"},"Under the Team section (right menu bar), click 'Otomi Apps'"),Object(c.b)("li",{parentName:"ul"},"Now open Hashicorp Vault"),Object(c.b)("li",{parentName:"ul"},"To login, select 'OIDC' and then click 'login'"),Object(c.b)("li",{parentName:"ul"},"Click 'Create secret'"),Object(c.b)("li",{parentName:"ul"},"Provide a name (path = `teams/team-name/secret-name)"),Object(c.b)("li",{parentName:"ul"},"Add the key / value pairs"),Object(c.b)("li",{parentName:"ul"},"Click 'Save'")),Object(c.b)("h3",{id:"2-create-a-generic-secret-in-otomi"},"2. Create a generic secret in Otomi"),Object(c.b)("p",null,"Add the secret created in Vault to the ",Object(c.b)("inlineCode",{parentName:"p"},"values/env/teams/external-secrets.<team-name>.yaml"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo:\n      secrets:\n        - name: otomi-welcome # the name of the secret in Vault\n          teamId: demo # teh name of the team\n          type: generic # the secret type, in this case generic\n          entries:\n            - HELLO # the key of the secret in Vault\n")),Object(c.b)("h4",{id:"validate-changes-optional"},"validate changes (optional)"),Object(c.b)("p",null,"When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(c.b)("p",null,"Use -v to get more output"),Object(c.b)("p",null,"When successful, the output will show: ",Object(c.b)("inlineCode",{parentName:"p"},"otomi:validate-values:verbose Values validation SUCCESSFUL")),Object(c.b)("h4",{id:"apply-changes"},"Apply changes"),Object(c.b)("p",null,"Commit and push the changes using Otomi CLI:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(c.b)("p",null,"And then (optionally) commit and push the changes to git:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'otomi commit -m "your commit comment" --no-verify\n')),Object(c.b)("p",null,"The secret is now available to be used in Otomi ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ce/services"}),"Services")),Object(c.b)("h2",{id:"create-a-kubernetes-pull-secret"},"Create a (Kubernetes) pull secret"),Object(c.b)("h3",{id:"1-create-a-kubernetes-docker-registry-secret"},"1. Create a Kubernetes docker-registry secret"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'email="not@us.ed" # can be something else if the registry provider expects it, but usually this is ignored\nserver="" # example: "https://harbor.demo.eks.otomi.cloud/"\nusername="" # your username\npassword="" # your password, can be token\nkubectl create secret docker-registry --dry-run=client regcred --docker-email=$email --docker-server=$server --docker-username=$username --docker-password=$password -ojsonpath=\'{.data.\\.dockerconfigjson}\' | base64 --decode\n')),Object(c.b)("h3",{id:"2-create-a-secret-in-vault"},"2. Create a secret in Vault"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Login in to Otomi Console as a team-admin or team-member"),Object(c.b)("li",{parentName:"ul"},"If you are a member of multiple teams, select the team in the top bar"),Object(c.b)("li",{parentName:"ul"},"Under the Team section (right menu bar), click 'Otomi Apps'"),Object(c.b)("li",{parentName:"ul"},"Now open Hashicorp Vault"),Object(c.b)("li",{parentName:"ul"},"To login, select 'OIDC' and then click 'login'"),Object(c.b)("li",{parentName:"ul"},"Click 'Create secret'"),Object(c.b)("li",{parentName:"ul"},"Select '",Object(c.b)("strong",{parentName:"li"},"JSON"),"'"),Object(c.b)("li",{parentName:"ul"},"Provide a name (path = `teams/team-name/secret-name)"),Object(c.b)("li",{parentName:"ul"},"Add the JSON created in step 1"),Object(c.b)("li",{parentName:"ul"},"Click 'Save'")),Object(c.b)("h3",{id:"3-create-a-docker-registry-secret-in-otomi"},"3. Create a Docker registry secret in Otomi"),Object(c.b)("p",null,"Add the secret created in Vault to the ",Object(c.b)("inlineCode",{parentName:"p"},"values/env/teams/external-secrets.<team-name>.yaml"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo:\n      secrets:\n        - name: test-pull-secret # the name of the secret in Vault\n          teamId: demo # the name of the team\n          type: docker-registry # the secret type, a docker registry secret\n")),Object(c.b)("h4",{id:"validate-changes-optional-1"},"validate changes (optional)"),Object(c.b)("p",null,"When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(c.b)("p",null,"Use -v to get more output"),Object(c.b)("p",null,"When successful, the output will show: ",Object(c.b)("inlineCode",{parentName:"p"},"otomi:validate-values:verbose Values validation SUCCESSFUL")),Object(c.b)("h4",{id:"apply-changes-1"},"Apply changes"),Object(c.b)("p",null,"Commit and push the changes using Otomi CLI:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(c.b)("p",null,"And then (optionally) commit and push the changes to git:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'otomi commit -m "your commit comment" --no-verify\n')),Object(c.b)("p",null,"The pull secret can now be used by the team to pull images. Note: Otomi automatically creates a pull secret in the team namespace to enable pulling images from the local Harbor registry (also automatically created for the team)."),Object(c.b)("h2",{id:"create-tls-secrets"},"Create TLS secrets"),Object(c.b)("h3",{id:"1-create-a-secret-in-vault-1"},"1. Create a secret in Vault"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Login in to Otomi Console as a team-admin or team-member"),Object(c.b)("li",{parentName:"ul"},"If you are a member of multiple teams, select the team in the top bar"),Object(c.b)("li",{parentName:"ul"},"Under the Team section (right menu bar), click 'Otomi Apps'"),Object(c.b)("li",{parentName:"ul"},"Now open Hashicorp Vault"),Object(c.b)("li",{parentName:"ul"},"To login, select 'OIDC' and then click 'login'"),Object(c.b)("li",{parentName:"ul"},"Click 'Create secret'"),Object(c.b)("li",{parentName:"ul"},"Provide a name (path = `teams/team-name/secret-name)"),Object(c.b)("li",{parentName:"ul"},"Add 3 Keys: ",Object(c.b)("inlineCode",{parentName:"li"},"key"),", ",Object(c.b)("inlineCode",{parentName:"li"},"crt")," and ",Object(c.b)("inlineCode",{parentName:"li"},"ca")," and add the certificate content as a value. The ",Object(c.b)("inlineCode",{parentName:"li"},"ca")," field is optional and can be used to provide the certificate authority (for mTLS)"),Object(c.b)("li",{parentName:"ul"},"Click 'Save'")),Object(c.b)("h3",{id:"2-create-a-tls-secret-in-otomi"},"2. Create a TLS secret in Otomi"),Object(c.b)("p",null,"Add the secret created in Vault to the ",Object(c.b)("inlineCode",{parentName:"p"},"values/env/teams/external-secrets.<team-name>.yaml"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo:\n      secrets:\n        - name: tls-test # the name of the secret in Vault\n          teamId: demo # the name of the team\n          type: tls # the type of the secret, a TLS secret in this case\n          ca: ca.crt # optional\n          crt: tls.crt # property corresponding to the key of the secret in Vault\n          key: tls.key # property corresponding to the key of the secret in Vault\n")),Object(c.b)("h4",{id:"validate-changes-optional-2"},"Validate changes (optional)"),Object(c.b)("p",null,"When using Otomi CLI, you can validate the changes in the values based on the Otomi values schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"-v")," to get more output (or ",Object(c.b)("inlineCode",{parentName:"p"},"-vvv")," to get even more output). When successful, the output will show: ",Object(c.b)("inlineCode",{parentName:"p"},"otomi:validate-values:verbose Values validation SUCCESSFUL")),Object(c.b)("h4",{id:"deploy-changes"},"Deploy changes"),Object(c.b)("p",null,"Apply the changes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(c.b)("p",null,"The secret is now available to be used in Otomi ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ce/services"}),"Services")))}b.isMDXComponent=!0}}]);