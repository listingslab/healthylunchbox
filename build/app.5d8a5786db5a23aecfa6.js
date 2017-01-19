webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),l=n(28),u=n(166),i=n(229),c=n(234),f=n(255),s=r(f),d=n(256);r(d);n(262);var p=n(271),m=r(p),b=n(273),y=r(b),h=[s.default],E=(0,c.createStore)(m.default,c.applyMiddleware.apply(void 0,h)),v=(0,i.syncHistoryWithStore)(u.browserHistory,E);(0,l.render)(a.default.createElement(y.default,{store:E,history:v}),document.getElementById("root"))},262:function(e,t){},271:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(234),a=n(229),l=n(272),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments[1];switch(t.type){case l.SELECT_REDDIT:return t.reddit;default:return e}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments[1];switch(t.type){case l.INVALIDATE_REDDIT:return Object.assign({},e,{didInvalidate:!0});case l.REQUEST_POSTS:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case l.RECEIVE_POSTS:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case l.INVALIDATE_REDDIT:case l.RECEIVE_POSTS:case l.REQUEST_POSTS:return Object.assign({},e,r({},t.reddit,i(e[t.reddit],t)));default:return e}},f=(0,o.combineReducers)({postsByReddit:c,selectedReddit:u,routing:a.routerReducer});t.default=f},272:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.REQUEST_POSTS="REQUEST_POSTS",r=t.RECEIVE_POSTS="RECEIVE_POSTS",o=t.SELECT_REDDIT="SELECT_REDDIT",a=t.INVALIDATE_REDDIT="INVALIDATE_REDDIT",l=(t.selectReddit=function(e){return{type:o,reddit:e}},t.invalidateReddit=function(e){return{type:a,reddit:e}},t.requestPosts=function(e){return{type:n,reddit:e}}),u=t.receivePosts=function(e,t){return{type:r,reddit:e,posts:t.data.children.map(function(e){return e.data}),receivedAt:Date.now()}},i=function(e){return function(t){return t(l(e)),fetch("https://www.reddit.com/r/"+String(e)+".json").then(function(e){return e.json()}).then(function(n){return t(u(e,n))})}},c=function(e,t){var n=e.postsByReddit[t];return!n||!n.isFetching&&n.didInvalidate};t.fetchPostsIfNeeded=function(e){return function(t,n){if(c(n(),e))return t(i(e))}}},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),l=n(274),u=n(166),i=n(289),c=r(i),f=function(e){var t=e.store,n=e.history;return a.default.createElement(l.Provider,{store:t},a.default.createElement("div",null,a.default.createElement(u.Router,{history:n,routes:c.default})))};f.propTypes={store:o.PropTypes.object.isRequired,history:o.PropTypes.object.isRequired},t.default=f},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),l=n(166),u=n(290),i=r(u),c=n(543),f=r(c),s=n(544),d=r(s),p=n(545),m=r(p),b=n(547),y=r(b),h=n(548),E=r(h),v=n(549),_=r(v),g=a.default.createElement(l.Router,null,a.default.createElement(l.Route,{path:"/",component:i.default},a.default.createElement(l.IndexRoute,{component:m.default}),a.default.createElement(l.Route,{path:"/builder",component:d.default}),a.default.createElement(l.Route,{path:"/about",component:f.default}),a.default.createElement(l.Route,{path:"/tips",component:E.default}),a.default.createElement(l.Route,{path:"/recipes",component:_.default}),a.default.createElement(l.Route,{path:"*",component:y.default})));t.default=g},290:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(291),s=n(274),d=n(166),p=n(541),m=r(p),b=n(542),y=r(b),h=function(e){function t(){var e,n,r,l;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleChange=function(e){d.browserHistory.push("/"+String(e))},l=n,a(r,l)}return l(t,e),u(t,[{key:"componentWillMount",value:function(){function e(){}return e}()},{key:"render",value:function(){function e(){var e="Page not found";switch(this.props.location.pathname){case"/":e="Home";break;case"/builder":e="Builder";break;case"/recipes":e="Recipes & Ideas";break;case"/tips":e="Tips";break;case"/about":e="About";break;case"/featured":e="Featured Content";break;default:e="Page not found :("}var t=this.props.children,n=!1;return c.default.createElement("div",null,c.default.createElement(m.default,null),c.default.createElement("div",{className:"container"},t),c.default.createElement(y.default,null),c.default.createElement(f.Modal,{show:n},c.default.createElement(f.Modal.Header,{closeButton:!0},c.default.createElement(f.Modal.Title,null,"Modal heading"))))}return e}()}]),t}(i.Component);h.propTypes={location:i.PropTypes.any,children:i.PropTypes.any};var E=function(){return{}};t.default=(0,s.connect)(E,{})(h)},541:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return l.default.createElement(u.Navbar,null,l.default.createElement(u.Navbar.Header,null,l.default.createElement(u.Navbar.Brand,null,l.default.createElement(i.Link,{to:"/"},l.default.createElement("img",{className:"cc_logo",alt:"Cancer Council NSW Logo",src:"/img/daffodil.png",height:"45"}))),l.default.createElement(u.Navbar.Toggle,null)),l.default.createElement(u.Navbar.Collapse,null,l.default.createElement("ul",{className:"nav navbar-nav"},l.default.createElement("li",null,l.default.createElement(i.Link,{to:"/builder"},"Builder")),l.default.createElement("li",null,l.default.createElement(i.Link,{to:"/recipes"},"Recipes & Ideas")),l.default.createElement("li",null,l.default.createElement(i.Link,{to:"/tips"},"Tips")),l.default.createElement("li",null,l.default.createElement(i.Link,{to:"/about"},"About")))))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=r(a),u=n(291),i=n(166);o.propTypes={},t.default=o},542:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return l.default.createElement("div",{className:"template-footer"},l.default.createElement("div",{className:"container"},l.default.createElement("hr",null),"© Cancer Council NSW 2017",l.default.createElement("br",null),l.default.createElement("small",null,l.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://api.healthylunchbox.com.au/wp-admin"},"WordPress CMS")," vs2.0.4")))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=r(a);t.default=o},543:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(274),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){function e(){return c.default.createElement("div",{className:"template-about"},c.default.createElement("h3",null,"the ",c.default.createElement("em",null,"Eat It To Beat It")," program will give you..."),c.default.createElement("ul",null,c.default.createElement("li",null,"New and exciting ideas for healthy lunch boxes your kids will love"),c.default.createElement("li",null,"A show bag including a great healthy lunch box kit and planner"),c.default.createElement("li",null,"Simple ways to get the whole family eating fruit and veg – if ",c.default.createElement("em",null,"you")," eat healthy your kids are more likely to, too!")),c.default.createElement("p",null,"Eating enough fruit and veg everyday will give your kids the energy and nutrients they need to learn and play, and can help protect them against diseases including some forms of cancer.  This popular 25-minute session is run by Cancer Council NSW."),c.default.createElement("p",null,"Interested in coming to a session? Register your interest by filling visiting ",c.default.createElement("a",{href:"https://www.cancercouncil.com.au/24680/cancer-prevention/diet-exercise/eat-it-to-beat-it-eating-moving/eat-it-to-beat-it-for-health-professionals/about-the-eat-it-to-beat-it-program/contact/?pp=71974&cc=9523&ct=35",target:"_blank"},"this page"),"."),c.default.createElement("p",null,c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/"},c.default.createElement("img",{height:"75",alt:"Eat it to beat it",src:"/img/EatItToBeatIt_trans.png"}))))}return e}()}]),t}(i.Component);s.propTypes={},t.default=(0,f.connect)()(s)},544:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(274),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){function e(){return c.default.createElement("div",{className:"template-builder"})}return e}()}]),t}(i.Component);s.propTypes={},t.default=(0,f.connect)()(s)},545:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(274),s=n(546),d=r(s),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){function e(){return c.default.createElement("div",{className:"template-home"},c.default.createElement(d.default,null),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("p",null,"4 (could be more or less) surfaced featured content tiles"),c.default.createElement("p",null,"Should have 2 break points; two columns wide on a big screen and 1 column wide on an iphone or tablet in portrait mode"))))}return e}()}]),t}(i.Component);p.propTypes={},t.default=(0,f.connect)()(p)},546:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return console.log(e),l.default.createElement("div",{className:"template-jumbotron"},l.default.createElement("div",{className:"jumbotron"},l.default.createElement("h2",null,"Lunchbox builder hero box"),l.default.createElement("p",{className:"lead"},"This is where we put a big advert for the builder and including it's value proposition"),l.default.createElement("p",null,l.default.createElement(u.Link,{className:"btn btn-lg btn-success",to:"/builder"},"Try Lunchbox Builder"))))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=r(a),u=n(166);o.propTypes={},t.default=o},547:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(274),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){function e(){return c.default.createElement("div",{className:"template-notfound"},c.default.createElement("h3",null,"Perhaps searching would help?"),c.default.createElement("form",{name:"search"},c.default.createElement("input",{type:"text",name:"searchterm"}),c.default.createElement("input",{type:"submit",value:"Search"})))}return e}()}]),t}(i.Component);s.propTypes={},t.default=(0,f.connect)()(s)},548:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(274),s=n(166),d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){function e(){return c.default.createElement("div",{className:"template-tips"},c.default.createElement("div",{className:"category-list"},c.default.createElement("h3",null,"Select a Tip category"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/tips/food-safety"},"Food safety")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/tips/freezing-tips"},"Freezing tips")))),c.default.createElement("p",null,c.default.createElement("strong",null,"List of the tip categories.")),c.default.createElement("p",null,"This list will be a series of category tiles showing the tips categories. It should comfortably show 10-20 category tiles comfortably."),c.default.createElement("p",null,"Tiles should have a title, content, image and look good square or as a rectangle."),c.default.createElement("p",null,"Should have 2 break points; two columns wide on a big screen and 1 column wide on an iphone or tablet in portrait mode"))}return e}()}]),t}(i.Component);d.propTypes={},t.default=(0,f.connect)()(d)},549:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(274),s=n(166),d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){function e(){return c.default.createElement("div",{className:"template-recipes"},c.default.createElement("div",{className:"category-list"},c.default.createElement("h3",null,"Select a Recipe category"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/recipes/baking-cakes"},"Baking cakes")),c.default.createElement("li",null,c.default.createElement(s.Link,{to:"/recipes/sandwich-fillings"},"Sandwich fillings")))),c.default.createElement("p",null,c.default.createElement("strong",null,"List of the recipe categories.")),c.default.createElement("p",null,"This list will be a series of category tiles showing the recipe categories. It should comfortably show 10-20 category tiles comfortably."),c.default.createElement("p",null,"Should have 2 break points; two columns wide on a big screen and 1 column wide on an iphone or tablet in portrait mode"))}return e}()}]),t}(i.Component);d.propTypes={},t.default=(0,f.connect)()(d)}});