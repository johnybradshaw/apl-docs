"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={slug:"multi-tenancy",title:"Multi-tenancy",sidebar_label:"Multi-tenancy"},i=void 0,s={unversionedId:"use-cases/multi-tenancy",id:"use-cases/multi-tenancy",title:"Multi-tenancy",description:"Introduction",source:"@site/product/use-cases/multi-tenancy.md",sourceDirName:"use-cases",slug:"/use-cases/multi-tenancy",permalink:"/product/use-cases/multi-tenancy",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/multi-tenancy.md",tags:[],version:"current",lastUpdatedBy:"Dennis van Kekem",lastUpdatedAt:1705406352,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{slug:"multi-tenancy",title:"Multi-tenancy",sidebar_label:"Multi-tenancy"},sidebar:"mainSidebar",previous:{title:"Adoption Framework",permalink:"/product/use-cases/adoption-framework"},next:{title:"CI/CD",permalink:"/product/use-cases/ci-cd"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Multi-tenancy in Otomi",id:"multi-tenancy-in-otomi",level:2},{value:"Why multi-tenancy in Otomi?",id:"why-multi-tenancy-in-otomi",level:2},{value:"Prevent cluster sprawl",id:"prevent-cluster-sprawl",level:3},{value:"Fast onboarding of multiple tenants",id:"fast-onboarding-of-multiple-tenants",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'Multi-tenant Kubernetes clusters are shared by multiple users and/or workloads which are referred to as "tenants". Operators most commonly implement resource isolation in Kubernetes, using namespaces and resource quota.'),(0,o.kt)("p",null,"The most common use cases for implementing multi-tenancy are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/multi-tenancy/#multiple-teams"},"Multiple teams")," (within an organization) share a single cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/multi-tenancy/#multiple-customers"},"Multiple customers")," share a single cluster")),(0,o.kt)("p",null,"Probably the most known tools to implement multi-tenancy are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/clastix/capsule"},"Capsule")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/loft-sh/kiosk"},"Kiosk"),". But these tools only implement multi-tenancy on cluster API level. What they don't offer is multi-tenant and role based access to shared tools on the cluster like Harbor, Vault, Git, and Argo CD. They also don't provide isolation for container logs and custom metrics."),(0,o.kt)("p",null,"So what if you would like to offer teams or customers not only access to the Kubernetes API, but also to (automatically provisioned) access to a Git repo, a private docker registry, a space in Vault to create and manage secrets, Argo CD, a private Prometheus instance, isolated log aggregation? This is where Otomi steps in."),(0,o.kt)("h2",{id:"multi-tenancy-in-otomi"},"Multi-tenancy in Otomi"),(0,o.kt)("p",null,"Otomi goes a step higher up in the stack. Otomi does not only provide multi-tenancy on the K8s API level, but also for shared tools on the cluster. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multi-tenancy",src:n(1998).Z,width:"2025",height:"1465"})),(0,o.kt)("p",null,"When multi-tenancy in Otomi is activated (which is optional), Otomi will support the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Teams are provided with a dedicated Prometheus instance for custom metrics (for metrics that should not be accessible for other tenants)"),(0,o.kt)("li",{parentName:"ol"},"Teams are provided with a dedicated Grafana instance configured with authorization, allowing only authenticated tenant members to access tenant dashboards"),(0,o.kt)("li",{parentName:"ol"},"Container logs are separated in Loki combined with authorization, allowing only authenticated tenant members access to the tenants container logs"),(0,o.kt)("li",{parentName:"ol"},"When Harbor is enabled, tenants will get access to a tenant project, allowing only authenticated tenant members to access tenant registries"),(0,o.kt)("li",{parentName:"ol"},"When Vault is enabled, tenant will get access to a space in Vault, allowing only authenticated tenant members access to tenant secrets"),(0,o.kt)("li",{parentName:"ol"},"When ArgoCD is enabled, tenants can only see the tenants ArgoCD applications created by Otomi"),(0,o.kt)("li",{parentName:"ol"},"Tenants will get access to Gitea and can create their own Git repositories"),(0,o.kt)("li",{parentName:"ol"},"Tenant namespaces are by default isolated for ingress and egress network traffic"),(0,o.kt)("li",{parentName:"ol"},"Tenants can allow other tenants to access their services"),(0,o.kt)("li",{parentName:"ol"},"Tenant services that are publicly exposed can be configured with OIDC, only allowing tenant members to access the exposed services")),(0,o.kt)("h2",{id:"why-multi-tenancy-in-otomi"},"Why multi-tenancy in Otomi?"),(0,o.kt)("h3",{id:"prevent-cluster-sprawl"},"Prevent cluster sprawl"),(0,o.kt)("p",null,"As companies look to further harness the power of cloud-native, they are adopting container technologies at rapid speed, increasing the number of clusters and workloads. As the number of Kubernetes clusters grows, this is creating increased work for Platform teams. When it comes to patching security vulnerabilities or upgrading clusters, teams are doing five times the amount of work."),(0,o.kt)("p",null,"With Otomi you can support multi-tenancy, allowing multiple tenants (like multiple development teams) to work independently on the same cluster, while sharing all the tools. Now you only have to deploy a single development cluster to support multiple development teams. This prevents you from Kubernetes cluster sprawl."),(0,o.kt)("h3",{id:"fast-onboarding-of-multiple-tenants"},"Fast onboarding of multiple tenants"),(0,o.kt)("p",null,"When a new project starts, or when a new development team would like to start using Kubernetes, onboarding usually takes a lot of time. It's not only about providing development teams access to a Kubernetes namespace. No, developers also need access to an image registry, container logs, container metrics, alerts, secrets stores, container vulnerability reports and policy compliance reports."),(0,o.kt)("p",null,"With Otomi you can onboard development teams (tenants) in just a couple of minutes, allowing them to login to the self-service portal and:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get access to a private image registry"),(0,o.kt)("li",{parentName:"ul"},"Download the Docker login credentials to get access to their private image registry"),(0,o.kt)("li",{parentName:"ul"},"Build OCI-compliant images from application code"),(0,o.kt)("li",{parentName:"ul"},"Deploy images (stored in the private registry) using the Otomi workloads feature"),(0,o.kt)("li",{parentName:"ul"},"Get access to pre-configured dashboards to see container metrics, policy violations, detected threads in containers and detected vulnerabilities in containers"),(0,o.kt)("li",{parentName:"ul"},"Configure ingress and network policies"),(0,o.kt)("li",{parentName:"ul"},"Configure HTTP response headers"),(0,o.kt)("li",{parentName:"ul"},"Configure CNAMEs"),(0,o.kt)("li",{parentName:"ul"},"Get access to Vault to create and manage secrets"),(0,o.kt)("li",{parentName:"ul"},"Use secrets for ingress or workloads")),(0,o.kt)("p",null,"When a team already has a code repo with a Dockderfile, they can build, deploy and expose this app within minutes after they have been onboarded onto the platform."))}p.isMDXComponent=!0},1998:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multi-tenancy-6d20d20cfd471ce025aa59ca8b3498bf.png"}}]);