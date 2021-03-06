# Popups Action Screenshot
This bundle adds a new action to save popup contents to a file.

## Build Status
[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-popups-action-screenshot/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-popups-action-screenshot/actions/workflows/devnet-bundle-snapshot.yml)

![Screenshot App](https://github.com/conterra/mapapps-popups-action-screenshot/blob/master/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popupsactionsscreenshot/index.html

## Installation Guide

**Requirement: map.apps 4.11.0**

[dn_popups-action-screenshot Documentation](https://github.com/conterra/mapapps-popups-action-screenshot/tree/master/src/main/js/bundles/dn_popups-action-screenshot)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
   `mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
   Change the mapapps.remote.base in the build.properties file and run:
   `mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
