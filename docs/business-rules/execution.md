---
sidebar_position: 3
---

# CQL Execution

Once CQL has been authored and packaged into a FHIR Library for distribution the CQL can be run in a
CQL execution environment. Before being run, CQL must first be converted into its ELM representation
using the
[CQL-to-ELM Translator](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md).
This conversion can be accomplished using the
[CQL to ELM Translation Service](https://github.com/cqframework/cql-translation-service),
which is also available as a
[docker image](https://hub.docker.com/r/cqframework/cql-translation-service).
The resulting ELM can then be run in a CQL Execution Engine. Available CQL Execution Engines
include:

* [JavaScript CQL Execution Framework](https://github.com/cqframework/cql-execution)
* [Java CQL Evaluation Engine](https://github.com/cqframework/cql-engine)

There is also a [CQL Evaluator](https://github.com/cqframework/clinical-reasoning), which combines
the CQL-to-ELM Translator with the Java CQL Evaluation Engine.

## Terminology

Running CQL also requires the appropriate terminology references to be present. Running CQL in the
Java CQL Evaluation Engine requires access to a
[FHIR terminology server](http://hl7.org/fhir/R4/terminology-service.html).
The JavaScript CQL Execution Framework, in addition to supporting the use of terminology servers,
also allows terminology resources to be passed into the library at the time of execution.

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

Using the StructureMaps to translate formats requires a
[mapping engine](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Mapping+Language#UsingtheFHIRMappingLanguage-MappingEngineImplementations).
Note that using the Java mapping engine also requires the use of a terminology server; it uses
[tx.fhir.org](tx.fhir.org) by default.

References:

* [DDCC IG Structure Maps](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-structure-maps)
* [DDCC IG Concept Maps](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-concept-maps)
* [Mapping Engine Implementations](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Mapping+Language#UsingtheFHIRMappingLanguage-MappingEngineImplementations)
