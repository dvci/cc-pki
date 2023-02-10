---
sidebar_position: 1
---

## Introduction
In order for data to be exchanged between different COVID-19 credential standards, there needs to be a means of unifying the trust lists of each respective specification. A Global Trust Network has the opportunity to bring existing and new local and regional trust networks together in a way that respects their designs and sovereignty while contributing to real interoperability among all of them.

## Objective and Goals
Finding alignment between existing trust list formats is the key to real interoperability. This can be done by defining a common trust list format to assemble and share public key infrastructure (PKI) for all COVID-19 credential specifications used by existing trust networks.

## Requirements
A common trust list specification sbould define the lowest common denominator format that can interoperate between all specifications in the trust list. This includes considering the minimum security requirements that satisfy each of the specifications. Creation of the trust list specification will require consideration for how to define a structure that can support the minimal required features from the included specifications. To ennumerate the requirements, a trust list specification format must include the following tenets:
1) SHALL be convertible from each existing trust network's formats.
2) SHALL describe a key-to-trust-anchor path for all specifications.
3) SHALL be cacheable
4) SHALL be mergeable (trust list operators can integrate each other's entries)
5) SHALL be integratable with GCCN's metadata format
6) SHALL be usable by all stakeholders required to verify health credentials in their operations

## Trust List Content
A trust list specification may potentially include the following content:
- Issuer IDs or key IDs
- Public key information
- Certificate chain (e.g. effective periods and country signing certification authorities)
- Approved key usage information
- Revocation Information / Lists
- Machine-actionable services (e.g. renewal link, more information, status checks, etc)
- Human-actionable services (e.g. renewal link, more information, status checks, etc)
- Information on the issuer's or the jurisdiction policies and compliance
- Information for the user interface of the application

Inclusion of the features above should depend on what minimal features are needed to satisfy technical and security requirements of all included specifications. There are benefits to limiting the content scope of the trust list specification, including:
- Faster downloading
- Faster parsing
- Less whole-list updates for simple changes in each cagegory
- Less duplicaton of records within itself (e.g. certificate chains can be the same for multiple keys)
- Avoid transfer of controlling power from the Issuer to the Trust List Provider

There are clear advantages to limiting the scope of a trust list specification's features, however it is worth noting that smaller scopes defer the security and privacy of the added information to another standard.

## Potential Specification Format for Global Trust Network: DID Document
The [Decentralized Identifier (DID) Document](https://www.w3.org/TR/did-core/) format shows promise as a lead contender for the Global Trust Network Trust List specification. The same format accepts embed and reference keys as well as signed, double signed and unsigned payloads. It can be stored in the web or other stacks, such as Blockchains and decentralized file systems like InterPlanetray File System (IPFS). DID Documents will include keys as JWKs and x509 certificates can be added into those records.

A DID Document supports:
- Issuer IDs or key IDs (e.g. list of approved URLs or DIDs)
- Public key information
- Certificate chain (e.g. effective periods and country signing certification authorities)
- Approved key usage information (e.g. EU's DCC OIDs inside certificates)

For more information regarding the benefits of a DID Document format for a Trust List specification, see [WHO DDCC Trust List Specificaiton documentation](https://github.com/WorldHealthOrganization/ddcc-trust/blob/main/TrustListSpecification.md#leading-contender-did-document). For an example of a signed DID Document, see [Appendix A](https://github.com/WorldHealthOrganization/ddcc-trust/blob/main/TrustListSpecification.md#appendix-a-signed-did-document-for-x509-enabled-trust-lists-of-leaf-keys) of the documentation.
