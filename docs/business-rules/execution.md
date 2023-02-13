---
sidebar_position: 3
---

# CQL Execution

The workflow for executing CQL against vaccine credentials includes the following:

* Author
    * Write business rules using CQL to express health policies in computable fashion
    * Publishes the CQL rules as FHIR Library resources with a trust health service
    * Optionally digitally sign the business rule using a FHIR Provenance resource and provide public key to PKD
* Verifier
    * Perform Federated Verification workflow on vaccine credential
    * Identify business rule to be executed for use case
    * Optionally retrieve public key signing business rule from PKD and verify authenticity of rule
    * Map source vaccine credential to FHIR resources using StructureMaps
    * Execute CQL business rule on FHIR representation of credential

*QUESTION: DO WE WANT DIAGRAMS?*

![Workflow Diagram](/img/business_rules_workflow.png)

*NOTE: THIS DIAGRAM IS FROM WHO MATERIALS, WE SHOULD EITHER CONFIRM THAT WE CAN USE IT OR REPLACE IT OR REMOVE IT*
