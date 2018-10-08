const express = require('express');
const config = require('config');
const logger = require('./logger');

const routes = require('./routes');


function initialise(app) {
  // TODO: auth middleware, static assets, React routes
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
      logger.error(e)
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
