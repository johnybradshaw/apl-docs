"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[528],{4755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=i(5893),t=i(1151);const l={slug:"lab-27",title:"OpenTelemetry",sidebar_label:"Use OpenTelemery"},r=void 0,o={id:"get-started/labs/lab-27",title:"OpenTelemetry",description:"In order to make a system observable, it must be instrumented. Language specific implementation of OpenTelemetry provides a way to instrument your application without touching your source code. In this lab we're going to instrument a Java application.",source:"@site/docs/get-started/labs/lab-27.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-27",permalink:"/docs/get-started/labs/lab-27",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-27.md",tags:[],version:"current",frontMatter:{slug:"lab-27",title:"OpenTelemetry",sidebar_label:"Use OpenTelemery"},sidebar:"mainSidebar",previous:{title:"Configure network policies",permalink:"/docs/get-started/labs/lab-19"},next:{title:"Canary Deployments",permalink:"/docs/get-started/labs/lab-28"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build an image from source code",id:"build-an-image-from-source-code",level:2},{value:"Create a workload from the developer catalog",id:"create-a-workload-from-the-developer-catalog",level:2},{value:"Expose the service",id:"expose-the-service",level:2},{value:"See traces",id:"see-traces",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In order to make a system observable, it must be instrumented. Language specific implementation of OpenTelemetry provides a way to instrument your application without touching your source code. In this lab we're going to instrument a Java application."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"For this lab it is required to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.code,{children:"Tempo"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.code,{children:"Otel"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.code,{children:"Loki"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.code,{children:"Grafana"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enable tracing for ",(0,s.jsx)(n.code,{children:"Istio"})," and ",(0,s.jsx)(n.code,{children:"Nginx Ingress"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"build-an-image-from-source-code",children:"Build an image from source code"}),"\n",(0,s.jsxs)(n.p,{children:["For this lab we're going to use the ",(0,s.jsx)(n.a,{href:"https://github.com/spring-projects/spring-petclinic",children:"Spring PetClinic Sample Application"}),". Follow these steps to build an image from source code:"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Using a Gitea repository is not required. You can also build using public repositories."})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new repo called ",(0,s.jsx)(n.code,{children:"petclinic"})]}),"\n",(0,s.jsx)(n.li,{children:"Clone the Spring PetClinic Sample Application:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/spring-projects/spring-petclinic.git\ncd spring-petclinic\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Mirror the Spring PetClinic Sample Application to your ",(0,s.jsx)(n.code,{children:"petclinc"})," repo:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git push --mirror https://gitea.<your-domain>/<your-user-name>/petclinic.git\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Builds"})," in the left menu and click ",(0,s.jsx)(n.code,{children:"Create Build"})]}),"\n",(0,s.jsxs)(n.li,{children:["Fill in the Build name ",(0,s.jsx)(n.code,{children:"petclinic"})]}),"\n",(0,s.jsxs)(n.li,{children:["Choose ",(0,s.jsx)(n.code,{children:"Buildpacks"})]}),"\n",(0,s.jsxs)(n.li,{children:["Fill in the ",(0,s.jsx)(n.code,{children:"Repo URL"})," with the ",(0,s.jsx)(n.code,{children:"petclinic"})," Gitea repo you created"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Submit"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-workload-from-the-developer-catalog",children:"Create a workload from the developer catalog"}),"\n",(0,s.jsxs)(n.p,{children:["Go to the list of Builds and add the repository of the ",(0,s.jsx)(n.code,{children:"petclinc"})," build to your clipboard. Remember that the tag is latest."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Workloads"})," in the left menu and click on ",(0,s.jsx)(n.code,{children:"Create Workload"})]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"k8s-deployment-otel"})," from the catalog"]}),"\n",(0,s.jsxs)(n.li,{children:["Add the Name ",(0,s.jsx)(n.code,{children:"petclinic"})," for the workload"]}),"\n",(0,s.jsxs)(n.li,{children:["Leave the ",(0,s.jsx)(n.code,{children:"Auto image updater"})," to ",(0,s.jsx)(n.code,{children:"Disabled"})]}),"\n",(0,s.jsxs)(n.li,{children:["In the workload ",(0,s.jsx)(n.code,{children:"values"}),", change the following parameters:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"image:\n  repository: <paste from clipboard>\n  tag: latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"Because we're deploying a Java application here, maybe also change the resources:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"resources:\n  limits:\n    cpu: 500m\n    memory: 1Gi\n  requests:\n    cpu: 300m\n    memory: 256Mi\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Submit"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now click on ",(0,s.jsx)(n.code,{children:"Deploy Changes"})]}),"\n",(0,s.jsx)(n.h2,{id:"expose-the-service",children:"Expose the service"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the left menu panel under click ",(0,s.jsx)(n.code,{children:"Services"})," then click on ",(0,s.jsx)(n.code,{children:"Create Service"})]}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:"petclinic"})," service"]}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.code,{children:"Exposure Ingress"}),", select ",(0,s.jsx)(n.code,{children:"Ingress"})," and use the default configuration"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Submit"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Deploy Changes"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-traces",children:"See traces"}),"\n",(0,s.jsxs)(n.p,{children:["To be able to see traces, we'll first need to generate some requests. Click on the URL of the ",(0,s.jsx)(n.code,{children:"petclinic"})," service and generate some requests."]}),"\n",(0,s.jsxs)(n.p,{children:["To see traces, you'll first need to find a ",(0,s.jsx)(n.code,{children:"TraceID"})," of a trace. Go to ",(0,s.jsx)(n.code,{children:"Apps"})," in the left menu and then click op ",(0,s.jsx)(n.code,{children:"Loki"}),". Select the label ",(0,s.jsx)(n.code,{children:"App"})," and select value ",(0,s.jsx)(n.code,{children:"petclinic"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Click on a log entry of a request. Note that the requests are logged by the Istio Envoy proxy. You will now see a link to the full trace in Grafana Tempo. Click on it."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you don't see any traces, check and see if the pod runs the ",(0,s.jsx)(n.code,{children:"ghcr.io/open-telemetry/opentelemetry-operator/autoinstrumentation-java:1.26.0"})," container. Sometimes the pod starts before the ",(0,s.jsx)(n.code,{children:"Instrumentation"})," resource has been created. If this is the case, restart the Pod"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Team apps",src:i(559).Z+"",width:"3848",height:"2486"})}),"\n",(0,s.jsx)(n.p,{children:"And when you click on the Node graph, you\u2019ll see the complete flow:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Team apps",src:i(9159).Z+"",width:"3848",height:"2250"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9159:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/traces-loki-nodes-38816351351dd20a779500a0c943ef79.png"},559:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/traces-loki-7acf9107b085b83d75001a9138a0e4bb.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);