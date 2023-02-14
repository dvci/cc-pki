---
sidebar_position: 5
---

# Trust Gateway

## Purpose

The Trust Gateway is an open source implementation of a centralized trust network solution available to potential implementers intending to create a local or regional network. This implementation is derived from the [European Union Digital COVID Certificate Gateway (EUDCCG)](https://github.com/ehn-dcc-development/eu-dcc-overview), which has been deployed in an operational setting within the European Union.

In addition to the core functionality of the EUDCCG, the Trust Gateway implementation also supports:
-	Federation and peer exchange of information between gateways
-	Access to metadata content (e.g. value sets/codings, business rules) with explicit adherence to the HL7 FHIR specification
-	Explicit means for revocation of digital COVID certificates
-	Optional support of online verification and validation workflows

The role of the Trust Gateway is to enable the creation of trust networks by additional
organizations beyond the EU Member States participating in the EUDCCG,
expanding the network of operators and trusted parties to form a federated and
documented network of trust gateways, supporting all major health credential certificates. 

## Documentation and Specification

-	[Trust Gateway public repository](https://github.com/WorldHealthOrganization/ddcc-gateway)
-	[Architecture](https://github.com/WorldHealthOrganization/ddcc-gateway/blob/main/docs/Architecture.md)
