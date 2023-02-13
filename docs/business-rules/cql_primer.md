---
sidebar_position: 4
---

# CQL Primer

This document describes how to run business rules written in [Clinical Quality Language (CQL)](https://cql.hl7.org/) against credentials in order to validate that provided data meets jurisdictional business requirements.

## Overview

The following high level steps, described in detail below, can be used to run CQL business rules against a vaccination record:

* Start with a vaccination credential in a supported format and a set of business rules written in CQL
* Set up the [Matchbox](https://github.com/ahdis/matchbox) FHIR Server for transforming credentials
* Identify the correct StructureMap for converting the vaccination credential into the DDCC CoreDataSet logical model
* Use Matchbox to transform the credential to a DDCC CoreDataSet logical model instance and then to the corresponding DDCC resource instance
* Set up the CQL Translation Service for converting CQL into the Expression Logical Model (ELM) representation
* Set up a [Node.js](https://nodejs.org/) project with appropriate CQL dependencies to provide an execution environment for the ELM representation
* Run the business rules against the FHIR instance

## Convert Vaccination Credentials to DDCC resource instance

The process starts with converting the vaccination credential to be evaluated into the DDCC FHIR model. For the examples used in this document we'll start with an example credential payload in the SHC format, which you can download:

```bash
curl https://raw.githubusercontent.com/dvci/ddcc/who-88-structuremap-tests/structuremap-tests/fixtures/shc/example-00-b-jws-payload-expanded.json --output example-00-b-jws-payload-expanded.json
```

*TODO: Update the location of this example once merged*

Credentials can be converted using the appropriate StructureMaps using the [Matchbox](https://github.com/ahdis/matchbox) FHIR Server.

### Running the Matchbox Docker Image

The Matchbox server can be run via its docker image.  The following command starts the docker image on a local machine listening on port 8080:

```bash
docker run -d -p 8080:8080 --restart unless-stopped eu.gcr.io/fhir-ch/matchbox:v230
```

Running Matchbox in this fashion uses an in-memory data store rather than a backing database, so will not persist state across different container instantiations.

### Loading IGs Into Matchbox

Matchbox needs the appropriate IGs to be loaded in order to perform the desired translations. The DDCC IG and the SHC IG can be loaded via the following curl commands against the Matchbox server:

```bash
curl -X 'POST' \
  'http://localhost:8080/matchbox/fhir/ImplementationGuide' \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d '{ "resourceType": "ImplementationGuide", "version": "1.0.0", "name": "fhir.who.ddcc", "url": "http://worldhealthorganization.github.io/ddcc/package.tgz" }'
```

```bash
curl -X 'POST' \
  'http://localhost:8080/matchbox/fhir/ImplementationGuide' \
  -H 'accept: application/fhir+json' \
  -H 'Content-Type: application/fhir+json' \
  -d '{ "resourceType": "ImplementationGuide", "version": "0.6.2", "name": "hl7.fhir.uv.shc-vaccination", "packageId": "hl7.fhir.uv.shc-vaccination" }'
```

### Converting the Vaccination Into DDCC FHIR resource

This is a two step process. The first step is to convert the vaccination credential payload into the DDCC CoreDataSet logical model using the [appropriate StructureMap from the DDCC IG](https://worldhealthorganization.github.io/ddcc/artifacts.html#terminology-structure-maps):

```bash
curl -X 'POST' \
'http://localhost:8080/matchbox/fhir/StructureMap/$transform?source=http://worldhealthorganization.github.io/ddcc/StructureMap/CertSHCtoCoreDataSet' \
-H 'accept: application/fhir+json' \
-H 'Content-Type: application/fhir+json' \
-d @example-00-b-jws-payload-expanded.json \
-o example-00-a-DDCCCoreDataSet.json
```

This should result in a new file containing the vaccine information in the intermediary CoreDataSet format. The data in the intermediary format can then be converted to a DDCC FHIR resource instance:

```bash
curl -X 'POST' \
'http://localhost:8080/matchbox/fhir/StructureMap/$transform?source=http://worldhealthorganization.github.io/ddcc/StructureMap/CoreDataSetVSToAddBundle' \
-H 'accept: application/fhir+json' \
-H 'Content-Type: application/fhir+json' \
-d @example-00-a-DDCCCoreDataSet.json \
-o example-00-a-DDCC.json
```

*NOTE: These conversion steps are still being debugged, particularly the final one, and the CQL has not been tested against the final version*

The record is now ready to be evaluated against the business rules.

## Running CQL Against Converted Vaccination Credentials

Running CQL business rules against a record requires translating the CQL to the Expression Logical Model (ELM) representation and running the ELM in a CQL execution engine. For this document we'll start with one of the [examples from the DDCC IG](https://worldhealthorganization.github.io/ddcc/artifacts.html#knowledge-artifacts-libraries):

```cql
// Declare the name and version of the Library of functions
library DDCCPass version '1.0.0'

// The version of FHIR we are using
using FHIR version '4.0.1'

// Execute all business rules relative to a specific Patient content
context Patient

// Define boolean valued business rule to check if there is an immunization that was completed
define "Completed Immunization": exists ("Completed Immunizations")

// Define a list of completed immunizations for which the dose number is the same as the series dose
// Immunization resources are queried from those that reference the Patient we are executing against
define "Completed Immunizations":
  [Immunization] I
    where ( I.protocolApplied.doseNumber.value = I.protocolApplied.seriesDoses.value )
```

You can place this example in a file called `DDCCPass.cql` and modify it as desired before proceeding.

### Translating CQL to ELM

CQL can be translated to ELM using the CQL Translation Service docker image. The following command starts the docker image on a local machine listening on port 8081:

```bash
docker run -d -p 8081:8080 --restart unless-stopped cqframework/cql-translation-service:latest
```

Once the translation service is running the CQL can be translated to ELM using the following curl command:

```bash
curl -X "POST" \
--url "http://localhost:8081/cql/translator/" \
--header "Content-Type: application/cql" \
--header "Accept: application/elm+json" \
--data-binary @DDCCPass.cql \
--output DDCCPassELM.json
```

### Running ELM Against Converted Vaccination Credentials

The ELM translation of the CQL can be run against the vaccination record using the [JavaScript CQL Execution Framework library](https://github.com/cqframework/cql-execution) along with the [JavaScript CQL Execution FHIR Data Source](https://github.com/cqframework/cql-exec-fhir). This document describes how to set this up in a simple Node.js project. Node.js will first need to be installed if it is not already available. A new Node.js project with the needed CQL libraries can be set up using npm:

```bash
mkdir CQLDemo
cd CQLDemo
npm init --yes
npm install cql-execution cql-exec-fhir
```

Once the project is set up the ELM from the CQL business rules can be evaluated against the vaccination credential that was converted to the DDCC resource instance. The following example JavaScript code can serve as a starting point:

```js
// This example loads an ELM file and vaccination records and evaluates
// the ELM against each record

const { argv, exit } = require('process');
const fs = require('fs');
const cql = require('cql-execution');
const cqlfhir = require('cql-exec-fhir');

if (argv.length < 4) {
  console.log(`Usage: ${argv[0]} ${argv[1]} <ELM-file> <vaccination-record>...`);
  exit();
}

const elmFile = argv[2];
const recordFiles = argv.slice(3);

// Load the ELM and set up the execution environment
const elm = JSON.parse(fs.readFileSync(elmFile), 'utf8');
const library = new cql.Library(elm);
const executor = new cql.Executor(library);

// Load all the vaccination records
const patientSource = cqlfhir.PatientSource.FHIRv401();
const records = recordFiles.map(filename => JSON.parse(fs.readFileSync(filename, 'utf8')));
patientSource.loadBundles(records);

// Execute the business rules against the records and show the results
const results = executor.exec(patientSource);
console.log(results);
```

This code can be run to execute the business rules against the resource using the following command:

```bash
node main.js DDCCPassELM.json example-00-a-DDCC.json
```

Running the script should produce results that look similar to this:

```bash
Results {
  patientResults: {
    "ac1efa5f-9a92-48be-95a1-0550f18a349c": {
      Patient: [FHIRObject],
      'Completed Immunizations': [Array],
      'Completed Immunization': true
    }
  },
  unfilteredResults: {},
  localIdPatientResultsMap: { 'ac1efa5f-9a92-48be-95a1-0550f18a349c': { DDCCPass: {} } },
  patientEvaluatedRecords: {
    'ac1efa5f-9a92-48be-95a1-0550f18a349c': [ [FHIRObject], [FHIRObject] ]
  }
}
```
