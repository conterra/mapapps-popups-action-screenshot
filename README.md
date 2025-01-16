# Popups Action Screenshot
This bundle adds a new action to save popup contents to a file.

## Build Status
[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-popups-action-screenshot/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-popups-action-screenshot/actions/workflows/devnet-bundle-snapshot.yml)

![Screenshot App](https://github.com/conterra/mapapps-popups-action-screenshot/blob/main/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popupsactionsscreenshot/index.html

## Installation Guide

**Requirement: map.apps 4.11.0**

[dn_popups-action-screenshot Documentation](https://github.com/conterra/mapapps-popups-action-screenshot/tree/master/src/main/js/bundles/dn_popups-action-screenshot)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
