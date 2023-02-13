---
sidebar_position: 1
---

# Background

Business rules for health credentials are the instructions, guidelines, and regulations that
express health policies such as "this course of vaccines meets jurisdiction entry requirements" or
"this patient should complete their immunization schedule". These policies can support a range of
scenarios such as evaluating proof of vaccination or providing continuity of care.

Applying business rules in the context of trust networks for health credentials requires a
computable and standards-based approach for defining the rules and subsequently evaluating them
against credentials. For example, individuals who wish to test their vaccine credentials against
border entry requirement prior to travel must be able to evaluate the business rules for a variety
of destination jurisdictions against a variety of credential formats.

The WHO DDCC effort uses [Clinical Quality Language (CQL)](https://cql.hl7.org/), a standard for
health domain business rules, as the computable representation of business rules to apply against
health credentials in its Global Trust Network. CQL defines a human readable representation of
logic that can be evaluated against clinical knowledge, including health credentials. Running CQL
against clinical knowledge first requires translating the CQL into its canonical representation, the
Expression Logical Model (ELM). The resulting ELM exression of the CQL can be run against a DDCC
health credential using a CQL execution engine.
