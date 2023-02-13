---
sidebar_position: 0
slug: /
---

# Introduction

In response to COVID-19, Governments and organizations across the world have developed and adopted standards and technologies to create, present, and verify digital vaccination credentials. However, a global technical framework to enable convenient use and interoperability of these credentials between systems – while also allowing domestic autonomy over their use – does not exist and is critically needed.

This guide describes establishment of a federated mechanism between existing trust networks to allow exchange of trusted health data, including COVID-19 certificates, routine immunization data, and home-based records consistent with International Patient Summary standards. This mechanism provides means of harmonizing global health protocol standards and establishing a system for recognition of digital certificates at point of entry.

In addition to verifying and validating COVID-19 certificates, a global digital health trust network can:

* Establish trust of digitally signed clinical algorithms published by WHO through the SMART Guidelines work.
* Allow for a global product catalogue of trusted medical products and devices.​
* Ensure information about a patient can be accessed and trusted regardless of where you are in the world.​
* Support health systems resiliency to address future outbreaks in a globalized economy.​
* Empower individuals to manage their own health and well-being.​
* Prevent the digital divide from increasing

## Background & Purpose

The interoperable exchange of health information in a trusted environment is a complex task with an increasingly large number of stakeholders (e.g. public health agencies, accredited labs, border control organizations, institutions authorized to verify) that need to ensure that data is transferred safely and securely, that the health content is interoperable, and that information is understandable and actionable. This guide details how to utilize a global technical framework to allow interoperability of health credentials between
systems, while preserving domestic autonomy over their use. 

Achieving global interoperability of health certificates does not require that all jurisdictions used the same standard. Interoperability can also be achieved when there are pre-arranged mechanisms in place so that certificates issued by one jurisdiction are accepted in another. A number of services and technical artifacts have been developed that address particular criteria for establishing interoperability and a system of trust including:
*	Data models, transformations and vocabulary definitions that allow exchange of health data between various standards formats, preserving a jurisdiction's autonomy regarding domestic processes while allowing reissuance and mutual recognition of credentials between jurisdictions
*   Standard specifications for exchanging public keys between various networks for verifying digital signatures on health credentials
*	A global trust registry and federated public key infrastructure solution that provides technical interoperability and technical governance between regional trust networks
*   Workflows for creating, sharing and executing business rules that evaluate public health policies against health data for cross-border or port of entry requirements
*	Open source tools and technical guidance to reduce the burden of implementing the technical infrastructure to participate in the federated trust network, including open source trust network infrastructure for jurisdictions to implement their own regional trust networks

### Audience

This guide describes expected workflows for potential actors in a trust ecosystem:
* Issuers that provide verifiable health credentials to individuals
* Verifiers that consume verifiable health credentials provided by individuals
* Trust Networks that establish trust relationships and policies between issuers and verifiers

The audience for this guide includes decision makers, analysts and technical assets at potential individual issuers,
existing trust networks or potential verifiers who may participate in the federated trust network. Stakeholders include member states, regional networks, and standards development organizations.

## Exchanging Trusted Health Documents

There are a number of requirements that must be met in the process of exchanging trusted health documents.

### Health content​ interoperability

*Is the correct content included in the certificate/credential or health document?​*

Consensus data models, controlled vocabularies and data transformations allow consumers of health documents to understand content of a health document in a computable manner. Shared formats for expressing health policies in executable business rule libraries further allow consumers to validate the content against their own public health policies. Here these artifacts are defined using healthcare data specifications aligned with [Health Level Seven International (HL7)](https://www.hl7.org/). HL7 is a not-for-profit, ANSI-accredited standards developing organization dedicated to providing a comprehensive framework and related standards for the exchange, integration, sharing and retrieval of electronic health information.

### Trust interoperability and trust networks​
*Is the vaccine credential, COVID certificate or other trusted health document verifiably from the purported issuer?​*  
*Has the certificate remained unaltered since it was issued?​*

Existing health data certificate standards use various well-defined methods of providing digital signatures in health documents based on public key crytopgraphy methods. Public key distribution within the federated registry is standardized to allow actors across networks to retrieve and process public keys, metadata, business rules, revocation data from any other actor. Universal verifier applications can use the content shared within the federated registry to extract digital signatures from health documents and verify issuer and integrity of the document content according to the specifications established by the credential standard.

*Is the certificate issuer trusted by the verifier?​*

The federated registry facilitates determination of trust through services for verifiers to discover issuers from within other networks and access governance policies for those networks. It provides infrastructure for technical governance of participating networks.

### Identity authentication and identity binding

*Is the individual person who they purport to be?​*  
*Is the certificate about this person?​*

Identity authentication and identity binding is out of scope for this framework and is determined by policies established at the individual verifier level.