---
sidebar_position: 1
---

# Workflows

## Definitions

Acots, transactions, and workflows are defined using the [Integrating the
Healthcare Enterprise (IHE) definitions](https://profiles.ihe.net/GeneralIntro/ch-3.html).

### Actors

Actors produce, manage, or act on health information. Actors relevant to the
WHO DDCC Federated Trust Network include:

- **Credential Issuers:** Credential Issuers generate digital vaccine 
certificates which may be issued to individuals. Issuers may generate 
vaccine certificates using one or more representations including DCC, 
VDS-NC, DIVOC, SHC, or other formats.
- **Credential Holders:** Credential Holders are individuals or applications
which possess a vaccine certificate.
- **Local Public Key Directory (PKD):** Local PKDs provides access to public
keys used to validate vaccine certificates. Many Local PKDs may exist and be
associated with one or more jurisdictions or specifications. Format and access
mechanisms may vary across Local PKDs.
- **Federated PKD:** The Federated PKD provides a signed master list of keys
aggregated across one or more Local PKDs.
- **Verification Application:** Verification Applications are capable of
verifying cryptographic signatures of vaccine credentials by using public
keys. Public keys may be retrieved from either a Local or Federated PKD.

### Transactions

Transactions define how actors exchange information between one another.
Transactions relevant to the WHO DDCC Federated Trust Network include:

- **Credential Issuance:** Credential Issuers may provide a vaccine
certificate to a Credential Holder.
- **PKD Mirroring:** A Federated PKD may mirror, or copy, public keys contained
in another PKD.
- **Public Key Retrieval:** An actor, including PKDs or Verification Applications,
may retrieve a key from a PKD.

### Workflows

A workflow is a set of interactions among multiple actors.

#### Credential Issuance Workflow

Credential Issuers provide vaccine certificates to individuals normally
using their local format.

![Issuance Workflow Diagram](/img/issuance.svg)

#### Federated PKD Aggregation

Keys from Local PKDs are aggregated in a federated PKD for use by verification
applications.ssss

Steps include:
- Local PKD onboarding (one-time). Onboarding may include evaluating Local PKD
format, providing the Federated PKD access, and signing of business agreements.
- Local PKD public keys are mirrored (periodic)
- Mirrored public keys are merged into a master list (periodic)
- Master list is digitally signed for distribution

Local PKDs participating in the Federated PKD are expected to:
- Have an existing public key infrastructure used for issuing trusted health documents (e.g. COVID credentials)
- Have permissions/policies in place that allow sharing the public keys
- Can share public keys in one of the following formats:
  - X.509
  - JSON Web Keys (JWK)
  - Decentralized Identifiers (DID)

Federated PKDs are expected to:
- Have a means for retrieving local public key directories / nodes members represented in the aggregation services
- Have permissions/policies in place that allow sharing the public keys from trust node members
- Have an existing public key infrastructure used for signing list of keys my node members
- Can share list of public keys in the following format:
  - Decentralized Identifiers (DID)

The DID Format expected is defined in the
[WHO Global Trust Network: Trust List Specification](https://github.com/WorldHealthOrganization/ddcc-trust/blob/main/TrustListSpecification.md)

![Aggregation Workflow Diagram](/img/aggregation.svg)

#### Verification

Verification Applications can verify vaccine credentials using keys retrieved from
the Federated PKD.

Steps include:
- Onboarding a Federated PKD by retrieving the signing key used to sign
the master list (one-time).
- Retrieving the master list from the Federated PKD and verifying the signature (periodic).
- Deserializing the vaccine credential 2D bar-code to determine the key id.
- Retreiving the public key associated with the key id from the master list, or using a cached key.
- Verifying the cryptographic signature within the 2D barcode.

![Verification Workflow Diagram](/img/verification.svg)
