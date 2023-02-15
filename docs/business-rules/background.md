---
sidebar_position: 1
---

# Background

Business rules for health credentials are the instructions, guidelines, and regulations that
express health policies such as "this course of vaccines meets jurisdiction entry requirements" or
"this patient should complete their immunization schedule". These policies can support a range of
scenarios such as evaluating proof of vaccination or providing continuity of care.

Applying business rules in the context of trust networks for health credentials requires a
computable and standards-based approach for defining the rules and subsequently evaluating them
against credentials. For example, individuals who wish to test their vaccine credentials against
border entry requirement prior to travel must be able to evaluate the business rules for a variety
of destination jurisdictions against a variety of credential formats.

The WHO DDCC effort uses [Clinical Quality Language (CQL)](https://cql.hl7.org/), a standard for
health domain business rules, as the computable representation of business rules to apply against
health credentials in its Global Trust Network. CQL defines a human readable representation of logic
that can be evaluated against clinical knowledge, including health credentials. CQL is a domain
specific language intended to be usable by clinical domain experts to both author and read clinical
expressions, and does not require software development expertise. Once CQL has been authored,
running it against clinical knowledge first requires translating the CQL into its canonical
representation, the Expression Logical Model (ELM). The resulting ELM expression of the CQL can be
run against a DDCC health credential using a CQL execution engine. The result can be packaged and
shared, meaning that the execution of CQL does not require a central server and is platform
independent. This ensures that the CQL can be run on health data without actually requiring personal
health data to be shared.

Health credentials can be specified using multiple standards. DDCC health credentials, which can be
evaluated against CQL business rules, are specified using the
[Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/overview.html)
standard. FHIR is a standard that supports the electronic exchange of healthcare information. The
FHIR standard is based on common internet standards widely used across industry such as the
Hypertext Transfer Protocol (HTTP), JavaScript Object Notation (JSON), representational state
transfer (REST), and the Open Authorization (OAuth) standard.

## Business Rules in Practice

Using CQL to apply business rules against health credentials in practice is a process that takes
place over a number of steps. For example, given a scenario where a health ministry intends to
implement requirements for COVID-19 testing for entry into a country, the following steps would be
followed through the lifecycle of the rules:

1. **Conceptualizing the rules:** First, the rules themselves need to be decided at a governance
level. In this example the health ministry may decide to require a negative COVID-19 test within 72
hours to allow entry into a county

1. **Authoring the rules:** The rules can be written in CQL by clinical domain experts. For this
example the CQL would express the 72 hour timeframe and indicate which COVID-19 tests are
acceptable.

1. **Publishing the rules:** The CQL rules can be packaged as a FHIR Library resource and published
with an online trust health service. In this example publishing the rules would allow a traveler to
retrieve the published rules to run in a universal verifier application against their SMART Health
Card before traveling to ensure that they meet the entry requirements.

1. **Verify the health credentials:** Before CQL can be run against health credentials the
credentials need to be validated to ensure that they are authentic. This validation can make use of
federated cryptography infrastructure to share authentication infrastructure across jurisdictions.

1. **Convert the health credentials to the format supported for verification:** The WHO DDCC effort
defines a FHIR-based common standard for health credentials against which CQL can be run.
Credentials in other standards can be converted to the DDCC FHIR standard using FHIR StructureMaps
and ConceptMaps defined in the DDCC Implementation Guide.

1. **Execute CQL against the health credentials:** Once the credentials have been converted, the CQL
can be run against them and a result determined. In this example the results would show whether or
not the traveler meets the travel requirements.

## Workflow

The overall workflow for authoring CQL and executing it against health credentials looks as follows:

* Author
    * Write business rules using CQL to express health policies in computable fashion
    * Publishes the CQL rules as FHIR Library resources with a trust health service
    * Optionally digitally sign the business rule using a FHIR Provenance resource and provide public key to PKD
* Verifier
    * Perform Federated Verification workflow on health credential
    * Identify business rule to be executed for use case
    * Optionally retrieve public key signing business rule from PKD and verify authenticity of rule
    * Map source health credential to FHIR resources using StructureMaps
    * Execute CQL business rule on FHIR representation of credential

![Workflow Diagram](/img/business_rules_workflow.png)
