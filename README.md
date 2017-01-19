# Healthy Lunch Box

## Bootstrap
https://github.com/ustwo/healthy-lunch-box/tree/feature/phase2/src/bootstrap-sass

## Tech Stack Overview

A React frontend designed to consume a WordPress REST-API backend service found here:
[healthylunchbox.com.au](http://api.healthylunchbox.com.au/).

This is a complete Webpack build development environment which enables fast in-editor pre-testing of our React app against lint rules for both JavaScript and SCSS and enables multi-device testing while we develop and compile the app.

### NPM Scripts

#### npm start
Runs webpack-dev-server with hot reload

#### npm run build
Creates production ready application into /build folder

#### npm run elint
Run & Summarise the linting process

#### npm run slint
Run the style lint process

#### More Info
Using Atom editor?
Install IDE linting. It's proper helpful

```apm install linter-eslint```
&
```apm install linter-stylelint```
