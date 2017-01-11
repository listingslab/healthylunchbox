# Dive

## Stack Overview
A complete Webpack, lint & Browsersync environment which enables fast in-editor pre-testing of our React app against lint rules and enables multi-device testing while we develop and compile our app. In addition a Mocha, Chai & Enzyme setup for BDD testing.

## NPM Scripts

### start
Runs webpack-dev-server with hot reload

### build
Creates production ready application into /build folder

### lint
Runs the browsersync linting process

### elint
Runs the linting process

### elintsummary
Summarise the linting process

### elinttable
Summarise the linting process as a nice, easy to read table

### profile
Profiles the webpack distribution bundle for analysis

#### More Info
Using Atom editor? Install IDE linting. It's proper helpful

```apm install linter-eslint```
&
```apm install linter-stylelint```
