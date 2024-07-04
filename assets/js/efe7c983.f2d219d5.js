"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9613],{7313:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(5893),n=i(1151);const o={slug:"roadmap",title:"Product Roadmap",sidebar_label:"Roadmap"},a="Roadmap",s={id:"roadmap",title:"Product Roadmap",description:"Supported Kubernetes version",source:"@site/product/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/product/roadmap",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/roadmap.md",tags:[],version:"current",lastUpdatedBy:"Jehoszafat Zimnowoda",lastUpdatedAt:1720106804,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{slug:"roadmap",title:"Product Roadmap",sidebar_label:"Roadmap"},sidebar:"mainSidebar",previous:{title:"Otomi Projects",permalink:"/product/architecture"}},l={},d=[{value:"Supported Kubernetes version",id:"supported-kubernetes-version",level:2},{value:"Plan",id:"plan",level:2},{value:"2023 Q4",id:"2023-q4",level:3},{value:"2024 Q1",id:"2024-q1",level:3},{value:"2024 Q2",id:"2024-q2",level:3},{value:"Q3 2024",id:"q3-2024",level:3},{value:"Q4 2024",id:"q4-2024",level:3},{value:"Removed features by release",id:"removed-features-by-release",level:2},{value:"v3.0",id:"v30",level:3},{value:"Drone",id:"drone",level:4},{value:"Hashicorp Vault",id:"hashicorp-vault",level:4},{value:"Migrating Secrets from Hashicorp Vault to SealedSecrets",id:"migrating-secrets-from-hashicorp-vault-to-sealedsecrets",level:5},{value:"OPA Gatekeeper",id:"opa-gatekeeper",level:4},{value:"Otomi shortcuts",id:"otomi-shortcuts",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"roadmap",children:"Roadmap"}),"\n",(0,r.jsx)(t.h2,{id:"supported-kubernetes-version",children:"Supported Kubernetes version"}),"\n",(0,r.jsx)(t.p,{children:"We are dedicated to maintain support for three different Kubernetes versions within a specific major version of Otomi. Whenever we decide to discontinue support for a particular Kubernetes version, we increment the major version of Otomi."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Otomi Version"}),(0,r.jsx)(t.th,{children:"Supported Kubernetes version"}),(0,r.jsx)(t.th,{children:"Expected release date"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"v1.0"}),(0,r.jsx)(t.td,{children:"1.24, 1.25, 1.26"}),(0,r.jsx)(t.td,{children:"2023-09-28"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"v2.0"}),(0,r.jsx)(t.td,{children:"1.25, 1.26, 1.27"}),(0,r.jsx)(t.td,{children:"2023-11-28"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"v3.0"}),(0,r.jsx)(t.td,{children:"1.26, 1.27, 1.28"}),(0,r.jsx)(t.td,{children:"2024-03-28"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"v4.0"}),(0,r.jsx)(t.td,{children:"1.27, 1.28, 1.29"}),(0,r.jsx)(t.td,{children:"2024-05-14"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"plan",children:"Plan"}),"\n",(0,r.jsx)(t.h3,{id:"2023-q4",children:"2023 Q4"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Provide a developer catalog in Gitea \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Migrate platform pipeline from Drone to Tekton \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Implement status indicators within Otomi Console to keep Team users informed about the status of various components, including Build processes, Workload management, and Service availability \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Add Team and Platform Dashboards to provide an overview of team resource status using Prometheus metrics \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Leverage Argo CD to deploy Team K8s resources \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Quality assurance cluster for continuous Otomi hardening and performance testing \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Provide UI interface for adding Helm charts to developer catalog in Gitea \u2705"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"2024-q1",children:"2024 Q1"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add Grype to the Otomi Build pipeline to scan source code for security vulnerabilities \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Implement a new secret management solution (as a replacement for Hashicorp Vault) \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Move network policies out of the Service configuration to improve network policy management \ud83d\udd04"}),"\n",(0,r.jsx)(t.li,{children:"Migrate OPA/Gatekeeper to Kyverno and offer a large set of default policies that can also be managed by Teams \ud83d\udd04"}),"\n",(0,r.jsx)(t.li,{children:"Improve Team self-service permissions \u2705"}),"\n",(0,r.jsx)(t.li,{children:"Create an Organization in Gitea for each Team (tenant)"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"2024-q2",children:"2024 Q2"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Harden the Istio service mesh configuration"}),"\n",(0,r.jsx)(t.li,{children:"Implement Gitea with a database managed by the CloudNativePG operator"}),"\n",(0,r.jsx)(t.li,{children:"Migrate Harbor and Keycloak Jobs to the Otomi operators"}),"\n",(0,r.jsx)(t.li,{children:"Enhance network policies across the platform"}),"\n",(0,r.jsx)(t.li,{children:"Enable user configurable storage classes"}),"\n",(0,r.jsx)(t.li,{children:"Provide disaster recovery procedures for Otomi core applications, such as Gitea, Keycloak and Harbor"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"q3-2024",children:"Q3 2024"}),"\n",(0,r.jsx)(t.p,{children:"After Q2 2024 we have the following goals:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Add the option to add charts from ",(0,r.jsx)(t.a,{href:"https://artifacthub.io",children:"artifacthub"})," to the Catalog \ud83d\udd04"]}),"\n",(0,r.jsx)(t.li,{children:"Leverage Argo CD to deploy Otomi Platform apps \ud83d\udd04"}),"\n",(0,r.jsx)(t.li,{children:"Bring user management into Otomi when Keycloak is used as an IdP"}),"\n",(0,r.jsx)(t.li,{children:"Ensure Otomi's NSA and CISA compliance"}),"\n",(0,r.jsx)(t.li,{children:"Show a compliance report (code vulnerabilities, image vulnerabilities, security violations, container vulnerabilities, config audit, exposed secrets) per workload"}),"\n",(0,r.jsx)(t.li,{children:"Make Otomi more plugable by enabling users to bring their own platform apps"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"q4-2024",children:"Q4 2024"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Encrypt platform secrets with SealedSecrets instead of SOPS"}),"\n",(0,r.jsx)(t.li,{children:"Remove platform app forms in favor of generated values that can be customized in an editor"}),"\n",(0,r.jsx)(t.li,{children:"Migrate to ambient mesh using eBPF"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"removed-features-by-release",children:"Removed features by release"}),"\n",(0,r.jsx)(t.h3,{id:"v30",children:"v3.0"}),"\n",(0,r.jsx)(t.h4,{id:"drone",children:"Drone"}),"\n",(0,r.jsx)(t.p,{children:"Otomi will stop delivering Drone as a platform app.\nThe Tekton app is introduced in Otomi v2.0 as a replacement. There is no migration procedure, Drone is used primarely as an Otomi deployment pipeline. However if you used it as for custom pipeline then you may need to migrate them Tekton."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This app will not be deleted if it is already deployed."})}),"\n",(0,r.jsx)(t.h4,{id:"hashicorp-vault",children:"Hashicorp Vault"}),"\n",(0,r.jsx)(t.p,{children:"Otomi will stop delivering the Hashicorp Vault as a platform app.\nThe SealedSecrets app is introduced in Otomi v2.7 as a replacement.\nThe procedure to migrate from Hashicorp Vault to SealedSecrets is as follows:"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This app will not be deleted if it is already deployed.\nThe external-secrets app is still going to be part of Otomi"})}),"\n",(0,r.jsx)(t.h5,{id:"migrating-secrets-from-hashicorp-vault-to-sealedsecrets",children:"Migrating Secrets from Hashicorp Vault to SealedSecrets"}),"\n",(0,r.jsx)(t.p,{children:"Otomi Console offers a feature to migrate secrets from Hashicorp Vault to SealedSecrets. Follow the steps below:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Ensure the SealedSecrets app is enabled and deployed in the cluster via the Otomi Console apps page."}),"\n",(0,r.jsxs)(t.li,{children:["Navigate to the ",(0,r.jsx)(t.code,{children:"Maintenance"})," page in the Otomi Console."]}),"\n",(0,r.jsxs)(t.li,{children:["Click the ",(0,r.jsx)(t.code,{children:"Migrate HashiCorp Vault Secrets to Sealed Secrets"})," button in the ",(0,r.jsx)(t.code,{children:"Migrations"})," section."]}),"\n",(0,r.jsx)(t.li,{children:"Wait for the migration to complete. The duration depends on the number of secrets in the cluster."}),"\n",(0,r.jsx)(t.li,{children:"Upon completion, an information modal will display the count of migrated secrets."}),"\n",(0,r.jsx)(t.li,{children:"The migrated secrets (Sealed Secrets) will be accessible in a few minutes."}),"\n",(0,r.jsx)(t.li,{children:"Use the SealedSecrets page to manage your secrets."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Otomi cannot overwrite existing secrets due to immutable fields.\nIt will recreate the secrets with the same name using SealedSecrets after removing them from the cluster.\nThis makes the secrets temporarily unavailable during the migration."})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The migration process doesn't delete secrets from Hashicorp Vault.\nYou can delete them from Hashicorp Vault manually after the migration is completed."})}),"\n",(0,r.jsx)(t.h4,{id:"opa-gatekeeper",children:"OPA Gatekeeper"}),"\n",(0,r.jsx)(t.p,{children:"Otomi will stop delivering the OPA Gatekeeper as a platform app.\nThe Kyverno app is going to be introduced as a replacement. There is no migration procedure, as the basic policies are already covered. However if you used your custom policies then you may need to migrated them on your own."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This app will not be deleted if it is already deployed."})}),"\n",(0,r.jsx)(t.h4,{id:"otomi-shortcuts",children:"Otomi shortcuts"}),"\n",(0,r.jsx)(t.p,{children:"Due to lack of interest in this feature, we decided to remove it from Otomi."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The shortcuts will be automatically removed from the values repo."})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var r=i(7294);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);