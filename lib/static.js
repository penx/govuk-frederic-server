const express = require('express')

function static(app) {
  // TODO: only enable version route if specified in app config
  app.use('/govuk-frederic-example', express.static('node_modules/@govuk-frederic/example/build'));
}

module.exports = static
