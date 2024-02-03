"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8587],{2248:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var l=n(5893),o=n(1151);const r={slug:"lab-19",title:"Configuring network policies",sidebar_label:"Configure network policies"},t=void 0,i={id:"get-started/labs/lab-19",title:"Configuring network policies",description:"In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:",source:"@site/docs/get-started/labs/lab-19.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-19",permalink:"/docs/get-started/labs/lab-19",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-19.md",tags:[],version:"current",frontMatter:{slug:"lab-19",title:"Configuring network policies",sidebar_label:"Configure network policies"},sidebar:"mainSidebar",previous:{title:"Monitor services",permalink:"/docs/get-started/labs/lab-23"},next:{title:"Use OpenTelemery",permalink:"/docs/get-started/labs/lab-27"}},d={},a=[{value:"About network policies for internal ingress",id:"about-network-policies-for-internal-ingress",level:2},{value:"Configure network policies for the Example Voting App",id:"configure-network-policies-for-the-example-voting-app",level:2},{value:"Building the images",id:"building-the-images",level:3},{value:"Create a Redis cluster and a PostgreSQL database",id:"create-a-redis-cluster-and-a-postgresql-database",level:3},{value:"Deploy the Vote app",id:"deploy-the-vote-app",level:3},{value:"Deploy the Worker app",id:"deploy-the-worker-app",level:3},{value:"Deploy the Result app",id:"deploy-the-result-app",level:3},{value:"Register the services for Exposure and configure network policies",id:"register-the-services-for-exposure-and-configure-network-policies",level:3},{value:"Postgres database",id:"postgres-database",level:4},{value:"Redis",id:"redis",level:4},{value:"Vote",id:"vote",level:4},{value:"Result",id:"result",level:4},{value:"Test the app",id:"test-the-app",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Policies for ingress traffic inside the cluster"}),"\n",(0,l.jsx)(s.li,{children:"Policies for egress traffic to go outside of the cluster (to access external FQDNs)"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"about-network-policies-for-internal-ingress",children:"About network policies for internal ingress"}),"\n",(0,l.jsx)(s.p,{children:"The internal ingress network policies alllow you to:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Deny all traffic to the Pods of a Workload"}),"\n",(0,l.jsx)(s.li,{children:"Allow selected Workload Pods running on the cluster to access your Workload's Pods"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"Deny all"})," and ",(0,l.jsx)(s.code,{children:"Allow all"})," we don't need to explain right?"]}),"\n",(0,l.jsx)(s.admonition,{type:"info",children:(0,l.jsxs)(s.p,{children:["The Ingress Network Policies in Otomi rely on the ",(0,l.jsx)(s.code,{children:"otomi.io/app"})," label. All Workloads in Otomi need to use this label. When your using an Otomi quick start template from the Catalog, this label is always added."]})}),"\n",(0,l.jsx)(s.p,{children:"To allow other Workloads on the cluster to access your Workload's Pods, do the following:"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsxs)(s.strong,{children:["If the ",(0,l.jsx)(s.code,{children:"ClusterIP"})," service of your workload has the same name as the ",(0,l.jsx)(s.code,{children:"otomi.io/app"})," label value:"]})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Register the Kubernetes ClusterIP service of the Workload as a Service in Otomi. If no public ingress is required, then just use the ",(0,l.jsx)(s.code,{children:"Private"})," Exposure option"]}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.code,{children:"Network policies"})," section leave the ",(0,l.jsx)(s.code,{children:"PodSelector"})," field blanc"]}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.code,{children:"Ingress traffic inside the cluster"})," select ",(0,l.jsx)(s.code,{children:"Allow selected"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add the team name (without ",(0,l.jsx)(s.code,{children:"team-"}),") and ",(0,l.jsx)(s.code,{children:"otomi.io/app"})," label value of the Workload Pods that are allowed access"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsxs)(s.strong,{children:["If the ",(0,l.jsx)(s.code,{children:"ClusterIP"})," service of your workload does NOT have the same name as the ",(0,l.jsx)(s.code,{children:"otomi.io/app"})," label value:"]})}),"\n",(0,l.jsxs)(s.p,{children:["This is sometimes the case when a Workload has multiple ",(0,l.jsx)(s.code,{children:"ClusterIP"})," services. In this scenario you will only need to configure the network policies in one of the Workload services."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Register the Kubernetes ClusterIP service of the Workload as a Service in Otomi. If no public ingress is required, then just use the ",(0,l.jsx)(s.code,{children:"Private"})," Exposure option"]}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.code,{children:"Network policies"})," section leave the ",(0,l.jsx)(s.code,{children:"PodSelector"})," add the ",(0,l.jsx)(s.code,{children:"PodSelector"}),'. Use a custom value for the "otomi.io/app:" label.']}),"\n",(0,l.jsxs)(s.li,{children:["In the ",(0,l.jsx)(s.code,{children:"Ingress traffic inside the cluster"})," select ",(0,l.jsx)(s.code,{children:"Allow selected"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add the team name (without ",(0,l.jsx)(s.code,{children:"team-"}),") and ",(0,l.jsx)(s.code,{children:"otomi.io/app"})," label value of the Workload Pods that are allowed access"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"configure-network-policies-for-the-example-voting-app",children:"Configure network policies for the Example Voting App"}),"\n",(0,l.jsx)(s.h3,{id:"building-the-images",children:"Building the images"}),"\n",(0,l.jsxs)(s.p,{children:["Build the ",(0,l.jsx)(s.code,{children:"Vote"}),", ",(0,l.jsx)(s.code,{children:"Worker"})," and ",(0,l.jsx)(s.code,{children:"Result"})," images from this ",(0,l.jsx)(s.a,{href:"https://github.com/redkubes/example-voting-app",children:"repo"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Use the Build feature in Otomi to build the images with ",(0,l.jsx)(s.code,{children:"mode-Docker"}),". Set the ",(0,l.jsx)(s.code,{children:"path"})," to ",(0,l.jsx)(s.code,{children:"./vote/Dockerfile"})," for the Vote image (and ",(0,l.jsx)(s.code,{children:"./worker/Dockerfile"})," for the Worker and ",(0,l.jsx)(s.code,{children:"./result/Dockerfile"})," for Result)."]}),"\n",(0,l.jsx)(s.h3,{id:"create-a-redis-cluster-and-a-postgresql-database",children:"Create a Redis cluster and a PostgreSQL database"}),"\n",(0,l.jsxs)(s.p,{children:["Use the ",(0,l.jsx)(s.code,{children:"postgresql"})," and the ",(0,l.jsx)(s.code,{children:"redis"})," charts from the Catalog to create a Redis master-replica cluster and a PostgreSQL database. For this lab, Redis authentication needs to be turned off by setting ",(0,l.jsx)(s.code,{children:"auth.enabled=false"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"deploy-the-vote-app",children:"Deploy the Vote app"}),"\n",(0,l.jsxs)(s.p,{children:["Use the ",(0,l.jsx)(s.code,{children:"k8s-deployment"})," chart to deploy the vote app. Use the following values:"]}),"\n",(0,l.jsxs)(s.p,{children:["Name: ",(0,l.jsx)(s.code,{children:"vote"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-yaml",children:"containerPorts:\n  - name: http\n    containerPort: 80\n    protocol: TCP\nenv:\n  - name: REDIS_HOST\n    value: <redis-cluster-name>-master\n"})}),"\n",(0,l.jsx)(s.h3,{id:"deploy-the-worker-app",children:"Deploy the Worker app"}),"\n",(0,l.jsxs)(s.p,{children:["Use the ",(0,l.jsx)(s.code,{children:"k8s-deployment"})," chart to deploy the worker app. Use the following values:"]}),"\n",(0,l.jsxs)(s.p,{children:["Name: ",(0,l.jsx)(s.code,{children:"worker"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-yaml",children:"containerPorts:\n  - name: http\n    containerPort: 80\n    protocol: TCP\nenv:\n  - name: DATABASE_USER\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-superuser\n        key: username\n  - name: DATABASE_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-superuser\n        key: password\n  - name: REDIS_HOST\n    value: <redis-cluster-name>-master\n  - name: DATABASE_HOST\n    value: <psql-cluster-name>-rw\n"})}),"\n",(0,l.jsx)(s.h3,{id:"deploy-the-result-app",children:"Deploy the Result app"}),"\n",(0,l.jsxs)(s.p,{children:["Use the ",(0,l.jsx)(s.code,{children:"k8s-deployment"})," chart to deploy the result app. Use the following values:"]}),"\n",(0,l.jsxs)(s.p,{children:["Name: ",(0,l.jsx)(s.code,{children:"result"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-yaml",children:"containerPorts:\n  - name: http\n    containerPort: 80\n    protocol: TCP\nenv:\n  - name: DATABASE_USER\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-superuser\n        key: username\n  - name: DATABASE_PASSWORD\n    valueFrom:\n      secretKeyRef:\n        name: <psql-cluster-name>-superuser\n        key: password\n  - name: DATABASE_HOST\n    value: <psql-cluster-name>-rw\n"})}),"\n",(0,l.jsx)(s.h3,{id:"register-the-services-for-exposure-and-configure-network-policies",children:"Register the services for Exposure and configure network policies"}),"\n",(0,l.jsx)(s.h4,{id:"postgres-database",children:"Postgres database"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Register the ",(0,l.jsx)(s.code,{children:"<workload-name>-rw"})," Postgresql service"]}),"\n",(0,l.jsxs)(s.li,{children:["Set exposure to ",(0,l.jsx)(s.code,{children:"Private"})," (default)"]}),"\n",(0,l.jsxs)(s.li,{children:["In ",(0,l.jsx)(s.code,{children:"Network policies"})," add the Pod Selector ",(0,l.jsx)(s.code,{children:"<postgres-workload-name>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Select ",(0,l.jsx)(s.code,{children:"Allow selected"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add From team name ",(0,l.jsx)(s.code,{children:"<team-name>"})," and From label value ",(0,l.jsx)(s.code,{children:"<postgres-workload-name>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add From team name ",(0,l.jsx)(s.code,{children:"<team-name>"})," and From label value ",(0,l.jsx)(s.code,{children:"<worker>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add From team name ",(0,l.jsx)(s.code,{children:"<team-name>"})," and From label value ",(0,l.jsx)(s.code,{children:"<result>"})]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"redis",children:"Redis"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Register the ",(0,l.jsx)(s.code,{children:"<workload-name>-master"})," Redis service"]}),"\n",(0,l.jsxs)(s.li,{children:["Set exposure to ",(0,l.jsx)(s.code,{children:"Private"})," (default)"]}),"\n",(0,l.jsxs)(s.li,{children:["In ",(0,l.jsx)(s.code,{children:"Network policies"})," add the Pod Selector ",(0,l.jsx)(s.code,{children:"<redis-workload-name>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Select ",(0,l.jsx)(s.code,{children:"Allow selected"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add From team name ",(0,l.jsx)(s.code,{children:"<team-name>"})," and From label value ",(0,l.jsx)(s.code,{children:"<redis-workload-name>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add From team name ",(0,l.jsx)(s.code,{children:"<team-name>"})," and From label value ",(0,l.jsx)(s.code,{children:"<worker>"})]}),"\n",(0,l.jsxs)(s.li,{children:["Add From team name ",(0,l.jsx)(s.code,{children:"<team-name>"})," and From label value ",(0,l.jsx)(s.code,{children:"<vote>"})]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"vote",children:"Vote"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Register the ",(0,l.jsx)(s.code,{children:"vote"})," service"]}),"\n",(0,l.jsxs)(s.li,{children:["Set exposure to ",(0,l.jsx)(s.code,{children:"External"})]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"result",children:"Result"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Register the ",(0,l.jsx)(s.code,{children:"<result>"})," service"]}),"\n",(0,l.jsxs)(s.li,{children:["Set exposure to ",(0,l.jsx)(s.code,{children:"External"})]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"test-the-app",children:"Test the app"}),"\n",(0,l.jsxs)(s.p,{children:["Go to the external URL of the ",(0,l.jsx)(s.code,{children:"vote"})," application. Click on ",(0,l.jsx)(s.code,{children:"Cats"})," or ",(0,l.jsx)(s.code,{children:"Dogs"}),". Now go to the external URL of the ",(0,l.jsx)(s.code,{children:"result"})," application. You should see the result of your vote."]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>t});var l=n(7294);const o={},r=l.createContext(o);function t(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);