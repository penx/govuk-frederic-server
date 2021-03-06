const express = require('express');
const config = require('config');
const helmet = require('helmet');

const logger = require('./logger');

const routes = require('./routes');
const static = require('./static');

function initialise(app) {
  // TODO: auth middleware, static assets, React routes
  app.use(helmet())
  static(app)
  // middleware(app)
  routes(app)
}

// const middleware = require('./middleware');
function init() {
  let app;
  try {
    logger.info(`creating express app`);
    app = express()
    logger.info(`initialising`);
    initialise(app)
    const port = config.get('internalPort');
    logger.info(`starting on ${port}`);
    app.listen(port)
    logger.info(`running on ${port}`);
  } catch (e) {
    try {
      // TODO: for some reason this logs 'undefined' wheras console.log doesn't
      logger.error(e)
      console.log(e)
    } catch (errorWhileLogging) {
      // This is not expected and is a fall back to error logging, as such is the only place we are using console.
      /* eslint-disable-next-line no-console */
      console.error(e)
      /* eslint-disable-next-line no-console */
      console.error('Error when trying to log previous error')
      /* eslint-disable-next-line no-console */
      console.error(errorWhileLogging)
    }
  }
  return app;

}

module.exports = init;
