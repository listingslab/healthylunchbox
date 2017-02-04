# Healthy Lunch Box

Developed by usTwo for the Cancer Council, January 2017. This is a React Applicaition
(/src) which compiles into a standalone HTML folder called build. This build folder is
currently rsynced to an AWS server where it is accessed from it's url
http://beta.healthylunchbox.com.au

The app connects to a WordPress installation on another subdomain http://api.healthylunchbox.com.au/
to get its content via WordPress's native JSON API support.

### WordPress Logins

admin : healthy (admin user)

editor : lunchbox (editor role)

The WordPress install folder is in /api, but you'll need to ask Hooch (Chris Langlands <hooch@ustwo.com>)
to dump an up to date DB for you for you if you wish to set up a local version. When you're done, run ```npm run build``` to create the build and rsync it to your server.

For any other info, contact listingslab@gmail.com

## Installation
Developers will need to be invited to collaborate on this private GitHub repo. Ask Petch or Hooch

cd to your working directory (ours is ~/node) and run the following. Clone the directory,
which uses a GitFlow methodology. Checkout both master and develop branches but DO NOT
develop into them. Create a feature. Develop that. Once it's done, merge into develop.

```
git clone git@github.com:ustwo/healthy-lunch-box.git
npm install
npm start
```

Basta. That's it. You should be running a local dev environment using webpack devserver. Your App is viewable on http://localhost:8080.

## Tech Stack

A React frontend designed to consume a WordPress REST-API backend service found here:
[healthylunchbox.com.au](http://api.healthylunchbox.com.au/).

This is a complete Webpack build development environment which enables fast in-editor pre-testing of our React app against lint rules for both JavaScript and SCSS and enables multi-device testing while we develop and compile the app.

### Using Atom editor?

Install IDE linting. It's proper helpful

```apm install linter-eslint```
&
```apm install linter-stylelint```

### rsync commands for uploading to the AWS

```rsync -avz /Users/listingslab/node/healthy-lunch-box/build/ ec2-user@beta.healthylunchbox.com.au:/var/www/html/healthylunchbox.com.au/```

```rsync -avz /Users/listingslab/node/healthy-lunch-box/api/wordpress/ ec2-user@beta.healthylunchbox.com.au:/var/www/html/api.healthylunchbox.com.au/```

```rsync -avz /Users/listingslab/node/healthy-lunch-box/api/wordpress/wp-content/themes/ ec2-user@beta.healthylunchbox.com.au:/var/www/html/api.healthylunchbox.com.au/wp-content/themes/```

### NPM Scripts

```npm start```
Runs webpack-dev-server with hot reload

```npm run build```
Creates production ready application into /build folder

```npm run elint```
Run & Summarise the linting process

```npm run slint```
Run the style lint process
