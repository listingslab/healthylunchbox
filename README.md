# Healthy Lunch Box vs 3.1.0

Developed by usTwo for the Cancer Council, January 2017. This is a React Applicaition
(/src) which compiles into a standalone HTML folder called build. This build folder is
currently rsynced to an AWS server where it is accessed from it's url
http://beta.healthylunchbox.com.au

### Beta Login

cc : healthy

The app connects to a WordPress installation on another subdomain http://api.healthylunchbox.com.au/
to get its content via WordPress's native JSON API support.

### WordPress Logins

admin : (please ask)

editor : (please ask)

The WordPress install folder is in /api, but you'll need to ask Hooch (Chris Langlands <hooch@ustwo.com>)
to dump an up to date DB for you for you if you wish to set up a local version. When you're done, run ```npm run build``` to create the build and rsync it to your server.

For any other info, contact listingslab@gmail.com

## CSS (scss)
Styling for the various react components and templates has been split out into the same folders as the React code they relate to, but there are a few other files to look out for.

```/src/containers/App.scss```

This file can be used to apply styles application wide. It's a useful place for responsiveness related styling.

```/src/templates/HeathlyLunchbox/HLB.scss```

This file controls the style for all of the lunchbox builder screens.

## API
The react application uses some custom WordPress API endpoints to retrieve data. The php for this
can be found in the theme - /api/wordpress/wp-content/themes/listingslab-react.

### Endpoint examples
http://api.healthylunchbox.com.au/wp-json/hlbapi/hello

http://api.healthylunchbox.com.au/wp-json/hlbapi/app

http://api.healthylunchbox.com.au/wp-json/hlbapi/item/tabbouleh

### Global JavaScript variables
There are two global variables used in the React app. Firstly 'editor' (Boolean) which turns the edit buttons on or off. The second is called cms & is the global information store where the data loaded from the API are stored.

These are initialised in /public/index.html

## Developer Installation
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

```apm install linter-stylelint```

### rsync commands for uploading to the AWS

Ask hooch to hook you up with the correct access for this to work.

To upload latest build

```
rsync -avz --delete /<your-path>/healthy-lunch-box/build/ ec2-user@beta.healthylunchbox.com.au:/var/www/html/healthylunchbox.com.au/
```

To upload latest WordPress API

```
rsync -avz /<your-path>/healthy-lunch-box/api/wordpress/ ec2-user@beta.healthylunchbox.com.au:/var/www/html/api.healthylunchbox.com.au/
```

### NPM Scripts

```npm start```
Runs webpack-dev-server with hot reload

```npm run build```
Creates production ready application into /build folder

```npm run elint```
Run & Summarise the linting process

```npm run slint```
Run the style lint process
