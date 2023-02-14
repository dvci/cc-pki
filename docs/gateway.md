---
sidebar_position: 5
---

# Trust Gateway

## Purpose

The Digital Documentation COVID-19 Certificate Gateway (DDCCG) is an extended
version of the [European Union Digital COVID Certificate Gateway (EUDCCG)](https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-certificates_v2_en.pdf),
which has enhanced functionality allowing for interoperability between
multiple gateways in support of the DDCC specification.

While the DDCCG is designed to support the DDCC specification, 
it also supports various existing digital COVID certificates
including EUDCC, Smart Health Cards, DIVOC, and ICAO.

In addition to the base functionality of the EUDCCG
([more on EUDCCG specification and documentation found here](https://github.com/ehn-dcc-development/eu-dcc-overview)),
the DDCCG specification also supports:
-	Federation and peer exchange of information between gateways
-	Access to metadata content (e.g. value sets/codings, business rules) with explicit adherence to the HL7 FHIR specification
-	Explicit means for revocation of digital COVID certificates
-	Optional support of online verification and validation workflows

The role of the DDCCG is to enable the creation of trust gateways by additional
organizations beyond the EU Member States participating in the EUDCCG,
expanding the network of operators and trusted parties to form a federated and
documented network of trust gateways, supporting all major COVID-19 vaccine credential certificates. 

## Documentation and Specification

For more on the intent of the DDCCG, its design and architecture, and use cases
supported, [please visit the following linked documentation](https://github.com/WorldHealthOrganization/ddcc-gateway/blob/main/docs/Architecture.md).
The full [DDCCG public repository can be found linked here](https://github.com/WorldHealthOrganization/ddcc-gateway)
for reference.

Resources:
-	https://github.com/WorldHealthOrganization/ddcc-gateway/blob/main/docs/Architecture.md
-	https://github.com/WorldHealthOrganization/ddcc-gateway
-	https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-certificates_v2_en.pdf
