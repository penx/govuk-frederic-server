const express = require('express');
const config = require('config');
const log = require('./log');

// const routes = require('./routes');
// const middleware = require('./middleware');
function init() {
  const app = express()

  function initialise() {
    // TODO: auth middleware, static assets, React routes
    // middleware(app)
    // routes(app)
  }

  try {
    initialise()
    const port = config.get('internalPort');
    app.listen(port)
    log(`running on ${port}`);
  } catch (e) {
    log(e)
  }

}

module.exports = init;
