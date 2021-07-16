(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(167)),o={slug:"ce/services",title:"Configuring Services in CE mode",sidebar_label:"Services"},c={unversionedId:"ce-configure-services",id:"ce-configure-services",isDocsHomePage:!1,title:"Configuring Services in CE mode",description:"When you are running Otomi in CE mode, you will operate on the values directly and have to commit them manually. This page describes how to create a Service, and how to edit a Service when running in CE mode. Before you can create a Service, make sure a Team is created first.",source:"@site/docs/ce-configure-services.md",slug:"/ce/services",permalink:"/docs/ce/services",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ce-configure-services.md",version:"current",sidebar_label:"Services",sidebar:"mainSidebar",previous:{title:"Configuring Teams in CE mode",permalink:"/docs/ce/teams"},next:{title:"Configuring Jobs in CE mode",permalink:"/docs/ce/jobs"}},s=[{value:"Add an Existing Kubernetes Service",id:"add-an-existing-kubernetes-service",children:[]},{value:"Add an Existing Knative service",id:"add-an-existing-knative-service",children:[]},{value:"Add a new Knative Service",id:"add-a-new-knative-service",children:[]},{value:"Validate changes (optional)",id:"validate-changes-optional",children:[]},{value:"Deploy changes",id:"deploy-changes",children:[]},{value:"Automation",id:"automation",children:[]},{value:"More examples",id:"more-examples",children:[{value:"New Knative service with public exposure",id:"new-knative-service-with-public-exposure",children:[]},{value:"New Knative service with TLS passthrough",id:"new-knative-service-with-tls-passthrough",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you are running Otomi in CE mode, you will operate on the values directly and have to commit them manually. This page describes how to create a Service, and how to edit a Service when running in CE mode. Before you can create a Service, make sure a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ce/teams"}),"Team")," is created first."),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/about/architecture#services"}),"Service")," in Otomi is a feature for easy deployment of container workloads using Knative Serving and exposing (existing/pre-deployed) Kubernetes and Knative services with a public URL."),Object(r.b)("p",null,"3 types of Services are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#existing-kubernetes-service"}),"1. Existing Kubernetes Service")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#existing-knative-service"}),"2. Existing Knative service")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#new-knative-service"}),"3. New Knative Service"))),Object(r.b)("p",null,"3 types of exposure are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cluster: has no internet exposure, and is only accessible in the cluster"),Object(r.b)("li",{parentName:"ul"},"Private: only accessible via the cluster's private network loadbalancer"),Object(r.b)("li",{parentName:"ul"},"Public: publicly accessible via the cluster's public network loadbalancer")),Object(r.b)("p",null,"The examples below focus on the 3 types of services. All of these 3 services will be configured with public exposure. Fot more infomation about all the supported exposure configuration values, see the Otomi ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml"}),"values-schema")," or use the Visual Studio plugin (automatically added when using the ",Object(r.b)("inlineCode",{parentName:"p"},"otomi bootstrap")," CLI command)"),Object(r.b)("h2",{id:"add-an-existing-kubernetes-service"},"Add an Existing Kubernetes Service"),Object(r.b)("p",null,"To create a Service for an existing (pre-deployed) Kubernetes service, open the ",Object(r.b)("inlineCode",{parentName:"p"},"services.<team-name>.yaml")," file in ",Object(r.b)("inlineCode",{parentName:"p"},"/env/teams/"),"."),Object(r.b)("p",null,"The next code example creates a Service in the team demo for the pre-deployed Kubernetes service with the name ",Object(r.b)("inlineCode",{parentName:"p"},"hello")," and make it public:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    otomi:\n      services:\n        - name: hello # the name of the pre deployed service\n          port: 80 # the port of the pre deployed service\n          type: public\n")),Object(r.b)("h2",{id:"add-an-existing-knative-service"},"Add an Existing Knative service"),Object(r.b)("p",null,"To create a Service for an existing (pre-deployed) Knative service, open the ",Object(r.b)("inlineCode",{parentName:"p"},"services.<team-name>.yaml")," file in ",Object(r.b)("inlineCode",{parentName:"p"},"/env/teams/"),"."),Object(r.b)("p",null,"The next code example creates a Service in the team demo for the pre-deployed Knative service with the name ",Object(r.b)("inlineCode",{parentName:"p"},"hello")," and make it public:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    otomi:\n      services:\n        - name: hello # the name of the pre deployed service\n          port: 80 # the port of the pre deployed service\n          ksvc: # service type\n            preDeployed: true # set to true to use a pre deployed knative service\n          type: public\n")),Object(r.b)("h2",{id:"add-a-new-knative-service"},"Add a new Knative Service"),Object(r.b)("p",null,"To create a new Knative service, open the ",Object(r.b)("inlineCode",{parentName:"p"},"services.<team-name>.yaml")," file in ",Object(r.b)("inlineCode",{parentName:"p"},"/env/teams/"),"."),Object(r.b)("p",null,"The next code example creates a new Knative service in the team demo to deploy a ",Object(r.b)("inlineCode",{parentName:"p"},"nginx:stable")," image and make it public:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo: # name of the team\n      services:\n        - name: test # name of the service\n          port: 80 # the port the service\n          ksvc: # service type\n            image: # provide the image for a new knative service\n              repository: nginx\n              tag: stable\n            scaleToZero: false # scale to zero true/false\n            resources:\n              limits:\n                cpu: 50m\n                memory: 64Mi\n              requests:\n                cpu: 50m\n                memory: 64Mi\n            containerPort: 80 # the container port\n          type: public #exposure\n")),Object(r.b)("h2",{id:"validate-changes-optional"},"Validate changes (optional)"),Object(r.b)("p",null,"Use Otomi CLI to validate the changes in the values based on the Otomi values schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(r.b)("p",null,"When successful, the output will show: ",Object(r.b)("inlineCode",{parentName:"p"},"otomi:validate-values:verbose Values validation SUCCESSFUL")),Object(r.b)("h2",{id:"deploy-changes"},"Deploy changes"),Object(r.b)("p",null,"Apply the changes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(r.b)("h2",{id:"automation"},"Automation"),Object(r.b)("p",null,"When you create a Service, a lot is happening (and automatically done for you) behind the scenes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Istio Virtual services are automatically generated for team services, tying a generic ingress architecture to service endpoints in a predictable way"),Object(r.b)("li",{parentName:"ul"},"Mutual TLS is automatically started between workloads that are part of the mesh"),Object(r.b)("li",{parentName:"ul"},"When creating a new Knative service, the Knative service manifest is created and deployed")),Object(r.b)("h2",{id:"more-examples"},"More examples"),Object(r.b)("p",null,"The following examples show the configuration of 2 services:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A new knative service using the ",Object(r.b)("inlineCode",{parentName:"li"},"otomi/nodejs-helloworld")," image with public exposure"),Object(r.b)("li",{parentName:"ul"},"A new knative service using the ",Object(r.b)("inlineCode",{parentName:"li"},"nginx:latest")," image with TLS passthrough")),Object(r.b)("h3",{id:"new-knative-service-with-public-exposure"},"New Knative service with public exposure"),Object(r.b)("p",null,"The following service uses a generic secret that is mounted to the pod as an environment variable and exposes the service public based on the default host-name convention ",Object(r.b)("inlineCode",{parentName:"p"},"<service-name.<team-name>.yourdomain.com>"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo:\n      services:\n        - name: hello\n          port: 80\n          ownHost: true\n          ksvc:\n            image:\n              repository: otomi/nodejs-helloworld\n              tag: v1.2.12\n            scaleToZero: false\n            resources:\n              limits:\n                cpu: 50m\n                memory: 64Mi\n              requests:\n                cpu: 50m\n                memory: 64Mi\n            secrets:\n              - mysecret-generic\n          type: public\n")),Object(r.b)("h3",{id:"new-knative-service-with-tls-passthrough"},"New Knative service with TLS passthrough"),Object(r.b)("p",null,"The following service uses a TLS secret that is mounted in the container at the specified folder path. This service is configured with TLS passthough, meaning the TLS traffic is terminated by the pod and not by the ingress controller (with is done if exposure is set to Public). The service is exposed based on a custom hostname ",Object(r.b)("inlineCode",{parentName:"p"},"tlspass.eks.dev.otomi.cloud"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'teamConfig:\n  teams:\n    demo:\n      services:\n        - name: my-nginx\n          port: 443\n          domain: tlspass.eks.dev.otomi.cloud\n          ksvc:\n            image:\n              repository: nginx\n              tag: latest\n            scaleToZero: false\n            resources:\n              limits:\n                cpu: 50m\n                memory: 64Mi\n              requests:\n                cpu: 50m\n                memory: 64Mi\n            files:\n              /etc/nginx.conf: |\n                events {\n                }\n                http {\n                  log_format main \'$remote_addr - $remote_user [$time_local]  $status \'\n                  \'"$request" $body_bytes_sent "$http_referer" \'\n                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n                  access_log /var/log/nginx/access.log main;\n                  error_log  /var/log/nginx/error.log;\n                  server {\n                    listen 443 ssl;\n                    root /usr/share/nginx/html;\n                    index index.html;\n                    server_name nginx.example.com;\n                    ssl_certificate /etc/nginx-server-certs/tls.crt;\n                    ssl_certificate_key /etc/nginx-server-certs/tls.key;\n                  }\n                }\n            secretMounts:\n              /etc/nginx-server-certs: mysecret-tls\n          type: tlsPass\n')))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);