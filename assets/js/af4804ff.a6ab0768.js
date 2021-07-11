(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[938],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6227:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={slug:"ee/settings",title:"Settings"},s={unversionedId:"ee-settings",id:"ee-settings",isDocsHomePage:!1,title:"Settings",description:'This page describes the Otomi patform settings available only to users with the "admin" role:',source:"@site/docs/ee-settings.md",sourceDirName:".",slug:"/ee/settings",permalink:"/docs/ee/settings",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ee-settings.md",version:"current",frontMatter:{slug:"ee/settings",title:"Settings"},sidebar:"mainSidebar",previous:{title:"Platform Apps",permalink:"/docs/ee/platform-apps"},next:{title:"Clusters",permalink:"/docs/ee/clusters"}},p=[{value:"Alerts",id:"alerts",children:[]},{value:"Azure",id:"azure",children:[]},{value:"Customer",id:"customer",children:[]},{value:"DNS",id:"dns",children:[]},{value:"KMS",id:"kms",children:[]},{value:"Home",id:"home",children:[]},{value:"OIDC",id:"oidc",children:[]},{value:"Otomi",id:"otomi",children:[]},{value:"Policies",id:"policies",children:[]},{value:"SMTP",id:"smtp",children:[]}],d={toc:p};function u(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'This page describes the Otomi patform settings available only to users with the "admin" role:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alerts"},"Alerts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Azure"},"Azure")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#customer"},"Customer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dns"},"DNS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kms"},"KMS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#home"},"Home")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#oidc"},"OIDC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#otomi"},"Otomi")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#policies"},"Policies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#smtp"},"SMTP"))),(0,l.kt)("p",null,"Screenshot (admin role)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Console: settings",src:n(2741).Z})),(0,l.kt)("h3",{id:"alerts"},"Alerts"),(0,l.kt)("p",null,"Defines alerting endpoints for alertmanager and deployment feedback. The list of providers selected in ",(0,l.kt)("inlineCode",{parentName:"p"},"Notification receivers"),' should reflect their configuration. I.e. when receiver "slack" is chosen, the slack configuration needs to be defined.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repeat interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group interval"),(0,l.kt)("td",{parentName:"tr",align:null},"How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slack"),(0,l.kt)("td",{parentName:"tr",align:null},"Slack webhook url and channels for critical and non-critical alerts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MSteams"),(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Email"),(0,l.kt)("td",{parentName:"tr",align:null},"Email address(es) for critical and non-critical alerts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Notification receivers"),(0,l.kt)("td",{parentName:"tr",align:null},"Select default notification channel(s) for receiving alerts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Drone notifications"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now).")))),(0,l.kt)("h3",{id:"azure"},"Azure"),(0,l.kt)("p",null,"Azure specific configuration options. Will only be available when running on Azure (cloud=azure)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Appgw"),(0,l.kt)("td",{parentName:"tr",align:null},"Select if Azure Application Gateway is used as an external Load Balancer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure Monitor"),(0,l.kt)("td",{parentName:"tr",align:null},"Turn on Azure monitor to use Azure metrics in Grafana dashboards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage Types"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the Azure disk types used for storage classes in Otomi.")))),(0,l.kt)("p",null,"IMPORTANT NOTES:"),(0,l.kt)("p",null,"Using an Azure Application Gateway is optional. In case an application gateway is used with a WAF, make sure that its on detection mode and not prevention, as this might deny traffic to your cluster, which can have consequences on the availability of services. For example Grafana relies heavily on queries inside the api request that might trigger OWASP rules."),(0,l.kt)("h3",{id:"customer"},"Customer"),(0,l.kt)("p",null,"Defines customer information. Used for naming the cluster in alerts: ",(0,l.kt)("inlineCode",{parentName:"p"},"$customer/$cloud/$cluster"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Lowercase name")))),(0,l.kt)("h3",{id:"dns"},"DNS"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zones"),(0,l.kt)("td",{parentName:"tr",align:null},'Defines the dns zones accessible by the credentials given in the "Provider" section underneath.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"The provider hosting the dns zones. Can be AWS, Azure or Google.")))),(0,l.kt)("h3",{id:"kms"},"KMS"),(0,l.kt)("p",null,"Defines the Key Managment Service information needed to unseal secrets containers used by otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi-values")," repo), and another one for sealing/unsealing Vault storage. (Coming soon!)"),(0,l.kt)("p",null,"IMPORTANT NOTES:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text."),(0,l.kt)("li",{parentName:"ul"},"When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!")),(0,l.kt)("p",null,"It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide."),(0,l.kt)("h4",{id:"sops"},"SOPS"),(0,l.kt)("p",null,"Credentials to a KMS used by SOPS. For now it expects the ",(0,l.kt)("inlineCode",{parentName:"p"},".sops.yaml")," file in the root of the ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi/values")," repo to have the configuration pointing to the keys in use there. (Soon this file will be generated from key configuration gathered here.)"),(0,l.kt)("h4",{id:"vault"},"Vault"),(0,l.kt)("p",null,"Settings for Vault are now found under ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.vault")," but will move here soon."),(0,l.kt)("h3",{id:"home"},"Home"),(0,l.kt)("p",null,'Exactly similar to the "Alerts" section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. This allows for a 3rd party to also monitor the system. (Handy when setting up Otomi as a managed service for clients that want to receive notifications themselves.)'),(0,l.kt)("h3",{id:"oidc"},"OIDC"),(0,l.kt)("p",null,"Settings to connect with an external Identity Provider (Bring Your Own IDP). Allows to map IDP group names to Otomi superadmins (",(0,l.kt)("inlineCode",{parentName:"p"},"adminGroupID"),") and team admins (",(0,l.kt)("inlineCode",{parentName:"p"},"teamAdminGroupID"),")."),(0,l.kt)("p",null,"Some settings are left for the case when Keycloak is not needed (it is heavy, and small teams might not need authorization), and are used by grafana only:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Auth url"),(0,l.kt)("li",{parentName:"ul"},"Api url"),(0,l.kt)("li",{parentName:"ul"},"Token url")),(0,l.kt)("h3",{id:"otomi"},"Otomi"),(0,l.kt)("p",null,"Settings and feature flags that influence the way otomi behaves."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Admin password"),(0,l.kt)("td",{parentName:"tr",align:null},"Default admin password for all Otomi apps. Handy for quick rotation ;)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Additional Clusters"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of additional clusters to select in the Otomi console.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"External load balancer"),(0,l.kt)("td",{parentName:"tr",align:null},"Set this to true when an external load balancer exists (Azure AppGW, Google Apigee) or needs to be started (AWS ALB). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Home monitored"),(0,l.kt)("td",{parentName:"tr",align:null},'When this is turned on alerts will also be sent to the endpoints configured in the "Home" settings.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Managed masters"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether masters are managed and not under control. Set this to false when onprem.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-tenancy"),(0,l.kt)("td",{parentName:"tr",align:null},"Will separate team metrics and logs. Disabling this lets everybody be admin and see everything. Will still use team-","*"," namespaces for segmentation of services, but not use authorization of users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pull secret"),(0,l.kt)("td",{parentName:"tr",align:null},"A pull secret that gives access to the Otomi API. Needs and enterprise license.")))),(0,l.kt)("h3",{id:"policies"},"Policies"),(0,l.kt)("p",null,"This section allows to turn Open Policy Agent (OPA) policies on or off, and also set default parameters to be used by them."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"banned-image-tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add any image tags for containers that are not allowed in your cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container-limits"),(0,l.kt)("td",{parentName:"tr",align:null},"Set global compute limits for your containers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-allowed-repos"),(0,l.kt)("td",{parentName:"tr",align:null},"Add globally allowed repositories for version control.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-host-filesystem"),(0,l.kt)("td",{parentName:"tr",align:null},"Set policies for the host filesystem of all Kubernetes cluster nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-allowed-users"),(0,l.kt)("td",{parentName:"tr",align:null},"Default user (UID) settings to force containers to run with. It is recommended to at least set 'runAsUser' to 'MustRunAsNonRoot' to disallow root.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-host-security"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether a pod is allowed to access the host PID namespace/host IPC, or if a pod defines host aliases.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-host-networking-ports"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether a pod can access ports on the host.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-privileged"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether privileged containers can escalate to root privileges on the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-capabilities"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to allow containers with sufficient capabilities granted to obtain escalated access.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-forbidden-sysctls"),(0,l.kt)("td",{parentName:"tr",align:null},"Determine what system controls are allowed or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-apparmor"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevents an application from accessing files it should not access.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-seccomp"),(0,l.kt)("td",{parentName:"tr",align:null},"Reduces the chance that a kernel vulnerability will be successfully exploited.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"psp-selinux"),(0,l.kt)("td",{parentName:"tr",align:null},"Security-enhanced Linux.")))),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library"},"OPA Gatekeeper policy library")," as it is the source for the policies here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi."),(0,l.kt)("h3",{id:"smtp"},"SMTP"),(0,l.kt)("p",null,"Mail server settings. In case email notifications are wanted."))}u.isMDXComponent=!0},2741:function(t,e,n){"use strict";e.Z=n.p+"assets/images/console-settings-194c60d64e6d7ffcb253a59262d17060.png"}}]);