(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),a=(n(0),n(167)),r={slug:"universal-opa-policy-development",title:"Universal OPA Policies Development",author:"Alin Spinu",author_title:"Developer @ Red Kubes",tags:["otomi","opa","gatekeeper","rego","security"]},s={permalink:"/blog/universal-opa-policy-development",source:"@site/blog/2021-03-11-universal-opa-policy-development.md",description:"Introduction",date:"2021-03-11T00:00:00.000Z",tags:[{label:"otomi",permalink:"/blog/tags/otomi"},{label:"opa",permalink:"/blog/tags/opa"},{label:"gatekeeper",permalink:"/blog/tags/gatekeeper"},{label:"rego",permalink:"/blog/tags/rego"},{label:"security",permalink:"/blog/tags/security"}],title:"Universal OPA Policies Development",readingTime:9.58,truncated:!1,prevItem:{title:"Integrating Harbor, KeyCloak and Istio",permalink:"/blog/harbor-keycloak-istio"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Hands-on using OPA in Otomi Container Platform",id:"hands-on-using-opa-in-otomi-container-platform",children:[]},{value:"OPA ecosystem common knowledge",id:"opa-ecosystem-common-knowledge",children:[]},{value:"In-Cluster vs Static Resources Policy Wars",id:"in-cluster-vs-static-resources-policy-wars",children:[]},{value:"Conftest in action",id:"conftest-in-action",children:[]},{value:"Running Gatekeeper",id:"running-gatekeeper",children:[]},{value:"Policy Development in Gatekeeper context",id:"policy-development-in-gatekeeper-context",children:[]},{value:"Planning for Unification",id:"planning-for-unification",children:[]},{value:"Open Issues in OPA Community",id:"open-issues-in-opa-community",children:[]},{value:"Current State of Unified Rego",id:"current-state-of-unified-rego",children:[]},{value:"How Istio is Mutating Objects in the Background",id:"how-istio-is-mutating-objects-in-the-background",children:[]},{value:"Otomi Policy Features",id:"otomi-policy-features",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This is a story behind the trenches of writing ",Object(a.b)("strong",{parentName:"p"},"Rego")," policies and how to unravel the cumbersome process of working with ",Object(a.b)("strong",{parentName:"p"},"Gatekeeper")," vs ",Object(a.b)("strong",{parentName:"p"},"Conftest")," for validating Kubernetes resources."),Object(a.b)("p",null,"Working with policy compliant Kubernetes clusters is on the radar for a lot of companies these days, especially if you\u2019re walking the path towards popular certifications like ISO/IEC 27001 for Information Security Management."),Object(a.b)("h2",{id:"hands-on-using-opa-in-otomi-container-platform"},"Hands-on using OPA in Otomi Container Platform"),Object(a.b)("p",null,"As some of you probably already know, the Kubernetes native PodSecurityPolicy resource is going to be deprecated, see ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/kubernetes/kubernetes/pull/97171"}),"Github")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.google.com/document/d/1VKqjUlpU888OYtIrBwidL43FOLhbmOD5tesYwmjzO4E/edit#"}),"Google docs"),"\u200a\u2014\u200athis leaves way for external projects like Open Policy Agent to be used as the new standard for developing and enforcing policy rules."),Object(a.b)("p",null,"Otomi is using OPA as the standard for providing policy enforcement because of the popularity and commitment to the Kubernetes community, ease of use and also for the future project development plans."),Object(a.b)("p",null,"One of the key principles of Otomi Container Platform is that it is easy to use and provide clarity for integrations, allowing developers to easily extend any platform feature and provide integrated security for everything from the ground up."),Object(a.b)("h2",{id:"opa-ecosystem-common-knowledge"},"OPA ecosystem common knowledge"),Object(a.b)("p",null,"Decisions are handled by the means of ",Object(a.b)("strong",{parentName:"p"},"Admission Controllers")," such as ",Object(a.b)("strong",{parentName:"p"},"OPA kube-mgmt")," project or Gatekeeper, which I will touch upon in a minute, but also remember that we can validate things using ",Object(a.b)("strong",{parentName:"p"},"Rego query")," language on any plain files using static analysis tools like Conftest. The list of supported Conftest formats include (but is not limited to): json, yaml, Dockerfile, INI files, XML, etc.Here\u2019s the problem, Conftest and Gatekeeper are on the path of diverging. Although they speak the same REGO language, the two disagree on some aspects."),Object(a.b)("h2",{id:"in-cluster-vs-static-resources-policy-wars"},"In-Cluster vs Static Resources Policy Wars"),Object(a.b)("p",null,"Working in a policy constricted environment is like having \u201cparental controls\u201d turned on for unprivileged users, allowing administrators to decide what kind of resources and setup are safest for their flock of Kubernetes clusters. From an application developer\u2019s perspective, being denied access to deploy some resources means that they are not adhering to the rules imposed for that environment and should decide to find and fix the missing links in this setup."),Object(a.b)("p",null,"Policy administrators/developers on the other hand, struggle with finding the correct enforcement strategies and adjusting policy parameters according to desired state or allowing certain exclusions for cases where policy enforcement does not make sense. For example: system namespaces, cloud vendor specific namespaces or anything that should avoid intervention by default. There is no golden rule for policy adoption and you are in charge of overcoming your own mistakes if something is not right."),Object(a.b)("p",null,"Let\u2019s start with the simple use-case of running policy checks against any kind of YAML resource. Then I move forward with more details about in-cluster Kubernetes admission review objects."),Object(a.b)("h2",{id:"conftest-in-action"},"Conftest in action"),Object(a.b)("p",null,"With a simple command we can test if a helm chart is violating any rules in the provided policies folder."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ helm template stable/keycloak | conftest test --policy ./policies/ --all-namespaces -\nFAIL - Policy: container-limits - container <keycloak> has no resource limits\nFAIL - Policy: container-limits - container <keycloak-test> has no resource limits\n162 tests, 160 passed, 0 warnings, 2 failures, 0 exceptions\n")),Object(a.b)("p",null,"The generated yaml files are streamed into Conftest and policies are tested one by one."),Object(a.b)("p",null,"By examining the log message, we can see that the container-limits policy is marking two resources as failures. Now all we have to do is modify the templates to provide a \u201csensitive\u201d amount of resource limits to the indicated containers and our policy checks will pass successfully! Hooray"),Object(a.b)("p",null,"This is pretty useful if you want to adopt new helm applications, but don\u2019t want to deploy anything to the cluster unless it\u2019s well-examined for any violations. Conftest supports passing values to the policies using the \u2013data option, which allows policy designers to configure different settings through parameters. Parameters can help us control any aspect of creating configurable rules for resources. I will return to that in a moment."),Object(a.b)("h2",{id:"running-gatekeeper"},"Running Gatekeeper"),Object(a.b)("p",null,"Gatekeeper is becoming the new standard for implementing security policies in Kubernetes, endorsing a broad ecosystem to spread ideas. Enforcing policy decisions works by using a validating web-hook, intercepting any request authenticated by the api-server and checking if the request meets the defined policy\u200a or rejecting it otherwise."),Object(a.b)("p",null,"Trying to create a non-conformant resource object in a Gatekeeper enabled cluster results in an error with a message to explain the rejected request."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'$ helm template charts/redis | kubectl apply -f -\n\nsecret/redis created\nconfigmap/redis created\nservice/redis-master created\nError from server (\n[denied by banned-image-tags] Policy: banned-image-tags - container <redis> has banned image tag <latest>, banned tags are {"latest", "master"}\n[denied by psp-allowed-users] Policy: psp-allowed-users - Container redis is attempting to run as disallowed user 0. Allowed runAsUser: {"rule": "MustRunAsNonRoot"}\n)\nerror when creating "redis/templates/redis-master-statefulset.yaml": admission webhook "validation.gatekeeper.sh" denied the request\n')),Object(a.b)("p",null,"As you can see, some of the resources get created, but the command fails with a denial from the admission webhook."),Object(a.b)("p",null,"To make this resource valid, small tweaks to the image tag and securityContext fields will do the trick."),Object(a.b)("h2",{id:"policy-development-in-gatekeeper-context"},"Policy Development in Gatekeeper context"),Object(a.b)("p",null,"Similar to plain policy files which Conftest uses, Gatekeeper policy library works by loading into memory a collection of wrapped rego files in Kubernetes CRDs called ConstraintTemplates."),Object(a.b)("p",null,"To enforce a policy for certain resource types we need to instantiate a Constraint (CR resource) which is acting like the blueprint with desired values or parameters."),Object(a.b)("p",null,"Example Gatekeeper setup for Config and Constraint resources:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"--- # Gatekeeper Config\napiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: gatekeeper-system\nspec:\n  match:\n    - excludedNamespaces:\n        - gatekeeper-system\n        - kube-system\n      processes:\n        - '*'\nsync:\n  syncOnly:\n    - group: ''\n      kind: Pod\n      version: v1\n--- # ContainerLimits Constraint\napiVersion: constraints.gatekeeper.sh/v1beta1\nkind: ContainerLimits\nmetadata:\n  name: containerlimits\nspec:\n  match:\n    kinds:\n      - apiGroups:\n          - apps\n          - ''\n        kinds:\n          - DaemonSet\n          - Deployment\n          - StatefulSet\n          - Pod\nparameters:\n  container-limits:\n    enabled: false\n    cpu: '2'\n    memory: 2000Mi\n")),Object(a.b)("p",null,"So far this looks pretty easy\u200a. We decide to enable this policy for all namespaces except for \u201cgatekeeper-system\u201d & \u201ckube-system\u201d and Gatekeeper will test all our containers for resource limits."),Object(a.b)("p",null,"Hold on.. Where is the definition for this policy? Rego Rules are defined in CRD files called ConstraintTemplates and they need to be deployed prior to the Constraint instance."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"--- # ConstraintTemplate for container-limits policy\napiVersion: templates.gatekeeper.sh/v1beta1\nkind: ConstraintTemplate\nmetadata:\n name: containerlimits\nspec:\n crd:\n   spec:\n     names:\n       kind: ContainerLimits\n     validation:        # Schema for the `parameters` field\n       openAPIV3Schema:\n...\ntargets:\n- target: admission.k8s.gatekeeper.sh\n libs:\n   - |-\n     package lib.utils\n     ...\n rego: |-\n   package containerlimits\n   ...\n")),Object(a.b)("p",null,"To simplify the example, we\u2019ve cut out parts of our file, but you can also view it on the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/open-policy-agent/gatekeeper-library/blob/master/library/general/containerlimits/template.yaml"}),"Gatekeeper Library repo"),". The \u201crego\u201d property is where the actual policy definition lives and any dependency libraries can be declared in the list of \u201clibs\u201d. We won\u2019t go into how Rego rules for violations work now, but you can enjoy all the fun of learning a powerful query language inspired by decades old ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.openpolicyagent.org/docs/latest/policy-language/"}),"Datalog"),"."),Object(a.b)("h2",{id:"planning-for-unification"},"Planning for Unification"),Object(a.b)("p",null,"While the process of creating new policies seems to bear a lot of weight, luckily there is a simple CLI tool to speed up our work called Konstraint."),Object(a.b)("p",null,"You can define the rules in Rego files and Konstraint will wrap our policy and all dependency libraries in the necessary CRD files for Gatekeeper. Konstraint has core library functions for working with all kinds of kubernetes native objects which makes it an indispensable tool for Rego development. OK, so this means we only care about writing Rego files and we can test them in both Gatekeeper and Conftest."),Object(a.b)("h2",{id:"open-issues-in-opa-community"},"Open Issues in OPA Community"),Object(a.b)("p",null,"While that is true, after delving deeper into the bowels of Gatekeeper and Conftest, we found conflicting design concepts which completely ruin this unified policy development mindset."),Object(a.b)("p",null,"The way you can define parameters in two libraries is different, and Gatekeeper has a restrictive parser which does not allow arbitrary imports in the rego definition. There has been an attempt to change this hard limitation in a discussion ","[here]","(",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/open-policy-agent/gatekeeper/issues/1046"}),"https://github.com/open-policy-agent/gatekeeper/issues/1046")),Object(a.b)("h2",{id:"current-state-of-unified-rego"},"Current State of Unified Rego"),Object(a.b)("p",null,"To echo the subject once again, we are interested in reducing the boilerplate and simplify the process of developing Policies."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[ Same Rego == different contexts ]")),Object(a.b)("p",null,"Working with one common set Rego policy files and using the same source code for testing \u201cstatic files\u201d, generated from CI Builds or across any \u201cGatekeeping context\u201d, where objects are created via the Kubernetes api. Let\u2019s cut to the chase, and say we already made this happen, and delivered a working solution in Otomi. By using the available community tools, lots of integration work and a lot of customization additions. We now have a rich collection of policies and utility functions defined for our Kubernetes clusters\u200a. You can browse them in the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/tree/master/policies/"}),"Otomi-core repository"),"."),Object(a.b)("h2",{id:"how-istio-is-mutating-objects-in-the-background"},"How Istio is Mutating Objects in the Background"),Object(a.b)("p",null,"So by now, we understand all the nitty gritty details about Rego policies and Gatekeeper\u200a\u2014\u200abut there will always be external factors, changing the state of the world and you can find yourself in a closed box situation, nowhere to go."),Object(a.b)("p",null,"This situation becomes a nightmare when using Istio mesh for networking. In reality Istio is creating a \u201csubspace\u201d of resources by injecting a Sidecar container to all the pods in namespaces where service mesh communication is enabled. This kind of container is sometimes interfering with the security constraints design strategy."),Object(a.b)("h2",{id:"otomi-policy-features"},"Otomi Policy Features"),Object(a.b)("p",null,"To create some flexibility, we have further extended the policy exceptions capabilities by examining granular annotation information for every resource under analysis."),Object(a.b)("p",null,"Coming back to the Parameters idea described a while back, if Policy files can read resource files as raw input, why not allow certain exceptions through annotating which resources we want to skip checking, similar to the excludeNamespace option for Gatekeeper."),Object(a.b)("p",null,"Rego has a rich built-in library system and is a powerful language, allowing us to easily create robust utility functions for this design."),Object(a.b)("p",null,"To give an example, using the following annotations will allow entire pod or certain containers from the pod to exclude one or more policies:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"# Annotation for entire pod\npolicy.otomi.io/ignore: psp-allowed-repos\n# Annotation for Istio sidecar based containers\npolicy.otomi.io/ignore-sidecar: psp-allowed-users,psp-capabilities\n# Annotation for specific container (name=app-container)\npolicy.otomi.io/ignore/app-container: banned-image-tags\nAnother example of exclusion is to turn of the policy entirely by disabling it from the baseline settings:\n# baseline configuration\npolicies:\n container-limits:\n   enabled: false\n   cpu: '2'\n   memory: 2Gi\n banned-image-tags:\n   enabled: false\n   tags:\n     - latest\n     - master\n psp-host-filesystem:\n   enabled: true\n   allowedHostPaths:\n     - pathPrefix: /tmp/\n       readOnly: false\n psp-allowed-users:\n   enabled: true\n   runAsUser:\n     rule: MustRunAsNonRoot\n   runAsGroup:\n     rule: MayRunAs\n     ranges:\n       - min: 1\n         max: 65535\n   supplementalGroups:\n     rule: MayRunAs\n     ranges:\n       - min: 1\n         max: 65535\n   fsGroup:\n     rule: MayRunAs\n     ranges:\n       - min: 1\n         max: 65535\n psp-host-security:\n   enabled: true\npsp-host-networking-ports:\n   enabled: true\npsp-privileged:\n   enabled: true\npsp-capabilities:\n   enabled: true\n   allowedCapabilities:\n     - NET_BIND_SERVICE\n     - NET_RAW\n psp-forbidden-sysctls:\n   enabled: true\n   forbiddenSysctls:\n     - kernel.*\n     - net.*\n     - abi.*\n     - fs.*\n     - sunrpc.*\n     - user.*\n     - vm.*\n psp-apparmor:\n   enabled: true\n   allowedProfiles:\n     - runtime/default\n     - docker/default\npsp-selinux:\n   enabled: false\n   seLinuxContext: RunAsAny\npsp-seccomp:\n   enabled: false\n   allowedProfiles:\n     - runtime/default\npsp-allowed-repos:\n   enabled: true\n   repos:\n     - docker.io\n     - gke.otomi.cloud\n     - aks.otomi.cloud\n     - eks.otomi.cloud\n")),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"To pin down the state of the landscape\u200a\u2014\u200a designing Kubernetes policies is still evolving towards new heights and I can image in the near future more and more projects sharing the same policies from a registry like the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/policy-hub/policy-hub-cli"}),"policy-hub"),"."),Object(a.b)("p",null,"We think creating a common understanding about unified Rego is the key to a sunny future."),Object(a.b)("p",null,"This article was originally posted by Alin Spinu on ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://spinualin.medium.com/universal-opa-policies-development-a3f88226e3d5"}),"Medium"),"."))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(r,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);