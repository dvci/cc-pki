"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=i,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:7},r="Digital Documentation of COVID-19 Certificates (DDCC)",o={unversionedId:"ddcc",id:"ddcc",title:"Digital Documentation of COVID-19 Certificates (DDCC)",description:"The Digital Documentation of COVID-19 Certificates (DDCC) published in August 2021 and similar guidance for test results (https://www.who.int/publications/i/item/WHO-2019-nCoV-Digitalcertificatesdiagnostictest_results-2022.1) published in March 2022 serve as the reference for the associated FHIR Implementation Guide. This Implementation Guide (IG) acts as the computable representation of the core data elements in the published guidance, mapped to standard terminologies. These data models, in the form of FHIR logical models, and terminologies, in the form of FHIR value sets, are the basis for interoperability between the various credential formats. The IG provides FHIR Structure Maps and Concept Maps to define transformations between supported credential formats and the core data set, which allows business rules to execute against a common set of data elements.",source:"@site/docs/ddcc.md",sourceDirName:".",slug:"/ddcc",permalink:"/cc-pki/ddcc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ddcc.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"CQL Primer",permalink:"/cc-pki/business-rules/cql_primer"}},p={},d=[{value:"Strategy for mapping COVID certificate terminologies to the DDCC core data sets",id:"strategy-for-mapping-covid-certificate-terminologies-to-the-ddcc-core-data-sets",level:2},{value:"Test result",id:"test-result",level:3},{value:"Proof of vaccination",id:"proof-of-vaccination",level:3},{value:"Mapping approach",id:"mapping-approach",level:4},{value:"FHIR Resource naming conventions",id:"fhir-resource-naming-conventions",level:3},{value:"ValueSets",id:"valuesets",level:4},{value:"CodeSystems",id:"codesystems",level:4},{value:"ConceptMaps",id:"conceptmaps",level:4},{value:"Source specifications",id:"source-specifications",level:2}],m={toc:d};function s(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"digital-documentation-of-covid-19-certificates-ddcc"},"Digital Documentation of COVID-19 Certificates (DDCC)"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.who.int/publications/i/item/WHO-2019-nCoV-Digital_certificates-vaccination-2021.1"},"Digital Documentation of COVID-19 Certificates (DDCC)")," published in August 2021 and similar guidance for test results (",(0,i.kt)("a",{parentName:"p",href:"https://www.who.int/publications/i/item/WHO-2019-nCoV-Digital_certificates_diagnostic_test_results-2022.1"},"https://www.who.int/publications/i/item/WHO-2019-nCoV-Digital_certificates_diagnostic_test_results-2022.1"),") published in March 2022 serve as the reference for the associated ",(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/"},"FHIR Implementation Guide"),". This Implementation Guide (IG) acts as the computable representation of the core data elements in the published guidance, mapped to standard terminologies. These data models, in the form of FHIR logical models, and terminologies, in the form of FHIR value sets, are the basis for interoperability between the various credential formats. The IG provides FHIR Structure Maps and Concept Maps to define transformations between supported credential formats and the core data set, which allows business rules to execute against a common set of data elements."),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Example banner",src:a(7094).Z,width:"3203",height:"1187"})),(0,i.kt)("h2",{id:"strategy-for-mapping-covid-certificate-terminologies-to-the-ddcc-core-data-sets"},"Strategy for mapping COVID certificate terminologies to the DDCC core data sets"),(0,i.kt)("h3",{id:"test-result"},"Test result"),(0,i.kt)("p",null,"The core data set (",(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCCoreDataSet.TR.html"},"FHIR.WHO.DDCC","\\","DDCC Core Data Set Logical Model for Test Result"),") has bindings to the following terminology:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pathogen targeted")," (",(0,i.kt)("inlineCode",{parentName:"p"},"pathogen"),"):",(0,i.kt)("br",null),"ICD-11 MMS codes for COVID and COVID variants - ",(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/ValueSet-who-ddcc-agent-targeted-covid-19.html"},"FHIR.WHO.DDCC","\\","WHO Agent Targeted (COVID-19)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type of test")," (",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"):",(0,i.kt)("br",null),"ICD-11 Foundation Component entities for NAAT or rapid tests - ",(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/ValueSet-who-ddcc-type-of-test-covid-19.html"},"FHIR.WHO.DDCC","\\","WHO Type of Covid-19 Test"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Specimen sample origin")," (",(0,i.kt)("inlineCode",{parentName:"p"},"origin"),"):",(0,i.kt)("br",null),"ICD-11 Foundation Component entities for the source of the specimen (e.g., nasopharyngeal swab) - ",(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/ValueSet-who-ddcc-sample-origin-covid-19.html"},"FHIR.WHO.DDCC","\\","WHO Speciman Sample Origin (COVID-19)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Test result")," (",(0,i.kt)("inlineCode",{parentName:"p"},"result"),"):",(0,i.kt)("br",null),'ICD-11 MMS codes for "detected" or "not detected" - ',(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/ValueSet-who-ddcc-test-result-covid-19.html"},"FHIR.WHO.DDCC","\\","WHO Test Result (COVID-19)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Test centre country")," (",(0,i.kt)("inlineCode",{parentName:"p"},"country"),"):",(0,i.kt)("br",null),"Three character country codes - ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/valueset-iso3166-1-3.html"},"Valueset-iso3166-1-3")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Cert. type"),(0,i.kt)("th",{parentName:"tr",align:null},"Element"),(0,i.kt)("th",{parentName:"tr",align:null},"Core data mapping"),(0,i.kt)("th",{parentName:"tr",align:null},"Approach"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.disease")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pathogen")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.testType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.sampleOrigin")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"origin")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.result")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.facility.address.addressCountry")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"ISO-3166 two or three character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-260.t.tg")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pathogen")),(0,i.kt)("td",{parentName:"tr",align:null},"Map SNOMED CT to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-260.t.tt")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Map generic LOINCs to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},"Not present"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"origin")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-260.t.tr")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},"Map SNOMED CT to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-260.t.to")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"ISO-3166 two character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},"Not present"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pathogen")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data.msg.tr.tc")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data.msg.tr.m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"origin")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data.msg.tr.r")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},"Map custom code system to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data.msg.sp.ctr")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"Assuming ISO-3166 three character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHC"),(0,i.kt)("td",{parentName:"tr",align:null},"Inferred from ",(0,i.kt)("inlineCode",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pathogen")),(0,i.kt)("td",{parentName:"tr",align:null},"Assume COVID-19 if LOINC ",(0,i.kt)("a",{parentName:"td",href:"https://loinc.org/sars-cov-2-and-covid-19/"},"listed here"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code"),"*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Map LOINC to ICD-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHC"),(0,i.kt)("td",{parentName:"tr",align:null},"Not currently present, but will be ",(0,i.kt)("inlineCode",{parentName:"td"},"bodySite"),"*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"origin")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"valueCodeableConcept.coding[0].code"),"*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},"Map SNOMED CT to ICD-11")))),(0,i.kt)("p",null,"*"," Note that these elements are within the FHIR Bundle that is part of the SMART Health Card. The full path to this is ",(0,i.kt)("inlineCode",{parentName:"p"},"vc.credentialSubject.fhirBundle.entry[].resource"),"."),(0,i.kt)("h3",{id:"proof-of-vaccination"},"Proof of vaccination"),(0,i.kt)("p",null,"The core data set (",(0,i.kt)("a",{parentName:"p",href:"https://worldhealthorganization.github.io/ddcc/StructureDefinition-DDCCCoreDataSet.VS.PoV.html"},"FHIR.WHO.DDCC","\\","DDCC Core Data Set Logical Model - Vaccination Status - Proof of Vaccination"),") has bindings to the following terminology:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Vaccine")," (",(0,i.kt)("inlineCode",{parentName:"p"},"vaccine"),"):",(0,i.kt)("br",null),"ICD-11 MMS codes for both types of vaccine (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"XM5DF6 COVID-19 vaccine, live attenuated virus"),") and specific vaccine products (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"XM3DT5  COVID-19 Vaccine Moderna"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Vaccine brand")," (",(0,i.kt)("inlineCode",{parentName:"p"},"brand"),"):",(0,i.kt)("br",null),"Not currently bound to a ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Country of vaccination")," (",(0,i.kt)("inlineCode",{parentName:"p"},"country"),"):",(0,i.kt)("br",null),"Three character country codes - ",(0,i.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/valueset-iso3166-1-3.html"},"Valueset-iso3166-1-3")))),(0,i.kt)("h4",{id:"mapping-approach"},"Mapping approach"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Cert. type"),(0,i.kt)("th",{parentName:"tr",align:null},"Element"),(0,i.kt)("th",{parentName:"tr",align:null},"Core data mapping"),(0,i.kt)("th",{parentName:"tr",align:null},"Approach"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.icd11Code")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vaccine")),(0,i.kt)("td",{parentName:"tr",align:null},"Presumably already ICD-11 MMS (see below)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DIVOC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence.facility.address.addressCountry")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"ISO-3166 two or three character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-260.1.v.mp")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vaccine")),(0,i.kt)("td",{parentName:"tr",align:null},"Preferred binding is Union Register, but could also be ICD-11 or arbitrary strings. Only Union Register is considered in our mapping code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EU","\xa0","DCC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-260.1.v.co")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"ISO-3166 two character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data.msg.ve.des")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vaccine")),(0,i.kt)("td",{parentName:"tr",align:null},"Already ICD-11 MMS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ICAO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data.msg.ve.vd[].ctr")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"Already ISO-3166 three character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vaccineCode.coding[0].code"),"*"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vaccine")),(0,i.kt)("td",{parentName:"tr",align:null},"ICD-11 MMS, CVX, or SNOMED CT; latter two mapped to ICD-11 MMS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SHC"),(0,i.kt)("td",{parentName:"tr",align:null},"Not present in computable form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"country")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,i.kt)("p",null,"*"," Note that these elements are within the FHIR Bundle that is part of the SMART Health Card. The full path to this is ",(0,i.kt)("inlineCode",{parentName:"p"},"vc.credentialSubject.fhirBundle.entry[].resource"),"."),(0,i.kt)("h3",{id:"fhir-resource-naming-conventions"},"FHIR Resource naming conventions"),(0,i.kt)("h4",{id:"valuesets"},"ValueSets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab test - pathogen (COVID-19):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"LabTestPathogenCovid19{TerminologyName}ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"lab-test-pathogen-covid19-{terminology-name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Lab Test - Pathogen - COVID-19 - {Terminology Name}")))),(0,i.kt)("li",{parentName:"ul"},"Lab test - type (COVID-19-specific):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"LabTestTypeCovid19{TerminologyName}ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"lab-test-type-covid19-{terminology-name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Lab Test - Type - COVID-19 - {Terminology Name}")))),(0,i.kt)("li",{parentName:"ul"},"Lab test - type (generic):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"LabTestType{TerminologyName}ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"lab-test-type-{terminology-name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Lab Test - Type - {Terminology Name}")))),(0,i.kt)("li",{parentName:"ul"},"Lab test - sample origin:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"LabTestSampleOrigin{TerminologyName}ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"lab-test-sample-origin-{terminology-name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Lab Test - Sample Origin - {Terminology Name}")))),(0,i.kt)("li",{parentName:"ul"},"Lab test - qualitative result:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"LabTestQualitativeResult{TerminologyName}ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"lab-test-qual-result-{terminology-name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Lab Test - Qualitative Result - {Terminology Name}")))),(0,i.kt)("li",{parentName:"ul"},"Vaccine (COVID-19):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"VaccineCovid19{TerminologyName}ValueSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"vaccine-covid19-{terminology-name}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaccine - COVID-19 - {Terminology Name}"))))),(0,i.kt)("p",null,"FSH filenames should be ",(0,i.kt)("inlineCode",{parentName:"p"},"tx-vs-{id}.fsh"),". Each ValueSet should be in a separate file."),(0,i.kt)("p",null,"All ValueSet descriptions should describe where the codes in the value set came from and when the snapshot was taken. This should have enough information for someone to verify the contents of the value set or update it using the same approach."),(0,i.kt)("p",null,"The goal is that ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," should clearly identify both the resource type and contents when used in ",(0,i.kt)("a",{parentName:"p",href:"https://hl7.org/fhir/uv/shorthand/"},"FSH")," within this IG, and the canonical URI (based on ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),") should not have any redundant information in it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," should not include the resource type as this is implicit in how the resources are displayed in the IG."),(0,i.kt)("p",null,"Terminology names in ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s should be shortened as much as possible while still being readable. For example, SNOEMD CT becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"snomed"),"; ICD-11 becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"icd11"),"."),(0,i.kt)("p",null,'"COVID-19" should appear in ',(0,i.kt)("inlineCode",{parentName:"p"},"id"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"title"),' when using a COVID-specific subset of a broader terminology system. For internally defined code systems (like those used by DIVOC and ICAO), "COVID-19" should ',(0,i.kt)("em",{parentName:"p"},"not")," appear in case those specifications are expanded in the future (otherwise it would be necessary to create a 2nd value set, which would be problematic for terminology bindings in the logical model)."),(0,i.kt)("h4",{id:"codesystems"},"CodeSystems"),(0,i.kt)("p",null,"Code systems are included to allow for expansion. "),(0,i.kt)("p",null,"FSH filenames should be ",(0,i.kt)("inlineCode",{parentName:"p"},"tx-cs-{alias}.fsh"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"tx-cs-snomed.fsh"),". Each CodeSystem should be in a separate file. In cases where the IG already has a code system defined, the codes should be merged into the existing system rather than placed in a separate file."),(0,i.kt)("h4",{id:"conceptmaps"},"ConceptMaps"),(0,i.kt)("p",null,"In the naming scheme below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$type")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"LabTestPathogenCovid19"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"lab-test-pathogen-covid19"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"Lab Test - Pathogen - COVID-19"),", etc.; for vaccines it is ",(0,i.kt)("inlineCode",{parentName:"li"},"VaccineCovid19"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"vaccine-covid19"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"Vaccine - COVID-19")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$source")," = terminology name for the source terminology"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$target")," = terminology name for the target terminology")),(0,i.kt)("p",null,"With these variables defined, ConceptMaps should be named as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"{$type}{$source}To{$target}ConceptMap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"{$type}-{$source}-to-{$target}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"{$type} - mapping {$source} to {$target}"))),(0,i.kt)("p",null,"For example, if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$type")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaccine - COVID-19")," (and variants)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$source")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"CVX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$target")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"ICD-11"))),(0,i.kt)("p",null,"...then we would have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"VaccineCovid19CVXToICD11ConceptMap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"vaccine-covid19-cvx-to-icd-11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Vaccine - COVID-19 - mapping CVX to ICD-11")),(0,i.kt)("li",{parentName:"ul"},"Filename: ",(0,i.kt)("inlineCode",{parentName:"li"},"tx-cm-vaccine-covid19-cvx-to-icd-11.fsh"))),(0,i.kt)("p",null,"Each ConceptMap should be in a separate file."),(0,i.kt)("h2",{id:"source-specifications"},"Source specifications"),(0,i.kt)("p",null,'It can be difficult to find the "source of truth" specifications for the certificate formats that are mapped to the DDCC core data sets. The following are links to the best known documentation for each of the certificate formats listed above:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DIVOC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Elements are defined by JSON-LD. As of 2023-02-12, we were told by the DIVOC team that the most current JSON-LD context for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/egovernments/DIVOC/blob/icmr/vaccination-context/vaccination-context.js"},"vaccines is here")," and for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/egovernments/DIVOC/blob/icmr/test-certificate-context/test-certificate-context.js"},"test results is here"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that the URIs for the DIVOC-specific JSON-LD contexts embedded in the certificates do not resolve."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://divoc.digit.org"},"DIVOC's documentation is here"),", but this does not include element-level descriptions (e.g., terminology bindings at a per-element level).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Terminology bindings at the element level must be inferred from ",(0,i.kt)("a",{parentName:"li",href:"https://divoc.digit.org/platform/divocs-verifiable-certificate-features/what-information-goes-into-a-qr-code"},"more general documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"v2")," JSON-LD context introduces the ",(0,i.kt)("inlineCode",{parentName:"li"},"evidence.icd11Code")," element for vaccines, but there is no documentation on which codes this element is bound to or whether this is used in production."),(0,i.kt)("li",{parentName:"ul"},"There is no other computable representation of vaccine type/product."))),(0,i.kt)("li",{parentName:"ul"},"As of 2023-02-12, the public documentation does not include any information on test result certificates. The information we have was provided privately by the DIVOC team."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EU DCC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Starting place: ",(0,i.kt)("a",{parentName:"li",href:"https://health.ec.europa.eu/publications/technical-specifications-eu-digital-covid-certificates-volumes-1-5_en"},"Technical specifications for EU Digital COVID Certificates - Volumes 1-5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://health.ec.europa.eu/system/files/2022-02/digital-covid-certificates_v1_en.pdf"},"Volume 1: Formats and trust management"),' references "Implementing Decision (EU) 2021/1073, Annex I".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2021.230.01.0032.01.ENG"},"Implementing Decision (EU) 2021/1073, Annex I can be found here"),", along with other relevant Annexes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.icao.int/vdsnc-spec"},"ICAO"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SMART Health Cards"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://spec.smarthealth.cards/"},"General SMART Health Card specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig"},"COVID-19 vaccine and testing-specific specification"))))))}s.isMDXComponent=!0},7094:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ddcc_vs_qr_lm-c9b0207f47d115bb27142aa7052cd371.png"}}]);