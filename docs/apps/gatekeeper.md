---
slug: gatekeeper
title: Gatekeeper
sidebar_label: Gatekeeper
---

## Introduction

Otomi offers Kubernetes security best practices through security constraints defined as OPA policies and enforced by Gatekeeper.

## Configuration

### Security in-depth

OPA policies are a replacement for the native PodSecurityPolicies and all defined policies are modeled after the most common psp setups. The Otomi values repository holds a `policies.yaml` file with sane default presets. The full set of all policies can be found [here](https://github.com/redkubes/otomi-core/tree/main/policies). Please see the [OPA Gatekeeper policy library](https://github.com/open-policy-agent/gatekeeper-library) as it is the source for the policy baseline here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi. YAML Resources are verified against defined .rego policy rules, using the defined preset parameters as their constraint value.

### Statical analysis

Otomi's generated resources are statically evaluated by Conftest before deployment, but also at build time. This gives developers the tools to test their manifests locally, and increases certainty that only valid output will be generated.

### Runtime protection

The same policies are upheld by OPA's Gatekeeper on the cluster during runtime, making sure all deployed resources are approved by it's admission hook.

### Modes

Otomi supports 3 modes:

1. Enforcing
2. Permissive (default)
3. Disabled

In both Enforcing and Permissive mode, individual policies can be switched on or off. By default gatekeeper is enabled in permissive mode (logging & non-blocking)

Customization of the policies is supported based on the Otomi [schema](https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml) (or use Otomi Console). In case of specific requirements, admins can add their own custom policies.


## Instructions
### Switching modes

Gatekeeper by default is disabled. To turn on Gatekeeper by dragging Gatekeeper from the disabled apps section (under Platform/Apps) to the enabled aps section and click on `Deploy Changes`.

By default Gatekeeper now runs in Permissive mode (the `Disable validating webhook` is active). To switch to blocking mode, uncheck the Disable validating webhook option:

![Gatekeeper modes](../img/gatekeeper-modes.png)

### Using annotations to bypass policy checks

It is possible to deviate from the baseline, provided there is a substantiated reason for doing so. To deviate from the baseline, annotations for the pod spec can be configured. Gatekeeper always keeps a log and thus it is traceable when an annotation is used. The use of annotations is a specific Otomi feature.

In order to bypass the policy checks that are enforced by Gatekeeper, Otomi provides an override mechanism to disable or parameterize policy checks by means of annotations. This is based on a gentlemen's approach, and will be RBAC enforced in a future version of Otomi. The policy engine is aware of the following annotations for a pod spec:

```yaml
annotations:
  policy.otomi.io/ignore: $policy[,$policy2] # pod level ignore for all containers
  policy.otomi.io/ignore-sidecar: $policy[,$policy2] # pod level ignore for sidecars, such as istio-proxy
  policy.otomi.io/ignore.$container: $policy[,$policy2] # ignore for just the mentioned container
  policy.otomi.io/parameters.$policy: '{"extra":"parameters"}'
```

Parameters will be merged with the default parameters passed to the rule (as defined in the policies.yaml file in the values repo). No override exists for a specific container to provide parameters for.