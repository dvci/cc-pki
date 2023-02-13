---
sidebar_position: 2
---

# CQL Authoring

CQL expresses the logic of business rules in a way that is both human readable and computable. In
order for the logic to be computed against health credentials in a scalable and standardized way
the logic must be written against a common standard format for representing the credentials.

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

## Structure Maps and Concept Maps

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

## FHIR Representation

The WHO DDCC IG specifies health credentials using the FHIR standard, and the CQL for expressing
business rules against credentials operates on the FHIR resources that make up a credential. The
DDCC health credential document Bundle contains a minimal
[Patient](https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCPatient.html)
resource along with appropriate linked
[Immunization](https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCImmunization.html)
resources representing information on vaccines administered and
[Observation](https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCObservation.html)
resources representing test results.

*QUESTIONS: DO WE WANT DIAGRAMS? DO WE WANT EXAMPLE FHIR CONTENT?*

![FHIR Representation Diagram](/img/fhir_representation.png)

*NOTE: THIS DIAGRAM IS FROM WHO MATERIALS, WE SHOULD EITHER CONFIRM THAT WE CAN USE IT OR REPLACE IT OR REMOVE IT*

## Example

The following example CQL shows a simple example of business rules applied to immunizations:

```
// Declare the name and version of the Library of functions
library DDCCPass version '1.0.0'

// The version of FHIR we are using
using FHIR version '4.0.1'

// Execute all business rules relative to a specific Patient content
context Patient

// Define boolean valued business rule to check if there is an immunization that was completed
define "Completed Immunization": exists ("Completed Immunizations")

// Define a list of completed immunizations for which the dose number is the same as the series dose
// Immunization resources are queried from those that reference the Patient we are executing against
define "Completed Immunizations":
  [Immunization] I
    where ( I.protocolApplied.doseNumber.value = I.protocolApplied.seriesDoses.value )
```

## References

CQL authoring resources:

* [CQL Introduction](https://cql.hl7.org/01-introduction.html)
* [CQL Authoring Guide](https://cql.hl7.org/02-authorsguide.html)
* [CRMI IG CQL Guidelines](https://build.fhir.org/ig/HL7/crmi-ig/branches/master/using-cql.html)
