const versionRouteHandler = require('./routes/version')

function routes(app) {
  // TODO: only enable version route if specified in app config
  app.get('/version', versionRouteHandler);
}

module.exports = routes
