const versionRouteHandler = require('./routes/version')
const appRoute = require('./routes/app')

function routes(app) {
  // TODO: only enable version route if specified in app config
  app.get('/version', versionRouteHandler);
  app.get('*', appRoute);

}

module.exports = routes
