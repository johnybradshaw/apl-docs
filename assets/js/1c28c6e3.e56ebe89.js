"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={slug:"installation",title:"Installation",sidebar_label:"Installation"},o=void 0,i={unversionedId:"get-started/installation",id:"get-started/installation",title:"Installation",description:"Install Otomi with Helm",source:"@site/docs/get-started/installation.md",sourceDirName:"get-started",slug:"/get-started/installation",permalink:"/docs/get-started/installation",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation.md",tags:[],version:"current",frontMatter:{slug:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"mainSidebar",previous:{title:"Prerequisites",permalink:"/docs/get-started/prerequisites"},next:{title:"Activation",permalink:"/docs/get-started/activation"}},s={},u=[{value:"Install Otomi with Helm",id:"install-otomi-with-helm",level:3},{value:"Add the Otomi repository",id:"add-the-otomi-repository",level:4},{value:"Minimal configuration**",id:"minimal-configuration",level:4},{value:"Custom values",id:"custom-values",level:4},{value:"Install the Chart",id:"install-the-chart",level:4},{value:"Monitoring the chart install",id:"monitoring-the-chart-install",level:4},{value:"Installing from source",id:"installing-from-source",level:3},{value:"Download source",id:"download-source",level:4},{value:"Install",id:"install",level:4},{value:"Uninstalling Otomi",id:"uninstalling-otomi",level:2},{value:"Optional Configuration",id:"optional-configuration",level:2},{value:"Use DNS and Let&#39;s Encrypt",id:"use-dns-and-lets-encrypt",level:3},{value:"Use Azure AD as IDP",id:"use-azure-ad-as-idp",level:3},{value:"Use KMS to manage keys for encryption",id:"use-kms-to-manage-keys-for-encryption",level:3}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"install-otomi-with-helm"},"Install Otomi with Helm"),(0,l.kt)("h4",{id:"add-the-otomi-repository"},"Add the Otomi repository"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_repo/"},"helm repo")," for command documentation."),(0,l.kt)("h4",{id:"minimal-configuration"},"Minimal configuration","*","*"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'cluster:\n  k8sVersion: "1.23" # currently 1.20, 1.21, 1.22 and 1.23 are supported\n  name: # the name of your cluster\n  provider: # choose between aws, azure, google, digitalocean or custom\n')),(0,l.kt)("h4",{id:"custom-values"},"Custom values"),(0,l.kt)("p",null,"To view the required ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file with detailed comments, view and download the chart's latest ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/chart/otomi/values.yaml"},"values.yaml"),". Run the following command to view ",(0,l.kt)("em",{parentName:"p"},"all")," the values (which might be overwhelming):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values otomi/otomi\n")),(0,l.kt)("p",null,"To test wether the input values are correct run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm template -f values.yaml otomi/otomi\n")),(0,l.kt)("h4",{id:"install-the-chart"},"Install the Chart"),(0,l.kt)("p",null,"Install the chart with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -f values.yaml otomi otomi/otomi\n")),(0,l.kt)("h4",{id:"monitoring-the-chart-install"},"Monitoring the chart install"),(0,l.kt)("p",null,"The chart deploys a Job (",(0,l.kt)("inlineCode",{parentName:"p"},"otomi"),") in the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace. Monitor the chart install using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# get the status of the job\nkubectl get job otomi -w\n# watch the helm chart install status:\nwatch helm list -Aa\n")),(0,l.kt)("p",null,"Or view detailed info about kubernetes resources with ",(0,l.kt)("a",{parentName:"p",href:"https://k9scli.io"},"k9s")),(0,l.kt)("h3",{id:"installing-from-source"},"Installing from source"),(0,l.kt)("p",null,"As an alternative, you can also clone the otomi-core source code from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core"},"Github")," and install otomi using the chart source code."),(0,l.kt)("h4",{id:"download-source"},"Download source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redkubes/otomi-core.git\ncd otomi-core\n")),(0,l.kt)("h4",{id:"install"},"Install"),(0,l.kt)("p",null,"Now customize the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,l.kt)("p",null,"Use the following command to install the chart with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"my-otomi-release")," (a custom name that you choose)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -f values.yaml my-otomi-release chart/otomi\n")),(0,l.kt)("h2",{id:"uninstalling-otomi"},"Uninstalling Otomi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall my-otomi-release\n")),(0,l.kt)("p",null,"Doing a Helm uninstall will remove all Helm releases deployed by Otomi. After uninstalling, some namespaces created by Otomi can stay in a Terminating status. To remove all namespaces in a Terminating status, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"for ns in $(kubectl get ns --field-selector status.phase=Terminating -o jsonpath='{.items[*].metadata.name}'); do kubectl get ns $ns -ojson | jq '.spec.finalizers = []' | kubectl replace --raw \"/api/v1/namespaces/$ns/finalize\" -f -; done\n")),(0,l.kt)("h2",{id:"optional-configuration"},"Optional Configuration"),(0,l.kt)("p",null,"You can optionally configure Otomi to use an external IDP (Azure AD), use an external Key Management Service (KMS) for SOPS and use a DNS zone in combination with LetsEncrpt certificates or a custom CA. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta."),(0,l.kt)("h3",{id:"use-dns-and-lets-encrypt"},"Use DNS and Let's Encrypt"),(0,l.kt)("p",null,"By default, Otomi uses the public IP address of the load balancer for nameresolving using ",(0,l.kt)("a",{parentName:"p",href:"http://nip.io"},"nip.io"),". To use DNS with LetsEncrypt, follow these instructions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md"},"Setting up external DNS in AWS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md"},"Setting up external DNS in Azure")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md"},"Setting up external DNS in Google"))),(0,l.kt)("p",null,"To install Otomi with DNS and Let's Encrypt, use the following values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"otomi:\n  hasExternalDNS: true\n\n# Configure cert-manager\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: staging # defaults to 'production' when commented out\n\n# Configure DNS\ndns:\n#   domainFilters: []\n#   zoneIdFilters: []\n#   provider: # provide one of the following: aws|azure|google|digitalocean|azure-private-dns|cloudflare|other\n#     aws:\n#       credentials:\n#         secretKey: ''\n#         accessKey: ''\n#       region: eu-central-1\n#       role: '' # optional ARN, may be set explicitly if no metadata can be accessed\n#     azure:\n#       aadClientId: ''\n#       aadClientSecret: ''\n#       tenantId: '' # optional\n#       subscriptionId: '' # optional\n#     google:\n#       serviceAccountKey: ''\n#       project: ''\n")),(0,l.kt)("h3",{id:"use-azure-ad-as-idp"},"Use Azure AD as IDP"),(0,l.kt)("p",null,"The authentication of brokered identities through Azure AD requires a service principal with certain Azure AD API permissions. An app registration needs to be created with the following API permissions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API / Permission name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / email"),(0,l.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,l.kt)("td",{parentName:"tr",align:null},"View users' email address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / openid"),(0,l.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,l.kt)("td",{parentName:"tr",align:null},"Sign users in")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,l.kt)("td",{parentName:"tr",align:null},"View users' basic profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / User.Read"),(0,l.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,l.kt)("td",{parentName:"tr",align:null},"Sign in and read user profile")))),(0,l.kt)("p",null,"And the following token configurations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Claim"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Token type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional settings"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"family_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides the last name, surename, or family name"),(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"given_name"),(0,l.kt)("td",{parentName:"tr",align:null},'Provides the first or "give" name of the user'),(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional formatting for group claims"),(0,l.kt)("td",{parentName:"tr",align:null},"ID, Access, SAML"),(0,l.kt)("td",{parentName:"tr",align:null},"Default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upn"),(0,l.kt)("td",{parentName:"tr",align:null},"An identifier for the user that can be used ..."),(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Default")))),(0,l.kt)("p",null,"Note that the group type should be set to 'security groups'."),(0,l.kt)("p",null,'At the \'Authentication\' tab you should be able to set the following callback URL\xa7s and enable that both "Access tokens" and "ID tokens" are issued and public client flows are allowed:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://keycloak.<dns-zone-name>/realms/master/broker/otomi-idp/endpoint")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://keycloak.<dns-zone-name>"))),(0,l.kt)("p",null,"To install Otomi with Azure Active Directory as an IdP instead of (default) using Keycloak as an IdP, use the following values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'oidc:\n  clientID: ""\n  clientSecret: ""\n  issuer: ""\n  # IDP group id used to identify global admin\n  adminGroupID: ""\n  # IDP group id used to identify team admin\n  teamAdminGroupID: ""\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"otomi-idp")," is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apps:\n  keycloak:\n    idp:\n      alias: <your-alias>\n"))),(0,l.kt)("h3",{id:"use-kms-to-manage-keys-for-encryption"},"Use KMS to manage keys for encryption"),(0,l.kt)("p",null,"If you would like the secrets in the ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"sops"),", the tool used for encryption."),(0,l.kt)("p",null,"Find quickstart documentation below on how to setup KMS access per supported provider:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/kms/getting-started/"},"AWS KMS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/key-vault/#getting-started"},"Azure Vault")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/kms/docs/quickstart"},"Google KMS"))),(0,l.kt)("p",null,"Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps."),(0,l.kt)("p",null,"To install Otomi with SOPS/KMS, use the following values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kms:\n  sops:\n    provider: \"\" # provider can be one of aws|azure|google|vault\n#     aws:\n#       keys: ''\n#       accessKey: ''\n#       secretKey: ''\n#       region: ''\n#     azure:\n#       keys: ''\n#       tenantID: ''\n#       clientID: ''\n#       clientSecret: ''\n#     google:\n#       keys: ''\n#       accountJson: ''\n#       project: ''\n#     vault:\n#       token: ''\n")))}p.isMDXComponent=!0}}]);