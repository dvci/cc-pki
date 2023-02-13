---
sidebar_position: 0
slug: /
---

# Introduction

In response to COVID-19, Governments and organizations across the world have developed and adopted standards and technologies to create, present, and verify digital vaccination credentials. However, a global technical framework to enable convenient use and interoperability of these credentials between systems – while also allowing domestic autonomy over their use – does not exist and is critically needed.

This guide describes establishment of a federated mechanism between existing trust networks to allow exchange of trusted health data, including COVID-19 certificates, routine immunization data, and home-based records consistent with International Patient Summary standards. Components of this global health architecture include:

* federated public key infrastructure solution which could be used to verify health credentials in a virtual environment
* means of harmonizing global health protocol standards and establishing a system for recognition of digital certificates at point of entry
* COVID-19 specific data models, vocabulary, and transformations to enable mutual recognition between existing credential standards 

## Background & Purpose

The interoperable exchange of health information in a trusted environment is a complex task with an increasingly large number of stakeholders (e.g. public health agencies, accredited labs, border control organizations, institutions authorized to verify) that need to ensure that data is transferred safely and securely, that the health content is interoperable, and that information is understandable and actionable. This guide details how to utilize a global technical framework to allow interoperability of health credentials between
systems, while preserving domestic autonomy over their use. 

Achieving global interoperability of health certificates does not require that all jurisdictions used the same standard. Interoperability can also be achieved when there are pre-arranged mechanisms in place so that certificates issued by one jurisdiction are accepted in another. A number of services and technical artifacts have been developed that address particular criteria for establishing interoperability and a system of trust including:
*	Data models, transformations and vocabulary definitions that allow exchange of health data between various standards formats, preserving a jurisdiction's autonomy regarding domestic processes while allowing reissuance and mutual recognition of credentials between jurisdictions
*   Standard specifications for exchanging public keys between various networks for verifying digital signatures on health credentials
*	A global trust registry that provides technical interoperability and technical governance between regional trust networks
*   Workflows for creating, sharing and executing business rules that evaluate public health policies against health data for cross-border or port of entry requirements
*	Open source tools and technical guidance to reduce the burden of implementing the technical infrastructure to participate in the federated trust network, including open source trust network infrastructure for jurisdictions to implement their own regional trust networks


## Audience

This guide describes expected workflows for potential actors in a trust ecosystem:
* Issuers that provide verifiable health credentials to individuals
* Verifiers that consume verifiable health credentials provided by individuals
* Trust Networks that establish trust relationships and policies between issuers and verifiers

The audience for this guide includes decision makers, analysts and technical assets at potential individual issuers,
existing trust networks or potential verifiers who may participate in the federated trust network. Stakeholders include member states, regional networks, and standards development organizations.