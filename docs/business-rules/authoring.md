---
sidebar_position: 2
---

# CQL Authoring

CQL expresses the logic of business rules in a way that is both human readable and computable. In
order for the logic to be computed against health credentials in a scalable and standardized way
the logic must be written against a common standard format for representing the credentials.

## Authoring Tools

CQL can be authored using any text editor, however using an integrated development environment (IDE)
that specifically supports CQL can streamline the experience. The
[Visual Studio (VS) Code](https://code.visualstudio.com/)
IDE has a
[CQL extension](https://marketplace.visualstudio.com/items?itemName=jonnokc.clinical-quality-language)
that supports syntax highlighting when writing CQL.

## CQL Structure

CQL artifacts are organized around the concept of a library. A CQL library can be thought of as a
container a specific instance of business logic. A CQL file begins with a declaration of the library
name and version:

```
library DDCCPass version '1.0.0'
```

Each CQL library operates against one or more specific data models. In the case of CQL intended to
be run against DDCC health credentials the data model is FHIR, which can be specified with the
`using` declaration:

```
using FHIR version '4.0.1'
```

CQL libraries can also contain terminology declarations, including codesystems and valuesets. These
declarations allow the CQL to define a local name to represent a codesystem or valueset used in the
CQL logic:

```
valueset "WHO Specimen Sample Origin": 'https://worldhealthorganization.github.io/ddcc/ValueSet-who-ddcc-sample-origin-covid-19.html'
```

The local name can then be used to reference the codesystem or valueset in the CQL:

```
define "ValidSampleOrigin": [Observation] O where O.method in "WHO Specimen Sample Origin"
```

The code systems and value sets referenced in DDCC health credentials can be found in the DDCC IG:

* [DDCC IG Code Systems](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-code-systems)
* [DDCC IG Value Sets](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-value-sets)

Complete information on authoring CQL, including examples, can be found in the
[CQL Authoring Guide](https://cql.hl7.org/02-authorsguide.html).
Additional guidelines and best practices can be found in the
[CRMI IG CQL Guidelines](https://build.fhir.org/ig/HL7/crmi-ig/branches/master/using-cql.html).

## CQL for Health Credentials

The WHO DDCC IG specifies health credentials using the FHIR standard, and the CQL for expressing
business rules against credentials operates on the FHIR resources that make up a credential. The
DDCC health credential document Bundle contains a minimal
[Patient](https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCPatient.html)
resource along with appropriate linked
[Immunization](https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCImmunization.html)
resources representing information on vaccines administered and
[Observation](https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCObservation.html)
resources representing test results.

![FHIR Representation Diagram](/img/fhir_representation.png)

## Packaging CQL for Distribution

CQL can be packaged for distribution in a [FHIR Library](https://hl7.org/fhir/library.html)
resource, intended for describing and sharing knowledge artifacts like CQL. The
[CRMI IG Packaging Guidelines](https://build.fhir.org/ig/HL7/cqf-measures/packaging.html)
provide information on how CQL libraries should be packaged. Examples of CQL packaged in FHIR
Libraries can be found in the
[DDCC IG Knowledge Artifact Libraries](https://worldhealthorganization.github.io/ddcc/artifacts.html#knowledge-artifacts-libraries).

## Example CQL

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
* [CRMI IG Packaging Guidelines](https://build.fhir.org/ig/HL7/cqf-measures/packaging.html)
