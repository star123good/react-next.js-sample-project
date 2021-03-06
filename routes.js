const routes = require('next-routes')();

routes.add('/products/:id', '/products/show');

module.exports = routes;