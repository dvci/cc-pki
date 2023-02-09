---
sidebar_position: 1
---

FHIR Logical Models and Structure Maps harmonize data models between the various credential formats to allow business rules to execute against a common set of data elements.


# FHIR Logical Models
The Logical Models can be accessed here, (link TBD).

- EU DCC (still commented out in FSH file)
    -  Based on the official specification for [COVID-19-related payloads](https://health.ec.europa.eu/system/files/2021-06/covid-certificate_json_specification_en_0.pdf) as of 2023-01-31, and [Implementing Decision (EU) 2021/1073, Annex 1](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021D1073&from=EN#d1e34-35-1)
    - Vaccination
    - Test
    - Recovery
- ICAO
    - Both types of credentials, proof of vaccination and proof of testing, are combined in the single Logical Model: 
        - Vaccination: includes the ICD 11 vaccine administered, date, dose, and optionally the disease or agent targetd
        - Testing: includes both the test results and type of test administered
- SHC
    - Verifiable credential type—not specifc to COVID-19 or vaccinations but generalizeable to any credential type
- DIVOC
    - (still under development)


# FHIR Structure Maps

The Structure Maps can be accessed here, (link TBD).

