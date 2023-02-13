---
sidebar_position: 0
slug: /
---

# Introduction

In response to COVID-19, Governments and organizations across the world have developed and adopted standards and technologies to create, present, and verify digital vaccination credentials. However, a global technical framework to enable convenient use and interoperability of these credentials between systems – while also allowing domestic autonomy over their use – does not exist and is critically needed.

This guide describes establishment of a federated mechanism between existing trust networks to allow exchange of trusted health data, including COVID-19 certificates, routine immunization data, and home-based records consistent with International Patient Summary standards. Components this global health architecture include:

* federated public key infrastructure solution which could be used to verify health credentials in a virtual environment
* means of harmonizing global health protocol standards and establishing a system for recognition of digital certificates at point of entry
* COVID-19 specific data models, vocabulary, and transformations to enable mutual recognition between existing credential standards 

## Background & Purpose



This guide details how to utilize a global
technical framework to allow interoperability of these credentials between
systems, while preserving domestic autonomy over their use. The global technical
framework aims to harmonize multiple existing trust networks and platforms to
provide a single federated mechanism that supports trusted exchange of
COVID-19 credentials and facilitates safe international travel.

Criteria for establishing a system of trust include: 
*	Clear operating framework 
*	Clear onboarding process 
*	Process standardization for changes 
*	Financial and technical resources 
*	Established governance structure 
*	Buy-in and agreement from stakeholders 
*	Data security 
*	Interoperability and scalability 

This guide covers expected workflows for the following actors:
* Issuers
* Trust Networks
* Verifiers

Across the following standards:
* [SMART Health Cards: Vaccination & Testing (SMART Health Cards)](https://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig/)
* [European Union Digital COVID Certificates (EUDCC)](https://health.ec.europa.eu/publications/technical-specifications-eu-digital-covid-certificates-volumes-1-5_en)
* [International Civil Aviation Organization Visible Digital Seals (ICAO VDS-NC)](https://www.icao.int/Security/FAL/TRIP/PublishingImages/Pages/Publications/Guidelines%20-%20VDS%20for%20Travel-Related%20Public%20Health%20Proofs.pdf)
* [World Health Organization Digital Documentation of COVID-19 Certificates (WHO DDCC)](https://worldhealthorganization.github.io/ddcc/content_profiles.html)
* [Digital Infrastructure for Verifiable Open Credentialing (DIVOC)](https://divoc.egov.org.in/)

The [WHO DDCC Global Trust Network](https://github.com/WorldHealthOrganization/ddcc-trust/blob/main/TrustListSpecification.md) defines the federated trust network.

## Audience

The audience for this guide includes decision makers, analysts and technical assets at potential individual issuers,
and existing trust networks or potential verifiers who may participate in the federated
trust network. It is intended not to provide full analysis or documentation of design decisions but to be instructional (i.e., a primer for potential
participants).
