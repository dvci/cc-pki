---
sidebar_position: 1
---

This credential has potential to be repurposed for use cases other than COVID-19, like storing patient summaries or allergy information. However, to be used for COVID-19, specific terminology sources are used to ensure interoperability between credentialing services. 

# Terminology

This credential uses [SNOMED](http://snomed.info/sct) for documenting test results, [LOINC](http://loinc.org) for test types, and [ICD 11](http://id.who.int/icd11/mms) for vaccines. Other existing COVID-19 credentials (EU DCC, SHC, ICAO, and DIVOC) use a variety of terminologies and code systems to identify test results, test types, and vaccinations. The Concept Maps (link to maps) illustrate equivalent codes from their code systems to the three used by this credential.


| Terminology Type | Source(s) | Target |
| :--------------: | :-------: | :----: |
| Vaccinations | [CVX](https://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=vg), [EU-VMP]( https://health.ec.europa.eu/system/files/2023-01/eu-dcc-value-sets_en.pdf), and [SNOMED](https://github.com/dvci/shc-terminology/blob/main/input/pagecontent/ValueSet-covid-19-vaccine-snomed-value-set-intro.md) | [ICD 11](https://icd.who.int/browse11)|
| Test Results | [VDS-NC](https://www.icao.int/vdsnc-spec) | [SNOMED](https://github.com/dvci/shc-terminology/blob/main/input/pagecontent/ValueSet-qualitative-lab-test-result-value-set-intro.md) |
| Test Types | [VDS-NC](https://www.icao.int/vdsnc-spec) | [LOINC](https://loinc.org/sars-cov-2-and-covid-19/)



### Concept Maps
The Concept Maps can be accessed here (insert link).



