require('dotenv').config();

const Hapi = require('@hapi/hapi');

const Database = require('./conf/Database');

// authentication
const authentication = require('./api/authentication');
const AuthenticationService = require('./services/mysql/AuthenticationService');
const AuthenticationValidator = require('./validator/authentication');

// products
const products = require('./api/products');
const ProductsService = require('./services/mysql/ProductsService');
const ProductsValidator = require('./validator/products');

const init = async () => {
 const database = new Database();
 const authenticationService = new AuthenticationService(database);
 const productsService = new ProductsService(database);

 const server = Hapi.server({
  host: process.env.HOST,
  port: process.env.PORT,
  routes: {
   cors: {
    origin: ['*'],
   },
  },
 });

 // register internal plugins
 await server.register([
  {
   plugin: authentication,
   options: {
    service: authenticationService,
    validator: AuthenticationValidator,
   },
  },
  {
   plugin: products,
   options: {
    service: productsService,
    validator: ProductsValidator,
   },
  },
 ]);

 server.route({
  method: 'GET',
  path: '/',
  handler: () => ({
   name: 'Ar-Kun',
  }),
 });

 // extension
 server.ext('onPreResponse', (request, h) => {
  const { response } = request;

  if (response instanceof ClientError) {
   const newResponse = h.response({
    status: 'fail',
    message: response.message,
   });
   newResponse.code(response.statusCode);
   return newResponse;
  }

  console.log(response);

  return h.continue;
 });

 await server.start();
 console.log(`Server running at ${server.info.uri}`);
};

init();
