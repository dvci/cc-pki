---
sidebar_position: 3
---

# CQL Execution

# Prequisites for CQL execution
Packaged FHIR library with CQL
ELM translator
CQL engine of choice with links to available engines
FHIR terminology server in some cases

The workflow for executing CQL against health credentials includes the following:

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

*QUESTION: DO WE WANT DIAGRAMS?*

![Workflow Diagram](/img/business_rules_workflow.png)

*NOTE: THIS DIAGRAM IS FROM WHO MATERIALS, WE SHOULD EITHER CONFIRM THAT WE CAN USE IT OR REPLACE IT OR REMOVE IT*

## Structure Maps and Concept Maps

The [DDCC Implementation Guide](https://worldhealthorganization.github.io/ddcc/) defines both the
common standard representation against which the CQL can be written and the mappings for translating
various source formats into the common representation. The source formats are

* [SMART Health Cards: Vaccination & Testing (SMART Health Cards)](https://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig/)
* [European Union Digital COVID Certificates (EUDCC)](https://health.ec.europa.eu/publications/technical-specifications-eu-digital-covid-certificates-volumes-1-5_en)
* [International Civil Aviation Organization Visible Digital Seals (ICAO VDS-NC)](https://www.icao.int/Security/FAL/TRIP/PublishingImages/Pages/Publications/Guidelines%20-%20VDS%20for%20Travel-Related%20Public%20Health%20Proofs.pdf)
* [Digital Infrastructure for Verifiable Open Credentialing (DIVOC)](https://divoc.egov.org.in/)

The common representation that these source health credential formats need to be transformed to
before evaluating CQL business rules is the
[World Health Organization Digital Documentation of COVID-19 Certificates (WHO DDCC)](https://worldhealthorganization.github.io/ddcc/content_profiles.html)

Translating across formats requires correctly mapping both the structure of the credential and the
clinical concepts expressed within that structure.

Mapping the structure requires pulling data from the source format and expressing it in the
destination format. For example, the name of the credential holder has different representations in
each of the formats and needs to be correctly mapped to the destination format. Mapping the
structure of the credential is accomplished using
[FHIR StructureMaps](https://fhir-ru.github.io/structuremap.html).
StructureMaps define rules that describe how two different structures are related to each other and
provides the logic that defines how instances can be converted from one structure to the other in an
automated fashion.

In addition to mapping the overall structure, clinical concepts need to be correctly mapped. For
example, one format may use LOINC to represent the type of a medical test while another format may
use SNOMED CT. Mapping the clinical concepts from one format to another is accomplished using
[FHIR ConceptMaps](https://fhir-ru.github.io/conceptmap.html).
A ConceptMap defines a mapping from a set of concepts in one code system to concepts in another code
system.

References:

* [DDCC IG Structure Maps](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-structure-maps)
* [DDCC IG Concept Maps](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-concept-maps)
