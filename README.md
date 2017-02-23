# BASTA! Spring 2017 Node.js with TypeScript

Slides for this talk are on [SpeakerDeck](https://speakerdeck.com/manuelrauber/web-apis-mit-node-dot-js-und-typescript-fur-net-entwickler).

Very simple sample for Node.js Web API bootstrapping with restify using TypeScript.

## Setup

Run `npm i` or `yarn` to install all dependencies. Then run `npm start` to start.

## Routes 

Routes can be found in the controllers, as well as the needed parameters.

* [Customer](https://github.com/thinktecture/basta-spring-2017-nodejs-typescript-demo/blob/master/src/api/controllers/customer.ts#L9)
* [Bill](https://github.com/thinktecture/basta-spring-2017-nodejs-typescript-demo/blob/master/src/api/controllers/bill.ts)

## Resources

* [restify](http://restify.com/) Used for Web API hosting.
* [restify-cors](https://github.com/ManuelRauber/restify-cors) An actually working middleware for handling cors in restify.
* [SequelizeJS](http://sequelizejs.com) Used to provide an ORM accessing the PostgreSQL database. 
* [ts-node](https://github.com/TypeStrong/ts-node) Used to run the TypeScript API directly from the npm scripts.
